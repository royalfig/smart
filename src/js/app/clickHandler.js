import { toggleColorMode } from './colorModeToggle';
import copyToClipboard from './copy';

function handleClick(e) {
    console.log(e.target);
    if (e.target.closest('.sm-copy-button')) {
        copyToClipboard();
        return;
    }

    if (e.target.closest('.sm-dark-mode')) {
        toggleColorMode('dark');
        return;
    }

    if (e.target.closest('.sm-light-mode')) {
        toggleColorMode('light');
        return;
    }

    if (e.target.closest('.sm-follow-button')) {
        document.querySelector('.sm-overflow-buttons').classList.add('sm-hide');
        document.querySelector('.sm-overflow-follow').classList.add('sm-show');
        return;
    }

    if (e.target.closest('.sm-share-button')) {
        document.querySelector('.sm-overflow-buttons').classList.add('sm-hide');
        document.querySelector('.sm-overflow-share').classList.add('sm-show');
        return;
    }

    if (e.target.closest('.sm-overflow-back')) {
        e.target.closest('.sm-overflow-back').parentElement.classList.remove('sm-show');
        document.querySelector('.sm-overflow-buttons').classList.remove('sm-hide');
        return;
    }

    if (e.target.closest('.sm-overflow-button')) {
        document.querySelector('.sm-overflow-menu').classList.toggle('sm-show');
    } else if (document.querySelector('.sm-overflow-menu').classList.contains('sm-show')) {
        e.preventDefault();
        document.querySelector('.sm-overflow-menu').classList.remove('sm-show');
    }
}

export default function eventHandler() {
    document.body.addEventListener('click', handleClick);
}
