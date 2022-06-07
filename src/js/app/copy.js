function updateCopyButtonState() {
  const copyButton = document.querySelector('.sm-copy-button');
  const currentState = copyButton.innerHTML;
  copyButton.innerHTML =
    '<svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H6zm2-2h8v4H8V2z"/></svg> Copied ✅';
  setTimeout(() => {
    copyButton.innerHTML = currentState;
  }, 3000);
}
export default async function copyToClipboard() {
  const currentURL = window.location.href;
  await navigator.clipboard.writeText(currentURL);
  updateCopyButtonState();
}
