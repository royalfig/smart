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
  const { playlistId } = playlistContainer.dataset;
  if (!playlistContainer) return;
  const progressBar = document.querySelector('#progress');
  const volumeSlider = document.querySelector('#volume');
  const startTime = document.querySelector('.sm-start-time');
  const nowPlaying = document.querySelector('.sm-playlist-now-playing');
  const endTime = document.querySelector('.sm-end-time');
  const coverArtcontainer = document.querySelector('.sm-playlist-cover-art');
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';

  const buttons = document.querySelectorAll('.sm-playlist-item');

  document.head.append(tag);

  function parseVolume(value) {
    let volume;
    console.log(
      '🚀 ~ file: musicPages.js:39 ~ parseVolume ~ volume:',
      value === 0,
    );

    const valueAsNumber = Number(value);
    if (valueAsNumber === 0) {
      volume = 'muted';
    }

    if (valueAsNumber > 0 && valueAsNumber < 50) {
      volume = 'low';
    }

    if (valueAsNumber >= 50) {
      volume = 'high';
    }

    volumeSlider.parentElement.setAttribute('data-volume', volume);
  }

  function playlistController() {
    const player = new window.YT.Player('player', {
      height: '360',
      width: '640',
      playerVars: {
        modestbranding: 1,
        enablejsapi: 1,
        list: playlistId,
        listType: 'playlist',
      },

      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });

    function onPlayerReady() {
      const initialVolume = player.getVolume();
      parseVolume(initialVolume);
      volumeSlider.value = initialVolume;
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
          } else if (control === 'forward') {
            player.nextVideo();
          } else if (control === 'previous') {
            player.previousVideo();
          }
        });
      });
    }

    progressBar.addEventListener('input', (e) => {
      const ratio = e.target.value / 100;
      const newTime = ratio * player.getDuration();
      player.seekTo(newTime);
    });

    volumeSlider.addEventListener('input', (e) => {
      const newVolume = e.target.value;
      parseVolume(newVolume);
      player.setVolume(newVolume);
    });

    function parseSeconds(elapsed) {
      const minutes = Math.round(Math.floor(elapsed / 60)).toString();

      const seconds = Math.round(elapsed % 60)
        .toString()
        .padStart(2, '0');
      return `${minutes}:${seconds}`;
    }

    function showSongProgress() {
      const currentTime = player.getCurrentTime();
      const ratio = currentTime / player.getDuration();
      progressBar.value = ratio * 100;
      startTime.textContent = parseSeconds(currentTime);
    }

    function onPlayerStateChange(event) {
      console.log(
        '🚀 ~ file: musicPages.js:136 ~ onPlayerStateChange ~ event:',
        event,
      );
      if (event.data === 2) {
        clearInterval(nIntervId);
        nIntervId = null;

        playlistContainer.style.setProperty('--bg', '');
        playlistContainer.classList.remove('sm-playing');
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
        const { title, artist } = currentSong.dataset;
        nowPlaying.innerHTML = `<p>${title}</p><p>${artist}</p>`;
        const { imageSrc, timestamp } = currentSong.dataset;

        playlistContainer.style.setProperty(
          '--bg',
          `url("/assets/images/noise.svg"), linear-gradient(to right, rgb(0 0 0 / 45%), transparent), url(${imageSrc})`,
        );
        playlistContainer.classList.add('sm-playing');
        coverArtcontainer.style.backgroundImage = `url(${imageSrc})`;
        endTime.textContent = timestamp;
        prevSong = currentSong;
        nIntervId = setInterval(showSongProgress, 500);
      } else if (event.data === 0 || event.data === -1) {
        if (prevSong) {
          prevSong.parentElement.classList.remove('sm-active');
        }
      } else {
        clearInterval(nIntervId);
        nIntervId = null;
      }
    }
  }

  window.onYouTubeIframeAPIReady = playlistController;
}
