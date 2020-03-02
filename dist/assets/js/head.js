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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/head.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/head.js":
/*!*********************!*\
  !*** ./src/head.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n(function () {\n  if (sessionStorage.fontsLoadedFoutWithClass) {\n    document.documentElement.className += ' fonts-loaded';\n    return;\n  }\n\n  if ('fonts' in document) {\n    Promise.all([document.fonts.load(\"1em 'Lato'\"), document.fonts.load(\"700 1em 'Lato'\"), document.fonts.load(\"italic 1em 'Lato'\"), document.fonts.load(\"italic 700 1em 'Lato'\")]).then(function () {\n      document.documentElement.className += ' fonts-loaded';\n      sessionStorage.fontsLoadedFoutWithClass = true;\n    });\n  }\n})();\n\nvar FluidTypography = /*#__PURE__*/function () {\n  function FluidTypography(minVW, maxVW, minFontSize, maxFontSize) {\n    _classCallCheck(this, FluidTypography);\n\n    this.minVW = minVW;\n    this.maxVW = maxVW;\n    this.minFontSize = minFontSize;\n    this.maxFontSize = maxFontSize;\n    this.maxRem = this.computeMaxRem();\n  } // Compute the maxRem based on arguments and user's browser preferences\n\n\n  _createClass(FluidTypography, [{\n    key: \"computeMaxRem\",\n    value: function computeMaxRem() {\n      var body = document.documentElement;\n      var properties = window.getComputedStyle(body);\n      var baseFontSize = properties.fontSize.replace(/px/, '');\n      var relativeMax = this.maxFontSize * baseFontSize / this.minFontSize;\n      var maxRem = relativeMax / baseFontSize;\n      return maxRem;\n    } // Calculate font size based on arguments and user's browser preferences\n\n  }, {\n    key: \"fontSize\",\n    value: function fontSize() {\n      var width = document.documentElement.offsetWidth;\n      var rem = 1;\n\n      if (width > this.minVW && width < this.maxVW) {\n        rem = 1 + (this.maxRem - 1) * (width - this.minVW) / (this.maxVW - this.minVW);\n      }\n\n      if (width > this.maxVW) {\n        rem = this.maxRem;\n      }\n\n      document.documentElement.style = \"font-size: \".concat(rem, \"rem\");\n    }\n  }, {\n    key: \"resizeHandler\",\n    value: function resizeHandler() {\n      this.fontSize();\n      window.addEventListener('resize', this.fontSize.bind(this));\n    }\n  }]);\n\n  return FluidTypography;\n}();\n\nnew FluidTypography(640, 1280, 16, 21).resizeHandler();\n\nif (localStorage.getItem('pref') === 'bright' || window.matchMedia('(prefers-color-scheme: light)').matches && !localStorage.getItem('pref')) {\n  document.documentElement.setAttribute('color-mode', 'bright');\n}\n\n//# sourceURL=webpack:///./src/head.js?");

/***/ })

/******/ });