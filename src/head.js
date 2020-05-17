const fontLoader = () => {
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
};

fontLoader();

class FluidTypography {
  constructor(minVW, maxVW, minFontSize, maxFontSize) {
    this.minVW = minVW;
    this.maxVW = maxVW;
    this.minFontSize = minFontSize;
    this.maxFontSize = maxFontSize;
    this.maxRem = this.computeRem().maxRem;
    this.minRem = this.computeRem().minRem;
  }

  // Compute the maxRem based on arguments and user's browser preferences
  computeRem() {
    const body = document.documentElement;
    const properties = window.getComputedStyle(body);
    const baseFontSize = properties.fontSize.replace(/px/, '');
    // Gets the max font size of either the browser or the dev
    const max = Math.max(this.minFontSize, baseFontSize);
    const relativeMax = (this.maxFontSize * max) / this.minFontSize;
    const maxRem = relativeMax / baseFontSize;
    const minRem = max / baseFontSize;
    return { maxRem, minRem };
  }

  // Calculate font size based on arguments and user's browser preferences
  fontSize() {
    const width = document.documentElement.offsetWidth;
    let rem = this.minRem;

    if (width > this.minVW && width < this.maxVW) {
      rem =
        this.minRem +
        ((this.maxRem - this.minRem) * (width - this.minVW)) /
          (this.maxVW - this.minVW);
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

const ft = new FluidTypography(640, 1280, 17.5, 22);
ft.resizeHandler();

if (
  localStorage.getItem('pref') === 'light' ||
  (window.matchMedia('(prefers-color-scheme: light)').matches &&
    !localStorage.getItem('pref'))
) {
  document.documentElement.setAttribute('color-mode', 'light');
}
