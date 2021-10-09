/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tryghost/content-api/es/content-api.js":
/*!**************************************************************!*\
  !*** ./node_modules/@tryghost/content-api/es/content-api.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GhostContentAPI; }
/* harmony export */ });
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var f$5 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$4(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f$5
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$1 = {}.toString;

var classofRaw = function (it) {
  return toString$1.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject$1 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var aFunction$1 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process$4 = global_1.process;
var Deno = global_1.Deno;
var versions = process$4 && process$4.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

/* eslint-disable es/no-symbol -- required for testing */



// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && engineV8Version && engineV8Version < 41;
});

/* eslint-disable es/no-symbol -- required for testing */


var useSymbolAsUid = nativeSymbol
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject$1(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var setGlobal = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global_1, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store$1;

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.16.0',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});
});

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var hasOwnProperty = {}.hasOwnProperty;

var has$1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has$1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (nativeSymbol && has$1(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive = function (input, pref) {
  if (!isObject$1(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject$1(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};

var document$3 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject$1(document$3) && isObject$1(document$3.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$3.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var f$4 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (ie8DomDefine) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$4
};

var anObject = function (it) {
  if (!isObject$1(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var f$3 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$3
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$1 = {};

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global_1.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap || sharedStore.state) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set$1 = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;
  set$1 = function (it, metadata) {
    if (has$1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has$1(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return has$1(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has$1(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global_1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});
});

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min$3 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min$3(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$2(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$1(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys);
};

var objectGetOwnPropertyNames = {
	f: f$2
};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var f$1 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$1
};

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$3(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var nativeJoin = [].join;

var ES3_STRINGS = indexedObject != Object;
var STRICT_METHOD$1 = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
_export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};

var html = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */








var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  if (iframe.style) {
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = document.domain && activeXDocument ?
    NullProtoObjectViaActiveX(activeXDocument) : // old IE
    NullProtoObjectViaIFrame() ||
    NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var $includes = arrayIncludes.includes;


// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
_export({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var toString_1 = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};

var MATCH$1 = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$1(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

var MATCH = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;







// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var $endsWith = ''.endsWith;
var min$1 = Math.min;

var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegexpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
  var descriptor = getOwnPropertyDescriptor$2(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
_export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString_1(requireObjectCoercible(this));
    notARegexp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min$1(toLength(endPosition), len);
    var search = toString_1(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;







// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var $startsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
_export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString_1(requireObjectCoercible(this));
    notARegexp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString_1(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG$2] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}

var nativePromiseConstructor = global_1.Promise;

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

var aPossiblePrototype = function (it) {
  if (!isObject$1(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

/* eslint-disable no-proto -- safe */



// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty$2 = objectDefineProperty.f;



var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has$1(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty$2(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

var SPECIES$4 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$4]) {
    defineProperty(Constructor, SPECIES$4, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var aFunction = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

var iterators = {};

var ITERATOR$2 = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var ITERATOR$1 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$1]
    || it['@@iterator']
    || iterators[classof(it)];
};

var iteratorClose = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var SPECIES$3 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction(S);
};

var engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

var engineIsNode = classofRaw(global_1.process) == 'process';

var set = global_1.setImmediate;
var clear = global_1.clearImmediate;
var process$3 = global_1.process;
var MessageChannel = global_1.MessageChannel;
var Dispatch = global_1.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global_1.location;
} catch (error) { /* empty */ }

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global_1.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var argumentsLength = arguments.length;
    var i = 1;
    while (argumentsLength > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (engineIsNode) {
    defer = function (id) {
      process$3.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !engineIsIos) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = functionBindContext(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global_1.addEventListener &&
    typeof postMessage == 'function' &&
    !global_1.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global_1.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
    defer = function (id) {
      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;




var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
var document$2 = global_1.document;
var process$2 = global_1.process;
var Promise$1 = global_1.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global_1, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (engineIsNode && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = promise.then;
    notify$1 = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (engineIsNode) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify$1 = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global_1, flush);
    };
  }
}

var microtask = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$1();
  } last = task;
};

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
var f = function (C) {
  return new PromiseCapability(C);
};

var newPromiseCapability$1 = {
	f: f
};

var promiseResolve = function (C, x) {
  anObject(C);
  if (isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var hostReportErrors = function (a, b) {
  var console = global_1.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

var perform = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var engineIsBrowser = typeof window == 'object';

var task = task$1.set;












var SPECIES$2 = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = internalState.get;
var setInternalState = internalState.set;
var getInternalPromiseState = internalState.getterFor(PROMISE);
var NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype;
var PromiseConstructor = nativePromiseConstructor;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError$1 = global_1.TypeError;
var document$1 = global_1.document;
var process$1 = global_1.process;
var newPromiseCapability = newPromiseCapability$1.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global_1.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED$1 = isForced_1(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (engineV8Version >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES$2] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED$1 || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject$1(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
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
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global_1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global_1, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (engineIsNode) {
          process$1.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global_1, function () {
    var promise = state.facade;
    if (engineIsNode) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$1 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind$1(internalResolve, wrapper, state),
            bind$1(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED$1) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromiseConstructorPrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = engineIsNode ? process$1.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };
  newPromiseCapability$1.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (typeof nativePromiseConstructor == 'function' && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (objectSetPrototypeOf) {
      objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
  }
}

_export({ global: true, wrap: true, forced: FORCED$1 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
_export({ target: PROMISE, stat: true, forced: FORCED$1 }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

_export({ target: PROMISE, stat: true, forced: FORCED$1 }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$1 = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$1(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
  assign: objectAssign
});

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var createProperty = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var SPECIES$1 = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor = function (originalArray) {
  var C;
  if (isArray$1(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray$1(C.prototype))) C = undefined;
    else if (isObject$1(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var SPECIES = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$1(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$1(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

var defineProperty = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

var $forEach = arrayIteration.forEach;


var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
  } catch (error) {
    CollectionPrototype.forEach = arrayForEach;
  }
}

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
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
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
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
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
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
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
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
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
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

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
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
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).
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
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

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
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
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
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

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
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
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

  if (!headers) { return parsed; }

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
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
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

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
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
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

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
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
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
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
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

    if (!requestData) {
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
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
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
      } catch (e) { /* Ignore */ }
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
  maxBodyLength: -1,

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
    config.headers
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
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
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
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

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

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
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
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
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
var axios$1 = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios_1;

// Factory for creating new instances
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

var axios_1 = axios$1;

// Allow use of default import syntax in TypeScript
var default_1 = axios$1;
axios_1.default = default_1;

var axios = axios_1;

var supportedVersions = ['v2', 'v3', 'v4', 'canary'];
var name = '@tryghost/content-api';
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
    console.warn("".concat(name, ": The 'host' parameter is deprecated, please use 'url' instead"));

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
    throw new Error("".concat(name, " Config Missing: 'version' is required. E.g. ").concat(supportedVersions.join(',')));
  }

  if (!supportedVersions.includes(version)) {
    throw new Error("".concat(name, " Config Invalid: 'version' ").concat(version, " is not supported"));
  }

  if (!url) {
    throw new Error("".concat(name, " Config Missing: 'url' is required. E.g. 'https://site.com'"));
  }

  if (!/https?:\/\//.test(url)) {
    throw new Error("".concat(name, " Config Invalid: 'url' ").concat(url, " requires a protocol. E.g. 'https://site.com'"));
  }

  if (url.endsWith('/')) {
    throw new Error("".concat(name, " Config Invalid: 'url' ").concat(url, " must not have a trailing slash. E.g. 'https://site.com'"));
  }

  if (ghostPath.endsWith('/') || ghostPath.startsWith('/')) {
    throw new Error("".concat(name, " Config Invalid: 'ghostPath' ").concat(ghostPath, " must not have a leading or trailing slash. E.g. 'ghost'"));
  }

  if (key && !/[0-9a-f]{26}/.test(key)) {
    throw new Error("".concat(name, " Config Invalid: 'key' ").concat(key, " must have 26 hex characters"));
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

      if (!data || !data.id && !data.slug) {
        return Promise.reject(new Error("".concat(name, " read requires an id or slug.")));
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
      return Promise.reject(new Error("".concat(name, " Config Missing: 'key' is required.")));
    }

    delete params.id;
    var headers = membersToken ? {
      Authorization: "GhostMembers ".concat(membersToken)
    } : undefined;
    return axios.get("".concat(url, "/").concat(ghostPath, "/api/").concat(version, "/content/").concat(resourceType, "/").concat(id ? id + '/' : ''), {
      params: Object.assign({
        key: key
      }, params),
      paramsSerializer: function paramsSerializer(parameters) {
        return Object.keys(parameters).reduce(function (parts, k) {
          var val = encodeURIComponent([].concat(parameters[k]).join(','));
          return parts.concat("".concat(k, "=").concat(val));
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
        keys.forEach(function (k) {
          toThrow[k] = props[k];
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


//# sourceMappingURL=content-api.js.map


/***/ }),

/***/ "./src/js/app/colorModeToggle.js":
/*!***************************************!*\
  !*** ./src/js/app/colorModeToggle.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setColorMode; }
/* harmony export */ });
/*
 * Color mode toggle
 */
var toggleColorBtns = document.querySelectorAll('.sm-color-mode-btn');
function setColorMode() {
  if (window.CSS && CSS.supports('color', 'var(--primary)')) {
    var toggleColorMode = function toggleColorMode(e) {
      if (e.currentTarget.classList.contains('light')) {
        document.documentElement.setAttribute('color-mode', 'light');
        localStorage.setItem('pref', 'light');
        return;
      }

      document.documentElement.setAttribute('color-mode', 'dark');
      localStorage.setItem('pref', 'dark');
    };

    toggleColorBtns.forEach(function (btn) {
      btn.addEventListener('click', toggleColorMode);
    });
  } else {
    toggleColorBtns.forEach(function (e) {
      e.style.display = 'none';
    });
  }
}

/***/ }),

/***/ "./src/js/app/focusTrap.js":
/*!*********************************!*\
  !*** ./src/js/app/focusTrap.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trapFocus": function() { return /* binding */ trapFocus; },
/* harmony export */   "tabKeyHandler": function() { return /* binding */ tabKeyHandler; },
/* harmony export */   "releaseFocus": function() { return /* binding */ releaseFocus; }
/* harmony export */ });
var FOCUSABLE_EL = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
var currentFocus;

var checkDisplayStatus = function checkDisplayStatus(el) {
  return window.getComputedStyle(el).display !== 'none';
};

var getNonHiddenLastEl = function getNonHiddenLastEl(el) {
  var lastEl = el[el.length - 1];
  var penultimateEl = el[el.length - 2];

  if (checkDisplayStatus(lastEl)) {
    return lastEl;
  }

  return penultimateEl;
};

var configureFocusableElements = function configureFocusableElements(containerEl) {
  var focusableEl = containerEl.querySelectorAll(FOCUSABLE_EL);
  focusableEl.forEach(function (el) {
    return el.setAttribute('tabindex', '0');
  });
  var firstElToFocus = focusableEl[1];
  var firstTabStop = focusableEl[0];
  var lastTabStop = getNonHiddenLastEl(focusableEl);
  return [firstTabStop, lastTabStop, firstElToFocus];
};

var trapFocus = function trapFocus(sideMenuEl) {
  currentFocus = document.activeElement;
  var firstElToFocus = configureFocusableElements(sideMenuEl);
  firstElToFocus[2].focus();
};
function tabKeyHandler(e) {
  var tabs = configureFocusableElements(this);
  var firstTabStop = tabs[0];
  var lastTabStop = tabs[1];

  if (e.keyCode === 9) {
    // SHIFT + TAB
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      } // TAB

    } else if (document.activeElement === lastTabStop) {
      e.preventDefault();
      firstTabStop.focus();
    }
  }
}
var releaseFocus = function releaseFocus(sideMenuEl) {
  var focusableEl = sideMenuEl.querySelectorAll(FOCUSABLE_EL);
  focusableEl.forEach(function (el) {
    return el.setAttribute('tabindex', '-1');
  });
  sideMenuEl.removeEventListener('keydown', tabKeyHandler);
  currentFocus.focus();
};

/***/ }),

/***/ "./src/js/app/grid.js":
/*!****************************!*\
  !*** ./src/js/app/grid.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var gridContainers = document.querySelectorAll('.sm-grid-container');

function updateNumber(el, num, type) {
  if (type === 'container') {
    el.classList.add("sm-grid-container-".concat(num));
    return;
  }

  el.classList.add("sm-card-".concat(num));
}

function countChildren(gridContainer) {
  var children = gridContainer.children;
  children.forEach(function (el, i) {
    return updateNumber(el, i + 1);
  });
  var numOfChildren = children.length;
  updateNumber(gridContainer, numOfChildren, 'container');
  return {
    children: children,
    numOfChildren: numOfChildren
  };
}

function gridInit() {
  if (!gridContainers) {
    return;
  }

  gridContainers.forEach(function (gridContainer) {
    return countChildren(gridContainer);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (gridInit);

/***/ }),

/***/ "./src/js/app/modal.js":
/*!*****************************!*\
  !*** ./src/js/app/modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _require = __webpack_require__(/*! ./focusTrap */ "./src/js/app/focusTrap.js"),
    trapFocus = _require.trapFocus,
    releaseFocus = _require.releaseFocus,
    tabKeyHandler = _require.tabKeyHandler;

var searchBtn = document.getElementById('sm-search-btn');
var mSearchBtn = document.getElementById('sm-m-search-btn');
var menuBtn = document.getElementById('sm-menu-btn');
var closeBtns = document.querySelectorAll('.sm-modal__close-btn');

if (typeof SEARCH_API !== 'undefined') {
  searchBtn.style.display = 'flex';
  mSearchBtn.style.display = 'flex';
}

var btns = [searchBtn, mSearchBtn, menuBtn];

var modalFn = function modalFn() {
  // eslint-disable-next-line no-undef
  var close = function close(modal) {
    document.body.classList.remove('sm-expanded-modal');
    modal.setAttribute('aria-expanded', 'false');
    var input = modal.querySelector('input');

    if (input) {
      input.value = '';
    }

    releaseFocus(modal);
  };

  var closeHandler = function closeHandler(e) {
    var modal = e.currentTarget.closest('.sm-modal');
    close(modal);
  };

  var openHandler = function openHandler(e) {
    // if (e.currentTarget.closest('.modal')) {
    //   close(e.currentTarget.closest('.modal'));
    // }
    var modal = document.getElementById(e.currentTarget.dataset.target);
    document.body.classList.add('sm-expanded-modal');
    modal.setAttribute('aria-expanded', 'true');
    trapFocus(modal);
    modal.addEventListener('keydown', tabKeyHandler);

    var nonTargetCloseHandler = function nonTargetCloseHandler(ev) {
      if (ev.target.classList.contains('sm-content-wrap')) {
        close(modal);
        document.body.removeEventListener('click', nonTargetCloseHandler); // eslint-disable-next-line no-use-before-define

        document.body.removeEventListener('keyup', closeByEscHandler);
      }
    };

    document.body.addEventListener('click', nonTargetCloseHandler);

    var closeByEscHandler = function closeByEscHandler(key) {
      if (key.key === 'Escape' || key.keyCode === 27) {
        close(modal);
        document.body.removeEventListener('keyup', closeByEscHandler);
        document.body.removeEventListener('click', nonTargetCloseHandler);
      }
    };

    document.body.addEventListener('keyup', closeByEscHandler);
  };

  btns.forEach(function (btn) {
    if (btn) {
      btn.addEventListener('click', openHandler);
    }
  });
  closeBtns.forEach(function (btn) {
    if (btn) {
      btn.addEventListener('click', closeHandler);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modalFn);

/***/ }),

/***/ "./src/js/app/search.js":
/*!******************************!*\
  !*** ./src/js/app/search.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-search */ "./node_modules/js-search/dist/esm/js-search.js");
/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tryghost/content-api */ "./node_modules/@tryghost/content-api/es/content-api.js");


var searchModal = document.getElementById('sm-search-modal');

var htmlReplace = function htmlReplace(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

var createTimestamp = function createTimestamp() {
  var minutes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
  var timestamp = Date.now() + minutes * 60000;
  return timestamp;
};

var stateLoader = function stateLoader(state, status) {
  if (status) {
    searchModal.classList.add(state);
  } else {
    searchModal.classList.remove(state);
  }
};

var search = function search() {
  var freshApi = new _tryghost_content_api__WEBPACK_IMPORTED_MODULE_1__.default({
    url: "".concat(window.location.protocol, "//").concat(window.location.host),
    // eslint-disable-next-line no-undef
    key: SEARCH_API,
    version: 'v4'
  });
  var api = new Promise(function (resolve, reject) {
    var timestamp = parseInt(localStorage.getItem('timestamp'), 10);
    var now = Date.now();

    if (!timestamp || now > timestamp) {
      freshApi.posts.browse({
        include: 'tags',
        formats: 'plaintext',
        limit: 'all'
      }).then(function (data) {
        localStorage.setItem('posts', JSON.stringify(data));
        localStorage.setItem('timestamp', createTimestamp());
        resolve(data);
      }).catch(function (err) {
        console.error("Search is not available!\n".concat(err));
      });
    } else {
      var posts = JSON.parse(localStorage.getItem('posts'));
      resolve(posts);
      reject(new Error("Couldn't fetch posts"));
    }
  }); // Page Elements

  var searchInput = document.getElementById('sm-search-input');
  var runSearchBtn = document.getElementById('sm-run-search-btn');
  var searchResultHeader = document.querySelector('.sm-search-results__header');
  var searchResult = document.querySelector('.sm-search-results__container');

  var dateFormatter = function dateFormatter(isoDate) {
    var options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    };
    var date = new Date(isoDate);
    return date.toLocaleDateString(undefined, options);
  };

  var searchPosts = function searchPosts(term) {
    stateLoader('loading', true);
    searchResult.innerHTML = '';
    api.then(function (posts) {
      var newSearch = new js_search__WEBPACK_IMPORTED_MODULE_0__.Search('id');
      newSearch.addIndex('title');
      newSearch.addIndex('plaintext');
      newSearch.addDocuments(posts);
      var result = newSearch.search(term);

      if (result.length > 1) {
        searchResultHeader.textContent = "".concat(result.length, " Results for \u201C").concat(term, "\u201D");
      } else if (result.length !== 0) {
        searchResultHeader.textContent = "".concat(result.length, " Result for \u201C").concat(term, "\u201D");
      } else {
        searchResultHeader.textContent = "No results for \u201C".concat(term, "\u201D");
      }

      result.forEach(function (post) {
        searchResult.innerHTML += "<article class=\"sm-search-results__item\">\n            <a class=\"sm-search-results__link\" href=\"".concat(post.url, "\">\n              <p class=\"sm-search-results__date\">").concat(dateFormatter(post.published_at), "</p>\n              <p class=\"sm-search-results__title\">").concat(post.title, "</p>\n              <p class=\"sm-search-results__excerpt\">\n                ").concat(htmlReplace(post.excerpt), "</p>\n                </a>\n            </article>");
      });
      stateLoader('loading', false);
    }).catch(function (err) {
      // eslint-disable-next-line no-console
      console.error("Search not available\n".concat(err));
    });
  };

  var enterSearchTermCheck = function enterSearchTermCheck() {
    if (!searchResult.innerHTML) {
      searchResultHeader.textContent = 'Enter a search term';
    }
  };

  runSearchBtn.addEventListener('click', function () {
    if (searchInput.value === '') {
      enterSearchTermCheck();
    } else {
      searchPosts(searchInput.value);
    }
  });
  searchInput.addEventListener('keyup', function (e) {
    if (searchInput.value === '') {
      enterSearchTermCheck();
    } else if (e.key === 'Enter') {
      searchPosts(searchInput.value);
    }
  });
  searchInput.addEventListener('focus', function (e) {
    stateLoader('loading', false);
    e.target.value = '';
  });
  searchInput.addEventListener('input', function () {
    stateLoader('loading', false);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/js/app/setTabIndex.js":
/*!***********************************!*\
  !*** ./src/js/app/setTabIndex.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeNavLinks; }
/* harmony export */ });
function removeNavLinks() {
  var menuNavLinks = document.querySelectorAll('#sm-menu a');
  menuNavLinks.forEach(function (el) {
    return el.setAttribute('tabindex', '-1');
  });
}

/***/ }),

/***/ "./node_modules/js-search/dist/esm/js-search.js":
/*!******************************************************!*\
  !*** ./node_modules/js-search/dist/esm/js-search.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllSubstringsIndexStrategy": function() { return /* binding */ AllSubstringsIndexStrategy; },
/* harmony export */   "CaseSensitiveSanitizer": function() { return /* binding */ CaseSensitiveSanitizer; },
/* harmony export */   "ExactWordIndexStrategy": function() { return /* binding */ ExactWordIndexStrategy; },
/* harmony export */   "LowerCaseSanitizer": function() { return /* binding */ LowerCaseSanitizer; },
/* harmony export */   "PrefixIndexStrategy": function() { return /* binding */ PrefixIndexStrategy; },
/* harmony export */   "Search": function() { return /* binding */ Search; },
/* harmony export */   "SimpleTokenizer": function() { return /* binding */ SimpleTokenizer; },
/* harmony export */   "StemmingTokenizer": function() { return /* binding */ StemmingTokenizer; },
/* harmony export */   "StopWordsMap": function() { return /* binding */ StopWordsMap; },
/* harmony export */   "StopWordsTokenizer": function() { return /* binding */ StopWordsTokenizer; },
/* harmony export */   "TfIdfSearchIndex": function() { return /* binding */ TfIdfSearchIndex; },
/* harmony export */   "TokenHighlighter": function() { return /* binding */ TokenHighlighter; },
/* harmony export */   "UnorderedSearchIndex": function() { return /* binding */ UnorderedSearchIndex; }
/* harmony export */ });
/**
 * Indexes for all substring searches (e.g. the term "cat" is indexed as "c", "ca", "cat", "a", "at", and "t").
 */
var AllSubstringsIndexStrategy = /*#__PURE__*/function () {
  function AllSubstringsIndexStrategy() {}

  var _proto = AllSubstringsIndexStrategy.prototype;

  /**
   * @inheritDocs
   */
  _proto.expandToken = function expandToken(token) {
    var expandedTokens = [];
    var string;

    for (var i = 0, length = token.length; i < length; ++i) {
      string = '';

      for (var j = i; j < length; ++j) {
        string += token.charAt(j);
        expandedTokens.push(string);
      }
    }

    return expandedTokens;
  };

  return AllSubstringsIndexStrategy;
}();

/**
 * Indexes for exact word matches.
 */
var ExactWordIndexStrategy = /*#__PURE__*/function () {
  function ExactWordIndexStrategy() {}

  var _proto = ExactWordIndexStrategy.prototype;

  /**
   * @inheritDocs
   */
  _proto.expandToken = function expandToken(token) {
    return token ? [token] : [];
  };

  return ExactWordIndexStrategy;
}();

/**
 * Indexes for prefix searches (e.g. the term "cat" is indexed as "c", "ca", and "cat" allowing prefix search lookups).
 */
var PrefixIndexStrategy = /*#__PURE__*/function () {
  function PrefixIndexStrategy() {}

  var _proto = PrefixIndexStrategy.prototype;

  /**
   * @inheritDocs
   */
  _proto.expandToken = function expandToken(token) {
    var expandedTokens = [];
    var string = '';

    for (var i = 0, length = token.length; i < length; ++i) {
      string += token.charAt(i);
      expandedTokens.push(string);
    }

    return expandedTokens;
  };

  return PrefixIndexStrategy;
}();

/**
 * Enforces case-sensitive text matches.
 */
var CaseSensitiveSanitizer = /*#__PURE__*/function () {
  function CaseSensitiveSanitizer() {}

  var _proto = CaseSensitiveSanitizer.prototype;

  /**
   * @inheritDocs
   */
  _proto.sanitize = function sanitize(text) {
    return text ? text.trim() : '';
  };

  return CaseSensitiveSanitizer;
}();

/**
 * Sanitizes text by converting to a locale-friendly lower-case version and triming leading and trailing whitespace.
 */
var LowerCaseSanitizer = /*#__PURE__*/function () {
  function LowerCaseSanitizer() {}

  var _proto = LowerCaseSanitizer.prototype;

  /**
   * @inheritDocs
   */
  _proto.sanitize = function sanitize(text) {
    return text ? text.toLocaleLowerCase().trim() : '';
  };

  return LowerCaseSanitizer;
}();

/**
 * Find and return a nested object value.
 *
 * @param object to crawl
 * @param path Property path
 * @returns {any}
 */
function getNestedFieldValue(object, path) {
  path = path || [];
  object = object || {};
  var value = object; // walk down the property path

  for (var i = 0; i < path.length; i++) {
    value = value[path[i]];

    if (value == null) {
      return null;
    }
  }

  return value;
}

/**
 * Search index capable of returning results matching a set of tokens and ranked according to TF-IDF.
 */
var TfIdfSearchIndex = /*#__PURE__*/function () {
  function TfIdfSearchIndex(uidFieldName) {
    this._uidFieldName = uidFieldName;
    this._tokenToIdfCache = {};
    this._tokenMap = {};
  }
  /**
   * @inheritDocs
   */


  var _proto = TfIdfSearchIndex.prototype;

  _proto.indexDocument = function indexDocument(token, uid, doc) {
    this._tokenToIdfCache = {}; // New index invalidates previous IDF caches

    var tokenMap = this._tokenMap;
    var tokenDatum;

    if (typeof tokenMap[token] !== 'object') {
      tokenMap[token] = tokenDatum = {
        $numDocumentOccurrences: 0,
        $totalNumOccurrences: 1,
        $uidMap: {}
      };
    } else {
      tokenDatum = tokenMap[token];
      tokenDatum.$totalNumOccurrences++;
    }

    var uidMap = tokenDatum.$uidMap;

    if (typeof uidMap[uid] !== 'object') {
      tokenDatum.$numDocumentOccurrences++;
      uidMap[uid] = {
        $document: doc,
        $numTokenOccurrences: 1
      };
    } else {
      uidMap[uid].$numTokenOccurrences++;
    }
  }
  /**
   * @inheritDocs
   */
  ;

  _proto.search = function search(tokens, corpus) {
    var uidToDocumentMap = {};

    for (var i = 0, numTokens = tokens.length; i < numTokens; i++) {
      var token = tokens[i];
      var tokenMetadata = this._tokenMap[token]; // Short circuit if no matches were found for any given token.

      if (!tokenMetadata) {
        return [];
      }

      if (i === 0) {
        var keys = Object.keys(tokenMetadata.$uidMap);

        for (var j = 0, numKeys = keys.length; j < numKeys; j++) {
          var uid = keys[j];
          uidToDocumentMap[uid] = tokenMetadata.$uidMap[uid].$document;
        }
      } else {
        var keys = Object.keys(uidToDocumentMap);

        for (var j = 0, numKeys = keys.length; j < numKeys; j++) {
          var uid = keys[j];

          if (typeof tokenMetadata.$uidMap[uid] !== 'object') {
            delete uidToDocumentMap[uid];
          }
        }
      }
    }

    var documents = [];

    for (var uid in uidToDocumentMap) {
      documents.push(uidToDocumentMap[uid]);
    }

    var calculateTfIdf = this._createCalculateTfIdf(); // Return documents sorted by TF-IDF


    return documents.sort(function (documentA, documentB) {
      return calculateTfIdf(tokens, documentB, corpus) - calculateTfIdf(tokens, documentA, corpus);
    });
  };

  _proto._createCalculateIdf = function _createCalculateIdf() {
    var tokenMap = this._tokenMap;
    var tokenToIdfCache = this._tokenToIdfCache;
    return function calculateIdf(token, documents) {
      if (!tokenToIdfCache[token]) {
        var numDocumentsWithToken = typeof tokenMap[token] !== 'undefined' ? tokenMap[token].$numDocumentOccurrences : 0;
        tokenToIdfCache[token] = 1 + Math.log(documents.length / (1 + numDocumentsWithToken));
      }

      return tokenToIdfCache[token];
    };
  };

  _proto._createCalculateTfIdf = function _createCalculateTfIdf() {
    var tokenMap = this._tokenMap;
    var uidFieldName = this._uidFieldName;

    var calculateIdf = this._createCalculateIdf();

    return function calculateTfIdf(tokens, document, documents) {
      var score = 0;

      for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        var token = tokens[i];
        var inverseDocumentFrequency = calculateIdf(token, documents);

        if (inverseDocumentFrequency === Infinity) {
          inverseDocumentFrequency = 0;
        }

        var uid;

        if (uidFieldName instanceof Array) {
          uid = document && getNestedFieldValue(document, uidFieldName);
        } else {
          uid = document && document[uidFieldName];
        }

        var termFrequency = typeof tokenMap[token] !== 'undefined' && typeof tokenMap[token].$uidMap[uid] !== 'undefined' ? tokenMap[token].$uidMap[uid].$numTokenOccurrences : 0;
        score += termFrequency * inverseDocumentFrequency;
      }

      return score;
    };
  };

  return TfIdfSearchIndex;
}();

/**
 * Search index capable of returning results matching a set of tokens but without any meaningful rank or order.
 */
var UnorderedSearchIndex = /*#__PURE__*/function () {
  function UnorderedSearchIndex() {
    this._tokenToUidToDocumentMap = {};
  }
  /**
   * @inheritDocs
   */


  var _proto = UnorderedSearchIndex.prototype;

  _proto.indexDocument = function indexDocument(token, uid, doc) {
    if (typeof this._tokenToUidToDocumentMap[token] !== 'object') {
      this._tokenToUidToDocumentMap[token] = {};
    }

    this._tokenToUidToDocumentMap[token][uid] = doc;
  }
  /**
   * @inheritDocs
   */
  ;

  _proto.search = function search(tokens, corpus) {
    var intersectingDocumentMap = {};
    var tokenToUidToDocumentMap = this._tokenToUidToDocumentMap;

    for (var i = 0, numTokens = tokens.length; i < numTokens; i++) {
      var token = tokens[i];
      var documentMap = tokenToUidToDocumentMap[token]; // Short circuit if no matches were found for any given token.

      if (!documentMap) {
        return [];
      }

      if (i === 0) {
        var keys = Object.keys(documentMap);

        for (var j = 0, numKeys = keys.length; j < numKeys; j++) {
          var uid = keys[j];
          intersectingDocumentMap[uid] = documentMap[uid];
        }
      } else {
        var keys = Object.keys(intersectingDocumentMap);

        for (var j = 0, numKeys = keys.length; j < numKeys; j++) {
          var uid = keys[j];

          if (typeof documentMap[uid] !== 'object') {
            delete intersectingDocumentMap[uid];
          }
        }
      }
    }

    var keys = Object.keys(intersectingDocumentMap);
    var documents = [];

    for (var i = 0, numKeys = keys.length; i < numKeys; i++) {
      var uid = keys[i];
      documents.push(intersectingDocumentMap[uid]);
    }

    return documents;
  };

  return UnorderedSearchIndex;
}();

var REGEX = /[^a-zа-яё0-9\-']+/i;
/**
 * Simple tokenizer that splits strings on whitespace characters and returns an array of all non-empty substrings.
 */

var SimpleTokenizer = /*#__PURE__*/function () {
  function SimpleTokenizer() {}

  var _proto = SimpleTokenizer.prototype;

  /**
   * @inheritDocs
   */
  _proto.tokenize = function tokenize(text) {
    return text.split(REGEX).filter(function (text) {
      return text;
    } // Filter empty tokens
    );
  };

  return SimpleTokenizer;
}();

/**
 * Stemming is the process of reducing search tokens to their root (or stem) so that searches for different forms of a
 * word will match. For example "search", "searching" and "searched" are all reduced to the stem "search".
 *
 * <p>This stemming tokenizer converts tokens (words) to their stem forms before returning them. It requires an
 * external stemming function to be provided; for this purpose I recommend the NPM 'porter-stemmer' library.
 *
 * <p>For more information see http : //tartarus.org/~martin/PorterStemmer/
 */
var StemmingTokenizer = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param stemmingFunction Function capable of accepting a word and returning its stem.
   * @param decoratedIndexStrategy Index strategy to be run after all stop words have been removed.
   */
  function StemmingTokenizer(stemmingFunction, decoratedTokenizer) {
    this._stemmingFunction = stemmingFunction;
    this._tokenizer = decoratedTokenizer;
  }
  /**
   * @inheritDocs
   */


  var _proto = StemmingTokenizer.prototype;

  _proto.tokenize = function tokenize(text) {
    return this._tokenizer.tokenize(text).map(this._stemmingFunction);
  };

  return StemmingTokenizer;
}();

/**
 * Stop words list copied from Lunr JS.
 */
var StopWordsMap = {
  a: true,
  able: true,
  about: true,
  across: true,
  after: true,
  all: true,
  almost: true,
  also: true,
  am: true,
  among: true,
  an: true,
  and: true,
  any: true,
  are: true,
  as: true,
  at: true,
  be: true,
  because: true,
  been: true,
  but: true,
  by: true,
  can: true,
  cannot: true,
  could: true,
  dear: true,
  did: true,
  'do': true,
  does: true,
  either: true,
  'else': true,
  ever: true,
  every: true,
  'for': true,
  from: true,
  'get': true,
  got: true,
  had: true,
  has: true,
  have: true,
  he: true,
  her: true,
  hers: true,
  him: true,
  his: true,
  how: true,
  however: true,
  i: true,
  'if': true,
  'in': true,
  into: true,
  is: true,
  it: true,
  its: true,
  just: true,
  least: true,
  "let": true,
  like: true,
  likely: true,
  may: true,
  me: true,
  might: true,
  most: true,
  must: true,
  my: true,
  neither: true,
  no: true,
  nor: true,
  not: true,
  of: true,
  off: true,
  often: true,
  on: true,
  only: true,
  or: true,
  other: true,
  our: true,
  own: true,
  rather: true,
  said: true,
  say: true,
  says: true,
  she: true,
  should: true,
  since: true,
  so: true,
  some: true,
  than: true,
  that: true,
  the: true,
  their: true,
  them: true,
  then: true,
  there: true,
  these: true,
  they: true,
  'this': true,
  tis: true,
  to: true,
  too: true,
  twas: true,
  us: true,
  wants: true,
  was: true,
  we: true,
  were: true,
  what: true,
  when: true,
  where: true,
  which: true,
  'while': true,
  who: true,
  whom: true,
  why: true,
  will: true,
  'with': true,
  would: true,
  yet: true,
  you: true,
  your: true
}; // Prevent false positives for inherited properties

StopWordsMap.constructor = false;
StopWordsMap.hasOwnProperty = false;
StopWordsMap.isPrototypeOf = false;
StopWordsMap.propertyIsEnumerable = false;
StopWordsMap.toLocaleString = false;
StopWordsMap.toString = false;
StopWordsMap.valueOf = false;

/**
 * Stop words are very common (e.g. "a", "and", "the") and are often not semantically meaningful in the context of a
 * search. This tokenizer removes stop words from a set of tokens before passing the remaining tokens along for
 * indexing or searching purposes.
 */

var StopWordsTokenizer = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param decoratedIndexStrategy Index strategy to be run after all stop words have been removed.
   */
  function StopWordsTokenizer(decoratedTokenizer) {
    this._tokenizer = decoratedTokenizer;
  }
  /**
   * @inheritDocs
   */


  var _proto = StopWordsTokenizer.prototype;

  _proto.tokenize = function tokenize(text) {
    return this._tokenizer.tokenize(text).filter(function (token) {
      return !StopWordsMap[token];
    });
  };

  return StopWordsTokenizer;
}();

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * Simple client-side searching within a set of documents.
 *
 * <p>Documents can be searched by any number of fields. Indexing and search strategies are highly customizable.
 */
var Search = /*#__PURE__*/function () {
  /**
   * Array containing either a property name or a path (list of property names) to a nested value
   */

  /**
   * Constructor.
   * @param uidFieldName Field containing values that uniquely identify search documents; this field's values are used
   *                     to ensure that a search result set does not contain duplicate objects.
   */
  function Search(uidFieldName) {
    if (!uidFieldName) {
      throw Error('js-search requires a uid field name constructor parameter');
    }

    this._uidFieldName = uidFieldName; // Set default/recommended strategies

    this._indexStrategy = new PrefixIndexStrategy();
    this._searchIndex = new TfIdfSearchIndex(uidFieldName);
    this._sanitizer = new LowerCaseSanitizer();
    this._tokenizer = new SimpleTokenizer();
    this._documents = [];
    this._searchableFields = [];
  }
  /**
   * Override the default index strategy.
   * @param value Custom index strategy
   * @throws Error if documents have already been indexed by this search instance
   */


  var _proto = Search.prototype;

  /**
   * Add a searchable document to the index. Document will automatically be indexed for search.
   * @param document
   */
  _proto.addDocument = function addDocument(document) {
    this.addDocuments([document]);
  }
  /**
   * Adds searchable documents to the index. Documents will automatically be indexed for search.
   * @param document
   */
  ;

  _proto.addDocuments = function addDocuments(documents) {
    this._documents = this._documents.concat(documents);
    this.indexDocuments_(documents, this._searchableFields);
  }
  /**
   * Add a new searchable field to the index. Existing documents will automatically be indexed using this new field.
   *
   * @param field Searchable field or field path. Pass a string to index a top-level field and an array of strings for nested fields.
   */
  ;

  _proto.addIndex = function addIndex(field) {
    this._searchableFields.push(field);

    this.indexDocuments_(this._documents, [field]);
  }
  /**
   * Search all documents for ones matching the specified query text.
   * @param query
   * @returns {Array<Object>}
   */
  ;

  _proto.search = function search(query) {
    var tokens = this._tokenizer.tokenize(this._sanitizer.sanitize(query));

    return this._searchIndex.search(tokens, this._documents);
  }
  /**
   * @param documents
   * @param _searchableFields Array containing property names and paths (lists of property names) to nested values
   * @private
   */
  ;

  _proto.indexDocuments_ = function indexDocuments_(documents, _searchableFields) {
    this._initialized = true;
    var indexStrategy = this._indexStrategy;
    var sanitizer = this._sanitizer;
    var searchIndex = this._searchIndex;
    var tokenizer = this._tokenizer;
    var uidFieldName = this._uidFieldName;

    for (var di = 0, numDocuments = documents.length; di < numDocuments; di++) {
      var doc = documents[di];
      var uid;

      if (uidFieldName instanceof Array) {
        uid = getNestedFieldValue(doc, uidFieldName);
      } else {
        uid = doc[uidFieldName];
      }

      for (var sfi = 0, numSearchableFields = _searchableFields.length; sfi < numSearchableFields; sfi++) {
        var fieldValue;
        var searchableField = _searchableFields[sfi];

        if (searchableField instanceof Array) {
          fieldValue = getNestedFieldValue(doc, searchableField);
        } else {
          fieldValue = doc[searchableField];
        }

        if (fieldValue != null && typeof fieldValue !== 'string' && fieldValue.toString) {
          fieldValue = fieldValue.toString();
        }

        if (typeof fieldValue === 'string') {
          var fieldTokens = tokenizer.tokenize(sanitizer.sanitize(fieldValue));

          for (var fti = 0, numFieldValues = fieldTokens.length; fti < numFieldValues; fti++) {
            var fieldToken = fieldTokens[fti];
            var expandedTokens = indexStrategy.expandToken(fieldToken);

            for (var eti = 0, nummExpandedTokens = expandedTokens.length; eti < nummExpandedTokens; eti++) {
              var expandedToken = expandedTokens[eti];
              searchIndex.indexDocument(expandedToken, uid, doc);
            }
          }
        }
      }
    }
  };

  _createClass(Search, [{
    key: "indexStrategy",
    set: function set(value) {
      if (this._initialized) {
        throw Error('IIndexStrategy cannot be set after initialization');
      }

      this._indexStrategy = value;
    },
    get: function get() {
      return this._indexStrategy;
    }
    /**
     * Override the default text sanitizing strategy.
     * @param value Custom text sanitizing strategy
     * @throws Error if documents have already been indexed by this search instance
     */

  }, {
    key: "sanitizer",
    set: function set(value) {
      if (this._initialized) {
        throw Error('ISanitizer cannot be set after initialization');
      }

      this._sanitizer = value;
    },
    get: function get() {
      return this._sanitizer;
    }
    /**
     * Override the default search index strategy.
     * @param value Custom search index strategy
     * @throws Error if documents have already been indexed
     */

  }, {
    key: "searchIndex",
    set: function set(value) {
      if (this._initialized) {
        throw Error('ISearchIndex cannot be set after initialization');
      }

      this._searchIndex = value;
    },
    get: function get() {
      return this._searchIndex;
    }
    /**
     * Override the default text tokenizing strategy.
     * @param value Custom text tokenizing strategy
     * @throws Error if documents have already been indexed by this search instance
     */

  }, {
    key: "tokenizer",
    set: function set(value) {
      if (this._initialized) {
        throw Error('ITokenizer cannot be set after initialization');
      }

      this._tokenizer = value;
    },
    get: function get() {
      return this._tokenizer;
    }
  }]);

  return Search;
}();

/**
 * This utility highlights the occurrences of tokens within a string of text. It can be used to give visual indicators
 * of match criteria within searchable fields.
 *
 * <p>For performance purposes this highlighter only works with full-word or prefix token indexes.
 */
var TokenHighlighter = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param opt_indexStrategy Index strategy used by Search
   * @param opt_sanitizer Sanitizer used by Search
   * @param opt_wrapperTagName Optional wrapper tag name; defaults to 'mark' (e.g. <mark>)
   */
  function TokenHighlighter(opt_indexStrategy, opt_sanitizer, opt_wrapperTagName) {
    this._indexStrategy = opt_indexStrategy || new PrefixIndexStrategy();
    this._sanitizer = opt_sanitizer || new LowerCaseSanitizer();
    this._wrapperTagName = opt_wrapperTagName || 'mark';
  }
  /**
   * Highlights token occurrences within a string by wrapping them with a DOM element.
   *
   * @param text e.g. "john wayne"
   * @param tokens e.g. ["wa"]
   * @returns {string} e.g. "john <mark>wa</mark>yne"
   */


  var _proto = TokenHighlighter.prototype;

  _proto.highlight = function highlight(text, tokens) {
    var tagsLength = this._wrapText('').length;

    var tokenDictionary = Object.create(null); // Create a token map for easier lookup below.

    for (var i = 0, numTokens = tokens.length; i < numTokens; i++) {
      var token = this._sanitizer.sanitize(tokens[i]);

      var expandedTokens = this._indexStrategy.expandToken(token);

      for (var j = 0, numExpandedTokens = expandedTokens.length; j < numExpandedTokens; j++) {
        var expandedToken = expandedTokens[j];

        if (!tokenDictionary[expandedToken]) {
          tokenDictionary[expandedToken] = [token];
        } else {
          tokenDictionary[expandedToken].push(token);
        }
      }
    } // Track actualCurrentWord and sanitizedCurrentWord separately in case we encounter nested tags.


    var actualCurrentWord = '';
    var sanitizedCurrentWord = '';
    var currentWordStartIndex = 0; // Note this assumes either prefix or full word matching.

    for (var i = 0, textLength = text.length; i < textLength; i++) {
      var character = text.charAt(i);

      if (character === ' ') {
        actualCurrentWord = '';
        sanitizedCurrentWord = '';
        currentWordStartIndex = i + 1;
      } else {
        actualCurrentWord += character;
        sanitizedCurrentWord += this._sanitizer.sanitize(character);
      }

      if (tokenDictionary[sanitizedCurrentWord] && tokenDictionary[sanitizedCurrentWord].indexOf(sanitizedCurrentWord) >= 0) {
        actualCurrentWord = this._wrapText(actualCurrentWord);
        text = text.substring(0, currentWordStartIndex) + actualCurrentWord + text.substring(i + 1);
        i += tagsLength;
        textLength += tagsLength;
      }
    }

    return text;
  }
  /**
   * @param text to wrap
   * @returns Text wrapped by wrapper tag (e.g. "foo" becomes "<mark>foo</mark>")
   * @private
   */
  ;

  _proto._wrapText = function _wrapText(text) {
    var tagName = this._wrapperTagName;
    return "<" + tagName + ">" + text + "</" + tagName + ">";
  };

  return TokenHighlighter;
}();




/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/ (function(module) {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, 
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function l(window, document, Date) { // Pass in the window Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes,
		/**
		 * @type { LazySizesConfigPartial }
		 */
		lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			fastLoadedClass: 'ls-is-cached',
			iframeLoadMode: 0,
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			/**
			 * @type { LazySizesConfigPartial }
			 */
			cfg: lazySizesCfg,
			/**
			 * @type { true }
			 */
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	/**
	 * @param elem { Element }
	 * @param name { string }
	 * @param detail { any }
	 * @param noBubbles { boolean }
	 * @param noCancelable { boolean }
	 * @returns { CustomEvent }
	 */
	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	/**
	 *
	 * @param elem { Element }
	 * @param parent { Element }
	 * @param [width] {number}
	 * @returns {number}
	 */
	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			var loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode;

			// loadMode can be also a string!
			if (loadMode == 0) {
				elem.contentWindow.location.replace(src);
			} else if (loadMode == 1) {
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, lazySizesCfg.fastLoadedClass);
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		/**
		 *
		 * @param elem { Element }
		 */
		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		/**
		 *
		 * @param elem {Element}
		 * @param dataAttr
		 * @param [width] { number }
		 */
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		/**
		 * @type { LazySizesConfigPartial }
		 */
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/*!*****************************!*\
  !*** ./src/js/app/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _setTabIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTabIndex */ "./src/js/app/setTabIndex.js");
/* harmony import */ var _colorModeToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorModeToggle */ "./src/js/app/colorModeToggle.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ "./src/js/app/grid.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/js/app/modal.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ "./src/js/app/search.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_6__);







(0,_setTabIndex__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_grid__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_colorModeToggle__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_modal__WEBPACK_IMPORTED_MODULE_4__.default)(); // eslint-disable-next-line no-undef

if (typeof SEARCH_API !== 'undefined') {
  (0,_search__WEBPACK_IMPORTED_MODULE_5__.default)();
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC8uL25vZGVfbW9kdWxlcy9AdHJ5Z2hvc3QvY29udGVudC1hcGkvZXMvY29udGVudC1hcGkuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9zcmMvanMvYXBwL2NvbG9yTW9kZVRvZ2dsZS5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL3NyYy9qcy9hcHAvZm9jdXNUcmFwLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vc3JjL2pzL2FwcC9ncmlkLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vc3JjL2pzL2FwcC9tb2RhbC5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL3NyYy9qcy9hcHAvc2VhcmNoLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vc3JjL2pzL2FwcC9zZXRUYWJJbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL25vZGVfbW9kdWxlcy9qcy1zZWFyY2gvZGlzdC9lc20vanMtc2VhcmNoLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9sYXp5c2l6ZXMuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzZlZWUiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NtYXJ0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbWFydC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NtYXJ0Ly4vc3JjL2pzL2FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVDb2xvckJ0bnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRDb2xvck1vZGUiLCJ3aW5kb3ciLCJDU1MiLCJzdXBwb3J0cyIsInRvZ2dsZUNvbG9yTW9kZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJGT0NVU0FCTEVfRUwiLCJjdXJyZW50Rm9jdXMiLCJjaGVja0Rpc3BsYXlTdGF0dXMiLCJlbCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXROb25IaWRkZW5MYXN0RWwiLCJsYXN0RWwiLCJsZW5ndGgiLCJwZW51bHRpbWF0ZUVsIiwiY29uZmlndXJlRm9jdXNhYmxlRWxlbWVudHMiLCJjb250YWluZXJFbCIsImZvY3VzYWJsZUVsIiwiZmlyc3RFbFRvRm9jdXMiLCJmaXJzdFRhYlN0b3AiLCJsYXN0VGFiU3RvcCIsInRyYXBGb2N1cyIsInNpZGVNZW51RWwiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJ0YWJLZXlIYW5kbGVyIiwidGFicyIsImtleUNvZGUiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwicmVsZWFzZUZvY3VzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdyaWRDb250YWluZXJzIiwidXBkYXRlTnVtYmVyIiwibnVtIiwidHlwZSIsImFkZCIsImNvdW50Q2hpbGRyZW4iLCJncmlkQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJpIiwibnVtT2ZDaGlsZHJlbiIsImdyaWRJbml0IiwicmVxdWlyZSIsInNlYXJjaEJ0biIsImdldEVsZW1lbnRCeUlkIiwibVNlYXJjaEJ0biIsIm1lbnVCdG4iLCJjbG9zZUJ0bnMiLCJTRUFSQ0hfQVBJIiwiYnRucyIsIm1vZGFsRm4iLCJjbG9zZSIsIm1vZGFsIiwiYm9keSIsInJlbW92ZSIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY2xvc2VIYW5kbGVyIiwiY2xvc2VzdCIsIm9wZW5IYW5kbGVyIiwiZGF0YXNldCIsInRhcmdldCIsIm5vblRhcmdldENsb3NlSGFuZGxlciIsImV2IiwiY2xvc2VCeUVzY0hhbmRsZXIiLCJrZXkiLCJzZWFyY2hNb2RhbCIsImh0bWxSZXBsYWNlIiwic3RyIiwicmVwbGFjZSIsImNyZWF0ZVRpbWVzdGFtcCIsIm1pbnV0ZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93Iiwic3RhdGVMb2FkZXIiLCJzdGF0ZSIsInN0YXR1cyIsInNlYXJjaCIsImZyZXNoQXBpIiwiR2hvc3RDb250ZW50QVBJIiwidXJsIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJ2ZXJzaW9uIiwiYXBpIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZUludCIsImdldEl0ZW0iLCJwb3N0cyIsImJyb3dzZSIsImluY2x1ZGUiLCJmb3JtYXRzIiwibGltaXQiLCJ0aGVuIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInBhcnNlIiwiRXJyb3IiLCJzZWFyY2hJbnB1dCIsInJ1blNlYXJjaEJ0biIsInNlYXJjaFJlc3VsdEhlYWRlciIsInNlYXJjaFJlc3VsdCIsImRhdGVGb3JtYXR0ZXIiLCJpc29EYXRlIiwib3B0aW9ucyIsInllYXIiLCJtb250aCIsImRheSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ1bmRlZmluZWQiLCJzZWFyY2hQb3N0cyIsInRlcm0iLCJpbm5lckhUTUwiLCJuZXdTZWFyY2giLCJKc1NlYXJjaCIsImFkZEluZGV4IiwiYWRkRG9jdW1lbnRzIiwicmVzdWx0IiwidGV4dENvbnRlbnQiLCJwb3N0IiwicHVibGlzaGVkX2F0IiwidGl0bGUiLCJleGNlcnB0IiwiZW50ZXJTZWFyY2hUZXJtQ2hlY2siLCJyZW1vdmVOYXZMaW5rcyIsIm1lbnVOYXZMaW5rcyIsInNldFRhYkluZGV4IiwiZ3JpZCIsImNvbG9yTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNIQUFzSCxxQkFBTSxtQkFBbUIscUJBQU07O0FBRXJKO0FBQ0Esa0JBQWtCLFlBQVksRUFBRTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWEsRUFBRTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTSxtQkFBbUIsVUFBVSxFQUFFLEVBQUU7QUFDeEUsQ0FBQzs7QUFFRCw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RSxPQUFPOztBQUVwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG1EQUFtRDtBQUM3RixHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxzREFBc0Q7O0FBRXREOztBQUVBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakYsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEMsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGdCQUFnQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNELENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWSxlQUFlO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEs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QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLEdBQUc7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLElBQUk7QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsZUFBZTtBQUM3RDtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLDhDQUE4QyxhQUFhO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxhQUFhO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlGQUF5RjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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RWxEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVMsV0FBVzs7QUFFcEIseURBQXlEOztBQUV6RCxzR0FBc0csZ0NBQWdDOztBQUV0STtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7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QTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsY0FBYywwQkFBMEIsRUFBRTtXQUMxQyxjQUFjLGVBQWU7V0FDN0IsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTRJLHFEQUFXO0FBQ1hDLDhDQUFJO0FBQ0pDLHlEQUFTO0FBQ1R6RiwrQ0FBTyxHLENBRVA7O0FBQ0EsSUFBSSxPQUFPRixVQUFQLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ3JDK0Isa0RBQU07QUFDUCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWxfMSA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGNvbW1vbmpzR2xvYmFsID09ICdvYmplY3QnICYmIGNvbW1vbmpzR2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIGZhaWxzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG52YXIgZGVzY3JpcHRvcnMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcblxudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciQ0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkNCAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbnZhciBmJDUgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkNCh0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG52YXIgb2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUgPSB7XG5cdGY6IGYkNVxufTtcblxudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG52YXIgdG9TdHJpbmckMSA9IHt9LnRvU3RyaW5nO1xuXG52YXIgY2xhc3NvZlJhdyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmckMS5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBpbmRleGVkT2JqZWN0ID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2ZSYXcoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG5cblxuXG52YXIgdG9JbmRleGVkT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG5cbnZhciBpc09iamVjdCQxID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgYUZ1bmN0aW9uJDEgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG52YXIgZ2V0QnVpbHRJbiA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24kMShnbG9iYWxfMVtuYW1lc3BhY2VdKSA6IGdsb2JhbF8xW25hbWVzcGFjZV0gJiYgZ2xvYmFsXzFbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcblxudmFyIGVuZ2luZVVzZXJBZ2VudCA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcblxudmFyIHByb2Nlc3MkNCA9IGdsb2JhbF8xLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbF8xLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzJDQgJiYgcHJvY2VzcyQ0LnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSA8IDQgPyAxIDogbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbn0gZWxzZSBpZiAoZW5naW5lVXNlckFnZW50KSB7XG4gIG1hdGNoID0gZW5naW5lVXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IGVuZ2luZVVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG4gIH1cbn1cblxudmFyIGVuZ2luZVY4VmVyc2lvbiA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xuXG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbnZhciBuYXRpdmVTeW1ib2wgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIHJldHVybiAhU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBlbmdpbmVWOFZlcnNpb24gJiYgZW5naW5lVjhWZXJzaW9uIDwgNDE7XG59KTtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG5cblxudmFyIHVzZVN5bWJvbEFzVWlkID0gbmF0aXZlU3ltYm9sXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuXG52YXIgaXNTeW1ib2wgPSB1c2VTeW1ib2xBc1VpZCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QoaXQpIGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0JDEodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0JDEodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCQxKHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxudmFyIHNldEdsb2JhbCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbF8xLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbF8xW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUkMSA9IGdsb2JhbF8xW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG52YXIgc2hhcmVkU3RvcmUgPSBzdG9yZSQxO1xuXG52YXIgc2hhcmVkID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHNoYXJlZFN0b3JlW2tleV0gfHwgKHNoYXJlZFN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjE2LjAnLFxuICBtb2RlOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xufSk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG52YXIgdG9PYmplY3QgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGhhcyQxID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbCh0b09iamVjdChpdCksIGtleSk7XG59O1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG52YXIgdWlkID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sJDEgPSBnbG9iYWxfMS5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gdXNlU3ltYm9sQXNVaWQgPyBTeW1ib2wkMSA6IFN5bWJvbCQxICYmIFN5bWJvbCQxLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG52YXIgd2VsbEtub3duU3ltYm9sID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMkMShXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpIHx8ICEobmF0aXZlU3ltYm9sIHx8IHR5cGVvZiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPT0gJ3N0cmluZycpKSB7XG4gICAgaWYgKG5hdGl2ZVN5bWJvbCAmJiBoYXMkMShTeW1ib2wkMSwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbCQxW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gICAgfVxuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuXG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxudmFyIHRvUHJpbWl0aXZlID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QkMShpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBpbnB1dFtUT19QUklNSVRJVkVdO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0JDEocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxudmFyIHRvUHJvcGVydHlLZXkgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDogU3RyaW5nKGtleSk7XG59O1xuXG52YXIgZG9jdW1lbnQkMyA9IGdsb2JhbF8xLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QkMShkb2N1bWVudCQzKSAmJiBpc09iamVjdCQxKGRvY3VtZW50JDMuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50JDMuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbnZhciBpZThEb21EZWZpbmUgPSAhZGVzY3JpcHRvcnMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aWVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxudmFyIGYkNCA9IGRlc2NyaXB0b3JzID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoaWU4RG9tRGVmaW5lKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMkMShPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighb2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cbnZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSB7XG5cdGY6IGYkNFxufTtcblxudmFyIGFuT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QkMShpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxudmFyIGYkMyA9IGRlc2NyaXB0b3JzID8gJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoaWU4RG9tRGVmaW5lKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHkgPSB7XG5cdGY6IGYkM1xufTtcblxudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IGRlc2NyaXB0b3JzID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0RGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKHR5cGVvZiBzaGFyZWRTdG9yZS5pbnNwZWN0U291cmNlICE9ICdmdW5jdGlvbicpIHtcbiAgc2hhcmVkU3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xufVxuXG52YXIgaW5zcGVjdFNvdXJjZSA9IHNoYXJlZFN0b3JlLmluc3BlY3RTb3VyY2U7XG5cbnZhciBXZWFrTWFwJDEgPSBnbG9iYWxfMS5XZWFrTWFwO1xuXG52YXIgbmF0aXZlV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwJDEgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCQxKSk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbnZhciBzaGFyZWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cbnZhciBoaWRkZW5LZXlzJDEgPSB7fTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBXZWFrTWFwID0gZ2xvYmFsXzEuV2Vha01hcDtcbnZhciBzZXQkMSwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldCQxKGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0JDEoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChuYXRpdmVXZWFrTWFwIHx8IHNoYXJlZFN0b3JlLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZFN0b3JlLnN0YXRlIHx8IChzaGFyZWRTdG9yZS5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQkMSA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAod21oYXMuY2FsbChzdG9yZSwgaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5cyQxW1NUQVRFXSA9IHRydWU7XG4gIHNldCQxID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXMkMShpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzJDEoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzJDEoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxudmFyIGludGVybmFsU3RhdGUgPSB7XG4gIHNldDogc2V0JDEsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG5cbnZhciByZWRlZmluZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgdmFyIHN0YXRlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzJDEodmFsdWUsICduYW1lJykpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIH1cbiAgICBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgICBpZiAoIXN0YXRlLnNvdXJjZSkge1xuICAgICAgc3RhdGUuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICAgIH1cbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsXzEpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG59KTtcblxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG52YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcblxudmFyIG1pbiQzID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG52YXIgdG9MZW5ndGggPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbiQzKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiQyID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbnZhciB0b0Fic29sdXRlSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbiQyKGludGVnZXIsIGxlbmd0aCk7XG59O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCQxID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbnZhciBhcnJheUluY2x1ZGVzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCQxKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZCQxKGZhbHNlKVxufTtcblxudmFyIGluZGV4T2YgPSBhcnJheUluY2x1ZGVzLmluZGV4T2Y7XG5cblxudmFyIG9iamVjdEtleXNJbnRlcm5hbCA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzJDEoaGlkZGVuS2V5cyQxLCBrZXkpICYmIGhhcyQxKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyQxKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xudmFyIGVudW1CdWdLZXlzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG52YXIgZiQyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBvYmplY3RLZXlzSW50ZXJuYWwoTywgaGlkZGVuS2V5cyk7XG59O1xuXG52YXIgb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyA9IHtcblx0ZjogZiQyXG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG52YXIgZiQxID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxudmFyIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyA9IHtcblx0ZjogZiQxXG59O1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgb3duS2V5cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scy5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcblxudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IG9iamVjdERlZmluZVByb3BlcnR5LmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXMkMSh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxudmFyIGlzRm9yY2VkXzEgPSBpc0ZvcmNlZDtcblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciQzID0gb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLmY7XG5cblxuXG5cblxuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbnZhciBfZXhwb3J0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbF8xO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbF8xW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxfMVtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciQzKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkXzEoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuXG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gaW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCQxID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG5fZXhwb3J0KHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCQxIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gb2JqZWN0S2V5c0ludGVybmFsKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxudmFyIG9iamVjdERlZmluZVByb3BlcnRpZXMgPSBkZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBvYmplY3REZWZpbmVQcm9wZXJ0eS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcblxudmFyIGh0bWwgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcblxuLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cblxuXG5cblxuXG5cblxuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmIChpZnJhbWUuc3R5bGUpIHtcbiAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICAgIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICAgIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICAgIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gICAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbiAgfVxufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudCA/XG4gICAgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIDogLy8gb2xkIElFXG4gICAgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKCkgfHxcbiAgICBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5cyQxW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBvYmplY3REZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUkMSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGUkMVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSB7XG4gIG9iamVjdERlZmluZVByb3BlcnR5LmYoQXJyYXlQcm90b3R5cGUkMSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IG9iamVjdENyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlJDFbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxudmFyICRpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMuaW5jbHVkZXM7XG5cblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuX2V4cG9ydCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcblxudmFyIHRvU3RyaW5nXzEgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzU3ltYm9sKGFyZ3VtZW50KSkgdGhyb3cgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcbn07XG5cbnZhciBNQVRDSCQxID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4vLyBgSXNSZWdFeHBgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc3JlZ2V4cFxudmFyIGlzUmVnZXhwID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0JDEoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSCQxXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjbGFzc29mUmF3KGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuXG52YXIgbm90QVJlZ2V4cCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdleHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxudmFyIGNvcnJlY3RJc1JlZ2V4cExvZ2ljID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHZhciByZWdleHAgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJDIgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZjtcblxuXG5cblxuXG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXN0cmluZy1wcm90b3R5cGUtZW5kc3dpdGggLS0gc2FmZVxudmFyICRlbmRzV2l0aCA9ICcnLmVuZHNXaXRoO1xudmFyIG1pbiQxID0gTWF0aC5taW47XG5cbnZhciBDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyQxID0gY29ycmVjdElzUmVnZXhwTG9naWMoJ2VuZHNXaXRoJyk7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9wdWxsLzcwMlxudmFyIE1ETl9QT0xZRklMTF9CVUckMSA9ICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyQxICYmICEhZnVuY3Rpb24gKCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciQyKFN0cmluZy5wcm90b3R5cGUsICdlbmRzV2l0aCcpO1xuICByZXR1cm4gZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci53cml0YWJsZTtcbn0oKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmVuZHN3aXRoXG5fZXhwb3J0KHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIU1ETl9QT0xZRklMTF9CVUckMSAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMkMSB9LCB7XG4gIGVuZHNXaXRoOiBmdW5jdGlvbiBlbmRzV2l0aChzZWFyY2hTdHJpbmcgLyogLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pIHtcbiAgICB2YXIgdGhhdCA9IHRvU3RyaW5nXzEocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgbm90QVJlZ2V4cChzZWFyY2hTdHJpbmcpO1xuICAgIHZhciBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aCk7XG4gICAgdmFyIGVuZCA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBtaW4kMSh0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbik7XG4gICAgdmFyIHNlYXJjaCA9IHRvU3RyaW5nXzEoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJGVuZHNXaXRoXG4gICAgICA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkMSA9IG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvci5mO1xuXG5cblxuXG5cblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc3RyaW5nLXByb3RvdHlwZS1zdGFydHN3aXRoIC0tIHNhZmVcbnZhciAkc3RhcnRzV2l0aCA9ICcnLnN0YXJ0c1dpdGg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbnZhciBDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyA9IGNvcnJlY3RJc1JlZ2V4cExvZ2ljKCdzdGFydHNXaXRoJyk7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9wdWxsLzcwMlxudmFyIE1ETl9QT0xZRklMTF9CVUcgPSAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgJiYgISFmdW5jdGlvbiAoKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJDEoU3RyaW5nLnByb3RvdHlwZSwgJ3N0YXJ0c1dpdGgnKTtcbiAgcmV0dXJuIGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3Iud3JpdGFibGU7XG59KCk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnN0YXJ0c3dpdGhcbl9leHBvcnQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhTUROX1BPTFlGSUxMX0JVRyAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgfSwge1xuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHZhciB0aGF0ID0gdG9TdHJpbmdfMShyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICBub3RBUmVnZXhwKHNlYXJjaFN0cmluZyk7XG4gICAgdmFyIGluZGV4ID0gdG9MZW5ndGgobWluKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpO1xuICAgIHZhciBzZWFyY2ggPSB0b1N0cmluZ18xKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRzdGFydHNXaXRoXG4gICAgICA/ICRzdGFydHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBpbmRleClcbiAgICAgIDogdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcblxudmFyIFRPX1NUUklOR19UQUckMiA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBRyQyXSA9ICd6JztcblxudmFyIHRvU3RyaW5nVGFnU3VwcG9ydCA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuXG52YXIgVE9fU1RSSU5HX1RBRyQxID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2BcbnZhciBjbGFzc29mID0gdG9TdHJpbmdUYWdTdXBwb3J0ID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUckMSkpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xudmFyIG9iamVjdFRvU3RyaW5nID0gdG9TdHJpbmdUYWdTdXBwb3J0ID8ge30udG9TdHJpbmcgOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoIXRvU3RyaW5nVGFnU3VwcG9ydCkge1xuICByZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBvYmplY3RUb1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG59XG5cbnZhciBuYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgPSBnbG9iYWxfMS5Qcm9taXNlO1xuXG52YXIgcmVkZWZpbmVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdCQxKGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gLS0gc2FmZSAqL1xuXG5cblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LXNldHByb3RvdHlwZW9mIC0tIHNhZmVcbnZhciBvYmplY3RTZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQ7XG4gICAgc2V0dGVyLmNhbGwodGVzdCwgW10pO1xuICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIGFuT2JqZWN0KE8pO1xuICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG4gICAgaWYgKENPUlJFQ1RfU0VUVEVSKSBzZXR0ZXIuY2FsbChPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcblxudmFyIGRlZmluZVByb3BlcnR5JDIgPSBvYmplY3REZWZpbmVQcm9wZXJ0eS5mO1xuXG5cblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBzZXRUb1N0cmluZ1RhZyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMkMShpdCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5JDIoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuXG52YXIgU1BFQ0lFUyQ0ID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBzZXRTcGVjaWVzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUpIHtcbiAgdmFyIENvbnN0cnVjdG9yID0gZ2V0QnVpbHRJbihDT05TVFJVQ1RPUl9OQU1FKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gb2JqZWN0RGVmaW5lUHJvcGVydHkuZjtcblxuICBpZiAoZGVzY3JpcHRvcnMgJiYgQ29uc3RydWN0b3IgJiYgIUNvbnN0cnVjdG9yW1NQRUNJRVMkNF0pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUyQ0LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICB9KTtcbiAgfVxufTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG52YXIgYW5JbnN0YW5jZSA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCAnICsgKG5hbWUgPyBuYW1lICsgJyAnIDogJycpICsgJ2ludm9jYXRpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG52YXIgaXRlcmF0b3JzID0ge307XG5cbnZhciBJVEVSQVRPUiQyID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChpdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SJDJdID09PSBpdCk7XG59O1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBmdW5jdGlvbkJpbmRDb250ZXh0ID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG52YXIgSVRFUkFUT1IkMSA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUiQxXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBpdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxudmFyIGl0ZXJhdG9yQ2xvc2UgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSkudmFsdWU7XG4gIH1cbn07XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIGl0ZXJhdGUgPSBmdW5jdGlvbiAoaXRlcmFibGUsIHVuYm91bmRGdW5jdGlvbiwgb3B0aW9ucykge1xuICB2YXIgdGhhdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aGF0O1xuICB2YXIgQVNfRU5UUklFUyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5BU19FTlRSSUVTKTtcbiAgdmFyIElTX0lURVJBVE9SID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX0lURVJBVE9SKTtcbiAgdmFyIElOVEVSUlVQVEVEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklOVEVSUlVQVEVEKTtcbiAgdmFyIGZuID0gZnVuY3Rpb25CaW5kQ29udGV4dCh1bmJvdW5kRnVuY3Rpb24sIHRoYXQsIDEgKyBBU19FTlRSSUVTICsgSU5URVJSVVBURUQpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIHZhciBzdG9wID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgY29uZGl0aW9uKTtcbiAgfTtcblxuICB2YXIgY2FsbEZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKEFTX0VOVFJJRVMpIHtcbiAgICAgIGFuT2JqZWN0KHZhbHVlKTtcbiAgICAgIHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSwgc3RvcCkgOiBmbih2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgIH0gcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWUsIHN0b3ApIDogZm4odmFsdWUpO1xuICB9O1xuXG4gIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcblxudmFyIFNQRUNJRVMkMyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgU3BlY2llc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVMkM10pID09IHVuZGVmaW5lZCA/IGRlZmF1bHRDb25zdHJ1Y3RvciA6IGFGdW5jdGlvbihTKTtcbn07XG5cbnZhciBlbmdpbmVJc0lvcyA9IC8oPzppcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQvaS50ZXN0KGVuZ2luZVVzZXJBZ2VudCk7XG5cbnZhciBlbmdpbmVJc05vZGUgPSBjbGFzc29mUmF3KGdsb2JhbF8xLnByb2Nlc3MpID09ICdwcm9jZXNzJztcblxudmFyIHNldCA9IGdsb2JhbF8xLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhciA9IGdsb2JhbF8xLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MkMyA9IGdsb2JhbF8xLnByb2Nlc3M7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWxfMS5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbF8xLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgbG9jYXRpb24sIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG50cnkge1xuICAvLyBEZW5vIHRocm93cyBhIFJlZmVyZW5jZUVycm9yIG9uIGBsb2NhdGlvbmAgYWNjZXNzIHdpdGhvdXQgYC0tbG9jYXRpb25gIGZsYWdcbiAgbG9jYXRpb24gPSBnbG9iYWxfMS5sb2NhdGlvbjtcbn0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxudmFyIHJ1biA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG5cbnZhciBydW5uZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBydW4oaWQpO1xuICB9O1xufTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bihldmVudC5kYXRhKTtcbn07XG5cbnZhciBwb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIG9sZCBlbmdpbmVzIGhhdmUgbm90IGxvY2F0aW9uLm9yaWdpblxuICBnbG9iYWxfMS5wb3N0TWVzc2FnZShTdHJpbmcoaWQpLCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0KTtcbn07XG5cbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0IHx8ICFjbGVhcikge1xuICBzZXQgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIHNwZWMgcmVxdWlyZW1lbnRcbiAgICAgICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKGVuZ2luZUlzTm9kZSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzJDMubmV4dFRpY2socnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIC8vIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjI0XG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwgJiYgIWVuZ2luZUlzSW9zKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBmdW5jdGlvbkJpbmRDb250ZXh0KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChcbiAgICBnbG9iYWxfMS5hZGRFdmVudExpc3RlbmVyICYmXG4gICAgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiZcbiAgICAhZ2xvYmFsXzEuaW1wb3J0U2NyaXB0cyAmJlxuICAgIGxvY2F0aW9uICYmIGxvY2F0aW9uLnByb3RvY29sICE9PSAnZmlsZTonICYmXG4gICAgIWZhaWxzKHBvc3QpXG4gICkge1xuICAgIGRlZmVyID0gcG9zdDtcbiAgICBnbG9iYWxfMS5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChydW5uZXIoaWQpLCAwKTtcbiAgICB9O1xuICB9XG59XG5cbnZhciB0YXNrJDEgPSB7XG4gIHNldDogc2V0LFxuICBjbGVhcjogY2xlYXJcbn07XG5cbnZhciBlbmdpbmVJc1dlYm9zV2Via2l0ID0gL3dlYjBzKD8hLipjaHJvbWUpL2kudGVzdChlbmdpbmVVc2VyQWdlbnQpO1xuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLmY7XG52YXIgbWFjcm90YXNrID0gdGFzayQxLnNldDtcblxuXG5cblxudmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSBnbG9iYWxfMS5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbF8xLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgZG9jdW1lbnQkMiA9IGdsb2JhbF8xLmRvY3VtZW50O1xudmFyIHByb2Nlc3MkMiA9IGdsb2JhbF8xLnByb2Nlc3M7XG52YXIgUHJvbWlzZSQxID0gZ2xvYmFsXzEuUHJvbWlzZTtcbi8vIE5vZGUuanMgMTEgc2hvd3MgRXhwZXJpbWVudGFsV2FybmluZyBvbiBnZXR0aW5nIGBxdWV1ZU1pY3JvdGFza2BcbnZhciBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsXzEsICdxdWV1ZU1pY3JvdGFzaycpO1xudmFyIHF1ZXVlTWljcm90YXNrID0gcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yICYmIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvci52YWx1ZTtcblxudmFyIGZsdXNoLCBoZWFkLCBsYXN0LCBub3RpZnkkMSwgdG9nZ2xlLCBub2RlLCBwcm9taXNlLCB0aGVuO1xuXG4vLyBtb2Rlcm4gZW5naW5lcyBoYXZlIHF1ZXVlTWljcm90YXNrIG1ldGhvZFxuaWYgKCFxdWV1ZU1pY3JvdGFzaykge1xuICBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoZW5naW5lSXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzJDIuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5JDEoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICAvLyBhbHNvIGV4Y2VwdCBXZWJPUyBXZWJraXQgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg5OFxuICBpZiAoIWVuZ2luZUlzSW9zICYmICFlbmdpbmVJc05vZGUgJiYgIWVuZ2luZUlzV2Vib3NXZWJraXQgJiYgTXV0YXRpb25PYnNlcnZlciAmJiBkb2N1bWVudCQyKSB7XG4gICAgdG9nZ2xlID0gdHJ1ZTtcbiAgICBub2RlID0gZG9jdW1lbnQkMi5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuICAgIG5vdGlmeSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UkMSAmJiBQcm9taXNlJDEucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgLy8gd29ya2Fyb3VuZCBvZiBXZWJLaXQgfiBpT1MgU2FmYXJpIDEwLjEgYnVnXG4gICAgcHJvbWlzZS5jb25zdHJ1Y3RvciA9IFByb21pc2UkMTtcbiAgICB0aGVuID0gcHJvbWlzZS50aGVuO1xuICAgIG5vdGlmeSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhlbi5jYWxsKHByb21pc2UsIGZsdXNoKTtcbiAgICB9O1xuICAvLyBOb2RlLmpzIHdpdGhvdXQgcHJvbWlzZXNcbiAgfSBlbHNlIGlmIChlbmdpbmVJc05vZGUpIHtcbiAgICBub3RpZnkkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MkMi5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsXzEsIGZsdXNoKTtcbiAgICB9O1xuICB9XG59XG5cbnZhciBtaWNyb3Rhc2sgPSBxdWV1ZU1pY3JvdGFzayB8fCBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICBpZiAoIWhlYWQpIHtcbiAgICBoZWFkID0gdGFzaztcbiAgICBub3RpZnkkMSgpO1xuICB9IGxhc3QgPSB0YXNrO1xufTtcblxudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG5cbi8vIGBOZXdQcm9taXNlQ2FwYWJpbGl0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW5ld3Byb21pc2VjYXBhYmlsaXR5XG52YXIgZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkkMSA9IHtcblx0ZjogZlxufTtcblxudmFyIHByb21pc2VSZXNvbHZlID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCQxKHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSQxLmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG52YXIgaG9zdFJlcG9ydEVycm9ycyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBjb25zb2xlID0gZ2xvYmFsXzEuY29uc29sZTtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjb25zb2xlLmVycm9yKGEpIDogY29uc29sZS5lcnJvcihhLCBiKTtcbiAgfVxufTtcblxudmFyIHBlcmZvcm0gPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSwgdmFsdWU6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yOiB0cnVlLCB2YWx1ZTogZXJyb3IgfTtcbiAgfVxufTtcblxudmFyIGVuZ2luZUlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCc7XG5cbnZhciB0YXNrID0gdGFzayQxLnNldDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBTUEVDSUVTJDIgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmdldDtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmdldHRlckZvcihQUk9NSVNFKTtcbnZhciBOYXRpdmVQcm9taXNlUHJvdG90eXBlID0gbmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yICYmIG5hdGl2ZVByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yID0gbmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yO1xudmFyIFByb21pc2VDb25zdHJ1Y3RvclByb3RvdHlwZSA9IE5hdGl2ZVByb21pc2VQcm90b3R5cGU7XG52YXIgVHlwZUVycm9yJDEgPSBnbG9iYWxfMS5UeXBlRXJyb3I7XG52YXIgZG9jdW1lbnQkMSA9IGdsb2JhbF8xLmRvY3VtZW50O1xudmFyIHByb2Nlc3MkMSA9IGdsb2JhbF8xLnByb2Nlc3M7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSQxLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG52YXIgRElTUEFUQ0hfRVZFTlQgPSAhIShkb2N1bWVudCQxICYmIGRvY3VtZW50JDEuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsXzEuZGlzcGF0Y2hFdmVudCk7XG52YXIgTkFUSVZFX1JFSkVDVElPTl9FVkVOVCA9IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJztcbnZhciBVTkhBTkRMRURfUkVKRUNUSU9OID0gJ3VuaGFuZGxlZHJlamVjdGlvbic7XG52YXIgUkVKRUNUSU9OX0hBTkRMRUQgPSAncmVqZWN0aW9uaGFuZGxlZCc7XG52YXIgUEVORElORyA9IDA7XG52YXIgRlVMRklMTEVEID0gMTtcbnZhciBSRUpFQ1RFRCA9IDI7XG52YXIgSEFORExFRCA9IDE7XG52YXIgVU5IQU5ETEVEID0gMjtcbnZhciBTVUJDTEFTU0lORyA9IGZhbHNlO1xudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXIsIG5hdGl2ZVRoZW47XG5cbnZhciBGT1JDRUQkMSA9IGlzRm9yY2VkXzEoUFJPTUlTRSwgZnVuY3Rpb24gKCkge1xuICB2YXIgUFJPTUlTRV9DT05TVFJVQ1RPUl9TT1VSQ0UgPSBpbnNwZWN0U291cmNlKFByb21pc2VDb25zdHJ1Y3Rvcik7XG4gIHZhciBHTE9CQUxfQ09SRV9KU19QUk9NSVNFID0gUFJPTUlTRV9DT05TVFJVQ1RPUl9TT1VSQ0UgIT09IFN0cmluZyhQcm9taXNlQ29uc3RydWN0b3IpO1xuICAvLyBWOCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAvLyBXZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICBpZiAoIUdMT0JBTF9DT1JFX0pTX1BST01JU0UgJiYgZW5naW5lVjhWZXJzaW9uID09PSA2NikgcmV0dXJuIHRydWU7XG4gIC8vIFdlIGNhbid0IHVzZSBAQHNwZWNpZXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG4gIGlmIChlbmdpbmVWOFZlcnNpb24gPj0gNTEgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFBST01JU0VfQ09OU1RSVUNUT1JfU09VUkNFKSkgcmV0dXJuIGZhbHNlO1xuICAvLyBEZXRlY3QgY29ycmVjdG5lc3Mgb2Ygc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSgxKTsgfSk7XG4gIHZhciBGYWtlUHJvbWlzZSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgZXhlYyhmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG4gIH07XG4gIHZhciBjb25zdHJ1Y3RvciA9IHByb21pc2UuY29uc3RydWN0b3IgPSB7fTtcbiAgY29uc3RydWN0b3JbU1BFQ0lFUyQyXSA9IEZha2VQcm9taXNlO1xuICBTVUJDTEFTU0lORyA9IHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIGlmICghU1VCQ0xBU1NJTkcpIHJldHVybiB0cnVlO1xuICAvLyBVbmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gIHJldHVybiAhR0xPQkFMX0NPUkVfSlNfUFJPTUlTRSAmJiBlbmdpbmVJc0Jyb3dzZXIgJiYgIU5BVElWRV9SRUpFQ1RJT05fRVZFTlQ7XG59KTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSBGT1JDRUQkMSB8fCAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKVsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QkMShpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG5cbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoc3RhdGUsIGlzUmVqZWN0KSB7XG4gIGlmIChzdGF0ZS5ub3RpZmllZCkgcmV0dXJuO1xuICBzdGF0ZS5ub3RpZmllZCA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHN0YXRlLnJlYWN0aW9ucztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgb2sgPSBzdGF0ZS5zdGF0ZSA9PSBGVUxGSUxMRUQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gY2hhaW5baW5kZXgrK107XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZWplY3Rpb24gPT09IFVOSEFORExFRCkgb25IYW5kbGVVbmhhbmRsZWQoc3RhdGUpO1xuICAgICAgICAgICAgc3RhdGUucmVqZWN0aW9uID0gSEFORExFRDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gY2FuIHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IkMSgnUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlLnJlYWN0aW9ucyA9IFtdO1xuICAgIHN0YXRlLm5vdGlmaWVkID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFzdGF0ZS5yZWplY3Rpb24pIG9uVW5oYW5kbGVkKHN0YXRlKTtcbiAgfSk7XG59O1xuXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBwcm9taXNlLCByZWFzb24pIHtcbiAgdmFyIGV2ZW50LCBoYW5kbGVyO1xuICBpZiAoRElTUEFUQ0hfRVZFTlQpIHtcbiAgICBldmVudCA9IGRvY3VtZW50JDEuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZXZlbnQucmVhc29uID0gcmVhc29uO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2xvYmFsXzEuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0gZWxzZSBldmVudCA9IHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiByZWFzb24gfTtcbiAgaWYgKCFOQVRJVkVfUkVKRUNUSU9OX0VWRU5UICYmIChoYW5kbGVyID0gZ2xvYmFsXzFbJ29uJyArIG5hbWVdKSkgaGFuZGxlcihldmVudCk7XG4gIGVsc2UgaWYgKG5hbWUgPT09IFVOSEFORExFRF9SRUpFQ1RJT04pIGhvc3RSZXBvcnRFcnJvcnMoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHJlYXNvbik7XG59O1xuXG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbF8xLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBzdGF0ZS5mYWNhZGU7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIElTX1VOSEFORExFRCA9IGlzVW5oYW5kbGVkKHN0YXRlKTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChJU19VTkhBTkRMRUQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZW5naW5lSXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2VzcyQxLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoVU5IQU5ETEVEX1JFSkVDVElPTiwgcHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgc3RhdGUucmVqZWN0aW9uID0gZW5naW5lSXNOb2RlIHx8IGlzVW5oYW5kbGVkKHN0YXRlKSA/IFVOSEFORExFRCA6IEhBTkRMRUQ7XG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB0aHJvdyByZXN1bHQudmFsdWU7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUucmVqZWN0aW9uICE9PSBIQU5ETEVEICYmICFzdGF0ZS5wYXJlbnQ7XG59O1xuXG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbF8xLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBzdGF0ZS5mYWNhZGU7XG4gICAgaWYgKGVuZ2luZUlzTm9kZSkge1xuICAgICAgcHJvY2VzcyQxLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChSRUpFQ1RJT05fSEFORExFRCwgcHJvbWlzZSwgc3RhdGUudmFsdWUpO1xuICB9KTtcbn07XG5cbnZhciBiaW5kJDEgPSBmdW5jdGlvbiAoZm4sIHN0YXRlLCB1bndyYXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZuKHN0YXRlLCB2YWx1ZSwgdW53cmFwKTtcbiAgfTtcbn07XG5cbnZhciBpbnRlcm5hbFJlamVjdCA9IGZ1bmN0aW9uIChzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gIHN0YXRlLnN0YXRlID0gUkVKRUNURUQ7XG4gIG5vdGlmeShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG52YXIgaW50ZXJuYWxSZXNvbHZlID0gZnVuY3Rpb24gKHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgdHJ5IHtcbiAgICBpZiAoc3RhdGUuZmFjYWRlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yJDEoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICB2YXIgdGhlbiA9IGlzVGhlbmFibGUodmFsdWUpO1xuICAgIGlmICh0aGVuKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsXG4gICAgICAgICAgICBiaW5kJDEoaW50ZXJuYWxSZXNvbHZlLCB3cmFwcGVyLCBzdGF0ZSksXG4gICAgICAgICAgICBiaW5kJDEoaW50ZXJuYWxSZWplY3QsIHdyYXBwZXIsIHN0YXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWplY3Qod3JhcHBlciwgZXJyb3IsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gICAgICBzdGF0ZS5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICAgIG5vdGlmeShzdGF0ZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbnRlcm5hbFJlamVjdCh7IGRvbmU6IGZhbHNlIH0sIGVycm9yLCBzdGF0ZSk7XG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoRk9SQ0VEJDEpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUHJvbWlzZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoYmluZCQxKGludGVybmFsUmVzb2x2ZSwgc3RhdGUpLCBiaW5kJDEoaW50ZXJuYWxSZWplY3QsIHN0YXRlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGludGVybmFsUmVqZWN0KHN0YXRlLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBQcm9taXNlQ29uc3RydWN0b3JQcm90b3R5cGUgPSBQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IFBST01JU0UsXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIG5vdGlmaWVkOiBmYWxzZSxcbiAgICAgIHBhcmVudDogZmFsc2UsXG4gICAgICByZWFjdGlvbnM6IFtdLFxuICAgICAgcmVqZWN0aW9uOiBmYWxzZSxcbiAgICAgIHN0YXRlOiBQRU5ESU5HLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZWRlZmluZUFsbChQcm9taXNlQ29uc3RydWN0b3JQcm90b3R5cGUsIHtcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUudGhlbmAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS50aGVuXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUodGhpcyk7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGVuZ2luZUlzTm9kZSA/IHByb2Nlc3MkMS5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICBzdGF0ZS5wYXJlbnQgPSB0cnVlO1xuICAgICAgc3RhdGUucmVhY3Rpb25zLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHN0YXRlLnN0YXRlICE9IFBFTkRJTkcpIG5vdGlmeShzdGF0ZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm9taXNlKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQkMShpbnRlcm5hbFJlc29sdmUsIHN0YXRlKTtcbiAgICB0aGlzLnJlamVjdCA9IGJpbmQkMShpbnRlcm5hbFJlamVjdCwgc3RhdGUpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eSQxLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09IFByb21pc2VDb25zdHJ1Y3RvciB8fCBDID09PSBQcm9taXNlV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTmF0aXZlUHJvbWlzZVByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIG5hdGl2ZVRoZW4gPSBOYXRpdmVQcm9taXNlUHJvdG90eXBlLnRoZW47XG5cbiAgICBpZiAoIVNVQkNMQVNTSU5HKSB7XG4gICAgICAvLyBtYWtlIGBQcm9taXNlI3RoZW5gIHJldHVybiBhIHBvbHlmaWxsZWQgYFByb21pc2VgIGZvciBuYXRpdmUgcHJvbWlzZS1iYXNlZCBBUElzXG4gICAgICByZWRlZmluZShOYXRpdmVQcm9taXNlUHJvdG90eXBlLCAndGhlbicsIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgbmF0aXZlVGhlbi5jYWxsKHRoYXQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY0MFxuICAgICAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG5cbiAgICAgIC8vIG1ha2VzIHN1cmUgdGhhdCBuYXRpdmUgcHJvbWlzZS1iYXNlZCBBUElzIGBQcm9taXNlI2NhdGNoYCBwcm9wZXJseSB3b3JrcyB3aXRoIHBhdGNoZWQgYFByb21pc2UjdGhlbmBcbiAgICAgIHJlZGVmaW5lKE5hdGl2ZVByb21pc2VQcm90b3R5cGUsICdjYXRjaCcsIFByb21pc2VDb25zdHJ1Y3RvclByb3RvdHlwZVsnY2F0Y2gnXSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBgLmNvbnN0cnVjdG9yID09PSBQcm9taXNlYCB3b3JrIGZvciBuYXRpdmUgcHJvbWlzZS1iYXNlZCBBUElzXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBOYXRpdmVQcm9taXNlUHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxuICAgIC8vIG1ha2UgYGluc3RhbmNlb2YgUHJvbWlzZWAgd29yayBmb3IgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJc1xuICAgIGlmIChvYmplY3RTZXRQcm90b3R5cGVPZikge1xuICAgICAgb2JqZWN0U2V0UHJvdG90eXBlT2YoTmF0aXZlUHJvbWlzZVByb3RvdHlwZSwgUHJvbWlzZUNvbnN0cnVjdG9yUHJvdG90eXBlKTtcbiAgICB9XG4gIH1cbn1cblxuX2V4cG9ydCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQkMSB9LCB7XG4gIFByb21pc2U6IFByb21pc2VDb25zdHJ1Y3RvclxufSk7XG5cbnNldFRvU3RyaW5nVGFnKFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSwgZmFsc2UpO1xuc2V0U3BlY2llcyhQUk9NSVNFKTtcblxuUHJvbWlzZVdyYXBwZXIgPSBnZXRCdWlsdEluKFBST01JU0UpO1xuXG4vLyBzdGF0aWNzXG5fZXhwb3J0KHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCQxIH0sIHtcbiAgLy8gYFByb21pc2UucmVqZWN0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlamVjdFxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICBjYXBhYmlsaXR5LnJlamVjdC5jYWxsKHVuZGVmaW5lZCwgcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cbl9leHBvcnQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEJDEgfSwge1xuICAvLyBgUHJvbWlzZS5yZXNvbHZlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKHRoaXMsIHgpO1xuICB9XG59KTtcblxuX2V4cG9ydCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgLy8gYFByb21pc2UuYWxsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLmFsbFxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHByb21pc2VSZXNvbHZlID0gYUZ1bmN0aW9uKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gYFByb21pc2UucmFjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1hc3NpZ24gLS0gc2FmZVxudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xudmFyIGRlZmluZVByb3BlcnR5JDEgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxudmFyIG9iamVjdEFzc2lnbiA9ICEkYXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKGRlc2NyaXB0b3JzICYmICRhc3NpZ24oeyBiOiAxIH0sICRhc3NpZ24oZGVmaW5lUHJvcGVydHkkMSh7fSwgJ2EnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5JDEodGhpcywgJ2InLCB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgeyBiOiAyIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zeW1ib2wgLS0gc2FmZVxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW3N5bWJvbF0gIT0gNyB8fCBvYmplY3RLZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBhbHBoYWJldDtcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gb2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzLmY7XG4gIHZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlLmY7XG4gIHdoaWxlIChhcmd1bWVudHNMZW5ndGggPiBpbmRleCkge1xuICAgIHZhciBTID0gaW5kZXhlZE9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gb2JqZWN0S2V5cyhTKS5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKFMpKSA6IG9iamVjdEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIWRlc2NyaXB0b3JzIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtYXNzaWduIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5fZXhwb3J0KHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBvYmplY3RBc3NpZ24gfSwge1xuICBhc3NpZ246IG9iamVjdEFzc2lnblxufSk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxudmFyIGlzQXJyYXkkMSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2ZSYXcoYXJnKSA9PSAnQXJyYXknO1xufTtcblxudmFyIGNyZWF0ZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIG9iamVjdERlZmluZVByb3BlcnR5LmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcblxudmFyIFNQRUNJRVMkMSA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBhIHBhcnQgb2YgYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxudmFyIGFycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXkpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5JDEob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5JDEoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdCQxKEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTJDFdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gZW5naW5lVjhWZXJzaW9uID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBlbmdpbmVWOFZlcnNpb24gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QkMShPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheSQxKE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG5fZXhwb3J0KHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG9iamVjdEtleXMoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuX2V4cG9ydCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRkFJTFNfT05fUFJJTUlUSVZFUyB9LCB7XG4gIGtleXM6IGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0S2V5cyh0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gb2JqZWN0RGVmaW5lUHJvcGVydHkuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChkZXNjcmlwdG9ycyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xudmFyIGRvbUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4LCBmaWx0ZXJSZWplY3QgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT0gNztcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBpbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gZnVuY3Rpb25CaW5kQ29udGV4dChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSIHx8IElTX0ZJTFRFUl9SRUpFQ1QgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlclxuICAgICAgICB9IGVsc2Ugc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSA0OiByZXR1cm4gZmFsc2U7ICAgICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICAgICAgY2FzZSA3OiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlclJlamVjdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiB0YXJnZXQ7XG4gIH07XG59O1xuXG52YXIgYXJyYXlJdGVyYXRpb24gPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxufTtcblxudmFyICRmb3JFYWNoID0gYXJyYXlJdGVyYXRpb24uZm9yRWFjaDtcblxuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbnZhciBhcnJheUZvckVhY2ggPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIGRvbUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbF8xW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gYXJyYXlGb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGFycmF5Rm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gYXJyYXlGb3JFYWNoO1xuICB9XG59XG5cbnZhciBiaW5kID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG52YXIgdXRpbHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbnZhciBidWlsZFVSTCA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBJbnRlcmNlcHRvck1hbmFnZXJfMSA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG52YXIgdHJhbnNmb3JtRGF0YSA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbnZhciBpc0NhbmNlbCA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xudmFyIGVuaGFuY2VFcnJvciA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xudmFyIGNyZWF0ZUVycm9yID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xudmFyIHNldHRsZSA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuXG52YXIgY29va2llcyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbnZhciBpc0Fic29sdXRlVVJMID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xudmFyIGNvbWJpbmVVUkxzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG52YXIgYnVpbGRGdWxsUGF0aCA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG52YXIgcGFyc2VIZWFkZXJzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbnZhciBpc1VSTFNhbWVPcmlnaW4gPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuXG52YXIgeGhyID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSB4aHI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSB4aHI7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxudmFyIGRlZmF1bHRzXzEgPSBkZWZhdWx0cztcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHNfMS5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG52YXIgbWVyZ2VDb25maWcgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5JywgJ3BhcmFtcyddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd0aW1lb3V0TWVzc2FnZScsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICdtYXhCb2R5TGVuZ3RoJywgJ21heFJlZGlyZWN0cycsICd0cmFuc3BvcnQnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJywgJ3Jlc3BvbnNlRW5jb2RpbmcnXG4gIF07XG4gIHZhciBkaXJlY3RNZXJnZUtleXMgPSBbJ3ZhbGlkYXRlU3RhdHVzJ107XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpXG4gICAgLmNvbmNhdChkaXJlY3RNZXJnZUtleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcxKVxuICAgIC5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXJfMSgpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyXzEoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG52YXIgQXhpb3NfMSA9IEF4aW9zO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxudmFyIENhbmNlbF8xID0gQ2FuY2VsO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxfMShtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbnZhciBDYW5jZWxUb2tlbl8xID0gQ2FuY2VsVG9rZW47XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG52YXIgc3ByZWFkID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG52YXIgaXNBeGlvc0Vycm9yID0gZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuICh0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvc18xKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zXzEucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3NfMS5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MkMSA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzXzEpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zJDEuQXhpb3MgPSBBeGlvc18xO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcyQxLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MkMS5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MkMS5DYW5jZWwgPSBDYW5jZWxfMTtcbmF4aW9zJDEuQ2FuY2VsVG9rZW4gPSBDYW5jZWxUb2tlbl8xO1xuYXhpb3MkMS5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MkMS5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcyQxLnNwcmVhZCA9IHNwcmVhZDtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MkMS5pc0F4aW9zRXJyb3IgPSBpc0F4aW9zRXJyb3I7XG5cbnZhciBheGlvc18xID0gYXhpb3MkMTtcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG52YXIgZGVmYXVsdF8xID0gYXhpb3MkMTtcbmF4aW9zXzEuZGVmYXVsdCA9IGRlZmF1bHRfMTtcblxudmFyIGF4aW9zID0gYXhpb3NfMTtcblxudmFyIHN1cHBvcnRlZFZlcnNpb25zID0gWyd2MicsICd2MycsICd2NCcsICdjYW5hcnknXTtcbnZhciBuYW1lID0gJ0B0cnlnaG9zdC9jb250ZW50LWFwaSc7XG5mdW5jdGlvbiBHaG9zdENvbnRlbnRBUEkoX3JlZikge1xuICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICBob3N0ID0gX3JlZi5ob3N0LFxuICAgICAgX3JlZiRnaG9zdFBhdGggPSBfcmVmLmdob3N0UGF0aCxcbiAgICAgIGdob3N0UGF0aCA9IF9yZWYkZ2hvc3RQYXRoID09PSB2b2lkIDAgPyAnZ2hvc3QnIDogX3JlZiRnaG9zdFBhdGgsXG4gICAgICB2ZXJzaW9uID0gX3JlZi52ZXJzaW9uLFxuICAgICAga2V5ID0gX3JlZi5rZXk7XG5cbiAgLy8gaG9zdCBwYXJhbWV0ZXIgaXMgZGVwcmVjYXRlZFxuICBpZiAoaG9zdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChuYW1lLCBcIjogVGhlICdob3N0JyBwYXJhbWV0ZXIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAndXJsJyBpbnN0ZWFkXCIpKTtcblxuICAgIGlmICghdXJsKSB7XG4gICAgICB1cmwgPSBob3N0O1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgR2hvc3RDb250ZW50QVBJKSB7XG4gICAgcmV0dXJuIEdob3N0Q29udGVudEFQSSh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICBrZXk6IGtleVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG5hbWUsIFwiIENvbmZpZyBNaXNzaW5nOiAndmVyc2lvbicgaXMgcmVxdWlyZWQuIEUuZy4gXCIpLmNvbmNhdChzdXBwb3J0ZWRWZXJzaW9ucy5qb2luKCcsJykpKTtcbiAgfVxuXG4gIGlmICghc3VwcG9ydGVkVmVyc2lvbnMuaW5jbHVkZXModmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIEludmFsaWQ6ICd2ZXJzaW9uJyBcIikuY29uY2F0KHZlcnNpb24sIFwiIGlzIG5vdCBzdXBwb3J0ZWRcIikpO1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIE1pc3Npbmc6ICd1cmwnIGlzIHJlcXVpcmVkLiBFLmcuICdodHRwczovL3NpdGUuY29tJ1wiKSk7XG4gIH1cblxuICBpZiAoIS9odHRwcz86XFwvXFwvLy50ZXN0KHVybCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIEludmFsaWQ6ICd1cmwnIFwiKS5jb25jYXQodXJsLCBcIiByZXF1aXJlcyBhIHByb3RvY29sLiBFLmcuICdodHRwczovL3NpdGUuY29tJ1wiKSk7XG4gIH1cblxuICBpZiAodXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIEludmFsaWQ6ICd1cmwnIFwiKS5jb25jYXQodXJsLCBcIiBtdXN0IG5vdCBoYXZlIGEgdHJhaWxpbmcgc2xhc2guIEUuZy4gJ2h0dHBzOi8vc2l0ZS5jb20nXCIpKTtcbiAgfVxuXG4gIGlmIChnaG9zdFBhdGguZW5kc1dpdGgoJy8nKSB8fCBnaG9zdFBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG5hbWUsIFwiIENvbmZpZyBJbnZhbGlkOiAnZ2hvc3RQYXRoJyBcIikuY29uY2F0KGdob3N0UGF0aCwgXCIgbXVzdCBub3QgaGF2ZSBhIGxlYWRpbmcgb3IgdHJhaWxpbmcgc2xhc2guIEUuZy4gJ2dob3N0J1wiKSk7XG4gIH1cblxuICBpZiAoa2V5ICYmICEvWzAtOWEtZl17MjZ9Ly50ZXN0KGtleSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIEludmFsaWQ6ICdrZXknIFwiKS5jb25jYXQoa2V5LCBcIiBtdXN0IGhhdmUgMjYgaGV4IGNoYXJhY3RlcnNcIikpO1xuICB9XG5cbiAgdmFyIGFwaSA9IFsncG9zdHMnLCAnYXV0aG9ycycsICd0YWdzJywgJ3BhZ2VzJywgJ3NldHRpbmdzJ10ucmVkdWNlKGZ1bmN0aW9uIChhcGlPYmplY3QsIHJlc291cmNlVHlwZSkge1xuICAgIGZ1bmN0aW9uIGJyb3dzZSgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHZhciBtZW1iZXJUb2tlbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHJlc291cmNlVHlwZSwgb3B0aW9ucywgbnVsbCwgbWVtYmVyVG9rZW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWQoZGF0YSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIG1lbWJlclRva2VuID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5pZCAmJiAhZGF0YS5zbHVnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgcmVhZCByZXF1aXJlcyBhbiBpZCBvciBzbHVnLlwiKSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gbWFrZVJlcXVlc3QocmVzb3VyY2VUeXBlLCBwYXJhbXMsIGRhdGEuaWQgfHwgXCJzbHVnL1wiLmNvbmNhdChkYXRhLnNsdWcpLCBtZW1iZXJUb2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXBpT2JqZWN0LCBfZGVmaW5lUHJvcGVydHkoe30sIHJlc291cmNlVHlwZSwge1xuICAgICAgcmVhZDogcmVhZCxcbiAgICAgIGJyb3dzZTogYnJvd3NlXG4gICAgfSkpO1xuICB9LCB7fSk7XG4gIGRlbGV0ZSBhcGkuc2V0dGluZ3MucmVhZDtcbiAgcmV0dXJuIGFwaTtcblxuICBmdW5jdGlvbiBtYWtlUmVxdWVzdChyZXNvdXJjZVR5cGUsIHBhcmFtcywgaWQpIHtcbiAgICB2YXIgbWVtYmVyc1Rva2VuID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXG4gICAgaWYgKCFtZW1iZXJzVG9rZW4gJiYgIWtleSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlwiLmNvbmNhdChuYW1lLCBcIiBDb25maWcgTWlzc2luZzogJ2tleScgaXMgcmVxdWlyZWQuXCIpKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlIHBhcmFtcy5pZDtcbiAgICB2YXIgaGVhZGVycyA9IG1lbWJlcnNUb2tlbiA/IHtcbiAgICAgIEF1dGhvcml6YXRpb246IFwiR2hvc3RNZW1iZXJzIFwiLmNvbmNhdChtZW1iZXJzVG9rZW4pXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KFwiXCIuY29uY2F0KHVybCwgXCIvXCIpLmNvbmNhdChnaG9zdFBhdGgsIFwiL2FwaS9cIikuY29uY2F0KHZlcnNpb24sIFwiL2NvbnRlbnQvXCIpLmNvbmNhdChyZXNvdXJjZVR5cGUsIFwiL1wiKS5jb25jYXQoaWQgPyBpZCArICcvJyA6ICcnKSwge1xuICAgICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAga2V5OiBrZXlcbiAgICAgIH0sIHBhcmFtcyksXG4gICAgICBwYXJhbXNTZXJpYWxpemVyOiBmdW5jdGlvbiBwYXJhbXNTZXJpYWxpemVyKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLnJlZHVjZShmdW5jdGlvbiAocGFydHMsIGspIHtcbiAgICAgICAgICB2YXIgdmFsID0gZW5jb2RlVVJJQ29tcG9uZW50KFtdLmNvbmNhdChwYXJhbWV0ZXJzW2tdKS5qb2luKCcsJykpO1xuICAgICAgICAgIHJldHVybiBwYXJ0cy5jb25jYXQoXCJcIi5jb25jYXQoaywgXCI9XCIpLmNvbmNhdCh2YWwpKTtcbiAgICAgICAgfSwgW10pLmpvaW4oJyYnKTtcbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzLmRhdGFbcmVzb3VyY2VUeXBlXSkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhW3Jlc291cmNlVHlwZV07XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXMuZGF0YVtyZXNvdXJjZVR5cGVdLmxlbmd0aCA9PT0gMSAmJiAhcmVzLmRhdGEubWV0YSkge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGFbcmVzb3VyY2VUeXBlXVswXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocmVzLmRhdGFbcmVzb3VyY2VUeXBlXSwge1xuICAgICAgICBtZXRhOiByZXMuZGF0YS5tZXRhXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhICYmIGVyci5yZXNwb25zZS5kYXRhLmVycm9ycykge1xuICAgICAgICB2YXIgcHJvcHMgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF07XG4gICAgICAgIHZhciB0b1Rocm93ID0gbmV3IEVycm9yKHByb3BzLm1lc3NhZ2UpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcbiAgICAgICAgdG9UaHJvdy5uYW1lID0gcHJvcHMudHlwZTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgdG9UaHJvd1trXSA9IHByb3BzW2tdO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9UaHJvdy5yZXNwb25zZSA9IGVyci5yZXNwb25zZTsgLy8gQFRPRE86IHJlbW92ZSBpbiAyLjAuIFdlIGhhdmUgZW5oYW5jZWQgdGhlIGVycm9yIGhhbmRsaW5nLCBidXQgd2UgZG9uJ3Qgd2FudCB0byBicmVhayBleGlzdGluZyBpbXBsZW1lbnRhdGlvbnMuXG5cbiAgICAgICAgdG9UaHJvdy5yZXF1ZXN0ID0gZXJyLnJlcXVlc3Q7XG4gICAgICAgIHRvVGhyb3cuY29uZmlnID0gZXJyLmNvbmZpZztcbiAgICAgICAgdGhyb3cgdG9UaHJvdztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBHaG9zdENvbnRlbnRBUEkgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGVudC1hcGkuanMubWFwXG4iLCIvKlxuICogQ29sb3IgbW9kZSB0b2dnbGVcbiAqL1xuXG5jb25zdCB0b2dnbGVDb2xvckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc20tY29sb3ItbW9kZS1idG4nKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0Q29sb3JNb2RlKCkge1xuICBpZiAod2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJ3ZhcigtLXByaW1hcnkpJykpIHtcbiAgICBjb25zdCB0b2dnbGVDb2xvck1vZGUgPSAoZSkgPT4ge1xuICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29sb3ItbW9kZScsICdsaWdodCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlZicsICdsaWdodCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb2xvci1tb2RlJywgJ2RhcmsnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVmJywgJ2RhcmsnKTtcbiAgICB9O1xuICAgIHRvZ2dsZUNvbG9yQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNvbG9yTW9kZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdG9nZ2xlQ29sb3JCdG5zLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgRk9DVVNBQkxFX0VMID1cbiAgJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsIFt0YWJpbmRleD1cIjBcIl0sIFtjb250ZW50ZWRpdGFibGVdJztcblxubGV0IGN1cnJlbnRGb2N1cztcblxuY29uc3QgY2hlY2tEaXNwbGF5U3RhdHVzID0gKGVsKSA9PlxuICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZGlzcGxheSAhPT0gJ25vbmUnO1xuXG5jb25zdCBnZXROb25IaWRkZW5MYXN0RWwgPSAoZWwpID0+IHtcbiAgY29uc3QgbGFzdEVsID0gZWxbZWwubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHBlbnVsdGltYXRlRWwgPSBlbFtlbC5sZW5ndGggLSAyXTtcblxuICBpZiAoY2hlY2tEaXNwbGF5U3RhdHVzKGxhc3RFbCkpIHtcbiAgICByZXR1cm4gbGFzdEVsO1xuICB9XG5cbiAgcmV0dXJuIHBlbnVsdGltYXRlRWw7XG59O1xuXG5jb25zdCBjb25maWd1cmVGb2N1c2FibGVFbGVtZW50cyA9IChjb250YWluZXJFbCkgPT4ge1xuICBjb25zdCBmb2N1c2FibGVFbCA9IGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMKTtcbiAgZm9jdXNhYmxlRWwuZm9yRWFjaCgoZWwpID0+IGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpKTtcbiAgY29uc3QgZmlyc3RFbFRvRm9jdXMgPSBmb2N1c2FibGVFbFsxXTtcbiAgY29uc3QgZmlyc3RUYWJTdG9wID0gZm9jdXNhYmxlRWxbMF07XG4gIGNvbnN0IGxhc3RUYWJTdG9wID0gZ2V0Tm9uSGlkZGVuTGFzdEVsKGZvY3VzYWJsZUVsKTtcbiAgcmV0dXJuIFtmaXJzdFRhYlN0b3AsIGxhc3RUYWJTdG9wLCBmaXJzdEVsVG9Gb2N1c107XG59O1xuXG5leHBvcnQgY29uc3QgdHJhcEZvY3VzID0gKHNpZGVNZW51RWwpID0+IHtcbiAgY3VycmVudEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgY29uc3QgZmlyc3RFbFRvRm9jdXMgPSBjb25maWd1cmVGb2N1c2FibGVFbGVtZW50cyhzaWRlTWVudUVsKTtcbiAgZmlyc3RFbFRvRm9jdXNbMl0uZm9jdXMoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWJLZXlIYW5kbGVyKGUpIHtcbiAgY29uc3QgdGFicyA9IGNvbmZpZ3VyZUZvY3VzYWJsZUVsZW1lbnRzKHRoaXMpO1xuICBjb25zdCBmaXJzdFRhYlN0b3AgPSB0YWJzWzBdO1xuICBjb25zdCBsYXN0VGFiU3RvcCA9IHRhYnNbMV07XG4gIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAvLyBTSElGVCArIFRBQlxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RUYWJTdG9wKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGFzdFRhYlN0b3AuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIC8vIFRBQlxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdFRhYlN0b3ApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZpcnN0VGFiU3RvcC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVsZWFzZUZvY3VzID0gKHNpZGVNZW51RWwpID0+IHtcbiAgY29uc3QgZm9jdXNhYmxlRWwgPSBzaWRlTWVudUVsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMKTtcbiAgZm9jdXNhYmxlRWwuZm9yRWFjaCgoZWwpID0+IGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKSk7XG4gIHNpZGVNZW51RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYktleUhhbmRsZXIpO1xuICBjdXJyZW50Rm9jdXMuZm9jdXMoKTtcbn07XG4iLCJjb25zdCBncmlkQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbS1ncmlkLWNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiB1cGRhdGVOdW1iZXIoZWwsIG51bSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGBzbS1ncmlkLWNvbnRhaW5lci0ke251bX1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZWwuY2xhc3NMaXN0LmFkZChgc20tY2FyZC0ke251bX1gKTtcbn1cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihncmlkQ29udGFpbmVyKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGdyaWRDb250YWluZXI7XG4gIGNoaWxkcmVuLmZvckVhY2goKGVsLCBpKSA9PiB1cGRhdGVOdW1iZXIoZWwsIGkgKyAxKSk7XG4gIGNvbnN0IG51bU9mQ2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gIHVwZGF0ZU51bWJlcihncmlkQ29udGFpbmVyLCBudW1PZkNoaWxkcmVuLCAnY29udGFpbmVyJyk7XG4gIHJldHVybiB7IGNoaWxkcmVuLCBudW1PZkNoaWxkcmVuIH07XG59XG5cbmZ1bmN0aW9uIGdyaWRJbml0KCkge1xuICBpZiAoIWdyaWRDb250YWluZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGdyaWRDb250YWluZXJzLmZvckVhY2goKGdyaWRDb250YWluZXIpID0+IGNvdW50Q2hpbGRyZW4oZ3JpZENvbnRhaW5lcikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBncmlkSW5pdDtcbiIsImNvbnN0IHsgdHJhcEZvY3VzLCByZWxlYXNlRm9jdXMsIHRhYktleUhhbmRsZXIgfSA9IHJlcXVpcmUoJy4vZm9jdXNUcmFwJyk7XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbS1zZWFyY2gtYnRuJyk7XG5jb25zdCBtU2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NtLW0tc2VhcmNoLWJ0bicpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbS1tZW51LWJ0bicpO1xuY29uc3QgY2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtLW1vZGFsX19jbG9zZS1idG4nKTtcblxuaWYgKHR5cGVvZiBTRUFSQ0hfQVBJICE9PSAndW5kZWZpbmVkJykge1xuICBzZWFyY2hCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgbVNlYXJjaEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuXG5jb25zdCBidG5zID0gW3NlYXJjaEJ0biwgbVNlYXJjaEJ0biwgbWVudUJ0bl07XG5cbmNvbnN0IG1vZGFsRm4gPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXG4gIGNvbnN0IGNsb3NlID0gKG1vZGFsKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzbS1leHBhbmRlZC1tb2RhbCcpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIGNvbnN0IGlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIHJlbGVhc2VGb2N1cyhtb2RhbCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcuc20tbW9kYWwnKTtcbiAgICBjbG9zZShtb2RhbCk7XG4gIH07XG5cbiAgY29uc3Qgb3BlbkhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIC8vIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLm1vZGFsJykpIHtcbiAgICAvLyAgIGNsb3NlKGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcubW9kYWwnKSk7XG4gICAgLy8gfVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0KTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NtLWV4cGFuZGVkLW1vZGFsJyk7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0cmFwRm9jdXMobW9kYWwpO1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJLZXlIYW5kbGVyKTtcbiAgICBjb25zdCBub25UYXJnZXRDbG9zZUhhbmRsZXIgPSAoZXYpID0+IHtcbiAgICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbS1jb250ZW50LXdyYXAnKSkge1xuICAgICAgICBjbG9zZShtb2RhbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBub25UYXJnZXRDbG9zZUhhbmRsZXIpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsb3NlQnlFc2NIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBub25UYXJnZXRDbG9zZUhhbmRsZXIpO1xuICAgIGNvbnN0IGNsb3NlQnlFc2NIYW5kbGVyID0gKGtleSkgPT4ge1xuICAgICAgaWYgKGtleS5rZXkgPT09ICdFc2NhcGUnIHx8IGtleS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICBjbG9zZShtb2RhbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjbG9zZUJ5RXNjSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBub25UYXJnZXRDbG9zZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsb3NlQnlFc2NIYW5kbGVyKTtcbiAgfTtcblxuICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChidG4pIHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5IYW5kbGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNsb3NlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBpZiAoYnRuKSB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUhhbmRsZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbEZuO1xuIiwiaW1wb3J0ICogYXMgSnNTZWFyY2ggZnJvbSAnanMtc2VhcmNoJztcbmltcG9ydCBHaG9zdENvbnRlbnRBUEkgZnJvbSAnQHRyeWdob3N0L2NvbnRlbnQtYXBpJztcblxuY29uc3Qgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc20tc2VhcmNoLW1vZGFsJyk7XG5cbmNvbnN0IGh0bWxSZXBsYWNlID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5jb25zdCBjcmVhdGVUaW1lc3RhbXAgPSAobWludXRlcyA9IDYwKSA9PiB7XG4gIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCkgKyBtaW51dGVzICogNjAwMDA7XG4gIHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5jb25zdCBzdGF0ZUxvYWRlciA9IChzdGF0ZSwgc3RhdHVzKSA9PiB7XG4gIGlmIChzdGF0dXMpIHtcbiAgICBzZWFyY2hNb2RhbC5jbGFzc0xpc3QuYWRkKHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKHN0YXRlKTtcbiAgfVxufTtcblxuY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBmcmVzaEFwaSA9IG5ldyBHaG9zdENvbnRlbnRBUEkoe1xuICAgIHVybDogYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH1gLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGtleTogU0VBUkNIX0FQSSxcbiAgICB2ZXJzaW9uOiAndjQnLFxuICB9KTtcblxuICBjb25zdCBhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVzdGFtcCcpLCAxMCk7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGlmICghdGltZXN0YW1wIHx8IG5vdyA+IHRpbWVzdGFtcCkge1xuICAgICAgZnJlc2hBcGkucG9zdHNcbiAgICAgICAgLmJyb3dzZSh7XG4gICAgICAgICAgaW5jbHVkZTogJ3RhZ3MnLFxuICAgICAgICAgIGZvcm1hdHM6ICdwbGFpbnRleHQnLFxuICAgICAgICAgIGxpbWl0OiAnYWxsJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdHMnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWVzdGFtcCcsIGNyZWF0ZVRpbWVzdGFtcCgpKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFNlYXJjaCBpcyBub3QgYXZhaWxhYmxlIVxcbiR7ZXJyfWApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9zdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3N0cycpKTtcbiAgICAgIHJlc29sdmUocG9zdHMpO1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNvdWxkbid0IGZldGNoIHBvc3RzXCIpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFBhZ2UgRWxlbWVudHNcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc20tc2VhcmNoLWlucHV0Jyk7XG4gIGNvbnN0IHJ1blNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbS1ydW4tc2VhcmNoLWJ0bicpO1xuICBjb25zdCBzZWFyY2hSZXN1bHRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc20tc2VhcmNoLXJlc3VsdHNfX2hlYWRlcicsXG4gICk7XG4gIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbS1zZWFyY2gtcmVzdWx0c19fY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZGF0ZUZvcm1hdHRlciA9IChpc29EYXRlKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgfTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXNvRGF0ZSk7XG5cbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hQb3N0cyA9ICh0ZXJtKSA9PiB7XG4gICAgc3RhdGVMb2FkZXIoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICBzZWFyY2hSZXN1bHQuaW5uZXJIVE1MID0gJyc7XG4gICAgYXBpXG4gICAgICAudGhlbigocG9zdHMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U2VhcmNoID0gbmV3IEpzU2VhcmNoLlNlYXJjaCgnaWQnKTtcbiAgICAgICAgbmV3U2VhcmNoLmFkZEluZGV4KCd0aXRsZScpO1xuICAgICAgICBuZXdTZWFyY2guYWRkSW5kZXgoJ3BsYWludGV4dCcpO1xuXG4gICAgICAgIG5ld1NlYXJjaC5hZGREb2N1bWVudHMocG9zdHMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXdTZWFyY2guc2VhcmNoKHRlcm0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNlYXJjaFJlc3VsdEhlYWRlci50ZXh0Q29udGVudCA9IGAke3Jlc3VsdC5sZW5ndGh9IFJlc3VsdHMgZm9yIOKAnCR7dGVybX3igJ1gO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBzZWFyY2hSZXN1bHRIZWFkZXIudGV4dENvbnRlbnQgPSBgJHtyZXN1bHQubGVuZ3RofSBSZXN1bHQgZm9yIOKAnCR7dGVybX3igJ1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlYXJjaFJlc3VsdEhlYWRlci50ZXh0Q29udGVudCA9IGBObyByZXN1bHRzIGZvciDigJwke3Rlcm194oCdYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgICAgc2VhcmNoUmVzdWx0LmlubmVySFRNTCArPSBgPGFydGljbGUgY2xhc3M9XCJzbS1zZWFyY2gtcmVzdWx0c19faXRlbVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJzbS1zZWFyY2gtcmVzdWx0c19fbGlua1wiIGhyZWY9XCIke3Bvc3QudXJsfVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNtLXNlYXJjaC1yZXN1bHRzX19kYXRlXCI+JHtkYXRlRm9ybWF0dGVyKFxuICAgICAgICAgICAgICAgIHBvc3QucHVibGlzaGVkX2F0LFxuICAgICAgICAgICAgICApfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzbS1zZWFyY2gtcmVzdWx0c19fdGl0bGVcIj4ke3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNtLXNlYXJjaC1yZXN1bHRzX19leGNlcnB0XCI+XG4gICAgICAgICAgICAgICAgJHtodG1sUmVwbGFjZShwb3N0LmV4Y2VycHQpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2FydGljbGU+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhdGVMb2FkZXIoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihgU2VhcmNoIG5vdCBhdmFpbGFibGVcXG4ke2Vycn1gKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGVudGVyU2VhcmNoVGVybUNoZWNrID0gKCkgPT4ge1xuICAgIGlmICghc2VhcmNoUmVzdWx0LmlubmVySFRNTCkge1xuICAgICAgc2VhcmNoUmVzdWx0SGVhZGVyLnRleHRDb250ZW50ID0gJ0VudGVyIGEgc2VhcmNoIHRlcm0nO1xuICAgIH1cbiAgfTtcblxuICBydW5TZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgZW50ZXJTZWFyY2hUZXJtQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoUG9zdHMoc2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIGVudGVyU2VhcmNoVGVybUNoZWNrKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgc2VhcmNoUG9zdHMoc2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xuICAgIHN0YXRlTG9hZGVyKCdsb2FkaW5nJywgZmFsc2UpO1xuICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gIH0pO1xuXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHN0YXRlTG9hZGVyKCdsb2FkaW5nJywgZmFsc2UpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZU5hdkxpbmtzKCkge1xuICBjb25zdCBtZW51TmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc20tbWVudSBhJyk7XG4gIG1lbnVOYXZMaW5rcy5mb3JFYWNoKChlbCkgPT4gZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpKTtcbn1cbiIsIi8qKlxuICogSW5kZXhlcyBmb3IgYWxsIHN1YnN0cmluZyBzZWFyY2hlcyAoZS5nLiB0aGUgdGVybSBcImNhdFwiIGlzIGluZGV4ZWQgYXMgXCJjXCIsIFwiY2FcIiwgXCJjYXRcIiwgXCJhXCIsIFwiYXRcIiwgYW5kIFwidFwiKS5cbiAqL1xudmFyIEFsbFN1YnN0cmluZ3NJbmRleFN0cmF0ZWd5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWxsU3Vic3RyaW5nc0luZGV4U3RyYXRlZ3koKSB7fVxuXG4gIHZhciBfcHJvdG8gPSBBbGxTdWJzdHJpbmdzSW5kZXhTdHJhdGVneS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jc1xuICAgKi9cbiAgX3Byb3RvLmV4cGFuZFRva2VuID0gZnVuY3Rpb24gZXhwYW5kVG9rZW4odG9rZW4pIHtcbiAgICB2YXIgZXhwYW5kZWRUb2tlbnMgPSBbXTtcbiAgICB2YXIgc3RyaW5nO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHRva2VuLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICBzdHJpbmcgPSAnJztcblxuICAgICAgZm9yICh2YXIgaiA9IGk7IGogPCBsZW5ndGg7ICsraikge1xuICAgICAgICBzdHJpbmcgKz0gdG9rZW4uY2hhckF0KGopO1xuICAgICAgICBleHBhbmRlZFRva2Vucy5wdXNoKHN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cGFuZGVkVG9rZW5zO1xuICB9O1xuXG4gIHJldHVybiBBbGxTdWJzdHJpbmdzSW5kZXhTdHJhdGVneTtcbn0oKTtcblxuLyoqXG4gKiBJbmRleGVzIGZvciBleGFjdCB3b3JkIG1hdGNoZXMuXG4gKi9cbnZhciBFeGFjdFdvcmRJbmRleFN0cmF0ZWd5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXhhY3RXb3JkSW5kZXhTdHJhdGVneSgpIHt9XG5cbiAgdmFyIF9wcm90byA9IEV4YWN0V29yZEluZGV4U3RyYXRlZ3kucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY3NcbiAgICovXG4gIF9wcm90by5leHBhbmRUb2tlbiA9IGZ1bmN0aW9uIGV4cGFuZFRva2VuKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuID8gW3Rva2VuXSA6IFtdO1xuICB9O1xuXG4gIHJldHVybiBFeGFjdFdvcmRJbmRleFN0cmF0ZWd5O1xufSgpO1xuXG4vKipcbiAqIEluZGV4ZXMgZm9yIHByZWZpeCBzZWFyY2hlcyAoZS5nLiB0aGUgdGVybSBcImNhdFwiIGlzIGluZGV4ZWQgYXMgXCJjXCIsIFwiY2FcIiwgYW5kIFwiY2F0XCIgYWxsb3dpbmcgcHJlZml4IHNlYXJjaCBsb29rdXBzKS5cbiAqL1xudmFyIFByZWZpeEluZGV4U3RyYXRlZ3kgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcmVmaXhJbmRleFN0cmF0ZWd5KCkge31cblxuICB2YXIgX3Byb3RvID0gUHJlZml4SW5kZXhTdHJhdGVneS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jc1xuICAgKi9cbiAgX3Byb3RvLmV4cGFuZFRva2VuID0gZnVuY3Rpb24gZXhwYW5kVG9rZW4odG9rZW4pIHtcbiAgICB2YXIgZXhwYW5kZWRUb2tlbnMgPSBbXTtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gdG9rZW4ubGVuZ3RoOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgIHN0cmluZyArPSB0b2tlbi5jaGFyQXQoaSk7XG4gICAgICBleHBhbmRlZFRva2Vucy5wdXNoKHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cGFuZGVkVG9rZW5zO1xuICB9O1xuXG4gIHJldHVybiBQcmVmaXhJbmRleFN0cmF0ZWd5O1xufSgpO1xuXG4vKipcbiAqIEVuZm9yY2VzIGNhc2Utc2Vuc2l0aXZlIHRleHQgbWF0Y2hlcy5cbiAqL1xudmFyIENhc2VTZW5zaXRpdmVTYW5pdGl6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDYXNlU2Vuc2l0aXZlU2FuaXRpemVyKCkge31cblxuICB2YXIgX3Byb3RvID0gQ2FzZVNlbnNpdGl2ZVNhbml0aXplci5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jc1xuICAgKi9cbiAgX3Byb3RvLnNhbml0aXplID0gZnVuY3Rpb24gc2FuaXRpemUodGV4dCkge1xuICAgIHJldHVybiB0ZXh0ID8gdGV4dC50cmltKCkgOiAnJztcbiAgfTtcblxuICByZXR1cm4gQ2FzZVNlbnNpdGl2ZVNhbml0aXplcjtcbn0oKTtcblxuLyoqXG4gKiBTYW5pdGl6ZXMgdGV4dCBieSBjb252ZXJ0aW5nIHRvIGEgbG9jYWxlLWZyaWVuZGx5IGxvd2VyLWNhc2UgdmVyc2lvbiBhbmQgdHJpbWluZyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLlxuICovXG52YXIgTG93ZXJDYXNlU2FuaXRpemVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG93ZXJDYXNlU2FuaXRpemVyKCkge31cblxuICB2YXIgX3Byb3RvID0gTG93ZXJDYXNlU2FuaXRpemVyLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQGluaGVyaXREb2NzXG4gICAqL1xuICBfcHJvdG8uc2FuaXRpemUgPSBmdW5jdGlvbiBzYW5pdGl6ZSh0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQgPyB0ZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkudHJpbSgpIDogJyc7XG4gIH07XG5cbiAgcmV0dXJuIExvd2VyQ2FzZVNhbml0aXplcjtcbn0oKTtcblxuLyoqXG4gKiBGaW5kIGFuZCByZXR1cm4gYSBuZXN0ZWQgb2JqZWN0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSBvYmplY3QgdG8gY3Jhd2xcbiAqIEBwYXJhbSBwYXRoIFByb3BlcnR5IHBhdGhcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGdldE5lc3RlZEZpZWxkVmFsdWUob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBwYXRoIHx8IFtdO1xuICBvYmplY3QgPSBvYmplY3QgfHwge307XG4gIHZhciB2YWx1ZSA9IG9iamVjdDsgLy8gd2FsayBkb3duIHRoZSBwcm9wZXJ0eSBwYXRoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcblxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogU2VhcmNoIGluZGV4IGNhcGFibGUgb2YgcmV0dXJuaW5nIHJlc3VsdHMgbWF0Y2hpbmcgYSBzZXQgb2YgdG9rZW5zIGFuZCByYW5rZWQgYWNjb3JkaW5nIHRvIFRGLUlERi5cbiAqL1xudmFyIFRmSWRmU2VhcmNoSW5kZXggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUZklkZlNlYXJjaEluZGV4KHVpZEZpZWxkTmFtZSkge1xuICAgIHRoaXMuX3VpZEZpZWxkTmFtZSA9IHVpZEZpZWxkTmFtZTtcbiAgICB0aGlzLl90b2tlblRvSWRmQ2FjaGUgPSB7fTtcbiAgICB0aGlzLl90b2tlbk1hcCA9IHt9O1xuICB9XG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY3NcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gVGZJZGZTZWFyY2hJbmRleC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluZGV4RG9jdW1lbnQgPSBmdW5jdGlvbiBpbmRleERvY3VtZW50KHRva2VuLCB1aWQsIGRvYykge1xuICAgIHRoaXMuX3Rva2VuVG9JZGZDYWNoZSA9IHt9OyAvLyBOZXcgaW5kZXggaW52YWxpZGF0ZXMgcHJldmlvdXMgSURGIGNhY2hlc1xuXG4gICAgdmFyIHRva2VuTWFwID0gdGhpcy5fdG9rZW5NYXA7XG4gICAgdmFyIHRva2VuRGF0dW07XG5cbiAgICBpZiAodHlwZW9mIHRva2VuTWFwW3Rva2VuXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRva2VuTWFwW3Rva2VuXSA9IHRva2VuRGF0dW0gPSB7XG4gICAgICAgICRudW1Eb2N1bWVudE9jY3VycmVuY2VzOiAwLFxuICAgICAgICAkdG90YWxOdW1PY2N1cnJlbmNlczogMSxcbiAgICAgICAgJHVpZE1hcDoge31cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRva2VuRGF0dW0gPSB0b2tlbk1hcFt0b2tlbl07XG4gICAgICB0b2tlbkRhdHVtLiR0b3RhbE51bU9jY3VycmVuY2VzKys7XG4gICAgfVxuXG4gICAgdmFyIHVpZE1hcCA9IHRva2VuRGF0dW0uJHVpZE1hcDtcblxuICAgIGlmICh0eXBlb2YgdWlkTWFwW3VpZF0gIT09ICdvYmplY3QnKSB7XG4gICAgICB0b2tlbkRhdHVtLiRudW1Eb2N1bWVudE9jY3VycmVuY2VzKys7XG4gICAgICB1aWRNYXBbdWlkXSA9IHtcbiAgICAgICAgJGRvY3VtZW50OiBkb2MsXG4gICAgICAgICRudW1Ub2tlbk9jY3VycmVuY2VzOiAxXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB1aWRNYXBbdWlkXS4kbnVtVG9rZW5PY2N1cnJlbmNlcysrO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQGluaGVyaXREb2NzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaCh0b2tlbnMsIGNvcnB1cykge1xuICAgIHZhciB1aWRUb0RvY3VtZW50TWFwID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICB2YXIgdG9rZW5NZXRhZGF0YSA9IHRoaXMuX3Rva2VuTWFwW3Rva2VuXTsgLy8gU2hvcnQgY2lyY3VpdCBpZiBubyBtYXRjaGVzIHdlcmUgZm91bmQgZm9yIGFueSBnaXZlbiB0b2tlbi5cblxuICAgICAgaWYgKCF0b2tlbk1ldGFkYXRhKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0b2tlbk1ldGFkYXRhLiR1aWRNYXApO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwLCBudW1LZXlzID0ga2V5cy5sZW5ndGg7IGogPCBudW1LZXlzOyBqKyspIHtcbiAgICAgICAgICB2YXIgdWlkID0ga2V5c1tqXTtcbiAgICAgICAgICB1aWRUb0RvY3VtZW50TWFwW3VpZF0gPSB0b2tlbk1ldGFkYXRhLiR1aWRNYXBbdWlkXS4kZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModWlkVG9Eb2N1bWVudE1hcCk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG51bUtleXMgPSBrZXlzLmxlbmd0aDsgaiA8IG51bUtleXM7IGorKykge1xuICAgICAgICAgIHZhciB1aWQgPSBrZXlzW2pdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbk1ldGFkYXRhLiR1aWRNYXBbdWlkXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB1aWRUb0RvY3VtZW50TWFwW3VpZF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRvY3VtZW50cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgdWlkIGluIHVpZFRvRG9jdW1lbnRNYXApIHtcbiAgICAgIGRvY3VtZW50cy5wdXNoKHVpZFRvRG9jdW1lbnRNYXBbdWlkXSk7XG4gICAgfVxuXG4gICAgdmFyIGNhbGN1bGF0ZVRmSWRmID0gdGhpcy5fY3JlYXRlQ2FsY3VsYXRlVGZJZGYoKTsgLy8gUmV0dXJuIGRvY3VtZW50cyBzb3J0ZWQgYnkgVEYtSURGXG5cblxuICAgIHJldHVybiBkb2N1bWVudHMuc29ydChmdW5jdGlvbiAoZG9jdW1lbnRBLCBkb2N1bWVudEIpIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVUZklkZih0b2tlbnMsIGRvY3VtZW50QiwgY29ycHVzKSAtIGNhbGN1bGF0ZVRmSWRmKHRva2VucywgZG9jdW1lbnRBLCBjb3JwdXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlQ2FsY3VsYXRlSWRmID0gZnVuY3Rpb24gX2NyZWF0ZUNhbGN1bGF0ZUlkZigpIHtcbiAgICB2YXIgdG9rZW5NYXAgPSB0aGlzLl90b2tlbk1hcDtcbiAgICB2YXIgdG9rZW5Ub0lkZkNhY2hlID0gdGhpcy5fdG9rZW5Ub0lkZkNhY2hlO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWxjdWxhdGVJZGYodG9rZW4sIGRvY3VtZW50cykge1xuICAgICAgaWYgKCF0b2tlblRvSWRmQ2FjaGVbdG9rZW5dKSB7XG4gICAgICAgIHZhciBudW1Eb2N1bWVudHNXaXRoVG9rZW4gPSB0eXBlb2YgdG9rZW5NYXBbdG9rZW5dICE9PSAndW5kZWZpbmVkJyA/IHRva2VuTWFwW3Rva2VuXS4kbnVtRG9jdW1lbnRPY2N1cnJlbmNlcyA6IDA7XG4gICAgICAgIHRva2VuVG9JZGZDYWNoZVt0b2tlbl0gPSAxICsgTWF0aC5sb2coZG9jdW1lbnRzLmxlbmd0aCAvICgxICsgbnVtRG9jdW1lbnRzV2l0aFRva2VuKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlblRvSWRmQ2FjaGVbdG9rZW5dO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVDYWxjdWxhdGVUZklkZiA9IGZ1bmN0aW9uIF9jcmVhdGVDYWxjdWxhdGVUZklkZigpIHtcbiAgICB2YXIgdG9rZW5NYXAgPSB0aGlzLl90b2tlbk1hcDtcbiAgICB2YXIgdWlkRmllbGROYW1lID0gdGhpcy5fdWlkRmllbGROYW1lO1xuXG4gICAgdmFyIGNhbGN1bGF0ZUlkZiA9IHRoaXMuX2NyZWF0ZUNhbGN1bGF0ZUlkZigpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGN1bGF0ZVRmSWRmKHRva2VucywgZG9jdW1lbnQsIGRvY3VtZW50cykge1xuICAgICAgdmFyIHNjb3JlID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHZhciBpbnZlcnNlRG9jdW1lbnRGcmVxdWVuY3kgPSBjYWxjdWxhdGVJZGYodG9rZW4sIGRvY3VtZW50cyk7XG5cbiAgICAgICAgaWYgKGludmVyc2VEb2N1bWVudEZyZXF1ZW5jeSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICBpbnZlcnNlRG9jdW1lbnRGcmVxdWVuY3kgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVpZDtcblxuICAgICAgICBpZiAodWlkRmllbGROYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICB1aWQgPSBkb2N1bWVudCAmJiBnZXROZXN0ZWRGaWVsZFZhbHVlKGRvY3VtZW50LCB1aWRGaWVsZE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVpZCA9IGRvY3VtZW50ICYmIGRvY3VtZW50W3VpZEZpZWxkTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGVybUZyZXF1ZW5jeSA9IHR5cGVvZiB0b2tlbk1hcFt0b2tlbl0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0b2tlbk1hcFt0b2tlbl0uJHVpZE1hcFt1aWRdICE9PSAndW5kZWZpbmVkJyA/IHRva2VuTWFwW3Rva2VuXS4kdWlkTWFwW3VpZF0uJG51bVRva2VuT2NjdXJyZW5jZXMgOiAwO1xuICAgICAgICBzY29yZSArPSB0ZXJtRnJlcXVlbmN5ICogaW52ZXJzZURvY3VtZW50RnJlcXVlbmN5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2NvcmU7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVGZJZGZTZWFyY2hJbmRleDtcbn0oKTtcblxuLyoqXG4gKiBTZWFyY2ggaW5kZXggY2FwYWJsZSBvZiByZXR1cm5pbmcgcmVzdWx0cyBtYXRjaGluZyBhIHNldCBvZiB0b2tlbnMgYnV0IHdpdGhvdXQgYW55IG1lYW5pbmdmdWwgcmFuayBvciBvcmRlci5cbiAqL1xudmFyIFVub3JkZXJlZFNlYXJjaEluZGV4ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVW5vcmRlcmVkU2VhcmNoSW5kZXgoKSB7XG4gICAgdGhpcy5fdG9rZW5Ub1VpZFRvRG9jdW1lbnRNYXAgPSB7fTtcbiAgfVxuICAvKipcbiAgICogQGluaGVyaXREb2NzXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFVub3JkZXJlZFNlYXJjaEluZGV4LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5kZXhEb2N1bWVudCA9IGZ1bmN0aW9uIGluZGV4RG9jdW1lbnQodG9rZW4sIHVpZCwgZG9jKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl90b2tlblRvVWlkVG9Eb2N1bWVudE1hcFt0b2tlbl0gIT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLl90b2tlblRvVWlkVG9Eb2N1bWVudE1hcFt0b2tlbl0gPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLl90b2tlblRvVWlkVG9Eb2N1bWVudE1hcFt0b2tlbl1bdWlkXSA9IGRvYztcbiAgfVxuICAvKipcbiAgICogQGluaGVyaXREb2NzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaCh0b2tlbnMsIGNvcnB1cykge1xuICAgIHZhciBpbnRlcnNlY3RpbmdEb2N1bWVudE1hcCA9IHt9O1xuICAgIHZhciB0b2tlblRvVWlkVG9Eb2N1bWVudE1hcCA9IHRoaXMuX3Rva2VuVG9VaWRUb0RvY3VtZW50TWFwO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgdmFyIGRvY3VtZW50TWFwID0gdG9rZW5Ub1VpZFRvRG9jdW1lbnRNYXBbdG9rZW5dOyAvLyBTaG9ydCBjaXJjdWl0IGlmIG5vIG1hdGNoZXMgd2VyZSBmb3VuZCBmb3IgYW55IGdpdmVuIHRva2VuLlxuXG4gICAgICBpZiAoIWRvY3VtZW50TWFwKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkb2N1bWVudE1hcCk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG51bUtleXMgPSBrZXlzLmxlbmd0aDsgaiA8IG51bUtleXM7IGorKykge1xuICAgICAgICAgIHZhciB1aWQgPSBrZXlzW2pdO1xuICAgICAgICAgIGludGVyc2VjdGluZ0RvY3VtZW50TWFwW3VpZF0gPSBkb2N1bWVudE1hcFt1aWRdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGludGVyc2VjdGluZ0RvY3VtZW50TWFwKTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMCwgbnVtS2V5cyA9IGtleXMubGVuZ3RoOyBqIDwgbnVtS2V5czsgaisrKSB7XG4gICAgICAgICAgdmFyIHVpZCA9IGtleXNbal07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50TWFwW3VpZF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkZWxldGUgaW50ZXJzZWN0aW5nRG9jdW1lbnRNYXBbdWlkXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGludGVyc2VjdGluZ0RvY3VtZW50TWFwKTtcbiAgICB2YXIgZG9jdW1lbnRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbnVtS2V5cyA9IGtleXMubGVuZ3RoOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICB2YXIgdWlkID0ga2V5c1tpXTtcbiAgICAgIGRvY3VtZW50cy5wdXNoKGludGVyc2VjdGluZ0RvY3VtZW50TWFwW3VpZF0pO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudHM7XG4gIH07XG5cbiAgcmV0dXJuIFVub3JkZXJlZFNlYXJjaEluZGV4O1xufSgpO1xuXG52YXIgUkVHRVggPSAvW15hLXrQsC3Rj9GRMC05XFwtJ10rL2k7XG4vKipcbiAqIFNpbXBsZSB0b2tlbml6ZXIgdGhhdCBzcGxpdHMgc3RyaW5ncyBvbiB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIG5vbi1lbXB0eSBzdWJzdHJpbmdzLlxuICovXG5cbnZhciBTaW1wbGVUb2tlbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaW1wbGVUb2tlbml6ZXIoKSB7fVxuXG4gIHZhciBfcHJvdG8gPSBTaW1wbGVUb2tlbml6ZXIucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY3NcbiAgICovXG4gIF9wcm90by50b2tlbml6ZSA9IGZ1bmN0aW9uIHRva2VuaXplKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChSRUdFWCkuZmlsdGVyKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9IC8vIEZpbHRlciBlbXB0eSB0b2tlbnNcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTaW1wbGVUb2tlbml6ZXI7XG59KCk7XG5cbi8qKlxuICogU3RlbW1pbmcgaXMgdGhlIHByb2Nlc3Mgb2YgcmVkdWNpbmcgc2VhcmNoIHRva2VucyB0byB0aGVpciByb290IChvciBzdGVtKSBzbyB0aGF0IHNlYXJjaGVzIGZvciBkaWZmZXJlbnQgZm9ybXMgb2YgYVxuICogd29yZCB3aWxsIG1hdGNoLiBGb3IgZXhhbXBsZSBcInNlYXJjaFwiLCBcInNlYXJjaGluZ1wiIGFuZCBcInNlYXJjaGVkXCIgYXJlIGFsbCByZWR1Y2VkIHRvIHRoZSBzdGVtIFwic2VhcmNoXCIuXG4gKlxuICogPHA+VGhpcyBzdGVtbWluZyB0b2tlbml6ZXIgY29udmVydHMgdG9rZW5zICh3b3JkcykgdG8gdGhlaXIgc3RlbSBmb3JtcyBiZWZvcmUgcmV0dXJuaW5nIHRoZW0uIEl0IHJlcXVpcmVzIGFuXG4gKiBleHRlcm5hbCBzdGVtbWluZyBmdW5jdGlvbiB0byBiZSBwcm92aWRlZDsgZm9yIHRoaXMgcHVycG9zZSBJIHJlY29tbWVuZCB0aGUgTlBNICdwb3J0ZXItc3RlbW1lcicgbGlicmFyeS5cbiAqXG4gKiA8cD5Gb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgaHR0cCA6IC8vdGFydGFydXMub3JnL35tYXJ0aW4vUG9ydGVyU3RlbW1lci9cbiAqL1xudmFyIFN0ZW1taW5nVG9rZW5pemVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0gc3RlbW1pbmdGdW5jdGlvbiBGdW5jdGlvbiBjYXBhYmxlIG9mIGFjY2VwdGluZyBhIHdvcmQgYW5kIHJldHVybmluZyBpdHMgc3RlbS5cbiAgICogQHBhcmFtIGRlY29yYXRlZEluZGV4U3RyYXRlZ3kgSW5kZXggc3RyYXRlZ3kgdG8gYmUgcnVuIGFmdGVyIGFsbCBzdG9wIHdvcmRzIGhhdmUgYmVlbiByZW1vdmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gU3RlbW1pbmdUb2tlbml6ZXIoc3RlbW1pbmdGdW5jdGlvbiwgZGVjb3JhdGVkVG9rZW5pemVyKSB7XG4gICAgdGhpcy5fc3RlbW1pbmdGdW5jdGlvbiA9IHN0ZW1taW5nRnVuY3Rpb247XG4gICAgdGhpcy5fdG9rZW5pemVyID0gZGVjb3JhdGVkVG9rZW5pemVyO1xuICB9XG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY3NcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gU3RlbW1pbmdUb2tlbml6ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2tlbml6ZSA9IGZ1bmN0aW9uIHRva2VuaXplKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW5pemVyLnRva2VuaXplKHRleHQpLm1hcCh0aGlzLl9zdGVtbWluZ0Z1bmN0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gU3RlbW1pbmdUb2tlbml6ZXI7XG59KCk7XG5cbi8qKlxuICogU3RvcCB3b3JkcyBsaXN0IGNvcGllZCBmcm9tIEx1bnIgSlMuXG4gKi9cbnZhciBTdG9wV29yZHNNYXAgPSB7XG4gIGE6IHRydWUsXG4gIGFibGU6IHRydWUsXG4gIGFib3V0OiB0cnVlLFxuICBhY3Jvc3M6IHRydWUsXG4gIGFmdGVyOiB0cnVlLFxuICBhbGw6IHRydWUsXG4gIGFsbW9zdDogdHJ1ZSxcbiAgYWxzbzogdHJ1ZSxcbiAgYW06IHRydWUsXG4gIGFtb25nOiB0cnVlLFxuICBhbjogdHJ1ZSxcbiAgYW5kOiB0cnVlLFxuICBhbnk6IHRydWUsXG4gIGFyZTogdHJ1ZSxcbiAgYXM6IHRydWUsXG4gIGF0OiB0cnVlLFxuICBiZTogdHJ1ZSxcbiAgYmVjYXVzZTogdHJ1ZSxcbiAgYmVlbjogdHJ1ZSxcbiAgYnV0OiB0cnVlLFxuICBieTogdHJ1ZSxcbiAgY2FuOiB0cnVlLFxuICBjYW5ub3Q6IHRydWUsXG4gIGNvdWxkOiB0cnVlLFxuICBkZWFyOiB0cnVlLFxuICBkaWQ6IHRydWUsXG4gICdkbyc6IHRydWUsXG4gIGRvZXM6IHRydWUsXG4gIGVpdGhlcjogdHJ1ZSxcbiAgJ2Vsc2UnOiB0cnVlLFxuICBldmVyOiB0cnVlLFxuICBldmVyeTogdHJ1ZSxcbiAgJ2Zvcic6IHRydWUsXG4gIGZyb206IHRydWUsXG4gICdnZXQnOiB0cnVlLFxuICBnb3Q6IHRydWUsXG4gIGhhZDogdHJ1ZSxcbiAgaGFzOiB0cnVlLFxuICBoYXZlOiB0cnVlLFxuICBoZTogdHJ1ZSxcbiAgaGVyOiB0cnVlLFxuICBoZXJzOiB0cnVlLFxuICBoaW06IHRydWUsXG4gIGhpczogdHJ1ZSxcbiAgaG93OiB0cnVlLFxuICBob3dldmVyOiB0cnVlLFxuICBpOiB0cnVlLFxuICAnaWYnOiB0cnVlLFxuICAnaW4nOiB0cnVlLFxuICBpbnRvOiB0cnVlLFxuICBpczogdHJ1ZSxcbiAgaXQ6IHRydWUsXG4gIGl0czogdHJ1ZSxcbiAganVzdDogdHJ1ZSxcbiAgbGVhc3Q6IHRydWUsXG4gIFwibGV0XCI6IHRydWUsXG4gIGxpa2U6IHRydWUsXG4gIGxpa2VseTogdHJ1ZSxcbiAgbWF5OiB0cnVlLFxuICBtZTogdHJ1ZSxcbiAgbWlnaHQ6IHRydWUsXG4gIG1vc3Q6IHRydWUsXG4gIG11c3Q6IHRydWUsXG4gIG15OiB0cnVlLFxuICBuZWl0aGVyOiB0cnVlLFxuICBubzogdHJ1ZSxcbiAgbm9yOiB0cnVlLFxuICBub3Q6IHRydWUsXG4gIG9mOiB0cnVlLFxuICBvZmY6IHRydWUsXG4gIG9mdGVuOiB0cnVlLFxuICBvbjogdHJ1ZSxcbiAgb25seTogdHJ1ZSxcbiAgb3I6IHRydWUsXG4gIG90aGVyOiB0cnVlLFxuICBvdXI6IHRydWUsXG4gIG93bjogdHJ1ZSxcbiAgcmF0aGVyOiB0cnVlLFxuICBzYWlkOiB0cnVlLFxuICBzYXk6IHRydWUsXG4gIHNheXM6IHRydWUsXG4gIHNoZTogdHJ1ZSxcbiAgc2hvdWxkOiB0cnVlLFxuICBzaW5jZTogdHJ1ZSxcbiAgc286IHRydWUsXG4gIHNvbWU6IHRydWUsXG4gIHRoYW46IHRydWUsXG4gIHRoYXQ6IHRydWUsXG4gIHRoZTogdHJ1ZSxcbiAgdGhlaXI6IHRydWUsXG4gIHRoZW06IHRydWUsXG4gIHRoZW46IHRydWUsXG4gIHRoZXJlOiB0cnVlLFxuICB0aGVzZTogdHJ1ZSxcbiAgdGhleTogdHJ1ZSxcbiAgJ3RoaXMnOiB0cnVlLFxuICB0aXM6IHRydWUsXG4gIHRvOiB0cnVlLFxuICB0b286IHRydWUsXG4gIHR3YXM6IHRydWUsXG4gIHVzOiB0cnVlLFxuICB3YW50czogdHJ1ZSxcbiAgd2FzOiB0cnVlLFxuICB3ZTogdHJ1ZSxcbiAgd2VyZTogdHJ1ZSxcbiAgd2hhdDogdHJ1ZSxcbiAgd2hlbjogdHJ1ZSxcbiAgd2hlcmU6IHRydWUsXG4gIHdoaWNoOiB0cnVlLFxuICAnd2hpbGUnOiB0cnVlLFxuICB3aG86IHRydWUsXG4gIHdob206IHRydWUsXG4gIHdoeTogdHJ1ZSxcbiAgd2lsbDogdHJ1ZSxcbiAgJ3dpdGgnOiB0cnVlLFxuICB3b3VsZDogdHJ1ZSxcbiAgeWV0OiB0cnVlLFxuICB5b3U6IHRydWUsXG4gIHlvdXI6IHRydWVcbn07IC8vIFByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIGZvciBpbmhlcml0ZWQgcHJvcGVydGllc1xuXG5TdG9wV29yZHNNYXAuY29uc3RydWN0b3IgPSBmYWxzZTtcblN0b3BXb3Jkc01hcC5oYXNPd25Qcm9wZXJ0eSA9IGZhbHNlO1xuU3RvcFdvcmRzTWFwLmlzUHJvdG90eXBlT2YgPSBmYWxzZTtcblN0b3BXb3Jkc01hcC5wcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZhbHNlO1xuU3RvcFdvcmRzTWFwLnRvTG9jYWxlU3RyaW5nID0gZmFsc2U7XG5TdG9wV29yZHNNYXAudG9TdHJpbmcgPSBmYWxzZTtcblN0b3BXb3Jkc01hcC52YWx1ZU9mID0gZmFsc2U7XG5cbi8qKlxuICogU3RvcCB3b3JkcyBhcmUgdmVyeSBjb21tb24gKGUuZy4gXCJhXCIsIFwiYW5kXCIsIFwidGhlXCIpIGFuZCBhcmUgb2Z0ZW4gbm90IHNlbWFudGljYWxseSBtZWFuaW5nZnVsIGluIHRoZSBjb250ZXh0IG9mIGFcbiAqIHNlYXJjaC4gVGhpcyB0b2tlbml6ZXIgcmVtb3ZlcyBzdG9wIHdvcmRzIGZyb20gYSBzZXQgb2YgdG9rZW5zIGJlZm9yZSBwYXNzaW5nIHRoZSByZW1haW5pbmcgdG9rZW5zIGFsb25nIGZvclxuICogaW5kZXhpbmcgb3Igc2VhcmNoaW5nIHB1cnBvc2VzLlxuICovXG5cbnZhciBTdG9wV29yZHNUb2tlbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBkZWNvcmF0ZWRJbmRleFN0cmF0ZWd5IEluZGV4IHN0cmF0ZWd5IHRvIGJlIHJ1biBhZnRlciBhbGwgc3RvcCB3b3JkcyBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFN0b3BXb3Jkc1Rva2VuaXplcihkZWNvcmF0ZWRUb2tlbml6ZXIpIHtcbiAgICB0aGlzLl90b2tlbml6ZXIgPSBkZWNvcmF0ZWRUb2tlbml6ZXI7XG4gIH1cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jc1xuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBTdG9wV29yZHNUb2tlbml6ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2tlbml6ZSA9IGZ1bmN0aW9uIHRva2VuaXplKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW5pemVyLnRva2VuaXplKHRleHQpLmZpbHRlcihmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIHJldHVybiAhU3RvcFdvcmRzTWFwW3Rva2VuXTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gU3RvcFdvcmRzVG9rZW5pemVyO1xufSgpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbi8qKlxuICogU2ltcGxlIGNsaWVudC1zaWRlIHNlYXJjaGluZyB3aXRoaW4gYSBzZXQgb2YgZG9jdW1lbnRzLlxuICpcbiAqIDxwPkRvY3VtZW50cyBjYW4gYmUgc2VhcmNoZWQgYnkgYW55IG51bWJlciBvZiBmaWVsZHMuIEluZGV4aW5nIGFuZCBzZWFyY2ggc3RyYXRlZ2llcyBhcmUgaGlnaGx5IGN1c3RvbWl6YWJsZS5cbiAqL1xudmFyIFNlYXJjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBBcnJheSBjb250YWluaW5nIGVpdGhlciBhIHByb3BlcnR5IG5hbWUgb3IgYSBwYXRoIChsaXN0IG9mIHByb3BlcnR5IG5hbWVzKSB0byBhIG5lc3RlZCB2YWx1ZVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSB1aWRGaWVsZE5hbWUgRmllbGQgY29udGFpbmluZyB2YWx1ZXMgdGhhdCB1bmlxdWVseSBpZGVudGlmeSBzZWFyY2ggZG9jdW1lbnRzOyB0aGlzIGZpZWxkJ3MgdmFsdWVzIGFyZSB1c2VkXG4gICAqICAgICAgICAgICAgICAgICAgICAgdG8gZW5zdXJlIHRoYXQgYSBzZWFyY2ggcmVzdWx0IHNldCBkb2VzIG5vdCBjb250YWluIGR1cGxpY2F0ZSBvYmplY3RzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2VhcmNoKHVpZEZpZWxkTmFtZSkge1xuICAgIGlmICghdWlkRmllbGROYW1lKSB7XG4gICAgICB0aHJvdyBFcnJvcignanMtc2VhcmNoIHJlcXVpcmVzIGEgdWlkIGZpZWxkIG5hbWUgY29uc3RydWN0b3IgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdWlkRmllbGROYW1lID0gdWlkRmllbGROYW1lOyAvLyBTZXQgZGVmYXVsdC9yZWNvbW1lbmRlZCBzdHJhdGVnaWVzXG5cbiAgICB0aGlzLl9pbmRleFN0cmF0ZWd5ID0gbmV3IFByZWZpeEluZGV4U3RyYXRlZ3koKTtcbiAgICB0aGlzLl9zZWFyY2hJbmRleCA9IG5ldyBUZklkZlNlYXJjaEluZGV4KHVpZEZpZWxkTmFtZSk7XG4gICAgdGhpcy5fc2FuaXRpemVyID0gbmV3IExvd2VyQ2FzZVNhbml0aXplcigpO1xuICAgIHRoaXMuX3Rva2VuaXplciA9IG5ldyBTaW1wbGVUb2tlbml6ZXIoKTtcbiAgICB0aGlzLl9kb2N1bWVudHMgPSBbXTtcbiAgICB0aGlzLl9zZWFyY2hhYmxlRmllbGRzID0gW107XG4gIH1cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGluZGV4IHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0gdmFsdWUgQ3VzdG9tIGluZGV4IHN0cmF0ZWd5XG4gICAqIEB0aHJvd3MgRXJyb3IgaWYgZG9jdW1lbnRzIGhhdmUgYWxyZWFkeSBiZWVuIGluZGV4ZWQgYnkgdGhpcyBzZWFyY2ggaW5zdGFuY2VcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gU2VhcmNoLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQWRkIGEgc2VhcmNoYWJsZSBkb2N1bWVudCB0byB0aGUgaW5kZXguIERvY3VtZW50IHdpbGwgYXV0b21hdGljYWxseSBiZSBpbmRleGVkIGZvciBzZWFyY2guXG4gICAqIEBwYXJhbSBkb2N1bWVudFxuICAgKi9cbiAgX3Byb3RvLmFkZERvY3VtZW50ID0gZnVuY3Rpb24gYWRkRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICB0aGlzLmFkZERvY3VtZW50cyhbZG9jdW1lbnRdKTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBzZWFyY2hhYmxlIGRvY3VtZW50cyB0byB0aGUgaW5kZXguIERvY3VtZW50cyB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgaW5kZXhlZCBmb3Igc2VhcmNoLlxuICAgKiBAcGFyYW0gZG9jdW1lbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkRG9jdW1lbnRzID0gZnVuY3Rpb24gYWRkRG9jdW1lbnRzKGRvY3VtZW50cykge1xuICAgIHRoaXMuX2RvY3VtZW50cyA9IHRoaXMuX2RvY3VtZW50cy5jb25jYXQoZG9jdW1lbnRzKTtcbiAgICB0aGlzLmluZGV4RG9jdW1lbnRzXyhkb2N1bWVudHMsIHRoaXMuX3NlYXJjaGFibGVGaWVsZHMpO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgc2VhcmNoYWJsZSBmaWVsZCB0byB0aGUgaW5kZXguIEV4aXN0aW5nIGRvY3VtZW50cyB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgaW5kZXhlZCB1c2luZyB0aGlzIG5ldyBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFtIGZpZWxkIFNlYXJjaGFibGUgZmllbGQgb3IgZmllbGQgcGF0aC4gUGFzcyBhIHN0cmluZyB0byBpbmRleCBhIHRvcC1sZXZlbCBmaWVsZCBhbmQgYW4gYXJyYXkgb2Ygc3RyaW5ncyBmb3IgbmVzdGVkIGZpZWxkcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkSW5kZXggPSBmdW5jdGlvbiBhZGRJbmRleChmaWVsZCkge1xuICAgIHRoaXMuX3NlYXJjaGFibGVGaWVsZHMucHVzaChmaWVsZCk7XG5cbiAgICB0aGlzLmluZGV4RG9jdW1lbnRzXyh0aGlzLl9kb2N1bWVudHMsIFtmaWVsZF0pO1xuICB9XG4gIC8qKlxuICAgKiBTZWFyY2ggYWxsIGRvY3VtZW50cyBmb3Igb25lcyBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHF1ZXJ5IHRleHQuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcmV0dXJucyB7QXJyYXk8T2JqZWN0Pn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKHF1ZXJ5KSB7XG4gICAgdmFyIHRva2VucyA9IHRoaXMuX3Rva2VuaXplci50b2tlbml6ZSh0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUocXVlcnkpKTtcblxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hJbmRleC5zZWFyY2godG9rZW5zLCB0aGlzLl9kb2N1bWVudHMpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gZG9jdW1lbnRzXG4gICAqIEBwYXJhbSBfc2VhcmNoYWJsZUZpZWxkcyBBcnJheSBjb250YWluaW5nIHByb3BlcnR5IG5hbWVzIGFuZCBwYXRocyAobGlzdHMgb2YgcHJvcGVydHkgbmFtZXMpIHRvIG5lc3RlZCB2YWx1ZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhEb2N1bWVudHNfID0gZnVuY3Rpb24gaW5kZXhEb2N1bWVudHNfKGRvY3VtZW50cywgX3NlYXJjaGFibGVGaWVsZHMpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdmFyIGluZGV4U3RyYXRlZ3kgPSB0aGlzLl9pbmRleFN0cmF0ZWd5O1xuICAgIHZhciBzYW5pdGl6ZXIgPSB0aGlzLl9zYW5pdGl6ZXI7XG4gICAgdmFyIHNlYXJjaEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXg7XG4gICAgdmFyIHRva2VuaXplciA9IHRoaXMuX3Rva2VuaXplcjtcbiAgICB2YXIgdWlkRmllbGROYW1lID0gdGhpcy5fdWlkRmllbGROYW1lO1xuXG4gICAgZm9yICh2YXIgZGkgPSAwLCBudW1Eb2N1bWVudHMgPSBkb2N1bWVudHMubGVuZ3RoOyBkaSA8IG51bURvY3VtZW50czsgZGkrKykge1xuICAgICAgdmFyIGRvYyA9IGRvY3VtZW50c1tkaV07XG4gICAgICB2YXIgdWlkO1xuXG4gICAgICBpZiAodWlkRmllbGROYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdWlkID0gZ2V0TmVzdGVkRmllbGRWYWx1ZShkb2MsIHVpZEZpZWxkTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1aWQgPSBkb2NbdWlkRmllbGROYW1lXTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgc2ZpID0gMCwgbnVtU2VhcmNoYWJsZUZpZWxkcyA9IF9zZWFyY2hhYmxlRmllbGRzLmxlbmd0aDsgc2ZpIDwgbnVtU2VhcmNoYWJsZUZpZWxkczsgc2ZpKyspIHtcbiAgICAgICAgdmFyIGZpZWxkVmFsdWU7XG4gICAgICAgIHZhciBzZWFyY2hhYmxlRmllbGQgPSBfc2VhcmNoYWJsZUZpZWxkc1tzZmldO1xuXG4gICAgICAgIGlmIChzZWFyY2hhYmxlRmllbGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGZpZWxkVmFsdWUgPSBnZXROZXN0ZWRGaWVsZFZhbHVlKGRvYywgc2VhcmNoYWJsZUZpZWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZFZhbHVlID0gZG9jW3NlYXJjaGFibGVGaWVsZF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBmaWVsZFZhbHVlICE9PSAnc3RyaW5nJyAmJiBmaWVsZFZhbHVlLnRvU3RyaW5nKSB7XG4gICAgICAgICAgZmllbGRWYWx1ZSA9IGZpZWxkVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YXIgZmllbGRUb2tlbnMgPSB0b2tlbml6ZXIudG9rZW5pemUoc2FuaXRpemVyLnNhbml0aXplKGZpZWxkVmFsdWUpKTtcblxuICAgICAgICAgIGZvciAodmFyIGZ0aSA9IDAsIG51bUZpZWxkVmFsdWVzID0gZmllbGRUb2tlbnMubGVuZ3RoOyBmdGkgPCBudW1GaWVsZFZhbHVlczsgZnRpKyspIHtcbiAgICAgICAgICAgIHZhciBmaWVsZFRva2VuID0gZmllbGRUb2tlbnNbZnRpXTtcbiAgICAgICAgICAgIHZhciBleHBhbmRlZFRva2VucyA9IGluZGV4U3RyYXRlZ3kuZXhwYW5kVG9rZW4oZmllbGRUb2tlbik7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGV0aSA9IDAsIG51bW1FeHBhbmRlZFRva2VucyA9IGV4cGFuZGVkVG9rZW5zLmxlbmd0aDsgZXRpIDwgbnVtbUV4cGFuZGVkVG9rZW5zOyBldGkrKykge1xuICAgICAgICAgICAgICB2YXIgZXhwYW5kZWRUb2tlbiA9IGV4cGFuZGVkVG9rZW5zW2V0aV07XG4gICAgICAgICAgICAgIHNlYXJjaEluZGV4LmluZGV4RG9jdW1lbnQoZXhwYW5kZWRUb2tlbiwgdWlkLCBkb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU2VhcmNoLCBbe1xuICAgIGtleTogXCJpbmRleFN0cmF0ZWd5XCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICB0aHJvdyBFcnJvcignSUluZGV4U3RyYXRlZ3kgY2Fubm90IGJlIHNldCBhZnRlciBpbml0aWFsaXphdGlvbicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbmRleFN0cmF0ZWd5ID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbmRleFN0cmF0ZWd5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IHNhbml0aXppbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHZhbHVlIEN1c3RvbSB0ZXh0IHNhbml0aXppbmcgc3RyYXRlZ3lcbiAgICAgKiBAdGhyb3dzIEVycm9yIGlmIGRvY3VtZW50cyBoYXZlIGFscmVhZHkgYmVlbiBpbmRleGVkIGJ5IHRoaXMgc2VhcmNoIGluc3RhbmNlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzYW5pdGl6ZXJcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdJU2FuaXRpemVyIGNhbm5vdCBiZSBzZXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2FuaXRpemVyID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlYXJjaCBpbmRleCBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgQ3VzdG9tIHNlYXJjaCBpbmRleCBzdHJhdGVneVxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgZG9jdW1lbnRzIGhhdmUgYWxyZWFkeSBiZWVuIGluZGV4ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlYXJjaEluZGV4XCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICB0aHJvdyBFcnJvcignSVNlYXJjaEluZGV4IGNhbm5vdCBiZSBzZXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VhcmNoSW5kZXggPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaEluZGV4O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IHRva2VuaXppbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHZhbHVlIEN1c3RvbSB0ZXh0IHRva2VuaXppbmcgc3RyYXRlZ3lcbiAgICAgKiBAdGhyb3dzIEVycm9yIGlmIGRvY3VtZW50cyBoYXZlIGFscmVhZHkgYmVlbiBpbmRleGVkIGJ5IHRoaXMgc2VhcmNoIGluc3RhbmNlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0b2tlbml6ZXJcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdJVG9rZW5pemVyIGNhbm5vdCBiZSBzZXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdG9rZW5pemVyID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90b2tlbml6ZXI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0oKTtcblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGlnaGxpZ2h0cyB0aGUgb2NjdXJyZW5jZXMgb2YgdG9rZW5zIHdpdGhpbiBhIHN0cmluZyBvZiB0ZXh0LiBJdCBjYW4gYmUgdXNlZCB0byBnaXZlIHZpc3VhbCBpbmRpY2F0b3JzXG4gKiBvZiBtYXRjaCBjcml0ZXJpYSB3aXRoaW4gc2VhcmNoYWJsZSBmaWVsZHMuXG4gKlxuICogPHA+Rm9yIHBlcmZvcm1hbmNlIHB1cnBvc2VzIHRoaXMgaGlnaGxpZ2h0ZXIgb25seSB3b3JrcyB3aXRoIGZ1bGwtd29yZCBvciBwcmVmaXggdG9rZW4gaW5kZXhlcy5cbiAqL1xudmFyIFRva2VuSGlnaGxpZ2h0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRfaW5kZXhTdHJhdGVneSBJbmRleCBzdHJhdGVneSB1c2VkIGJ5IFNlYXJjaFxuICAgKiBAcGFyYW0gb3B0X3Nhbml0aXplciBTYW5pdGl6ZXIgdXNlZCBieSBTZWFyY2hcbiAgICogQHBhcmFtIG9wdF93cmFwcGVyVGFnTmFtZSBPcHRpb25hbCB3cmFwcGVyIHRhZyBuYW1lOyBkZWZhdWx0cyB0byAnbWFyaycgKGUuZy4gPG1hcms+KVxuICAgKi9cbiAgZnVuY3Rpb24gVG9rZW5IaWdobGlnaHRlcihvcHRfaW5kZXhTdHJhdGVneSwgb3B0X3Nhbml0aXplciwgb3B0X3dyYXBwZXJUYWdOYW1lKSB7XG4gICAgdGhpcy5faW5kZXhTdHJhdGVneSA9IG9wdF9pbmRleFN0cmF0ZWd5IHx8IG5ldyBQcmVmaXhJbmRleFN0cmF0ZWd5KCk7XG4gICAgdGhpcy5fc2FuaXRpemVyID0gb3B0X3Nhbml0aXplciB8fCBuZXcgTG93ZXJDYXNlU2FuaXRpemVyKCk7XG4gICAgdGhpcy5fd3JhcHBlclRhZ05hbWUgPSBvcHRfd3JhcHBlclRhZ05hbWUgfHwgJ21hcmsnO1xuICB9XG4gIC8qKlxuICAgKiBIaWdobGlnaHRzIHRva2VuIG9jY3VycmVuY2VzIHdpdGhpbiBhIHN0cmluZyBieSB3cmFwcGluZyB0aGVtIHdpdGggYSBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHRleHQgZS5nLiBcImpvaG4gd2F5bmVcIlxuICAgKiBAcGFyYW0gdG9rZW5zIGUuZy4gW1wid2FcIl1cbiAgICogQHJldHVybnMge3N0cmluZ30gZS5nLiBcImpvaG4gPG1hcms+d2E8L21hcms+eW5lXCJcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gVG9rZW5IaWdobGlnaHRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhpZ2hsaWdodCA9IGZ1bmN0aW9uIGhpZ2hsaWdodCh0ZXh0LCB0b2tlbnMpIHtcbiAgICB2YXIgdGFnc0xlbmd0aCA9IHRoaXMuX3dyYXBUZXh0KCcnKS5sZW5ndGg7XG5cbiAgICB2YXIgdG9rZW5EaWN0aW9uYXJ5ID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gQ3JlYXRlIGEgdG9rZW4gbWFwIGZvciBlYXNpZXIgbG9va3VwIGJlbG93LlxuXG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKHRva2Vuc1tpXSk7XG5cbiAgICAgIHZhciBleHBhbmRlZFRva2VucyA9IHRoaXMuX2luZGV4U3RyYXRlZ3kuZXhwYW5kVG9rZW4odG9rZW4pO1xuXG4gICAgICBmb3IgKHZhciBqID0gMCwgbnVtRXhwYW5kZWRUb2tlbnMgPSBleHBhbmRlZFRva2Vucy5sZW5ndGg7IGogPCBudW1FeHBhbmRlZFRva2VuczsgaisrKSB7XG4gICAgICAgIHZhciBleHBhbmRlZFRva2VuID0gZXhwYW5kZWRUb2tlbnNbal07XG5cbiAgICAgICAgaWYgKCF0b2tlbkRpY3Rpb25hcnlbZXhwYW5kZWRUb2tlbl0pIHtcbiAgICAgICAgICB0b2tlbkRpY3Rpb25hcnlbZXhwYW5kZWRUb2tlbl0gPSBbdG9rZW5dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRva2VuRGljdGlvbmFyeVtleHBhbmRlZFRva2VuXS5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gVHJhY2sgYWN0dWFsQ3VycmVudFdvcmQgYW5kIHNhbml0aXplZEN1cnJlbnRXb3JkIHNlcGFyYXRlbHkgaW4gY2FzZSB3ZSBlbmNvdW50ZXIgbmVzdGVkIHRhZ3MuXG5cblxuICAgIHZhciBhY3R1YWxDdXJyZW50V29yZCA9ICcnO1xuICAgIHZhciBzYW5pdGl6ZWRDdXJyZW50V29yZCA9ICcnO1xuICAgIHZhciBjdXJyZW50V29yZFN0YXJ0SW5kZXggPSAwOyAvLyBOb3RlIHRoaXMgYXNzdW1lcyBlaXRoZXIgcHJlZml4IG9yIGZ1bGwgd29yZCBtYXRjaGluZy5cblxuICAgIGZvciAodmFyIGkgPSAwLCB0ZXh0TGVuZ3RoID0gdGV4dC5sZW5ndGg7IGkgPCB0ZXh0TGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGFyYWN0ZXIgPSB0ZXh0LmNoYXJBdChpKTtcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJyAnKSB7XG4gICAgICAgIGFjdHVhbEN1cnJlbnRXb3JkID0gJyc7XG4gICAgICAgIHNhbml0aXplZEN1cnJlbnRXb3JkID0gJyc7XG4gICAgICAgIGN1cnJlbnRXb3JkU3RhcnRJbmRleCA9IGkgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0dWFsQ3VycmVudFdvcmQgKz0gY2hhcmFjdGVyO1xuICAgICAgICBzYW5pdGl6ZWRDdXJyZW50V29yZCArPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoY2hhcmFjdGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuRGljdGlvbmFyeVtzYW5pdGl6ZWRDdXJyZW50V29yZF0gJiYgdG9rZW5EaWN0aW9uYXJ5W3Nhbml0aXplZEN1cnJlbnRXb3JkXS5pbmRleE9mKHNhbml0aXplZEN1cnJlbnRXb3JkKSA+PSAwKSB7XG4gICAgICAgIGFjdHVhbEN1cnJlbnRXb3JkID0gdGhpcy5fd3JhcFRleHQoYWN0dWFsQ3VycmVudFdvcmQpO1xuICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudFdvcmRTdGFydEluZGV4KSArIGFjdHVhbEN1cnJlbnRXb3JkICsgdGV4dC5zdWJzdHJpbmcoaSArIDEpO1xuICAgICAgICBpICs9IHRhZ3NMZW5ndGg7XG4gICAgICAgIHRleHRMZW5ndGggKz0gdGFnc0xlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHRleHQgdG8gd3JhcFxuICAgKiBAcmV0dXJucyBUZXh0IHdyYXBwZWQgYnkgd3JhcHBlciB0YWcgKGUuZy4gXCJmb29cIiBiZWNvbWVzIFwiPG1hcms+Zm9vPC9tYXJrPlwiKVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fd3JhcFRleHQgPSBmdW5jdGlvbiBfd3JhcFRleHQodGV4dCkge1xuICAgIHZhciB0YWdOYW1lID0gdGhpcy5fd3JhcHBlclRhZ05hbWU7XG4gICAgcmV0dXJuIFwiPFwiICsgdGFnTmFtZSArIFwiPlwiICsgdGV4dCArIFwiPC9cIiArIHRhZ05hbWUgKyBcIj5cIjtcbiAgfTtcblxuICByZXR1cm4gVG9rZW5IaWdobGlnaHRlcjtcbn0oKTtcblxuZXhwb3J0IHsgQWxsU3Vic3RyaW5nc0luZGV4U3RyYXRlZ3ksIENhc2VTZW5zaXRpdmVTYW5pdGl6ZXIsIEV4YWN0V29yZEluZGV4U3RyYXRlZ3ksIExvd2VyQ2FzZVNhbml0aXplciwgUHJlZml4SW5kZXhTdHJhdGVneSwgU2VhcmNoLCBTaW1wbGVUb2tlbml6ZXIsIFN0ZW1taW5nVG9rZW5pemVyLCBTdG9wV29yZHNNYXAsIFN0b3BXb3Jkc1Rva2VuaXplciwgVGZJZGZTZWFyY2hJbmRleCwgVG9rZW5IaWdobGlnaHRlciwgVW5vcmRlcmVkU2VhcmNoSW5kZXggfTtcbiIsIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcblx0dmFyIGxhenlTaXplcyA9IGZhY3Rvcnkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQsIERhdGUpO1xuXHR3aW5kb3cubGF6eVNpemVzID0gbGF6eVNpemVzO1xuXHRpZih0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGxhenlTaXplcztcblx0fVxufSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID9cbiAgICAgIHdpbmRvdyA6IHt9LCBcbi8qKlxuICogaW1wb3J0KFwiLi90eXBlcy9nbG9iYWxcIilcbiAqIEB0eXBlZGVmIHsgaW1wb3J0KFwiLi90eXBlcy9sYXp5c2l6ZXMtY29uZmlnXCIpLkxhenlTaXplc0NvbmZpZ1BhcnRpYWwgfSBMYXp5U2l6ZXNDb25maWdQYXJ0aWFsXG4gKi9cbmZ1bmN0aW9uIGwod2luZG93LCBkb2N1bWVudCwgRGF0ZSkgeyAvLyBQYXNzIGluIHRoZSB3aW5kb3cgRGF0ZSBmdW5jdGlvbiBhbHNvIGZvciBTU1IgYmVjYXVzZSB0aGUgRGF0ZSBjbGFzcyBjYW4gYmUgbG9zdFxuXHQndXNlIHN0cmljdCc7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cblx0dmFyIGxhenlzaXplcyxcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7IExhenlTaXplc0NvbmZpZ1BhcnRpYWwgfVxuXHRcdCAqL1xuXHRcdGxhenlTaXplc0NmZztcblxuXHQoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJvcDtcblxuXHRcdHZhciBsYXp5U2l6ZXNEZWZhdWx0cyA9IHtcblx0XHRcdGxhenlDbGFzczogJ2xhenlsb2FkJyxcblx0XHRcdGxvYWRlZENsYXNzOiAnbGF6eWxvYWRlZCcsXG5cdFx0XHRsb2FkaW5nQ2xhc3M6ICdsYXp5bG9hZGluZycsXG5cdFx0XHRwcmVsb2FkQ2xhc3M6ICdsYXp5cHJlbG9hZCcsXG5cdFx0XHRlcnJvckNsYXNzOiAnbGF6eWVycm9yJyxcblx0XHRcdC8vc3RyaWN0Q2xhc3M6ICdsYXp5c3RyaWN0Jyxcblx0XHRcdGF1dG9zaXplc0NsYXNzOiAnbGF6eWF1dG9zaXplcycsXG5cdFx0XHRmYXN0TG9hZGVkQ2xhc3M6ICdscy1pcy1jYWNoZWQnLFxuXHRcdFx0aWZyYW1lTG9hZE1vZGU6IDAsXG5cdFx0XHRzcmNBdHRyOiAnZGF0YS1zcmMnLFxuXHRcdFx0c3Jjc2V0QXR0cjogJ2RhdGEtc3Jjc2V0Jyxcblx0XHRcdHNpemVzQXR0cjogJ2RhdGEtc2l6ZXMnLFxuXHRcdFx0Ly9wcmVsb2FkQWZ0ZXJMb2FkOiBmYWxzZSxcblx0XHRcdG1pblNpemU6IDQwLFxuXHRcdFx0Y3VzdG9tTWVkaWE6IHt9LFxuXHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdGV4cEZhY3RvcjogMS41LFxuXHRcdFx0aEZhYzogMC44LFxuXHRcdFx0bG9hZE1vZGU6IDIsXG5cdFx0XHRsb2FkSGlkZGVuOiB0cnVlLFxuXHRcdFx0cmljVGltZW91dDogMCxcblx0XHRcdHRocm90dGxlRGVsYXk6IDEyNSxcblx0XHR9O1xuXG5cdFx0bGF6eVNpemVzQ2ZnID0gd2luZG93LmxhenlTaXplc0NvbmZpZyB8fCB3aW5kb3cubGF6eXNpemVzQ29uZmlnIHx8IHt9O1xuXG5cdFx0Zm9yKHByb3AgaW4gbGF6eVNpemVzRGVmYXVsdHMpe1xuXHRcdFx0aWYoIShwcm9wIGluIGxhenlTaXplc0NmZykpe1xuXHRcdFx0XHRsYXp5U2l6ZXNDZmdbcHJvcF0gPSBsYXp5U2l6ZXNEZWZhdWx0c1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG5cblx0aWYgKCFkb2N1bWVudCB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKSB7fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGUgeyBMYXp5U2l6ZXNDb25maWdQYXJ0aWFsIH1cblx0XHRcdCAqL1xuXHRcdFx0Y2ZnOiBsYXp5U2l6ZXNDZmcsXG5cdFx0XHQvKipcblx0XHRcdCAqIEB0eXBlIHsgdHJ1ZSB9XG5cdFx0XHQgKi9cblx0XHRcdG5vU3VwcG9ydDogdHJ1ZSxcblx0XHR9O1xuXHR9XG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblx0dmFyIHN1cHBvcnRQaWN0dXJlID0gd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHR2YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSAnYWRkRXZlbnRMaXN0ZW5lcic7XG5cblx0dmFyIF9nZXRBdHRyaWJ1dGUgPSAnZ2V0QXR0cmlidXRlJztcblxuXHQvKipcblx0ICogVXBkYXRlIHRvIGJpbmQgdG8gd2luZG93IGJlY2F1c2UgJ3RoaXMnIGJlY29tZXMgbnVsbCBkdXJpbmcgU1NSXG5cdCAqIGJ1aWxkcy5cblx0ICovXG5cdHZhciBhZGRFdmVudExpc3RlbmVyID0gd2luZG93W19hZGRFdmVudExpc3RlbmVyXS5iaW5kKHdpbmRvdyk7XG5cblx0dmFyIHNldFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dDtcblxuXHR2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0O1xuXG5cdHZhciByZXF1ZXN0SWRsZUNhbGxiYWNrID0gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5cblx0dmFyIHJlZ1BpY3R1cmUgPSAvXnBpY3R1cmUkL2k7XG5cblx0dmFyIGxvYWRFdmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InLCAnbGF6eWluY2x1ZGVkJywgJ19sYXp5bG9hZGVkJ107XG5cblx0dmFyIHJlZ0NsYXNzQ2FjaGUgPSB7fTtcblxuXHR2YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gZWxlIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gY2xzIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdGlmKCFyZWdDbGFzc0NhY2hlW2Nsc10pe1xuXHRcdFx0cmVnQ2xhc3NDYWNoZVtjbHNdID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnQ2xhc3NDYWNoZVtjbHNdLnRlc3QoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKSAmJiByZWdDbGFzc0NhY2hlW2Nsc107XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBlbGUge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSBjbHMge3N0cmluZ31cblx0ICovXG5cdHZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0aWYgKCFoYXNDbGFzcyhlbGUsIGNscykpe1xuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS50cmltKCkgKyAnICcgKyBjbHMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZSB7RWxlbWVudH1cblx0ICogQHBhcmFtIGNscyB7c3RyaW5nfVxuXHQgKi9cblx0dmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHR2YXIgcmVnO1xuXHRcdGlmICgocmVnID0gaGFzQ2xhc3MoZWxlLGNscykpKSB7XG5cdFx0XHRlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpLnJlcGxhY2UocmVnLCAnICcpKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIGFkZFJlbW92ZUxvYWRFdmVudHMgPSBmdW5jdGlvbihkb20sIGZuLCBhZGQpe1xuXHRcdHZhciBhY3Rpb24gPSBhZGQgPyBfYWRkRXZlbnRMaXN0ZW5lciA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblx0XHRpZihhZGQpe1xuXHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhkb20sIGZuKTtcblx0XHR9XG5cdFx0bG9hZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2dCl7XG5cdFx0XHRkb21bYWN0aW9uXShldnQsIGZuKTtcblx0XHR9KTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZW0geyBFbGVtZW50IH1cblx0ICogQHBhcmFtIG5hbWUgeyBzdHJpbmcgfVxuXHQgKiBAcGFyYW0gZGV0YWlsIHsgYW55IH1cblx0ICogQHBhcmFtIG5vQnViYmxlcyB7IGJvb2xlYW4gfVxuXHQgKiBAcGFyYW0gbm9DYW5jZWxhYmxlIHsgYm9vbGVhbiB9XG5cdCAqIEByZXR1cm5zIHsgQ3VzdG9tRXZlbnQgfVxuXHQgKi9cblx0dmFyIHRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uKGVsZW0sIG5hbWUsIGRldGFpbCwgbm9CdWJibGVzLCBub0NhbmNlbGFibGUpe1xuXHRcdHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXG5cdFx0aWYoIWRldGFpbCl7XG5cdFx0XHRkZXRhaWwgPSB7fTtcblx0XHR9XG5cblx0XHRkZXRhaWwuaW5zdGFuY2UgPSBsYXp5c2l6ZXM7XG5cblx0XHRldmVudC5pbml0RXZlbnQobmFtZSwgIW5vQnViYmxlcywgIW5vQ2FuY2VsYWJsZSk7XG5cblx0XHRldmVudC5kZXRhaWwgPSBkZXRhaWw7XG5cblx0XHRlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdHJldHVybiBldmVudDtcblx0fTtcblxuXHR2YXIgdXBkYXRlUG9seWZpbGwgPSBmdW5jdGlvbiAoZWwsIGZ1bGwpe1xuXHRcdHZhciBwb2x5ZmlsbDtcblx0XHRpZiggIXN1cHBvcnRQaWN0dXJlICYmICggcG9seWZpbGwgPSAod2luZG93LnBpY3R1cmVmaWxsIHx8IGxhenlTaXplc0NmZy5wZikgKSApe1xuXHRcdFx0aWYoZnVsbCAmJiBmdWxsLnNyYyAmJiAhZWxbX2dldEF0dHJpYnV0ZV0oJ3NyY3NldCcpKXtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBmdWxsLnNyYyk7XG5cdFx0XHR9XG5cdFx0XHRwb2x5ZmlsbCh7cmVldmFsdWF0ZTogdHJ1ZSwgZWxlbWVudHM6IFtlbF19KTtcblx0XHR9IGVsc2UgaWYoZnVsbCAmJiBmdWxsLnNyYyl7XG5cdFx0XHRlbC5zcmMgPSBmdWxsLnNyYztcblx0XHR9XG5cdH07XG5cblx0dmFyIGdldENTUyA9IGZ1bmN0aW9uIChlbGVtLCBzdHlsZSl7XG5cdFx0cmV0dXJuIChnZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpIHx8IHt9KVtzdHlsZV07XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBlbGVtIHsgRWxlbWVudCB9XG5cdCAqIEBwYXJhbSBwYXJlbnQgeyBFbGVtZW50IH1cblx0ICogQHBhcmFtIFt3aWR0aF0ge251bWJlcn1cblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdHZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uKGVsZW0sIHBhcmVudCwgd2lkdGgpe1xuXHRcdHdpZHRoID0gd2lkdGggfHwgZWxlbS5vZmZzZXRXaWR0aDtcblxuXHRcdHdoaWxlKHdpZHRoIDwgbGF6eVNpemVzQ2ZnLm1pblNpemUgJiYgcGFyZW50ICYmICFlbGVtLl9sYXp5c2l6ZXNXaWR0aCl7XG5cdFx0XHR3aWR0aCA9ICBwYXJlbnQub2Zmc2V0V2lkdGg7XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2lkdGg7XG5cdH07XG5cblx0dmFyIHJBRiA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBydW5uaW5nLCB3YWl0aW5nO1xuXHRcdHZhciBmaXJzdEZucyA9IFtdO1xuXHRcdHZhciBzZWNvbmRGbnMgPSBbXTtcblx0XHR2YXIgZm5zID0gZmlyc3RGbnM7XG5cblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBydW5GbnMgPSBmbnM7XG5cblx0XHRcdGZucyA9IGZpcnN0Rm5zLmxlbmd0aCA/IHNlY29uZEZucyA6IGZpcnN0Rm5zO1xuXG5cdFx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHdhaXRpbmcgPSBmYWxzZTtcblxuXHRcdFx0d2hpbGUocnVuRm5zLmxlbmd0aCl7XG5cdFx0XHRcdHJ1bkZucy5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0dmFyIHJhZkJhdGNoID0gZnVuY3Rpb24oZm4sIHF1ZXVlKXtcblx0XHRcdGlmKHJ1bm5pbmcgJiYgIXF1ZXVlKXtcblx0XHRcdFx0Zm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZucy5wdXNoKGZuKTtcblxuXHRcdFx0XHRpZighd2FpdGluZyl7XG5cdFx0XHRcdFx0d2FpdGluZyA9IHRydWU7XG5cdFx0XHRcdFx0KGRvY3VtZW50LmhpZGRlbiA/IHNldFRpbWVvdXQgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKHJ1bik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmFmQmF0Y2guX2xzRmx1c2ggPSBydW47XG5cblx0XHRyZXR1cm4gcmFmQmF0Y2g7XG5cdH0pKCk7XG5cblx0dmFyIHJBRkl0ID0gZnVuY3Rpb24oZm4sIHNpbXBsZSl7XG5cdFx0cmV0dXJuIHNpbXBsZSA/XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0ckFGKGZuKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblx0XHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Zm4uYXBwbHkodGhhdCwgYXJncyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdDtcblx0fTtcblxuXHR2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbihmbil7XG5cdFx0dmFyIHJ1bm5pbmc7XG5cdFx0dmFyIGxhc3RUaW1lID0gMDtcblx0XHR2YXIgZ0RlbGF5ID0gbGF6eVNpemVzQ2ZnLnRocm90dGxlRGVsYXk7XG5cdFx0dmFyIHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblx0XHRcdGZuKCk7XG5cdFx0fTtcblx0XHR2YXIgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjayAmJiBySUNUaW1lb3V0ID4gNDkgP1xuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0cmVxdWVzdElkbGVDYWxsYmFjayhydW4sIHt0aW1lb3V0OiBySUNUaW1lb3V0fSk7XG5cblx0XHRcdFx0aWYocklDVGltZW91dCAhPT0gbGF6eVNpemVzQ2ZnLnJpY1RpbWVvdXQpe1xuXHRcdFx0XHRcdHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcblx0XHRcdFx0fVxuXHRcdFx0fSA6XG5cdFx0XHRyQUZJdChmdW5jdGlvbigpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJ1bik7XG5cdFx0XHR9LCB0cnVlKVxuXHRcdDtcblxuXHRcdHJldHVybiBmdW5jdGlvbihpc1ByaW9yaXR5KXtcblx0XHRcdHZhciBkZWxheTtcblxuXHRcdFx0aWYoKGlzUHJpb3JpdHkgPSBpc1ByaW9yaXR5ID09PSB0cnVlKSl7XG5cdFx0XHRcdHJJQ1RpbWVvdXQgPSAzMztcblx0XHRcdH1cblxuXHRcdFx0aWYocnVubmluZyl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cnVubmluZyA9ICB0cnVlO1xuXG5cdFx0XHRkZWxheSA9IGdEZWxheSAtIChEYXRlLm5vdygpIC0gbGFzdFRpbWUpO1xuXG5cdFx0XHRpZihkZWxheSA8IDApe1xuXHRcdFx0XHRkZWxheSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGlzUHJpb3JpdHkgfHwgZGVsYXkgPCA5KXtcblx0XHRcdFx0aWRsZUNhbGxiYWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGlkbGVDYWxsYmFjaywgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0Ly9iYXNlZCBvbiBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5kZS8yMDEzLzA4L2J1aWxkaW5nLWJldHRlci1kZWJvdW5jZS5odG1sXG5cdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcblx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdHZhciB3YWl0ID0gOTk7XG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdGZ1bmMoKTtcblx0XHR9O1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG5cdFx0XHRpZiAobGFzdCA8IHdhaXQpIHtcblx0XHRcdFx0c2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0KHJlcXVlc3RJZGxlQ2FsbGJhY2sgfHwgcnVuKShydW4pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHRpZiAoIXRpbWVvdXQpIHtcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0dmFyIGxvYWRlciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBwcmVsb2FkRWxlbXMsIGlzQ29tcGxldGVkLCByZXNldFByZWxvYWRpbmdUaW1lciwgbG9hZE1vZGUsIHN0YXJ0ZWQ7XG5cblx0XHR2YXIgZUx2VywgZWx2SCwgZUx0b3AsIGVMbGVmdCwgZUxyaWdodCwgZUxib3R0b20sIGlzQm9keUhpZGRlbjtcblxuXHRcdHZhciByZWdJbWcgPSAvXmltZyQvaTtcblx0XHR2YXIgcmVnSWZyYW1lID0gL15pZnJhbWUkL2k7XG5cblx0XHR2YXIgc3VwcG9ydFNjcm9sbCA9ICgnb25zY3JvbGwnIGluIHdpbmRvdykgJiYgISgvKGdsZXxpbmcpYm90Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcblxuXHRcdHZhciBzaHJpbmtFeHBhbmQgPSAwO1xuXHRcdHZhciBjdXJyZW50RXhwYW5kID0gMDtcblxuXHRcdHZhciBpc0xvYWRpbmcgPSAwO1xuXHRcdHZhciBsb3dSdW5zID0gLTE7XG5cblx0XHR2YXIgcmVzZXRQcmVsb2FkaW5nID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdGlmKCFlIHx8IGlzTG9hZGluZyA8IDAgfHwgIWUudGFyZ2V0KXtcblx0XHRcdFx0aXNMb2FkaW5nID0gMDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRpZiAoaXNCb2R5SGlkZGVuID09IG51bGwpIHtcblx0XHRcdFx0aXNCb2R5SGlkZGVuID0gZ2V0Q1NTKGRvY3VtZW50LmJvZHksICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpc0JvZHlIaWRkZW4gfHwgIShnZXRDU1MoZWxlbS5wYXJlbnROb2RlLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nICYmIGdldENTUyhlbGVtLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nKTtcblx0XHR9O1xuXG5cdFx0dmFyIGlzTmVzdGVkVmlzaWJsZSA9IGZ1bmN0aW9uKGVsZW0sIGVsZW1FeHBhbmQpe1xuXHRcdFx0dmFyIG91dGVyUmVjdDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtO1xuXHRcdFx0dmFyIHZpc2libGUgPSBpc1Zpc2libGUoZWxlbSk7XG5cblx0XHRcdGVMdG9wIC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTGJvdHRvbSArPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxsZWZ0IC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTHJpZ2h0ICs9IGVsZW1FeHBhbmQ7XG5cblx0XHRcdHdoaWxlKHZpc2libGUgJiYgKHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnQpICYmIHBhcmVudCAhPSBkb2N1bWVudC5ib2R5ICYmIHBhcmVudCAhPSBkb2NFbGVtKXtcblx0XHRcdFx0dmlzaWJsZSA9ICgoZ2V0Q1NTKHBhcmVudCwgJ29wYWNpdHknKSB8fCAxKSA+IDApO1xuXG5cdFx0XHRcdGlmKHZpc2libGUgJiYgZ2V0Q1NTKHBhcmVudCwgJ292ZXJmbG93JykgIT0gJ3Zpc2libGUnKXtcblx0XHRcdFx0XHRvdXRlclJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmlzaWJsZSA9IGVMcmlnaHQgPiBvdXRlclJlY3QubGVmdCAmJlxuXHRcdFx0XHRcdFx0ZUxsZWZ0IDwgb3V0ZXJSZWN0LnJpZ2h0ICYmXG5cdFx0XHRcdFx0XHRlTGJvdHRvbSA+IG91dGVyUmVjdC50b3AgLSAxICYmXG5cdFx0XHRcdFx0XHRlTHRvcCA8IG91dGVyUmVjdC5ib3R0b20gKyAxXG5cdFx0XHRcdFx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2aXNpYmxlO1xuXHRcdH07XG5cblx0XHR2YXIgY2hlY2tFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGVMbGVuLCBpLCByZWN0LCBhdXRvTG9hZEVsZW0sIGxvYWRlZFNvbWV0aGluZywgZWxlbUV4cGFuZCwgZWxlbU5lZ2F0aXZlRXhwYW5kLCBlbGVtRXhwYW5kVmFsLFxuXHRcdFx0XHRiZWZvcmVFeHBhbmRWYWwsIGRlZmF1bHRFeHBhbmQsIHByZWxvYWRFeHBhbmQsIGhGYWM7XG5cdFx0XHR2YXIgbGF6eWxvYWRFbGVtcyA9IGxhenlzaXplcy5lbGVtZW50cztcblxuXHRcdFx0aWYoKGxvYWRNb2RlID0gbGF6eVNpemVzQ2ZnLmxvYWRNb2RlKSAmJiBpc0xvYWRpbmcgPCA4ICYmIChlTGxlbiA9IGxhenlsb2FkRWxlbXMubGVuZ3RoKSl7XG5cblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0bG93UnVucysrO1xuXG5cdFx0XHRcdGZvcig7IGkgPCBlTGxlbjsgaSsrKXtcblxuXHRcdFx0XHRcdGlmKCFsYXp5bG9hZEVsZW1zW2ldIHx8IGxhenlsb2FkRWxlbXNbaV0uX2xhenlSYWNlKXtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighc3VwcG9ydFNjcm9sbCB8fCAobGF6eXNpemVzLnByZW1hdHVyZVVudmVpbCAmJiBsYXp5c2l6ZXMucHJlbWF0dXJlVW52ZWlsKGxhenlsb2FkRWxlbXNbaV0pKSl7dW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighKGVsZW1FeHBhbmRWYWwgPSBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKCdkYXRhLWV4cGFuZCcpKSB8fCAhKGVsZW1FeHBhbmQgPSBlbGVtRXhwYW5kVmFsICogMSkpe1xuXHRcdFx0XHRcdFx0ZWxlbUV4cGFuZCA9IGN1cnJlbnRFeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFkZWZhdWx0RXhwYW5kKSB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0RXhwYW5kID0gKCFsYXp5U2l6ZXNDZmcuZXhwYW5kIHx8IGxhenlTaXplc0NmZy5leHBhbmQgPCAxKSA/XG5cdFx0XHRcdFx0XHRcdGRvY0VsZW0uY2xpZW50SGVpZ2h0ID4gNTAwICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPiA1MDAgPyA1MDAgOiAzNzAgOlxuXHRcdFx0XHRcdFx0XHRsYXp5U2l6ZXNDZmcuZXhwYW5kO1xuXG5cdFx0XHRcdFx0XHRsYXp5c2l6ZXMuX2RlZkV4ID0gZGVmYXVsdEV4cGFuZDtcblxuXHRcdFx0XHRcdFx0cHJlbG9hZEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQgKiBsYXp5U2l6ZXNDZmcuZXhwRmFjdG9yO1xuXHRcdFx0XHRcdFx0aEZhYyA9IGxhenlTaXplc0NmZy5oRmFjO1xuXHRcdFx0XHRcdFx0aXNCb2R5SGlkZGVuID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0aWYoY3VycmVudEV4cGFuZCA8IHByZWxvYWRFeHBhbmQgJiYgaXNMb2FkaW5nIDwgMSAmJiBsb3dSdW5zID4gMiAmJiBsb2FkTW9kZSA+IDIgJiYgIWRvY3VtZW50LmhpZGRlbil7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBwcmVsb2FkRXhwYW5kO1xuXHRcdFx0XHRcdFx0XHRsb3dSdW5zID0gMDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihsb2FkTW9kZSA+IDEgJiYgbG93UnVucyA+IDEgJiYgaXNMb2FkaW5nIDwgNil7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IHNocmlua0V4cGFuZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihiZWZvcmVFeHBhbmRWYWwgIT09IGVsZW1FeHBhbmQpe1xuXHRcdFx0XHRcdFx0ZUx2VyA9IGlubmVyV2lkdGggKyAoZWxlbUV4cGFuZCAqIGhGYWMpO1xuXHRcdFx0XHRcdFx0ZWx2SCA9IGlubmVySGVpZ2h0ICsgZWxlbUV4cGFuZDtcblx0XHRcdFx0XHRcdGVsZW1OZWdhdGl2ZUV4cGFuZCA9IGVsZW1FeHBhbmQgKiAtMTtcblx0XHRcdFx0XHRcdGJlZm9yZUV4cGFuZFZhbCA9IGVsZW1FeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVjdCA9IGxhenlsb2FkRWxlbXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRcdFx0XHRpZiAoKGVMYm90dG9tID0gcmVjdC5ib3R0b20pID49IGVsZW1OZWdhdGl2ZUV4cGFuZCAmJlxuXHRcdFx0XHRcdFx0KGVMdG9wID0gcmVjdC50b3ApIDw9IGVsdkggJiZcblx0XHRcdFx0XHRcdChlTHJpZ2h0ID0gcmVjdC5yaWdodCkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICogaEZhYyAmJlxuXHRcdFx0XHRcdFx0KGVMbGVmdCA9IHJlY3QubGVmdCkgPD0gZUx2VyAmJlxuXHRcdFx0XHRcdFx0KGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSAmJlxuXHRcdFx0XHRcdFx0KGxhenlTaXplc0NmZy5sb2FkSGlkZGVuIHx8IGlzVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldKSkgJiZcblx0XHRcdFx0XHRcdCgoaXNDb21wbGV0ZWQgJiYgaXNMb2FkaW5nIDwgMyAmJiAhZWxlbUV4cGFuZFZhbCAmJiAobG9hZE1vZGUgPCAzIHx8IGxvd1J1bnMgPCA0KSkgfHwgaXNOZXN0ZWRWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0sIGVsZW1FeHBhbmQpKSl7XG5cdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGxhenlsb2FkRWxlbXNbaV0pO1xuXHRcdFx0XHRcdFx0bG9hZGVkU29tZXRoaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmKGlzTG9hZGluZyA+IDkpe2JyZWFrO31cblx0XHRcdFx0XHR9IGVsc2UgaWYoIWxvYWRlZFNvbWV0aGluZyAmJiBpc0NvbXBsZXRlZCAmJiAhYXV0b0xvYWRFbGVtICYmXG5cdFx0XHRcdFx0XHRpc0xvYWRpbmcgPCA0ICYmIGxvd1J1bnMgPCA0ICYmIGxvYWRNb2RlID4gMiAmJlxuXHRcdFx0XHRcdFx0KHByZWxvYWRFbGVtc1swXSB8fCBsYXp5U2l6ZXNDZmcucHJlbG9hZEFmdGVyTG9hZCkgJiZcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgKCFlbGVtRXhwYW5kVmFsICYmICgoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApIHx8IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgIT0gJ2F1dG8nKSkpKXtcblx0XHRcdFx0XHRcdGF1dG9Mb2FkRWxlbSA9IHByZWxvYWRFbGVtc1swXSB8fCBsYXp5bG9hZEVsZW1zW2ldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGF1dG9Mb2FkRWxlbSAmJiAhbG9hZGVkU29tZXRoaW5nKXtcblx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGF1dG9Mb2FkRWxlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHRocm90dGxlZENoZWNrRWxlbWVudHMgPSB0aHJvdHRsZShjaGVja0VsZW1lbnRzKTtcblxuXHRcdHZhciBzd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcblx0XHRcdHZhciBlbGVtID0gZS50YXJnZXQ7XG5cblx0XHRcdGlmIChlbGVtLl9sYXp5Q2FjaGUpIHtcblx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlDYWNoZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNldFByZWxvYWRpbmcoZSk7XG5cdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGVkQ2xhc3MpO1xuXHRcdFx0cmVtb3ZlQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0XHR0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenlsb2FkZWQnKTtcblx0XHR9O1xuXHRcdHZhciByYWZlZFN3aXRjaExvYWRpbmdDbGFzcyA9IHJBRkl0KHN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0dmFyIHJhZlN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0cmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3Moe3RhcmdldDogZS50YXJnZXR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoYW5nZUlmcmFtZVNyYyA9IGZ1bmN0aW9uKGVsZW0sIHNyYyl7XG5cdFx0XHR2YXIgbG9hZE1vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2FkLW1vZGUnKSB8fCBsYXp5U2l6ZXNDZmcuaWZyYW1lTG9hZE1vZGU7XG5cblx0XHRcdC8vIGxvYWRNb2RlIGNhbiBiZSBhbHNvIGEgc3RyaW5nIVxuXHRcdFx0aWYgKGxvYWRNb2RlID09IDApIHtcblx0XHRcdFx0ZWxlbS5jb250ZW50V2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc3JjKTtcblx0XHRcdH0gZWxzZSBpZiAobG9hZE1vZGUgPT0gMSkge1xuXHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGhhbmRsZVNvdXJjZXMgPSBmdW5jdGlvbihzb3VyY2Upe1xuXHRcdFx0dmFyIGN1c3RvbU1lZGlhO1xuXG5cdFx0XHR2YXIgc291cmNlU3Jjc2V0ID0gc291cmNlW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyKTtcblxuXHRcdFx0aWYoIChjdXN0b21NZWRpYSA9IGxhenlTaXplc0NmZy5jdXN0b21NZWRpYVtzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ2RhdGEtbWVkaWEnKSB8fCBzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ21lZGlhJyldKSApe1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCdtZWRpYScsIGN1c3RvbU1lZGlhKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoc291cmNlU3Jjc2V0KXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc291cmNlU3Jjc2V0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGxhenlVbnZlaWwgPSByQUZJdChmdW5jdGlvbiAoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyl7XG5cdFx0XHR2YXIgc3JjLCBzcmNzZXQsIHBhcmVudCwgaXNQaWN0dXJlLCBldmVudCwgZmlyZXNMb2FkO1xuXG5cdFx0XHRpZighKGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3JldW52ZWlsJywgZGV0YWlsKSkuZGVmYXVsdFByZXZlbnRlZCl7XG5cblx0XHRcdFx0aWYoc2l6ZXMpe1xuXHRcdFx0XHRcdGlmKGlzQXV0byl7XG5cdFx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuYXV0b3NpemVzQ2xhc3MpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCBzaXplcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Jjc2V0ID0gZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc3Jjc2V0QXR0cik7XG5cdFx0XHRcdHNyYyA9IGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY0F0dHIpO1xuXG5cdFx0XHRcdGlmKGlzSW1nKSB7XG5cdFx0XHRcdFx0cGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdGlzUGljdHVyZSA9IHBhcmVudCAmJiByZWdQaWN0dXJlLnRlc3QocGFyZW50Lm5vZGVOYW1lIHx8ICcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZpcmVzTG9hZCA9IGRldGFpbC5maXJlc0xvYWQgfHwgKCgnc3JjJyBpbiBlbGVtKSAmJiAoc3Jjc2V0IHx8IHNyYyB8fCBpc1BpY3R1cmUpKTtcblxuXHRcdFx0XHRldmVudCA9IHt0YXJnZXQ6IGVsZW19O1xuXG5cdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xuXG5cdFx0XHRcdGlmKGZpcmVzTG9hZCl7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHJlc2V0UHJlbG9hZGluZ1RpbWVyKTtcblx0XHRcdFx0XHRyZXNldFByZWxvYWRpbmdUaW1lciA9IHNldFRpbWVvdXQocmVzZXRQcmVsb2FkaW5nLCAyNTAwKTtcblx0XHRcdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcywgdHJ1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihpc1BpY3R1cmUpe1xuXHRcdFx0XHRcdGZvckVhY2guY2FsbChwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpLCBoYW5kbGVTb3VyY2VzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHNyY3NldCl7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIHNyY3NldCk7XG5cdFx0XHRcdH0gZWxzZSBpZihzcmMgJiYgIWlzUGljdHVyZSl7XG5cdFx0XHRcdFx0aWYocmVnSWZyYW1lLnRlc3QoZWxlbS5ub2RlTmFtZSkpe1xuXHRcdFx0XHRcdFx0Y2hhbmdlSWZyYW1lU3JjKGVsZW0sIHNyYyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsZW0uc3JjID0gc3JjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGlzSW1nICYmIChzcmNzZXQgfHwgaXNQaWN0dXJlKSl7XG5cdFx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwge3NyYzogc3JjfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoZWxlbS5fbGF6eVJhY2Upe1xuXHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eVJhY2U7XG5cdFx0XHR9XG5cdFx0XHRyZW1vdmVDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKTtcblxuXHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vIFBhcnQgb2YgdGhpcyBjYW4gYmUgcmVtb3ZlZCBhcyBzb29uIGFzIHRoaXMgZml4IGlzIG9sZGVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03NzMxICgyMDE1KVxuXHRcdFx0XHR2YXIgaXNMb2FkZWQgPSBlbGVtLmNvbXBsZXRlICYmIGVsZW0ubmF0dXJhbFdpZHRoID4gMTtcblxuXHRcdFx0XHRpZiggIWZpcmVzTG9hZCB8fCBpc0xvYWRlZCl7XG5cdFx0XHRcdFx0aWYgKGlzTG9hZGVkKSB7XG5cdFx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuZmFzdExvYWRlZENsYXNzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3dpdGNoTG9hZGluZ0NsYXNzKGV2ZW50KTtcblx0XHRcdFx0XHRlbGVtLl9sYXp5Q2FjaGUgPSB0cnVlO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdGlmICgnX2xhenlDYWNoZScgaW4gZWxlbSkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eUNhY2hlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtLmxvYWRpbmcgPT0gJ2xhenknKSB7XG5cdFx0XHRcdFx0aXNMb2FkaW5nLS07XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRydWUpO1xuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gZWxlbSB7IEVsZW1lbnQgfVxuXHRcdCAqL1xuXHRcdHZhciB1bnZlaWxFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW0pe1xuXHRcdFx0aWYgKGVsZW0uX2xhenlSYWNlKSB7cmV0dXJuO31cblx0XHRcdHZhciBkZXRhaWw7XG5cblx0XHRcdHZhciBpc0ltZyA9IHJlZ0ltZy50ZXN0KGVsZW0ubm9kZU5hbWUpO1xuXG5cdFx0XHQvL2FsbG93IHVzaW5nIHNpemVzPVwiYXV0b1wiLCBidXQgZG9uJ3QgdXNlLiBpdCdzIGludmFsaWQuIFVzZSBkYXRhLXNpemVzPVwiYXV0b1wiIG9yIGEgdmFsaWQgdmFsdWUgZm9yIHNpemVzIGluc3RlYWQgKGkuZS46IHNpemVzPVwiODB2d1wiKVxuXHRcdFx0dmFyIHNpemVzID0gaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgfHwgZWxlbVtfZ2V0QXR0cmlidXRlXSgnc2l6ZXMnKSk7XG5cdFx0XHR2YXIgaXNBdXRvID0gc2l6ZXMgPT0gJ2F1dG8nO1xuXG5cdFx0XHRpZiggKGlzQXV0byB8fCAhaXNDb21wbGV0ZWQpICYmIGlzSW1nICYmIChlbGVtW19nZXRBdHRyaWJ1dGVdKCdzcmMnKSB8fCBlbGVtLnNyY3NldCkgJiYgIWVsZW0uY29tcGxldGUgJiYgIWhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5lcnJvckNsYXNzKSAmJiBoYXNDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKSl7cmV0dXJuO31cblxuXHRcdFx0ZGV0YWlsID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5dW52ZWlscmVhZCcpLmRldGFpbDtcblxuXHRcdFx0aWYoaXNBdXRvKXtcblx0XHRcdFx0IGF1dG9TaXplci51cGRhdGVFbGVtKGVsZW0sIHRydWUsIGVsZW0ub2Zmc2V0V2lkdGgpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLl9sYXp5UmFjZSA9IHRydWU7XG5cdFx0XHRpc0xvYWRpbmcrKztcblxuXHRcdFx0bGF6eVVudmVpbChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKTtcblx0XHR9O1xuXG5cdFx0dmFyIGFmdGVyU2Nyb2xsID0gZGVib3VuY2UoZnVuY3Rpb24oKXtcblx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDM7XG5cdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cdFx0fSk7XG5cblx0XHR2YXIgYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmKGxhenlTaXplc0NmZy5sb2FkTW9kZSA9PSAzKXtcblx0XHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMjtcblx0XHRcdH1cblx0XHRcdGFmdGVyU2Nyb2xsKCk7XG5cdFx0fTtcblxuXHRcdHZhciBvbmxvYWQgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYoaXNDb21wbGV0ZWQpe3JldHVybjt9XG5cdFx0XHRpZihEYXRlLm5vdygpIC0gc3RhcnRlZCA8IDk5OSl7XG5cdFx0XHRcdHNldFRpbWVvdXQob25sb2FkLCA5OTkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblxuXHRcdFx0aXNDb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAzO1xuXG5cdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lciwgdHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuXHRcdFx0XHRsYXp5c2l6ZXMuZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5sYXp5Q2xhc3MpO1xuXHRcdFx0XHRwcmVsb2FkRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5sYXp5Q2xhc3MgKyAnICcgKyBsYXp5U2l6ZXNDZmcucHJlbG9hZENsYXNzKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0aWYgKGUucGVyc2lzdGVkKSB7XG5cdFx0XHRcdFx0XHR2YXIgbG9hZGluZ0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBsYXp5U2l6ZXNDZmcubG9hZGluZ0NsYXNzKTtcblxuXHRcdFx0XHRcdFx0aWYgKGxvYWRpbmdFbGVtZW50cy5sZW5ndGggJiYgbG9hZGluZ0VsZW1lbnRzLmZvckVhY2gpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nRWxlbWVudHMuZm9yRWFjaCggZnVuY3Rpb24gKGltZykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGltZy5jb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGltZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpe1xuXHRcdFx0XHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzICkub2JzZXJ2ZSggZG9jRWxlbSwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZX0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2NFbGVtW19hZGRFdmVudExpc3RlbmVyXSgnRE9NTm9kZUluc2VydGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTUF0dHJNb2RpZmllZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdHNldEludGVydmFsKHRocm90dGxlZENoZWNrRWxlbWVudHMsIDk5OSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0Ly8sICdmdWxsc2NyZWVuY2hhbmdlJ1xuXHRcdFx0XHRbJ2ZvY3VzJywgJ21vdXNlb3ZlcicsICdjbGljaycsICdsb2FkJywgJ3RyYW5zaXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJ10uZm9yRWFjaChmdW5jdGlvbihuYW1lKXtcblx0XHRcdFx0XHRkb2N1bWVudFtfYWRkRXZlbnRMaXN0ZW5lcl0obmFtZSwgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmKCgvZCR8XmMvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpKXtcblx0XHRcdFx0XHRvbmxvYWQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25sb2FkKTtcblx0XHRcdFx0XHRkb2N1bWVudFtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgMjAwMDApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYobGF6eXNpemVzLmVsZW1lbnRzLmxlbmd0aCl7XG5cdFx0XHRcdFx0Y2hlY2tFbGVtZW50cygpO1xuXHRcdFx0XHRcdHJBRi5fbHNGbHVzaCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNoZWNrRWxlbXM6IHRocm90dGxlZENoZWNrRWxlbWVudHMsXG5cdFx0XHR1bnZlaWw6IHVudmVpbEVsZW1lbnQsXG5cdFx0XHRfYUxTTDogYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyLFxuXHRcdH07XG5cdH0pKCk7XG5cblxuXHR2YXIgYXV0b1NpemVyID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGF1dG9zaXplc0VsZW1zO1xuXG5cdFx0dmFyIHNpemVFbGVtZW50ID0gckFGSXQoZnVuY3Rpb24oZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpe1xuXHRcdFx0dmFyIHNvdXJjZXMsIGksIGxlbjtcblx0XHRcdGVsZW0uX2xhenlzaXplc1dpZHRoID0gd2lkdGg7XG5cdFx0XHR3aWR0aCArPSAncHgnO1xuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cblx0XHRcdGlmKHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpKXtcblx0XHRcdFx0c291cmNlcyA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG5cdFx0XHRcdGZvcihpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG5cdFx0XHRcdFx0c291cmNlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFldmVudC5kZXRhaWwuZGF0YUF0dHIpe1xuXHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCBldmVudC5kZXRhaWwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIGVsZW0ge0VsZW1lbnR9XG5cdFx0ICogQHBhcmFtIGRhdGFBdHRyXG5cdFx0ICogQHBhcmFtIFt3aWR0aF0geyBudW1iZXIgfVxuXHRcdCAqL1xuXHRcdHZhciBnZXRTaXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtLCBkYXRhQXR0ciwgd2lkdGgpe1xuXHRcdFx0dmFyIGV2ZW50O1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYocGFyZW50KXtcblx0XHRcdFx0d2lkdGggPSBnZXRXaWR0aChlbGVtLCBwYXJlbnQsIHdpZHRoKTtcblx0XHRcdFx0ZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmVzaXplcycsIHt3aWR0aDogd2lkdGgsIGRhdGFBdHRyOiAhIWRhdGFBdHRyfSk7XG5cblx0XHRcdFx0aWYoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuXHRcdFx0XHRcdHdpZHRoID0gZXZlbnQuZGV0YWlsLndpZHRoO1xuXG5cdFx0XHRcdFx0aWYod2lkdGggJiYgd2lkdGggIT09IGVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdFx0XHRcdHNpemVFbGVtZW50KGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGk7XG5cdFx0XHR2YXIgbGVuID0gYXV0b3NpemVzRWxlbXMubGVuZ3RoO1xuXHRcdFx0aWYobGVuKXtcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0Zm9yKDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRnZXRTaXplRWxlbWVudChhdXRvc2l6ZXNFbGVtc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBkZWJvdW5jZSh1cGRhdGVFbGVtZW50c1NpemVzKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRhdXRvc2l6ZXNFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ2ZnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyxcblx0XHRcdHVwZGF0ZUVsZW06IGdldFNpemVFbGVtZW50XG5cdFx0fTtcblx0fSkoKTtcblxuXHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFx0aWYoIWluaXQuaSAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXtcblx0XHRcdGluaXQuaSA9IHRydWU7XG5cdFx0XHRhdXRvU2l6ZXIuXygpO1xuXHRcdFx0bG9hZGVyLl8oKTtcblx0XHR9XG5cdH07XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdGlmKGxhenlTaXplc0NmZy5pbml0KXtcblx0XHRcdGluaXQoKTtcblx0XHR9XG5cdH0pO1xuXG5cdGxhenlzaXplcyA9IHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7IExhenlTaXplc0NvbmZpZ1BhcnRpYWwgfVxuXHRcdCAqL1xuXHRcdGNmZzogbGF6eVNpemVzQ2ZnLFxuXHRcdGF1dG9TaXplcjogYXV0b1NpemVyLFxuXHRcdGxvYWRlcjogbG9hZGVyLFxuXHRcdGluaXQ6IGluaXQsXG5cdFx0dVA6IHVwZGF0ZVBvbHlmaWxsLFxuXHRcdGFDOiBhZGRDbGFzcyxcblx0XHRyQzogcmVtb3ZlQ2xhc3MsXG5cdFx0aEM6IGhhc0NsYXNzLFxuXHRcdGZpcmU6IHRyaWdnZXJFdmVudCxcblx0XHRnVzogZ2V0V2lkdGgsXG5cdFx0ckFGOiByQUYsXG5cdH07XG5cblx0cmV0dXJuIGxhenlzaXplcztcbn1cbikpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi8uLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHNldFRhYkluZGV4IGZyb20gJy4vc2V0VGFiSW5kZXgnO1xuaW1wb3J0IGNvbG9yTW9kZSBmcm9tICcuL2NvbG9yTW9kZVRvZ2dsZSc7XG5pbXBvcnQgZ3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IG1vZGFsRm4gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoJztcbmltcG9ydCAnbGF6eXNpemVzJztcblxuc2V0VGFiSW5kZXgoKTtcbmdyaWQoKTtcbmNvbG9yTW9kZSgpO1xubW9kYWxGbigpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmlmICh0eXBlb2YgU0VBUkNIX0FQSSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgc2VhcmNoKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9