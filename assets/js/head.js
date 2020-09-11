(() => {
  if (sessionStorage.fontsLoadedFoutWithClass) {
    document.documentElement.className += ' fonts-loaded';
    return;
  }
  if ('fonts' in document) {
    Promise.all([
      document.fonts.load("1em 'Lato'"),
      document.fonts.load("700 1em 'Lato'"),
      document.fonts.load("italic 1em 'Lato'"),
      document.fonts.load("italic 700 1em 'Lato'")
    ]).then(() => {
      document.documentElement.className += ' fonts-loaded';
      sessionStorage.fontsLoadedFoutWithClass = true;
    });
  }
})();

/*
* Set initial preference for color mode
TODO Confirm behavior for unsupported browsers
*/
if (
  localStorage.getItem('pref') === 'light' ||
  (window.matchMedia('(prefers-color-scheme: light)').matches &&
    !localStorage.getItem('pref'))
) {
  document.documentElement.setAttribute('color-mode', 'light');
}
