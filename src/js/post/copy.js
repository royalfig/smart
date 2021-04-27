//-------------------------------------------
// Copy Function
//-------------------------------------------
const copyButton = document.getElementById('sm-copy-button');

export default function copyInit() {
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      const url = window.location.href;
      const temp = document.createElement('input');
      document.body.appendChild(temp);
      temp.value = url;
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    });
  }
}
