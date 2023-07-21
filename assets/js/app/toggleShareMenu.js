export default function toggleShareMenu() {
  const shareMenu = document.querySelector('.sm-share-menu');
  const shareButton = document.querySelector('.sm-post-share');
  const closeButton = document.querySelector('.sm-share-close');

  shareButton.addEventListener('click', () => {
    shareMenu.showModal();
  });

  closeButton.addEventListener('click', () => {
    shareMenu.close();
  });
}
