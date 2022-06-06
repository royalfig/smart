import '../../css/app/index.css';

import initClickHandler from './clickHandler';
import { determineColorModeSupport } from './colorModeToggle';

// eslint-disable-next-line no-undef
if (ENV === 'development') {
    const script = document.createElement('script');
    script.src = `http://${(window.location.host || 'localhost').split(':')[0]
        }:35729/livereload.js?snipver=1`;
    document.head.append(script);
    console.info('Reload script added');
}

initClickHandler();
determineColorModeSupport();
