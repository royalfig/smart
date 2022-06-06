import { toggleColorMode } from './colorModeToggle';

function handleClick(e) {
    if (e.target.closest('.sm-dark-mode')) {
        toggleColorMode('dark');
        return;
    }

    if (e.target.closest('.sm-light-mode')) {
        toggleColorMode('light');
        return;
    }

    if (e.target.closest('.sm-overflow-button')) {
        document.querySelector('.sm-overflow-menu').classList.toggle('sm-show');
    } else {
        document.querySelector('.sm-overflow-menu').classList.remove('sm-show');
    }
}

export default function eventHandler() {
    document.body.addEventListener('click', handleClick);
}
