/* eslint-disable no-inner-declarations */
export default function createPlaylist() {
  const playlistContainer = document.querySelector('.sm-playlist-grid');
  if (!playlistContainer) return;
  const { playlistId } = playlistContainer.dataset;
  const progressBar = document.querySelector('#progress');
  const volumeSlider = document.querySelector('#volume');
  const startTime = document.querySelector('.sm-start-time');
  const nowPlaying = document.querySelector('.sm-playlist-now-playing');
  const endTime = document.querySelector('.sm-end-time');
  const coverArtcontainer = document.querySelector('.sm-playlist-cover-art');
  let nIntervId;
  let prevSong;
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';

  const buttons = document.querySelectorAll('.sm-playlist-item');

  function parseVolume(value) {
    let volume;

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

  function parseSeconds(elapsed) {
    const minutes = Math.round(Math.floor(elapsed / 60)).toString();

    const seconds = Math.round(elapsed % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  function handleProgressBar(e, player) {
    const ratio = e.target.value / 100;
    const newTime = ratio * player.getDuration();
    player.seekTo(newTime);
  }

  function handleVolumeSlider(e, player) {
    const newVolume = e.target.value;
    parseVolume(newVolume);
    player.setVolume(newVolume);
  }

  function handleSongProgress(player) {
    const currentTime = player.getCurrentTime();
    const ratio = currentTime / player.getDuration();
    progressBar.value = ratio * 100;
    startTime.textContent = parseSeconds(currentTime);
  }

  function setSongState(status, player) {
    if (!status) {
      playlistContainer.style.setProperty('--bg', '');
      playlistContainer.classList.remove('sm-playing');
      prevSong.parentElement.classList.remove('sm-active');

      return;
    }

    const currentSong = document.querySelector(
      `button[data-idx="${player.getPlaylistIndex()}"]`,
    );
    const listItem = currentSong.parentElement;
    const { imageSrc, timestamp, title, artist, color } = currentSong.dataset;

    listItem.classList.add('sm-active');
    nowPlaying.innerHTML = `<p>${title}</p><p>${artist}</p>`;

    playlistContainer.style.setProperty(
      '--bg',
      `url("/assets/images/noise.svg"), linear-gradient(to right, rgb(0 0 0 / 45%), transparent), url(${imageSrc})`,
    );

    playlistContainer.style.setProperty('--color', color);
    playlistContainer.classList.add('sm-playing');
    coverArtcontainer.style.backgroundImage = `url(${imageSrc})`;
    endTime.textContent = timestamp;
    prevSong = currentSong;
  }

  function playlistController() {
    try {
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

      volumeSlider.addEventListener('input', (e) => {
        handleVolumeSlider(e, player);
      });

      function showSongProgress() {
        handleSongProgress(player, parseSeconds);
      }

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

      function onPlayerStateChange(event) {
        if (event.data === 2) {
          window.cancelAnimationFrame(nIntervId);

          setSongState(false);
        } else if (event.data === 1) {
          setSongState(true, player);

          if (nIntervId) {
            window.cancelAnimationFrame(nIntervId);
          }

          nIntervId = window.requestAnimationFrame(showSongProgress);
        } else if (event.data === 0 || event.data === -1) {
          if (prevSong) {
            prevSong.parentElement.classList.remove('sm-active');
          }
        } else {
          window.cancelAnimationFrame(nIntervId);
        }
      }

      progressBar.addEventListener('input', (e) => {
        handleProgressBar(e, player);
      });
    } catch (error) {
      console.log(error);
    }
  }

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.head.append(tag);

        window.onYouTubeIframeAPIReady = playlistController;

        // eslint-disable-next-line no-use-before-define
        observer.unobserve(playlistContainer);
      }
    });
  }
  const observer = new IntersectionObserver(callback);

  observer.observe(playlistContainer);
}
