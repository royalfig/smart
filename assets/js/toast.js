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

const testWindowLocation = (testCase1, testCase2) => {
  const regEx1 = new RegExp(testCase1);
  const regEx2 = new RegExp(testCase2);

  const testFirstCase = regEx1.test(window.location.search);
  const testSecondCase = regEx2.test(window.location.search);

  if (testFirstCase && testSecondCase) {
    return true;
  }
  return false;
};

const cleanUrl = () => {
  console.log(window.location);
  window.history.replaceState({}, document.title, window.location.origin);
};

export default function toast() {
  if (copyBtn) {
    copyBtn.addEventListener(
      'click',
      createToast.bind(null, 'Link copied to clipboard')
    );
  }

  if (testWindowLocation('signin', 'true')) {
    createToast('Log in successful!');
    cleanUrl();
  }

  if (testWindowLocation('signin', 'false')) {
    createToast('Error signing in. Please try again.');
    cleanUrl();
  }

  if (testWindowLocation('signup', 'true')) {
    createToast('Sign up successful!');
    cleanUrl();
  }

  if (testWindowLocation('subscribe', 'true')) {
    createToast('Sign up successful!');
    cleanUrl();
  }

  if (testWindowLocation('checkout', 'true')) {
    createToast('Checkout successful!');
    cleanUrl();
  }

  if (testWindowLocation('stripe', 'cancel')) {
    createToast('Checkout cancelled');
    cleanUrl();
  }

  if (testWindowLocation('stripe', 'success')) {
    createToast('Checkout successful!');
    cleanUrl();
  }

  // For success on account billing edit
  if (testWindowLocation('stripe', 'billing-update-success')) {
    createToast('Billing update successful!');
    cleanUrl();
  }
  // For success on account billing cancel
  if (testWindowLocation('stripe', 'billing-update-cancel')) {
    createToast('Billing update cancelled');
    cleanUrl();
  }
}
