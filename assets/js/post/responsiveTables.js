//-------------------------------------------
// Make tables responsive
//-------------------------------------------
const tables = document.querySelectorAll('.sm-post-content > table');

export default function generateResponsiveTables() {
  function tablePrepend(e) {
    const responsiveWrapper = document.createElement('div');
    responsiveWrapper.setAttribute(
      'style',
      'width: 100%; overflow-x: auto; margin: 2rem 0;',
    );
    responsiveWrapper.setAttribute('class', 'sm-table-wrapper');
    e.parentNode.insertBefore(responsiveWrapper, e);
    responsiveWrapper.appendChild(e);
  }

  tables.forEach((e) => tablePrepend(e));
}
