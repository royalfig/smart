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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/post.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/post.js":
/*!***************************!*\
  !*** ./assets/js/post.js ***!
  \***************************/
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

/***/ }),

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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsdWlkdmlkcy5qcy9kaXN0L2ZsdWlkdmlkcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWVkaXVtLXpvb20vZGlzdC9tZWRpdW0tem9vbS5lc20uanMiXSwibmFtZXMiOlsiZmx1aWR2aWRzIiwicmVxdWlyZSIsImluaXQiLCJzZWxlY3RvciIsInBsYXllcnMiLCJwb3N0SW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyeUltYWdlcyIsInRvdGFsSW1hZ2VzIiwibWVkaXVtWm9vbSIsImJhY2tncm91bmQiLCJsYXN0S25vd25TY3JvbGxQb3MiLCJ0aWNraW5nIiwicHJvZ3Jlc3NCYXIiLCJxdWVyeVNlbGVjdG9yIiwic2hhcmVCYXIiLCJmb290ZXIiLCJidWZmZXIiLCJwb3N0SW1nIiwicG9zdENvbnRlbnRIZWlnaHQiLCJyZWFkaW5nQmFyUHJvZ3Jlc3MiLCJzY3JvbGxQb3MiLCJwcm9ncmVzcyIsIk1hdGgiLCJjZWlsIiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJ3aWR0aCIsInNoYXJlQmFyQW5pbWF0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwidG9wIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1hcmdpbkxlZnQiLCJvcGFjaXR5IiwibWFyZ2luQm90dG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb3B5QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJ0ZW1wIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInRhYmxlcyIsInRhYmxlUHJlcGVuZCIsImUiLCJyZXNwb25zaXZlV3JhcHBlciIsInNldEF0dHJpYnV0ZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLHFGQUFELENBQXpCLEMsQ0FFQTs7O0FBQ0FELFNBQVMsQ0FBQ0UsSUFBVixDQUFlO0FBQ2JDLFVBQVEsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLENBREc7QUFFYkMsU0FBTyxFQUFFLENBQUMsaUJBQUQsRUFBb0Isa0JBQXBCO0FBRkksQ0FBZixFLENBS0E7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLENBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLHVCQUExQixDQUF0QjtBQUVBLElBQU1FLFdBQVcsZ0NBQU9KLFVBQVAsc0JBQXNCRyxhQUF0QixFQUFqQjtBQUVBRSwyREFBVSxDQUFDRCxXQUFELEVBQWM7QUFDdEJFLFlBQVUsRUFBRTtBQURVLENBQWQsQ0FBVixDLENBSUE7QUFDQTtBQUNBOztBQUNBLElBQUlDLGtCQUFrQixHQUFHLENBQXpCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEtBQWQsQyxDQUVBOztBQUNBLElBQU1DLFdBQVcsR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLHdCQUF2QixDQUFwQjtBQUNBLElBQU1DLFFBQVEsR0FBR1YsUUFBUSxDQUFDUyxhQUFULENBQXVCLGlCQUF2QixDQUFqQjtBQUNBLElBQU1FLE1BQU0sR0FBR1gsUUFBUSxDQUFDUyxhQUFULENBQXVCLDBCQUF2QixDQUFmO0FBQ0EsSUFBTUcsTUFBTSxHQUFHLEVBQWYsQyxDQUVBOztBQUNBLElBQU1DLE9BQU8sR0FDWGIsUUFBUSxDQUFDUyxhQUFULENBQXVCLFlBQXZCLEtBQ0FULFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixlQUF2QixDQUZGO0FBR0EsSUFBTUssaUJBQWlCLEdBQUdkLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBMUI7O0FBRUEsSUFBTU0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxTQUFELEVBQWU7QUFDeEMsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FDZEgsU0FBUyxHQUFHRixpQkFBaUIsQ0FBQ00sWUFBL0IsR0FBK0MsR0FEaEMsQ0FBakI7QUFHQVosYUFBVyxDQUFDYSxLQUFaLENBQWtCQyxLQUFsQixhQUE2QkwsUUFBN0I7QUFDRCxDQUxEOztBQU9BLElBQU1NLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixNQUNFVixPQUFPLENBQUNXLHFCQUFSLEdBQWdDQyxNQUFoQyxHQUF5Q2IsTUFBekMsR0FDRUYsUUFBUSxDQUFDYyxxQkFBVCxHQUFpQ0UsR0FEbkMsSUFFQWhCLFFBQVEsQ0FBQ2MscUJBQVQsR0FBaUNDLE1BQWpDLEdBQ0VkLE1BQU0sQ0FBQ2EscUJBQVAsR0FBK0JFLEdBQS9CLEdBQXFDZCxNQUp6QyxFQUtFO0FBQ0EsUUFBSWUsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQXhCLEVBQThCO0FBQzVCbEIsY0FBUSxDQUFDVyxLQUFULENBQWVRLFVBQWYsR0FBNEIsR0FBNUI7QUFDQW5CLGNBQVEsQ0FBQ1csS0FBVCxDQUFlUyxPQUFmLEdBQXlCLEdBQXpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xwQixjQUFRLENBQUNXLEtBQVQsQ0FBZVUsWUFBZixHQUE4QixHQUE5QjtBQUNBckIsY0FBUSxDQUFDVyxLQUFULENBQWVTLE9BQWYsR0FBeUIsR0FBekI7QUFDRDtBQUNGLEdBYkQsTUFhTyxJQUFJSCxNQUFNLENBQUNDLFVBQVAsR0FBb0IsSUFBeEIsRUFBOEI7QUFDbkNsQixZQUFRLENBQUNXLEtBQVQsQ0FBZVEsVUFBZixHQUE0QixRQUE1QjtBQUNBbkIsWUFBUSxDQUFDVyxLQUFULENBQWVTLE9BQWYsR0FBeUIsR0FBekI7QUFDRCxHQUhNLE1BR0E7QUFDTHBCLFlBQVEsQ0FBQ1csS0FBVCxDQUFlVSxZQUFmLEdBQThCLFFBQTlCO0FBQ0FyQixZQUFRLENBQUNXLEtBQVQsQ0FBZVMsT0FBZixHQUF5QixHQUF6QjtBQUNEO0FBQ0YsQ0FyQkQ7O0FBdUJBLElBQUlwQixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJpQixRQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdEMxQixzQkFBa0IsR0FBR3FCLE1BQU0sQ0FBQ00sT0FBNUI7O0FBRUEsUUFBSSxDQUFDMUIsT0FBTCxFQUFjO0FBQ1pvQixZQUFNLENBQUNPLHFCQUFQLENBQTZCLFlBQU07QUFDakNYLHlCQUFpQjs7QUFDakIsWUFBSWYsV0FBVyxLQUFLLElBQXBCLEVBQTBCO0FBQ3hCTyw0QkFBa0IsQ0FBQ1Qsa0JBQUQsQ0FBbEI7QUFDRDs7QUFDREMsZUFBTyxHQUFHLEtBQVY7QUFDRCxPQU5EO0FBUUFBLGFBQU8sR0FBRyxJQUFWO0FBQ0Q7QUFDRixHQWREO0FBZUQsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTTRCLFVBQVUsR0FBR25DLFFBQVEsQ0FBQ29DLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7O0FBRUEsSUFBSUQsVUFBSixFQUFnQjtBQUNkQSxZQUFVLENBQUNILGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07QUFDekMsUUFBTUssR0FBRyxHQUFHVixNQUFNLENBQUNXLFFBQVAsQ0FBZ0JDLElBQTVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHeEMsUUFBUSxDQUFDeUMsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0F6QyxZQUFRLENBQUMwQyxJQUFULENBQWNDLFdBQWQsQ0FBMEJILElBQTFCO0FBQ0FBLFFBQUksQ0FBQ0ksS0FBTCxHQUFhUCxHQUFiO0FBQ0FHLFFBQUksQ0FBQ0ssTUFBTDtBQUNBN0MsWUFBUSxDQUFDOEMsV0FBVCxDQUFxQixNQUFyQjtBQUNBOUMsWUFBUSxDQUFDMEMsSUFBVCxDQUFjSyxXQUFkLENBQTBCUCxJQUExQjtBQUNELEdBUkQ7QUFTRCxDLENBRUQ7QUFDQTtBQUNBOzs7QUFDQSxJQUFNUSxNQUFNLEdBQUdoRCxRQUFRLENBQUNDLGdCQUFULENBQTBCLHdCQUExQixDQUFmOztBQUVBLFNBQVNnRCxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUN2QixNQUFNQyxpQkFBaUIsR0FBR25ELFFBQVEsQ0FBQ3lDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUI7QUFDQVUsbUJBQWlCLENBQUNDLFlBQWxCLENBQ0UsT0FERixFQUVFLCtDQUZGO0FBSUFGLEdBQUMsQ0FBQ0csVUFBRixDQUFhQyxZQUFiLENBQTBCSCxpQkFBMUIsRUFBNkNELENBQTdDO0FBQ0FDLG1CQUFpQixDQUFDUixXQUFsQixDQUE4Qk8sQ0FBOUI7QUFDRDs7QUFFREYsTUFBTSxDQUFDTyxPQUFQLENBQWUsVUFBQ0wsQ0FBRDtBQUFBLFNBQU9ELFlBQVksQ0FBQ0MsQ0FBRCxDQUFuQjtBQUFBLENBQWYsRTs7Ozs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxvQ0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDbkIsR0FBRyxNQUFNLEVBSU47QUFDSCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQixpQkFBaUIsb0JBQW9CO0FBQ3hELE1BQU07QUFDTixzQkFBc0I7QUFDdEIsMEJBQTBCLFVBQVUsV0FBVyxhQUFhLGNBQWM7QUFDMUUsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEVEO0FBQUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGlCQUFpQjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQSx3RUFBd0UsYUFBYTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkUsZUFBZTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHlCQUF5QixvRUFBb0U7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0Esc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsUUFBUTs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGVBQWUsTUFBTSxRQUFRLFNBQVMsT0FBTyxVQUFVLHVCQUF1QixvQkFBb0IsMENBQTBDLGVBQWUsZ0JBQWdCLFVBQVUsbUJBQW1CLGVBQWUsZUFBZSwyREFBMkQsMkJBQTJCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLGVBQWUsZ0JBQWdCLHNCQUFzQjtBQUNoZDs7QUFFZSx5RUFBVSxFQUFDIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9wb3N0LmpzXCIpO1xuIiwiaW1wb3J0IG1lZGl1bVpvb20gZnJvbSAnbWVkaXVtLXpvb20nO1xuXG5jb25zdCBmbHVpZHZpZHMgPSByZXF1aXJlKCdmbHVpZHZpZHMuanMvZGlzdC9mbHVpZHZpZHMuanMnKTtcblxuLy8gSW5pdCBGbHVpZFZpZHNcbmZsdWlkdmlkcy5pbml0KHtcbiAgc2VsZWN0b3I6IFsnaWZyYW1lJywgJ29iamVjdCddLFxuICBwbGF5ZXJzOiBbJ3d3dy55b3V0dWJlLmNvbScsICdwbGF5ZXIudmltZW8uY29tJ11cbn0pO1xuXG4vLyBNZWRpdW0gWm9vbVxuY29uc3QgcG9zdEltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZy1pbWFnZScpO1xuY29uc3QgZ2FsbGVyeUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZy1nYWxsZXJ5LWltYWdlIGltZycpO1xuXG5jb25zdCB0b3RhbEltYWdlcyA9IFsuLi5wb3N0SW1hZ2VzLCAuLi5nYWxsZXJ5SW1hZ2VzXTtcblxubWVkaXVtWm9vbSh0b3RhbEltYWdlcywge1xuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjc1KSdcbn0pO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJlYWRpbmcgUHJvZ3Jlc3MgQmFyIGFuZCBTaGFyZSBCYXJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubGV0IGxhc3RLbm93blNjcm9sbFBvcyA9IDA7XG5sZXQgdGlja2luZyA9IGZhbHNlO1xuXG4vLyBWYXJpYWJsZXMgZm9yIHJlYWRpbmcgcHJvZ3Jlc3NcbmNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtcmVhZGluZy1wcm9ncmVzcycpO1xuY29uc3Qgc2hhcmVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1zaGFyZS1iYXInKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItLW91dGVyLWNvbnRhaW5lcicpO1xuY29uc3QgYnVmZmVyID0gNTA7XG5cbi8vIFZhcmlhYmxlcyBmb3Igc2hhcmUgYmFyXG5jb25zdCBwb3N0SW1nID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RfX2ltZycpIHx8XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0X19uby1pbWcnKTtcbmNvbnN0IHBvc3RDb250ZW50SGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RfX2NvbnRlbnQnKTtcblxuY29uc3QgcmVhZGluZ0JhclByb2dyZXNzID0gKHNjcm9sbFBvcykgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IE1hdGguY2VpbChcbiAgICAoc2Nyb2xsUG9zIC8gcG9zdENvbnRlbnRIZWlnaHQuY2xpZW50SGVpZ2h0KSAqIDEwMFxuICApO1xuICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzfSVgO1xufTtcblxuY29uc3Qgc2hhcmVCYXJBbmltYXRpb24gPSAoKSA9PiB7XG4gIGlmIChcbiAgICBwb3N0SW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIGJ1ZmZlciA8XG4gICAgICBzaGFyZUJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgJiZcbiAgICBzaGFyZUJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPFxuICAgICAgZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGJ1ZmZlclxuICApIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgICBzaGFyZUJhci5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuICAgICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hhcmVCYXIuc3R5bGUubWFyZ2luQm90dG9tID0gJzAnO1xuICAgICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG4gIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgc2hhcmVCYXIuc3R5bGUubWFyZ2luTGVmdCA9ICctMjAwcHgnO1xuICAgIHNoYXJlQmFyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIH0gZWxzZSB7XG4gICAgc2hhcmVCYXIuc3R5bGUubWFyZ2luQm90dG9tID0gJy0xMDBweCc7XG4gICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgfVxufTtcblxuaWYgKHNoYXJlQmFyICE9PSBudWxsKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgbGFzdEtub3duU2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzaGFyZUJhckFuaW1hdGlvbigpO1xuICAgICAgICBpZiAocHJvZ3Jlc3NCYXIgIT09IG51bGwpIHtcbiAgICAgICAgICByZWFkaW5nQmFyUHJvZ3Jlc3MobGFzdEtub3duU2Nyb2xsUG9zKTtcbiAgICAgICAgfVxuICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb3B5IEZ1bmN0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weS1idXR0b24nKTtcblxuaWYgKGNvcHlCdXR0b24pIHtcbiAgY29weUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXApO1xuICAgIHRlbXAudmFsdWUgPSB1cmw7XG4gICAgdGVtcC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcCk7XG4gIH0pO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1ha2UgdGFibGVzIHJlc3BvbnNpdmVcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3RfX2NvbnRlbnQgPiB0YWJsZScpO1xuXG5mdW5jdGlvbiB0YWJsZVByZXBlbmQoZSkge1xuICBjb25zdCByZXNwb25zaXZlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXNwb25zaXZlV3JhcHBlci5zZXRBdHRyaWJ1dGUoXG4gICAgJ3N0eWxlJyxcbiAgICAnd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6IGF1dG87IG1hcmdpbjogMWVtIDA7J1xuICApO1xuICBlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc3BvbnNpdmVXcmFwcGVyLCBlKTtcbiAgcmVzcG9uc2l2ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZSk7XG59XG5cbnRhYmxlcy5mb3JFYWNoKChlKSA9PiB0YWJsZVByZXBlbmQoZSkpO1xuIiwiLyohIGZsdWlkdmlkcy5qcyB2Mi40LjEgfCAoYykgMjAxNCBAdG9kZG1vdHRvIHwgaHR0cHM6Ly9naXRodWIuY29tL3RvZGRtb3R0by9mbHVpZHZpZHMgKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcbiAgfSBlbHNlIHtcbiAgICByb290LmZsdWlkdmlkcyA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZmx1aWR2aWRzID0ge1xuICAgIHNlbGVjdG9yOiBbJ2lmcmFtZScsICdvYmplY3QnXSxcbiAgICBwbGF5ZXJzOiBbJ3d3dy55b3V0dWJlLmNvbScsICdwbGF5ZXIudmltZW8uY29tJ11cbiAgfTtcblxuICB2YXIgY3NzID0gW1xuICAgICcuZmx1aWR2aWRzIHsnLFxuICAgICAgJ3dpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDEwMCU7IHBvc2l0aW9uOiByZWxhdGl2ZTsnLFxuICAgICd9JyxcbiAgICAnLmZsdWlkdmlkcy1pdGVtIHsnLFxuICAgICAgJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsnLFxuICAgICd9J1xuICBdLmpvaW4oJycpO1xuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMgKHNyYykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCdeKGh0dHBzPzopP1xcL1xcLyg/OicgKyBmbHVpZHZpZHMucGxheWVycy5qb2luKCd8JykgKyAnKS4qJCcsICdpJykudGVzdChzcmMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmF0aW8gKGhlaWdodCwgd2lkdGgpIHtcbiAgICByZXR1cm4gKChwYXJzZUludChoZWlnaHQsIDEwKSAvIHBhcnNlSW50KHdpZHRoLCAxMCkpICogMTAwKSArICclJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdWlkIChlbGVtKSB7XG4gICAgaWYgKCFtYXRjaGVzKGVsZW0uc3JjKSAmJiAhbWF0Y2hlcyhlbGVtLmRhdGEpIHx8ICEhZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmx1aWR2aWRzJykpIHJldHVybjtcbiAgICB2YXIgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcCwgZWxlbSk7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gKGVsZW0uY2xhc3NOYW1lID8gJyAnIDogJycpICsgJ2ZsdWlkdmlkcy1pdGVtJztcbiAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1mbHVpZHZpZHMnLCAnbG9hZGVkJyk7XG4gICAgd3JhcC5jbGFzc05hbWUgKz0gJ2ZsdWlkdmlkcyc7XG4gICAgd3JhcC5zdHlsZS5wYWRkaW5nVG9wID0gZ2V0UmF0aW8oZWxlbS5oZWlnaHQsIGVsZW0ud2lkdGgpO1xuICAgIHdyYXAuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHlsZXMgKCkge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gJzxwPng8L3A+PHN0eWxlPicgKyBjc3MgKyAnPC9zdHlsZT4nO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMV0pO1xuICB9XG5cbiAgZmx1aWR2aWRzLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGZsdWlkdmlkcy5zZWxlY3Rvci5qb2luKCkpO1xuICAgIHZhciBpID0gbm9kZXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGZsdWlkKG5vZGVzW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgZmx1aWR2aWRzLmluaXQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgZmx1aWR2aWRzW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gICAgZmx1aWR2aWRzLnJlbmRlcigpO1xuICAgIGFkZFN0eWxlcygpO1xuICB9O1xuXG4gIHJldHVybiBmbHVpZHZpZHM7XG5cbn0pO1xuIiwiLyohIG1lZGl1bS16b29tIDEuMC41IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vZnJhbmNvaXNjaGFsaWZvdXIvbWVkaXVtLXpvb20gKi9cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBpc1N1cHBvcnRlZChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTUcnO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xudmFyIGlzTm9kZUxpc3QgPSBmdW5jdGlvbiBpc05vZGVMaXN0KHNlbGVjdG9yKSB7XG4gIHJldHVybiBOb2RlTGlzdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihzZWxlY3Rvcik7XG59O1xuXG52YXIgaXNOb2RlID0gZnVuY3Rpb24gaXNOb2RlKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciAmJiBzZWxlY3Rvci5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbnZhciBpc1N2ZyA9IGZ1bmN0aW9uIGlzU3ZnKGltYWdlKSB7XG4gIHZhciBzb3VyY2UgPSBpbWFnZS5jdXJyZW50U3JjIHx8IGltYWdlLnNyYztcbiAgcmV0dXJuIHNvdXJjZS5zdWJzdHIoLTQpLnRvTG93ZXJDYXNlKCkgPT09ICcuc3ZnJztcbn07XG5cbnZhciBnZXRJbWFnZXNGcm9tU2VsZWN0b3IgPSBmdW5jdGlvbiBnZXRJbWFnZXNGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdHJ5IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvci5maWx0ZXIoaXNTdXBwb3J0ZWQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGVMaXN0KHNlbGVjdG9yKSkge1xuICAgICAgLy8gRG8gbm90IHVzZSBzcHJlYWQgb3BlcmF0b3Igb3IgQXJyYXkuZnJvbSgpIGZvciBJRSBzdXBwb3J0XG4gICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChzZWxlY3RvcikuZmlsdGVyKGlzU3VwcG9ydGVkKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIFtzZWxlY3Rvcl0uZmlsdGVyKGlzU3VwcG9ydGVkKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gRG8gbm90IHVzZSBzcHJlYWQgb3BlcmF0b3Igb3IgQXJyYXkuZnJvbSgpIGZvciBJRSBzdXBwb3J0XG4gICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZmlsdGVyKGlzU3VwcG9ydGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBwcm92aWRlZCBzZWxlY3RvciBpcyBpbnZhbGlkLlxcbicgKyAnRXhwZWN0cyBhIENTUyBzZWxlY3RvciwgYSBOb2RlIGVsZW1lbnQsIGEgTm9kZUxpc3Qgb3IgYW4gYXJyYXkuXFxuJyArICdTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mcmFuY29pc2NoYWxpZm91ci9tZWRpdW0tem9vbScpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlT3ZlcmxheSA9IGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoYmFja2dyb3VuZCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLW92ZXJsYXknKTtcbiAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcblxuICByZXR1cm4gb3ZlcmxheTtcbn07XG5cbnZhciBjbG9uZVRhcmdldCA9IGZ1bmN0aW9uIGNsb25lVGFyZ2V0KHRlbXBsYXRlKSB7XG4gIHZhciBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcgPSB0ZW1wbGF0ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHRvcCA9IF90ZW1wbGF0ZSRnZXRCb3VuZGluZy50b3AsXG4gICAgICBsZWZ0ID0gX3RlbXBsYXRlJGdldEJvdW5kaW5nLmxlZnQsXG4gICAgICB3aWR0aCA9IF90ZW1wbGF0ZSRnZXRCb3VuZGluZy53aWR0aCxcbiAgICAgIGhlaWdodCA9IF90ZW1wbGF0ZSRnZXRCb3VuZGluZy5oZWlnaHQ7XG5cbiAgdmFyIGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKCk7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcblxuICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgY2xvbmUuc3R5bGUudG9wID0gdG9wICsgc2Nyb2xsVG9wICsgJ3B4JztcbiAgY2xvbmUuc3R5bGUubGVmdCA9IGxlZnQgKyBzY3JvbGxMZWZ0ICsgJ3B4JztcbiAgY2xvbmUuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gIGNsb25lLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gIGNsb25lLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gIHJldHVybiBjbG9uZTtcbn07XG5cbnZhciBjcmVhdGVDdXN0b21FdmVudCA9IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50KHR5cGUsIHBhcmFtcykge1xuICB2YXIgZXZlbnRQYXJhbXMgPSBfZXh0ZW5kcyh7XG4gICAgYnViYmxlczogZmFsc2UsXG4gICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgfSwgcGFyYW1zKTtcblxuICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgZXZlbnRQYXJhbXMpO1xuICB9XG5cbiAgdmFyIGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudCh0eXBlLCBldmVudFBhcmFtcy5idWJibGVzLCBldmVudFBhcmFtcy5jYW5jZWxhYmxlLCBldmVudFBhcmFtcy5kZXRhaWwpO1xuXG4gIHJldHVybiBjdXN0b21FdmVudDtcbn07XG5cbnZhciBtZWRpdW1ab29tID0gZnVuY3Rpb24gbWVkaXVtWm9vbShzZWxlY3Rvcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgLyoqXG4gICAqIEVuc3VyZSB0aGUgY29tcGF0aWJpbGl0eSB3aXRoIElFMTEgaWYgbm8gUHJvbWlzZSBwb2x5ZmlsbCBhcmUgdXNlZC5cbiAgICovXG4gIHZhciBQcm9taXNlID0gd2luZG93LlByb21pc2UgfHwgZnVuY3Rpb24gUHJvbWlzZShmbikge1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICAgIGZuKG5vb3AsIG5vb3ApO1xuICB9O1xuXG4gIHZhciBfaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBfaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG5cbiAgICBpZiAodGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbWFnZXMuaW5kZXhPZih0YXJnZXQpID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRvZ2dsZSh7IHRhcmdldDogdGFyZ2V0IH0pO1xuICB9O1xuXG4gIHZhciBfaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gX2hhbmRsZVNjcm9sbCgpIHtcbiAgICBpZiAoaXNBbmltYXRpbmcgfHwgIWFjdGl2ZS5vcmlnaW5hbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcblxuICAgIGlmIChNYXRoLmFicyhzY3JvbGxUb3AgLSBjdXJyZW50U2Nyb2xsKSA+IHpvb21PcHRpb25zLnNjcm9sbE9mZnNldCkge1xuICAgICAgc2V0VGltZW91dChjbG9zZSwgMTUwKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIF9oYW5kbGVLZXlVcChldmVudCkge1xuICAgIHZhciBrZXkgPSBldmVudC5rZXkgfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIC8vIENsb3NlIGlmIGVzY2FwZSBrZXkgaXMgcHJlc3NlZFxuICAgIGlmIChrZXkgPT09ICdFc2NhcGUnIHx8IGtleSA9PT0gJ0VzYycgfHwga2V5ID09PSAyNykge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICB2YXIgbmV3T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kKSB7XG4gICAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLmJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY29udGFpbmVyICYmIG9wdGlvbnMuY29udGFpbmVyIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICBuZXdPcHRpb25zLmNvbnRhaW5lciA9IF9leHRlbmRzKHt9LCB6b29tT3B0aW9ucy5jb250YWluZXIsIG9wdGlvbnMuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy50ZW1wbGF0ZSkge1xuICAgICAgdmFyIHRlbXBsYXRlID0gaXNOb2RlKG9wdGlvbnMudGVtcGxhdGUpID8gb3B0aW9ucy50ZW1wbGF0ZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy50ZW1wbGF0ZSk7XG5cbiAgICAgIG5ld09wdGlvbnMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICB6b29tT3B0aW9ucyA9IF9leHRlbmRzKHt9LCB6b29tT3B0aW9ucywgbmV3T3B0aW9ucyk7XG5cbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGltYWdlLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOnVwZGF0ZScsIHtcbiAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH07XG5cbiAgdmFyIGNsb25lID0gZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHJldHVybiBtZWRpdW1ab29tKF9leHRlbmRzKHt9LCB6b29tT3B0aW9ucywgb3B0aW9ucykpO1xuICB9O1xuXG4gIHZhciBhdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNlbGVjdG9ycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgc2VsZWN0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBuZXdJbWFnZXMgPSBzZWxlY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChpbWFnZXNBY2N1bXVsYXRvciwgY3VycmVudFNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGltYWdlc0FjY3VtdWxhdG9yLCBnZXRJbWFnZXNGcm9tU2VsZWN0b3IoY3VycmVudFNlbGVjdG9yKSk7XG4gICAgfSwgW10pO1xuXG4gICAgbmV3SW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAobmV3SW1hZ2UpIHtcbiAgICAgIHJldHVybiBpbWFnZXMuaW5kZXhPZihuZXdJbWFnZSkgPT09IC0xO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG5ld0ltYWdlKSB7XG4gICAgICBpbWFnZXMucHVzaChuZXdJbWFnZSk7XG4gICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZScpO1xuICAgIH0pO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgICAgbGlzdGVuZXIgPSBfcmVmLmxpc3RlbmVyLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG5cbiAgICAgIG5ld0ltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH07XG5cbiAgdmFyIGRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNlbGVjdG9ycyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBzZWxlY3RvcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlLnpvb21lZCkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG5cbiAgICB2YXIgaW1hZ2VzVG9EZXRhY2ggPSBzZWxlY3RvcnMubGVuZ3RoID4gMCA/IHNlbGVjdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGltYWdlc0FjY3VtdWxhdG9yLCBjdXJyZW50U2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoaW1hZ2VzQWNjdW11bGF0b3IsIGdldEltYWdlc0Zyb21TZWxlY3RvcihjdXJyZW50U2VsZWN0b3IpKTtcbiAgICB9LCBbXSkgOiBpbWFnZXM7XG5cbiAgICBpbWFnZXNUb0RldGFjaC5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXpvb20taW1hZ2UnKTtcbiAgICAgIGltYWdlLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOmRldGFjaCcsIHtcbiAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaW1hZ2VzID0gaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIHJldHVybiBpbWFnZXNUb0RldGFjaC5pbmRleE9mKGltYWdlKSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfTtcblxuICB2YXIgb24gPSBmdW5jdGlvbiBvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbWVkaXVtLXpvb206JyArIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goeyB0eXBlOiAnbWVkaXVtLXpvb206JyArIHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciwgb3B0aW9uczogb3B0aW9ucyB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBvZmYgPSBmdW5jdGlvbiBvZmYodHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lZGl1bS16b29tOicgKyB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBldmVudExpc3RlbmVycyA9IGV2ZW50TGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoZXZlbnRMaXN0ZW5lcikge1xuICAgICAgcmV0dXJuICEoZXZlbnRMaXN0ZW5lci50eXBlID09PSAnbWVkaXVtLXpvb206JyArIHR5cGUgJiYgZXZlbnRMaXN0ZW5lci5saXN0ZW5lci50b1N0cmluZygpID09PSBsaXN0ZW5lci50b1N0cmluZygpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBvcGVuID0gZnVuY3Rpb24gb3BlbigpIHtcbiAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQ7XG5cbiAgICB2YXIgX2FuaW1hdGUgPSBmdW5jdGlvbiBfYW5pbWF0ZSgpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB7XG4gICAgICAgIHdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9O1xuICAgICAgdmFyIHZpZXdwb3J0V2lkdGggPSB2b2lkIDA7XG4gICAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSB2b2lkIDA7XG5cbiAgICAgIGlmICh6b29tT3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgaWYgKHpvb21PcHRpb25zLmNvbnRhaW5lciBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgIC8vIFRoZSBjb250YWluZXIgaXMgZ2l2ZW4gYXMgYW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyBsaWtlIHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcFxuICAgICAgICAgIGNvbnRhaW5lciA9IF9leHRlbmRzKHt9LCBjb250YWluZXIsIHpvb21PcHRpb25zLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGFkanVzdCBjdXN0b20gb3B0aW9ucyBsaWtlIGNvbnRhaW5lci5yaWdodCBvciBjb250YWluZXIuYm90dG9tXG4gICAgICAgICAgdmlld3BvcnRXaWR0aCA9IGNvbnRhaW5lci53aWR0aCAtIGNvbnRhaW5lci5sZWZ0IC0gY29udGFpbmVyLnJpZ2h0IC0gem9vbU9wdGlvbnMubWFyZ2luICogMjtcbiAgICAgICAgICB2aWV3cG9ydEhlaWdodCA9IGNvbnRhaW5lci5oZWlnaHQgLSBjb250YWluZXIudG9wIC0gY29udGFpbmVyLmJvdHRvbSAtIHpvb21PcHRpb25zLm1hcmdpbiAqIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlIGNvbnRhaW5lciBpcyBnaXZlbiBhcyBhbiBlbGVtZW50XG4gICAgICAgICAgdmFyIHpvb21Db250YWluZXIgPSBpc05vZGUoem9vbU9wdGlvbnMuY29udGFpbmVyKSA/IHpvb21PcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioem9vbU9wdGlvbnMuY29udGFpbmVyKTtcblxuICAgICAgICAgIHZhciBfem9vbUNvbnRhaW5lciRnZXRCb3UgPSB6b29tQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICBfd2lkdGggPSBfem9vbUNvbnRhaW5lciRnZXRCb3Uud2lkdGgsXG4gICAgICAgICAgICAgIF9oZWlnaHQgPSBfem9vbUNvbnRhaW5lciRnZXRCb3UuaGVpZ2h0LFxuICAgICAgICAgICAgICBfbGVmdCA9IF96b29tQ29udGFpbmVyJGdldEJvdS5sZWZ0LFxuICAgICAgICAgICAgICBfdG9wID0gX3pvb21Db250YWluZXIkZ2V0Qm91LnRvcDtcblxuICAgICAgICAgIGNvbnRhaW5lciA9IF9leHRlbmRzKHt9LCBjb250YWluZXIsIHtcbiAgICAgICAgICAgIHdpZHRoOiBfd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IF9oZWlnaHQsXG4gICAgICAgICAgICBsZWZ0OiBfbGVmdCxcbiAgICAgICAgICAgIHRvcDogX3RvcFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydFdpZHRoIHx8IGNvbnRhaW5lci53aWR0aCAtIHpvb21PcHRpb25zLm1hcmdpbiAqIDI7XG4gICAgICB2aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0IHx8IGNvbnRhaW5lci5oZWlnaHQgLSB6b29tT3B0aW9ucy5tYXJnaW4gKiAyO1xuXG4gICAgICB2YXIgem9vbVRhcmdldCA9IGFjdGl2ZS56b29tZWRIZCB8fCBhY3RpdmUub3JpZ2luYWw7XG4gICAgICB2YXIgbmF0dXJhbFdpZHRoID0gaXNTdmcoem9vbVRhcmdldCkgPyB2aWV3cG9ydFdpZHRoIDogem9vbVRhcmdldC5uYXR1cmFsV2lkdGggfHwgdmlld3BvcnRXaWR0aDtcbiAgICAgIHZhciBuYXR1cmFsSGVpZ2h0ID0gaXNTdmcoem9vbVRhcmdldCkgPyB2aWV3cG9ydEhlaWdodCA6IHpvb21UYXJnZXQubmF0dXJhbEhlaWdodCB8fCB2aWV3cG9ydEhlaWdodDtcblxuICAgICAgdmFyIF96b29tVGFyZ2V0JGdldEJvdW5kaSA9IHpvb21UYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgdG9wID0gX3pvb21UYXJnZXQkZ2V0Qm91bmRpLnRvcCxcbiAgICAgICAgICBsZWZ0ID0gX3pvb21UYXJnZXQkZ2V0Qm91bmRpLmxlZnQsXG4gICAgICAgICAgd2lkdGggPSBfem9vbVRhcmdldCRnZXRCb3VuZGkud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3pvb21UYXJnZXQkZ2V0Qm91bmRpLmhlaWdodDtcblxuICAgICAgdmFyIHNjYWxlWCA9IE1hdGgubWluKG5hdHVyYWxXaWR0aCwgdmlld3BvcnRXaWR0aCkgLyB3aWR0aDtcbiAgICAgIHZhciBzY2FsZVkgPSBNYXRoLm1pbihuYXR1cmFsSGVpZ2h0LCB2aWV3cG9ydEhlaWdodCkgLyBoZWlnaHQ7XG4gICAgICB2YXIgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG4gICAgICB2YXIgdHJhbnNsYXRlWCA9ICgtbGVmdCArICh2aWV3cG9ydFdpZHRoIC0gd2lkdGgpIC8gMiArIHpvb21PcHRpb25zLm1hcmdpbiArIGNvbnRhaW5lci5sZWZ0KSAvIHNjYWxlO1xuICAgICAgdmFyIHRyYW5zbGF0ZVkgPSAoLXRvcCArICh2aWV3cG9ydEhlaWdodCAtIGhlaWdodCkgLyAyICsgem9vbU9wdGlvbnMubWFyZ2luICsgY29udGFpbmVyLnRvcCkgLyBzY2FsZTtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHNjYWxlICsgJykgdHJhbnNsYXRlM2QoJyArIHRyYW5zbGF0ZVggKyAncHgsICcgKyB0cmFuc2xhdGVZICsgJ3B4LCAwKSc7XG5cbiAgICAgIGFjdGl2ZS56b29tZWQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgICBpZiAoYWN0aXZlLnpvb21lZEhkKSB7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgaWYgKHRhcmdldCAmJiBpbWFnZXMuaW5kZXhPZih0YXJnZXQpID09PSAtMSkge1xuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfaGFuZGxlT3BlbkVuZCA9IGZ1bmN0aW9uIF9oYW5kbGVPcGVuRW5kKCkge1xuICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBhY3RpdmUuem9vbWVkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfaGFuZGxlT3BlbkVuZCk7XG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpvcGVuZWQnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhY3RpdmUuem9vbWVkKSB7XG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAvLyBUaGUgem9vbSB3YXMgdHJpZ2dlcmVkIG1hbnVhbGx5IHZpYSBhIGNsaWNrXG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbCA9IHRhcmdldDtcbiAgICAgIH0gZWxzZSBpZiAoaW1hZ2VzLmxlbmd0aCA+IDApIHtcbnZhciBfaW1hZ2VzID0gaW1hZ2VzO1xuICAgICAgICBhY3RpdmUub3JpZ2luYWwgPSBfaW1hZ2VzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhY3RpdmUub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206b3BlbicsIHtcbiAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgfSkpO1xuXG4gICAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuICAgICAgaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgYWN0aXZlLnpvb21lZCA9IGNsb25lVGFyZ2V0KGFjdGl2ZS5vcmlnaW5hbCk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAgIGlmICh6b29tT3B0aW9ucy50ZW1wbGF0ZSkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBpc05vZGUoem9vbU9wdGlvbnMudGVtcGxhdGUpID8gem9vbU9wdGlvbnMudGVtcGxhdGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHpvb21PcHRpb25zLnRlbXBsYXRlKTtcbiAgICAgICAgYWN0aXZlLnRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3RpdmUudGVtcGxhdGUpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFjdGl2ZS56b29tZWQpO1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS0tb3BlbmVkJyk7XG4gICAgICB9KTtcblxuICAgICAgYWN0aXZlLm9yaWdpbmFsLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLWltYWdlLS1oaWRkZW4nKTtcbiAgICAgIGFjdGl2ZS56b29tZWQuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZCcpO1xuXG4gICAgICBhY3RpdmUuem9vbWVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgICAgYWN0aXZlLnpvb21lZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX2hhbmRsZU9wZW5FbmQpO1xuXG4gICAgICBpZiAoYWN0aXZlLm9yaWdpbmFsLmdldEF0dHJpYnV0ZSgnZGF0YS16b29tLXNyYycpKSB7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZCA9IGFjdGl2ZS56b29tZWQuY2xvbmVOb2RlKCk7XG5cbiAgICAgICAgLy8gUmVzZXQgdGhlIGBzY3JzZXRgIHByb3BlcnR5IG9yIHRoZSBIRCBpbWFnZSB3b24ndCBsb2FkLlxuICAgICAgICBhY3RpdmUuem9vbWVkSGQucmVtb3ZlQXR0cmlidXRlKCdzcmNzZXQnKTtcbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnJlbW92ZUF0dHJpYnV0ZSgnc2l6ZXMnKTtcblxuICAgICAgICBhY3RpdmUuem9vbWVkSGQuc3JjID0gYWN0aXZlLnpvb21lZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtem9vbS1zcmMnKTtcblxuICAgICAgICBhY3RpdmUuem9vbWVkSGQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGdldFpvb21UYXJnZXRTaXplKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byByZWFjaCB0aGUgem9vbSBpbWFnZSB0YXJnZXQgJyArIGFjdGl2ZS56b29tZWRIZC5zcmMpO1xuICAgICAgICAgIGFjdGl2ZS56b29tZWRIZCA9IG51bGw7XG4gICAgICAgICAgX2FuaW1hdGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIGFjY2VzcyB0aGUgbmF0dXJhbCBzaXplIG9mIHRoZSBmdWxsIEhEXG4gICAgICAgIC8vIHRhcmdldCBhcyBmYXN0IGFzIHBvc3NpYmxlIHRvIGNvbXB1dGUgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgdmFyIGdldFpvb21UYXJnZXRTaXplID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICggYWN0aXZlLnpvb21lZEhkLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGdldFpvb21UYXJnZXRTaXplKTtcbiAgICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkJyk7XG4gICAgICAgICAgICBhY3RpdmUuem9vbWVkSGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFjdGl2ZS56b29tZWRIZCk7XG4gICAgICAgICAgICBfYW5pbWF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIGlmIChhY3RpdmUub3JpZ2luYWwuaGFzQXR0cmlidXRlKCdzcmNzZXQnKSkge1xuICAgICAgICAvLyBJZiBhbiBpbWFnZSBoYXMgYSBgc3Jjc2V0YCBhdHRyaWJ1ZXQsIHdlIGRvbid0IGtub3cgdGhlIGRpbWVuc2lvbnMgb2YgdGhlXG4gICAgICAgIC8vIHpvb21lZCAoSEQpIGltYWdlIChsaWtlIHdoZW4gYGRhdGEtem9vbS1zcmNgIGlzIHNwZWNpZmllZCkuXG4gICAgICAgIC8vIFRoZXJlZm9yZSB0aGUgYXBwcm9hY2ggaXMgcXVpdGUgc2ltaWxhci5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkID0gYWN0aXZlLnpvb21lZC5jbG9uZU5vZGUoKTtcblxuICAgICAgICAvLyBSZXNldHRpbmcgdGhlIHNpemVzIGF0dHJpYnV0ZSB0ZWxscyB0aGUgYnJvd3NlciB0byBsb2FkIHRoZVxuICAgICAgICAvLyBpbWFnZSBiZXN0IGZpdHRpbmcgdGhlIGN1cnJlbnQgdmlld3BvcnQgc2l6ZSwgcmVzcGVjdGluZyB0aGUgYHNyY3NldGAuXG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5yZW1vdmVBdHRyaWJ1dGUoJ3NpemVzJyk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIGxvYWQgZXZlbnQgb2YgdGhlIGhkIGltYWdlLiBUaGlzIHdpbGwgZmlyZSBpZiB0aGUgaW1hZ2VcbiAgICAgICAgLy8gaXMgYWxyZWFkeSBjYWNoZWQuXG4gICAgICAgIHZhciBsb2FkRXZlbnRMaXN0ZW5lciA9IGFjdGl2ZS56b29tZWRIZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkJyk7XG4gICAgICAgICAgYWN0aXZlLnpvb21lZEhkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWN0aXZlLnpvb21lZEhkKTtcbiAgICAgICAgICBfYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9hbmltYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBpZiAoaXNBbmltYXRpbmcgfHwgIWFjdGl2ZS5vcmlnaW5hbCkge1xuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfaGFuZGxlQ2xvc2VFbmQgPSBmdW5jdGlvbiBfaGFuZGxlQ2xvc2VFbmQoKSB7XG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbC5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tem9vbS1pbWFnZS0taGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYWN0aXZlLnpvb21lZCk7XG4gICAgICAgIGlmIChhY3RpdmUuem9vbWVkSGQpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFjdGl2ZS56b29tZWRIZCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgICAgYWN0aXZlLnpvb21lZC5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkJyk7XG4gICAgICAgIGlmIChhY3RpdmUudGVtcGxhdGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFjdGl2ZS50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBhY3RpdmUuem9vbWVkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfaGFuZGxlQ2xvc2VFbmQpO1xuXG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpjbG9zZWQnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgYWN0aXZlLm9yaWdpbmFsID0gbnVsbDtcbiAgICAgICAgYWN0aXZlLnpvb21lZCA9IG51bGw7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZCA9IG51bGw7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZSA9IG51bGw7XG5cbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgIH07XG5cbiAgICAgIGlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXpvb20tLW9wZW5lZCcpO1xuICAgICAgYWN0aXZlLnpvb21lZC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgaWYgKGFjdGl2ZS56b29tZWRIZCkge1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICB9XG5cbiAgICAgIC8vIEZhZGUgb3V0IHRoZSB0ZW1wbGF0ZSBzbyBpdCdzIG5vdCB0b28gYWJydXB0XG4gICAgICBpZiAoYWN0aXZlLnRlbXBsYXRlKSB7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZS5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMTUwbXMnO1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGFjdGl2ZS5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpjbG9zZScsIHtcbiAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgfSkpO1xuXG4gICAgICBhY3RpdmUuem9vbWVkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfaGFuZGxlQ2xvc2VFbmQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjMudGFyZ2V0O1xuXG4gICAgaWYgKGFjdGl2ZS5vcmlnaW5hbCkge1xuICAgICAgcmV0dXJuIGNsb3NlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wZW4oeyB0YXJnZXQ6IHRhcmdldCB9KTtcbiAgfTtcblxuICB2YXIgZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHpvb21PcHRpb25zO1xuICB9O1xuXG4gIHZhciBnZXRJbWFnZXMgPSBmdW5jdGlvbiBnZXRJbWFnZXMoKSB7XG4gICAgcmV0dXJuIGltYWdlcztcbiAgfTtcblxuICB2YXIgZ2V0Wm9vbWVkSW1hZ2UgPSBmdW5jdGlvbiBnZXRab29tZWRJbWFnZSgpIHtcbiAgICByZXR1cm4gYWN0aXZlLm9yaWdpbmFsO1xuICB9O1xuXG4gIHZhciBpbWFnZXMgPSBbXTtcbiAgdmFyIGV2ZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICB2YXIgc2Nyb2xsVG9wID0gMDtcbiAgdmFyIHpvb21PcHRpb25zID0gb3B0aW9ucztcbiAgdmFyIGFjdGl2ZSA9IHtcbiAgICBvcmlnaW5hbDogbnVsbCxcbiAgICB6b29tZWQ6IG51bGwsXG4gICAgem9vbWVkSGQ6IG51bGwsXG4gICAgdGVtcGxhdGU6IG51bGxcblxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBpcyBvbWl0dGVkLCBpdCdzIHJlcGxhY2VkIGJ5IHRoZSBvcHRpb25zXG4gIH07aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzZWxlY3RvcikgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgem9vbU9wdGlvbnMgPSBzZWxlY3RvcjtcbiAgfSBlbHNlIGlmIChzZWxlY3RvciB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnIC8vIHRvIHByb2Nlc3MgZW1wdHkgc3RyaW5nIGFzIGEgc2VsZWN0b3JcbiAgKSB7XG4gICAgICBhdHRhY2goc2VsZWN0b3IpO1xuICAgIH1cblxuICAvLyBBcHBseSB0aGUgZGVmYXVsdCBvcHRpb24gdmFsdWVzXG4gIHpvb21PcHRpb25zID0gX2V4dGVuZHMoe1xuICAgIG1hcmdpbjogMCxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgc2Nyb2xsT2Zmc2V0OiA0MCxcbiAgICBjb250YWluZXI6IG51bGwsXG4gICAgdGVtcGxhdGU6IG51bGxcbiAgfSwgem9vbU9wdGlvbnMpO1xuXG4gIHZhciBvdmVybGF5ID0gY3JlYXRlT3ZlcmxheSh6b29tT3B0aW9ucy5iYWNrZ3JvdW5kKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVDbGljayk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgX2hhbmRsZUtleVVwKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX2hhbmRsZVNjcm9sbCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjbG9zZSk7XG5cbiAgdmFyIHpvb20gPSB7XG4gICAgb3Blbjogb3BlbixcbiAgICBjbG9zZTogY2xvc2UsXG4gICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgY2xvbmU6IGNsb25lLFxuICAgIGF0dGFjaDogYXR0YWNoLFxuICAgIGRldGFjaDogZGV0YWNoLFxuICAgIG9uOiBvbixcbiAgICBvZmY6IG9mZixcbiAgICBnZXRPcHRpb25zOiBnZXRPcHRpb25zLFxuICAgIGdldEltYWdlczogZ2V0SW1hZ2VzLFxuICAgIGdldFpvb21lZEltYWdlOiBnZXRab29tZWRJbWFnZVxuICB9O1xuXG4gIHJldHVybiB6b29tO1xufTtcblxuZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgY3NzID0gXCIubWVkaXVtLXpvb20tb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4zczt3aWxsLWNoYW5nZTpvcGFjaXR5fS5tZWRpdW0tem9vbS0tb3BlbmVkIC5tZWRpdW0tem9vbS1vdmVybGF5e2N1cnNvcjpwb2ludGVyO2N1cnNvcjp6b29tLW91dDtvcGFjaXR5OjF9Lm1lZGl1bS16b29tLWltYWdle2N1cnNvcjpwb2ludGVyO2N1cnNvcjp6b29tLWluO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoLjIsMCwuMiwxKSFpbXBvcnRhbnR9Lm1lZGl1bS16b29tLWltYWdlLS1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59Lm1lZGl1bS16b29tLWltYWdlLS1vcGVuZWR7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7Y3Vyc29yOnpvb20tb3V0O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX1cIjtcbnN0eWxlSW5qZWN0KGNzcyk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lZGl1bVpvb207XG4iXSwic291cmNlUm9vdCI6IiJ9