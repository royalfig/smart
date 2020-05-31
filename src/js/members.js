const member = () => {
  // Subscribe DOM
  const subBtn = document.getElementById('subscribe-btn');
  const subCloseBtn = document.getElementById('subscribe-close-btn');
  const subModal = document.getElementById('subscribe');

  // Sigin DOM
  const signinBtn = document.getElementById('signin-btn');
  const signinCloseBtn = document.getElementById('signin-close-btn');
  const signinModal = document.getElementById('signin');

  const toggleModalHandler = (e) => {
    if (e.getAttribute('aria-expanded') === 'false') {
      e.setAttribute('aria-expanded', 'true');
    } else {
      e.setAttribute('aria-expanded', 'false');
    }
  };

  if (subBtn) {
    subBtn.addEventListener('click', toggleModalHandler.bind(this, subModal));
  }

  subCloseBtn.addEventListener(
    'click',
    toggleModalHandler.bind(this, subModal)
  );

  if (signinBtn) {
    signinBtn.addEventListener(
      'click',
      toggleModalHandler.bind(this, signinModal)
    );
  }

  signinCloseBtn.addEventListener(
    'click',
    toggleModalHandler.bind(this, signinModal)
  );
};

export default member;
