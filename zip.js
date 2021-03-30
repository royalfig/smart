const AdmZip = require('adm-zip');
const path = require('path');

const zip = new AdmZip();

zip.addLocalFolder(path.join(__dirname, 'assets'), '/assets');
zip.addLocalFolder(path.join(__dirname, 'partials'), '/partials');
zip.addLocalFile(path.join(__dirname, 'author.hbs'));
zip.addLocalFile(path.join(__dirname, 'default.hbs'));
zip.addLocalFile(path.join(__dirname, 'error-404.hbs'));
zip.addLocalFile(path.join(__dirname, 'home.hbs'));
zip.addLocalFile(path.join(__dirname, 'index.hbs'));
zip.addLocalFile(path.join(__dirname, 'package.json'));
zip.addLocalFile(path.join(__dirname, 'page-tags.hbs'));
zip.addLocalFile(path.join(__dirname, 'page.hbs'));
zip.addLocalFile(path.join(__dirname, 'post.hbs'));
zip.addLocalFile(path.join(__dirname, 'post.hbs'));
zip.addLocalFile(path.join(__dirname, 'tag.hbs'));

zip.writeZip(path.join(__dirname, 'smart.zip'));
