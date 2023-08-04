export function createMusicToggle() {
  const musicPages = document.querySelectorAll('.sm-playlist-page');
  const musicPageToggles = document.querySelectorAll(
    '.sm-playlist-pager-controls > .sm-circle-icon-button',
  );
  if (musicPages.length === 0) return;

  musicPageToggles.forEach((toggle) => {
    // on each click, remove the active class from one page and add it to the other
    toggle.addEventListener('click', () => {
      musicPages.forEach((page) => {
        page.classList.toggle('sm-playlist-active');
      });
    });
  });
}

export function createPlaylist() {
  let nIntervId;
  let prevSong;

  const playlistContainer = document.querySelector('.sm-playlist-grid');
  if (!playlistContainer) return;
  const progressBar = document.querySelector('#progress');
  const startTime = document.querySelector('.sm-start-time');
  const nowPlaying = document.querySelector('.sm-playlist-now-playing');
  const coverArtcontainer = document.querySelector('.sm-playlist-cover-art');
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';

  const buttons = document.querySelectorAll('.sm-playlist-item');

  document.head.append(tag);

  function playlistController() {
    const player = new window.YT.Player('player', {
      height: '360',
      width: '640',
      playerVars: {
        modestbranding: 1,
        enablejsapi: 1,
        list: 'PLnPe3mrvTpEzNINsV2kNqY_LTeNkdprdL',
        listType: 'playlist',
      },

      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });

    function onPlayerReady() {
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          player.playVideoAt(button.dataset.idx);
        });
      });

      const playlistControlButtons = document.querySelectorAll(
        '.sm-playlist-button',
      );

      playlistControlButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const { control } = button.dataset;
          if (control === 'play') {
            player.playVideo();
          } else if (control === 'pause') {
            player.pauseVideo();
          } else if (control === 'next') {
            player.nextVideo();
          } else if (control === 'previous') {
            player.previousVideo();
          }
        });
      });
    }

    function showSongProgress() {
      const currentTime = player.getCurrentTime();
      const ratio = currentTime / player.getDuration();
      console.log(
        '🚀 ~ file: musicPages.js:80 ~ showSongProgress ~ ratio:',
        ratio,
      );
      progressBar.value = ratio * 100;
      startTime.textContent = currentTime;
    }

    function onPlayerStateChange(event) {
      if (event.data === 2) {
        clearInterval(nIntervId);
        nIntervId = null;

        progressBar.value = 0;
        playlistContainer.classList.remove('sm-playing');
        playlistContainer.style.setProperty('--bg', '');
        prevSong.parentElement.classList.remove('sm-active');
      } else if (event.data === 1) {
        if (nIntervId) {
          clearInterval(nIntervId);
          nIntervId = null;
        }

        const currentSong = document.querySelector(
          `button[data-idx="${player.getPlaylistIndex()}"]`,
        );

        const listItem = currentSong.parentElement;
        listItem.classList.add('sm-active');
        listItem.setAttribute('data-marker', '\x025B8');
        const { title, artist } = currentSong.dataset;
        nowPlaying.textContent = `${title} - ${artist}`;
        const { imageSrc } = currentSong.dataset;

        playlistContainer.style.setProperty(
          '--bg',
          `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), linear-gradient(to right, rgb(0 0 0 / 85%), transparent), url(${imageSrc})`,
        );
        playlistContainer.classList.add('sm-playing');
        coverArtcontainer.style.backgroundImage = `url(${imageSrc})`;
        prevSong = currentSong;
        nIntervId = setInterval(showSongProgress, 800);
      } else {
        clearInterval(nIntervId);
        nIntervId = null;
      }
    }
  }

  window.onYouTubeIframeAPIReady = playlistController;
}
