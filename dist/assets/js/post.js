/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/post.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fluidvids.js/dist/fluidvids.js":
/*!*****************************************************!*\
  !*** ./node_modules/fluidvids.js/dist/fluidvids.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {

  'use strict';

  var fluidvids = {
    selector: ['iframe', 'object'],
    players: ['www.youtube.com', 'player.vimeo.com']
  };

  var css = [
    '.fluidvids {',
      'width: 100%; max-width: 100%; position: relative;',
    '}',
    '.fluidvids-item {',
      'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;',
    '}'
  ].join('');

  var head = document.head || document.getElementsByTagName('head')[0];

  function matches (src) {
    return new RegExp('^(https?:)?\/\/(?:' + fluidvids.players.join('|') + ').*$', 'i').test(src);
  }

  function getRatio (height, width) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  }

  function fluid (elem) {
    if (!matches(elem.src) && !matches(elem.data) || !!elem.getAttribute('data-fluidvids')) return;
    var wrap = document.createElement('div');
    elem.parentNode.insertBefore(wrap, elem);
    elem.className += (elem.className ? ' ' : '') + 'fluidvids-item';
    elem.setAttribute('data-fluidvids', 'loaded');
    wrap.className += 'fluidvids';
    wrap.style.paddingTop = getRatio(elem.height, elem.width);
    wrap.appendChild(elem);
  }

  function addStyles () {
    var div = document.createElement('div');
    div.innerHTML = '<p>x</p><style>' + css + '</style>';
    head.appendChild(div.childNodes[1]);
  }

  fluidvids.render = function () {
    var nodes = document.querySelectorAll(fluidvids.selector.join());
    var i = nodes.length;
    while (i--) {
      fluid(nodes[i]);
    }
  };

  fluidvids.init = function (obj) {
    for (var key in obj) {
      fluidvids[key] = obj[key];
    }
    fluidvids.render();
    addStyles();
  };

  return fluidvids;

});


/***/ }),

/***/ "./node_modules/medium-zoom/dist/medium-zoom.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/medium-zoom/dist/medium-zoom.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! medium-zoom 1.0.5 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var isSupported = function isSupported(node) {
  return node.tagName === 'IMG';
};

/* eslint-disable-next-line no-prototype-builtins */
var isNodeList = function isNodeList(selector) {
  return NodeList.prototype.isPrototypeOf(selector);
};

var isNode = function isNode(selector) {
  return selector && selector.nodeType === 1;
};

var isSvg = function isSvg(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === '.svg';
};

var getImagesFromSelector = function getImagesFromSelector(selector) {
  try {
    if (Array.isArray(selector)) {
      return selector.filter(isSupported);
    }

    if (isNodeList(selector)) {
      // Do not use spread operator or Array.from() for IE support
      return [].slice.call(selector).filter(isSupported);
    }

    if (isNode(selector)) {
      return [selector].filter(isSupported);
    }

    if (typeof selector === 'string') {
      // Do not use spread operator or Array.from() for IE support
      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
    }

    return [];
  } catch (err) {
    throw new TypeError('The provided selector is invalid.\n' + 'Expects a CSS selector, a Node element, a NodeList or an array.\n' + 'See: https://github.com/francoischalifour/medium-zoom');
  }
};

var createOverlay = function createOverlay(background) {
  var overlay = document.createElement('div');
  overlay.classList.add('medium-zoom-overlay');
  overlay.style.background = background;

  return overlay;
};

var cloneTarget = function cloneTarget(template) {
  var _template$getBounding = template.getBoundingClientRect(),
      top = _template$getBounding.top,
      left = _template$getBounding.left,
      width = _template$getBounding.width,
      height = _template$getBounding.height;

  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

  clone.removeAttribute('id');
  clone.style.position = 'absolute';
  clone.style.top = top + scrollTop + 'px';
  clone.style.left = left + scrollLeft + 'px';
  clone.style.width = width + 'px';
  clone.style.height = height + 'px';
  clone.style.transform = '';

  return clone;
};

var createCustomEvent = function createCustomEvent(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: undefined
  }, params);

  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(type, eventParams);
  }

  var customEvent = document.createEvent('CustomEvent');
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);

  return customEvent;
};

var mediumZoom = function mediumZoom(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /**
   * Ensure the compatibility with IE11 if no Promise polyfill are used.
   */
  var Promise = window.Promise || function Promise(fn) {
    function noop() {}
    fn(noop, noop);
  };

  var _handleClick = function _handleClick(event) {
    var target = event.target;


    if (target === overlay) {
      close();
      return;
    }

    if (images.indexOf(target) === -1) {
      return;
    }

    toggle({ target: target });
  };

  var _handleScroll = function _handleScroll() {
    if (isAnimating || !active.original) {
      return;
    }

    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
      setTimeout(close, 150);
    }
  };

  var _handleKeyUp = function _handleKeyUp(event) {
    var key = event.key || event.keyCode;

    // Close if escape key is pressed
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      close();
    }
  };

  var update = function update() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var newOptions = options;

    if (options.background) {
      overlay.style.background = options.background;
    }

    if (options.container && options.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions.container, options.container);
    }

    if (options.template) {
      var template = isNode(options.template) ? options.template : document.querySelector(options.template);

      newOptions.template = template;
    }

    zoomOptions = _extends({}, zoomOptions, newOptions);

    images.forEach(function (image) {
      image.dispatchEvent(createCustomEvent('medium-zoom:update', {
        detail: { zoom: zoom }
      }));
    });

    return zoom;
  };

  var clone = function clone() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return mediumZoom(_extends({}, zoomOptions, options));
  };

  var attach = function attach() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }

    var newImages = selectors.reduce(function (imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);

    newImages.filter(function (newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function (newImage) {
      images.push(newImage);
      newImage.classList.add('medium-zoom-image');
    });

    eventListeners.forEach(function (_ref) {
      var type = _ref.type,
          listener = _ref.listener,
          options = _ref.options;

      newImages.forEach(function (image) {
        image.addEventListener(type, listener, options);
      });
    });

    return zoom;
  };

  var detach = function detach() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }

    if (active.zoomed) {
      close();
    }

    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function (imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;

    imagesToDetach.forEach(function (image) {
      image.classList.remove('medium-zoom-image');
      image.dispatchEvent(createCustomEvent('medium-zoom:detach', {
        detail: { zoom: zoom }
      }));
    });

    images = images.filter(function (image) {
      return imagesToDetach.indexOf(image) === -1;
    });

    return zoom;
  };

  var on = function on(type, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    images.forEach(function (image) {
      image.addEventListener('medium-zoom:' + type, listener, options);
    });

    eventListeners.push({ type: 'medium-zoom:' + type, listener: listener, options: options });

    return zoom;
  };

  var off = function off(type, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    images.forEach(function (image) {
      image.removeEventListener('medium-zoom:' + type, listener, options);
    });

    eventListeners = eventListeners.filter(function (eventListener) {
      return !(eventListener.type === 'medium-zoom:' + type && eventListener.listener.toString() === listener.toString());
    });

    return zoom;
  };

  var open = function open() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        target = _ref2.target;

    var _animate = function _animate() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;

      if (zoomOptions.container) {
        if (zoomOptions.container instanceof Object) {
          // The container is given as an object with properties like width, height, left, top
          container = _extends({}, container, zoomOptions.container);

          // We need to adjust custom options like container.right or container.bottom
          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
        } else {
          // The container is given as an element
          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);

          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(),
              _width = _zoomContainer$getBou.width,
              _height = _zoomContainer$getBou.height,
              _left = _zoomContainer$getBou.left,
              _top = _zoomContainer$getBou.top;

          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }

      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;

      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;

      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(),
          top = _zoomTarget$getBoundi.top,
          left = _zoomTarget$getBoundi.left,
          width = _zoomTarget$getBoundi.width,
          height = _zoomTarget$getBoundi.height;

      var scaleX = Math.min(naturalWidth, viewportWidth) / width;
      var scaleY = Math.min(naturalHeight, viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
      var transform = 'scale(' + scale + ') translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';

      active.zoomed.style.transform = transform;

      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };

    return new Promise(function (resolve) {
      if (target && images.indexOf(target) === -1) {
        resolve(zoom);
        return;
      }

      var _handleOpenEnd = function _handleOpenEnd() {
        isAnimating = false;
        active.zoomed.removeEventListener('transitionend', _handleOpenEnd);
        active.original.dispatchEvent(createCustomEvent('medium-zoom:opened', {
          detail: { zoom: zoom }
        }));

        resolve(zoom);
      };

      if (active.zoomed) {
        resolve(zoom);
        return;
      }

      if (target) {
        // The zoom was triggered manually via a click
        active.original = target;
      } else if (images.length > 0) {
var _images = images;
        active.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }

      active.original.dispatchEvent(createCustomEvent('medium-zoom:open', {
        detail: { zoom: zoom }
      }));

      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);

      document.body.appendChild(overlay);

      if (zoomOptions.template) {
        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
        active.template = document.createElement('div');
        active.template.appendChild(template.content.cloneNode(true));

        document.body.appendChild(active.template);
      }

      document.body.appendChild(active.zoomed);

      window.requestAnimationFrame(function () {
        document.body.classList.add('medium-zoom--opened');
      });

      active.original.classList.add('medium-zoom-image--hidden');
      active.zoomed.classList.add('medium-zoom-image--opened');

      active.zoomed.addEventListener('click', close);
      active.zoomed.addEventListener('transitionend', _handleOpenEnd);

      if (active.original.getAttribute('data-zoom-src')) {
        active.zoomedHd = active.zoomed.cloneNode();

        // Reset the `scrset` property or the HD image won't load.
        active.zoomedHd.removeAttribute('srcset');
        active.zoomedHd.removeAttribute('sizes');

        active.zoomedHd.src = active.zoomed.getAttribute('data-zoom-src');

        active.zoomedHd.onerror = function () {
          clearInterval(getZoomTargetSize);
          console.warn('Unable to reach the zoom image target ' + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };

        // We need to access the natural size of the full HD
        // target as fast as possible to compute the animation.
        var getZoomTargetSize = setInterval(function () {
          if ( active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add('medium-zoom-image--opened');
            active.zoomedHd.addEventListener('click', close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute('srcset')) {
        // If an image has a `srcset` attribuet, we don't know the dimensions of the
        // zoomed (HD) image (like when `data-zoom-src` is specified).
        // Therefore the approach is quite similar.
        active.zoomedHd = active.zoomed.cloneNode();

        // Resetting the sizes attribute tells the browser to load the
        // image best fitting the current viewport size, respecting the `srcset`.
        active.zoomedHd.removeAttribute('sizes');

        // Wait for the load event of the hd image. This will fire if the image
        // is already cached.
        var loadEventListener = active.zoomedHd.addEventListener('load', function () {
          active.zoomedHd.removeEventListener('load', loadEventListener);
          active.zoomedHd.classList.add('medium-zoom-image--opened');
          active.zoomedHd.addEventListener('click', close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };

  var close = function close() {
    return new Promise(function (resolve) {
      if (isAnimating || !active.original) {
        resolve(zoom);
        return;
      }

      var _handleCloseEnd = function _handleCloseEnd() {
        active.original.classList.remove('medium-zoom-image--hidden');
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove('medium-zoom-image--opened');
        if (active.template) {
          document.body.removeChild(active.template);
        }

        isAnimating = false;
        active.zoomed.removeEventListener('transitionend', _handleCloseEnd);

        active.original.dispatchEvent(createCustomEvent('medium-zoom:closed', {
          detail: { zoom: zoom }
        }));

        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;

        resolve(zoom);
      };

      isAnimating = true;
      document.body.classList.remove('medium-zoom--opened');
      active.zoomed.style.transform = '';

      if (active.zoomedHd) {
        active.zoomedHd.style.transform = '';
      }

      // Fade out the template so it's not too abrupt
      if (active.template) {
        active.template.style.transition = 'opacity 150ms';
        active.template.style.opacity = 0;
      }

      active.original.dispatchEvent(createCustomEvent('medium-zoom:close', {
        detail: { zoom: zoom }
      }));

      active.zoomed.addEventListener('transitionend', _handleCloseEnd);
    });
  };

  var toggle = function toggle() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        target = _ref3.target;

    if (active.original) {
      return close();
    }

    return open({ target: target });
  };

  var getOptions = function getOptions() {
    return zoomOptions;
  };

  var getImages = function getImages() {
    return images;
  };

  var getZoomedImage = function getZoomedImage() {
    return active.original;
  };

  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null

    // If the selector is omitted, it's replaced by the options
  };if (Object.prototype.toString.call(selector) === '[object Object]') {
    zoomOptions = selector;
  } else if (selector || typeof selector === 'string' // to process empty string as a selector
  ) {
      attach(selector);
    }

  // Apply the default option values
  zoomOptions = _extends({
    margin: 0,
    background: '#fff',
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions);

  var overlay = createOverlay(zoomOptions.background);

  document.addEventListener('click', _handleClick);
  document.addEventListener('keyup', _handleKeyUp);
  document.addEventListener('scroll', _handleScroll);
  window.addEventListener('resize', close);

  var zoom = {
    open: open,
    close: close,
    toggle: toggle,
    update: update,
    clone: clone,
    attach: attach,
    detach: detach,
    on: on,
    off: off,
    getOptions: getOptions,
    getImages: getImages,
    getZoomedImage: getZoomedImage
  };

  return zoom;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);

/* harmony default export */ __webpack_exports__["default"] = (mediumZoom);


/***/ }),

/***/ "./src/post.js":
/*!*********************!*\
  !*** ./src/post.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var fluidvids = __webpack_require__(/*! fluidvids.js/dist/fluidvids.js */ "./node_modules/fluidvids.js/dist/fluidvids.js"); // Init FluidVids


fluidvids.init({
  selector: ['iframe', 'object'],
  players: ['www.youtube.com', 'player.vimeo.com']
}); // Medium Zoom

var postImages = document.querySelectorAll('.kg-image');
var galleryImages = document.querySelectorAll('.kg-gallery-image img');
var totalImages = [].concat(_toConsumableArray(postImages), _toConsumableArray(galleryImages));
Object(medium_zoom__WEBPACK_IMPORTED_MODULE_0__["default"])(totalImages, {
  background: 'rgba(0,0,0,0.75)'
}); //-------------------------------------------
// Reading Progress Bar and Share Bar
//-------------------------------------------

var lastKnownScrollPos = 0;
var ticking = false; // Variables for reading progress

var progressBar = document.querySelector('.post-reading-progress');
var shareBar = document.querySelector('.post-share-bar');
var footer = document.querySelector('.footer--outer-container');
var buffer = 50; // Variables for share bar

var postImg = document.querySelector('.post__img') || document.querySelector('.post__no-img');
var postContentHeight = document.querySelector('.post__content');

var readingBarProgress = function readingBarProgress(scrollPos) {
  var progress = Math.ceil(scrollPos / postContentHeight.clientHeight * 100);
  progressBar.style.width = "".concat(progress, "%");
};

var shareBarAnimation = function shareBarAnimation() {
  if (postImg.getBoundingClientRect().bottom + buffer < shareBar.getBoundingClientRect().top && shareBar.getBoundingClientRect().bottom < footer.getBoundingClientRect().top - buffer) {
    if (window.innerWidth > 1024) {
      shareBar.style.marginLeft = '0';
      shareBar.style.opacity = '1';
    } else {
      shareBar.style.marginBottom = '0';
      shareBar.style.opacity = '1';
    }
  } else if (window.innerWidth > 1024) {
    shareBar.style.marginLeft = '-200px';
    shareBar.style.opacity = '0';
  } else {
    shareBar.style.marginBottom = '-100px';
    shareBar.style.opacity = '0';
  }
};

if (shareBar !== null) {
  window.addEventListener('scroll', function () {
    lastKnownScrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        shareBarAnimation();

        if (progressBar !== null) {
          readingBarProgress(lastKnownScrollPos);
        }

        ticking = false;
      });
      ticking = true;
    }
  });
} //-------------------------------------------
// Copy Function
//-------------------------------------------


var copyButton = document.getElementById('copy-button');

if (copyButton) {
  copyButton.addEventListener('click', function () {
    var url = window.location.href;
    var temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.value = url;
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
  });
} //-------------------------------------------
// Make tables responsive
//-------------------------------------------


var tables = document.querySelectorAll('.post__content > table');

function tablePrepend(e) {
  var responsiveWrapper = document.createElement('div');
  responsiveWrapper.setAttribute('style', 'width: 100%; overflow-x: auto; margin: 1em 0;');
  e.parentNode.insertBefore(responsiveWrapper, e);
  responsiveWrapper.appendChild(e);
}

tables.forEach(function (e) {
  return tablePrepend(e);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsdWlkdmlkcy5qcy9kaXN0L2ZsdWlkdmlkcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWVkaXVtLXpvb20vZGlzdC9tZWRpdW0tem9vbS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bvc3QuanMiXSwibmFtZXMiOlsiZmx1aWR2aWRzIiwicmVxdWlyZSIsImluaXQiLCJzZWxlY3RvciIsInBsYXllcnMiLCJwb3N0SW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyeUltYWdlcyIsInRvdGFsSW1hZ2VzIiwibWVkaXVtWm9vbSIsImJhY2tncm91bmQiLCJsYXN0S25vd25TY3JvbGxQb3MiLCJ0aWNraW5nIiwicHJvZ3Jlc3NCYXIiLCJxdWVyeVNlbGVjdG9yIiwic2hhcmVCYXIiLCJmb290ZXIiLCJidWZmZXIiLCJwb3N0SW1nIiwicG9zdENvbnRlbnRIZWlnaHQiLCJyZWFkaW5nQmFyUHJvZ3Jlc3MiLCJzY3JvbGxQb3MiLCJwcm9ncmVzcyIsIk1hdGgiLCJjZWlsIiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJ3aWR0aCIsInNoYXJlQmFyQW5pbWF0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwidG9wIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1hcmdpbkxlZnQiLCJvcGFjaXR5IiwibWFyZ2luQm90dG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb3B5QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJ0ZW1wIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInRhYmxlcyIsInRhYmxlUHJlcGVuZCIsImUiLCJyZXNwb25zaXZlV3JhcHBlciIsInNldEF0dHJpYnV0ZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxvQ0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDbkIsR0FBRyxNQUFNLEVBSU47QUFDSCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQixpQkFBaUIsb0JBQW9CO0FBQ3hELE1BQU07QUFDTixzQkFBc0I7QUFDdEIsMEJBQTBCLFVBQVUsV0FBVyxhQUFhLGNBQWM7QUFDMUUsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEVEO0FBQUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGlCQUFpQjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFD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QUFELENBQW5CO0FBQUEsQ0FBZixFIiwiZmlsZSI6ImFzc2V0cy9qcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcG9zdC5qc1wiKTtcbiIsIi8qISBmbHVpZHZpZHMuanMgdjIuNC4xIHwgKGMpIDIwMTQgQHRvZGRtb3R0byB8IGh0dHBzOi8vZ2l0aHViLmNvbS90b2RkbW90dG8vZmx1aWR2aWRzICovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5mbHVpZHZpZHMgPSBmYWN0b3J5KCk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGZsdWlkdmlkcyA9IHtcbiAgICBzZWxlY3RvcjogWydpZnJhbWUnLCAnb2JqZWN0J10sXG4gICAgcGxheWVyczogWyd3d3cueW91dHViZS5jb20nLCAncGxheWVyLnZpbWVvLmNvbSddXG4gIH07XG5cbiAgdmFyIGNzcyA9IFtcbiAgICAnLmZsdWlkdmlkcyB7JyxcbiAgICAgICd3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAxMDAlOyBwb3NpdGlvbjogcmVsYXRpdmU7JyxcbiAgICAnfScsXG4gICAgJy5mbHVpZHZpZHMtaXRlbSB7JyxcbiAgICAgICdwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7JyxcbiAgICAnfSdcbiAgXS5qb2luKCcnKTtcblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblxuICBmdW5jdGlvbiBtYXRjaGVzIChzcmMpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXihodHRwcz86KT9cXC9cXC8oPzonICsgZmx1aWR2aWRzLnBsYXllcnMuam9pbignfCcpICsgJykuKiQnLCAnaScpLnRlc3Qoc3JjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhdGlvIChoZWlnaHQsIHdpZHRoKSB7XG4gICAgcmV0dXJuICgocGFyc2VJbnQoaGVpZ2h0LCAxMCkgLyBwYXJzZUludCh3aWR0aCwgMTApKSAqIDEwMCkgKyAnJSc7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVpZCAoZWxlbSkge1xuICAgIGlmICghbWF0Y2hlcyhlbGVtLnNyYykgJiYgIW1hdGNoZXMoZWxlbS5kYXRhKSB8fCAhIWVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZsdWlkdmlkcycpKSByZXR1cm47XG4gICAgdmFyIHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXAsIGVsZW0pO1xuICAgIGVsZW0uY2xhc3NOYW1lICs9IChlbGVtLmNsYXNzTmFtZSA/ICcgJyA6ICcnKSArICdmbHVpZHZpZHMtaXRlbSc7XG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmx1aWR2aWRzJywgJ2xvYWRlZCcpO1xuICAgIHdyYXAuY2xhc3NOYW1lICs9ICdmbHVpZHZpZHMnO1xuICAgIHdyYXAuc3R5bGUucGFkZGluZ1RvcCA9IGdldFJhdGlvKGVsZW0uaGVpZ2h0LCBlbGVtLndpZHRoKTtcbiAgICB3cmFwLmFwcGVuZENoaWxkKGVsZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3R5bGVzICgpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9ICc8cD54PC9wPjxzdHlsZT4nICsgY3NzICsgJzwvc3R5bGU+JztcbiAgICBoZWFkLmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzFdKTtcbiAgfVxuXG4gIGZsdWlkdmlkcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChmbHVpZHZpZHMuc2VsZWN0b3Iuam9pbigpKTtcbiAgICB2YXIgaSA9IG5vZGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBmbHVpZChub2Rlc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIGZsdWlkdmlkcy5pbml0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGZsdWlkdmlkc1trZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIGZsdWlkdmlkcy5yZW5kZXIoKTtcbiAgICBhZGRTdHlsZXMoKTtcbiAgfTtcblxuICByZXR1cm4gZmx1aWR2aWRzO1xuXG59KTtcbiIsIi8qISBtZWRpdW0tem9vbSAxLjAuNSB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2ZyYW5jb2lzY2hhbGlmb3VyL21lZGl1bS16b29tICovXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGlzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNTdXBwb3J0ZWQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU1HJztcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbnZhciBpc05vZGVMaXN0ID0gZnVuY3Rpb24gaXNOb2RlTGlzdChzZWxlY3Rvcikge1xuICByZXR1cm4gTm9kZUxpc3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yoc2VsZWN0b3IpO1xufTtcblxudmFyIGlzTm9kZSA9IGZ1bmN0aW9uIGlzTm9kZShzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgJiYgc2VsZWN0b3Iubm9kZVR5cGUgPT09IDE7XG59O1xuXG52YXIgaXNTdmcgPSBmdW5jdGlvbiBpc1N2ZyhpbWFnZSkge1xuICB2YXIgc291cmNlID0gaW1hZ2UuY3VycmVudFNyYyB8fCBpbWFnZS5zcmM7XG4gIHJldHVybiBzb3VyY2Uuc3Vic3RyKC00KS50b0xvd2VyQ2FzZSgpID09PSAnLnN2Zyc7XG59O1xuXG52YXIgZ2V0SW1hZ2VzRnJvbVNlbGVjdG9yID0gZnVuY3Rpb24gZ2V0SW1hZ2VzRnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHRyeSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IuZmlsdGVyKGlzU3VwcG9ydGVkKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlTGlzdChzZWxlY3RvcikpIHtcbiAgICAgIC8vIERvIG5vdCB1c2Ugc3ByZWFkIG9wZXJhdG9yIG9yIEFycmF5LmZyb20oKSBmb3IgSUUgc3VwcG9ydFxuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoc2VsZWN0b3IpLmZpbHRlcihpc1N1cHBvcnRlZCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdLmZpbHRlcihpc1N1cHBvcnRlZCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIERvIG5vdCB1c2Ugc3ByZWFkIG9wZXJhdG9yIG9yIEFycmF5LmZyb20oKSBmb3IgSUUgc3VwcG9ydFxuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZpbHRlcihpc1N1cHBvcnRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgcHJvdmlkZWQgc2VsZWN0b3IgaXMgaW52YWxpZC5cXG4nICsgJ0V4cGVjdHMgYSBDU1Mgc2VsZWN0b3IsIGEgTm9kZSBlbGVtZW50LCBhIE5vZGVMaXN0IG9yIGFuIGFycmF5LlxcbicgKyAnU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZnJhbmNvaXNjaGFsaWZvdXIvbWVkaXVtLXpvb20nKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZU92ZXJsYXkgPSBmdW5jdGlvbiBjcmVhdGVPdmVybGF5KGJhY2tncm91bmQpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1vdmVybGF5Jyk7XG4gIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cbiAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG52YXIgY2xvbmVUYXJnZXQgPSBmdW5jdGlvbiBjbG9uZVRhcmdldCh0ZW1wbGF0ZSkge1xuICB2YXIgX3RlbXBsYXRlJGdldEJvdW5kaW5nID0gdGVtcGxhdGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB0b3AgPSBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcudG9wLFxuICAgICAgbGVmdCA9IF90ZW1wbGF0ZSRnZXRCb3VuZGluZy5sZWZ0LFxuICAgICAgd2lkdGggPSBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcuaGVpZ2h0O1xuXG4gIHZhciBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSgpO1xuICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG5cbiAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICBjbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGNsb25lLnN0eWxlLnRvcCA9IHRvcCArIHNjcm9sbFRvcCArICdweCc7XG4gIGNsb25lLnN0eWxlLmxlZnQgPSBsZWZ0ICsgc2Nyb2xsTGVmdCArICdweCc7XG4gIGNsb25lLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICBjbG9uZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICBjbG9uZS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcblxuICByZXR1cm4gY2xvbmU7XG59O1xuXG52YXIgY3JlYXRlQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudCh0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIGV2ZW50UGFyYW1zID0gX2V4dGVuZHMoe1xuICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgIGRldGFpbDogdW5kZWZpbmVkXG4gIH0sIHBhcmFtcyk7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIGV2ZW50UGFyYW1zKTtcbiAgfVxuXG4gIHZhciBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBjdXN0b21FdmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZXZlbnRQYXJhbXMuYnViYmxlcywgZXZlbnRQYXJhbXMuY2FuY2VsYWJsZSwgZXZlbnRQYXJhbXMuZGV0YWlsKTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnQ7XG59O1xuXG52YXIgbWVkaXVtWm9vbSA9IGZ1bmN0aW9uIG1lZGl1bVpvb20oc2VsZWN0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIC8qKlxuICAgKiBFbnN1cmUgdGhlIGNvbXBhdGliaWxpdHkgd2l0aCBJRTExIGlmIG5vIFByb21pc2UgcG9seWZpbGwgYXJlIHVzZWQuXG4gICAqL1xuICB2YXIgUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlIHx8IGZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICBmbihub29wLCBub29wKTtcbiAgfTtcblxuICB2YXIgX2hhbmRsZUNsaWNrID0gZnVuY3Rpb24gX2hhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuXG4gICAgaWYgKHRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2VzLmluZGV4T2YodGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2dnbGUoeyB0YXJnZXQ6IHRhcmdldCB9KTtcbiAgfTtcblxuICB2YXIgX2hhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIF9oYW5kbGVTY3JvbGwoKSB7XG4gICAgaWYgKGlzQW5pbWF0aW5nIHx8ICFhY3RpdmUub3JpZ2luYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG5cbiAgICBpZiAoTWF0aC5hYnMoc2Nyb2xsVG9wIC0gY3VycmVudFNjcm9sbCkgPiB6b29tT3B0aW9ucy5zY3JvbGxPZmZzZXQpIHtcbiAgICAgIHNldFRpbWVvdXQoY2xvc2UsIDE1MCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBfaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiBfaGFuZGxlS2V5VXAoZXZlbnQpIHtcbiAgICB2YXIga2V5ID0gZXZlbnQua2V5IHx8IGV2ZW50LmtleUNvZGU7XG5cbiAgICAvLyBDbG9zZSBpZiBlc2NhcGUga2V5IGlzIHByZXNzZWRcbiAgICBpZiAoa2V5ID09PSAnRXNjYXBlJyB8fCBrZXkgPT09ICdFc2MnIHx8IGtleSA9PT0gMjcpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgdmFyIG5ld09wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZCkge1xuICAgICAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNvbnRhaW5lciAmJiBvcHRpb25zLmNvbnRhaW5lciBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgbmV3T3B0aW9ucy5jb250YWluZXIgPSBfZXh0ZW5kcyh7fSwgem9vbU9wdGlvbnMuY29udGFpbmVyLCBvcHRpb25zLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGlzTm9kZShvcHRpb25zLnRlbXBsYXRlKSA/IG9wdGlvbnMudGVtcGxhdGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGVtcGxhdGUpO1xuXG4gICAgICBuZXdPcHRpb25zLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgem9vbU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgem9vbU9wdGlvbnMsIG5ld09wdGlvbnMpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZS5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTp1cGRhdGUnLCB7XG4gICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBjbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICByZXR1cm4gbWVkaXVtWm9vbShfZXh0ZW5kcyh7fSwgem9vbU9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfTtcblxuICB2YXIgYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzZWxlY3RvcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHNlbGVjdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgbmV3SW1hZ2VzID0gc2VsZWN0b3JzLnJlZHVjZShmdW5jdGlvbiAoaW1hZ2VzQWNjdW11bGF0b3IsIGN1cnJlbnRTZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChpbWFnZXNBY2N1bXVsYXRvciwgZ2V0SW1hZ2VzRnJvbVNlbGVjdG9yKGN1cnJlbnRTZWxlY3RvcikpO1xuICAgIH0sIFtdKTtcblxuICAgIG5ld0ltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKG5ld0ltYWdlKSB7XG4gICAgICByZXR1cm4gaW1hZ2VzLmluZGV4T2YobmV3SW1hZ2UpID09PSAtMTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChuZXdJbWFnZSkge1xuICAgICAgaW1hZ2VzLnB1c2gobmV3SW1hZ2UpO1xuICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UnKTtcbiAgICB9KTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICAgIGxpc3RlbmVyID0gX3JlZi5saXN0ZW5lcixcbiAgICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuXG4gICAgICBuZXdJbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBkZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBzZWxlY3RvcnMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgc2VsZWN0b3JzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZS56b29tZWQpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuXG4gICAgdmFyIGltYWdlc1RvRGV0YWNoID0gc2VsZWN0b3JzLmxlbmd0aCA+IDAgPyBzZWxlY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChpbWFnZXNBY2N1bXVsYXRvciwgY3VycmVudFNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGltYWdlc0FjY3VtdWxhdG9yLCBnZXRJbWFnZXNGcm9tU2VsZWN0b3IoY3VycmVudFNlbGVjdG9yKSk7XG4gICAgfSwgW10pIDogaW1hZ2VzO1xuXG4gICAgaW1hZ2VzVG9EZXRhY2guZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS16b29tLWltYWdlJyk7XG4gICAgICBpbWFnZS5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpkZXRhY2gnLCB7XG4gICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGltYWdlcyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICByZXR1cm4gaW1hZ2VzVG9EZXRhY2guaW5kZXhPZihpbWFnZSkgPT09IC0xO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH07XG5cbiAgdmFyIG9uID0gZnVuY3Rpb24gb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21lZGl1bS16b29tOicgKyB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBldmVudExpc3RlbmVycy5wdXNoKHsgdHlwZTogJ21lZGl1bS16b29tOicgKyB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfTtcblxuICB2YXIgb2ZmID0gZnVuY3Rpb24gb2ZmKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtZWRpdW0tem9vbTonICsgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMgPSBldmVudExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiAhKGV2ZW50TGlzdGVuZXIudHlwZSA9PT0gJ21lZGl1bS16b29tOicgKyB0eXBlICYmIGV2ZW50TGlzdGVuZXIubGlzdGVuZXIudG9TdHJpbmcoKSA9PT0gbGlzdGVuZXIudG9TdHJpbmcoKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfTtcblxuICB2YXIgb3BlbiA9IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0O1xuXG4gICAgdmFyIF9hbmltYXRlID0gZnVuY3Rpb24gX2FuaW1hdGUoKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfTtcbiAgICAgIHZhciB2aWV3cG9ydFdpZHRoID0gdm9pZCAwO1xuICAgICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdm9pZCAwO1xuXG4gICAgICBpZiAoem9vbU9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIGlmICh6b29tT3B0aW9ucy5jb250YWluZXIgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAvLyBUaGUgY29udGFpbmVyIGlzIGdpdmVuIGFzIGFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgbGlrZSB3aWR0aCwgaGVpZ2h0LCBsZWZ0LCB0b3BcbiAgICAgICAgICBjb250YWluZXIgPSBfZXh0ZW5kcyh7fSwgY29udGFpbmVyLCB6b29tT3B0aW9ucy5jb250YWluZXIpO1xuXG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBhZGp1c3QgY3VzdG9tIG9wdGlvbnMgbGlrZSBjb250YWluZXIucmlnaHQgb3IgY29udGFpbmVyLmJvdHRvbVxuICAgICAgICAgIHZpZXdwb3J0V2lkdGggPSBjb250YWluZXIud2lkdGggLSBjb250YWluZXIubGVmdCAtIGNvbnRhaW5lci5yaWdodCAtIHpvb21PcHRpb25zLm1hcmdpbiAqIDI7XG4gICAgICAgICAgdmlld3BvcnRIZWlnaHQgPSBjb250YWluZXIuaGVpZ2h0IC0gY29udGFpbmVyLnRvcCAtIGNvbnRhaW5lci5ib3R0b20gLSB6b29tT3B0aW9ucy5tYXJnaW4gKiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBjb250YWluZXIgaXMgZ2l2ZW4gYXMgYW4gZWxlbWVudFxuICAgICAgICAgIHZhciB6b29tQ29udGFpbmVyID0gaXNOb2RlKHpvb21PcHRpb25zLmNvbnRhaW5lcikgPyB6b29tT3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHpvb21PcHRpb25zLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICB2YXIgX3pvb21Db250YWluZXIkZ2V0Qm91ID0gem9vbUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgX3dpZHRoID0gX3pvb21Db250YWluZXIkZ2V0Qm91LndpZHRoLFxuICAgICAgICAgICAgICBfaGVpZ2h0ID0gX3pvb21Db250YWluZXIkZ2V0Qm91LmhlaWdodCxcbiAgICAgICAgICAgICAgX2xlZnQgPSBfem9vbUNvbnRhaW5lciRnZXRCb3UubGVmdCxcbiAgICAgICAgICAgICAgX3RvcCA9IF96b29tQ29udGFpbmVyJGdldEJvdS50b3A7XG5cbiAgICAgICAgICBjb250YWluZXIgPSBfZXh0ZW5kcyh7fSwgY29udGFpbmVyLCB7XG4gICAgICAgICAgICB3aWR0aDogX3dpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBfaGVpZ2h0LFxuICAgICAgICAgICAgbGVmdDogX2xlZnQsXG4gICAgICAgICAgICB0b3A6IF90b3BcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2aWV3cG9ydFdpZHRoID0gdmlld3BvcnRXaWR0aCB8fCBjb250YWluZXIud2lkdGggLSB6b29tT3B0aW9ucy5tYXJnaW4gKiAyO1xuICAgICAgdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodCB8fCBjb250YWluZXIuaGVpZ2h0IC0gem9vbU9wdGlvbnMubWFyZ2luICogMjtcblxuICAgICAgdmFyIHpvb21UYXJnZXQgPSBhY3RpdmUuem9vbWVkSGQgfHwgYWN0aXZlLm9yaWdpbmFsO1xuICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IGlzU3ZnKHpvb21UYXJnZXQpID8gdmlld3BvcnRXaWR0aCA6IHpvb21UYXJnZXQubmF0dXJhbFdpZHRoIHx8IHZpZXdwb3J0V2lkdGg7XG4gICAgICB2YXIgbmF0dXJhbEhlaWdodCA9IGlzU3ZnKHpvb21UYXJnZXQpID8gdmlld3BvcnRIZWlnaHQgOiB6b29tVGFyZ2V0Lm5hdHVyYWxIZWlnaHQgfHwgdmlld3BvcnRIZWlnaHQ7XG5cbiAgICAgIHZhciBfem9vbVRhcmdldCRnZXRCb3VuZGkgPSB6b29tVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIHRvcCA9IF96b29tVGFyZ2V0JGdldEJvdW5kaS50b3AsXG4gICAgICAgICAgbGVmdCA9IF96b29tVGFyZ2V0JGdldEJvdW5kaS5sZWZ0LFxuICAgICAgICAgIHdpZHRoID0gX3pvb21UYXJnZXQkZ2V0Qm91bmRpLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF96b29tVGFyZ2V0JGdldEJvdW5kaS5oZWlnaHQ7XG5cbiAgICAgIHZhciBzY2FsZVggPSBNYXRoLm1pbihuYXR1cmFsV2lkdGgsIHZpZXdwb3J0V2lkdGgpIC8gd2lkdGg7XG4gICAgICB2YXIgc2NhbGVZID0gTWF0aC5taW4obmF0dXJhbEhlaWdodCwgdmlld3BvcnRIZWlnaHQpIC8gaGVpZ2h0O1xuICAgICAgdmFyIHNjYWxlID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgdmFyIHRyYW5zbGF0ZVggPSAoLWxlZnQgKyAodmlld3BvcnRXaWR0aCAtIHdpZHRoKSAvIDIgKyB6b29tT3B0aW9ucy5tYXJnaW4gKyBjb250YWluZXIubGVmdCkgLyBzY2FsZTtcbiAgICAgIHZhciB0cmFuc2xhdGVZID0gKC10b3AgKyAodmlld3BvcnRIZWlnaHQgLSBoZWlnaHQpIC8gMiArIHpvb21PcHRpb25zLm1hcmdpbiArIGNvbnRhaW5lci50b3ApIC8gc2NhbGU7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gJ3NjYWxlKCcgKyBzY2FsZSArICcpIHRyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCAnICsgdHJhbnNsYXRlWSArICdweCwgMCknO1xuXG4gICAgICBhY3RpdmUuem9vbWVkLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgICAgaWYgKGFjdGl2ZS56b29tZWRIZCkge1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIGlmICh0YXJnZXQgJiYgaW1hZ2VzLmluZGV4T2YodGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2hhbmRsZU9wZW5FbmQgPSBmdW5jdGlvbiBfaGFuZGxlT3BlbkVuZCgpIHtcbiAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgYWN0aXZlLnpvb21lZC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX2hhbmRsZU9wZW5FbmQpO1xuICAgICAgICBhY3RpdmUub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206b3BlbmVkJywge1xuICAgICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlLnpvb21lZCkge1xuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgLy8gVGhlIHpvb20gd2FzIHRyaWdnZXJlZCBtYW51YWxseSB2aWEgYSBjbGlja1xuICAgICAgICBhY3RpdmUub3JpZ2luYWwgPSB0YXJnZXQ7XG4gICAgICB9IGVsc2UgaWYgKGltYWdlcy5sZW5ndGggPiAwKSB7XG52YXIgX2ltYWdlcyA9IGltYWdlcztcbiAgICAgICAgYWN0aXZlLm9yaWdpbmFsID0gX2ltYWdlc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYWN0aXZlLm9yaWdpbmFsLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOm9wZW4nLCB7XG4gICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgIH0pKTtcblxuICAgICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbiAgICAgIGlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIGFjdGl2ZS56b29tZWQgPSBjbG9uZVRhcmdldChhY3RpdmUub3JpZ2luYWwpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgICBpZiAoem9vbU9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gaXNOb2RlKHpvb21PcHRpb25zLnRlbXBsYXRlKSA/IHpvb21PcHRpb25zLnRlbXBsYXRlIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih6b29tT3B0aW9ucy50ZW1wbGF0ZSk7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWN0aXZlLnRlbXBsYXRlKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3RpdmUuem9vbWVkKTtcblxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20tLW9wZW5lZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGFjdGl2ZS5vcmlnaW5hbC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZS0taGlkZGVuJyk7XG4gICAgICBhY3RpdmUuem9vbWVkLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLWltYWdlLS1vcGVuZWQnKTtcblxuICAgICAgYWN0aXZlLnpvb21lZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICAgIGFjdGl2ZS56b29tZWQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF9oYW5kbGVPcGVuRW5kKTtcblxuICAgICAgaWYgKGFjdGl2ZS5vcmlnaW5hbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtem9vbS1zcmMnKSkge1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQgPSBhY3RpdmUuem9vbWVkLmNsb25lTm9kZSgpO1xuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBgc2Nyc2V0YCBwcm9wZXJ0eSBvciB0aGUgSEQgaW1hZ2Ugd29uJ3QgbG9hZC5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnJlbW92ZUF0dHJpYnV0ZSgnc3Jjc2V0Jyk7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5yZW1vdmVBdHRyaWJ1dGUoJ3NpemVzJyk7XG5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnNyYyA9IGFjdGl2ZS56b29tZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXpvb20tc3JjJyk7XG5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChnZXRab29tVGFyZ2V0U2l6ZSk7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gcmVhY2ggdGhlIHpvb20gaW1hZ2UgdGFyZ2V0ICcgKyBhY3RpdmUuem9vbWVkSGQuc3JjKTtcbiAgICAgICAgICBhY3RpdmUuem9vbWVkSGQgPSBudWxsO1xuICAgICAgICAgIF9hbmltYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBhY2Nlc3MgdGhlIG5hdHVyYWwgc2l6ZSBvZiB0aGUgZnVsbCBIRFxuICAgICAgICAvLyB0YXJnZXQgYXMgZmFzdCBhcyBwb3NzaWJsZSB0byBjb21wdXRlIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHZhciBnZXRab29tVGFyZ2V0U2l6ZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIGFjdGl2ZS56b29tZWRIZC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnZXRab29tVGFyZ2V0U2l6ZSk7XG4gICAgICAgICAgICBhY3RpdmUuem9vbWVkSGQuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZCcpO1xuICAgICAgICAgICAgYWN0aXZlLnpvb21lZEhkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3RpdmUuem9vbWVkSGQpO1xuICAgICAgICAgICAgX2FuaW1hdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlLm9yaWdpbmFsLmhhc0F0dHJpYnV0ZSgnc3Jjc2V0JykpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaGFzIGEgYHNyY3NldGAgYXR0cmlidWV0LCB3ZSBkb24ndCBrbm93IHRoZSBkaW1lbnNpb25zIG9mIHRoZVxuICAgICAgICAvLyB6b29tZWQgKEhEKSBpbWFnZSAobGlrZSB3aGVuIGBkYXRhLXpvb20tc3JjYCBpcyBzcGVjaWZpZWQpLlxuICAgICAgICAvLyBUaGVyZWZvcmUgdGhlIGFwcHJvYWNoIGlzIHF1aXRlIHNpbWlsYXIuXG4gICAgICAgIGFjdGl2ZS56b29tZWRIZCA9IGFjdGl2ZS56b29tZWQuY2xvbmVOb2RlKCk7XG5cbiAgICAgICAgLy8gUmVzZXR0aW5nIHRoZSBzaXplcyBhdHRyaWJ1dGUgdGVsbHMgdGhlIGJyb3dzZXIgdG8gbG9hZCB0aGVcbiAgICAgICAgLy8gaW1hZ2UgYmVzdCBmaXR0aW5nIHRoZSBjdXJyZW50IHZpZXdwb3J0IHNpemUsIHJlc3BlY3RpbmcgdGhlIGBzcmNzZXRgLlxuICAgICAgICBhY3RpdmUuem9vbWVkSGQucmVtb3ZlQXR0cmlidXRlKCdzaXplcycpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBsb2FkIGV2ZW50IG9mIHRoZSBoZCBpbWFnZS4gVGhpcyB3aWxsIGZpcmUgaWYgdGhlIGltYWdlXG4gICAgICAgIC8vIGlzIGFscmVhZHkgY2FjaGVkLlxuICAgICAgICB2YXIgbG9hZEV2ZW50TGlzdGVuZXIgPSBhY3RpdmUuem9vbWVkSGQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhY3RpdmUuem9vbWVkSGQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBhY3RpdmUuem9vbWVkSGQuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZCcpO1xuICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFjdGl2ZS56b29tZWRIZCk7XG4gICAgICAgICAgX2FuaW1hdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfYW5pbWF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgaWYgKGlzQW5pbWF0aW5nIHx8ICFhY3RpdmUub3JpZ2luYWwpIHtcbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2hhbmRsZUNsb3NlRW5kID0gZnVuY3Rpb24gX2hhbmRsZUNsb3NlRW5kKCkge1xuICAgICAgICBhY3RpdmUub3JpZ2luYWwuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXpvb20taW1hZ2UtLWhpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFjdGl2ZS56b29tZWQpO1xuICAgICAgICBpZiAoYWN0aXZlLnpvb21lZEhkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhY3RpdmUuem9vbWVkSGQpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XG4gICAgICAgIGFjdGl2ZS56b29tZWQuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZCcpO1xuICAgICAgICBpZiAoYWN0aXZlLnRlbXBsYXRlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhY3RpdmUudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgYWN0aXZlLnpvb21lZC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX2hhbmRsZUNsb3NlRW5kKTtcblxuICAgICAgICBhY3RpdmUub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206Y2xvc2VkJywge1xuICAgICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbCA9IG51bGw7XG4gICAgICAgIGFjdGl2ZS56b29tZWQgPSBudWxsO1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQgPSBudWxsO1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUgPSBudWxsO1xuXG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICB9O1xuXG4gICAgICBpc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS16b29tLS1vcGVuZWQnKTtcbiAgICAgIGFjdGl2ZS56b29tZWQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgIGlmIChhY3RpdmUuem9vbWVkSGQpIHtcbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyBGYWRlIG91dCB0aGUgdGVtcGxhdGUgc28gaXQncyBub3QgdG9vIGFicnVwdFxuICAgICAgaWYgKGFjdGl2ZS50ZW1wbGF0ZSkge1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUuc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDE1MG1zJztcbiAgICAgICAgYWN0aXZlLnRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgfVxuXG4gICAgICBhY3RpdmUub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206Y2xvc2UnLCB7XG4gICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgIH0pKTtcblxuICAgICAgYWN0aXZlLnpvb21lZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX2hhbmRsZUNsb3NlRW5kKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHZhciBfcmVmMyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIHRhcmdldCA9IF9yZWYzLnRhcmdldDtcblxuICAgIGlmIChhY3RpdmUub3JpZ2luYWwpIHtcbiAgICAgIHJldHVybiBjbG9zZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBvcGVuKHsgdGFyZ2V0OiB0YXJnZXQgfSk7XG4gIH07XG5cbiAgdmFyIGdldE9wdGlvbnMgPSBmdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB6b29tT3B0aW9ucztcbiAgfTtcblxuICB2YXIgZ2V0SW1hZ2VzID0gZnVuY3Rpb24gZ2V0SW1hZ2VzKCkge1xuICAgIHJldHVybiBpbWFnZXM7XG4gIH07XG5cbiAgdmFyIGdldFpvb21lZEltYWdlID0gZnVuY3Rpb24gZ2V0Wm9vbWVkSW1hZ2UoKSB7XG4gICAgcmV0dXJuIGFjdGl2ZS5vcmlnaW5hbDtcbiAgfTtcblxuICB2YXIgaW1hZ2VzID0gW107XG4gIHZhciBldmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgdmFyIHNjcm9sbFRvcCA9IDA7XG4gIHZhciB6b29tT3B0aW9ucyA9IG9wdGlvbnM7XG4gIHZhciBhY3RpdmUgPSB7XG4gICAgb3JpZ2luYWw6IG51bGwsXG4gICAgem9vbWVkOiBudWxsLFxuICAgIHpvb21lZEhkOiBudWxsLFxuICAgIHRlbXBsYXRlOiBudWxsXG5cbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgaXMgb21pdHRlZCwgaXQncyByZXBsYWNlZCBieSB0aGUgb3B0aW9uc1xuICB9O2lmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc2VsZWN0b3IpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHpvb21PcHRpb25zID0gc2VsZWN0b3I7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyAvLyB0byBwcm9jZXNzIGVtcHR5IHN0cmluZyBhcyBhIHNlbGVjdG9yXG4gICkge1xuICAgICAgYXR0YWNoKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRlZmF1bHQgb3B0aW9uIHZhbHVlc1xuICB6b29tT3B0aW9ucyA9IF9leHRlbmRzKHtcbiAgICBtYXJnaW46IDAsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIHNjcm9sbE9mZnNldDogNDAsXG4gICAgY29udGFpbmVyOiBudWxsLFxuICAgIHRlbXBsYXRlOiBudWxsXG4gIH0sIHpvb21PcHRpb25zKTtcblxuICB2YXIgb3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoem9vbU9wdGlvbnMuYmFja2dyb3VuZCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIF9oYW5kbGVLZXlVcCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF9oYW5kbGVTY3JvbGwpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2xvc2UpO1xuXG4gIHZhciB6b29tID0ge1xuICAgIG9wZW46IG9wZW4sXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIGNsb25lOiBjbG9uZSxcbiAgICBhdHRhY2g6IGF0dGFjaCxcbiAgICBkZXRhY2g6IGRldGFjaCxcbiAgICBvbjogb24sXG4gICAgb2ZmOiBvZmYsXG4gICAgZ2V0T3B0aW9uczogZ2V0T3B0aW9ucyxcbiAgICBnZXRJbWFnZXM6IGdldEltYWdlcyxcbiAgICBnZXRab29tZWRJbWFnZTogZ2V0Wm9vbWVkSW1hZ2VcbiAgfTtcblxuICByZXR1cm4gem9vbTtcbn07XG5cbmZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIGNzcyA9IFwiLm1lZGl1bS16b29tLW92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuM3M7d2lsbC1jaGFuZ2U6b3BhY2l0eX0ubWVkaXVtLXpvb20tLW9wZW5lZCAubWVkaXVtLXpvb20tb3ZlcmxheXtjdXJzb3I6cG9pbnRlcjtjdXJzb3I6em9vbS1vdXQ7b3BhY2l0eToxfS5tZWRpdW0tem9vbS1pbWFnZXtjdXJzb3I6cG9pbnRlcjtjdXJzb3I6em9vbS1pbjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKC4yLDAsLjIsMSkhaW1wb3J0YW50fS5tZWRpdW0tem9vbS1pbWFnZS0taGlkZGVue3Zpc2liaWxpdHk6aGlkZGVufS5tZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVke3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyO2N1cnNvcjp6b29tLW91dDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19XCI7XG5zdHlsZUluamVjdChjc3MpO1xuXG5leHBvcnQgZGVmYXVsdCBtZWRpdW1ab29tO1xuIiwiaW1wb3J0IG1lZGl1bVpvb20gZnJvbSAnbWVkaXVtLXpvb20nO1xuXG5jb25zdCBmbHVpZHZpZHMgPSByZXF1aXJlKCdmbHVpZHZpZHMuanMvZGlzdC9mbHVpZHZpZHMuanMnKTtcblxuLy8gSW5pdCBGbHVpZFZpZHNcbmZsdWlkdmlkcy5pbml0KHtcbiAgc2VsZWN0b3I6IFsnaWZyYW1lJywgJ29iamVjdCddLFxuICBwbGF5ZXJzOiBbJ3d3dy55b3V0dWJlLmNvbScsICdwbGF5ZXIudmltZW8uY29tJ11cbn0pO1xuXG4vLyBNZWRpdW0gWm9vbVxuY29uc3QgcG9zdEltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZy1pbWFnZScpO1xuY29uc3QgZ2FsbGVyeUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZy1nYWxsZXJ5LWltYWdlIGltZycpO1xuXG5jb25zdCB0b3RhbEltYWdlcyA9IFsuLi5wb3N0SW1hZ2VzLCAuLi5nYWxsZXJ5SW1hZ2VzXTtcblxubWVkaXVtWm9vbSh0b3RhbEltYWdlcywge1xuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjc1KSdcbn0pO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJlYWRpbmcgUHJvZ3Jlc3MgQmFyIGFuZCBTaGFyZSBCYXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubGV0IGxhc3RLbm93blNjcm9sbFBvcyA9IDA7XG5sZXQgdGlja2luZyA9IGZhbHNlO1xuXG4vLyBWYXJpYWJsZXMgZm9yIHJlYWRpbmcgcHJvZ3Jlc3NcbmNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtcmVhZGluZy1wcm9ncmVzcycpO1xuY29uc3Qgc2hhcmVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1zaGFyZS1iYXInKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItLW91dGVyLWNvbnRhaW5lcicpO1xuY29uc3QgYnVmZmVyID0gNTA7XG5cbi8vIFZhcmlhYmxlcyBmb3Igc2hhcmUgYmFyXG5jb25zdCBwb3N0SW1nID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RfX2ltZycpIHx8XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0X19uby1pbWcnKTtcbmNvbnN0IHBvc3RDb250ZW50SGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RfX2NvbnRlbnQnKTtcblxuY29uc3QgcmVhZGluZ0JhclByb2dyZXNzID0gKHNjcm9sbFBvcykgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IE1hdGguY2VpbChcbiAgICAoc2Nyb2xsUG9zIC8gcG9zdENvbnRlbnRIZWlnaHQuY2xpZW50SGVpZ2h0KSAqIDEwMFxuICApO1xuICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzfSVgO1xufTtcblxuY29uc3Qgc2hhcmVCYXJBbmltYXRpb24gPSAoKSA9PiB7XG4gIGlmIChcbiAgICBwb3N0SW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIGJ1ZmZlciA8XG4gICAgICBzaGFyZUJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgJiZcbiAgICBzaGFyZUJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPFxuICAgICAgZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGJ1ZmZlclxuICApIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgICBzaGFyZUJhci5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuICAgICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hhcmVCYXIuc3R5bGUubWFyZ2luQm90dG9tID0gJzAnO1xuICAgICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG4gIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgc2hhcmVCYXIuc3R5bGUubWFyZ2luTGVmdCA9ICctMjAwcHgnO1xuICAgIHNoYXJlQmFyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIH0gZWxzZSB7XG4gICAgc2hhcmVCYXIuc3R5bGUubWFyZ2luQm90dG9tID0gJy0xMDBweCc7XG4gICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgfVxufTtcblxuaWYgKHNoYXJlQmFyICE9PSBudWxsKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgbGFzdEtub3duU2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzaGFyZUJhckFuaW1hdGlvbigpO1xuICAgICAgICBpZiAocHJvZ3Jlc3NCYXIgIT09IG51bGwpIHtcbiAgICAgICAgICByZWFkaW5nQmFyUHJvZ3Jlc3MobGFzdEtub3duU2Nyb2xsUG9zKTtcbiAgICAgICAgfVxuICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb3B5IEZ1bmN0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weS1idXR0b24nKTtcblxuaWYgKGNvcHlCdXR0b24pIHtcbiAgY29weUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXApO1xuICAgIHRlbXAudmFsdWUgPSB1cmw7XG4gICAgdGVtcC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcCk7XG4gIH0pO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1ha2UgdGFibGVzIHJlc3BvbnNpdmVcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3RfX2NvbnRlbnQgPiB0YWJsZScpO1xuXG5mdW5jdGlvbiB0YWJsZVByZXBlbmQoZSkge1xuICBjb25zdCByZXNwb25zaXZlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXNwb25zaXZlV3JhcHBlci5zZXRBdHRyaWJ1dGUoXG4gICAgJ3N0eWxlJyxcbiAgICAnd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6IGF1dG87IG1hcmdpbjogMWVtIDA7J1xuICApO1xuICBlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc3BvbnNpdmVXcmFwcGVyLCBlKTtcbiAgcmVzcG9uc2l2ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZSk7XG59XG5cbnRhYmxlcy5mb3JFYWNoKChlKSA9PiB0YWJsZVByZXBlbmQoZSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==