import '../scss/post.scss';
import mediumZoom from 'medium-zoom';

const fluidvids = require('fluidvids.js/dist/fluidvids.js');

// Init FluidVids
fluidvids.init({
  selector: ['iframe', 'object'],
  players: ['www.youtube.com', 'player.vimeo.com']
});

// Medium Zoom
const postImages = document.querySelectorAll('.kg-image');
const galleryImages = document.querySelectorAll('.kg-gallery-image img');

const totalImages = [...postImages, ...galleryImages];

mediumZoom(totalImages, {
  background: 'rgba(0,0,0,0.75)'
});

//-------------------------------------------
// Reading Progress Bar and Share Bar
//-------------------------------------------
let lastKnownScrollPos = 0;
let ticking = false;

// Variables for reading progress
const progressBar = document.querySelector('.post-reading-progress');
const shareBar = document.querySelector('.post-share-bar');
const footer = document.querySelector('.outer-container--footer');
const buffer = 50;

// Variables for share bar
const postImg =
  document.querySelector('.post__img') ||
  document.querySelector('.post__no-img');
const postContentHeight = document.querySelector('.post__content');

const readingBarProgress = (scrollPos) => {
  const progress = Math.ceil(
    (scrollPos / postContentHeight.clientHeight) * 100
  );
  progressBar.style.width = `${progress}%`;
};

const shareBarAnimation = () => {
  if (
    postImg.getBoundingClientRect().bottom + buffer <
      shareBar.getBoundingClientRect().top &&
    shareBar.getBoundingClientRect().bottom <
      footer.getBoundingClientRect().top - buffer
  ) {
    if (window.innerWidth >= 1024) {
      shareBar.style.marginLeft = '0';
      shareBar.style.opacity = '1';
    } else {
      shareBar.style.marginBottom = '0';
      shareBar.style.opacity = '1';
    }
  } else if (window.innerWidth >= 1024) {
    shareBar.style.marginLeft = '-200px';
    shareBar.style.opacity = '0';
  } else {
    shareBar.style.marginBottom = '-100px';
    shareBar.style.opacity = '0';
  }
};

if (shareBar !== null) {
  window.addEventListener('scroll', () => {
    lastKnownScrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        shareBarAnimation();
        if (progressBar !== null) {
          readingBarProgress(lastKnownScrollPos);
        }
        ticking = false;
      });

      ticking = true;
    }
  });
}

//-------------------------------------------
// Copy Function
//-------------------------------------------
const copyButton = document.getElementById('copy-button');

if (copyButton) {
  copyButton.addEventListener('click', () => {
    const url = window.location.href;
    const temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.value = url;
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
  });
}

//-------------------------------------------
// Make tables responsive
//-------------------------------------------
const tables = document.querySelectorAll('.post__content > table');

function tablePrepend(e) {
  const responsiveWrapper = document.createElement('div');
  responsiveWrapper.setAttribute(
    'style',
    'width: 100%; overflow-x: auto; margin: 1em 0; border-radius: 4px; border: 1px solid var(--text4)'
  );
  e.parentNode.insertBefore(responsiveWrapper, e);
  responsiveWrapper.appendChild(e);
}

tables.forEach((e) => tablePrepend(e));
