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
/* harmony import */ var _scss_post_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/post.scss */ "./assets/scss/post.scss");
/* harmony import */ var _scss_post_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_post_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
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
Object(medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"])(totalImages, {
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
    if (window.innerWidth >= 1024) {
      shareBar.style.marginLeft = '0';
      shareBar.style.opacity = '1';
    } else {
      shareBar.style.marginBottom = '0';
      shareBar.style.opacity = '1';
    }
  } else if (window.innerWidth >= 1024) {
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

/***/ "./assets/scss/post.scss":
/*!*******************************!*\
  !*** ./assets/scss/post.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
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

        // In Firefox, the `loading` attribute needs to be set to `eager` (default
        // value) for the load event to be fired.
        active.zoomedHd.removeAttribute('loading');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvcG9zdC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbHVpZHZpZHMuanMvZGlzdC9mbHVpZHZpZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21lZGl1bS16b29tL2Rpc3QvbWVkaXVtLXpvb20uZXNtLmpzIl0sIm5hbWVzIjpbImZsdWlkdmlkcyIsInJlcXVpcmUiLCJpbml0Iiwic2VsZWN0b3IiLCJwbGF5ZXJzIiwicG9zdEltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcnlJbWFnZXMiLCJ0b3RhbEltYWdlcyIsIm1lZGl1bVpvb20iLCJiYWNrZ3JvdW5kIiwibGFzdEtub3duU2Nyb2xsUG9zIiwidGlja2luZyIsInByb2dyZXNzQmFyIiwicXVlcnlTZWxlY3RvciIsInNoYXJlQmFyIiwiZm9vdGVyIiwiYnVmZmVyIiwicG9zdEltZyIsInBvc3RDb250ZW50SGVpZ2h0IiwicmVhZGluZ0JhclByb2dyZXNzIiwic2Nyb2xsUG9zIiwicHJvZ3Jlc3MiLCJNYXRoIiwiY2VpbCIsImNsaWVudEhlaWdodCIsInN0eWxlIiwid2lkdGgiLCJzaGFyZUJhckFuaW1hdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsInRvcCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXJnaW5MZWZ0Iiwib3BhY2l0eSIsIm1hcmdpbkJvdHRvbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29weUJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwidGVtcCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2YWx1ZSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJ0YWJsZXMiLCJ0YWJsZVByZXBlbmQiLCJlIiwicmVzcG9uc2l2ZVdyYXBwZXIiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMscUZBQUQsQ0FBekIsQyxDQUVBOzs7QUFDQUQsU0FBUyxDQUFDRSxJQUFWLENBQWU7QUFDYkMsVUFBUSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FERztBQUViQyxTQUFPLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEI7QUFGSSxDQUFmLEUsQ0FLQTs7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBbkI7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QWdCLFVBQVUsbUJBQW1CLGVBQWUsZUFBZSwyREFBMkQsMkJBQTJCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLGVBQWUsZ0JBQWdCLHNCQUFzQjtBQUNoZDs7QUFFZSx5RUFBVSxFQUFDIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9wb3N0LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9zY3NzL3Bvc3Quc2Nzcyc7XG5pbXBvcnQgbWVkaXVtWm9vbSBmcm9tICdtZWRpdW0tem9vbSc7XG5cbmNvbnN0IGZsdWlkdmlkcyA9IHJlcXVpcmUoJ2ZsdWlkdmlkcy5qcy9kaXN0L2ZsdWlkdmlkcy5qcycpO1xuXG4vLyBJbml0IEZsdWlkVmlkc1xuZmx1aWR2aWRzLmluaXQoe1xuICBzZWxlY3RvcjogWydpZnJhbWUnLCAnb2JqZWN0J10sXG4gIHBsYXllcnM6IFsnd3d3LnlvdXR1YmUuY29tJywgJ3BsYXllci52aW1lby5jb20nXVxufSk7XG5cbi8vIE1lZGl1bSBab29tXG5jb25zdCBwb3N0SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtnLWltYWdlJyk7XG5jb25zdCBnYWxsZXJ5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtnLWdhbGxlcnktaW1hZ2UgaW1nJyk7XG5cbmNvbnN0IHRvdGFsSW1hZ2VzID0gWy4uLnBvc3RJbWFnZXMsIC4uLmdhbGxlcnlJbWFnZXNdO1xuXG5tZWRpdW1ab29tKHRvdGFsSW1hZ2VzLCB7XG4gIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuNzUpJ1xufSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUmVhZGluZyBQcm9ncmVzcyBCYXIgYW5kIFNoYXJlIEJhclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5sZXQgbGFzdEtub3duU2Nyb2xsUG9zID0gMDtcbmxldCB0aWNraW5nID0gZmFsc2U7XG5cbi8vIFZhcmlhYmxlcyBmb3IgcmVhZGluZyBwcm9ncmVzc1xuY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1yZWFkaW5nLXByb2dyZXNzJyk7XG5jb25zdCBzaGFyZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LXNoYXJlLWJhcicpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci0tb3V0ZXItY29udGFpbmVyJyk7XG5jb25zdCBidWZmZXIgPSA1MDtcblxuLy8gVmFyaWFibGVzIGZvciBzaGFyZSBiYXJcbmNvbnN0IHBvc3RJbWcgPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdF9faW1nJykgfHxcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RfX25vLWltZycpO1xuY29uc3QgcG9zdENvbnRlbnRIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdF9fY29udGVudCcpO1xuXG5jb25zdCByZWFkaW5nQmFyUHJvZ3Jlc3MgPSAoc2Nyb2xsUG9zKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gTWF0aC5jZWlsKFxuICAgIChzY3JvbGxQb3MgLyBwb3N0Q29udGVudEhlaWdodC5jbGllbnRIZWlnaHQpICogMTAwXG4gICk7XG4gIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3N9JWA7XG59O1xuXG5jb25zdCBzaGFyZUJhckFuaW1hdGlvbiA9ICgpID0+IHtcbiAgaWYgKFxuICAgIHBvc3RJbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tICsgYnVmZmVyIDxcbiAgICAgIHNoYXJlQmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAmJlxuICAgIHNoYXJlQmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8XG4gICAgICBmb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gYnVmZmVyXG4gICkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSB7XG4gICAgICBzaGFyZUJhci5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuICAgICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hhcmVCYXIuc3R5bGUubWFyZ2luQm90dG9tID0gJzAnO1xuICAgICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG4gIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xuICAgIHNoYXJlQmFyLnN0eWxlLm1hcmdpbkxlZnQgPSAnLTIwMHB4JztcbiAgICBzaGFyZUJhci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICB9IGVsc2Uge1xuICAgIHNoYXJlQmFyLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICctMTAwcHgnO1xuICAgIHNoYXJlQmFyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIH1cbn07XG5cbmlmIChzaGFyZUJhciAhPT0gbnVsbCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIGxhc3RLbm93blNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgc2hhcmVCYXJBbmltYXRpb24oKTtcbiAgICAgICAgaWYgKHByb2dyZXNzQmFyICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVhZGluZ0JhclByb2dyZXNzKGxhc3RLbm93blNjcm9sbFBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ29weSBGdW5jdGlvblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBjb3B5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHktYnV0dG9uJyk7XG5cbmlmIChjb3B5QnV0dG9uKSB7XG4gIGNvcHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICB0ZW1wLnZhbHVlID0gdXJsO1xuICAgIHRlbXAuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXApO1xuICB9KTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNYWtlIHRhYmxlcyByZXNwb25zaXZlXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0X19jb250ZW50ID4gdGFibGUnKTtcblxuZnVuY3Rpb24gdGFibGVQcmVwZW5kKGUpIHtcbiAgY29uc3QgcmVzcG9uc2l2ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVzcG9uc2l2ZVdyYXBwZXIuc2V0QXR0cmlidXRlKFxuICAgICdzdHlsZScsXG4gICAgJ3dpZHRoOiAxMDAlOyBvdmVyZmxvdy14OiBhdXRvOyBtYXJnaW46IDFlbSAwOydcbiAgKTtcbiAgZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXNwb25zaXZlV3JhcHBlciwgZSk7XG4gIHJlc3BvbnNpdmVXcmFwcGVyLmFwcGVuZENoaWxkKGUpO1xufVxuXG50YWJsZXMuZm9yRWFjaCgoZSkgPT4gdGFibGVQcmVwZW5kKGUpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qISBmbHVpZHZpZHMuanMgdjIuNC4xIHwgKGMpIDIwMTQgQHRvZGRtb3R0byB8IGh0dHBzOi8vZ2l0aHViLmNvbS90b2RkbW90dG8vZmx1aWR2aWRzICovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5mbHVpZHZpZHMgPSBmYWN0b3J5KCk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGZsdWlkdmlkcyA9IHtcbiAgICBzZWxlY3RvcjogWydpZnJhbWUnLCAnb2JqZWN0J10sXG4gICAgcGxheWVyczogWyd3d3cueW91dHViZS5jb20nLCAncGxheWVyLnZpbWVvLmNvbSddXG4gIH07XG5cbiAgdmFyIGNzcyA9IFtcbiAgICAnLmZsdWlkdmlkcyB7JyxcbiAgICAgICd3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAxMDAlOyBwb3NpdGlvbjogcmVsYXRpdmU7JyxcbiAgICAnfScsXG4gICAgJy5mbHVpZHZpZHMtaXRlbSB7JyxcbiAgICAgICdwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7JyxcbiAgICAnfSdcbiAgXS5qb2luKCcnKTtcblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblxuICBmdW5jdGlvbiBtYXRjaGVzIChzcmMpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXihodHRwcz86KT9cXC9cXC8oPzonICsgZmx1aWR2aWRzLnBsYXllcnMuam9pbignfCcpICsgJykuKiQnLCAnaScpLnRlc3Qoc3JjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhdGlvIChoZWlnaHQsIHdpZHRoKSB7XG4gICAgcmV0dXJuICgocGFyc2VJbnQoaGVpZ2h0LCAxMCkgLyBwYXJzZUludCh3aWR0aCwgMTApKSAqIDEwMCkgKyAnJSc7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVpZCAoZWxlbSkge1xuICAgIGlmICghbWF0Y2hlcyhlbGVtLnNyYykgJiYgIW1hdGNoZXMoZWxlbS5kYXRhKSB8fCAhIWVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZsdWlkdmlkcycpKSByZXR1cm47XG4gICAgdmFyIHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXAsIGVsZW0pO1xuICAgIGVsZW0uY2xhc3NOYW1lICs9IChlbGVtLmNsYXNzTmFtZSA/ICcgJyA6ICcnKSArICdmbHVpZHZpZHMtaXRlbSc7XG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmx1aWR2aWRzJywgJ2xvYWRlZCcpO1xuICAgIHdyYXAuY2xhc3NOYW1lICs9ICdmbHVpZHZpZHMnO1xuICAgIHdyYXAuc3R5bGUucGFkZGluZ1RvcCA9IGdldFJhdGlvKGVsZW0uaGVpZ2h0LCBlbGVtLndpZHRoKTtcbiAgICB3cmFwLmFwcGVuZENoaWxkKGVsZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3R5bGVzICgpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9ICc8cD54PC9wPjxzdHlsZT4nICsgY3NzICsgJzwvc3R5bGU+JztcbiAgICBoZWFkLmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzFdKTtcbiAgfVxuXG4gIGZsdWlkdmlkcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChmbHVpZHZpZHMuc2VsZWN0b3Iuam9pbigpKTtcbiAgICB2YXIgaSA9IG5vZGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBmbHVpZChub2Rlc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIGZsdWlkdmlkcy5pbml0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGZsdWlkdmlkc1trZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIGZsdWlkdmlkcy5yZW5kZXIoKTtcbiAgICBhZGRTdHlsZXMoKTtcbiAgfTtcblxuICByZXR1cm4gZmx1aWR2aWRzO1xuXG59KTtcbiIsIi8qISBtZWRpdW0tem9vbSAxLjAuNiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2ZyYW5jb2lzY2hhbGlmb3VyL21lZGl1bS16b29tICovXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGlzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNTdXBwb3J0ZWQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU1HJztcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbnZhciBpc05vZGVMaXN0ID0gZnVuY3Rpb24gaXNOb2RlTGlzdChzZWxlY3Rvcikge1xuICByZXR1cm4gTm9kZUxpc3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yoc2VsZWN0b3IpO1xufTtcblxudmFyIGlzTm9kZSA9IGZ1bmN0aW9uIGlzTm9kZShzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgJiYgc2VsZWN0b3Iubm9kZVR5cGUgPT09IDE7XG59O1xuXG52YXIgaXNTdmcgPSBmdW5jdGlvbiBpc1N2ZyhpbWFnZSkge1xuICB2YXIgc291cmNlID0gaW1hZ2UuY3VycmVudFNyYyB8fCBpbWFnZS5zcmM7XG4gIHJldHVybiBzb3VyY2Uuc3Vic3RyKC00KS50b0xvd2VyQ2FzZSgpID09PSAnLnN2Zyc7XG59O1xuXG52YXIgZ2V0SW1hZ2VzRnJvbVNlbGVjdG9yID0gZnVuY3Rpb24gZ2V0SW1hZ2VzRnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHRyeSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IuZmlsdGVyKGlzU3VwcG9ydGVkKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlTGlzdChzZWxlY3RvcikpIHtcbiAgICAgIC8vIERvIG5vdCB1c2Ugc3ByZWFkIG9wZXJhdG9yIG9yIEFycmF5LmZyb20oKSBmb3IgSUUgc3VwcG9ydFxuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoc2VsZWN0b3IpLmZpbHRlcihpc1N1cHBvcnRlZCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdLmZpbHRlcihpc1N1cHBvcnRlZCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIERvIG5vdCB1c2Ugc3ByZWFkIG9wZXJhdG9yIG9yIEFycmF5LmZyb20oKSBmb3IgSUUgc3VwcG9ydFxuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZpbHRlcihpc1N1cHBvcnRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgcHJvdmlkZWQgc2VsZWN0b3IgaXMgaW52YWxpZC5cXG4nICsgJ0V4cGVjdHMgYSBDU1Mgc2VsZWN0b3IsIGEgTm9kZSBlbGVtZW50LCBhIE5vZGVMaXN0IG9yIGFuIGFycmF5LlxcbicgKyAnU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZnJhbmNvaXNjaGFsaWZvdXIvbWVkaXVtLXpvb20nKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZU92ZXJsYXkgPSBmdW5jdGlvbiBjcmVhdGVPdmVybGF5KGJhY2tncm91bmQpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1vdmVybGF5Jyk7XG4gIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cbiAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG52YXIgY2xvbmVUYXJnZXQgPSBmdW5jdGlvbiBjbG9uZVRhcmdldCh0ZW1wbGF0ZSkge1xuICB2YXIgX3RlbXBsYXRlJGdldEJvdW5kaW5nID0gdGVtcGxhdGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB0b3AgPSBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcudG9wLFxuICAgICAgbGVmdCA9IF90ZW1wbGF0ZSRnZXRCb3VuZGluZy5sZWZ0LFxuICAgICAgd2lkdGggPSBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcuaGVpZ2h0O1xuXG4gIHZhciBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSgpO1xuICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG5cbiAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICBjbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGNsb25lLnN0eWxlLnRvcCA9IHRvcCArIHNjcm9sbFRvcCArICdweCc7XG4gIGNsb25lLnN0eWxlLmxlZnQgPSBsZWZ0ICsgc2Nyb2xsTGVmdCArICdweCc7XG4gIGNsb25lLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICBjbG9uZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICBjbG9uZS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcblxuICByZXR1cm4gY2xvbmU7XG59O1xuXG52YXIgY3JlYXRlQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudCh0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIGV2ZW50UGFyYW1zID0gX2V4dGVuZHMoe1xuICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgIGRldGFpbDogdW5kZWZpbmVkXG4gIH0sIHBhcmFtcyk7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIGV2ZW50UGFyYW1zKTtcbiAgfVxuXG4gIHZhciBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBjdXN0b21FdmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZXZlbnRQYXJhbXMuYnViYmxlcywgZXZlbnRQYXJhbXMuY2FuY2VsYWJsZSwgZXZlbnRQYXJhbXMuZGV0YWlsKTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnQ7XG59O1xuXG52YXIgbWVkaXVtWm9vbSA9IGZ1bmN0aW9uIG1lZGl1bVpvb20oc2VsZWN0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIC8qKlxuICAgKiBFbnN1cmUgdGhlIGNvbXBhdGliaWxpdHkgd2l0aCBJRTExIGlmIG5vIFByb21pc2UgcG9seWZpbGwgYXJlIHVzZWQuXG4gICAqL1xuICB2YXIgUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlIHx8IGZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICBmbihub29wLCBub29wKTtcbiAgfTtcblxuICB2YXIgX2hhbmRsZUNsaWNrID0gZnVuY3Rpb24gX2hhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuXG4gICAgaWYgKHRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2VzLmluZGV4T2YodGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2dnbGUoeyB0YXJnZXQ6IHRhcmdldCB9KTtcbiAgfTtcblxuICB2YXIgX2hhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIF9oYW5kbGVTY3JvbGwoKSB7XG4gICAgaWYgKGlzQW5pbWF0aW5nIHx8ICFhY3RpdmUub3JpZ2luYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG5cbiAgICBpZiAoTWF0aC5hYnMoc2Nyb2xsVG9wIC0gY3VycmVudFNjcm9sbCkgPiB6b29tT3B0aW9ucy5zY3JvbGxPZmZzZXQpIHtcbiAgICAgIHNldFRpbWVvdXQoY2xvc2UsIDE1MCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBfaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiBfaGFuZGxlS2V5VXAoZXZlbnQpIHtcbiAgICB2YXIga2V5ID0gZXZlbnQua2V5IHx8IGV2ZW50LmtleUNvZGU7XG5cbiAgICAvLyBDbG9zZSBpZiBlc2NhcGUga2V5IGlzIHByZXNzZWRcbiAgICBpZiAoa2V5ID09PSAnRXNjYXBlJyB8fCBrZXkgPT09ICdFc2MnIHx8IGtleSA9PT0gMjcpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgdmFyIG5ld09wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZCkge1xuICAgICAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNvbnRhaW5lciAmJiBvcHRpb25zLmNvbnRhaW5lciBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgbmV3T3B0aW9ucy5jb250YWluZXIgPSBfZXh0ZW5kcyh7fSwgem9vbU9wdGlvbnMuY29udGFpbmVyLCBvcHRpb25zLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGlzTm9kZShvcHRpb25zLnRlbXBsYXRlKSA/IG9wdGlvbnMudGVtcGxhdGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGVtcGxhdGUpO1xuXG4gICAgICBuZXdPcHRpb25zLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgem9vbU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgem9vbU9wdGlvbnMsIG5ld09wdGlvbnMpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZS5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTp1cGRhdGUnLCB7XG4gICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBjbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICByZXR1cm4gbWVkaXVtWm9vbShfZXh0ZW5kcyh7fSwgem9vbU9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgfTtcblxuICB2YXIgYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzZWxlY3RvcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHNlbGVjdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgbmV3SW1hZ2VzID0gc2VsZWN0b3JzLnJlZHVjZShmdW5jdGlvbiAoaW1hZ2VzQWNjdW11bGF0b3IsIGN1cnJlbnRTZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChpbWFnZXNBY2N1bXVsYXRvciwgZ2V0SW1hZ2VzRnJvbVNlbGVjdG9yKGN1cnJlbnRTZWxlY3RvcikpO1xuICAgIH0sIFtdKTtcblxuICAgIG5ld0ltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKG5ld0ltYWdlKSB7XG4gICAgICByZXR1cm4gaW1hZ2VzLmluZGV4T2YobmV3SW1hZ2UpID09PSAtMTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChuZXdJbWFnZSkge1xuICAgICAgaW1hZ2VzLnB1c2gobmV3SW1hZ2UpO1xuICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UnKTtcbiAgICB9KTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICAgIGxpc3RlbmVyID0gX3JlZi5saXN0ZW5lcixcbiAgICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuXG4gICAgICBuZXdJbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBkZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBzZWxlY3RvcnMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgc2VsZWN0b3JzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZS56b29tZWQpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuXG4gICAgdmFyIGltYWdlc1RvRGV0YWNoID0gc2VsZWN0b3JzLmxlbmd0aCA+IDAgPyBzZWxlY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChpbWFnZXNBY2N1bXVsYXRvciwgY3VycmVudFNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGltYWdlc0FjY3VtdWxhdG9yLCBnZXRJbWFnZXNGcm9tU2VsZWN0b3IoY3VycmVudFNlbGVjdG9yKSk7XG4gICAgfSwgW10pIDogaW1hZ2VzO1xuXG4gICAgaW1hZ2VzVG9EZXRhY2guZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS16b29tLWltYWdlJyk7XG4gICAgICBpbWFnZS5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpkZXRhY2gnLCB7XG4gICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGltYWdlcyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICByZXR1cm4gaW1hZ2VzVG9EZXRhY2guaW5kZXhPZihpbWFnZSkgPT09IC0xO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH07XG5cbiAgdmFyIG9uID0gZnVuY3Rpb24gb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21lZGl1bS16b29tOicgKyB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBldmVudExpc3RlbmVycy5wdXNoKHsgdHlwZTogJ21lZGl1bS16b29tOicgKyB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfTtcblxuICB2YXIgb2ZmID0gZnVuY3Rpb24gb2ZmKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtZWRpdW0tem9vbTonICsgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMgPSBldmVudExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiAhKGV2ZW50TGlzdGVuZXIudHlwZSA9PT0gJ21lZGl1bS16b29tOicgKyB0eXBlICYmIGV2ZW50TGlzdGVuZXIubGlzdGVuZXIudG9TdHJpbmcoKSA9PT0gbGlzdGVuZXIudG9TdHJpbmcoKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfTtcblxuICB2YXIgb3BlbiA9IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0O1xuXG4gICAgdmFyIF9hbmltYXRlID0gZnVuY3Rpb24gX2FuaW1hdGUoKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfTtcbiAgICAgIHZhciB2aWV3cG9ydFdpZHRoID0gdm9pZCAwO1xuICAgICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdm9pZCAwO1xuXG4gICAgICBpZiAoem9vbU9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIGlmICh6b29tT3B0aW9ucy5jb250YWluZXIgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAvLyBUaGUgY29udGFpbmVyIGlzIGdpdmVuIGFzIGFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgbGlrZSB3aWR0aCwgaGVpZ2h0LCBsZWZ0LCB0b3BcbiAgICAgICAgICBjb250YWluZXIgPSBfZXh0ZW5kcyh7fSwgY29udGFpbmVyLCB6b29tT3B0aW9ucy5jb250YWluZXIpO1xuXG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBhZGp1c3QgY3VzdG9tIG9wdGlvbnMgbGlrZSBjb250YWluZXIucmlnaHQgb3IgY29udGFpbmVyLmJvdHRvbVxuICAgICAgICAgIHZpZXdwb3J0V2lkdGggPSBjb250YWluZXIud2lkdGggLSBjb250YWluZXIubGVmdCAtIGNvbnRhaW5lci5yaWdodCAtIHpvb21PcHRpb25zLm1hcmdpbiAqIDI7XG4gICAgICAgICAgdmlld3BvcnRIZWlnaHQgPSBjb250YWluZXIuaGVpZ2h0IC0gY29udGFpbmVyLnRvcCAtIGNvbnRhaW5lci5ib3R0b20gLSB6b29tT3B0aW9ucy5tYXJnaW4gKiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBjb250YWluZXIgaXMgZ2l2ZW4gYXMgYW4gZWxlbWVudFxuICAgICAgICAgIHZhciB6b29tQ29udGFpbmVyID0gaXNOb2RlKHpvb21PcHRpb25zLmNvbnRhaW5lcikgPyB6b29tT3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHpvb21PcHRpb25zLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICB2YXIgX3pvb21Db250YWluZXIkZ2V0Qm91ID0gem9vbUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgX3dpZHRoID0gX3pvb21Db250YWluZXIkZ2V0Qm91LndpZHRoLFxuICAgICAgICAgICAgICBfaGVpZ2h0ID0gX3pvb21Db250YWluZXIkZ2V0Qm91LmhlaWdodCxcbiAgICAgICAgICAgICAgX2xlZnQgPSBfem9vbUNvbnRhaW5lciRnZXRCb3UubGVmdCxcbiAgICAgICAgICAgICAgX3RvcCA9IF96b29tQ29udGFpbmVyJGdldEJvdS50b3A7XG5cbiAgICAgICAgICBjb250YWluZXIgPSBfZXh0ZW5kcyh7fSwgY29udGFpbmVyLCB7XG4gICAgICAgICAgICB3aWR0aDogX3dpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBfaGVpZ2h0LFxuICAgICAgICAgICAgbGVmdDogX2xlZnQsXG4gICAgICAgICAgICB0b3A6IF90b3BcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2aWV3cG9ydFdpZHRoID0gdmlld3BvcnRXaWR0aCB8fCBjb250YWluZXIud2lkdGggLSB6b29tT3B0aW9ucy5tYXJnaW4gKiAyO1xuICAgICAgdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodCB8fCBjb250YWluZXIuaGVpZ2h0IC0gem9vbU9wdGlvbnMubWFyZ2luICogMjtcblxuICAgICAgdmFyIHpvb21UYXJnZXQgPSBhY3RpdmUuem9vbWVkSGQgfHwgYWN0aXZlLm9yaWdpbmFsO1xuICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IGlzU3ZnKHpvb21UYXJnZXQpID8gdmlld3BvcnRXaWR0aCA6IHpvb21UYXJnZXQubmF0dXJhbFdpZHRoIHx8IHZpZXdwb3J0V2lkdGg7XG4gICAgICB2YXIgbmF0dXJhbEhlaWdodCA9IGlzU3ZnKHpvb21UYXJnZXQpID8gdmlld3BvcnRIZWlnaHQgOiB6b29tVGFyZ2V0Lm5hdHVyYWxIZWlnaHQgfHwgdmlld3BvcnRIZWlnaHQ7XG5cbiAgICAgIHZhciBfem9vbVRhcmdldCRnZXRCb3VuZGkgPSB6b29tVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIHRvcCA9IF96b29tVGFyZ2V0JGdldEJvdW5kaS50b3AsXG4gICAgICAgICAgbGVmdCA9IF96b29tVGFyZ2V0JGdldEJvdW5kaS5sZWZ0LFxuICAgICAgICAgIHdpZHRoID0gX3pvb21UYXJnZXQkZ2V0Qm91bmRpLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF96b29tVGFyZ2V0JGdldEJvdW5kaS5oZWlnaHQ7XG5cbiAgICAgIHZhciBzY2FsZVggPSBNYXRoLm1pbihuYXR1cmFsV2lkdGgsIHZpZXdwb3J0V2lkdGgpIC8gd2lkdGg7XG4gICAgICB2YXIgc2NhbGVZID0gTWF0aC5taW4obmF0dXJhbEhlaWdodCwgdmlld3BvcnRIZWlnaHQpIC8gaGVpZ2h0O1xuICAgICAgdmFyIHNjYWxlID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgdmFyIHRyYW5zbGF0ZVggPSAoLWxlZnQgKyAodmlld3BvcnRXaWR0aCAtIHdpZHRoKSAvIDIgKyB6b29tT3B0aW9ucy5tYXJnaW4gKyBjb250YWluZXIubGVmdCkgLyBzY2FsZTtcbiAgICAgIHZhciB0cmFuc2xhdGVZID0gKC10b3AgKyAodmlld3BvcnRIZWlnaHQgLSBoZWlnaHQpIC8gMiArIHpvb21PcHRpb25zLm1hcmdpbiArIGNvbnRhaW5lci50b3ApIC8gc2NhbGU7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gJ3NjYWxlKCcgKyBzY2FsZSArICcpIHRyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCAnICsgdHJhbnNsYXRlWSArICdweCwgMCknO1xuXG4gICAgICBhY3RpdmUuem9vbWVkLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgICAgaWYgKGFjdGl2ZS56b29tZWRIZCkge1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIGlmICh0YXJnZXQgJiYgaW1hZ2VzLmluZGV4T2YodGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2hhbmRsZU9wZW5FbmQgPSBmdW5jdGlvbiBfaGFuZGxlT3BlbkVuZCgpIHtcbiAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgYWN0aXZlLnpvb21lZC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX2hhbmRsZU9wZW5FbmQpO1xuICAgICAgICBhY3RpdmUub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206b3BlbmVkJywge1xuICAgICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlLnpvb21lZCkge1xuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgLy8gVGhlIHpvb20gd2FzIHRyaWdnZXJlZCBtYW51YWxseSB2aWEgYSBjbGlja1xuICAgICAgICBhY3RpdmUub3JpZ2luYWwgPSB0YXJnZXQ7XG4gICAgICB9IGVsc2UgaWYgKGltYWdlcy5sZW5ndGggPiAwKSB7XG52YXIgX2ltYWdlcyA9IGltYWdlcztcbiAgICAgICAgYWN0aXZlLm9yaWdpbmFsID0gX2ltYWdlc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYWN0aXZlLm9yaWdpbmFsLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOm9wZW4nLCB7XG4gICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgIH0pKTtcblxuICAgICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbiAgICAgIGlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIGFjdGl2ZS56b29tZWQgPSBjbG9uZVRhcmdldChhY3RpdmUub3JpZ2luYWwpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgICBpZiAoem9vbU9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gaXNOb2RlKHpvb21PcHRpb25zLnRlbXBsYXRlKSA/IHpvb21PcHRpb25zLnRlbXBsYXRlIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih6b29tT3B0aW9ucy50ZW1wbGF0ZSk7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWN0aXZlLnRlbXBsYXRlKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3RpdmUuem9vbWVkKTtcblxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20tLW9wZW5lZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGFjdGl2ZS5vcmlnaW5hbC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZS0taGlkZGVuJyk7XG4gICAgICBhY3RpdmUuem9vbWVkLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLWltYWdlLS1vcGVuZWQnKTtcblxuICAgICAgYWN0aXZlLnpvb21lZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICAgIGFjdGl2ZS56b29tZWQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF9oYW5kbGVPcGVuRW5kKTtcblxuICAgICAgaWYgKGFjdGl2ZS5vcmlnaW5hbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtem9vbS1zcmMnKSkge1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQgPSBhY3RpdmUuem9vbWVkLmNsb25lTm9kZSgpO1xuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBgc2Nyc2V0YCBwcm9wZXJ0eSBvciB0aGUgSEQgaW1hZ2Ugd29uJ3QgbG9hZC5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnJlbW92ZUF0dHJpYnV0ZSgnc3Jjc2V0Jyk7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5yZW1vdmVBdHRyaWJ1dGUoJ3NpemVzJyk7XG5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnNyYyA9IGFjdGl2ZS56b29tZWQuZ2V0QXR0cmlidXRlKCdkYXRhLXpvb20tc3JjJyk7XG5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChnZXRab29tVGFyZ2V0U2l6ZSk7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gcmVhY2ggdGhlIHpvb20gaW1hZ2UgdGFyZ2V0ICcgKyBhY3RpdmUuem9vbWVkSGQuc3JjKTtcbiAgICAgICAgICBhY3RpdmUuem9vbWVkSGQgPSBudWxsO1xuICAgICAgICAgIF9hbmltYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBhY2Nlc3MgdGhlIG5hdHVyYWwgc2l6ZSBvZiB0aGUgZnVsbCBIRFxuICAgICAgICAvLyB0YXJnZXQgYXMgZmFzdCBhcyBwb3NzaWJsZSB0byBjb21wdXRlIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHZhciBnZXRab29tVGFyZ2V0U2l6ZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIGFjdGl2ZS56b29tZWRIZC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnZXRab29tVGFyZ2V0U2l6ZSk7XG4gICAgICAgICAgICBhY3RpdmUuem9vbWVkSGQuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZCcpO1xuICAgICAgICAgICAgYWN0aXZlLnpvb21lZEhkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3RpdmUuem9vbWVkSGQpO1xuICAgICAgICAgICAgX2FuaW1hdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlLm9yaWdpbmFsLmhhc0F0dHJpYnV0ZSgnc3Jjc2V0JykpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaGFzIGEgYHNyY3NldGAgYXR0cmlidWV0LCB3ZSBkb24ndCBrbm93IHRoZSBkaW1lbnNpb25zIG9mIHRoZVxuICAgICAgICAvLyB6b29tZWQgKEhEKSBpbWFnZSAobGlrZSB3aGVuIGBkYXRhLXpvb20tc3JjYCBpcyBzcGVjaWZpZWQpLlxuICAgICAgICAvLyBUaGVyZWZvcmUgdGhlIGFwcHJvYWNoIGlzIHF1aXRlIHNpbWlsYXIuXG4gICAgICAgIGFjdGl2ZS56b29tZWRIZCA9IGFjdGl2ZS56b29tZWQuY2xvbmVOb2RlKCk7XG5cbiAgICAgICAgLy8gUmVzZXR0aW5nIHRoZSBzaXplcyBhdHRyaWJ1dGUgdGVsbHMgdGhlIGJyb3dzZXIgdG8gbG9hZCB0aGVcbiAgICAgICAgLy8gaW1hZ2UgYmVzdCBmaXR0aW5nIHRoZSBjdXJyZW50IHZpZXdwb3J0IHNpemUsIHJlc3BlY3RpbmcgdGhlIGBzcmNzZXRgLlxuICAgICAgICBhY3RpdmUuem9vbWVkSGQucmVtb3ZlQXR0cmlidXRlKCdzaXplcycpO1xuXG4gICAgICAgIC8vIEluIEZpcmVmb3gsIHRoZSBgbG9hZGluZ2AgYXR0cmlidXRlIG5lZWRzIHRvIGJlIHNldCB0byBgZWFnZXJgIChkZWZhdWx0XG4gICAgICAgIC8vIHZhbHVlKSBmb3IgdGhlIGxvYWQgZXZlbnQgdG8gYmUgZmlyZWQuXG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5yZW1vdmVBdHRyaWJ1dGUoJ2xvYWRpbmcnKTtcblxuICAgICAgICAvLyBXYWl0IGZvciB0aGUgbG9hZCBldmVudCBvZiB0aGUgaGQgaW1hZ2UuIFRoaXMgd2lsbCBmaXJlIGlmIHRoZSBpbWFnZVxuICAgICAgICAvLyBpcyBhbHJlYWR5IGNhY2hlZC5cbiAgICAgICAgdmFyIGxvYWRFdmVudExpc3RlbmVyID0gYWN0aXZlLnpvb21lZEhkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYWN0aXZlLnpvb21lZEhkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsb2FkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYWN0aXZlLnpvb21lZEhkLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLWltYWdlLS1vcGVuZWQnKTtcbiAgICAgICAgICBhY3RpdmUuem9vbWVkSGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3RpdmUuem9vbWVkSGQpO1xuICAgICAgICAgIF9hbmltYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2FuaW1hdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIGlmIChpc0FuaW1hdGluZyB8fCAhYWN0aXZlLm9yaWdpbmFsKSB7XG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF9oYW5kbGVDbG9zZUVuZCA9IGZ1bmN0aW9uIF9oYW5kbGVDbG9zZUVuZCgpIHtcbiAgICAgICAgYWN0aXZlLm9yaWdpbmFsLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS16b29tLWltYWdlLS1oaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhY3RpdmUuem9vbWVkKTtcbiAgICAgICAgaWYgKGFjdGl2ZS56b29tZWRIZCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYWN0aXZlLnpvb21lZEhkKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuICAgICAgICBhY3RpdmUuem9vbWVkLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS16b29tLWltYWdlLS1vcGVuZWQnKTtcbiAgICAgICAgaWYgKGFjdGl2ZS50ZW1wbGF0ZSkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYWN0aXZlLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGFjdGl2ZS56b29tZWQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF9oYW5kbGVDbG9zZUVuZCk7XG5cbiAgICAgICAgYWN0aXZlLm9yaWdpbmFsLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOmNsb3NlZCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHsgem9vbTogem9vbSB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICBhY3RpdmUub3JpZ2luYWwgPSBudWxsO1xuICAgICAgICBhY3RpdmUuem9vbWVkID0gbnVsbDtcbiAgICAgICAgYWN0aXZlLnpvb21lZEhkID0gbnVsbDtcbiAgICAgICAgYWN0aXZlLnRlbXBsYXRlID0gbnVsbDtcblxuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgfTtcblxuICAgICAgaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tem9vbS0tb3BlbmVkJyk7XG4gICAgICBhY3RpdmUuem9vbWVkLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICBpZiAoYWN0aXZlLnpvb21lZEhkKSB7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgIH1cblxuICAgICAgLy8gRmFkZSBvdXQgdGhlIHRlbXBsYXRlIHNvIGl0J3Mgbm90IHRvbyBhYnJ1cHRcbiAgICAgIGlmIChhY3RpdmUudGVtcGxhdGUpIHtcbiAgICAgICAgYWN0aXZlLnRlbXBsYXRlLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAxNTBtcyc7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgYWN0aXZlLm9yaWdpbmFsLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOmNsb3NlJywge1xuICAgICAgICBkZXRhaWw6IHsgem9vbTogem9vbSB9XG4gICAgICB9KSk7XG5cbiAgICAgIGFjdGl2ZS56b29tZWQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF9oYW5kbGVDbG9zZUVuZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB2YXIgX3JlZjMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICB0YXJnZXQgPSBfcmVmMy50YXJnZXQ7XG5cbiAgICBpZiAoYWN0aXZlLm9yaWdpbmFsKSB7XG4gICAgICByZXR1cm4gY2xvc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3Blbih7IHRhcmdldDogdGFyZ2V0IH0pO1xuICB9O1xuXG4gIHZhciBnZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gem9vbU9wdGlvbnM7XG4gIH07XG5cbiAgdmFyIGdldEltYWdlcyA9IGZ1bmN0aW9uIGdldEltYWdlcygpIHtcbiAgICByZXR1cm4gaW1hZ2VzO1xuICB9O1xuXG4gIHZhciBnZXRab29tZWRJbWFnZSA9IGZ1bmN0aW9uIGdldFpvb21lZEltYWdlKCkge1xuICAgIHJldHVybiBhY3RpdmUub3JpZ2luYWw7XG4gIH07XG5cbiAgdmFyIGltYWdlcyA9IFtdO1xuICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGlzQW5pbWF0aW5nID0gZmFsc2U7XG4gIHZhciBzY3JvbGxUb3AgPSAwO1xuICB2YXIgem9vbU9wdGlvbnMgPSBvcHRpb25zO1xuICB2YXIgYWN0aXZlID0ge1xuICAgIG9yaWdpbmFsOiBudWxsLFxuICAgIHpvb21lZDogbnVsbCxcbiAgICB6b29tZWRIZDogbnVsbCxcbiAgICB0ZW1wbGF0ZTogbnVsbFxuXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGlzIG9taXR0ZWQsIGl0J3MgcmVwbGFjZWQgYnkgdGhlIG9wdGlvbnNcbiAgfTtpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNlbGVjdG9yKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICB6b29tT3B0aW9ucyA9IHNlbGVjdG9yO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIHx8IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgLy8gdG8gcHJvY2VzcyBlbXB0eSBzdHJpbmcgYXMgYSBzZWxlY3RvclxuICApIHtcbiAgICAgIGF0dGFjaChzZWxlY3Rvcik7XG4gICAgfVxuXG4gIC8vIEFwcGx5IHRoZSBkZWZhdWx0IG9wdGlvbiB2YWx1ZXNcbiAgem9vbU9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgbWFyZ2luOiAwLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBzY3JvbGxPZmZzZXQ6IDQwLFxuICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICB0ZW1wbGF0ZTogbnVsbFxuICB9LCB6b29tT3B0aW9ucyk7XG5cbiAgdmFyIG92ZXJsYXkgPSBjcmVhdGVPdmVybGF5KHpvb21PcHRpb25zLmJhY2tncm91bmQpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hhbmRsZUNsaWNrKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBfaGFuZGxlS2V5VXApO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfaGFuZGxlU2Nyb2xsKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNsb3NlKTtcblxuICB2YXIgem9vbSA9IHtcbiAgICBvcGVuOiBvcGVuLFxuICAgIGNsb3NlOiBjbG9zZSxcbiAgICB0b2dnbGU6IHRvZ2dsZSxcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICBjbG9uZTogY2xvbmUsXG4gICAgYXR0YWNoOiBhdHRhY2gsXG4gICAgZGV0YWNoOiBkZXRhY2gsXG4gICAgb246IG9uLFxuICAgIG9mZjogb2ZmLFxuICAgIGdldE9wdGlvbnM6IGdldE9wdGlvbnMsXG4gICAgZ2V0SW1hZ2VzOiBnZXRJbWFnZXMsXG4gICAgZ2V0Wm9vbWVkSW1hZ2U6IGdldFpvb21lZEltYWdlXG4gIH07XG5cbiAgcmV0dXJuIHpvb207XG59O1xuXG5mdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBjc3MgPSBcIi5tZWRpdW0tem9vbS1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzO3dpbGwtY2hhbmdlOm9wYWNpdHl9Lm1lZGl1bS16b29tLS1vcGVuZWQgLm1lZGl1bS16b29tLW92ZXJsYXl7Y3Vyc29yOnBvaW50ZXI7Y3Vyc29yOnpvb20tb3V0O29wYWNpdHk6MX0ubWVkaXVtLXpvb20taW1hZ2V7Y3Vyc29yOnBvaW50ZXI7Y3Vyc29yOnpvb20taW47dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllciguMiwwLC4yLDEpIWltcG9ydGFudH0ubWVkaXVtLXpvb20taW1hZ2UtLWhpZGRlbnt2aXNpYmlsaXR5OmhpZGRlbn0ubWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZHtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcjtjdXJzb3I6em9vbS1vdXQ7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfVwiO1xuc3R5bGVJbmplY3QoY3NzKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVkaXVtWm9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=