export default function toggleShareMenu() {
  const shareButton = document.querySelector('.sm-post-share');
  if (!shareButton) return;
  const shareMenu = document.querySelector('.sm-share-menu');
  const closeButton = document.querySelector('.sm-share-close');

  shareButton.addEventListener('click', () => {
    shareMenu.showModal();
  });

  closeButton.addEventListener('click', () => {
    shareMenu.close();
  });
}
