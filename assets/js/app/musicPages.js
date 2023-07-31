export function createMusicToggle() {
  const musicPages = document.querySelectorAll(".sm-music-page");
  const musicPageToggles = document.querySelectorAll(
    ".sm-music-pager-controls > .sm-circle-icon-button"
  );
  if (musicPages.length === 0) return;

  musicPageToggles.forEach((toggle) => {
    // on each click, remove the active class from one page and add it to the other
    toggle.addEventListener("click", () => {
      musicPages.forEach((page) => {
        page.classList.toggle("sm-music-active");
      });
    });
  });
}

export function playlistFacadeGenerator() {
  const playlistEl = document.querySelector(".sm-music-iframe");

  if (!playlistEl) return;

  const { id } = playlistEl.dataset;

  const observer = new IntersectionObserver(cb);

  function cb(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/videoseries?list=${id}`;
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.frameBorder = 0;

        playlistEl.append(iframe);

        observer.unobserve(playlistEl);
      }
    });
  }

  observer.observe(playlistEl);
}
