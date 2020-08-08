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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/head.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/head.js":
/*!***************************!*\
  !*** ./assets/js/head.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  if (sessionStorage.fontsLoadedFoutWithClass) {
    document.documentElement.className += ' fonts-loaded';
    return;
  }

  if ('fonts' in document) {
    Promise.all([document.fonts.load("1em 'Lato'"), document.fonts.load("700 1em 'Lato'"), document.fonts.load("italic 1em 'Lato'"), document.fonts.load("italic 700 1em 'Lato'")]).then(function () {
      document.documentElement.className += ' fonts-loaded';
      sessionStorage.fontsLoadedFoutWithClass = true;
    });
  }
})();

(function (minVW, maxVW, minFontSize, maxFontSize) {
  var computeRem = function computeRem() {
    var body = document.documentElement;
    var properties = window.getComputedStyle(body);
    var baseFontSize = properties.fontSize.replace(/px/, ''); // Gets the max font size of either the browser or the dev

    var max = Math.max(minFontSize, baseFontSize);
    var relativeMax = maxFontSize * max / minFontSize;
    var maxRem = relativeMax / baseFontSize;
    var minRem = max / baseFontSize;
    return {
      maxRem: maxRem,
      minRem: minRem
    };
  };

  var _computeRem = computeRem(),
      maxRem = _computeRem.maxRem;

  var _computeRem2 = computeRem(),
      minRem = _computeRem2.minRem;

  var fontSize = function fontSize() {
    var width = window.innerWidth;
    var height = window.outerHeight;
    var rem = minRem;
    var HEIGHT_THRESHOLD = 599;

    if (width > minVW && width < maxVW && height > HEIGHT_THRESHOLD) {
      rem = minRem + (maxRem - minRem) * (width - minVW) / (maxVW - minVW);
    }

    if (width > maxVW && height > HEIGHT_THRESHOLD) {
      rem = maxRem;
    }

    document.documentElement.style = "font-size: ".concat(rem, "rem");
  };

  var resizeHandler = function resizeHandler() {
    fontSize();
    window.addEventListener('resize', fontSize);
  };

  resizeHandler();
})(640, 1280, 16, 20);

if (localStorage.getItem('pref') === 'light' || window.matchMedia('(prefers-color-scheme: light)').matches && !localStorage.getItem('pref')) {
  document.documentElement.setAttribute('color-mode', 'light');
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWQuanMiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJmb250c0xvYWRlZEZvdXRXaXRoQ2xhc3MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTmFtZSIsIlByb21pc2UiLCJhbGwiLCJmb250cyIsImxvYWQiLCJ0aGVuIiwibWluVlciLCJtYXhWVyIsIm1pbkZvbnRTaXplIiwibWF4Rm9udFNpemUiLCJjb21wdXRlUmVtIiwiYm9keSIsInByb3BlcnRpZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiYmFzZUZvbnRTaXplIiwiZm9udFNpemUiLCJyZXBsYWNlIiwibWF4IiwiTWF0aCIsInJlbGF0aXZlTWF4IiwibWF4UmVtIiwibWluUmVtIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJyZW0iLCJIRUlHSFRfVEhSRVNIT0xEIiwic3R5bGUiLCJyZXNpemVIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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Q0QsU0FBRyxHQUFHTixNQUFOO0FBQ0Q7O0FBRUR2QixZQUFRLENBQUNDLGVBQVQsQ0FBeUI4QixLQUF6Qix3QkFBK0NGLEdBQS9DO0FBQ0QsR0FmRDs7QUFpQkEsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCZCxZQUFRO0FBQ1JILFVBQU0sQ0FBQ2tCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDZixRQUFsQztBQUNELEdBSEQ7O0FBS0FjLGVBQWE7QUFDZCxDQXZDRCxFQXVDRyxHQXZDSCxFQXVDUSxJQXZDUixFQXVDYyxFQXZDZCxFQXVDa0IsRUF2Q2xCOztBQXlDQSxJQUNFRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsTUFBaUMsT0FBakMsSUFDQ3BCLE1BQU0sQ0FBQ3FCLFVBQVAsQ0FBa0IsK0JBQWxCLEVBQW1EQyxPQUFuRCxJQUNDLENBQUNILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUhMLEVBSUU7QUFDQW5DLFVBQVEsQ0FBQ0MsZUFBVCxDQUF5QnFDLFlBQXpCLENBQXNDLFlBQXRDLEVBQW9ELE9BQXBEO0FBQ0QsQyIsImZpbGUiOiJoZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvaGVhZC5qc1wiKTtcbiIsIigoKSA9PiB7XG4gIGlmIChzZXNzaW9uU3RvcmFnZS5mb250c0xvYWRlZEZvdXRXaXRoQ2xhc3MpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgZm9udHMtbG9hZGVkJztcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCdmb250cycgaW4gZG9jdW1lbnQpIHtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICBkb2N1bWVudC5mb250cy5sb2FkKFwiMWVtICdMYXRvJ1wiKSxcbiAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCI3MDAgMWVtICdMYXRvJ1wiKSxcbiAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCJpdGFsaWMgMWVtICdMYXRvJ1wiKSxcbiAgICAgIGRvY3VtZW50LmZvbnRzLmxvYWQoXCJpdGFsaWMgNzAwIDFlbSAnTGF0bydcIilcbiAgICBdKS50aGVuKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBmb250cy1sb2FkZWQnO1xuICAgICAgc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWRGb3V0V2l0aENsYXNzID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuKChtaW5WVywgbWF4VlcsIG1pbkZvbnRTaXplLCBtYXhGb250U2l6ZSkgPT4ge1xuICBjb25zdCBjb21wdXRlUmVtID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvZHkpO1xuICAgIGNvbnN0IGJhc2VGb250U2l6ZSA9IHByb3BlcnRpZXMuZm9udFNpemUucmVwbGFjZSgvcHgvLCAnJyk7XG4gICAgLy8gR2V0cyB0aGUgbWF4IGZvbnQgc2l6ZSBvZiBlaXRoZXIgdGhlIGJyb3dzZXIgb3IgdGhlIGRldlxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KG1pbkZvbnRTaXplLCBiYXNlRm9udFNpemUpO1xuICAgIGNvbnN0IHJlbGF0aXZlTWF4ID0gKG1heEZvbnRTaXplICogbWF4KSAvIG1pbkZvbnRTaXplO1xuICAgIGNvbnN0IG1heFJlbSA9IHJlbGF0aXZlTWF4IC8gYmFzZUZvbnRTaXplO1xuICAgIGNvbnN0IG1pblJlbSA9IG1heCAvIGJhc2VGb250U2l6ZTtcbiAgICByZXR1cm4geyBtYXhSZW0sIG1pblJlbSB9O1xuICB9O1xuXG4gIGNvbnN0IHsgbWF4UmVtIH0gPSBjb21wdXRlUmVtKCk7XG4gIGNvbnN0IHsgbWluUmVtIH0gPSBjb21wdXRlUmVtKCk7XG5cbiAgY29uc3QgZm9udFNpemUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cub3V0ZXJIZWlnaHQ7XG4gICAgbGV0IHJlbSA9IG1pblJlbTtcbiAgICBjb25zdCBIRUlHSFRfVEhSRVNIT0xEID0gNTk5O1xuXG4gICAgaWYgKHdpZHRoID4gbWluVlcgJiYgd2lkdGggPCBtYXhWVyAmJiBoZWlnaHQgPiBIRUlHSFRfVEhSRVNIT0xEKSB7XG4gICAgICByZW0gPSBtaW5SZW0gKyAoKG1heFJlbSAtIG1pblJlbSkgKiAod2lkdGggLSBtaW5WVykpIC8gKG1heFZXIC0gbWluVlcpO1xuICAgIH1cblxuICAgIGlmICh3aWR0aCA+IG1heFZXICYmIGhlaWdodCA+IEhFSUdIVF9USFJFU0hPTEQpIHtcbiAgICAgIHJlbSA9IG1heFJlbTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgPSBgZm9udC1zaXplOiAke3JlbX1yZW1gO1xuICB9O1xuXG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZm9udFNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZm9udFNpemUpO1xuICB9O1xuXG4gIHJlc2l6ZUhhbmRsZXIoKTtcbn0pKDY0MCwgMTI4MCwgMTYsIDIwKTtcblxuaWYgKFxuICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZicpID09PSAnbGlnaHQnIHx8XG4gICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzICYmXG4gICAgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmJykpXG4pIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29sb3ItbW9kZScsICdsaWdodCcpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==