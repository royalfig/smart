(function() {
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

class FluidTypography {
  constructor(minVW, maxVW, minFontSize, maxFontSize) {
    this.minVW = minVW;
    this.maxVW = maxVW;
    this.minFontSize = minFontSize;
    this.maxFontSize = maxFontSize;
    this.maxRem = this.computeMaxRem();
  }

  // Compute the maxRem based on arguments and user's browser preferences
  computeMaxRem() {
    const body = document.documentElement;
    const properties = window.getComputedStyle(body);
    const baseFontSize = properties.fontSize.replace(/px/, '');
    const relativeMax = (this.maxFontSize * baseFontSize) / this.minFontSize;
    const maxRem = relativeMax / baseFontSize;
    return maxRem;
  }

  // Calculate font size based on arguments and user's browser preferences
  fontSize() {
    const width = document.documentElement.offsetWidth;
    let rem = 1;

    if (width > this.minVW && width < this.maxVW) {
      rem =
        1 +
        ((this.maxRem - 1) * (width - this.minVW)) / (this.maxVW - this.minVW);
    }

    if (width > this.maxVW) {
      rem = this.maxRem;
    }

    document.documentElement.style = `font-size: ${rem}rem`;
  }

  resizeHandler() {
    this.fontSize();
    window.addEventListener('resize', this.fontSize.bind(this));
  }
}

new FluidTypography(640, 1280, 16, 21).resizeHandler();

if (
  localStorage.getItem('pref') === 'bright' ||
  (window.matchMedia('(prefers-color-scheme: light)').matches &&
    !localStorage.getItem('pref'))
) {
  document.documentElement.setAttribute('color-mode', 'bright');
}
