const ttEl = document.querySelectorAll('[data-tt]');

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
ttEl.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    removeExistingTts(el);
    const coords = e.srcElement.getBoundingClientRect();
    const docWidth = document.documentElement.clientWidth;
    const docHeight = document.documentElement.clientHeight;
    const text = el.dataset.tt;
    if (docWidth - coords.x < 20) {
      const tt = createHTML(text, 'left');
      el.append(tt);
      return;
    }

    if (coords.x < 20) {
      const tt = createHTML(text, 'right');
      el.append(tt);
      return;
    }

    if (coords.y < 20) {
      const tt = createHTML(text, 'bottom');
      el.append(tt);
      return;
    }

    if (docHeight - coords.y < 20) {
      const tt = createHTML(text, 'top');
      el.append(tt);
      return;
    }
    const tt = createHTML(text, 'bottom');
    el.append(tt);
  });
});
