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

if (copyBtn) {
  copyBtn.addEventListener(
    'click',
    createToast.bind(null, 'Link copied to clipboard')
  );
}

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
  window.history.replaceState({}, document.title, window.location.origin);
};

if (testWindowLocation('signin', 'true')) {
  createToast('Log in successful!');
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

if (testWindowLocation('billing-update-success', 'true')) {
  createToast('Billing update successful!');
  cleanUrl();
}

if (testWindowLocation('billing-update-cancel', 'true')) {
  createToast('Subscription cancelled');
  cleanUrl();
}
