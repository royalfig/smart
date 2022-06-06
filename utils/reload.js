const livereload = require('livereload');

const path = require('path');

const server = livereload.createServer({ extraExts: ['hbs'], exclusions: [path.resolve('../src')] });
server.watch(path.resolve('../'));
console.info(`Reload server started. Watching ${path.resolve('../')}`);
