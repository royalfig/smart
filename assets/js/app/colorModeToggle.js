/*
 * Color mode toggle
 */

export function toggleColorMode(color) {
  const commentsIframe = document.querySelector(
    'iframe[title="comments-frame"]',
  );

  // Reload comments iframe when toggling color mode
  if (commentsIframe) {
    commentsIframe.contentWindow.location.reload();
  }

  document.documentElement.setAttribute('data-color-pref', color);
  localStorage.setItem('pref', color);
}

export function determineColorModeSupport() {
  const colorPrefButtons = document.querySelectorAll(
    '.sm-dark-mode, .sm-light-mode',
  );

  const hasSupport = window.CSS && CSS.supports('color', 'var(--primary)');

  // If the browser doesn't support custom settings, hide buttons
  if (!hasSupport) {
    colorPrefButtons.forEach((e) => {
      e.style.display = 'none';
    });
  }
}
