let toastStatus = false;
const

const setStatus = (status) => {
  toastStatus = status;
};

const destroyToast = (el) => {
  el.remove();
  setStatus(false);
};

const createToast = (input) => {
  const container = document.createElement('div');
  container.classList.add('toast');
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('toast__inner');
  const p = document.createElement('p');
  p.textContent = input;
  innerContainer.append(p);
  document.body.append(container);
  setStatus(true);
  setTimeout(destroyToast(container), 3000);
};

