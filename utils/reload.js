import { createServer } from 'livereload';

import { resolve } from 'path';

const server = createServer({
  extraExts: ['hbs'],
  exclusions: [resolve('../src')],
});
server.watch(resolve('../'));
console.info(`Reload server started. Watching ${resolve('../')}`);
