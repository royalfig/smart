const toast = require('./toast');

const copyButtons = document.querySelectorAll('.sm-post-share-bar__link--copy');

export default function copyInit() {
  if (copyButtons.length) {
    copyButtons.forEach((el) => {
      el.addEventListener('click', () => {
        const url = window.location.href;
        const temp = document.createElement('input');
        document.body.appendChild(temp);
        temp.value = url;
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        toast('Link copied to clipboard');
      });
    });
  }
}
