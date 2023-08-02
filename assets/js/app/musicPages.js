export function createMusicToggle() {
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

export function createPlaylist() {
  console.log('createPlaylist');
  let nIntervId;
  let currentPlayingSongIndex;

  const playlistContainer = document.querySelector('.sm-music-grid');

  if (!playlistContainer) return;

  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';

  const buttons = document.querySelectorAll('.sm-playlist-item');

  document.head.append(tag);

  window.onYouTubeIframeAPIReady = function () {
    console.log('hi');
    const player = new YT.Player('player', {
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

    console.log(player);
    function onPlayerReady() {
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          player.playVideoAt(button.dataset.idx);
        });
      });
    }

    function showSongProgress() {
      const currentSongIndex = player.getPlaylistIndex();
      currentPlayingSongIndex = currentSongIndex;
      const currentSong = document.querySelector(
        `button[data-idx="${currentPlayingSongIndex}"]`,
      );
      const ratio = player.getCurrentTime() / player.getDuration();
      currentSong.style.background = `linear-gradient(to right, hsl(var(--color-1) / .2) ${
        ratio * 100
      }%, transparent ${ratio * 100}%)`;
    }

    function onPlayerStateChange(event) {
      if (event.data === 2) {
        clearInterval(nIntervId);
        nIntervId = null;

        const currentSong = document.querySelector(
          `button[data-idx="${currentPlayingSongIndex}"]`,
        );
        currentSong.style.background = 'transparent';
        playlistContainer.classList.remove('sm-playing');
        playlistContainer.style.setProperty('--bg', '');
      } else if (event.data === 1) {
        if (nIntervId) {
          clearInterval(nIntervId);
          nIntervId = null;
        }

        const currentSong = document.querySelector(
          `button[data-idx="${player.getPlaylistIndex()}"]`,
        );
        console.log(
          '🚀 ~ file: musicPages.js:91 ~ onPlayerStateChange ~ currentSong:',
          currentSong,
        );
        const { imageSrc } = currentSong.dataset;
        console.log(
          '🚀 ~ file: musicPages.js:96 ~ onPlayerStateChange ~ imgSrc:',
          imageSrc,
        );
        playlistContainer.style.setProperty('--bg', `url(${imageSrc})`);
        playlistContainer.classList.add('sm-playing');
        nIntervId = setInterval(showSongProgress, 800);
      } else {
        clearInterval(nIntervId);
        nIntervId = null;
      }
    }
  };
}
