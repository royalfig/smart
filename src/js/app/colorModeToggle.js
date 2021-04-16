/*
 * Color mode toggle
 * ? Is the color mode button hidden on unsupported browsers?
 */

const toggleColorBtns = document.querySelectorAll('.color-mode-btn');

export default function colorModeInit() {
  if (window.CSS && CSS.supports('color', 'var(--primary)')) {
    const toggleColorMode = (e) => {
      if (e.currentTarget.classList.contains('light')) {
        document.documentElement.setAttribute('color-mode', 'light');
        localStorage.setItem('pref', 'light');
        return;
      }
      document.documentElement.setAttribute('color-mode', 'dark');
      localStorage.setItem('pref', 'dark');
    };
    toggleColorBtns.forEach((btn) => {
      btn.addEventListener('click', toggleColorMode);
    });
  } else {
    toggleColorBtns.forEach((e) => {
      e.style.display = 'none';
    });
  }
}
