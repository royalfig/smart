function updateCopyButtonState() {
  const copyButtons = document.querySelectorAll('.sm-copy-button');
  copyButtons.forEach((el) => {
    el.classList.toggle('sm-copy-button--copied');
    setTimeout(() => {
      el.classList.toggle('sm-copy-button--copied');
    }, 3000);
  });
}
export default async function copyToClipboard() {
  const currentURL = window.location.href;
  await navigator.clipboard.writeText(currentURL);
  updateCopyButtonState();
}
