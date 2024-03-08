/* eslint-disable no-console */
import chokidar from 'chokidar';
import * as esbuild from 'esbuild';
import { readdir, stat, writeFile, mkdir } from 'fs/promises';
import { join, dirname, extname } from 'path';
import WebSocket, { WebSocketServer } from 'ws';
import chalk from 'chalk';
import { execSync } from 'child_process';

function runCommand(command) {
  try {
    const output = execSync(command).toString();
    return output;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Example usage
const result = runCommand('ghost ls');
const url = result.match(/http:\/\/localhost:\d+/g)[0];

import { argv } from 'node:process';

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    'Bytes',
    'KiB',
    'MiB',
    'GiB',
    'TiB',
    'PiB',
    'EiB',
    'ZiB',
    'YiB',
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const isWatch = argv.includes('--watch');

const int = setTimeout(() => {
  console.clear();
  printHeader(true);
}, 5000);

const watcher = chokidar.watch('.', {
  ignored: [/(^|[\/\\])\../, '**/built/**', 'dev.js', 'node_modules'], // ignore dotfiles
});

async function findFilesRecursively(directory) {
  const files = [];

  async function traverseDirectory(dir) {
    const entries = await readdir(dir);

    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const fileStat = await stat(fullPath);

      if (fileStat.isDirectory()) {
        await traverseDirectory(fullPath);
      } else {
        files.push(fullPath);
      }
    }
  }

  await traverseDirectory(directory);
  return files;
}

async function findEntryPoints(entryPointPath, exts) {
  const directory = entryPointPath;

  try {
    const files = await findFilesRecursively(directory);
    const entryPoints = files.filter(
      (file) =>
        file.includes('index') && exts.some((ext) => file.endsWith(ext)),
    );
    return entryPoints;
  } catch (error) {
    console.error(error);
  }
}

function printCompilationDetails(content, change, firstTime = false) {
  if (firstTime) {
    console.log(chalk.dim(`┏━ Building...`));
    console.log(chalk.dim('┃'));
  } else {
    console.log(chalk.dim(`┏━ Change detected. Rebuilding... `));
    console.log(chalk.dim('┃'));
  }

  content.results.forEach(({ file, value }) => {
    console.log(
      chalk.dim(`┃`),
      ` ${
        change ? change + chalk.bold.magenta(' → ') : ''
      }${file} (${chalk.bold.magenta(value)})`,
    );
  });
  console.log(chalk.dim('┃'));
  console.log(
    `${chalk.dim('┗━ Done in')} ${content.time.toFixed(2)}ms ${chalk.dim(
      'at',
    )} ${new Date().toLocaleTimeString(undefined, 'short')}\n`,
  );
}

async function init() {
  const jsEntryPoints = await findEntryPoints('assets/js', ['.ts', '.js']);
  const cssEntryPoints = await findEntryPoints('assets/css', ['.css']);
  const res = await writeAssets([...jsEntryPoints, ...cssEntryPoints]);

  if (isWatch) {
    initWs(jsEntryPoints, cssEntryPoints, res);
  } else {
    printCompilationDetails(res);
    console.log(chalk.green('⬥'), '  Files built successfully. Exiting...');
    process.exit(0);
  }
}

const tree = new Map();

async function writeAssets(jsEntryPoints) {
  const start = performance.now();
  const footerScript = `const socket = new WebSocket('ws://localhost:3000');
  socket.addEventListener("open", (event) => {
      const url = window.location.href;
      const title = document.title;
      const version = document.querySelector('meta[name="generator"]').getAttribute("content");
      const msg = JSON.stringify({url, title, version});
      socket.send(msg)
  });
  socket.onmessage = function(event) {
      console.log('Message from server ', event.data);
      if (event.data.includes('changed')) {
        // Reload the page
        console.log(event.data)
        window.location.reload();
      }
  };`;

  const buildOptions = {
    entryPoints: jsEntryPoints,
    bundle: true,
    outbase: 'assets',
    outdir: 'assets/built',
    minify: !isWatch,
    sourcemap: true,
    metafile: true,
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    external: ['*.woff', '*.woff2'],
  };

  let results = [];

  for await (const entry of jsEntryPoints) {
    const buildOptionsClone = { ...buildOptions };
    buildOptionsClone.entryPoints = [entry];

    if (isWatch && entry.includes('assets/js/index')) {
      buildOptionsClone.footer = {
        js: footerScript,
      };
    }

    const res = await esbuild.build(buildOptionsClone);

    Object.keys(res.metafile.inputs).forEach((input) => {
      tree.set(input, entry);
    });

    const vals = Object.entries(res.metafile.outputs).reduce(
      (acc, [key, value]) => {
        if (key.includes('map')) {
          return acc;
        }
        acc.push({ file: key, value: formatBytes(value.bytes) });
        return acc;
      },
      [],
    );

    results.push(...vals);
  }

  const end = performance.now();
  return { results, time: end - start };
}
let siteData = false;

function printHeader(connectionError = false, firstConnection = false) {
  console.clear();
  console.log(`${chalk.bold.green('●')}  Ghost theme dev server running...`);

  if (connectionError) {
    console.log(
      chalk.redBright.bold('✘  No connection. '),
      `Try refreshing your browser or visiting ${chalk.underline.blue(url)}.`,
    );
  } else if (firstConnection) {
    console.log(
      chalk.blueBright.bold('➜'),
      ` Connected to ${chalk.underline.blue(url)}.`,
    );
  } else if (siteData.version) {
    console.log(
      chalk.blueBright.bold('➜'),
      ` Connected to ${chalk.underline.blue(siteData.url)} ${chalk.dim(
        `(${siteData.version})`,
      )}`,
    );
  } else {
    console.log(
      chalk.blueBright.bold('➜'),
      ` Visit ${chalk.underline.blue(url)} to see your changes live.`,
    );
  }
  console.log('');
}
async function initWs(jsEntry, cssEntry, res) {
  printHeader();
  printCompilationDetails(res, null, true);

  // await open(url);
  const wss = new WebSocketServer({
    port: 3000,
  });

  let firstConnection = true;

  watcher.on('all', async (event, path) => {
    if (path.endsWith('.hbs')) {
      console.log(path);
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send('HBS changed: ' + path);
        }
      });

      // Here, you need to notify clients about the change
    }

    if (path.endsWith('.css') || path.endsWith('.js') || path.endsWith('.ts')) {
      let rootFile = path;

      if (!/index\.(css|js|ts)$/.test(path)) {
        rootFile = tree.get(path);
      }

      const res = await writeAssets([rootFile]);

      printHeader(false, false);
      printCompilationDetails(res, path);

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(`File changed: ${path}`);
        }
      });
    }
  });

  wss.on('connection', (ws) => {
    clearTimeout(int);

    if (firstConnection) {
      printHeader(false, true);
      firstConnection = false;
    }

    ws.on('message', (message) => {
      const { url, title, version } = JSON.parse(message);
      siteData = { url, title, version };
    });
  });
}

init();
