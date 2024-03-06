export default function toggleShareMenu() {
  const shareButton = document.querySelector('.sm-post-share');
  if (!shareButton) return;
  const shareMenu = document.querySelector('.sm-share-menu');
  const closeButton = document.querySelector('.sm-share-close');

  shareButton.addEventListener('click', (e) => {
    if (document.documentElement.clientWidth < 500 && navigator.share) {
      const { title, url } = e.target.dataset;

      try {
        navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      shareMenu.showModal();
    }
  });

  closeButton.addEventListener('click', () => {
    shareMenu.close();
  });
}
