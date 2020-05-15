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

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */\r\n(function (root, factory) {\r\n  if (true) {\r\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n  } else {}\r\n})(this, function () {\r\n\r\n  'use strict';\r\n\r\n  var fluidvids = {\r\n    selector: ['iframe', 'object'],\r\n    players: ['www.youtube.com', 'player.vimeo.com']\r\n  };\r\n\r\n  var css = [\r\n    '.fluidvids {',\r\n      'width: 100%; max-width: 100%; position: relative;',\r\n    '}',\r\n    '.fluidvids-item {',\r\n      'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;',\r\n    '}'\r\n  ].join('');\r\n\r\n  var head = document.head || document.getElementsByTagName('head')[0];\r\n\r\n  function matches (src) {\r\n    return new RegExp('^(https?:)?\\/\\/(?:' + fluidvids.players.join('|') + ').*$', 'i').test(src);\r\n  }\r\n\r\n  function getRatio (height, width) {\r\n    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';\r\n  }\r\n\r\n  function fluid (elem) {\r\n    if (!matches(elem.src) && !matches(elem.data) || !!elem.getAttribute('data-fluidvids')) return;\r\n    var wrap = document.createElement('div');\r\n    elem.parentNode.insertBefore(wrap, elem);\r\n    elem.className += (elem.className ? ' ' : '') + 'fluidvids-item';\r\n    elem.setAttribute('data-fluidvids', 'loaded');\r\n    wrap.className += 'fluidvids';\r\n    wrap.style.paddingTop = getRatio(elem.height, elem.width);\r\n    wrap.appendChild(elem);\r\n  }\r\n\r\n  function addStyles () {\r\n    var div = document.createElement('div');\r\n    div.innerHTML = '<p>x</p><style>' + css + '</style>';\r\n    head.appendChild(div.childNodes[1]);\r\n  }\r\n\r\n  fluidvids.render = function () {\r\n    var nodes = document.querySelectorAll(fluidvids.selector.join());\r\n    var i = nodes.length;\r\n    while (i--) {\r\n      fluid(nodes[i]);\r\n    }\r\n  };\r\n\r\n  fluidvids.init = function (obj) {\r\n    for (var key in obj) {\r\n      fluidvids[key] = obj[key];\r\n    }\r\n    fluidvids.render();\r\n    addStyles();\r\n  };\r\n\r\n  return fluidvids;\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./node_modules/fluidvids.js/dist/fluidvids.js?");

/***/ }),

/***/ "./node_modules/medium-zoom/dist/medium-zoom.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/medium-zoom/dist/medium-zoom.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*! medium-zoom 1.0.5 | MIT License | https://github.com/francoischalifour/medium-zoom */\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\nvar isSupported = function isSupported(node) {\n  return node.tagName === 'IMG';\n};\n\n/* eslint-disable-next-line no-prototype-builtins */\nvar isNodeList = function isNodeList(selector) {\n  return NodeList.prototype.isPrototypeOf(selector);\n};\n\nvar isNode = function isNode(selector) {\n  return selector && selector.nodeType === 1;\n};\n\nvar isSvg = function isSvg(image) {\n  var source = image.currentSrc || image.src;\n  return source.substr(-4).toLowerCase() === '.svg';\n};\n\nvar getImagesFromSelector = function getImagesFromSelector(selector) {\n  try {\n    if (Array.isArray(selector)) {\n      return selector.filter(isSupported);\n    }\n\n    if (isNodeList(selector)) {\n      // Do not use spread operator or Array.from() for IE support\n      return [].slice.call(selector).filter(isSupported);\n    }\n\n    if (isNode(selector)) {\n      return [selector].filter(isSupported);\n    }\n\n    if (typeof selector === 'string') {\n      // Do not use spread operator or Array.from() for IE support\n      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);\n    }\n\n    return [];\n  } catch (err) {\n    throw new TypeError('The provided selector is invalid.\\n' + 'Expects a CSS selector, a Node element, a NodeList or an array.\\n' + 'See: https://github.com/francoischalifour/medium-zoom');\n  }\n};\n\nvar createOverlay = function createOverlay(background) {\n  var overlay = document.createElement('div');\n  overlay.classList.add('medium-zoom-overlay');\n  overlay.style.background = background;\n\n  return overlay;\n};\n\nvar cloneTarget = function cloneTarget(template) {\n  var _template$getBounding = template.getBoundingClientRect(),\n      top = _template$getBounding.top,\n      left = _template$getBounding.left,\n      width = _template$getBounding.width,\n      height = _template$getBounding.height;\n\n  var clone = template.cloneNode();\n  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\n  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;\n\n  clone.removeAttribute('id');\n  clone.style.position = 'absolute';\n  clone.style.top = top + scrollTop + 'px';\n  clone.style.left = left + scrollLeft + 'px';\n  clone.style.width = width + 'px';\n  clone.style.height = height + 'px';\n  clone.style.transform = '';\n\n  return clone;\n};\n\nvar createCustomEvent = function createCustomEvent(type, params) {\n  var eventParams = _extends({\n    bubbles: false,\n    cancelable: false,\n    detail: undefined\n  }, params);\n\n  if (typeof window.CustomEvent === 'function') {\n    return new CustomEvent(type, eventParams);\n  }\n\n  var customEvent = document.createEvent('CustomEvent');\n  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);\n\n  return customEvent;\n};\n\nvar mediumZoom = function mediumZoom(selector) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  /**\n   * Ensure the compatibility with IE11 if no Promise polyfill are used.\n   */\n  var Promise = window.Promise || function Promise(fn) {\n    function noop() {}\n    fn(noop, noop);\n  };\n\n  var _handleClick = function _handleClick(event) {\n    var target = event.target;\n\n\n    if (target === overlay) {\n      close();\n      return;\n    }\n\n    if (images.indexOf(target) === -1) {\n      return;\n    }\n\n    toggle({ target: target });\n  };\n\n  var _handleScroll = function _handleScroll() {\n    if (isAnimating || !active.original) {\n      return;\n    }\n\n    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\n\n    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {\n      setTimeout(close, 150);\n    }\n  };\n\n  var _handleKeyUp = function _handleKeyUp(event) {\n    var key = event.key || event.keyCode;\n\n    // Close if escape key is pressed\n    if (key === 'Escape' || key === 'Esc' || key === 27) {\n      close();\n    }\n  };\n\n  var update = function update() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    var newOptions = options;\n\n    if (options.background) {\n      overlay.style.background = options.background;\n    }\n\n    if (options.container && options.container instanceof Object) {\n      newOptions.container = _extends({}, zoomOptions.container, options.container);\n    }\n\n    if (options.template) {\n      var template = isNode(options.template) ? options.template : document.querySelector(options.template);\n\n      newOptions.template = template;\n    }\n\n    zoomOptions = _extends({}, zoomOptions, newOptions);\n\n    images.forEach(function (image) {\n      image.dispatchEvent(createCustomEvent('medium-zoom:update', {\n        detail: { zoom: zoom }\n      }));\n    });\n\n    return zoom;\n  };\n\n  var clone = function clone() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return mediumZoom(_extends({}, zoomOptions, options));\n  };\n\n  var attach = function attach() {\n    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {\n      selectors[_key] = arguments[_key];\n    }\n\n    var newImages = selectors.reduce(function (imagesAccumulator, currentSelector) {\n      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));\n    }, []);\n\n    newImages.filter(function (newImage) {\n      return images.indexOf(newImage) === -1;\n    }).forEach(function (newImage) {\n      images.push(newImage);\n      newImage.classList.add('medium-zoom-image');\n    });\n\n    eventListeners.forEach(function (_ref) {\n      var type = _ref.type,\n          listener = _ref.listener,\n          options = _ref.options;\n\n      newImages.forEach(function (image) {\n        image.addEventListener(type, listener, options);\n      });\n    });\n\n    return zoom;\n  };\n\n  var detach = function detach() {\n    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      selectors[_key2] = arguments[_key2];\n    }\n\n    if (active.zoomed) {\n      close();\n    }\n\n    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function (imagesAccumulator, currentSelector) {\n      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));\n    }, []) : images;\n\n    imagesToDetach.forEach(function (image) {\n      image.classList.remove('medium-zoom-image');\n      image.dispatchEvent(createCustomEvent('medium-zoom:detach', {\n        detail: { zoom: zoom }\n      }));\n    });\n\n    images = images.filter(function (image) {\n      return imagesToDetach.indexOf(image) === -1;\n    });\n\n    return zoom;\n  };\n\n  var on = function on(type, listener) {\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    images.forEach(function (image) {\n      image.addEventListener('medium-zoom:' + type, listener, options);\n    });\n\n    eventListeners.push({ type: 'medium-zoom:' + type, listener: listener, options: options });\n\n    return zoom;\n  };\n\n  var off = function off(type, listener) {\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    images.forEach(function (image) {\n      image.removeEventListener('medium-zoom:' + type, listener, options);\n    });\n\n    eventListeners = eventListeners.filter(function (eventListener) {\n      return !(eventListener.type === 'medium-zoom:' + type && eventListener.listener.toString() === listener.toString());\n    });\n\n    return zoom;\n  };\n\n  var open = function open() {\n    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        target = _ref2.target;\n\n    var _animate = function _animate() {\n      var container = {\n        width: document.documentElement.clientWidth,\n        height: document.documentElement.clientHeight,\n        left: 0,\n        top: 0,\n        right: 0,\n        bottom: 0\n      };\n      var viewportWidth = void 0;\n      var viewportHeight = void 0;\n\n      if (zoomOptions.container) {\n        if (zoomOptions.container instanceof Object) {\n          // The container is given as an object with properties like width, height, left, top\n          container = _extends({}, container, zoomOptions.container);\n\n          // We need to adjust custom options like container.right or container.bottom\n          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;\n          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;\n        } else {\n          // The container is given as an element\n          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);\n\n          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(),\n              _width = _zoomContainer$getBou.width,\n              _height = _zoomContainer$getBou.height,\n              _left = _zoomContainer$getBou.left,\n              _top = _zoomContainer$getBou.top;\n\n          container = _extends({}, container, {\n            width: _width,\n            height: _height,\n            left: _left,\n            top: _top\n          });\n        }\n      }\n\n      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;\n      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;\n\n      var zoomTarget = active.zoomedHd || active.original;\n      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;\n      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;\n\n      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(),\n          top = _zoomTarget$getBoundi.top,\n          left = _zoomTarget$getBoundi.left,\n          width = _zoomTarget$getBoundi.width,\n          height = _zoomTarget$getBoundi.height;\n\n      var scaleX = Math.min(naturalWidth, viewportWidth) / width;\n      var scaleY = Math.min(naturalHeight, viewportHeight) / height;\n      var scale = Math.min(scaleX, scaleY);\n      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;\n      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;\n      var transform = 'scale(' + scale + ') translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';\n\n      active.zoomed.style.transform = transform;\n\n      if (active.zoomedHd) {\n        active.zoomedHd.style.transform = transform;\n      }\n    };\n\n    return new Promise(function (resolve) {\n      if (target && images.indexOf(target) === -1) {\n        resolve(zoom);\n        return;\n      }\n\n      var _handleOpenEnd = function _handleOpenEnd() {\n        isAnimating = false;\n        active.zoomed.removeEventListener('transitionend', _handleOpenEnd);\n        active.original.dispatchEvent(createCustomEvent('medium-zoom:opened', {\n          detail: { zoom: zoom }\n        }));\n\n        resolve(zoom);\n      };\n\n      if (active.zoomed) {\n        resolve(zoom);\n        return;\n      }\n\n      if (target) {\n        // The zoom was triggered manually via a click\n        active.original = target;\n      } else if (images.length > 0) {\nvar _images = images;\n        active.original = _images[0];\n      } else {\n        resolve(zoom);\n        return;\n      }\n\n      active.original.dispatchEvent(createCustomEvent('medium-zoom:open', {\n        detail: { zoom: zoom }\n      }));\n\n      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\n      isAnimating = true;\n      active.zoomed = cloneTarget(active.original);\n\n      document.body.appendChild(overlay);\n\n      if (zoomOptions.template) {\n        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);\n        active.template = document.createElement('div');\n        active.template.appendChild(template.content.cloneNode(true));\n\n        document.body.appendChild(active.template);\n      }\n\n      document.body.appendChild(active.zoomed);\n\n      window.requestAnimationFrame(function () {\n        document.body.classList.add('medium-zoom--opened');\n      });\n\n      active.original.classList.add('medium-zoom-image--hidden');\n      active.zoomed.classList.add('medium-zoom-image--opened');\n\n      active.zoomed.addEventListener('click', close);\n      active.zoomed.addEventListener('transitionend', _handleOpenEnd);\n\n      if (active.original.getAttribute('data-zoom-src')) {\n        active.zoomedHd = active.zoomed.cloneNode();\n\n        // Reset the `scrset` property or the HD image won't load.\n        active.zoomedHd.removeAttribute('srcset');\n        active.zoomedHd.removeAttribute('sizes');\n\n        active.zoomedHd.src = active.zoomed.getAttribute('data-zoom-src');\n\n        active.zoomedHd.onerror = function () {\n          clearInterval(getZoomTargetSize);\n          console.warn('Unable to reach the zoom image target ' + active.zoomedHd.src);\n          active.zoomedHd = null;\n          _animate();\n        };\n\n        // We need to access the natural size of the full HD\n        // target as fast as possible to compute the animation.\n        var getZoomTargetSize = setInterval(function () {\n          if ( active.zoomedHd.complete) {\n            clearInterval(getZoomTargetSize);\n            active.zoomedHd.classList.add('medium-zoom-image--opened');\n            active.zoomedHd.addEventListener('click', close);\n            document.body.appendChild(active.zoomedHd);\n            _animate();\n          }\n        }, 10);\n      } else if (active.original.hasAttribute('srcset')) {\n        // If an image has a `srcset` attribuet, we don't know the dimensions of the\n        // zoomed (HD) image (like when `data-zoom-src` is specified).\n        // Therefore the approach is quite similar.\n        active.zoomedHd = active.zoomed.cloneNode();\n\n        // Resetting the sizes attribute tells the browser to load the\n        // image best fitting the current viewport size, respecting the `srcset`.\n        active.zoomedHd.removeAttribute('sizes');\n\n        // Wait for the load event of the hd image. This will fire if the image\n        // is already cached.\n        var loadEventListener = active.zoomedHd.addEventListener('load', function () {\n          active.zoomedHd.removeEventListener('load', loadEventListener);\n          active.zoomedHd.classList.add('medium-zoom-image--opened');\n          active.zoomedHd.addEventListener('click', close);\n          document.body.appendChild(active.zoomedHd);\n          _animate();\n        });\n      } else {\n        _animate();\n      }\n    });\n  };\n\n  var close = function close() {\n    return new Promise(function (resolve) {\n      if (isAnimating || !active.original) {\n        resolve(zoom);\n        return;\n      }\n\n      var _handleCloseEnd = function _handleCloseEnd() {\n        active.original.classList.remove('medium-zoom-image--hidden');\n        document.body.removeChild(active.zoomed);\n        if (active.zoomedHd) {\n          document.body.removeChild(active.zoomedHd);\n        }\n        document.body.removeChild(overlay);\n        active.zoomed.classList.remove('medium-zoom-image--opened');\n        if (active.template) {\n          document.body.removeChild(active.template);\n        }\n\n        isAnimating = false;\n        active.zoomed.removeEventListener('transitionend', _handleCloseEnd);\n\n        active.original.dispatchEvent(createCustomEvent('medium-zoom:closed', {\n          detail: { zoom: zoom }\n        }));\n\n        active.original = null;\n        active.zoomed = null;\n        active.zoomedHd = null;\n        active.template = null;\n\n        resolve(zoom);\n      };\n\n      isAnimating = true;\n      document.body.classList.remove('medium-zoom--opened');\n      active.zoomed.style.transform = '';\n\n      if (active.zoomedHd) {\n        active.zoomedHd.style.transform = '';\n      }\n\n      // Fade out the template so it's not too abrupt\n      if (active.template) {\n        active.template.style.transition = 'opacity 150ms';\n        active.template.style.opacity = 0;\n      }\n\n      active.original.dispatchEvent(createCustomEvent('medium-zoom:close', {\n        detail: { zoom: zoom }\n      }));\n\n      active.zoomed.addEventListener('transitionend', _handleCloseEnd);\n    });\n  };\n\n  var toggle = function toggle() {\n    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        target = _ref3.target;\n\n    if (active.original) {\n      return close();\n    }\n\n    return open({ target: target });\n  };\n\n  var getOptions = function getOptions() {\n    return zoomOptions;\n  };\n\n  var getImages = function getImages() {\n    return images;\n  };\n\n  var getZoomedImage = function getZoomedImage() {\n    return active.original;\n  };\n\n  var images = [];\n  var eventListeners = [];\n  var isAnimating = false;\n  var scrollTop = 0;\n  var zoomOptions = options;\n  var active = {\n    original: null,\n    zoomed: null,\n    zoomedHd: null,\n    template: null\n\n    // If the selector is omitted, it's replaced by the options\n  };if (Object.prototype.toString.call(selector) === '[object Object]') {\n    zoomOptions = selector;\n  } else if (selector || typeof selector === 'string' // to process empty string as a selector\n  ) {\n      attach(selector);\n    }\n\n  // Apply the default option values\n  zoomOptions = _extends({\n    margin: 0,\n    background: '#fff',\n    scrollOffset: 40,\n    container: null,\n    template: null\n  }, zoomOptions);\n\n  var overlay = createOverlay(zoomOptions.background);\n\n  document.addEventListener('click', _handleClick);\n  document.addEventListener('keyup', _handleKeyUp);\n  document.addEventListener('scroll', _handleScroll);\n  window.addEventListener('resize', close);\n\n  var zoom = {\n    open: open,\n    close: close,\n    toggle: toggle,\n    update: update,\n    clone: clone,\n    attach: attach,\n    detach: detach,\n    on: on,\n    off: off,\n    getOptions: getOptions,\n    getImages: getImages,\n    getZoomedImage: getZoomedImage\n  };\n\n  return zoom;\n};\n\nfunction styleInject(css, ref) {\n  if ( ref === void 0 ) ref = {};\n  var insertAt = ref.insertAt;\n\n  if (!css || typeof document === 'undefined') { return; }\n\n  var head = document.head || document.getElementsByTagName('head')[0];\n  var style = document.createElement('style');\n  style.type = 'text/css';\n\n  if (insertAt === 'top') {\n    if (head.firstChild) {\n      head.insertBefore(style, head.firstChild);\n    } else {\n      head.appendChild(style);\n    }\n  } else {\n    head.appendChild(style);\n  }\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar css = \".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}\";\nstyleInject(css);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mediumZoom);\n\n\n//# sourceURL=webpack:///./node_modules/medium-zoom/dist/medium-zoom.esm.js?");

/***/ }),

/***/ "./src/post.js":
/*!*********************!*\
  !*** ./src/post.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! medium-zoom */ \"./node_modules/medium-zoom/dist/medium-zoom.esm.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar fluidvids = __webpack_require__(/*! fluidvids.js/dist/fluidvids.js */ \"./node_modules/fluidvids.js/dist/fluidvids.js\");\n\n // Init FluidVids\n\nfluidvids.init({\n  selector: [\"iframe\", \"object\"],\n  players: [\"www.youtube.com\", \"player.vimeo.com\"]\n}); // Medium Zoom\n\nvar postImages = document.querySelectorAll(\".kg-image\");\nvar galleryImages = document.querySelectorAll(\".kg-gallery-image img\");\nvar totalImages = [].concat(_toConsumableArray(postImages), _toConsumableArray(galleryImages));\nObject(medium_zoom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(totalImages, {\n  background: \"rgba(0,0,0,0.75)\"\n}); //-------------------------------------------\n// Reading Progress Bar and Share Bar\n//-------------------------------------------\n\nvar lastKnownScrollPos = 0;\nvar ticking = false; // Variables for reading progress\n\nvar progressBar = document.querySelector(\".post-reading-progress\");\nvar shareBar = document.querySelector(\".post-share-bar\");\nvar footer = document.querySelector(\".footer--outer-container\");\nvar buffer = 50; // Variables for share bar\n\nvar postImg = document.querySelector(\".post__img\") !== null ? document.querySelector(\".post__img\") : document.querySelector(\".post__no-img\");\nvar postContentHeight = document.querySelector(\".post__content\");\n\nvar readingBarProgress = function readingBarProgress(scrollPos) {\n  var progress = Math.ceil(scrollPos / postContentHeight.clientHeight * 100);\n  progressBar.style.width = \"\".concat(progress, \"%\");\n};\n\nvar shareBarAnimation = function shareBarAnimation() {\n  if (postImg.getBoundingClientRect().bottom + buffer < shareBar.getBoundingClientRect().top && shareBar.getBoundingClientRect().bottom < footer.getBoundingClientRect().top - buffer) {\n    if (window.innerWidth > 1024) {\n      shareBar.style.marginLeft = \"0\";\n      shareBar.style.opacity = \"1\";\n    } else {\n      shareBar.style.marginBottom = \"0\";\n      shareBar.style.opacity = \"1\";\n    }\n  } else if (window.innerWidth > 1024) {\n    shareBar.style.marginLeft = \"-200px\";\n    shareBar.style.opacity = \"0\";\n  } else {\n    shareBar.style.marginBottom = \"-100px\";\n    shareBar.style.opacity = \"0\";\n  }\n};\n\nif (shareBar !== null) {\n  window.addEventListener(\"scroll\", function () {\n    lastKnownScrollPos = window.scrollY;\n\n    if (!ticking) {\n      window.requestAnimationFrame(function () {\n        shareBarAnimation();\n\n        if (progressBar !== null) {\n          readingBarProgress(lastKnownScrollPos);\n        }\n\n        ticking = false;\n      });\n      ticking = true;\n    }\n  });\n} //-------------------------------------------\n// Copy Function\n//-------------------------------------------\n\n\nvar copyButton = document.getElementById(\"copy-button\");\n\nif (copyButton) {\n  copyButton.addEventListener(\"click\", function () {\n    var url = window.location.href;\n    var temp = document.createElement(\"input\");\n    document.body.appendChild(temp);\n    temp.value = url;\n    temp.select();\n    document.execCommand(\"copy\");\n    document.body.removeChild(temp);\n  });\n} //-------------------------------------------\n// Make tables responsive\n//-------------------------------------------\n\n\nvar tables = document.querySelectorAll(\".post__content > table\");\n\nfunction tablePrepend(e) {\n  var responsiveWrapper = document.createElement(\"div\");\n  responsiveWrapper.setAttribute(\"style\", \"width: 100%; overflow-x: auto; margin: 1em 0;\");\n  e.parentNode.insertBefore(responsiveWrapper, e);\n  responsiveWrapper.appendChild(e);\n}\n\ntables.forEach(function (e) {\n  return tablePrepend(e);\n});\n\n//# sourceURL=webpack:///./src/post.js?");

/***/ })

/******/ });