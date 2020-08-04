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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWQuanMiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJmb250c0xvYWRlZEZvdXRXaXRoQ2xhc3MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTmFtZSIsIlByb21pc2UiLCJhbGwiLCJmb250cyIsImxvYWQiLCJ0aGVuIiwibWluVlciLCJtYXhWVyIsIm1pbkZvbnRTaXplIiwibWF4Rm9udFNpemUiLCJjb21wdXRlUmVtIiwiYm9keSIsInByb3BlcnRpZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiYmFzZUZvbnRTaXplIiwiZm9udFNpemUiLCJyZXBsYWNlIiwibWF4IiwiTWF0aCIsInJlbGF0aXZlTWF4IiwibWF4UmVtIiwibWluUmVtIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJyZW0iLCJIRUlHSFRfVEhSRVNIT0xEIiwic3R5bGUiLCJyZXNpemVIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsWUFBTTtBQUNMLE1BQUlBLGNBQWMsQ0FBQ0Msd0JBQW5CLEVBQTZDO0FBQzNDQyxZQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLElBQXNDLGVBQXRDO0FBQ0E7QUFDRDs7QUFDRCxNQUFJLFdBQVdGLFFBQWYsRUFBeUI7QUFDdkJHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ1ZKLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlQyxJQUFmLENBQW9CLFlBQXBCLENBRFUsRUFFVk4sUUFBUSxDQUFDSyxLQUFULENBQWVDLElBQWYsQ0FBb0IsZ0JBQXBCLENBRlUsRUFHVk4sUUFBUSxDQUFDSyxLQUFULENBQWVDLElBQWYsQ0FBb0IsbUJBQXBCLENBSFUsRUFJVk4sUUFBUSxDQUFDSyxLQUFULENBQWVDLElBQWYsQ0FBb0IsdUJBQXBCLENBSlUsQ0FBWixFQUtHQyxJQUxILENBS1EsWUFBTTtBQUNaUCxjQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLElBQXNDLGVBQXRDO0FBQ0FKLG9CQUFjLENBQUNDLHdCQUFmLEdBQTBDLElBQTFDO0FBQ0QsS0FSRDtBQVNEO0FBQ0YsQ0FoQkQ7O0FBa0JBLENBQUMsVUFBQ1MsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLFdBQWYsRUFBNEJDLFdBQTVCLEVBQTRDO0FBQzNDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBTUMsSUFBSSxHQUFHYixRQUFRLENBQUNDLGVBQXRCO0FBQ0EsUUFBTWEsVUFBVSxHQUFHQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCSCxJQUF4QixDQUFuQjtBQUNBLFFBQU1JLFlBQVksR0FBR0gsVUFBVSxDQUFDSSxRQUFYLENBQW9CQyxPQUFwQixDQUE0QixJQUE1QixFQUFrQyxFQUFsQyxDQUFyQixDQUh1QixDQUl2Qjs7QUFDQSxRQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBTCxDQUFTVixXQUFULEVBQXNCTyxZQUF0QixDQUFaO0FBQ0EsUUFBTUssV0FBVyxHQUFJWCxXQUFXLEdBQUdTLEdBQWYsR0FBc0JWLFdBQTFDO0FBQ0EsUUFBTWEsTUFBTSxHQUFHRCxXQUFXLEdBQUdMLFlBQTdCO0FBQ0EsUUFBTU8sTUFBTSxHQUFHSixHQUFHLEdBQUdILFlBQXJCO0FBQ0EsV0FBTztBQUFFTSxZQUFNLEVBQU5BLE1BQUY7QUFBVUMsWUFBTSxFQUFOQTtBQUFWLEtBQVA7QUFDRCxHQVZEOztBQUQyQyxvQkFheEJaLFVBQVUsRUFiYztBQUFBLE1BYW5DVyxNQWJtQyxlQWFuQ0EsTUFibUM7O0FBQUEscUJBY3hCWCxVQUFVLEVBZGM7QUFBQSxNQWNuQ1ksTUFkbUMsZ0JBY25DQSxNQWRtQzs7QUFnQjNDLE1BQU1OLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTU8sS0FBSyxHQUFHVixNQUFNLENBQUNXLFVBQXJCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHWixNQUFNLENBQUNhLFdBQXRCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHTCxNQUFWO0FBQ0EsUUFBTU0sZ0JBQWdCLEdBQUcsR0FBekI7O0FBRUEsUUFBSUwsS0FBSyxHQUFHakIsS0FBUixJQUFpQmlCLEtBQUssR0FBR2hCLEtBQXpCLElBQWtDa0IsTUFBTSxHQUFHRyxnQkFBL0MsRUFBaUU7QUFDL0RELFNBQUcsR0FBR0wsTUFBTSxHQUFJLENBQUNELE1BQU0sR0FBR0MsTUFBVixLQUFxQkMsS0FBSyxHQUFHakIsS0FBN0IsQ0FBRCxJQUF5Q0MsS0FBSyxHQUFHRCxLQUFqRCxDQUFmO0FBQ0Q7O0FBRUQsUUFBSWlCLEtBQUssR0FBR2hCLEtBQVIsSUFBaUJrQixNQUFNLEdBQUdHLGdCQUE5QixFQUFnRDtBQUM5Q0QsU0FBRyxHQUFHTixNQUFOO0FBQ0Q7O0FBRUR2QixZQUFRLENBQUNDLGVBQVQsQ0FBeUI4QixLQUF6Qix3QkFBK0NGLEdBQS9DO0FBQ0QsR0FmRDs7QUFpQkEsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCZCxZQUFRO0FBQ1JILFVBQU0sQ0FBQ2tCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDZixRQUFsQztBQUNELEdBSEQ7O0FBS0FjLGVBQWE7QUFDZCxDQXZDRCxFQXVDRyxHQXZDSCxFQXVDUSxJQXZDUixFQXVDYyxFQXZDZCxFQXVDa0IsRUF2Q2xCOztBQXlDQSxJQUNFRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsTUFBaUMsT0FBakMsSUFDQ3BCLE1BQU0sQ0FBQ3FCLFVBQVAsQ0FBa0IsK0JBQWxCLEVBQW1EQyxPQUFuRCxJQUNDLENBQUNILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUhMLEVBSUU7QUFDQW5DLFVBQVEsQ0FBQ0MsZUFBVCxDQUF5QnFDLFlBQXpCLENBQXNDLFlBQXRDLEVBQW9ELE9BQXBEO0FBQ0QsQyIsImZpbGUiOiJhc3NldHMvanMvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2hlYWQuanNcIik7XG4iLCIoKCkgPT4ge1xuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZm9udHNMb2FkZWRGb3V0V2l0aENsYXNzKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGZvbnRzLWxvYWRlZCc7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICgnZm9udHMnIGluIGRvY3VtZW50KSB7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgZG9jdW1lbnQuZm9udHMubG9hZChcIjFlbSAnTGF0bydcIiksXG4gICAgICBkb2N1bWVudC5mb250cy5sb2FkKFwiNzAwIDFlbSAnTGF0bydcIiksXG4gICAgICBkb2N1bWVudC5mb250cy5sb2FkKFwiaXRhbGljIDFlbSAnTGF0bydcIiksXG4gICAgICBkb2N1bWVudC5mb250cy5sb2FkKFwiaXRhbGljIDcwMCAxZW0gJ0xhdG8nXCIpXG4gICAgXSkudGhlbigoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgZm9udHMtbG9hZGVkJztcbiAgICAgIHNlc3Npb25TdG9yYWdlLmZvbnRzTG9hZGVkRm91dFdpdGhDbGFzcyA9IHRydWU7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbigobWluVlcsIG1heFZXLCBtaW5Gb250U2l6ZSwgbWF4Rm9udFNpemUpID0+IHtcbiAgY29uc3QgY29tcHV0ZVJlbSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5KTtcbiAgICBjb25zdCBiYXNlRm9udFNpemUgPSBwcm9wZXJ0aWVzLmZvbnRTaXplLnJlcGxhY2UoL3B4LywgJycpO1xuICAgIC8vIEdldHMgdGhlIG1heCBmb250IHNpemUgb2YgZWl0aGVyIHRoZSBicm93c2VyIG9yIHRoZSBkZXZcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChtaW5Gb250U2l6ZSwgYmFzZUZvbnRTaXplKTtcbiAgICBjb25zdCByZWxhdGl2ZU1heCA9IChtYXhGb250U2l6ZSAqIG1heCkgLyBtaW5Gb250U2l6ZTtcbiAgICBjb25zdCBtYXhSZW0gPSByZWxhdGl2ZU1heCAvIGJhc2VGb250U2l6ZTtcbiAgICBjb25zdCBtaW5SZW0gPSBtYXggLyBiYXNlRm9udFNpemU7XG4gICAgcmV0dXJuIHsgbWF4UmVtLCBtaW5SZW0gfTtcbiAgfTtcblxuICBjb25zdCB7IG1heFJlbSB9ID0gY29tcHV0ZVJlbSgpO1xuICBjb25zdCB7IG1pblJlbSB9ID0gY29tcHV0ZVJlbSgpO1xuXG4gIGNvbnN0IGZvbnRTaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93Lm91dGVySGVpZ2h0O1xuICAgIGxldCByZW0gPSBtaW5SZW07XG4gICAgY29uc3QgSEVJR0hUX1RIUkVTSE9MRCA9IDU5OTtcblxuICAgIGlmICh3aWR0aCA+IG1pblZXICYmIHdpZHRoIDwgbWF4VlcgJiYgaGVpZ2h0ID4gSEVJR0hUX1RIUkVTSE9MRCkge1xuICAgICAgcmVtID0gbWluUmVtICsgKChtYXhSZW0gLSBtaW5SZW0pICogKHdpZHRoIC0gbWluVlcpKSAvIChtYXhWVyAtIG1pblZXKTtcbiAgICB9XG5cbiAgICBpZiAod2lkdGggPiBtYXhWVyAmJiBoZWlnaHQgPiBIRUlHSFRfVEhSRVNIT0xEKSB7XG4gICAgICByZW0gPSBtYXhSZW07XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlID0gYGZvbnQtc2l6ZTogJHtyZW19cmVtYDtcbiAgfTtcblxuICBjb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGZvbnRTaXplKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZvbnRTaXplKTtcbiAgfTtcblxuICByZXNpemVIYW5kbGVyKCk7XG59KSg2NDAsIDEyODAsIDE2LCAyMCk7XG5cbmlmIChcbiAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWYnKSA9PT0gJ2xpZ2h0JyB8fFxuICAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlcyAmJlxuICAgICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZicpKVxuKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbG9yLW1vZGUnLCAnbGlnaHQnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=