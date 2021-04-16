/* Good resource on fs and promises
 https://puruvj.dev/blog/fs-promises
 */

const { writeFile, readFile } = require('fs').promises;

async function injectCss() {
  const template = await readFile('./assets/hbs/default-template.hbs');
  const css = await readFile(
    '/home/ryan/Projects/ghost/content/themes/smart/assets/built/critical.css',
  );

  const inlinedCss = template
    .toString()
    .replace('{{!-- critical-css --}}', `<style>${css.toString()}</style>`);
  writeFile('./default.hbs', inlinedCss.toString());
  // eslint-disable-next-line no-console
  console.log('🥳 Inlined critical css');
}

injectCss();
