const gridContainers = document.querySelectorAll('.sm-grid-container');

function updateNumber(el, num, type) {
  if (type === 'container') {
    el.classList.add(`sm-grid-container-${num}`);
    return;
  }
  el.classList.add(`sm-card-${num}`);
}

function countChildren(gridContainer) {
  const { children } = gridContainer;
  Array.from(children).forEach((el, i) => updateNumber(el, i + 1));
  const numOfChildren = children.length;
  updateNumber(gridContainer, numOfChildren, 'container');
  return { children, numOfChildren };
}

function gridInit() {
  if (!gridContainers) {
    return;
  }
  console.log(gridContainers)
  gridContainers.forEach((gridContainer) => countChildren(gridContainer));
}

export default gridInit;
