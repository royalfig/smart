import mediumZoom from 'medium-zoom';

// Medium Zoom
export default function initMediumZoom() {
  const postImages = document.querySelectorAll('.sm-post__content img');

  mediumZoom(postImages, {
    background: 'rgba(0,0,0,0.75)',
  });
}
