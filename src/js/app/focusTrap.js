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

const configureFocusableElements = (containerEl) => {
  const focusableEl = containerEl.querySelectorAll(FOCUSABLE_EL);
  focusableEl.forEach((el) => el.setAttribute('tabindex', '0'));
  const firstElToFocus = focusableEl[1];
  const firstTabStop = focusableEl[0];
  const lastTabStop = getNonHiddenLastEl(focusableEl);
  return [firstTabStop, lastTabStop, firstElToFocus];
};

export const trapFocus = (sideMenuEl) => {
  currentFocus = document.activeElement;
  const firstElToFocus = configureFocusableElements(sideMenuEl);
  firstElToFocus[2].focus();
};

export function tabKeyHandler(e) {
  const tabs = configureFocusableElements(this);
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
}

export const releaseFocus = (sideMenuEl) => {
  const focusableEl = sideMenuEl.querySelectorAll(FOCUSABLE_EL);
  focusableEl.forEach((el) => el.setAttribute('tabindex', '-1'));
  sideMenuEl.removeEventListener('keydown', tabKeyHandler);
  currentFocus.focus();
};
