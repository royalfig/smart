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

((minVW, maxVW, minFontSize, maxFontSize) => {
  const computeRem = () => {
    const body = document.documentElement;
    const properties = window.getComputedStyle(body);
    const baseFontSize = properties.fontSize.replace(/px/, '');
    // Gets the max font size of either the browser or the dev
    const max = Math.max(minFontSize, baseFontSize);
    const relativeMax = (maxFontSize * max) / minFontSize;
    const maxRem = relativeMax / baseFontSize;
    const minRem = max / baseFontSize;
    return { maxRem, minRem };
  };

  const { maxRem } = computeRem();
  const { minRem } = computeRem();

  const fontSize = () => {
    const width = window.innerWidth;
    const height = window.outerHeight;
    let rem = minRem;
    const HEIGHT_THRESHOLD = 599;

    if (width > minVW && width < maxVW && height > HEIGHT_THRESHOLD) {
      rem = minRem + ((maxRem - minRem) * (width - minVW)) / (maxVW - minVW);
    }

    if (width > maxVW && height > HEIGHT_THRESHOLD) {
      rem = maxRem;
    }

    document.documentElement.style = `font-size: ${rem}rem`;
  };

  const resizeHandler = () => {
    fontSize();
    window.addEventListener('resize', fontSize);
  };

  resizeHandler();
})(640, 1280, 16, 21);

if (
  localStorage.getItem('pref') === 'light' ||
  (window.matchMedia('(prefers-color-scheme: light)').matches &&
    !localStorage.getItem('pref'))
) {
  document.documentElement.setAttribute('color-mode', 'light');
}
