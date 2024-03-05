import chokidar from 'chokidar';
import * as esbuild from 'esbuild';
import { readdir, stat, writeFile, mkdir } from 'fs/promises';
import { Features, bundle } from 'lightningcss';
import { join, dirname } from 'path';
import { WebSocketServer } from 'ws';
import chalk from 'chalk';

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
  console.log(
    chalk.red(
      'No connection with the client. Try refreshing your Ghost site in the browser.',
    ),
  );
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

async function init() {
  const jsEntryPoints = await findEntryPoints('assets/js', ['.ts', '.js']);
  const cssEntryPoints = await findEntryPoints('assets/css', ['.css']);

  try {
    await mkdir('assets/built', { recursive: true });
  } catch (error) {
    console.error(error);
  }

  await writeJs(jsEntryPoints);
  await writeCss(cssEntryPoints);

  if (isWatch) {
    initWs(jsEntryPoints, cssEntryPoints);
  } else {
    console.log(chalk.green('Files built successfully. Exiting...'));
    process.exit(0);
  }
}

async function writeJs(jsEntryPoints) {
  const footerScript = `const socket = new WebSocket('ws://localhost:3000');
socket.addEventListener("open", (event) => {
    const url = window.location.href;
    const title = document.title;
    const version = document.querySelector('meta[name="generator"]').getAttribute("content");
    socket.send(\`Hello from $\{title} \${title} \${version}\`)
});
socket.onmessage = function(event) {
    console.log('Message from server ', event.data);
    if (event.data.includes('changed')) {
      // Reload the page
      console.log(event.data)
      window.location.reload();
    }
};`;

  for (let index = 0; index < jsEntryPoints.length; index++) {
    const element = jsEntryPoints[index];
    const dir = dirname(element).replace('assets/js', 'assets/built');
    const buildOptions = {
      entryPoints: [element],
      bundle: true,
      outdir: dir,
      minify: isWatch ? false : true,
      sourcemap: true,
      metafile: true,
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    };

    if (index === 0 && isWatch) {
      buildOptions.footer = { js: footerScript };
    }

    try {
      const res = await esbuild.build(buildOptions);
      const { inputs, outputs } = res.metafile;
      const i = Object.values(inputs).reduce((acc, val) => {
        return acc + val.bytes;
      }, 0);
      const o = Object.values(outputs)[1].bytes;
      const p = ((i - o) / o) * 100;
      console.log(
        chalk.yellow(
          `\nBuilt ${dir}/index.js (${formatBytes(o)}) @ ${p.toFixed(2)}%`,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }
}

async function writeCss(cssEntryPoints) {
  for (const entryPoint of cssEntryPoints) {
    const dir = dirname(entryPoint).replace('assets/css', 'assets/built');
    try {
      mkdir(dir, { recursive: true });
    } catch (error) {
      console.error(error);
    }

    let { code, map, warnings } = bundle({
      filename: entryPoint,
      minify: isWatch ? false : true,
      sourceMap: true,
      include: Features.Nesting,
    });

    if (warnings.length) {
      for (const warning of warnings) {
        console.warn(warning);
      }
    }

    try {
      await writeFile(`${dir}/index.css`, code.toString());

      console.log(chalk.bgCyan(`Built ${dir}/index.css`));

      await writeFile(`${dir}/index.css.map`, map.toString());
    } catch (error) {
      console.error(error);
    }
  }
}

function initWs(jsEntry, cssEntry) {
  console.log(chalk.bgBlue('\n⚡ Ghost development server started\n'));
  const wss = new WebSocketServer({
    port: 3000,
  });

  let firstConnection = true;

  wss.on('connection', (ws) => {
    clearTimeout(int);

    if (firstConnection) {
      console.log('🔗 Connected to Ghost site\n');
      firstConnection = false;
    }

    ws.on('message', (message) => {
      console.log('Received message: ' + message);
    });

    watcher.on('all', (event, path) => {
      console.log('🚀 ~ chokidar.watch ~ event, path:', event, path);

      if (path.endsWith('.hbs')) {
        console.log('HBS changed: ' + path);
        ws.send('HBS changed: ' + path);
        // Here, you need to notify clients about the change
      }

      if (path.endsWith('.css')) {
        writeCss(cssEntry);
        console.log('CSS changed: ' + path);

        ws.send('File changed: ' + path);
      }

      if (path.endsWith('.js') || path.endsWith('.ts')) {
        console.log('JS changed: ' + path);

        writeJs(jsEntry);
        ws.send('File changed: ' + path);
      }
    });
  });
}

init();
