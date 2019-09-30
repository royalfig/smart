/******/
(function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,
        /******/
        l: false,
        /******/
        exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
      /******/
      if (mode & 1) value = __webpack_require__(value);
      /******/
      if (mode & 8) return value;
      /******/
      if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /******/
      var ns = Object.create(null);
      /******/
      __webpack_require__.r(ns);
      /******/
      Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/
      if (mode & 2 && typeof value != 'string')
        for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      /******/
      return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
      /******/
      __webpack_require__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
  }
  /************************************************************************/
  /******/
  ({

    /***/
    "../../node_modules/sweetalert/dist/sweetalert.min.js":
      /*!******************************************************************************************************************************************!*\
        !*** /Users/kingrayhan/projects/ghost/ghost-search/versions/2.19.2/content/themes/casper/node_modules/sweetalert/dist/sweetalert.min.js ***!
        \******************************************************************************************************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function (setImmediate, clearImmediate) {
          ! function (t, e) {
            true ? module.exports = e() : undefined
          }(this, function () {
            return function (t) {
              function e(o) {
                if (n[o]) return n[o].exports;
                var r = n[o] = {
                  i: o,
                  l: !1,
                  exports: {}
                };
                return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
              }
              var n = {};
              return e.m = t, e.c = n, e.d = function (t, n, o) {
                e.o(t, n) || Object.defineProperty(t, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: o
                })
              }, e.n = function (t) {
                var n = t && t.__esModule ? function () {
                  return t.default
                } : function () {
                  return t
                };
                return e.d(n, "a", n), n
              }, e.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
              }, e.p = "", e(e.s = 8)
            }([function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = "swal-button";
              e.CLASS_NAMES = {
                MODAL: "swal-modal",
                OVERLAY: "swal-overlay",
                SHOW_MODAL: "swal-overlay--show-modal",
                MODAL_TITLE: "swal-title",
                MODAL_TEXT: "swal-text",
                ICON: "swal-icon",
                ICON_CUSTOM: "swal-icon--custom",
                CONTENT: "swal-content",
                FOOTER: "swal-footer",
                BUTTON_CONTAINER: "swal-button-container",
                BUTTON: o,
                CONFIRM_BUTTON: o + "--confirm",
                CANCEL_BUTTON: o + "--cancel",
                DANGER_BUTTON: o + "--danger",
                BUTTON_LOADING: o + "--loading",
                BUTTON_LOADER: o + "__loader"
              }, e.default = e.CLASS_NAMES
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.getNode = function (t) {
                var e = "." + t;
                return document.querySelector(e)
              }, e.stringToNode = function (t) {
                var e = document.createElement("div");
                return e.innerHTML = t.trim(), e.firstChild
              }, e.insertAfter = function (t, e) {
                var n = e.nextSibling;
                e.parentNode.insertBefore(t, n)
              }, e.removeNode = function (t) {
                t.parentElement.removeChild(t)
              }, e.throwErr = function (t) {
                throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim())
              }, e.isPlainObject = function (t) {
                if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
              }, e.ordinalSuffixOf = function (t) {
                var e = t % 10,
                  n = t % 100;
                return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th"
              }
            }, function (t, e, n) {
              "use strict";

              function o(t) {
                for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
              }
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), o(n(25));
              var r = n(26);
              e.overlayMarkup = r.default, o(n(27)), o(n(28)), o(n(29));
              var i = n(0),
                a = i.default.MODAL_TITLE,
                s = i.default.MODAL_TEXT,
                c = i.default.ICON,
                l = i.default.FOOTER;
              e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n'
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(1);
              e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";
              var r = {
                  visible: !0,
                  text: null,
                  value: null,
                  className: "",
                  closeModal: !0
                },
                i = Object.assign({}, r, {
                  visible: !1,
                  text: "Cancel",
                  value: null
                }),
                a = Object.assign({}, r, {
                  text: "OK",
                  value: !0
                });
              e.defaultButtonList = {
                cancel: i,
                confirm: a
              };
              var s = function (t) {
                  switch (t) {
                    case e.CONFIRM_KEY:
                      return a;
                    case e.CANCEL_KEY:
                      return i;
                    default:
                      var n = t.charAt(0).toUpperCase() + t.slice(1);
                      return Object.assign({}, r, {
                        text: n,
                        value: t
                      })
                  }
                },
                c = function (t, e) {
                  var n = s(t);
                  return !0 === e ? Object.assign({}, n, {
                    visible: !0
                  }) : "string" == typeof e ? Object.assign({}, n, {
                    visible: !0,
                    text: e
                  }) : o.isPlainObject(e) ? Object.assign({
                    visible: !0
                  }, n, e) : Object.assign({}, n, {
                    visible: !1
                  })
                },
                l = function (t) {
                  for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
                    var r = o[n],
                      a = t[r],
                      s = c(r, a);
                    e[r] = s
                  }
                  return e.cancel || (e.cancel = i), e
                },
                u = function (t) {
                  var n = {};
                  switch (t.length) {
                    case 1:
                      n[e.CANCEL_KEY] = Object.assign({}, i, {
                        visible: !1
                      });
                      break;
                    case 2:
                      n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);
                      break;
                    default:
                      o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!")
                  }
                  return n
                };
              e.getButtonListOpts = function (t) {
                var n = e.defaultButtonList;
                return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n
              }
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(1),
                r = n(2),
                i = n(0),
                a = i.default.MODAL,
                s = i.default.OVERLAY,
                c = n(30),
                l = n(31),
                u = n(32),
                f = n(33);
              e.injectElIntoModal = function (t) {
                var e = o.getNode(a),
                  n = o.stringToNode(t);
                return e.appendChild(n), n
              };
              var d = function (t) {
                  t.className = a, t.textContent = ""
                },
                p = function (t, e) {
                  d(t);
                  var n = e.className;
                  n && t.classList.add(n)
                };
              e.initModalContent = function (t) {
                var e = o.getNode(a);
                p(e, t), c.default(t.icon), l.initTitle(t.title), l.initText(t.text), f.default(t.content), u.default(t.buttons, t.dangerMode)
              };
              var m = function () {
                var t = o.getNode(s),
                  e = o.stringToNode(r.modalMarkup);
                t.appendChild(e)
              };
              e.default = m
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(3),
                r = {
                  isOpen: !1,
                  promise: null,
                  actions: {},
                  timer: null
                },
                i = Object.assign({}, r);
              e.resetState = function () {
                i = Object.assign({}, r)
              }, e.setActionValue = function (t) {
                if ("string" == typeof t) return a(o.CONFIRM_KEY, t);
                for (var e in t) a(e, t[e])
              };
              var a = function (t, e) {
                i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], {
                  value: e
                })
              };
              e.setActionOptionsFor = function (t, e) {
                var n = (void 0 === e ? {} : e).closeModal,
                  o = void 0 === n || n;
                Object.assign(i.actions[t], {
                  closeModal: o
                })
              }, e.default = i
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(1),
                r = n(3),
                i = n(0),
                a = i.default.OVERLAY,
                s = i.default.SHOW_MODAL,
                c = i.default.BUTTON,
                l = i.default.BUTTON_LOADING,
                u = n(5);
              e.openModal = function () {
                o.getNode(a).classList.add(s), u.default.isOpen = !0
              };
              var f = function () {
                o.getNode(a).classList.remove(s), u.default.isOpen = !1
              };
              e.onAction = function (t) {
                void 0 === t && (t = r.CANCEL_KEY);
                var e = u.default.actions[t],
                  n = e.value;
                if (!1 === e.closeModal) {
                  var i = c + "--" + t;
                  o.getNode(i).classList.add(l)
                } else f();
                u.default.promise.resolve(n)
              }, e.getState = function () {
                var t = Object.assign({}, u.default);
                return delete t.promise, delete t.timer, t
              }, e.stopLoading = function () {
                for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) {
                  t[e].classList.remove(l)
                }
              }
            }, function (t, e) {
              var n;
              n = function () {
                return this
              }();
              try {
                n = n || Function("return this")() || (0, eval)("this")
              } catch (t) {
                "object" == typeof window && (n = window)
              }
              t.exports = n
            }, function (t, e, n) {
              (function (e) {
                t.exports = e.sweetAlert = n(9)
              }).call(e, n(7))
            }, function (t, e, n) {
              (function (e) {
                t.exports = e.swal = n(10)
              }).call(e, n(7))
            }, function (t, e, n) {
              "undefined" != typeof window && n(11), n(16);
              var o = n(23).default;
              t.exports = o
            }, function (t, e, n) {
              var o = n(12);
              "string" == typeof o && (o = [
                [t.i, o, ""]
              ]);
              var r = {
                insertAt: "top"
              };
              r.transform = void 0;
              n(14)(o, r);
              o.locals && (t.exports = o.locals)
            }, function (t, e, n) {
              e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""])
            }, function (t, e) {
              function n(t, e) {
                var n = t[1] || "",
                  r = t[3];
                if (!r) return n;
                if (e && "function" == typeof btoa) {
                  var i = o(r);
                  return [n].concat(r.sources.map(function (t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */"
                  })).concat([i]).join("\n")
                }
                return [n].join("\n")
              }

              function o(t) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
              }
              t.exports = function (t) {
                var e = [];
                return e.toString = function () {
                  return this.map(function (e) {
                    var o = n(e, t);
                    return e[2] ? "@media " + e[2] + "{" + o + "}" : o
                  }).join("")
                }, e.i = function (t, n) {
                  "string" == typeof t && (t = [
                    [null, t, ""]
                  ]);
                  for (var o = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];
                    "number" == typeof i && (o[i] = !0)
                  }
                  for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                  }
                }, e
              }
            }, function (t, e, n) {
              function o(t, e) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n],
                    r = m[o.id];
                  if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
                    for (; i < o.parts.length; i++) r.parts.push(u(o.parts[i], e))
                  } else {
                    for (var a = [], i = 0; i < o.parts.length; i++) a.push(u(o.parts[i], e));
                    m[o.id] = {
                      id: o.id,
                      refs: 1,
                      parts: a
                    }
                  }
                }
              }

              function r(t, e) {
                for (var n = [], o = {}, r = 0; r < t.length; r++) {
                  var i = t[r],
                    a = e.base ? i[0] + e.base : i[0],
                    s = i[1],
                    c = i[2],
                    l = i[3],
                    u = {
                      css: s,
                      media: c,
                      sourceMap: l
                    };
                  o[a] ? o[a].parts.push(u) : n.push(o[a] = {
                    id: a,
                    parts: [u]
                  })
                }
                return n
              }

              function i(t, e) {
                var n = v(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var o = w[w.length - 1];
                if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);
                else {
                  if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                  n.appendChild(e)
                }
              }

              function a(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = w.indexOf(t);
                e >= 0 && w.splice(e, 1)
              }

              function s(t) {
                var e = document.createElement("style");
                return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e
              }

              function c(t) {
                var e = document.createElement("link");
                return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e
              }

              function l(t, e) {
                Object.keys(e).forEach(function (n) {
                  t.setAttribute(n, e[n])
                })
              }

              function u(t, e) {
                var n, o, r, i;
                if (e.transform && t.css) {
                  if (!(i = e.transform(t.css))) return function () {};
                  t.css = i
                }
                if (e.singleton) {
                  var l = h++;
                  n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0)
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function () {
                  a(n), n.href && URL.revokeObjectURL(n.href)
                }) : (n = s(e), o = d.bind(null, n), r = function () {
                  a(n)
                });
                return o(t),
                  function (e) {
                    if (e) {
                      if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                      o(t = e)
                    } else r()
                  }
              }

              function f(t, e, n, o) {
                var r = n ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = x(e, r);
                else {
                  var i = document.createTextNode(r),
                    a = t.childNodes;
                  a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
                }
              }

              function d(t, e) {
                var n = e.css,
                  o = e.media;
                if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                else {
                  for (; t.firstChild;) t.removeChild(t.firstChild);
                  t.appendChild(document.createTextNode(n))
                }
              }

              function p(t, e, n) {
                var o = n.css,
                  r = n.sourceMap,
                  i = void 0 === e.convertToAbsoluteUrls && r;
                (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var a = new Blob([o], {
                    type: "text/css"
                  }),
                  s = t.href;
                t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
              }
              var m = {},
                b = function (t) {
                  var e;
                  return function () {
                    return void 0 === e && (e = t.apply(this, arguments)), e
                  }
                }(function () {
                  return window && document && document.all && !window.atob
                }),
                v = function (t) {
                  var e = {};
                  return function (n) {
                    return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
                  }
                }(function (t) {
                  return document.querySelector(t)
                }),
                g = null,
                h = 0,
                w = [],
                y = n(15);
              t.exports = function (t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = r(t, e);
                return o(n, e),
                  function (t) {
                    for (var i = [], a = 0; a < n.length; a++) {
                      var s = n[a],
                        c = m[s.id];
                      c.refs--, i.push(c)
                    }
                    if (t) {
                      o(r(t, e), e)
                    }
                    for (var a = 0; a < i.length; a++) {
                      var c = i[a];
                      if (0 === c.refs) {
                        for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                        delete m[c.id]
                      }
                    }
                  }
              };
              var x = function () {
                var t = [];
                return function (e, n) {
                  return t[e] = n, t.filter(Boolean).join("\n")
                }
              }()
            }, function (t, e) {
              t.exports = function (t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host,
                  o = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                  var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
                    return e
                  }).replace(/^'(.*)'$/, function (t, e) {
                    return e
                  });
                  if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
                  var i;
                  return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
                })
              }
            }, function (t, e, n) {
              var o = n(17);
              "undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function (t, e) {
                "use strict";
                return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
              }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function (t, e) {
                  if (null == this) throw new TypeError('"this" is null or not defined');
                  var n = Object(this),
                    o = n.length >>> 0;
                  if (0 === o) return !1;
                  for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) {
                    if (function (t, e) {
                        return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
                      }(n[i], t)) return !0;
                    i++
                  }
                  return !1
                }
              }), "undefined" != typeof window && function (t) {
                t.forEach(function (t) {
                  t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                      this.parentNode.removeChild(this)
                    }
                  })
                })
              }([Element.prototype, CharacterData.prototype, DocumentType.prototype])
            }, function (t, e, n) {
              (function (e) {
                ! function (n) {
                  function o() {}

                  function r(t, e) {
                    return function () {
                      t.apply(e, arguments)
                    }
                  }

                  function i(t) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
                  }

                  function a(t, e) {
                    for (; 3 === t._state;) t = t._value;
                    if (0 === t._state) return void t._deferreds.push(e);
                    t._handled = !0, i._immediateFn(function () {
                      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                      if (null === n) return void(1 === t._state ? s : c)(e.promise, t._value);
                      var o;
                      try {
                        o = n(t._value)
                      } catch (t) {
                        return void c(e.promise, t)
                      }
                      s(e.promise, o)
                    })
                  }

                  function s(t, e) {
                    try {
                      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                      if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof i) return t._state = 3, t._value = e, void l(t);
                        if ("function" == typeof n) return void f(r(n, e), t)
                      }
                      t._state = 1, t._value = e, l(t)
                    } catch (e) {
                      c(t, e)
                    }
                  }

                  function c(t, e) {
                    t._state = 2, t._value = e, l(t)
                  }

                  function l(t) {
                    2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
                      t._handled || i._unhandledRejectionFn(t._value)
                    });
                    for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
                    t._deferreds = null
                  }

                  function u(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                  }

                  function f(t, e) {
                    var n = !1;
                    try {
                      t(function (t) {
                        n || (n = !0, s(e, t))
                      }, function (t) {
                        n || (n = !0, c(e, t))
                      })
                    } catch (t) {
                      if (n) return;
                      n = !0, c(e, t)
                    }
                  }
                  var d = setTimeout;
                  i.prototype.catch = function (t) {
                    return this.then(null, t)
                  }, i.prototype.then = function (t, e) {
                    var n = new this.constructor(o);
                    return a(this, new u(t, e, n)), n
                  }, i.all = function (t) {
                    var e = Array.prototype.slice.call(t);
                    return new i(function (t, n) {
                      function o(i, a) {
                        try {
                          if (a && ("object" == typeof a || "function" == typeof a)) {
                            var s = a.then;
                            if ("function" == typeof s) return void s.call(a, function (t) {
                              o(i, t)
                            }, n)
                          }
                          e[i] = a, 0 == --r && t(e)
                        } catch (t) {
                          n(t)
                        }
                      }
                      if (0 === e.length) return t([]);
                      for (var r = e.length, i = 0; i < e.length; i++) o(i, e[i])
                    })
                  }, i.resolve = function (t) {
                    return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) {
                      e(t)
                    })
                  }, i.reject = function (t) {
                    return new i(function (e, n) {
                      n(t)
                    })
                  }, i.race = function (t) {
                    return new i(function (e, n) {
                      for (var o = 0, r = t.length; o < r; o++) t[o].then(e, n)
                    })
                  }, i._immediateFn = "function" == typeof e && function (t) {
                    e(t)
                  } || function (t) {
                    d(t, 0)
                  }, i._unhandledRejectionFn = function (t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                  }, i._setImmediateFn = function (t) {
                    i._immediateFn = t
                  }, i._setUnhandledRejectionFn = function (t) {
                    i._unhandledRejectionFn = t
                  }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i)
                }(this)
              }).call(e, n(18).setImmediate)
            }, function (t, e, n) {
              function o(t, e) {
                this._id = t, this._clearFn = e
              }
              var r = Function.prototype.apply;
              e.setTimeout = function () {
                return new o(r.call(setTimeout, window, arguments), clearTimeout)
              }, e.setInterval = function () {
                return new o(r.call(setInterval, window, arguments), clearInterval)
              }, e.clearTimeout = e.clearInterval = function (t) {
                t && t.close()
              }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
                this._clearFn.call(window, this._id)
              }, e.enroll = function (t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
              }, e.unenroll = function (t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
              }, e._unrefActive = e.active = function (t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                  t._onTimeout && t._onTimeout()
                }, e))
              }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
            }, function (t, e, n) {
              (function (t, e) {
                ! function (t, n) {
                  "use strict";

                  function o(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var o = {
                      callback: t,
                      args: e
                    };
                    return l[c] = o, s(c), c++
                  }

                  function r(t) {
                    delete l[t]
                  }

                  function i(t) {
                    var e = t.callback,
                      o = t.args;
                    switch (o.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(o[0]);
                        break;
                      case 2:
                        e(o[0], o[1]);
                        break;
                      case 3:
                        e(o[0], o[1], o[2]);
                        break;
                      default:
                        e.apply(n, o)
                    }
                  }

                  function a(t) {
                    if (u) setTimeout(a, 0, t);
                    else {
                      var e = l[t];
                      if (e) {
                        u = !0;
                        try {
                          i(e)
                        } finally {
                          r(t), u = !1
                        }
                      }
                    }
                  }
                  if (!t.setImmediate) {
                    var s, c = 1,
                      l = {},
                      u = !1,
                      f = t.document,
                      d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
                      s = function (t) {
                        e.nextTick(function () {
                          a(t)
                        })
                      }
                    }() : function () {
                      if (t.postMessage && !t.importScripts) {
                        var e = !0,
                          n = t.onmessage;
                        return t.onmessage = function () {
                          e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                      }
                    }() ? function () {
                      var e = "setImmediate$" + Math.random() + "$",
                        n = function (n) {
                          n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length))
                        };
                      t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function (n) {
                        t.postMessage(e + n, "*")
                      }
                    }() : t.MessageChannel ? function () {
                      var t = new MessageChannel;
                      t.port1.onmessage = function (t) {
                        a(t.data)
                      }, s = function (e) {
                        t.port2.postMessage(e)
                      }
                    }() : f && "onreadystatechange" in f.createElement("script") ? function () {
                      var t = f.documentElement;
                      s = function (e) {
                        var n = f.createElement("script");
                        n.onreadystatechange = function () {
                          a(e), n.onreadystatechange = null, t.removeChild(n), n = null
                        }, t.appendChild(n)
                      }
                    }() : function () {
                      s = function (t) {
                        setTimeout(a, 0, t)
                      }
                    }(), d.setImmediate = o, d.clearImmediate = r
                  }
                }("undefined" == typeof self ? void 0 === t ? this : t : self)
              }).call(e, n(7), n(20))
            }, function (t, e) {
              function n() {
                throw new Error("setTimeout has not been defined")
              }

              function o() {
                throw new Error("clearTimeout has not been defined")
              }

              function r(t) {
                if (u === setTimeout) return setTimeout(t, 0);
                if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
                try {
                  return u(t, 0)
                } catch (e) {
                  try {
                    return u.call(null, t, 0)
                  } catch (e) {
                    return u.call(this, t, 0)
                  }
                }
              }

              function i(t) {
                if (f === clearTimeout) return clearTimeout(t);
                if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
                try {
                  return f(t)
                } catch (e) {
                  try {
                    return f.call(null, t)
                  } catch (e) {
                    return f.call(this, t)
                  }
                }
              }

              function a() {
                b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s())
              }

              function s() {
                if (!b) {
                  var t = r(a);
                  b = !0;
                  for (var e = m.length; e;) {
                    for (p = m, m = []; ++v < e;) p && p[v].run();
                    v = -1, e = m.length
                  }
                  p = null, b = !1, i(t)
                }
              }

              function c(t, e) {
                this.fun = t, this.array = e
              }

              function l() {}
              var u, f, d = t.exports = {};
              ! function () {
                try {
                  u = "function" == typeof setTimeout ? setTimeout : n
                } catch (t) {
                  u = n
                }
                try {
                  f = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                  f = o
                }
              }();
              var p, m = [],
                b = !1,
                v = -1;
              d.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                m.push(new c(t, e)), 1 !== m.length || b || r(s)
              }, c.prototype.run = function () {
                this.fun.apply(null, this.array)
              }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (t) {
                return []
              }, d.binding = function (t) {
                throw new Error("process.binding is not supported")
              }, d.cwd = function () {
                return "/"
              }, d.chdir = function (t) {
                throw new Error("process.chdir is not supported")
              }, d.umask = function () {
                return 0
              }
            }, function (t, e, n) {
              "use strict";
              n(22).polyfill()
            }, function (t, e, n) {
              "use strict";

              function o(t, e) {
                if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
                for (var n = Object(t), o = 1; o < arguments.length; o++) {
                  var r = arguments[o];
                  if (void 0 !== r && null !== r)
                    for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) {
                      var c = i[a],
                        l = Object.getOwnPropertyDescriptor(r, c);
                      void 0 !== l && l.enumerable && (n[c] = r[c])
                    }
                }
                return n
              }

              function r() {
                Object.assign || Object.defineProperty(Object, "assign", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: o
                })
              }
              t.exports = {
                assign: o,
                polyfill: r
              }
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(24),
                r = n(6),
                i = n(5),
                a = n(36),
                s = function () {
                  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                  if ("undefined" != typeof window) {
                    var n = a.getOpts.apply(void 0, t);
                    return new Promise(function (t, e) {
                      i.default.promise = {
                        resolve: t,
                        reject: e
                      }, o.default(n), setTimeout(function () {
                        r.openModal()
                      })
                    })
                  }
                };
              s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e.default = s
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(1),
                r = n(0),
                i = r.default.MODAL,
                a = n(4),
                s = n(34),
                c = n(35),
                l = n(1);
              e.init = function (t) {
                o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), a.default()), a.initModalContent(t), c.default(t)
              }, e.default = e.init
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(0),
                r = o.default.MODAL;
              e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e.default = e.modalMarkup
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(0),
                r = o.default.OVERLAY,
                i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
              e.default = i
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(0),
                r = o.default.ICON;
              e.errorIconMarkup = function () {
                var t = r + "--error",
                  e = t + "__line";
                return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  '
              }, e.warningIconMarkup = function () {
                var t = r + "--warning";
                return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  '
              }, e.successIconMarkup = function () {
                var t = r + "--success";
                return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  '
              }
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(0),
                r = o.default.CONTENT;
              e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n'
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(0),
                r = o.default.BUTTON_CONTAINER,
                i = o.default.BUTTON,
                a = o.default.BUTTON_LOADER;
              e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(4),
                r = n(2),
                i = n(0),
                a = i.default.ICON,
                s = i.default.ICON_CUSTOM,
                c = ["error", "warning", "success", "info"],
                l = {
                  error: r.errorIconMarkup(),
                  warning: r.warningIconMarkup(),
                  success: r.successIconMarkup()
                },
                u = function (t, e) {
                  var n = a + "--" + t;
                  e.classList.add(n);
                  var o = l[t];
                  o && (e.innerHTML = o)
                },
                f = function (t, e) {
                  e.classList.add(s);
                  var n = document.createElement("img");
                  n.src = t, e.appendChild(n)
                },
                d = function (t) {
                  if (t) {
                    var e = o.injectElIntoModal(r.iconMarkup);
                    c.includes(t) ? u(t, e) : f(t, e)
                  }
                };
              e.default = d
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(2),
                r = n(4),
                i = function (t) {
                  navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "")
                };
              e.initTitle = function (t) {
                if (t) {
                  var e = r.injectElIntoModal(o.titleMarkup);
                  e.textContent = t, i(e)
                }
              }, e.initText = function (t) {
                if (t) {
                  var e = document.createDocumentFragment();
                  t.split("\n").forEach(function (t, n, o) {
                    e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br"))
                  });
                  var n = r.injectElIntoModal(o.textMarkup);
                  n.appendChild(e), i(n)
                }
              }
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(1),
                r = n(4),
                i = n(0),
                a = i.default.BUTTON,
                s = i.default.DANGER_BUTTON,
                c = n(3),
                l = n(2),
                u = n(6),
                f = n(5),
                d = function (t, e, n) {
                  var r = e.text,
                    i = e.value,
                    d = e.className,
                    p = e.closeModal,
                    m = o.stringToNode(l.buttonMarkup),
                    b = m.querySelector("." + a),
                    v = a + "--" + t;
                  if (b.classList.add(v), d) {
                    (Array.isArray(d) ? d : d.split(" ")).filter(function (t) {
                      return t.length > 0
                    }).forEach(function (t) {
                      b.classList.add(t)
                    })
                  }
                  n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;
                  var g = {};
                  return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, {
                    closeModal: p
                  }), b.addEventListener("click", function () {
                    return u.onAction(t)
                  }), m
                },
                p = function (t, e) {
                  var n = r.injectElIntoModal(l.footerMarkup);
                  for (var o in t) {
                    var i = t[o],
                      a = d(o, i, e);
                    i.visible && n.appendChild(a)
                  }
                  0 === n.children.length && n.remove()
                };
              e.default = p
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(3),
                r = n(4),
                i = n(2),
                a = n(5),
                s = n(6),
                c = n(0),
                l = c.default.CONTENT,
                u = function (t) {
                  t.addEventListener("input", function (t) {
                    var e = t.target,
                      n = e.value;
                    a.setActionValue(n)
                  }), t.addEventListener("keyup", function (t) {
                    if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY)
                  }), setTimeout(function () {
                    t.focus(), a.setActionValue("")
                  }, 0)
                },
                f = function (t, e, n) {
                  var o = document.createElement(e),
                    r = l + "__" + e;
                  o.classList.add(r);
                  for (var i in n) {
                    var a = n[i];
                    o[i] = a
                  }
                  "input" === e && u(o), t.appendChild(o)
                },
                d = function (t) {
                  if (t) {
                    var e = r.injectElIntoModal(i.contentMarkup),
                      n = t.element,
                      o = t.attributes;
                    "string" == typeof n ? f(e, n, o) : e.appendChild(n)
                  }
                };
              e.default = d
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(1),
                r = n(2),
                i = function () {
                  var t = o.stringToNode(r.overlayMarkup);
                  document.body.appendChild(t)
                };
              e.default = i
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(5),
                r = n(6),
                i = n(1),
                a = n(3),
                s = n(0),
                c = s.default.MODAL,
                l = s.default.BUTTON,
                u = s.default.OVERLAY,
                f = function (t) {
                  t.preventDefault(), v()
                },
                d = function (t) {
                  t.preventDefault(), g()
                },
                p = function (t) {
                  if (o.default.isOpen) switch (t.key) {
                    case "Escape":
                      return r.onAction(a.CANCEL_KEY)
                  }
                },
                m = function (t) {
                  if (o.default.isOpen) switch (t.key) {
                    case "Tab":
                      return f(t)
                  }
                },
                b = function (t) {
                  if (o.default.isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0
                },
                v = function () {
                  var t = i.getNode(l);
                  t && (t.tabIndex = 0, t.focus())
                },
                g = function () {
                  var t = i.getNode(c),
                    e = t.querySelectorAll("." + l),
                    n = e.length - 1,
                    o = e[n];
                  o && o.focus()
                },
                h = function (t) {
                  t[t.length - 1].addEventListener("keydown", m)
                },
                w = function (t) {
                  t[0].addEventListener("keydown", b)
                },
                y = function () {
                  var t = i.getNode(c),
                    e = t.querySelectorAll("." + l);
                  e.length && (h(e), w(e))
                },
                x = function (t) {
                  if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY)
                },
                _ = function (t) {
                  var e = i.getNode(u);
                  e.removeEventListener("click", x), t && e.addEventListener("click", x)
                },
                k = function (t) {
                  o.default.timer && clearTimeout(o.default.timer), t && (o.default.timer = window.setTimeout(function () {
                    return r.onAction(a.CANCEL_KEY)
                  }, t))
                },
                O = function (t) {
                  t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer)
                };
              e.default = O
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(1),
                r = n(3),
                i = n(37),
                a = n(38),
                s = {
                  title: null,
                  text: null,
                  icon: null,
                  buttons: r.defaultButtonList,
                  content: null,
                  className: null,
                  closeOnClickOutside: !0,
                  closeOnEsc: !0,
                  dangerMode: !1,
                  timer: null
                },
                c = Object.assign({}, s);
              e.setDefaults = function (t) {
                c = Object.assign({}, s, t)
              };
              var l = function (t) {
                  var e = t && t.button,
                    n = t && t.buttons;
                  return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? {
                    confirm: e
                  } : n
                },
                u = function (t) {
                  return o.ordinalSuffixOf(t + 1)
                },
                f = function (t, e) {
                  o.throwErr(u(e) + " argument ('" + t + "') is invalid")
                },
                d = function (t, e) {
                  var n = t + 1,
                    r = e[n];
                  o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object")
                },
                p = function (t, e) {
                  var n = t + 1,
                    r = e[n];
                  void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")")
                },
                m = function (t, e, n, r) {
                  var i = typeof e,
                    a = "string" === i,
                    s = e instanceof Element;
                  if (a) {
                    if (0 === n) return {
                      text: e
                    };
                    if (1 === n) return {
                      text: e,
                      title: r[0]
                    };
                    if (2 === n) return d(n, r), {
                      icon: e
                    };
                    f(e, n)
                  } else {
                    if (s && 0 === n) return d(n, r), {
                      content: e
                    };
                    if (o.isPlainObject(e)) return p(n, r), e;
                    f(e, n)
                  }
                };
              e.getOpts = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = {};
                t.forEach(function (e, o) {
                  var r = m(0, e, o, t);
                  Object.assign(n, r)
                });
                var o = l(n);
                n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content);
                var u = Object.assign({}, s, c, n);
                return Object.keys(u).forEach(function (t) {
                  a.DEPRECATED_OPTS[t] && a.logDeprecation(t)
                }), u
              }
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var o = n(1),
                r = {
                  element: "input",
                  attributes: {
                    placeholder: ""
                  }
                };
              e.getContentOpts = function (t) {
                var e = {};
                return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {
                  element: t
                } : "input" === t ? r : null
              }
            }, function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.logDeprecation = function (t) {
                var n = e.DEPRECATED_OPTS[t],
                  o = n.onlyRename,
                  r = n.replacement,
                  i = n.subOption,
                  a = n.link,
                  s = o ? "renamed" : "deprecated",
                  c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";
                if (r) {
                  c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.'
                }
                var l = "https://sweetalert.js.org";
                c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c)
              }, e.DEPRECATED_OPTS = {
                type: {
                  replacement: "icon",
                  link: "/docs/#icon"
                },
                imageUrl: {
                  replacement: "icon",
                  link: "/docs/#icon"
                },
                customClass: {
                  replacement: "className",
                  onlyRename: !0,
                  link: "/docs/#classname"
                },
                imageSize: {},
                showCancelButton: {
                  replacement: "buttons",
                  link: "/docs/#buttons"
                },
                showConfirmButton: {
                  replacement: "button",
                  link: "/docs/#button"
                },
                confirmButtonText: {
                  replacement: "button",
                  link: "/docs/#button"
                },
                confirmButtonColor: {},
                cancelButtonText: {
                  replacement: "buttons",
                  link: "/docs/#buttons"
                },
                closeOnConfirm: {
                  replacement: "button",
                  subOption: "closeModal",
                  link: "/docs/#button"
                },
                closeOnCancel: {
                  replacement: "buttons",
                  subOption: "closeModal",
                  link: "/docs/#buttons"
                },
                showLoaderOnConfirm: {
                  replacement: "buttons"
                },
                animation: {},
                inputType: {
                  replacement: "content",
                  link: "/docs/#content"
                },
                inputValue: {
                  replacement: "content",
                  link: "/docs/#content"
                },
                inputPlaceholder: {
                  replacement: "content",
                  link: "/docs/#content"
                },
                html: {
                  replacement: "content",
                  link: "/docs/#content"
                },
                allowEscapeKey: {
                  replacement: "closeOnEsc",
                  onlyRename: !0,
                  link: "/docs/#closeonesc"
                },
                allowClickOutside: {
                  replacement: "closeOnClickOutside",
                  onlyRename: !0,
                  link: "/docs/#closeonclickoutside"
                }
              }
            }])
          });
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__( /*! ./../../../assets/ghost-search/node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__( /*! ./../../../assets/ghost-search/node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").clearImmediate))

        /***/
      }),

    /***/
    "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
      /*!*********************************************************************************!*\
        !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
        \*********************************************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var runtime = (function (exports) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          exports.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}

          function GeneratorFunction() {}

          function GeneratorFunctionPrototype() {}

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          if (NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = GeneratorFunctionPrototype.prototype =
            Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] =
            GeneratorFunction.displayName = "GeneratorFunction";

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ?
              ctor === GeneratorFunction ||
              // For the native GeneratorFunction constructor, the best we can
              // do is to check its .name property.
              (ctor.displayName || ctor.name) === "GeneratorFunction" :
              false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          exports.awrap = function (arg) {
            return {
              __await: arg
            };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (value &&
                  typeof value === "object" &&
                  hasOwn.call(value, "__await")) {
                  return Promise.resolve(value.__await).then(function (value) {
                    invoke("next", value, resolve, reject);
                  }, function (err) {
                    invoke("throw", err, resolve, reject);
                  });
                }

                return Promise.resolve(value).then(function (unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration.
                  result.value = unwrapped;
                  resolve(result);
                }, function (error) {
                  // If a rejected Promise was yielded, throw the rejection back
                  // into the async generator function so it can be handled there.
                  return invoke("throw", error, resolve, reject);
                });
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise =
                // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise ? previousPromise.then(
                  callInvokeWithMethodAndArg,
                  // Avoid propagating failures to Promises returned by later
                  // invocations of the iterator.
                  callInvokeWithMethodAndArg
                ) : callInvokeWithMethodAndArg();
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };
          exports.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          exports.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList)
            );

            return exports.isGeneratorFunction(outerFn) ?
              iter // If outerFn is a generator, return the full iterator.
              :
              iter.next().then(function (result) {
                return result.done ? result.value : iter.next();
              });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;

                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);

                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done ?
                    GenStateCompleted :
                    GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done
                  };

                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }

          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method");
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;

              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;

              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }

            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          Gp[toStringTagSymbol] = "Generator";

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{
              tryLoc: "root"
            }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    }

                    next.value = undefined;
                    next.done = true;

                    return next;
                  };

                return next.next = next;
              }
            }

            // Return an iterator with no values.
            return {
              next: doneResult
            };
          }
          exports.values = values;

          function doneResult() {
            return {
              value: undefined,
              done: true
            };
          }

          Context.prototype = {
            constructor: Context,

            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = "next";
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (name.charAt(0) === "t" &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function () {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function (exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;

              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }

                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }

                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }

                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },

            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (finallyEntry &&
                (type === "break" ||
                  type === "continue") &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete: function (record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" ||
                record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            "catch": function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
            },

            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            }
          };

          // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.
          return exports;

        }(
          // If this script is executing as a CommonJS module, use module.exports
          // as the regeneratorRuntime namespace. Otherwise create a new empty
          // object. Either way, the resulting object will be used to initialize
          // the regeneratorRuntime variable at the top of this file.
          true ? module.exports : undefined
        ));

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          Function("r", "regeneratorRuntime = r")(runtime);
        }


        /***/
      }),

    /***/
    "./node_modules/@babel/runtime/regenerator/index.js":
      /*!**********************************************************!*\
        !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__( /*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


        /***/
      }),

    /***/
    "./node_modules/@tryghost/content-api/es/content-api.js":
      /*!**************************************************************!*\
        !*** ./node_modules/@tryghost/content-api/es/content-api.js ***!
        \**************************************************************/
      /*! exports provided: default */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */
        (function (process) {
          function createCommonjsModule(fn, module) {
            return module = {
              exports: {}
            }, fn(module, module.exports), module.exports;
          }

          var _global = createCommonjsModule(function (module) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
              window : typeof self != 'undefined' && self.Math == Math ? self
              // eslint-disable-next-line no-new-func
              :
              Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
          });

          var _core = createCommonjsModule(function (module) {
            var core = module.exports = {
              version: '2.6.5'
            };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
          });
          var _core_1 = _core.version;

          var _isObject = function (it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
          };

          var _anObject = function (it) {
            if (!_isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
          };

          var _fails = function (exec) {
            try {
              return !!exec();
            } catch (e) {
              return true;
            }
          };

          // Thank's IE8 for his funny defineProperty
          var _descriptors = !_fails(function () {
            return Object.defineProperty({}, 'a', {
              get: function () {
                return 7;
              }
            }).a != 7;
          });

          var document$1 = _global.document;
          // typeof document.createElement is 'object' in old IE
          var is = _isObject(document$1) && _isObject(document$1.createElement);
          var _domCreate = function (it) {
            return is ? document$1.createElement(it) : {};
          };

          var _ie8DomDefine = !_descriptors && !_fails(function () {
            return Object.defineProperty(_domCreate('div'), 'a', {
              get: function () {
                return 7;
              }
            }).a != 7;
          });

          // 7.1.1 ToPrimitive(input [, PreferredType])

          // instead of the ES6 spec version, we didn't implement @@toPrimitive case
          // and the second argument - flag - preferred type is a string
          var _toPrimitive = function (it, S) {
            if (!_isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
          };

          var dP = Object.defineProperty;

          var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            _anObject(O);
            P = _toPrimitive(P, true);
            _anObject(Attributes);
            if (_ie8DomDefine) try {
              return dP(O, P, Attributes);
            } catch (e) {
              /* empty */
            }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
          };

          var _objectDp = {
            f: f
          };

          var _propertyDesc = function (bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value: value
            };
          };

          var _hide = _descriptors ? function (object, key, value) {
            return _objectDp.f(object, key, _propertyDesc(1, value));
          } : function (object, key, value) {
            object[key] = value;
            return object;
          };

          var hasOwnProperty = {}.hasOwnProperty;
          var _has = function (it, key) {
            return hasOwnProperty.call(it, key);
          };

          var id = 0;
          var px = Math.random();
          var _uid = function (key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
          };

          var _library = false;

          var _shared = createCommonjsModule(function (module) {
            var SHARED = '__core-js_shared__';
            var store = _global[SHARED] || (_global[SHARED] = {});

            (module.exports = function (key, value) {
              return store[key] || (store[key] = value !== undefined ? value : {});
            })('versions', []).push({
              version: _core.version,
              mode: 'global',
              copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
            });
          });

          var _functionToString = _shared('native-function-to-string', Function.toString);

          var _redefine = createCommonjsModule(function (module) {
            var SRC = _uid('src');

            var TO_STRING = 'toString';
            var TPL = ('' + _functionToString).split(TO_STRING);

            _core.inspectSource = function (it) {
              return _functionToString.call(it);
            };

            (module.exports = function (O, key, val, safe) {
              var isFunction = typeof val == 'function';
              if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
              if (O[key] === val) return;
              if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
              if (O === _global) {
                O[key] = val;
              } else if (!safe) {
                delete O[key];
                _hide(O, key, val);
              } else if (O[key]) {
                O[key] = val;
              } else {
                _hide(O, key, val);
              }
              // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, TO_STRING, function toString() {
              return typeof this == 'function' && this[SRC] || _functionToString.call(this);
            });
          });

          var _aFunction = function (it) {
            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
            return it;
          };

          // optional / simple context binding

          var _ctx = function (fn, that, length) {
            _aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
              case 1:
                return function (a) {
                  return fn.call(that, a);
                };
              case 2:
                return function (a, b) {
                  return fn.call(that, a, b);
                };
              case 3:
                return function (a, b, c) {
                  return fn.call(that, a, b, c);
                };
            }
            return function ( /* ...args */ ) {
              return fn.apply(that, arguments);
            };
          };

          var PROTOTYPE = 'prototype';

          var $export = function (type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
            var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for (key in source) {
              // contains in native
              own = !IS_FORCED && target && target[key] !== undefined;
              // export native or passed
              out = (own ? target : source)[key];
              // bind timers to global for call from export context
              exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
              // extend global
              if (target) _redefine(target, key, out, type & $export.U);
              // export
              if (exports[key] != out) _hide(exports, key, exp);
              if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
          };
          _global.core = _core;
          // type bitmap
          $export.F = 1; // forced
          $export.G = 2; // global
          $export.S = 4; // static
          $export.P = 8; // proto
          $export.B = 16; // bind
          $export.W = 32; // wrap
          $export.U = 64; // safe
          $export.R = 128; // real proto method for `library`
          var _export = $export;

          var toString = {}.toString;

          var _cof = function (it) {
            return toString.call(it).slice(8, -1);
          };

          // fallback for non-array-like ES3 and non-enumerable old V8 strings

          // eslint-disable-next-line no-prototype-builtins
          var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
            return _cof(it) == 'String' ? it.split('') : Object(it);
          };

          // 7.2.1 RequireObjectCoercible(argument)
          var _defined = function (it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
          };

          // 7.1.13 ToObject(argument)

          var _toObject = function (it) {
            return Object(_defined(it));
          };

          // 7.1.4 ToInteger
          var ceil = Math.ceil;
          var floor = Math.floor;
          var _toInteger = function (it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
          };

          // 7.1.15 ToLength

          var min = Math.min;
          var _toLength = function (it) {
            return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
          };

          // 7.2.2 IsArray(argument)

          var _isArray = Array.isArray || function isArray(arg) {
            return _cof(arg) == 'Array';
          };

          var _wks = createCommonjsModule(function (module) {
            var store = _shared('wks');

            var Symbol = _global.Symbol;
            var USE_SYMBOL = typeof Symbol == 'function';

            var $exports = module.exports = function (name) {
              return store[name] || (store[name] =
                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
            };

            $exports.store = store;
          });

          var SPECIES = _wks('species');

          var _arraySpeciesConstructor = function (original) {
            var C;
            if (_isArray(original)) {
              C = original.constructor;
              // cross-realm fallback
              if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
              if (_isObject(C)) {
                C = C[SPECIES];
                if (C === null) C = undefined;
              }
            }
            return C === undefined ? Array : C;
          };

          // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


          var _arraySpeciesCreate = function (original, length) {
            return new(_arraySpeciesConstructor(original))(length);
          };

          // 0 -> Array#forEach
          // 1 -> Array#map
          // 2 -> Array#filter
          // 3 -> Array#some
          // 4 -> Array#every
          // 5 -> Array#find
          // 6 -> Array#findIndex





          var _arrayMethods = function (TYPE, $create) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            var create = $create || _arraySpeciesCreate;
            return function ($this, callbackfn, that) {
              var O = _toObject($this);
              var self = _iobject(O);
              var f = _ctx(callbackfn, that, 3);
              var length = _toLength(self.length);
              var index = 0;
              var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
              var val, res;
              for (; length > index; index++)
                if (NO_HOLES || index in self) {
                  val = self[index];
                  res = f(val, index, O);
                  if (TYPE) {
                    if (IS_MAP) result[index] = res; // map
                    else if (res) switch (TYPE) {
                      case 3:
                        return true; // some
                      case 5:
                        return val; // find
                      case 6:
                        return index; // findIndex
                      case 2:
                        result.push(val); // filter
                    } else if (IS_EVERY) return false; // every
                  }
                }
              return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
            };
          };

          var _strictMethod = function (method, arg) {
            return !!method && _fails(function () {
              // eslint-disable-next-line no-useless-call
              arg ? method.call(null, function () {
                /* empty */
              }, 1) : method.call(null);
            });
          };

          var $forEach = _arrayMethods(0);
          var STRICT = _strictMethod([].forEach, true);

          _export(_export.P + _export.F * !STRICT, 'Array', {
            // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
            forEach: function forEach(callbackfn /* , thisArg */ ) {
              return $forEach(this, callbackfn, arguments[1]);
            }
          });

          // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


          _export(_export.S, 'Array', {
            isArray: _isArray
          });

          // 22.1.3.31 Array.prototype[@@unscopables]
          var UNSCOPABLES = _wks('unscopables');
          var ArrayProto = Array.prototype;
          if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
          var _addToUnscopables = function (key) {
            ArrayProto[UNSCOPABLES][key] = true;
          };

          var _iterStep = function (done, value) {
            return {
              value: value,
              done: !!done
            };
          };

          var _iterators = {};

          // to indexed object, toObject with fallback for non-array-like ES3 strings


          var _toIobject = function (it) {
            return _iobject(_defined(it));
          };

          var max = Math.max;
          var min$1 = Math.min;
          var _toAbsoluteIndex = function (index, length) {
            index = _toInteger(index);
            return index < 0 ? max(index + length, 0) : min$1(index, length);
          };

          // false -> Array#indexOf
          // true  -> Array#includes



          var _arrayIncludes = function (IS_INCLUDES) {
            return function ($this, el, fromIndex) {
              var O = _toIobject($this);
              var length = _toLength(O.length);
              var index = _toAbsoluteIndex(fromIndex, length);
              var value;
              // Array#includes uses SameValueZero equality algorithm
              // eslint-disable-next-line no-self-compare
              if (IS_INCLUDES && el != el)
                while (length > index) {
                  value = O[index++];
                  // eslint-disable-next-line no-self-compare
                  if (value != value) return true;
                  // Array#indexOf ignores holes, Array#includes - not
                } else
                  for (; length > index; index++)
                    if (IS_INCLUDES || index in O) {
                      if (O[index] === el) return IS_INCLUDES || index || 0;
                    } return !IS_INCLUDES && -1;
            };
          };

          var shared = _shared('keys');

          var _sharedKey = function (key) {
            return shared[key] || (shared[key] = _uid(key));
          };

          var arrayIndexOf = _arrayIncludes(false);
          var IE_PROTO = _sharedKey('IE_PROTO');

          var _objectKeysInternal = function (object, names) {
            var O = _toIobject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O)
              if (key != IE_PROTO) _has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            while (names.length > i)
              if (_has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
              }
            return result;
          };

          // IE 8- don't enum bug keys
          var _enumBugKeys = (
            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
          ).split(',');

          // 19.1.2.14 / 15.2.3.14 Object.keys(O)



          var _objectKeys = Object.keys || function keys(O) {
            return _objectKeysInternal(O, _enumBugKeys);
          };

          var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
            _anObject(O);
            var keys = _objectKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
            return O;
          };

          var document$2 = _global.document;
          var _html = document$2 && document$2.documentElement;

          // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



          var IE_PROTO$1 = _sharedKey('IE_PROTO');
          var Empty = function () {
            /* empty */
          };
          var PROTOTYPE$1 = 'prototype';

          // Create object with fake `null` prototype: use iframe Object with cleared prototype
          var createDict = function () {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = _domCreate('iframe');
            var i = _enumBugKeys.length;
            var lt = '<';
            var gt = '>';
            var iframeDocument;
            iframe.style.display = 'none';
            _html.appendChild(iframe);
            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
            return createDict();
          };

          var _objectCreate = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
              Empty[PROTOTYPE$1] = _anObject(O);
              result = new Empty();
              Empty[PROTOTYPE$1] = null;
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO$1] = O;
            } else result = createDict();
            return Properties === undefined ? result : _objectDps(result, Properties);
          };

          var def = _objectDp.f;

          var TAG = _wks('toStringTag');

          var _setToStringTag = function (it, tag, stat) {
            if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
              configurable: true,
              value: tag
            });
          };

          var IteratorPrototype = {};

          // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
          _hide(IteratorPrototype, _wks('iterator'), function () {
            return this;
          });

          var _iterCreate = function (Constructor, NAME, next) {
            Constructor.prototype = _objectCreate(IteratorPrototype, {
              next: _propertyDesc(1, next)
            });
            _setToStringTag(Constructor, NAME + ' Iterator');
          };

          // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


          var IE_PROTO$2 = _sharedKey('IE_PROTO');
          var ObjectProto = Object.prototype;

          var _objectGpo = Object.getPrototypeOf || function (O) {
            O = _toObject(O);
            if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
              return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
          };

          var ITERATOR = _wks('iterator');
          var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
          var FF_ITERATOR = '@@iterator';
          var KEYS = 'keys';
          var VALUES = 'values';

          var returnThis = function () {
            return this;
          };

          var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            _iterCreate(Constructor, NAME, next);
            var getMethod = function (kind) {
              if (!BUGGY && kind in proto) return proto[kind];
              switch (kind) {
                case KEYS:
                  return function keys() {
                    return new Constructor(this, kind);
                  };
                case VALUES:
                  return function values() {
                    return new Constructor(this, kind);
                  };
              }
              return function entries() {
                return new Constructor(this, kind);
              };
            };
            var TAG = NAME + ' Iterator';
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
            var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
              IteratorPrototype = _objectGpo($anyNative.call(new Base()));
              if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                // Set @@toStringTag to native iterators
                _setToStringTag(IteratorPrototype, TAG, true);
                // fix for some old engines
                if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
              }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
              VALUES_BUG = true;
              $default = function values() {
                return $native.call(this);
              };
            }
            // Define iterator
            if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
              _hide(proto, ITERATOR, $default);
            }
            // Plug for library
            _iterators[NAME] = $default;
            _iterators[TAG] = returnThis;
            if (DEFAULT) {
              methods = {
                values: DEF_VALUES ? $default : getMethod(VALUES),
                keys: IS_SET ? $default : getMethod(KEYS),
                entries: $entries
              };
              if (FORCED)
                for (key in methods) {
                  if (!(key in proto)) _redefine(proto, key, methods[key]);
                } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
          };

          // 22.1.3.4 Array.prototype.entries()
          // 22.1.3.13 Array.prototype.keys()
          // 22.1.3.29 Array.prototype.values()
          // 22.1.3.30 Array.prototype[@@iterator]()
          var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
            this._t = _toIobject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
          }, function () {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
              this._t = undefined;
              return _iterStep(1);
            }
            if (kind == 'keys') return _iterStep(0, index);
            if (kind == 'values') return _iterStep(0, O[index]);
            return _iterStep(0, [index, O[index]]);
          }, 'values');

          // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
          _iterators.Arguments = _iterators.Array;

          _addToUnscopables('keys');
          _addToUnscopables('values');
          _addToUnscopables('entries');

          var ITERATOR$1 = _wks('iterator');
          var TO_STRING_TAG = _wks('toStringTag');
          var ArrayValues = _iterators.Array;

          var DOMIterables = {
            CSSRuleList: true, // TODO: Not spec compliant, should be false.
            CSSStyleDeclaration: false,
            CSSValueList: false,
            ClientRectList: false,
            DOMRectList: false,
            DOMStringList: false,
            DOMTokenList: true,
            DataTransferItemList: false,
            FileList: false,
            HTMLAllCollection: false,
            HTMLCollection: false,
            HTMLFormElement: false,
            HTMLSelectElement: false,
            MediaList: true, // TODO: Not spec compliant, should be false.
            MimeTypeArray: false,
            NamedNodeMap: false,
            NodeList: true,
            PaintRequestList: false,
            Plugin: false,
            PluginArray: false,
            SVGLengthList: false,
            SVGNumberList: false,
            SVGPathSegList: false,
            SVGPointList: false,
            SVGStringList: false,
            SVGTransformList: false,
            SourceBufferList: false,
            StyleSheetList: true, // TODO: Not spec compliant, should be false.
            TextTrackCueList: false,
            TextTrackList: false,
            TouchList: false
          };

          for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
            var NAME = collections[i];
            var explicit = DOMIterables[NAME];
            var Collection = _global[NAME];
            var proto = Collection && Collection.prototype;
            var key;
            if (proto) {
              if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
              if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
              _iterators[NAME] = ArrayValues;
              if (explicit)
                for (key in es6_array_iterator)
                  if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
            }
          }

          // most Object methods by ES6 should accept primitives



          var _objectSap = function (KEY, exec) {
            var fn = (_core.Object || {})[KEY] || Object[KEY];
            var exp = {};
            exp[KEY] = exec(fn);
            _export(_export.S + _export.F * _fails(function () {
              fn(1);
            }), 'Object', exp);
          };

          // 19.1.2.14 Object.keys(O)



          _objectSap('keys', function () {
            return function keys(it) {
              return _objectKeys(_toObject(it));
            };
          });

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }

            return obj;
          }

          var f$1 = Object.getOwnPropertySymbols;

          var _objectGops = {
            f: f$1
          };

          var f$2 = {}.propertyIsEnumerable;

          var _objectPie = {
            f: f$2
          };

          // 19.1.2.1 Object.assign(target, source, ...)





          var $assign = Object.assign;

          // should work with symbols and should have deterministic property order (V8 bug)
          var _objectAssign = !$assign || _fails(function () {
            var A = {};
            var B = {};
            // eslint-disable-next-line no-undef
            var S = Symbol();
            var K = 'abcdefghijklmnopqrst';
            A[S] = 7;
            K.split('').forEach(function (k) {
              B[k] = k;
            });
            return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
          }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
            var T = _toObject(target);
            var aLen = arguments.length;
            var index = 1;
            var getSymbols = _objectGops.f;
            var isEnum = _objectPie.f;
            while (aLen > index) {
              var S = _iobject(arguments[index++]);
              var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
              var length = keys.length;
              var j = 0;
              var key;
              while (length > j)
                if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
            }
            return T;
          } : $assign;

          // 19.1.3.1 Object.assign(target, source)


          _export(_export.S + _export.F, 'Object', {
            assign: _objectAssign
          });

          // getting tag from 19.1.3.6 Object.prototype.toString()

          var TAG$1 = _wks('toStringTag');
          // ES3 wrong here
          var ARG = _cof(function () {
            return arguments;
          }()) == 'Arguments';

          // fallback for IE11 Script Access Denied error
          var tryGet = function (it, key) {
            try {
              return it[key];
            } catch (e) {
              /* empty */
            }
          };

          var _classof = function (it) {
            var O, T, B;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
              // @@toStringTag case
              :
              typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
              // builtinTag case
              :
              ARG ? _cof(O)
              // ES3 arguments fallback
              :
              (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
          };

          var _anInstance = function (it, Constructor, name, forbiddenField) {
            if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
              throw TypeError(name + ': incorrect invocation!');
            }
            return it;
          };

          // call something on iterator step with safe closing on error

          var _iterCall = function (iterator, fn, value, entries) {
            try {
              return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
              // 7.4.6 IteratorClose(iterator, completion)
            } catch (e) {
              var ret = iterator['return'];
              if (ret !== undefined) _anObject(ret.call(iterator));
              throw e;
            }
          };

          // check on default Array iterator

          var ITERATOR$2 = _wks('iterator');
          var ArrayProto$1 = Array.prototype;

          var _isArrayIter = function (it) {
            return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
          };

          var ITERATOR$3 = _wks('iterator');

          var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
            if (it != undefined) return it[ITERATOR$3] ||
              it['@@iterator'] ||
              _iterators[_classof(it)];
          };

          var _forOf = createCommonjsModule(function (module) {
            var BREAK = {};
            var RETURN = {};
            var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
              var iterFn = ITERATOR ? function () {
                return iterable;
              } : core_getIteratorMethod(iterable);
              var f = _ctx(fn, that, entries ? 2 : 1);
              var index = 0;
              var length, step, iterator, result;
              if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
              // fast case for arrays with default iterator
              if (_isArrayIter(iterFn))
                for (length = _toLength(iterable.length); length > index; index++) {
                  result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                  if (result === BREAK || result === RETURN) return result;
                } else
                  for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                    result = _iterCall(iterator, f, step.value, entries);
                    if (result === BREAK || result === RETURN) return result;
                  }
            };
            exports.BREAK = BREAK;
            exports.RETURN = RETURN;
          });

          // 7.3.20 SpeciesConstructor(O, defaultConstructor)


          var SPECIES$1 = _wks('species');
          var _speciesConstructor = function (O, D) {
            var C = _anObject(O).constructor;
            var S;
            return C === undefined || (S = _anObject(C)[SPECIES$1]) == undefined ? D : _aFunction(S);
          };

          // fast apply, http://jsperf.lnkit.com/fast-apply/5
          var _invoke = function (fn, args, that) {
            var un = that === undefined;
            switch (args.length) {
              case 0:
                return un ? fn() :
                  fn.call(that);
              case 1:
                return un ? fn(args[0]) :
                  fn.call(that, args[0]);
              case 2:
                return un ? fn(args[0], args[1]) :
                  fn.call(that, args[0], args[1]);
              case 3:
                return un ? fn(args[0], args[1], args[2]) :
                  fn.call(that, args[0], args[1], args[2]);
              case 4:
                return un ? fn(args[0], args[1], args[2], args[3]) :
                  fn.call(that, args[0], args[1], args[2], args[3]);
            }
            return fn.apply(that, args);
          };

          var process$1 = _global.process;
          var setTask = _global.setImmediate;
          var clearTask = _global.clearImmediate;
          var MessageChannel = _global.MessageChannel;
          var Dispatch = _global.Dispatch;
          var counter = 0;
          var queue = {};
          var ONREADYSTATECHANGE = 'onreadystatechange';
          var defer, channel, port;
          var run = function () {
            var id = +this;
            // eslint-disable-next-line no-prototype-builtins
            if (queue.hasOwnProperty(id)) {
              var fn = queue[id];
              delete queue[id];
              fn();
            }
          };
          var listener = function (event) {
            run.call(event.data);
          };
          // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
          if (!setTask || !clearTask) {
            setTask = function setImmediate(fn) {
              var args = [];
              var i = 1;
              while (arguments.length > i) args.push(arguments[i++]);
              queue[++counter] = function () {
                // eslint-disable-next-line no-new-func
                _invoke(typeof fn == 'function' ? fn : Function(fn), args);
              };
              defer(counter);
              return counter;
            };
            clearTask = function clearImmediate(id) {
              delete queue[id];
            };
            // Node.js 0.8-
            if (_cof(process$1) == 'process') {
              defer = function (id) {
                process$1.nextTick(_ctx(run, id, 1));
              };
              // Sphere (JS game engine) Dispatch API
            } else if (Dispatch && Dispatch.now) {
              defer = function (id) {
                Dispatch.now(_ctx(run, id, 1));
              };
              // Browsers with MessageChannel, includes WebWorkers
            } else if (MessageChannel) {
              channel = new MessageChannel();
              port = channel.port2;
              channel.port1.onmessage = listener;
              defer = _ctx(port.postMessage, port, 1);
              // Browsers with postMessage, skip WebWorkers
              // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
              defer = function (id) {
                _global.postMessage(id + '', '*');
              };
              _global.addEventListener('message', listener, false);
              // IE8-
            } else if (ONREADYSTATECHANGE in _domCreate('script')) {
              defer = function (id) {
                _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
                  _html.removeChild(this);
                  run.call(id);
                };
              };
              // Rest old browsers
            } else {
              defer = function (id) {
                setTimeout(_ctx(run, id, 1), 0);
              };
            }
          }
          var _task = {
            set: setTask,
            clear: clearTask
          };

          var macrotask = _task.set;
          var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
          var process$2 = _global.process;
          var Promise$1 = _global.Promise;
          var isNode = _cof(process$2) == 'process';

          var _microtask = function () {
            var head, last, notify;

            var flush = function () {
              var parent, fn;
              if (isNode && (parent = process$2.domain)) parent.exit();
              while (head) {
                fn = head.fn;
                head = head.next;
                try {
                  fn();
                } catch (e) {
                  if (head) notify();
                  else last = undefined;
                  throw e;
                }
              }
              last = undefined;
              if (parent) parent.enter();
            };

            // Node.js
            if (isNode) {
              notify = function () {
                process$2.nextTick(flush);
              };
              // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
            } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
              var toggle = true;
              var node = document.createTextNode('');
              new Observer(flush).observe(node, {
                characterData: true
              }); // eslint-disable-line no-new
              notify = function () {
                node.data = toggle = !toggle;
              };
              // environments with maybe non-completely correct, but existent Promise
            } else if (Promise$1 && Promise$1.resolve) {
              // Promise.resolve without an argument throws an error in LG WebOS 2
              var promise = Promise$1.resolve(undefined);
              notify = function () {
                promise.then(flush);
              };
              // for other environments - macrotask based on:
              // - setImmediate
              // - MessageChannel
              // - window.postMessag
              // - onreadystatechange
              // - setTimeout
            } else {
              notify = function () {
                // strange IE + webpack dev server bug - use .call(global)
                macrotask.call(_global, flush);
              };
            }

            return function (fn) {
              var task = {
                fn: fn,
                next: undefined
              };
              if (last) last.next = task;
              if (!head) {
                head = task;
                notify();
              }
              last = task;
            };
          };

          // 25.4.1.5 NewPromiseCapability(C)


          function PromiseCapability(C) {
            var resolve, reject;
            this.promise = new C(function ($$resolve, $$reject) {
              if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
              resolve = $$resolve;
              reject = $$reject;
            });
            this.resolve = _aFunction(resolve);
            this.reject = _aFunction(reject);
          }

          var f$3 = function (C) {
            return new PromiseCapability(C);
          };

          var _newPromiseCapability = {
            f: f$3
          };

          var _perform = function (exec) {
            try {
              return {
                e: false,
                v: exec()
              };
            } catch (e) {
              return {
                e: true,
                v: e
              };
            }
          };

          var navigator$1 = _global.navigator;

          var _userAgent = navigator$1 && navigator$1.userAgent || '';

          var _promiseResolve = function (C, x) {
            _anObject(C);
            if (_isObject(x) && x.constructor === C) return x;
            var promiseCapability = _newPromiseCapability.f(C);
            var resolve = promiseCapability.resolve;
            resolve(x);
            return promiseCapability.promise;
          };

          var _redefineAll = function (target, src, safe) {
            for (var key in src) _redefine(target, key, src[key], safe);
            return target;
          };

          var SPECIES$2 = _wks('species');

          var _setSpecies = function (KEY) {
            var C = _global[KEY];
            if (_descriptors && C && !C[SPECIES$2]) _objectDp.f(C, SPECIES$2, {
              configurable: true,
              get: function () {
                return this;
              }
            });
          };

          var ITERATOR$4 = _wks('iterator');
          var SAFE_CLOSING = false;

          try {
            var riter = [7][ITERATOR$4]();
            riter['return'] = function () {
              SAFE_CLOSING = true;
            };
          } catch (e) {
            /* empty */
          }

          var _iterDetect = function (exec, skipClosing) {
            if (!skipClosing && !SAFE_CLOSING) return false;
            var safe = false;
            try {
              var arr = [7];
              var iter = arr[ITERATOR$4]();
              iter.next = function () {
                return {
                  done: safe = true
                };
              };
              arr[ITERATOR$4] = function () {
                return iter;
              };
              exec(arr);
            } catch (e) {
              /* empty */
            }
            return safe;
          };

          var task = _task.set;
          var microtask = _microtask();




          var PROMISE = 'Promise';
          var TypeError$1 = _global.TypeError;
          var process$3 = _global.process;
          var versions = process$3 && process$3.versions;
          var v8 = versions && versions.v8 || '';
          var $Promise = _global[PROMISE];
          var isNode$1 = _classof(process$3) == 'process';
          var empty = function () {
            /* empty */
          };
          var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
          var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

          var USE_NATIVE = !! function () {
            try {
              // correct subclassing with @@species support
              var promise = $Promise.resolve(1);
              var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
                exec(empty, empty);
              };
              // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
              return (isNode$1 || typeof PromiseRejectionEvent == 'function') &&
                promise.then(empty) instanceof FakePromise
                // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
                // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
                // we can't detect it synchronously, so just check versions
                &&
                v8.indexOf('6.6') !== 0 &&
                _userAgent.indexOf('Chrome/66') === -1;
            } catch (e) {
              /* empty */
            }
          }();

          // helpers
          var isThenable = function (it) {
            var then;
            return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
          };
          var notify = function (promise, isReject) {
            if (promise._n) return;
            promise._n = true;
            var chain = promise._c;
            microtask(function () {
              var value = promise._v;
              var ok = promise._s == 1;
              var i = 0;
              var run = function (reaction) {
                var handler = ok ? reaction.ok : reaction.fail;
                var resolve = reaction.resolve;
                var reject = reaction.reject;
                var domain = reaction.domain;
                var result, then, exited;
                try {
                  if (handler) {
                    if (!ok) {
                      if (promise._h == 2) onHandleUnhandled(promise);
                      promise._h = 1;
                    }
                    if (handler === true) result = value;
                    else {
                      if (domain) domain.enter();
                      result = handler(value); // may throw
                      if (domain) {
                        domain.exit();
                        exited = true;
                      }
                    }
                    if (result === reaction.promise) {
                      reject(TypeError$1('Promise-chain cycle'));
                    } else if (then = isThenable(result)) {
                      then.call(result, resolve, reject);
                    } else resolve(result);
                  } else reject(value);
                } catch (e) {
                  if (domain && !exited) domain.exit();
                  reject(e);
                }
              };
              while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
              promise._c = [];
              promise._n = false;
              if (isReject && !promise._h) onUnhandled(promise);
            });
          };
          var onUnhandled = function (promise) {
            task.call(_global, function () {
              var value = promise._v;
              var unhandled = isUnhandled(promise);
              var result, handler, console;
              if (unhandled) {
                result = _perform(function () {
                  if (isNode$1) {
                    process$3.emit('unhandledRejection', value, promise);
                  } else if (handler = _global.onunhandledrejection) {
                    handler({
                      promise: promise,
                      reason: value
                    });
                  } else if ((console = _global.console) && console.error) {
                    console.error('Unhandled promise rejection', value);
                  }
                });
                // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
              }
              promise._a = undefined;
              if (unhandled && result.e) throw result.v;
            });
          };
          var isUnhandled = function (promise) {
            return promise._h !== 1 && (promise._a || promise._c).length === 0;
          };
          var onHandleUnhandled = function (promise) {
            task.call(_global, function () {
              var handler;
              if (isNode$1) {
                process$3.emit('rejectionHandled', promise);
              } else if (handler = _global.onrejectionhandled) {
                handler({
                  promise: promise,
                  reason: promise._v
                });
              }
            });
          };
          var $reject = function (value) {
            var promise = this;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            promise._v = value;
            promise._s = 2;
            if (!promise._a) promise._a = promise._c.slice();
            notify(promise, true);
          };
          var $resolve = function (value) {
            var promise = this;
            var then;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            try {
              if (promise === value) throw TypeError$1("Promise can't be resolved itself");
              if (then = isThenable(value)) {
                microtask(function () {
                  var wrapper = {
                    _w: promise,
                    _d: false
                  }; // wrap
                  try {
                    then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
                  } catch (e) {
                    $reject.call(wrapper, e);
                  }
                });
              } else {
                promise._v = value;
                promise._s = 1;
                notify(promise, false);
              }
            } catch (e) {
              $reject.call({
                _w: promise,
                _d: false
              }, e); // wrap
            }
          };

          // constructor polyfill
          if (!USE_NATIVE) {
            // 25.4.3.1 Promise(executor)
            $Promise = function Promise(executor) {
              _anInstance(this, $Promise, PROMISE, '_h');
              _aFunction(executor);
              Internal.call(this);
              try {
                executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
              } catch (err) {
                $reject.call(this, err);
              }
            };
            // eslint-disable-next-line no-unused-vars
            Internal = function Promise(executor) {
              this._c = []; // <- awaiting reactions
              this._a = undefined; // <- checked in isUnhandled reactions
              this._s = 0; // <- state
              this._d = false; // <- done
              this._v = undefined; // <- value
              this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
              this._n = false; // <- notify
            };
            Internal.prototype = _redefineAll($Promise.prototype, {
              // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
              then: function then(onFulfilled, onRejected) {
                var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
                reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                reaction.fail = typeof onRejected == 'function' && onRejected;
                reaction.domain = isNode$1 ? process$3.domain : undefined;
                this._c.push(reaction);
                if (this._a) this._a.push(reaction);
                if (this._s) notify(this, false);
                return reaction.promise;
              },
              // 25.4.5.1 Promise.prototype.catch(onRejected)
              'catch': function (onRejected) {
                return this.then(undefined, onRejected);
              }
            });
            OwnPromiseCapability = function () {
              var promise = new Internal();
              this.promise = promise;
              this.resolve = _ctx($resolve, promise, 1);
              this.reject = _ctx($reject, promise, 1);
            };
            _newPromiseCapability.f = newPromiseCapability = function (C) {
              return C === $Promise || C === Wrapper ?
                new OwnPromiseCapability(C) :
                newGenericPromiseCapability(C);
            };
          }

          _export(_export.G + _export.W + _export.F * !USE_NATIVE, {
            Promise: $Promise
          });
          _setToStringTag($Promise, PROMISE);
          _setSpecies(PROMISE);
          Wrapper = _core[PROMISE];

          // statics
          _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
            // 25.4.4.5 Promise.reject(r)
            reject: function reject(r) {
              var capability = newPromiseCapability(this);
              var $$reject = capability.reject;
              $$reject(r);
              return capability.promise;
            }
          });
          _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
            // 25.4.4.6 Promise.resolve(x)
            resolve: function resolve(x) {
              return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
            }
          });
          _export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
            $Promise.all(iter)['catch'](empty);
          })), PROMISE, {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = _perform(function () {
                var values = [];
                var index = 0;
                var remaining = 1;
                _forOf(iterable, false, function (promise) {
                  var $index = index++;
                  var alreadyCalled = false;
                  values.push(undefined);
                  remaining++;
                  C.resolve(promise).then(function (value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.e) reject(result.v);
              return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var reject = capability.reject;
              var result = _perform(function () {
                _forOf(iterable, false, function (promise) {
                  C.resolve(promise).then(capability.resolve, reject);
                });
              });
              if (result.e) reject(result.v);
              return capability.promise;
            }
          });

          var _arrayReduce = function (that, callbackfn, aLen, memo, isRight) {
            _aFunction(callbackfn);
            var O = _toObject(that);
            var self = _iobject(O);
            var length = _toLength(O.length);
            var index = isRight ? length - 1 : 0;
            var i = isRight ? -1 : 1;
            if (aLen < 2)
              for (;;) {
                if (index in self) {
                  memo = self[index];
                  index += i;
                  break;
                }
                index += i;
                if (isRight ? index < 0 : length <= index) {
                  throw TypeError('Reduce of empty array with no initial value');
                }
              }
            for (; isRight ? index >= 0 : length > index; index += i)
              if (index in self) {
                memo = callbackfn(memo, self[index], index, O);
              }
            return memo;
          };

          _export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
            // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
            reduce: function reduce(callbackfn /* , initialValue */ ) {
              return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
            }
          });

          // 7.2.8 IsRegExp(argument)


          var MATCH = _wks('match');
          var _isRegexp = function (it) {
            var isRegExp;
            return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
          };

          // helper for String#{startsWith, endsWith, includes}



          var _stringContext = function (that, searchString, NAME) {
            if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
            return String(_defined(that));
          };

          var MATCH$1 = _wks('match');
          var _failsIsRegexp = function (KEY) {
            var re = /./;
            try {
              '/./' [KEY](re);
            } catch (e) {
              try {
                re[MATCH$1] = false;
                return !'/./' [KEY](re);
              } catch (f) {
                /* empty */
              }
            }
            return true;
          };

          var STARTS_WITH = 'startsWith';
          var $startsWith = '' [STARTS_WITH];

          _export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
            startsWith: function startsWith(searchString /* , position = 0 */ ) {
              var that = _stringContext(this, searchString, STARTS_WITH);
              var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
              var search = String(searchString);
              return $startsWith ?
                $startsWith.call(that, search, index) :
                that.slice(index, index + search.length) === search;
            }
          });

          var ENDS_WITH = 'endsWith';
          var $endsWith = '' [ENDS_WITH];

          _export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
            endsWith: function endsWith(searchString /* , endPosition = @length */ ) {
              var that = _stringContext(this, searchString, ENDS_WITH);
              var endPosition = arguments.length > 1 ? arguments[1] : undefined;
              var len = _toLength(that.length);
              var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
              var search = String(searchString);
              return $endsWith ?
                $endsWith.call(that, search, end) :
                that.slice(end - search.length, end) === search;
            }
          });

          // https://github.com/tc39/Array.prototype.includes

          var $includes = _arrayIncludes(true);

          _export(_export.P, 'Array', {
            includes: function includes(el /* , fromIndex = 0 */ ) {
              return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
            }
          });

          _addToUnscopables('includes');

          var bind = function bind(fn, thisArg) {
            return function wrap() {
              var args = new Array(arguments.length);
              for (var i = 0; i < args.length; i++) {
                args[i] = arguments[i];
              }
              return fn.apply(thisArg, args);
            };
          };

          /*!
           * Determine if an object is a Buffer
           *
           * @author   Feross Aboukhadijeh <https://feross.org>
           * @license  MIT
           */

          // The _isBuffer check is for Safari 5-7 support, because it's missing
          // Object.prototype.constructor. Remove this eventually
          var isBuffer_1 = function (obj) {
            return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
          };

          function isBuffer(obj) {
            return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
          }

          // For Node v0.10 support. Remove this eventually.
          function isSlowBuffer(obj) {
            return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
          }

          /*global toString:true*/

          // utils is a library of generic helper functions non-specific to axios

          var toString$1 = Object.prototype.toString;

          /**
           * Determine if a value is an Array
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is an Array, otherwise false
           */
          function isArray(val) {
            return toString$1.call(val) === '[object Array]';
          }

          /**
           * Determine if a value is an ArrayBuffer
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is an ArrayBuffer, otherwise false
           */
          function isArrayBuffer(val) {
            return toString$1.call(val) === '[object ArrayBuffer]';
          }

          /**
           * Determine if a value is a FormData
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is an FormData, otherwise false
           */
          function isFormData(val) {
            return (typeof FormData !== 'undefined') && (val instanceof FormData);
          }

          /**
           * Determine if a value is a view on an ArrayBuffer
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
           */
          function isArrayBufferView(val) {
            var result;
            if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
              result = ArrayBuffer.isView(val);
            } else {
              result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
            }
            return result;
          }

          /**
           * Determine if a value is a String
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a String, otherwise false
           */
          function isString(val) {
            return typeof val === 'string';
          }

          /**
           * Determine if a value is a Number
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a Number, otherwise false
           */
          function isNumber(val) {
            return typeof val === 'number';
          }

          /**
           * Determine if a value is undefined
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if the value is undefined, otherwise false
           */
          function isUndefined(val) {
            return typeof val === 'undefined';
          }

          /**
           * Determine if a value is an Object
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is an Object, otherwise false
           */
          function isObject(val) {
            return val !== null && typeof val === 'object';
          }

          /**
           * Determine if a value is a Date
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a Date, otherwise false
           */
          function isDate(val) {
            return toString$1.call(val) === '[object Date]';
          }

          /**
           * Determine if a value is a File
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a File, otherwise false
           */
          function isFile(val) {
            return toString$1.call(val) === '[object File]';
          }

          /**
           * Determine if a value is a Blob
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a Blob, otherwise false
           */
          function isBlob(val) {
            return toString$1.call(val) === '[object Blob]';
          }

          /**
           * Determine if a value is a Function
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a Function, otherwise false
           */
          function isFunction(val) {
            return toString$1.call(val) === '[object Function]';
          }

          /**
           * Determine if a value is a Stream
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a Stream, otherwise false
           */
          function isStream(val) {
            return isObject(val) && isFunction(val.pipe);
          }

          /**
           * Determine if a value is a URLSearchParams object
           *
           * @param {Object} val The value to test
           * @returns {boolean} True if value is a URLSearchParams object, otherwise false
           */
          function isURLSearchParams(val) {
            return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
          }

          /**
           * Trim excess whitespace off the beginning and end of a string
           *
           * @param {String} str The String to trim
           * @returns {String} The String freed of excess whitespace
           */
          function trim(str) {
            return str.replace(/^\s*/, '').replace(/\s*$/, '');
          }

          /**
           * Determine if we're running in a standard browser environment
           *
           * This allows axios to run in a web worker, and react-native.
           * Both environments support XMLHttpRequest, but not fully standard globals.
           *
           * web workers:
           *  typeof window -> undefined
           *  typeof document -> undefined
           *
           * react-native:
           *  navigator.product -> 'ReactNative'
           */
          function isStandardBrowserEnv() {
            if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
              return false;
            }
            return (
              typeof window !== 'undefined' &&
              typeof document !== 'undefined'
            );
          }

          /**
           * Iterate over an Array or an Object invoking a function for each item.
           *
           * If `obj` is an Array callback will be called passing
           * the value, index, and complete array for each item.
           *
           * If 'obj' is an Object callback will be called passing
           * the value, key, and complete object for each property.
           *
           * @param {Object|Array} obj The object to iterate
           * @param {Function} fn The callback to invoke for each item
           */
          function forEach(obj, fn) {
            // Don't bother if no value provided
            if (obj === null || typeof obj === 'undefined') {
              return;
            }

            // Force an array if not already something iterable
            if (typeof obj !== 'object') {
              /*eslint no-param-reassign:0*/
              obj = [obj];
            }

            if (isArray(obj)) {
              // Iterate over array values
              for (var i = 0, l = obj.length; i < l; i++) {
                fn.call(null, obj[i], i, obj);
              }
            } else {
              // Iterate over object keys
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  fn.call(null, obj[key], key, obj);
                }
              }
            }
          }

          /**
           * Accepts varargs expecting each argument to be an object, then
           * immutably merges the properties of each object and returns result.
           *
           * When multiple objects contain the same key the later object in
           * the arguments list will take precedence.
           *
           * Example:
           *
           * ```js
           * var result = merge({foo: 123}, {foo: 456});
           * console.log(result.foo); // outputs 456
           * ```
           *
           * @param {Object} obj1 Object to merge
           * @returns {Object} Result of all merge properties
           */
          function merge( /* obj1, obj2, obj3, ... */ ) {
            var result = {};

            function assignValue(val, key) {
              if (typeof result[key] === 'object' && typeof val === 'object') {
                result[key] = merge(result[key], val);
              } else {
                result[key] = val;
              }
            }

            for (var i = 0, l = arguments.length; i < l; i++) {
              forEach(arguments[i], assignValue);
            }
            return result;
          }

          /**
           * Extends object a by mutably adding to it the properties of object b.
           *
           * @param {Object} a The object to be extended
           * @param {Object} b The object to copy properties from
           * @param {Object} thisArg The object to bind function to
           * @return {Object} The resulting value of object a
           */
          function extend(a, b, thisArg) {
            forEach(b, function assignValue(val, key) {
              if (thisArg && typeof val === 'function') {
                a[key] = bind(val, thisArg);
              } else {
                a[key] = val;
              }
            });
            return a;
          }

          var utils = {
            isArray: isArray,
            isArrayBuffer: isArrayBuffer,
            isBuffer: isBuffer_1,
            isFormData: isFormData,
            isArrayBufferView: isArrayBufferView,
            isString: isString,
            isNumber: isNumber,
            isObject: isObject,
            isUndefined: isUndefined,
            isDate: isDate,
            isFile: isFile,
            isBlob: isBlob,
            isFunction: isFunction,
            isStream: isStream,
            isURLSearchParams: isURLSearchParams,
            isStandardBrowserEnv: isStandardBrowserEnv,
            forEach: forEach,
            merge: merge,
            extend: extend,
            trim: trim
          };

          var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
            utils.forEach(headers, function processHeader(value, name) {
              if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                headers[normalizedName] = value;
                delete headers[name];
              }
            });
          };

          /**
           * Update an Error with the specified config, error code, and response.
           *
           * @param {Error} error The error to update.
           * @param {Object} config The config.
           * @param {string} [code] The error code (for example, 'ECONNABORTED').
           * @param {Object} [request] The request.
           * @param {Object} [response] The response.
           * @returns {Error} The error.
           */
          var enhanceError = function enhanceError(error, config, code, request, response) {
            error.config = config;
            if (code) {
              error.code = code;
            }
            error.request = request;
            error.response = response;
            return error;
          };

          /**
           * Create an Error with the specified message, config, error code, request and response.
           *
           * @param {string} message The error message.
           * @param {Object} config The config.
           * @param {string} [code] The error code (for example, 'ECONNABORTED').
           * @param {Object} [request] The request.
           * @param {Object} [response] The response.
           * @returns {Error} The created error.
           */
          var createError = function createError(message, config, code, request, response) {
            var error = new Error(message);
            return enhanceError(error, config, code, request, response);
          };

          /**
           * Resolve or reject a Promise based on response status.
           *
           * @param {Function} resolve A function that resolves the promise.
           * @param {Function} reject A function that rejects the promise.
           * @param {object} response The response.
           */
          var settle = function settle(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            // Note: status is not exposed by XDomainRequest
            if (!response.status || !validateStatus || validateStatus(response.status)) {
              resolve(response);
            } else {
              reject(createError(
                'Request failed with status code ' + response.status,
                response.config,
                null,
                response.request,
                response
              ));
            }
          };

          function encode(val) {
            return encodeURIComponent(val).
            replace(/%40/gi, '@').
            replace(/%3A/gi, ':').
            replace(/%24/g, '$').
            replace(/%2C/gi, ',').
            replace(/%20/g, '+').
            replace(/%5B/gi, '[').
            replace(/%5D/gi, ']');
          }

          /**
           * Build a URL by appending params to the end
           *
           * @param {string} url The base of the url (e.g., http://www.google.com)
           * @param {object} [params] The params to be appended
           * @returns {string} The formatted url
           */
          var buildURL = function buildURL(url, params, paramsSerializer) {
            /*eslint no-param-reassign:0*/
            if (!params) {
              return url;
            }

            var serializedParams;
            if (paramsSerializer) {
              serializedParams = paramsSerializer(params);
            } else if (utils.isURLSearchParams(params)) {
              serializedParams = params.toString();
            } else {
              var parts = [];

              utils.forEach(params, function serialize(val, key) {
                if (val === null || typeof val === 'undefined') {
                  return;
                }

                if (utils.isArray(val)) {
                  key = key + '[]';
                } else {
                  val = [val];
                }

                utils.forEach(val, function parseValue(v) {
                  if (utils.isDate(v)) {
                    v = v.toISOString();
                  } else if (utils.isObject(v)) {
                    v = JSON.stringify(v);
                  }
                  parts.push(encode(key) + '=' + encode(v));
                });
              });

              serializedParams = parts.join('&');
            }

            if (serializedParams) {
              url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
            }

            return url;
          };

          // Headers whose duplicates are ignored by node
          // c.f. https://nodejs.org/api/http.html#http_message_headers
          var ignoreDuplicateOf = [
            'age', 'authorization', 'content-length', 'content-type', 'etag',
            'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
            'last-modified', 'location', 'max-forwards', 'proxy-authorization',
            'referer', 'retry-after', 'user-agent'
          ];

          /**
           * Parse headers into an object
           *
           * ```
           * Date: Wed, 27 Aug 2014 08:58:49 GMT
           * Content-Type: application/json
           * Connection: keep-alive
           * Transfer-Encoding: chunked
           * ```
           *
           * @param {String} headers Headers needing to be parsed
           * @returns {Object} Headers parsed into an object
           */
          var parseHeaders = function parseHeaders(headers) {
            var parsed = {};
            var key;
            var val;
            var i;

            if (!headers) {
              return parsed;
            }

            utils.forEach(headers.split('\n'), function parser(line) {
              i = line.indexOf(':');
              key = utils.trim(line.substr(0, i)).toLowerCase();
              val = utils.trim(line.substr(i + 1));

              if (key) {
                if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                  return;
                }
                if (key === 'set-cookie') {
                  parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
                } else {
                  parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                }
              }
            });

            return parsed;
          };

          var isURLSameOrigin = (
            utils.isStandardBrowserEnv() ?

            // Standard browser envs have full support of the APIs needed to test
            // whether the request URL is of the same origin as current location.
            (function standardBrowserEnv() {
              var msie = /(msie|trident)/i.test(navigator.userAgent);
              var urlParsingNode = document.createElement('a');
              var originURL;

              /**
               * Parse a URL to discover it's components
               *
               * @param {String} url The URL to be parsed
               * @returns {Object}
               */
              function resolveURL(url) {
                var href = url;

                if (msie) {
                  // IE needs attribute set twice to normalize properties
                  urlParsingNode.setAttribute('href', href);
                  href = urlParsingNode.href;
                }

                urlParsingNode.setAttribute('href', href);

                // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                return {
                  href: urlParsingNode.href,
                  protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                  host: urlParsingNode.host,
                  search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                  hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                  hostname: urlParsingNode.hostname,
                  port: urlParsingNode.port,
                  pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                    urlParsingNode.pathname : '/' + urlParsingNode.pathname
                };
              }

              originURL = resolveURL(window.location.href);

              /**
               * Determine if a URL shares the same origin as the current location
               *
               * @param {String} requestURL The URL to test
               * @returns {boolean} True if URL shares the same origin, otherwise false
               */
              return function isURLSameOrigin(requestURL) {
                var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
                return (parsed.protocol === originURL.protocol &&
                  parsed.host === originURL.host);
              };
            })() :

            // Non standard browser envs (web workers, react-native) lack needed support.
            (function nonStandardBrowserEnv() {
              return function isURLSameOrigin() {
                return true;
              };
            })()
          );

          // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

          var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

          function E() {
            this.message = 'String contains an invalid character';
          }
          E.prototype = new Error;
          E.prototype.code = 5;
          E.prototype.name = 'InvalidCharacterError';

          function btoa(input) {
            var str = String(input);
            var output = '';
            for (
              // initialize result and counter
              var block, charCode, idx = 0, map = chars;
              // if the next str index does not exist:
              //   change the mapping table to "="
              //   check if d has no fractional digits
              str.charAt(idx | 0) || (map = '=', idx % 1);
              // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
              output += map.charAt(63 & block >> 8 - idx % 1 * 8)
            ) {
              charCode = str.charCodeAt(idx += 3 / 4);
              if (charCode > 0xFF) {
                throw new E();
              }
              block = block << 8 | charCode;
            }
            return output;
          }

          var btoa_1 = btoa;

          var cookies = (
            utils.isStandardBrowserEnv() ?

            // Standard browser envs support document.cookie
            (function standardBrowserEnv() {
              return {
                write: function write(name, value, expires, path, domain, secure) {
                  var cookie = [];
                  cookie.push(name + '=' + encodeURIComponent(value));

                  if (utils.isNumber(expires)) {
                    cookie.push('expires=' + new Date(expires).toGMTString());
                  }

                  if (utils.isString(path)) {
                    cookie.push('path=' + path);
                  }

                  if (utils.isString(domain)) {
                    cookie.push('domain=' + domain);
                  }

                  if (secure === true) {
                    cookie.push('secure');
                  }

                  document.cookie = cookie.join('; ');
                },

                read: function read(name) {
                  var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                  return (match ? decodeURIComponent(match[3]) : null);
                },

                remove: function remove(name) {
                  this.write(name, '', Date.now() - 86400000);
                }
              };
            })() :

            // Non standard browser env (web workers, react-native) lack needed support.
            (function nonStandardBrowserEnv() {
              return {
                write: function write() {},
                read: function read() {
                  return null;
                },
                remove: function remove() {}
              };
            })()
          );

          var btoa$1 = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || btoa_1;

          var xhr = function xhrAdapter(config) {
            return new Promise(function dispatchXhrRequest(resolve, reject) {
              var requestData = config.data;
              var requestHeaders = config.headers;

              if (utils.isFormData(requestData)) {
                delete requestHeaders['Content-Type']; // Let the browser set it
              }

              var request = new XMLHttpRequest();
              var loadEvent = 'onreadystatechange';
              var xDomain = false;

              // For IE 8/9 CORS support
              // Only supports POST and GET calls and doesn't returns the response headers.
              // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
              if (typeof window !== 'undefined' &&
                window.XDomainRequest && !('withCredentials' in request) &&
                !isURLSameOrigin(config.url)) {
                request = new window.XDomainRequest();
                loadEvent = 'onload';
                xDomain = true;
                request.onprogress = function handleProgress() {};
                request.ontimeout = function handleTimeout() {};
              }

              // HTTP basic authentication
              if (config.auth) {
                var username = config.auth.username || '';
                var password = config.auth.password || '';
                requestHeaders.Authorization = 'Basic ' + btoa$1(username + ':' + password);
              }

              request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

              // Set the request timeout in MS
              request.timeout = config.timeout;

              // Listen for ready state
              request[loadEvent] = function handleLoad() {
                if (!request || (request.readyState !== 4 && !xDomain)) {
                  return;
                }

                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                  return;
                }

                // Prepare the response
                var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
                var response = {
                  data: responseData,
                  // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
                  status: request.status === 1223 ? 204 : request.status,
                  statusText: request.status === 1223 ? 'No Content' : request.statusText,
                  headers: responseHeaders,
                  config: config,
                  request: request
                };

                settle(resolve, reject, response);

                // Clean up request
                request = null;
              };

              // Handle low level network errors
              request.onerror = function handleError() {
                // Real errors are hidden from us by the browser
                // onerror should only fire if it's a network error
                reject(createError('Network Error', config, null, request));

                // Clean up request
                request = null;
              };

              // Handle timeout
              request.ontimeout = function handleTimeout() {
                reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
                  request));

                // Clean up request
                request = null;
              };

              // Add xsrf header
              // This is only done if running in a standard browser environment.
              // Specifically not if we're in a web worker, or react-native.
              if (utils.isStandardBrowserEnv()) {
                var cookies$$1 = cookies;

                // Add xsrf header
                var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
                  cookies$$1.read(config.xsrfCookieName) :
                  undefined;

                if (xsrfValue) {
                  requestHeaders[config.xsrfHeaderName] = xsrfValue;
                }
              }

              // Add headers to the request
              if ('setRequestHeader' in request) {
                utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                  if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                    // Remove Content-Type if data is undefined
                    delete requestHeaders[key];
                  } else {
                    // Otherwise add header to the request
                    request.setRequestHeader(key, val);
                  }
                });
              }

              // Add withCredentials to request if needed
              if (config.withCredentials) {
                request.withCredentials = true;
              }

              // Add responseType to request if needed
              if (config.responseType) {
                try {
                  request.responseType = config.responseType;
                } catch (e) {
                  // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                  // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                  if (config.responseType !== 'json') {
                    throw e;
                  }
                }
              }

              // Handle progress if needed
              if (typeof config.onDownloadProgress === 'function') {
                request.addEventListener('progress', config.onDownloadProgress);
              }

              // Not all browsers support upload events
              if (typeof config.onUploadProgress === 'function' && request.upload) {
                request.upload.addEventListener('progress', config.onUploadProgress);
              }

              if (config.cancelToken) {
                // Handle cancellation
                config.cancelToken.promise.then(function onCanceled(cancel) {
                  if (!request) {
                    return;
                  }

                  request.abort();
                  reject(cancel);
                  // Clean up request
                  request = null;
                });
              }

              if (requestData === undefined) {
                requestData = null;
              }

              // Send the request
              request.send(requestData);
            });
          };

          var DEFAULT_CONTENT_TYPE = {
            'Content-Type': 'application/x-www-form-urlencoded'
          };

          function setContentTypeIfUnset(headers, value) {
            if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
              headers['Content-Type'] = value;
            }
          }

          function getDefaultAdapter() {
            var adapter;
            if (typeof XMLHttpRequest !== 'undefined') {
              // For browsers use XHR adapter
              adapter = xhr;
            } else if (typeof process !== 'undefined') {
              // For node use HTTP adapter
              adapter = xhr;
            }
            return adapter;
          }

          var defaults = {
            adapter: getDefaultAdapter(),

            transformRequest: [function transformRequest(data, headers) {
              normalizeHeaderName(headers, 'Content-Type');
              if (utils.isFormData(data) ||
                utils.isArrayBuffer(data) ||
                utils.isBuffer(data) ||
                utils.isStream(data) ||
                utils.isFile(data) ||
                utils.isBlob(data)
              ) {
                return data;
              }
              if (utils.isArrayBufferView(data)) {
                return data.buffer;
              }
              if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
              }
              if (utils.isObject(data)) {
                setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                return JSON.stringify(data);
              }
              return data;
            }],

            transformResponse: [function transformResponse(data) {
              /*eslint no-param-reassign:0*/
              if (typeof data === 'string') {
                try {
                  data = JSON.parse(data);
                } catch (e) {
                  /* Ignore */
                }
              }
              return data;
            }],

            /**
             * A timeout in milliseconds to abort a request. If set to 0 (default) a
             * timeout is not created.
             */
            timeout: 0,

            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',

            maxContentLength: -1,

            validateStatus: function validateStatus(status) {
              return status >= 200 && status < 300;
            }
          };

          defaults.headers = {
            common: {
              'Accept': 'application/json, text/plain, */*'
            }
          };

          utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
            defaults.headers[method] = {};
          });

          utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
            defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
          });

          var defaults_1 = defaults;

          function InterceptorManager() {
            this.handlers = [];
          }

          /**
           * Add a new interceptor to the stack
           *
           * @param {Function} fulfilled The function to handle `then` for a `Promise`
           * @param {Function} rejected The function to handle `reject` for a `Promise`
           *
           * @return {Number} An ID used to remove interceptor later
           */
          InterceptorManager.prototype.use = function use(fulfilled, rejected) {
            this.handlers.push({
              fulfilled: fulfilled,
              rejected: rejected
            });
            return this.handlers.length - 1;
          };

          /**
           * Remove an interceptor from the stack
           *
           * @param {Number} id The ID that was returned by `use`
           */
          InterceptorManager.prototype.eject = function eject(id) {
            if (this.handlers[id]) {
              this.handlers[id] = null;
            }
          };

          /**
           * Iterate over all the registered interceptors
           *
           * This method is particularly useful for skipping over any
           * interceptors that may have become `null` calling `eject`.
           *
           * @param {Function} fn The function to call for each interceptor
           */
          InterceptorManager.prototype.forEach = function forEach(fn) {
            utils.forEach(this.handlers, function forEachHandler(h) {
              if (h !== null) {
                fn(h);
              }
            });
          };

          var InterceptorManager_1 = InterceptorManager;

          /**
           * Transform the data for a request or a response
           *
           * @param {Object|String} data The data to be transformed
           * @param {Array} headers The headers for the request or response
           * @param {Array|Function} fns A single function or Array of functions
           * @returns {*} The resulting transformed data
           */
          var transformData = function transformData(data, headers, fns) {
            /*eslint no-param-reassign:0*/
            utils.forEach(fns, function transform(fn) {
              data = fn(data, headers);
            });

            return data;
          };

          var isCancel = function isCancel(value) {
            return !!(value && value.__CANCEL__);
          };

          /**
           * Determines whether the specified URL is absolute
           *
           * @param {string} url The URL to test
           * @returns {boolean} True if the specified URL is absolute, otherwise false
           */
          var isAbsoluteURL = function isAbsoluteURL(url) {
            // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
            // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
            // by any combination of letters, digits, plus, period, or hyphen.
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
          };

          /**
           * Creates a new URL by combining the specified URLs
           *
           * @param {string} baseURL The base URL
           * @param {string} relativeURL The relative URL
           * @returns {string} The combined URL
           */
          var combineURLs = function combineURLs(baseURL, relativeURL) {
            return relativeURL ?
              baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
              baseURL;
          };

          /**
           * Throws a `Cancel` if cancellation has been requested.
           */
          function throwIfCancellationRequested(config) {
            if (config.cancelToken) {
              config.cancelToken.throwIfRequested();
            }
          }

          /**
           * Dispatch a request to the server using the configured adapter.
           *
           * @param {object} config The config that is to be used for the request
           * @returns {Promise} The Promise to be fulfilled
           */
          var dispatchRequest = function dispatchRequest(config) {
            throwIfCancellationRequested(config);

            // Support baseURL config
            if (config.baseURL && !isAbsoluteURL(config.url)) {
              config.url = combineURLs(config.baseURL, config.url);
            }

            // Ensure headers exist
            config.headers = config.headers || {};

            // Transform request data
            config.data = transformData(
              config.data,
              config.headers,
              config.transformRequest
            );

            // Flatten headers
            config.headers = utils.merge(
              config.headers.common || {},
              config.headers[config.method] || {},
              config.headers || {}
            );

            utils.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              function cleanHeaderConfig(method) {
                delete config.headers[method];
              }
            );

            var adapter = config.adapter || defaults_1.adapter;

            return adapter(config).then(function onAdapterResolution(response) {
              throwIfCancellationRequested(config);

              // Transform response data
              response.data = transformData(
                response.data,
                response.headers,
                config.transformResponse
              );

              return response;
            }, function onAdapterRejection(reason) {
              if (!isCancel(reason)) {
                throwIfCancellationRequested(config);

                // Transform response data
                if (reason && reason.response) {
                  reason.response.data = transformData(
                    reason.response.data,
                    reason.response.headers,
                    config.transformResponse
                  );
                }
              }

              return Promise.reject(reason);
            });
          };

          /**
           * Create a new instance of Axios
           *
           * @param {Object} instanceConfig The default config for the instance
           */
          function Axios(instanceConfig) {
            this.defaults = instanceConfig;
            this.interceptors = {
              request: new InterceptorManager_1(),
              response: new InterceptorManager_1()
            };
          }

          /**
           * Dispatch a request
           *
           * @param {Object} config The config specific for this request (merged with this.defaults)
           */
          Axios.prototype.request = function request(config) {
            /*eslint no-param-reassign:0*/
            // Allow for axios('example/url'[, config]) a la fetch API
            if (typeof config === 'string') {
              config = utils.merge({
                url: arguments[0]
              }, arguments[1]);
            }

            config = utils.merge(defaults_1, {
              method: 'get'
            }, this.defaults, config);
            config.method = config.method.toLowerCase();

            // Hook up interceptors middleware
            var chain = [dispatchRequest, undefined];
            var promise = Promise.resolve(config);

            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
              chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });

            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
              chain.push(interceptor.fulfilled, interceptor.rejected);
            });

            while (chain.length) {
              promise = promise.then(chain.shift(), chain.shift());
            }

            return promise;
          };

          // Provide aliases for supported request methods
          utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function (url, config) {
              return this.request(utils.merge(config || {}, {
                method: method,
                url: url
              }));
            };
          });

          utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function (url, data, config) {
              return this.request(utils.merge(config || {}, {
                method: method,
                url: url,
                data: data
              }));
            };
          });

          var Axios_1 = Axios;

          /**
           * A `Cancel` is an object that is thrown when an operation is canceled.
           *
           * @class
           * @param {string=} message The message.
           */
          function Cancel(message) {
            this.message = message;
          }

          Cancel.prototype.toString = function toString() {
            return 'Cancel' + (this.message ? ': ' + this.message : '');
          };

          Cancel.prototype.__CANCEL__ = true;

          var Cancel_1 = Cancel;

          /**
           * A `CancelToken` is an object that can be used to request cancellation of an operation.
           *
           * @class
           * @param {Function} executor The executor function.
           */
          function CancelToken(executor) {
            if (typeof executor !== 'function') {
              throw new TypeError('executor must be a function.');
            }

            var resolvePromise;
            this.promise = new Promise(function promiseExecutor(resolve) {
              resolvePromise = resolve;
            });

            var token = this;
            executor(function cancel(message) {
              if (token.reason) {
                // Cancellation has already been requested
                return;
              }

              token.reason = new Cancel_1(message);
              resolvePromise(token.reason);
            });
          }

          /**
           * Throws a `Cancel` if cancellation has been requested.
           */
          CancelToken.prototype.throwIfRequested = function throwIfRequested() {
            if (this.reason) {
              throw this.reason;
            }
          };

          /**
           * Returns an object that contains a new `CancelToken` and a function that, when called,
           * cancels the `CancelToken`.
           */
          CancelToken.source = function source() {
            var cancel;
            var token = new CancelToken(function executor(c) {
              cancel = c;
            });
            return {
              token: token,
              cancel: cancel
            };
          };

          var CancelToken_1 = CancelToken;

          /**
           * Syntactic sugar for invoking a function and expanding an array for arguments.
           *
           * Common use case would be to use `Function.prototype.apply`.
           *
           *  ```js
           *  function f(x, y, z) {}
           *  var args = [1, 2, 3];
           *  f.apply(null, args);
           *  ```
           *
           * With `spread` this example can be re-written.
           *
           *  ```js
           *  spread(function(x, y, z) {})([1, 2, 3]);
           *  ```
           *
           * @param {Function} callback
           * @returns {Function}
           */
          var spread = function spread(callback) {
            return function wrap(arr) {
              return callback.apply(null, arr);
            };
          };

          /**
           * Create an instance of Axios
           *
           * @param {Object} defaultConfig The default config for the instance
           * @return {Axios} A new instance of Axios
           */
          function createInstance(defaultConfig) {
            var context = new Axios_1(defaultConfig);
            var instance = bind(Axios_1.prototype.request, context);

            // Copy axios.prototype to instance
            utils.extend(instance, Axios_1.prototype, context);

            // Copy context to instance
            utils.extend(instance, context);

            return instance;
          }

          // Create the default instance to be exported
          var axios = createInstance(defaults_1);

          // Expose Axios class to allow class inheritance
          axios.Axios = Axios_1;

          // Factory for creating new instances
          axios.create = function create(instanceConfig) {
            return createInstance(utils.merge(defaults_1, instanceConfig));
          };

          // Expose Cancel & CancelToken
          axios.Cancel = Cancel_1;
          axios.CancelToken = CancelToken_1;
          axios.isCancel = isCancel;

          // Expose all/spread
          axios.all = function all(promises) {
            return Promise.all(promises);
          };
          axios.spread = spread;

          var axios_1 = axios;

          // Allow use of default import syntax in TypeScript
          var default_1 = axios;
          axios_1.default = default_1;

          var axios$1 = axios_1;

          var supportedVersions = ['v2'];

          function GhostContentAPI(_ref) {
            var url = _ref.url,
              host = _ref.host,
              _ref$ghostPath = _ref.ghostPath,
              ghostPath = _ref$ghostPath === void 0 ? 'ghost' : _ref$ghostPath,
              version = _ref.version,
              key = _ref.key;

            // host parameter is deprecated
            if (host) {
              // eslint-disable-next-line
              console.warn('GhostAdminAPI\'s `host` parameter is deprecated, please use `url` instead');

              if (!url) {
                url = host;
              }
            }

            if (this instanceof GhostContentAPI) {
              return GhostContentAPI({
                url: url,
                version: version,
                key: key
              });
            }

            if (!version) {
              throw new Error('GhostContentAPI Config Missing: @tryghost/content-api requires a "version" like "v2"');
            }

            if (!supportedVersions.includes(version)) {
              throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api does not support the supplied version');
            }

            if (!url) {
              throw new Error('GhostContentAPI Config Missing: @tryghost/content-api requires a "url" like "https://site.com" or "https://site.com/blog"');
            }

            if (!/https?:\/\//.test(url)) {
              throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "url" with a protocol like "https://site.com" or "https://site.com/blog"');
            }

            if (url.endsWith('/')) {
              throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "url" without a trailing slash like "https://site.com" or "https://site.com/blog"');
            }

            if (ghostPath.endsWith('/') || ghostPath.startsWith('/')) {
              throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "ghostPath" without a leading or trailing slash like "ghost"');
            }

            if (key && !/[0-9a-f]{26}/.test(key)) {
              throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "key" with 26 hex characters');
            }

            var api = ['posts', 'authors', 'tags', 'pages', 'settings'].reduce(function (apiObject, resourceType) {
              function browse() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var memberToken = arguments.length > 1 ? arguments[1] : undefined;
                return makeRequest(resourceType, options, null, memberToken);
              }

              function read(data) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var memberToken = arguments.length > 2 ? arguments[2] : undefined;

                if (!data) {
                  return Promise.reject(new Error('Missing data'));
                }

                if (!data.id && !data.slug) {
                  return Promise.reject(new Error('Must include either data.id or data.slug'));
                }

                var params = Object.assign({}, data, options);
                return makeRequest(resourceType, params, data.id || "slug/".concat(data.slug), memberToken);
              }

              return Object.assign(apiObject, _defineProperty({}, resourceType, {
                read: read,
                browse: browse
              }));
            }, {});
            delete api.settings.read;
            return api;

            function makeRequest(resourceType, params, id) {
              var membersToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

              if (!membersToken && !key) {
                return Promise.reject(new Error('GhostContentAPI Config Missing: @tryghost/content-api was instantiated without a content key'));
              }

              delete params.id;
              var headers = membersToken ? {
                Authorization: "GhostMembers ".concat(membersToken)
              } : undefined;
              return axios$1.get("".concat(url, "/").concat(ghostPath, "/api/").concat(version, "/content/").concat(resourceType, "/").concat(id ? id + '/' : ''), {
                params: Object.assign({
                  key: key
                }, params),
                paramsSerializer: function paramsSerializer(params) {
                  return Object.keys(params).reduce(function (parts, key) {
                    var val = encodeURIComponent([].concat(params[key]).join(','));
                    return parts.concat("".concat(key, "=").concat(val));
                  }, []).join('&');
                },
                headers: headers
              }).then(function (res) {
                if (!Array.isArray(res.data[resourceType])) {
                  return res.data[resourceType];
                }

                if (res.data[resourceType].length === 1 && !res.data.meta) {
                  return res.data[resourceType][0];
                }

                return Object.assign(res.data[resourceType], {
                  meta: res.data.meta
                });
              }).catch(function (err) {
                if (err.response && err.response.data && err.response.data.errors) {
                  var props = err.response.data.errors[0];
                  var toThrow = new Error(props.message);
                  var keys = Object.keys(props);
                  toThrow.name = props.type;
                  keys.forEach(function (key) {
                    toThrow[key] = props[key];
                  });
                  toThrow.response = err.response; // @TODO: remove in 2.0. We have enhanced the error handling, but we don't want to break existing implementations.

                  toThrow.request = err.request;
                  toThrow.config = err.config;
                  throw toThrow;
                } else {
                  throw err;
                }
              });
            }
          }

          /* harmony default export */
          __webpack_exports__["default"] = (GhostContentAPI);
          //# sourceMappingURL=content-api.js.map

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__( /*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

        /***/
      }),

    /***/
    "./node_modules/dompurify/dist/purify.js":
      /*!***********************************************!*\
        !*** ./node_modules/dompurify/dist/purify.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        (function (global, factory) {
          true ? module.exports = factory() :
            undefined;
        }(this, (function () {
          'use strict';

          var freeze$1 = Object.freeze || function (x) {
            return x;
          };

          var html = freeze$1(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

          // SVG
          var svg = freeze$1(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);

          var svgFilters = freeze$1(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

          var mathMl = freeze$1(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

          var text = freeze$1(['#text']);

          var freeze$2 = Object.freeze || function (x) {
            return x;
          };

          var html$1 = freeze$2(['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

          var svg$1 = freeze$2(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

          var mathMl$1 = freeze$2(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

          var xml = freeze$2(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

          var hasOwnProperty = Object.hasOwnProperty;
          var setPrototypeOf = Object.setPrototypeOf;

          var _ref$1 = typeof Reflect !== 'undefined' && Reflect;
          var apply$1 = _ref$1.apply;

          if (!apply$1) {
            apply$1 = function apply(fun, thisValue, args) {
              return fun.apply(thisValue, args);
            };
          }

          /* Add properties to a lookup table */
          function addToSet(set, array) {
            if (setPrototypeOf) {
              // Make 'in' and truthy checks like Boolean(set.constructor)
              // independent of any properties defined on Object.prototype.
              // Prevent prototype setters from intercepting set as a this value.
              setPrototypeOf(set, null);
            }

            var l = array.length;
            while (l--) {
              var element = array[l];
              if (typeof element === 'string') {
                var lcElement = element.toLowerCase();
                if (lcElement !== element) {
                  // Config presets (e.g. tags.js, attrs.js) are immutable.
                  if (!Object.isFrozen(array)) {
                    array[l] = lcElement;
                  }

                  element = lcElement;
                }
              }

              set[element] = true;
            }

            return set;
          }

          /* Shallow clone an object */
          function clone(object) {
            var newObject = {};

            var property = void 0;
            for (property in object) {
              if (apply$1(hasOwnProperty, object, [property])) {
                newObject[property] = object[property];
              }
            }

            return newObject;
          }

          var seal = Object.seal || function (x) {
            return x;
          };

          var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
          var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
          var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
          var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
          var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
          );
          var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
          var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g // eslint-disable-line no-control-regex
          );

          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };

          function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
              }
              return arr2;
            } else {
              return Array.from(arr);
            }
          }

          var _ref = typeof Reflect !== 'undefined' && Reflect;
          var apply = _ref.apply;

          var arraySlice = Array.prototype.slice;
          var freeze = Object.freeze;

          var getGlobal = function getGlobal() {
            return typeof window === 'undefined' ? null : window;
          };

          if (!apply) {
            apply = function apply(fun, thisValue, args) {
              return fun.apply(thisValue, args);
            };
          }

          /**
           * Creates a no-op policy for internal use only.
           * Don't export this function outside this module!
           * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
           * @param {Document} document The document object (to determine policy name suffix)
           * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
           * are not supported).
           */
          var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
            if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
              return null;
            }

            // Allow the callers to control the unique policy name
            // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
            // Policy creation with duplicate names throws in Trusted Types.
            var suffix = null;
            var ATTR_NAME = 'data-tt-policy-suffix';
            if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
              suffix = document.currentScript.getAttribute(ATTR_NAME);
            }

            var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

            try {
              return trustedTypes.createPolicy(policyName, {
                createHTML: function createHTML(html$$1) {
                  return html$$1;
                }
              });
            } catch (error) {
              // Policy creation failed (most likely another DOMPurify script has
              // already run). Skip creating the policy, as this will only cause errors
              // if TT are enforced.
              console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
              return null;
            }
          };

          function createDOMPurify() {
            var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

            var DOMPurify = function DOMPurify(root) {
              return createDOMPurify(root);
            };

            /**
             * Version label, exposed for easier checks
             * if DOMPurify is up to date or not
             */
            DOMPurify.version = '1.0.10';

            /**
             * Array of elements that DOMPurify removed during sanitation.
             * Empty if nothing was removed.
             */
            DOMPurify.removed = [];

            if (!window || !window.document || window.document.nodeType !== 9) {
              // Not running in a browser, provide a factory function
              // so that you can pass your own Window
              DOMPurify.isSupported = false;

              return DOMPurify;
            }

            var originalDocument = window.document;
            var useDOMParser = false;
            var removeTitle = false;

            var document = window.document;
            var DocumentFragment = window.DocumentFragment,
              HTMLTemplateElement = window.HTMLTemplateElement,
              Node = window.Node,
              NodeFilter = window.NodeFilter,
              _window$NamedNodeMap = window.NamedNodeMap,
              NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
              Text = window.Text,
              Comment = window.Comment,
              DOMParser = window.DOMParser,
              TrustedTypes = window.TrustedTypes;

            // As per issue #47, the web-components registry is inherited by a
            // new document created via createHTMLDocument. As per the spec
            // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
            // a new empty registry is used when creating a template contents owner
            // document, so we use that as our parent document to ensure nothing
            // is inherited.

            if (typeof HTMLTemplateElement === 'function') {
              var template = document.createElement('template');
              if (template.content && template.content.ownerDocument) {
                document = template.content.ownerDocument;
              }
            }

            var trustedTypesPolicy = _createTrustedTypesPolicy(TrustedTypes, originalDocument);
            var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';

            var _document = document,
              implementation = _document.implementation,
              createNodeIterator = _document.createNodeIterator,
              getElementsByTagName = _document.getElementsByTagName,
              createDocumentFragment = _document.createDocumentFragment;
            var importNode = originalDocument.importNode;


            var hooks = {};

            /**
             * Expose whether this browser supports running the full DOMPurify.
             */
            DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

            var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
              ERB_EXPR$$1 = ERB_EXPR,
              DATA_ATTR$$1 = DATA_ATTR,
              ARIA_ATTR$$1 = ARIA_ATTR,
              IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
              ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
            var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
            /**
             * We consider the elements and attributes below to be safe. Ideally
             * don't add any new ones but feel free to remove unwanted ones.
             */

            /* allowed element names */

            var ALLOWED_TAGS = null;
            var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

            /* Allowed attribute names */
            var ALLOWED_ATTR = null;
            var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

            /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
            var FORBID_TAGS = null;

            /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
            var FORBID_ATTR = null;

            /* Decide if ARIA attributes are okay */
            var ALLOW_ARIA_ATTR = true;

            /* Decide if custom data attributes are okay */
            var ALLOW_DATA_ATTR = true;

            /* Decide if unknown protocols are okay */
            var ALLOW_UNKNOWN_PROTOCOLS = false;

            /* Output should be safe for jQuery's $() factory? */
            var SAFE_FOR_JQUERY = false;

            /* Output should be safe for common template engines.
             * This means, DOMPurify removes data attributes, mustaches and ERB
             */
            var SAFE_FOR_TEMPLATES = false;

            /* Decide if document with <html>... should be returned */
            var WHOLE_DOCUMENT = false;

            /* Track whether config is already set on this instance of DOMPurify. */
            var SET_CONFIG = false;

            /* Decide if all elements (e.g. style, script) must be children of
             * document.body. By default, browsers might move them to document.head */
            var FORCE_BODY = false;

            /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
             * string (or a TrustedHTML object if Trusted Types are supported).
             * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
             */
            var RETURN_DOM = false;

            /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
             * string  (or a TrustedHTML object if Trusted Types are supported) */
            var RETURN_DOM_FRAGMENT = false;

            /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
             * `Node` is imported into the current `Document`. If this flag is not enabled the
             * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
             * DOMPurify. */
            var RETURN_DOM_IMPORT = false;

            /* Output should be free from DOM clobbering attacks? */
            var SANITIZE_DOM = true;

            /* Keep element content when removing element? */
            var KEEP_CONTENT = true;

            /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
             * of importing it into a new Document and returning a sanitized copy */
            var IN_PLACE = false;

            /* Allow usage of profiles like html, svg and mathMl */
            var USE_PROFILES = {};

            /* Tags to ignore content of when KEEP_CONTENT is true */
            var FORBID_CONTENTS = addToSet({}, ['audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video']);

            /* Tags that are safe for data: URIs */
            var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

            /* Attributes safe for values like "javascript:" */
            var URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

            /* Keep a reference to config to pass to hooks */
            var CONFIG = null;

            /* Ideally, do not touch anything below this line */
            /* ______________________________________________ */

            var formElement = document.createElement('form');

            /**
             * _parseConfig
             *
             * @param  {Object} cfg optional config literal
             */
            // eslint-disable-next-line complexity
            var _parseConfig = function _parseConfig(cfg) {
              if (CONFIG && CONFIG === cfg) {
                return;
              }

              /* Shield configuration object from tampering */
              if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
                cfg = {};
              }

              /* Set configuration parameters */
              ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
              ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
              FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
              FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
              USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
              ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
              ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
              ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
              SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
              SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
              WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
              RETURN_DOM = cfg.RETURN_DOM || false; // Default false
              RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
              RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
              FORCE_BODY = cfg.FORCE_BODY || false; // Default false
              SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
              KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
              IN_PLACE = cfg.IN_PLACE || false; // Default false

              IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

              if (SAFE_FOR_TEMPLATES) {
                ALLOW_DATA_ATTR = false;
              }

              if (RETURN_DOM_FRAGMENT) {
                RETURN_DOM = true;
              }

              /* Parse profile info */
              if (USE_PROFILES) {
                ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
                ALLOWED_ATTR = [];
                if (USE_PROFILES.html === true) {
                  addToSet(ALLOWED_TAGS, html);
                  addToSet(ALLOWED_ATTR, html$1);
                }

                if (USE_PROFILES.svg === true) {
                  addToSet(ALLOWED_TAGS, svg);
                  addToSet(ALLOWED_ATTR, svg$1);
                  addToSet(ALLOWED_ATTR, xml);
                }

                if (USE_PROFILES.svgFilters === true) {
                  addToSet(ALLOWED_TAGS, svgFilters);
                  addToSet(ALLOWED_ATTR, svg$1);
                  addToSet(ALLOWED_ATTR, xml);
                }

                if (USE_PROFILES.mathMl === true) {
                  addToSet(ALLOWED_TAGS, mathMl);
                  addToSet(ALLOWED_ATTR, mathMl$1);
                  addToSet(ALLOWED_ATTR, xml);
                }
              }

              /* Merge configuration parameters */
              if (cfg.ADD_TAGS) {
                if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                  ALLOWED_TAGS = clone(ALLOWED_TAGS);
                }

                addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
              }

              if (cfg.ADD_ATTR) {
                if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                  ALLOWED_ATTR = clone(ALLOWED_ATTR);
                }

                addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
              }

              if (cfg.ADD_URI_SAFE_ATTR) {
                addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
              }

              /* Add #text in case KEEP_CONTENT is set to true */
              if (KEEP_CONTENT) {
                ALLOWED_TAGS['#text'] = true;
              }

              /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
              if (WHOLE_DOCUMENT) {
                addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
              }

              /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286 */
              if (ALLOWED_TAGS.table) {
                addToSet(ALLOWED_TAGS, ['tbody']);
              }

              // Prevent further manipulation of configuration.
              // Not available in IE8, Safari 5, etc.
              if (freeze) {
                freeze(cfg);
              }

              CONFIG = cfg;
            };

            /**
             * _forceRemove
             *
             * @param  {Node} node a DOM node
             */
            var _forceRemove = function _forceRemove(node) {
              DOMPurify.removed.push({
                element: node
              });
              try {
                node.parentNode.removeChild(node);
              } catch (error) {
                node.outerHTML = emptyHTML;
              }
            };

            /**
             * _removeAttribute
             *
             * @param  {String} name an Attribute name
             * @param  {Node} node a DOM node
             */
            var _removeAttribute = function _removeAttribute(name, node) {
              try {
                DOMPurify.removed.push({
                  attribute: node.getAttributeNode(name),
                  from: node
                });
              } catch (error) {
                DOMPurify.removed.push({
                  attribute: null,
                  from: node
                });
              }

              node.removeAttribute(name);
            };

            /**
             * _initDocument
             *
             * @param  {String} dirty a string of dirty markup
             * @return {Document} a DOM, filled with the dirty markup
             */
            var _initDocument = function _initDocument(dirty) {
              /* Create a HTML document */
              var doc = void 0;
              var leadingWhitespace = void 0;

              if (FORCE_BODY) {
                dirty = '<remove></remove>' + dirty;
              } else {
                /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
                var matches = dirty.match(/^[\s]+/);
                leadingWhitespace = matches && matches[0];
                if (leadingWhitespace) {
                  dirty = dirty.slice(leadingWhitespace.length);
                }
              }

              /* Use DOMParser to workaround Firefox bug (see comment below) */
              if (useDOMParser) {
                try {
                  doc = new DOMParser().parseFromString(dirty, 'text/html');
                } catch (error) {}
              }

              /* Remove title to fix a mXSS bug in older MS Edge */
              if (removeTitle) {
                addToSet(FORBID_TAGS, ['title']);
              }

              /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
              Safari (see comment below) */
              if (!doc || !doc.documentElement) {
                doc = implementation.createHTMLDocument('');
                var _doc = doc,
                  body = _doc.body;

                body.parentNode.removeChild(body.parentNode.firstElementChild);
                body.outerHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
              }

              if (leadingWhitespace) {
                doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
              }

              /* Work on whole document or just its body */
              return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
            };

            // Firefox uses a different parser for innerHTML rather than
            // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
            // which means that you *must* use DOMParser, otherwise the output may
            // not be safe if used in a document.write context later.
            //
            // So we feature detect the Firefox bug and use the DOMParser if necessary.
            //
            // MS Edge, in older versions, is affected by an mXSS behavior. The second
            // check tests for the behavior and fixes it if necessary.
            if (DOMPurify.isSupported) {
              (function () {
                try {
                  var doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=1//">');
                  if (doc.querySelector('svg img')) {
                    useDOMParser = true;
                  }
                } catch (error) {}
              })();

              (function () {
                try {
                  var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
                  if (doc.querySelector('title').innerHTML.match(/<\/title/)) {
                    removeTitle = true;
                  }
                } catch (error) {}
              })();
            }

            /**
             * _createIterator
             *
             * @param  {Document} root document/fragment to create iterator for
             * @return {Iterator} iterator instance
             */
            var _createIterator = function _createIterator(root) {
              return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
                return NodeFilter.FILTER_ACCEPT;
              }, false);
            };

            /**
             * _isClobbered
             *
             * @param  {Node} elm element to check for clobbering attacks
             * @return {Boolean} true if clobbered, false if safe
             */
            var _isClobbered = function _isClobbered(elm) {
              if (elm instanceof Text || elm instanceof Comment) {
                return false;
              }

              if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function') {
                return true;
              }

              return false;
            };

            /**
             * _isNode
             *
             * @param  {Node} obj object to check whether it's a DOM node
             * @return {Boolean} true is object is a DOM node
             */
            var _isNode = function _isNode(obj) {
              return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
            };

            /**
             * _executeHook
             * Execute user configurable hooks
             *
             * @param  {String} entryPoint  Name of the hook's entry point
             * @param  {Node} currentNode node to work on with the hook
             * @param  {Object} data additional hook parameters
             */
            var _executeHook = function _executeHook(entryPoint, currentNode, data) {
              if (!hooks[entryPoint]) {
                return;
              }

              hooks[entryPoint].forEach(function (hook) {
                hook.call(DOMPurify, currentNode, data, CONFIG);
              });
            };

            /**
             * _sanitizeElements
             *
             * @protect nodeName
             * @protect textContent
             * @protect removeChild
             *
             * @param   {Node} currentNode to check for permission to exist
             * @return  {Boolean} true if node was killed, false if left alive
             */
            // eslint-disable-next-line complexity
            var _sanitizeElements = function _sanitizeElements(currentNode) {
              var content = void 0;

              /* Execute a hook if present */
              _executeHook('beforeSanitizeElements', currentNode, null);

              /* Check if element is clobbered or can clobber */
              if (_isClobbered(currentNode)) {
                _forceRemove(currentNode);
                return true;
              }

              /* Now let's check the element's type and name */
              var tagName = currentNode.nodeName.toLowerCase();

              /* Execute a hook if present */
              _executeHook('uponSanitizeElement', currentNode, {
                tagName: tagName,
                allowedTags: ALLOWED_TAGS
              });

              /* Remove element if anything forbids its presence */
              if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                /* Keep content except for black-listed elements */
                if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
                  try {
                    var htmlToInsert = currentNode.innerHTML;
                    currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
                  } catch (error) {}
                }

                _forceRemove(currentNode);
                return true;
              }

              /* Remove in case a noscript/noembed XSS is suspected */
              if (tagName === 'noscript' && currentNode.innerHTML.match(/<\/noscript/i)) {
                _forceRemove(currentNode);
                return true;
              }

              if (tagName === 'noembed' && currentNode.innerHTML.match(/<\/noembed/i)) {
                _forceRemove(currentNode);
                return true;
              }

              /* Convert markup to cover jQuery behavior */
              if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
                DOMPurify.removed.push({
                  element: currentNode.cloneNode()
                });
                if (currentNode.innerHTML) {
                  currentNode.innerHTML = currentNode.innerHTML.replace(/</g, '&lt;');
                } else {
                  currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
                }
              }

              /* Sanitize element content to be template-safe */
              if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
                /* Get the element's text content */
                content = currentNode.textContent;
                content = content.replace(MUSTACHE_EXPR$$1, ' ');
                content = content.replace(ERB_EXPR$$1, ' ');
                if (currentNode.textContent !== content) {
                  DOMPurify.removed.push({
                    element: currentNode.cloneNode()
                  });
                  currentNode.textContent = content;
                }
              }

              /* Execute a hook if present */
              _executeHook('afterSanitizeElements', currentNode, null);

              return false;
            };

            /**
             * _isValidAttribute
             *
             * @param  {string} lcTag Lowercase tag name of containing element.
             * @param  {string} lcName Lowercase attribute name.
             * @param  {string} value Attribute value.
             * @return {Boolean} Returns true if `value` is valid, otherwise false.
             */
            // eslint-disable-next-line complexity
            var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
              /* Make sure attribute cannot clobber */
              if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
                return false;
              }

              /* Allow valid data-* attributes: At least one character after "-"
                  (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
                  XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
                  We don't need to check the value; it's always URI safe. */
              if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) {
                // This attribute is safe
              } else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) {
                // This attribute is safe
                /* Otherwise, check the name is permitted */
              } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                return false;

                /* Check value is safe. First, is attr inert? If so, is safe */
              } else if (URI_SAFE_ATTRIBUTES[lcName]) {
                // This attribute is safe
                /* Check no script, data or unknown possibly unsafe URI
                  unless we know URI values are safe for that attribute */
              } else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
                // This attribute is safe
                /* Keep image data URIs alive if src/xlink:href is allowed */
                /* Further prevent gadget XSS for dynamically built script tags */
              } else if ((lcName === 'src' || lcName === 'xlink:href') && lcTag !== 'script' && value.indexOf('data:') === 0 && DATA_URI_TAGS[lcTag]) {
                // This attribute is safe
                /* Allow unknown protocols: This provides support for links that
                  are handled by protocol handlers which may be unknown ahead of
                  time, e.g. fb:, spotify: */
              } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
                // This attribute is safe
                /* Check for binary attributes */
                // eslint-disable-next-line no-negated-condition
              } else if (!value) {
                // Binary attributes are safe at this point
                /* Anything else, presume unsafe, do not add it back */
              } else {
                return false;
              }

              return true;
            };

            /**
             * _sanitizeAttributes
             *
             * @protect attributes
             * @protect nodeName
             * @protect removeAttribute
             * @protect setAttribute
             *
             * @param  {Node} currentNode to sanitize
             */
            var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
              var attr = void 0;
              var value = void 0;
              var lcName = void 0;
              var idAttr = void 0;
              var l = void 0;
              /* Execute a hook if present */
              _executeHook('beforeSanitizeAttributes', currentNode, null);

              var attributes = currentNode.attributes;

              /* Check if we have attributes; if not we might have a text node */

              if (!attributes) {
                return;
              }

              var hookEvent = {
                attrName: '',
                attrValue: '',
                keepAttr: true,
                allowedAttributes: ALLOWED_ATTR
              };
              l = attributes.length;

              /* Go backwards over all attributes; safely remove bad ones */
              while (l--) {
                attr = attributes[l];
                var _attr = attr,
                  name = _attr.name,
                  namespaceURI = _attr.namespaceURI;

                value = attr.value.trim();
                lcName = name.toLowerCase();

                /* Execute a hook if present */
                hookEvent.attrName = lcName;
                hookEvent.attrValue = value;
                hookEvent.keepAttr = true;
                _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
                value = hookEvent.attrValue;

                /* Remove attribute */
                // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
                // remove a "name" attribute from an <img> tag that has an "id"
                // attribute at the time.
                if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
                  idAttr = attributes.id;
                  attributes = apply(arraySlice, attributes, []);
                  _removeAttribute('id', currentNode);
                  _removeAttribute(name, currentNode);
                  if (attributes.indexOf(idAttr) > l) {
                    currentNode.setAttribute('id', idAttr.value);
                  }
                } else if (
                  // This works around a bug in Safari, where input[type=file]
                  // cannot be dynamically set after type has been removed
                  currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
                  continue;
                } else {
                  // This avoids a crash in Safari v9.0 with double-ids.
                  // The trick is to first set the id to be empty and then to
                  // remove the attribute
                  if (name === 'id') {
                    currentNode.setAttribute(name, '');
                  }

                  _removeAttribute(name, currentNode);
                }

                /* Did the hooks approve of the attribute? */
                if (!hookEvent.keepAttr) {
                  continue;
                }

                /* Sanitize attribute content to be template-safe */
                if (SAFE_FOR_TEMPLATES) {
                  value = value.replace(MUSTACHE_EXPR$$1, ' ');
                  value = value.replace(ERB_EXPR$$1, ' ');
                }

                /* Is `value` valid for this attribute? */
                var lcTag = currentNode.nodeName.toLowerCase();
                if (!_isValidAttribute(lcTag, lcName, value)) {
                  continue;
                }

                /* Handle invalid data-* attribute set by try-catching it */
                try {
                  if (namespaceURI) {
                    currentNode.setAttributeNS(namespaceURI, name, value);
                  } else {
                    /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
                    currentNode.setAttribute(name, value);
                  }

                  DOMPurify.removed.pop();
                } catch (error) {}
              }

              /* Execute a hook if present */
              _executeHook('afterSanitizeAttributes', currentNode, null);
            };

            /**
             * _sanitizeShadowDOM
             *
             * @param  {DocumentFragment} fragment to iterate over recursively
             */
            var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
              var shadowNode = void 0;
              var shadowIterator = _createIterator(fragment);

              /* Execute a hook if present */
              _executeHook('beforeSanitizeShadowDOM', fragment, null);

              while (shadowNode = shadowIterator.nextNode()) {
                /* Execute a hook if present */
                _executeHook('uponSanitizeShadowNode', shadowNode, null);

                /* Sanitize tags and elements */
                if (_sanitizeElements(shadowNode)) {
                  continue;
                }

                /* Deep shadow DOM detected */
                if (shadowNode.content instanceof DocumentFragment) {
                  _sanitizeShadowDOM(shadowNode.content);
                }

                /* Check attributes, sanitize if necessary */
                _sanitizeAttributes(shadowNode);
              }

              /* Execute a hook if present */
              _executeHook('afterSanitizeShadowDOM', fragment, null);
            };

            /**
             * Sanitize
             * Public method providing core sanitation functionality
             *
             * @param {String|Node} dirty string or DOM node
             * @param {Object} configuration object
             */
            // eslint-disable-next-line complexity
            DOMPurify.sanitize = function (dirty, cfg) {
              var body = void 0;
              var importedNode = void 0;
              var currentNode = void 0;
              var oldNode = void 0;
              var returnNode = void 0;
              /* Make sure we have a string to sanitize.
                DO NOT return early, as this will return the wrong type if
                the user has requested a DOM object rather than a string */
              if (!dirty) {
                dirty = '<!-->';
              }

              /* Stringify, in case dirty is an object */
              if (typeof dirty !== 'string' && !_isNode(dirty)) {
                // eslint-disable-next-line no-negated-condition
                if (typeof dirty.toString !== 'function') {
                  throw new TypeError('toString is not a function');
                } else {
                  dirty = dirty.toString();
                  if (typeof dirty !== 'string') {
                    throw new TypeError('dirty is not a string, aborting');
                  }
                }
              }

              /* Check we can run. Otherwise fall back or ignore */
              if (!DOMPurify.isSupported) {
                if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
                  if (typeof dirty === 'string') {
                    return window.toStaticHTML(dirty);
                  }

                  if (_isNode(dirty)) {
                    return window.toStaticHTML(dirty.outerHTML);
                  }
                }

                return dirty;
              }

              /* Assign config vars */
              if (!SET_CONFIG) {
                _parseConfig(cfg);
              }

              /* Clean up removed elements */
              DOMPurify.removed = [];

              if (IN_PLACE) {
                /* No special handling necessary for in-place sanitization */
              } else if (dirty instanceof Node) {
                /* If dirty is a DOM element, append to an empty document to avoid
                   elements being stripped by the parser */
                body = _initDocument('<!-->');
                importedNode = body.ownerDocument.importNode(dirty, true);
                if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
                  /* Node is already a body, use as is */
                  body = importedNode;
                } else {
                  // eslint-disable-next-line unicorn/prefer-node-append
                  body.appendChild(importedNode);
                }
              } else {
                /* Exit directly if we have nothing to do */
                if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
                  return trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
                }

                /* Initialize the document to work on */
                body = _initDocument(dirty);

                /* Check we have a DOM node from the data */
                if (!body) {
                  return RETURN_DOM ? null : emptyHTML;
                }
              }

              /* Remove first element node (ours) if FORCE_BODY is set */
              if (body && FORCE_BODY) {
                _forceRemove(body.firstChild);
              }

              /* Get node iterator */
              var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

              /* Now start iterating over the created document */
              while (currentNode = nodeIterator.nextNode()) {
                /* Fix IE's strange behavior with manipulated textNodes #89 */
                if (currentNode.nodeType === 3 && currentNode === oldNode) {
                  continue;
                }

                /* Sanitize tags and elements */
                if (_sanitizeElements(currentNode)) {
                  continue;
                }

                /* Shadow DOM detected, sanitize it */
                if (currentNode.content instanceof DocumentFragment) {
                  _sanitizeShadowDOM(currentNode.content);
                }

                /* Check attributes, sanitize if necessary */
                _sanitizeAttributes(currentNode);

                oldNode = currentNode;
              }

              oldNode = null;

              /* If we sanitized `dirty` in-place, return it. */
              if (IN_PLACE) {
                return dirty;
              }

              /* Return sanitized string or DOM */
              if (RETURN_DOM) {
                if (RETURN_DOM_FRAGMENT) {
                  returnNode = createDocumentFragment.call(body.ownerDocument);

                  while (body.firstChild) {
                    // eslint-disable-next-line unicorn/prefer-node-append
                    returnNode.appendChild(body.firstChild);
                  }
                } else {
                  returnNode = body;
                }

                if (RETURN_DOM_IMPORT) {
                  /* AdoptNode() is not used because internal state is not reset
                         (e.g. the past names map of a HTMLFormElement), this is safe
                         in theory but we would rather not risk another attack vector.
                         The state that is cloned by importNode() is explicitly defined
                         by the specs. */
                  returnNode = importNode.call(originalDocument, returnNode, true);
                }

                return returnNode;
              }

              var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

              /* Sanitize final string template-safe */
              if (SAFE_FOR_TEMPLATES) {
                serializedHTML = serializedHTML.replace(MUSTACHE_EXPR$$1, ' ');
                serializedHTML = serializedHTML.replace(ERB_EXPR$$1, ' ');
              }

              return trustedTypesPolicy ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
            };

            /**
             * Public method to set the configuration once
             * setConfig
             *
             * @param {Object} cfg configuration object
             */
            DOMPurify.setConfig = function (cfg) {
              _parseConfig(cfg);
              SET_CONFIG = true;
            };

            /**
             * Public method to remove the configuration
             * clearConfig
             *
             */
            DOMPurify.clearConfig = function () {
              CONFIG = null;
              SET_CONFIG = false;
            };

            /**
             * Public method to check if an attribute value is valid.
             * Uses last set config, if any. Otherwise, uses config defaults.
             * isValidAttribute
             *
             * @param  {string} tag Tag name of containing element.
             * @param  {string} attr Attribute name.
             * @param  {string} value Attribute value.
             * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
             */
            DOMPurify.isValidAttribute = function (tag, attr, value) {
              /* Initialize shared config vars if necessary. */
              if (!CONFIG) {
                _parseConfig({});
              }

              var lcTag = tag.toLowerCase();
              var lcName = attr.toLowerCase();
              return _isValidAttribute(lcTag, lcName, value);
            };

            /**
             * AddHook
             * Public method to add DOMPurify hooks
             *
             * @param {String} entryPoint entry point for the hook to add
             * @param {Function} hookFunction function to execute
             */
            DOMPurify.addHook = function (entryPoint, hookFunction) {
              if (typeof hookFunction !== 'function') {
                return;
              }

              hooks[entryPoint] = hooks[entryPoint] || [];
              hooks[entryPoint].push(hookFunction);
            };

            /**
             * RemoveHook
             * Public method to remove a DOMPurify hook at a given entryPoint
             * (pops it from the stack of hooks if more are present)
             *
             * @param {String} entryPoint entry point for the hook to remove
             */
            DOMPurify.removeHook = function (entryPoint) {
              if (hooks[entryPoint]) {
                hooks[entryPoint].pop();
              }
            };

            /**
             * RemoveHooks
             * Public method to remove all DOMPurify hooks at a given entryPoint
             *
             * @param  {String} entryPoint entry point for the hooks to remove
             */
            DOMPurify.removeHooks = function (entryPoint) {
              if (hooks[entryPoint]) {
                hooks[entryPoint] = [];
              }
            };

            /**
             * RemoveAllHooks
             * Public method to remove all DOMPurify hooks
             *
             */
            DOMPurify.removeAllHooks = function () {
              hooks = {};
            };

            return DOMPurify;
          }

          var purify = createDOMPurify();

          return purify;

        })));
        //# sourceMappingURL=purify.js.map


        /***/
      }),

    /***/
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
      /*!**************************************************!*\
        !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
        \**************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        var map = {
          "./af": "./node_modules/moment/locale/af.js",
          "./af.js": "./node_modules/moment/locale/af.js",
          "./ar": "./node_modules/moment/locale/ar.js",
          "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
          "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
          "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
          "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
          "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
          "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
          "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
          "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
          "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
          "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
          "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
          "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
          "./ar.js": "./node_modules/moment/locale/ar.js",
          "./az": "./node_modules/moment/locale/az.js",
          "./az.js": "./node_modules/moment/locale/az.js",
          "./be": "./node_modules/moment/locale/be.js",
          "./be.js": "./node_modules/moment/locale/be.js",
          "./bg": "./node_modules/moment/locale/bg.js",
          "./bg.js": "./node_modules/moment/locale/bg.js",
          "./bm": "./node_modules/moment/locale/bm.js",
          "./bm.js": "./node_modules/moment/locale/bm.js",
          "./bn": "./node_modules/moment/locale/bn.js",
          "./bn.js": "./node_modules/moment/locale/bn.js",
          "./bo": "./node_modules/moment/locale/bo.js",
          "./bo.js": "./node_modules/moment/locale/bo.js",
          "./br": "./node_modules/moment/locale/br.js",
          "./br.js": "./node_modules/moment/locale/br.js",
          "./bs": "./node_modules/moment/locale/bs.js",
          "./bs.js": "./node_modules/moment/locale/bs.js",
          "./ca": "./node_modules/moment/locale/ca.js",
          "./ca.js": "./node_modules/moment/locale/ca.js",
          "./cs": "./node_modules/moment/locale/cs.js",
          "./cs.js": "./node_modules/moment/locale/cs.js",
          "./cv": "./node_modules/moment/locale/cv.js",
          "./cv.js": "./node_modules/moment/locale/cv.js",
          "./cy": "./node_modules/moment/locale/cy.js",
          "./cy.js": "./node_modules/moment/locale/cy.js",
          "./da": "./node_modules/moment/locale/da.js",
          "./da.js": "./node_modules/moment/locale/da.js",
          "./de": "./node_modules/moment/locale/de.js",
          "./de-at": "./node_modules/moment/locale/de-at.js",
          "./de-at.js": "./node_modules/moment/locale/de-at.js",
          "./de-ch": "./node_modules/moment/locale/de-ch.js",
          "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
          "./de.js": "./node_modules/moment/locale/de.js",
          "./dv": "./node_modules/moment/locale/dv.js",
          "./dv.js": "./node_modules/moment/locale/dv.js",
          "./el": "./node_modules/moment/locale/el.js",
          "./el.js": "./node_modules/moment/locale/el.js",
          "./en-SG": "./node_modules/moment/locale/en-SG.js",
          "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
          "./en-au": "./node_modules/moment/locale/en-au.js",
          "./en-au.js": "./node_modules/moment/locale/en-au.js",
          "./en-ca": "./node_modules/moment/locale/en-ca.js",
          "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
          "./en-gb": "./node_modules/moment/locale/en-gb.js",
          "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
          "./en-ie": "./node_modules/moment/locale/en-ie.js",
          "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
          "./en-il": "./node_modules/moment/locale/en-il.js",
          "./en-il.js": "./node_modules/moment/locale/en-il.js",
          "./en-nz": "./node_modules/moment/locale/en-nz.js",
          "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
          "./eo": "./node_modules/moment/locale/eo.js",
          "./eo.js": "./node_modules/moment/locale/eo.js",
          "./es": "./node_modules/moment/locale/es.js",
          "./es-do": "./node_modules/moment/locale/es-do.js",
          "./es-do.js": "./node_modules/moment/locale/es-do.js",
          "./es-us": "./node_modules/moment/locale/es-us.js",
          "./es-us.js": "./node_modules/moment/locale/es-us.js",
          "./es.js": "./node_modules/moment/locale/es.js",
          "./et": "./node_modules/moment/locale/et.js",
          "./et.js": "./node_modules/moment/locale/et.js",
          "./eu": "./node_modules/moment/locale/eu.js",
          "./eu.js": "./node_modules/moment/locale/eu.js",
          "./fa": "./node_modules/moment/locale/fa.js",
          "./fa.js": "./node_modules/moment/locale/fa.js",
          "./fi": "./node_modules/moment/locale/fi.js",
          "./fi.js": "./node_modules/moment/locale/fi.js",
          "./fo": "./node_modules/moment/locale/fo.js",
          "./fo.js": "./node_modules/moment/locale/fo.js",
          "./fr": "./node_modules/moment/locale/fr.js",
          "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
          "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
          "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
          "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
          "./fr.js": "./node_modules/moment/locale/fr.js",
          "./fy": "./node_modules/moment/locale/fy.js",
          "./fy.js": "./node_modules/moment/locale/fy.js",
          "./ga": "./node_modules/moment/locale/ga.js",
          "./ga.js": "./node_modules/moment/locale/ga.js",
          "./gd": "./node_modules/moment/locale/gd.js",
          "./gd.js": "./node_modules/moment/locale/gd.js",
          "./gl": "./node_modules/moment/locale/gl.js",
          "./gl.js": "./node_modules/moment/locale/gl.js",
          "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
          "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
          "./gu": "./node_modules/moment/locale/gu.js",
          "./gu.js": "./node_modules/moment/locale/gu.js",
          "./he": "./node_modules/moment/locale/he.js",
          "./he.js": "./node_modules/moment/locale/he.js",
          "./hi": "./node_modules/moment/locale/hi.js",
          "./hi.js": "./node_modules/moment/locale/hi.js",
          "./hr": "./node_modules/moment/locale/hr.js",
          "./hr.js": "./node_modules/moment/locale/hr.js",
          "./hu": "./node_modules/moment/locale/hu.js",
          "./hu.js": "./node_modules/moment/locale/hu.js",
          "./hy-am": "./node_modules/moment/locale/hy-am.js",
          "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
          "./id": "./node_modules/moment/locale/id.js",
          "./id.js": "./node_modules/moment/locale/id.js",
          "./is": "./node_modules/moment/locale/is.js",
          "./is.js": "./node_modules/moment/locale/is.js",
          "./it": "./node_modules/moment/locale/it.js",
          "./it-ch": "./node_modules/moment/locale/it-ch.js",
          "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
          "./it.js": "./node_modules/moment/locale/it.js",
          "./ja": "./node_modules/moment/locale/ja.js",
          "./ja.js": "./node_modules/moment/locale/ja.js",
          "./jv": "./node_modules/moment/locale/jv.js",
          "./jv.js": "./node_modules/moment/locale/jv.js",
          "./ka": "./node_modules/moment/locale/ka.js",
          "./ka.js": "./node_modules/moment/locale/ka.js",
          "./kk": "./node_modules/moment/locale/kk.js",
          "./kk.js": "./node_modules/moment/locale/kk.js",
          "./km": "./node_modules/moment/locale/km.js",
          "./km.js": "./node_modules/moment/locale/km.js",
          "./kn": "./node_modules/moment/locale/kn.js",
          "./kn.js": "./node_modules/moment/locale/kn.js",
          "./ko": "./node_modules/moment/locale/ko.js",
          "./ko.js": "./node_modules/moment/locale/ko.js",
          "./ku": "./node_modules/moment/locale/ku.js",
          "./ku.js": "./node_modules/moment/locale/ku.js",
          "./ky": "./node_modules/moment/locale/ky.js",
          "./ky.js": "./node_modules/moment/locale/ky.js",
          "./lb": "./node_modules/moment/locale/lb.js",
          "./lb.js": "./node_modules/moment/locale/lb.js",
          "./lo": "./node_modules/moment/locale/lo.js",
          "./lo.js": "./node_modules/moment/locale/lo.js",
          "./lt": "./node_modules/moment/locale/lt.js",
          "./lt.js": "./node_modules/moment/locale/lt.js",
          "./lv": "./node_modules/moment/locale/lv.js",
          "./lv.js": "./node_modules/moment/locale/lv.js",
          "./me": "./node_modules/moment/locale/me.js",
          "./me.js": "./node_modules/moment/locale/me.js",
          "./mi": "./node_modules/moment/locale/mi.js",
          "./mi.js": "./node_modules/moment/locale/mi.js",
          "./mk": "./node_modules/moment/locale/mk.js",
          "./mk.js": "./node_modules/moment/locale/mk.js",
          "./ml": "./node_modules/moment/locale/ml.js",
          "./ml.js": "./node_modules/moment/locale/ml.js",
          "./mn": "./node_modules/moment/locale/mn.js",
          "./mn.js": "./node_modules/moment/locale/mn.js",
          "./mr": "./node_modules/moment/locale/mr.js",
          "./mr.js": "./node_modules/moment/locale/mr.js",
          "./ms": "./node_modules/moment/locale/ms.js",
          "./ms-my": "./node_modules/moment/locale/ms-my.js",
          "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
          "./ms.js": "./node_modules/moment/locale/ms.js",
          "./mt": "./node_modules/moment/locale/mt.js",
          "./mt.js": "./node_modules/moment/locale/mt.js",
          "./my": "./node_modules/moment/locale/my.js",
          "./my.js": "./node_modules/moment/locale/my.js",
          "./nb": "./node_modules/moment/locale/nb.js",
          "./nb.js": "./node_modules/moment/locale/nb.js",
          "./ne": "./node_modules/moment/locale/ne.js",
          "./ne.js": "./node_modules/moment/locale/ne.js",
          "./nl": "./node_modules/moment/locale/nl.js",
          "./nl-be": "./node_modules/moment/locale/nl-be.js",
          "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
          "./nl.js": "./node_modules/moment/locale/nl.js",
          "./nn": "./node_modules/moment/locale/nn.js",
          "./nn.js": "./node_modules/moment/locale/nn.js",
          "./pa-in": "./node_modules/moment/locale/pa-in.js",
          "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
          "./pl": "./node_modules/moment/locale/pl.js",
          "./pl.js": "./node_modules/moment/locale/pl.js",
          "./pt": "./node_modules/moment/locale/pt.js",
          "./pt-br": "./node_modules/moment/locale/pt-br.js",
          "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
          "./pt.js": "./node_modules/moment/locale/pt.js",
          "./ro": "./node_modules/moment/locale/ro.js",
          "./ro.js": "./node_modules/moment/locale/ro.js",
          "./ru": "./node_modules/moment/locale/ru.js",
          "./ru.js": "./node_modules/moment/locale/ru.js",
          "./sd": "./node_modules/moment/locale/sd.js",
          "./sd.js": "./node_modules/moment/locale/sd.js",
          "./se": "./node_modules/moment/locale/se.js",
          "./se.js": "./node_modules/moment/locale/se.js",
          "./si": "./node_modules/moment/locale/si.js",
          "./si.js": "./node_modules/moment/locale/si.js",
          "./sk": "./node_modules/moment/locale/sk.js",
          "./sk.js": "./node_modules/moment/locale/sk.js",
          "./sl": "./node_modules/moment/locale/sl.js",
          "./sl.js": "./node_modules/moment/locale/sl.js",
          "./sq": "./node_modules/moment/locale/sq.js",
          "./sq.js": "./node_modules/moment/locale/sq.js",
          "./sr": "./node_modules/moment/locale/sr.js",
          "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
          "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
          "./sr.js": "./node_modules/moment/locale/sr.js",
          "./ss": "./node_modules/moment/locale/ss.js",
          "./ss.js": "./node_modules/moment/locale/ss.js",
          "./sv": "./node_modules/moment/locale/sv.js",
          "./sv.js": "./node_modules/moment/locale/sv.js",
          "./sw": "./node_modules/moment/locale/sw.js",
          "./sw.js": "./node_modules/moment/locale/sw.js",
          "./ta": "./node_modules/moment/locale/ta.js",
          "./ta.js": "./node_modules/moment/locale/ta.js",
          "./te": "./node_modules/moment/locale/te.js",
          "./te.js": "./node_modules/moment/locale/te.js",
          "./tet": "./node_modules/moment/locale/tet.js",
          "./tet.js": "./node_modules/moment/locale/tet.js",
          "./tg": "./node_modules/moment/locale/tg.js",
          "./tg.js": "./node_modules/moment/locale/tg.js",
          "./th": "./node_modules/moment/locale/th.js",
          "./th.js": "./node_modules/moment/locale/th.js",
          "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
          "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
          "./tlh": "./node_modules/moment/locale/tlh.js",
          "./tlh.js": "./node_modules/moment/locale/tlh.js",
          "./tr": "./node_modules/moment/locale/tr.js",
          "./tr.js": "./node_modules/moment/locale/tr.js",
          "./tzl": "./node_modules/moment/locale/tzl.js",
          "./tzl.js": "./node_modules/moment/locale/tzl.js",
          "./tzm": "./node_modules/moment/locale/tzm.js",
          "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
          "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
          "./tzm.js": "./node_modules/moment/locale/tzm.js",
          "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
          "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
          "./uk": "./node_modules/moment/locale/uk.js",
          "./uk.js": "./node_modules/moment/locale/uk.js",
          "./ur": "./node_modules/moment/locale/ur.js",
          "./ur.js": "./node_modules/moment/locale/ur.js",
          "./uz": "./node_modules/moment/locale/uz.js",
          "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
          "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
          "./uz.js": "./node_modules/moment/locale/uz.js",
          "./vi": "./node_modules/moment/locale/vi.js",
          "./vi.js": "./node_modules/moment/locale/vi.js",
          "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
          "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
          "./yo": "./node_modules/moment/locale/yo.js",
          "./yo.js": "./node_modules/moment/locale/yo.js",
          "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
          "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
          "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
          "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
          "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
          "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
        };


        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }

        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

        /***/
      }),

    /***/
    "./node_modules/moment/locale/af.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/af.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var af = moment.defineLocale('af', {
            months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
            monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
            weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
            weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
            weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
            meridiemParse: /vm|nm/i,
            isPM: function (input) {
              return /^nm$/i.test(input);
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours < 12) {
                return isLower ? 'vm' : 'VM';
              } else {
                return isLower ? 'nm' : 'NM';
              }
            },
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Vandag om] LT',
              nextDay: '[Môre om] LT',
              nextWeek: 'dddd [om] LT',
              lastDay: '[Gister om] LT',
              lastWeek: '[Laas] dddd [om] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'oor %s',
              past: '%s gelede',
              s: '\'n paar sekondes',
              ss: '%d sekondes',
              m: '\'n minuut',
              mm: '%d minute',
              h: '\'n uur',
              hh: '%d ure',
              d: '\'n dag',
              dd: '%d dae',
              M: '\'n maand',
              MM: '%d maande',
              y: '\'n jaar',
              yy: '%d jaar'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (number) {
              return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
            },
            week: {
              dow: 1, // Maandag is die eerste dag van die week.
              doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
            }
          });

          return af;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ar-dz.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/ar-dz.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var arDz = moment.defineLocale('ar-dz', {
            months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
            monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
            weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[اليوم على الساعة] LT',
              nextDay: '[غدا على الساعة] LT',
              nextWeek: 'dddd [على الساعة] LT',
              lastDay: '[أمس على الساعة] LT',
              lastWeek: 'dddd [على الساعة] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'في %s',
              past: 'منذ %s',
              s: 'ثوان',
              ss: '%d ثانية',
              m: 'دقيقة',
              mm: '%d دقائق',
              h: 'ساعة',
              hh: '%d ساعات',
              d: 'يوم',
              dd: '%d أيام',
              M: 'شهر',
              MM: '%d أشهر',
              y: 'سنة',
              yy: '%d سنوات'
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return arDz;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ar-kw.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/ar-kw.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var arKw = moment.defineLocale('ar-kw', {
            months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
            monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
            weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[اليوم على الساعة] LT',
              nextDay: '[غدا على الساعة] LT',
              nextWeek: 'dddd [على الساعة] LT',
              lastDay: '[أمس على الساعة] LT',
              lastWeek: 'dddd [على الساعة] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'في %s',
              past: 'منذ %s',
              s: 'ثوان',
              ss: '%d ثانية',
              m: 'دقيقة',
              mm: '%d دقائق',
              h: 'ساعة',
              hh: '%d ساعات',
              d: 'يوم',
              dd: '%d أيام',
              M: 'شهر',
              MM: '%d أشهر',
              y: 'سنة',
              yy: '%d سنوات'
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return arKw;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ar-ly.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/ar-ly.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '1',
              '2': '2',
              '3': '3',
              '4': '4',
              '5': '5',
              '6': '6',
              '7': '7',
              '8': '8',
              '9': '9',
              '0': '0'
            },
            pluralForm = function (n) {
              return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
            },
            plurals = {
              s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
              m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
              h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
              d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
              M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
              y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
            },
            pluralize = function (u) {
              return function (number, withoutSuffix, string, isFuture) {
                var f = pluralForm(number),
                  str = plurals[u][pluralForm(number)];
                if (f === 2) {
                  str = str[withoutSuffix ? 0 : 1];
                }
                return str.replace(/%d/i, number);
              };
            },
            months = [
              'يناير',
              'فبراير',
              'مارس',
              'أبريل',
              'مايو',
              'يونيو',
              'يوليو',
              'أغسطس',
              'سبتمبر',
              'أكتوبر',
              'نوفمبر',
              'ديسمبر'
            ];

          var arLy = moment.defineLocale('ar-ly', {
            months: months,
            monthsShort: months,
            weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'D/\u200FM/\u200FYYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            meridiemParse: /ص|م/,
            isPM: function (input) {
              return 'م' === input;
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'ص';
              } else {
                return 'م';
              }
            },
            calendar: {
              sameDay: '[اليوم عند الساعة] LT',
              nextDay: '[غدًا عند الساعة] LT',
              nextWeek: 'dddd [عند الساعة] LT',
              lastDay: '[أمس عند الساعة] LT',
              lastWeek: 'dddd [عند الساعة] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'بعد %s',
              past: 'منذ %s',
              s: pluralize('s'),
              ss: pluralize('s'),
              m: pluralize('m'),
              mm: pluralize('m'),
              h: pluralize('h'),
              hh: pluralize('h'),
              d: pluralize('d'),
              dd: pluralize('d'),
              M: pluralize('M'),
              MM: pluralize('M'),
              y: pluralize('y'),
              yy: pluralize('y')
            },
            preparse: function (string) {
              return string.replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              }).replace(/,/g, '،');
            },
            week: {
              dow: 6, // Saturday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return arLy;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ar-ma.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/ar-ma.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var arMa = moment.defineLocale('ar-ma', {
            months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
            monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
            weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[اليوم على الساعة] LT',
              nextDay: '[غدا على الساعة] LT',
              nextWeek: 'dddd [على الساعة] LT',
              lastDay: '[أمس على الساعة] LT',
              lastWeek: 'dddd [على الساعة] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'في %s',
              past: 'منذ %s',
              s: 'ثوان',
              ss: '%d ثانية',
              m: 'دقيقة',
              mm: '%d دقائق',
              h: 'ساعة',
              hh: '%d ساعات',
              d: 'يوم',
              dd: '%d أيام',
              M: 'شهر',
              MM: '%d أشهر',
              y: 'سنة',
              yy: '%d سنوات'
            },
            week: {
              dow: 6, // Saturday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return arMa;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ar-sa.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/ar-sa.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '١',
              '2': '٢',
              '3': '٣',
              '4': '٤',
              '5': '٥',
              '6': '٦',
              '7': '٧',
              '8': '٨',
              '9': '٩',
              '0': '٠'
            },
            numberMap = {
              '١': '1',
              '٢': '2',
              '٣': '3',
              '٤': '4',
              '٥': '5',
              '٦': '6',
              '٧': '7',
              '٨': '8',
              '٩': '9',
              '٠': '0'
            };

          var arSa = moment.defineLocale('ar-sa', {
            months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
            monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
            weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            meridiemParse: /ص|م/,
            isPM: function (input) {
              return 'م' === input;
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'ص';
              } else {
                return 'م';
              }
            },
            calendar: {
              sameDay: '[اليوم على الساعة] LT',
              nextDay: '[غدا على الساعة] LT',
              nextWeek: 'dddd [على الساعة] LT',
              lastDay: '[أمس على الساعة] LT',
              lastWeek: 'dddd [على الساعة] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'في %s',
              past: 'منذ %s',
              s: 'ثوان',
              ss: '%d ثانية',
              m: 'دقيقة',
              mm: '%d دقائق',
              h: 'ساعة',
              hh: '%d ساعات',
              d: 'يوم',
              dd: '%d أيام',
              M: 'شهر',
              MM: '%d أشهر',
              y: 'سنة',
              yy: '%d سنوات'
            },
            preparse: function (string) {
              return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
              }).replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              }).replace(/,/g, '،');
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return arSa;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ar-tn.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/ar-tn.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var arTn = moment.defineLocale('ar-tn', {
            months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
            monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
            weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[اليوم على الساعة] LT',
              nextDay: '[غدا على الساعة] LT',
              nextWeek: 'dddd [على الساعة] LT',
              lastDay: '[أمس على الساعة] LT',
              lastWeek: 'dddd [على الساعة] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'في %s',
              past: 'منذ %s',
              s: 'ثوان',
              ss: '%d ثانية',
              m: 'دقيقة',
              mm: '%d دقائق',
              h: 'ساعة',
              hh: '%d ساعات',
              d: 'يوم',
              dd: '%d أيام',
              M: 'شهر',
              MM: '%d أشهر',
              y: 'سنة',
              yy: '%d سنوات'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return arTn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ar.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ar.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '١',
              '2': '٢',
              '3': '٣',
              '4': '٤',
              '5': '٥',
              '6': '٦',
              '7': '٧',
              '8': '٨',
              '9': '٩',
              '0': '٠'
            },
            numberMap = {
              '١': '1',
              '٢': '2',
              '٣': '3',
              '٤': '4',
              '٥': '5',
              '٦': '6',
              '٧': '7',
              '٨': '8',
              '٩': '9',
              '٠': '0'
            },
            pluralForm = function (n) {
              return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
            },
            plurals = {
              s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
              m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
              h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
              d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
              M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
              y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
            },
            pluralize = function (u) {
              return function (number, withoutSuffix, string, isFuture) {
                var f = pluralForm(number),
                  str = plurals[u][pluralForm(number)];
                if (f === 2) {
                  str = str[withoutSuffix ? 0 : 1];
                }
                return str.replace(/%d/i, number);
              };
            },
            months = [
              'يناير',
              'فبراير',
              'مارس',
              'أبريل',
              'مايو',
              'يونيو',
              'يوليو',
              'أغسطس',
              'سبتمبر',
              'أكتوبر',
              'نوفمبر',
              'ديسمبر'
            ];

          var ar = moment.defineLocale('ar', {
            months: months,
            monthsShort: months,
            weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'D/\u200FM/\u200FYYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            meridiemParse: /ص|م/,
            isPM: function (input) {
              return 'م' === input;
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'ص';
              } else {
                return 'م';
              }
            },
            calendar: {
              sameDay: '[اليوم عند الساعة] LT',
              nextDay: '[غدًا عند الساعة] LT',
              nextWeek: 'dddd [عند الساعة] LT',
              lastDay: '[أمس عند الساعة] LT',
              lastWeek: 'dddd [عند الساعة] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'بعد %s',
              past: 'منذ %s',
              s: pluralize('s'),
              ss: pluralize('s'),
              m: pluralize('m'),
              mm: pluralize('m'),
              h: pluralize('h'),
              hh: pluralize('h'),
              d: pluralize('d'),
              dd: pluralize('d'),
              M: pluralize('M'),
              MM: pluralize('M'),
              y: pluralize('y'),
              yy: pluralize('y')
            },
            preparse: function (string) {
              return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
              }).replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              }).replace(/,/g, '،');
            },
            week: {
              dow: 6, // Saturday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return ar;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/az.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/az.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var suffixes = {
            1: '-inci',
            5: '-inci',
            8: '-inci',
            70: '-inci',
            80: '-inci',
            2: '-nci',
            7: '-nci',
            20: '-nci',
            50: '-nci',
            3: '-üncü',
            4: '-üncü',
            100: '-üncü',
            6: '-ncı',
            9: '-uncu',
            10: '-uncu',
            30: '-uncu',
            60: '-ıncı',
            90: '-ıncı'
          };

          var az = moment.defineLocale('az', {
            months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
            monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
            weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
            weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
            weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[bugün saat] LT',
              nextDay: '[sabah saat] LT',
              nextWeek: '[gələn həftə] dddd [saat] LT',
              lastDay: '[dünən] LT',
              lastWeek: '[keçən həftə] dddd [saat] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s sonra',
              past: '%s əvvəl',
              s: 'birneçə saniyə',
              ss: '%d saniyə',
              m: 'bir dəqiqə',
              mm: '%d dəqiqə',
              h: 'bir saat',
              hh: '%d saat',
              d: 'bir gün',
              dd: '%d gün',
              M: 'bir ay',
              MM: '%d ay',
              y: 'bir il',
              yy: '%d il'
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (input) {
              return /^(gündüz|axşam)$/.test(input);
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'gecə';
              } else if (hour < 12) {
                return 'səhər';
              } else if (hour < 17) {
                return 'gündüz';
              } else {
                return 'axşam';
              }
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (number) {
              if (number === 0) { // special case for zero
                return number + '-ıncı';
              }
              var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
              return number + (suffixes[a] || suffixes[b] || suffixes[c]);
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return az;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/be.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/be.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function plural(word, num) {
            var forms = word.split('_');
            return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
          }

          function relativeTimeWithPlural(number, withoutSuffix, key) {
            var format = {
              'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
              'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
              'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
              'dd': 'дзень_дні_дзён',
              'MM': 'месяц_месяцы_месяцаў',
              'yy': 'год_гады_гадоў'
            };
            if (key === 'm') {
              return withoutSuffix ? 'хвіліна' : 'хвіліну';
            } else if (key === 'h') {
              return withoutSuffix ? 'гадзіна' : 'гадзіну';
            } else {
              return number + ' ' + plural(format[key], +number);
            }
          }

          var be = moment.defineLocale('be', {
            months: {
              format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
              standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
            },
            monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
            weekdays: {
              format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
              standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
              isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
            weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY г.',
              LLL: 'D MMMM YYYY г., HH:mm',
              LLLL: 'dddd, D MMMM YYYY г., HH:mm'
            },
            calendar: {
              sameDay: '[Сёння ў] LT',
              nextDay: '[Заўтра ў] LT',
              lastDay: '[Учора ў] LT',
              nextWeek: function () {
                return '[У] dddd [ў] LT';
              },
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return '[У мінулую] dddd [ў] LT';
                  case 1:
                  case 2:
                  case 4:
                    return '[У мінулы] dddd [ў] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'праз %s',
              past: '%s таму',
              s: 'некалькі секунд',
              m: relativeTimeWithPlural,
              mm: relativeTimeWithPlural,
              h: relativeTimeWithPlural,
              hh: relativeTimeWithPlural,
              d: 'дзень',
              dd: relativeTimeWithPlural,
              M: 'месяц',
              MM: relativeTimeWithPlural,
              y: 'год',
              yy: relativeTimeWithPlural
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (input) {
              return /^(дня|вечара)$/.test(input);
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'ночы';
              } else if (hour < 12) {
                return 'раніцы';
              } else if (hour < 17) {
                return 'дня';
              } else {
                return 'вечара';
              }
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                  return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
                case 'D':
                  return number + '-га';
                default:
                  return number;
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return be;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/bg.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/bg.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var bg = moment.defineLocale('bg', {
            months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
            monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
            weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
            weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
            weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'D.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY H:mm',
              LLLL: 'dddd, D MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[Днес в] LT',
              nextDay: '[Утре в] LT',
              nextWeek: 'dddd [в] LT',
              lastDay: '[Вчера в] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return '[В изминалата] dddd [в] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[В изминалия] dddd [в] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'след %s',
              past: 'преди %s',
              s: 'няколко секунди',
              ss: '%d секунди',
              m: 'минута',
              mm: '%d минути',
              h: 'час',
              hh: '%d часа',
              d: 'ден',
              dd: '%d дни',
              M: 'месец',
              MM: '%d месеца',
              y: 'година',
              yy: '%d години'
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (number) {
              var lastDigit = number % 10,
                last2Digits = number % 100;
              if (number === 0) {
                return number + '-ев';
              } else if (last2Digits === 0) {
                return number + '-ен';
              } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
              } else if (lastDigit === 1) {
                return number + '-ви';
              } else if (lastDigit === 2) {
                return number + '-ри';
              } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
              } else {
                return number + '-ти';
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return bg;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/bm.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/bm.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var bm = moment.defineLocale('bm', {
            months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
            monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
            weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
            weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
            weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'MMMM [tile] D [san] YYYY',
              LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
              LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
            },
            calendar: {
              sameDay: '[Bi lɛrɛ] LT',
              nextDay: '[Sini lɛrɛ] LT',
              nextWeek: 'dddd [don lɛrɛ] LT',
              lastDay: '[Kunu lɛrɛ] LT',
              lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s kɔnɔ',
              past: 'a bɛ %s bɔ',
              s: 'sanga dama dama',
              ss: 'sekondi %d',
              m: 'miniti kelen',
              mm: 'miniti %d',
              h: 'lɛrɛ kelen',
              hh: 'lɛrɛ %d',
              d: 'tile kelen',
              dd: 'tile %d',
              M: 'kalo kelen',
              MM: 'kalo %d',
              y: 'san kelen',
              yy: 'san %d'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return bm;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/bn.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/bn.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '১',
              '2': '২',
              '3': '৩',
              '4': '৪',
              '5': '৫',
              '6': '৬',
              '7': '৭',
              '8': '৮',
              '9': '৯',
              '0': '০'
            },
            numberMap = {
              '১': '1',
              '২': '2',
              '৩': '3',
              '৪': '4',
              '৫': '5',
              '৬': '6',
              '৭': '7',
              '৮': '8',
              '৯': '9',
              '০': '0'
            };

          var bn = moment.defineLocale('bn', {
            months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
            monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
            weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
            weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
            weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
            longDateFormat: {
              LT: 'A h:mm সময়',
              LTS: 'A h:mm:ss সময়',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm সময়',
              LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
            },
            calendar: {
              sameDay: '[আজ] LT',
              nextDay: '[আগামীকাল] LT',
              nextWeek: 'dddd, LT',
              lastDay: '[গতকাল] LT',
              lastWeek: '[গত] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s পরে',
              past: '%s আগে',
              s: 'কয়েক সেকেন্ড',
              ss: '%d সেকেন্ড',
              m: 'এক মিনিট',
              mm: '%d মিনিট',
              h: 'এক ঘন্টা',
              hh: '%d ঘন্টা',
              d: 'এক দিন',
              dd: '%d দিন',
              M: 'এক মাস',
              MM: '%d মাস',
              y: 'এক বছর',
              yy: '%d বছর'
            },
            preparse: function (string) {
              return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if ((meridiem === 'রাত' && hour >= 4) ||
                (meridiem === 'দুপুর' && hour < 5) ||
                meridiem === 'বিকাল') {
                return hour + 12;
              } else {
                return hour;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'রাত';
              } else if (hour < 10) {
                return 'সকাল';
              } else if (hour < 17) {
                return 'দুপুর';
              } else if (hour < 20) {
                return 'বিকাল';
              } else {
                return 'রাত';
              }
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return bn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/bo.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/bo.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '༡',
              '2': '༢',
              '3': '༣',
              '4': '༤',
              '5': '༥',
              '6': '༦',
              '7': '༧',
              '8': '༨',
              '9': '༩',
              '0': '༠'
            },
            numberMap = {
              '༡': '1',
              '༢': '2',
              '༣': '3',
              '༤': '4',
              '༥': '5',
              '༦': '6',
              '༧': '7',
              '༨': '8',
              '༩': '9',
              '༠': '0'
            };

          var bo = moment.defineLocale('bo', {
            months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
            monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
            weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
            weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
            weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
            longDateFormat: {
              LT: 'A h:mm',
              LTS: 'A h:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm',
              LLLL: 'dddd, D MMMM YYYY, A h:mm'
            },
            calendar: {
              sameDay: '[དི་རིང] LT',
              nextDay: '[སང་ཉིན] LT',
              nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
              lastDay: '[ཁ་སང] LT',
              lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s ལ་',
              past: '%s སྔན་ལ',
              s: 'ལམ་སང',
              ss: '%d སྐར་ཆ།',
              m: 'སྐར་མ་གཅིག',
              mm: '%d སྐར་མ',
              h: 'ཆུ་ཚོད་གཅིག',
              hh: '%d ཆུ་ཚོད',
              d: 'ཉིན་གཅིག',
              dd: '%d ཉིན་',
              M: 'ཟླ་བ་གཅིག',
              MM: '%d ཟླ་བ',
              y: 'ལོ་གཅིག',
              yy: '%d ལོ'
            },
            preparse: function (string) {
              return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
                (meridiem === 'ཉིན་གུང' && hour < 5) ||
                meridiem === 'དགོང་དག') {
                return hour + 12;
              } else {
                return hour;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'མཚན་མོ';
              } else if (hour < 10) {
                return 'ཞོགས་ཀས';
              } else if (hour < 17) {
                return 'ཉིན་གུང';
              } else if (hour < 20) {
                return 'དགོང་དག';
              } else {
                return 'མཚན་མོ';
              }
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return bo;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/br.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/br.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function relativeTimeWithMutation(number, withoutSuffix, key) {
            var format = {
              'mm': 'munutenn',
              'MM': 'miz',
              'dd': 'devezh'
            };
            return number + ' ' + mutation(format[key], number);
          }

          function specialMutationForYears(number) {
            switch (lastNumber(number)) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return number + ' bloaz';
              default:
                return number + ' vloaz';
            }
          }

          function lastNumber(number) {
            if (number > 9) {
              return lastNumber(number % 10);
            }
            return number;
          }

          function mutation(text, number) {
            if (number === 2) {
              return softMutation(text);
            }
            return text;
          }

          function softMutation(text) {
            var mutationTable = {
              'm': 'v',
              'b': 'v',
              'd': 'z'
            };
            if (mutationTable[text.charAt(0)] === undefined) {
              return text;
            }
            return mutationTable[text.charAt(0)] + text.substring(1);
          }

          var br = moment.defineLocale('br', {
            months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
            monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
            weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
            weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
            weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'h[e]mm A',
              LTS: 'h[e]mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D [a viz] MMMM YYYY',
              LLL: 'D [a viz] MMMM YYYY h[e]mm A',
              LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
            },
            calendar: {
              sameDay: '[Hiziv da] LT',
              nextDay: '[Warc\'hoazh da] LT',
              nextWeek: 'dddd [da] LT',
              lastDay: '[Dec\'h da] LT',
              lastWeek: 'dddd [paset da] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'a-benn %s',
              past: '%s \'zo',
              s: 'un nebeud segondennoù',
              ss: '%d eilenn',
              m: 'ur vunutenn',
              mm: relativeTimeWithMutation,
              h: 'un eur',
              hh: '%d eur',
              d: 'un devezh',
              dd: relativeTimeWithMutation,
              M: 'ur miz',
              MM: relativeTimeWithMutation,
              y: 'ur bloaz',
              yy: specialMutationForYears
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (number) {
              var output = (number === 1) ? 'añ' : 'vet';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return br;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/bs.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/bs.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function translate(number, withoutSuffix, key) {
            var result = number + ' ';
            switch (key) {
              case 'ss':
                if (number === 1) {
                  result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'sekunde';
                } else {
                  result += 'sekundi';
                }
                return result;
              case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
              case 'mm':
                if (number === 1) {
                  result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'minute';
                } else {
                  result += 'minuta';
                }
                return result;
              case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
              case 'hh':
                if (number === 1) {
                  result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'sata';
                } else {
                  result += 'sati';
                }
                return result;
              case 'dd':
                if (number === 1) {
                  result += 'dan';
                } else {
                  result += 'dana';
                }
                return result;
              case 'MM':
                if (number === 1) {
                  result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'mjeseca';
                } else {
                  result += 'mjeseci';
                }
                return result;
              case 'yy':
                if (number === 1) {
                  result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'godine';
                } else {
                  result += 'godina';
                }
                return result;
            }
          }

          var bs = moment.defineLocale('bs', {
            months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
            monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
            monthsParseExact: true,
            weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
            weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
            weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd, D. MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[danas u] LT',
              nextDay: '[sutra u] LT',
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[u] [nedjelju] [u] LT';
                  case 3:
                    return '[u] [srijedu] [u] LT';
                  case 6:
                    return '[u] [subotu] [u] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[u] dddd [u] LT';
                }
              },
              lastDay: '[jučer u] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return '[prošlu] dddd [u] LT';
                  case 6:
                    return '[prošle] [subote] [u] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[prošli] dddd [u] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'za %s',
              past: 'prije %s',
              s: 'par sekundi',
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: 'dan',
              dd: translate,
              M: 'mjesec',
              MM: translate,
              y: 'godinu',
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return bs;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ca.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ca.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ca = moment.defineLocale('ca', {
            months: {
              standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
              format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
              isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
            monthsParseExact: true,
            weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
            weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
            weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM [de] YYYY',
              ll: 'D MMM YYYY',
              LLL: 'D MMMM [de] YYYY [a les] H:mm',
              lll: 'D MMM YYYY, H:mm',
              LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
              llll: 'ddd D MMM YYYY, H:mm'
            },
            calendar: {
              sameDay: function () {
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
              },
              nextDay: function () {
                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
              },
              nextWeek: function () {
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
              },
              lastDay: function () {
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
              },
              lastWeek: function () {
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'd\'aquí %s',
              past: 'fa %s',
              s: 'uns segons',
              ss: '%d segons',
              m: 'un minut',
              mm: '%d minuts',
              h: 'una hora',
              hh: '%d hores',
              d: 'un dia',
              dd: '%d dies',
              M: 'un mes',
              MM: '%d mesos',
              y: 'un any',
              yy: '%d anys'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (number, period) {
              var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : 'è';
              if (period === 'w' || period === 'W') {
                output = 'a';
              }
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return ca;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/cs.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/cs.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
            monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

          var monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
          // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
          // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
          var monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

          function plural(n) {
            return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
          }

          function translate(number, withoutSuffix, key, isFuture) {
            var result = number + ' ';
            switch (key) {
              case 's': // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
              case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'sekundy' : 'sekund');
                } else {
                  return result + 'sekundami';
                }
                break;
              case 'm': // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
              case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'minuty' : 'minut');
                } else {
                  return result + 'minutami';
                }
                break;
              case 'h': // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
              case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'hodiny' : 'hodin');
                } else {
                  return result + 'hodinami';
                }
                break;
              case 'd': // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
              case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'dny' : 'dní');
                } else {
                  return result + 'dny';
                }
                break;
              case 'M': // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
              case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'měsíce' : 'měsíců');
                } else {
                  return result + 'měsíci';
                }
                break;
              case 'y': // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
              case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'roky' : 'let');
                } else {
                  return result + 'lety';
                }
                break;
            }
          }

          var cs = moment.defineLocale('cs', {
            months: months,
            monthsShort: monthsShort,
            monthsRegex: monthsRegex,
            monthsShortRegex: monthsRegex,
            // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
            // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: monthsParse,
            longMonthsParse: monthsParse,
            shortMonthsParse: monthsParse,
            weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
            weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
            weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd D. MMMM YYYY H:mm',
              l: 'D. M. YYYY'
            },
            calendar: {
              sameDay: '[dnes v] LT',
              nextDay: '[zítra v] LT',
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[v neděli v] LT';
                  case 1:
                  case 2:
                    return '[v] dddd [v] LT';
                  case 3:
                    return '[ve středu v] LT';
                  case 4:
                    return '[ve čtvrtek v] LT';
                  case 5:
                    return '[v pátek v] LT';
                  case 6:
                    return '[v sobotu v] LT';
                }
              },
              lastDay: '[včera v] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[minulou neděli v] LT';
                  case 1:
                  case 2:
                    return '[minulé] dddd [v] LT';
                  case 3:
                    return '[minulou středu v] LT';
                  case 4:
                  case 5:
                    return '[minulý] dddd [v] LT';
                  case 6:
                    return '[minulou sobotu v] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'za %s',
              past: 'před %s',
              s: translate,
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: translate,
              dd: translate,
              M: translate,
              MM: translate,
              y: translate,
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return cs;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/cv.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/cv.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var cv = moment.defineLocale('cv', {
            months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
            monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
            weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
            weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
            weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD-MM-YYYY',
              LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
              LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
              LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
            },
            calendar: {
              sameDay: '[Паян] LT [сехетре]',
              nextDay: '[Ыран] LT [сехетре]',
              lastDay: '[Ӗнер] LT [сехетре]',
              nextWeek: '[Ҫитес] dddd LT [сехетре]',
              lastWeek: '[Иртнӗ] dddd LT [сехетре]',
              sameElse: 'L'
            },
            relativeTime: {
              future: function (output) {
                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
                return output + affix;
              },
              past: '%s каялла',
              s: 'пӗр-ик ҫеккунт',
              ss: '%d ҫеккунт',
              m: 'пӗр минут',
              mm: '%d минут',
              h: 'пӗр сехет',
              hh: '%d сехет',
              d: 'пӗр кун',
              dd: '%d кун',
              M: 'пӗр уйӑх',
              MM: '%d уйӑх',
              y: 'пӗр ҫул',
              yy: '%d ҫул'
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: '%d-мӗш',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return cv;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/cy.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/cy.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var cy = moment.defineLocale('cy', {
            months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
            monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
            weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
            weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
            weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
            weekdaysParseExact: true,
            // time formats are the same as en-gb
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Heddiw am] LT',
              nextDay: '[Yfory am] LT',
              nextWeek: 'dddd [am] LT',
              lastDay: '[Ddoe am] LT',
              lastWeek: 'dddd [diwethaf am] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'mewn %s',
              past: '%s yn ôl',
              s: 'ychydig eiliadau',
              ss: '%d eiliad',
              m: 'munud',
              mm: '%d munud',
              h: 'awr',
              hh: '%d awr',
              d: 'diwrnod',
              dd: '%d diwrnod',
              M: 'mis',
              MM: '%d mis',
              y: 'blwyddyn',
              yy: '%d flynedd'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
            ordinal: function (number) {
              var b = number,
                output = '',
                lookup = [
                  '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                  'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
                ];
              if (b > 20) {
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                  output = 'fed'; // not 30ain, 70ain or 90ain
                } else {
                  output = 'ain';
                }
              } else if (b > 0) {
                output = lookup[b];
              }
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return cy;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/da.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/da.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var da = moment.defineLocale('da', {
            months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
            monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
            weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
            weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
            weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY HH:mm',
              LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
            },
            calendar: {
              sameDay: '[i dag kl.] LT',
              nextDay: '[i morgen kl.] LT',
              nextWeek: 'på dddd [kl.] LT',
              lastDay: '[i går kl.] LT',
              lastWeek: '[i] dddd[s kl.] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'om %s',
              past: '%s siden',
              s: 'få sekunder',
              ss: '%d sekunder',
              m: 'et minut',
              mm: '%d minutter',
              h: 'en time',
              hh: '%d timer',
              d: 'en dag',
              dd: '%d dage',
              M: 'en måned',
              MM: '%d måneder',
              y: 'et år',
              yy: '%d år'
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return da;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/de-at.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/de-at.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function processRelativeTime(number, withoutSuffix, key, isFuture) {
            var format = {
              'm': ['eine Minute', 'einer Minute'],
              'h': ['eine Stunde', 'einer Stunde'],
              'd': ['ein Tag', 'einem Tag'],
              'dd': [number + ' Tage', number + ' Tagen'],
              'M': ['ein Monat', 'einem Monat'],
              'MM': [number + ' Monate', number + ' Monaten'],
              'y': ['ein Jahr', 'einem Jahr'],
              'yy': [number + ' Jahre', number + ' Jahren']
            };
            return withoutSuffix ? format[key][0] : format[key][1];
          }

          var deAt = moment.defineLocale('de-at', {
            months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
            monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
            monthsParseExact: true,
            weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
            weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
            weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY HH:mm',
              LLLL: 'dddd, D. MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[heute um] LT [Uhr]',
              sameElse: 'L',
              nextDay: '[morgen um] LT [Uhr]',
              nextWeek: 'dddd [um] LT [Uhr]',
              lastDay: '[gestern um] LT [Uhr]',
              lastWeek: '[letzten] dddd [um] LT [Uhr]'
            },
            relativeTime: {
              future: 'in %s',
              past: 'vor %s',
              s: 'ein paar Sekunden',
              ss: '%d Sekunden',
              m: processRelativeTime,
              mm: '%d Minuten',
              h: processRelativeTime,
              hh: '%d Stunden',
              d: processRelativeTime,
              dd: processRelativeTime,
              M: processRelativeTime,
              MM: processRelativeTime,
              y: processRelativeTime,
              yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return deAt;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/de-ch.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/de-ch.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function processRelativeTime(number, withoutSuffix, key, isFuture) {
            var format = {
              'm': ['eine Minute', 'einer Minute'],
              'h': ['eine Stunde', 'einer Stunde'],
              'd': ['ein Tag', 'einem Tag'],
              'dd': [number + ' Tage', number + ' Tagen'],
              'M': ['ein Monat', 'einem Monat'],
              'MM': [number + ' Monate', number + ' Monaten'],
              'y': ['ein Jahr', 'einem Jahr'],
              'yy': [number + ' Jahre', number + ' Jahren']
            };
            return withoutSuffix ? format[key][0] : format[key][1];
          }

          var deCh = moment.defineLocale('de-ch', {
            months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
            monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
            monthsParseExact: true,
            weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
            weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
            weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY HH:mm',
              LLLL: 'dddd, D. MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[heute um] LT [Uhr]',
              sameElse: 'L',
              nextDay: '[morgen um] LT [Uhr]',
              nextWeek: 'dddd [um] LT [Uhr]',
              lastDay: '[gestern um] LT [Uhr]',
              lastWeek: '[letzten] dddd [um] LT [Uhr]'
            },
            relativeTime: {
              future: 'in %s',
              past: 'vor %s',
              s: 'ein paar Sekunden',
              ss: '%d Sekunden',
              m: processRelativeTime,
              mm: '%d Minuten',
              h: processRelativeTime,
              hh: '%d Stunden',
              d: processRelativeTime,
              dd: processRelativeTime,
              M: processRelativeTime,
              MM: processRelativeTime,
              y: processRelativeTime,
              yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return deCh;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/de.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/de.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function processRelativeTime(number, withoutSuffix, key, isFuture) {
            var format = {
              'm': ['eine Minute', 'einer Minute'],
              'h': ['eine Stunde', 'einer Stunde'],
              'd': ['ein Tag', 'einem Tag'],
              'dd': [number + ' Tage', number + ' Tagen'],
              'M': ['ein Monat', 'einem Monat'],
              'MM': [number + ' Monate', number + ' Monaten'],
              'y': ['ein Jahr', 'einem Jahr'],
              'yy': [number + ' Jahre', number + ' Jahren']
            };
            return withoutSuffix ? format[key][0] : format[key][1];
          }

          var de = moment.defineLocale('de', {
            months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
            monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
            monthsParseExact: true,
            weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
            weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
            weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY HH:mm',
              LLLL: 'dddd, D. MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[heute um] LT [Uhr]',
              sameElse: 'L',
              nextDay: '[morgen um] LT [Uhr]',
              nextWeek: 'dddd [um] LT [Uhr]',
              lastDay: '[gestern um] LT [Uhr]',
              lastWeek: '[letzten] dddd [um] LT [Uhr]'
            },
            relativeTime: {
              future: 'in %s',
              past: 'vor %s',
              s: 'ein paar Sekunden',
              ss: '%d Sekunden',
              m: processRelativeTime,
              mm: '%d Minuten',
              h: processRelativeTime,
              hh: '%d Stunden',
              d: processRelativeTime,
              dd: processRelativeTime,
              M: processRelativeTime,
              MM: processRelativeTime,
              y: processRelativeTime,
              yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return de;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/dv.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/dv.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var months = [
              'ޖެނުއަރީ',
              'ފެބްރުއަރީ',
              'މާރިޗު',
              'އޭޕްރީލު',
              'މޭ',
              'ޖޫން',
              'ޖުލައި',
              'އޯގަސްޓު',
              'ސެޕްޓެމްބަރު',
              'އޮކްޓޯބަރު',
              'ނޮވެމްބަރު',
              'ޑިސެމްބަރު'
            ],
            weekdays = [
              'އާދިއްތަ',
              'ހޯމަ',
              'އަންގާރަ',
              'ބުދަ',
              'ބުރާސްފަތި',
              'ހުކުރު',
              'ހޮނިހިރު'
            ];

          var dv = moment.defineLocale('dv', {
            months: months,
            monthsShort: months,
            weekdays: weekdays,
            weekdaysShort: weekdays,
            weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
            longDateFormat: {

              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'D/M/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (input) {
              return 'މފ' === input;
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'މކ';
              } else {
                return 'މފ';
              }
            },
            calendar: {
              sameDay: '[މިއަދު] LT',
              nextDay: '[މާދަމާ] LT',
              nextWeek: 'dddd LT',
              lastDay: '[އިއްޔެ] LT',
              lastWeek: '[ފާއިތުވި] dddd LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'ތެރޭގައި %s',
              past: 'ކުރިން %s',
              s: 'ސިކުންތުކޮޅެއް',
              ss: 'd% ސިކުންތު',
              m: 'މިނިޓެއް',
              mm: 'މިނިޓު %d',
              h: 'ގަޑިއިރެއް',
              hh: 'ގަޑިއިރު %d',
              d: 'ދުވަހެއް',
              dd: 'ދުވަސް %d',
              M: 'މަހެއް',
              MM: 'މަސް %d',
              y: 'އަހަރެއް',
              yy: 'އަހަރު %d'
            },
            preparse: function (string) {
              return string.replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/,/g, '،');
            },
            week: {
              dow: 7, // Sunday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return dv;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/el.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/el.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';

          function isFunction(input) {
            return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
          }


          var el = moment.defineLocale('el', {
            monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
            monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
            months: function (momentToFormat, format) {
              if (!momentToFormat) {
                return this._monthsNominativeEl;
              } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
              } else {
                return this._monthsNominativeEl[momentToFormat.month()];
              }
            },
            monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
            weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
            weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
            weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
            meridiem: function (hours, minutes, isLower) {
              if (hours > 11) {
                return isLower ? 'μμ' : 'ΜΜ';
              } else {
                return isLower ? 'πμ' : 'ΠΜ';
              }
            },
            isPM: function (input) {
              return ((input + '').toLowerCase()[0] === 'μ');
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY h:mm A',
              LLLL: 'dddd, D MMMM YYYY h:mm A'
            },
            calendarEl: {
              sameDay: '[Σήμερα {}] LT',
              nextDay: '[Αύριο {}] LT',
              nextWeek: 'dddd [{}] LT',
              lastDay: '[Χθες {}] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 6:
                    return '[το προηγούμενο] dddd [{}] LT';
                  default:
                    return '[την προηγούμενη] dddd [{}] LT';
                }
              },
              sameElse: 'L'
            },
            calendar: function (key, mom) {
              var output = this._calendarEl[key],
                hours = mom && mom.hours();
              if (isFunction(output)) {
                output = output.apply(mom);
              }
              return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
            },
            relativeTime: {
              future: 'σε %s',
              past: '%s πριν',
              s: 'λίγα δευτερόλεπτα',
              ss: '%d δευτερόλεπτα',
              m: 'ένα λεπτό',
              mm: '%d λεπτά',
              h: 'μία ώρα',
              hh: '%d ώρες',
              d: 'μία μέρα',
              dd: '%d μέρες',
              M: 'ένας μήνας',
              MM: '%d μήνες',
              y: 'ένας χρόνος',
              yy: '%d χρόνια'
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: '%dη',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4st is the first week of the year.
            }
          });

          return el;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/en-SG.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/en-SG.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var enSG = moment.defineLocale('en-SG', {
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              ss: '%d seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return enSG;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/en-au.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/en-au.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var enAu = moment.defineLocale('en-au', {
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY h:mm A',
              LLLL: 'dddd, D MMMM YYYY h:mm A'
            },
            calendar: {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              ss: '%d seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return enAu;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/en-ca.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/en-ca.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var enCa = moment.defineLocale('en-ca', {
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'YYYY-MM-DD',
              LL: 'MMMM D, YYYY',
              LLL: 'MMMM D, YYYY h:mm A',
              LLLL: 'dddd, MMMM D, YYYY h:mm A'
            },
            calendar: {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              ss: '%d seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            }
          });

          return enCa;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/en-gb.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/en-gb.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var enGb = moment.defineLocale('en-gb', {
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              ss: '%d seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return enGb;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/en-ie.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/en-ie.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var enIe = moment.defineLocale('en-ie', {
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              ss: '%d seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return enIe;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/en-il.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/en-il.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var enIl = moment.defineLocale('en-il', {
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            }
          });

          return enIl;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/en-nz.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/en-nz.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var enNz = moment.defineLocale('en-nz', {
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY h:mm A',
              LLLL: 'dddd, D MMMM YYYY h:mm A'
            },
            calendar: {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              ss: '%d seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return enNz;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/eo.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/eo.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var eo = moment.defineLocale('eo', {
            months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
            monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
            weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
            weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
            weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY-MM-DD',
              LL: 'D[-a de] MMMM, YYYY',
              LLL: 'D[-a de] MMMM, YYYY HH:mm',
              LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (input) {
              return input.charAt(0).toLowerCase() === 'p';
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours > 11) {
                return isLower ? 'p.t.m.' : 'P.T.M.';
              } else {
                return isLower ? 'a.t.m.' : 'A.T.M.';
              }
            },
            calendar: {
              sameDay: '[Hodiaŭ je] LT',
              nextDay: '[Morgaŭ je] LT',
              nextWeek: 'dddd [je] LT',
              lastDay: '[Hieraŭ je] LT',
              lastWeek: '[pasinta] dddd [je] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'post %s',
              past: 'antaŭ %s',
              s: 'sekundoj',
              ss: '%d sekundoj',
              m: 'minuto',
              mm: '%d minutoj',
              h: 'horo',
              hh: '%d horoj',
              d: 'tago', //ne 'diurno', ĉar estas uzita por proksimumo
              dd: '%d tagoj',
              M: 'monato',
              MM: '%d monatoj',
              y: 'jaro',
              yy: '%d jaroj'
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: '%da',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return eo;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/es-do.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/es-do.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
            monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

          var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
          var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

          var esDo = moment.defineLocale('es-do', {
            months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
            monthsShort: function (m, format) {
              if (!m) {
                return monthsShortDot;
              } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
              } else {
                return monthsShortDot[m.month()];
              }
            },
            monthsRegex: monthsRegex,
            monthsShortRegex: monthsRegex,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: monthsParse,
            longMonthsParse: monthsParse,
            shortMonthsParse: monthsParse,
            weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
            weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
            weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D [de] MMMM [de] YYYY',
              LLL: 'D [de] MMMM [de] YYYY h:mm A',
              LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
            },
            calendar: {
              sameDay: function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              nextDay: function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              nextWeek: function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              lastDay: function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              lastWeek: function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'en %s',
              past: 'hace %s',
              s: 'unos segundos',
              ss: '%d segundos',
              m: 'un minuto',
              mm: '%d minutos',
              h: 'una hora',
              hh: '%d horas',
              d: 'un día',
              dd: '%d días',
              M: 'un mes',
              MM: '%d meses',
              y: 'un año',
              yy: '%d años'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return esDo;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/es-us.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/es-us.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
            monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

          var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
          var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

          var esUs = moment.defineLocale('es-us', {
            months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
            monthsShort: function (m, format) {
              if (!m) {
                return monthsShortDot;
              } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
              } else {
                return monthsShortDot[m.month()];
              }
            },
            monthsRegex: monthsRegex,
            monthsShortRegex: monthsRegex,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: monthsParse,
            longMonthsParse: monthsParse,
            shortMonthsParse: monthsParse,
            weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
            weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
            weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'MM/DD/YYYY',
              LL: 'D [de] MMMM [de] YYYY',
              LLL: 'D [de] MMMM [de] YYYY h:mm A',
              LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
            },
            calendar: {
              sameDay: function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              nextDay: function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              nextWeek: function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              lastDay: function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              lastWeek: function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'en %s',
              past: 'hace %s',
              s: 'unos segundos',
              ss: '%d segundos',
              m: 'un minuto',
              mm: '%d minutos',
              h: 'una hora',
              hh: '%d horas',
              d: 'un día',
              dd: '%d días',
              M: 'un mes',
              MM: '%d meses',
              y: 'un año',
              yy: '%d años'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return esUs;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/es.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/es.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
            monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

          var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
          var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

          var es = moment.defineLocale('es', {
            months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
            monthsShort: function (m, format) {
              if (!m) {
                return monthsShortDot;
              } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
              } else {
                return monthsShortDot[m.month()];
              }
            },
            monthsRegex: monthsRegex,
            monthsShortRegex: monthsRegex,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: monthsParse,
            longMonthsParse: monthsParse,
            shortMonthsParse: monthsParse,
            weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
            weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
            weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D [de] MMMM [de] YYYY',
              LLL: 'D [de] MMMM [de] YYYY H:mm',
              LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
            },
            calendar: {
              sameDay: function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              nextDay: function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              nextWeek: function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              lastDay: function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              lastWeek: function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'en %s',
              past: 'hace %s',
              s: 'unos segundos',
              ss: '%d segundos',
              m: 'un minuto',
              mm: '%d minutos',
              h: 'una hora',
              hh: '%d horas',
              d: 'un día',
              dd: '%d días',
              M: 'un mes',
              MM: '%d meses',
              y: 'un año',
              yy: '%d años'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return es;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/et.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/et.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function processRelativeTime(number, withoutSuffix, key, isFuture) {
            var format = {
              's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
              'ss': [number + 'sekundi', number + 'sekundit'],
              'm': ['ühe minuti', 'üks minut'],
              'mm': [number + ' minuti', number + ' minutit'],
              'h': ['ühe tunni', 'tund aega', 'üks tund'],
              'hh': [number + ' tunni', number + ' tundi'],
              'd': ['ühe päeva', 'üks päev'],
              'M': ['kuu aja', 'kuu aega', 'üks kuu'],
              'MM': [number + ' kuu', number + ' kuud'],
              'y': ['ühe aasta', 'aasta', 'üks aasta'],
              'yy': [number + ' aasta', number + ' aastat']
            };
            if (withoutSuffix) {
              return format[key][2] ? format[key][2] : format[key][1];
            }
            return isFuture ? format[key][0] : format[key][1];
          }

          var et = moment.defineLocale('et', {
            months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
            monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
            weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
            weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
            weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd, D. MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[Täna,] LT',
              nextDay: '[Homme,] LT',
              nextWeek: '[Järgmine] dddd LT',
              lastDay: '[Eile,] LT',
              lastWeek: '[Eelmine] dddd LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s pärast',
              past: '%s tagasi',
              s: processRelativeTime,
              ss: processRelativeTime,
              m: processRelativeTime,
              mm: processRelativeTime,
              h: processRelativeTime,
              hh: processRelativeTime,
              d: processRelativeTime,
              dd: '%d päeva',
              M: processRelativeTime,
              MM: processRelativeTime,
              y: processRelativeTime,
              yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return et;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/eu.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/eu.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var eu = moment.defineLocale('eu', {
            months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
            monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
            monthsParseExact: true,
            weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
            weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
            weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY-MM-DD',
              LL: 'YYYY[ko] MMMM[ren] D[a]',
              LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
              LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
              l: 'YYYY-M-D',
              ll: 'YYYY[ko] MMM D[a]',
              lll: 'YYYY[ko] MMM D[a] HH:mm',
              llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
            },
            calendar: {
              sameDay: '[gaur] LT[etan]',
              nextDay: '[bihar] LT[etan]',
              nextWeek: 'dddd LT[etan]',
              lastDay: '[atzo] LT[etan]',
              lastWeek: '[aurreko] dddd LT[etan]',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s barru',
              past: 'duela %s',
              s: 'segundo batzuk',
              ss: '%d segundo',
              m: 'minutu bat',
              mm: '%d minutu',
              h: 'ordu bat',
              hh: '%d ordu',
              d: 'egun bat',
              dd: '%d egun',
              M: 'hilabete bat',
              MM: '%d hilabete',
              y: 'urte bat',
              yy: '%d urte'
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return eu;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/fa.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/fa.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '۱',
              '2': '۲',
              '3': '۳',
              '4': '۴',
              '5': '۵',
              '6': '۶',
              '7': '۷',
              '8': '۸',
              '9': '۹',
              '0': '۰'
            },
            numberMap = {
              '۱': '1',
              '۲': '2',
              '۳': '3',
              '۴': '4',
              '۵': '5',
              '۶': '6',
              '۷': '7',
              '۸': '8',
              '۹': '9',
              '۰': '0'
            };

          var fa = moment.defineLocale('fa', {
            months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
            monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
            weekdays: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
            weekdaysShort: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
            weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (input) {
              return /بعد از ظهر/.test(input);
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'قبل از ظهر';
              } else {
                return 'بعد از ظهر';
              }
            },
            calendar: {
              sameDay: '[امروز ساعت] LT',
              nextDay: '[فردا ساعت] LT',
              nextWeek: 'dddd [ساعت] LT',
              lastDay: '[دیروز ساعت] LT',
              lastWeek: 'dddd [پیش] [ساعت] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'در %s',
              past: '%s پیش',
              s: 'چند ثانیه',
              ss: 'ثانیه d%',
              m: 'یک دقیقه',
              mm: '%d دقیقه',
              h: 'یک ساعت',
              hh: '%d ساعت',
              d: 'یک روز',
              dd: '%d روز',
              M: 'یک ماه',
              MM: '%d ماه',
              y: 'یک سال',
              yy: '%d سال'
            },
            preparse: function (string) {
              return string.replace(/[۰-۹]/g, function (match) {
                return numberMap[match];
              }).replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              }).replace(/,/g, '،');
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: '%dم',
            week: {
              dow: 6, // Saturday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return fa;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/fi.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/fi.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
            numbersFuture = [
              'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
              numbersPast[7], numbersPast[8], numbersPast[9]
            ];

          function translate(number, withoutSuffix, key, isFuture) {
            var result = '';
            switch (key) {
              case 's':
                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
              case 'ss':
                return isFuture ? 'sekunnin' : 'sekuntia';
              case 'm':
                return isFuture ? 'minuutin' : 'minuutti';
              case 'mm':
                result = isFuture ? 'minuutin' : 'minuuttia';
                break;
              case 'h':
                return isFuture ? 'tunnin' : 'tunti';
              case 'hh':
                result = isFuture ? 'tunnin' : 'tuntia';
                break;
              case 'd':
                return isFuture ? 'päivän' : 'päivä';
              case 'dd':
                result = isFuture ? 'päivän' : 'päivää';
                break;
              case 'M':
                return isFuture ? 'kuukauden' : 'kuukausi';
              case 'MM':
                result = isFuture ? 'kuukauden' : 'kuukautta';
                break;
              case 'y':
                return isFuture ? 'vuoden' : 'vuosi';
              case 'yy':
                result = isFuture ? 'vuoden' : 'vuotta';
                break;
            }
            result = verbalNumber(number, isFuture) + ' ' + result;
            return result;
          }

          function verbalNumber(number, isFuture) {
            return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
          }

          var fi = moment.defineLocale('fi', {
            months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
            monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
            weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
            weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
            weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
            longDateFormat: {
              LT: 'HH.mm',
              LTS: 'HH.mm.ss',
              L: 'DD.MM.YYYY',
              LL: 'Do MMMM[ta] YYYY',
              LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
              LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
              l: 'D.M.YYYY',
              ll: 'Do MMM YYYY',
              lll: 'Do MMM YYYY, [klo] HH.mm',
              llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
            },
            calendar: {
              sameDay: '[tänään] [klo] LT',
              nextDay: '[huomenna] [klo] LT',
              nextWeek: 'dddd [klo] LT',
              lastDay: '[eilen] [klo] LT',
              lastWeek: '[viime] dddd[na] [klo] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s päästä',
              past: '%s sitten',
              s: translate,
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: translate,
              dd: translate,
              M: translate,
              MM: translate,
              y: translate,
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return fi;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/fo.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/fo.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var fo = moment.defineLocale('fo', {
            months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
            monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
            weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
            weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
            weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D. MMMM, YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Í dag kl.] LT',
              nextDay: '[Í morgin kl.] LT',
              nextWeek: 'dddd [kl.] LT',
              lastDay: '[Í gjár kl.] LT',
              lastWeek: '[síðstu] dddd [kl] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'um %s',
              past: '%s síðani',
              s: 'fá sekund',
              ss: '%d sekundir',
              m: 'ein minuttur',
              mm: '%d minuttir',
              h: 'ein tími',
              hh: '%d tímar',
              d: 'ein dagur',
              dd: '%d dagar',
              M: 'ein mánaður',
              MM: '%d mánaðir',
              y: 'eitt ár',
              yy: '%d ár'
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return fo;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/fr-ca.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/fr-ca.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var frCa = moment.defineLocale('fr-ca', {
            months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
            monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
            monthsParseExact: true,
            weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
            weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
            weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY-MM-DD',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Aujourd’hui à] LT',
              nextDay: '[Demain à] LT',
              nextWeek: 'dddd [à] LT',
              lastDay: '[Hier à] LT',
              lastWeek: 'dddd [dernier à] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'dans %s',
              past: 'il y a %s',
              s: 'quelques secondes',
              ss: '%d secondes',
              m: 'une minute',
              mm: '%d minutes',
              h: 'une heure',
              hh: '%d heures',
              d: 'un jour',
              dd: '%d jours',
              M: 'un mois',
              MM: '%d mois',
              y: 'un an',
              yy: '%d ans'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (number, period) {
              switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                  return number + (number === 1 ? 'er' : 'e');

                  // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                  return number + (number === 1 ? 're' : 'e');
              }
            }
          });

          return frCa;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/fr-ch.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/fr-ch.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var frCh = moment.defineLocale('fr-ch', {
            months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
            monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
            monthsParseExact: true,
            weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
            weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
            weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Aujourd’hui à] LT',
              nextDay: '[Demain à] LT',
              nextWeek: 'dddd [à] LT',
              lastDay: '[Hier à] LT',
              lastWeek: 'dddd [dernier à] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'dans %s',
              past: 'il y a %s',
              s: 'quelques secondes',
              ss: '%d secondes',
              m: 'une minute',
              mm: '%d minutes',
              h: 'une heure',
              hh: '%d heures',
              d: 'un jour',
              dd: '%d jours',
              M: 'un mois',
              MM: '%d mois',
              y: 'un an',
              yy: '%d ans'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (number, period) {
              switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                  return number + (number === 1 ? 'er' : 'e');

                  // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                  return number + (number === 1 ? 're' : 'e');
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return frCh;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/fr.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/fr.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var fr = moment.defineLocale('fr', {
            months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
            monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
            monthsParseExact: true,
            weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
            weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
            weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Aujourd’hui à] LT',
              nextDay: '[Demain à] LT',
              nextWeek: 'dddd [à] LT',
              lastDay: '[Hier à] LT',
              lastWeek: 'dddd [dernier à] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'dans %s',
              past: 'il y a %s',
              s: 'quelques secondes',
              ss: '%d secondes',
              m: 'une minute',
              mm: '%d minutes',
              h: 'une heure',
              hh: '%d heures',
              d: 'un jour',
              dd: '%d jours',
              M: 'un mois',
              MM: '%d mois',
              y: 'un an',
              yy: '%d ans'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (number, period) {
              switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                  return number + (number === 1 ? 'er' : '');

                  // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                  return number + (number === 1 ? 'er' : 'e');

                  // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                  return number + (number === 1 ? 're' : 'e');
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return fr;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/fy.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/fy.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
            monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

          var fy = moment.defineLocale('fy', {
            months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
            monthsShort: function (m, format) {
              if (!m) {
                return monthsShortWithDots;
              } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
              } else {
                return monthsShortWithDots[m.month()];
              }
            },
            monthsParseExact: true,
            weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
            weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
            weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD-MM-YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[hjoed om] LT',
              nextDay: '[moarn om] LT',
              nextWeek: 'dddd [om] LT',
              lastDay: '[juster om] LT',
              lastWeek: '[ôfrûne] dddd [om] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'oer %s',
              past: '%s lyn',
              s: 'in pear sekonden',
              ss: '%d sekonden',
              m: 'ien minút',
              mm: '%d minuten',
              h: 'ien oere',
              hh: '%d oeren',
              d: 'ien dei',
              dd: '%d dagen',
              M: 'ien moanne',
              MM: '%d moannen',
              y: 'ien jier',
              yy: '%d jierren'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (number) {
              return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return fy;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ga.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ga.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';



          var months = [
            'Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Méitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deaireadh Fómhair', 'Samhain', 'Nollaig'
          ];

          var monthsShort = ['Eaná', 'Feab', 'Márt', 'Aibr', 'Beal', 'Méit', 'Iúil', 'Lúna', 'Meán', 'Deai', 'Samh', 'Noll'];

          var weekdays = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Satharn'];

          var weekdaysShort = ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'];

          var weekdaysMin = ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'];

          var ga = moment.defineLocale('ga', {
            months: months,
            monthsShort: monthsShort,
            monthsParseExact: true,
            weekdays: weekdays,
            weekdaysShort: weekdaysShort,
            weekdaysMin: weekdaysMin,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Inniu ag] LT',
              nextDay: '[Amárach ag] LT',
              nextWeek: 'dddd [ag] LT',
              lastDay: '[Inné aig] LT',
              lastWeek: 'dddd [seo caite] [ag] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'i %s',
              past: '%s ó shin',
              s: 'cúpla soicind',
              ss: '%d soicind',
              m: 'nóiméad',
              mm: '%d nóiméad',
              h: 'uair an chloig',
              hh: '%d uair an chloig',
              d: 'lá',
              dd: '%d lá',
              M: 'mí',
              MM: '%d mí',
              y: 'bliain',
              yy: '%d bliain'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (number) {
              var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return ga;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/gd.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/gd.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var months = [
            'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
          ];

          var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

          var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

          var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

          var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

          var gd = moment.defineLocale('gd', {
            months: months,
            monthsShort: monthsShort,
            monthsParseExact: true,
            weekdays: weekdays,
            weekdaysShort: weekdaysShort,
            weekdaysMin: weekdaysMin,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[An-diugh aig] LT',
              nextDay: '[A-màireach aig] LT',
              nextWeek: 'dddd [aig] LT',
              lastDay: '[An-dè aig] LT',
              lastWeek: 'dddd [seo chaidh] [aig] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'ann an %s',
              past: 'bho chionn %s',
              s: 'beagan diogan',
              ss: '%d diogan',
              m: 'mionaid',
              mm: '%d mionaidean',
              h: 'uair',
              hh: '%d uairean',
              d: 'latha',
              dd: '%d latha',
              M: 'mìos',
              MM: '%d mìosan',
              y: 'bliadhna',
              yy: '%d bliadhna'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (number) {
              var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return gd;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/gl.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/gl.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var gl = moment.defineLocale('gl', {
            months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
            monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
            monthsParseExact: true,
            weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
            weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
            weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D [de] MMMM [de] YYYY',
              LLL: 'D [de] MMMM [de] YYYY H:mm',
              LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
            },
            calendar: {
              sameDay: function () {
                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
              },
              nextDay: function () {
                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
              },
              nextWeek: function () {
                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
              },
              lastDay: function () {
                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
              },
              lastWeek: function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: function (str) {
                if (str.indexOf('un') === 0) {
                  return 'n' + str;
                }
                return 'en ' + str;
              },
              past: 'hai %s',
              s: 'uns segundos',
              ss: '%d segundos',
              m: 'un minuto',
              mm: '%d minutos',
              h: 'unha hora',
              hh: '%d horas',
              d: 'un día',
              dd: '%d días',
              M: 'un mes',
              MM: '%d meses',
              y: 'un ano',
              yy: '%d anos'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return gl;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/gom-latn.js":
      /*!************************************************!*\
        !*** ./node_modules/moment/locale/gom-latn.js ***!
        \************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function processRelativeTime(number, withoutSuffix, key, isFuture) {
            var format = {
              's': ['thodde secondanim', 'thodde second'],
              'ss': [number + ' secondanim', number + ' second'],
              'm': ['eka mintan', 'ek minute'],
              'mm': [number + ' mintanim', number + ' mintam'],
              'h': ['eka voran', 'ek vor'],
              'hh': [number + ' voranim', number + ' voram'],
              'd': ['eka disan', 'ek dis'],
              'dd': [number + ' disanim', number + ' dis'],
              'M': ['eka mhoinean', 'ek mhoino'],
              'MM': [number + ' mhoineanim', number + ' mhoine'],
              'y': ['eka vorsan', 'ek voros'],
              'yy': [number + ' vorsanim', number + ' vorsam']
            };
            return withoutSuffix ? format[key][0] : format[key][1];
          }

          var gomLatn = moment.defineLocale('gom-latn', {
            months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
            monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
            monthsParseExact: true,
            weekdays: 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
            weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
            weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'A h:mm [vazta]',
              LTS: 'A h:mm:ss [vazta]',
              L: 'DD-MM-YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY A h:mm [vazta]',
              LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
              llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
            },
            calendar: {
              sameDay: '[Aiz] LT',
              nextDay: '[Faleam] LT',
              nextWeek: '[Ieta to] dddd[,] LT',
              lastDay: '[Kal] LT',
              lastWeek: '[Fatlo] dddd[,] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s',
              past: '%s adim',
              s: processRelativeTime,
              ss: processRelativeTime,
              m: processRelativeTime,
              mm: processRelativeTime,
              h: processRelativeTime,
              hh: processRelativeTime,
              d: processRelativeTime,
              dd: processRelativeTime,
              M: processRelativeTime,
              MM: processRelativeTime,
              y: processRelativeTime,
              yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (number, period) {
              switch (period) {
                // the ordinal 'er' only applies to day of the month
                case 'D':
                  return number + 'er';
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                case 'w':
                case 'W':
                  return number;
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'rati') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'sokalli') {
                return hour;
              } else if (meridiem === 'donparam') {
                return hour > 12 ? hour : hour + 12;
              } else if (meridiem === 'sanje') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'rati';
              } else if (hour < 12) {
                return 'sokalli';
              } else if (hour < 16) {
                return 'donparam';
              } else if (hour < 20) {
                return 'sanje';
              } else {
                return 'rati';
              }
            }
          });

          return gomLatn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/gu.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/gu.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '૧',
              '2': '૨',
              '3': '૩',
              '4': '૪',
              '5': '૫',
              '6': '૬',
              '7': '૭',
              '8': '૮',
              '9': '૯',
              '0': '૦'
            },
            numberMap = {
              '૧': '1',
              '૨': '2',
              '૩': '3',
              '૪': '4',
              '૫': '5',
              '૬': '6',
              '૭': '7',
              '૮': '8',
              '૯': '9',
              '૦': '0'
            };

          var gu = moment.defineLocale('gu', {
            months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
            monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
            monthsParseExact: true,
            weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
            weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
            weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
            longDateFormat: {
              LT: 'A h:mm વાગ્યે',
              LTS: 'A h:mm:ss વાગ્યે',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
              LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
            },
            calendar: {
              sameDay: '[આજ] LT',
              nextDay: '[કાલે] LT',
              nextWeek: 'dddd, LT',
              lastDay: '[ગઇકાલે] LT',
              lastWeek: '[પાછલા] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s મા',
              past: '%s પેહલા',
              s: 'અમુક પળો',
              ss: '%d સેકંડ',
              m: 'એક મિનિટ',
              mm: '%d મિનિટ',
              h: 'એક કલાક',
              hh: '%d કલાક',
              d: 'એક દિવસ',
              dd: '%d દિવસ',
              M: 'એક મહિનો',
              MM: '%d મહિનો',
              y: 'એક વર્ષ',
              yy: '%d વર્ષ'
            },
            preparse: function (string) {
              return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
            // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'રાત') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'સવાર') {
                return hour;
              } else if (meridiem === 'બપોર') {
                return hour >= 10 ? hour : hour + 12;
              } else if (meridiem === 'સાંજ') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'રાત';
              } else if (hour < 10) {
                return 'સવાર';
              } else if (hour < 17) {
                return 'બપોર';
              } else if (hour < 20) {
                return 'સાંજ';
              } else {
                return 'રાત';
              }
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return gu;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/he.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/he.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var he = moment.defineLocale('he', {
            months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
            monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
            weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
            weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
            weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D [ב]MMMM YYYY',
              LLL: 'D [ב]MMMM YYYY HH:mm',
              LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
              l: 'D/M/YYYY',
              ll: 'D MMM YYYY',
              lll: 'D MMM YYYY HH:mm',
              llll: 'ddd, D MMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[היום ב־]LT',
              nextDay: '[מחר ב־]LT',
              nextWeek: 'dddd [בשעה] LT',
              lastDay: '[אתמול ב־]LT',
              lastWeek: '[ביום] dddd [האחרון בשעה] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'בעוד %s',
              past: 'לפני %s',
              s: 'מספר שניות',
              ss: '%d שניות',
              m: 'דקה',
              mm: '%d דקות',
              h: 'שעה',
              hh: function (number) {
                if (number === 2) {
                  return 'שעתיים';
                }
                return number + ' שעות';
              },
              d: 'יום',
              dd: function (number) {
                if (number === 2) {
                  return 'יומיים';
                }
                return number + ' ימים';
              },
              M: 'חודש',
              MM: function (number) {
                if (number === 2) {
                  return 'חודשיים';
                }
                return number + ' חודשים';
              },
              y: 'שנה',
              yy: function (number) {
                if (number === 2) {
                  return 'שנתיים';
                } else if (number % 10 === 0 && number !== 10) {
                  return number + ' שנה';
                }
                return number + ' שנים';
              }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (input) {
              return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 5) {
                return 'לפנות בוקר';
              } else if (hour < 10) {
                return 'בבוקר';
              } else if (hour < 12) {
                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
              } else if (hour < 18) {
                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
              } else {
                return 'בערב';
              }
            }
          });

          return he;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/hi.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/hi.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '१',
              '2': '२',
              '3': '३',
              '4': '४',
              '5': '५',
              '6': '६',
              '7': '७',
              '8': '८',
              '9': '९',
              '0': '०'
            },
            numberMap = {
              '१': '1',
              '२': '2',
              '३': '3',
              '४': '4',
              '५': '5',
              '६': '6',
              '७': '7',
              '८': '8',
              '९': '9',
              '०': '0'
            };

          var hi = moment.defineLocale('hi', {
            months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
            monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
            monthsParseExact: true,
            weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
            weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
            weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
            longDateFormat: {
              LT: 'A h:mm बजे',
              LTS: 'A h:mm:ss बजे',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm बजे',
              LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
            },
            calendar: {
              sameDay: '[आज] LT',
              nextDay: '[कल] LT',
              nextWeek: 'dddd, LT',
              lastDay: '[कल] LT',
              lastWeek: '[पिछले] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s में',
              past: '%s पहले',
              s: 'कुछ ही क्षण',
              ss: '%d सेकंड',
              m: 'एक मिनट',
              mm: '%d मिनट',
              h: 'एक घंटा',
              hh: '%d घंटे',
              d: 'एक दिन',
              dd: '%d दिन',
              M: 'एक महीने',
              MM: '%d महीने',
              y: 'एक वर्ष',
              yy: '%d वर्ष'
            },
            preparse: function (string) {
              return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            // Hindi notation for meridiems are quite fuzzy in practice. While there exists
            // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'सुबह') {
                return hour;
              } else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
              } else if (meridiem === 'शाम') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'रात';
              } else if (hour < 10) {
                return 'सुबह';
              } else if (hour < 17) {
                return 'दोपहर';
              } else if (hour < 20) {
                return 'शाम';
              } else {
                return 'रात';
              }
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return hi;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/hr.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/hr.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function translate(number, withoutSuffix, key) {
            var result = number + ' ';
            switch (key) {
              case 'ss':
                if (number === 1) {
                  result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'sekunde';
                } else {
                  result += 'sekundi';
                }
                return result;
              case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
              case 'mm':
                if (number === 1) {
                  result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'minute';
                } else {
                  result += 'minuta';
                }
                return result;
              case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
              case 'hh':
                if (number === 1) {
                  result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'sata';
                } else {
                  result += 'sati';
                }
                return result;
              case 'dd':
                if (number === 1) {
                  result += 'dan';
                } else {
                  result += 'dana';
                }
                return result;
              case 'MM':
                if (number === 1) {
                  result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'mjeseca';
                } else {
                  result += 'mjeseci';
                }
                return result;
              case 'yy':
                if (number === 1) {
                  result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                  result += 'godine';
                } else {
                  result += 'godina';
                }
                return result;
            }
          }

          var hr = moment.defineLocale('hr', {
            months: {
              format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
              standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
            },
            monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
            monthsParseExact: true,
            weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
            weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
            weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd, D. MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[danas u] LT',
              nextDay: '[sutra u] LT',
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[u] [nedjelju] [u] LT';
                  case 3:
                    return '[u] [srijedu] [u] LT';
                  case 6:
                    return '[u] [subotu] [u] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[u] dddd [u] LT';
                }
              },
              lastDay: '[jučer u] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return '[prošlu] dddd [u] LT';
                  case 6:
                    return '[prošle] [subote] [u] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[prošli] dddd [u] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'za %s',
              past: 'prije %s',
              s: 'par sekundi',
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: 'dan',
              dd: translate,
              M: 'mjesec',
              MM: translate,
              y: 'godinu',
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return hr;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/hu.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/hu.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

          function translate(number, withoutSuffix, key, isFuture) {
            var num = number;
            switch (key) {
              case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
              case 'ss':
                return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
              case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
              case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
              case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
              case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
              case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
              case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
              case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
              case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
              case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
              case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
            }
            return '';
          }

          function week(isFuture) {
            return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
          }

          var hu = moment.defineLocale('hu', {
            months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
            monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
            weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
            weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
            weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'YYYY.MM.DD.',
              LL: 'YYYY. MMMM D.',
              LLL: 'YYYY. MMMM D. H:mm',
              LLLL: 'YYYY. MMMM D., dddd H:mm'
            },
            meridiemParse: /de|du/i,
            isPM: function (input) {
              return input.charAt(1).toLowerCase() === 'u';
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
              } else {
                return isLower === true ? 'du' : 'DU';
              }
            },
            calendar: {
              sameDay: '[ma] LT[-kor]',
              nextDay: '[holnap] LT[-kor]',
              nextWeek: function () {
                return week.call(this, true);
              },
              lastDay: '[tegnap] LT[-kor]',
              lastWeek: function () {
                return week.call(this, false);
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s múlva',
              past: '%s',
              s: translate,
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: translate,
              dd: translate,
              M: translate,
              MM: translate,
              y: translate,
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return hu;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/hy-am.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/hy-am.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var hyAm = moment.defineLocale('hy-am', {
            months: {
              format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
              standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
            },
            monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
            weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
            weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
            weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY թ.',
              LLL: 'D MMMM YYYY թ., HH:mm',
              LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
            },
            calendar: {
              sameDay: '[այսօր] LT',
              nextDay: '[վաղը] LT',
              lastDay: '[երեկ] LT',
              nextWeek: function () {
                return 'dddd [օրը ժամը] LT';
              },
              lastWeek: function () {
                return '[անցած] dddd [օրը ժամը] LT';
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s հետո',
              past: '%s առաջ',
              s: 'մի քանի վայրկյան',
              ss: '%d վայրկյան',
              m: 'րոպե',
              mm: '%d րոպե',
              h: 'ժամ',
              hh: '%d ժամ',
              d: 'օր',
              dd: '%d օր',
              M: 'ամիս',
              MM: '%d ամիս',
              y: 'տարի',
              yy: '%d տարի'
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (input) {
              return /^(ցերեկվա|երեկոյան)$/.test(input);
            },
            meridiem: function (hour) {
              if (hour < 4) {
                return 'գիշերվա';
              } else if (hour < 12) {
                return 'առավոտվա';
              } else if (hour < 17) {
                return 'ցերեկվա';
              } else {
                return 'երեկոյան';
              }
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'DDD':
                case 'w':
                case 'W':
                case 'DDDo':
                  if (number === 1) {
                    return number + '-ին';
                  }
                  return number + '-րդ';
                default:
                  return number;
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return hyAm;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/id.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/id.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var id = moment.defineLocale('id', {
            months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
            weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
            weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
            weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
            longDateFormat: {
              LT: 'HH.mm',
              LTS: 'HH.mm.ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY [pukul] HH.mm',
              LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'pagi') {
                return hour;
              } else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
              } else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
              }
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours < 11) {
                return 'pagi';
              } else if (hours < 15) {
                return 'siang';
              } else if (hours < 19) {
                return 'sore';
              } else {
                return 'malam';
              }
            },
            calendar: {
              sameDay: '[Hari ini pukul] LT',
              nextDay: '[Besok pukul] LT',
              nextWeek: 'dddd [pukul] LT',
              lastDay: '[Kemarin pukul] LT',
              lastWeek: 'dddd [lalu pukul] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'dalam %s',
              past: '%s yang lalu',
              s: 'beberapa detik',
              ss: '%d detik',
              m: 'semenit',
              mm: '%d menit',
              h: 'sejam',
              hh: '%d jam',
              d: 'sehari',
              dd: '%d hari',
              M: 'sebulan',
              MM: '%d bulan',
              y: 'setahun',
              yy: '%d tahun'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return id;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/is.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/is.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function plural(n) {
            if (n % 100 === 11) {
              return true;
            } else if (n % 10 === 1) {
              return false;
            }
            return true;
          }

          function translate(number, withoutSuffix, key, isFuture) {
            var result = number + ' ';
            switch (key) {
              case 's':
                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
              case 'ss':
                if (plural(number)) {
                  return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
                }
                return result + 'sekúnda';
              case 'm':
                return withoutSuffix ? 'mínúta' : 'mínútu';
              case 'mm':
                if (plural(number)) {
                  return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
                } else if (withoutSuffix) {
                  return result + 'mínúta';
                }
                return result + 'mínútu';
              case 'hh':
                if (plural(number)) {
                  return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
                }
                return result + 'klukkustund';
              case 'd':
                if (withoutSuffix) {
                  return 'dagur';
                }
                return isFuture ? 'dag' : 'degi';
              case 'dd':
                if (plural(number)) {
                  if (withoutSuffix) {
                    return result + 'dagar';
                  }
                  return result + (isFuture ? 'daga' : 'dögum');
                } else if (withoutSuffix) {
                  return result + 'dagur';
                }
                return result + (isFuture ? 'dag' : 'degi');
              case 'M':
                if (withoutSuffix) {
                  return 'mánuður';
                }
                return isFuture ? 'mánuð' : 'mánuði';
              case 'MM':
                if (plural(number)) {
                  if (withoutSuffix) {
                    return result + 'mánuðir';
                  }
                  return result + (isFuture ? 'mánuði' : 'mánuðum');
                } else if (withoutSuffix) {
                  return result + 'mánuður';
                }
                return result + (isFuture ? 'mánuð' : 'mánuði');
              case 'y':
                return withoutSuffix || isFuture ? 'ár' : 'ári';
              case 'yy':
                if (plural(number)) {
                  return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
                }
                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
            }
          }

          var is = moment.defineLocale('is', {
            months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
            monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
            weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
            weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
            weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY [kl.] H:mm',
              LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
            },
            calendar: {
              sameDay: '[í dag kl.] LT',
              nextDay: '[á morgun kl.] LT',
              nextWeek: 'dddd [kl.] LT',
              lastDay: '[í gær kl.] LT',
              lastWeek: '[síðasta] dddd [kl.] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'eftir %s',
              past: 'fyrir %s síðan',
              s: translate,
              ss: translate,
              m: translate,
              mm: translate,
              h: 'klukkustund',
              hh: translate,
              d: translate,
              dd: translate,
              M: translate,
              MM: translate,
              y: translate,
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return is;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/it-ch.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/it-ch.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var itCh = moment.defineLocale('it-ch', {
            months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
            monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
            weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
            weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
            weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Oggi alle] LT',
              nextDay: '[Domani alle] LT',
              nextWeek: 'dddd [alle] LT',
              lastDay: '[Ieri alle] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[la scorsa] dddd [alle] LT';
                  default:
                    return '[lo scorso] dddd [alle] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
              },
              past: '%s fa',
              s: 'alcuni secondi',
              ss: '%d secondi',
              m: 'un minuto',
              mm: '%d minuti',
              h: 'un\'ora',
              hh: '%d ore',
              d: 'un giorno',
              dd: '%d giorni',
              M: 'un mese',
              MM: '%d mesi',
              y: 'un anno',
              yy: '%d anni'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return itCh;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/it.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/it.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var it = moment.defineLocale('it', {
            months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
            monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
            weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
            weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
            weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Oggi alle] LT',
              nextDay: '[Domani alle] LT',
              nextWeek: 'dddd [alle] LT',
              lastDay: '[Ieri alle] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[la scorsa] dddd [alle] LT';
                  default:
                    return '[lo scorso] dddd [alle] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
              },
              past: '%s fa',
              s: 'alcuni secondi',
              ss: '%d secondi',
              m: 'un minuto',
              mm: '%d minuti',
              h: 'un\'ora',
              hh: '%d ore',
              d: 'un giorno',
              dd: '%d giorni',
              M: 'un mese',
              MM: '%d mesi',
              y: 'un anno',
              yy: '%d anni'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return it;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ja.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ja.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ja = moment.defineLocale('ja', {
            months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
            monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
            weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
            weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY/MM/DD',
              LL: 'YYYY年M月D日',
              LLL: 'YYYY年M月D日 HH:mm',
              LLLL: 'YYYY年M月D日 dddd HH:mm',
              l: 'YYYY/MM/DD',
              ll: 'YYYY年M月D日',
              lll: 'YYYY年M月D日 HH:mm',
              llll: 'YYYY年M月D日(ddd) HH:mm'
            },
            meridiemParse: /午前|午後/i,
            isPM: function (input) {
              return input === '午後';
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return '午前';
              } else {
                return '午後';
              }
            },
            calendar: {
              sameDay: '[今日] LT',
              nextDay: '[明日] LT',
              nextWeek: function (now) {
                if (now.week() < this.week()) {
                  return '[来週]dddd LT';
                } else {
                  return 'dddd LT';
                }
              },
              lastDay: '[昨日] LT',
              lastWeek: function (now) {
                if (this.week() < now.week()) {
                  return '[先週]dddd LT';
                } else {
                  return 'dddd LT';
                }
              },
              sameElse: 'L'
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                  return number + '日';
                default:
                  return number;
              }
            },
            relativeTime: {
              future: '%s後',
              past: '%s前',
              s: '数秒',
              ss: '%d秒',
              m: '1分',
              mm: '%d分',
              h: '1時間',
              hh: '%d時間',
              d: '1日',
              dd: '%d日',
              M: '1ヶ月',
              MM: '%dヶ月',
              y: '1年',
              yy: '%d年'
            }
          });

          return ja;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/jv.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/jv.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var jv = moment.defineLocale('jv', {
            months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
            monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
            weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
            weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
            weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
            longDateFormat: {
              LT: 'HH.mm',
              LTS: 'HH.mm.ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY [pukul] HH.mm',
              LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'enjing') {
                return hour;
              } else if (meridiem === 'siyang') {
                return hour >= 11 ? hour : hour + 12;
              } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
                return hour + 12;
              }
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours < 11) {
                return 'enjing';
              } else if (hours < 15) {
                return 'siyang';
              } else if (hours < 19) {
                return 'sonten';
              } else {
                return 'ndalu';
              }
            },
            calendar: {
              sameDay: '[Dinten puniko pukul] LT',
              nextDay: '[Mbenjang pukul] LT',
              nextWeek: 'dddd [pukul] LT',
              lastDay: '[Kala wingi pukul] LT',
              lastWeek: 'dddd [kepengker pukul] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'wonten ing %s',
              past: '%s ingkang kepengker',
              s: 'sawetawis detik',
              ss: '%d detik',
              m: 'setunggal menit',
              mm: '%d menit',
              h: 'setunggal jam',
              hh: '%d jam',
              d: 'sedinten',
              dd: '%d dinten',
              M: 'sewulan',
              MM: '%d wulan',
              y: 'setaun',
              yy: '%d taun'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return jv;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ka.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ka.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ka = moment.defineLocale('ka', {
            months: {
              standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
              format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
            },
            monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
            weekdays: {
              standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
              format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
              isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
            weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY h:mm A',
              LLLL: 'dddd, D MMMM YYYY h:mm A'
            },
            calendar: {
              sameDay: '[დღეს] LT[-ზე]',
              nextDay: '[ხვალ] LT[-ზე]',
              lastDay: '[გუშინ] LT[-ზე]',
              nextWeek: '[შემდეგ] dddd LT[-ზე]',
              lastWeek: '[წინა] dddd LT-ზე',
              sameElse: 'L'
            },
            relativeTime: {
              future: function (s) {
                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                  s.replace(/ი$/, 'ში') :
                  s + 'ში';
              },
              past: function (s) {
                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                  return s.replace(/(ი|ე)$/, 'ის წინ');
                }
                if ((/წელი/).test(s)) {
                  return s.replace(/წელი$/, 'წლის წინ');
                }
              },
              s: 'რამდენიმე წამი',
              ss: '%d წამი',
              m: 'წუთი',
              mm: '%d წუთი',
              h: 'საათი',
              hh: '%d საათი',
              d: 'დღე',
              dd: '%d დღე',
              M: 'თვე',
              MM: '%d თვე',
              y: 'წელი',
              yy: '%d წელი'
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (number) {
              if (number === 0) {
                return number;
              }
              if (number === 1) {
                return number + '-ლი';
              }
              if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return 'მე-' + number;
              }
              return number + '-ე';
            },
            week: {
              dow: 1,
              doy: 7
            }
          });

          return ka;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/kk.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/kk.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var suffixes = {
            0: '-ші',
            1: '-ші',
            2: '-ші',
            3: '-ші',
            4: '-ші',
            5: '-ші',
            6: '-шы',
            7: '-ші',
            8: '-ші',
            9: '-шы',
            10: '-шы',
            20: '-шы',
            30: '-шы',
            40: '-шы',
            50: '-ші',
            60: '-шы',
            70: '-ші',
            80: '-ші',
            90: '-шы',
            100: '-ші'
          };

          var kk = moment.defineLocale('kk', {
            months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
            monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
            weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
            weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
            weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Бүгін сағат] LT',
              nextDay: '[Ертең сағат] LT',
              nextWeek: 'dddd [сағат] LT',
              lastDay: '[Кеше сағат] LT',
              lastWeek: '[Өткен аптаның] dddd [сағат] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s ішінде',
              past: '%s бұрын',
              s: 'бірнеше секунд',
              ss: '%d секунд',
              m: 'бір минут',
              mm: '%d минут',
              h: 'бір сағат',
              hh: '%d сағат',
              d: 'бір күн',
              dd: '%d күн',
              M: 'бір ай',
              MM: '%d ай',
              y: 'бір жыл',
              yy: '%d жыл'
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (number) {
              var a = number % 10,
                b = number >= 100 ? 100 : null;
              return number + (suffixes[number] || suffixes[a] || suffixes[b]);
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return kk;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/km.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/km.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '១',
              '2': '២',
              '3': '៣',
              '4': '៤',
              '5': '៥',
              '6': '៦',
              '7': '៧',
              '8': '៨',
              '9': '៩',
              '0': '០'
            },
            numberMap = {
              '១': '1',
              '២': '2',
              '៣': '3',
              '៤': '4',
              '៥': '5',
              '៦': '6',
              '៧': '7',
              '៨': '8',
              '៩': '9',
              '០': '0'
            };

          var km = moment.defineLocale('km', {
            months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
              '_'
            ),
            monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
              '_'
            ),
            weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
            weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
            weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function (input) {
              return input === 'ល្ងាច';
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'ព្រឹក';
              } else {
                return 'ល្ងាច';
              }
            },
            calendar: {
              sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
              nextDay: '[ស្អែក ម៉ោង] LT',
              nextWeek: 'dddd [ម៉ោង] LT',
              lastDay: '[ម្សិលមិញ ម៉ោង] LT',
              lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%sទៀត',
              past: '%sមុន',
              s: 'ប៉ុន្មានវិនាទី',
              ss: '%d វិនាទី',
              m: 'មួយនាទី',
              mm: '%d នាទី',
              h: 'មួយម៉ោង',
              hh: '%d ម៉ោង',
              d: 'មួយថ្ងៃ',
              dd: '%d ថ្ងៃ',
              M: 'មួយខែ',
              MM: '%d ខែ',
              y: 'មួយឆ្នាំ',
              yy: '%d ឆ្នាំ'
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: 'ទី%d',
            preparse: function (string) {
              return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return km;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/kn.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/kn.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '೧',
              '2': '೨',
              '3': '೩',
              '4': '೪',
              '5': '೫',
              '6': '೬',
              '7': '೭',
              '8': '೮',
              '9': '೯',
              '0': '೦'
            },
            numberMap = {
              '೧': '1',
              '೨': '2',
              '೩': '3',
              '೪': '4',
              '೫': '5',
              '೬': '6',
              '೭': '7',
              '೮': '8',
              '೯': '9',
              '೦': '0'
            };

          var kn = moment.defineLocale('kn', {
            months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
            monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
            monthsParseExact: true,
            weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
            weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
            weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
            longDateFormat: {
              LT: 'A h:mm',
              LTS: 'A h:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm',
              LLLL: 'dddd, D MMMM YYYY, A h:mm'
            },
            calendar: {
              sameDay: '[ಇಂದು] LT',
              nextDay: '[ನಾಳೆ] LT',
              nextWeek: 'dddd, LT',
              lastDay: '[ನಿನ್ನೆ] LT',
              lastWeek: '[ಕೊನೆಯ] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s ನಂತರ',
              past: '%s ಹಿಂದೆ',
              s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
              ss: '%d ಸೆಕೆಂಡುಗಳು',
              m: 'ಒಂದು ನಿಮಿಷ',
              mm: '%d ನಿಮಿಷ',
              h: 'ಒಂದು ಗಂಟೆ',
              hh: '%d ಗಂಟೆ',
              d: 'ಒಂದು ದಿನ',
              dd: '%d ದಿನ',
              M: 'ಒಂದು ತಿಂಗಳು',
              MM: '%d ತಿಂಗಳು',
              y: 'ಒಂದು ವರ್ಷ',
              yy: '%d ವರ್ಷ'
            },
            preparse: function (string) {
              return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'ರಾತ್ರಿ') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
                return hour;
              } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
                return hour >= 10 ? hour : hour + 12;
              } else if (meridiem === 'ಸಂಜೆ') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'ರಾತ್ರಿ';
              } else if (hour < 10) {
                return 'ಬೆಳಿಗ್ಗೆ';
              } else if (hour < 17) {
                return 'ಮಧ್ಯಾಹ್ನ';
              } else if (hour < 20) {
                return 'ಸಂಜೆ';
              } else {
                return 'ರಾತ್ರಿ';
              }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (number) {
              return number + 'ನೇ';
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return kn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ko.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ko.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ko = moment.defineLocale('ko', {
            months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
            monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
            weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
            weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
            weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
            longDateFormat: {
              LT: 'A h:mm',
              LTS: 'A h:mm:ss',
              L: 'YYYY.MM.DD.',
              LL: 'YYYY년 MMMM D일',
              LLL: 'YYYY년 MMMM D일 A h:mm',
              LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
              l: 'YYYY.MM.DD.',
              ll: 'YYYY년 MMMM D일',
              lll: 'YYYY년 MMMM D일 A h:mm',
              llll: 'YYYY년 MMMM D일 dddd A h:mm'
            },
            calendar: {
              sameDay: '오늘 LT',
              nextDay: '내일 LT',
              nextWeek: 'dddd LT',
              lastDay: '어제 LT',
              lastWeek: '지난주 dddd LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s 후',
              past: '%s 전',
              s: '몇 초',
              ss: '%d초',
              m: '1분',
              mm: '%d분',
              h: '한 시간',
              hh: '%d시간',
              d: '하루',
              dd: '%d일',
              M: '한 달',
              MM: '%d달',
              y: '일 년',
              yy: '%d년'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                  return number + '일';
                case 'M':
                  return number + '월';
                case 'w':
                case 'W':
                  return number + '주';
                default:
                  return number;
              }
            },
            meridiemParse: /오전|오후/,
            isPM: function (token) {
              return token === '오후';
            },
            meridiem: function (hour, minute, isUpper) {
              return hour < 12 ? '오전' : '오후';
            }
          });

          return ko;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ku.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ku.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '١',
              '2': '٢',
              '3': '٣',
              '4': '٤',
              '5': '٥',
              '6': '٦',
              '7': '٧',
              '8': '٨',
              '9': '٩',
              '0': '٠'
            },
            numberMap = {
              '١': '1',
              '٢': '2',
              '٣': '3',
              '٤': '4',
              '٥': '5',
              '٦': '6',
              '٧': '7',
              '٨': '8',
              '٩': '9',
              '٠': '0'
            },
            months = [
              'کانونی دووەم',
              'شوبات',
              'ئازار',
              'نیسان',
              'ئایار',
              'حوزەیران',
              'تەمموز',
              'ئاب',
              'ئەیلوول',
              'تشرینی یەكەم',
              'تشرینی دووەم',
              'كانونی یەکەم'
            ];


          var ku = moment.defineLocale('ku', {
            months: months,
            monthsShort: months,
            weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
            weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
            weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function (input) {
              return /ئێواره‌/.test(input);
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'به‌یانی';
              } else {
                return 'ئێواره‌';
              }
            },
            calendar: {
              sameDay: '[ئه‌مرۆ كاتژمێر] LT',
              nextDay: '[به‌یانی كاتژمێر] LT',
              nextWeek: 'dddd [كاتژمێر] LT',
              lastDay: '[دوێنێ كاتژمێر] LT',
              lastWeek: 'dddd [كاتژمێر] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'له‌ %s',
              past: '%s',
              s: 'چه‌ند چركه‌یه‌ك',
              ss: 'چركه‌ %d',
              m: 'یه‌ك خوله‌ك',
              mm: '%d خوله‌ك',
              h: 'یه‌ك كاتژمێر',
              hh: '%d كاتژمێر',
              d: 'یه‌ك ڕۆژ',
              dd: '%d ڕۆژ',
              M: 'یه‌ك مانگ',
              MM: '%d مانگ',
              y: 'یه‌ك ساڵ',
              yy: '%d ساڵ'
            },
            preparse: function (string) {
              return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
              }).replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              }).replace(/,/g, '،');
            },
            week: {
              dow: 6, // Saturday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return ku;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ky.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ky.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var suffixes = {
            0: '-чү',
            1: '-чи',
            2: '-чи',
            3: '-чү',
            4: '-чү',
            5: '-чи',
            6: '-чы',
            7: '-чи',
            8: '-чи',
            9: '-чу',
            10: '-чу',
            20: '-чы',
            30: '-чу',
            40: '-чы',
            50: '-чү',
            60: '-чы',
            70: '-чи',
            80: '-чи',
            90: '-чу',
            100: '-чү'
          };

          var ky = moment.defineLocale('ky', {
            months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
            monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
            weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
            weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
            weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Бүгүн саат] LT',
              nextDay: '[Эртең саат] LT',
              nextWeek: 'dddd [саат] LT',
              lastDay: '[Кечээ саат] LT',
              lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s ичинде',
              past: '%s мурун',
              s: 'бирнече секунд',
              ss: '%d секунд',
              m: 'бир мүнөт',
              mm: '%d мүнөт',
              h: 'бир саат',
              hh: '%d саат',
              d: 'бир күн',
              dd: '%d күн',
              M: 'бир ай',
              MM: '%d ай',
              y: 'бир жыл',
              yy: '%d жыл'
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (number) {
              var a = number % 10,
                b = number >= 100 ? 100 : null;
              return number + (suffixes[number] || suffixes[a] || suffixes[b]);
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return ky;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/lb.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/lb.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function processRelativeTime(number, withoutSuffix, key, isFuture) {
            var format = {
              'm': ['eng Minutt', 'enger Minutt'],
              'h': ['eng Stonn', 'enger Stonn'],
              'd': ['een Dag', 'engem Dag'],
              'M': ['ee Mount', 'engem Mount'],
              'y': ['ee Joer', 'engem Joer']
            };
            return withoutSuffix ? format[key][0] : format[key][1];
          }

          function processFutureTime(string) {
            var number = string.substr(0, string.indexOf(' '));
            if (eifelerRegelAppliesToNumber(number)) {
              return 'a ' + string;
            }
            return 'an ' + string;
          }

          function processPastTime(string) {
            var number = string.substr(0, string.indexOf(' '));
            if (eifelerRegelAppliesToNumber(number)) {
              return 'viru ' + string;
            }
            return 'virun ' + string;
          }
          /**
           * Returns true if the word before the given number loses the '-n' ending.
           * e.g. 'an 10 Deeg' but 'a 5 Deeg'
           *
           * @param number {integer}
           * @returns {boolean}
           */
          function eifelerRegelAppliesToNumber(number) {
            number = parseInt(number, 10);
            if (isNaN(number)) {
              return false;
            }
            if (number < 0) {
              // Negative Number --> always true
              return true;
            } else if (number < 10) {
              // Only 1 digit
              if (4 <= number && number <= 7) {
                return true;
              }
              return false;
            } else if (number < 100) {
              // 2 digits
              var lastDigit = number % 10,
                firstDigit = number / 10;
              if (lastDigit === 0) {
                return eifelerRegelAppliesToNumber(firstDigit);
              }
              return eifelerRegelAppliesToNumber(lastDigit);
            } else if (number < 10000) {
              // 3 or 4 digits --> recursively check first digit
              while (number >= 10) {
                number = number / 10;
              }
              return eifelerRegelAppliesToNumber(number);
            } else {
              // Anything larger than 4 digits: recursively check first n-3 digits
              number = number / 1000;
              return eifelerRegelAppliesToNumber(number);
            }
          }

          var lb = moment.defineLocale('lb', {
            months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
            monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
            monthsParseExact: true,
            weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
            weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
            weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm [Auer]',
              LTS: 'H:mm:ss [Auer]',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm [Auer]',
              LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
            },
            calendar: {
              sameDay: '[Haut um] LT',
              sameElse: 'L',
              nextDay: '[Muer um] LT',
              nextWeek: 'dddd [um] LT',
              lastDay: '[Gëschter um] LT',
              lastWeek: function () {
                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {
                  case 2:
                  case 4:
                    return '[Leschten] dddd [um] LT';
                  default:
                    return '[Leschte] dddd [um] LT';
                }
              }
            },
            relativeTime: {
              future: processFutureTime,
              past: processPastTime,
              s: 'e puer Sekonnen',
              ss: '%d Sekonnen',
              m: processRelativeTime,
              mm: '%d Minutten',
              h: processRelativeTime,
              hh: '%d Stonnen',
              d: processRelativeTime,
              dd: '%d Deeg',
              M: processRelativeTime,
              MM: '%d Méint',
              y: processRelativeTime,
              yy: '%d Joer'
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return lb;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/lo.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/lo.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var lo = moment.defineLocale('lo', {
            months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
            monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
            weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
            weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
            weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (input) {
              return input === 'ຕອນແລງ';
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'ຕອນເຊົ້າ';
              } else {
                return 'ຕອນແລງ';
              }
            },
            calendar: {
              sameDay: '[ມື້ນີ້ເວລາ] LT',
              nextDay: '[ມື້ອື່ນເວລາ] LT',
              nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
              lastDay: '[ມື້ວານນີ້ເວລາ] LT',
              lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'ອີກ %s',
              past: '%sຜ່ານມາ',
              s: 'ບໍ່ເທົ່າໃດວິນາທີ',
              ss: '%d ວິນາທີ',
              m: '1 ນາທີ',
              mm: '%d ນາທີ',
              h: '1 ຊົ່ວໂມງ',
              hh: '%d ຊົ່ວໂມງ',
              d: '1 ມື້',
              dd: '%d ມື້',
              M: '1 ເດືອນ',
              MM: '%d ເດືອນ',
              y: '1 ປີ',
              yy: '%d ປີ'
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (number) {
              return 'ທີ່' + number;
            }
          });

          return lo;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/lt.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/lt.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var units = {
            'ss': 'sekundė_sekundžių_sekundes',
            'm': 'minutė_minutės_minutę',
            'mm': 'minutės_minučių_minutes',
            'h': 'valanda_valandos_valandą',
            'hh': 'valandos_valandų_valandas',
            'd': 'diena_dienos_dieną',
            'dd': 'dienos_dienų_dienas',
            'M': 'mėnuo_mėnesio_mėnesį',
            'MM': 'mėnesiai_mėnesių_mėnesius',
            'y': 'metai_metų_metus',
            'yy': 'metai_metų_metus'
          };

          function translateSeconds(number, withoutSuffix, key, isFuture) {
            if (withoutSuffix) {
              return 'kelios sekundės';
            } else {
              return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
            }
          }

          function translateSingular(number, withoutSuffix, key, isFuture) {
            return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
          }

          function special(number) {
            return number % 10 === 0 || (number > 10 && number < 20);
          }

          function forms(key) {
            return units[key].split('_');
          }

          function translate(number, withoutSuffix, key, isFuture) {
            var result = number + ' ';
            if (number === 1) {
              return result + translateSingular(number, withoutSuffix, key[0], isFuture);
            } else if (withoutSuffix) {
              return result + (special(number) ? forms(key)[1] : forms(key)[0]);
            } else {
              if (isFuture) {
                return result + forms(key)[1];
              } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
              }
            }
          }
          var lt = moment.defineLocale('lt', {
            months: {
              format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
              standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
              isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
            weekdays: {
              format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
              standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
              isFormat: /dddd HH:mm/
            },
            weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
            weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY-MM-DD',
              LL: 'YYYY [m.] MMMM D [d.]',
              LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
              LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
              l: 'YYYY-MM-DD',
              ll: 'YYYY [m.] MMMM D [d.]',
              lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
              llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
            },
            calendar: {
              sameDay: '[Šiandien] LT',
              nextDay: '[Rytoj] LT',
              nextWeek: 'dddd LT',
              lastDay: '[Vakar] LT',
              lastWeek: '[Praėjusį] dddd LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'po %s',
              past: 'prieš %s',
              s: translateSeconds,
              ss: translate,
              m: translateSingular,
              mm: translate,
              h: translateSingular,
              hh: translate,
              d: translateSingular,
              dd: translate,
              M: translateSingular,
              MM: translate,
              y: translateSingular,
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (number) {
              return number + '-oji';
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return lt;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/lv.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/lv.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var units = {
            'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
            'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
            'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
            'h': 'stundas_stundām_stunda_stundas'.split('_'),
            'hh': 'stundas_stundām_stunda_stundas'.split('_'),
            'd': 'dienas_dienām_diena_dienas'.split('_'),
            'dd': 'dienas_dienām_diena_dienas'.split('_'),
            'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
            'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
            'y': 'gada_gadiem_gads_gadi'.split('_'),
            'yy': 'gada_gadiem_gads_gadi'.split('_')
          };
          /**
           * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
           */
          function format(forms, number, withoutSuffix) {
            if (withoutSuffix) {
              // E.g. "21 minūte", "3 minūtes".
              return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
            } else {
              // E.g. "21 minūtes" as in "pēc 21 minūtes".
              // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
              return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
            }
          }

          function relativeTimeWithPlural(number, withoutSuffix, key) {
            return number + ' ' + format(units[key], number, withoutSuffix);
          }

          function relativeTimeWithSingular(number, withoutSuffix, key) {
            return format(units[key], number, withoutSuffix);
          }

          function relativeSeconds(number, withoutSuffix) {
            return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
          }

          var lv = moment.defineLocale('lv', {
            months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
            monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
            weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
            weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
            weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY.',
              LL: 'YYYY. [gada] D. MMMM',
              LLL: 'YYYY. [gada] D. MMMM, HH:mm',
              LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
            },
            calendar: {
              sameDay: '[Šodien pulksten] LT',
              nextDay: '[Rīt pulksten] LT',
              nextWeek: 'dddd [pulksten] LT',
              lastDay: '[Vakar pulksten] LT',
              lastWeek: '[Pagājušā] dddd [pulksten] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'pēc %s',
              past: 'pirms %s',
              s: relativeSeconds,
              ss: relativeTimeWithPlural,
              m: relativeTimeWithSingular,
              mm: relativeTimeWithPlural,
              h: relativeTimeWithSingular,
              hh: relativeTimeWithPlural,
              d: relativeTimeWithSingular,
              dd: relativeTimeWithPlural,
              M: relativeTimeWithSingular,
              MM: relativeTimeWithPlural,
              y: relativeTimeWithSingular,
              yy: relativeTimeWithPlural
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return lv;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/me.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/me.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var translator = {
            words: { //Different grammatical cases
              ss: ['sekund', 'sekunda', 'sekundi'],
              m: ['jedan minut', 'jednog minuta'],
              mm: ['minut', 'minuta', 'minuta'],
              h: ['jedan sat', 'jednog sata'],
              hh: ['sat', 'sata', 'sati'],
              dd: ['dan', 'dana', 'dana'],
              MM: ['mjesec', 'mjeseca', 'mjeseci'],
              yy: ['godina', 'godine', 'godina']
            },
            correctGrammaticalCase: function (number, wordKey) {
              return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
            },
            translate: function (number, withoutSuffix, key) {
              var wordKey = translator.words[key];
              if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
              } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
              }
            }
          };

          var me = moment.defineLocale('me', {
            months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
            monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
            monthsParseExact: true,
            weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
            weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
            weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd, D. MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[danas u] LT',
              nextDay: '[sjutra u] LT',

              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[u] [nedjelju] [u] LT';
                  case 3:
                    return '[u] [srijedu] [u] LT';
                  case 6:
                    return '[u] [subotu] [u] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[u] dddd [u] LT';
                }
              },
              lastDay: '[juče u] LT',
              lastWeek: function () {
                var lastWeekDays = [
                  '[prošle] [nedjelje] [u] LT',
                  '[prošlog] [ponedjeljka] [u] LT',
                  '[prošlog] [utorka] [u] LT',
                  '[prošle] [srijede] [u] LT',
                  '[prošlog] [četvrtka] [u] LT',
                  '[prošlog] [petka] [u] LT',
                  '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'za %s',
              past: 'prije %s',
              s: 'nekoliko sekundi',
              ss: translator.translate,
              m: translator.translate,
              mm: translator.translate,
              h: translator.translate,
              hh: translator.translate,
              d: 'dan',
              dd: translator.translate,
              M: 'mjesec',
              MM: translator.translate,
              y: 'godinu',
              yy: translator.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return me;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/mi.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/mi.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var mi = moment.defineLocale('mi', {
            months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
            monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
            weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
            weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY [i] HH:mm',
              LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
            },
            calendar: {
              sameDay: '[i teie mahana, i] LT',
              nextDay: '[apopo i] LT',
              nextWeek: 'dddd [i] LT',
              lastDay: '[inanahi i] LT',
              lastWeek: 'dddd [whakamutunga i] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'i roto i %s',
              past: '%s i mua',
              s: 'te hēkona ruarua',
              ss: '%d hēkona',
              m: 'he meneti',
              mm: '%d meneti',
              h: 'te haora',
              hh: '%d haora',
              d: 'he ra',
              dd: '%d ra',
              M: 'he marama',
              MM: '%d marama',
              y: 'he tau',
              yy: '%d tau'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return mi;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/mk.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/mk.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var mk = moment.defineLocale('mk', {
            months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
            monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
            weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
            weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
            weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'D.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY H:mm',
              LLLL: 'dddd, D MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[Денес во] LT',
              nextDay: '[Утре во] LT',
              nextWeek: '[Во] dddd [во] LT',
              lastDay: '[Вчера во] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return '[Изминатата] dddd [во] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[Изминатиот] dddd [во] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'после %s',
              past: 'пред %s',
              s: 'неколку секунди',
              ss: '%d секунди',
              m: 'минута',
              mm: '%d минути',
              h: 'час',
              hh: '%d часа',
              d: 'ден',
              dd: '%d дена',
              M: 'месец',
              MM: '%d месеци',
              y: 'година',
              yy: '%d години'
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (number) {
              var lastDigit = number % 10,
                last2Digits = number % 100;
              if (number === 0) {
                return number + '-ев';
              } else if (last2Digits === 0) {
                return number + '-ен';
              } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
              } else if (lastDigit === 1) {
                return number + '-ви';
              } else if (lastDigit === 2) {
                return number + '-ри';
              } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
              } else {
                return number + '-ти';
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return mk;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ml.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ml.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ml = moment.defineLocale('ml', {
            months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
            monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
            monthsParseExact: true,
            weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
            weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
            weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
            longDateFormat: {
              LT: 'A h:mm -നു',
              LTS: 'A h:mm:ss -നു',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm -നു',
              LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
            },
            calendar: {
              sameDay: '[ഇന്ന്] LT',
              nextDay: '[നാളെ] LT',
              nextWeek: 'dddd, LT',
              lastDay: '[ഇന്നലെ] LT',
              lastWeek: '[കഴിഞ്ഞ] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s കഴിഞ്ഞ്',
              past: '%s മുൻപ്',
              s: 'അൽപ നിമിഷങ്ങൾ',
              ss: '%d സെക്കൻഡ്',
              m: 'ഒരു മിനിറ്റ്',
              mm: '%d മിനിറ്റ്',
              h: 'ഒരു മണിക്കൂർ',
              hh: '%d മണിക്കൂർ',
              d: 'ഒരു ദിവസം',
              dd: '%d ദിവസം',
              M: 'ഒരു മാസം',
              MM: '%d മാസം',
              y: 'ഒരു വർഷം',
              yy: '%d വർഷം'
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if ((meridiem === 'രാത്രി' && hour >= 4) ||
                meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
                meridiem === 'വൈകുന്നേരം') {
                return hour + 12;
              } else {
                return hour;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'രാത്രി';
              } else if (hour < 12) {
                return 'രാവിലെ';
              } else if (hour < 17) {
                return 'ഉച്ച കഴിഞ്ഞ്';
              } else if (hour < 20) {
                return 'വൈകുന്നേരം';
              } else {
                return 'രാത്രി';
              }
            }
          });

          return ml;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/mn.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/mn.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function translate(number, withoutSuffix, key, isFuture) {
            switch (key) {
              case 's':
                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
              case 'ss':
                return number + (withoutSuffix ? ' секунд' : ' секундын');
              case 'm':
              case 'mm':
                return number + (withoutSuffix ? ' минут' : ' минутын');
              case 'h':
              case 'hh':
                return number + (withoutSuffix ? ' цаг' : ' цагийн');
              case 'd':
              case 'dd':
                return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
              case 'M':
              case 'MM':
                return number + (withoutSuffix ? ' сар' : ' сарын');
              case 'y':
              case 'yy':
                return number + (withoutSuffix ? ' жил' : ' жилийн');
              default:
                return number;
            }
          }

          var mn = moment.defineLocale('mn', {
            months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
            monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
            monthsParseExact: true,
            weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
            weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
            weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY-MM-DD',
              LL: 'YYYY оны MMMMын D',
              LLL: 'YYYY оны MMMMын D HH:mm',
              LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function (input) {
              return input === 'ҮХ';
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'ҮӨ';
              } else {
                return 'ҮХ';
              }
            },
            calendar: {
              sameDay: '[Өнөөдөр] LT',
              nextDay: '[Маргааш] LT',
              nextWeek: '[Ирэх] dddd LT',
              lastDay: '[Өчигдөр] LT',
              lastWeek: '[Өнгөрсөн] dddd LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s дараа',
              past: '%s өмнө',
              s: translate,
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: translate,
              dd: translate,
              M: translate,
              MM: translate,
              y: translate,
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function (number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                  return number + ' өдөр';
                default:
                  return number;
              }
            }
          });

          return mn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/mr.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/mr.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '१',
              '2': '२',
              '3': '३',
              '4': '४',
              '5': '५',
              '6': '६',
              '7': '७',
              '8': '८',
              '9': '९',
              '0': '०'
            },
            numberMap = {
              '१': '1',
              '२': '2',
              '३': '3',
              '४': '4',
              '५': '5',
              '६': '6',
              '७': '7',
              '८': '8',
              '९': '9',
              '०': '0'
            };

          function relativeTimeMr(number, withoutSuffix, string, isFuture) {
            var output = '';
            if (withoutSuffix) {
              switch (string) {
                case 's':
                  output = 'काही सेकंद';
                  break;
                case 'ss':
                  output = '%d सेकंद';
                  break;
                case 'm':
                  output = 'एक मिनिट';
                  break;
                case 'mm':
                  output = '%d मिनिटे';
                  break;
                case 'h':
                  output = 'एक तास';
                  break;
                case 'hh':
                  output = '%d तास';
                  break;
                case 'd':
                  output = 'एक दिवस';
                  break;
                case 'dd':
                  output = '%d दिवस';
                  break;
                case 'M':
                  output = 'एक महिना';
                  break;
                case 'MM':
                  output = '%d महिने';
                  break;
                case 'y':
                  output = 'एक वर्ष';
                  break;
                case 'yy':
                  output = '%d वर्षे';
                  break;
              }
            } else {
              switch (string) {
                case 's':
                  output = 'काही सेकंदां';
                  break;
                case 'ss':
                  output = '%d सेकंदां';
                  break;
                case 'm':
                  output = 'एका मिनिटा';
                  break;
                case 'mm':
                  output = '%d मिनिटां';
                  break;
                case 'h':
                  output = 'एका तासा';
                  break;
                case 'hh':
                  output = '%d तासां';
                  break;
                case 'd':
                  output = 'एका दिवसा';
                  break;
                case 'dd':
                  output = '%d दिवसां';
                  break;
                case 'M':
                  output = 'एका महिन्या';
                  break;
                case 'MM':
                  output = '%d महिन्यां';
                  break;
                case 'y':
                  output = 'एका वर्षा';
                  break;
                case 'yy':
                  output = '%d वर्षां';
                  break;
              }
            }
            return output.replace(/%d/i, number);
          }

          var mr = moment.defineLocale('mr', {
            months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
            monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
            monthsParseExact: true,
            weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
            weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
            weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
            longDateFormat: {
              LT: 'A h:mm वाजता',
              LTS: 'A h:mm:ss वाजता',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm वाजता',
              LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
            },
            calendar: {
              sameDay: '[आज] LT',
              nextDay: '[उद्या] LT',
              nextWeek: 'dddd, LT',
              lastDay: '[काल] LT',
              lastWeek: '[मागील] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%sमध्ये',
              past: '%sपूर्वी',
              s: relativeTimeMr,
              ss: relativeTimeMr,
              m: relativeTimeMr,
              mm: relativeTimeMr,
              h: relativeTimeMr,
              hh: relativeTimeMr,
              d: relativeTimeMr,
              dd: relativeTimeMr,
              M: relativeTimeMr,
              MM: relativeTimeMr,
              y: relativeTimeMr,
              yy: relativeTimeMr
            },
            preparse: function (string) {
              return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'रात्री') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'सकाळी') {
                return hour;
              } else if (meridiem === 'दुपारी') {
                return hour >= 10 ? hour : hour + 12;
              } else if (meridiem === 'सायंकाळी') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'रात्री';
              } else if (hour < 10) {
                return 'सकाळी';
              } else if (hour < 17) {
                return 'दुपारी';
              } else if (hour < 20) {
                return 'सायंकाळी';
              } else {
                return 'रात्री';
              }
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return mr;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ms-my.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/ms-my.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var msMy = moment.defineLocale('ms-my', {
            months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
            monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
            weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
            weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
            weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
            longDateFormat: {
              LT: 'HH.mm',
              LTS: 'HH.mm.ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY [pukul] HH.mm',
              LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'pagi') {
                return hour;
              } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
              } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
              }
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours < 11) {
                return 'pagi';
              } else if (hours < 15) {
                return 'tengahari';
              } else if (hours < 19) {
                return 'petang';
              } else {
                return 'malam';
              }
            },
            calendar: {
              sameDay: '[Hari ini pukul] LT',
              nextDay: '[Esok pukul] LT',
              nextWeek: 'dddd [pukul] LT',
              lastDay: '[Kelmarin pukul] LT',
              lastWeek: 'dddd [lepas pukul] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'dalam %s',
              past: '%s yang lepas',
              s: 'beberapa saat',
              ss: '%d saat',
              m: 'seminit',
              mm: '%d minit',
              h: 'sejam',
              hh: '%d jam',
              d: 'sehari',
              dd: '%d hari',
              M: 'sebulan',
              MM: '%d bulan',
              y: 'setahun',
              yy: '%d tahun'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return msMy;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ms.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ms.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ms = moment.defineLocale('ms', {
            months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
            monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
            weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
            weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
            weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
            longDateFormat: {
              LT: 'HH.mm',
              LTS: 'HH.mm.ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY [pukul] HH.mm',
              LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'pagi') {
                return hour;
              } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
              } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
              }
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours < 11) {
                return 'pagi';
              } else if (hours < 15) {
                return 'tengahari';
              } else if (hours < 19) {
                return 'petang';
              } else {
                return 'malam';
              }
            },
            calendar: {
              sameDay: '[Hari ini pukul] LT',
              nextDay: '[Esok pukul] LT',
              nextWeek: 'dddd [pukul] LT',
              lastDay: '[Kelmarin pukul] LT',
              lastWeek: 'dddd [lepas pukul] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'dalam %s',
              past: '%s yang lepas',
              s: 'beberapa saat',
              ss: '%d saat',
              m: 'seminit',
              mm: '%d minit',
              h: 'sejam',
              hh: '%d jam',
              d: 'sehari',
              dd: '%d hari',
              M: 'sebulan',
              MM: '%d bulan',
              y: 'setahun',
              yy: '%d tahun'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return ms;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/mt.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/mt.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var mt = moment.defineLocale('mt', {
            months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
            monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
            weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
            weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
            weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Illum fil-]LT',
              nextDay: '[Għada fil-]LT',
              nextWeek: 'dddd [fil-]LT',
              lastDay: '[Il-bieraħ fil-]LT',
              lastWeek: 'dddd [li għadda] [fil-]LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'f’ %s',
              past: '%s ilu',
              s: 'ftit sekondi',
              ss: '%d sekondi',
              m: 'minuta',
              mm: '%d minuti',
              h: 'siegħa',
              hh: '%d siegħat',
              d: 'ġurnata',
              dd: '%d ġranet',
              M: 'xahar',
              MM: '%d xhur',
              y: 'sena',
              yy: '%d sni'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return mt;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/my.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/my.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '၁',
              '2': '၂',
              '3': '၃',
              '4': '၄',
              '5': '၅',
              '6': '၆',
              '7': '၇',
              '8': '၈',
              '9': '၉',
              '0': '၀'
            },
            numberMap = {
              '၁': '1',
              '၂': '2',
              '၃': '3',
              '၄': '4',
              '၅': '5',
              '၆': '6',
              '၇': '7',
              '၈': '8',
              '၉': '9',
              '၀': '0'
            };

          var my = moment.defineLocale('my', {
            months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
            monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
            weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
            weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
            weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[ယနေ.] LT [မှာ]',
              nextDay: '[မနက်ဖြန်] LT [မှာ]',
              nextWeek: 'dddd LT [မှာ]',
              lastDay: '[မနေ.က] LT [မှာ]',
              lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'လာမည့် %s မှာ',
              past: 'လွန်ခဲ့သော %s က',
              s: 'စက္ကန်.အနည်းငယ်',
              ss: '%d စက္ကန့်',
              m: 'တစ်မိနစ်',
              mm: '%d မိနစ်',
              h: 'တစ်နာရီ',
              hh: '%d နာရီ',
              d: 'တစ်ရက်',
              dd: '%d ရက်',
              M: 'တစ်လ',
              MM: '%d လ',
              y: 'တစ်နှစ်',
              yy: '%d နှစ်'
            },
            preparse: function (string) {
              return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return my;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/nb.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/nb.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var nb = moment.defineLocale('nb', {
            months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
            monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
            monthsParseExact: true,
            weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
            weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
            weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY [kl.] HH:mm',
              LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
            },
            calendar: {
              sameDay: '[i dag kl.] LT',
              nextDay: '[i morgen kl.] LT',
              nextWeek: 'dddd [kl.] LT',
              lastDay: '[i går kl.] LT',
              lastWeek: '[forrige] dddd [kl.] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'om %s',
              past: '%s siden',
              s: 'noen sekunder',
              ss: '%d sekunder',
              m: 'ett minutt',
              mm: '%d minutter',
              h: 'en time',
              hh: '%d timer',
              d: 'en dag',
              dd: '%d dager',
              M: 'en måned',
              MM: '%d måneder',
              y: 'ett år',
              yy: '%d år'
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return nb;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ne.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ne.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '१',
              '2': '२',
              '3': '३',
              '4': '४',
              '5': '५',
              '6': '६',
              '7': '७',
              '8': '८',
              '9': '९',
              '0': '०'
            },
            numberMap = {
              '१': '1',
              '२': '2',
              '३': '3',
              '४': '4',
              '५': '5',
              '६': '6',
              '७': '7',
              '८': '8',
              '९': '9',
              '०': '0'
            };

          var ne = moment.defineLocale('ne', {
            months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
            monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
            monthsParseExact: true,
            weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
            weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
            weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'Aको h:mm बजे',
              LTS: 'Aको h:mm:ss बजे',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, Aको h:mm बजे',
              LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
            },
            preparse: function (string) {
              return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'राति') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'बिहान') {
                return hour;
              } else if (meridiem === 'दिउँसो') {
                return hour >= 10 ? hour : hour + 12;
              } else if (meridiem === 'साँझ') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 3) {
                return 'राति';
              } else if (hour < 12) {
                return 'बिहान';
              } else if (hour < 16) {
                return 'दिउँसो';
              } else if (hour < 20) {
                return 'साँझ';
              } else {
                return 'राति';
              }
            },
            calendar: {
              sameDay: '[आज] LT',
              nextDay: '[भोलि] LT',
              nextWeek: '[आउँदो] dddd[,] LT',
              lastDay: '[हिजो] LT',
              lastWeek: '[गएको] dddd[,] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%sमा',
              past: '%s अगाडि',
              s: 'केही क्षण',
              ss: '%d सेकेण्ड',
              m: 'एक मिनेट',
              mm: '%d मिनेट',
              h: 'एक घण्टा',
              hh: '%d घण्टा',
              d: 'एक दिन',
              dd: '%d दिन',
              M: 'एक महिना',
              MM: '%d महिना',
              y: 'एक बर्ष',
              yy: '%d बर्ष'
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return ne;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/nl-be.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/nl-be.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
            monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

          var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
          var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

          var nlBe = moment.defineLocale('nl-be', {
            months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
            monthsShort: function (m, format) {
              if (!m) {
                return monthsShortWithDots;
              } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
              } else {
                return monthsShortWithDots[m.month()];
              }
            },

            monthsRegex: monthsRegex,
            monthsShortRegex: monthsRegex,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

            monthsParse: monthsParse,
            longMonthsParse: monthsParse,
            shortMonthsParse: monthsParse,

            weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
            weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
            weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[vandaag om] LT',
              nextDay: '[morgen om] LT',
              nextWeek: 'dddd [om] LT',
              lastDay: '[gisteren om] LT',
              lastWeek: '[afgelopen] dddd [om] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'over %s',
              past: '%s geleden',
              s: 'een paar seconden',
              ss: '%d seconden',
              m: 'één minuut',
              mm: '%d minuten',
              h: 'één uur',
              hh: '%d uur',
              d: 'één dag',
              dd: '%d dagen',
              M: 'één maand',
              MM: '%d maanden',
              y: 'één jaar',
              yy: '%d jaar'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (number) {
              return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return nlBe;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/nl.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/nl.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
            monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

          var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
          var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

          var nl = moment.defineLocale('nl', {
            months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
            monthsShort: function (m, format) {
              if (!m) {
                return monthsShortWithDots;
              } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
              } else {
                return monthsShortWithDots[m.month()];
              }
            },

            monthsRegex: monthsRegex,
            monthsShortRegex: monthsRegex,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

            monthsParse: monthsParse,
            longMonthsParse: monthsParse,
            shortMonthsParse: monthsParse,

            weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
            weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
            weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD-MM-YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[vandaag om] LT',
              nextDay: '[morgen om] LT',
              nextWeek: 'dddd [om] LT',
              lastDay: '[gisteren om] LT',
              lastWeek: '[afgelopen] dddd [om] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'over %s',
              past: '%s geleden',
              s: 'een paar seconden',
              ss: '%d seconden',
              m: 'één minuut',
              mm: '%d minuten',
              h: 'één uur',
              hh: '%d uur',
              d: 'één dag',
              dd: '%d dagen',
              M: 'één maand',
              MM: '%d maanden',
              y: 'één jaar',
              yy: '%d jaar'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (number) {
              return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return nl;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/nn.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/nn.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var nn = moment.defineLocale('nn', {
            months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
            monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
            weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
            weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
            weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY [kl.] H:mm',
              LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
            },
            calendar: {
              sameDay: '[I dag klokka] LT',
              nextDay: '[I morgon klokka] LT',
              nextWeek: 'dddd [klokka] LT',
              lastDay: '[I går klokka] LT',
              lastWeek: '[Føregåande] dddd [klokka] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'om %s',
              past: '%s sidan',
              s: 'nokre sekund',
              ss: '%d sekund',
              m: 'eit minutt',
              mm: '%d minutt',
              h: 'ein time',
              hh: '%d timar',
              d: 'ein dag',
              dd: '%d dagar',
              M: 'ein månad',
              MM: '%d månader',
              y: 'eit år',
              yy: '%d år'
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return nn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/pa-in.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/pa-in.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '੧',
              '2': '੨',
              '3': '੩',
              '4': '੪',
              '5': '੫',
              '6': '੬',
              '7': '੭',
              '8': '੮',
              '9': '੯',
              '0': '੦'
            },
            numberMap = {
              '੧': '1',
              '੨': '2',
              '੩': '3',
              '੪': '4',
              '੫': '5',
              '੬': '6',
              '੭': '7',
              '੮': '8',
              '੯': '9',
              '੦': '0'
            };

          var paIn = moment.defineLocale('pa-in', {
            // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
            months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
            monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
            weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
            weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
            weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
            longDateFormat: {
              LT: 'A h:mm ਵਜੇ',
              LTS: 'A h:mm:ss ਵਜੇ',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
              LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
            },
            calendar: {
              sameDay: '[ਅਜ] LT',
              nextDay: '[ਕਲ] LT',
              nextWeek: '[ਅਗਲਾ] dddd, LT',
              lastDay: '[ਕਲ] LT',
              lastWeek: '[ਪਿਛਲੇ] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s ਵਿੱਚ',
              past: '%s ਪਿਛਲੇ',
              s: 'ਕੁਝ ਸਕਿੰਟ',
              ss: '%d ਸਕਿੰਟ',
              m: 'ਇਕ ਮਿੰਟ',
              mm: '%d ਮਿੰਟ',
              h: 'ਇੱਕ ਘੰਟਾ',
              hh: '%d ਘੰਟੇ',
              d: 'ਇੱਕ ਦਿਨ',
              dd: '%d ਦਿਨ',
              M: 'ਇੱਕ ਮਹੀਨਾ',
              MM: '%d ਮਹੀਨੇ',
              y: 'ਇੱਕ ਸਾਲ',
              yy: '%d ਸਾਲ'
            },
            preparse: function (string) {
              return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
            // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'ਰਾਤ') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'ਸਵੇਰ') {
                return hour;
              } else if (meridiem === 'ਦੁਪਹਿਰ') {
                return hour >= 10 ? hour : hour + 12;
              } else if (meridiem === 'ਸ਼ਾਮ') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'ਰਾਤ';
              } else if (hour < 10) {
                return 'ਸਵੇਰ';
              } else if (hour < 17) {
                return 'ਦੁਪਹਿਰ';
              } else if (hour < 20) {
                return 'ਸ਼ਾਮ';
              } else {
                return 'ਰਾਤ';
              }
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return paIn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/pl.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/pl.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
            monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

          function plural(n) {
            return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
          }

          function translate(number, withoutSuffix, key) {
            var result = number + ' ';
            switch (key) {
              case 'ss':
                return result + (plural(number) ? 'sekundy' : 'sekund');
              case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
              case 'mm':
                return result + (plural(number) ? 'minuty' : 'minut');
              case 'h':
                return withoutSuffix ? 'godzina' : 'godzinę';
              case 'hh':
                return result + (plural(number) ? 'godziny' : 'godzin');
              case 'MM':
                return result + (plural(number) ? 'miesiące' : 'miesięcy');
              case 'yy':
                return result + (plural(number) ? 'lata' : 'lat');
            }
          }

          var pl = moment.defineLocale('pl', {
            months: function (momentToFormat, format) {
              if (!momentToFormat) {
                return monthsNominative;
              } else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
              } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
              } else {
                return monthsNominative[momentToFormat.month()];
              }
            },
            monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
            weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
            weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
            weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Dziś o] LT',
              nextDay: '[Jutro o] LT',
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[W niedzielę o] LT';

                  case 2:
                    return '[We wtorek o] LT';

                  case 3:
                    return '[W środę o] LT';

                  case 6:
                    return '[W sobotę o] LT';

                  default:
                    return '[W] dddd [o] LT';
                }
              },
              lastDay: '[Wczoraj o] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[W zeszłą niedzielę o] LT';
                  case 3:
                    return '[W zeszłą środę o] LT';
                  case 6:
                    return '[W zeszłą sobotę o] LT';
                  default:
                    return '[W zeszły] dddd [o] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'za %s',
              past: '%s temu',
              s: 'kilka sekund',
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: '1 dzień',
              dd: '%d dni',
              M: 'miesiąc',
              MM: translate,
              y: 'rok',
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return pl;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/pt-br.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/pt-br.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ptBr = moment.defineLocale('pt-br', {
            months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
            monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
            weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
            weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
            weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D [de] MMMM [de] YYYY',
              LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
              LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
            },
            calendar: {
              sameDay: '[Hoje às] LT',
              nextDay: '[Amanhã às] LT',
              nextWeek: 'dddd [às] LT',
              lastDay: '[Ontem às] LT',
              lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                  '[Último] dddd [às] LT' : // Saturday + Sunday
                  '[Última] dddd [às] LT'; // Monday - Friday
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'em %s',
              past: 'há %s',
              s: 'poucos segundos',
              ss: '%d segundos',
              m: 'um minuto',
              mm: '%d minutos',
              h: 'uma hora',
              hh: '%d horas',
              d: 'um dia',
              dd: '%d dias',
              M: 'um mês',
              MM: '%d meses',
              y: 'um ano',
              yy: '%d anos'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº'
          });

          return ptBr;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/pt.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/pt.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var pt = moment.defineLocale('pt', {
            months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
            monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
            weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
            weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
            weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D [de] MMMM [de] YYYY',
              LLL: 'D [de] MMMM [de] YYYY HH:mm',
              LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Hoje às] LT',
              nextDay: '[Amanhã às] LT',
              nextWeek: 'dddd [às] LT',
              lastDay: '[Ontem às] LT',
              lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                  '[Último] dddd [às] LT' : // Saturday + Sunday
                  '[Última] dddd [às] LT'; // Monday - Friday
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'em %s',
              past: 'há %s',
              s: 'segundos',
              ss: '%d segundos',
              m: 'um minuto',
              mm: '%d minutos',
              h: 'uma hora',
              hh: '%d horas',
              d: 'um dia',
              dd: '%d dias',
              M: 'um mês',
              MM: '%d meses',
              y: 'um ano',
              yy: '%d anos'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return pt;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ro.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ro.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function relativeTimeWithPlural(number, withoutSuffix, key) {
            var format = {
                'ss': 'secunde',
                'mm': 'minute',
                'hh': 'ore',
                'dd': 'zile',
                'MM': 'luni',
                'yy': 'ani'
              },
              separator = ' ';
            if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
              separator = ' de ';
            }
            return number + separator + format[key];
          }

          var ro = moment.defineLocale('ro', {
            months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
            monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
            monthsParseExact: true,
            weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
            weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
            weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY H:mm',
              LLLL: 'dddd, D MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[azi la] LT',
              nextDay: '[mâine la] LT',
              nextWeek: 'dddd [la] LT',
              lastDay: '[ieri la] LT',
              lastWeek: '[fosta] dddd [la] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'peste %s',
              past: '%s în urmă',
              s: 'câteva secunde',
              ss: relativeTimeWithPlural,
              m: 'un minut',
              mm: relativeTimeWithPlural,
              h: 'o oră',
              hh: relativeTimeWithPlural,
              d: 'o zi',
              dd: relativeTimeWithPlural,
              M: 'o lună',
              MM: relativeTimeWithPlural,
              y: 'un an',
              yy: relativeTimeWithPlural
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return ro;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ru.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ru.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function plural(word, num) {
            var forms = word.split('_');
            return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
          }

          function relativeTimeWithPlural(number, withoutSuffix, key) {
            var format = {
              'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
              'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
              'hh': 'час_часа_часов',
              'dd': 'день_дня_дней',
              'MM': 'месяц_месяца_месяцев',
              'yy': 'год_года_лет'
            };
            if (key === 'm') {
              return withoutSuffix ? 'минута' : 'минуту';
            } else {
              return number + ' ' + plural(format[key], +number);
            }
          }
          var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

          // http://new.gramota.ru/spravka/rules/139-prop : § 103
          // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
          // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
          var ru = moment.defineLocale('ru', {
            months: {
              format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
              standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
            },
            monthsShort: {
              // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
              format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
              standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
            },
            weekdays: {
              standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
              format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
              isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
            weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
            monthsParse: monthsParse,
            longMonthsParse: monthsParse,
            shortMonthsParse: monthsParse,

            // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

            // копия предыдущего
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

            // полные названия с падежами
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

            // Выражение, которое соотвествует только сокращённым формам
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY г.',
              LLL: 'D MMMM YYYY г., H:mm',
              LLLL: 'dddd, D MMMM YYYY г., H:mm'
            },
            calendar: {
              sameDay: '[Сегодня, в] LT',
              nextDay: '[Завтра, в] LT',
              lastDay: '[Вчера, в] LT',
              nextWeek: function (now) {
                if (now.week() !== this.week()) {
                  switch (this.day()) {
                    case 0:
                      return '[В следующее] dddd, [в] LT';
                    case 1:
                    case 2:
                    case 4:
                      return '[В следующий] dddd, [в] LT';
                    case 3:
                    case 5:
                    case 6:
                      return '[В следующую] dddd, [в] LT';
                  }
                } else {
                  if (this.day() === 2) {
                    return '[Во] dddd, [в] LT';
                  } else {
                    return '[В] dddd, [в] LT';
                  }
                }
              },
              lastWeek: function (now) {
                if (now.week() !== this.week()) {
                  switch (this.day()) {
                    case 0:
                      return '[В прошлое] dddd, [в] LT';
                    case 1:
                    case 2:
                    case 4:
                      return '[В прошлый] dddd, [в] LT';
                    case 3:
                    case 5:
                    case 6:
                      return '[В прошлую] dddd, [в] LT';
                  }
                } else {
                  if (this.day() === 2) {
                    return '[Во] dddd, [в] LT';
                  } else {
                    return '[В] dddd, [в] LT';
                  }
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'через %s',
              past: '%s назад',
              s: 'несколько секунд',
              ss: relativeTimeWithPlural,
              m: relativeTimeWithPlural,
              mm: relativeTimeWithPlural,
              h: 'час',
              hh: relativeTimeWithPlural,
              d: 'день',
              dd: relativeTimeWithPlural,
              M: 'месяц',
              MM: relativeTimeWithPlural,
              y: 'год',
              yy: relativeTimeWithPlural
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (input) {
              return /^(дня|вечера)$/.test(input);
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'ночи';
              } else if (hour < 12) {
                return 'утра';
              } else if (hour < 17) {
                return 'дня';
              } else {
                return 'вечера';
              }
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                  return number + '-й';
                case 'D':
                  return number + '-го';
                case 'w':
                case 'W':
                  return number + '-я';
                default:
                  return number;
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return ru;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/sd.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/sd.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var months = [
            'جنوري',
            'فيبروري',
            'مارچ',
            'اپريل',
            'مئي',
            'جون',
            'جولاءِ',
            'آگسٽ',
            'سيپٽمبر',
            'آڪٽوبر',
            'نومبر',
            'ڊسمبر'
          ];
          var days = [
            'آچر',
            'سومر',
            'اڱارو',
            'اربع',
            'خميس',
            'جمع',
            'ڇنڇر'
          ];

          var sd = moment.defineLocale('sd', {
            months: months,
            monthsShort: months,
            weekdays: days,
            weekdaysShort: days,
            weekdaysMin: days,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd، D MMMM YYYY HH:mm'
            },
            meridiemParse: /صبح|شام/,
            isPM: function (input) {
              return 'شام' === input;
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'صبح';
              }
              return 'شام';
            },
            calendar: {
              sameDay: '[اڄ] LT',
              nextDay: '[سڀاڻي] LT',
              nextWeek: 'dddd [اڳين هفتي تي] LT',
              lastDay: '[ڪالهه] LT',
              lastWeek: '[گزريل هفتي] dddd [تي] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s پوء',
              past: '%s اڳ',
              s: 'چند سيڪنڊ',
              ss: '%d سيڪنڊ',
              m: 'هڪ منٽ',
              mm: '%d منٽ',
              h: 'هڪ ڪلاڪ',
              hh: '%d ڪلاڪ',
              d: 'هڪ ڏينهن',
              dd: '%d ڏينهن',
              M: 'هڪ مهينو',
              MM: '%d مهينا',
              y: 'هڪ سال',
              yy: '%d سال'
            },
            preparse: function (string) {
              return string.replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/,/g, '،');
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return sd;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/se.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/se.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var se = moment.defineLocale('se', {
            months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
            monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
            weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
            weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
            weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'MMMM D. [b.] YYYY',
              LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
              LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
            },
            calendar: {
              sameDay: '[otne ti] LT',
              nextDay: '[ihttin ti] LT',
              nextWeek: 'dddd [ti] LT',
              lastDay: '[ikte ti] LT',
              lastWeek: '[ovddit] dddd [ti] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s geažes',
              past: 'maŋit %s',
              s: 'moadde sekunddat',
              ss: '%d sekunddat',
              m: 'okta minuhta',
              mm: '%d minuhtat',
              h: 'okta diimmu',
              hh: '%d diimmut',
              d: 'okta beaivi',
              dd: '%d beaivvit',
              M: 'okta mánnu',
              MM: '%d mánut',
              y: 'okta jahki',
              yy: '%d jagit'
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return se;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/si.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/si.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          /*jshint -W100*/
          var si = moment.defineLocale('si', {
            months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
            monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
            weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
            weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
            weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'a h:mm',
              LTS: 'a h:mm:ss',
              L: 'YYYY/MM/DD',
              LL: 'YYYY MMMM D',
              LLL: 'YYYY MMMM D, a h:mm',
              LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
            },
            calendar: {
              sameDay: '[අද] LT[ට]',
              nextDay: '[හෙට] LT[ට]',
              nextWeek: 'dddd LT[ට]',
              lastDay: '[ඊයේ] LT[ට]',
              lastWeek: '[පසුගිය] dddd LT[ට]',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%sකින්',
              past: '%sකට පෙර',
              s: 'තත්පර කිහිපය',
              ss: 'තත්පර %d',
              m: 'මිනිත්තුව',
              mm: 'මිනිත්තු %d',
              h: 'පැය',
              hh: 'පැය %d',
              d: 'දිනය',
              dd: 'දින %d',
              M: 'මාසය',
              MM: 'මාස %d',
              y: 'වසර',
              yy: 'වසර %d'
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (number) {
              return number + ' වැනි';
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (input) {
              return input === 'ප.ව.' || input === 'පස් වරු';
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours > 11) {
                return isLower ? 'ප.ව.' : 'පස් වරු';
              } else {
                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
              }
            }
          });

          return si;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/sk.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/sk.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
            monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');

          function plural(n) {
            return (n > 1) && (n < 5);
          }

          function translate(number, withoutSuffix, key, isFuture) {
            var result = number + ' ';
            switch (key) {
              case 's': // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
              case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'sekundy' : 'sekúnd');
                } else {
                  return result + 'sekundami';
                }
                break;
              case 'm': // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
              case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'minúty' : 'minút');
                } else {
                  return result + 'minútami';
                }
                break;
              case 'h': // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
              case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'hodiny' : 'hodín');
                } else {
                  return result + 'hodinami';
                }
                break;
              case 'd': // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
              case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'dni' : 'dní');
                } else {
                  return result + 'dňami';
                }
                break;
              case 'M': // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
              case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'mesiace' : 'mesiacov');
                } else {
                  return result + 'mesiacmi';
                }
                break;
              case 'y': // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
              case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                  return result + (plural(number) ? 'roky' : 'rokov');
                } else {
                  return result + 'rokmi';
                }
                break;
            }
          }

          var sk = moment.defineLocale('sk', {
            months: months,
            monthsShort: monthsShort,
            weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
            weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
            weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd D. MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[dnes o] LT',
              nextDay: '[zajtra o] LT',
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[v nedeľu o] LT';
                  case 1:
                  case 2:
                    return '[v] dddd [o] LT';
                  case 3:
                    return '[v stredu o] LT';
                  case 4:
                    return '[vo štvrtok o] LT';
                  case 5:
                    return '[v piatok o] LT';
                  case 6:
                    return '[v sobotu o] LT';
                }
              },
              lastDay: '[včera o] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[minulú nedeľu o] LT';
                  case 1:
                  case 2:
                    return '[minulý] dddd [o] LT';
                  case 3:
                    return '[minulú stredu o] LT';
                  case 4:
                  case 5:
                    return '[minulý] dddd [o] LT';
                  case 6:
                    return '[minulú sobotu o] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'za %s',
              past: 'pred %s',
              s: translate,
              ss: translate,
              m: translate,
              mm: translate,
              h: translate,
              hh: translate,
              d: translate,
              dd: translate,
              M: translate,
              MM: translate,
              y: translate,
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return sk;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/sl.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/sl.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function processRelativeTime(number, withoutSuffix, key, isFuture) {
            var result = number + ' ';
            switch (key) {
              case 's':
                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
              case 'ss':
                if (number === 1) {
                  result += withoutSuffix ? 'sekundo' : 'sekundi';
                } else if (number === 2) {
                  result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
                } else if (number < 5) {
                  result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
                } else {
                  result += 'sekund';
                }
                return result;
              case 'm':
                return withoutSuffix ? 'ena minuta' : 'eno minuto';
              case 'mm':
                if (number === 1) {
                  result += withoutSuffix ? 'minuta' : 'minuto';
                } else if (number === 2) {
                  result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
                } else if (number < 5) {
                  result += withoutSuffix || isFuture ? 'minute' : 'minutami';
                } else {
                  result += withoutSuffix || isFuture ? 'minut' : 'minutami';
                }
                return result;
              case 'h':
                return withoutSuffix ? 'ena ura' : 'eno uro';
              case 'hh':
                if (number === 1) {
                  result += withoutSuffix ? 'ura' : 'uro';
                } else if (number === 2) {
                  result += withoutSuffix || isFuture ? 'uri' : 'urama';
                } else if (number < 5) {
                  result += withoutSuffix || isFuture ? 'ure' : 'urami';
                } else {
                  result += withoutSuffix || isFuture ? 'ur' : 'urami';
                }
                return result;
              case 'd':
                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
              case 'dd':
                if (number === 1) {
                  result += withoutSuffix || isFuture ? 'dan' : 'dnem';
                } else if (number === 2) {
                  result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
                } else {
                  result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
                }
                return result;
              case 'M':
                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
              case 'MM':
                if (number === 1) {
                  result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
                } else if (number === 2) {
                  result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
                } else if (number < 5) {
                  result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
                } else {
                  result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
                }
                return result;
              case 'y':
                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
              case 'yy':
                if (number === 1) {
                  result += withoutSuffix || isFuture ? 'leto' : 'letom';
                } else if (number === 2) {
                  result += withoutSuffix || isFuture ? 'leti' : 'letoma';
                } else if (number < 5) {
                  result += withoutSuffix || isFuture ? 'leta' : 'leti';
                } else {
                  result += withoutSuffix || isFuture ? 'let' : 'leti';
                }
                return result;
            }
          }

          var sl = moment.defineLocale('sl', {
            months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
            monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
            monthsParseExact: true,
            weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
            weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
            weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd, D. MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[danes ob] LT',
              nextDay: '[jutri ob] LT',

              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[v] [nedeljo] [ob] LT';
                  case 3:
                    return '[v] [sredo] [ob] LT';
                  case 6:
                    return '[v] [soboto] [ob] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[v] dddd [ob] LT';
                }
              },
              lastDay: '[včeraj ob] LT',
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                  case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                  case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[prejšnji] dddd [ob] LT';
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'čez %s',
              past: 'pred %s',
              s: processRelativeTime,
              ss: processRelativeTime,
              m: processRelativeTime,
              mm: processRelativeTime,
              h: processRelativeTime,
              hh: processRelativeTime,
              d: processRelativeTime,
              dd: processRelativeTime,
              M: processRelativeTime,
              MM: processRelativeTime,
              y: processRelativeTime,
              yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return sl;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/sq.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/sq.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var sq = moment.defineLocale('sq', {
            months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
            monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
            weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
            weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
            weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
            weekdaysParseExact: true,
            meridiemParse: /PD|MD/,
            isPM: function (input) {
              return input.charAt(0) === 'M';
            },
            meridiem: function (hours, minutes, isLower) {
              return hours < 12 ? 'PD' : 'MD';
            },
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Sot në] LT',
              nextDay: '[Nesër në] LT',
              nextWeek: 'dddd [në] LT',
              lastDay: '[Dje në] LT',
              lastWeek: 'dddd [e kaluar në] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'në %s',
              past: '%s më parë',
              s: 'disa sekonda',
              ss: '%d sekonda',
              m: 'një minutë',
              mm: '%d minuta',
              h: 'një orë',
              hh: '%d orë',
              d: 'një ditë',
              dd: '%d ditë',
              M: 'një muaj',
              MM: '%d muaj',
              y: 'një vit',
              yy: '%d vite'
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return sq;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/sr-cyrl.js":
      /*!***********************************************!*\
        !*** ./node_modules/moment/locale/sr-cyrl.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var translator = {
            words: { //Different grammatical cases
              ss: ['секунда', 'секунде', 'секунди'],
              m: ['један минут', 'једне минуте'],
              mm: ['минут', 'минуте', 'минута'],
              h: ['један сат', 'једног сата'],
              hh: ['сат', 'сата', 'сати'],
              dd: ['дан', 'дана', 'дана'],
              MM: ['месец', 'месеца', 'месеци'],
              yy: ['година', 'године', 'година']
            },
            correctGrammaticalCase: function (number, wordKey) {
              return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
            },
            translate: function (number, withoutSuffix, key) {
              var wordKey = translator.words[key];
              if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
              } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
              }
            }
          };

          var srCyrl = moment.defineLocale('sr-cyrl', {
            months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
            monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
            monthsParseExact: true,
            weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
            weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
            weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd, D. MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[данас у] LT',
              nextDay: '[сутра у] LT',
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[у] [недељу] [у] LT';
                  case 3:
                    return '[у] [среду] [у] LT';
                  case 6:
                    return '[у] [суботу] [у] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[у] dddd [у] LT';
                }
              },
              lastDay: '[јуче у] LT',
              lastWeek: function () {
                var lastWeekDays = [
                  '[прошле] [недеље] [у] LT',
                  '[прошлог] [понедељка] [у] LT',
                  '[прошлог] [уторка] [у] LT',
                  '[прошле] [среде] [у] LT',
                  '[прошлог] [четвртка] [у] LT',
                  '[прошлог] [петка] [у] LT',
                  '[прошле] [суботе] [у] LT'
                ];
                return lastWeekDays[this.day()];
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'за %s',
              past: 'пре %s',
              s: 'неколико секунди',
              ss: translator.translate,
              m: translator.translate,
              mm: translator.translate,
              h: translator.translate,
              hh: translator.translate,
              d: 'дан',
              dd: translator.translate,
              M: 'месец',
              MM: translator.translate,
              y: 'годину',
              yy: translator.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return srCyrl;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/sr.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/sr.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var translator = {
            words: { //Different grammatical cases
              ss: ['sekunda', 'sekunde', 'sekundi'],
              m: ['jedan minut', 'jedne minute'],
              mm: ['minut', 'minute', 'minuta'],
              h: ['jedan sat', 'jednog sata'],
              hh: ['sat', 'sata', 'sati'],
              dd: ['dan', 'dana', 'dana'],
              MM: ['mesec', 'meseca', 'meseci'],
              yy: ['godina', 'godine', 'godina']
            },
            correctGrammaticalCase: function (number, wordKey) {
              return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
            },
            translate: function (number, withoutSuffix, key) {
              var wordKey = translator.words[key];
              if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
              } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
              }
            }
          };

          var sr = moment.defineLocale('sr', {
            months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
            monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
            monthsParseExact: true,
            weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
            weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
            weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY H:mm',
              LLLL: 'dddd, D. MMMM YYYY H:mm'
            },
            calendar: {
              sameDay: '[danas u] LT',
              nextDay: '[sutra u] LT',
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return '[u] [nedelju] [u] LT';
                  case 3:
                    return '[u] [sredu] [u] LT';
                  case 6:
                    return '[u] [subotu] [u] LT';
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return '[u] dddd [u] LT';
                }
              },
              lastDay: '[juče u] LT',
              lastWeek: function () {
                var lastWeekDays = [
                  '[prošle] [nedelje] [u] LT',
                  '[prošlog] [ponedeljka] [u] LT',
                  '[prošlog] [utorka] [u] LT',
                  '[prošle] [srede] [u] LT',
                  '[prošlog] [četvrtka] [u] LT',
                  '[prošlog] [petka] [u] LT',
                  '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'za %s',
              past: 'pre %s',
              s: 'nekoliko sekundi',
              ss: translator.translate,
              m: translator.translate,
              mm: translator.translate,
              h: translator.translate,
              hh: translator.translate,
              d: 'dan',
              dd: translator.translate,
              M: 'mesec',
              MM: translator.translate,
              y: 'godinu',
              yy: translator.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return sr;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ss.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ss.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ss = moment.defineLocale('ss', {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
            monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
            weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
            weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
            weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY h:mm A',
              LLLL: 'dddd, D MMMM YYYY h:mm A'
            },
            calendar: {
              sameDay: '[Namuhla nga] LT',
              nextDay: '[Kusasa nga] LT',
              nextWeek: 'dddd [nga] LT',
              lastDay: '[Itolo nga] LT',
              lastWeek: 'dddd [leliphelile] [nga] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'nga %s',
              past: 'wenteka nga %s',
              s: 'emizuzwana lomcane',
              ss: '%d mzuzwana',
              m: 'umzuzu',
              mm: '%d emizuzu',
              h: 'lihora',
              hh: '%d emahora',
              d: 'lilanga',
              dd: '%d emalanga',
              M: 'inyanga',
              MM: '%d tinyanga',
              y: 'umnyaka',
              yy: '%d iminyaka'
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (hours, minutes, isLower) {
              if (hours < 11) {
                return 'ekuseni';
              } else if (hours < 15) {
                return 'emini';
              } else if (hours < 19) {
                return 'entsambama';
              } else {
                return 'ebusuku';
              }
            },
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'ekuseni') {
                return hour;
              } else if (meridiem === 'emini') {
                return hour >= 11 ? hour : hour + 12;
              } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
                if (hour === 0) {
                  return 0;
                }
                return hour + 12;
              }
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: '%d',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return ss;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/sv.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/sv.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var sv = moment.defineLocale('sv', {
            months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
            monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
            weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
            weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
            weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY-MM-DD',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY [kl.] HH:mm',
              LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
              lll: 'D MMM YYYY HH:mm',
              llll: 'ddd D MMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Idag] LT',
              nextDay: '[Imorgon] LT',
              lastDay: '[Igår] LT',
              nextWeek: '[På] dddd LT',
              lastWeek: '[I] dddd[s] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'om %s',
              past: 'för %s sedan',
              s: 'några sekunder',
              ss: '%d sekunder',
              m: 'en minut',
              mm: '%d minuter',
              h: 'en timme',
              hh: '%d timmar',
              d: 'en dag',
              dd: '%d dagar',
              M: 'en månad',
              MM: '%d månader',
              y: 'ett år',
              yy: '%d år'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                (b === 3) ? 'e' : 'e';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return sv;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/sw.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/sw.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var sw = moment.defineLocale('sw', {
            months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
            monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
            weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
            weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
            weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[leo saa] LT',
              nextDay: '[kesho saa] LT',
              nextWeek: '[wiki ijayo] dddd [saat] LT',
              lastDay: '[jana] LT',
              lastWeek: '[wiki iliyopita] dddd [saat] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s baadaye',
              past: 'tokea %s',
              s: 'hivi punde',
              ss: 'sekunde %d',
              m: 'dakika moja',
              mm: 'dakika %d',
              h: 'saa limoja',
              hh: 'masaa %d',
              d: 'siku moja',
              dd: 'masiku %d',
              M: 'mwezi mmoja',
              MM: 'miezi %d',
              y: 'mwaka mmoja',
              yy: 'miaka %d'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return sw;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ta.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ta.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var symbolMap = {
              '1': '௧',
              '2': '௨',
              '3': '௩',
              '4': '௪',
              '5': '௫',
              '6': '௬',
              '7': '௭',
              '8': '௮',
              '9': '௯',
              '0': '௦'
            },
            numberMap = {
              '௧': '1',
              '௨': '2',
              '௩': '3',
              '௪': '4',
              '௫': '5',
              '௬': '6',
              '௭': '7',
              '௮': '8',
              '௯': '9',
              '௦': '0'
            };

          var ta = moment.defineLocale('ta', {
            months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
            monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
            weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
            weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
            weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, HH:mm',
              LLLL: 'dddd, D MMMM YYYY, HH:mm'
            },
            calendar: {
              sameDay: '[இன்று] LT',
              nextDay: '[நாளை] LT',
              nextWeek: 'dddd, LT',
              lastDay: '[நேற்று] LT',
              lastWeek: '[கடந்த வாரம்] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s இல்',
              past: '%s முன்',
              s: 'ஒரு சில விநாடிகள்',
              ss: '%d விநாடிகள்',
              m: 'ஒரு நிமிடம்',
              mm: '%d நிமிடங்கள்',
              h: 'ஒரு மணி நேரம்',
              hh: '%d மணி நேரம்',
              d: 'ஒரு நாள்',
              dd: '%d நாட்கள்',
              M: 'ஒரு மாதம்',
              MM: '%d மாதங்கள்',
              y: 'ஒரு வருடம்',
              yy: '%d ஆண்டுகள்'
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (number) {
              return number + 'வது';
            },
            preparse: function (string) {
              return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
                return numberMap[match];
              });
            },
            postformat: function (string) {
              return string.replace(/\d/g, function (match) {
                return symbolMap[match];
              });
            },
            // refer http://ta.wikipedia.org/s/1er1
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (hour, minute, isLower) {
              if (hour < 2) {
                return ' யாமம்';
              } else if (hour < 6) {
                return ' வைகறை'; // வைகறை
              } else if (hour < 10) {
                return ' காலை'; // காலை
              } else if (hour < 14) {
                return ' நண்பகல்'; // நண்பகல்
              } else if (hour < 18) {
                return ' எற்பாடு'; // எற்பாடு
              } else if (hour < 22) {
                return ' மாலை'; // மாலை
              } else {
                return ' யாமம்';
              }
            },
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'யாமம்') {
                return hour < 2 ? hour : hour + 12;
              } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
                return hour;
              } else if (meridiem === 'நண்பகல்') {
                return hour >= 10 ? hour : hour + 12;
              } else {
                return hour + 12;
              }
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return ta;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/te.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/te.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var te = moment.defineLocale('te', {
            months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
            monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
            monthsParseExact: true,
            weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
            weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
            weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
            longDateFormat: {
              LT: 'A h:mm',
              LTS: 'A h:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY, A h:mm',
              LLLL: 'dddd, D MMMM YYYY, A h:mm'
            },
            calendar: {
              sameDay: '[నేడు] LT',
              nextDay: '[రేపు] LT',
              nextWeek: 'dddd, LT',
              lastDay: '[నిన్న] LT',
              lastWeek: '[గత] dddd, LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s లో',
              past: '%s క్రితం',
              s: 'కొన్ని క్షణాలు',
              ss: '%d సెకన్లు',
              m: 'ఒక నిమిషం',
              mm: '%d నిమిషాలు',
              h: 'ఒక గంట',
              hh: '%d గంటలు',
              d: 'ఒక రోజు',
              dd: '%d రోజులు',
              M: 'ఒక నెల',
              MM: '%d నెలలు',
              y: 'ఒక సంవత్సరం',
              yy: '%d సంవత్సరాలు'
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: '%dవ',
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'రాత్రి') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'ఉదయం') {
                return hour;
              } else if (meridiem === 'మధ్యాహ్నం') {
                return hour >= 10 ? hour : hour + 12;
              } else if (meridiem === 'సాయంత్రం') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'రాత్రి';
              } else if (hour < 10) {
                return 'ఉదయం';
              } else if (hour < 17) {
                return 'మధ్యాహ్నం';
              } else if (hour < 20) {
                return 'సాయంత్రం';
              } else {
                return 'రాత్రి';
              }
            },
            week: {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            }
          });

          return te;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/tet.js":
      /*!*******************************************!*\
        !*** ./node_modules/moment/locale/tet.js ***!
        \*******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var tet = moment.defineLocale('tet', {
            months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
            monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
            weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
            weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
            weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Ohin iha] LT',
              nextDay: '[Aban iha] LT',
              nextWeek: 'dddd [iha] LT',
              lastDay: '[Horiseik iha] LT',
              lastWeek: 'dddd [semana kotuk] [iha] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'iha %s',
              past: '%s liuba',
              s: 'minutu balun',
              ss: 'minutu %d',
              m: 'minutu ida',
              mm: 'minutu %d',
              h: 'oras ida',
              hh: 'oras %d',
              d: 'loron ida',
              dd: 'loron %d',
              M: 'fulan ida',
              MM: 'fulan %d',
              y: 'tinan ida',
              yy: 'tinan %d'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return tet;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/tg.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/tg.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var suffixes = {
            0: '-ум',
            1: '-ум',
            2: '-юм',
            3: '-юм',
            4: '-ум',
            5: '-ум',
            6: '-ум',
            7: '-ум',
            8: '-ум',
            9: '-ум',
            10: '-ум',
            12: '-ум',
            13: '-ум',
            20: '-ум',
            30: '-юм',
            40: '-ум',
            50: '-ум',
            60: '-ум',
            70: '-ум',
            80: '-ум',
            90: '-ум',
            100: '-ум'
          };

          var tg = moment.defineLocale('tg', {
            months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
            monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
            weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
            weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
            weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Имрӯз соати] LT',
              nextDay: '[Пагоҳ соати] LT',
              lastDay: '[Дирӯз соати] LT',
              nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
              lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'баъди %s',
              past: '%s пеш',
              s: 'якчанд сония',
              m: 'як дақиқа',
              mm: '%d дақиқа',
              h: 'як соат',
              hh: '%d соат',
              d: 'як рӯз',
              dd: '%d рӯз',
              M: 'як моҳ',
              MM: '%d моҳ',
              y: 'як сол',
              yy: '%d сол'
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === 'шаб') {
                return hour < 4 ? hour : hour + 12;
              } else if (meridiem === 'субҳ') {
                return hour;
              } else if (meridiem === 'рӯз') {
                return hour >= 11 ? hour : hour + 12;
              } else if (meridiem === 'бегоҳ') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'шаб';
              } else if (hour < 11) {
                return 'субҳ';
              } else if (hour < 16) {
                return 'рӯз';
              } else if (hour < 19) {
                return 'бегоҳ';
              } else {
                return 'шаб';
              }
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function (number) {
              var a = number % 10,
                b = number >= 100 ? 100 : null;
              return number + (suffixes[number] || suffixes[a] || suffixes[b]);
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 1th is the first week of the year.
            }
          });

          return tg;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/th.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/th.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var th = moment.defineLocale('th', {
            months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
            monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
            monthsParseExact: true,
            weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
            weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
            weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY เวลา H:mm',
              LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (input) {
              return input === 'หลังเที่ยง';
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'ก่อนเที่ยง';
              } else {
                return 'หลังเที่ยง';
              }
            },
            calendar: {
              sameDay: '[วันนี้ เวลา] LT',
              nextDay: '[พรุ่งนี้ เวลา] LT',
              nextWeek: 'dddd[หน้า เวลา] LT',
              lastDay: '[เมื่อวานนี้ เวลา] LT',
              lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'อีก %s',
              past: '%sที่แล้ว',
              s: 'ไม่กี่วินาที',
              ss: '%d วินาที',
              m: '1 นาที',
              mm: '%d นาที',
              h: '1 ชั่วโมง',
              hh: '%d ชั่วโมง',
              d: '1 วัน',
              dd: '%d วัน',
              M: '1 เดือน',
              MM: '%d เดือน',
              y: '1 ปี',
              yy: '%d ปี'
            }
          });

          return th;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/tl-ph.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/tl-ph.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var tlPh = moment.defineLocale('tl-ph', {
            months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
            monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
            weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
            weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
            weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'MM/D/YYYY',
              LL: 'MMMM D, YYYY',
              LLL: 'MMMM D, YYYY HH:mm',
              LLLL: 'dddd, MMMM DD, YYYY HH:mm'
            },
            calendar: {
              sameDay: 'LT [ngayong araw]',
              nextDay: '[Bukas ng] LT',
              nextWeek: 'LT [sa susunod na] dddd',
              lastDay: 'LT [kahapon]',
              lastWeek: 'LT [noong nakaraang] dddd',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'sa loob ng %s',
              past: '%s ang nakalipas',
              s: 'ilang segundo',
              ss: '%d segundo',
              m: 'isang minuto',
              mm: '%d minuto',
              h: 'isang oras',
              hh: '%d oras',
              d: 'isang araw',
              dd: '%d araw',
              M: 'isang buwan',
              MM: '%d buwan',
              y: 'isang taon',
              yy: '%d taon'
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (number) {
              return number;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return tlPh;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/tlh.js":
      /*!*******************************************!*\
        !*** ./node_modules/moment/locale/tlh.js ***!
        \*******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

          function translateFuture(output) {
            var time = output;
            time = (output.indexOf('jaj') !== -1) ?
              time.slice(0, -3) + 'leS' :
              (output.indexOf('jar') !== -1) ?
              time.slice(0, -3) + 'waQ' :
              (output.indexOf('DIS') !== -1) ?
              time.slice(0, -3) + 'nem' :
              time + ' pIq';
            return time;
          }

          function translatePast(output) {
            var time = output;
            time = (output.indexOf('jaj') !== -1) ?
              time.slice(0, -3) + 'Hu’' :
              (output.indexOf('jar') !== -1) ?
              time.slice(0, -3) + 'wen' :
              (output.indexOf('DIS') !== -1) ?
              time.slice(0, -3) + 'ben' :
              time + ' ret';
            return time;
          }

          function translate(number, withoutSuffix, string, isFuture) {
            var numberNoun = numberAsNoun(number);
            switch (string) {
              case 'ss':
                return numberNoun + ' lup';
              case 'mm':
                return numberNoun + ' tup';
              case 'hh':
                return numberNoun + ' rep';
              case 'dd':
                return numberNoun + ' jaj';
              case 'MM':
                return numberNoun + ' jar';
              case 'yy':
                return numberNoun + ' DIS';
            }
          }

          function numberAsNoun(number) {
            var hundred = Math.floor((number % 1000) / 100),
              ten = Math.floor((number % 100) / 10),
              one = number % 10,
              word = '';
            if (hundred > 0) {
              word += numbersNouns[hundred] + 'vatlh';
            }
            if (ten > 0) {
              word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
            }
            if (one > 0) {
              word += ((word !== '') ? ' ' : '') + numbersNouns[one];
            }
            return (word === '') ? 'pagh' : word;
          }

          var tlh = moment.defineLocale('tlh', {
            months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
            monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
            monthsParseExact: true,
            weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
            weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
            weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[DaHjaj] LT',
              nextDay: '[wa’leS] LT',
              nextWeek: 'LLL',
              lastDay: '[wa’Hu’] LT',
              lastWeek: 'LLL',
              sameElse: 'L'
            },
            relativeTime: {
              future: translateFuture,
              past: translatePast,
              s: 'puS lup',
              ss: translate,
              m: 'wa’ tup',
              mm: translate,
              h: 'wa’ rep',
              hh: translate,
              d: 'wa’ jaj',
              dd: translate,
              M: 'wa’ jar',
              MM: translate,
              y: 'wa’ DIS',
              yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return tlh;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/tr.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/tr.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {


        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';

          var suffixes = {
            1: '\'inci',
            5: '\'inci',
            8: '\'inci',
            70: '\'inci',
            80: '\'inci',
            2: '\'nci',
            7: '\'nci',
            20: '\'nci',
            50: '\'nci',
            3: '\'üncü',
            4: '\'üncü',
            100: '\'üncü',
            6: '\'ncı',
            9: '\'uncu',
            10: '\'uncu',
            30: '\'uncu',
            60: '\'ıncı',
            90: '\'ıncı'
          };

          var tr = moment.defineLocale('tr', {
            months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
            monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
            weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
            weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
            weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[bugün saat] LT',
              nextDay: '[yarın saat] LT',
              nextWeek: '[gelecek] dddd [saat] LT',
              lastDay: '[dün] LT',
              lastWeek: '[geçen] dddd [saat] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s sonra',
              past: '%s önce',
              s: 'birkaç saniye',
              ss: '%d saniye',
              m: 'bir dakika',
              mm: '%d dakika',
              h: 'bir saat',
              hh: '%d saat',
              d: 'bir gün',
              dd: '%d gün',
              M: 'bir ay',
              MM: '%d ay',
              y: 'bir yıl',
              yy: '%d yıl'
            },
            ordinal: function (number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'Do':
                case 'DD':
                  return number;
                default:
                  if (number === 0) { // special case for zero
                    return number + '\'ıncı';
                  }
                  var a = number % 10,
                    b = number % 100 - a,
                    c = number >= 100 ? 100 : null;
                  return number + (suffixes[a] || suffixes[b] || suffixes[c]);
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return tr;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/tzl.js":
      /*!*******************************************!*\
        !*** ./node_modules/moment/locale/tzl.js ***!
        \*******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
          // This is currently too difficult (maybe even impossible) to add.
          var tzl = moment.defineLocale('tzl', {
            months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
            monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
            weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
            weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
            weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
            longDateFormat: {
              LT: 'HH.mm',
              LTS: 'HH.mm.ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM [dallas] YYYY',
              LLL: 'D. MMMM [dallas] YYYY HH.mm',
              LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (input) {
              return 'd\'o' === input.toLowerCase();
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours > 11) {
                return isLower ? 'd\'o' : 'D\'O';
              } else {
                return isLower ? 'd\'a' : 'D\'A';
              }
            },
            calendar: {
              sameDay: '[oxhi à] LT',
              nextDay: '[demà à] LT',
              nextWeek: 'dddd [à] LT',
              lastDay: '[ieiri à] LT',
              lastWeek: '[sür el] dddd [lasteu à] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'osprei %s',
              past: 'ja%s',
              s: processRelativeTime,
              ss: processRelativeTime,
              m: processRelativeTime,
              mm: processRelativeTime,
              h: processRelativeTime,
              hh: processRelativeTime,
              d: processRelativeTime,
              dd: processRelativeTime,
              M: processRelativeTime,
              MM: processRelativeTime,
              y: processRelativeTime,
              yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          function processRelativeTime(number, withoutSuffix, key, isFuture) {
            var format = {
              's': ['viensas secunds', '\'iensas secunds'],
              'ss': [number + ' secunds', '' + number + ' secunds'],
              'm': ['\'n míut', '\'iens míut'],
              'mm': [number + ' míuts', '' + number + ' míuts'],
              'h': ['\'n þora', '\'iensa þora'],
              'hh': [number + ' þoras', '' + number + ' þoras'],
              'd': ['\'n ziua', '\'iensa ziua'],
              'dd': [number + ' ziuas', '' + number + ' ziuas'],
              'M': ['\'n mes', '\'iens mes'],
              'MM': [number + ' mesen', '' + number + ' mesen'],
              'y': ['\'n ar', '\'iens ar'],
              'yy': [number + ' ars', '' + number + ' ars']
            };
            return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
          }

          return tzl;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/tzm-latn.js":
      /*!************************************************!*\
        !*** ./node_modules/moment/locale/tzm-latn.js ***!
        \************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var tzmLatn = moment.defineLocale('tzm-latn', {
            months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
            monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
            weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
            weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
            weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[asdkh g] LT',
              nextDay: '[aska g] LT',
              nextWeek: 'dddd [g] LT',
              lastDay: '[assant g] LT',
              lastWeek: 'dddd [g] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'dadkh s yan %s',
              past: 'yan %s',
              s: 'imik',
              ss: '%d imik',
              m: 'minuḍ',
              mm: '%d minuḍ',
              h: 'saɛa',
              hh: '%d tassaɛin',
              d: 'ass',
              dd: '%d ossan',
              M: 'ayowr',
              MM: '%d iyyirn',
              y: 'asgas',
              yy: '%d isgasn'
            },
            week: {
              dow: 6, // Saturday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return tzmLatn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/tzm.js":
      /*!*******************************************!*\
        !*** ./node_modules/moment/locale/tzm.js ***!
        \*******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var tzm = moment.defineLocale('tzm', {
            months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
            monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
            weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
            weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
            weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
              nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
              nextWeek: 'dddd [ⴴ] LT',
              lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
              lastWeek: 'dddd [ⴴ] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
              past: 'ⵢⴰⵏ %s',
              s: 'ⵉⵎⵉⴽ',
              ss: '%d ⵉⵎⵉⴽ',
              m: 'ⵎⵉⵏⵓⴺ',
              mm: '%d ⵎⵉⵏⵓⴺ',
              h: 'ⵙⴰⵄⴰ',
              hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
              d: 'ⴰⵙⵙ',
              dd: '%d oⵙⵙⴰⵏ',
              M: 'ⴰⵢoⵓⵔ',
              MM: '%d ⵉⵢⵢⵉⵔⵏ',
              y: 'ⴰⵙⴳⴰⵙ',
              yy: '%d ⵉⵙⴳⴰⵙⵏ'
            },
            week: {
              dow: 6, // Saturday is the first day of the week.
              doy: 12 // The week that contains Jan 12th is the first week of the year.
            }
          });

          return tzm;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ug-cn.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/ug-cn.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js language configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var ugCn = moment.defineLocale('ug-cn', {
            months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
              '_'
            ),
            monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
              '_'
            ),
            weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split(
              '_'
            ),
            weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
            weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY-MM-DD',
              LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
              LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
              LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (
                meridiem === 'يېرىم كېچە' ||
                meridiem === 'سەھەر' ||
                meridiem === 'چۈشتىن بۇرۇن'
              ) {
                return hour;
              } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
                return hour + 12;
              } else {
                return hour >= 11 ? hour : hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              var hm = hour * 100 + minute;
              if (hm < 600) {
                return 'يېرىم كېچە';
              } else if (hm < 900) {
                return 'سەھەر';
              } else if (hm < 1130) {
                return 'چۈشتىن بۇرۇن';
              } else if (hm < 1230) {
                return 'چۈش';
              } else if (hm < 1800) {
                return 'چۈشتىن كېيىن';
              } else {
                return 'كەچ';
              }
            },
            calendar: {
              sameDay: '[بۈگۈن سائەت] LT',
              nextDay: '[ئەتە سائەت] LT',
              nextWeek: '[كېلەركى] dddd [سائەت] LT',
              lastDay: '[تۆنۈگۈن] LT',
              lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s كېيىن',
              past: '%s بۇرۇن',
              s: 'نەچچە سېكونت',
              ss: '%d سېكونت',
              m: 'بىر مىنۇت',
              mm: '%d مىنۇت',
              h: 'بىر سائەت',
              hh: '%d سائەت',
              d: 'بىر كۈن',
              dd: '%d كۈن',
              M: 'بىر ئاي',
              MM: '%d ئاي',
              y: 'بىر يىل',
              yy: '%d يىل'
            },

            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                  return number + '-كۈنى';
                case 'w':
                case 'W':
                  return number + '-ھەپتە';
                default:
                  return number;
              }
            },
            preparse: function (string) {
              return string.replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/,/g, '،');
            },
            week: {
              // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 1st is the first week of the year.
            }
          });

          return ugCn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/uk.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/uk.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          function plural(word, num) {
            var forms = word.split('_');
            return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
          }

          function relativeTimeWithPlural(number, withoutSuffix, key) {
            var format = {
              'ss': withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
              'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
              'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
              'dd': 'день_дні_днів',
              'MM': 'місяць_місяці_місяців',
              'yy': 'рік_роки_років'
            };
            if (key === 'm') {
              return withoutSuffix ? 'хвилина' : 'хвилину';
            } else if (key === 'h') {
              return withoutSuffix ? 'година' : 'годину';
            } else {
              return number + ' ' + plural(format[key], +number);
            }
          }

          function weekdaysCaseReplace(m, format) {
            var weekdays = {
              'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
              'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
              'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
            };

            if (m === true) {
              return weekdays['nominative'].slice(1, 7).concat(weekdays['nominative'].slice(0, 1));
            }
            if (!m) {
              return weekdays['nominative'];
            }

            var nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
              'accusative' :
              ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
                'genitive' :
                'nominative');
            return weekdays[nounCase][m.day()];
          }

          function processHoursFunction(str) {
            return function () {
              return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
            };
          }

          var uk = moment.defineLocale('uk', {
            months: {
              'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
              'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
            },
            monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
            weekdays: weekdaysCaseReplace,
            weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
            weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY р.',
              LLL: 'D MMMM YYYY р., HH:mm',
              LLLL: 'dddd, D MMMM YYYY р., HH:mm'
            },
            calendar: {
              sameDay: processHoursFunction('[Сьогодні '),
              nextDay: processHoursFunction('[Завтра '),
              lastDay: processHoursFunction('[Вчора '),
              nextWeek: processHoursFunction('[У] dddd ['),
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return processHoursFunction('[Минулої] dddd [').call(this);
                  case 1:
                  case 2:
                  case 4:
                    return processHoursFunction('[Минулого] dddd [').call(this);
                }
              },
              sameElse: 'L'
            },
            relativeTime: {
              future: 'за %s',
              past: '%s тому',
              s: 'декілька секунд',
              ss: relativeTimeWithPlural,
              m: relativeTimeWithPlural,
              mm: relativeTimeWithPlural,
              h: 'годину',
              hh: relativeTimeWithPlural,
              d: 'день',
              dd: relativeTimeWithPlural,
              M: 'місяць',
              MM: relativeTimeWithPlural,
              y: 'рік',
              yy: relativeTimeWithPlural
            },
            // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (input) {
              return /^(дня|вечора)$/.test(input);
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 4) {
                return 'ночі';
              } else if (hour < 12) {
                return 'ранку';
              } else if (hour < 17) {
                return 'дня';
              } else {
                return 'вечора';
              }
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                  return number + '-й';
                case 'D':
                  return number + '-го';
                default:
                  return number;
              }
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return uk;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/ur.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/ur.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var months = [
            'جنوری',
            'فروری',
            'مارچ',
            'اپریل',
            'مئی',
            'جون',
            'جولائی',
            'اگست',
            'ستمبر',
            'اکتوبر',
            'نومبر',
            'دسمبر'
          ];
          var days = [
            'اتوار',
            'پیر',
            'منگل',
            'بدھ',
            'جمعرات',
            'جمعہ',
            'ہفتہ'
          ];

          var ur = moment.defineLocale('ur', {
            months: months,
            monthsShort: months,
            weekdays: days,
            weekdaysShort: days,
            weekdaysMin: days,
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd، D MMMM YYYY HH:mm'
            },
            meridiemParse: /صبح|شام/,
            isPM: function (input) {
              return 'شام' === input;
            },
            meridiem: function (hour, minute, isLower) {
              if (hour < 12) {
                return 'صبح';
              }
              return 'شام';
            },
            calendar: {
              sameDay: '[آج بوقت] LT',
              nextDay: '[کل بوقت] LT',
              nextWeek: 'dddd [بوقت] LT',
              lastDay: '[گذشتہ روز بوقت] LT',
              lastWeek: '[گذشتہ] dddd [بوقت] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s بعد',
              past: '%s قبل',
              s: 'چند سیکنڈ',
              ss: '%d سیکنڈ',
              m: 'ایک منٹ',
              mm: '%d منٹ',
              h: 'ایک گھنٹہ',
              hh: '%d گھنٹے',
              d: 'ایک دن',
              dd: '%d دن',
              M: 'ایک ماہ',
              MM: '%d ماہ',
              y: 'ایک سال',
              yy: '%d سال'
            },
            preparse: function (string) {
              return string.replace(/،/g, ',');
            },
            postformat: function (string) {
              return string.replace(/,/g, '،');
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return ur;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/uz-latn.js":
      /*!***********************************************!*\
        !*** ./node_modules/moment/locale/uz-latn.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var uzLatn = moment.defineLocale('uz-latn', {
            months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
            monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
            weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
            weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
            weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'D MMMM YYYY, dddd HH:mm'
            },
            calendar: {
              sameDay: '[Bugun soat] LT [da]',
              nextDay: '[Ertaga] LT [da]',
              nextWeek: 'dddd [kuni soat] LT [da]',
              lastDay: '[Kecha soat] LT [da]',
              lastWeek: '[O\'tgan] dddd [kuni soat] LT [da]',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'Yaqin %s ichida',
              past: 'Bir necha %s oldin',
              s: 'soniya',
              ss: '%d soniya',
              m: 'bir daqiqa',
              mm: '%d daqiqa',
              h: 'bir soat',
              hh: '%d soat',
              d: 'bir kun',
              dd: '%d kun',
              M: 'bir oy',
              MM: '%d oy',
              y: 'bir yil',
              yy: '%d yil'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 7th is the first week of the year.
            }
          });

          return uzLatn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/uz.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/uz.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var uz = moment.defineLocale('uz', {
            months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
            monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
            weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
            weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
            weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'D MMMM YYYY, dddd HH:mm'
            },
            calendar: {
              sameDay: '[Бугун соат] LT [да]',
              nextDay: '[Эртага] LT [да]',
              nextWeek: 'dddd [куни соат] LT [да]',
              lastDay: '[Кеча соат] LT [да]',
              lastWeek: '[Утган] dddd [куни соат] LT [да]',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'Якин %s ичида',
              past: 'Бир неча %s олдин',
              s: 'фурсат',
              ss: '%d фурсат',
              m: 'бир дакика',
              mm: '%d дакика',
              h: 'бир соат',
              hh: '%d соат',
              d: 'бир кун',
              dd: '%d кун',
              M: 'бир ой',
              MM: '%d ой',
              y: 'бир йил',
              yy: '%d йил'
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 7 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return uz;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/vi.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/vi.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var vi = moment.defineLocale('vi', {
            months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
            monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
            monthsParseExact: true,
            weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
            weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
            weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
            weekdaysParseExact: true,
            meridiemParse: /sa|ch/i,
            isPM: function (input) {
              return /^ch$/i.test(input);
            },
            meridiem: function (hours, minutes, isLower) {
              if (hours < 12) {
                return isLower ? 'sa' : 'SA';
              } else {
                return isLower ? 'ch' : 'CH';
              }
            },
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM [năm] YYYY',
              LLL: 'D MMMM [năm] YYYY HH:mm',
              LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
              l: 'DD/M/YYYY',
              ll: 'D MMM YYYY',
              lll: 'D MMM YYYY HH:mm',
              llll: 'ddd, D MMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[Hôm nay lúc] LT',
              nextDay: '[Ngày mai lúc] LT',
              nextWeek: 'dddd [tuần tới lúc] LT',
              lastDay: '[Hôm qua lúc] LT',
              lastWeek: 'dddd [tuần rồi lúc] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: '%s tới',
              past: '%s trước',
              s: 'vài giây',
              ss: '%d giây',
              m: 'một phút',
              mm: '%d phút',
              h: 'một giờ',
              hh: '%d giờ',
              d: 'một ngày',
              dd: '%d ngày',
              M: 'một tháng',
              MM: '%d tháng',
              y: 'một năm',
              yy: '%d năm'
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (number) {
              return number;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return vi;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/x-pseudo.js":
      /*!************************************************!*\
        !*** ./node_modules/moment/locale/x-pseudo.js ***!
        \************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var xPseudo = moment.defineLocale('x-pseudo', {
            months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
            monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
            monthsParseExact: true,
            weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
            weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
            weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
            weekdaysParseExact: true,
            longDateFormat: {
              LT: 'HH:mm',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd, D MMMM YYYY HH:mm'
            },
            calendar: {
              sameDay: '[T~ódá~ý át] LT',
              nextDay: '[T~ómó~rró~w át] LT',
              nextWeek: 'dddd [át] LT',
              lastDay: '[Ý~ést~érdá~ý át] LT',
              lastWeek: '[L~ást] dddd [át] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'í~ñ %s',
              past: '%s á~gó',
              s: 'á ~féw ~sécó~ñds',
              ss: '%d s~écóñ~ds',
              m: 'á ~míñ~úté',
              mm: '%d m~íñú~tés',
              h: 'á~ñ hó~úr',
              hh: '%d h~óúrs',
              d: 'á ~dáý',
              dd: '%d d~áýs',
              M: 'á ~móñ~th',
              MM: '%d m~óñt~hs',
              y: 'á ~ýéár',
              yy: '%d ý~éárs'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (number) {
              var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
              return number + output;
            },
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return xPseudo;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/yo.js":
      /*!******************************************!*\
        !*** ./node_modules/moment/locale/yo.js ***!
        \******************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var yo = moment.defineLocale('yo', {
            months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
            monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
            weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
            weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
            weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
            longDateFormat: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY h:mm A',
              LLLL: 'dddd, D MMMM YYYY h:mm A'
            },
            calendar: {
              sameDay: '[Ònì ni] LT',
              nextDay: '[Ọ̀la ni] LT',
              nextWeek: 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
              lastDay: '[Àna ni] LT',
              lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
              sameElse: 'L'
            },
            relativeTime: {
              future: 'ní %s',
              past: '%s kọjá',
              s: 'ìsẹjú aayá die',
              ss: 'aayá %d',
              m: 'ìsẹjú kan',
              mm: 'ìsẹjú %d',
              h: 'wákati kan',
              hh: 'wákati %d',
              d: 'ọjọ́ kan',
              dd: 'ọjọ́ %d',
              M: 'osù kan',
              MM: 'osù %d',
              y: 'ọdún kan',
              yy: 'ọdún %d'
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: 'ọjọ́ %d',
            week: {
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return yo;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/zh-cn.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/zh-cn.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var zhCn = moment.defineLocale('zh-cn', {
            months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
            monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
            weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
            weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY/MM/DD',
              LL: 'YYYY年M月D日',
              LLL: 'YYYY年M月D日Ah点mm分',
              LLLL: 'YYYY年M月D日ddddAh点mm分',
              l: 'YYYY/M/D',
              ll: 'YYYY年M月D日',
              lll: 'YYYY年M月D日 HH:mm',
              llll: 'YYYY年M月D日dddd HH:mm'
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === '凌晨' || meridiem === '早上' ||
                meridiem === '上午') {
                return hour;
              } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
              } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              var hm = hour * 100 + minute;
              if (hm < 600) {
                return '凌晨';
              } else if (hm < 900) {
                return '早上';
              } else if (hm < 1130) {
                return '上午';
              } else if (hm < 1230) {
                return '中午';
              } else if (hm < 1800) {
                return '下午';
              } else {
                return '晚上';
              }
            },
            calendar: {
              sameDay: '[今天]LT',
              nextDay: '[明天]LT',
              nextWeek: '[下]ddddLT',
              lastDay: '[昨天]LT',
              lastWeek: '[上]ddddLT',
              sameElse: 'L'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                  return number + '日';
                case 'M':
                  return number + '月';
                case 'w':
                case 'W':
                  return number + '周';
                default:
                  return number;
              }
            },
            relativeTime: {
              future: '%s内',
              past: '%s前',
              s: '几秒',
              ss: '%d 秒',
              m: '1 分钟',
              mm: '%d 分钟',
              h: '1 小时',
              hh: '%d 小时',
              d: '1 天',
              dd: '%d 天',
              M: '1 个月',
              MM: '%d 个月',
              y: '1 年',
              yy: '%d 年'
            },
            week: {
              // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
              dow: 1, // Monday is the first day of the week.
              doy: 4 // The week that contains Jan 4th is the first week of the year.
            }
          });

          return zhCn;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/zh-hk.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/zh-hk.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var zhHk = moment.defineLocale('zh-hk', {
            months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
            monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
            weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
            weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY/MM/DD',
              LL: 'YYYY年M月D日',
              LLL: 'YYYY年M月D日 HH:mm',
              LLLL: 'YYYY年M月D日dddd HH:mm',
              l: 'YYYY/M/D',
              ll: 'YYYY年M月D日',
              lll: 'YYYY年M月D日 HH:mm',
              llll: 'YYYY年M月D日dddd HH:mm'
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
              } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
              } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              var hm = hour * 100 + minute;
              if (hm < 600) {
                return '凌晨';
              } else if (hm < 900) {
                return '早上';
              } else if (hm < 1130) {
                return '上午';
              } else if (hm < 1230) {
                return '中午';
              } else if (hm < 1800) {
                return '下午';
              } else {
                return '晚上';
              }
            },
            calendar: {
              sameDay: '[今天]LT',
              nextDay: '[明天]LT',
              nextWeek: '[下]ddddLT',
              lastDay: '[昨天]LT',
              lastWeek: '[上]ddddLT',
              sameElse: 'L'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                  return number + '日';
                case 'M':
                  return number + '月';
                case 'w':
                case 'W':
                  return number + '週';
                default:
                  return number;
              }
            },
            relativeTime: {
              future: '%s內',
              past: '%s前',
              s: '幾秒',
              ss: '%d 秒',
              m: '1 分鐘',
              mm: '%d 分鐘',
              h: '1 小時',
              hh: '%d 小時',
              d: '1 天',
              dd: '%d 天',
              M: '1 個月',
              MM: '%d 個月',
              y: '1 年',
              yy: '%d 年'
            }
          });

          return zhHk;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/locale/zh-tw.js":
      /*!*********************************************!*\
        !*** ./node_modules/moment/locale/zh-tw.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        //! moment.js locale configuration

        ;
        (function (global, factory) {
          true ? factory(__webpack_require__( /*! ../moment */ "./node_modules/moment/moment.js")) :
            undefined
        }(this, (function (moment) {
          'use strict';


          var zhTw = moment.defineLocale('zh-tw', {
            months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
            monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
            weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
            weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
            longDateFormat: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'YYYY/MM/DD',
              LL: 'YYYY年M月D日',
              LLL: 'YYYY年M月D日 HH:mm',
              LLLL: 'YYYY年M月D日dddd HH:mm',
              l: 'YYYY/M/D',
              ll: 'YYYY年M月D日',
              lll: 'YYYY年M月D日 HH:mm',
              llll: 'YYYY年M月D日dddd HH:mm'
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (hour, meridiem) {
              if (hour === 12) {
                hour = 0;
              }
              if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
              } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
              } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
              }
            },
            meridiem: function (hour, minute, isLower) {
              var hm = hour * 100 + minute;
              if (hm < 600) {
                return '凌晨';
              } else if (hm < 900) {
                return '早上';
              } else if (hm < 1130) {
                return '上午';
              } else if (hm < 1230) {
                return '中午';
              } else if (hm < 1800) {
                return '下午';
              } else {
                return '晚上';
              }
            },
            calendar: {
              sameDay: '[今天] LT',
              nextDay: '[明天] LT',
              nextWeek: '[下]dddd LT',
              lastDay: '[昨天] LT',
              lastWeek: '[上]dddd LT',
              sameElse: 'L'
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                  return number + '日';
                case 'M':
                  return number + '月';
                case 'w':
                case 'W':
                  return number + '週';
                default:
                  return number;
              }
            },
            relativeTime: {
              future: '%s內',
              past: '%s前',
              s: '幾秒',
              ss: '%d 秒',
              m: '1 分鐘',
              mm: '%d 分鐘',
              h: '1 小時',
              hh: '%d 小時',
              d: '1 天',
              dd: '%d 天',
              M: '1 個月',
              MM: '%d 個月',
              y: '1 年',
              yy: '%d 年'
            }
          });

          return zhTw;

        })));


        /***/
      }),

    /***/
    "./node_modules/moment/moment.js":
      /*!***************************************!*\
        !*** ./node_modules/moment/moment.js ***!
        \***************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function (module) {
          var require; //! moment.js

          ;
          (function (global, factory) {
            true ? module.exports = factory() :
              undefined
          }(this, (function () {
            'use strict';

            var hookCallback;

            function hooks() {
              return hookCallback.apply(null, arguments);
            }

            // This is done to register the method called with moment()
            // without creating circular dependencies.
            function setHookCallback(callback) {
              hookCallback = callback;
            }

            function isArray(input) {
              return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
            }

            function isObject(input) {
              // IE8 will treat undefined and null as object if it wasn't for
              // input != null
              return input != null && Object.prototype.toString.call(input) === '[object Object]';
            }

            function isObjectEmpty(obj) {
              if (Object.getOwnPropertyNames) {
                return (Object.getOwnPropertyNames(obj).length === 0);
              } else {
                var k;
                for (k in obj) {
                  if (obj.hasOwnProperty(k)) {
                    return false;
                  }
                }
                return true;
              }
            }

            function isUndefined(input) {
              return input === void 0;
            }

            function isNumber(input) {
              return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
            }

            function isDate(input) {
              return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
            }

            function map(arr, fn) {
              var res = [],
                i;
              for (i = 0; i < arr.length; ++i) {
                res.push(fn(arr[i], i));
              }
              return res;
            }

            function hasOwnProp(a, b) {
              return Object.prototype.hasOwnProperty.call(a, b);
            }

            function extend(a, b) {
              for (var i in b) {
                if (hasOwnProp(b, i)) {
                  a[i] = b[i];
                }
              }

              if (hasOwnProp(b, 'toString')) {
                a.toString = b.toString;
              }

              if (hasOwnProp(b, 'valueOf')) {
                a.valueOf = b.valueOf;
              }

              return a;
            }

            function createUTC(input, format, locale, strict) {
              return createLocalOrUTC(input, format, locale, strict, true).utc();
            }

            function defaultParsingFlags() {
              // We need to deep clone this object.
              return {
                empty: false,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: false,
                invalidMonth: null,
                invalidFormat: false,
                userInvalidated: false,
                iso: false,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: false,
                weekdayMismatch: false
              };
            }

            function getParsingFlags(m) {
              if (m._pf == null) {
                m._pf = defaultParsingFlags();
              }
              return m._pf;
            }

            var some;
            if (Array.prototype.some) {
              some = Array.prototype.some;
            } else {
              some = function (fun) {
                var t = Object(this);
                var len = t.length >>> 0;

                for (var i = 0; i < len; i++) {
                  if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                  }
                }

                return false;
              };
            }

            function isValid(m) {
              if (m._isValid == null) {
                var flags = getParsingFlags(m);
                var parsedParts = some.call(flags.parsedDateParts, function (i) {
                  return i != null;
                });
                var isNowValid = !isNaN(m._d.getTime()) &&
                  flags.overflow < 0 &&
                  !flags.empty &&
                  !flags.invalidMonth &&
                  !flags.invalidWeekday &&
                  !flags.weekdayMismatch &&
                  !flags.nullInput &&
                  !flags.invalidFormat &&
                  !flags.userInvalidated &&
                  (!flags.meridiem || (flags.meridiem && parsedParts));

                if (m._strict) {
                  isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
                }

                if (Object.isFrozen == null || !Object.isFrozen(m)) {
                  m._isValid = isNowValid;
                } else {
                  return isNowValid;
                }
              }
              return m._isValid;
            }

            function createInvalid(flags) {
              var m = createUTC(NaN);
              if (flags != null) {
                extend(getParsingFlags(m), flags);
              } else {
                getParsingFlags(m).userInvalidated = true;
              }

              return m;
            }

            // Plugins that add properties should also add the key here (null value),
            // so we can properly clone ourselves.
            var momentProperties = hooks.momentProperties = [];

            function copyConfig(to, from) {
              var i, prop, val;

              if (!isUndefined(from._isAMomentObject)) {
                to._isAMomentObject = from._isAMomentObject;
              }
              if (!isUndefined(from._i)) {
                to._i = from._i;
              }
              if (!isUndefined(from._f)) {
                to._f = from._f;
              }
              if (!isUndefined(from._l)) {
                to._l = from._l;
              }
              if (!isUndefined(from._strict)) {
                to._strict = from._strict;
              }
              if (!isUndefined(from._tzm)) {
                to._tzm = from._tzm;
              }
              if (!isUndefined(from._isUTC)) {
                to._isUTC = from._isUTC;
              }
              if (!isUndefined(from._offset)) {
                to._offset = from._offset;
              }
              if (!isUndefined(from._pf)) {
                to._pf = getParsingFlags(from);
              }
              if (!isUndefined(from._locale)) {
                to._locale = from._locale;
              }

              if (momentProperties.length > 0) {
                for (i = 0; i < momentProperties.length; i++) {
                  prop = momentProperties[i];
                  val = from[prop];
                  if (!isUndefined(val)) {
                    to[prop] = val;
                  }
                }
              }

              return to;
            }

            var updateInProgress = false;

            // Moment prototype object
            function Moment(config) {
              copyConfig(this, config);
              this._d = new Date(config._d != null ? config._d.getTime() : NaN);
              if (!this.isValid()) {
                this._d = new Date(NaN);
              }
              // Prevent infinite loop in case updateOffset creates new moment
              // objects.
              if (updateInProgress === false) {
                updateInProgress = true;
                hooks.updateOffset(this);
                updateInProgress = false;
              }
            }

            function isMoment(obj) {
              return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
            }

            function absFloor(number) {
              if (number < 0) {
                // -0 -> 0
                return Math.ceil(number) || 0;
              } else {
                return Math.floor(number);
              }
            }

            function toInt(argumentForCoercion) {
              var coercedNumber = +argumentForCoercion,
                value = 0;

              if (coercedNumber !== 0 && isFinite(coercedNumber)) {
                value = absFloor(coercedNumber);
              }

              return value;
            }

            // compare two arrays, return the number of differences
            function compareArrays(array1, array2, dontConvert) {
              var len = Math.min(array1.length, array2.length),
                lengthDiff = Math.abs(array1.length - array2.length),
                diffs = 0,
                i;
              for (i = 0; i < len; i++) {
                if ((dontConvert && array1[i] !== array2[i]) ||
                  (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                  diffs++;
                }
              }
              return diffs + lengthDiff;
            }

            function warn(msg) {
              if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !== 'undefined') && console.warn) {
                console.warn('Deprecation warning: ' + msg);
              }
            }

            function deprecate(msg, fn) {
              var firstTime = true;

              return extend(function () {
                if (hooks.deprecationHandler != null) {
                  hooks.deprecationHandler(null, msg);
                }
                if (firstTime) {
                  var args = [];
                  var arg;
                  for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                      arg += '\n[' + i + '] ';
                      for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                      }
                      arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                      arg = arguments[i];
                    }
                    args.push(arg);
                  }
                  warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                  firstTime = false;
                }
                return fn.apply(this, arguments);
              }, fn);
            }

            var deprecations = {};

            function deprecateSimple(name, msg) {
              if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(name, msg);
              }
              if (!deprecations[name]) {
                warn(msg);
                deprecations[name] = true;
              }
            }

            hooks.suppressDeprecationWarnings = false;
            hooks.deprecationHandler = null;

            function isFunction(input) {
              return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
            }

            function set(config) {
              var prop, i;
              for (i in config) {
                prop = config[i];
                if (isFunction(prop)) {
                  this[i] = prop;
                } else {
                  this['_' + i] = prop;
                }
              }
              this._config = config;
              // Lenient ordinal parsing accepts just a number in addition to
              // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
              // TODO: Remove "ordinalParse" fallback in next major release.
              this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
            }

            function mergeConfigs(parentConfig, childConfig) {
              var res = extend({}, parentConfig),
                prop;
              for (prop in childConfig) {
                if (hasOwnProp(childConfig, prop)) {
                  if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                  } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                  } else {
                    delete res[prop];
                  }
                }
              }
              for (prop in parentConfig) {
                if (hasOwnProp(parentConfig, prop) &&
                  !hasOwnProp(childConfig, prop) &&
                  isObject(parentConfig[prop])) {
                  // make sure changes to properties don't modify parent config
                  res[prop] = extend({}, res[prop]);
                }
              }
              return res;
            }

            function Locale(config) {
              if (config != null) {
                this.set(config);
              }
            }

            var keys;

            if (Object.keys) {
              keys = Object.keys;
            } else {
              keys = function (obj) {
                var i, res = [];
                for (i in obj) {
                  if (hasOwnProp(obj, i)) {
                    res.push(i);
                  }
                }
                return res;
              };
            }

            var defaultCalendar = {
              sameDay: '[Today at] LT',
              nextDay: '[Tomorrow at] LT',
              nextWeek: 'dddd [at] LT',
              lastDay: '[Yesterday at] LT',
              lastWeek: '[Last] dddd [at] LT',
              sameElse: 'L'
            };

            function calendar(key, mom, now) {
              var output = this._calendar[key] || this._calendar['sameElse'];
              return isFunction(output) ? output.call(mom, now) : output;
            }

            var defaultLongDateFormat = {
              LTS: 'h:mm:ss A',
              LT: 'h:mm A',
              L: 'MM/DD/YYYY',
              LL: 'MMMM D, YYYY',
              LLL: 'MMMM D, YYYY h:mm A',
              LLLL: 'dddd, MMMM D, YYYY h:mm A'
            };

            function longDateFormat(key) {
              var format = this._longDateFormat[key],
                formatUpper = this._longDateFormat[key.toUpperCase()];

              if (format || !formatUpper) {
                return format;
              }

              this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                return val.slice(1);
              });

              return this._longDateFormat[key];
            }

            var defaultInvalidDate = 'Invalid date';

            function invalidDate() {
              return this._invalidDate;
            }

            var defaultOrdinal = '%d';
            var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

            function ordinal(number) {
              return this._ordinal.replace('%d', number);
            }

            var defaultRelativeTime = {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              ss: '%d seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years'
            };

            function relativeTime(number, withoutSuffix, string, isFuture) {
              var output = this._relativeTime[string];
              return (isFunction(output)) ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
            }

            function pastFuture(diff, output) {
              var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
              return isFunction(format) ? format(output) : format.replace(/%s/i, output);
            }

            var aliases = {};

            function addUnitAlias(unit, shorthand) {
              var lowerCase = unit.toLowerCase();
              aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
            }

            function normalizeUnits(units) {
              return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
            }

            function normalizeObjectUnits(inputObject) {
              var normalizedInput = {},
                normalizedProp,
                prop;

              for (prop in inputObject) {
                if (hasOwnProp(inputObject, prop)) {
                  normalizedProp = normalizeUnits(prop);
                  if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                  }
                }
              }

              return normalizedInput;
            }

            var priorities = {};

            function addUnitPriority(unit, priority) {
              priorities[unit] = priority;
            }

            function getPrioritizedUnits(unitsObj) {
              var units = [];
              for (var u in unitsObj) {
                units.push({
                  unit: u,
                  priority: priorities[u]
                });
              }
              units.sort(function (a, b) {
                return a.priority - b.priority;
              });
              return units;
            }

            function zeroFill(number, targetLength, forceSign) {
              var absNumber = '' + Math.abs(number),
                zerosToFill = targetLength - absNumber.length,
                sign = number >= 0;
              return (sign ? (forceSign ? '+' : '') : '-') +
                Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
            }

            var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

            var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

            var formatFunctions = {};

            var formatTokenFunctions = {};

            // token:    'M'
            // padded:   ['MM', 2]
            // ordinal:  'Mo'
            // callback: function () { this.month() + 1 }
            function addFormatToken(token, padded, ordinal, callback) {
              var func = callback;
              if (typeof callback === 'string') {
                func = function () {
                  return this[callback]();
                };
              }
              if (token) {
                formatTokenFunctions[token] = func;
              }
              if (padded) {
                formatTokenFunctions[padded[0]] = function () {
                  return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
                };
              }
              if (ordinal) {
                formatTokenFunctions[ordinal] = function () {
                  return this.localeData().ordinal(func.apply(this, arguments), token);
                };
              }
            }

            function removeFormattingTokens(input) {
              if (input.match(/\[[\s\S]/)) {
                return input.replace(/^\[|\]$/g, '');
              }
              return input.replace(/\\/g, '');
            }

            function makeFormatFunction(format) {
              var array = format.match(formattingTokens),
                i, length;

              for (i = 0, length = array.length; i < length; i++) {
                if (formatTokenFunctions[array[i]]) {
                  array[i] = formatTokenFunctions[array[i]];
                } else {
                  array[i] = removeFormattingTokens(array[i]);
                }
              }

              return function (mom) {
                var output = '',
                  i;
                for (i = 0; i < length; i++) {
                  output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
                }
                return output;
              };
            }

            // format date using native date object
            function formatMoment(m, format) {
              if (!m.isValid()) {
                return m.localeData().invalidDate();
              }

              format = expandFormat(format, m.localeData());
              formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

              return formatFunctions[format](m);
            }

            function expandFormat(format, locale) {
              var i = 5;

              function replaceLongDateFormatTokens(input) {
                return locale.longDateFormat(input) || input;
              }

              localFormattingTokens.lastIndex = 0;
              while (i >= 0 && localFormattingTokens.test(format)) {
                format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
                localFormattingTokens.lastIndex = 0;
                i -= 1;
              }

              return format;
            }

            var match1 = /\d/; //       0 - 9
            var match2 = /\d\d/; //      00 - 99
            var match3 = /\d{3}/; //     000 - 999
            var match4 = /\d{4}/; //    0000 - 9999
            var match6 = /[+-]?\d{6}/; // -999999 - 999999
            var match1to2 = /\d\d?/; //       0 - 99
            var match3to4 = /\d\d\d\d?/; //     999 - 9999
            var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
            var match1to3 = /\d{1,3}/; //       0 - 999
            var match1to4 = /\d{1,4}/; //       0 - 9999
            var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

            var matchUnsigned = /\d+/; //       0 - inf
            var matchSigned = /[+-]?\d+/; //    -inf - inf

            var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
            var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

            var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

            // any word (or two) characters or numbers including two/three word month in arabic.
            // includes scottish gaelic two word and hyphenated months
            var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

            var regexes = {};

            function addRegexToken(token, regex, strictRegex) {
              regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
                return (isStrict && strictRegex) ? strictRegex : regex;
              };
            }

            function getParseRegexForToken(token, config) {
              if (!hasOwnProp(regexes, token)) {
                return new RegExp(unescapeFormat(token));
              }

              return regexes[token](config._strict, config._locale);
            }

            // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
            function unescapeFormat(s) {
              return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4;
              }));
            }

            function regexEscape(s) {
              return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            }

            var tokens = {};

            function addParseToken(token, callback) {
              var i, func = callback;
              if (typeof token === 'string') {
                token = [token];
              }
              if (isNumber(callback)) {
                func = function (input, array) {
                  array[callback] = toInt(input);
                };
              }
              for (i = 0; i < token.length; i++) {
                tokens[token[i]] = func;
              }
            }

            function addWeekParseToken(token, callback) {
              addParseToken(token, function (input, array, config, token) {
                config._w = config._w || {};
                callback(input, config._w, config, token);
              });
            }

            function addTimeToArrayFromToken(token, input, config) {
              if (input != null && hasOwnProp(tokens, token)) {
                tokens[token](input, config._a, config, token);
              }
            }

            var YEAR = 0;
            var MONTH = 1;
            var DATE = 2;
            var HOUR = 3;
            var MINUTE = 4;
            var SECOND = 5;
            var MILLISECOND = 6;
            var WEEK = 7;
            var WEEKDAY = 8;

            // FORMATTING

            addFormatToken('Y', 0, 0, function () {
              var y = this.year();
              return y <= 9999 ? '' + y : '+' + y;
            });

            addFormatToken(0, ['YY', 2], 0, function () {
              return this.year() % 100;
            });

            addFormatToken(0, ['YYYY', 4], 0, 'year');
            addFormatToken(0, ['YYYYY', 5], 0, 'year');
            addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

            // ALIASES

            addUnitAlias('year', 'y');

            // PRIORITIES

            addUnitPriority('year', 1);

            // PARSING

            addRegexToken('Y', matchSigned);
            addRegexToken('YY', match1to2, match2);
            addRegexToken('YYYY', match1to4, match4);
            addRegexToken('YYYYY', match1to6, match6);
            addRegexToken('YYYYYY', match1to6, match6);

            addParseToken(['YYYYY', 'YYYYYY'], YEAR);
            addParseToken('YYYY', function (input, array) {
              array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
            });
            addParseToken('YY', function (input, array) {
              array[YEAR] = hooks.parseTwoDigitYear(input);
            });
            addParseToken('Y', function (input, array) {
              array[YEAR] = parseInt(input, 10);
            });

            // HELPERS

            function daysInYear(year) {
              return isLeapYear(year) ? 366 : 365;
            }

            function isLeapYear(year) {
              return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
            }

            // HOOKS

            hooks.parseTwoDigitYear = function (input) {
              return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
            };

            // MOMENTS

            var getSetYear = makeGetSet('FullYear', true);

            function getIsLeapYear() {
              return isLeapYear(this.year());
            }

            function makeGetSet(unit, keepTime) {
              return function (value) {
                if (value != null) {
                  set$1(this, unit, value);
                  hooks.updateOffset(this, keepTime);
                  return this;
                } else {
                  return get(this, unit);
                }
              };
            }

            function get(mom, unit) {
              return mom.isValid() ?
                mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
            }

            function set$1(mom, unit, value) {
              if (mom.isValid() && !isNaN(value)) {
                if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
                } else {
                  mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
                }
              }
            }

            // MOMENTS

            function stringGet(units) {
              units = normalizeUnits(units);
              if (isFunction(this[units])) {
                return this[units]();
              }
              return this;
            }


            function stringSet(units, value) {
              if (typeof units === 'object') {
                units = normalizeObjectUnits(units);
                var prioritized = getPrioritizedUnits(units);
                for (var i = 0; i < prioritized.length; i++) {
                  this[prioritized[i].unit](units[prioritized[i].unit]);
                }
              } else {
                units = normalizeUnits(units);
                if (isFunction(this[units])) {
                  return this[units](value);
                }
              }
              return this;
            }

            function mod(n, x) {
              return ((n % x) + x) % x;
            }

            var indexOf;

            if (Array.prototype.indexOf) {
              indexOf = Array.prototype.indexOf;
            } else {
              indexOf = function (o) {
                // I know
                var i;
                for (i = 0; i < this.length; ++i) {
                  if (this[i] === o) {
                    return i;
                  }
                }
                return -1;
              };
            }

            function daysInMonth(year, month) {
              if (isNaN(year) || isNaN(month)) {
                return NaN;
              }
              var modMonth = mod(month, 12);
              year += (month - modMonth) / 12;
              return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
            }

            // FORMATTING

            addFormatToken('M', ['MM', 2], 'Mo', function () {
              return this.month() + 1;
            });

            addFormatToken('MMM', 0, 0, function (format) {
              return this.localeData().monthsShort(this, format);
            });

            addFormatToken('MMMM', 0, 0, function (format) {
              return this.localeData().months(this, format);
            });

            // ALIASES

            addUnitAlias('month', 'M');

            // PRIORITY

            addUnitPriority('month', 8);

            // PARSING

            addRegexToken('M', match1to2);
            addRegexToken('MM', match1to2, match2);
            addRegexToken('MMM', function (isStrict, locale) {
              return locale.monthsShortRegex(isStrict);
            });
            addRegexToken('MMMM', function (isStrict, locale) {
              return locale.monthsRegex(isStrict);
            });

            addParseToken(['M', 'MM'], function (input, array) {
              array[MONTH] = toInt(input) - 1;
            });

            addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
              var month = config._locale.monthsParse(input, token, config._strict);
              // if we didn't find a month name, mark the date as invalid.
              if (month != null) {
                array[MONTH] = month;
              } else {
                getParsingFlags(config).invalidMonth = input;
              }
            });

            // LOCALES

            var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
            var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

            function localeMonths(m, format) {
              if (!m) {
                return isArray(this._months) ? this._months :
                  this._months['standalone'];
              }
              return isArray(this._months) ? this._months[m.month()] :
                this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
            }

            var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

            function localeMonthsShort(m, format) {
              if (!m) {
                return isArray(this._monthsShort) ? this._monthsShort :
                  this._monthsShort['standalone'];
              }
              return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
                this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
            }

            function handleStrictParse(monthName, format, strict) {
              var i, ii, mom, llc = monthName.toLocaleLowerCase();
              if (!this._monthsParse) {
                // this is not used
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
                for (i = 0; i < 12; ++i) {
                  mom = createUTC([2000, i]);
                  this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                  this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
                }
              }

              if (strict) {
                if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
                } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
                }
              } else {
                if (format === 'MMM') {
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._longMonthsParse, llc);
                  return ii !== -1 ? ii : null;
                } else {
                  ii = indexOf.call(this._longMonthsParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._shortMonthsParse, llc);
                  return ii !== -1 ? ii : null;
                }
              }
            }

            function localeMonthsParse(monthName, format, strict) {
              var i, mom, regex;

              if (this._monthsParseExact) {
                return handleStrictParse.call(this, monthName, format, strict);
              }

              if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
              }

              // TODO: add sorting
              // Sorting makes sure if one month (or abbr) is a prefix of another
              // see sorting in computeMonthsParse
              for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                  this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                  this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                  regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                  this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                  return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                  return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                  return i;
                }
              }
            }

            // MOMENTS

            function setMonth(mom, value) {
              var dayOfMonth;

              if (!mom.isValid()) {
                // No op
                return mom;
              }

              if (typeof value === 'string') {
                if (/^\d+$/.test(value)) {
                  value = toInt(value);
                } else {
                  value = mom.localeData().monthsParse(value);
                  // TODO: Another silent failure?
                  if (!isNumber(value)) {
                    return mom;
                  }
                }
              }

              dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
              return mom;
            }

            function getSetMonth(value) {
              if (value != null) {
                setMonth(this, value);
                hooks.updateOffset(this, true);
                return this;
              } else {
                return get(this, 'Month');
              }
            }

            function getDaysInMonth() {
              return daysInMonth(this.year(), this.month());
            }

            var defaultMonthsShortRegex = matchWord;

            function monthsShortRegex(isStrict) {
              if (this._monthsParseExact) {
                if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
                }
                if (isStrict) {
                  return this._monthsShortStrictRegex;
                } else {
                  return this._monthsShortRegex;
                }
              } else {
                if (!hasOwnProp(this, '_monthsShortRegex')) {
                  this._monthsShortRegex = defaultMonthsShortRegex;
                }
                return this._monthsShortStrictRegex && isStrict ?
                  this._monthsShortStrictRegex : this._monthsShortRegex;
              }
            }

            var defaultMonthsRegex = matchWord;

            function monthsRegex(isStrict) {
              if (this._monthsParseExact) {
                if (!hasOwnProp(this, '_monthsRegex')) {
                  computeMonthsParse.call(this);
                }
                if (isStrict) {
                  return this._monthsStrictRegex;
                } else {
                  return this._monthsRegex;
                }
              } else {
                if (!hasOwnProp(this, '_monthsRegex')) {
                  this._monthsRegex = defaultMonthsRegex;
                }
                return this._monthsStrictRegex && isStrict ?
                  this._monthsStrictRegex : this._monthsRegex;
              }
            }

            function computeMonthsParse() {
              function cmpLenRev(a, b) {
                return b.length - a.length;
              }

              var shortPieces = [],
                longPieces = [],
                mixedPieces = [],
                i, mom;
              for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, i]);
                shortPieces.push(this.monthsShort(mom, ''));
                longPieces.push(this.months(mom, ''));
                mixedPieces.push(this.months(mom, ''));
                mixedPieces.push(this.monthsShort(mom, ''));
              }
              // Sorting makes sure if one month (or abbr) is a prefix of another it
              // will match the longer piece.
              shortPieces.sort(cmpLenRev);
              longPieces.sort(cmpLenRev);
              mixedPieces.sort(cmpLenRev);
              for (i = 0; i < 12; i++) {
                shortPieces[i] = regexEscape(shortPieces[i]);
                longPieces[i] = regexEscape(longPieces[i]);
              }
              for (i = 0; i < 24; i++) {
                mixedPieces[i] = regexEscape(mixedPieces[i]);
              }

              this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
              this._monthsShortRegex = this._monthsRegex;
              this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
              this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
            }

            function createDate(y, m, d, h, M, s, ms) {
              // can't just apply() to create a date:
              // https://stackoverflow.com/q/181348
              var date;
              // the date constructor remaps years 0-99 to 1900-1999
              if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                date = new Date(y + 400, m, d, h, M, s, ms);
                if (isFinite(date.getFullYear())) {
                  date.setFullYear(y);
                }
              } else {
                date = new Date(y, m, d, h, M, s, ms);
              }

              return date;
            }

            function createUTCDate(y) {
              var date;
              // the Date.UTC function remaps years 0-99 to 1900-1999
              if (y < 100 && y >= 0) {
                var args = Array.prototype.slice.call(arguments);
                // preserve leap years using a full 400 year cycle, then reset
                args[0] = y + 400;
                date = new Date(Date.UTC.apply(null, args));
                if (isFinite(date.getUTCFullYear())) {
                  date.setUTCFullYear(y);
                }
              } else {
                date = new Date(Date.UTC.apply(null, arguments));
              }

              return date;
            }

            // start-of-first-week - start-of-year
            function firstWeekOffset(year, dow, doy) {
              var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
                fwd = 7 + dow - doy,
                // first-week day local weekday -- which local weekday is fwd
                fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

              return -fwdlw + fwd - 1;
            }

            // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
            function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
              var localWeekday = (7 + weekday - dow) % 7,
                weekOffset = firstWeekOffset(year, dow, doy),
                dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
                resYear, resDayOfYear;

              if (dayOfYear <= 0) {
                resYear = year - 1;
                resDayOfYear = daysInYear(resYear) + dayOfYear;
              } else if (dayOfYear > daysInYear(year)) {
                resYear = year + 1;
                resDayOfYear = dayOfYear - daysInYear(year);
              } else {
                resYear = year;
                resDayOfYear = dayOfYear;
              }

              return {
                year: resYear,
                dayOfYear: resDayOfYear
              };
            }

            function weekOfYear(mom, dow, doy) {
              var weekOffset = firstWeekOffset(mom.year(), dow, doy),
                week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
                resWeek, resYear;

              if (week < 1) {
                resYear = mom.year() - 1;
                resWeek = week + weeksInYear(resYear, dow, doy);
              } else if (week > weeksInYear(mom.year(), dow, doy)) {
                resWeek = week - weeksInYear(mom.year(), dow, doy);
                resYear = mom.year() + 1;
              } else {
                resYear = mom.year();
                resWeek = week;
              }

              return {
                week: resWeek,
                year: resYear
              };
            }

            function weeksInYear(year, dow, doy) {
              var weekOffset = firstWeekOffset(year, dow, doy),
                weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
              return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
            }

            // FORMATTING

            addFormatToken('w', ['ww', 2], 'wo', 'week');
            addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

            // ALIASES

            addUnitAlias('week', 'w');
            addUnitAlias('isoWeek', 'W');

            // PRIORITIES

            addUnitPriority('week', 5);
            addUnitPriority('isoWeek', 5);

            // PARSING

            addRegexToken('w', match1to2);
            addRegexToken('ww', match1to2, match2);
            addRegexToken('W', match1to2);
            addRegexToken('WW', match1to2, match2);

            addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
              week[token.substr(0, 1)] = toInt(input);
            });

            // HELPERS

            // LOCALES

            function localeWeek(mom) {
              return weekOfYear(mom, this._week.dow, this._week.doy).week;
            }

            var defaultLocaleWeek = {
              dow: 0, // Sunday is the first day of the week.
              doy: 6 // The week that contains Jan 6th is the first week of the year.
            };

            function localeFirstDayOfWeek() {
              return this._week.dow;
            }

            function localeFirstDayOfYear() {
              return this._week.doy;
            }

            // MOMENTS

            function getSetWeek(input) {
              var week = this.localeData().week(this);
              return input == null ? week : this.add((input - week) * 7, 'd');
            }

            function getSetISOWeek(input) {
              var week = weekOfYear(this, 1, 4).week;
              return input == null ? week : this.add((input - week) * 7, 'd');
            }

            // FORMATTING

            addFormatToken('d', 0, 'do', 'day');

            addFormatToken('dd', 0, 0, function (format) {
              return this.localeData().weekdaysMin(this, format);
            });

            addFormatToken('ddd', 0, 0, function (format) {
              return this.localeData().weekdaysShort(this, format);
            });

            addFormatToken('dddd', 0, 0, function (format) {
              return this.localeData().weekdays(this, format);
            });

            addFormatToken('e', 0, 0, 'weekday');
            addFormatToken('E', 0, 0, 'isoWeekday');

            // ALIASES

            addUnitAlias('day', 'd');
            addUnitAlias('weekday', 'e');
            addUnitAlias('isoWeekday', 'E');

            // PRIORITY
            addUnitPriority('day', 11);
            addUnitPriority('weekday', 11);
            addUnitPriority('isoWeekday', 11);

            // PARSING

            addRegexToken('d', match1to2);
            addRegexToken('e', match1to2);
            addRegexToken('E', match1to2);
            addRegexToken('dd', function (isStrict, locale) {
              return locale.weekdaysMinRegex(isStrict);
            });
            addRegexToken('ddd', function (isStrict, locale) {
              return locale.weekdaysShortRegex(isStrict);
            });
            addRegexToken('dddd', function (isStrict, locale) {
              return locale.weekdaysRegex(isStrict);
            });

            addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
              var weekday = config._locale.weekdaysParse(input, token, config._strict);
              // if we didn't get a weekday name, mark the date as invalid
              if (weekday != null) {
                week.d = weekday;
              } else {
                getParsingFlags(config).invalidWeekday = input;
              }
            });

            addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
              week[token] = toInt(input);
            });

            // HELPERS

            function parseWeekday(input, locale) {
              if (typeof input !== 'string') {
                return input;
              }

              if (!isNaN(input)) {
                return parseInt(input, 10);
              }

              input = locale.weekdaysParse(input);
              if (typeof input === 'number') {
                return input;
              }

              return null;
            }

            function parseIsoWeekday(input, locale) {
              if (typeof input === 'string') {
                return locale.weekdaysParse(input) % 7 || 7;
              }
              return isNaN(input) ? null : input;
            }

            // LOCALES
            function shiftWeekdays(ws, n) {
              return ws.slice(n, 7).concat(ws.slice(0, n));
            }

            var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

            function localeWeekdays(m, format) {
              var weekdays = isArray(this._weekdays) ? this._weekdays :
                this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
              return (m === true) ? shiftWeekdays(weekdays, this._week.dow) :
                (m) ? weekdays[m.day()] : weekdays;
            }

            var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

            function localeWeekdaysShort(m) {
              return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow) :
                (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
            }

            var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

            function localeWeekdaysMin(m) {
              return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow) :
                (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
            }

            function handleStrictParse$1(weekdayName, format, strict) {
              var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
              if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._minWeekdaysParse = [];

                for (i = 0; i < 7; ++i) {
                  mom = createUTC([2000, 1]).day(i);
                  this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                  this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                  this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
                }
              }

              if (strict) {
                if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                }
              } else {
                if (format === 'dddd') {
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                } else if (format === 'ddd') {
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                } else {
                  ii = indexOf.call(this._minWeekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._weekdaysParse, llc);
                  if (ii !== -1) {
                    return ii;
                  }
                  ii = indexOf.call(this._shortWeekdaysParse, llc);
                  return ii !== -1 ? ii : null;
                }
              }
            }

            function localeWeekdaysParse(weekdayName, format, strict) {
              var i, mom, regex;

              if (this._weekdaysParseExact) {
                return handleStrictParse$1.call(this, weekdayName, format, strict);
              }

              if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._minWeekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._fullWeekdaysParse = [];
              }

              for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already

                mom = createUTC([2000, 1]).day(i);
                if (strict && !this._fullWeekdaysParse[i]) {
                  this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                  this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                  this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
                }
                if (!this._weekdaysParse[i]) {
                  regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                  this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                  return i;
                } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                  return i;
                } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                  return i;
                } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                  return i;
                }
              }
            }

            // MOMENTS

            function getSetDayOfWeek(input) {
              if (!this.isValid()) {
                return input != null ? this : NaN;
              }
              var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
              } else {
                return day;
              }
            }

            function getSetLocaleDayOfWeek(input) {
              if (!this.isValid()) {
                return input != null ? this : NaN;
              }
              var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return input == null ? weekday : this.add(input - weekday, 'd');
            }

            function getSetISODayOfWeek(input) {
              if (!this.isValid()) {
                return input != null ? this : NaN;
              }

              // behaves the same as moment#day except
              // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
              // as a setter, sunday should belong to the previous week.

              if (input != null) {
                var weekday = parseIsoWeekday(input, this.localeData());
                return this.day(this.day() % 7 ? weekday : weekday - 7);
              } else {
                return this.day() || 7;
              }
            }

            var defaultWeekdaysRegex = matchWord;

            function weekdaysRegex(isStrict) {
              if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                  return this._weekdaysStrictRegex;
                } else {
                  return this._weekdaysRegex;
                }
              } else {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                  this._weekdaysRegex = defaultWeekdaysRegex;
                }
                return this._weekdaysStrictRegex && isStrict ?
                  this._weekdaysStrictRegex : this._weekdaysRegex;
              }
            }

            var defaultWeekdaysShortRegex = matchWord;

            function weekdaysShortRegex(isStrict) {
              if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                  return this._weekdaysShortStrictRegex;
                } else {
                  return this._weekdaysShortRegex;
                }
              } else {
                if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                  this._weekdaysShortRegex = defaultWeekdaysShortRegex;
                }
                return this._weekdaysShortStrictRegex && isStrict ?
                  this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
              }
            }

            var defaultWeekdaysMinRegex = matchWord;

            function weekdaysMinRegex(isStrict) {
              if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, '_weekdaysRegex')) {
                  computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                  return this._weekdaysMinStrictRegex;
                } else {
                  return this._weekdaysMinRegex;
                }
              } else {
                if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                  this._weekdaysMinRegex = defaultWeekdaysMinRegex;
                }
                return this._weekdaysMinStrictRegex && isStrict ?
                  this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
              }
            }


            function computeWeekdaysParse() {
              function cmpLenRev(a, b) {
                return b.length - a.length;
              }

              var minPieces = [],
                shortPieces = [],
                longPieces = [],
                mixedPieces = [],
                i, mom, minp, shortp, longp;
              for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                mom = createUTC([2000, 1]).day(i);
                minp = this.weekdaysMin(mom, '');
                shortp = this.weekdaysShort(mom, '');
                longp = this.weekdays(mom, '');
                minPieces.push(minp);
                shortPieces.push(shortp);
                longPieces.push(longp);
                mixedPieces.push(minp);
                mixedPieces.push(shortp);
                mixedPieces.push(longp);
              }
              // Sorting makes sure if one weekday (or abbr) is a prefix of another it
              // will match the longer piece.
              minPieces.sort(cmpLenRev);
              shortPieces.sort(cmpLenRev);
              longPieces.sort(cmpLenRev);
              mixedPieces.sort(cmpLenRev);
              for (i = 0; i < 7; i++) {
                shortPieces[i] = regexEscape(shortPieces[i]);
                longPieces[i] = regexEscape(longPieces[i]);
                mixedPieces[i] = regexEscape(mixedPieces[i]);
              }

              this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
              this._weekdaysShortRegex = this._weekdaysRegex;
              this._weekdaysMinRegex = this._weekdaysRegex;

              this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
              this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
              this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
            }

            // FORMATTING

            function hFormat() {
              return this.hours() % 12 || 12;
            }

            function kFormat() {
              return this.hours() || 24;
            }

            addFormatToken('H', ['HH', 2], 0, 'hour');
            addFormatToken('h', ['hh', 2], 0, hFormat);
            addFormatToken('k', ['kk', 2], 0, kFormat);

            addFormatToken('hmm', 0, 0, function () {
              return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
            });

            addFormatToken('hmmss', 0, 0, function () {
              return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
                zeroFill(this.seconds(), 2);
            });

            addFormatToken('Hmm', 0, 0, function () {
              return '' + this.hours() + zeroFill(this.minutes(), 2);
            });

            addFormatToken('Hmmss', 0, 0, function () {
              return '' + this.hours() + zeroFill(this.minutes(), 2) +
                zeroFill(this.seconds(), 2);
            });

            function meridiem(token, lowercase) {
              addFormatToken(token, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
              });
            }

            meridiem('a', true);
            meridiem('A', false);

            // ALIASES

            addUnitAlias('hour', 'h');

            // PRIORITY
            addUnitPriority('hour', 13);

            // PARSING

            function matchMeridiem(isStrict, locale) {
              return locale._meridiemParse;
            }

            addRegexToken('a', matchMeridiem);
            addRegexToken('A', matchMeridiem);
            addRegexToken('H', match1to2);
            addRegexToken('h', match1to2);
            addRegexToken('k', match1to2);
            addRegexToken('HH', match1to2, match2);
            addRegexToken('hh', match1to2, match2);
            addRegexToken('kk', match1to2, match2);

            addRegexToken('hmm', match3to4);
            addRegexToken('hmmss', match5to6);
            addRegexToken('Hmm', match3to4);
            addRegexToken('Hmmss', match5to6);

            addParseToken(['H', 'HH'], HOUR);
            addParseToken(['k', 'kk'], function (input, array, config) {
              var kInput = toInt(input);
              array[HOUR] = kInput === 24 ? 0 : kInput;
            });
            addParseToken(['a', 'A'], function (input, array, config) {
              config._isPm = config._locale.isPM(input);
              config._meridiem = input;
            });
            addParseToken(['h', 'hh'], function (input, array, config) {
              array[HOUR] = toInt(input);
              getParsingFlags(config).bigHour = true;
            });
            addParseToken('hmm', function (input, array, config) {
              var pos = input.length - 2;
              array[HOUR] = toInt(input.substr(0, pos));
              array[MINUTE] = toInt(input.substr(pos));
              getParsingFlags(config).bigHour = true;
            });
            addParseToken('hmmss', function (input, array, config) {
              var pos1 = input.length - 4;
              var pos2 = input.length - 2;
              array[HOUR] = toInt(input.substr(0, pos1));
              array[MINUTE] = toInt(input.substr(pos1, 2));
              array[SECOND] = toInt(input.substr(pos2));
              getParsingFlags(config).bigHour = true;
            });
            addParseToken('Hmm', function (input, array, config) {
              var pos = input.length - 2;
              array[HOUR] = toInt(input.substr(0, pos));
              array[MINUTE] = toInt(input.substr(pos));
            });
            addParseToken('Hmmss', function (input, array, config) {
              var pos1 = input.length - 4;
              var pos2 = input.length - 2;
              array[HOUR] = toInt(input.substr(0, pos1));
              array[MINUTE] = toInt(input.substr(pos1, 2));
              array[SECOND] = toInt(input.substr(pos2));
            });

            // LOCALES

            function localeIsPM(input) {
              // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
              // Using charAt should be more compatible.
              return ((input + '').toLowerCase().charAt(0) === 'p');
            }

            var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

            function localeMeridiem(hours, minutes, isLower) {
              if (hours > 11) {
                return isLower ? 'pm' : 'PM';
              } else {
                return isLower ? 'am' : 'AM';
              }
            }


            // MOMENTS

            // Setting the hour should keep the time, because the user explicitly
            // specified which hour they want. So trying to maintain the same hour (in
            // a new timezone) makes sense. Adding/subtracting hours does not follow
            // this rule.
            var getSetHour = makeGetSet('Hours', true);

            var baseConfig = {
              calendar: defaultCalendar,
              longDateFormat: defaultLongDateFormat,
              invalidDate: defaultInvalidDate,
              ordinal: defaultOrdinal,
              dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
              relativeTime: defaultRelativeTime,

              months: defaultLocaleMonths,
              monthsShort: defaultLocaleMonthsShort,

              week: defaultLocaleWeek,

              weekdays: defaultLocaleWeekdays,
              weekdaysMin: defaultLocaleWeekdaysMin,
              weekdaysShort: defaultLocaleWeekdaysShort,

              meridiemParse: defaultLocaleMeridiemParse
            };

            // internal storage for locale config files
            var locales = {};
            var localeFamilies = {};
            var globalLocale;

            function normalizeLocale(key) {
              return key ? key.toLowerCase().replace('_', '-') : key;
            }

            // pick the locale from the array
            // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
            // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
            function chooseLocale(names) {
              var i = 0,
                j, next, locale, split;

              while (i < names.length) {
                split = normalizeLocale(names[i]).split('-');
                j = split.length;
                next = normalizeLocale(names[i + 1]);
                next = next ? next.split('-') : null;
                while (j > 0) {
                  locale = loadLocale(split.slice(0, j).join('-'));
                  if (locale) {
                    return locale;
                  }
                  if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                  }
                  j--;
                }
                i++;
              }
              return globalLocale;
            }

            function loadLocale(name) {
              var oldLocale = null;
              // TODO: Find a better way to register and load all the locales in Node
              if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
                try {
                  oldLocale = globalLocale._abbr;
                  var aliasedRequire = require;
                  __webpack_require__("./node_modules/moment/locale sync recursive ^\\.\\/.*$")("./" + name);
                  getSetGlobalLocale(oldLocale);
                } catch (e) {}
              }
              return locales[name];
            }

            // This function will load locale and then set the global locale.  If
            // no arguments are passed in, it will simply return the current global
            // locale key.
            function getSetGlobalLocale(key, values) {
              var data;
              if (key) {
                if (isUndefined(values)) {
                  data = getLocale(key);
                } else {
                  data = defineLocale(key, values);
                }

                if (data) {
                  // moment.duration._locale = moment._locale = data;
                  globalLocale = data;
                } else {
                  if ((typeof console !== 'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key + ' not found. Did you forget to load it?');
                  }
                }
              }

              return globalLocale._abbr;
            }

            function defineLocale(name, config) {
              if (config !== null) {
                var locale, parentConfig = baseConfig;
                config.abbr = name;
                if (locales[name] != null) {
                  deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                  parentConfig = locales[name]._config;
                } else if (config.parentLocale != null) {
                  if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                  } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                      parentConfig = locale._config;
                    } else {
                      if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                      }
                      localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config
                      });
                      return null;
                    }
                  }
                }
                locales[name] = new Locale(mergeConfigs(parentConfig, config));

                if (localeFamilies[name]) {
                  localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                  });
                }

                // backwards compat for now: also set the locale
                // make sure we set the locale AFTER all child locales have been
                // created, so we won't end up with the child locale set.
                getSetGlobalLocale(name);


                return locales[name];
              } else {
                // useful for testing
                delete locales[name];
                return null;
              }
            }

            function updateLocale(name, config) {
              if (config != null) {
                var locale, tmpLocale, parentConfig = baseConfig;
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                  parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;

                // backwards compat for now: also set the locale
                getSetGlobalLocale(name);
              } else {
                // pass null for config to unupdate, useful for tests
                if (locales[name] != null) {
                  if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                  } else if (locales[name] != null) {
                    delete locales[name];
                  }
                }
              }
              return locales[name];
            }

            // returns locale data
            function getLocale(key) {
              var locale;

              if (key && key._locale && key._locale._abbr) {
                key = key._locale._abbr;
              }

              if (!key) {
                return globalLocale;
              }

              if (!isArray(key)) {
                //short-circuit everything else
                locale = loadLocale(key);
                if (locale) {
                  return locale;
                }
                key = [key];
              }

              return chooseLocale(key);
            }

            function listLocales() {
              return keys(locales);
            }

            function checkOverflow(m) {
              var overflow;
              var a = m._a;

              if (a && getParsingFlags(m).overflow === -2) {
                overflow =
                  a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                  a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                  a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                  a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                  a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                  a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                  -1;

                if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                  overflow = DATE;
                }
                if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                  overflow = WEEK;
                }
                if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                  overflow = WEEKDAY;
                }

                getParsingFlags(m).overflow = overflow;
              }

              return m;
            }

            // Pick the first defined of two or three arguments.
            function defaults(a, b, c) {
              if (a != null) {
                return a;
              }
              if (b != null) {
                return b;
              }
              return c;
            }

            function currentDateArray(config) {
              // hooks is actually the exported moment object
              var nowValue = new Date(hooks.now());
              if (config._useUTC) {
                return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
              }
              return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
            }

            // convert an array to a date.
            // the array should mirror the parameters below
            // note: all values past the year are optional and will default to the lowest possible value.
            // [year, month, day , hour, minute, second, millisecond]
            function configFromArray(config) {
              var i, date, input = [],
                currentDate, expectedWeekday, yearToUse;

              if (config._d) {
                return;
              }

              currentDate = currentDateArray(config);

              //compute day of the year from weeks and weekdays
              if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
                dayOfYearFromWeekInfo(config);
              }

              //if the day of the year is set, figure out what it is
              if (config._dayOfYear != null) {
                yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

                if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                  getParsingFlags(config)._overflowDayOfYear = true;
                }

                date = createUTCDate(yearToUse, 0, config._dayOfYear);
                config._a[MONTH] = date.getUTCMonth();
                config._a[DATE] = date.getUTCDate();
              }

              // Default to current date.
              // * if no year, month, day of month are given, default to today
              // * if day of month is given, default month and year
              // * if month is given, default only year
              // * if year is given, don't default anything
              for (i = 0; i < 3 && config._a[i] == null; ++i) {
                config._a[i] = input[i] = currentDate[i];
              }

              // Zero out whatever was not defaulted, including time
              for (; i < 7; i++) {
                config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
              }

              // Check for 24:00:00.000
              if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
                config._nextDay = true;
                config._a[HOUR] = 0;
              }

              config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
              expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

              // Apply timezone offset from input. The actual utcOffset can be changed
              // with parseZone.
              if (config._tzm != null) {
                config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
              }

              if (config._nextDay) {
                config._a[HOUR] = 24;
              }

              // check for mismatching day of week
              if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
                getParsingFlags(config).weekdayMismatch = true;
              }
            }

            function dayOfYearFromWeekInfo(config) {
              var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

              w = config._w;
              if (w.GG != null || w.W != null || w.E != null) {
                dow = 1;
                doy = 4;

                // TODO: We need to take the current isoWeekYear, but that depends on
                // how we interpret now (local, utc, fixed offset). So create
                // a now version of current config (take local/utc/offset flags, and
                // create now).
                weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
                week = defaults(w.W, 1);
                weekday = defaults(w.E, 1);
                if (weekday < 1 || weekday > 7) {
                  weekdayOverflow = true;
                }
              } else {
                dow = config._locale._week.dow;
                doy = config._locale._week.doy;

                var curWeek = weekOfYear(createLocal(), dow, doy);

                weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

                // Default to current week.
                week = defaults(w.w, curWeek.week);

                if (w.d != null) {
                  // weekday -- low day numbers are considered next week
                  weekday = w.d;
                  if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                  }
                } else if (w.e != null) {
                  // local weekday -- counting starts from beginning of week
                  weekday = w.e + dow;
                  if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                  }
                } else {
                  // default to beginning of week
                  weekday = dow;
                }
              }
              if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
                getParsingFlags(config)._overflowWeeks = true;
              } else if (weekdayOverflow != null) {
                getParsingFlags(config)._overflowWeekday = true;
              } else {
                temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
                config._a[YEAR] = temp.year;
                config._dayOfYear = temp.dayOfYear;
              }
            }

            // iso 8601 regex
            // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
            var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
            var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

            var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

            var isoDates = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, false],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              // YYYYMM is NOT allowed by the standard
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, false],
              ['YYYYDDD', /\d{7}/]
            ];

            // iso time formats and regexes
            var isoTimes = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/]
            ];

            var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

            // date from iso format
            function configFromISO(config) {
              var i, l,
                string = config._i,
                match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
                allowTime, dateFormat, timeFormat, tzFormat;

              if (match) {
                getParsingFlags(config).iso = true;

                for (i = 0, l = isoDates.length; i < l; i++) {
                  if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                  }
                }
                if (dateFormat == null) {
                  config._isValid = false;
                  return;
                }
                if (match[3]) {
                  for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                      // match[2] should be 'T' or space
                      timeFormat = (match[2] || ' ') + isoTimes[i][0];
                      break;
                    }
                  }
                  if (timeFormat == null) {
                    config._isValid = false;
                    return;
                  }
                }
                if (!allowTime && timeFormat != null) {
                  config._isValid = false;
                  return;
                }
                if (match[4]) {
                  if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                  } else {
                    config._isValid = false;
                    return;
                  }
                }
                config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
                configFromStringAndFormat(config);
              } else {
                config._isValid = false;
              }
            }

            // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
            var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
              var result = [
                untruncateYear(yearStr),
                defaultLocaleMonthsShort.indexOf(monthStr),
                parseInt(dayStr, 10),
                parseInt(hourStr, 10),
                parseInt(minuteStr, 10)
              ];

              if (secondStr) {
                result.push(parseInt(secondStr, 10));
              }

              return result;
            }

            function untruncateYear(yearStr) {
              var year = parseInt(yearStr, 10);
              if (year <= 49) {
                return 2000 + year;
              } else if (year <= 999) {
                return 1900 + year;
              }
              return year;
            }

            function preprocessRFC2822(s) {
              // Remove comments and folding whitespace and replace multiple-spaces with a single space
              return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            }

            function checkWeekday(weekdayStr, parsedInput, config) {
              if (weekdayStr) {
                // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
                var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                  weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
                if (weekdayProvided !== weekdayActual) {
                  getParsingFlags(config).weekdayMismatch = true;
                  config._isValid = false;
                  return false;
                }
              }
              return true;
            }

            var obsOffsets = {
              UT: 0,
              GMT: 0,
              EDT: -4 * 60,
              EST: -5 * 60,
              CDT: -5 * 60,
              CST: -6 * 60,
              MDT: -6 * 60,
              MST: -7 * 60,
              PDT: -7 * 60,
              PST: -8 * 60
            };

            function calculateOffset(obsOffset, militaryOffset, numOffset) {
              if (obsOffset) {
                return obsOffsets[obsOffset];
              } else if (militaryOffset) {
                // the only allowed military tz is Z
                return 0;
              } else {
                var hm = parseInt(numOffset, 10);
                var m = hm % 100,
                  h = (hm - m) / 100;
                return h * 60 + m;
              }
            }

            // date and time from ref 2822 format
            function configFromRFC2822(config) {
              var match = rfc2822.exec(preprocessRFC2822(config._i));
              if (match) {
                var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
                if (!checkWeekday(match[1], parsedArray, config)) {
                  return;
                }

                config._a = parsedArray;
                config._tzm = calculateOffset(match[8], match[9], match[10]);

                config._d = createUTCDate.apply(null, config._a);
                config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

                getParsingFlags(config).rfc2822 = true;
              } else {
                config._isValid = false;
              }
            }

            // date from iso format or fallback
            function configFromString(config) {
              var matched = aspNetJsonRegex.exec(config._i);

              if (matched !== null) {
                config._d = new Date(+matched[1]);
                return;
              }

              configFromISO(config);
              if (config._isValid === false) {
                delete config._isValid;
              } else {
                return;
              }

              configFromRFC2822(config);
              if (config._isValid === false) {
                delete config._isValid;
              } else {
                return;
              }

              // Final attempt, use Input Fallback
              hooks.createFromInputFallback(config);
            }

            hooks.createFromInputFallback = deprecate(
              'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
              'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
              'discouraged and will be removed in an upcoming major release. Please refer to ' +
              'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
              function (config) {
                config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
              }
            );

            // constant that refers to the ISO standard
            hooks.ISO_8601 = function () {};

            // constant that refers to the RFC 2822 form
            hooks.RFC_2822 = function () {};

            // date from string and format string
            function configFromStringAndFormat(config) {
              // TODO: Move this to another part of the creation flow to prevent circular deps
              if (config._f === hooks.ISO_8601) {
                configFromISO(config);
                return;
              }
              if (config._f === hooks.RFC_2822) {
                configFromRFC2822(config);
                return;
              }
              config._a = [];
              getParsingFlags(config).empty = true;

              // This array is used to make a Date, either with `new Date` or `Date.UTC`
              var string = '' + config._i,
                i, parsedInput, tokens, token, skipped,
                stringLength = string.length,
                totalParsedInputLength = 0;

              tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

              for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
                // console.log('token', token, 'parsedInput', parsedInput,
                //         'regex', getParseRegexForToken(token, config));
                if (parsedInput) {
                  skipped = string.substr(0, string.indexOf(parsedInput));
                  if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                  }
                  string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                  totalParsedInputLength += parsedInput.length;
                }
                // don't parse if it's not a known token
                if (formatTokenFunctions[token]) {
                  if (parsedInput) {
                    getParsingFlags(config).empty = false;
                  } else {
                    getParsingFlags(config).unusedTokens.push(token);
                  }
                  addTimeToArrayFromToken(token, parsedInput, config);
                } else if (config._strict && !parsedInput) {
                  getParsingFlags(config).unusedTokens.push(token);
                }
              }

              // add remaining unparsed input length to the string
              getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
              if (string.length > 0) {
                getParsingFlags(config).unusedInput.push(string);
              }

              // clear _12h flag if hour is <= 12
              if (config._a[HOUR] <= 12 &&
                getParsingFlags(config).bigHour === true &&
                config._a[HOUR] > 0) {
                getParsingFlags(config).bigHour = undefined;
              }

              getParsingFlags(config).parsedDateParts = config._a.slice(0);
              getParsingFlags(config).meridiem = config._meridiem;
              // handle meridiem
              config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

              configFromArray(config);
              checkOverflow(config);
            }


            function meridiemFixWrap(locale, hour, meridiem) {
              var isPm;

              if (meridiem == null) {
                // nothing to do
                return hour;
              }
              if (locale.meridiemHour != null) {
                return locale.meridiemHour(hour, meridiem);
              } else if (locale.isPM != null) {
                // Fallback
                isPm = locale.isPM(meridiem);
                if (isPm && hour < 12) {
                  hour += 12;
                }
                if (!isPm && hour === 12) {
                  hour = 0;
                }
                return hour;
              } else {
                // this is not supposed to happen
                return hour;
              }
            }

            // date from string and array of format strings
            function configFromStringAndArray(config) {
              var tempConfig,
                bestMoment,

                scoreToBeat,
                i,
                currentScore;

              if (config._f.length === 0) {
                getParsingFlags(config).invalidFormat = true;
                config._d = new Date(NaN);
                return;
              }

              for (i = 0; i < config._f.length; i++) {
                currentScore = 0;
                tempConfig = copyConfig({}, config);
                if (config._useUTC != null) {
                  tempConfig._useUTC = config._useUTC;
                }
                tempConfig._f = config._f[i];
                configFromStringAndFormat(tempConfig);

                if (!isValid(tempConfig)) {
                  continue;
                }

                // if there is any input that was not parsed add a penalty for that format
                currentScore += getParsingFlags(tempConfig).charsLeftOver;

                //or tokens
                currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

                getParsingFlags(tempConfig).score = currentScore;

                if (scoreToBeat == null || currentScore < scoreToBeat) {
                  scoreToBeat = currentScore;
                  bestMoment = tempConfig;
                }
              }

              extend(config, bestMoment || tempConfig);
            }

            function configFromObject(config) {
              if (config._d) {
                return;
              }

              var i = normalizeObjectUnits(config._i);
              config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
                return obj && parseInt(obj, 10);
              });

              configFromArray(config);
            }

            function createFromConfig(config) {
              var res = new Moment(checkOverflow(prepareConfig(config)));
              if (res._nextDay) {
                // Adding is smart enough around DST
                res.add(1, 'd');
                res._nextDay = undefined;
              }

              return res;
            }

            function prepareConfig(config) {
              var input = config._i,
                format = config._f;

              config._locale = config._locale || getLocale(config._l);

              if (input === null || (format === undefined && input === '')) {
                return createInvalid({
                  nullInput: true
                });
              }

              if (typeof input === 'string') {
                config._i = input = config._locale.preparse(input);
              }

              if (isMoment(input)) {
                return new Moment(checkOverflow(input));
              } else if (isDate(input)) {
                config._d = input;
              } else if (isArray(format)) {
                configFromStringAndArray(config);
              } else if (format) {
                configFromStringAndFormat(config);
              } else {
                configFromInput(config);
              }

              if (!isValid(config)) {
                config._d = null;
              }

              return config;
            }

            function configFromInput(config) {
              var input = config._i;
              if (isUndefined(input)) {
                config._d = new Date(hooks.now());
              } else if (isDate(input)) {
                config._d = new Date(input.valueOf());
              } else if (typeof input === 'string') {
                configFromString(config);
              } else if (isArray(input)) {
                config._a = map(input.slice(0), function (obj) {
                  return parseInt(obj, 10);
                });
                configFromArray(config);
              } else if (isObject(input)) {
                configFromObject(config);
              } else if (isNumber(input)) {
                // from milliseconds
                config._d = new Date(input);
              } else {
                hooks.createFromInputFallback(config);
              }
            }

            function createLocalOrUTC(input, format, locale, strict, isUTC) {
              var c = {};

              if (locale === true || locale === false) {
                strict = locale;
                locale = undefined;
              }

              if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
                input = undefined;
              }
              // object construction must be done this way.
              // https://github.com/moment/moment/issues/1423
              c._isAMomentObject = true;
              c._useUTC = c._isUTC = isUTC;
              c._l = locale;
              c._i = input;
              c._f = format;
              c._strict = strict;

              return createFromConfig(c);
            }

            function createLocal(input, format, locale, strict) {
              return createLocalOrUTC(input, format, locale, strict, false);
            }

            var prototypeMin = deprecate(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                  return other < this ? this : other;
                } else {
                  return createInvalid();
                }
              }
            );

            var prototypeMax = deprecate(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                  return other > this ? this : other;
                } else {
                  return createInvalid();
                }
              }
            );

            // Pick a moment m from moments so that m[fn](other) is true for all
            // other. This relies on the function fn to be transitive.
            //
            // moments should either be an array of moment objects or an array, whose
            // first element is an array of moment objects.
            function pickBy(fn, moments) {
              var res, i;
              if (moments.length === 1 && isArray(moments[0])) {
                moments = moments[0];
              }
              if (!moments.length) {
                return createLocal();
              }
              res = moments[0];
              for (i = 1; i < moments.length; ++i) {
                if (!moments[i].isValid() || moments[i][fn](res)) {
                  res = moments[i];
                }
              }
              return res;
            }

            // TODO: Use [].sort instead?
            function min() {
              var args = [].slice.call(arguments, 0);

              return pickBy('isBefore', args);
            }

            function max() {
              var args = [].slice.call(arguments, 0);

              return pickBy('isAfter', args);
            }

            var now = function () {
              return Date.now ? Date.now() : +(new Date());
            };

            var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

            function isDurationValid(m) {
              for (var key in m) {
                if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                  return false;
                }
              }

              var unitHasDecimal = false;
              for (var i = 0; i < ordering.length; ++i) {
                if (m[ordering[i]]) {
                  if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                  }
                  if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                  }
                }
              }

              return true;
            }

            function isValid$1() {
              return this._isValid;
            }

            function createInvalid$1() {
              return createDuration(NaN);
            }

            function Duration(duration) {
              var normalizedInput = normalizeObjectUnits(duration),
                years = normalizedInput.year || 0,
                quarters = normalizedInput.quarter || 0,
                months = normalizedInput.month || 0,
                weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
                days = normalizedInput.day || 0,
                hours = normalizedInput.hour || 0,
                minutes = normalizedInput.minute || 0,
                seconds = normalizedInput.second || 0,
                milliseconds = normalizedInput.millisecond || 0;

              this._isValid = isDurationValid(normalizedInput);

              // representation for dateAddRemove
              this._milliseconds = +milliseconds +
                seconds * 1e3 + // 1000
                minutes * 6e4 + // 1000 * 60
                hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
              // Because of dateAddRemove treats 24 hours as different from a
              // day when working around DST, we need to store them separately
              this._days = +days +
                weeks * 7;
              // It is impossible to translate months into days without knowing
              // which months you are are talking about, so we have to store
              // it separately.
              this._months = +months +
                quarters * 3 +
                years * 12;

              this._data = {};

              this._locale = getLocale();

              this._bubble();
            }

            function isDuration(obj) {
              return obj instanceof Duration;
            }

            function absRound(number) {
              if (number < 0) {
                return Math.round(-1 * number) * -1;
              } else {
                return Math.round(number);
              }
            }

            // FORMATTING

            function offset(token, separator) {
              addFormatToken(token, 0, 0, function () {
                var offset = this.utcOffset();
                var sign = '+';
                if (offset < 0) {
                  offset = -offset;
                  sign = '-';
                }
                return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
              });
            }

            offset('Z', ':');
            offset('ZZ', '');

            // PARSING

            addRegexToken('Z', matchShortOffset);
            addRegexToken('ZZ', matchShortOffset);
            addParseToken(['Z', 'ZZ'], function (input, array, config) {
              config._useUTC = true;
              config._tzm = offsetFromString(matchShortOffset, input);
            });

            // HELPERS

            // timezone chunker
            // '+10:00' > ['10',  '00']
            // '-1530'  > ['-15', '30']
            var chunkOffset = /([\+\-]|\d\d)/gi;

            function offsetFromString(matcher, string) {
              var matches = (string || '').match(matcher);

              if (matches === null) {
                return null;
              }

              var chunk = matches[matches.length - 1] || [];
              var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
              var minutes = +(parts[1] * 60) + toInt(parts[2]);

              return minutes === 0 ?
                0 :
                parts[0] === '+' ? minutes : -minutes;
            }

            // Return a moment from input, that is local/utc/zone equivalent to model.
            function cloneWithOffset(input, model) {
              var res, diff;
              if (model._isUTC) {
                res = model.clone();
                diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
                // Use low-level api, because this fn is low-level api.
                res._d.setTime(res._d.valueOf() + diff);
                hooks.updateOffset(res, false);
                return res;
              } else {
                return createLocal(input).local();
              }
            }

            function getDateOffset(m) {
              // On Firefox.24 Date#getTimezoneOffset returns a floating point.
              // https://github.com/moment/moment/pull/1871
              return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
            }

            // HOOKS

            // This function will be called whenever a moment is mutated.
            // It is intended to keep the offset in sync with the timezone.
            hooks.updateOffset = function () {};

            // MOMENTS

            // keepLocalTime = true means only change the timezone, without
            // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
            // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
            // +0200, so we adjust the time as needed, to be valid.
            //
            // Keeping the time actually adds/subtracts (one hour)
            // from the actual represented time. That is why we call updateOffset
            // a second time. In case it wants us to change the offset again
            // _changeInProgress == true case, then we have to adjust, because
            // there is no such time in the given timezone.
            function getSetOffset(input, keepLocalTime, keepMinutes) {
              var offset = this._offset || 0,
                localAdjust;
              if (!this.isValid()) {
                return input != null ? this : NaN;
              }
              if (input != null) {
                if (typeof input === 'string') {
                  input = offsetFromString(matchShortOffset, input);
                  if (input === null) {
                    return this;
                  }
                } else if (Math.abs(input) < 16 && !keepMinutes) {
                  input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                  localAdjust = getDateOffset(this);
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                  this.add(localAdjust, 'm');
                }
                if (offset !== input) {
                  if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                  } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                  }
                }
                return this;
              } else {
                return this._isUTC ? offset : getDateOffset(this);
              }
            }

            function getSetZone(input, keepLocalTime) {
              if (input != null) {
                if (typeof input !== 'string') {
                  input = -input;
                }

                this.utcOffset(input, keepLocalTime);

                return this;
              } else {
                return -this.utcOffset();
              }
            }

            function setOffsetToUTC(keepLocalTime) {
              return this.utcOffset(0, keepLocalTime);
            }

            function setOffsetToLocal(keepLocalTime) {
              if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                  this.subtract(getDateOffset(this), 'm');
                }
              }
              return this;
            }

            function setOffsetToParsedOffset() {
              if (this._tzm != null) {
                this.utcOffset(this._tzm, false, true);
              } else if (typeof this._i === 'string') {
                var tZone = offsetFromString(matchOffset, this._i);
                if (tZone != null) {
                  this.utcOffset(tZone);
                } else {
                  this.utcOffset(0, true);
                }
              }
              return this;
            }

            function hasAlignedHourOffset(input) {
              if (!this.isValid()) {
                return false;
              }
              input = input ? createLocal(input).utcOffset() : 0;

              return (this.utcOffset() - input) % 60 === 0;
            }

            function isDaylightSavingTime() {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              );
            }

            function isDaylightSavingTimeShifted() {
              if (!isUndefined(this._isDSTShifted)) {
                return this._isDSTShifted;
              }

              var c = {};

              copyConfig(c, this);
              c = prepareConfig(c);

              if (c._a) {
                var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
                this._isDSTShifted = this.isValid() &&
                  compareArrays(c._a, other.toArray()) > 0;
              } else {
                this._isDSTShifted = false;
              }

              return this._isDSTShifted;
            }

            function isLocal() {
              return this.isValid() ? !this._isUTC : false;
            }

            function isUtcOffset() {
              return this.isValid() ? this._isUTC : false;
            }

            function isUtc() {
              return this.isValid() ? this._isUTC && this._offset === 0 : false;
            }

            // ASP.NET json date format regex
            var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

            // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
            // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
            // and further modified to allow for strings containing both week and day
            var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function createDuration(input, key) {
              var duration = input,
                // matching against regexp is expensive, do it on demand
                match = null,
                sign,
                ret,
                diffRes;

              if (isDuration(input)) {
                duration = {
                  ms: input._milliseconds,
                  d: input._days,
                  M: input._months
                };
              } else if (isNumber(input)) {
                duration = {};
                if (key) {
                  duration[key] = input;
                } else {
                  duration.milliseconds = input;
                }
              } else if (!!(match = aspNetRegex.exec(input))) {
                sign = (match[1] === '-') ? -1 : 1;
                duration = {
                  y: 0,
                  d: toInt(match[DATE]) * sign,
                  h: toInt(match[HOUR]) * sign,
                  m: toInt(match[MINUTE]) * sign,
                  s: toInt(match[SECOND]) * sign,
                  ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
                };
              } else if (!!(match = isoRegex.exec(input))) {
                sign = (match[1] === '-') ? -1 : 1;
                duration = {
                  y: parseIso(match[2], sign),
                  M: parseIso(match[3], sign),
                  w: parseIso(match[4], sign),
                  d: parseIso(match[5], sign),
                  h: parseIso(match[6], sign),
                  m: parseIso(match[7], sign),
                  s: parseIso(match[8], sign)
                };
              } else if (duration == null) { // checks for null or undefined
                duration = {};
              } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
                diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

                duration = {};
                duration.ms = diffRes.milliseconds;
                duration.M = diffRes.months;
              }

              ret = new Duration(duration);

              if (isDuration(input) && hasOwnProp(input, '_locale')) {
                ret._locale = input._locale;
              }

              return ret;
            }

            createDuration.fn = Duration.prototype;
            createDuration.invalid = createInvalid$1;

            function parseIso(inp, sign) {
              // We'd normally use ~~inp for this, but unfortunately it also
              // converts floats to ints.
              // inp may be undefined, so careful calling replace on it.
              var res = inp && parseFloat(inp.replace(',', '.'));
              // apply sign while we're at it
              return (isNaN(res) ? 0 : res) * sign;
            }

            function positiveMomentsDifference(base, other) {
              var res = {};

              res.months = other.month() - base.month() +
                (other.year() - base.year()) * 12;
              if (base.clone().add(res.months, 'M').isAfter(other)) {
                --res.months;
              }

              res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

              return res;
            }

            function momentsDifference(base, other) {
              var res;
              if (!(base.isValid() && other.isValid())) {
                return {
                  milliseconds: 0,
                  months: 0
                };
              }

              other = cloneWithOffset(other, base);
              if (base.isBefore(other)) {
                res = positiveMomentsDifference(base, other);
              } else {
                res = positiveMomentsDifference(other, base);
                res.milliseconds = -res.milliseconds;
                res.months = -res.months;
              }

              return res;
            }

            // TODO: remove 'name' arg after deprecation is removed
            function createAdder(direction, name) {
              return function (val, period) {
                var dur, tmp;
                //invert the arguments, but complain about it
                if (period !== null && !isNaN(+period)) {
                  deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                  tmp = val;
                  val = period;
                  period = tmp;
                }

                val = typeof val === 'string' ? +val : val;
                dur = createDuration(val, period);
                addSubtract(this, dur, direction);
                return this;
              };
            }

            function addSubtract(mom, duration, isAdding, updateOffset) {
              var milliseconds = duration._milliseconds,
                days = absRound(duration._days),
                months = absRound(duration._months);

              if (!mom.isValid()) {
                // No op
                return;
              }

              updateOffset = updateOffset == null ? true : updateOffset;

              if (months) {
                setMonth(mom, get(mom, 'Month') + months * isAdding);
              }
              if (days) {
                set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
              }
              if (milliseconds) {
                mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
              }
              if (updateOffset) {
                hooks.updateOffset(mom, days || months);
              }
            }

            var add = createAdder(1, 'add');
            var subtract = createAdder(-1, 'subtract');

            function getCalendarFormat(myMoment, now) {
              var diff = myMoment.diff(now, 'days', true);
              return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
            }

            function calendar$1(time, formats) {
              // We want to compare the start of today, vs this.
              // Getting start-of-today depends on whether we're local/utc/offset or not.
              var now = time || createLocal(),
                sod = cloneWithOffset(now, this).startOf('day'),
                format = hooks.calendarFormat(this, sod) || 'sameElse';

              var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

              return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
            }

            function clone() {
              return new Moment(this);
            }

            function isAfter(input, units) {
              var localInput = isMoment(input) ? input : createLocal(input);
              if (!(this.isValid() && localInput.isValid())) {
                return false;
              }
              units = normalizeUnits(units) || 'millisecond';
              if (units === 'millisecond') {
                return this.valueOf() > localInput.valueOf();
              } else {
                return localInput.valueOf() < this.clone().startOf(units).valueOf();
              }
            }

            function isBefore(input, units) {
              var localInput = isMoment(input) ? input : createLocal(input);
              if (!(this.isValid() && localInput.isValid())) {
                return false;
              }
              units = normalizeUnits(units) || 'millisecond';
              if (units === 'millisecond') {
                return this.valueOf() < localInput.valueOf();
              } else {
                return this.clone().endOf(units).valueOf() < localInput.valueOf();
              }
            }

            function isBetween(from, to, units, inclusivity) {
              var localFrom = isMoment(from) ? from : createLocal(from),
                localTo = isMoment(to) ? to : createLocal(to);
              if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
                return false;
              }
              inclusivity = inclusivity || '()';
              return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
                (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
            }

            function isSame(input, units) {
              var localInput = isMoment(input) ? input : createLocal(input),
                inputMs;
              if (!(this.isValid() && localInput.isValid())) {
                return false;
              }
              units = normalizeUnits(units) || 'millisecond';
              if (units === 'millisecond') {
                return this.valueOf() === localInput.valueOf();
              } else {
                inputMs = localInput.valueOf();
                return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
              }
            }

            function isSameOrAfter(input, units) {
              return this.isSame(input, units) || this.isAfter(input, units);
            }

            function isSameOrBefore(input, units) {
              return this.isSame(input, units) || this.isBefore(input, units);
            }

            function diff(input, units, asFloat) {
              var that,
                zoneDelta,
                output;

              if (!this.isValid()) {
                return NaN;
              }

              that = cloneWithOffset(input, this);

              if (!that.isValid()) {
                return NaN;
              }

              zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

              units = normalizeUnits(units);

              switch (units) {
                case 'year':
                  output = monthDiff(this, that) / 12;
                  break;
                case 'month':
                  output = monthDiff(this, that);
                  break;
                case 'quarter':
                  output = monthDiff(this, that) / 3;
                  break;
                case 'second':
                  output = (this - that) / 1e3;
                  break; // 1000
                case 'minute':
                  output = (this - that) / 6e4;
                  break; // 1000 * 60
                case 'hour':
                  output = (this - that) / 36e5;
                  break; // 1000 * 60 * 60
                case 'day':
                  output = (this - that - zoneDelta) / 864e5;
                  break; // 1000 * 60 * 60 * 24, negate dst
                case 'week':
                  output = (this - that - zoneDelta) / 6048e5;
                  break; // 1000 * 60 * 60 * 24 * 7, negate dst
                default:
                  output = this - that;
              }

              return asFloat ? output : absFloor(output);
            }

            function monthDiff(a, b) {
              // difference in months
              var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
                // b is in (anchor - 1 month, anchor + 1 month)
                anchor = a.clone().add(wholeMonthDiff, 'months'),
                anchor2, adjust;

              if (b - anchor < 0) {
                anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
                // linear across the month
                adjust = (b - anchor) / (anchor - anchor2);
              } else {
                anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
                // linear across the month
                adjust = (b - anchor) / (anchor2 - anchor);
              }

              //check for negative zero, return zero if negative zero
              return -(wholeMonthDiff + adjust) || 0;
            }

            hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
            hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

            function toString() {
              return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
            }

            function toISOString(keepOffset) {
              if (!this.isValid()) {
                return null;
              }
              var utc = keepOffset !== true;
              var m = utc ? this.clone().utc() : this;
              if (m.year() < 0 || m.year() > 9999) {
                return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
              }
              if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                if (utc) {
                  return this.toDate().toISOString();
                } else {
                  return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
                }
              }
              return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
            }

            /**
             * Return a human readable representation of a moment that can
             * also be evaluated to get a new moment which is the same
             *
             * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
             */
            function inspect() {
              if (!this.isValid()) {
                return 'moment.invalid(/* ' + this._i + ' */)';
              }
              var func = 'moment';
              var zone = '';
              if (!this.isLocal()) {
                func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
                zone = 'Z';
              }
              var prefix = '[' + func + '("]';
              var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
              var datetime = '-MM-DD[T]HH:mm:ss.SSS';
              var suffix = zone + '[")]';

              return this.format(prefix + year + datetime + suffix);
            }

            function format(inputString) {
              if (!inputString) {
                inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
              }
              var output = formatMoment(this, inputString);
              return this.localeData().postformat(output);
            }

            function from(time, withoutSuffix) {
              if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                  createLocal(time).isValid())) {
                return createDuration({
                  to: this,
                  from: time
                }).locale(this.locale()).humanize(!withoutSuffix);
              } else {
                return this.localeData().invalidDate();
              }
            }

            function fromNow(withoutSuffix) {
              return this.from(createLocal(), withoutSuffix);
            }

            function to(time, withoutSuffix) {
              if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                  createLocal(time).isValid())) {
                return createDuration({
                  from: this,
                  to: time
                }).locale(this.locale()).humanize(!withoutSuffix);
              } else {
                return this.localeData().invalidDate();
              }
            }

            function toNow(withoutSuffix) {
              return this.to(createLocal(), withoutSuffix);
            }

            // If passed a locale key, it will set the locale for this
            // instance.  Otherwise, it will return the locale configuration
            // variables for this instance.
            function locale(key) {
              var newLocaleData;

              if (key === undefined) {
                return this._locale._abbr;
              } else {
                newLocaleData = getLocale(key);
                if (newLocaleData != null) {
                  this._locale = newLocaleData;
                }
                return this;
              }
            }

            var lang = deprecate(
              'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
              function (key) {
                if (key === undefined) {
                  return this.localeData();
                } else {
                  return this.locale(key);
                }
              }
            );

            function localeData() {
              return this._locale;
            }

            var MS_PER_SECOND = 1000;
            var MS_PER_MINUTE = 60 * MS_PER_SECOND;
            var MS_PER_HOUR = 60 * MS_PER_MINUTE;
            var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

            // actual modulo - handles negative numbers (for dates before 1970):
            function mod$1(dividend, divisor) {
              return (dividend % divisor + divisor) % divisor;
            }

            function localStartOfDate(y, m, d) {
              // the date constructor remaps years 0-99 to 1900-1999
              if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                return new Date(y + 400, m, d) - MS_PER_400_YEARS;
              } else {
                return new Date(y, m, d).valueOf();
              }
            }

            function utcStartOfDate(y, m, d) {
              // Date.UTC remaps years 0-99 to 1900-1999
              if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
              } else {
                return Date.UTC(y, m, d);
              }
            }

            function startOf(units) {
              var time;
              units = normalizeUnits(units);
              if (units === undefined || units === 'millisecond' || !this.isValid()) {
                return this;
              }

              var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

              switch (units) {
                case 'year':
                  time = startOfDate(this.year(), 0, 1);
                  break;
                case 'quarter':
                  time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                  break;
                case 'month':
                  time = startOfDate(this.year(), this.month(), 1);
                  break;
                case 'week':
                  time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                  break;
                case 'isoWeek':
                  time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                  break;
                case 'day':
                case 'date':
                  time = startOfDate(this.year(), this.month(), this.date());
                  break;
                case 'hour':
                  time = this._d.valueOf();
                  time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                  break;
                case 'minute':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_MINUTE);
                  break;
                case 'second':
                  time = this._d.valueOf();
                  time -= mod$1(time, MS_PER_SECOND);
                  break;
              }

              this._d.setTime(time);
              hooks.updateOffset(this, true);
              return this;
            }

            function endOf(units) {
              var time;
              units = normalizeUnits(units);
              if (units === undefined || units === 'millisecond' || !this.isValid()) {
                return this;
              }

              var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

              switch (units) {
                case 'year':
                  time = startOfDate(this.year() + 1, 0, 1) - 1;
                  break;
                case 'quarter':
                  time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                  break;
                case 'month':
                  time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                  break;
                case 'week':
                  time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                  break;
                case 'isoWeek':
                  time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                  break;
                case 'day':
                case 'date':
                  time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case 'hour':
                  time = this._d.valueOf();
                  time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                  break;
                case 'minute':
                  time = this._d.valueOf();
                  time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                  break;
                case 'second':
                  time = this._d.valueOf();
                  time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                  break;
              }

              this._d.setTime(time);
              hooks.updateOffset(this, true);
              return this;
            }

            function valueOf() {
              return this._d.valueOf() - ((this._offset || 0) * 60000);
            }

            function unix() {
              return Math.floor(this.valueOf() / 1000);
            }

            function toDate() {
              return new Date(this.valueOf());
            }

            function toArray() {
              var m = this;
              return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
            }

            function toObject() {
              var m = this;
              return {
                years: m.year(),
                months: m.month(),
                date: m.date(),
                hours: m.hours(),
                minutes: m.minutes(),
                seconds: m.seconds(),
                milliseconds: m.milliseconds()
              };
            }

            function toJSON() {
              // new Date(NaN).toJSON() === null
              return this.isValid() ? this.toISOString() : null;
            }

            function isValid$2() {
              return isValid(this);
            }

            function parsingFlags() {
              return extend({}, getParsingFlags(this));
            }

            function invalidAt() {
              return getParsingFlags(this).overflow;
            }

            function creationData() {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
              };
            }

            // FORMATTING

            addFormatToken(0, ['gg', 2], 0, function () {
              return this.weekYear() % 100;
            });

            addFormatToken(0, ['GG', 2], 0, function () {
              return this.isoWeekYear() % 100;
            });

            function addWeekYearFormatToken(token, getter) {
              addFormatToken(0, [token, token.length], 0, getter);
            }

            addWeekYearFormatToken('gggg', 'weekYear');
            addWeekYearFormatToken('ggggg', 'weekYear');
            addWeekYearFormatToken('GGGG', 'isoWeekYear');
            addWeekYearFormatToken('GGGGG', 'isoWeekYear');

            // ALIASES

            addUnitAlias('weekYear', 'gg');
            addUnitAlias('isoWeekYear', 'GG');

            // PRIORITY

            addUnitPriority('weekYear', 1);
            addUnitPriority('isoWeekYear', 1);


            // PARSING

            addRegexToken('G', matchSigned);
            addRegexToken('g', matchSigned);
            addRegexToken('GG', match1to2, match2);
            addRegexToken('gg', match1to2, match2);
            addRegexToken('GGGG', match1to4, match4);
            addRegexToken('gggg', match1to4, match4);
            addRegexToken('GGGGG', match1to6, match6);
            addRegexToken('ggggg', match1to6, match6);

            addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
              week[token.substr(0, 2)] = toInt(input);
            });

            addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
              week[token] = hooks.parseTwoDigitYear(input);
            });

            // MOMENTS

            function getSetWeekYear(input) {
              return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
            }

            function getSetISOWeekYear(input) {
              return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
            }

            function getISOWeeksInYear() {
              return weeksInYear(this.year(), 1, 4);
            }

            function getWeeksInYear() {
              var weekInfo = this.localeData()._week;
              return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
            }

            function getSetWeekYearHelper(input, week, weekday, dow, doy) {
              var weeksTarget;
              if (input == null) {
                return weekOfYear(this, dow, doy).year;
              } else {
                weeksTarget = weeksInYear(input, dow, doy);
                if (week > weeksTarget) {
                  week = weeksTarget;
                }
                return setWeekAll.call(this, input, week, weekday, dow, doy);
              }
            }

            function setWeekAll(weekYear, week, weekday, dow, doy) {
              var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
                date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

              this.year(date.getUTCFullYear());
              this.month(date.getUTCMonth());
              this.date(date.getUTCDate());
              return this;
            }

            // FORMATTING

            addFormatToken('Q', 0, 'Qo', 'quarter');

            // ALIASES

            addUnitAlias('quarter', 'Q');

            // PRIORITY

            addUnitPriority('quarter', 7);

            // PARSING

            addRegexToken('Q', match1);
            addParseToken('Q', function (input, array) {
              array[MONTH] = (toInt(input) - 1) * 3;
            });

            // MOMENTS

            function getSetQuarter(input) {
              return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
            }

            // FORMATTING

            addFormatToken('D', ['DD', 2], 'Do', 'date');

            // ALIASES

            addUnitAlias('date', 'D');

            // PRIORITY
            addUnitPriority('date', 9);

            // PARSING

            addRegexToken('D', match1to2);
            addRegexToken('DD', match1to2, match2);
            addRegexToken('Do', function (isStrict, locale) {
              // TODO: Remove "ordinalParse" fallback in next major release.
              return isStrict ?
                (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
                locale._dayOfMonthOrdinalParseLenient;
            });

            addParseToken(['D', 'DD'], DATE);
            addParseToken('Do', function (input, array) {
              array[DATE] = toInt(input.match(match1to2)[0]);
            });

            // MOMENTS

            var getSetDayOfMonth = makeGetSet('Date', true);

            // FORMATTING

            addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

            // ALIASES

            addUnitAlias('dayOfYear', 'DDD');

            // PRIORITY
            addUnitPriority('dayOfYear', 4);

            // PARSING

            addRegexToken('DDD', match1to3);
            addRegexToken('DDDD', match3);
            addParseToken(['DDD', 'DDDD'], function (input, array, config) {
              config._dayOfYear = toInt(input);
            });

            // HELPERS

            // MOMENTS

            function getSetDayOfYear(input) {
              var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
              return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
            }

            // FORMATTING

            addFormatToken('m', ['mm', 2], 0, 'minute');

            // ALIASES

            addUnitAlias('minute', 'm');

            // PRIORITY

            addUnitPriority('minute', 14);

            // PARSING

            addRegexToken('m', match1to2);
            addRegexToken('mm', match1to2, match2);
            addParseToken(['m', 'mm'], MINUTE);

            // MOMENTS

            var getSetMinute = makeGetSet('Minutes', false);

            // FORMATTING

            addFormatToken('s', ['ss', 2], 0, 'second');

            // ALIASES

            addUnitAlias('second', 's');

            // PRIORITY

            addUnitPriority('second', 15);

            // PARSING

            addRegexToken('s', match1to2);
            addRegexToken('ss', match1to2, match2);
            addParseToken(['s', 'ss'], SECOND);

            // MOMENTS

            var getSetSecond = makeGetSet('Seconds', false);

            // FORMATTING

            addFormatToken('S', 0, 0, function () {
              return ~~(this.millisecond() / 100);
            });

            addFormatToken(0, ['SS', 2], 0, function () {
              return ~~(this.millisecond() / 10);
            });

            addFormatToken(0, ['SSS', 3], 0, 'millisecond');
            addFormatToken(0, ['SSSS', 4], 0, function () {
              return this.millisecond() * 10;
            });
            addFormatToken(0, ['SSSSS', 5], 0, function () {
              return this.millisecond() * 100;
            });
            addFormatToken(0, ['SSSSSS', 6], 0, function () {
              return this.millisecond() * 1000;
            });
            addFormatToken(0, ['SSSSSSS', 7], 0, function () {
              return this.millisecond() * 10000;
            });
            addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
              return this.millisecond() * 100000;
            });
            addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
              return this.millisecond() * 1000000;
            });


            // ALIASES

            addUnitAlias('millisecond', 'ms');

            // PRIORITY

            addUnitPriority('millisecond', 16);

            // PARSING

            addRegexToken('S', match1to3, match1);
            addRegexToken('SS', match1to3, match2);
            addRegexToken('SSS', match1to3, match3);

            var token;
            for (token = 'SSSS'; token.length <= 9; token += 'S') {
              addRegexToken(token, matchUnsigned);
            }

            function parseMs(input, array) {
              array[MILLISECOND] = toInt(('0.' + input) * 1000);
            }

            for (token = 'S'; token.length <= 9; token += 'S') {
              addParseToken(token, parseMs);
            }
            // MOMENTS

            var getSetMillisecond = makeGetSet('Milliseconds', false);

            // FORMATTING

            addFormatToken('z', 0, 0, 'zoneAbbr');
            addFormatToken('zz', 0, 0, 'zoneName');

            // MOMENTS

            function getZoneAbbr() {
              return this._isUTC ? 'UTC' : '';
            }

            function getZoneName() {
              return this._isUTC ? 'Coordinated Universal Time' : '';
            }

            var proto = Moment.prototype;

            proto.add = add;
            proto.calendar = calendar$1;
            proto.clone = clone;
            proto.diff = diff;
            proto.endOf = endOf;
            proto.format = format;
            proto.from = from;
            proto.fromNow = fromNow;
            proto.to = to;
            proto.toNow = toNow;
            proto.get = stringGet;
            proto.invalidAt = invalidAt;
            proto.isAfter = isAfter;
            proto.isBefore = isBefore;
            proto.isBetween = isBetween;
            proto.isSame = isSame;
            proto.isSameOrAfter = isSameOrAfter;
            proto.isSameOrBefore = isSameOrBefore;
            proto.isValid = isValid$2;
            proto.lang = lang;
            proto.locale = locale;
            proto.localeData = localeData;
            proto.max = prototypeMax;
            proto.min = prototypeMin;
            proto.parsingFlags = parsingFlags;
            proto.set = stringSet;
            proto.startOf = startOf;
            proto.subtract = subtract;
            proto.toArray = toArray;
            proto.toObject = toObject;
            proto.toDate = toDate;
            proto.toISOString = toISOString;
            proto.inspect = inspect;
            proto.toJSON = toJSON;
            proto.toString = toString;
            proto.unix = unix;
            proto.valueOf = valueOf;
            proto.creationData = creationData;
            proto.year = getSetYear;
            proto.isLeapYear = getIsLeapYear;
            proto.weekYear = getSetWeekYear;
            proto.isoWeekYear = getSetISOWeekYear;
            proto.quarter = proto.quarters = getSetQuarter;
            proto.month = getSetMonth;
            proto.daysInMonth = getDaysInMonth;
            proto.week = proto.weeks = getSetWeek;
            proto.isoWeek = proto.isoWeeks = getSetISOWeek;
            proto.weeksInYear = getWeeksInYear;
            proto.isoWeeksInYear = getISOWeeksInYear;
            proto.date = getSetDayOfMonth;
            proto.day = proto.days = getSetDayOfWeek;
            proto.weekday = getSetLocaleDayOfWeek;
            proto.isoWeekday = getSetISODayOfWeek;
            proto.dayOfYear = getSetDayOfYear;
            proto.hour = proto.hours = getSetHour;
            proto.minute = proto.minutes = getSetMinute;
            proto.second = proto.seconds = getSetSecond;
            proto.millisecond = proto.milliseconds = getSetMillisecond;
            proto.utcOffset = getSetOffset;
            proto.utc = setOffsetToUTC;
            proto.local = setOffsetToLocal;
            proto.parseZone = setOffsetToParsedOffset;
            proto.hasAlignedHourOffset = hasAlignedHourOffset;
            proto.isDST = isDaylightSavingTime;
            proto.isLocal = isLocal;
            proto.isUtcOffset = isUtcOffset;
            proto.isUtc = isUtc;
            proto.isUTC = isUtc;
            proto.zoneAbbr = getZoneAbbr;
            proto.zoneName = getZoneName;
            proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
            proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
            proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
            proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
            proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

            function createUnix(input) {
              return createLocal(input * 1000);
            }

            function createInZone() {
              return createLocal.apply(null, arguments).parseZone();
            }

            function preParsePostFormat(string) {
              return string;
            }

            var proto$1 = Locale.prototype;

            proto$1.calendar = calendar;
            proto$1.longDateFormat = longDateFormat;
            proto$1.invalidDate = invalidDate;
            proto$1.ordinal = ordinal;
            proto$1.preparse = preParsePostFormat;
            proto$1.postformat = preParsePostFormat;
            proto$1.relativeTime = relativeTime;
            proto$1.pastFuture = pastFuture;
            proto$1.set = set;

            proto$1.months = localeMonths;
            proto$1.monthsShort = localeMonthsShort;
            proto$1.monthsParse = localeMonthsParse;
            proto$1.monthsRegex = monthsRegex;
            proto$1.monthsShortRegex = monthsShortRegex;
            proto$1.week = localeWeek;
            proto$1.firstDayOfYear = localeFirstDayOfYear;
            proto$1.firstDayOfWeek = localeFirstDayOfWeek;

            proto$1.weekdays = localeWeekdays;
            proto$1.weekdaysMin = localeWeekdaysMin;
            proto$1.weekdaysShort = localeWeekdaysShort;
            proto$1.weekdaysParse = localeWeekdaysParse;

            proto$1.weekdaysRegex = weekdaysRegex;
            proto$1.weekdaysShortRegex = weekdaysShortRegex;
            proto$1.weekdaysMinRegex = weekdaysMinRegex;

            proto$1.isPM = localeIsPM;
            proto$1.meridiem = localeMeridiem;

            function get$1(format, index, field, setter) {
              var locale = getLocale();
              var utc = createUTC().set(setter, index);
              return locale[field](utc, format);
            }

            function listMonthsImpl(format, index, field) {
              if (isNumber(format)) {
                index = format;
                format = undefined;
              }

              format = format || '';

              if (index != null) {
                return get$1(format, index, field, 'month');
              }

              var i;
              var out = [];
              for (i = 0; i < 12; i++) {
                out[i] = get$1(format, i, field, 'month');
              }
              return out;
            }

            // ()
            // (5)
            // (fmt, 5)
            // (fmt)
            // (true)
            // (true, 5)
            // (true, fmt, 5)
            // (true, fmt)
            function listWeekdaysImpl(localeSorted, format, index, field) {
              if (typeof localeSorted === 'boolean') {
                if (isNumber(format)) {
                  index = format;
                  format = undefined;
                }

                format = format || '';
              } else {
                format = localeSorted;
                index = format;
                localeSorted = false;

                if (isNumber(format)) {
                  index = format;
                  format = undefined;
                }

                format = format || '';
              }

              var locale = getLocale(),
                shift = localeSorted ? locale._week.dow : 0;

              if (index != null) {
                return get$1(format, (index + shift) % 7, field, 'day');
              }

              var i;
              var out = [];
              for (i = 0; i < 7; i++) {
                out[i] = get$1(format, (i + shift) % 7, field, 'day');
              }
              return out;
            }

            function listMonths(format, index) {
              return listMonthsImpl(format, index, 'months');
            }

            function listMonthsShort(format, index) {
              return listMonthsImpl(format, index, 'monthsShort');
            }

            function listWeekdays(localeSorted, format, index) {
              return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
            }

            function listWeekdaysShort(localeSorted, format, index) {
              return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
            }

            function listWeekdaysMin(localeSorted, format, index) {
              return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
            }

            getSetGlobalLocale('en', {
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (number) {
                var b = number % 10,
                  output = (toInt(number % 100 / 10) === 1) ? 'th' :
                  (b === 1) ? 'st' :
                  (b === 2) ? 'nd' :
                  (b === 3) ? 'rd' : 'th';
                return number + output;
              }
            });

            // Side effect imports

            hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
            hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

            var mathAbs = Math.abs;

            function abs() {
              var data = this._data;

              this._milliseconds = mathAbs(this._milliseconds);
              this._days = mathAbs(this._days);
              this._months = mathAbs(this._months);

              data.milliseconds = mathAbs(data.milliseconds);
              data.seconds = mathAbs(data.seconds);
              data.minutes = mathAbs(data.minutes);
              data.hours = mathAbs(data.hours);
              data.months = mathAbs(data.months);
              data.years = mathAbs(data.years);

              return this;
            }

            function addSubtract$1(duration, input, value, direction) {
              var other = createDuration(input, value);

              duration._milliseconds += direction * other._milliseconds;
              duration._days += direction * other._days;
              duration._months += direction * other._months;

              return duration._bubble();
            }

            // supports only 2.0-style add(1, 's') or add(duration)
            function add$1(input, value) {
              return addSubtract$1(this, input, value, 1);
            }

            // supports only 2.0-style subtract(1, 's') or subtract(duration)
            function subtract$1(input, value) {
              return addSubtract$1(this, input, value, -1);
            }

            function absCeil(number) {
              if (number < 0) {
                return Math.floor(number);
              } else {
                return Math.ceil(number);
              }
            }

            function bubble() {
              var milliseconds = this._milliseconds;
              var days = this._days;
              var months = this._months;
              var data = this._data;
              var seconds, minutes, hours, years, monthsFromDays;

              // if we have a mix of positive and negative values, bubble down first
              // check: https://github.com/moment/moment/issues/2166
              if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                  (milliseconds <= 0 && days <= 0 && months <= 0))) {
                milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
                days = 0;
                months = 0;
              }

              // The following code bubbles up values, see the tests for
              // examples of what that means.
              data.milliseconds = milliseconds % 1000;

              seconds = absFloor(milliseconds / 1000);
              data.seconds = seconds % 60;

              minutes = absFloor(seconds / 60);
              data.minutes = minutes % 60;

              hours = absFloor(minutes / 60);
              data.hours = hours % 24;

              days += absFloor(hours / 24);

              // convert days to months
              monthsFromDays = absFloor(daysToMonths(days));
              months += monthsFromDays;
              days -= absCeil(monthsToDays(monthsFromDays));

              // 12 months -> 1 year
              years = absFloor(months / 12);
              months %= 12;

              data.days = days;
              data.months = months;
              data.years = years;

              return this;
            }

            function daysToMonths(days) {
              // 400 years have 146097 days (taking into account leap year rules)
              // 400 years have 12 months === 4800
              return days * 4800 / 146097;
            }

            function monthsToDays(months) {
              // the reverse of daysToMonths
              return months * 146097 / 4800;
            }

            function as(units) {
              if (!this.isValid()) {
                return NaN;
              }
              var days;
              var months;
              var milliseconds = this._milliseconds;

              units = normalizeUnits(units);

              if (units === 'month' || units === 'quarter' || units === 'year') {
                days = this._days + milliseconds / 864e5;
                months = this._months + daysToMonths(days);
                switch (units) {
                  case 'month':
                    return months;
                  case 'quarter':
                    return months / 3;
                  case 'year':
                    return months / 12;
                }
              } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(monthsToDays(this._months));
                switch (units) {
                  case 'week':
                    return days / 7 + milliseconds / 6048e5;
                  case 'day':
                    return days + milliseconds / 864e5;
                  case 'hour':
                    return days * 24 + milliseconds / 36e5;
                  case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                  case 'second':
                    return days * 86400 + milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                  case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                  default:
                    throw new Error('Unknown unit ' + units);
                }
              }
            }

            // TODO: Use this.as('ms')?
            function valueOf$1() {
              if (!this.isValid()) {
                return NaN;
              }
              return (
                this._milliseconds +
                this._days * 864e5 +
                (this._months % 12) * 2592e6 +
                toInt(this._months / 12) * 31536e6
              );
            }

            function makeAs(alias) {
              return function () {
                return this.as(alias);
              };
            }

            var asMilliseconds = makeAs('ms');
            var asSeconds = makeAs('s');
            var asMinutes = makeAs('m');
            var asHours = makeAs('h');
            var asDays = makeAs('d');
            var asWeeks = makeAs('w');
            var asMonths = makeAs('M');
            var asQuarters = makeAs('Q');
            var asYears = makeAs('y');

            function clone$1() {
              return createDuration(this);
            }

            function get$2(units) {
              units = normalizeUnits(units);
              return this.isValid() ? this[units + 's']() : NaN;
            }

            function makeGetter(name) {
              return function () {
                return this.isValid() ? this._data[name] : NaN;
              };
            }

            var milliseconds = makeGetter('milliseconds');
            var seconds = makeGetter('seconds');
            var minutes = makeGetter('minutes');
            var hours = makeGetter('hours');
            var days = makeGetter('days');
            var months = makeGetter('months');
            var years = makeGetter('years');

            function weeks() {
              return absFloor(this.days() / 7);
            }

            var round = Math.round;
            var thresholds = {
              ss: 44, // a few seconds to seconds
              s: 45, // seconds to minute
              m: 45, // minutes to hour
              h: 22, // hours to day
              d: 26, // days to month
              M: 11 // months to year
            };

            // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
            function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
              return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
            }

            function relativeTime$1(posNegDuration, withoutSuffix, locale) {
              var duration = createDuration(posNegDuration).abs();
              var seconds = round(duration.as('s'));
              var minutes = round(duration.as('m'));
              var hours = round(duration.as('h'));
              var days = round(duration.as('d'));
              var months = round(duration.as('M'));
              var years = round(duration.as('y'));

              var a = seconds <= thresholds.ss && ['s', seconds] ||
                seconds < thresholds.s && ['ss', seconds] ||
                minutes <= 1 && ['m'] ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours <= 1 && ['h'] ||
                hours < thresholds.h && ['hh', hours] ||
                days <= 1 && ['d'] ||
                days < thresholds.d && ['dd', days] ||
                months <= 1 && ['M'] ||
                months < thresholds.M && ['MM', months] ||
                years <= 1 && ['y'] || ['yy', years];

              a[2] = withoutSuffix;
              a[3] = +posNegDuration > 0;
              a[4] = locale;
              return substituteTimeAgo.apply(null, a);
            }

            // This function allows you to set the rounding function for relative time strings
            function getSetRelativeTimeRounding(roundingFunction) {
              if (roundingFunction === undefined) {
                return round;
              }
              if (typeof (roundingFunction) === 'function') {
                round = roundingFunction;
                return true;
              }
              return false;
            }

            // This function allows you to set a threshold for relative time strings
            function getSetRelativeTimeThreshold(threshold, limit) {
              if (thresholds[threshold] === undefined) {
                return false;
              }
              if (limit === undefined) {
                return thresholds[threshold];
              }
              thresholds[threshold] = limit;
              if (threshold === 's') {
                thresholds.ss = limit - 1;
              }
              return true;
            }

            function humanize(withSuffix) {
              if (!this.isValid()) {
                return this.localeData().invalidDate();
              }

              var locale = this.localeData();
              var output = relativeTime$1(this, !withSuffix, locale);

              if (withSuffix) {
                output = locale.pastFuture(+this, output);
              }

              return locale.postformat(output);
            }

            var abs$1 = Math.abs;

            function sign(x) {
              return ((x > 0) - (x < 0)) || +x;
            }

            function toISOString$1() {
              // for ISO strings we do not use the normal bubbling rules:
              //  * milliseconds bubble up until they become hours
              //  * days do not bubble at all
              //  * months bubble up until they become years
              // This is because there is no context-free conversion between hours and days
              // (think of clock changes)
              // and also not between days and months (28-31 days per month)
              if (!this.isValid()) {
                return this.localeData().invalidDate();
              }

              var seconds = abs$1(this._milliseconds) / 1000;
              var days = abs$1(this._days);
              var months = abs$1(this._months);
              var minutes, hours, years;

              // 3600 seconds -> 60 minutes -> 1 hour
              minutes = absFloor(seconds / 60);
              hours = absFloor(minutes / 60);
              seconds %= 60;
              minutes %= 60;

              // 12 months -> 1 year
              years = absFloor(months / 12);
              months %= 12;


              // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
              var Y = years;
              var M = months;
              var D = days;
              var h = hours;
              var m = minutes;
              var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
              var total = this.asSeconds();

              if (!total) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
              }

              var totalSign = total < 0 ? '-' : '';
              var ymSign = sign(this._months) !== sign(total) ? '-' : '';
              var daysSign = sign(this._days) !== sign(total) ? '-' : '';
              var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

              return totalSign + 'P' +
                (Y ? ymSign + Y + 'Y' : '') +
                (M ? ymSign + M + 'M' : '') +
                (D ? daysSign + D + 'D' : '') +
                ((h || m || s) ? 'T' : '') +
                (h ? hmsSign + h + 'H' : '') +
                (m ? hmsSign + m + 'M' : '') +
                (s ? hmsSign + s + 'S' : '');
            }

            var proto$2 = Duration.prototype;

            proto$2.isValid = isValid$1;
            proto$2.abs = abs;
            proto$2.add = add$1;
            proto$2.subtract = subtract$1;
            proto$2.as = as;
            proto$2.asMilliseconds = asMilliseconds;
            proto$2.asSeconds = asSeconds;
            proto$2.asMinutes = asMinutes;
            proto$2.asHours = asHours;
            proto$2.asDays = asDays;
            proto$2.asWeeks = asWeeks;
            proto$2.asMonths = asMonths;
            proto$2.asQuarters = asQuarters;
            proto$2.asYears = asYears;
            proto$2.valueOf = valueOf$1;
            proto$2._bubble = bubble;
            proto$2.clone = clone$1;
            proto$2.get = get$2;
            proto$2.milliseconds = milliseconds;
            proto$2.seconds = seconds;
            proto$2.minutes = minutes;
            proto$2.hours = hours;
            proto$2.days = days;
            proto$2.weeks = weeks;
            proto$2.months = months;
            proto$2.years = years;
            proto$2.humanize = humanize;
            proto$2.toISOString = toISOString$1;
            proto$2.toString = toISOString$1;
            proto$2.toJSON = toISOString$1;
            proto$2.locale = locale;
            proto$2.localeData = localeData;

            proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
            proto$2.lang = lang;

            // Side effect imports

            // FORMATTING

            addFormatToken('X', 0, 0, 'unix');
            addFormatToken('x', 0, 0, 'valueOf');

            // PARSING

            addRegexToken('x', matchSigned);
            addRegexToken('X', matchTimestamp);
            addParseToken('X', function (input, array, config) {
              config._d = new Date(parseFloat(input, 10) * 1000);
            });
            addParseToken('x', function (input, array, config) {
              config._d = new Date(toInt(input));
            });

            // Side effect imports


            hooks.version = '2.24.0';

            setHookCallback(createLocal);

            hooks.fn = proto;
            hooks.min = min;
            hooks.max = max;
            hooks.now = now;
            hooks.utc = createUTC;
            hooks.unix = createUnix;
            hooks.months = listMonths;
            hooks.isDate = isDate;
            hooks.locale = getSetGlobalLocale;
            hooks.invalid = createInvalid;
            hooks.duration = createDuration;
            hooks.isMoment = isMoment;
            hooks.weekdays = listWeekdays;
            hooks.parseZone = createInZone;
            hooks.localeData = getLocale;
            hooks.isDuration = isDuration;
            hooks.monthsShort = listMonthsShort;
            hooks.weekdaysMin = listWeekdaysMin;
            hooks.defineLocale = defineLocale;
            hooks.updateLocale = updateLocale;
            hooks.locales = listLocales;
            hooks.weekdaysShort = listWeekdaysShort;
            hooks.normalizeUnits = normalizeUnits;
            hooks.relativeTimeRounding = getSetRelativeTimeRounding;
            hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
            hooks.calendarFormat = getCalendarFormat;
            hooks.prototype = proto;

            // currently HTML5 input type only supports 24-hour formats
            hooks.HTML5_FMT = {
              DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
              DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
              DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
              DATE: 'YYYY-MM-DD', // <input type="date" />
              TIME: 'HH:mm', // <input type="time" />
              TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
              TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
              WEEK: 'GGGG-[W]WW', // <input type="week" />
              MONTH: 'YYYY-MM' // <input type="month" />
            };

            return hooks;

          })));

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__( /*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

        /***/
      }),

    /***/
    "./node_modules/process/browser.js":
      /*!*****************************************!*\
        !*** ./node_modules/process/browser.js ***!
        \*****************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        // shim for using process in browser
        var process = module.exports = {};

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined');
        }
        (function () {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        }())

        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          }
          // if setTimeout wasn't available but was latter defined
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }


        }

        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          }
          // if clearTimeout wasn't available but was latter defined
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
            }
          }



        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }

        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;

          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }

        process.nextTick = function (fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };

        // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function () {
          this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function (name) {
          return []
        }

        process.binding = function (name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function () {
          return '/'
        };
        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function () {
          return 0;
        };


        /***/
      }),

    /***/
    "./node_modules/setimmediate/setImmediate.js":
      /*!***************************************************!*\
        !*** ./node_modules/setimmediate/setImmediate.js ***!
        \***************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function (global, process) {
          (function (global, undefined) {
            "use strict";

            if (global.setImmediate) {
              return;
            }

            var nextHandle = 1; // Spec says greater than zero
            var tasksByHandle = {};
            var currentlyRunningATask = false;
            var doc = global.document;
            var registerImmediate;

            function setImmediate(callback) {
              // Callback can either be a function or a string
              if (typeof callback !== "function") {
                callback = new Function("" + callback);
              }
              // Copy function arguments
              var args = new Array(arguments.length - 1);
              for (var i = 0; i < args.length; i++) {
                args[i] = arguments[i + 1];
              }
              // Store and register the task
              var task = {
                callback: callback,
                args: args
              };
              tasksByHandle[nextHandle] = task;
              registerImmediate(nextHandle);
              return nextHandle++;
            }

            function clearImmediate(handle) {
              delete tasksByHandle[handle];
            }

            function run(task) {
              var callback = task.callback;
              var args = task.args;
              switch (args.length) {
                case 0:
                  callback();
                  break;
                case 1:
                  callback(args[0]);
                  break;
                case 2:
                  callback(args[0], args[1]);
                  break;
                case 3:
                  callback(args[0], args[1], args[2]);
                  break;
                default:
                  callback.apply(undefined, args);
                  break;
              }
            }

            function runIfPresent(handle) {
              // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
              // So if we're currently running a task, we'll need to delay this invocation.
              if (currentlyRunningATask) {
                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(runIfPresent, 0, handle);
              } else {
                var task = tasksByHandle[handle];
                if (task) {
                  currentlyRunningATask = true;
                  try {
                    run(task);
                  } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                  }
                }
              }
            }

            function installNextTickImplementation() {
              registerImmediate = function (handle) {
                process.nextTick(function () {
                  runIfPresent(handle);
                });
              };
            }

            function canUsePostMessage() {
              // The test against `importScripts` prevents this implementation from being installed inside a web worker,
              // where `global.postMessage` means something completely different and can't be used for this purpose.
              if (global.postMessage && !global.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global.onmessage;
                global.onmessage = function () {
                  postMessageIsAsynchronous = false;
                };
                global.postMessage("", "*");
                global.onmessage = oldOnMessage;
                return postMessageIsAsynchronous;
              }
            }

            function installPostMessageImplementation() {
              // Installs an event handler on `global` for the `message` event: see
              // * https://developer.mozilla.org/en/DOM/window.postMessage
              // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

              var messagePrefix = "setImmediate$" + Math.random() + "$";
              var onGlobalMessage = function (event) {
                if (event.source === global &&
                  typeof event.data === "string" &&
                  event.data.indexOf(messagePrefix) === 0) {
                  runIfPresent(+event.data.slice(messagePrefix.length));
                }
              };

              if (global.addEventListener) {
                global.addEventListener("message", onGlobalMessage, false);
              } else {
                global.attachEvent("onmessage", onGlobalMessage);
              }

              registerImmediate = function (handle) {
                global.postMessage(messagePrefix + handle, "*");
              };
            }

            function installMessageChannelImplementation() {
              var channel = new MessageChannel();
              channel.port1.onmessage = function (event) {
                var handle = event.data;
                runIfPresent(handle);
              };

              registerImmediate = function (handle) {
                channel.port2.postMessage(handle);
              };
            }

            function installReadyStateChangeImplementation() {
              var html = doc.documentElement;
              registerImmediate = function (handle) {
                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                var script = doc.createElement("script");
                script.onreadystatechange = function () {
                  runIfPresent(handle);
                  script.onreadystatechange = null;
                  html.removeChild(script);
                  script = null;
                };
                html.appendChild(script);
              };
            }

            function installSetTimeoutImplementation() {
              registerImmediate = function (handle) {
                setTimeout(runIfPresent, 0, handle);
              };
            }

            // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
            var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
            attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

            // Don't get fooled by e.g. browserify environments.
            if ({}.toString.call(global.process) === "[object process]") {
              // For Node.js before 0.9
              installNextTickImplementation();

            } else if (canUsePostMessage()) {
              // For non-IE10 modern browsers
              installPostMessageImplementation();

            } else if (global.MessageChannel) {
              // For web workers, where supported
              installMessageChannelImplementation();

            } else if (doc && "onreadystatechange" in doc.createElement("script")) {
              // For IE 6–8
              installReadyStateChangeImplementation();

            } else {
              // For older browsers
              installSetTimeoutImplementation();
            }

            attachTo.setImmediate = setImmediate;
            attachTo.clearImmediate = clearImmediate;
          }(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__( /*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__( /*! ./../process/browser.js */ "./node_modules/process/browser.js")))

        /***/
      }),

    /***/
    "./node_modules/timers-browserify/main.js":
      /*!************************************************!*\
        !*** ./node_modules/timers-browserify/main.js ***!
        \************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function (global) {
          var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
          var apply = Function.prototype.apply;

          // DOM APIs, for completeness

          exports.setTimeout = function () {
            return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
          };
          exports.setInterval = function () {
            return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
          };
          exports.clearTimeout =
            exports.clearInterval = function (timeout) {
              if (timeout) {
                timeout.close();
              }
            };

          function Timeout(id, clearFn) {
            this._id = id;
            this._clearFn = clearFn;
          }
          Timeout.prototype.unref = Timeout.prototype.ref = function () {};
          Timeout.prototype.close = function () {
            this._clearFn.call(scope, this._id);
          };

          // Does not start the time, just sets up the members needed.
          exports.enroll = function (item, msecs) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = msecs;
          };

          exports.unenroll = function (item) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = -1;
          };

          exports._unrefActive = exports.active = function (item) {
            clearTimeout(item._idleTimeoutId);

            var msecs = item._idleTimeout;
            if (msecs >= 0) {
              item._idleTimeoutId = setTimeout(function onTimeout() {
                if (item._onTimeout)
                  item._onTimeout();
              }, msecs);
            }
          };

          // setimmediate attaches itself to the global object
          __webpack_require__( /*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
          // On some exotic environments, it's not clear which object `setimmediate` was
          // able to install onto.  Search each possibility in the same order as the
          // `setimmediate` library.
          exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
            (typeof global !== "undefined" && global.setImmediate) ||
            (this && this.setImmediate);
          exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
            (typeof global !== "undefined" && global.clearImmediate) ||
            (this && this.clearImmediate);

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__( /*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

        /***/
      }),

    /***/
    "./node_modules/webpack/buildin/global.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        var g;

        // This works in non-strict mode
        g = (function () {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/
      }),

    /***/
    "./node_modules/webpack/buildin/module.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/module.js ***!
        \***********************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = function (module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function () {};
            module.paths = [];
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, "loaded", {
              enumerable: true,
              get: function () {
                return module.l;
              }
            });
            Object.defineProperty(module, "id", {
              enumerable: true,
              get: function () {
                return module.i;
              }
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };


        /***/
      }),

    /***/
    "./src/ghost-finder.js":
      /*!*****************************!*\
        !*** ./src/ghost-finder.js ***!
        \*****************************/
      /*! no exports provided */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */
        (function (global) {
          /* harmony import */
          var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
          /* harmony import */
          var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */
          var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @tryghost/content-api */ "./node_modules/@tryghost/content-api/es/content-api.js");
          /* harmony import */
          var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! dompurify */ "./node_modules/dompurify/dist/purify.js");
          /* harmony import */
          var dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */
          var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! moment */ "./node_modules/moment/moment.js");
          /* harmony import */
          var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */
          var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! sweetalert */ "../../node_modules/sweetalert/dist/sweetalert.min.js");
          /* harmony import */
          var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);


          function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }

                function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          /**
           * Ghost Finder
           * v1.0.1
           * @author kingrayhan
           * @url https://rayhan.info
           */




          var resultDefaultTemplate = "<ul class=\"search-results-wrapper\">\n                                    <p>Search match(es): ##resultCount</p>\n                                    ##results\n                                </ul>";
          var singleResultDefaultTemplate = "<li><a href=\"##url\">##title</a></li>"; // TODO: add matcher parameter

          var GhostFinder = function GhostFinder(_ref) {
            var _this = this;

            var input = _ref.input,
              showResult = _ref.showResult,
              contentApiKey = _ref.contentApiKey,
              _ref$homeUrl = _ref.homeUrl,
              homeUrl = _ref$homeUrl === void 0 ? window.location.origin : _ref$homeUrl,
              _ref$resultTemplate = _ref.resultTemplate,
              resultTemplate = _ref$resultTemplate === void 0 ? resultDefaultTemplate : _ref$resultTemplate,
              _ref$singleResultTemp = _ref.singleResultTemplate,
              singleResultTemplate = _ref$singleResultTemp === void 0 ? singleResultDefaultTemplate : _ref$singleResultTemp,
              _ref$excerpt_length = _ref.excerpt_length,
              excerpt_length = _ref$excerpt_length === void 0 ? 15 : _ref$excerpt_length,
              _ref$time_format = _ref.time_format,
              time_format = _ref$time_format === void 0 ? 'MMMM Do YYYY' : _ref$time_format;

            _classCallCheck(this, GhostFinder);

            this.resultCount = 0;

            this.allReplace = function (retStr, obj) {
              for (var x in obj) {
                retStr = retStr.replace(new RegExp("##".concat(x), 'g'), obj[x]);
              }

              return retStr;
            };

            this.doSearch =
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                    var posts, filteredPosts, result;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this.searchTerm = e.target.value;
                            _context.next = 3;
                            return _this.api.posts.browse({
                              limit: 'all',
                              fields: "title,url,slug,html,feature_image,published_at,primary_author,primary_tag",
                              include: 'tags,authors'
                            });

                          case 3:
                            posts = _context.sent;
                            filteredPosts = posts.filter(function (post) {
                              return post.title.toLowerCase().includes(_this.searchTerm.toLowerCase());
                            });
                            _this.resultCount = filteredPosts.length; // if searchTerm's length is less then 1 character then stop here...

                            if (_this.searchTerm.length === 0) {
                              _this.showResult.innerHTML = '';
                            } else {
                              result = filteredPosts.map(function (post) {
                                  var replacerObj = {};
                                  /**
                                   * ##title
                                   */

                                  if (post.title) {
                                    replacerObj['title'] = post.title;
                                  }
                                  /**
                                   * ##url
                                   */


                                  if (post.title) {
                                    replacerObj['url'] = post.url;
                                  }
                                  /**
                                   * Tag fileds
                                   * ------------------------
                                   * primary_tag_name
                                   * primary_tag_url
                                   */


                                  if (post.primary_tag) {
                                    replacerObj['primary_tag_name'] = post.primary_tag.name;
                                    replacerObj['primary_tag_url'] = post.primary_tag.url;
                                  }
                                  /**
                                   * Author fileds
                                   * ------------------------
                                   * primary_author_name
                                   * primary_author_url
                                   * primary_author_avater
                                   */


                                  if (post.primary_author) {
                                    var _post$primary_author = post.primary_author,
                                      name = _post$primary_author.name,
                                      profile_image = _post$primary_author.profile_image,
                                      url = _post$primary_author.url;
                                    replacerObj['primary_author_name'] = name;
                                    replacerObj['primary_author_url'] = url;
                                    replacerObj['primary_author_avater'] = profile_image;
                                  }
                                  /**
                                   * ------------------------
                                   * feature_image
                                   */


                                  if (post.feature_image) {
                                    replacerObj['feature_image'] = post.feature_image;
                                  }
                                  /**
                                   * Excerpt
                                   * ---------------
                                   * ##excerpt
                                   */


                                  if (post.html) {
                                    var excerpt = dompurify__WEBPACK_IMPORTED_MODULE_2___default.a.sanitize(post.html, {
                                      ALLOWED_TAGS: ['']
                                    }).split(' ').slice(0, _this.excerpt_length).join(' ');
                                    replacerObj['excerpt'] = excerpt;
                                  }
                                  /**
                                   * Time
                                   * ---------------
                                   * ##published_at
                                   */


                                  if (post.published_at) {
                                    replacerObj['published_at'] = moment__WEBPACK_IMPORTED_MODULE_3___default()(post.published_at).format(_this.time_format);
                                  }
                                  /**
                                   * Result Count
                                   */


                                  replacerObj['resultCount'] = _this.resultCount;
                                  return _this.allReplace(_this.singleResultTemplate, replacerObj);
                                }) // map
                                .join(' '); // Push result html

                              _this.showResult.innerHTML = _this.resultTemplate !== undefined ? _this.resultTemplate.replace('##results', result).replace('##resultCount', _this.resultCount) : result;
                            }

                            case 7:
                            case "end":
                              return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }();

            /**
             * Chekc for errors
             */
            if (input === undefined) {
              return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Ghost Finder Error', "Provide \"input\" selector in options", 'error');
            }

            if (showResult === undefined) {
              return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Ghost Finder Error', "Provide \"showResult\" selector in options", 'error');
            }

            if (homeUrl === undefined) {
              return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Ghost Finder Error', "Provide \"homeUrl\" selector in options", 'error');
            }

            if (contentApiKey === undefined) {
              return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Ghost Finder Error', "Provide \"contentApiKey\" selector in options", 'error');
            }
            /**
             * Options
             */


            this.input = document.querySelector(input);
            this.homeUrl = homeUrl;
            this.contentApiKey = contentApiKey;
            this.resultTemplate = resultTemplate;
            this.singleResultTemplate = singleResultTemplate;
            this.showResult = document.querySelector(showResult);
            this.excerpt_length = excerpt_length;
            this.time_format = time_format;
            /**
             * trigger when user type to search
             */

            this.input.addEventListener('keyup', this.doSearch);
            /**
             * Initialize ghost content api constructor
             */

            this.api = new _tryghost_content_api__WEBPACK_IMPORTED_MODULE_1__["default"]({
              url: this.homeUrl,
              key: this.contentApiKey,
              version: 'v2'
            });
          } // Concept source: https://stackoverflow.com/a/17606289/3705299
          ;

          global.GhostFinder = GhostFinder;
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__( /*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

        /***/
      }),

    /***/
    0:
      /*!***********************************!*\
        !*** multi ./src/ghost-finder.js ***!
        \***********************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__( /*! /Users/kingrayhan/projects/ghost/ghost-search/versions/2.19.2/content/themes/casper/assets/ghost-search/src/ghost-finder.js */ "./src/ghost-finder.js");


        /***/
      })

    /******/
  }));