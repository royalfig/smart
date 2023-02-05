export default function animateNavbar() {
  const height = document.documentElement.clientHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const navbar = document.querySelector('.sm-navbar-container');
  navbar.style.transition = 'background-color .6s';

  document.addEventListener('scroll', () => {
    const scrollPercentage =
      Math.round(window.scrollY) / (scrollHeight - height);

    if (scrollPercentage > 0.15) {
      navbar.style.backgroundColor = `var(--surface-light)`;
    } else {
      navbar.style.backgroundColor = `var(--surface)`;
    }
  });
}
