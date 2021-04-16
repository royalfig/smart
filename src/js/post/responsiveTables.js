//-------------------------------------------
// Make tables responsive
//-------------------------------------------
const tables = document.querySelectorAll('.post__content > table');

export default function tablePrependInit() {
  function tablePrepend(e) {
    const responsiveWrapper = document.createElement('div');
    responsiveWrapper.setAttribute(
      'style',
      'width: 100%; overflow-x: auto; margin: 1em 0; border-radius: 4px; border: 1px solid var(--text4)',
    );
    e.parentNode.insertBefore(responsiveWrapper, e);
    responsiveWrapper.appendChild(e);
  }

  tables.forEach((e) => tablePrepend(e));
}
