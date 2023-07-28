export default function createMusicToggle() {
  const musicPages = document.querySelectorAll('.sm-music-page');
  const musicPageToggles = document.querySelectorAll(
    '.sm-music-pager-controls > .sm-circle-icon-button',
  );
  if (musicPages.length === 0) return;

  musicPageToggles.forEach((toggle) => {
    // on each click, remove the active class from one page and add it to the other
    toggle.addEventListener('click', () => {
      musicPages.forEach((page) => {
        page.classList.toggle('sm-music-active');
      });
    });
  });
}
