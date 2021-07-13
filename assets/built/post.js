/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/post/copy.js":
/*!*****************************!*\
  !*** ./src/js/post/copy.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ copyInit; }
/* harmony export */ });
var toast = __webpack_require__(/*! ./toast */ "./src/js/post/toast.js");

var copyButtons = document.querySelectorAll('.sm-post-share-bar__link--copy');
function copyInit() {
  if (copyButtons.length) {
    copyButtons.forEach(function (el) {
      el.addEventListener('click', function () {
        var url = window.location.href;
        var temp = document.createElement('input');
        document.body.appendChild(temp);
        temp.value = url;
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        toast('Link copied to clipboard');
      });
    });
  }
}

/***/ }),

/***/ "./src/js/post/fluidvids.js":
/*!**********************************!*\
  !*** ./src/js/post/fluidvids.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ fluidvidsInit; }
/* harmony export */ });
var fluidvids = __webpack_require__(/*! fluidvids.js/dist/fluidvids.js */ "./node_modules/fluidvids.js/dist/fluidvids.js"); // Init FluidVids


function fluidvidsInit() {
  fluidvids.init({
    selector: ['iframe', 'object'],
    players: ['www.youtube.com', 'player.vimeo.com']
  });
}

/***/ }),

/***/ "./src/js/post/medium_zoom.js":
/*!************************************!*\
  !*** ./src/js/post/medium_zoom.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ initMediumZoom; }
/* harmony export */ });
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Medium Zoom

function initMediumZoom() {
  var directImages = document.querySelectorAll('.sm-post__content > img');
  var markdownImages = document.querySelectorAll('.sm-post__content > p > img');
  var kgImages = document.querySelectorAll('.kg-image-card > img');
  var galleryImages = document.querySelectorAll('.kg-gallery-image > img');
  var postImages = [].concat(_toConsumableArray(directImages), _toConsumableArray(markdownImages), _toConsumableArray(kgImages), _toConsumableArray(galleryImages));
  (0,medium_zoom__WEBPACK_IMPORTED_MODULE_0__.default)(postImages, {
    background: 'rgba(0,0,0,0.75)'
  });
}

/***/ }),

/***/ "./src/js/post/responsiveTables.js":
/*!*****************************************!*\
  !*** ./src/js/post/responsiveTables.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tablePrependInit; }
/* harmony export */ });
//-------------------------------------------
// Make tables responsive
//-------------------------------------------
var tables = document.querySelectorAll('.sm-post__content > table');
function tablePrependInit() {
  function tablePrepend(e) {
    var responsiveWrapper = document.createElement('div');
    responsiveWrapper.setAttribute('style', 'width: 100%; overflow-x: auto; margin: 2rem 0;');
    e.parentNode.insertBefore(responsiveWrapper, e);
    responsiveWrapper.appendChild(e);
  }

  tables.forEach(function (e) {
    return tablePrepend(e);
  });
}

/***/ }),

/***/ "./src/js/post/toast.js":
/*!******************************!*\
  !*** ./src/js/post/toast.js ***!
  \******************************/
/***/ (function(module) {

var destroyToast = function destroyToast(el) {
  el.classList.add('sm-toast__slide-out');
  setTimeout(function () {
    el.remove();
  }, 500);
};

var checkDomForToast = function checkDomForToast() {
  var extantToast = document.querySelectorAll('.sm-toast');

  if (extantToast.length) {
    extantToast.forEach(function (el) {
      return el.remove();
    });
  }
};

module.exports = function createToast(value) {
  checkDomForToast();
  var container = document.createElement('div');
  container.classList.add('sm-toast');
  var innerContainer = document.createElement('div');
  innerContainer.classList.add('sm-toast__inner');
  container.append(innerContainer);
  var p = document.createElement('p');
  p.textContent = value;
  innerContainer.append(p);
  document.body.append(container);
  setTimeout(destroyToast.bind(null, container), 3000);
};

/***/ }),

/***/ "./node_modules/fluidvids.js/dist/fluidvids.js":
/*!*****************************************************!*\
  !*** ./node_modules/fluidvids.js/dist/fluidvids.js ***!
  \*****************************************************/
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ }),

/***/ "./src/scss/post.scss":
/*!****************************!*\
  !*** ./src/scss/post.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./src/js/post/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_post_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/post.scss */ "./src/scss/post.scss");
/* harmony import */ var _medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medium_zoom */ "./src/js/post/medium_zoom.js");
/* harmony import */ var _fluidvids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fluidvids */ "./src/js/post/fluidvids.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copy */ "./src/js/post/copy.js");
/* harmony import */ var _responsiveTables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveTables */ "./src/js/post/responsiveTables.js");





(0,_medium_zoom__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_fluidvids__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_copy__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_responsiveTables__WEBPACK_IMPORTED_MODULE_4__.default)();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC8uL3NyYy9qcy9wb3N0L2NvcHkuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9zcmMvanMvcG9zdC9mbHVpZHZpZHMuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9zcmMvanMvcG9zdC9tZWRpdW1fem9vbS5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL3NyYy9qcy9wb3N0L3Jlc3BvbnNpdmVUYWJsZXMuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9zcmMvanMvcG9zdC90b2FzdC5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL25vZGVfbW9kdWxlcy9mbHVpZHZpZHMuanMvZGlzdC9mbHVpZHZpZHMuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9ub2RlX21vZHVsZXMvbWVkaXVtLXpvb20vZGlzdC9tZWRpdW0tem9vbS5lc20uanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9zcmMvc2Nzcy9wb3N0LnNjc3M/YWYwYSIsIndlYnBhY2s6Ly9zbWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zbWFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbWFydC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NtYXJ0Ly4vc3JjL2pzL3Bvc3QvaW5kZXguanMiXSwibmFtZXMiOlsidG9hc3QiLCJyZXF1aXJlIiwiY29weUJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb3B5SW5pdCIsImxlbmd0aCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0ZW1wIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsImZsdWlkdmlkcyIsImZsdWlkdmlkc0luaXQiLCJpbml0Iiwic2VsZWN0b3IiLCJwbGF5ZXJzIiwiaW5pdE1lZGl1bVpvb20iLCJkaXJlY3RJbWFnZXMiLCJtYXJrZG93bkltYWdlcyIsImtnSW1hZ2VzIiwiZ2FsbGVyeUltYWdlcyIsInBvc3RJbWFnZXMiLCJtZWRpdW1ab29tIiwiYmFja2dyb3VuZCIsInRhYmxlcyIsInRhYmxlUHJlcGVuZEluaXQiLCJ0YWJsZVByZXBlbmQiLCJlIiwicmVzcG9uc2l2ZVdyYXBwZXIiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZGVzdHJveVRvYXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImNoZWNrRG9tRm9yVG9hc3QiLCJleHRhbnRUb2FzdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVUb2FzdCIsImNvbnRhaW5lciIsImlubmVyQ29udGFpbmVyIiwiYXBwZW5kIiwicCIsInRleHRDb250ZW50IiwiYmluZCIsInJlc3BvbnNpdmVUYWJsZUluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHVDQUFELENBQXJCOztBQUVBLElBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQ0FBMUIsQ0FBcEI7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQ2pDLE1BQUlILFdBQVcsQ0FBQ0ksTUFBaEIsRUFBd0I7QUFDdEJKLGVBQVcsQ0FBQ0ssT0FBWixDQUFvQixVQUFDQyxFQUFELEVBQVE7QUFDMUJBLFFBQUUsQ0FBQ0MsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBTTtBQUNqQyxZQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBNUI7QUFDQSxZQUFNQyxJQUFJLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0FaLGdCQUFRLENBQUNhLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkgsSUFBMUI7QUFDQUEsWUFBSSxDQUFDSSxLQUFMLEdBQWFSLEdBQWI7QUFDQUksWUFBSSxDQUFDSyxNQUFMO0FBQ0FoQixnQkFBUSxDQUFDaUIsV0FBVCxDQUFxQixNQUFyQjtBQUNBakIsZ0JBQVEsQ0FBQ2EsSUFBVCxDQUFjSyxXQUFkLENBQTBCUCxJQUExQjtBQUNBZCxhQUFLLENBQUMsMEJBQUQsQ0FBTDtBQUNELE9BVEQ7QUFVRCxLQVhEO0FBWUQ7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkQsSUFBTXNCLFNBQVMsR0FBR3JCLG1CQUFPLENBQUMscUZBQUQsQ0FBekIsQyxDQUVBOzs7QUFDZSxTQUFTc0IsYUFBVCxHQUF5QjtBQUN0Q0QsV0FBUyxDQUFDRSxJQUFWLENBQWU7QUFDYkMsWUFBUSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FERztBQUViQyxXQUFPLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEI7QUFGSSxHQUFmO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ05EOztBQUNlLFNBQVNDLGNBQVQsR0FBMEI7QUFDdkMsTUFBTUMsWUFBWSxHQUFHekIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix5QkFBMUIsQ0FBckI7QUFDQSxNQUFNeUIsY0FBYyxHQUFHMUIsUUFBUSxDQUFDQyxnQkFBVCxDQUNyQiw2QkFEcUIsQ0FBdkI7QUFHQSxNQUFNMEIsUUFBUSxHQUFHM0IsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixzQkFBMUIsQ0FBakI7QUFDQSxNQUFNMkIsYUFBYSxHQUFHNUIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix5QkFBMUIsQ0FBdEI7QUFDQSxNQUFNNEIsVUFBVSxnQ0FDWEosWUFEVyxzQkFFWEMsY0FGVyxzQkFHWEMsUUFIVyxzQkFJWEMsYUFKVyxFQUFoQjtBQU9BRSxzREFBVSxDQUFDRCxVQUFELEVBQWE7QUFDckJFLGNBQVUsRUFBRTtBQURTLEdBQWIsQ0FBVjtBQUdELEM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxNQUFNLEdBQUdoQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLDJCQUExQixDQUFmO0FBRWUsU0FBU2dDLGdCQUFULEdBQTRCO0FBQ3pDLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCLFFBQU1DLGlCQUFpQixHQUFHcEMsUUFBUSxDQUFDWSxhQUFULENBQXVCLEtBQXZCLENBQTFCO0FBQ0F3QixxQkFBaUIsQ0FBQ0MsWUFBbEIsQ0FDRSxPQURGLEVBRUUsZ0RBRkY7QUFJQUYsS0FBQyxDQUFDRyxVQUFGLENBQWFDLFlBQWIsQ0FBMEJILGlCQUExQixFQUE2Q0QsQ0FBN0M7QUFDQUMscUJBQWlCLENBQUN0QixXQUFsQixDQUE4QnFCLENBQTlCO0FBQ0Q7O0FBRURILFFBQU0sQ0FBQzVCLE9BQVAsQ0FBZSxVQUFDK0IsQ0FBRDtBQUFBLFdBQU9ELFlBQVksQ0FBQ0MsQ0FBRCxDQUFuQjtBQUFBLEdBQWY7QUFDRCxDOzs7Ozs7Ozs7O0FDakJELElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNuQyxFQUFELEVBQVE7QUFDM0JBLElBQUUsQ0FBQ29DLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixxQkFBakI7QUFDQUMsWUFBVSxDQUFDLFlBQU07QUFDZnRDLE1BQUUsQ0FBQ3VDLE1BQUg7QUFDRCxHQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0QsQ0FMRDs7QUFPQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsTUFBTUMsV0FBVyxHQUFHOUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixDQUFwQjs7QUFDQSxNQUFJNkMsV0FBVyxDQUFDM0MsTUFBaEIsRUFBd0I7QUFDdEIyQyxlQUFXLENBQUMxQyxPQUFaLENBQW9CLFVBQUNDLEVBQUQ7QUFBQSxhQUFRQSxFQUFFLENBQUN1QyxNQUFILEVBQVI7QUFBQSxLQUFwQjtBQUNEO0FBQ0YsQ0FMRDs7QUFPQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFNBQVNDLFdBQVQsQ0FBcUJsQyxLQUFyQixFQUE0QjtBQUMzQzhCLGtCQUFnQjtBQUNoQixNQUFNSyxTQUFTLEdBQUdsRCxRQUFRLENBQUNZLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQXNDLFdBQVMsQ0FBQ1QsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBeEI7QUFDQSxNQUFNUyxjQUFjLEdBQUduRCxRQUFRLENBQUNZLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdkI7QUFDQXVDLGdCQUFjLENBQUNWLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGlCQUE3QjtBQUNBUSxXQUFTLENBQUNFLE1BQVYsQ0FBaUJELGNBQWpCO0FBQ0EsTUFBTUUsQ0FBQyxHQUFHckQsUUFBUSxDQUFDWSxhQUFULENBQXVCLEdBQXZCLENBQVY7QUFDQXlDLEdBQUMsQ0FBQ0MsV0FBRixHQUFnQnZDLEtBQWhCO0FBQ0FvQyxnQkFBYyxDQUFDQyxNQUFmLENBQXNCQyxDQUF0QjtBQUNBckQsVUFBUSxDQUFDYSxJQUFULENBQWN1QyxNQUFkLENBQXFCRixTQUFyQjtBQUNBUCxZQUFVLENBQUNILFlBQVksQ0FBQ2UsSUFBYixDQUFrQixJQUFsQixFQUF3QkwsU0FBeEIsQ0FBRCxFQUFxQyxJQUFyQyxDQUFWO0FBQ0QsQ0FaRCxDOzs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxvQ0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDbkIsR0FBRyxNQUFNLEVBSU47QUFDSCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQixpQkFBaUIsb0JBQW9CO0FBQ3hELE1BQU07QUFDTixzQkFBc0I7QUFDdEIsMEJBQTBCLFVBQVUsV0FBVyxhQUFhLGNBQWM7QUFDMUUsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEVEO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxpQkFBaUI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2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QTtBQUNBO0FBQ0E7QUFDQTtBQUVBMUIscURBQWM7QUFDZEwsbURBQVM7QUFDVGpCLDhDQUFRO0FBQ1JzRCwwREFBbUIsRyIsImZpbGUiOiJwb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9hc3QgPSByZXF1aXJlKCcuL3RvYXN0Jyk7XG5cbmNvbnN0IGNvcHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtLXBvc3Qtc2hhcmUtYmFyX19saW5rLS1jb3B5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvcHlJbml0KCkge1xuICBpZiAoY29weUJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgY29weUJ1dHRvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgICAgIHRlbXAudmFsdWUgPSB1cmw7XG4gICAgICAgIHRlbXAuc2VsZWN0KCk7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcCk7XG4gICAgICAgIHRvYXN0KCdMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBmbHVpZHZpZHMgPSByZXF1aXJlKCdmbHVpZHZpZHMuanMvZGlzdC9mbHVpZHZpZHMuanMnKTtcblxuLy8gSW5pdCBGbHVpZFZpZHNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsdWlkdmlkc0luaXQoKSB7XG4gIGZsdWlkdmlkcy5pbml0KHtcbiAgICBzZWxlY3RvcjogWydpZnJhbWUnLCAnb2JqZWN0J10sXG4gICAgcGxheWVyczogWyd3d3cueW91dHViZS5jb20nLCAncGxheWVyLnZpbWVvLmNvbSddLFxuICB9KTtcbn1cbiIsImltcG9ydCBtZWRpdW1ab29tIGZyb20gJ21lZGl1bS16b29tJztcblxuLy8gTWVkaXVtIFpvb21cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNZWRpdW1ab29tKCkge1xuICBjb25zdCBkaXJlY3RJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc20tcG9zdF9fY29udGVudCA+IGltZycpO1xuICBjb25zdCBtYXJrZG93bkltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5zbS1wb3N0X19jb250ZW50ID4gcCA+IGltZycsXG4gICk7XG4gIGNvbnN0IGtnSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtnLWltYWdlLWNhcmQgPiBpbWcnKTtcbiAgY29uc3QgZ2FsbGVyeUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZy1nYWxsZXJ5LWltYWdlID4gaW1nJyk7XG4gIGNvbnN0IHBvc3RJbWFnZXMgPSBbXG4gICAgLi4uZGlyZWN0SW1hZ2VzLFxuICAgIC4uLm1hcmtkb3duSW1hZ2VzLFxuICAgIC4uLmtnSW1hZ2VzLFxuICAgIC4uLmdhbGxlcnlJbWFnZXMsXG4gIF07XG5cbiAgbWVkaXVtWm9vbShwb3N0SW1hZ2VzLCB7XG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC43NSknLFxuICB9KTtcbn1cbiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTWFrZSB0YWJsZXMgcmVzcG9uc2l2ZVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc20tcG9zdF9fY29udGVudCA+IHRhYmxlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhYmxlUHJlcGVuZEluaXQoKSB7XG4gIGZ1bmN0aW9uIHRhYmxlUHJlcGVuZChlKSB7XG4gICAgY29uc3QgcmVzcG9uc2l2ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXNwb25zaXZlV3JhcHBlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAnc3R5bGUnLFxuICAgICAgJ3dpZHRoOiAxMDAlOyBvdmVyZmxvdy14OiBhdXRvOyBtYXJnaW46IDJyZW0gMDsnLFxuICAgICk7XG4gICAgZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXNwb25zaXZlV3JhcHBlciwgZSk7XG4gICAgcmVzcG9uc2l2ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZSk7XG4gIH1cblxuICB0YWJsZXMuZm9yRWFjaCgoZSkgPT4gdGFibGVQcmVwZW5kKGUpKTtcbn1cbiIsImNvbnN0IGRlc3Ryb3lUb2FzdCA9IChlbCkgPT4ge1xuICBlbC5jbGFzc0xpc3QuYWRkKCdzbS10b2FzdF9fc2xpZGUtb3V0Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsLnJlbW92ZSgpO1xuICB9LCA1MDApO1xufTtcblxuY29uc3QgY2hlY2tEb21Gb3JUb2FzdCA9ICgpID0+IHtcbiAgY29uc3QgZXh0YW50VG9hc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc20tdG9hc3QnKTtcbiAgaWYgKGV4dGFudFRvYXN0Lmxlbmd0aCkge1xuICAgIGV4dGFudFRvYXN0LmZvckVhY2goKGVsKSA9PiBlbC5yZW1vdmUoKSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlVG9hc3QodmFsdWUpIHtcbiAgY2hlY2tEb21Gb3JUb2FzdCgpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NtLXRvYXN0Jyk7XG4gIGNvbnN0IGlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NtLXRvYXN0X19pbm5lcicpO1xuICBjb250YWluZXIuYXBwZW5kKGlubmVyQ29udGFpbmVyKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICBpbm5lckNvbnRhaW5lci5hcHBlbmQocCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG4gIHNldFRpbWVvdXQoZGVzdHJveVRvYXN0LmJpbmQobnVsbCwgY29udGFpbmVyKSwgMzAwMCk7XG59O1xuIiwiLyohIGZsdWlkdmlkcy5qcyB2Mi40LjEgfCAoYykgMjAxNCBAdG9kZG1vdHRvIHwgaHR0cHM6Ly9naXRodWIuY29tL3RvZGRtb3R0by9mbHVpZHZpZHMgKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcbiAgfSBlbHNlIHtcbiAgICByb290LmZsdWlkdmlkcyA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZmx1aWR2aWRzID0ge1xuICAgIHNlbGVjdG9yOiBbJ2lmcmFtZScsICdvYmplY3QnXSxcbiAgICBwbGF5ZXJzOiBbJ3d3dy55b3V0dWJlLmNvbScsICdwbGF5ZXIudmltZW8uY29tJ11cbiAgfTtcblxuICB2YXIgY3NzID0gW1xuICAgICcuZmx1aWR2aWRzIHsnLFxuICAgICAgJ3dpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDEwMCU7IHBvc2l0aW9uOiByZWxhdGl2ZTsnLFxuICAgICd9JyxcbiAgICAnLmZsdWlkdmlkcy1pdGVtIHsnLFxuICAgICAgJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsnLFxuICAgICd9J1xuICBdLmpvaW4oJycpO1xuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMgKHNyYykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCdeKGh0dHBzPzopP1xcL1xcLyg/OicgKyBmbHVpZHZpZHMucGxheWVycy5qb2luKCd8JykgKyAnKS4qJCcsICdpJykudGVzdChzcmMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmF0aW8gKGhlaWdodCwgd2lkdGgpIHtcbiAgICByZXR1cm4gKChwYXJzZUludChoZWlnaHQsIDEwKSAvIHBhcnNlSW50KHdpZHRoLCAxMCkpICogMTAwKSArICclJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdWlkIChlbGVtKSB7XG4gICAgaWYgKCFtYXRjaGVzKGVsZW0uc3JjKSAmJiAhbWF0Y2hlcyhlbGVtLmRhdGEpIHx8ICEhZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmx1aWR2aWRzJykpIHJldHVybjtcbiAgICB2YXIgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcCwgZWxlbSk7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gKGVsZW0uY2xhc3NOYW1lID8gJyAnIDogJycpICsgJ2ZsdWlkdmlkcy1pdGVtJztcbiAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1mbHVpZHZpZHMnLCAnbG9hZGVkJyk7XG4gICAgd3JhcC5jbGFzc05hbWUgKz0gJ2ZsdWlkdmlkcyc7XG4gICAgd3JhcC5zdHlsZS5wYWRkaW5nVG9wID0gZ2V0UmF0aW8oZWxlbS5oZWlnaHQsIGVsZW0ud2lkdGgpO1xuICAgIHdyYXAuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHlsZXMgKCkge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gJzxwPng8L3A+PHN0eWxlPicgKyBjc3MgKyAnPC9zdHlsZT4nO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMV0pO1xuICB9XG5cbiAgZmx1aWR2aWRzLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGZsdWlkdmlkcy5zZWxlY3Rvci5qb2luKCkpO1xuICAgIHZhciBpID0gbm9kZXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGZsdWlkKG5vZGVzW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgZmx1aWR2aWRzLmluaXQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgZmx1aWR2aWRzW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gICAgZmx1aWR2aWRzLnJlbmRlcigpO1xuICAgIGFkZFN0eWxlcygpO1xuICB9O1xuXG4gIHJldHVybiBmbHVpZHZpZHM7XG5cbn0pO1xuIiwiLyohIG1lZGl1bS16b29tIDEuMC42IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vZnJhbmNvaXNjaGFsaWZvdXIvbWVkaXVtLXpvb20gKi9cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBpc1N1cHBvcnRlZChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTUcnO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xudmFyIGlzTm9kZUxpc3QgPSBmdW5jdGlvbiBpc05vZGVMaXN0KHNlbGVjdG9yKSB7XG4gIHJldHVybiBOb2RlTGlzdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihzZWxlY3Rvcik7XG59O1xuXG52YXIgaXNOb2RlID0gZnVuY3Rpb24gaXNOb2RlKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciAmJiBzZWxlY3Rvci5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbnZhciBpc1N2ZyA9IGZ1bmN0aW9uIGlzU3ZnKGltYWdlKSB7XG4gIHZhciBzb3VyY2UgPSBpbWFnZS5jdXJyZW50U3JjIHx8IGltYWdlLnNyYztcbiAgcmV0dXJuIHNvdXJjZS5zdWJzdHIoLTQpLnRvTG93ZXJDYXNlKCkgPT09ICcuc3ZnJztcbn07XG5cbnZhciBnZXRJbWFnZXNGcm9tU2VsZWN0b3IgPSBmdW5jdGlvbiBnZXRJbWFnZXNGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdHJ5IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvci5maWx0ZXIoaXNTdXBwb3J0ZWQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGVMaXN0KHNlbGVjdG9yKSkge1xuICAgICAgLy8gRG8gbm90IHVzZSBzcHJlYWQgb3BlcmF0b3Igb3IgQXJyYXkuZnJvbSgpIGZvciBJRSBzdXBwb3J0XG4gICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChzZWxlY3RvcikuZmlsdGVyKGlzU3VwcG9ydGVkKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIFtzZWxlY3Rvcl0uZmlsdGVyKGlzU3VwcG9ydGVkKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gRG8gbm90IHVzZSBzcHJlYWQgb3BlcmF0b3Igb3IgQXJyYXkuZnJvbSgpIGZvciBJRSBzdXBwb3J0XG4gICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZmlsdGVyKGlzU3VwcG9ydGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBwcm92aWRlZCBzZWxlY3RvciBpcyBpbnZhbGlkLlxcbicgKyAnRXhwZWN0cyBhIENTUyBzZWxlY3RvciwgYSBOb2RlIGVsZW1lbnQsIGEgTm9kZUxpc3Qgb3IgYW4gYXJyYXkuXFxuJyArICdTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mcmFuY29pc2NoYWxpZm91ci9tZWRpdW0tem9vbScpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlT3ZlcmxheSA9IGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoYmFja2dyb3VuZCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLW92ZXJsYXknKTtcbiAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcblxuICByZXR1cm4gb3ZlcmxheTtcbn07XG5cbnZhciBjbG9uZVRhcmdldCA9IGZ1bmN0aW9uIGNsb25lVGFyZ2V0KHRlbXBsYXRlKSB7XG4gIHZhciBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcgPSB0ZW1wbGF0ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHRvcCA9IF90ZW1wbGF0ZSRnZXRCb3VuZGluZy50b3AsXG4gICAgICBsZWZ0ID0gX3RlbXBsYXRlJGdldEJvdW5kaW5nLmxlZnQsXG4gICAgICB3aWR0aCA9IF90ZW1wbGF0ZSRnZXRCb3VuZGluZy53aWR0aCxcbiAgICAgIGhlaWdodCA9IF90ZW1wbGF0ZSRnZXRCb3VuZGluZy5oZWlnaHQ7XG5cbiAgdmFyIGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKCk7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcblxuICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgY2xvbmUuc3R5bGUudG9wID0gdG9wICsgc2Nyb2xsVG9wICsgJ3B4JztcbiAgY2xvbmUuc3R5bGUubGVmdCA9IGxlZnQgKyBzY3JvbGxMZWZ0ICsgJ3B4JztcbiAgY2xvbmUuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gIGNsb25lLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gIGNsb25lLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gIHJldHVybiBjbG9uZTtcbn07XG5cbnZhciBjcmVhdGVDdXN0b21FdmVudCA9IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50KHR5cGUsIHBhcmFtcykge1xuICB2YXIgZXZlbnRQYXJhbXMgPSBfZXh0ZW5kcyh7XG4gICAgYnViYmxlczogZmFsc2UsXG4gICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgfSwgcGFyYW1zKTtcblxuICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgZXZlbnRQYXJhbXMpO1xuICB9XG5cbiAgdmFyIGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudCh0eXBlLCBldmVudFBhcmFtcy5idWJibGVzLCBldmVudFBhcmFtcy5jYW5jZWxhYmxlLCBldmVudFBhcmFtcy5kZXRhaWwpO1xuXG4gIHJldHVybiBjdXN0b21FdmVudDtcbn07XG5cbnZhciBtZWRpdW1ab29tID0gZnVuY3Rpb24gbWVkaXVtWm9vbShzZWxlY3Rvcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgLyoqXG4gICAqIEVuc3VyZSB0aGUgY29tcGF0aWJpbGl0eSB3aXRoIElFMTEgaWYgbm8gUHJvbWlzZSBwb2x5ZmlsbCBhcmUgdXNlZC5cbiAgICovXG4gIHZhciBQcm9taXNlID0gd2luZG93LlByb21pc2UgfHwgZnVuY3Rpb24gUHJvbWlzZShmbikge1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICAgIGZuKG5vb3AsIG5vb3ApO1xuICB9O1xuXG4gIHZhciBfaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBfaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG5cbiAgICBpZiAodGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbWFnZXMuaW5kZXhPZih0YXJnZXQpID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRvZ2dsZSh7IHRhcmdldDogdGFyZ2V0IH0pO1xuICB9O1xuXG4gIHZhciBfaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gX2hhbmRsZVNjcm9sbCgpIHtcbiAgICBpZiAoaXNBbmltYXRpbmcgfHwgIWFjdGl2ZS5vcmlnaW5hbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcblxuICAgIGlmIChNYXRoLmFicyhzY3JvbGxUb3AgLSBjdXJyZW50U2Nyb2xsKSA+IHpvb21PcHRpb25zLnNjcm9sbE9mZnNldCkge1xuICAgICAgc2V0VGltZW91dChjbG9zZSwgMTUwKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIF9oYW5kbGVLZXlVcChldmVudCkge1xuICAgIHZhciBrZXkgPSBldmVudC5rZXkgfHwgZXZlbnQua2V5Q29kZTtcblxuICAgIC8vIENsb3NlIGlmIGVzY2FwZSBrZXkgaXMgcHJlc3NlZFxuICAgIGlmIChrZXkgPT09ICdFc2NhcGUnIHx8IGtleSA9PT0gJ0VzYycgfHwga2V5ID09PSAyNykge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICB2YXIgbmV3T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kKSB7XG4gICAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLmJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY29udGFpbmVyICYmIG9wdGlvbnMuY29udGFpbmVyIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICBuZXdPcHRpb25zLmNvbnRhaW5lciA9IF9leHRlbmRzKHt9LCB6b29tT3B0aW9ucy5jb250YWluZXIsIG9wdGlvbnMuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy50ZW1wbGF0ZSkge1xuICAgICAgdmFyIHRlbXBsYXRlID0gaXNOb2RlKG9wdGlvbnMudGVtcGxhdGUpID8gb3B0aW9ucy50ZW1wbGF0ZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy50ZW1wbGF0ZSk7XG5cbiAgICAgIG5ld09wdGlvbnMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICB6b29tT3B0aW9ucyA9IF9leHRlbmRzKHt9LCB6b29tT3B0aW9ucywgbmV3T3B0aW9ucyk7XG5cbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGltYWdlLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOnVwZGF0ZScsIHtcbiAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH07XG5cbiAgdmFyIGNsb25lID0gZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHJldHVybiBtZWRpdW1ab29tKF9leHRlbmRzKHt9LCB6b29tT3B0aW9ucywgb3B0aW9ucykpO1xuICB9O1xuXG4gIHZhciBhdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNlbGVjdG9ycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgc2VsZWN0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBuZXdJbWFnZXMgPSBzZWxlY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChpbWFnZXNBY2N1bXVsYXRvciwgY3VycmVudFNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGltYWdlc0FjY3VtdWxhdG9yLCBnZXRJbWFnZXNGcm9tU2VsZWN0b3IoY3VycmVudFNlbGVjdG9yKSk7XG4gICAgfSwgW10pO1xuXG4gICAgbmV3SW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAobmV3SW1hZ2UpIHtcbiAgICAgIHJldHVybiBpbWFnZXMuaW5kZXhPZihuZXdJbWFnZSkgPT09IC0xO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG5ld0ltYWdlKSB7XG4gICAgICBpbWFnZXMucHVzaChuZXdJbWFnZSk7XG4gICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZScpO1xuICAgIH0pO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgICAgbGlzdGVuZXIgPSBfcmVmLmxpc3RlbmVyLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG5cbiAgICAgIG5ld0ltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH07XG5cbiAgdmFyIGRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNlbGVjdG9ycyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBzZWxlY3RvcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlLnpvb21lZCkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG5cbiAgICB2YXIgaW1hZ2VzVG9EZXRhY2ggPSBzZWxlY3RvcnMubGVuZ3RoID4gMCA/IHNlbGVjdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGltYWdlc0FjY3VtdWxhdG9yLCBjdXJyZW50U2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoaW1hZ2VzQWNjdW11bGF0b3IsIGdldEltYWdlc0Zyb21TZWxlY3RvcihjdXJyZW50U2VsZWN0b3IpKTtcbiAgICB9LCBbXSkgOiBpbWFnZXM7XG5cbiAgICBpbWFnZXNUb0RldGFjaC5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXpvb20taW1hZ2UnKTtcbiAgICAgIGltYWdlLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOmRldGFjaCcsIHtcbiAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaW1hZ2VzID0gaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIHJldHVybiBpbWFnZXNUb0RldGFjaC5pbmRleE9mKGltYWdlKSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfTtcblxuICB2YXIgb24gPSBmdW5jdGlvbiBvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbWVkaXVtLXpvb206JyArIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goeyB0eXBlOiAnbWVkaXVtLXpvb206JyArIHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciwgb3B0aW9uczogb3B0aW9ucyB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBvZmYgPSBmdW5jdGlvbiBvZmYodHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lZGl1bS16b29tOicgKyB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBldmVudExpc3RlbmVycyA9IGV2ZW50TGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoZXZlbnRMaXN0ZW5lcikge1xuICAgICAgcmV0dXJuICEoZXZlbnRMaXN0ZW5lci50eXBlID09PSAnbWVkaXVtLXpvb206JyArIHR5cGUgJiYgZXZlbnRMaXN0ZW5lci5saXN0ZW5lci50b1N0cmluZygpID09PSBsaXN0ZW5lci50b1N0cmluZygpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBvcGVuID0gZnVuY3Rpb24gb3BlbigpIHtcbiAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQ7XG5cbiAgICB2YXIgX2FuaW1hdGUgPSBmdW5jdGlvbiBfYW5pbWF0ZSgpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB7XG4gICAgICAgIHdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9O1xuICAgICAgdmFyIHZpZXdwb3J0V2lkdGggPSB2b2lkIDA7XG4gICAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSB2b2lkIDA7XG5cbiAgICAgIGlmICh6b29tT3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgaWYgKHpvb21PcHRpb25zLmNvbnRhaW5lciBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgIC8vIFRoZSBjb250YWluZXIgaXMgZ2l2ZW4gYXMgYW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyBsaWtlIHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcFxuICAgICAgICAgIGNvbnRhaW5lciA9IF9leHRlbmRzKHt9LCBjb250YWluZXIsIHpvb21PcHRpb25zLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGFkanVzdCBjdXN0b20gb3B0aW9ucyBsaWtlIGNvbnRhaW5lci5yaWdodCBvciBjb250YWluZXIuYm90dG9tXG4gICAgICAgICAgdmlld3BvcnRXaWR0aCA9IGNvbnRhaW5lci53aWR0aCAtIGNvbnRhaW5lci5sZWZ0IC0gY29udGFpbmVyLnJpZ2h0IC0gem9vbU9wdGlvbnMubWFyZ2luICogMjtcbiAgICAgICAgICB2aWV3cG9ydEhlaWdodCA9IGNvbnRhaW5lci5oZWlnaHQgLSBjb250YWluZXIudG9wIC0gY29udGFpbmVyLmJvdHRvbSAtIHpvb21PcHRpb25zLm1hcmdpbiAqIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlIGNvbnRhaW5lciBpcyBnaXZlbiBhcyBhbiBlbGVtZW50XG4gICAgICAgICAgdmFyIHpvb21Db250YWluZXIgPSBpc05vZGUoem9vbU9wdGlvbnMuY29udGFpbmVyKSA/IHpvb21PcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioem9vbU9wdGlvbnMuY29udGFpbmVyKTtcblxuICAgICAgICAgIHZhciBfem9vbUNvbnRhaW5lciRnZXRCb3UgPSB6b29tQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICBfd2lkdGggPSBfem9vbUNvbnRhaW5lciRnZXRCb3Uud2lkdGgsXG4gICAgICAgICAgICAgIF9oZWlnaHQgPSBfem9vbUNvbnRhaW5lciRnZXRCb3UuaGVpZ2h0LFxuICAgICAgICAgICAgICBfbGVmdCA9IF96b29tQ29udGFpbmVyJGdldEJvdS5sZWZ0LFxuICAgICAgICAgICAgICBfdG9wID0gX3pvb21Db250YWluZXIkZ2V0Qm91LnRvcDtcblxuICAgICAgICAgIGNvbnRhaW5lciA9IF9leHRlbmRzKHt9LCBjb250YWluZXIsIHtcbiAgICAgICAgICAgIHdpZHRoOiBfd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IF9oZWlnaHQsXG4gICAgICAgICAgICBsZWZ0OiBfbGVmdCxcbiAgICAgICAgICAgIHRvcDogX3RvcFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydFdpZHRoIHx8IGNvbnRhaW5lci53aWR0aCAtIHpvb21PcHRpb25zLm1hcmdpbiAqIDI7XG4gICAgICB2aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0IHx8IGNvbnRhaW5lci5oZWlnaHQgLSB6b29tT3B0aW9ucy5tYXJnaW4gKiAyO1xuXG4gICAgICB2YXIgem9vbVRhcmdldCA9IGFjdGl2ZS56b29tZWRIZCB8fCBhY3RpdmUub3JpZ2luYWw7XG4gICAgICB2YXIgbmF0dXJhbFdpZHRoID0gaXNTdmcoem9vbVRhcmdldCkgPyB2aWV3cG9ydFdpZHRoIDogem9vbVRhcmdldC5uYXR1cmFsV2lkdGggfHwgdmlld3BvcnRXaWR0aDtcbiAgICAgIHZhciBuYXR1cmFsSGVpZ2h0ID0gaXNTdmcoem9vbVRhcmdldCkgPyB2aWV3cG9ydEhlaWdodCA6IHpvb21UYXJnZXQubmF0dXJhbEhlaWdodCB8fCB2aWV3cG9ydEhlaWdodDtcblxuICAgICAgdmFyIF96b29tVGFyZ2V0JGdldEJvdW5kaSA9IHpvb21UYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgdG9wID0gX3pvb21UYXJnZXQkZ2V0Qm91bmRpLnRvcCxcbiAgICAgICAgICBsZWZ0ID0gX3pvb21UYXJnZXQkZ2V0Qm91bmRpLmxlZnQsXG4gICAgICAgICAgd2lkdGggPSBfem9vbVRhcmdldCRnZXRCb3VuZGkud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3pvb21UYXJnZXQkZ2V0Qm91bmRpLmhlaWdodDtcblxuICAgICAgdmFyIHNjYWxlWCA9IE1hdGgubWluKG5hdHVyYWxXaWR0aCwgdmlld3BvcnRXaWR0aCkgLyB3aWR0aDtcbiAgICAgIHZhciBzY2FsZVkgPSBNYXRoLm1pbihuYXR1cmFsSGVpZ2h0LCB2aWV3cG9ydEhlaWdodCkgLyBoZWlnaHQ7XG4gICAgICB2YXIgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG4gICAgICB2YXIgdHJhbnNsYXRlWCA9ICgtbGVmdCArICh2aWV3cG9ydFdpZHRoIC0gd2lkdGgpIC8gMiArIHpvb21PcHRpb25zLm1hcmdpbiArIGNvbnRhaW5lci5sZWZ0KSAvIHNjYWxlO1xuICAgICAgdmFyIHRyYW5zbGF0ZVkgPSAoLXRvcCArICh2aWV3cG9ydEhlaWdodCAtIGhlaWdodCkgLyAyICsgem9vbU9wdGlvbnMubWFyZ2luICsgY29udGFpbmVyLnRvcCkgLyBzY2FsZTtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHNjYWxlICsgJykgdHJhbnNsYXRlM2QoJyArIHRyYW5zbGF0ZVggKyAncHgsICcgKyB0cmFuc2xhdGVZICsgJ3B4LCAwKSc7XG5cbiAgICAgIGFjdGl2ZS56b29tZWQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgICBpZiAoYWN0aXZlLnpvb21lZEhkKSB7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgaWYgKHRhcmdldCAmJiBpbWFnZXMuaW5kZXhPZih0YXJnZXQpID09PSAtMSkge1xuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfaGFuZGxlT3BlbkVuZCA9IGZ1bmN0aW9uIF9oYW5kbGVPcGVuRW5kKCkge1xuICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBhY3RpdmUuem9vbWVkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfaGFuZGxlT3BlbkVuZCk7XG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpvcGVuZWQnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhY3RpdmUuem9vbWVkKSB7XG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAvLyBUaGUgem9vbSB3YXMgdHJpZ2dlcmVkIG1hbnVhbGx5IHZpYSBhIGNsaWNrXG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbCA9IHRhcmdldDtcbiAgICAgIH0gZWxzZSBpZiAoaW1hZ2VzLmxlbmd0aCA+IDApIHtcbnZhciBfaW1hZ2VzID0gaW1hZ2VzO1xuICAgICAgICBhY3RpdmUub3JpZ2luYWwgPSBfaW1hZ2VzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhY3RpdmUub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206b3BlbicsIHtcbiAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgfSkpO1xuXG4gICAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuICAgICAgaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgYWN0aXZlLnpvb21lZCA9IGNsb25lVGFyZ2V0KGFjdGl2ZS5vcmlnaW5hbCk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAgIGlmICh6b29tT3B0aW9ucy50ZW1wbGF0ZSkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBpc05vZGUoem9vbU9wdGlvbnMudGVtcGxhdGUpID8gem9vbU9wdGlvbnMudGVtcGxhdGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHpvb21PcHRpb25zLnRlbXBsYXRlKTtcbiAgICAgICAgYWN0aXZlLnRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3RpdmUudGVtcGxhdGUpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFjdGl2ZS56b29tZWQpO1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS0tb3BlbmVkJyk7XG4gICAgICB9KTtcblxuICAgICAgYWN0aXZlLm9yaWdpbmFsLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLWltYWdlLS1oaWRkZW4nKTtcbiAgICAgIGFjdGl2ZS56b29tZWQuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZCcpO1xuXG4gICAgICBhY3RpdmUuem9vbWVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgICAgYWN0aXZlLnpvb21lZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX2hhbmRsZU9wZW5FbmQpO1xuXG4gICAgICBpZiAoYWN0aXZlLm9yaWdpbmFsLmdldEF0dHJpYnV0ZSgnZGF0YS16b29tLXNyYycpKSB7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZCA9IGFjdGl2ZS56b29tZWQuY2xvbmVOb2RlKCk7XG5cbiAgICAgICAgLy8gUmVzZXQgdGhlIGBzY3JzZXRgIHByb3BlcnR5IG9yIHRoZSBIRCBpbWFnZSB3b24ndCBsb2FkLlxuICAgICAgICBhY3RpdmUuem9vbWVkSGQucmVtb3ZlQXR0cmlidXRlKCdzcmNzZXQnKTtcbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnJlbW92ZUF0dHJpYnV0ZSgnc2l6ZXMnKTtcblxuICAgICAgICBhY3RpdmUuem9vbWVkSGQuc3JjID0gYWN0aXZlLnpvb21lZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtem9vbS1zcmMnKTtcblxuICAgICAgICBhY3RpdmUuem9vbWVkSGQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGdldFpvb21UYXJnZXRTaXplKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byByZWFjaCB0aGUgem9vbSBpbWFnZSB0YXJnZXQgJyArIGFjdGl2ZS56b29tZWRIZC5zcmMpO1xuICAgICAgICAgIGFjdGl2ZS56b29tZWRIZCA9IG51bGw7XG4gICAgICAgICAgX2FuaW1hdGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIGFjY2VzcyB0aGUgbmF0dXJhbCBzaXplIG9mIHRoZSBmdWxsIEhEXG4gICAgICAgIC8vIHRhcmdldCBhcyBmYXN0IGFzIHBvc3NpYmxlIHRvIGNvbXB1dGUgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgdmFyIGdldFpvb21UYXJnZXRTaXplID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICggYWN0aXZlLnpvb21lZEhkLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGdldFpvb21UYXJnZXRTaXplKTtcbiAgICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkJyk7XG4gICAgICAgICAgICBhY3RpdmUuem9vbWVkSGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFjdGl2ZS56b29tZWRIZCk7XG4gICAgICAgICAgICBfYW5pbWF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIGlmIChhY3RpdmUub3JpZ2luYWwuaGFzQXR0cmlidXRlKCdzcmNzZXQnKSkge1xuICAgICAgICAvLyBJZiBhbiBpbWFnZSBoYXMgYSBgc3Jjc2V0YCBhdHRyaWJ1ZXQsIHdlIGRvbid0IGtub3cgdGhlIGRpbWVuc2lvbnMgb2YgdGhlXG4gICAgICAgIC8vIHpvb21lZCAoSEQpIGltYWdlIChsaWtlIHdoZW4gYGRhdGEtem9vbS1zcmNgIGlzIHNwZWNpZmllZCkuXG4gICAgICAgIC8vIFRoZXJlZm9yZSB0aGUgYXBwcm9hY2ggaXMgcXVpdGUgc2ltaWxhci5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkID0gYWN0aXZlLnpvb21lZC5jbG9uZU5vZGUoKTtcblxuICAgICAgICAvLyBSZXNldHRpbmcgdGhlIHNpemVzIGF0dHJpYnV0ZSB0ZWxscyB0aGUgYnJvd3NlciB0byBsb2FkIHRoZVxuICAgICAgICAvLyBpbWFnZSBiZXN0IGZpdHRpbmcgdGhlIGN1cnJlbnQgdmlld3BvcnQgc2l6ZSwgcmVzcGVjdGluZyB0aGUgYHNyY3NldGAuXG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5yZW1vdmVBdHRyaWJ1dGUoJ3NpemVzJyk7XG5cbiAgICAgICAgLy8gSW4gRmlyZWZveCwgdGhlIGBsb2FkaW5nYCBhdHRyaWJ1dGUgbmVlZHMgdG8gYmUgc2V0IHRvIGBlYWdlcmAgKGRlZmF1bHRcbiAgICAgICAgLy8gdmFsdWUpIGZvciB0aGUgbG9hZCBldmVudCB0byBiZSBmaXJlZC5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnJlbW92ZUF0dHJpYnV0ZSgnbG9hZGluZycpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBsb2FkIGV2ZW50IG9mIHRoZSBoZCBpbWFnZS4gVGhpcyB3aWxsIGZpcmUgaWYgdGhlIGltYWdlXG4gICAgICAgIC8vIGlzIGFscmVhZHkgY2FjaGVkLlxuICAgICAgICB2YXIgbG9hZEV2ZW50TGlzdGVuZXIgPSBhY3RpdmUuem9vbWVkSGQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhY3RpdmUuem9vbWVkSGQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBhY3RpdmUuem9vbWVkSGQuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZCcpO1xuICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFjdGl2ZS56b29tZWRIZCk7XG4gICAgICAgICAgX2FuaW1hdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfYW5pbWF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgaWYgKGlzQW5pbWF0aW5nIHx8ICFhY3RpdmUub3JpZ2luYWwpIHtcbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2hhbmRsZUNsb3NlRW5kID0gZnVuY3Rpb24gX2hhbmRsZUNsb3NlRW5kKCkge1xuICAgICAgICBhY3RpdmUub3JpZ2luYWwuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXpvb20taW1hZ2UtLWhpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFjdGl2ZS56b29tZWQpO1xuICAgICAgICBpZiAoYWN0aXZlLnpvb21lZEhkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhY3RpdmUuem9vbWVkSGQpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XG4gICAgICAgIGFjdGl2ZS56b29tZWQuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXpvb20taW1hZ2UtLW9wZW5lZCcpO1xuICAgICAgICBpZiAoYWN0aXZlLnRlbXBsYXRlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhY3RpdmUudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgYWN0aXZlLnpvb21lZC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX2hhbmRsZUNsb3NlRW5kKTtcblxuICAgICAgICBhY3RpdmUub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206Y2xvc2VkJywge1xuICAgICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbCA9IG51bGw7XG4gICAgICAgIGFjdGl2ZS56b29tZWQgPSBudWxsO1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQgPSBudWxsO1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUgPSBudWxsO1xuXG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICB9O1xuXG4gICAgICBpc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS16b29tLS1vcGVuZWQnKTtcbiAgICAgIGFjdGl2ZS56b29tZWQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgIGlmIChhY3RpdmUuem9vbWVkSGQpIHtcbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyBGYWRlIG91dCB0aGUgdGVtcGxhdGUgc28gaXQncyBub3QgdG9vIGFicnVwdFxuICAgICAgaWYgKGFjdGl2ZS50ZW1wbGF0ZSkge1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUuc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDE1MG1zJztcbiAgICAgICAgYWN0aXZlLnRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgfVxuXG4gICAgICBhY3RpdmUub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206Y2xvc2UnLCB7XG4gICAgICAgIGRldGFpbDogeyB6b29tOiB6b29tIH1cbiAgICAgIH0pKTtcblxuICAgICAgYWN0aXZlLnpvb21lZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX2hhbmRsZUNsb3NlRW5kKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHZhciBfcmVmMyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIHRhcmdldCA9IF9yZWYzLnRhcmdldDtcblxuICAgIGlmIChhY3RpdmUub3JpZ2luYWwpIHtcbiAgICAgIHJldHVybiBjbG9zZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBvcGVuKHsgdGFyZ2V0OiB0YXJnZXQgfSk7XG4gIH07XG5cbiAgdmFyIGdldE9wdGlvbnMgPSBmdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB6b29tT3B0aW9ucztcbiAgfTtcblxuICB2YXIgZ2V0SW1hZ2VzID0gZnVuY3Rpb24gZ2V0SW1hZ2VzKCkge1xuICAgIHJldHVybiBpbWFnZXM7XG4gIH07XG5cbiAgdmFyIGdldFpvb21lZEltYWdlID0gZnVuY3Rpb24gZ2V0Wm9vbWVkSW1hZ2UoKSB7XG4gICAgcmV0dXJuIGFjdGl2ZS5vcmlnaW5hbDtcbiAgfTtcblxuICB2YXIgaW1hZ2VzID0gW107XG4gIHZhciBldmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgdmFyIHNjcm9sbFRvcCA9IDA7XG4gIHZhciB6b29tT3B0aW9ucyA9IG9wdGlvbnM7XG4gIHZhciBhY3RpdmUgPSB7XG4gICAgb3JpZ2luYWw6IG51bGwsXG4gICAgem9vbWVkOiBudWxsLFxuICAgIHpvb21lZEhkOiBudWxsLFxuICAgIHRlbXBsYXRlOiBudWxsXG5cbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgaXMgb21pdHRlZCwgaXQncyByZXBsYWNlZCBieSB0aGUgb3B0aW9uc1xuICB9O2lmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc2VsZWN0b3IpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHpvb21PcHRpb25zID0gc2VsZWN0b3I7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyAvLyB0byBwcm9jZXNzIGVtcHR5IHN0cmluZyBhcyBhIHNlbGVjdG9yXG4gICkge1xuICAgICAgYXR0YWNoKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRlZmF1bHQgb3B0aW9uIHZhbHVlc1xuICB6b29tT3B0aW9ucyA9IF9leHRlbmRzKHtcbiAgICBtYXJnaW46IDAsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIHNjcm9sbE9mZnNldDogNDAsXG4gICAgY29udGFpbmVyOiBudWxsLFxuICAgIHRlbXBsYXRlOiBudWxsXG4gIH0sIHpvb21PcHRpb25zKTtcblxuICB2YXIgb3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoem9vbU9wdGlvbnMuYmFja2dyb3VuZCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIF9oYW5kbGVLZXlVcCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF9oYW5kbGVTY3JvbGwpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2xvc2UpO1xuXG4gIHZhciB6b29tID0ge1xuICAgIG9wZW46IG9wZW4sXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIGNsb25lOiBjbG9uZSxcbiAgICBhdHRhY2g6IGF0dGFjaCxcbiAgICBkZXRhY2g6IGRldGFjaCxcbiAgICBvbjogb24sXG4gICAgb2ZmOiBvZmYsXG4gICAgZ2V0T3B0aW9uczogZ2V0T3B0aW9ucyxcbiAgICBnZXRJbWFnZXM6IGdldEltYWdlcyxcbiAgICBnZXRab29tZWRJbWFnZTogZ2V0Wm9vbWVkSW1hZ2VcbiAgfTtcblxuICByZXR1cm4gem9vbTtcbn07XG5cbmZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIGNzcyA9IFwiLm1lZGl1bS16b29tLW92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuM3M7d2lsbC1jaGFuZ2U6b3BhY2l0eX0ubWVkaXVtLXpvb20tLW9wZW5lZCAubWVkaXVtLXpvb20tb3ZlcmxheXtjdXJzb3I6cG9pbnRlcjtjdXJzb3I6em9vbS1vdXQ7b3BhY2l0eToxfS5tZWRpdW0tem9vbS1pbWFnZXtjdXJzb3I6cG9pbnRlcjtjdXJzb3I6em9vbS1pbjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKC4yLDAsLjIsMSkhaW1wb3J0YW50fS5tZWRpdW0tem9vbS1pbWFnZS0taGlkZGVue3Zpc2liaWxpdHk6aGlkZGVufS5tZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVke3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyO2N1cnNvcjp6b29tLW91dDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19XCI7XG5zdHlsZUluamVjdChjc3MpO1xuXG5leHBvcnQgZGVmYXVsdCBtZWRpdW1ab29tO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi8uLi9zY3NzL3Bvc3Quc2Nzcyc7XG5cbmltcG9ydCBpbml0TWVkaXVtWm9vbSBmcm9tICcuL21lZGl1bV96b29tJztcbmltcG9ydCBmbHVpZHZpZHMgZnJvbSAnLi9mbHVpZHZpZHMnO1xuaW1wb3J0IGNvcHlJbml0IGZyb20gJy4vY29weSc7XG5pbXBvcnQgcmVzcG9uc2l2ZVRhYmxlSW5pdCBmcm9tICcuL3Jlc3BvbnNpdmVUYWJsZXMnO1xuXG5pbml0TWVkaXVtWm9vbSgpO1xuZmx1aWR2aWRzKCk7XG5jb3B5SW5pdCgpO1xucmVzcG9uc2l2ZVRhYmxlSW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==