//-------------------------------------------
// Make tables responsive
//-------------------------------------------
const tables = document.querySelectorAll('.post__content > table');

export default function tablePrependInit() {
  function tablePrepend(e) {
    const responsiveWrapper = document.createElement('div');
    responsiveWrapper.setAttribute(
      'style',
      'width: 100%; overflow-x: auto; margin: 2rem 0;',
    );
    e.parentNode.insertBefore(responsiveWrapper, e);
    responsiveWrapper.appendChild(e);
  }

  tables.forEach((e) => tablePrepend(e));
}
