import mediumZoom from 'medium-zoom';

// Medium Zoom
export default function initMediumZoom() {
  const directImages = document.querySelectorAll('.sm-post__content > img');
  const kgImages = document.querySelectorAll('.kg-image-card > img');
  const galleryImages = document.querySelectorAll('.kg-gallery-image > img');
  const postImages = [...directImages, ...kgImages, ...galleryImages];

  mediumZoom(postImages, {
    background: 'rgba(0,0,0,0.75)',
  });
}
