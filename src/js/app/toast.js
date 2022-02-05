const destroyToast = (el) => {
  el.classList.add('sm-toast__slide-out');
  setTimeout(() => {
    el.remove();
  }, 500);
};

const checkDomForToast = () => {
  const extantToast = document.querySelectorAll('.sm-toast');
  if (extantToast.length) {
    extantToast.forEach((el) => el.remove());
  }
};

export default function createToast(value) {
  checkDomForToast();
  const container = document.createElement('div');
  container.classList.add('sm-toast');
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('sm-toast__inner');
  container.append(innerContainer);
  const p = document.createElement('p');
  p.textContent = value;
  innerContainer.append(p);
  document.body.append(container);
  setTimeout(destroyToast.bind(null, container), 3000);
}
