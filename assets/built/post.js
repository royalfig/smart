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
//-------------------------------------------
// Copy Function
//-------------------------------------------
var copyButton = document.getElementById('sm-copy-button');
function copyInit() {
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
  var postImages = document.querySelectorAll('.kg-image');
  var galleryImages = document.querySelectorAll('.kg-gallery-image img');
  var totalImages = [].concat(_toConsumableArray(postImages), _toConsumableArray(galleryImages));
  (0,medium_zoom__WEBPACK_IMPORTED_MODULE_0__.default)(totalImages, {
    background: 'rgba(0,0,0,0.75)'
  });
}

/***/ }),

/***/ "./src/js/post/progress_and_share.js":
/*!*******************************************!*\
  !*** ./src/js/post/progress_and_share.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ progressAndShareInit; }
/* harmony export */ });
//-------------------------------------------
// Reading Progress Bar and Share Bar
//-------------------------------------------
var lastKnownScrollPos = 0;
var ticking = false; // Variables for reading progress

var progressBar = document.querySelector('.sm-post-reading-progress');
var shareBar = document.querySelector('.sm-post-share-bar');
var footer = document.querySelector('.sm-outer-container--footer');
var buffer = 50; // Variables for share bar

var postImg = document.querySelector('.sm-post__img') || document.querySelector('.sm-post__no-img');
var postContentHeight = document.querySelector('.sm-post__content');

var readingBarProgress = function readingBarProgress(scrollPos) {
  var progress = Math.ceil(scrollPos / postContentHeight.clientHeight * 100);
  progressBar.style.width = "".concat(progress, "%");
};

var shareBarAnimation = function shareBarAnimation() {
  if (postImg.getBoundingClientRect().bottom + buffer < shareBar.getBoundingClientRect().top && shareBar.getBoundingClientRect().bottom < footer.getBoundingClientRect().top - buffer) {
    if (window.innerWidth >= 1024) {
      shareBar.style.transform = 'translate3d(0,-50%,0)';
      shareBar.style.opacity = '1';
    } else {
      shareBar.style.transform = 'translate3d(0,0,0)';
      shareBar.style.opacity = '1';
    }
  } else if (window.innerWidth >= 1024) {
    shareBar.style.transform = 'translate3d(-100%,-50%,0)';
    shareBar.style.opacity = '0';
  } else {
    shareBar.style.transform = 'translate3d(0,100%,0)';
    shareBar.style.opacity = '0';
  }
};

function progressAndShareInit() {
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
  }
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
/* harmony import */ var _progress_and_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress_and_share */ "./src/js/post/progress_and_share.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copy */ "./src/js/post/copy.js");
/* harmony import */ var _responsiveTables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveTables */ "./src/js/post/responsiveTables.js");






(0,_medium_zoom__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_fluidvids__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_progress_and_share__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_copy__WEBPACK_IMPORTED_MODULE_4__.default)();
(0,_responsiveTables__WEBPACK_IMPORTED_MODULE_5__.default)();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC8uL3NyYy9qcy9wb3N0L2NvcHkuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9zcmMvanMvcG9zdC9mbHVpZHZpZHMuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9zcmMvanMvcG9zdC9tZWRpdW1fem9vbS5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL3NyYy9qcy9wb3N0L3Byb2dyZXNzX2FuZF9zaGFyZS5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL3NyYy9qcy9wb3N0L3Jlc3BvbnNpdmVUYWJsZXMuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9ub2RlX21vZHVsZXMvZmx1aWR2aWRzLmpzL2Rpc3QvZmx1aWR2aWRzLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vbm9kZV9tb2R1bGVzL21lZGl1bS16b29tL2Rpc3QvbWVkaXVtLXpvb20uZXNtLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vc3JjL3Njc3MvcG9zdC5zY3NzP2FmMGEiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NtYXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zbWFydC8uL3NyYy9qcy9wb3N0L2luZGV4LmpzIl0sIm5hbWVzIjpbImNvcHlCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29weUluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidGVtcCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2YWx1ZSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJmbHVpZHZpZHMiLCJyZXF1aXJlIiwiZmx1aWR2aWRzSW5pdCIsImluaXQiLCJzZWxlY3RvciIsInBsYXllcnMiLCJpbml0TWVkaXVtWm9vbSIsInBvc3RJbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyeUltYWdlcyIsInRvdGFsSW1hZ2VzIiwibWVkaXVtWm9vbSIsImJhY2tncm91bmQiLCJsYXN0S25vd25TY3JvbGxQb3MiLCJ0aWNraW5nIiwicHJvZ3Jlc3NCYXIiLCJxdWVyeVNlbGVjdG9yIiwic2hhcmVCYXIiLCJmb290ZXIiLCJidWZmZXIiLCJwb3N0SW1nIiwicG9zdENvbnRlbnRIZWlnaHQiLCJyZWFkaW5nQmFyUHJvZ3Jlc3MiLCJzY3JvbGxQb3MiLCJwcm9ncmVzcyIsIk1hdGgiLCJjZWlsIiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJ3aWR0aCIsInNoYXJlQmFyQW5pbWF0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwidG9wIiwiaW5uZXJXaWR0aCIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJwcm9ncmVzc0FuZFNoYXJlSW5pdCIsInNjcm9sbFkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0YWJsZXMiLCJ0YWJsZVByZXBlbmRJbml0IiwidGFibGVQcmVwZW5kIiwiZSIsInJlc3BvbnNpdmVXcmFwcGVyIiwic2V0QXR0cmlidXRlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImZvckVhY2giLCJzaGFyZVByb2dyZXNzSW5pdCIsInJlc3BvbnNpdmVUYWJsZUluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQW5CO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUNqQyxNQUFJSCxVQUFKLEVBQWdCO0FBQ2RBLGNBQVUsQ0FBQ0ksZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6QyxVQUFNQyxHQUFHLEdBQUdDLE1B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QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHNGQUFzRjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELFFBQVE7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxlQUFlLE1BQU0sUUFBUSxTQUFTLE9BQU8sVUFBVSx1QkFBdUIsb0JBQW9CLDBDQUEwQyxlQUFlLGdCQUFnQixVQUFVLG1CQUFtQixlQUFlLGVBQWUsMkRBQTJELDJCQUEyQixrQkFBa0IsMkJBQTJCLGtCQUFrQixlQUFlLGdCQUFnQixzQkFBc0I7QUFDaGQ7O0FBRUEsK0RBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN21CMUI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFyQyxxREFBYztBQUNkTixtREFBUztBQUNUaUQsNERBQWlCO0FBQ2pCL0QsOENBQVE7QUFDUmdFLDBEQUFtQixHIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvcHkgRnVuY3Rpb25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgY29weUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbS1jb3B5LWJ1dHRvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3B5SW5pdCgpIHtcbiAgaWYgKGNvcHlCdXR0b24pIHtcbiAgICBjb3B5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgICB0ZW1wLnZhbHVlID0gdXJsO1xuICAgICAgdGVtcC5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXApO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBmbHVpZHZpZHMgPSByZXF1aXJlKCdmbHVpZHZpZHMuanMvZGlzdC9mbHVpZHZpZHMuanMnKTtcblxuLy8gSW5pdCBGbHVpZFZpZHNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsdWlkdmlkc0luaXQoKSB7XG4gIGZsdWlkdmlkcy5pbml0KHtcbiAgICBzZWxlY3RvcjogWydpZnJhbWUnLCAnb2JqZWN0J10sXG4gICAgcGxheWVyczogWyd3d3cueW91dHViZS5jb20nLCAncGxheWVyLnZpbWVvLmNvbSddLFxuICB9KTtcbn1cbiIsImltcG9ydCBtZWRpdW1ab29tIGZyb20gJ21lZGl1bS16b29tJztcblxuLy8gTWVkaXVtIFpvb21cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNZWRpdW1ab29tKCkge1xuICBjb25zdCBwb3N0SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtnLWltYWdlJyk7XG4gIGNvbnN0IGdhbGxlcnlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2ctZ2FsbGVyeS1pbWFnZSBpbWcnKTtcblxuICBjb25zdCB0b3RhbEltYWdlcyA9IFsuLi5wb3N0SW1hZ2VzLCAuLi5nYWxsZXJ5SW1hZ2VzXTtcblxuICBtZWRpdW1ab29tKHRvdGFsSW1hZ2VzLCB7XG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC43NSknLFxuICB9KTtcbn1cbiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUmVhZGluZyBQcm9ncmVzcyBCYXIgYW5kIFNoYXJlIEJhclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5sZXQgbGFzdEtub3duU2Nyb2xsUG9zID0gMDtcbmxldCB0aWNraW5nID0gZmFsc2U7XG5cbi8vIFZhcmlhYmxlcyBmb3IgcmVhZGluZyBwcm9ncmVzc1xuY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc20tcG9zdC1yZWFkaW5nLXByb2dyZXNzJyk7XG5jb25zdCBzaGFyZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbS1wb3N0LXNoYXJlLWJhcicpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNtLW91dGVyLWNvbnRhaW5lci0tZm9vdGVyJyk7XG5jb25zdCBidWZmZXIgPSA1MDtcblxuLy8gVmFyaWFibGVzIGZvciBzaGFyZSBiYXJcbmNvbnN0IHBvc3RJbWcgPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc20tcG9zdF9faW1nJykgfHxcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNtLXBvc3RfX25vLWltZycpO1xuY29uc3QgcG9zdENvbnRlbnRIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc20tcG9zdF9fY29udGVudCcpO1xuXG5jb25zdCByZWFkaW5nQmFyUHJvZ3Jlc3MgPSAoc2Nyb2xsUG9zKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gTWF0aC5jZWlsKFxuICAgIChzY3JvbGxQb3MgLyBwb3N0Q29udGVudEhlaWdodC5jbGllbnRIZWlnaHQpICogMTAwLFxuICApO1xuICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzfSVgO1xufTtcblxuY29uc3Qgc2hhcmVCYXJBbmltYXRpb24gPSAoKSA9PiB7XG4gIGlmIChcbiAgICBwb3N0SW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIGJ1ZmZlciA8XG4gICAgICBzaGFyZUJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgJiZcbiAgICBzaGFyZUJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPFxuICAgICAgZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGJ1ZmZlclxuICApIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xuICAgICAgc2hhcmVCYXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsLTUwJSwwKSc7XG4gICAgICBzaGFyZUJhci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGFyZUJhci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwwLDApJztcbiAgICAgIHNoYXJlQmFyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHtcbiAgICBzaGFyZUJhci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoLTEwMCUsLTUwJSwwKSc7XG4gICAgc2hhcmVCYXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgfSBlbHNlIHtcbiAgICBzaGFyZUJhci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwxMDAlLDApJztcbiAgICBzaGFyZUJhci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9ncmVzc0FuZFNoYXJlSW5pdCgpIHtcbiAgaWYgKHNoYXJlQmFyICE9PSBudWxsKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGxhc3RLbm93blNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgc2hhcmVCYXJBbmltYXRpb24oKTtcbiAgICAgICAgICBpZiAocHJvZ3Jlc3NCYXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlYWRpbmdCYXJQcm9ncmVzcyhsYXN0S25vd25TY3JvbGxQb3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1ha2UgdGFibGVzIHJlc3BvbnNpdmVcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtLXBvc3RfX2NvbnRlbnQgPiB0YWJsZScpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWJsZVByZXBlbmRJbml0KCkge1xuICBmdW5jdGlvbiB0YWJsZVByZXBlbmQoZSkge1xuICAgIGNvbnN0IHJlc3BvbnNpdmVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzcG9uc2l2ZVdyYXBwZXIuc2V0QXR0cmlidXRlKFxuICAgICAgJ3N0eWxlJyxcbiAgICAgICd3aWR0aDogMTAwJTsgb3ZlcmZsb3cteDogYXV0bzsgbWFyZ2luOiAycmVtIDA7JyxcbiAgICApO1xuICAgIGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVzcG9uc2l2ZVdyYXBwZXIsIGUpO1xuICAgIHJlc3BvbnNpdmVXcmFwcGVyLmFwcGVuZENoaWxkKGUpO1xuICB9XG5cbiAgdGFibGVzLmZvckVhY2goKGUpID0+IHRhYmxlUHJlcGVuZChlKSk7XG59XG4iLCIvKiEgZmx1aWR2aWRzLmpzIHYyLjQuMSB8IChjKSAyMDE0IEB0b2RkbW90dG8gfCBodHRwczovL2dpdGh1Yi5jb20vdG9kZG1vdHRvL2ZsdWlkdmlkcyAqL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuICB9IGVsc2Uge1xuICAgIHJvb3QuZmx1aWR2aWRzID0gZmFjdG9yeSgpO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBmbHVpZHZpZHMgPSB7XG4gICAgc2VsZWN0b3I6IFsnaWZyYW1lJywgJ29iamVjdCddLFxuICAgIHBsYXllcnM6IFsnd3d3LnlvdXR1YmUuY29tJywgJ3BsYXllci52aW1lby5jb20nXVxuICB9O1xuXG4gIHZhciBjc3MgPSBbXG4gICAgJy5mbHVpZHZpZHMgeycsXG4gICAgICAnd2lkdGg6IDEwMCU7IG1heC13aWR0aDogMTAwJTsgcG9zaXRpb246IHJlbGF0aXZlOycsXG4gICAgJ30nLFxuICAgICcuZmx1aWR2aWRzLWl0ZW0geycsXG4gICAgICAncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsgbGVmdDogMHB4OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOycsXG4gICAgJ30nXG4gIF0uam9pbignJyk7XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyAoc3JjKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oaHR0cHM/Oik/XFwvXFwvKD86JyArIGZsdWlkdmlkcy5wbGF5ZXJzLmpvaW4oJ3wnKSArICcpLiokJywgJ2knKS50ZXN0KHNyYyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYXRpbyAoaGVpZ2h0LCB3aWR0aCkge1xuICAgIHJldHVybiAoKHBhcnNlSW50KGhlaWdodCwgMTApIC8gcGFyc2VJbnQod2lkdGgsIDEwKSkgKiAxMDApICsgJyUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1aWQgKGVsZW0pIHtcbiAgICBpZiAoIW1hdGNoZXMoZWxlbS5zcmMpICYmICFtYXRjaGVzKGVsZW0uZGF0YSkgfHwgISFlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1mbHVpZHZpZHMnKSkgcmV0dXJuO1xuICAgIHZhciB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwLCBlbGVtKTtcbiAgICBlbGVtLmNsYXNzTmFtZSArPSAoZWxlbS5jbGFzc05hbWUgPyAnICcgOiAnJykgKyAnZmx1aWR2aWRzLWl0ZW0nO1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWZsdWlkdmlkcycsICdsb2FkZWQnKTtcbiAgICB3cmFwLmNsYXNzTmFtZSArPSAnZmx1aWR2aWRzJztcbiAgICB3cmFwLnN0eWxlLnBhZGRpbmdUb3AgPSBnZXRSYXRpbyhlbGVtLmhlaWdodCwgZWxlbS53aWR0aCk7XG4gICAgd3JhcC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlcyAoKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSAnPHA+eDwvcD48c3R5bGU+JyArIGNzcyArICc8L3N0eWxlPic7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1sxXSk7XG4gIH1cblxuICBmbHVpZHZpZHMucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZmx1aWR2aWRzLnNlbGVjdG9yLmpvaW4oKSk7XG4gICAgdmFyIGkgPSBub2Rlcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgZmx1aWQobm9kZXNbaV0pO1xuICAgIH1cbiAgfTtcblxuICBmbHVpZHZpZHMuaW5pdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBmbHVpZHZpZHNba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgICBmbHVpZHZpZHMucmVuZGVyKCk7XG4gICAgYWRkU3R5bGVzKCk7XG4gIH07XG5cbiAgcmV0dXJuIGZsdWlkdmlkcztcblxufSk7XG4iLCIvKiEgbWVkaXVtLXpvb20gMS4wLjYgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9mcmFuY29pc2NoYWxpZm91ci9tZWRpdW0tem9vbSAqL1xudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lNRyc7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG52YXIgaXNOb2RlTGlzdCA9IGZ1bmN0aW9uIGlzTm9kZUxpc3Qoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIE5vZGVMaXN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHNlbGVjdG9yKTtcbn07XG5cbnZhciBpc05vZGUgPSBmdW5jdGlvbiBpc05vZGUoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yICYmIHNlbGVjdG9yLm5vZGVUeXBlID09PSAxO1xufTtcblxudmFyIGlzU3ZnID0gZnVuY3Rpb24gaXNTdmcoaW1hZ2UpIHtcbiAgdmFyIHNvdXJjZSA9IGltYWdlLmN1cnJlbnRTcmMgfHwgaW1hZ2Uuc3JjO1xuICByZXR1cm4gc291cmNlLnN1YnN0cigtNCkudG9Mb3dlckNhc2UoKSA9PT0gJy5zdmcnO1xufTtcblxudmFyIGdldEltYWdlc0Zyb21TZWxlY3RvciA9IGZ1bmN0aW9uIGdldEltYWdlc0Zyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICB0cnkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yLmZpbHRlcihpc1N1cHBvcnRlZCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZUxpc3Qoc2VsZWN0b3IpKSB7XG4gICAgICAvLyBEbyBub3QgdXNlIHNwcmVhZCBvcGVyYXRvciBvciBBcnJheS5mcm9tKCkgZm9yIElFIHN1cHBvcnRcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHNlbGVjdG9yKS5maWx0ZXIoaXNTdXBwb3J0ZWQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gW3NlbGVjdG9yXS5maWx0ZXIoaXNTdXBwb3J0ZWQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBEbyBub3QgdXNlIHNwcmVhZCBvcGVyYXRvciBvciBBcnJheS5mcm9tKCkgZm9yIElFIHN1cHBvcnRcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5maWx0ZXIoaXNTdXBwb3J0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHByb3ZpZGVkIHNlbGVjdG9yIGlzIGludmFsaWQuXFxuJyArICdFeHBlY3RzIGEgQ1NTIHNlbGVjdG9yLCBhIE5vZGUgZWxlbWVudCwgYSBOb2RlTGlzdCBvciBhbiBhcnJheS5cXG4nICsgJ1NlZTogaHR0cHM6Ly9naXRodWIuY29tL2ZyYW5jb2lzY2hhbGlmb3VyL21lZGl1bS16b29tJyk7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVPdmVybGF5ID0gZnVuY3Rpb24gY3JlYXRlT3ZlcmxheShiYWNrZ3JvdW5kKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20tb3ZlcmxheScpO1xuICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuXG4gIHJldHVybiBvdmVybGF5O1xufTtcblxudmFyIGNsb25lVGFyZ2V0ID0gZnVuY3Rpb24gY2xvbmVUYXJnZXQodGVtcGxhdGUpIHtcbiAgdmFyIF90ZW1wbGF0ZSRnZXRCb3VuZGluZyA9IHRlbXBsYXRlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgdG9wID0gX3RlbXBsYXRlJGdldEJvdW5kaW5nLnRvcCxcbiAgICAgIGxlZnQgPSBfdGVtcGxhdGUkZ2V0Qm91bmRpbmcubGVmdCxcbiAgICAgIHdpZHRoID0gX3RlbXBsYXRlJGdldEJvdW5kaW5nLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3RlbXBsYXRlJGdldEJvdW5kaW5nLmhlaWdodDtcblxuICB2YXIgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUoKTtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwO1xuXG4gIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgY2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBjbG9uZS5zdHlsZS50b3AgPSB0b3AgKyBzY3JvbGxUb3AgKyAncHgnO1xuICBjbG9uZS5zdHlsZS5sZWZ0ID0gbGVmdCArIHNjcm9sbExlZnQgKyAncHgnO1xuICBjbG9uZS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgY2xvbmUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgY2xvbmUuc3R5bGUudHJhbnNmb3JtID0gJyc7XG5cbiAgcmV0dXJuIGNsb25lO1xufTtcblxudmFyIGNyZWF0ZUN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQodHlwZSwgcGFyYW1zKSB7XG4gIHZhciBldmVudFBhcmFtcyA9IF9leHRlbmRzKHtcbiAgICBidWJibGVzOiBmYWxzZSxcbiAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICBkZXRhaWw6IHVuZGVmaW5lZFxuICB9LCBwYXJhbXMpO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCBldmVudFBhcmFtcyk7XG4gIH1cblxuICB2YXIgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgY3VzdG9tRXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGV2ZW50UGFyYW1zLmJ1YmJsZXMsIGV2ZW50UGFyYW1zLmNhbmNlbGFibGUsIGV2ZW50UGFyYW1zLmRldGFpbCk7XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50O1xufTtcblxudmFyIG1lZGl1bVpvb20gPSBmdW5jdGlvbiBtZWRpdW1ab29tKHNlbGVjdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAvKipcbiAgICogRW5zdXJlIHRoZSBjb21wYXRpYmlsaXR5IHdpdGggSUUxMSBpZiBubyBQcm9taXNlIHBvbHlmaWxsIGFyZSB1c2VkLlxuICAgKi9cbiAgdmFyIFByb21pc2UgPSB3aW5kb3cuUHJvbWlzZSB8fCBmdW5jdGlvbiBQcm9taXNlKGZuKSB7XG4gICAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgZm4obm9vcCwgbm9vcCk7XG4gIH07XG5cbiAgdmFyIF9oYW5kbGVDbGljayA9IGZ1bmN0aW9uIF9oYW5kbGVDbGljayhldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cblxuICAgIGlmICh0YXJnZXQgPT09IG92ZXJsYXkpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGltYWdlcy5pbmRleE9mKHRhcmdldCkgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9nZ2xlKHsgdGFyZ2V0OiB0YXJnZXQgfSk7XG4gIH07XG5cbiAgdmFyIF9oYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiBfaGFuZGxlU2Nyb2xsKCkge1xuICAgIGlmIChpc0FuaW1hdGluZyB8fCAhYWN0aXZlLm9yaWdpbmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuXG4gICAgaWYgKE1hdGguYWJzKHNjcm9sbFRvcCAtIGN1cnJlbnRTY3JvbGwpID4gem9vbU9wdGlvbnMuc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICBzZXRUaW1lb3V0KGNsb3NlLCAxNTApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgX2hhbmRsZUtleVVwID0gZnVuY3Rpb24gX2hhbmRsZUtleVVwKGV2ZW50KSB7XG4gICAgdmFyIGtleSA9IGV2ZW50LmtleSB8fCBldmVudC5rZXlDb2RlO1xuXG4gICAgLy8gQ2xvc2UgaWYgZXNjYXBlIGtleSBpcyBwcmVzc2VkXG4gICAgaWYgKGtleSA9PT0gJ0VzY2FwZScgfHwga2V5ID09PSAnRXNjJyB8fCBrZXkgPT09IDI3KSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIHZhciBuZXdPcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmIChvcHRpb25zLmJhY2tncm91bmQpIHtcbiAgICAgIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jb250YWluZXIgJiYgb3B0aW9ucy5jb250YWluZXIgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIG5ld09wdGlvbnMuY29udGFpbmVyID0gX2V4dGVuZHMoe30sIHpvb21PcHRpb25zLmNvbnRhaW5lciwgb3B0aW9ucy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBpc05vZGUob3B0aW9ucy50ZW1wbGF0ZSkgPyBvcHRpb25zLnRlbXBsYXRlIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRlbXBsYXRlKTtcblxuICAgICAgbmV3T3B0aW9ucy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIHpvb21PcHRpb25zID0gX2V4dGVuZHMoe30sIHpvb21PcHRpb25zLCBuZXdPcHRpb25zKTtcblxuICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaW1hZ2UuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206dXBkYXRlJywge1xuICAgICAgICBkZXRhaWw6IHsgem9vbTogem9vbSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfTtcblxuICB2YXIgY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgcmV0dXJuIG1lZGl1bVpvb20oX2V4dGVuZHMoe30sIHpvb21PcHRpb25zLCBvcHRpb25zKSk7XG4gIH07XG5cbiAgdmFyIGF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc2VsZWN0b3JzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBzZWxlY3RvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIG5ld0ltYWdlcyA9IHNlbGVjdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGltYWdlc0FjY3VtdWxhdG9yLCBjdXJyZW50U2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoaW1hZ2VzQWNjdW11bGF0b3IsIGdldEltYWdlc0Zyb21TZWxlY3RvcihjdXJyZW50U2VsZWN0b3IpKTtcbiAgICB9LCBbXSk7XG5cbiAgICBuZXdJbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChuZXdJbWFnZSkge1xuICAgICAgcmV0dXJuIGltYWdlcy5pbmRleE9mKG5ld0ltYWdlKSA9PT0gLTE7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobmV3SW1hZ2UpIHtcbiAgICAgIGltYWdlcy5wdXNoKG5ld0ltYWdlKTtcbiAgICAgIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLWltYWdlJyk7XG4gICAgfSk7XG5cbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgICBsaXN0ZW5lciA9IF9yZWYubGlzdGVuZXIsXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcblxuICAgICAgbmV3SW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfTtcblxuICB2YXIgZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgc2VsZWN0b3JzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIHNlbGVjdG9yc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmUuem9vbWVkKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cblxuICAgIHZhciBpbWFnZXNUb0RldGFjaCA9IHNlbGVjdG9ycy5sZW5ndGggPiAwID8gc2VsZWN0b3JzLnJlZHVjZShmdW5jdGlvbiAoaW1hZ2VzQWNjdW11bGF0b3IsIGN1cnJlbnRTZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChpbWFnZXNBY2N1bXVsYXRvciwgZ2V0SW1hZ2VzRnJvbVNlbGVjdG9yKGN1cnJlbnRTZWxlY3RvcikpO1xuICAgIH0sIFtdKSA6IGltYWdlcztcblxuICAgIGltYWdlc1RvRGV0YWNoLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tem9vbS1pbWFnZScpO1xuICAgICAgaW1hZ2UuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnbWVkaXVtLXpvb206ZGV0YWNoJywge1xuICAgICAgICBkZXRhaWw6IHsgem9vbTogem9vbSB9XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgcmV0dXJuIGltYWdlc1RvRGV0YWNoLmluZGV4T2YoaW1hZ2UpID09PSAtMTtcbiAgICB9KTtcblxuICAgIHJldHVybiB6b29tO1xuICB9O1xuXG4gIHZhciBvbiA9IGZ1bmN0aW9uIG9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtZWRpdW0tem9vbTonICsgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMucHVzaCh7IHR5cGU6ICdtZWRpdW0tem9vbTonICsgdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH07XG5cbiAgdmFyIG9mZiA9IGZ1bmN0aW9uIG9mZih0eXBlLCBsaXN0ZW5lcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVkaXVtLXpvb206JyArIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIGV2ZW50TGlzdGVuZXJzID0gZXZlbnRMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChldmVudExpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gIShldmVudExpc3RlbmVyLnR5cGUgPT09ICdtZWRpdW0tem9vbTonICsgdHlwZSAmJiBldmVudExpc3RlbmVyLmxpc3RlbmVyLnRvU3RyaW5nKCkgPT09IGxpc3RlbmVyLnRvU3RyaW5nKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH07XG5cbiAgdmFyIG9wZW4gPSBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIHRhcmdldCA9IF9yZWYyLnRhcmdldDtcblxuICAgIHZhciBfYW5pbWF0ZSA9IGZ1bmN0aW9uIF9hbmltYXRlKCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHtcbiAgICAgICAgd2lkdGg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3R0b206IDBcbiAgICAgIH07XG4gICAgICB2YXIgdmlld3BvcnRXaWR0aCA9IHZvaWQgMDtcbiAgICAgIHZhciB2aWV3cG9ydEhlaWdodCA9IHZvaWQgMDtcblxuICAgICAgaWYgKHpvb21PcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICBpZiAoem9vbU9wdGlvbnMuY29udGFpbmVyIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgLy8gVGhlIGNvbnRhaW5lciBpcyBnaXZlbiBhcyBhbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGxpa2Ugd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wXG4gICAgICAgICAgY29udGFpbmVyID0gX2V4dGVuZHMoe30sIGNvbnRhaW5lciwgem9vbU9wdGlvbnMuY29udGFpbmVyKTtcblxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYWRqdXN0IGN1c3RvbSBvcHRpb25zIGxpa2UgY29udGFpbmVyLnJpZ2h0IG9yIGNvbnRhaW5lci5ib3R0b21cbiAgICAgICAgICB2aWV3cG9ydFdpZHRoID0gY29udGFpbmVyLndpZHRoIC0gY29udGFpbmVyLmxlZnQgLSBjb250YWluZXIucmlnaHQgLSB6b29tT3B0aW9ucy5tYXJnaW4gKiAyO1xuICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0ID0gY29udGFpbmVyLmhlaWdodCAtIGNvbnRhaW5lci50b3AgLSBjb250YWluZXIuYm90dG9tIC0gem9vbU9wdGlvbnMubWFyZ2luICogMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGUgY29udGFpbmVyIGlzIGdpdmVuIGFzIGFuIGVsZW1lbnRcbiAgICAgICAgICB2YXIgem9vbUNvbnRhaW5lciA9IGlzTm9kZSh6b29tT3B0aW9ucy5jb250YWluZXIpID8gem9vbU9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih6b29tT3B0aW9ucy5jb250YWluZXIpO1xuXG4gICAgICAgICAgdmFyIF96b29tQ29udGFpbmVyJGdldEJvdSA9IHpvb21Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgIF93aWR0aCA9IF96b29tQ29udGFpbmVyJGdldEJvdS53aWR0aCxcbiAgICAgICAgICAgICAgX2hlaWdodCA9IF96b29tQ29udGFpbmVyJGdldEJvdS5oZWlnaHQsXG4gICAgICAgICAgICAgIF9sZWZ0ID0gX3pvb21Db250YWluZXIkZ2V0Qm91LmxlZnQsXG4gICAgICAgICAgICAgIF90b3AgPSBfem9vbUNvbnRhaW5lciRnZXRCb3UudG9wO1xuXG4gICAgICAgICAgY29udGFpbmVyID0gX2V4dGVuZHMoe30sIGNvbnRhaW5lciwge1xuICAgICAgICAgICAgd2lkdGg6IF93aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogX2hlaWdodCxcbiAgICAgICAgICAgIGxlZnQ6IF9sZWZ0LFxuICAgICAgICAgICAgdG9wOiBfdG9wXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0V2lkdGggfHwgY29udGFpbmVyLndpZHRoIC0gem9vbU9wdGlvbnMubWFyZ2luICogMjtcbiAgICAgIHZpZXdwb3J0SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQgfHwgY29udGFpbmVyLmhlaWdodCAtIHpvb21PcHRpb25zLm1hcmdpbiAqIDI7XG5cbiAgICAgIHZhciB6b29tVGFyZ2V0ID0gYWN0aXZlLnpvb21lZEhkIHx8IGFjdGl2ZS5vcmlnaW5hbDtcbiAgICAgIHZhciBuYXR1cmFsV2lkdGggPSBpc1N2Zyh6b29tVGFyZ2V0KSA/IHZpZXdwb3J0V2lkdGggOiB6b29tVGFyZ2V0Lm5hdHVyYWxXaWR0aCB8fCB2aWV3cG9ydFdpZHRoO1xuICAgICAgdmFyIG5hdHVyYWxIZWlnaHQgPSBpc1N2Zyh6b29tVGFyZ2V0KSA/IHZpZXdwb3J0SGVpZ2h0IDogem9vbVRhcmdldC5uYXR1cmFsSGVpZ2h0IHx8IHZpZXdwb3J0SGVpZ2h0O1xuXG4gICAgICB2YXIgX3pvb21UYXJnZXQkZ2V0Qm91bmRpID0gem9vbVRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICB0b3AgPSBfem9vbVRhcmdldCRnZXRCb3VuZGkudG9wLFxuICAgICAgICAgIGxlZnQgPSBfem9vbVRhcmdldCRnZXRCb3VuZGkubGVmdCxcbiAgICAgICAgICB3aWR0aCA9IF96b29tVGFyZ2V0JGdldEJvdW5kaS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfem9vbVRhcmdldCRnZXRCb3VuZGkuaGVpZ2h0O1xuXG4gICAgICB2YXIgc2NhbGVYID0gTWF0aC5taW4obmF0dXJhbFdpZHRoLCB2aWV3cG9ydFdpZHRoKSAvIHdpZHRoO1xuICAgICAgdmFyIHNjYWxlWSA9IE1hdGgubWluKG5hdHVyYWxIZWlnaHQsIHZpZXdwb3J0SGVpZ2h0KSAvIGhlaWdodDtcbiAgICAgIHZhciBzY2FsZSA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgIHZhciB0cmFuc2xhdGVYID0gKC1sZWZ0ICsgKHZpZXdwb3J0V2lkdGggLSB3aWR0aCkgLyAyICsgem9vbU9wdGlvbnMubWFyZ2luICsgY29udGFpbmVyLmxlZnQpIC8gc2NhbGU7XG4gICAgICB2YXIgdHJhbnNsYXRlWSA9ICgtdG9wICsgKHZpZXdwb3J0SGVpZ2h0IC0gaGVpZ2h0KSAvIDIgKyB6b29tT3B0aW9ucy5tYXJnaW4gKyBjb250YWluZXIudG9wKSAvIHNjYWxlO1xuICAgICAgdmFyIHRyYW5zZm9ybSA9ICdzY2FsZSgnICsgc2NhbGUgKyAnKSB0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwgJyArIHRyYW5zbGF0ZVkgKyAncHgsIDApJztcblxuICAgICAgYWN0aXZlLnpvb21lZC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICAgIGlmIChhY3RpdmUuem9vbWVkSGQpIHtcbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBpZiAodGFyZ2V0ICYmIGltYWdlcy5pbmRleE9mKHRhcmdldCkgPT09IC0xKSB7XG4gICAgICAgIHJlc29sdmUoem9vbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF9oYW5kbGVPcGVuRW5kID0gZnVuY3Rpb24gX2hhbmRsZU9wZW5FbmQoKSB7XG4gICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGFjdGl2ZS56b29tZWQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF9oYW5kbGVPcGVuRW5kKTtcbiAgICAgICAgYWN0aXZlLm9yaWdpbmFsLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ21lZGl1bS16b29tOm9wZW5lZCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHsgem9vbTogem9vbSB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgfTtcblxuICAgICAgaWYgKGFjdGl2ZS56b29tZWQpIHtcbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIC8vIFRoZSB6b29tIHdhcyB0cmlnZ2VyZWQgbWFudWFsbHkgdmlhIGEgY2xpY2tcbiAgICAgICAgYWN0aXZlLm9yaWdpbmFsID0gdGFyZ2V0O1xuICAgICAgfSBlbHNlIGlmIChpbWFnZXMubGVuZ3RoID4gMCkge1xudmFyIF9pbWFnZXMgPSBpbWFnZXM7XG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbCA9IF9pbWFnZXNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFjdGl2ZS5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpvcGVuJywge1xuICAgICAgICBkZXRhaWw6IHsgem9vbTogem9vbSB9XG4gICAgICB9KSk7XG5cbiAgICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG4gICAgICBpc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICBhY3RpdmUuem9vbWVkID0gY2xvbmVUYXJnZXQoYWN0aXZlLm9yaWdpbmFsKTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgICAgaWYgKHpvb21PcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGlzTm9kZSh6b29tT3B0aW9ucy50ZW1wbGF0ZSkgPyB6b29tT3B0aW9ucy50ZW1wbGF0ZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioem9vbU9wdGlvbnMudGVtcGxhdGUpO1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWN0aXZlLnRlbXBsYXRlLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFjdGl2ZS50ZW1wbGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWN0aXZlLnpvb21lZCk7XG5cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLS1vcGVuZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBhY3RpdmUub3JpZ2luYWwuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXpvb20taW1hZ2UtLWhpZGRlbicpO1xuICAgICAgYWN0aXZlLnpvb21lZC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkJyk7XG5cbiAgICAgIGFjdGl2ZS56b29tZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgICBhY3RpdmUuem9vbWVkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfaGFuZGxlT3BlbkVuZCk7XG5cbiAgICAgIGlmIChhY3RpdmUub3JpZ2luYWwuZ2V0QXR0cmlidXRlKCdkYXRhLXpvb20tc3JjJykpIHtcbiAgICAgICAgYWN0aXZlLnpvb21lZEhkID0gYWN0aXZlLnpvb21lZC5jbG9uZU5vZGUoKTtcblxuICAgICAgICAvLyBSZXNldCB0aGUgYHNjcnNldGAgcHJvcGVydHkgb3IgdGhlIEhEIGltYWdlIHdvbid0IGxvYWQuXG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5yZW1vdmVBdHRyaWJ1dGUoJ3NyY3NldCcpO1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQucmVtb3ZlQXR0cmlidXRlKCdzaXplcycpO1xuXG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5zcmMgPSBhY3RpdmUuem9vbWVkLmdldEF0dHJpYnV0ZSgnZGF0YS16b29tLXNyYycpO1xuXG4gICAgICAgIGFjdGl2ZS56b29tZWRIZC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2V0Wm9vbVRhcmdldFNpemUpO1xuICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIHJlYWNoIHRoZSB6b29tIGltYWdlIHRhcmdldCAnICsgYWN0aXZlLnpvb21lZEhkLnNyYyk7XG4gICAgICAgICAgYWN0aXZlLnpvb21lZEhkID0gbnVsbDtcbiAgICAgICAgICBfYW5pbWF0ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gYWNjZXNzIHRoZSBuYXR1cmFsIHNpemUgb2YgdGhlIGZ1bGwgSERcbiAgICAgICAgLy8gdGFyZ2V0IGFzIGZhc3QgYXMgcG9zc2libGUgdG8gY29tcHV0ZSB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB2YXIgZ2V0Wm9vbVRhcmdldFNpemUgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCBhY3RpdmUuem9vbWVkSGQuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2V0Wm9vbVRhcmdldFNpemUpO1xuICAgICAgICAgICAgYWN0aXZlLnpvb21lZEhkLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS16b29tLWltYWdlLS1vcGVuZWQnKTtcbiAgICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWN0aXZlLnpvb21lZEhkKTtcbiAgICAgICAgICAgIF9hbmltYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMCk7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZS5vcmlnaW5hbC5oYXNBdHRyaWJ1dGUoJ3NyY3NldCcpKSB7XG4gICAgICAgIC8vIElmIGFuIGltYWdlIGhhcyBhIGBzcmNzZXRgIGF0dHJpYnVldCwgd2UgZG9uJ3Qga25vdyB0aGUgZGltZW5zaW9ucyBvZiB0aGVcbiAgICAgICAgLy8gem9vbWVkIChIRCkgaW1hZ2UgKGxpa2Ugd2hlbiBgZGF0YS16b29tLXNyY2AgaXMgc3BlY2lmaWVkKS5cbiAgICAgICAgLy8gVGhlcmVmb3JlIHRoZSBhcHByb2FjaCBpcyBxdWl0ZSBzaW1pbGFyLlxuICAgICAgICBhY3RpdmUuem9vbWVkSGQgPSBhY3RpdmUuem9vbWVkLmNsb25lTm9kZSgpO1xuXG4gICAgICAgIC8vIFJlc2V0dGluZyB0aGUgc2l6ZXMgYXR0cmlidXRlIHRlbGxzIHRoZSBicm93c2VyIHRvIGxvYWQgdGhlXG4gICAgICAgIC8vIGltYWdlIGJlc3QgZml0dGluZyB0aGUgY3VycmVudCB2aWV3cG9ydCBzaXplLCByZXNwZWN0aW5nIHRoZSBgc3Jjc2V0YC5cbiAgICAgICAgYWN0aXZlLnpvb21lZEhkLnJlbW92ZUF0dHJpYnV0ZSgnc2l6ZXMnKTtcblxuICAgICAgICAvLyBJbiBGaXJlZm94LCB0aGUgYGxvYWRpbmdgIGF0dHJpYnV0ZSBuZWVkcyB0byBiZSBzZXQgdG8gYGVhZ2VyYCAoZGVmYXVsdFxuICAgICAgICAvLyB2YWx1ZSkgZm9yIHRoZSBsb2FkIGV2ZW50IHRvIGJlIGZpcmVkLlxuICAgICAgICBhY3RpdmUuem9vbWVkSGQucmVtb3ZlQXR0cmlidXRlKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIGxvYWQgZXZlbnQgb2YgdGhlIGhkIGltYWdlLiBUaGlzIHdpbGwgZmlyZSBpZiB0aGUgaW1hZ2VcbiAgICAgICAgLy8gaXMgYWxyZWFkeSBjYWNoZWQuXG4gICAgICAgIHZhciBsb2FkRXZlbnRMaXN0ZW5lciA9IGFjdGl2ZS56b29tZWRIZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGFjdGl2ZS56b29tZWRIZC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkJyk7XG4gICAgICAgICAgYWN0aXZlLnpvb21lZEhkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWN0aXZlLnpvb21lZEhkKTtcbiAgICAgICAgICBfYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9hbmltYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBpZiAoaXNBbmltYXRpbmcgfHwgIWFjdGl2ZS5vcmlnaW5hbCkge1xuICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfaGFuZGxlQ2xvc2VFbmQgPSBmdW5jdGlvbiBfaGFuZGxlQ2xvc2VFbmQoKSB7XG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbC5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tem9vbS1pbWFnZS0taGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYWN0aXZlLnpvb21lZCk7XG4gICAgICAgIGlmIChhY3RpdmUuem9vbWVkSGQpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFjdGl2ZS56b29tZWRIZCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgICAgYWN0aXZlLnpvb21lZC5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkJyk7XG4gICAgICAgIGlmIChhY3RpdmUudGVtcGxhdGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFjdGl2ZS50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBhY3RpdmUuem9vbWVkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfaGFuZGxlQ2xvc2VFbmQpO1xuXG4gICAgICAgIGFjdGl2ZS5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpjbG9zZWQnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgYWN0aXZlLm9yaWdpbmFsID0gbnVsbDtcbiAgICAgICAgYWN0aXZlLnpvb21lZCA9IG51bGw7XG4gICAgICAgIGFjdGl2ZS56b29tZWRIZCA9IG51bGw7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZSA9IG51bGw7XG5cbiAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgIH07XG5cbiAgICAgIGlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXpvb20tLW9wZW5lZCcpO1xuICAgICAgYWN0aXZlLnpvb21lZC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgaWYgKGFjdGl2ZS56b29tZWRIZCkge1xuICAgICAgICBhY3RpdmUuem9vbWVkSGQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICB9XG5cbiAgICAgIC8vIEZhZGUgb3V0IHRoZSB0ZW1wbGF0ZSBzbyBpdCdzIG5vdCB0b28gYWJydXB0XG4gICAgICBpZiAoYWN0aXZlLnRlbXBsYXRlKSB7XG4gICAgICAgIGFjdGl2ZS50ZW1wbGF0ZS5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMTUwbXMnO1xuICAgICAgICBhY3RpdmUudGVtcGxhdGUuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGFjdGl2ZS5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdtZWRpdW0tem9vbTpjbG9zZScsIHtcbiAgICAgICAgZGV0YWlsOiB7IHpvb206IHpvb20gfVxuICAgICAgfSkpO1xuXG4gICAgICBhY3RpdmUuem9vbWVkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfaGFuZGxlQ2xvc2VFbmQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgdGFyZ2V0ID0gX3JlZjMudGFyZ2V0O1xuXG4gICAgaWYgKGFjdGl2ZS5vcmlnaW5hbCkge1xuICAgICAgcmV0dXJuIGNsb3NlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wZW4oeyB0YXJnZXQ6IHRhcmdldCB9KTtcbiAgfTtcblxuICB2YXIgZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHpvb21PcHRpb25zO1xuICB9O1xuXG4gIHZhciBnZXRJbWFnZXMgPSBmdW5jdGlvbiBnZXRJbWFnZXMoKSB7XG4gICAgcmV0dXJuIGltYWdlcztcbiAgfTtcblxuICB2YXIgZ2V0Wm9vbWVkSW1hZ2UgPSBmdW5jdGlvbiBnZXRab29tZWRJbWFnZSgpIHtcbiAgICByZXR1cm4gYWN0aXZlLm9yaWdpbmFsO1xuICB9O1xuXG4gIHZhciBpbWFnZXMgPSBbXTtcbiAgdmFyIGV2ZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICB2YXIgc2Nyb2xsVG9wID0gMDtcbiAgdmFyIHpvb21PcHRpb25zID0gb3B0aW9ucztcbiAgdmFyIGFjdGl2ZSA9IHtcbiAgICBvcmlnaW5hbDogbnVsbCxcbiAgICB6b29tZWQ6IG51bGwsXG4gICAgem9vbWVkSGQ6IG51bGwsXG4gICAgdGVtcGxhdGU6IG51bGxcblxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBpcyBvbWl0dGVkLCBpdCdzIHJlcGxhY2VkIGJ5IHRoZSBvcHRpb25zXG4gIH07aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzZWxlY3RvcikgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgem9vbU9wdGlvbnMgPSBzZWxlY3RvcjtcbiAgfSBlbHNlIGlmIChzZWxlY3RvciB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnIC8vIHRvIHByb2Nlc3MgZW1wdHkgc3RyaW5nIGFzIGEgc2VsZWN0b3JcbiAgKSB7XG4gICAgICBhdHRhY2goc2VsZWN0b3IpO1xuICAgIH1cblxuICAvLyBBcHBseSB0aGUgZGVmYXVsdCBvcHRpb24gdmFsdWVzXG4gIHpvb21PcHRpb25zID0gX2V4dGVuZHMoe1xuICAgIG1hcmdpbjogMCxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgc2Nyb2xsT2Zmc2V0OiA0MCxcbiAgICBjb250YWluZXI6IG51bGwsXG4gICAgdGVtcGxhdGU6IG51bGxcbiAgfSwgem9vbU9wdGlvbnMpO1xuXG4gIHZhciBvdmVybGF5ID0gY3JlYXRlT3ZlcmxheSh6b29tT3B0aW9ucy5iYWNrZ3JvdW5kKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVDbGljayk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgX2hhbmRsZUtleVVwKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX2hhbmRsZVNjcm9sbCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjbG9zZSk7XG5cbiAgdmFyIHpvb20gPSB7XG4gICAgb3Blbjogb3BlbixcbiAgICBjbG9zZTogY2xvc2UsXG4gICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgY2xvbmU6IGNsb25lLFxuICAgIGF0dGFjaDogYXR0YWNoLFxuICAgIGRldGFjaDogZGV0YWNoLFxuICAgIG9uOiBvbixcbiAgICBvZmY6IG9mZixcbiAgICBnZXRPcHRpb25zOiBnZXRPcHRpb25zLFxuICAgIGdldEltYWdlczogZ2V0SW1hZ2VzLFxuICAgIGdldFpvb21lZEltYWdlOiBnZXRab29tZWRJbWFnZVxuICB9O1xuXG4gIHJldHVybiB6b29tO1xufTtcblxuZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgY3NzID0gXCIubWVkaXVtLXpvb20tb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4zczt3aWxsLWNoYW5nZTpvcGFjaXR5fS5tZWRpdW0tem9vbS0tb3BlbmVkIC5tZWRpdW0tem9vbS1vdmVybGF5e2N1cnNvcjpwb2ludGVyO2N1cnNvcjp6b29tLW91dDtvcGFjaXR5OjF9Lm1lZGl1bS16b29tLWltYWdle2N1cnNvcjpwb2ludGVyO2N1cnNvcjp6b29tLWluO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoLjIsMCwuMiwxKSFpbXBvcnRhbnR9Lm1lZGl1bS16b29tLWltYWdlLS1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59Lm1lZGl1bS16b29tLWltYWdlLS1vcGVuZWR7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7Y3Vyc29yOnpvb20tb3V0O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX1cIjtcbnN0eWxlSW5qZWN0KGNzcyk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lZGl1bVpvb207XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uLy4uL3Njc3MvcG9zdC5zY3NzJztcblxuaW1wb3J0IGluaXRNZWRpdW1ab29tIGZyb20gJy4vbWVkaXVtX3pvb20nO1xuaW1wb3J0IGZsdWlkdmlkcyBmcm9tICcuL2ZsdWlkdmlkcyc7XG5pbXBvcnQgc2hhcmVQcm9ncmVzc0luaXQgZnJvbSAnLi9wcm9ncmVzc19hbmRfc2hhcmUnO1xuaW1wb3J0IGNvcHlJbml0IGZyb20gJy4vY29weSc7XG5pbXBvcnQgcmVzcG9uc2l2ZVRhYmxlSW5pdCBmcm9tICcuL3Jlc3BvbnNpdmVUYWJsZXMnO1xuXG5pbml0TWVkaXVtWm9vbSgpO1xuZmx1aWR2aWRzKCk7XG5zaGFyZVByb2dyZXNzSW5pdCgpO1xuY29weUluaXQoKTtcbnJlc3BvbnNpdmVUYWJsZUluaXQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=