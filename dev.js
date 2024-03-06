import chokidar from 'chokidar';
import * as esbuild from 'esbuild';
import { readdir, stat, writeFile, mkdir } from 'fs/promises';
import { Features, bundle } from 'lightningcss';
import { join, dirname, extname } from 'path';
import WebSocket, { WebSocketServer } from 'ws';
import chalk from 'chalk';
import open from 'open';
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

function outputFileWrite(content, firstTime = false) {
  if (firstTime) {
    console.log(chalk.dim(`┏━`), ' Compiling...');
    console.log(chalk.dim('┃'));
  } else {
    console.log(chalk.dim(`┏━`), ' Recompiling...');
    console.log(chalk.dim('┃'));
  }

  content.results.forEach(({ file, value }) => {
    console.log(chalk.dim(`┃  ${file} (${chalk.bold.magenta(value)})`));
  });
  console.log(chalk.dim('┃'));
  console.log(`${chalk.dim('┗━')}  ${content.time.toFixed(2)}ms\n`);
}

async function init() {
  const jsEntryPoints = await findEntryPoints('assets/js', ['.ts', '.js']);
  const cssEntryPoints = await findEntryPoints('assets/css', ['.css']);
  const res = await writeAssets([...jsEntryPoints, ...cssEntryPoints]);

  if (isWatch) {
    initWs(jsEntryPoints, cssEntryPoints, res);
  } else {
    outputFileWrite(res);
    console.log(chalk.green('⬥'), '  Files built successfully. Exiting...');
    process.exit(0);
  }
}

async function writeAssets(jsEntryPoints) {
  const start = performance.now();
  const footerScript = `if (!WebSocket.readyState){ const socket = new WebSocket('ws://localhost:3000');
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
  };}`;

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

  // for (let index = 0; index < jsEntryPoints.length; index++) {
  //     const element = jsEntryPoints[index];
  //     const dir = dirname(element).replace("assets/js", "assets/built");
  //     const buildOptions = {
  //         entryPoints: [element],
  //         bundle: true,
  //         outdir: dir,
  //         minify: isWatch ? false : true,
  //         sourcemap: true,
  //         metafile: true,
  //         target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
  //     };

  //     if (index === 0 && isWatch) {
  //         buildOptions.footer = { js: footerScript };
  //     }

  //     try {
  //         const res = await esbuild.build(buildOptions);
  //         const { inputs, outputs } = res.metafile;
  //         const i = Object.values(inputs).reduce((acc, val) => {
  //             return acc + val.bytes;
  //         }, 0);
  //         const o = Object.values(outputs)[1].bytes;
  //         const p = ((i - o) / o) * 100;
  //         console.log(
  //             chalk.yellow(
  //                 `\nBuilt ${dir}/index.js (${formatBytes(o)}) @ ${p.toFixed(
  //                     2
  //                 )}%`
  //             )
  //         );
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
}
let siteData = false;

function printHeader(connectionError = false, firstConnection = false) {
  console.clear();
  console.log(`${chalk.bold.green('✔︎')}  Ghost dev server running...`);

  if (connectionError) {
    console.log(
      chalk.redBright.bold('✘  No connection. '),
      `Try refreshing your browser or visiting ${chalk.underline.blue(url)}.`,
    );
  } else if (firstConnection) {
    console.log(
      chalk.blueBright.bold('▶'),
      ` Connected to ${chalk.underline.blue(url)}.`,
    );
  } else if (siteData.version) {
    console.log(
      chalk.blueBright.bold('▶'),
      ` Connected to ${chalk.underline.blue(siteData.url)} ${chalk.dim('on')} ${
        siteData.version
      }.`,
    );
  } else {
    console.log(
      chalk.blueBright.bold('▶'),
      ` Visit ${chalk.underline.blue(url)} to see your changes live.`,
    );
  }
  console.log('');
}
async function initWs(jsEntry, cssEntry, res) {
  printHeader();
  outputFileWrite(res, true);

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
      console.log(path + ' changed');

      let rootFile = path;

      if (!/index\.(css|js|ts)$/.test(path)) {
        const dir = dirname(path);
        const ext = extname(path);
        rootFile = `./${dir}/index${ext}`;
      }

      const res = await writeAssets([rootFile]);

      printHeader(false, false);
      outputFileWrite(res);

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
