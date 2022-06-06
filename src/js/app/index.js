import '../../css/app/index.css';

import launchModal from './launchModal';
import { determineColorModeSupport } from './colorModeToggle';

// eslint-disable-next-line no-undef
if (ENV === 'development') {
    const script = document.createElement('script');
    script.src = `http://${(location.host || 'localhost').split(':')[0]
        }:35729/livereload.js?snipver=1`;
    document.head.append(script);
    console.info('Reload script added');
}

launchModal();
determineColorModeSupport();
