const ttEl = document.querySelectorAll('[data-tt]');
const THRESHOLD = 50;

const createHTML = (text, orientation) => {
  const div = document.createElement('div');
  div.classList.add('tt');
  div.classList.add(orientation);
  const p = document.createElement('p');
  p.textContent = text;
  div.append(p);
  return div;
};
const removeExistingTts = (el) => {
  const existingTt = el.querySelector('.tt');
  if (existingTt) {
    el.removeChild(existingTt);
  }
};
const mouseoverHandler = (e) => {
  const sourceEl = e.srcElement;
  removeExistingTts(sourceEl);
  const coords = e.srcElement.getBoundingClientRect();
  const docWidth = document.documentElement.clientWidth;
  const docHeight = document.documentElement.clientHeight;
  const text = sourceEl.dataset.tt;

  // Proximity check for right side
  if (docWidth - coords.x < THRESHOLD) {
    const tt = createHTML(text, 'left');
    sourceEl.append(tt);
    return;
  }

  // Proximity check for left side
  if (coords.x < THRESHOLD) {
    const tt = createHTML(text, 'right');
    sourceEl.append(tt);
    return;
  }

  // Proximity check for bottom side
  if (docHeight - coords.y < THRESHOLD) {
    const tt = createHTML(text, 'top');
    sourceEl.append(tt);
    return;
  }

  // Defaults to bottom
  const tt = createHTML(text, 'bottom');
  sourceEl.append(tt);
};

ttEl.forEach((el) => {
  el.addEventListener('mouseenter', mouseoverHandler.bind(this));
});
