function handleClick(e) {
  if (e.code === 'Escape') {
    document.querySelector('[class*=show]');
  }
}

export default function keyClickHandler() {
  document.body.addEventListener('keyup', handleClick);
}
