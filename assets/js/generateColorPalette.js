// From CSS Tricks
function hexToRgb(H) {
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
  return [r, g, b];
}

function rgbToHSL(rgb) {
  const [r, g, b] = rgb;

  // Then to HSL
  const sr = r / 255;
  const sg = g / 255;
  const sb = b / 255;

  const cmin = Math.min(sr, sg, sb);
  const cmax = Math.max(sr, sg, sb);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) {
    h = 0;
  } else if (cmax === sr) {
    h = ((sg - sb) / delta) % 6;
  } else if (cmax === sg) {
    h = (sb - sr) / delta + 2;
  } else {
    h = (sr - sg) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l, parseInt(r), parseInt(g), parseInt(b)];
}

function generateColorPalette() {
  const [r, g, b] = document.documentElement.dataset.accentColor
    ? hexToRgb(document.documentElement.dataset.accentColor)
    : hexToRgb('#ff0000');

  const [h, s, l] = rgbToHSL([r, g, b]);

  const complementaryColor = h + 180 > 360 ? h - 180 : h + 180;
  document.documentElement.style.setProperty('--primary-h', h);
  document.documentElement.style.setProperty('--saturation', `${s}%`);
  document.documentElement.style.setProperty('--lightness', `${l}%`);
  document.documentElement.style.setProperty(
    '--complementary-color',
    complementaryColor,
  );
  document.documentElement.style.setProperty('--r', r / 255);
  document.documentElement.style.setProperty('--g', g / 255);
  document.documentElement.style.setProperty('--b', b / 255);
  document.documentElement.style.setProperty('--cr', (255 - r) / 255);
  document.documentElement.style.setProperty('--cg', (255 - g) / 255);
  document.documentElement.style.setProperty('--cb', (255 - b) / 255);
}

generateColorPalette();
