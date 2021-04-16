const copyBtn = document.getElementById('copy-button');

const destroyToast = (el) => {
  el.classList.add('toast__slide-out');
  setTimeout(() => {
    el.remove();
  }, 500);
};

const checkDomForToast = () => {
  const extantToast = document.querySelectorAll('.toast');
  if (extantToast.length) {
    extantToast.forEach((el) => el.remove());
  }
};

const createToast = (value) => {
  checkDomForToast();
  const container = document.createElement('div');
  container.classList.add('toast');
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('toast__inner');
  container.append(innerContainer);
  const p = document.createElement('p');
  p.textContent = value;
  innerContainer.append(p);
  document.body.append(container);
  setTimeout(destroyToast.bind(null, container), 3000);
};

export default function toast() {
  if (copyBtn) {
    copyBtn.addEventListener(
      'click',
      createToast.bind(null, 'Link copied to clipboard')
    );
  }
}
