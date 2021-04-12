const AdmZip = require('adm-zip');
const path = require('path');

const zip = new AdmZip();

zip.addLocalFolder(path.join('../assets'), '/assets');
zip.addLocalFolder(path.join('../partials'), '/partials');
zip.addLocalFile(path.join('../author.hbs'));
zip.addLocalFile(path.join('../default.hbs'));
zip.addLocalFile(path.join('../error-404.hbs'));
zip.addLocalFile(path.join('../home.hbs'));
zip.addLocalFile(path.join('../index.hbs'));
zip.addLocalFile(path.join('../package.json'));
zip.addLocalFile(path.join('../page-tags.hbs'));
zip.addLocalFile(path.join('../page.hbs'));
zip.addLocalFile(path.join('../post.hbs'));
zip.addLocalFile(path.join('../post.hbs'));
zip.addLocalFile(path.join('../tag.hbs'));

zip.writeZip('../smart.zip');
// eslint-disable-next-line no-console
console.log('🐶 Zipped this puppy up');
