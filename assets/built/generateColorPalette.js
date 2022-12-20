(function () {
  'use strict';

  // From CSS Tricks
  function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0;
    let g = 0;
    let b = 0;
    if (H.length === 4) {
      r = `0x${H[1]}${H[1]}`;
      g = `0x${H[2]}${H[2]}`;
      b = `0x${H[3]}${H[3]}`;
    } else if (H.length === 7) {
      r = `0x${H[1]}${H[2]}`;
      g = `0x${H[3]}${H[4]}`;
      b = `0x${H[5]}${H[6]}`;
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) {
      h = 0;
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
      h += 360;
    }

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l];
  }

  function generateColorPalette() {
    const [h, s, l] = document.documentElement.dataset.accentColor
      ? hexToHSL(document.documentElement.dataset.accentColor)
      : hexToHSL('#ff0000');
    const complementaryColor = h + 180 > 360 ? h - 180 : h + 180;
    document.documentElement.style.setProperty('--primary-h', h);
    document.documentElement.style.setProperty('--saturation', `${s}%`);
    document.documentElement.style.setProperty('--lightness', `${l}%`);
    document.documentElement.style.setProperty(
      '--complementary-color',
      complementaryColor,
    );
  }

  generateColorPalette();

})();
//# sourceMappingURL=generateColorPalette.js.map
