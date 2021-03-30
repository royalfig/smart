/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tryghost/content-api/es/content-api.js":
/*!**************************************************************!*\
  !*** ./node_modules/@tryghost/content-api/es/content-api.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$1
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.7.0',
  mode:  'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap$1 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap) {
  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
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
    if (typeof key == 'string' && !has(value, 'name')) {
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

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
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

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
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
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
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

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






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
      descriptor = getOwnPropertyDescriptor$1(target, key);
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

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process$1 = global_1.process;
var versions = process$1 && process$1.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var SPECIES$1 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$1] = function () {
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
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
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

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction$1(fn);
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

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
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
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6)
};

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

var arrayMethodUsesToLength = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !descriptors) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

var $forEach = arrayIteration.forEach;



var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
var arrayForEach = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
  forEach: arrayForEach
});

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
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
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
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
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $includes = arrayIncludes.includes;



var USES_TO_LENGTH$1 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
_export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH$1 }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var nativeJoin = [].join;

var ES3_STRINGS = indexedObject != Object;
var STRICT_METHOD$1 = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
_export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$2 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction$1(callbackfn);
    var O = toObject(that);
    var self = indexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod$2(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod$2(true)
};

var engineIsNode = classofRaw(global_1.process) == 'process';

var $reduce = arrayReduce.left;





var STRICT_METHOD$2 = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH$2 = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$2 || !USES_TO_LENGTH$2 || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var defineProperty$1 = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty$1(FunctionPrototype, NAME, {
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

var nativeAssign = Object.assign;
var defineProperty$2 = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
var objectAssign = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && nativeAssign({ b: 1 }, nativeAssign(defineProperty$2({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$2(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
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
} : nativeAssign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
  assign: objectAssign
});

var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

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
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}

var nativePromiseConstructor = global_1.Promise;

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

var defineProperty$3 = objectDefineProperty.f;



var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
    defineProperty$3(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};

var SPECIES$2 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$2]) {
    defineProperty(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

var iterators = {};

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR] === it);
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

var ITERATOR$2 = wellKnownSymbol('iterator');
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
  iteratorWithReturn[ITERATOR$2] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$2] = function () {
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
// https://tc39.github.io/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction$1(S);
};

var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

var location = global_1.location;
var set$1 = global_1.setImmediate;
var clear = global_1.clearImmediate;
var process$2 = global_1.process;
var MessageChannel = global_1.MessageChannel;
var Dispatch = global_1.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
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
  global_1.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$1 || !clear) {
  set$1 = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
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
      process$2.nextTick(runner(id));
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

var task = {
  set: set$1,
  clear: clear
};

var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var macrotask = task.set;



var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
var document$2 = global_1.document;
var process$3 = global_1.process;
var Promise$1 = global_1.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global_1, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (engineIsNode && (parent = process$3.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!engineIsIos && !engineIsNode && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (engineIsNode) {
    notify = function () {
      process$3.nextTick(flush);
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
      macrotask.call(global_1, flush);
    };
  }
}

var microtask = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject = aFunction$1(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
var f$5 = function (C) {
  return new PromiseCapability(C);
};

var newPromiseCapability = {
	f: f$5
};

var promiseResolve = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
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

var task$1 = task.set;











var SPECIES$4 = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = internalState.get;
var setInternalState = internalState.set;
var getInternalPromiseState = internalState.getterFor(PROMISE);
var PromiseConstructor = nativePromiseConstructor;
var TypeError$1 = global_1.TypeError;
var document$3 = global_1.document;
var process$4 = global_1.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability$1 = newPromiseCapability.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$3 && document$3.createEvent && global_1.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED$1 = isForced_1(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (engineV8Version === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!engineIsNode && !NATIVE_REJECTION_EVENT) return true;
  }
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES$4] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED$1 || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify$1 = function (state, isReject) {
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
    event = document$3.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global_1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task$1.call(global_1, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (engineIsNode) {
          process$4.emit('unhandledRejection', value, promise);
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
  task$1.call(global_1, function () {
    var promise = state.facade;
    if (engineIsNode) {
      process$4.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
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
  notify$1(state, true);
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
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify$1(state, false);
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
    aFunction$1(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
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
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = engineIsNode ? process$4.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify$1(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if ( typeof nativePromiseConstructor == 'function') {
    nativeThen = nativePromiseConstructor.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(nativePromiseConstructor.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') _export({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global_1, arguments));
      }
    });
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
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

_export({ target: PROMISE, stat: true, forced:  FORCED$1 }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve( this, x);
  }
});

_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction$1(C.resolve);
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
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction$1(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

var MATCH$1 = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH$1] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;






var nativeEndsWith = ''.endsWith;
var min$2 = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor$3(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
_export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegexp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min$2(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;






var nativeStartsWith = ''.startsWith;
var min$3 = Math.min;

var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegexpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG$1 =  !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
  var descriptor = getOwnPropertyDescriptor$4(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
_export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegexp(searchString);
    var index = toLength(min$3(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

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

var bind$1 = function bind(fn, thisArg) {
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

var toString$1 = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray$1(val) {
  return toString$1.call(val) === '[object Array]';
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
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject$1(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString$1.call(val) !== '[object Object]') {
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
  return isObject$1(val) && isFunction(val.pipe);
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

  if (isArray$1(obj)) {
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
    } else if (isArray$1(val)) {
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
      a[key] = bind$1(val, thisArg);
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
  isArray: isArray$1,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject$1,
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
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind$1(Axios_1.prototype.request, context);

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
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
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
    return axios$1.get("".concat(url, "/").concat(ghostPath, "/api/").concat(version, "/content/").concat(resourceType, "/").concat(id ? id + '/' : ''), {
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

/* harmony default export */ __webpack_exports__["default"] = (GhostContentAPI);
//# sourceMappingURL=content-api.js.map


/***/ }),

/***/ "./assets/js/focusTrap.js":
/*!********************************!*\
  !*** ./assets/js/focusTrap.js ***!
  \********************************/
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
}; // Need to run a function that runs when modal opens and sets focus
// Need to run a different function to handle keypresses


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

/***/ "./assets/js/modal.js":
/*!****************************!*\
  !*** ./assets/js/modal.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _require = __webpack_require__(/*! ./focusTrap */ "./assets/js/focusTrap.js"),
    trapFocus = _require.trapFocus,
    releaseFocus = _require.releaseFocus,
    tabKeyHandler = _require.tabKeyHandler;

var modalFn = function modalFn() {
  // Desktop buttons
  var accountBtn = document.getElementById('account-btn');
  var signinBtn = document.getElementById('signin-btn');
  var signupBtn = document.getElementById('signup-btn');
  var searchBtn = document.getElementById('search-btn');
  var subtextSignupBtn = document.getElementById('subtext-signup');
  var subtextSigninBtn = document.getElementById('subtext-signin');
  var upgrade = document.getElementById('upgrade'); // Mobile buttons

  var mAccountBtn = document.getElementById('m-account-btn');
  var mSigninBtn = document.getElementById('m-signin-btn');
  var mSignupBtn = document.getElementById('m-signup-btn');
  var mSearchBtn = document.getElementById('m-search-btn');
  var menuBtn = document.getElementById('menu-btn');
  var closeBtns = document.querySelectorAll('.modal__close-btn'); // eslint-disable-next-line no-undef

  if (typeof SEARCH_API !== 'undefined') {
    searchBtn.style.display = 'block';
    mSearchBtn.style.display = 'block';
  }

  var btns = [accountBtn, signinBtn, signupBtn, searchBtn, subtextSignupBtn, subtextSigninBtn, upgrade, mAccountBtn, mSigninBtn, mSignupBtn, mSearchBtn, menuBtn];

  var close = function close(modal) {
    document.body.classList.remove('expanded-modal');
    modal.setAttribute('aria-expanded', 'false');
    var input = modal.querySelector('input');

    if (input) {
      input.value = '';
    }

    releaseFocus(modal);
  };

  var closeHandler = function closeHandler(e) {
    var modal = e.currentTarget.parentElement;
    close(modal);
  };

  var openHandler = function openHandler(e) {
    if (e.currentTarget.closest('.modal')) {
      close(e.currentTarget.closest('.modal'));
    }

    var modal = document.getElementById(e.currentTarget.dataset.target);
    document.body.classList.add('expanded-modal');
    modal.setAttribute('aria-expanded', 'true');
    trapFocus(modal);
    modal.addEventListener('keydown', tabKeyHandler);

    var nonTargetCloseHandler = function nonTargetCloseHandler(ev) {
      if (ev.target.classList.contains('content-wrap')) {
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

/***/ "./assets/js/search.js":
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-search */ "./node_modules/js-search/dist/esm/js-search.js");
/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tryghost/content-api */ "./node_modules/@tryghost/content-api/es/content-api.js");


var searchModal = document.getElementById('search-modal');

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
      });
    } else {
      var posts = JSON.parse(localStorage.getItem('posts'));
      resolve(posts);
      reject(new Error("Couldn't fetch posts"));
    }
  }).catch(function (err) {
    // eslint-disable-next-line no-alert
    alert("Something went wrong. Please try again.\nError Details: ".concat(err));
  }); // Page Elements

  var searchInput = document.getElementById('search-input');
  var runSearchBtn = document.getElementById('run-search-btn');
  var searchResultHeader = document.querySelector('.search-results__header');
  var searchResult = document.querySelector('.search-results__container');

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
        searchResult.innerHTML += "<article class=\"search-results__item\">\n            <a class=\"search-results__link\" href=\"".concat(post.url, "\">\n              <p class=\"search-results__date\">").concat(dateFormatter(post.published_at), "</p>\n              <p class=\"search-results__title\">").concat(post.title, "</p>\n              <p class=\"search-results__excerpt\">\n                ").concat(post.excerpt, "</p>\n                </a>\n            </article>");
      });
      stateLoader('loading', false);
    });
  };

  var enterSearchTermCheck = function enterSearchTermCheck() {
    if (!searchResult.innerHTML) searchResultHeader.textContent = 'Enter a search term';
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

/***/ "./assets/js/toast.js":
/*!****************************!*\
  !*** ./assets/js/toast.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toast; }
/* harmony export */ });
var copyBtn = document.getElementById('copy-button');

var destroyToast = function destroyToast(el) {
  el.classList.add('toast__slide-out');
  setTimeout(function () {
    el.remove();
  }, 500);
};

var checkDomForToast = function checkDomForToast() {
  var extantToast = document.querySelectorAll('.toast');

  if (extantToast.length) {
    extantToast.forEach(function (el) {
      return el.remove();
    });
  }
};

var createToast = function createToast(value) {
  checkDomForToast();
  var container = document.createElement('div');
  container.classList.add('toast');
  var innerContainer = document.createElement('div');
  innerContainer.classList.add('toast__inner');
  container.append(innerContainer);
  var p = document.createElement('p');
  p.textContent = value;
  innerContainer.append(p);
  document.body.append(container);
  setTimeout(destroyToast.bind(null, container), 3000);
};

function toast() {
  if (copyBtn) {
    copyBtn.addEventListener('click', createToast.bind(null, 'Link copied to clipboard'));
  }
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

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
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
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./assets/js/search.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/modal.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast */ "./assets/js/toast.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_4__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





 // Polyfill forEach

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} // eslint-disable-next-line no-undef


if (typeof SEARCH_API !== 'undefined') {
  (0,_search__WEBPACK_IMPORTED_MODULE_1__.default)();
}

(0,_modal__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_toast__WEBPACK_IMPORTED_MODULE_3__.default)();
/*
 * Grid styles
 * * Counts & adds the number of items to the grid container
 */

var gridContainers = document.querySelectorAll('.grid-container');
gridContainers.forEach(function (element) {
  var gridItems = element.querySelectorAll('.card');
  element.classList.add("grid-container-".concat(gridItems.length));
});
/*
 * Color mode toggle
 * ? Is the color mode button hidden on unsupported browsers?
 */

var toggleColorBtns = document.querySelectorAll('.color-mode-btn');

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
/**
 * Member annual price discount check
 * * Checks whether annual price is better than monthly and adds a span with the discount info
 */


var extractNumber = function extractNumber(input) {
  var num = /\d+/.exec(input)[0];
  return parseInt(num, 10);
};

var yearEl = document.getElementById('yearly-price');

if (yearEl) {
  var yearlyPrice = extractNumber(yearEl.textContent);
  var monthlyPrice = extractNumber(document.getElementById('monthly-price').textContent);

  var calculatePercentageDiscount = function calculatePercentageDiscount(monthToYear, year) {
    var diff = monthToYear - year;
    var percentage = (diff * 100 / monthToYear).toFixed();
    return "".concat(percentage, "%");
  };

  var determineDiscount = function determineDiscount(month, year) {
    var monthlyToAnnual = month * 12;

    if (year < monthlyToAnnual) {
      var percentageDiscount = calculatePercentageDiscount(monthlyToAnnual, year);
      var percentOffEl = document.createElement('p');
      percentOffEl.classList.add('member__discount');
      var percentOffText = "".concat(percentageDiscount, " off the monthly price!");
      percentOffEl.append(percentOffText);
      yearEl.parentElement.append(percentOffEl);
    }
  };

  if (monthlyPrice && yearlyPrice) {
    determineDiscount(monthlyPrice, yearlyPrice);
  }
} // Hero -> Contact


var contactEl = document.querySelector('.hero__contact');
var navLinks = document.querySelectorAll('.navigation__list-link');

if (contactEl && navLinks) {
  // eslint-disable-next-line no-restricted-syntax
  var _iterator = _createForOfIteratorHelper(navLinks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;

      if (el.pathname === '/contact/') {
        contactEl.style.display = 'inline-block';
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/*
 * Remove menu nav links from the DOM
 */


var menuNavLinks = document.querySelectorAll('#menu a');
menuNavLinks.forEach(function (el) {
  return el.setAttribute('tabindex', '-1');
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC8uL25vZGVfbW9kdWxlcy9AdHJ5Z2hvc3QvY29udGVudC1hcGkvZXMvY29udGVudC1hcGkuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9hc3NldHMvanMvZm9jdXNUcmFwLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vYXNzZXRzL2pzL21vZGFsLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL2Fzc2V0cy9qcy90b2FzdC5qcyIsIndlYnBhY2s6Ly9zbWFydC8uL25vZGVfbW9kdWxlcy9qcy1zZWFyY2gvZGlzdC9lc20vanMtc2VhcmNoLmpzIiwid2VicGFjazovL3NtYXJ0Ly4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9sYXp5c2l6ZXMuanMiLCJ3ZWJwYWNrOi8vc21hcnQvLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzP2EwMjYiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NtYXJ0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc21hcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbWFydC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NtYXJ0Ly4vYXNzZXRzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZPQ1VTQUJMRV9FTCIsImN1cnJlbnRGb2N1cyIsImNoZWNrRGlzcGxheVN0YXR1cyIsImVsIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJnZXROb25IaWRkZW5MYXN0RWwiLCJsYXN0RWwiLCJsZW5ndGgiLCJwZW51bHRpbWF0ZUVsIiwiY29uZmlndXJlRm9jdXNhYmxlRWxlbWVudHMiLCJjb250YWluZXJFbCIsImZvY3VzYWJsZUVsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJmaXJzdEVsVG9Gb2N1cyIsImZpcnN0VGFiU3RvcCIsImxhc3RUYWJTdG9wIiwidHJhcEZvY3VzIiwic2lkZU1lbnVFbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImZvY3VzIiwidGFiS2V5SGFuZGxlciIsImUiLCJ0YWJzIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJyZWxlYXNlRm9jdXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVxdWlyZSIsIm1vZGFsRm4iLCJhY2NvdW50QnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaWduaW5CdG4iLCJzaWdudXBCdG4iLCJzZWFyY2hCdG4iLCJzdWJ0ZXh0U2lnbnVwQnRuIiwic3VidGV4dFNpZ25pbkJ0biIsInVwZ3JhZGUiLCJtQWNjb3VudEJ0biIsIm1TaWduaW5CdG4iLCJtU2lnbnVwQnRuIiwibVNlYXJjaEJ0biIsIm1lbnVCdG4iLCJjbG9zZUJ0bnMiLCJTRUFSQ0hfQVBJIiwic3R5bGUiLCJidG5zIiwiY2xvc2UiLCJtb2RhbCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNsb3NlSGFuZGxlciIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50Iiwib3BlbkhhbmRsZXIiLCJjbG9zZXN0IiwiZGF0YXNldCIsInRhcmdldCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJub25UYXJnZXRDbG9zZUhhbmRsZXIiLCJldiIsImNvbnRhaW5zIiwiY2xvc2VCeUVzY0hhbmRsZXIiLCJrZXkiLCJidG4iLCJzZWFyY2hNb2RhbCIsImNyZWF0ZVRpbWVzdGFtcCIsIm1pbnV0ZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93Iiwic3RhdGVMb2FkZXIiLCJzdGF0ZSIsInN0YXR1cyIsInNlYXJjaCIsImZyZXNoQXBpIiwiR2hvc3RDb250ZW50QVBJIiwidXJsIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJ2ZXJzaW9uIiwiYXBpIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0cyIsImJyb3dzZSIsImluY2x1ZGUiLCJmb3JtYXRzIiwibGltaXQiLCJ0aGVuIiwiZGF0YSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJFcnJvciIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJzZWFyY2hJbnB1dCIsInJ1blNlYXJjaEJ0biIsInNlYXJjaFJlc3VsdEhlYWRlciIsInNlYXJjaFJlc3VsdCIsImRhdGVGb3JtYXR0ZXIiLCJpc29EYXRlIiwib3B0aW9ucyIsInllYXIiLCJtb250aCIsImRheSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ1bmRlZmluZWQiLCJzZWFyY2hQb3N0cyIsInRlcm0iLCJpbm5lckhUTUwiLCJuZXdTZWFyY2giLCJKc1NlYXJjaCIsImFkZEluZGV4IiwiYWRkRG9jdW1lbnRzIiwicmVzdWx0IiwidGV4dENvbnRlbnQiLCJwb3N0IiwicHVibGlzaGVkX2F0IiwidGl0bGUiLCJleGNlcnB0IiwiZW50ZXJTZWFyY2hUZXJtQ2hlY2siLCJjb3B5QnRuIiwiZGVzdHJveVRvYXN0Iiwic2V0VGltZW91dCIsImNoZWNrRG9tRm9yVG9hc3QiLCJleHRhbnRUb2FzdCIsImNyZWF0ZVRvYXN0IiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImlubmVyQ29udGFpbmVyIiwiYXBwZW5kIiwicCIsImJpbmQiLCJ0b2FzdCIsIk5vZGVMaXN0IiwicHJvdG90eXBlIiwiQXJyYXkiLCJncmlkQ29udGFpbmVycyIsImVsZW1lbnQiLCJncmlkSXRlbXMiLCJ0b2dnbGVDb2xvckJ0bnMiLCJDU1MiLCJzdXBwb3J0cyIsInRvZ2dsZUNvbG9yTW9kZSIsImRvY3VtZW50RWxlbWVudCIsImV4dHJhY3ROdW1iZXIiLCJudW0iLCJleGVjIiwieWVhckVsIiwieWVhcmx5UHJpY2UiLCJtb250aGx5UHJpY2UiLCJjYWxjdWxhdGVQZXJjZW50YWdlRGlzY291bnQiLCJtb250aFRvWWVhciIsImRpZmYiLCJwZXJjZW50YWdlIiwidG9GaXhlZCIsImRldGVybWluZURpc2NvdW50IiwibW9udGhseVRvQW5udWFsIiwicGVyY2VudGFnZURpc2NvdW50IiwicGVyY2VudE9mZkVsIiwicGVyY2VudE9mZlRleHQiLCJjb250YWN0RWwiLCJuYXZMaW5rcyIsInBhdGhuYW1lIiwibWVudU5hdkxpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNIQUFzSCxxQkFBTSxtQkFBbUIscUJBQU07O0FBRXJKO0FBQ0Esa0JBQWtCLFlBQVksRUFBRTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhLEVBQUU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxNQUFNLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUN4RSxDQUFDOztBQUVELG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBLGdGQUFnRixPQUFPOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscURBQXFEO0FBQ3JELEdBQUc7QUFDSCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNCQUFzQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztB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QUVBLDhDQUE4QyxhQUFhO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSw4Q0FBOEMsYUFBYTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQ0FBMEMsYUFBYTtBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RkFBeUY7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRCxtQkFBbUI7QUFDeEU7QUFD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Q0FBQ29DLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCO0FBRUEsSUFBTTRILFFBQVEsR0FBR2hLLFFBQVEsQ0FBQ1IsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQWpCOztBQUVBLElBQUl1SyxTQUFTLElBQUlDLFFBQWpCLEVBQTJCO0FBQ3pCO0FBRHlCLDZDQUVSQSxRQUZRO0FBQUE7O0FBQUE7QUFFekIsd0RBQTJCO0FBQUEsVUFBaEJuTCxFQUFnQjs7QUFDekIsVUFBSUEsRUFBRSxDQUFDb0wsUUFBSCxLQUFnQixXQUFwQixFQUFpQztBQUMvQkYsaUJBQVMsQ0FBQ25JLEtBQVYsQ0FBZ0I1QyxPQUFoQixHQUEwQixjQUExQjtBQUNBO0FBQ0Q7QUFDRjtBQVB3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUTFCO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxJQUFNa0wsWUFBWSxHQUFHbEssUUFBUSxDQUFDUixnQkFBVCxDQUEwQixTQUExQixDQUFyQjtBQUVBMEssWUFBWSxDQUFDekssT0FBYixDQUFxQixVQUFDWixFQUFEO0FBQUEsU0FBUUEsRUFBRSxDQUFDYSxZQUFILENBQWdCLFVBQWhCLEVBQTRCLElBQTVCLENBQVI7QUFBQSxDQUFyQixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbF8xID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgY29tbW9uanNHbG9iYWwgPT0gJ29iamVjdCcgJiYgY29tbW9uanNHbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgZmFpbHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxudmFyIGRlc2NyaXB0b3JzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT0gNztcbn0pO1xuXG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbnZhciBmID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxudmFyIG9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlID0ge1xuXHRmOiBmXG59O1xuXG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgY2xhc3NvZlJhdyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgaW5kZXhlZE9iamVjdCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZlJhdyhpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG5cblxuXG52YXIgdG9JbmRleGVkT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG5cbnZhciBpc09iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbnZhciB0b1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChpbnB1dCwgUFJFRkVSUkVEX1NUUklORykge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgaGFzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG52YXIgZG9jdW1lbnQkMSA9IGdsb2JhbF8xLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQkMSkgJiYgaXNPYmplY3QoZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KTtcblxudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxudmFyIGllOERvbURlZmluZSA9ICFkZXNjcmlwdG9ycyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcblxudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbnZhciBmJDEgPSBkZXNjcmlwdG9ycyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKGllOERvbURlZmluZSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIW9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG52YXIgb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0ge1xuXHRmOiBmJDFcbn07XG5cbnZhciBhbk9iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxudmFyIGYkMiA9IGRlc2NyaXB0b3JzID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoaWU4RG9tRGVmaW5lKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0eSA9IHtcblx0ZjogZiQyXG59O1xuXG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gZGVzY3JpcHRvcnMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3REZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG52YXIgc2V0R2xvYmFsID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsXzEsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbF8xW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxfMVtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxudmFyIHNoYXJlZFN0b3JlID0gc3RvcmU7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24udG9TdHJpbmc7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAodHlwZW9mIHNoYXJlZFN0b3JlLmluc3BlY3RTb3VyY2UgIT0gJ2Z1bmN0aW9uJykge1xuICBzaGFyZWRTdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH07XG59XG5cbnZhciBpbnNwZWN0U291cmNlID0gc2hhcmVkU3RvcmUuaW5zcGVjdFNvdXJjZTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxfMS5XZWFrTWFwO1xuXG52YXIgbmF0aXZlV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcblxudmFyIHNoYXJlZCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzaGFyZWRTdG9yZVtrZXldIHx8IChzaGFyZWRTdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy43LjAnLFxuICBtb2RlOiAgJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbn0pO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG52YXIgdWlkID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxudmFyIHNoYXJlZEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcblxudmFyIGhpZGRlbktleXMgPSB7fTtcblxudmFyIFdlYWtNYXAkMSA9IGdsb2JhbF8xLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcyQxO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzJDEoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKG5hdGl2ZVdlYWtNYXApIHtcbiAgdmFyIHN0b3JlJDEgPSBzaGFyZWRTdG9yZS5zdGF0ZSB8fCAoc2hhcmVkU3RvcmUuc3RhdGUgPSBuZXcgV2Vha01hcCQxKCkpO1xuICB2YXIgd21nZXQgPSBzdG9yZSQxLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUkMS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlJDEuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgd21zZXQuY2FsbChzdG9yZSQxLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUkMSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMkMSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlJDEsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyQxID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhcyhpdCwgU1RBVEUpO1xuICB9O1xufVxuXG52YXIgaW50ZXJuYWxTdGF0ZSA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyQxLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcblxudmFyIHJlZGVmaW5lID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xudmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IGludGVybmFsU3RhdGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIH1cbiAgICBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgICBpZiAoIXN0YXRlLnNvdXJjZSkge1xuICAgICAgc3RhdGUuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICAgIH1cbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsXzEpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG59KTtcblxudmFyIHBhdGggPSBnbG9iYWxfMTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09ICdmdW5jdGlvbicgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbn07XG5cbnZhciBnZXRCdWlsdEluID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWxfMVtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbF8xW25hbWVzcGFjZV0gJiYgZ2xvYmFsXzFbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcblxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxudmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG52YXIgdG9MZW5ndGggPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4kMSA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4kMShpbnRlZ2VyLCBsZW5ndGgpO1xufTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbnZhciBhcnJheUluY2x1ZGVzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG5cbnZhciBpbmRleE9mID0gYXJyYXlJbmNsdWRlcy5pbmRleE9mO1xuXG5cbnZhciBvYmplY3RLZXlzSW50ZXJuYWwgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG52YXIgZW51bUJ1Z0tleXMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuXG52YXIgaGlkZGVuS2V5cyQxID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xudmFyIGYkMyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gb2JqZWN0S2V5c0ludGVybmFsKE8sIGhpZGRlbktleXMkMSk7XG59O1xuXG52YXIgb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyA9IHtcblx0ZjogZiQzXG59O1xuXG52YXIgZiQ0ID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxudmFyIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyA9IHtcblx0ZjogZiQ0XG59O1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgb3duS2V5cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scy5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcblxudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IG9iamVjdERlZmluZVByb3BlcnR5LmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXModGFyZ2V0LCBrZXkpKSBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gIH1cbn07XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbnZhciBpc0ZvcmNlZF8xID0gaXNGb3JjZWQ7XG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkMSA9IG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvci5mO1xuXG5cblxuXG5cblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG52YXIgX2V4cG9ydCA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxfMTtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxfMVtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsXzFbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkMSh0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZF8xKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mUmF3KGFyZykgPT0gJ0FycmF5Jztcbn07XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxudmFyIHRvT2JqZWN0ID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcblxudmFyIGNyZWF0ZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBvYmplY3REZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG5cbnZhciBuYXRpdmVTeW1ib2wgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuXG52YXIgdXNlU3ltYm9sQXNVaWQgPSBuYXRpdmVTeW1ib2xcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmICFTeW1ib2wuc2hhbVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sJDEgPSBnbG9iYWxfMS5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gdXNlU3ltYm9sQXNVaWQgPyBTeW1ib2wkMSA6IFN5bWJvbCQxICYmIFN5bWJvbCQxLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG52YXIgd2VsbEtub3duU3ltYm9sID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIGlmIChuYXRpdmVTeW1ib2wgJiYgaGFzKFN5bWJvbCQxLCBuYW1lKSkgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sJDFbbmFtZV07XG4gICAgZWxzZSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuXG52YXIgZW5naW5lVXNlckFnZW50ID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuXG52YXIgcHJvY2VzcyQxID0gZ2xvYmFsXzEucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MkMSAmJiBwcm9jZXNzJDEudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgdmVyc2lvbiA9IG1hdGNoWzBdICsgbWF0Y2hbMV07XG59IGVsc2UgaWYgKGVuZ2luZVVzZXJBZ2VudCkge1xuICBtYXRjaCA9IGVuZ2luZVVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSBlbmdpbmVVc2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9IG1hdGNoWzFdO1xuICB9XG59XG5cbnZhciBlbmdpbmVWOFZlcnNpb24gPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuXG52YXIgU1BFQ0lFUyQxID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBlbmdpbmVWOFZlcnNpb24gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVMkMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gZW5naW5lVjhWZXJzaW9uID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuX2V4cG9ydCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcblxudmFyIGFGdW5jdGlvbiQxID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGZ1bmN0aW9uQmluZENvbnRleHQgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24kMShmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxudmFyIHB1c2ggPSBbXS5wdXNoO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXggfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCQxID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gaW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uQmluZENvbnRleHQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHB1c2guY2FsbCh0YXJnZXQsIHZhbHVlKTsgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiB0YXJnZXQ7XG4gIH07XG59O1xuXG52YXIgYXJyYXlJdGVyYXRpb24gPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCQxKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgbWFwOiBjcmVhdGVNZXRob2QkMSgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kJDEoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCQxKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gIGV2ZXJ5OiBjcmVhdGVNZXRob2QkMSg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kJDEoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCQxKDYpXG59O1xuXG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBjYWNoZSA9IHt9O1xuXG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uIChpdCkgeyB0aHJvdyBpdDsgfTtcblxudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBvcHRpb25zKSB7XG4gIGlmIChoYXMoY2FjaGUsIE1FVEhPRF9OQU1FKSkgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXTtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHZhciBBQ0NFU1NPUlMgPSBoYXMob3B0aW9ucywgJ0FDQ0VTU09SUycpID8gb3B0aW9ucy5BQ0NFU1NPUlMgOiBmYWxzZTtcbiAgdmFyIGFyZ3VtZW50MCA9IGhhcyhvcHRpb25zLCAwKSA/IG9wdGlvbnNbMF0gOiB0aHJvd2VyO1xuICB2YXIgYXJndW1lbnQxID0gaGFzKG9wdGlvbnMsIDEpID8gb3B0aW9uc1sxXSA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdID0gISFtZXRob2QgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQUNDRVNTT1JTICYmICFkZXNjcmlwdG9ycykgcmV0dXJuIHRydWU7XG4gICAgdmFyIE8gPSB7IGxlbmd0aDogLTEgfTtcblxuICAgIGlmIChBQ0NFU1NPUlMpIGRlZmluZVByb3BlcnR5KE8sIDEsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiB0aHJvd2VyIH0pO1xuICAgIGVsc2UgT1sxXSA9IDE7XG5cbiAgICBtZXRob2QuY2FsbChPLCBhcmd1bWVudDAsIGFyZ3VtZW50MSk7XG4gIH0pO1xufTtcblxudmFyICRmb3JFYWNoID0gYXJyYXlJdGVyYXRpb24uZm9yRWFjaDtcblxuXG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG52YXIgYXJyYXlGb3JFYWNoID0gKCFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCkgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59IDogW10uZm9yRWFjaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5fZXhwb3J0KHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGFycmF5Rm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGFycmF5Rm9yRWFjaFxufSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIG9iamVjdEtleXNJbnRlcm5hbChPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0aWVzID0gZGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgb2JqZWN0RGVmaW5lUHJvcGVydHkuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG5cbnZhciBodG1sID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgKi9cbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBkb2N1bWVudC5kb21haW4gJiYgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IGFjdGl2ZVhEb2N1bWVudCA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IG9iamVjdERlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgb2JqZWN0RGVmaW5lUHJvcGVydHkuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IG9iamVjdENyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cbnZhciAkaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLmluY2x1ZGVzO1xuXG5cblxudmFyIFVTRVNfVE9fTEVOR1RIJDEgPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuX2V4cG9ydCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIVVTRVNfVE9fTEVOR1RIJDEgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2luY2x1ZGVzJyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gaW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCQxID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuX2V4cG9ydCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QkMSB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyByZWR1Y2UsIHJlZHVjZVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QkMiA9IGZ1bmN0aW9uIChJU19SSUdIVCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c0xlbmd0aCwgbWVtbykge1xuICAgIGFGdW5jdGlvbiQxKGNhbGxiYWNrZm4pO1xuICAgIHZhciBPID0gdG9PYmplY3QodGhhdCk7XG4gICAgdmFyIHNlbGYgPSBpbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gSVNfUklHSFQgPyBsZW5ndGggLSAxIDogMDtcbiAgICB2YXIgaSA9IElTX1JJR0hUID8gLTEgOiAxO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPCAyKSB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBpZiAoSVNfUklHSFQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoO0lTX1JJR0hUID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKSBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59O1xuXG52YXIgYXJyYXlSZWR1Y2UgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZVxuICBsZWZ0OiBjcmVhdGVNZXRob2QkMihmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlcmlnaHRcbiAgcmlnaHQ6IGNyZWF0ZU1ldGhvZCQyKHRydWUpXG59O1xuXG52YXIgZW5naW5lSXNOb2RlID0gY2xhc3NvZlJhdyhnbG9iYWxfMS5wcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbnZhciAkcmVkdWNlID0gYXJyYXlSZWR1Y2UubGVmdDtcblxuXG5cblxuXG52YXIgU1RSSUNUX01FVEhPRCQyID0gYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEgkMiA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdyZWR1Y2UnLCB7IDE6IDAgfSk7XG4vLyBDaHJvbWUgODAtODIgaGFzIGEgY3JpdGljYWwgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDQ5OTgyXG52YXIgQ0hST01FX0JVRyA9ICFlbmdpbmVJc05vZGUgJiYgZW5naW5lVjhWZXJzaW9uID4gNzkgJiYgZW5naW5lVjhWZXJzaW9uIDwgODM7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2Vcbl9leHBvcnQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFTVFJJQ1RfTUVUSE9EJDIgfHwgIVVTRVNfVE9fTEVOR1RIJDIgfHwgQ0hST01FX0JVRyB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG52YXIgZGVmaW5lUHJvcGVydHkkMSA9IG9iamVjdERlZmluZVByb3BlcnR5LmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKGRlc2NyaXB0b3JzICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkkMShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG52YXIgbmF0aXZlQXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbnZhciBkZWZpbmVQcm9wZXJ0eSQyID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG52YXIgb2JqZWN0QXNzaWduID0gIW5hdGl2ZUFzc2lnbiB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHNob3VsZCBoYXZlIGNvcnJlY3Qgb3JkZXIgb2Ygb3BlcmF0aW9ucyAoRWRnZSBidWcpXG4gIGlmIChkZXNjcmlwdG9ycyAmJiBuYXRpdmVBc3NpZ24oeyBiOiAxIH0sIG5hdGl2ZUFzc2lnbihkZWZpbmVQcm9wZXJ0eSQyKHt9LCAnYScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgZGVmaW5lUHJvcGVydHkkMih0aGlzLCAnYicsIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCB7IGI6IDIgfSkpLmIgIT09IDEpIHJldHVybiB0cnVlO1xuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgdmFyIGFscGhhYmV0ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtzeW1ib2xdID0gNztcbiAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikgeyBCW2Nocl0gPSBjaHI7IH0pO1xuICByZXR1cm4gbmF0aXZlQXNzaWduKHt9LCBBKVtzeW1ib2xdICE9IDcgfHwgb2JqZWN0S2V5cyhuYXRpdmVBc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBhbHBoYWJldDtcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scy5mO1xuICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZS5mO1xuICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IGluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5U3ltYm9scyA/IG9iamVjdEtleXMoUykuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhTKSkgOiBvYmplY3RLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFkZXNjcmlwdG9ycyB8fCBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogbmF0aXZlQXNzaWduO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG5fZXhwb3J0KHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBvYmplY3RBc3NpZ24gfSwge1xuICBhc3NpZ246IG9iamVjdEFzc2lnblxufSk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBvYmplY3RLZXlzKDEpOyB9KTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5fZXhwb3J0KHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBvYmplY3RLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbnZhciB0b1N0cmluZ1RhZ1N1cHBvcnQgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcblxudmFyIFRPX1NUUklOR19UQUckMSA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG52YXIgY2xhc3NvZiA9IHRvU3RyaW5nVGFnU3VwcG9ydCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHJDEpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG52YXIgb2JqZWN0VG9TdHJpbmcgPSB0b1N0cmluZ1RhZ1N1cHBvcnQgPyB7fS50b1N0cmluZyA6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG59O1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoIXRvU3RyaW5nVGFnU3VwcG9ydCkge1xuICByZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBvYmplY3RUb1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG59XG5cbnZhciBuYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgPSBnbG9iYWxfMS5Qcm9taXNlO1xuXG52YXIgcmVkZWZpbmVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSQzID0gb2JqZWN0RGVmaW5lUHJvcGVydHkuZjtcblxuXG5cbnZhciBUT19TVFJJTkdfVEFHJDIgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBzZXRUb1N0cmluZ1RhZyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRyQyKSkge1xuICAgIGRlZmluZVByb3BlcnR5JDMoaXQsIFRPX1NUUklOR19UQUckMiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG5cbnZhciBTUEVDSUVTJDIgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxudmFyIHNldFNwZWNpZXMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBvYmplY3REZWZpbmVQcm9wZXJ0eS5mO1xuXG4gIGlmIChkZXNjcmlwdG9ycyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFUyQyXSkge1xuICAgIGRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBTUEVDSUVTJDIsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICAgIH0pO1xuICB9XG59O1xuXG52YXIgYW5JbnN0YW5jZSA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCAnICsgKG5hbWUgPyBuYW1lICsgJyAnIDogJycpICsgJ2ludm9jYXRpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG52YXIgaXRlcmF0b3JzID0ge307XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSQxID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChpdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlJDFbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG52YXIgSVRFUkFUT1IkMSA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUiQxXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBpdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxudmFyIGl0ZXJhdG9yQ2xvc2UgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSkudmFsdWU7XG4gIH1cbn07XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIGl0ZXJhdGUgPSBmdW5jdGlvbiAoaXRlcmFibGUsIHVuYm91bmRGdW5jdGlvbiwgb3B0aW9ucykge1xuICB2YXIgdGhhdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aGF0O1xuICB2YXIgQVNfRU5UUklFUyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5BU19FTlRSSUVTKTtcbiAgdmFyIElTX0lURVJBVE9SID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX0lURVJBVE9SKTtcbiAgdmFyIElOVEVSUlVQVEVEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklOVEVSUlVQVEVEKTtcbiAgdmFyIGZuID0gZnVuY3Rpb25CaW5kQ29udGV4dCh1bmJvdW5kRnVuY3Rpb24sIHRoYXQsIDEgKyBBU19FTlRSSUVTICsgSU5URVJSVVBURUQpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIHZhciBzdG9wID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgY29uZGl0aW9uKTtcbiAgfTtcblxuICB2YXIgY2FsbEZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKEFTX0VOVFJJRVMpIHtcbiAgICAgIGFuT2JqZWN0KHZhbHVlKTtcbiAgICAgIHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSwgc3RvcCkgOiBmbih2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgIH0gcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWUsIHN0b3ApIDogZm4odmFsdWUpO1xuICB9O1xuXG4gIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuXG52YXIgSVRFUkFUT1IkMiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1IkMl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1IkMl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcblxudmFyIFNQRUNJRVMkMyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgU3BlY2llc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTJDNdKSA9PSB1bmRlZmluZWQgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhRnVuY3Rpb24kMShTKTtcbn07XG5cbnZhciBlbmdpbmVJc0lvcyA9IC8oaXBob25lfGlwb2R8aXBhZCkuKmFwcGxld2Via2l0L2kudGVzdChlbmdpbmVVc2VyQWdlbnQpO1xuXG52YXIgbG9jYXRpb24gPSBnbG9iYWxfMS5sb2NhdGlvbjtcbnZhciBzZXQkMSA9IGdsb2JhbF8xLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhciA9IGdsb2JhbF8xLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MkMiA9IGdsb2JhbF8xLnByb2Nlc3M7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWxfMS5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbF8xLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG5cbnZhciBydW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcblxudmFyIHJ1bm5lciA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJ1bihpZCk7XG4gIH07XG59O1xuXG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuKGV2ZW50LmRhdGEpO1xufTtcblxudmFyIHBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgLy8gb2xkIGVuZ2luZXMgaGF2ZSBub3QgbG9jYXRpb24ub3JpZ2luXG4gIGdsb2JhbF8xLnBvc3RNZXNzYWdlKGlkICsgJycsIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpO1xufTtcblxuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXQkMSB8fCAhY2xlYXIpIHtcbiAgc2V0JDEgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbikpLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXIgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAoZW5naW5lSXNOb2RlKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MkMi5uZXh0VGljayhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KHJ1bm5lcihpZCkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgLy8gZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82MjRcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCAmJiAhZW5naW5lSXNJb3MpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGZ1bmN0aW9uQmluZENvbnRleHQocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKFxuICAgIGdsb2JhbF8xLmFkZEV2ZW50TGlzdGVuZXIgJiZcbiAgICB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICFnbG9iYWxfMS5pbXBvcnRTY3JpcHRzICYmXG4gICAgbG9jYXRpb24gJiYgbG9jYXRpb24ucHJvdG9jb2wgIT09ICdmaWxlOicgJiZcbiAgICAhZmFpbHMocG9zdClcbiAgKSB7XG4gICAgZGVmZXIgPSBwb3N0O1xuICAgIGdsb2JhbF8xLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4oaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KHJ1bm5lcihpZCksIDApO1xuICAgIH07XG4gIH1cbn1cblxudmFyIHRhc2sgPSB7XG4gIHNldDogc2V0JDEsXG4gIGNsZWFyOiBjbGVhclxufTtcblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciQyID0gb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLmY7XG52YXIgbWFjcm90YXNrID0gdGFzay5zZXQ7XG5cblxuXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbF8xLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsXzEuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBkb2N1bWVudCQyID0gZ2xvYmFsXzEuZG9jdW1lbnQ7XG52YXIgcHJvY2VzcyQzID0gZ2xvYmFsXzEucHJvY2VzcztcbnZhciBQcm9taXNlJDEgPSBnbG9iYWxfMS5Qcm9taXNlO1xuLy8gTm9kZS5qcyAxMSBzaG93cyBFeHBlcmltZW50YWxXYXJuaW5nIG9uIGdldHRpbmcgYHF1ZXVlTWljcm90YXNrYFxudmFyIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciQyKGdsb2JhbF8xLCAncXVldWVNaWNyb3Rhc2snKTtcbnZhciBxdWV1ZU1pY3JvdGFzayA9IHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciAmJiBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IudmFsdWU7XG5cbnZhciBmbHVzaCwgaGVhZCwgbGFzdCwgbm90aWZ5LCB0b2dnbGUsIG5vZGUsIHByb21pc2UsIHRoZW47XG5cbi8vIG1vZGVybiBlbmdpbmVzIGhhdmUgcXVldWVNaWNyb3Rhc2sgbWV0aG9kXG5pZiAoIXF1ZXVlTWljcm90YXNrKSB7XG4gIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChlbmdpbmVJc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MkMy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICBpZiAoIWVuZ2luZUlzSW9zICYmICFlbmdpbmVJc05vZGUgJiYgTXV0YXRpb25PYnNlcnZlciAmJiBkb2N1bWVudCQyKSB7XG4gICAgdG9nZ2xlID0gdHJ1ZTtcbiAgICBub2RlID0gZG9jdW1lbnQkMi5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlJDEgJiYgUHJvbWlzZSQxLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIHRoZW4gPSBwcm9taXNlLnRoZW47XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhlbi5jYWxsKHByb21pc2UsIGZsdXNoKTtcbiAgICB9O1xuICAvLyBOb2RlLmpzIHdpdGhvdXQgcHJvbWlzZXNcbiAgfSBlbHNlIGlmIChlbmdpbmVJc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzJDMubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWxfMSwgZmx1c2gpO1xuICAgIH07XG4gIH1cbn1cblxudmFyIG1pY3JvdGFzayA9IHF1ZXVlTWljcm90YXNrIHx8IGZ1bmN0aW9uIChmbikge1xuICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gIGlmICghaGVhZCkge1xuICAgIGhlYWQgPSB0YXNrO1xuICAgIG5vdGlmeSgpO1xuICB9IGxhc3QgPSB0YXNrO1xufTtcblxudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbiQxKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbiQxKHJlamVjdCk7XG59O1xuXG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGYkNSA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSB7XG5cdGY6IGYkNVxufTtcblxudmFyIHByb21pc2VSZXNvbHZlID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cbnZhciBob3N0UmVwb3J0RXJyb3JzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdmFyIGNvbnNvbGUgPSBnbG9iYWxfMS5jb25zb2xlO1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGNvbnNvbGUuZXJyb3IoYSkgOiBjb25zb2xlLmVycm9yKGEsIGIpO1xuICB9XG59O1xuXG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGZhbHNlLCB2YWx1ZTogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHRydWUsIHZhbHVlOiBlcnJvciB9O1xuICB9XG59O1xuXG52YXIgdGFzayQxID0gdGFzay5zZXQ7XG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIFNQRUNJRVMkNCA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IGludGVybmFsU3RhdGUuZ2V0O1xudmFyIHNldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLnNldDtcbnZhciBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSA9IGludGVybmFsU3RhdGUuZ2V0dGVyRm9yKFBST01JU0UpO1xudmFyIFByb21pc2VDb25zdHJ1Y3RvciA9IG5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvcjtcbnZhciBUeXBlRXJyb3IkMSA9IGdsb2JhbF8xLlR5cGVFcnJvcjtcbnZhciBkb2N1bWVudCQzID0gZ2xvYmFsXzEuZG9jdW1lbnQ7XG52YXIgcHJvY2VzcyQ0ID0gZ2xvYmFsXzEucHJvY2VzcztcbnZhciAkZmV0Y2ggPSBnZXRCdWlsdEluKCdmZXRjaCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5JDEgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mO1xudmFyIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5JDE7XG52YXIgRElTUEFUQ0hfRVZFTlQgPSAhIShkb2N1bWVudCQzICYmIGRvY3VtZW50JDMuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsXzEuZGlzcGF0Y2hFdmVudCk7XG52YXIgTkFUSVZFX1JFSkVDVElPTl9FVkVOVCA9IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJztcbnZhciBVTkhBTkRMRURfUkVKRUNUSU9OID0gJ3VuaGFuZGxlZHJlamVjdGlvbic7XG52YXIgUkVKRUNUSU9OX0hBTkRMRUQgPSAncmVqZWN0aW9uaGFuZGxlZCc7XG52YXIgUEVORElORyA9IDA7XG52YXIgRlVMRklMTEVEID0gMTtcbnZhciBSRUpFQ1RFRCA9IDI7XG52YXIgSEFORExFRCA9IDE7XG52YXIgVU5IQU5ETEVEID0gMjtcbnZhciBJbnRlcm5hbCwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFByb21pc2VXcmFwcGVyLCBuYXRpdmVUaGVuO1xuXG52YXIgRk9SQ0VEJDEgPSBpc0ZvcmNlZF8xKFBST01JU0UsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIEdMT0JBTF9DT1JFX0pTX1BST01JU0UgPSBpbnNwZWN0U291cmNlKFByb21pc2VDb25zdHJ1Y3RvcikgIT09IFN0cmluZyhQcm9taXNlQ29uc3RydWN0b3IpO1xuICBpZiAoIUdMT0JBTF9DT1JFX0pTX1BST01JU0UpIHtcbiAgICAvLyBWOCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgLy8gV2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICBpZiAoZW5naW5lVjhWZXJzaW9uID09PSA2NikgcmV0dXJuIHRydWU7XG4gICAgLy8gVW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIGlmICghZW5naW5lSXNOb2RlICYmICFOQVRJVkVfUkVKRUNUSU9OX0VWRU5UKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBXZSBjYW4ndCB1c2UgQEBzcGVjaWVzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxuICBpZiAoZW5naW5lVjhWZXJzaW9uID49IDUxICYmIC9uYXRpdmUgY29kZS8udGVzdChQcm9taXNlQ29uc3RydWN0b3IpKSByZXR1cm4gZmFsc2U7XG4gIC8vIERldGVjdCBjb3JyZWN0bmVzcyBvZiBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZUNvbnN0cnVjdG9yLnJlc29sdmUoMSk7XG4gIHZhciBGYWtlUHJvbWlzZSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgZXhlYyhmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG4gIH07XG4gIHZhciBjb25zdHJ1Y3RvciA9IHByb21pc2UuY29uc3RydWN0b3IgPSB7fTtcbiAgY29uc3RydWN0b3JbU1BFQ0lFUyQ0XSA9IEZha2VQcm9taXNlO1xuICByZXR1cm4gIShwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlKTtcbn0pO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9IEZPUkNFRCQxIHx8ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIFByb21pc2VDb25zdHJ1Y3Rvci5hbGwoaXRlcmFibGUpWydjYXRjaCddKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG5cbnZhciBub3RpZnkkMSA9IGZ1bmN0aW9uIChzdGF0ZSwgaXNSZWplY3QpIHtcbiAgaWYgKHN0YXRlLm5vdGlmaWVkKSByZXR1cm47XG4gIHN0YXRlLm5vdGlmaWVkID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gc3RhdGUucmVhY3Rpb25zO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBvayA9IHN0YXRlLnN0YXRlID09IEZVTEZJTExFRDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBjaGFpbltpbmRleCsrXTtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJlamVjdGlvbiA9PT0gVU5IQU5ETEVEKSBvbkhhbmRsZVVuaGFuZGxlZChzdGF0ZSk7XG4gICAgICAgICAgICBzdGF0ZS5yZWplY3Rpb24gPSBIQU5ETEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBjYW4gdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvciQxKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUucmVhY3Rpb25zID0gW107XG4gICAgc3RhdGUubm90aWZpZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXN0YXRlLnJlamVjdGlvbikgb25VbmhhbmRsZWQoc3RhdGUpO1xuICB9KTtcbn07XG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIHByb21pc2UsIHJlYXNvbikge1xuICB2YXIgZXZlbnQsIGhhbmRsZXI7XG4gIGlmIChESVNQQVRDSF9FVkVOVCkge1xuICAgIGV2ZW50ID0gZG9jdW1lbnQkMy5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5wcm9taXNlID0gcHJvbWlzZTtcbiAgICBldmVudC5yZWFzb24gPSByZWFzb247XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIGZhbHNlLCB0cnVlKTtcbiAgICBnbG9iYWxfMS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIGV2ZW50ID0geyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHJlYXNvbiB9O1xuICBpZiAoIU5BVElWRV9SRUpFQ1RJT05fRVZFTlQgJiYgKGhhbmRsZXIgPSBnbG9iYWxfMVsnb24nICsgbmFtZV0pKSBoYW5kbGVyKGV2ZW50KTtcbiAgZWxzZSBpZiAobmFtZSA9PT0gVU5IQU5ETEVEX1JFSkVDVElPTikgaG9zdFJlcG9ydEVycm9ycygnVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgcmVhc29uKTtcbn07XG5cbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB0YXNrJDEuY2FsbChnbG9iYWxfMSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gc3RhdGUuZmFjYWRlO1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBJU19VTkhBTkRMRUQgPSBpc1VuaGFuZGxlZChzdGF0ZSk7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoSVNfVU5IQU5ETEVEKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGVuZ2luZUlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MkNC5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFVOSEFORExFRF9SRUpFQ1RJT04sIHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHN0YXRlLnJlamVjdGlvbiA9IGVuZ2luZUlzTm9kZSB8fCBpc1VuaGFuZGxlZChzdGF0ZSkgPyBVTkhBTkRMRUQgOiBIQU5ETEVEO1xuICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdGhyb3cgcmVzdWx0LnZhbHVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLnJlamVjdGlvbiAhPT0gSEFORExFRCAmJiAhc3RhdGUucGFyZW50O1xufTtcblxudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHRhc2skMS5jYWxsKGdsb2JhbF8xLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBzdGF0ZS5mYWNhZGU7XG4gICAgaWYgKGVuZ2luZUlzTm9kZSkge1xuICAgICAgcHJvY2VzcyQ0LmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChSRUpFQ1RJT05fSEFORExFRCwgcHJvbWlzZSwgc3RhdGUudmFsdWUpO1xuICB9KTtcbn07XG5cbnZhciBiaW5kID0gZnVuY3Rpb24gKGZuLCBzdGF0ZSwgdW53cmFwKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmbihzdGF0ZSwgdmFsdWUsIHVud3JhcCk7XG4gIH07XG59O1xuXG52YXIgaW50ZXJuYWxSZWplY3QgPSBmdW5jdGlvbiAoc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICBzdGF0ZS5zdGF0ZSA9IFJFSkVDVEVEO1xuICBub3RpZnkkMShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG52YXIgaW50ZXJuYWxSZXNvbHZlID0gZnVuY3Rpb24gKHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgdHJ5IHtcbiAgICBpZiAoc3RhdGUuZmFjYWRlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yJDEoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICB2YXIgdGhlbiA9IGlzVGhlbmFibGUodmFsdWUpO1xuICAgIGlmICh0aGVuKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVzb2x2ZSwgd3JhcHBlciwgc3RhdGUpLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlamVjdCwgd3JhcHBlciwgc3RhdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpbnRlcm5hbFJlamVjdCh3cmFwcGVyLCBlcnJvciwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN0YXRlLnN0YXRlID0gRlVMRklMTEVEO1xuICAgICAgbm90aWZ5JDEoc3RhdGUsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW50ZXJuYWxSZWplY3QoeyBkb25lOiBmYWxzZSB9LCBlcnJvciwgc3RhdGUpO1xuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKEZPUkNFRCQxKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFByb21pc2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSk7XG4gICAgYUZ1bmN0aW9uJDEoZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoYmluZChpbnRlcm5hbFJlc29sdmUsIHN0YXRlKSwgYmluZChpbnRlcm5hbFJlamVjdCwgc3RhdGUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaW50ZXJuYWxSZWplY3Qoc3RhdGUsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IFBST01JU0UsXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIG5vdGlmaWVkOiBmYWxzZSxcbiAgICAgIHBhcmVudDogZmFsc2UsXG4gICAgICByZWFjdGlvbnM6IFtdLFxuICAgICAgcmVqZWN0aW9uOiBmYWxzZSxcbiAgICAgIHN0YXRlOiBQRU5ESU5HLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZWRlZmluZUFsbChQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlLCB7XG4gICAgLy8gYFByb21pc2UucHJvdG90eXBlLnRoZW5gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLnRoZW5cbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5JDEoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvcikpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBlbmdpbmVJc05vZGUgPyBwcm9jZXNzJDQuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgc3RhdGUucGFyZW50ID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnJlYWN0aW9ucy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmIChzdGF0ZS5zdGF0ZSAhPSBQRU5ESU5HKSBub3RpZnkkMShzdGF0ZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLmNhdGNoXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUocHJvbWlzZSk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBiaW5kKGludGVybmFsUmVzb2x2ZSwgc3RhdGUpO1xuICAgIHRoaXMucmVqZWN0ID0gYmluZChpbnRlcm5hbFJlamVjdCwgc3RhdGUpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkkMSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09IFByb21pc2VDb25zdHJ1Y3RvciB8fCBDID09PSBQcm9taXNlV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xuXG4gIGlmICggdHlwZW9mIG5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbmF0aXZlVGhlbiA9IG5hdGl2ZVByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUudGhlbjtcblxuICAgIC8vIHdyYXAgbmF0aXZlIFByb21pc2UjdGhlbiBmb3IgbmF0aXZlIGFzeW5jIGZ1bmN0aW9uc1xuICAgIHJlZGVmaW5lKG5hdGl2ZVByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUsICd0aGVuJywgZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBuYXRpdmVUaGVuLmNhbGwodGhhdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NDBcbiAgICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcblxuICAgIC8vIHdyYXAgZmV0Y2ggcmVzdWx0XG4gICAgaWYgKHR5cGVvZiAkZmV0Y2ggPT0gJ2Z1bmN0aW9uJykgX2V4cG9ydCh7IGdsb2JhbDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgZmV0Y2g6IGZ1bmN0aW9uIGZldGNoKGlucHV0IC8qICwgaW5pdCAqLykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoUHJvbWlzZUNvbnN0cnVjdG9yLCAkZmV0Y2guYXBwbHkoZ2xvYmFsXzEsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbl9leHBvcnQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogRk9SQ0VEJDEgfSwge1xuICBQcm9taXNlOiBQcm9taXNlQ29uc3RydWN0b3Jcbn0pO1xuXG5zZXRUb1N0cmluZ1RhZyhQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UsIGZhbHNlKTtcbnNldFNwZWNpZXMoUFJPTUlTRSk7XG5cblByb21pc2VXcmFwcGVyID0gZ2V0QnVpbHRJbihQUk9NSVNFKTtcblxuLy8gc3RhdGljc1xuX2V4cG9ydCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQkMSB9LCB7XG4gIC8vIGBQcm9taXNlLnJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5JDEodGhpcyk7XG4gICAgY2FwYWJpbGl0eS5yZWplY3QuY2FsbCh1bmRlZmluZWQsIHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5fZXhwb3J0KHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICBGT1JDRUQkMSB9LCB7XG4gIC8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKCB0aGlzLCB4KTtcbiAgfVxufSk7XG5cbl9leHBvcnQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIC8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkkMShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbiQxKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gYFByb21pc2UucmFjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmFjZVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkkMShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbiQxKEMucmVzb2x2ZSk7XG4gICAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAkcHJvbWlzZVJlc29sdmUuY2FsbChDLCBwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZXJyb3IpIHJlamVjdChyZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbi8vIGBJc1JlZ0V4cGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc3JlZ2V4cFxudmFyIGlzUmVnZXhwID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2ZSYXcoaXQpID09ICdSZWdFeHAnKTtcbn07XG5cbnZhciBub3RBUmVnZXhwID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1JlZ2V4cChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJUaGUgbWV0aG9kIGRvZXNuJ3QgYWNjZXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnNcIik7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxudmFyIE1BVENIJDEgPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbnZhciBjb3JyZWN0SXNSZWdleHBMb2dpYyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIJDFdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJDMgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZjtcblxuXG5cblxuXG5cbnZhciBuYXRpdmVFbmRzV2l0aCA9ICcnLmVuZHNXaXRoO1xudmFyIG1pbiQyID0gTWF0aC5taW47XG5cbnZhciBDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyA9IGNvcnJlY3RJc1JlZ2V4cExvZ2ljKCdlbmRzV2l0aCcpO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvcHVsbC83MDJcbnZhciBNRE5fUE9MWUZJTExfQlVHID0gICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyAmJiAhIWZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkMyhTdHJpbmcucHJvdG90eXBlLCAnZW5kc1dpdGgnKTtcbiAgcmV0dXJuIGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3Iud3JpdGFibGU7XG59KCk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuZW5kc3dpdGhcbl9leHBvcnQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhTUROX1BPTFlGSUxMX0JVRyAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgfSwge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qICwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKSB7XG4gICAgdmFyIHRoYXQgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgbm90QVJlZ2V4cChzZWFyY2hTdHJpbmcpO1xuICAgIHZhciBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aCk7XG4gICAgdmFyIGVuZCA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBtaW4kMih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbik7XG4gICAgdmFyIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiBuYXRpdmVFbmRzV2l0aFxuICAgICAgPyBuYXRpdmVFbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkNCA9IG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvci5mO1xuXG5cblxuXG5cblxudmFyIG5hdGl2ZVN0YXJ0c1dpdGggPSAnJy5zdGFydHNXaXRoO1xudmFyIG1pbiQzID0gTWF0aC5taW47XG5cbnZhciBDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyQxID0gY29ycmVjdElzUmVnZXhwTG9naWMoJ3N0YXJ0c1dpdGgnKTtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL3B1bGwvNzAyXG52YXIgTUROX1BPTFlGSUxMX0JVRyQxID0gICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyQxICYmICEhZnVuY3Rpb24gKCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciQ0KFN0cmluZy5wcm90b3R5cGUsICdzdGFydHNXaXRoJyk7XG4gIHJldHVybiBkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLndyaXRhYmxlO1xufSgpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3RhcnRzd2l0aFxuX2V4cG9ydCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFNRE5fUE9MWUZJTExfQlVHJDEgJiYgIUNPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDJDEgfSwge1xuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHZhciB0aGF0ID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgIG5vdEFSZWdleHAoc2VhcmNoU3RyaW5nKTtcbiAgICB2YXIgaW5kZXggPSB0b0xlbmd0aChtaW4kMyhhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdGhhdC5sZW5ndGgpKTtcbiAgICB2YXIgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuIG5hdGl2ZVN0YXJ0c1dpdGhcbiAgICAgID8gbmF0aXZlU3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG4gICAgICA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cbi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xudmFyIGRvbUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBkb21JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxfMVtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGFycmF5Rm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBhcnJheUZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGFycmF5Rm9yRWFjaDtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxudmFyIGJpbmQkMSA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nJDEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5JDEodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZyQxLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nJDEuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0JDEodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgaWYgKHRvU3RyaW5nJDEuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmckMS5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZyQxLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nJDEuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmckMS5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QkMSh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5JDEob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkkMSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCQxKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICogQHJldHVybiB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbnZhciB1dGlscyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSQxLFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCQxLFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbnZhciBidWlsZFVSTCA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBJbnRlcmNlcHRvck1hbmFnZXJfMSA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG52YXIgdHJhbnNmb3JtRGF0YSA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbnZhciBpc0NhbmNlbCA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xudmFyIGVuaGFuY2VFcnJvciA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xudmFyIGNyZWF0ZUVycm9yID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xudmFyIHNldHRsZSA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuXG52YXIgY29va2llcyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbnZhciBpc0Fic29sdXRlVVJMID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xudmFyIGNvbWJpbmVVUkxzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG52YXIgYnVpbGRGdWxsUGF0aCA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG52YXIgcGFyc2VIZWFkZXJzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbnZhciBpc1VSTFNhbWVPcmlnaW4gPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuXG52YXIgeGhyID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSB4aHI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSB4aHI7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxudmFyIGRlZmF1bHRzXzEgPSBkZWZhdWx0cztcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHNfMS5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG52YXIgbWVyZ2VDb25maWcgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5JywgJ3BhcmFtcyddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd0aW1lb3V0TWVzc2FnZScsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICdtYXhCb2R5TGVuZ3RoJywgJ21heFJlZGlyZWN0cycsICd0cmFuc3BvcnQnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJywgJ3Jlc3BvbnNlRW5jb2RpbmcnXG4gIF07XG4gIHZhciBkaXJlY3RNZXJnZUtleXMgPSBbJ3ZhbGlkYXRlU3RhdHVzJ107XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpXG4gICAgLmNvbmNhdChkaXJlY3RNZXJnZUtleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcxKVxuICAgIC5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXJfMSgpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyXzEoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG52YXIgQXhpb3NfMSA9IEF4aW9zO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxudmFyIENhbmNlbF8xID0gQ2FuY2VsO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxfMShtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbnZhciBDYW5jZWxUb2tlbl8xID0gQ2FuY2VsVG9rZW47XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG52YXIgc3ByZWFkID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3NfMShkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZCQxKEF4aW9zXzEucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3NfMS5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0c18xKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zXzE7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IENhbmNlbF8xO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBDYW5jZWxUb2tlbl8xO1xuYXhpb3MuaXNDYW5jZWwgPSBpc0NhbmNlbDtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHNwcmVhZDtcblxudmFyIGF4aW9zXzEgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG52YXIgZGVmYXVsdF8xID0gYXhpb3M7XG5heGlvc18xLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG5cbnZhciBheGlvcyQxID0gYXhpb3NfMTtcblxudmFyIHN1cHBvcnRlZFZlcnNpb25zID0gWyd2MicsICd2MycsICd2NCcsICdjYW5hcnknXTtcbnZhciBuYW1lID0gJ0B0cnlnaG9zdC9jb250ZW50LWFwaSc7XG5mdW5jdGlvbiBHaG9zdENvbnRlbnRBUEkoX3JlZikge1xuICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICBob3N0ID0gX3JlZi5ob3N0LFxuICAgICAgX3JlZiRnaG9zdFBhdGggPSBfcmVmLmdob3N0UGF0aCxcbiAgICAgIGdob3N0UGF0aCA9IF9yZWYkZ2hvc3RQYXRoID09PSB2b2lkIDAgPyAnZ2hvc3QnIDogX3JlZiRnaG9zdFBhdGgsXG4gICAgICB2ZXJzaW9uID0gX3JlZi52ZXJzaW9uLFxuICAgICAga2V5ID0gX3JlZi5rZXk7XG5cbiAgLy8gaG9zdCBwYXJhbWV0ZXIgaXMgZGVwcmVjYXRlZFxuICBpZiAoaG9zdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChuYW1lLCBcIjogVGhlICdob3N0JyBwYXJhbWV0ZXIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAndXJsJyBpbnN0ZWFkXCIpKTtcblxuICAgIGlmICghdXJsKSB7XG4gICAgICB1cmwgPSBob3N0O1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgR2hvc3RDb250ZW50QVBJKSB7XG4gICAgcmV0dXJuIEdob3N0Q29udGVudEFQSSh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICBrZXk6IGtleVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG5hbWUsIFwiIENvbmZpZyBNaXNzaW5nOiAndmVyc2lvbicgaXMgcmVxdWlyZWQuIEUuZy4gXCIpLmNvbmNhdChzdXBwb3J0ZWRWZXJzaW9ucy5qb2luKCcsJykpKTtcbiAgfVxuXG4gIGlmICghc3VwcG9ydGVkVmVyc2lvbnMuaW5jbHVkZXModmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIEludmFsaWQ6ICd2ZXJzaW9uJyBcIikuY29uY2F0KHZlcnNpb24sIFwiIGlzIG5vdCBzdXBwb3J0ZWRcIikpO1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIE1pc3Npbmc6ICd1cmwnIGlzIHJlcXVpcmVkLiBFLmcuICdodHRwczovL3NpdGUuY29tJ1wiKSk7XG4gIH1cblxuICBpZiAoIS9odHRwcz86XFwvXFwvLy50ZXN0KHVybCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIEludmFsaWQ6ICd1cmwnIFwiKS5jb25jYXQodXJsLCBcIiByZXF1aXJlcyBhIHByb3RvY29sLiBFLmcuICdodHRwczovL3NpdGUuY29tJ1wiKSk7XG4gIH1cblxuICBpZiAodXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIEludmFsaWQ6ICd1cmwnIFwiKS5jb25jYXQodXJsLCBcIiBtdXN0IG5vdCBoYXZlIGEgdHJhaWxpbmcgc2xhc2guIEUuZy4gJ2h0dHBzOi8vc2l0ZS5jb20nXCIpKTtcbiAgfVxuXG4gIGlmIChnaG9zdFBhdGguZW5kc1dpdGgoJy8nKSB8fCBnaG9zdFBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG5hbWUsIFwiIENvbmZpZyBJbnZhbGlkOiAnZ2hvc3RQYXRoJyBcIikuY29uY2F0KGdob3N0UGF0aCwgXCIgbXVzdCBub3QgaGF2ZSBhIGxlYWRpbmcgb3IgdHJhaWxpbmcgc2xhc2guIEUuZy4gJ2dob3N0J1wiKSk7XG4gIH1cblxuICBpZiAoa2V5ICYmICEvWzAtOWEtZl17MjZ9Ly50ZXN0KGtleSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgQ29uZmlnIEludmFsaWQ6ICdrZXknIFwiKS5jb25jYXQoa2V5LCBcIiBtdXN0IGhhdmUgMjYgaGV4IGNoYXJhY3RlcnNcIikpO1xuICB9XG5cbiAgdmFyIGFwaSA9IFsncG9zdHMnLCAnYXV0aG9ycycsICd0YWdzJywgJ3BhZ2VzJywgJ3NldHRpbmdzJ10ucmVkdWNlKGZ1bmN0aW9uIChhcGlPYmplY3QsIHJlc291cmNlVHlwZSkge1xuICAgIGZ1bmN0aW9uIGJyb3dzZSgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHZhciBtZW1iZXJUb2tlbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHJlc291cmNlVHlwZSwgb3B0aW9ucywgbnVsbCwgbWVtYmVyVG9rZW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWQoZGF0YSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIG1lbWJlclRva2VuID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5pZCAmJiAhZGF0YS5zbHVnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJcIi5jb25jYXQobmFtZSwgXCIgcmVhZCByZXF1aXJlcyBhbiBpZCBvciBzbHVnLlwiKSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gbWFrZVJlcXVlc3QocmVzb3VyY2VUeXBlLCBwYXJhbXMsIGRhdGEuaWQgfHwgXCJzbHVnL1wiLmNvbmNhdChkYXRhLnNsdWcpLCBtZW1iZXJUb2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXBpT2JqZWN0LCBfZGVmaW5lUHJvcGVydHkoe30sIHJlc291cmNlVHlwZSwge1xuICAgICAgcmVhZDogcmVhZCxcbiAgICAgIGJyb3dzZTogYnJvd3NlXG4gICAgfSkpO1xuICB9LCB7fSk7XG4gIGRlbGV0ZSBhcGkuc2V0dGluZ3MucmVhZDtcbiAgcmV0dXJuIGFwaTtcblxuICBmdW5jdGlvbiBtYWtlUmVxdWVzdChyZXNvdXJjZVR5cGUsIHBhcmFtcywgaWQpIHtcbiAgICB2YXIgbWVtYmVyc1Rva2VuID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXG4gICAgaWYgKCFtZW1iZXJzVG9rZW4gJiYgIWtleSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlwiLmNvbmNhdChuYW1lLCBcIiBDb25maWcgTWlzc2luZzogJ2tleScgaXMgcmVxdWlyZWQuXCIpKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlIHBhcmFtcy5pZDtcbiAgICB2YXIgaGVhZGVycyA9IG1lbWJlcnNUb2tlbiA/IHtcbiAgICAgIEF1dGhvcml6YXRpb246IFwiR2hvc3RNZW1iZXJzIFwiLmNvbmNhdChtZW1iZXJzVG9rZW4pXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gYXhpb3MkMS5nZXQoXCJcIi5jb25jYXQodXJsLCBcIi9cIikuY29uY2F0KGdob3N0UGF0aCwgXCIvYXBpL1wiKS5jb25jYXQodmVyc2lvbiwgXCIvY29udGVudC9cIikuY29uY2F0KHJlc291cmNlVHlwZSwgXCIvXCIpLmNvbmNhdChpZCA/IGlkICsgJy8nIDogJycpLCB7XG4gICAgICBwYXJhbXM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBrZXk6IGtleVxuICAgICAgfSwgcGFyYW1zKSxcbiAgICAgIHBhcmFtc1NlcmlhbGl6ZXI6IGZ1bmN0aW9uIHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1ldGVycykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1ldGVycykucmVkdWNlKGZ1bmN0aW9uIChwYXJ0cywgaykge1xuICAgICAgICAgIHZhciB2YWwgPSBlbmNvZGVVUklDb21wb25lbnQoW10uY29uY2F0KHBhcmFtZXRlcnNba10pLmpvaW4oJywnKSk7XG4gICAgICAgICAgcmV0dXJuIHBhcnRzLmNvbmNhdChcIlwiLmNvbmNhdChrLCBcIj1cIikuY29uY2F0KHZhbCkpO1xuICAgICAgICB9LCBbXSkuam9pbignJicpO1xuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXMuZGF0YVtyZXNvdXJjZVR5cGVdKSkge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGFbcmVzb3VyY2VUeXBlXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcy5kYXRhW3Jlc291cmNlVHlwZV0ubGVuZ3RoID09PSAxICYmICFyZXMuZGF0YS5tZXRhKSB7XG4gICAgICAgIHJldHVybiByZXMuZGF0YVtyZXNvdXJjZVR5cGVdWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihyZXMuZGF0YVtyZXNvdXJjZVR5cGVdLCB7XG4gICAgICAgIG1ldGE6IHJlcy5kYXRhLm1ldGFcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEgJiYgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXTtcbiAgICAgICAgdmFyIHRvVGhyb3cgPSBuZXcgRXJyb3IocHJvcHMubWVzc2FnZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgICAgICB0b1Rocm93Lm5hbWUgPSBwcm9wcy50eXBlO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICB0b1Rocm93W2tdID0gcHJvcHNba107XG4gICAgICAgIH0pO1xuICAgICAgICB0b1Rocm93LnJlc3BvbnNlID0gZXJyLnJlc3BvbnNlOyAvLyBAVE9ETzogcmVtb3ZlIGluIDIuMC4gV2UgaGF2ZSBlbmhhbmNlZCB0aGUgZXJyb3IgaGFuZGxpbmcsIGJ1dCB3ZSBkb24ndCB3YW50IHRvIGJyZWFrIGV4aXN0aW5nIGltcGxlbWVudGF0aW9ucy5cblxuICAgICAgICB0b1Rocm93LnJlcXVlc3QgPSBlcnIucmVxdWVzdDtcbiAgICAgICAgdG9UaHJvdy5jb25maWcgPSBlcnIuY29uZmlnO1xuICAgICAgICB0aHJvdyB0b1Rocm93O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdob3N0Q29udGVudEFQSTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRlbnQtYXBpLmpzLm1hcFxuIiwiY29uc3QgRk9DVVNBQkxFX0VMID1cbiAgJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsIFt0YWJpbmRleD1cIjBcIl0sIFtjb250ZW50ZWRpdGFibGVdJztcblxubGV0IGN1cnJlbnRGb2N1cztcblxuY29uc3QgY2hlY2tEaXNwbGF5U3RhdHVzID0gKGVsKSA9PlxuICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZGlzcGxheSAhPT0gJ25vbmUnO1xuXG5jb25zdCBnZXROb25IaWRkZW5MYXN0RWwgPSAoZWwpID0+IHtcbiAgY29uc3QgbGFzdEVsID0gZWxbZWwubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHBlbnVsdGltYXRlRWwgPSBlbFtlbC5sZW5ndGggLSAyXTtcblxuICBpZiAoY2hlY2tEaXNwbGF5U3RhdHVzKGxhc3RFbCkpIHtcbiAgICByZXR1cm4gbGFzdEVsO1xuICB9XG5cbiAgcmV0dXJuIHBlbnVsdGltYXRlRWw7XG59O1xuXG4vLyBOZWVkIHRvIHJ1biBhIGZ1bmN0aW9uIHRoYXQgcnVucyB3aGVuIG1vZGFsIG9wZW5zIGFuZCBzZXRzIGZvY3VzXG4vLyBOZWVkIHRvIHJ1biBhIGRpZmZlcmVudCBmdW5jdGlvbiB0byBoYW5kbGUga2V5cHJlc3Nlc1xuXG5jb25zdCBjb25maWd1cmVGb2N1c2FibGVFbGVtZW50cyA9IChjb250YWluZXJFbCkgPT4ge1xuICBjb25zdCBmb2N1c2FibGVFbCA9IGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMKTtcbiAgZm9jdXNhYmxlRWwuZm9yRWFjaCgoZWwpID0+IGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpKTtcbiAgY29uc3QgZmlyc3RFbFRvRm9jdXMgPSBmb2N1c2FibGVFbFsxXTtcbiAgY29uc3QgZmlyc3RUYWJTdG9wID0gZm9jdXNhYmxlRWxbMF07XG4gIGNvbnN0IGxhc3RUYWJTdG9wID0gZ2V0Tm9uSGlkZGVuTGFzdEVsKGZvY3VzYWJsZUVsKTtcbiAgcmV0dXJuIFtmaXJzdFRhYlN0b3AsIGxhc3RUYWJTdG9wLCBmaXJzdEVsVG9Gb2N1c107XG59O1xuXG5leHBvcnQgY29uc3QgdHJhcEZvY3VzID0gKHNpZGVNZW51RWwpID0+IHtcbiAgY3VycmVudEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgY29uc3QgZmlyc3RFbFRvRm9jdXMgPSBjb25maWd1cmVGb2N1c2FibGVFbGVtZW50cyhzaWRlTWVudUVsKTtcbiAgZmlyc3RFbFRvRm9jdXNbMl0uZm9jdXMoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWJLZXlIYW5kbGVyKGUpIHtcbiAgY29uc3QgdGFicyA9IGNvbmZpZ3VyZUZvY3VzYWJsZUVsZW1lbnRzKHRoaXMpO1xuICBjb25zdCBmaXJzdFRhYlN0b3AgPSB0YWJzWzBdO1xuICBjb25zdCBsYXN0VGFiU3RvcCA9IHRhYnNbMV07XG4gIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAvLyBTSElGVCArIFRBQlxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RUYWJTdG9wKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGFzdFRhYlN0b3AuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIC8vIFRBQlxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdFRhYlN0b3ApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZpcnN0VGFiU3RvcC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVsZWFzZUZvY3VzID0gKHNpZGVNZW51RWwpID0+IHtcbiAgY29uc3QgZm9jdXNhYmxlRWwgPSBzaWRlTWVudUVsLnF1ZXJ5U2VsZWN0b3JBbGwoRk9DVVNBQkxFX0VMKTtcbiAgZm9jdXNhYmxlRWwuZm9yRWFjaCgoZWwpID0+IGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKSk7XG4gIHNpZGVNZW51RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYktleUhhbmRsZXIpO1xuICBjdXJyZW50Rm9jdXMuZm9jdXMoKTtcbn07XG4iLCJjb25zdCB7IHRyYXBGb2N1cywgcmVsZWFzZUZvY3VzLCB0YWJLZXlIYW5kbGVyIH0gPSByZXF1aXJlKCcuL2ZvY3VzVHJhcCcpO1xuXG5jb25zdCBtb2RhbEZuID0gKCkgPT4ge1xuICAvLyBEZXNrdG9wIGJ1dHRvbnNcbiAgY29uc3QgYWNjb3VudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvdW50LWJ0bicpO1xuICBjb25zdCBzaWduaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbmluLWJ0bicpO1xuICBjb25zdCBzaWdudXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLWJ0bicpO1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpO1xuICBjb25zdCBzdWJ0ZXh0U2lnbnVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnRleHQtc2lnbnVwJyk7XG4gIGNvbnN0IHN1YnRleHRTaWduaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VidGV4dC1zaWduaW4nKTtcbiAgY29uc3QgdXBncmFkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGdyYWRlJyk7XG5cbiAgLy8gTW9iaWxlIGJ1dHRvbnNcbiAgY29uc3QgbUFjY291bnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbS1hY2NvdW50LWJ0bicpO1xuICBjb25zdCBtU2lnbmluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20tc2lnbmluLWJ0bicpO1xuICBjb25zdCBtU2lnbnVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20tc2lnbnVwLWJ0bicpO1xuICBjb25zdCBtU2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20tc2VhcmNoLWJ0bicpO1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XG5cbiAgY29uc3QgY2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19jbG9zZS1idG4nKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgaWYgKHR5cGVvZiBTRUFSQ0hfQVBJICE9PSAndW5kZWZpbmVkJykge1xuICAgIHNlYXJjaEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBtU2VhcmNoQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgY29uc3QgYnRucyA9IFtcbiAgICBhY2NvdW50QnRuLFxuICAgIHNpZ25pbkJ0bixcbiAgICBzaWdudXBCdG4sXG4gICAgc2VhcmNoQnRuLFxuICAgIHN1YnRleHRTaWdudXBCdG4sXG4gICAgc3VidGV4dFNpZ25pbkJ0bixcbiAgICB1cGdyYWRlLFxuICAgIG1BY2NvdW50QnRuLFxuICAgIG1TaWduaW5CdG4sXG4gICAgbVNpZ251cEJ0bixcbiAgICBtU2VhcmNoQnRuLFxuICAgIG1lbnVCdG5cbiAgXTtcblxuICBjb25zdCBjbG9zZSA9IChtb2RhbCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQtbW9kYWwnKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICBjb25zdCBpbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICByZWxlYXNlRm9jdXMobW9kYWwpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBjbG9zZShtb2RhbCk7XG4gIH07XG5cbiAgY29uc3Qgb3BlbkhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLm1vZGFsJykpIHtcbiAgICAgIGNsb3NlKGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcubW9kYWwnKSk7XG4gICAgfVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0KTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkLW1vZGFsJyk7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0cmFwRm9jdXMobW9kYWwpO1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJLZXlIYW5kbGVyKTtcbiAgICBjb25zdCBub25UYXJnZXRDbG9zZUhhbmRsZXIgPSAoZXYpID0+IHtcbiAgICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250ZW50LXdyYXAnKSkge1xuICAgICAgICBjbG9zZShtb2RhbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBub25UYXJnZXRDbG9zZUhhbmRsZXIpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsb3NlQnlFc2NIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBub25UYXJnZXRDbG9zZUhhbmRsZXIpO1xuICAgIGNvbnN0IGNsb3NlQnlFc2NIYW5kbGVyID0gKGtleSkgPT4ge1xuICAgICAgaWYgKGtleS5rZXkgPT09ICdFc2NhcGUnIHx8IGtleS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICBjbG9zZShtb2RhbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjbG9zZUJ5RXNjSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBub25UYXJnZXRDbG9zZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsb3NlQnlFc2NIYW5kbGVyKTtcbiAgfTtcblxuICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChidG4pIHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5IYW5kbGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNsb3NlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBpZiAoYnRuKSB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUhhbmRsZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbEZuO1xuIiwiaW1wb3J0ICogYXMgSnNTZWFyY2ggZnJvbSAnanMtc2VhcmNoJztcbmltcG9ydCBHaG9zdENvbnRlbnRBUEkgZnJvbSAnQHRyeWdob3N0L2NvbnRlbnQtYXBpJztcblxuY29uc3Qgc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLW1vZGFsJyk7XG5cbmNvbnN0IGNyZWF0ZVRpbWVzdGFtcCA9IChtaW51dGVzID0gNjApID0+IHtcbiAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKSArIG1pbnV0ZXMgKiA2MDAwMDtcbiAgcmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbmNvbnN0IHN0YXRlTG9hZGVyID0gKHN0YXRlLCBzdGF0dXMpID0+IHtcbiAgaWYgKHN0YXR1cykge1xuICAgIHNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgIHNlYXJjaE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoc3RhdGUpO1xuICB9XG59O1xuXG5jb25zdCBzZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IGZyZXNoQXBpID0gbmV3IEdob3N0Q29udGVudEFQSSh7XG4gICAgdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fWAsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAga2V5OiBTRUFSQ0hfQVBJLFxuICAgIHZlcnNpb246ICd2NCdcbiAgfSk7XG5cbiAgY29uc3QgYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lc3RhbXAnKSwgMTApO1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBpZiAoIXRpbWVzdGFtcCB8fCBub3cgPiB0aW1lc3RhbXApIHtcbiAgICAgIGZyZXNoQXBpLnBvc3RzXG4gICAgICAgIC5icm93c2Uoe1xuICAgICAgICAgIGluY2x1ZGU6ICd0YWdzJyxcbiAgICAgICAgICBmb3JtYXRzOiAncGxhaW50ZXh0JyxcbiAgICAgICAgICBsaW1pdDogJ2FsbCdcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdHMnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWVzdGFtcCcsIGNyZWF0ZVRpbWVzdGFtcCgpKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9zdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3N0cycpKTtcbiAgICAgIHJlc29sdmUocG9zdHMpO1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNvdWxkbid0IGZldGNoIHBvc3RzXCIpKTtcbiAgICB9XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydChgU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXFxuRXJyb3IgRGV0YWlsczogJHtlcnJ9YCk7XG4gIH0pO1xuXG4gIC8vIFBhZ2UgRWxlbWVudHNcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XG4gIGNvbnN0IHJ1blNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdydW4tc2VhcmNoLWJ0bicpO1xuICBjb25zdCBzZWFyY2hSZXN1bHRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlc3VsdHNfX2hlYWRlcicpO1xuICBjb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlc3VsdHNfX2NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGRhdGVGb3JtYXR0ZXIgPSAoaXNvRGF0ZSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgIGRheTogJzItZGlnaXQnXG4gICAgfTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXNvRGF0ZSk7XG5cbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hQb3N0cyA9ICh0ZXJtKSA9PiB7XG4gICAgc3RhdGVMb2FkZXIoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICBzZWFyY2hSZXN1bHQuaW5uZXJIVE1MID0gJyc7XG4gICAgYXBpLnRoZW4oKHBvc3RzKSA9PiB7XG4gICAgICBjb25zdCBuZXdTZWFyY2ggPSBuZXcgSnNTZWFyY2guU2VhcmNoKCdpZCcpO1xuICAgICAgbmV3U2VhcmNoLmFkZEluZGV4KCd0aXRsZScpO1xuICAgICAgbmV3U2VhcmNoLmFkZEluZGV4KCdwbGFpbnRleHQnKTtcblxuICAgICAgbmV3U2VhcmNoLmFkZERvY3VtZW50cyhwb3N0cyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXdTZWFyY2guc2VhcmNoKHRlcm0pO1xuXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc2VhcmNoUmVzdWx0SGVhZGVyLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Lmxlbmd0aH0gUmVzdWx0cyBmb3Ig4oCcJHt0ZXJtfeKAnWA7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc2VhcmNoUmVzdWx0SGVhZGVyLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Lmxlbmd0aH0gUmVzdWx0IGZvciDigJwke3Rlcm194oCdYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFJlc3VsdEhlYWRlci50ZXh0Q29udGVudCA9IGBObyByZXN1bHRzIGZvciDigJwke3Rlcm194oCdYDtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LmZvckVhY2goKHBvc3QpID0+IHtcbiAgICAgICAgc2VhcmNoUmVzdWx0LmlubmVySFRNTCArPSBgPGFydGljbGUgY2xhc3M9XCJzZWFyY2gtcmVzdWx0c19faXRlbVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJzZWFyY2gtcmVzdWx0c19fbGlua1wiIGhyZWY9XCIke3Bvc3QudXJsfVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNlYXJjaC1yZXN1bHRzX19kYXRlXCI+JHtkYXRlRm9ybWF0dGVyKFxuICAgICAgICAgICAgICAgIHBvc3QucHVibGlzaGVkX2F0XG4gICAgICAgICAgICAgICl9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInNlYXJjaC1yZXN1bHRzX190aXRsZVwiPiR7cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwic2VhcmNoLXJlc3VsdHNfX2V4Y2VycHRcIj5cbiAgICAgICAgICAgICAgICAke3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9hcnRpY2xlPmA7XG4gICAgICB9KTtcblxuICAgICAgc3RhdGVMb2FkZXIoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZW50ZXJTZWFyY2hUZXJtQ2hlY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hSZXN1bHQuaW5uZXJIVE1MKVxuICAgICAgc2VhcmNoUmVzdWx0SGVhZGVyLnRleHRDb250ZW50ID0gJ0VudGVyIGEgc2VhcmNoIHRlcm0nO1xuICB9O1xuXG4gIHJ1blNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICBlbnRlclNlYXJjaFRlcm1DaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hQb3N0cyhzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgZW50ZXJTZWFyY2hUZXJtQ2hlY2soKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBzZWFyY2hQb3N0cyhzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgc3RhdGVMb2FkZXIoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgfSk7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc3RhdGVMb2FkZXIoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiY29uc3QgY29weUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5LWJ1dHRvbicpO1xuXG5jb25zdCBkZXN0cm95VG9hc3QgPSAoZWwpID0+IHtcbiAgZWwuY2xhc3NMaXN0LmFkZCgndG9hc3RfX3NsaWRlLW91dCcpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfSwgNTAwKTtcbn07XG5cbmNvbnN0IGNoZWNrRG9tRm9yVG9hc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGV4dGFudFRvYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvYXN0Jyk7XG4gIGlmIChleHRhbnRUb2FzdC5sZW5ndGgpIHtcbiAgICBleHRhbnRUb2FzdC5mb3JFYWNoKChlbCkgPT4gZWwucmVtb3ZlKCkpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUb2FzdCA9ICh2YWx1ZSkgPT4ge1xuICBjaGVja0RvbUZvclRvYXN0KCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9hc3QnKTtcbiAgY29uc3QgaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5uZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9hc3RfX2lubmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoaW5uZXJDb250YWluZXIpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIGlubmVyQ29udGFpbmVyLmFwcGVuZChwKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcbiAgc2V0VGltZW91dChkZXN0cm95VG9hc3QuYmluZChudWxsLCBjb250YWluZXIpLCAzMDAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvYXN0KCkge1xuICBpZiAoY29weUJ0bikge1xuICAgIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICBjcmVhdGVUb2FzdC5iaW5kKG51bGwsICdMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQnKVxuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogSW5kZXhlcyBmb3IgYWxsIHN1YnN0cmluZyBzZWFyY2hlcyAoZS5nLiB0aGUgdGVybSBcImNhdFwiIGlzIGluZGV4ZWQgYXMgXCJjXCIsIFwiY2FcIiwgXCJjYXRcIiwgXCJhXCIsIFwiYXRcIiwgYW5kIFwidFwiKS5cbiAqL1xudmFyIEFsbFN1YnN0cmluZ3NJbmRleFN0cmF0ZWd5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWxsU3Vic3RyaW5nc0luZGV4U3RyYXRlZ3koKSB7fVxuXG4gIHZhciBfcHJvdG8gPSBBbGxTdWJzdHJpbmdzSW5kZXhTdHJhdGVneS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jc1xuICAgKi9cbiAgX3Byb3RvLmV4cGFuZFRva2VuID0gZnVuY3Rpb24gZXhwYW5kVG9rZW4odG9rZW4pIHtcbiAgICB2YXIgZXhwYW5kZWRUb2tlbnMgPSBbXTtcbiAgICB2YXIgc3RyaW5nO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHRva2VuLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICBzdHJpbmcgPSAnJztcblxuICAgICAgZm9yICh2YXIgaiA9IGk7IGogPCBsZW5ndGg7ICsraikge1xuICAgICAgICBzdHJpbmcgKz0gdG9rZW4uY2hhckF0KGopO1xuICAgICAgICBleHBhbmRlZFRva2Vucy5wdXNoKHN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cGFuZGVkVG9rZW5zO1xuICB9O1xuXG4gIHJldHVybiBBbGxTdWJzdHJpbmdzSW5kZXhTdHJhdGVneTtcbn0oKTtcblxuLyoqXG4gKiBJbmRleGVzIGZvciBleGFjdCB3b3JkIG1hdGNoZXMuXG4gKi9cbnZhciBFeGFjdFdvcmRJbmRleFN0cmF0ZWd5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXhhY3RXb3JkSW5kZXhTdHJhdGVneSgpIHt9XG5cbiAgdmFyIF9wcm90byA9IEV4YWN0V29yZEluZGV4U3RyYXRlZ3kucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY3NcbiAgICovXG4gIF9wcm90by5leHBhbmRUb2tlbiA9IGZ1bmN0aW9uIGV4cGFuZFRva2VuKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuID8gW3Rva2VuXSA6IFtdO1xuICB9O1xuXG4gIHJldHVybiBFeGFjdFdvcmRJbmRleFN0cmF0ZWd5O1xufSgpO1xuXG4vKipcbiAqIEluZGV4ZXMgZm9yIHByZWZpeCBzZWFyY2hlcyAoZS5nLiB0aGUgdGVybSBcImNhdFwiIGlzIGluZGV4ZWQgYXMgXCJjXCIsIFwiY2FcIiwgYW5kIFwiY2F0XCIgYWxsb3dpbmcgcHJlZml4IHNlYXJjaCBsb29rdXBzKS5cbiAqL1xudmFyIFByZWZpeEluZGV4U3RyYXRlZ3kgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcmVmaXhJbmRleFN0cmF0ZWd5KCkge31cblxuICB2YXIgX3Byb3RvID0gUHJlZml4SW5kZXhTdHJhdGVneS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jc1xuICAgKi9cbiAgX3Byb3RvLmV4cGFuZFRva2VuID0gZnVuY3Rpb24gZXhwYW5kVG9rZW4odG9rZW4pIHtcbiAgICB2YXIgZXhwYW5kZWRUb2tlbnMgPSBbXTtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gdG9rZW4ubGVuZ3RoOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgIHN0cmluZyArPSB0b2tlbi5jaGFyQXQoaSk7XG4gICAgICBleHBhbmRlZFRva2Vucy5wdXNoKHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cGFuZGVkVG9rZW5zO1xuICB9O1xuXG4gIHJldHVybiBQcmVmaXhJbmRleFN0cmF0ZWd5O1xufSgpO1xuXG4vKipcbiAqIEVuZm9yY2VzIGNhc2Utc2Vuc2l0aXZlIHRleHQgbWF0Y2hlcy5cbiAqL1xudmFyIENhc2VTZW5zaXRpdmVTYW5pdGl6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDYXNlU2Vuc2l0aXZlU2FuaXRpemVyKCkge31cblxuICB2YXIgX3Byb3RvID0gQ2FzZVNlbnNpdGl2ZVNhbml0aXplci5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jc1xuICAgKi9cbiAgX3Byb3RvLnNhbml0aXplID0gZnVuY3Rpb24gc2FuaXRpemUodGV4dCkge1xuICAgIHJldHVybiB0ZXh0ID8gdGV4dC50cmltKCkgOiAnJztcbiAgfTtcblxuICByZXR1cm4gQ2FzZVNlbnNpdGl2ZVNhbml0aXplcjtcbn0oKTtcblxuLyoqXG4gKiBTYW5pdGl6ZXMgdGV4dCBieSBjb252ZXJ0aW5nIHRvIGEgbG9jYWxlLWZyaWVuZGx5IGxvd2VyLWNhc2UgdmVyc2lvbiBhbmQgdHJpbWluZyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLlxuICovXG52YXIgTG93ZXJDYXNlU2FuaXRpemVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG93ZXJDYXNlU2FuaXRpemVyKCkge31cblxuICB2YXIgX3Byb3RvID0gTG93ZXJDYXNlU2FuaXRpemVyLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQGluaGVyaXREb2NzXG4gICAqL1xuICBfcHJvdG8uc2FuaXRpemUgPSBmdW5jdGlvbiBzYW5pdGl6ZSh0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQgPyB0ZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkudHJpbSgpIDogJyc7XG4gIH07XG5cbiAgcmV0dXJuIExvd2VyQ2FzZVNhbml0aXplcjtcbn0oKTtcblxuLyoqXG4gKiBGaW5kIGFuZCByZXR1cm4gYSBuZXN0ZWQgb2JqZWN0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSBvYmplY3QgdG8gY3Jhd2xcbiAqIEBwYXJhbSBwYXRoIFByb3BlcnR5IHBhdGhcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGdldE5lc3RlZEZpZWxkVmFsdWUob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBwYXRoIHx8IFtdO1xuICBvYmplY3QgPSBvYmplY3QgfHwge307XG4gIHZhciB2YWx1ZSA9IG9iamVjdDsgLy8gd2FsayBkb3duIHRoZSBwcm9wZXJ0eSBwYXRoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcblxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogU2VhcmNoIGluZGV4IGNhcGFibGUgb2YgcmV0dXJuaW5nIHJlc3VsdHMgbWF0Y2hpbmcgYSBzZXQgb2YgdG9rZW5zIGFuZCByYW5rZWQgYWNjb3JkaW5nIHRvIFRGLUlERi5cbiAqL1xudmFyIFRmSWRmU2VhcmNoSW5kZXggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUZklkZlNlYXJjaEluZGV4KHVpZEZpZWxkTmFtZSkge1xuICAgIHRoaXMuX3VpZEZpZWxkTmFtZSA9IHVpZEZpZWxkTmFtZTtcbiAgICB0aGlzLl90b2tlblRvSWRmQ2FjaGUgPSB7fTtcbiAgICB0aGlzLl90b2tlbk1hcCA9IHt9O1xuICB9XG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY3NcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gVGZJZGZTZWFyY2hJbmRleC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluZGV4RG9jdW1lbnQgPSBmdW5jdGlvbiBpbmRleERvY3VtZW50KHRva2VuLCB1aWQsIGRvYykge1xuICAgIHRoaXMuX3Rva2VuVG9JZGZDYWNoZSA9IHt9OyAvLyBOZXcgaW5kZXggaW52YWxpZGF0ZXMgcHJldmlvdXMgSURGIGNhY2hlc1xuXG4gICAgdmFyIHRva2VuTWFwID0gdGhpcy5fdG9rZW5NYXA7XG4gICAgdmFyIHRva2VuRGF0dW07XG5cbiAgICBpZiAodHlwZW9mIHRva2VuTWFwW3Rva2VuXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRva2VuTWFwW3Rva2VuXSA9IHRva2VuRGF0dW0gPSB7XG4gICAgICAgICRudW1Eb2N1bWVudE9jY3VycmVuY2VzOiAwLFxuICAgICAgICAkdG90YWxOdW1PY2N1cnJlbmNlczogMSxcbiAgICAgICAgJHVpZE1hcDoge31cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRva2VuRGF0dW0gPSB0b2tlbk1hcFt0b2tlbl07XG4gICAgICB0b2tlbkRhdHVtLiR0b3RhbE51bU9jY3VycmVuY2VzKys7XG4gICAgfVxuXG4gICAgdmFyIHVpZE1hcCA9IHRva2VuRGF0dW0uJHVpZE1hcDtcblxuICAgIGlmICh0eXBlb2YgdWlkTWFwW3VpZF0gIT09ICdvYmplY3QnKSB7XG4gICAgICB0b2tlbkRhdHVtLiRudW1Eb2N1bWVudE9jY3VycmVuY2VzKys7XG4gICAgICB1aWRNYXBbdWlkXSA9IHtcbiAgICAgICAgJGRvY3VtZW50OiBkb2MsXG4gICAgICAgICRudW1Ub2tlbk9jY3VycmVuY2VzOiAxXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB1aWRNYXBbdWlkXS4kbnVtVG9rZW5PY2N1cnJlbmNlcysrO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQGluaGVyaXREb2NzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaCh0b2tlbnMsIGNvcnB1cykge1xuICAgIHZhciB1aWRUb0RvY3VtZW50TWFwID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICB2YXIgdG9rZW5NZXRhZGF0YSA9IHRoaXMuX3Rva2VuTWFwW3Rva2VuXTsgLy8gU2hvcnQgY2lyY3VpdCBpZiBubyBtYXRjaGVzIHdlcmUgZm91bmQgZm9yIGFueSBnaXZlbiB0b2tlbi5cblxuICAgICAgaWYgKCF0b2tlbk1ldGFkYXRhKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0b2tlbk1ldGFkYXRhLiR1aWRNYXApO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwLCBudW1LZXlzID0ga2V5cy5sZW5ndGg7IGogPCBudW1LZXlzOyBqKyspIHtcbiAgICAgICAgICB2YXIgdWlkID0ga2V5c1tqXTtcbiAgICAgICAgICB1aWRUb0RvY3VtZW50TWFwW3VpZF0gPSB0b2tlbk1ldGFkYXRhLiR1aWRNYXBbdWlkXS4kZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModWlkVG9Eb2N1bWVudE1hcCk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG51bUtleXMgPSBrZXlzLmxlbmd0aDsgaiA8IG51bUtleXM7IGorKykge1xuICAgICAgICAgIHZhciB1aWQgPSBrZXlzW2pdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbk1ldGFkYXRhLiR1aWRNYXBbdWlkXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB1aWRUb0RvY3VtZW50TWFwW3VpZF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRvY3VtZW50cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgdWlkIGluIHVpZFRvRG9jdW1lbnRNYXApIHtcbiAgICAgIGRvY3VtZW50cy5wdXNoKHVpZFRvRG9jdW1lbnRNYXBbdWlkXSk7XG4gICAgfVxuXG4gICAgdmFyIGNhbGN1bGF0ZVRmSWRmID0gdGhpcy5fY3JlYXRlQ2FsY3VsYXRlVGZJZGYoKTsgLy8gUmV0dXJuIGRvY3VtZW50cyBzb3J0ZWQgYnkgVEYtSURGXG5cblxuICAgIHJldHVybiBkb2N1bWVudHMuc29ydChmdW5jdGlvbiAoZG9jdW1lbnRBLCBkb2N1bWVudEIpIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVUZklkZih0b2tlbnMsIGRvY3VtZW50QiwgY29ycHVzKSAtIGNhbGN1bGF0ZVRmSWRmKHRva2VucywgZG9jdW1lbnRBLCBjb3JwdXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlQ2FsY3VsYXRlSWRmID0gZnVuY3Rpb24gX2NyZWF0ZUNhbGN1bGF0ZUlkZigpIHtcbiAgICB2YXIgdG9rZW5NYXAgPSB0aGlzLl90b2tlbk1hcDtcbiAgICB2YXIgdG9rZW5Ub0lkZkNhY2hlID0gdGhpcy5fdG9rZW5Ub0lkZkNhY2hlO1xuICAgIHJldHVybiBmdW5jdGlvbiBjYWxjdWxhdGVJZGYodG9rZW4sIGRvY3VtZW50cykge1xuICAgICAgaWYgKCF0b2tlblRvSWRmQ2FjaGVbdG9rZW5dKSB7XG4gICAgICAgIHZhciBudW1Eb2N1bWVudHNXaXRoVG9rZW4gPSB0eXBlb2YgdG9rZW5NYXBbdG9rZW5dICE9PSAndW5kZWZpbmVkJyA/IHRva2VuTWFwW3Rva2VuXS4kbnVtRG9jdW1lbnRPY2N1cnJlbmNlcyA6IDA7XG4gICAgICAgIHRva2VuVG9JZGZDYWNoZVt0b2tlbl0gPSAxICsgTWF0aC5sb2coZG9jdW1lbnRzLmxlbmd0aCAvICgxICsgbnVtRG9jdW1lbnRzV2l0aFRva2VuKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlblRvSWRmQ2FjaGVbdG9rZW5dO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVDYWxjdWxhdGVUZklkZiA9IGZ1bmN0aW9uIF9jcmVhdGVDYWxjdWxhdGVUZklkZigpIHtcbiAgICB2YXIgdG9rZW5NYXAgPSB0aGlzLl90b2tlbk1hcDtcbiAgICB2YXIgdWlkRmllbGROYW1lID0gdGhpcy5fdWlkRmllbGROYW1lO1xuXG4gICAgdmFyIGNhbGN1bGF0ZUlkZiA9IHRoaXMuX2NyZWF0ZUNhbGN1bGF0ZUlkZigpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGN1bGF0ZVRmSWRmKHRva2VucywgZG9jdW1lbnQsIGRvY3VtZW50cykge1xuICAgICAgdmFyIHNjb3JlID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHZhciBpbnZlcnNlRG9jdW1lbnRGcmVxdWVuY3kgPSBjYWxjdWxhdGVJZGYodG9rZW4sIGRvY3VtZW50cyk7XG5cbiAgICAgICAgaWYgKGludmVyc2VEb2N1bWVudEZyZXF1ZW5jeSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICBpbnZlcnNlRG9jdW1lbnRGcmVxdWVuY3kgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVpZDtcblxuICAgICAgICBpZiAodWlkRmllbGROYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICB1aWQgPSBkb2N1bWVudCAmJiBnZXROZXN0ZWRGaWVsZFZhbHVlKGRvY3VtZW50LCB1aWRGaWVsZE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVpZCA9IGRvY3VtZW50ICYmIGRvY3VtZW50W3VpZEZpZWxkTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGVybUZyZXF1ZW5jeSA9IHR5cGVvZiB0b2tlbk1hcFt0b2tlbl0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0b2tlbk1hcFt0b2tlbl0uJHVpZE1hcFt1aWRdICE9PSAndW5kZWZpbmVkJyA/IHRva2VuTWFwW3Rva2VuXS4kdWlkTWFwW3VpZF0uJG51bVRva2VuT2NjdXJyZW5jZXMgOiAwO1xuICAgICAgICBzY29yZSArPSB0ZXJtRnJlcXVlbmN5ICogaW52ZXJzZURvY3VtZW50RnJlcXVlbmN5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2NvcmU7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVGZJZGZTZWFyY2hJbmRleDtcbn0oKTtcblxuLyoqXG4gKiBTZWFyY2ggaW5kZXggY2FwYWJsZSBvZiByZXR1cm5pbmcgcmVzdWx0cyBtYXRjaGluZyBhIHNldCBvZiB0b2tlbnMgYnV0IHdpdGhvdXQgYW55IG1lYW5pbmdmdWwgcmFuayBvciBvcmRlci5cbiAqL1xudmFyIFVub3JkZXJlZFNlYXJjaEluZGV4ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVW5vcmRlcmVkU2VhcmNoSW5kZXgoKSB7XG4gICAgdGhpcy5fdG9rZW5Ub1VpZFRvRG9jdW1lbnRNYXAgPSB7fTtcbiAgfVxuICAvKipcbiAgICogQGluaGVyaXREb2NzXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFVub3JkZXJlZFNlYXJjaEluZGV4LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5kZXhEb2N1bWVudCA9IGZ1bmN0aW9uIGluZGV4RG9jdW1lbnQodG9rZW4sIHVpZCwgZG9jKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl90b2tlblRvVWlkVG9Eb2N1bWVudE1hcFt0b2tlbl0gIT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLl90b2tlblRvVWlkVG9Eb2N1bWVudE1hcFt0b2tlbl0gPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLl90b2tlblRvVWlkVG9Eb2N1bWVudE1hcFt0b2tlbl1bdWlkXSA9IGRvYztcbiAgfVxuICAvKipcbiAgICogQGluaGVyaXREb2NzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaCh0b2tlbnMsIGNvcnB1cykge1xuICAgIHZhciBpbnRlcnNlY3RpbmdEb2N1bWVudE1hcCA9IHt9O1xuICAgIHZhciB0b2tlblRvVWlkVG9Eb2N1bWVudE1hcCA9IHRoaXMuX3Rva2VuVG9VaWRUb0RvY3VtZW50TWFwO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgdmFyIGRvY3VtZW50TWFwID0gdG9rZW5Ub1VpZFRvRG9jdW1lbnRNYXBbdG9rZW5dOyAvLyBTaG9ydCBjaXJjdWl0IGlmIG5vIG1hdGNoZXMgd2VyZSBmb3VuZCBmb3IgYW55IGdpdmVuIHRva2VuLlxuXG4gICAgICBpZiAoIWRvY3VtZW50TWFwKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkb2N1bWVudE1hcCk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG51bUtleXMgPSBrZXlzLmxlbmd0aDsgaiA8IG51bUtleXM7IGorKykge1xuICAgICAgICAgIHZhciB1aWQgPSBrZXlzW2pdO1xuICAgICAgICAgIGludGVyc2VjdGluZ0RvY3VtZW50TWFwW3VpZF0gPSBkb2N1bWVudE1hcFt1aWRdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGludGVyc2VjdGluZ0RvY3VtZW50TWFwKTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMCwgbnVtS2V5cyA9IGtleXMubGVuZ3RoOyBqIDwgbnVtS2V5czsgaisrKSB7XG4gICAgICAgICAgdmFyIHVpZCA9IGtleXNbal07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50TWFwW3VpZF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkZWxldGUgaW50ZXJzZWN0aW5nRG9jdW1lbnRNYXBbdWlkXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGludGVyc2VjdGluZ0RvY3VtZW50TWFwKTtcbiAgICB2YXIgZG9jdW1lbnRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbnVtS2V5cyA9IGtleXMubGVuZ3RoOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICB2YXIgdWlkID0ga2V5c1tpXTtcbiAgICAgIGRvY3VtZW50cy5wdXNoKGludGVyc2VjdGluZ0RvY3VtZW50TWFwW3VpZF0pO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudHM7XG4gIH07XG5cbiAgcmV0dXJuIFVub3JkZXJlZFNlYXJjaEluZGV4O1xufSgpO1xuXG52YXIgUkVHRVggPSAvW15hLXrQsC3Rj9GRMC05XFwtJ10rL2k7XG4vKipcbiAqIFNpbXBsZSB0b2tlbml6ZXIgdGhhdCBzcGxpdHMgc3RyaW5ncyBvbiB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIG5vbi1lbXB0eSBzdWJzdHJpbmdzLlxuICovXG5cbnZhciBTaW1wbGVUb2tlbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaW1wbGVUb2tlbml6ZXIoKSB7fVxuXG4gIHZhciBfcHJvdG8gPSBTaW1wbGVUb2tlbml6ZXIucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY3NcbiAgICovXG4gIF9wcm90by50b2tlbml6ZSA9IGZ1bmN0aW9uIHRva2VuaXplKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC5zcGxpdChSRUdFWCkuZmlsdGVyKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9IC8vIEZpbHRlciBlbXB0eSB0b2tlbnNcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTaW1wbGVUb2tlbml6ZXI7XG59KCk7XG5cbi8qKlxuICogU3RlbW1pbmcgaXMgdGhlIHByb2Nlc3Mgb2YgcmVkdWNpbmcgc2VhcmNoIHRva2VucyB0byB0aGVpciByb290IChvciBzdGVtKSBzbyB0aGF0IHNlYXJjaGVzIGZvciBkaWZmZXJlbnQgZm9ybXMgb2YgYVxuICogd29yZCB3aWxsIG1hdGNoLiBGb3IgZXhhbXBsZSBcInNlYXJjaFwiLCBcInNlYXJjaGluZ1wiIGFuZCBcInNlYXJjaGVkXCIgYXJlIGFsbCByZWR1Y2VkIHRvIHRoZSBzdGVtIFwic2VhcmNoXCIuXG4gKlxuICogPHA+VGhpcyBzdGVtbWluZyB0b2tlbml6ZXIgY29udmVydHMgdG9rZW5zICh3b3JkcykgdG8gdGhlaXIgc3RlbSBmb3JtcyBiZWZvcmUgcmV0dXJuaW5nIHRoZW0uIEl0IHJlcXVpcmVzIGFuXG4gKiBleHRlcm5hbCBzdGVtbWluZyBmdW5jdGlvbiB0byBiZSBwcm92aWRlZDsgZm9yIHRoaXMgcHVycG9zZSBJIHJlY29tbWVuZCB0aGUgTlBNICdwb3J0ZXItc3RlbW1lcicgbGlicmFyeS5cbiAqXG4gKiA8cD5Gb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgaHR0cCA6IC8vdGFydGFydXMub3JnL35tYXJ0aW4vUG9ydGVyU3RlbW1lci9cbiAqL1xudmFyIFN0ZW1taW5nVG9rZW5pemVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0gc3RlbW1pbmdGdW5jdGlvbiBGdW5jdGlvbiBjYXBhYmxlIG9mIGFjY2VwdGluZyBhIHdvcmQgYW5kIHJldHVybmluZyBpdHMgc3RlbS5cbiAgICogQHBhcmFtIGRlY29yYXRlZEluZGV4U3RyYXRlZ3kgSW5kZXggc3RyYXRlZ3kgdG8gYmUgcnVuIGFmdGVyIGFsbCBzdG9wIHdvcmRzIGhhdmUgYmVlbiByZW1vdmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gU3RlbW1pbmdUb2tlbml6ZXIoc3RlbW1pbmdGdW5jdGlvbiwgZGVjb3JhdGVkVG9rZW5pemVyKSB7XG4gICAgdGhpcy5fc3RlbW1pbmdGdW5jdGlvbiA9IHN0ZW1taW5nRnVuY3Rpb247XG4gICAgdGhpcy5fdG9rZW5pemVyID0gZGVjb3JhdGVkVG9rZW5pemVyO1xuICB9XG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY3NcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gU3RlbW1pbmdUb2tlbml6ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2tlbml6ZSA9IGZ1bmN0aW9uIHRva2VuaXplKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW5pemVyLnRva2VuaXplKHRleHQpLm1hcCh0aGlzLl9zdGVtbWluZ0Z1bmN0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gU3RlbW1pbmdUb2tlbml6ZXI7XG59KCk7XG5cbi8qKlxuICogU3RvcCB3b3JkcyBsaXN0IGNvcGllZCBmcm9tIEx1bnIgSlMuXG4gKi9cbnZhciBTdG9wV29yZHNNYXAgPSB7XG4gIGE6IHRydWUsXG4gIGFibGU6IHRydWUsXG4gIGFib3V0OiB0cnVlLFxuICBhY3Jvc3M6IHRydWUsXG4gIGFmdGVyOiB0cnVlLFxuICBhbGw6IHRydWUsXG4gIGFsbW9zdDogdHJ1ZSxcbiAgYWxzbzogdHJ1ZSxcbiAgYW06IHRydWUsXG4gIGFtb25nOiB0cnVlLFxuICBhbjogdHJ1ZSxcbiAgYW5kOiB0cnVlLFxuICBhbnk6IHRydWUsXG4gIGFyZTogdHJ1ZSxcbiAgYXM6IHRydWUsXG4gIGF0OiB0cnVlLFxuICBiZTogdHJ1ZSxcbiAgYmVjYXVzZTogdHJ1ZSxcbiAgYmVlbjogdHJ1ZSxcbiAgYnV0OiB0cnVlLFxuICBieTogdHJ1ZSxcbiAgY2FuOiB0cnVlLFxuICBjYW5ub3Q6IHRydWUsXG4gIGNvdWxkOiB0cnVlLFxuICBkZWFyOiB0cnVlLFxuICBkaWQ6IHRydWUsXG4gICdkbyc6IHRydWUsXG4gIGRvZXM6IHRydWUsXG4gIGVpdGhlcjogdHJ1ZSxcbiAgJ2Vsc2UnOiB0cnVlLFxuICBldmVyOiB0cnVlLFxuICBldmVyeTogdHJ1ZSxcbiAgJ2Zvcic6IHRydWUsXG4gIGZyb206IHRydWUsXG4gICdnZXQnOiB0cnVlLFxuICBnb3Q6IHRydWUsXG4gIGhhZDogdHJ1ZSxcbiAgaGFzOiB0cnVlLFxuICBoYXZlOiB0cnVlLFxuICBoZTogdHJ1ZSxcbiAgaGVyOiB0cnVlLFxuICBoZXJzOiB0cnVlLFxuICBoaW06IHRydWUsXG4gIGhpczogdHJ1ZSxcbiAgaG93OiB0cnVlLFxuICBob3dldmVyOiB0cnVlLFxuICBpOiB0cnVlLFxuICAnaWYnOiB0cnVlLFxuICAnaW4nOiB0cnVlLFxuICBpbnRvOiB0cnVlLFxuICBpczogdHJ1ZSxcbiAgaXQ6IHRydWUsXG4gIGl0czogdHJ1ZSxcbiAganVzdDogdHJ1ZSxcbiAgbGVhc3Q6IHRydWUsXG4gIFwibGV0XCI6IHRydWUsXG4gIGxpa2U6IHRydWUsXG4gIGxpa2VseTogdHJ1ZSxcbiAgbWF5OiB0cnVlLFxuICBtZTogdHJ1ZSxcbiAgbWlnaHQ6IHRydWUsXG4gIG1vc3Q6IHRydWUsXG4gIG11c3Q6IHRydWUsXG4gIG15OiB0cnVlLFxuICBuZWl0aGVyOiB0cnVlLFxuICBubzogdHJ1ZSxcbiAgbm9yOiB0cnVlLFxuICBub3Q6IHRydWUsXG4gIG9mOiB0cnVlLFxuICBvZmY6IHRydWUsXG4gIG9mdGVuOiB0cnVlLFxuICBvbjogdHJ1ZSxcbiAgb25seTogdHJ1ZSxcbiAgb3I6IHRydWUsXG4gIG90aGVyOiB0cnVlLFxuICBvdXI6IHRydWUsXG4gIG93bjogdHJ1ZSxcbiAgcmF0aGVyOiB0cnVlLFxuICBzYWlkOiB0cnVlLFxuICBzYXk6IHRydWUsXG4gIHNheXM6IHRydWUsXG4gIHNoZTogdHJ1ZSxcbiAgc2hvdWxkOiB0cnVlLFxuICBzaW5jZTogdHJ1ZSxcbiAgc286IHRydWUsXG4gIHNvbWU6IHRydWUsXG4gIHRoYW46IHRydWUsXG4gIHRoYXQ6IHRydWUsXG4gIHRoZTogdHJ1ZSxcbiAgdGhlaXI6IHRydWUsXG4gIHRoZW06IHRydWUsXG4gIHRoZW46IHRydWUsXG4gIHRoZXJlOiB0cnVlLFxuICB0aGVzZTogdHJ1ZSxcbiAgdGhleTogdHJ1ZSxcbiAgJ3RoaXMnOiB0cnVlLFxuICB0aXM6IHRydWUsXG4gIHRvOiB0cnVlLFxuICB0b286IHRydWUsXG4gIHR3YXM6IHRydWUsXG4gIHVzOiB0cnVlLFxuICB3YW50czogdHJ1ZSxcbiAgd2FzOiB0cnVlLFxuICB3ZTogdHJ1ZSxcbiAgd2VyZTogdHJ1ZSxcbiAgd2hhdDogdHJ1ZSxcbiAgd2hlbjogdHJ1ZSxcbiAgd2hlcmU6IHRydWUsXG4gIHdoaWNoOiB0cnVlLFxuICAnd2hpbGUnOiB0cnVlLFxuICB3aG86IHRydWUsXG4gIHdob206IHRydWUsXG4gIHdoeTogdHJ1ZSxcbiAgd2lsbDogdHJ1ZSxcbiAgJ3dpdGgnOiB0cnVlLFxuICB3b3VsZDogdHJ1ZSxcbiAgeWV0OiB0cnVlLFxuICB5b3U6IHRydWUsXG4gIHlvdXI6IHRydWVcbn07IC8vIFByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIGZvciBpbmhlcml0ZWQgcHJvcGVydGllc1xuXG5TdG9wV29yZHNNYXAuY29uc3RydWN0b3IgPSBmYWxzZTtcblN0b3BXb3Jkc01hcC5oYXNPd25Qcm9wZXJ0eSA9IGZhbHNlO1xuU3RvcFdvcmRzTWFwLmlzUHJvdG90eXBlT2YgPSBmYWxzZTtcblN0b3BXb3Jkc01hcC5wcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZhbHNlO1xuU3RvcFdvcmRzTWFwLnRvTG9jYWxlU3RyaW5nID0gZmFsc2U7XG5TdG9wV29yZHNNYXAudG9TdHJpbmcgPSBmYWxzZTtcblN0b3BXb3Jkc01hcC52YWx1ZU9mID0gZmFsc2U7XG5cbi8qKlxuICogU3RvcCB3b3JkcyBhcmUgdmVyeSBjb21tb24gKGUuZy4gXCJhXCIsIFwiYW5kXCIsIFwidGhlXCIpIGFuZCBhcmUgb2Z0ZW4gbm90IHNlbWFudGljYWxseSBtZWFuaW5nZnVsIGluIHRoZSBjb250ZXh0IG9mIGFcbiAqIHNlYXJjaC4gVGhpcyB0b2tlbml6ZXIgcmVtb3ZlcyBzdG9wIHdvcmRzIGZyb20gYSBzZXQgb2YgdG9rZW5zIGJlZm9yZSBwYXNzaW5nIHRoZSByZW1haW5pbmcgdG9rZW5zIGFsb25nIGZvclxuICogaW5kZXhpbmcgb3Igc2VhcmNoaW5nIHB1cnBvc2VzLlxuICovXG5cbnZhciBTdG9wV29yZHNUb2tlbml6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBkZWNvcmF0ZWRJbmRleFN0cmF0ZWd5IEluZGV4IHN0cmF0ZWd5IHRvIGJlIHJ1biBhZnRlciBhbGwgc3RvcCB3b3JkcyBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFN0b3BXb3Jkc1Rva2VuaXplcihkZWNvcmF0ZWRUb2tlbml6ZXIpIHtcbiAgICB0aGlzLl90b2tlbml6ZXIgPSBkZWNvcmF0ZWRUb2tlbml6ZXI7XG4gIH1cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jc1xuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBTdG9wV29yZHNUb2tlbml6ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2tlbml6ZSA9IGZ1bmN0aW9uIHRva2VuaXplKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW5pemVyLnRva2VuaXplKHRleHQpLmZpbHRlcihmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIHJldHVybiAhU3RvcFdvcmRzTWFwW3Rva2VuXTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gU3RvcFdvcmRzVG9rZW5pemVyO1xufSgpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbi8qKlxuICogU2ltcGxlIGNsaWVudC1zaWRlIHNlYXJjaGluZyB3aXRoaW4gYSBzZXQgb2YgZG9jdW1lbnRzLlxuICpcbiAqIDxwPkRvY3VtZW50cyBjYW4gYmUgc2VhcmNoZWQgYnkgYW55IG51bWJlciBvZiBmaWVsZHMuIEluZGV4aW5nIGFuZCBzZWFyY2ggc3RyYXRlZ2llcyBhcmUgaGlnaGx5IGN1c3RvbWl6YWJsZS5cbiAqL1xudmFyIFNlYXJjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBBcnJheSBjb250YWluaW5nIGVpdGhlciBhIHByb3BlcnR5IG5hbWUgb3IgYSBwYXRoIChsaXN0IG9mIHByb3BlcnR5IG5hbWVzKSB0byBhIG5lc3RlZCB2YWx1ZVxuICAgKi9cblxuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSB1aWRGaWVsZE5hbWUgRmllbGQgY29udGFpbmluZyB2YWx1ZXMgdGhhdCB1bmlxdWVseSBpZGVudGlmeSBzZWFyY2ggZG9jdW1lbnRzOyB0aGlzIGZpZWxkJ3MgdmFsdWVzIGFyZSB1c2VkXG4gICAqICAgICAgICAgICAgICAgICAgICAgdG8gZW5zdXJlIHRoYXQgYSBzZWFyY2ggcmVzdWx0IHNldCBkb2VzIG5vdCBjb250YWluIGR1cGxpY2F0ZSBvYmplY3RzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2VhcmNoKHVpZEZpZWxkTmFtZSkge1xuICAgIGlmICghdWlkRmllbGROYW1lKSB7XG4gICAgICB0aHJvdyBFcnJvcignanMtc2VhcmNoIHJlcXVpcmVzIGEgdWlkIGZpZWxkIG5hbWUgY29uc3RydWN0b3IgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdWlkRmllbGROYW1lID0gdWlkRmllbGROYW1lOyAvLyBTZXQgZGVmYXVsdC9yZWNvbW1lbmRlZCBzdHJhdGVnaWVzXG5cbiAgICB0aGlzLl9pbmRleFN0cmF0ZWd5ID0gbmV3IFByZWZpeEluZGV4U3RyYXRlZ3koKTtcbiAgICB0aGlzLl9zZWFyY2hJbmRleCA9IG5ldyBUZklkZlNlYXJjaEluZGV4KHVpZEZpZWxkTmFtZSk7XG4gICAgdGhpcy5fc2FuaXRpemVyID0gbmV3IExvd2VyQ2FzZVNhbml0aXplcigpO1xuICAgIHRoaXMuX3Rva2VuaXplciA9IG5ldyBTaW1wbGVUb2tlbml6ZXIoKTtcbiAgICB0aGlzLl9kb2N1bWVudHMgPSBbXTtcbiAgICB0aGlzLl9zZWFyY2hhYmxlRmllbGRzID0gW107XG4gIH1cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGluZGV4IHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0gdmFsdWUgQ3VzdG9tIGluZGV4IHN0cmF0ZWd5XG4gICAqIEB0aHJvd3MgRXJyb3IgaWYgZG9jdW1lbnRzIGhhdmUgYWxyZWFkeSBiZWVuIGluZGV4ZWQgYnkgdGhpcyBzZWFyY2ggaW5zdGFuY2VcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gU2VhcmNoLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQWRkIGEgc2VhcmNoYWJsZSBkb2N1bWVudCB0byB0aGUgaW5kZXguIERvY3VtZW50IHdpbGwgYXV0b21hdGljYWxseSBiZSBpbmRleGVkIGZvciBzZWFyY2guXG4gICAqIEBwYXJhbSBkb2N1bWVudFxuICAgKi9cbiAgX3Byb3RvLmFkZERvY3VtZW50ID0gZnVuY3Rpb24gYWRkRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICB0aGlzLmFkZERvY3VtZW50cyhbZG9jdW1lbnRdKTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBzZWFyY2hhYmxlIGRvY3VtZW50cyB0byB0aGUgaW5kZXguIERvY3VtZW50cyB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgaW5kZXhlZCBmb3Igc2VhcmNoLlxuICAgKiBAcGFyYW0gZG9jdW1lbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkRG9jdW1lbnRzID0gZnVuY3Rpb24gYWRkRG9jdW1lbnRzKGRvY3VtZW50cykge1xuICAgIHRoaXMuX2RvY3VtZW50cyA9IHRoaXMuX2RvY3VtZW50cy5jb25jYXQoZG9jdW1lbnRzKTtcbiAgICB0aGlzLmluZGV4RG9jdW1lbnRzXyhkb2N1bWVudHMsIHRoaXMuX3NlYXJjaGFibGVGaWVsZHMpO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgc2VhcmNoYWJsZSBmaWVsZCB0byB0aGUgaW5kZXguIEV4aXN0aW5nIGRvY3VtZW50cyB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgaW5kZXhlZCB1c2luZyB0aGlzIG5ldyBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFtIGZpZWxkIFNlYXJjaGFibGUgZmllbGQgb3IgZmllbGQgcGF0aC4gUGFzcyBhIHN0cmluZyB0byBpbmRleCBhIHRvcC1sZXZlbCBmaWVsZCBhbmQgYW4gYXJyYXkgb2Ygc3RyaW5ncyBmb3IgbmVzdGVkIGZpZWxkcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkSW5kZXggPSBmdW5jdGlvbiBhZGRJbmRleChmaWVsZCkge1xuICAgIHRoaXMuX3NlYXJjaGFibGVGaWVsZHMucHVzaChmaWVsZCk7XG5cbiAgICB0aGlzLmluZGV4RG9jdW1lbnRzXyh0aGlzLl9kb2N1bWVudHMsIFtmaWVsZF0pO1xuICB9XG4gIC8qKlxuICAgKiBTZWFyY2ggYWxsIGRvY3VtZW50cyBmb3Igb25lcyBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHF1ZXJ5IHRleHQuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcmV0dXJucyB7QXJyYXk8T2JqZWN0Pn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKHF1ZXJ5KSB7XG4gICAgdmFyIHRva2VucyA9IHRoaXMuX3Rva2VuaXplci50b2tlbml6ZSh0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUocXVlcnkpKTtcblxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hJbmRleC5zZWFyY2godG9rZW5zLCB0aGlzLl9kb2N1bWVudHMpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gZG9jdW1lbnRzXG4gICAqIEBwYXJhbSBfc2VhcmNoYWJsZUZpZWxkcyBBcnJheSBjb250YWluaW5nIHByb3BlcnR5IG5hbWVzIGFuZCBwYXRocyAobGlzdHMgb2YgcHJvcGVydHkgbmFtZXMpIHRvIG5lc3RlZCB2YWx1ZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhEb2N1bWVudHNfID0gZnVuY3Rpb24gaW5kZXhEb2N1bWVudHNfKGRvY3VtZW50cywgX3NlYXJjaGFibGVGaWVsZHMpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdmFyIGluZGV4U3RyYXRlZ3kgPSB0aGlzLl9pbmRleFN0cmF0ZWd5O1xuICAgIHZhciBzYW5pdGl6ZXIgPSB0aGlzLl9zYW5pdGl6ZXI7XG4gICAgdmFyIHNlYXJjaEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXg7XG4gICAgdmFyIHRva2VuaXplciA9IHRoaXMuX3Rva2VuaXplcjtcbiAgICB2YXIgdWlkRmllbGROYW1lID0gdGhpcy5fdWlkRmllbGROYW1lO1xuXG4gICAgZm9yICh2YXIgZGkgPSAwLCBudW1Eb2N1bWVudHMgPSBkb2N1bWVudHMubGVuZ3RoOyBkaSA8IG51bURvY3VtZW50czsgZGkrKykge1xuICAgICAgdmFyIGRvYyA9IGRvY3VtZW50c1tkaV07XG4gICAgICB2YXIgdWlkO1xuXG4gICAgICBpZiAodWlkRmllbGROYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdWlkID0gZ2V0TmVzdGVkRmllbGRWYWx1ZShkb2MsIHVpZEZpZWxkTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1aWQgPSBkb2NbdWlkRmllbGROYW1lXTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgc2ZpID0gMCwgbnVtU2VhcmNoYWJsZUZpZWxkcyA9IF9zZWFyY2hhYmxlRmllbGRzLmxlbmd0aDsgc2ZpIDwgbnVtU2VhcmNoYWJsZUZpZWxkczsgc2ZpKyspIHtcbiAgICAgICAgdmFyIGZpZWxkVmFsdWU7XG4gICAgICAgIHZhciBzZWFyY2hhYmxlRmllbGQgPSBfc2VhcmNoYWJsZUZpZWxkc1tzZmldO1xuXG4gICAgICAgIGlmIChzZWFyY2hhYmxlRmllbGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGZpZWxkVmFsdWUgPSBnZXROZXN0ZWRGaWVsZFZhbHVlKGRvYywgc2VhcmNoYWJsZUZpZWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZFZhbHVlID0gZG9jW3NlYXJjaGFibGVGaWVsZF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBmaWVsZFZhbHVlICE9PSAnc3RyaW5nJyAmJiBmaWVsZFZhbHVlLnRvU3RyaW5nKSB7XG4gICAgICAgICAgZmllbGRWYWx1ZSA9IGZpZWxkVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YXIgZmllbGRUb2tlbnMgPSB0b2tlbml6ZXIudG9rZW5pemUoc2FuaXRpemVyLnNhbml0aXplKGZpZWxkVmFsdWUpKTtcblxuICAgICAgICAgIGZvciAodmFyIGZ0aSA9IDAsIG51bUZpZWxkVmFsdWVzID0gZmllbGRUb2tlbnMubGVuZ3RoOyBmdGkgPCBudW1GaWVsZFZhbHVlczsgZnRpKyspIHtcbiAgICAgICAgICAgIHZhciBmaWVsZFRva2VuID0gZmllbGRUb2tlbnNbZnRpXTtcbiAgICAgICAgICAgIHZhciBleHBhbmRlZFRva2VucyA9IGluZGV4U3RyYXRlZ3kuZXhwYW5kVG9rZW4oZmllbGRUb2tlbik7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGV0aSA9IDAsIG51bW1FeHBhbmRlZFRva2VucyA9IGV4cGFuZGVkVG9rZW5zLmxlbmd0aDsgZXRpIDwgbnVtbUV4cGFuZGVkVG9rZW5zOyBldGkrKykge1xuICAgICAgICAgICAgICB2YXIgZXhwYW5kZWRUb2tlbiA9IGV4cGFuZGVkVG9rZW5zW2V0aV07XG4gICAgICAgICAgICAgIHNlYXJjaEluZGV4LmluZGV4RG9jdW1lbnQoZXhwYW5kZWRUb2tlbiwgdWlkLCBkb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU2VhcmNoLCBbe1xuICAgIGtleTogXCJpbmRleFN0cmF0ZWd5XCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICB0aHJvdyBFcnJvcignSUluZGV4U3RyYXRlZ3kgY2Fubm90IGJlIHNldCBhZnRlciBpbml0aWFsaXphdGlvbicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbmRleFN0cmF0ZWd5ID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbmRleFN0cmF0ZWd5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IHNhbml0aXppbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHZhbHVlIEN1c3RvbSB0ZXh0IHNhbml0aXppbmcgc3RyYXRlZ3lcbiAgICAgKiBAdGhyb3dzIEVycm9yIGlmIGRvY3VtZW50cyBoYXZlIGFscmVhZHkgYmVlbiBpbmRleGVkIGJ5IHRoaXMgc2VhcmNoIGluc3RhbmNlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzYW5pdGl6ZXJcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdJU2FuaXRpemVyIGNhbm5vdCBiZSBzZXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2FuaXRpemVyID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHNlYXJjaCBpbmRleCBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgQ3VzdG9tIHNlYXJjaCBpbmRleCBzdHJhdGVneVxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgZG9jdW1lbnRzIGhhdmUgYWxyZWFkeSBiZWVuIGluZGV4ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlYXJjaEluZGV4XCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICB0aHJvdyBFcnJvcignSVNlYXJjaEluZGV4IGNhbm5vdCBiZSBzZXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VhcmNoSW5kZXggPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaEluZGV4O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IHRva2VuaXppbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHZhbHVlIEN1c3RvbSB0ZXh0IHRva2VuaXppbmcgc3RyYXRlZ3lcbiAgICAgKiBAdGhyb3dzIEVycm9yIGlmIGRvY3VtZW50cyBoYXZlIGFscmVhZHkgYmVlbiBpbmRleGVkIGJ5IHRoaXMgc2VhcmNoIGluc3RhbmNlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0b2tlbml6ZXJcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdJVG9rZW5pemVyIGNhbm5vdCBiZSBzZXQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdG9rZW5pemVyID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90b2tlbml6ZXI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0oKTtcblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGlnaGxpZ2h0cyB0aGUgb2NjdXJyZW5jZXMgb2YgdG9rZW5zIHdpdGhpbiBhIHN0cmluZyBvZiB0ZXh0LiBJdCBjYW4gYmUgdXNlZCB0byBnaXZlIHZpc3VhbCBpbmRpY2F0b3JzXG4gKiBvZiBtYXRjaCBjcml0ZXJpYSB3aXRoaW4gc2VhcmNoYWJsZSBmaWVsZHMuXG4gKlxuICogPHA+Rm9yIHBlcmZvcm1hbmNlIHB1cnBvc2VzIHRoaXMgaGlnaGxpZ2h0ZXIgb25seSB3b3JrcyB3aXRoIGZ1bGwtd29yZCBvciBwcmVmaXggdG9rZW4gaW5kZXhlcy5cbiAqL1xudmFyIFRva2VuSGlnaGxpZ2h0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRfaW5kZXhTdHJhdGVneSBJbmRleCBzdHJhdGVneSB1c2VkIGJ5IFNlYXJjaFxuICAgKiBAcGFyYW0gb3B0X3Nhbml0aXplciBTYW5pdGl6ZXIgdXNlZCBieSBTZWFyY2hcbiAgICogQHBhcmFtIG9wdF93cmFwcGVyVGFnTmFtZSBPcHRpb25hbCB3cmFwcGVyIHRhZyBuYW1lOyBkZWZhdWx0cyB0byAnbWFyaycgKGUuZy4gPG1hcms+KVxuICAgKi9cbiAgZnVuY3Rpb24gVG9rZW5IaWdobGlnaHRlcihvcHRfaW5kZXhTdHJhdGVneSwgb3B0X3Nhbml0aXplciwgb3B0X3dyYXBwZXJUYWdOYW1lKSB7XG4gICAgdGhpcy5faW5kZXhTdHJhdGVneSA9IG9wdF9pbmRleFN0cmF0ZWd5IHx8IG5ldyBQcmVmaXhJbmRleFN0cmF0ZWd5KCk7XG4gICAgdGhpcy5fc2FuaXRpemVyID0gb3B0X3Nhbml0aXplciB8fCBuZXcgTG93ZXJDYXNlU2FuaXRpemVyKCk7XG4gICAgdGhpcy5fd3JhcHBlclRhZ05hbWUgPSBvcHRfd3JhcHBlclRhZ05hbWUgfHwgJ21hcmsnO1xuICB9XG4gIC8qKlxuICAgKiBIaWdobGlnaHRzIHRva2VuIG9jY3VycmVuY2VzIHdpdGhpbiBhIHN0cmluZyBieSB3cmFwcGluZyB0aGVtIHdpdGggYSBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHRleHQgZS5nLiBcImpvaG4gd2F5bmVcIlxuICAgKiBAcGFyYW0gdG9rZW5zIGUuZy4gW1wid2FcIl1cbiAgICogQHJldHVybnMge3N0cmluZ30gZS5nLiBcImpvaG4gPG1hcms+d2E8L21hcms+eW5lXCJcbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gVG9rZW5IaWdobGlnaHRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhpZ2hsaWdodCA9IGZ1bmN0aW9uIGhpZ2hsaWdodCh0ZXh0LCB0b2tlbnMpIHtcbiAgICB2YXIgdGFnc0xlbmd0aCA9IHRoaXMuX3dyYXBUZXh0KCcnKS5sZW5ndGg7XG5cbiAgICB2YXIgdG9rZW5EaWN0aW9uYXJ5ID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gQ3JlYXRlIGEgdG9rZW4gbWFwIGZvciBlYXNpZXIgbG9va3VwIGJlbG93LlxuXG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKHRva2Vuc1tpXSk7XG5cbiAgICAgIHZhciBleHBhbmRlZFRva2VucyA9IHRoaXMuX2luZGV4U3RyYXRlZ3kuZXhwYW5kVG9rZW4odG9rZW4pO1xuXG4gICAgICBmb3IgKHZhciBqID0gMCwgbnVtRXhwYW5kZWRUb2tlbnMgPSBleHBhbmRlZFRva2Vucy5sZW5ndGg7IGogPCBudW1FeHBhbmRlZFRva2VuczsgaisrKSB7XG4gICAgICAgIHZhciBleHBhbmRlZFRva2VuID0gZXhwYW5kZWRUb2tlbnNbal07XG5cbiAgICAgICAgaWYgKCF0b2tlbkRpY3Rpb25hcnlbZXhwYW5kZWRUb2tlbl0pIHtcbiAgICAgICAgICB0b2tlbkRpY3Rpb25hcnlbZXhwYW5kZWRUb2tlbl0gPSBbdG9rZW5dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRva2VuRGljdGlvbmFyeVtleHBhbmRlZFRva2VuXS5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gVHJhY2sgYWN0dWFsQ3VycmVudFdvcmQgYW5kIHNhbml0aXplZEN1cnJlbnRXb3JkIHNlcGFyYXRlbHkgaW4gY2FzZSB3ZSBlbmNvdW50ZXIgbmVzdGVkIHRhZ3MuXG5cblxuICAgIHZhciBhY3R1YWxDdXJyZW50V29yZCA9ICcnO1xuICAgIHZhciBzYW5pdGl6ZWRDdXJyZW50V29yZCA9ICcnO1xuICAgIHZhciBjdXJyZW50V29yZFN0YXJ0SW5kZXggPSAwOyAvLyBOb3RlIHRoaXMgYXNzdW1lcyBlaXRoZXIgcHJlZml4IG9yIGZ1bGwgd29yZCBtYXRjaGluZy5cblxuICAgIGZvciAodmFyIGkgPSAwLCB0ZXh0TGVuZ3RoID0gdGV4dC5sZW5ndGg7IGkgPCB0ZXh0TGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGFyYWN0ZXIgPSB0ZXh0LmNoYXJBdChpKTtcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJyAnKSB7XG4gICAgICAgIGFjdHVhbEN1cnJlbnRXb3JkID0gJyc7XG4gICAgICAgIHNhbml0aXplZEN1cnJlbnRXb3JkID0gJyc7XG4gICAgICAgIGN1cnJlbnRXb3JkU3RhcnRJbmRleCA9IGkgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0dWFsQ3VycmVudFdvcmQgKz0gY2hhcmFjdGVyO1xuICAgICAgICBzYW5pdGl6ZWRDdXJyZW50V29yZCArPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoY2hhcmFjdGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuRGljdGlvbmFyeVtzYW5pdGl6ZWRDdXJyZW50V29yZF0gJiYgdG9rZW5EaWN0aW9uYXJ5W3Nhbml0aXplZEN1cnJlbnRXb3JkXS5pbmRleE9mKHNhbml0aXplZEN1cnJlbnRXb3JkKSA+PSAwKSB7XG4gICAgICAgIGFjdHVhbEN1cnJlbnRXb3JkID0gdGhpcy5fd3JhcFRleHQoYWN0dWFsQ3VycmVudFdvcmQpO1xuICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudFdvcmRTdGFydEluZGV4KSArIGFjdHVhbEN1cnJlbnRXb3JkICsgdGV4dC5zdWJzdHJpbmcoaSArIDEpO1xuICAgICAgICBpICs9IHRhZ3NMZW5ndGg7XG4gICAgICAgIHRleHRMZW5ndGggKz0gdGFnc0xlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHRleHQgdG8gd3JhcFxuICAgKiBAcmV0dXJucyBUZXh0IHdyYXBwZWQgYnkgd3JhcHBlciB0YWcgKGUuZy4gXCJmb29cIiBiZWNvbWVzIFwiPG1hcms+Zm9vPC9tYXJrPlwiKVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fd3JhcFRleHQgPSBmdW5jdGlvbiBfd3JhcFRleHQodGV4dCkge1xuICAgIHZhciB0YWdOYW1lID0gdGhpcy5fd3JhcHBlclRhZ05hbWU7XG4gICAgcmV0dXJuIFwiPFwiICsgdGFnTmFtZSArIFwiPlwiICsgdGV4dCArIFwiPC9cIiArIHRhZ05hbWUgKyBcIj5cIjtcbiAgfTtcblxuICByZXR1cm4gVG9rZW5IaWdobGlnaHRlcjtcbn0oKTtcblxuZXhwb3J0IHsgQWxsU3Vic3RyaW5nc0luZGV4U3RyYXRlZ3ksIENhc2VTZW5zaXRpdmVTYW5pdGl6ZXIsIEV4YWN0V29yZEluZGV4U3RyYXRlZ3ksIExvd2VyQ2FzZVNhbml0aXplciwgUHJlZml4SW5kZXhTdHJhdGVneSwgU2VhcmNoLCBTaW1wbGVUb2tlbml6ZXIsIFN0ZW1taW5nVG9rZW5pemVyLCBTdG9wV29yZHNNYXAsIFN0b3BXb3Jkc1Rva2VuaXplciwgVGZJZGZTZWFyY2hJbmRleCwgVG9rZW5IaWdobGlnaHRlciwgVW5vcmRlcmVkU2VhcmNoSW5kZXggfTtcbiIsIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcblx0dmFyIGxhenlTaXplcyA9IGZhY3Rvcnkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQsIERhdGUpO1xuXHR3aW5kb3cubGF6eVNpemVzID0gbGF6eVNpemVzO1xuXHRpZih0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGxhenlTaXplcztcblx0fVxufSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID9cbiAgICAgIHdpbmRvdyA6IHt9LCBcbi8qKlxuICogaW1wb3J0KFwiLi90eXBlcy9nbG9iYWxcIilcbiAqIEB0eXBlZGVmIHsgaW1wb3J0KFwiLi90eXBlcy9sYXp5c2l6ZXMtY29uZmlnXCIpLkxhenlTaXplc0NvbmZpZ1BhcnRpYWwgfSBMYXp5U2l6ZXNDb25maWdQYXJ0aWFsXG4gKi9cbmZ1bmN0aW9uIGwod2luZG93LCBkb2N1bWVudCwgRGF0ZSkgeyAvLyBQYXNzIGluIHRoZSB3aW5kb3cgRGF0ZSBmdW5jdGlvbiBhbHNvIGZvciBTU1IgYmVjYXVzZSB0aGUgRGF0ZSBjbGFzcyBjYW4gYmUgbG9zdFxuXHQndXNlIHN0cmljdCc7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cblx0dmFyIGxhenlzaXplcyxcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7IExhenlTaXplc0NvbmZpZ1BhcnRpYWwgfVxuXHRcdCAqL1xuXHRcdGxhenlTaXplc0NmZztcblxuXHQoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJvcDtcblxuXHRcdHZhciBsYXp5U2l6ZXNEZWZhdWx0cyA9IHtcblx0XHRcdGxhenlDbGFzczogJ2xhenlsb2FkJyxcblx0XHRcdGxvYWRlZENsYXNzOiAnbGF6eWxvYWRlZCcsXG5cdFx0XHRsb2FkaW5nQ2xhc3M6ICdsYXp5bG9hZGluZycsXG5cdFx0XHRwcmVsb2FkQ2xhc3M6ICdsYXp5cHJlbG9hZCcsXG5cdFx0XHRlcnJvckNsYXNzOiAnbGF6eWVycm9yJyxcblx0XHRcdC8vc3RyaWN0Q2xhc3M6ICdsYXp5c3RyaWN0Jyxcblx0XHRcdGF1dG9zaXplc0NsYXNzOiAnbGF6eWF1dG9zaXplcycsXG5cdFx0XHRmYXN0TG9hZGVkQ2xhc3M6ICdscy1pcy1jYWNoZWQnLFxuXHRcdFx0aWZyYW1lTG9hZE1vZGU6IDAsXG5cdFx0XHRzcmNBdHRyOiAnZGF0YS1zcmMnLFxuXHRcdFx0c3Jjc2V0QXR0cjogJ2RhdGEtc3Jjc2V0Jyxcblx0XHRcdHNpemVzQXR0cjogJ2RhdGEtc2l6ZXMnLFxuXHRcdFx0Ly9wcmVsb2FkQWZ0ZXJMb2FkOiBmYWxzZSxcblx0XHRcdG1pblNpemU6IDQwLFxuXHRcdFx0Y3VzdG9tTWVkaWE6IHt9LFxuXHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdGV4cEZhY3RvcjogMS41LFxuXHRcdFx0aEZhYzogMC44LFxuXHRcdFx0bG9hZE1vZGU6IDIsXG5cdFx0XHRsb2FkSGlkZGVuOiB0cnVlLFxuXHRcdFx0cmljVGltZW91dDogMCxcblx0XHRcdHRocm90dGxlRGVsYXk6IDEyNSxcblx0XHR9O1xuXG5cdFx0bGF6eVNpemVzQ2ZnID0gd2luZG93LmxhenlTaXplc0NvbmZpZyB8fCB3aW5kb3cubGF6eXNpemVzQ29uZmlnIHx8IHt9O1xuXG5cdFx0Zm9yKHByb3AgaW4gbGF6eVNpemVzRGVmYXVsdHMpe1xuXHRcdFx0aWYoIShwcm9wIGluIGxhenlTaXplc0NmZykpe1xuXHRcdFx0XHRsYXp5U2l6ZXNDZmdbcHJvcF0gPSBsYXp5U2l6ZXNEZWZhdWx0c1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG5cblx0aWYgKCFkb2N1bWVudCB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKSB7fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGUgeyBMYXp5U2l6ZXNDb25maWdQYXJ0aWFsIH1cblx0XHRcdCAqL1xuXHRcdFx0Y2ZnOiBsYXp5U2l6ZXNDZmcsXG5cdFx0XHQvKipcblx0XHRcdCAqIEB0eXBlIHsgdHJ1ZSB9XG5cdFx0XHQgKi9cblx0XHRcdG5vU3VwcG9ydDogdHJ1ZSxcblx0XHR9O1xuXHR9XG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblx0dmFyIHN1cHBvcnRQaWN0dXJlID0gd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHR2YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSAnYWRkRXZlbnRMaXN0ZW5lcic7XG5cblx0dmFyIF9nZXRBdHRyaWJ1dGUgPSAnZ2V0QXR0cmlidXRlJztcblxuXHQvKipcblx0ICogVXBkYXRlIHRvIGJpbmQgdG8gd2luZG93IGJlY2F1c2UgJ3RoaXMnIGJlY29tZXMgbnVsbCBkdXJpbmcgU1NSXG5cdCAqIGJ1aWxkcy5cblx0ICovXG5cdHZhciBhZGRFdmVudExpc3RlbmVyID0gd2luZG93W19hZGRFdmVudExpc3RlbmVyXS5iaW5kKHdpbmRvdyk7XG5cblx0dmFyIHNldFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dDtcblxuXHR2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0O1xuXG5cdHZhciByZXF1ZXN0SWRsZUNhbGxiYWNrID0gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5cblx0dmFyIHJlZ1BpY3R1cmUgPSAvXnBpY3R1cmUkL2k7XG5cblx0dmFyIGxvYWRFdmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InLCAnbGF6eWluY2x1ZGVkJywgJ19sYXp5bG9hZGVkJ107XG5cblx0dmFyIHJlZ0NsYXNzQ2FjaGUgPSB7fTtcblxuXHR2YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gZWxlIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gY2xzIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdGlmKCFyZWdDbGFzc0NhY2hlW2Nsc10pe1xuXHRcdFx0cmVnQ2xhc3NDYWNoZVtjbHNdID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnQ2xhc3NDYWNoZVtjbHNdLnRlc3QoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKSAmJiByZWdDbGFzc0NhY2hlW2Nsc107XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBlbGUge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSBjbHMge3N0cmluZ31cblx0ICovXG5cdHZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0aWYgKCFoYXNDbGFzcyhlbGUsIGNscykpe1xuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS50cmltKCkgKyAnICcgKyBjbHMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZSB7RWxlbWVudH1cblx0ICogQHBhcmFtIGNscyB7c3RyaW5nfVxuXHQgKi9cblx0dmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHR2YXIgcmVnO1xuXHRcdGlmICgocmVnID0gaGFzQ2xhc3MoZWxlLGNscykpKSB7XG5cdFx0XHRlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpLnJlcGxhY2UocmVnLCAnICcpKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIGFkZFJlbW92ZUxvYWRFdmVudHMgPSBmdW5jdGlvbihkb20sIGZuLCBhZGQpe1xuXHRcdHZhciBhY3Rpb24gPSBhZGQgPyBfYWRkRXZlbnRMaXN0ZW5lciA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblx0XHRpZihhZGQpe1xuXHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhkb20sIGZuKTtcblx0XHR9XG5cdFx0bG9hZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2dCl7XG5cdFx0XHRkb21bYWN0aW9uXShldnQsIGZuKTtcblx0XHR9KTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZW0geyBFbGVtZW50IH1cblx0ICogQHBhcmFtIG5hbWUgeyBzdHJpbmcgfVxuXHQgKiBAcGFyYW0gZGV0YWlsIHsgYW55IH1cblx0ICogQHBhcmFtIG5vQnViYmxlcyB7IGJvb2xlYW4gfVxuXHQgKiBAcGFyYW0gbm9DYW5jZWxhYmxlIHsgYm9vbGVhbiB9XG5cdCAqIEByZXR1cm5zIHsgQ3VzdG9tRXZlbnQgfVxuXHQgKi9cblx0dmFyIHRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uKGVsZW0sIG5hbWUsIGRldGFpbCwgbm9CdWJibGVzLCBub0NhbmNlbGFibGUpe1xuXHRcdHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXG5cdFx0aWYoIWRldGFpbCl7XG5cdFx0XHRkZXRhaWwgPSB7fTtcblx0XHR9XG5cblx0XHRkZXRhaWwuaW5zdGFuY2UgPSBsYXp5c2l6ZXM7XG5cblx0XHRldmVudC5pbml0RXZlbnQobmFtZSwgIW5vQnViYmxlcywgIW5vQ2FuY2VsYWJsZSk7XG5cblx0XHRldmVudC5kZXRhaWwgPSBkZXRhaWw7XG5cblx0XHRlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdHJldHVybiBldmVudDtcblx0fTtcblxuXHR2YXIgdXBkYXRlUG9seWZpbGwgPSBmdW5jdGlvbiAoZWwsIGZ1bGwpe1xuXHRcdHZhciBwb2x5ZmlsbDtcblx0XHRpZiggIXN1cHBvcnRQaWN0dXJlICYmICggcG9seWZpbGwgPSAod2luZG93LnBpY3R1cmVmaWxsIHx8IGxhenlTaXplc0NmZy5wZikgKSApe1xuXHRcdFx0aWYoZnVsbCAmJiBmdWxsLnNyYyAmJiAhZWxbX2dldEF0dHJpYnV0ZV0oJ3NyY3NldCcpKXtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBmdWxsLnNyYyk7XG5cdFx0XHR9XG5cdFx0XHRwb2x5ZmlsbCh7cmVldmFsdWF0ZTogdHJ1ZSwgZWxlbWVudHM6IFtlbF19KTtcblx0XHR9IGVsc2UgaWYoZnVsbCAmJiBmdWxsLnNyYyl7XG5cdFx0XHRlbC5zcmMgPSBmdWxsLnNyYztcblx0XHR9XG5cdH07XG5cblx0dmFyIGdldENTUyA9IGZ1bmN0aW9uIChlbGVtLCBzdHlsZSl7XG5cdFx0cmV0dXJuIChnZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpIHx8IHt9KVtzdHlsZV07XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBlbGVtIHsgRWxlbWVudCB9XG5cdCAqIEBwYXJhbSBwYXJlbnQgeyBFbGVtZW50IH1cblx0ICogQHBhcmFtIFt3aWR0aF0ge251bWJlcn1cblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdHZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uKGVsZW0sIHBhcmVudCwgd2lkdGgpe1xuXHRcdHdpZHRoID0gd2lkdGggfHwgZWxlbS5vZmZzZXRXaWR0aDtcblxuXHRcdHdoaWxlKHdpZHRoIDwgbGF6eVNpemVzQ2ZnLm1pblNpemUgJiYgcGFyZW50ICYmICFlbGVtLl9sYXp5c2l6ZXNXaWR0aCl7XG5cdFx0XHR3aWR0aCA9ICBwYXJlbnQub2Zmc2V0V2lkdGg7XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2lkdGg7XG5cdH07XG5cblx0dmFyIHJBRiA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBydW5uaW5nLCB3YWl0aW5nO1xuXHRcdHZhciBmaXJzdEZucyA9IFtdO1xuXHRcdHZhciBzZWNvbmRGbnMgPSBbXTtcblx0XHR2YXIgZm5zID0gZmlyc3RGbnM7XG5cblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBydW5GbnMgPSBmbnM7XG5cblx0XHRcdGZucyA9IGZpcnN0Rm5zLmxlbmd0aCA/IHNlY29uZEZucyA6IGZpcnN0Rm5zO1xuXG5cdFx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHdhaXRpbmcgPSBmYWxzZTtcblxuXHRcdFx0d2hpbGUocnVuRm5zLmxlbmd0aCl7XG5cdFx0XHRcdHJ1bkZucy5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0dmFyIHJhZkJhdGNoID0gZnVuY3Rpb24oZm4sIHF1ZXVlKXtcblx0XHRcdGlmKHJ1bm5pbmcgJiYgIXF1ZXVlKXtcblx0XHRcdFx0Zm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZucy5wdXNoKGZuKTtcblxuXHRcdFx0XHRpZighd2FpdGluZyl7XG5cdFx0XHRcdFx0d2FpdGluZyA9IHRydWU7XG5cdFx0XHRcdFx0KGRvY3VtZW50LmhpZGRlbiA/IHNldFRpbWVvdXQgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKHJ1bik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmFmQmF0Y2guX2xzRmx1c2ggPSBydW47XG5cblx0XHRyZXR1cm4gcmFmQmF0Y2g7XG5cdH0pKCk7XG5cblx0dmFyIHJBRkl0ID0gZnVuY3Rpb24oZm4sIHNpbXBsZSl7XG5cdFx0cmV0dXJuIHNpbXBsZSA/XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0ckFGKGZuKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblx0XHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Zm4uYXBwbHkodGhhdCwgYXJncyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdDtcblx0fTtcblxuXHR2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbihmbil7XG5cdFx0dmFyIHJ1bm5pbmc7XG5cdFx0dmFyIGxhc3RUaW1lID0gMDtcblx0XHR2YXIgZ0RlbGF5ID0gbGF6eVNpemVzQ2ZnLnRocm90dGxlRGVsYXk7XG5cdFx0dmFyIHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblx0XHRcdGZuKCk7XG5cdFx0fTtcblx0XHR2YXIgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjayAmJiBySUNUaW1lb3V0ID4gNDkgP1xuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0cmVxdWVzdElkbGVDYWxsYmFjayhydW4sIHt0aW1lb3V0OiBySUNUaW1lb3V0fSk7XG5cblx0XHRcdFx0aWYocklDVGltZW91dCAhPT0gbGF6eVNpemVzQ2ZnLnJpY1RpbWVvdXQpe1xuXHRcdFx0XHRcdHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcblx0XHRcdFx0fVxuXHRcdFx0fSA6XG5cdFx0XHRyQUZJdChmdW5jdGlvbigpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJ1bik7XG5cdFx0XHR9LCB0cnVlKVxuXHRcdDtcblxuXHRcdHJldHVybiBmdW5jdGlvbihpc1ByaW9yaXR5KXtcblx0XHRcdHZhciBkZWxheTtcblxuXHRcdFx0aWYoKGlzUHJpb3JpdHkgPSBpc1ByaW9yaXR5ID09PSB0cnVlKSl7XG5cdFx0XHRcdHJJQ1RpbWVvdXQgPSAzMztcblx0XHRcdH1cblxuXHRcdFx0aWYocnVubmluZyl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cnVubmluZyA9ICB0cnVlO1xuXG5cdFx0XHRkZWxheSA9IGdEZWxheSAtIChEYXRlLm5vdygpIC0gbGFzdFRpbWUpO1xuXG5cdFx0XHRpZihkZWxheSA8IDApe1xuXHRcdFx0XHRkZWxheSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGlzUHJpb3JpdHkgfHwgZGVsYXkgPCA5KXtcblx0XHRcdFx0aWRsZUNhbGxiYWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGlkbGVDYWxsYmFjaywgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0Ly9iYXNlZCBvbiBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5kZS8yMDEzLzA4L2J1aWxkaW5nLWJldHRlci1kZWJvdW5jZS5odG1sXG5cdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcblx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdHZhciB3YWl0ID0gOTk7XG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdGZ1bmMoKTtcblx0XHR9O1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG5cdFx0XHRpZiAobGFzdCA8IHdhaXQpIHtcblx0XHRcdFx0c2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0KHJlcXVlc3RJZGxlQ2FsbGJhY2sgfHwgcnVuKShydW4pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHRpZiAoIXRpbWVvdXQpIHtcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0dmFyIGxvYWRlciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBwcmVsb2FkRWxlbXMsIGlzQ29tcGxldGVkLCByZXNldFByZWxvYWRpbmdUaW1lciwgbG9hZE1vZGUsIHN0YXJ0ZWQ7XG5cblx0XHR2YXIgZUx2VywgZWx2SCwgZUx0b3AsIGVMbGVmdCwgZUxyaWdodCwgZUxib3R0b20sIGlzQm9keUhpZGRlbjtcblxuXHRcdHZhciByZWdJbWcgPSAvXmltZyQvaTtcblx0XHR2YXIgcmVnSWZyYW1lID0gL15pZnJhbWUkL2k7XG5cblx0XHR2YXIgc3VwcG9ydFNjcm9sbCA9ICgnb25zY3JvbGwnIGluIHdpbmRvdykgJiYgISgvKGdsZXxpbmcpYm90Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcblxuXHRcdHZhciBzaHJpbmtFeHBhbmQgPSAwO1xuXHRcdHZhciBjdXJyZW50RXhwYW5kID0gMDtcblxuXHRcdHZhciBpc0xvYWRpbmcgPSAwO1xuXHRcdHZhciBsb3dSdW5zID0gLTE7XG5cblx0XHR2YXIgcmVzZXRQcmVsb2FkaW5nID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdGlmKCFlIHx8IGlzTG9hZGluZyA8IDAgfHwgIWUudGFyZ2V0KXtcblx0XHRcdFx0aXNMb2FkaW5nID0gMDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRpZiAoaXNCb2R5SGlkZGVuID09IG51bGwpIHtcblx0XHRcdFx0aXNCb2R5SGlkZGVuID0gZ2V0Q1NTKGRvY3VtZW50LmJvZHksICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpc0JvZHlIaWRkZW4gfHwgIShnZXRDU1MoZWxlbS5wYXJlbnROb2RlLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nICYmIGdldENTUyhlbGVtLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nKTtcblx0XHR9O1xuXG5cdFx0dmFyIGlzTmVzdGVkVmlzaWJsZSA9IGZ1bmN0aW9uKGVsZW0sIGVsZW1FeHBhbmQpe1xuXHRcdFx0dmFyIG91dGVyUmVjdDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtO1xuXHRcdFx0dmFyIHZpc2libGUgPSBpc1Zpc2libGUoZWxlbSk7XG5cblx0XHRcdGVMdG9wIC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTGJvdHRvbSArPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxsZWZ0IC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTHJpZ2h0ICs9IGVsZW1FeHBhbmQ7XG5cblx0XHRcdHdoaWxlKHZpc2libGUgJiYgKHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnQpICYmIHBhcmVudCAhPSBkb2N1bWVudC5ib2R5ICYmIHBhcmVudCAhPSBkb2NFbGVtKXtcblx0XHRcdFx0dmlzaWJsZSA9ICgoZ2V0Q1NTKHBhcmVudCwgJ29wYWNpdHknKSB8fCAxKSA+IDApO1xuXG5cdFx0XHRcdGlmKHZpc2libGUgJiYgZ2V0Q1NTKHBhcmVudCwgJ292ZXJmbG93JykgIT0gJ3Zpc2libGUnKXtcblx0XHRcdFx0XHRvdXRlclJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmlzaWJsZSA9IGVMcmlnaHQgPiBvdXRlclJlY3QubGVmdCAmJlxuXHRcdFx0XHRcdFx0ZUxsZWZ0IDwgb3V0ZXJSZWN0LnJpZ2h0ICYmXG5cdFx0XHRcdFx0XHRlTGJvdHRvbSA+IG91dGVyUmVjdC50b3AgLSAxICYmXG5cdFx0XHRcdFx0XHRlTHRvcCA8IG91dGVyUmVjdC5ib3R0b20gKyAxXG5cdFx0XHRcdFx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2aXNpYmxlO1xuXHRcdH07XG5cblx0XHR2YXIgY2hlY2tFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGVMbGVuLCBpLCByZWN0LCBhdXRvTG9hZEVsZW0sIGxvYWRlZFNvbWV0aGluZywgZWxlbUV4cGFuZCwgZWxlbU5lZ2F0aXZlRXhwYW5kLCBlbGVtRXhwYW5kVmFsLFxuXHRcdFx0XHRiZWZvcmVFeHBhbmRWYWwsIGRlZmF1bHRFeHBhbmQsIHByZWxvYWRFeHBhbmQsIGhGYWM7XG5cdFx0XHR2YXIgbGF6eWxvYWRFbGVtcyA9IGxhenlzaXplcy5lbGVtZW50cztcblxuXHRcdFx0aWYoKGxvYWRNb2RlID0gbGF6eVNpemVzQ2ZnLmxvYWRNb2RlKSAmJiBpc0xvYWRpbmcgPCA4ICYmIChlTGxlbiA9IGxhenlsb2FkRWxlbXMubGVuZ3RoKSl7XG5cblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0bG93UnVucysrO1xuXG5cdFx0XHRcdGZvcig7IGkgPCBlTGxlbjsgaSsrKXtcblxuXHRcdFx0XHRcdGlmKCFsYXp5bG9hZEVsZW1zW2ldIHx8IGxhenlsb2FkRWxlbXNbaV0uX2xhenlSYWNlKXtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighc3VwcG9ydFNjcm9sbCB8fCAobGF6eXNpemVzLnByZW1hdHVyZVVudmVpbCAmJiBsYXp5c2l6ZXMucHJlbWF0dXJlVW52ZWlsKGxhenlsb2FkRWxlbXNbaV0pKSl7dW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighKGVsZW1FeHBhbmRWYWwgPSBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKCdkYXRhLWV4cGFuZCcpKSB8fCAhKGVsZW1FeHBhbmQgPSBlbGVtRXhwYW5kVmFsICogMSkpe1xuXHRcdFx0XHRcdFx0ZWxlbUV4cGFuZCA9IGN1cnJlbnRFeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFkZWZhdWx0RXhwYW5kKSB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0RXhwYW5kID0gKCFsYXp5U2l6ZXNDZmcuZXhwYW5kIHx8IGxhenlTaXplc0NmZy5leHBhbmQgPCAxKSA/XG5cdFx0XHRcdFx0XHRcdGRvY0VsZW0uY2xpZW50SGVpZ2h0ID4gNTAwICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPiA1MDAgPyA1MDAgOiAzNzAgOlxuXHRcdFx0XHRcdFx0XHRsYXp5U2l6ZXNDZmcuZXhwYW5kO1xuXG5cdFx0XHRcdFx0XHRsYXp5c2l6ZXMuX2RlZkV4ID0gZGVmYXVsdEV4cGFuZDtcblxuXHRcdFx0XHRcdFx0cHJlbG9hZEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQgKiBsYXp5U2l6ZXNDZmcuZXhwRmFjdG9yO1xuXHRcdFx0XHRcdFx0aEZhYyA9IGxhenlTaXplc0NmZy5oRmFjO1xuXHRcdFx0XHRcdFx0aXNCb2R5SGlkZGVuID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0aWYoY3VycmVudEV4cGFuZCA8IHByZWxvYWRFeHBhbmQgJiYgaXNMb2FkaW5nIDwgMSAmJiBsb3dSdW5zID4gMiAmJiBsb2FkTW9kZSA+IDIgJiYgIWRvY3VtZW50LmhpZGRlbil7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBwcmVsb2FkRXhwYW5kO1xuXHRcdFx0XHRcdFx0XHRsb3dSdW5zID0gMDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihsb2FkTW9kZSA+IDEgJiYgbG93UnVucyA+IDEgJiYgaXNMb2FkaW5nIDwgNil7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IHNocmlua0V4cGFuZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihiZWZvcmVFeHBhbmRWYWwgIT09IGVsZW1FeHBhbmQpe1xuXHRcdFx0XHRcdFx0ZUx2VyA9IGlubmVyV2lkdGggKyAoZWxlbUV4cGFuZCAqIGhGYWMpO1xuXHRcdFx0XHRcdFx0ZWx2SCA9IGlubmVySGVpZ2h0ICsgZWxlbUV4cGFuZDtcblx0XHRcdFx0XHRcdGVsZW1OZWdhdGl2ZUV4cGFuZCA9IGVsZW1FeHBhbmQgKiAtMTtcblx0XHRcdFx0XHRcdGJlZm9yZUV4cGFuZFZhbCA9IGVsZW1FeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVjdCA9IGxhenlsb2FkRWxlbXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRcdFx0XHRpZiAoKGVMYm90dG9tID0gcmVjdC5ib3R0b20pID49IGVsZW1OZWdhdGl2ZUV4cGFuZCAmJlxuXHRcdFx0XHRcdFx0KGVMdG9wID0gcmVjdC50b3ApIDw9IGVsdkggJiZcblx0XHRcdFx0XHRcdChlTHJpZ2h0ID0gcmVjdC5yaWdodCkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICogaEZhYyAmJlxuXHRcdFx0XHRcdFx0KGVMbGVmdCA9IHJlY3QubGVmdCkgPD0gZUx2VyAmJlxuXHRcdFx0XHRcdFx0KGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSAmJlxuXHRcdFx0XHRcdFx0KGxhenlTaXplc0NmZy5sb2FkSGlkZGVuIHx8IGlzVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldKSkgJiZcblx0XHRcdFx0XHRcdCgoaXNDb21wbGV0ZWQgJiYgaXNMb2FkaW5nIDwgMyAmJiAhZWxlbUV4cGFuZFZhbCAmJiAobG9hZE1vZGUgPCAzIHx8IGxvd1J1bnMgPCA0KSkgfHwgaXNOZXN0ZWRWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0sIGVsZW1FeHBhbmQpKSl7XG5cdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGxhenlsb2FkRWxlbXNbaV0pO1xuXHRcdFx0XHRcdFx0bG9hZGVkU29tZXRoaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmKGlzTG9hZGluZyA+IDkpe2JyZWFrO31cblx0XHRcdFx0XHR9IGVsc2UgaWYoIWxvYWRlZFNvbWV0aGluZyAmJiBpc0NvbXBsZXRlZCAmJiAhYXV0b0xvYWRFbGVtICYmXG5cdFx0XHRcdFx0XHRpc0xvYWRpbmcgPCA0ICYmIGxvd1J1bnMgPCA0ICYmIGxvYWRNb2RlID4gMiAmJlxuXHRcdFx0XHRcdFx0KHByZWxvYWRFbGVtc1swXSB8fCBsYXp5U2l6ZXNDZmcucHJlbG9hZEFmdGVyTG9hZCkgJiZcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgKCFlbGVtRXhwYW5kVmFsICYmICgoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApIHx8IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgIT0gJ2F1dG8nKSkpKXtcblx0XHRcdFx0XHRcdGF1dG9Mb2FkRWxlbSA9IHByZWxvYWRFbGVtc1swXSB8fCBsYXp5bG9hZEVsZW1zW2ldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGF1dG9Mb2FkRWxlbSAmJiAhbG9hZGVkU29tZXRoaW5nKXtcblx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGF1dG9Mb2FkRWxlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHRocm90dGxlZENoZWNrRWxlbWVudHMgPSB0aHJvdHRsZShjaGVja0VsZW1lbnRzKTtcblxuXHRcdHZhciBzd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcblx0XHRcdHZhciBlbGVtID0gZS50YXJnZXQ7XG5cblx0XHRcdGlmIChlbGVtLl9sYXp5Q2FjaGUpIHtcblx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlDYWNoZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNldFByZWxvYWRpbmcoZSk7XG5cdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGVkQ2xhc3MpO1xuXHRcdFx0cmVtb3ZlQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0XHR0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenlsb2FkZWQnKTtcblx0XHR9O1xuXHRcdHZhciByYWZlZFN3aXRjaExvYWRpbmdDbGFzcyA9IHJBRkl0KHN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0dmFyIHJhZlN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0cmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3Moe3RhcmdldDogZS50YXJnZXR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoYW5nZUlmcmFtZVNyYyA9IGZ1bmN0aW9uKGVsZW0sIHNyYyl7XG5cdFx0XHR2YXIgbG9hZE1vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2FkLW1vZGUnKSB8fCBsYXp5U2l6ZXNDZmcuaWZyYW1lTG9hZE1vZGU7XG5cblx0XHRcdC8vIGxvYWRNb2RlIGNhbiBiZSBhbHNvIGEgc3RyaW5nIVxuXHRcdFx0aWYgKGxvYWRNb2RlID09IDApIHtcblx0XHRcdFx0ZWxlbS5jb250ZW50V2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc3JjKTtcblx0XHRcdH0gZWxzZSBpZiAobG9hZE1vZGUgPT0gMSkge1xuXHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGhhbmRsZVNvdXJjZXMgPSBmdW5jdGlvbihzb3VyY2Upe1xuXHRcdFx0dmFyIGN1c3RvbU1lZGlhO1xuXG5cdFx0XHR2YXIgc291cmNlU3Jjc2V0ID0gc291cmNlW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyKTtcblxuXHRcdFx0aWYoIChjdXN0b21NZWRpYSA9IGxhenlTaXplc0NmZy5jdXN0b21NZWRpYVtzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ2RhdGEtbWVkaWEnKSB8fCBzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ21lZGlhJyldKSApe1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCdtZWRpYScsIGN1c3RvbU1lZGlhKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoc291cmNlU3Jjc2V0KXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc291cmNlU3Jjc2V0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGxhenlVbnZlaWwgPSByQUZJdChmdW5jdGlvbiAoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyl7XG5cdFx0XHR2YXIgc3JjLCBzcmNzZXQsIHBhcmVudCwgaXNQaWN0dXJlLCBldmVudCwgZmlyZXNMb2FkO1xuXG5cdFx0XHRpZighKGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3JldW52ZWlsJywgZGV0YWlsKSkuZGVmYXVsdFByZXZlbnRlZCl7XG5cblx0XHRcdFx0aWYoc2l6ZXMpe1xuXHRcdFx0XHRcdGlmKGlzQXV0byl7XG5cdFx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuYXV0b3NpemVzQ2xhc3MpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCBzaXplcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Jjc2V0ID0gZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc3Jjc2V0QXR0cik7XG5cdFx0XHRcdHNyYyA9IGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY0F0dHIpO1xuXG5cdFx0XHRcdGlmKGlzSW1nKSB7XG5cdFx0XHRcdFx0cGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdGlzUGljdHVyZSA9IHBhcmVudCAmJiByZWdQaWN0dXJlLnRlc3QocGFyZW50Lm5vZGVOYW1lIHx8ICcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZpcmVzTG9hZCA9IGRldGFpbC5maXJlc0xvYWQgfHwgKCgnc3JjJyBpbiBlbGVtKSAmJiAoc3Jjc2V0IHx8IHNyYyB8fCBpc1BpY3R1cmUpKTtcblxuXHRcdFx0XHRldmVudCA9IHt0YXJnZXQ6IGVsZW19O1xuXG5cdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xuXG5cdFx0XHRcdGlmKGZpcmVzTG9hZCl7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHJlc2V0UHJlbG9hZGluZ1RpbWVyKTtcblx0XHRcdFx0XHRyZXNldFByZWxvYWRpbmdUaW1lciA9IHNldFRpbWVvdXQocmVzZXRQcmVsb2FkaW5nLCAyNTAwKTtcblx0XHRcdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcywgdHJ1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihpc1BpY3R1cmUpe1xuXHRcdFx0XHRcdGZvckVhY2guY2FsbChwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpLCBoYW5kbGVTb3VyY2VzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHNyY3NldCl7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIHNyY3NldCk7XG5cdFx0XHRcdH0gZWxzZSBpZihzcmMgJiYgIWlzUGljdHVyZSl7XG5cdFx0XHRcdFx0aWYocmVnSWZyYW1lLnRlc3QoZWxlbS5ub2RlTmFtZSkpe1xuXHRcdFx0XHRcdFx0Y2hhbmdlSWZyYW1lU3JjKGVsZW0sIHNyYyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsZW0uc3JjID0gc3JjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGlzSW1nICYmIChzcmNzZXQgfHwgaXNQaWN0dXJlKSl7XG5cdFx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwge3NyYzogc3JjfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoZWxlbS5fbGF6eVJhY2Upe1xuXHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eVJhY2U7XG5cdFx0XHR9XG5cdFx0XHRyZW1vdmVDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKTtcblxuXHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vIFBhcnQgb2YgdGhpcyBjYW4gYmUgcmVtb3ZlZCBhcyBzb29uIGFzIHRoaXMgZml4IGlzIG9sZGVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03NzMxICgyMDE1KVxuXHRcdFx0XHR2YXIgaXNMb2FkZWQgPSBlbGVtLmNvbXBsZXRlICYmIGVsZW0ubmF0dXJhbFdpZHRoID4gMTtcblxuXHRcdFx0XHRpZiggIWZpcmVzTG9hZCB8fCBpc0xvYWRlZCl7XG5cdFx0XHRcdFx0aWYgKGlzTG9hZGVkKSB7XG5cdFx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuZmFzdExvYWRlZENsYXNzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3dpdGNoTG9hZGluZ0NsYXNzKGV2ZW50KTtcblx0XHRcdFx0XHRlbGVtLl9sYXp5Q2FjaGUgPSB0cnVlO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdGlmICgnX2xhenlDYWNoZScgaW4gZWxlbSkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eUNhY2hlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtLmxvYWRpbmcgPT0gJ2xhenknKSB7XG5cdFx0XHRcdFx0aXNMb2FkaW5nLS07XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRydWUpO1xuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gZWxlbSB7IEVsZW1lbnQgfVxuXHRcdCAqL1xuXHRcdHZhciB1bnZlaWxFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW0pe1xuXHRcdFx0aWYgKGVsZW0uX2xhenlSYWNlKSB7cmV0dXJuO31cblx0XHRcdHZhciBkZXRhaWw7XG5cblx0XHRcdHZhciBpc0ltZyA9IHJlZ0ltZy50ZXN0KGVsZW0ubm9kZU5hbWUpO1xuXG5cdFx0XHQvL2FsbG93IHVzaW5nIHNpemVzPVwiYXV0b1wiLCBidXQgZG9uJ3QgdXNlLiBpdCdzIGludmFsaWQuIFVzZSBkYXRhLXNpemVzPVwiYXV0b1wiIG9yIGEgdmFsaWQgdmFsdWUgZm9yIHNpemVzIGluc3RlYWQgKGkuZS46IHNpemVzPVwiODB2d1wiKVxuXHRcdFx0dmFyIHNpemVzID0gaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgfHwgZWxlbVtfZ2V0QXR0cmlidXRlXSgnc2l6ZXMnKSk7XG5cdFx0XHR2YXIgaXNBdXRvID0gc2l6ZXMgPT0gJ2F1dG8nO1xuXG5cdFx0XHRpZiggKGlzQXV0byB8fCAhaXNDb21wbGV0ZWQpICYmIGlzSW1nICYmIChlbGVtW19nZXRBdHRyaWJ1dGVdKCdzcmMnKSB8fCBlbGVtLnNyY3NldCkgJiYgIWVsZW0uY29tcGxldGUgJiYgIWhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5lcnJvckNsYXNzKSAmJiBoYXNDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKSl7cmV0dXJuO31cblxuXHRcdFx0ZGV0YWlsID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5dW52ZWlscmVhZCcpLmRldGFpbDtcblxuXHRcdFx0aWYoaXNBdXRvKXtcblx0XHRcdFx0IGF1dG9TaXplci51cGRhdGVFbGVtKGVsZW0sIHRydWUsIGVsZW0ub2Zmc2V0V2lkdGgpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLl9sYXp5UmFjZSA9IHRydWU7XG5cdFx0XHRpc0xvYWRpbmcrKztcblxuXHRcdFx0bGF6eVVudmVpbChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKTtcblx0XHR9O1xuXG5cdFx0dmFyIGFmdGVyU2Nyb2xsID0gZGVib3VuY2UoZnVuY3Rpb24oKXtcblx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDM7XG5cdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cdFx0fSk7XG5cblx0XHR2YXIgYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmKGxhenlTaXplc0NmZy5sb2FkTW9kZSA9PSAzKXtcblx0XHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMjtcblx0XHRcdH1cblx0XHRcdGFmdGVyU2Nyb2xsKCk7XG5cdFx0fTtcblxuXHRcdHZhciBvbmxvYWQgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYoaXNDb21wbGV0ZWQpe3JldHVybjt9XG5cdFx0XHRpZihEYXRlLm5vdygpIC0gc3RhcnRlZCA8IDk5OSl7XG5cdFx0XHRcdHNldFRpbWVvdXQob25sb2FkLCA5OTkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblxuXHRcdFx0aXNDb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAzO1xuXG5cdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lciwgdHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuXHRcdFx0XHRsYXp5c2l6ZXMuZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5sYXp5Q2xhc3MpO1xuXHRcdFx0XHRwcmVsb2FkRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5sYXp5Q2xhc3MgKyAnICcgKyBsYXp5U2l6ZXNDZmcucHJlbG9hZENsYXNzKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0aWYgKGUucGVyc2lzdGVkKSB7XG5cdFx0XHRcdFx0XHR2YXIgbG9hZGluZ0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBsYXp5U2l6ZXNDZmcubG9hZGluZ0NsYXNzKTtcblxuXHRcdFx0XHRcdFx0aWYgKGxvYWRpbmdFbGVtZW50cy5sZW5ndGggJiYgbG9hZGluZ0VsZW1lbnRzLmZvckVhY2gpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nRWxlbWVudHMuZm9yRWFjaCggZnVuY3Rpb24gKGltZykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGltZy5jb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGltZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpe1xuXHRcdFx0XHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzICkub2JzZXJ2ZSggZG9jRWxlbSwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZX0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2NFbGVtW19hZGRFdmVudExpc3RlbmVyXSgnRE9NTm9kZUluc2VydGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTUF0dHJNb2RpZmllZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdHNldEludGVydmFsKHRocm90dGxlZENoZWNrRWxlbWVudHMsIDk5OSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0Ly8sICdmdWxsc2NyZWVuY2hhbmdlJ1xuXHRcdFx0XHRbJ2ZvY3VzJywgJ21vdXNlb3ZlcicsICdjbGljaycsICdsb2FkJywgJ3RyYW5zaXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJ10uZm9yRWFjaChmdW5jdGlvbihuYW1lKXtcblx0XHRcdFx0XHRkb2N1bWVudFtfYWRkRXZlbnRMaXN0ZW5lcl0obmFtZSwgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmKCgvZCR8XmMvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpKXtcblx0XHRcdFx0XHRvbmxvYWQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25sb2FkKTtcblx0XHRcdFx0XHRkb2N1bWVudFtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgMjAwMDApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYobGF6eXNpemVzLmVsZW1lbnRzLmxlbmd0aCl7XG5cdFx0XHRcdFx0Y2hlY2tFbGVtZW50cygpO1xuXHRcdFx0XHRcdHJBRi5fbHNGbHVzaCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNoZWNrRWxlbXM6IHRocm90dGxlZENoZWNrRWxlbWVudHMsXG5cdFx0XHR1bnZlaWw6IHVudmVpbEVsZW1lbnQsXG5cdFx0XHRfYUxTTDogYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyLFxuXHRcdH07XG5cdH0pKCk7XG5cblxuXHR2YXIgYXV0b1NpemVyID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGF1dG9zaXplc0VsZW1zO1xuXG5cdFx0dmFyIHNpemVFbGVtZW50ID0gckFGSXQoZnVuY3Rpb24oZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpe1xuXHRcdFx0dmFyIHNvdXJjZXMsIGksIGxlbjtcblx0XHRcdGVsZW0uX2xhenlzaXplc1dpZHRoID0gd2lkdGg7XG5cdFx0XHR3aWR0aCArPSAncHgnO1xuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cblx0XHRcdGlmKHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpKXtcblx0XHRcdFx0c291cmNlcyA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG5cdFx0XHRcdGZvcihpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG5cdFx0XHRcdFx0c291cmNlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFldmVudC5kZXRhaWwuZGF0YUF0dHIpe1xuXHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCBldmVudC5kZXRhaWwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIGVsZW0ge0VsZW1lbnR9XG5cdFx0ICogQHBhcmFtIGRhdGFBdHRyXG5cdFx0ICogQHBhcmFtIFt3aWR0aF0geyBudW1iZXIgfVxuXHRcdCAqL1xuXHRcdHZhciBnZXRTaXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtLCBkYXRhQXR0ciwgd2lkdGgpe1xuXHRcdFx0dmFyIGV2ZW50O1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYocGFyZW50KXtcblx0XHRcdFx0d2lkdGggPSBnZXRXaWR0aChlbGVtLCBwYXJlbnQsIHdpZHRoKTtcblx0XHRcdFx0ZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmVzaXplcycsIHt3aWR0aDogd2lkdGgsIGRhdGFBdHRyOiAhIWRhdGFBdHRyfSk7XG5cblx0XHRcdFx0aWYoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuXHRcdFx0XHRcdHdpZHRoID0gZXZlbnQuZGV0YWlsLndpZHRoO1xuXG5cdFx0XHRcdFx0aWYod2lkdGggJiYgd2lkdGggIT09IGVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdFx0XHRcdHNpemVFbGVtZW50KGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGk7XG5cdFx0XHR2YXIgbGVuID0gYXV0b3NpemVzRWxlbXMubGVuZ3RoO1xuXHRcdFx0aWYobGVuKXtcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0Zm9yKDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRnZXRTaXplRWxlbWVudChhdXRvc2l6ZXNFbGVtc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBkZWJvdW5jZSh1cGRhdGVFbGVtZW50c1NpemVzKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRhdXRvc2l6ZXNFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ2ZnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyxcblx0XHRcdHVwZGF0ZUVsZW06IGdldFNpemVFbGVtZW50XG5cdFx0fTtcblx0fSkoKTtcblxuXHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFx0aWYoIWluaXQuaSAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXtcblx0XHRcdGluaXQuaSA9IHRydWU7XG5cdFx0XHRhdXRvU2l6ZXIuXygpO1xuXHRcdFx0bG9hZGVyLl8oKTtcblx0XHR9XG5cdH07XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdGlmKGxhenlTaXplc0NmZy5pbml0KXtcblx0XHRcdGluaXQoKTtcblx0XHR9XG5cdH0pO1xuXG5cdGxhenlzaXplcyA9IHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7IExhenlTaXplc0NvbmZpZ1BhcnRpYWwgfVxuXHRcdCAqL1xuXHRcdGNmZzogbGF6eVNpemVzQ2ZnLFxuXHRcdGF1dG9TaXplcjogYXV0b1NpemVyLFxuXHRcdGxvYWRlcjogbG9hZGVyLFxuXHRcdGluaXQ6IGluaXQsXG5cdFx0dVA6IHVwZGF0ZVBvbHlmaWxsLFxuXHRcdGFDOiBhZGRDbGFzcyxcblx0XHRyQzogcmVtb3ZlQ2xhc3MsXG5cdFx0aEM6IGhhc0NsYXNzLFxuXHRcdGZpcmU6IHRyaWdnZXJFdmVudCxcblx0XHRnVzogZ2V0V2lkdGgsXG5cdFx0ckFGOiByQUYsXG5cdH07XG5cblx0cmV0dXJuIGxhenlzaXplcztcbn1cbikpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XG5pbXBvcnQgbW9kYWxGbiBmcm9tICcuL21vZGFsJztcbmltcG9ydCB0b2FzdCBmcm9tICcuL3RvYXN0JztcblxuaW1wb3J0ICdsYXp5c2l6ZXMnO1xuXG4vLyBQb2x5ZmlsbCBmb3JFYWNoXG5pZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmlmICh0eXBlb2YgU0VBUkNIX0FQSSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgc2VhcmNoKCk7XG59XG5cbm1vZGFsRm4oKTtcbnRvYXN0KCk7XG4vKlxuICogR3JpZCBzdHlsZXNcbiAqICogQ291bnRzICYgYWRkcyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHRoZSBncmlkIGNvbnRhaW5lclxuICovXG5jb25zdCBncmlkQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNvbnRhaW5lcicpO1xuXG5ncmlkQ29udGFpbmVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGdyaWRJdGVtcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYGdyaWQtY29udGFpbmVyLSR7Z3JpZEl0ZW1zLmxlbmd0aH1gKTtcbn0pO1xuXG4vKlxuICogQ29sb3IgbW9kZSB0b2dnbGVcbiAqID8gSXMgdGhlIGNvbG9yIG1vZGUgYnV0dG9uIGhpZGRlbiBvbiB1bnN1cHBvcnRlZCBicm93c2Vycz9cbiAqL1xuY29uc3QgdG9nZ2xlQ29sb3JCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yLW1vZGUtYnRuJyk7XG5cbmlmICh3aW5kb3cuQ1NTICYmIENTUy5zdXBwb3J0cygnY29sb3InLCAndmFyKC0tcHJpbWFyeSknKSkge1xuICBjb25zdCB0b2dnbGVDb2xvck1vZGUgPSAoZSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWdodCcpKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb2xvci1tb2RlJywgJ2xpZ2h0Jyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlZicsICdsaWdodCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb2xvci1tb2RlJywgJ2RhcmsnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlZicsICdkYXJrJyk7XG4gIH07XG4gIHRvZ2dsZUNvbG9yQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDb2xvck1vZGUpO1xuICB9KTtcbn0gZWxzZSB7XG4gIHRvZ2dsZUNvbG9yQnRucy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNZW1iZXIgYW5udWFsIHByaWNlIGRpc2NvdW50IGNoZWNrXG4gKiAqIENoZWNrcyB3aGV0aGVyIGFubnVhbCBwcmljZSBpcyBiZXR0ZXIgdGhhbiBtb250aGx5IGFuZCBhZGRzIGEgc3BhbiB3aXRoIHRoZSBkaXNjb3VudCBpbmZvXG4gKi9cbmNvbnN0IGV4dHJhY3ROdW1iZXIgPSAoaW5wdXQpID0+IHtcbiAgY29uc3QgbnVtID0gL1xcZCsvLmV4ZWMoaW5wdXQpWzBdO1xuICByZXR1cm4gcGFyc2VJbnQobnVtLCAxMCk7XG59O1xuXG5jb25zdCB5ZWFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhcmx5LXByaWNlJyk7XG5cbmlmICh5ZWFyRWwpIHtcbiAgY29uc3QgeWVhcmx5UHJpY2UgPSBleHRyYWN0TnVtYmVyKHllYXJFbC50ZXh0Q29udGVudCk7XG5cbiAgY29uc3QgbW9udGhseVByaWNlID0gZXh0cmFjdE51bWJlcihcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9udGhseS1wcmljZScpLnRleHRDb250ZW50XG4gICk7XG5cbiAgY29uc3QgY2FsY3VsYXRlUGVyY2VudGFnZURpc2NvdW50ID0gKG1vbnRoVG9ZZWFyLCB5ZWFyKSA9PiB7XG4gICAgY29uc3QgZGlmZiA9IG1vbnRoVG9ZZWFyIC0geWVhcjtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKChkaWZmICogMTAwKSAvIG1vbnRoVG9ZZWFyKS50b0ZpeGVkKCk7XG4gICAgcmV0dXJuIGAke3BlcmNlbnRhZ2V9JWA7XG4gIH07XG5cbiAgY29uc3QgZGV0ZXJtaW5lRGlzY291bnQgPSAobW9udGgsIHllYXIpID0+IHtcbiAgICBjb25zdCBtb250aGx5VG9Bbm51YWwgPSBtb250aCAqIDEyO1xuICAgIGlmICh5ZWFyIDwgbW9udGhseVRvQW5udWFsKSB7XG4gICAgICBjb25zdCBwZXJjZW50YWdlRGlzY291bnQgPSBjYWxjdWxhdGVQZXJjZW50YWdlRGlzY291bnQoXG4gICAgICAgIG1vbnRobHlUb0FubnVhbCxcbiAgICAgICAgeWVhclxuICAgICAgKTtcbiAgICAgIGNvbnN0IHBlcmNlbnRPZmZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBlcmNlbnRPZmZFbC5jbGFzc0xpc3QuYWRkKCdtZW1iZXJfX2Rpc2NvdW50Jyk7XG4gICAgICBjb25zdCBwZXJjZW50T2ZmVGV4dCA9IGAke3BlcmNlbnRhZ2VEaXNjb3VudH0gb2ZmIHRoZSBtb250aGx5IHByaWNlIWA7XG4gICAgICBwZXJjZW50T2ZmRWwuYXBwZW5kKHBlcmNlbnRPZmZUZXh0KTtcbiAgICAgIHllYXJFbC5wYXJlbnRFbGVtZW50LmFwcGVuZChwZXJjZW50T2ZmRWwpO1xuICAgIH1cbiAgfTtcblxuICBpZiAobW9udGhseVByaWNlICYmIHllYXJseVByaWNlKSB7XG4gICAgZGV0ZXJtaW5lRGlzY291bnQobW9udGhseVByaWNlLCB5ZWFybHlQcmljZSk7XG4gIH1cbn1cblxuLy8gSGVybyAtPiBDb250YWN0XG5jb25zdCBjb250YWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fY29udGFjdCcpO1xuXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uX19saXN0LWxpbmsnKTtcblxuaWYgKGNvbnRhY3RFbCAmJiBuYXZMaW5rcykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCBlbCBvZiBuYXZMaW5rcykge1xuICAgIGlmIChlbC5wYXRobmFtZSA9PT0gJy9jb250YWN0LycpIHtcbiAgICAgIGNvbnRhY3RFbC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuLypcbiAqIFJlbW92ZSBtZW51IG5hdiBsaW5rcyBmcm9tIHRoZSBET01cbiAqL1xuY29uc3QgbWVudU5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUgYScpO1xuXG5tZW51TmF2TGlua3MuZm9yRWFjaCgoZWwpID0+IGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9