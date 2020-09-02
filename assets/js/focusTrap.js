const FOCUSABLE_EL =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

let currentFocus;

const checkDisplayStatus = (el) =>
  window.getComputedStyle(el).display !== 'none';

const getNonHiddenLastEl = (el) => {
  const lastEl = el[el.length - 1];
  const penultimateEl = el[el.length - 2];

  if (checkDisplayStatus(lastEl)) {
    return lastEl;
  }

  return penultimateEl;
};

const tabKeyHandler = (tabs, e) => {
  const firstTabStop = tabs[0];
  const lastTabStop = tabs[1];
  if (e.keyCode === 9) {
    // SHIFT + TAB
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
      // TAB
    } else if (document.activeElement === lastTabStop) {
      e.preventDefault();
      firstTabStop.focus();
    }
  }
};

const trapFocus = (sideMenuEl) => {
  currentFocus = document.activeElement;
  const focusableEl = sideMenuEl.querySelectorAll(FOCUSABLE_EL);
  focusableEl[1].focus();
  const firstTabStop = focusableEl[0];
  const lastTabStop = getNonHiddenLastEl(focusableEl);

  sideMenuEl.addEventListener(
    'keydown',
    tabKeyHandler.bind(null, [firstTabStop, lastTabStop])
  );
};

const releaseFocus = (sideMenuEl) => {
  sideMenuEl.removeEventListener('keydown', tabKeyHandler);
  currentFocus.focus();
};

exports.trapFocus = trapFocus;
exports.releaseFocus = releaseFocus;
