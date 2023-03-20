import mediumZoom from 'medium-zoom';

// Medium Zoom
export default function initMediumZoom() {
  const directImages = document.querySelectorAll('.sm-post-content > img');
  const markdownImages = document.querySelectorAll(
    '.sm-post-content > p > img',
  );
  const kgImages = document.querySelectorAll('.kg-image-card > img');
  const galleryImages = document.querySelectorAll('.kg-gallery-image > img');

  const postImages = [
    ...directImages,
    ...markdownImages,
    ...kgImages,
    ...galleryImages,
  ];

  mediumZoom(postImages, {
    background: 'rgba(0,0,0,0.75)',
  });
}
