import mediumZoom from 'medium-zoom';

// Medium Zoom
export default function initMediumZoom() {
  const postImages = document.querySelectorAll('.kg-image');
  const galleryImages = document.querySelectorAll('.kg-gallery-image img');

  const totalImages = [...postImages, ...galleryImages];

  mediumZoom(totalImages, {
    background: 'rgba(0,0,0,0.75)',
  });
}
