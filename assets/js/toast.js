const copyBtn = document.getElementById('copy-button');
const logoutBtn = document.querySelector('.modal__logout');

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

const testWindowLocation = (test) => {
  const re = new RegExp(test);

  const match = re.test(window.location.search);

  return match;
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

  if (logoutBtn) {
    logoutBtn.addEventListener(
      'click',
      createToast.bind(null, 'Logged out successfully')
    );
  }

  if (testWindowLocation('action=signin&success=true')) {
    createToast('Log in successful!');
    cleanUrl();
  }

  if (testWindowLocation('action=signin&success=false')) {
    createToast('Error signing in. Please try again.');
    cleanUrl();
  }

  if (testWindowLocation('action=signup&success=true')) {
    createToast('Sign up successful!');
    cleanUrl();
  }

  if (testWindowLocation('action=subscription&success=true')) {
    createToast('Subscription successful!');
    cleanUrl();
  }

  if (testWindowLocation('checkout=true')) {
    createToast('Checkout successful!');
    cleanUrl();
  }

  if (testWindowLocation('stripe=success')) {
    createToast('Checkout successful!');
    cleanUrl();
  }
  if (testWindowLocation('stripe=cancel')) {
    createToast('Checkout cancelled');
    cleanUrl();
  }

  // For success on account billing edit
  if (testWindowLocation('stripe=billing-update-success')) {
    createToast('Billing update successful!');
    cleanUrl();
  }
  // For success on account billing cancel
  if (testWindowLocation('stripe=billing-update-cancel')) {
    createToast('Billing update cancelled');
    cleanUrl();
  }
}
