(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
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
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\n    font-family: 'Lato',cursive !important;\n    color: aliceblue;\n}\n.container-fluid{\n    background-color: rgb(15, 212, 219);\n    background-image: linear-gradient(141deg, #b8d8d8 0%, #1fdbcb 51%, #2ce2e8 75%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNDQUFzQztJQUN0QyxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQywrRUFBK0U7QUFDbkYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsY3Vyc2l2ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG4uY29udGFpbmVyLWZsdWlke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMjEyLCAyMTkpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDFkZWcsICNiOGQ4ZDggMCUsICMxZmRiY2IgNTElLCAjMmNlMmU4IDc1JSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height:10px; background:#ffff;\">\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row text-center\">\n    <div class=\"col\">\n      <pre></pre>\n      <h2 class=\"title\"> Quber Highlights </h2>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Challenges In Giving Today\n        </div>\n        <div class=\"card-body\">\n          <p>\n            Keeping track of donations given for financial planning as well for tax deductions.\n          </p>\n          <p>\n            Timelines of making the donation.</p>\n          <p>\n            End to end process of making a donation is cumbersome.</p>\n          <p> Lack of clarity of charitable goals.</p>\n          <p> Honorig pledes.</p>\n          <p>Lack of trust in giving due to lack of clarity about various charities.\n          </p>\n          <pre>\n            \n          </pre>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Quber's Digital Solution\n        </div>\n        <div class=\"card-body\">\n          <p>\n            Quber mobile app gives you ability to pull all the donations that you have given since the initiation of\n            your account.\n          </p>\n          <p>\n            Quber mobile app provieds the donar flexibility at their fingertips of making a donation anytime anywhere.\n          </p>\n          <p>The app experiance is seamless with minimal steps required to complete the donation.</p>\n          <p>Easily set up short, mid and long term charitable goals with remainder preferences.\n            This will help donars to stay on track and feel fulfilled by keeping their pledge.\n          </p>\n          <p>\n            Easy to make pledges on frequency of your choice and stay accountable to commitments.\n          </p>\n          <p>A rigorous and thorough process to vet out and approve the charities that are onboarded on the platform.\n          </p>\n          \n        </div>\n      </div>\n    </div>\n\n  </div>\n  <pre>\n\n  </pre>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/adminComponents/admin-das/admin-das.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/adminComponents/admin-das/admin-das.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.navbar {\n  background: #ddd;\n}\n.navbar-brand {\n  border:none;\n  width: 10%;\n  display: flex;\n  /* justify-content: center;\n  align-items: center; */\n  flex-direction: row;\n  background: #fff\n}\n.navbar-brand img {\n  padding-left: 0.5rem;\n  width: 55px;\n  height: 40px;\n}\n.navbar-brand p {\n  margin-top: 4px;\n  margin-bottom: 0;\n  padding-left: 1rem;\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  font-family: 'Lora', serif;\n  font-weight: 500;\n}\n.sidenav {\n  position: fixed;\n  height: 100%;\n  width: 180px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 20px;\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n}\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n.main {\n  margin-left: 160px; /* Same as the width of the sidenav */\n  font-size: 28px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #dddd;\n  color: white;\n  text-align: center;\n}\n/* tabset */\n.wrap-charity-details {\n  margin: 10px;\n  padding: 1rem;\n  box-shadow: 0 5px 10px rgba(0,0,0,0.3);\n  background: #ffff;\n}\nh3 {\n  margin-left: 110px;\n  margin-top: 33px;\n  margin-bottom: 20px;\n  font-family: 'Lora', serif;\n}\n.wrap-tabset {\n  margin: 50px;\n}\n.container {\n  margin: 0;\n}\n.btn {\n  margin: 0;\n  color: white;\n  font-family: 'Lora', serif;\n  font-size: 1.1em;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5Db21wb25lbnRzL2FkbWluLWRhcy9hZG1pbi1kYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiO3dCQUNzQjtFQUN0QixtQkFBbUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sT0FBTztFQUNQLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0VBQ3pELGVBQWUsRUFBRSx1Q0FBdUM7RUFDeEQsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxVQUFVLGlCQUFpQixDQUFDO0VBQzVCLFlBQVksZUFBZSxDQUFDO0FBQzlCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQSxXQUFXO0FBSVg7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluQ29tcG9uZW50cy9hZG1pbi1kYXMvYWRtaW4tZGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuLm5hdmJhci1icmFuZCB7XG4gIGJvcmRlcjpub25lO1xuICB3aWR0aDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZDogI2ZmZlxufVxuLm5hdmJhci1icmFuZCBpbWcge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm5hdmJhci1icmFuZCBwIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNpZGVuYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnNpZGVuYXYgYSB7XG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlbmF2IGE6aG92ZXIge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLm1haW4ge1xuICBtYXJnaW4tbGVmdDogMTYwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlbmF2ICovXG4gIGZvbnQtc2l6ZTogMjhweDsgLyogSW5jcmVhc2VkIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZyAqL1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XG4gIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogdGFic2V0ICovXG5cblxuXG4ud3JhcC1jaGFyaXR5LWRldGFpbHMge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbn1cblxuaDMge1xuICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gIG1hcmdpbi10b3A6IDMzcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xufVxuXG4ud3JhcC10YWJzZXQge1xuICBtYXJnaW46IDUwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDA7XG59IFxuXG4uYnRuIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/adminComponents/admin-das/admin-das.component.html":
/*!********************************************************************!*\
  !*** ./src/app/adminComponents/admin-das/admin-das.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\"> \n        <img src=\"../../../assets/Images/kuber-HD.jpg\" alt=\"\">\n        <p>Kuber</p>\n      </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li> -->\n    </ul>\n    <span class=\"navbar-text\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"logout()\" >Log Out</button>\n    </span>\n  </div>\n</nav>\n\n<!-- sidebar -->\n<!-- <div class=\"sidenav\">\n  <a href=\"#about\">About</a>\n  <a href=\"#services\">Services</a>\n  <a href=\"#clients\">Clients</a>\n  <a href=\"#contact\">Contact</a>\n</div>  -->\n\n\n<!-- tabset -->\n<div class=\"wrap-tabset\">\n  <ngb-tabset>\n    <ngb-tab>\n      <ng-template ngbTabTitle> <button type=\"button\" class=\"btn btn-info\">Approve Charities</button></ng-template>\n      <ng-template ngbTabContent>\n        <div class=\"container\">\n            <app-admin></app-admin>\n        </div>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab>\n      <ng-template ngbTabTitle><button type=\"button\" class=\"btn btn-info\">View All Charities</button></ng-template>\n      <ng-template ngbTabContent>\n          <section class=\"wrap-charity-details\">  \n              <table class=\"table\">\n                <thead class=\"thead-dark\">\n                  <tr>\n                      <th>Charity Name</th>\n                      <th>Email</th>\n                      <th>Contact</th>\n                      <th>Address</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let data of charityResult\" >\n                        <td>{{ data.charityName }}</td>\n                        <td>{{ data.email }}</td>\n                        <td>{{data.phoneNumber}}</td>\n                        <td>{{ data.state }},{{data.city}},{{data.zipcode}}</td>\n                      </tr> \n                </tbody>\n              </table>\n            </section>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n\n\n\n<div class=\"footer\">\n  <p>AccionLabs-2019</p>\n</div>\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/adminComponents/admin-das/admin-das.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/adminComponents/admin-das/admin-das.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminDasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDasComponent", function() { return AdminDasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminDasComponent = /** @class */ (function () {
    function AdminDasComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    AdminDasComponent.prototype.ngOnInit = function () {
        this.getCharitydetails();
    };
    AdminDasComponent.prototype.getCharitydetails = function () {
        var _this = this;
        this.service.getCharitydetails().subscribe(function (res) {
            // console.log(res);
            _this.charityResult = res.result.paginatedItems;
        });
    };
    AdminDasComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/home']);
    };
    AdminDasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-das',
            template: __webpack_require__(/*! ./admin-das.component.html */ "./src/app/adminComponents/admin-das/admin-das.component.html"),
            styles: [__webpack_require__(/*! ./admin-das.component.css */ "./src/app/adminComponents/admin-das/admin-das.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminDasComponent);
    return AdminDasComponent;
}());



/***/ }),

/***/ "./src/app/adminComponents/admin-login/admin-login.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/adminComponents/admin-login/admin-login.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url('https://fonts.googleapis.com/css?family=Ubuntu'); */\n\n.container {\n  display: flex;\n  border: none;;\n  justify-content: center;\n  font-family: 'Lora', serif;\n}\n\n.title {\n  \n  text-align: center;\n  text-transform: uppercase;\n  padding: 2rem;\n}\n\n.card > .right {\n  display: flex;\n  align-items: center;\n  padding: 3rem;\n}\n\n.card {\n  box-shadow: 0 5px 10px rgba(0,0,0,0.3);\n  display: flex;\n  width: 50%;\n  padding: 3rem;\n}\n\n/* .card > .left {\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5anFzzt2HAflP_aG8o6AYDRrvDtByspYTEM3OgNXDcBXD9I-');\n  background-position: bottom;\n  background-size: cover; \n} */\n\nform {\n  width: 100%;\n}\n\n.form-input {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.form-input > label {\n  color: #2C3A47;\n  font-weight: bold;\n  margin: 0;\n  text-transform: uppercase;\n  transition: color 0.3s ease-in-out;\n}\n\n.form-input > input[type=\"text\"]:focus + label,\n.form-input > input[type=\"password\"]:focus + label {\n  color: #3E3ED9;\n}\n\nform input {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.form-input > input[type=\"text\"],\n.form-input > input[type=\"password\"] {\n  border: none;\n  border-bottom: 2px solid #2C3A47;\n  height: 30px;\n  outline: none;\n  transition: border-bottom .3s ease-in-out;\n}\n\n.form-input > input[type=\"text\"]:focus,\n.form-input > input[type=\"password\"]:focus {\n  border-bottom: 2px solid #FD7272;\n}\n\n.btn {\n  margin-top: 35px;\n  width: 100%;\n  font-weight: bold;\n  background-color: #2c3a47;\n  border: none;\n  color: #FFF;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 40px;\n  transition: background-color 0.3s ease-in-out,\n              box-shadow .3s ease-in-out,\n              -webkit-transform .3s ease-in-out;\n  transition: background-color 0.3s ease-in-out,\n              box-shadow .3s ease-in-out,\n              transform .3s ease-in-out;\n  transition: background-color 0.3s ease-in-out,\n              box-shadow .3s ease-in-out,\n              transform .3s ease-in-out,\n              -webkit-transform .3s ease-in-out;\n}\n\n.btn:hover {\n  background-color: rgb(8, 231, 220);\n  box-shadow: 0 5px 10px rgba(0,0,0,.3);\n  -webkit-transform: translateY(-3px);\n          transform: translateY(-3px);\n}\n\n/* \n.forgot-password {\n  color: #000;\n  font-size: .8rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  transition: letter-spacing .3s ease-in-out;\n  float: right;\n  padding-right: 2rem;\n} */\n\n/* .forgot-password:hover {\nletter-spacing: 1px;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5Db21wb25lbnRzL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FOztBQUVuRTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUdBO0VBQ0Usc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBOzs7O0dBSUc7O0FBRUg7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2IseUNBQXlDO0FBQzNDOztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCOzsrQ0FFcUM7RUFGckM7O3VDQUVxQztFQUZyQzs7OytDQUVxQztBQUN2Qzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFDQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hZG1pbkNvbXBvbmVudHMvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VWJ1bnR1Jyk7ICovXG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IG5vbmU7O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG59XG5cbi50aXRsZSB7XG4gIFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5jYXJkID4gLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAzcmVtO1xufVxuXG4vKiAuY2FyZCA+IC5sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRZDVhbkZ6enQySEFmbFBfYUc4bzZBWURScnZEdEJ5c3BZVEVNM09nTlhEY0JYRDlJLScpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxufSAqL1xuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4uZm9ybS1pbnB1dCA+IGxhYmVsIHtcbiAgY29sb3I6ICMyQzNBNDc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWlucHV0ID4gaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMgKyBsYWJlbCxcbi5mb3JtLWlucHV0ID4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzICsgbGFiZWwge1xuICBjb2xvcjogIzNFM0VEOTtcbn1cblxuZm9ybSBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1pbnB1dCA+IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLmZvcm0taW5wdXQgPiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMkMzQTQ3O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1pbnB1dCA+IGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuLmZvcm0taW5wdXQgPiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZENzI3Mjtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI0ZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgIGJveC1zaGFkb3cgLjNzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDIzMSwgMjIwKTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLC4zKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xufVxuLyogXG4uZm9yZ290LXBhc3N3b3JkIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBsZXR0ZXItc3BhY2luZyAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn0gKi9cblxuLyogLmZvcmdvdC1wYXNzd29yZDpob3ZlciB7XG5sZXR0ZXItc3BhY2luZzogMXB4O1xufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/adminComponents/admin-login/admin-login.component.html":
/*!************************************************************************!*\
  !*** ./src/app/adminComponents/admin-login/admin-login.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h3 class=\"title\">Charity Admin Login </h3>\n<div class=\"container\">\n    <div class=\"card\">\n        <form role=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\">\n          <div class=\"form-input\">\n            <input type=\"text\" id=\"username\" placeholder=\"username\" formControlName=\"email\" [(ngModel)]=\"adminservices.adminLogin.email\"> \n            <!-- <div *ngIf=\"\n            registerForm.controls['username'].touched &&\n            !registerForm.controls['username'].valid\n          \">\n          <small *ngIf=\"registerForm.controls['username'].hasError('required')\" style=\"color:red;\">\n            Please enter Charity Name\n          </small>\n        </div> -->\n            <label for=\"username\">username</label>\n          </div>\n          <div class=\"form-input\">\n            <input type=\"password\" id=\"password\" placeholder=\"*********\" formControlName=\"password\" [(ngModel)]=\"adminservices.adminLogin.password\">\n            <!-- <div *ngIf=\"\n            registerForm.controls['password'].touched &&\n            !registerForm.controls['password'].valid\n          \">\n          <small *ngIf=\"registerForm.controls['password'].hasError('required')\" style=\"color:red;\">\n            Please enter Charity Name\n          </small>\n        </div> -->\n            <label for=\"password\">password</label>\n          </div>\n          <button class=\"btn\"> Login </button>\n          <!-- <a href=\"#\" class=\"forgot-password\">forgot password?</a> -->\n        </form>\n    </div>\n  </div>  "

/***/ }),

/***/ "./src/app/adminComponents/admin-login/admin-login.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/adminComponents/admin-login/admin-login.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(fb, adminservices, router) {
        this.fb = fb;
        this.adminservices = adminservices;
        this.router = router;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.loginForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-z0-9_.]+$/i)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        var tocken = localStorage.getItem('isLogin');
        if (tocken) {
        }
    };
    AdminLoginComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.adminservices.adminLogin = {
            email: '',
            password: ''
        };
    };
    AdminLoginComponent.prototype.submitForm = function () {
        var _this = this;
        // console.log(this.loginForm.value,"validity",this.loginForm.valid);
        this.adminservices.AdminLogin(this.loginForm.value).subscribe(function (res) {
            if (res) {
                localStorage.setItem('AdminLogin', 'true');
                _this.resetForm();
                _this.router.navigate(['dashboard']);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error!", "You clicked the button!", "warnning");
            }
        });
        // }
    };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/adminComponents/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/adminComponents/admin-login/admin-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/adminComponents/adminpanel/admin.component.css":
/*!****************************************************************!*\
  !*** ./src/app/adminComponents/adminpanel/admin.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.wrap-charity-details {\n  margin-top: 10px;\n  padding: 2rem;\n  width: 145%;\n  box-shadow: 0 5px 10px rgba(0,0,0,0.3);\n  background: #ffff;\n}\n\nh3 {\n  margin-left: 110px;\n  margin-top: 33px;\n  margin-bottom: 20px;\n  font-family: 'Lora', serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5Db21wb25lbnRzL2FkbWlucGFuZWwvYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5Db21wb25lbnRzL2FkbWlucGFuZWwvYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLndyYXAtY2hhcml0eS1kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgd2lkdGg6IDE0NSU7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbn1cblxuaDMge1xuICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gIG1hcmdpbi10b3A6IDMzcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/adminComponents/adminpanel/admin.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/adminComponents/adminpanel/admin.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"wrap-charity-details\">  \n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n      <tr>\n          <th>Charity Name</th>\n          <th>Email</th>\n          <th>Contact</th>\n          <th>Address</th>\n          <th>Grant Permission</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let data of charityResult\" >\n            <td *ngIf=\"!data.approved\">{{ data.charityName }}</td>\n            <td *ngIf=\"!data.approved\">{{ data.email }}</td>\n            <td *ngIf=\"!data.approved\">{{data.phoneNumber}}</td>\n            <td *ngIf=\"!data.approved\">{{ data.state }},{{data.city}},{{data.zipcode}}</td>\n            <td *ngIf=\"!data.approved\">\n                <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"ApproveCharity(data._id)\">Approve</button>\n            </td>\n          </tr> \n    </tbody>\n  </table>\n</section>"

/***/ }),

/***/ "./src/app/adminComponents/adminpanel/admin.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/adminComponents/adminpanel/admin.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getCharitydetails();
    };
    AdminComponent.prototype.getCharitydetails = function () {
        var _this = this;
        this.service.getCharitydetails().subscribe(function (res) {
            // console.log(res);
            _this.charityResult = res.result.paginatedItems;
        });
    };
    AdminComponent.prototype.ApproveCharity = function (_id) {
        var _this = this;
        // console.log(_id);
        var data = { "approved": true, "id": _id };
        this.service.approveCharity(data).subscribe(function (res) {
            if (res) {
                alert("Charity Approved");
                _this.refresh();
            }
            else {
                alert("CouldNot approved");
            }
        });
    };
    AdminComponent.prototype.refresh = function () {
        window.location.reload();
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/adminComponents/adminpanel/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/adminComponents/adminpanel/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _charityComponents_charity_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charityComponents/charity-user/sign-in/sign-in.component */ "./src/app/charityComponents/charity-user/sign-in/sign-in.component.ts");
/* harmony import */ var _charityComponents_charity_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charityComponents/charity-user/sign-up/sign-up.component */ "./src/app/charityComponents/charity-user/sign-up/sign-up.component.ts");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _services_AuthGuard_Charity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/AuthGuard.Charity */ "./src/app/services/AuthGuard.Charity.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _dashboard_summary_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/summary/summary.component */ "./src/app/dashboard/summary/summary.component.ts");
/* harmony import */ var _dashboard_activities_activities_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/activities/activities.component */ "./src/app/dashboard/activities/activities.component.ts");
/* harmony import */ var _dashboard_pledges_pledges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/pledges/pledges.component */ "./src/app/dashboard/pledges/pledges.component.ts");
/* harmony import */ var _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _charityComponents_charity_user_stripe_payment_stripe_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./charityComponents/charity-user/stripe-payment/stripe-payment.component */ "./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.ts");
/* harmony import */ var _charityComponents_charity_user_stripe_respond_stripe_respond_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./charityComponents/charity-user/stripe-respond/stripe-respond.component */ "./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.ts");
/* harmony import */ var _dashboard_payouts_payouts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/payouts/payouts.component */ "./src/app/dashboard/payouts/payouts.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");

















var routes = [
    { path: 'home', component: _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_5__["StartPageComponent"] },
    { path: 'signup', component: _charityComponents_charity_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'signin', component: _charityComponents_charity_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
    {
        path: 'dashboard', component: _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], canActivate: [_services_AuthGuard_Charity__WEBPACK_IMPORTED_MODULE_6__["AuthGaurd1"]],
        children: [
            { path: 'stripePayment', component: _charityComponents_charity_user_stripe_payment_stripe_payment_component__WEBPACK_IMPORTED_MODULE_13__["StripePaymentComponent"] },
            { path: 'stripeRespond', component: _charityComponents_charity_user_stripe_respond_stripe_respond_component__WEBPACK_IMPORTED_MODULE_14__["StripeRespondComponent"] },
            { path: 'summary', component: _dashboard_summary_summary_component__WEBPACK_IMPORTED_MODULE_8__["SummaryComponent"] },
            { path: 'activities', component: _dashboard_activities_activities_component__WEBPACK_IMPORTED_MODULE_9__["ActivitiesComponent"] },
            { path: 'pledges', component: _dashboard_pledges_pledges_component__WEBPACK_IMPORTED_MODULE_10__["PledgesComponent"] },
            { path: 'help', component: _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"] },
            { path: 'payout', component: _dashboard_payouts_payouts_component__WEBPACK_IMPORTED_MODULE_15__["PayoutsComponent"] },
            { path: 'profile/:id', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] }
        ]
    },
    { path: 'privacy-policy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyPolicyComponent"] },
    { path: "", redirectTo: "home", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kuber-dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _charityComponents_charity_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charityComponents/charity-user/sign-in/sign-in.component */ "./src/app/charityComponents/charity-user/sign-in/sign-in.component.ts");
/* harmony import */ var _charityComponents_charity_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charityComponents/charity-user/sign-up/sign-up.component */ "./src/app/charityComponents/charity-user/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _adminComponents_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adminComponents/admin-login/admin-login.component */ "./src/app/adminComponents/admin-login/admin-login.component.ts");
/* harmony import */ var _adminComponents_adminpanel_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminComponents/adminpanel/admin.component */ "./src/app/adminComponents/adminpanel/admin.component.ts");
/* harmony import */ var _services_AuthGuard_Admin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/AuthGuard.Admin */ "./src/app/services/AuthGuard.Admin.ts");
/* harmony import */ var _services_AuthGuard_Charity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/AuthGuard.Charity */ "./src/app/services/AuthGuard.Charity.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _adminComponents_admin_das_admin_das_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./adminComponents/admin-das/admin-das.component */ "./src/app/adminComponents/admin-das/admin-das.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _dashboard_summary_summary_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/summary/summary.component */ "./src/app/dashboard/summary/summary.component.ts");
/* harmony import */ var _dashboard_activities_activities_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/activities/activities.component */ "./src/app/dashboard/activities/activities.component.ts");
/* harmony import */ var _dashboard_pledges_pledges_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/pledges/pledges.component */ "./src/app/dashboard/pledges/pledges.component.ts");
/* harmony import */ var _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/messaging.service */ "./src/app/services/messaging.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _charityComponents_charity_user_stripe_payment_stripe_payment_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./charityComponents/charity-user/stripe-payment/stripe-payment.component */ "./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.ts");
/* harmony import */ var _charityComponents_charity_user_stripe_respond_stripe_respond_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./charityComponents/charity-user/stripe-respond/stripe-respond.component */ "./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.ts");
/* harmony import */ var _dashboard_payouts_payouts_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dashboard/payouts/payouts.component */ "./src/app/dashboard/payouts/payouts.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");





// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { ModalModule } from 'ngx-bootstrap/modal';


// import { NgbdDatepickerPopup } from './datepicker-popup';

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _charityComponents_charity_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _charityComponents_charity_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
                _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_12__["StartPageComponent"],
                _adminComponents_adminpanel_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _adminComponents_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_13__["AdminLoginComponent"],
                _adminComponents_adminpanel_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_18__["NavBarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _adminComponents_admin_das_admin_das_component__WEBPACK_IMPORTED_MODULE_20__["AdminDasComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _dashboard_summary_summary_component__WEBPACK_IMPORTED_MODULE_22__["SummaryComponent"],
                _dashboard_activities_activities_component__WEBPACK_IMPORTED_MODULE_23__["ActivitiesComponent"],
                _dashboard_pledges_pledges_component__WEBPACK_IMPORTED_MODULE_24__["PledgesComponent"],
                _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_25__["HelpComponent"],
                _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_32__["FilterPipe"],
                _charityComponents_charity_user_stripe_payment_stripe_payment_component__WEBPACK_IMPORTED_MODULE_36__["StripePaymentComponent"],
                _charityComponents_charity_user_stripe_respond_stripe_respond_component__WEBPACK_IMPORTED_MODULE_37__["StripeRespondComponent"],
                _dashboard_payouts_payouts_component__WEBPACK_IMPORTED_MODULE_38__["PayoutsComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyPolicyComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["routes"], { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_33__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_30__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_31__["AngularFireAuthModule"],
                _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_29__["AngularFireMessagingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_33__["NgxPaginationModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_34__["FilterPipeModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerModule"],
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], _services_AuthGuard_Admin__WEBPACK_IMPORTED_MODULE_15__["AuthGaurd"], _services_AuthGuard_Charity__WEBPACK_IMPORTED_MODULE_16__["AuthGaurd1"], _services_messaging_service__WEBPACK_IMPORTED_MODULE_27__["MessagingService"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["AsyncPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.BASE_URL = baseUrl;
    AppSettings.PAYMENT_REPORT = '/v1/charityAdmin/getReports';
    AppSettings.CHARITY_REGISTER = '/v1/charities/addCharities';
    AppSettings.ADMIN_LOGIN = '/v1/authenticate/login?role=admin';
    AppSettings.CHARITY_ALL = '/v1/admin/charitiesList';
    AppSettings.APPROVE_CHARITY = '/v1/admin/approveCharity';
    AppSettings.CHARITY_LOGIN = '/v1/charities/login';
    AppSettings.SEARCH_REPORT = '/v1/charityAdmin/searchReports';
    AppSettings.SEND_MESSAGE = '/v1/userDetails/adminhelp';
    AppSettings.PLEDGES_LIST = '/v1/gift/pledgeDetails';
    AppSettings.BALANCE = '/v1/charityAdmin/connectedBalance';
    AppSettings.DATE_FILTER = '/v1/charityAdmin/dateFilter';
    AppSettings.REPORTS = '/v1/charityAdmin/getAllReports';
    AppSettings.GET_CHARITY_ID = '/v1/admin/getCharityById/';
    AppSettings.EDIT_CHARITY = '/v1/admin/editCharity/';
    AppSettings.STIPE_ID = '/v1/charityAdmin/authorize';
    AppSettings.PAYOUT = '/v1/charityAdmin/payout';
    AppSettings.CHECK_STATUS = '/v1/charityAdmin/statusCheckAll';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/charityComponents/charity-user/sign-in/sign-in.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/sign-in/sign-in.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    /* background-image: url('../../../../assets/Images/login.jpeg'); */\n    height: 100vh;\n    background-position: center;\n    background-size: cover;\n    opacity: .9;\n    font-family: 'lato', sans-serif;\n    border-radius: 0%;\n    background-image:  url('login.jpeg');\n}\n\n.navbar{\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 0.9rem;\n    letter-spacing: .1rem;\n    background-color: white !important;\n    /* background: rgba(0,0,0,0.6) !important; */\n    /* opacity: .9; */\n  }\n\n.navbar-nav li{\n  padding-right: .7rem;\n  }\n\n.navbar-dark .navbar-nav .nav-link{\n    /* color: white; */\n    padding-top: .8rem;\n  }\n\n.card {\n    box-shadow: 0 5px 10px rgba(0,0,0,0.3);\n    display: flex;\n    padding: 3rem;\n    /* background-color: rgb(8, 7, 7); */\n    opacity: 0.9;\n    margin-top: 10%;\n    border-radius: 0%;\n    width: 450px;\n}\n\n.btn-md{\n    border-radius: 0;\n    border-width: medium;\n    /* padding: .6rem 1.3rem; */\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: rgb(250, 251, 251);\n    background-color:  rgb(47, 198, 218);\n  }\n\n/* .btn-md:hover{\n    color: rgb(247, 252, 252);\n    background: rgb(14, 207, 207)\n  } */\n\n.form-control{\n    /* background: #201f1f; */\n    /* height: 150%;  */\n    /* color: rgb(241, 236, 236) !important; */\n    \n    /* outline: #201f1f; */\n    border-radius: 0%;\n  }\n\n.welcome{\n    font-size: 1.3rem;\n    font-weight: 600;\n    color: rgb(12, 204, 204);\n    text-shadow: .1rem .1rem .5rem rgb(236, 233, 233);\n    \n}\n\n.form-group{\n    color: rgb(243, 240, 240);\n    font-weight: 600;\n    outline: white;\n    letter-spacing: 0.5px;\n    border-radius: 0%;\n  }\n\n.forgot-password {\n    color: #000;\n    font-size: .8rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    transition: letter-spacing .3s ease-in-out;\n    float: right;\n    padding-right: 2rem;\n}\n\n.forgot-password:hover {\n  letter-spacing: 1px;\n}\n\nfooter{\n    background-color: #40474e;\n    color: white;\n    padding: 2rem 0 2rem;\n    margin-top: 1rem;\n  }\n\n.form-input {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.form-input > label {\n    color: #2C3A47;\n    font-weight: bold;\n    margin: 0;\n    text-transform: uppercase;\n    transition: color 0.3s ease-in-out;\n}\n\n.form-input > input[type=\"text\"]:focus + label,\n.form-input > input[type=\"password\"]:focus + label {\n    color: #3E3ED9;\n}\n\nform input {\n    margin-bottom: 20px;\n    width: 100%;\n}\n\n.form-input > input[type=\"text\"],\n.form-input > input[type=\"password\"] {\n    border: none;\n    border-bottom: 2px solid #2C3A47;\n    height: 30px;\n    outline: none;\n    transition: border-bottom .3s ease-in-out;\n}\n\n.form-input > input[type=\"text\"]:focus,\n.form-input > input[type=\"password\"]:focus {\n    border-bottom: 2px solid #FD7272;\n}\n\n.fa-eye{\n margin-left: 90%;\n margin-top: -1%;\n}\n\n.btn-lg{\n  color: #ffffff;\n  background: rgb(28, 240, 240);\n  border-radius: 0%;\n  font-size: 1rem;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUNvbXBvbmVudHMvY2hhcml0eS11c2VyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUVBQW1FO0lBQ25FLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLG9DQUE4RDtBQUNsRTs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsNENBQTRDO0lBQzVDLGlCQUFpQjtFQUNuQjs7QUFFQTtFQUNBLG9CQUFvQjtFQUNwQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9DQUFvQztFQUN0Qzs7QUFDQTs7O0tBR0c7O0FBQ0w7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDBDQUEwQzs7SUFFMUMsc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGlEQUFpRDs7QUFFckQ7O0FBQ0U7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztBQUdGO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHlDQUF5QztBQUM3Qzs7QUFFQTs7SUFFSSxnQ0FBZ0M7QUFDcEM7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jaGFyaXR5Q29tcG9uZW50cy9jaGFyaXR5LXVzZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL0ltYWdlcy9sb2dpbi5qcGVnJyk7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBvcGFjaXR5OiAuOTtcbiAgICBmb250LWZhbWlseTogJ2xhdG8nLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvbG9naW4uanBlZycpO1xufVxuXG4ubmF2YmFye1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNikgIWltcG9ydGFudDsgKi9cbiAgICAvKiBvcGFjaXR5OiAuOTsgKi9cbiAgfVxuXG4gIC5uYXZiYXItbmF2IGxpe1xuICBwYWRkaW5nLXJpZ2h0OiAuN3JlbTtcbiAgfVxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5re1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgICBwYWRkaW5nLXRvcDogLjhyZW07XG4gIH1cblxuLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgNywgNyk7ICovXG4gICAgb3BhY2l0eTogMC45O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICB3aWR0aDogNDUwcHg7XG59XG4uYnRuLW1ke1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XG4gICAgLyogcGFkZGluZzogLjZyZW0gMS4zcmVtOyAqL1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHJnYigyNTAsIDI1MSwgMjUxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDQ3LCAxOTgsIDIxOCk7XG4gIH1cbiAgLyogLmJ0bi1tZDpob3ZlcntcbiAgICBjb2xvcjogcmdiKDI0NywgMjUyLCAyNTIpO1xuICAgIGJhY2tncm91bmQ6IHJnYigxNCwgMjA3LCAyMDcpXG4gIH0gKi9cbi5mb3JtLWNvbnRyb2x7XG4gICAgLyogYmFja2dyb3VuZDogIzIwMWYxZjsgKi9cbiAgICAvKiBoZWlnaHQ6IDE1MCU7ICAqL1xuICAgIC8qIGNvbG9yOiByZ2IoMjQxLCAyMzYsIDIzNikgIWltcG9ydGFudDsgKi9cbiAgICBcbiAgICAvKiBvdXRsaW5lOiAjMjAxZjFmOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICB9XG4gXG4ud2VsY29tZXtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2IoMTIsIDIwNCwgMjA0KTtcbiAgICB0ZXh0LXNoYWRvdzogLjFyZW0gLjFyZW0gLjVyZW0gcmdiKDIzNiwgMjMzLCAyMzMpO1xuICAgIFxufVxuICAuZm9ybS1ncm91cHtcbiAgICBjb2xvcjogcmdiKDI0MywgMjQwLCAyNDApO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgb3V0bGluZTogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICB9XG5cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRyYW5zaXRpb246IGxldHRlci1zcGFjaW5nIC4zcyBlYXNlLWluLW91dDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZDpob3ZlciB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NzRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtIDAgMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgLmZvcm0taW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4uZm9ybS1pbnB1dCA+IGxhYmVsIHtcbiAgICBjb2xvcjogIzJDM0E0NztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1pbnB1dCA+IGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzICsgbGFiZWwsXG4uZm9ybS1pbnB1dCA+IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyArIGxhYmVsIHtcbiAgICBjb2xvcjogIzNFM0VEOTtcbn1cblxuZm9ybSBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0taW5wdXQgPiBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi5mb3JtLWlucHV0ID4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyQzNBNDc7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWlucHV0ID4gaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG4uZm9ybS1pbnB1dCA+IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRDcyNzI7XG59XG4uZmEtZXlle1xuIG1hcmdpbi1sZWZ0OiA5MCU7XG4gbWFyZ2luLXRvcDogLTElO1xufVxuLmJ0bi1sZ3tcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYigyOCwgMjQwLCAyNDApO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/charityComponents/charity-user/sign-in/sign-in.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/sign-in/sign-in.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-expand-md navbar-dark bg-light static-top\">\n    <a class=\"navbar-brand\" [routerLink]=\"[ '/home']\"><img src=\"./assets/Images/logo.png\" width=\"60\" height=\"60\"></a>\n   \n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n      </ul>\n    </div>\n  </nav>\n  <div class=\"container-fluid \">\n  <div class=\"container narrow col-md-6 \">\n    <div class=\" row justify-content-center\">\n      <div class=\"card \">\n        \n        <div *ngIf=\"error?.message\" class=\"alert alert-danger\" role=\"alert\">\n            <strong>{{error.message}}</strong>\n               </div>\n        <h5 class=\"welcome text-center\">Log in to Quber </h5>\n        <form role=\"form\" (ngSubmit)=\"loginSubmit()\" [formGroup]=\"loginForm\">\n            <div class=\"form-input\">\n              <input type=\"text\" id=\"username\" placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"service.charityLogin.email\">\n              <div *ngIf=\"\n                        loginForm.controls['email'].touched &&\n                        !loginForm.controls['email'].valid\n                      \">\n                <small *ngIf=\"loginForm.controls['email'].hasError('required')\" style=\"color:red;\">\n                  Please enter the email!\n                </small>\n              </div>\n              <!-- <label for=\"username\">username</label> -->\n            </div>\n            <div class=\"form-input\">\n              <input [type]=\"passwordType\" id=\"password\" placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"service.charityLogin.password\">\n              <i class=\"fas fa-eye\"(click)=\"togglePwd()\"></i>\n              <div *ngIf=\"\n                      loginForm.controls['password'].touched &&\n                      !loginForm.controls['password'].valid\n                    \">\n                <small *ngIf=\"loginForm.controls['password'].hasError('required')\" style=\"color:red;\">\n                  Please enter the password!\n                </small>\n              </div>\n              <!-- <label for=\"password\">password</label>  -->\n            </div>\n            <input type=\"submit\" class=\"btn btn-lg btn-outline-light\" value=\"LOGIN\">\n            <!-- <a href=\"#\" class=\"forgot-password\">forgot password?</a> -->\n          </form>\n        <div class=\"reg row narrow text-center\">\n          <div class=\"col\">\n           <button type=\"button\" class=\"btn btn-outline-light\" style=\"color:blue\" (click)=\"register()\">Not yet registered? Register</button> \n          </div>\n        \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/charityComponents/charity-user/sign-in/sign-in.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/sign-in/sign-in.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(service, router, fb) {
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.passwordType = 'password';
        this.passwordShown = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.loginForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    };
    SignInComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.service.charityLogin = {
            email: '',
            password: ''
        };
    };
    // toggel Password
    SignInComponent.prototype.togglePwd = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    };
    SignInComponent.prototype.loginSubmit = function () {
        var _this = this;
        var data = { "email": this.service.charityLogin.email, "password": this.service.charityLogin.password };
        this.service.CharityLogin(data).subscribe(function (response) {
            if (response.success) {
                // console.log(response);
                localStorage.setItem("jwt", response.result.jwt);
                localStorage.setItem('user', response.result.resp['_id']);
                _this.resetForm();
                _this.router.navigate(['dashboard/summary']);
            }
            else {
                // console.log(response);
                _this.error = response;
            }
        }, function (err) {
            _this.error = err.error;
        });
    };
    SignInComponent.prototype.register = function () {
        this.router.navigate(['signup']);
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/charityComponents/charity-user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/charityComponents/charity-user/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/charityComponents/charity-user/sign-up/sign-up.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/sign-up/sign-up.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n  background-image:  radial-gradient(rgb(13, 184, 184), rgb(21, 201, 171), rgb(27, 208, 221));\n  /* height: 100vh; */\n  /* background-position: center; */\n  background-size: cover;\n  opacity: .9;\n  font-family: 'lato', sans-serif;\n  border-radius: 0%;\n  background-position-x: center\n}\n\n.navbar{\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 0.9rem;\n  letter-spacing: .1rem;\n  background-color: white !important;\n  /* background: rgba(0,0,0,0.6) !important; */\n  /* opacity: .9; */\n}\n\n.navbar-nav li{\npadding-right: .7rem;\n}\n\n.navbar-dark .navbar-nav .nav-link{\n  /* color: white; */\n  padding-top: .8rem;\n}\n\n.btn-lg{\n  border-radius: 25px;\n  border-width: medium;\n  padding: .6rem 1.3rem;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: white;\n  background: rgb(15, 221, 228)\n}\n\n.card{\n  font-family: 'lato',sans-serif;\n  \n}\n\n.card h3{\n  font-size: 2rem;\n  font-weight: 700;\n  color: rgb(20, 197, 197);\n  text-shadow: 2rem  rgb(14, 204, 141);\n  padding: 2rem;\n}\n\n.card h5{\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding:.1rem;\n\n}\n\nsmall{\n  color: rgb(219, 24, 24);\n}\n\n.form-control{\n  border-radius: 0%;\n  padding: .1rem;\n}\n\n.form-group{\n  color: rgb(243, 240, 240);\n  font-weight: 600;\n  outline: white;\n  letter-spacing: 0.5px;\n  border-radius: 0%;\n}\n\n.form-check-label{\n  color: black !important;\n}\n\n.image-upload img\n{\nwidth: 80px;\ncursor: pointer;\n}\n\n.image-upload > input\n{\n    display: none;\n}\n\n.image-upload img\n{\n    width: 80px;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUNvbXBvbmVudHMvY2hhcml0eS11c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkZBQTJGO0VBQzNGLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLDRDQUE0QztFQUM1QyxpQkFBaUI7QUFDbkI7O0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7QUFDRjs7QUFDQTtFQUNFLDhCQUE4Qjs7QUFFaEM7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhOztBQUVmOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBOztBQUVBLFdBQVc7QUFDWCxlQUFlO0FBQ2Y7O0FBQ0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NoYXJpdHlDb21wb25lbnRzL2NoYXJpdHktdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICByYWRpYWwtZ3JhZGllbnQocmdiKDEzLCAxODQsIDE4NCksIHJnYigyMSwgMjAxLCAxNzEpLCByZ2IoMjcsIDIwOCwgMjIxKSk7XG4gIC8qIGhlaWdodDogMTAwdmg7ICovXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogLjk7XG4gIGZvbnQtZmFtaWx5OiAnbGF0bycsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlclxufVxuXG4ubmF2YmFye1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNikgIWltcG9ydGFudDsgKi9cbiAgLyogb3BhY2l0eTogLjk7ICovXG59XG4ubmF2YmFyLW5hdiBsaXtcbnBhZGRpbmctcmlnaHQ6IC43cmVtO1xufVxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGlua3tcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xuICBwYWRkaW5nLXRvcDogLjhyZW07XG59XG5cbi5idG4tbGd7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xuICBwYWRkaW5nOiAuNnJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYigxNSwgMjIxLCAyMjgpXG59XG4uY2FyZHtcbiAgZm9udC1mYW1pbHk6ICdsYXRvJyxzYW5zLXNlcmlmO1xuICBcbn1cbi5jYXJkIGgze1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZ2IoMjAsIDE5NywgMTk3KTtcbiAgdGV4dC1zaGFkb3c6IDJyZW0gIHJnYigxNCwgMjA0LCAxNDEpO1xuICBwYWRkaW5nOiAycmVtO1xufVxuLmNhcmQgaDV7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOi4xcmVtO1xuXG59XG5zbWFsbHtcbiAgY29sb3I6IHJnYigyMTksIDI0LCAyNCk7XG59XG4uZm9ybS1jb250cm9se1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgcGFkZGluZzogLjFyZW07XG59XG4uZm9ybS1ncm91cHtcbiAgY29sb3I6IHJnYigyNDMsIDI0MCwgMjQwKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3V0bGluZTogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgYm9yZGVyLXJhZGl1czogMCU7XG59XG4uZm9ybS1jaGVjay1sYWJlbHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4uaW1hZ2UtdXBsb2FkIGltZ1xue1xud2lkdGg6IDgwcHg7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1hZ2UtdXBsb2FkID4gaW5wdXRcbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW1hZ2UtdXBsb2FkIGltZ1xue1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/charityComponents/charity-user/sign-up/sign-up.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/sign-up/sign-up.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light static-top\">\n  <a class=\"navbar-brand\"[routerLink]=\"[ '/home']\"><img src=\"./assets/Images/logo.png\" width=\"60\"\n      height=\"60\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item \">\n        <button type=\"button\" class=\"btn btn-lg\" (click)=\"Login() \">LOGIN</button>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n<div class=\"container-fluid \">\n  <pre>\n\n </pre>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card\">\n          <div class=\"container\">\n            <br>\n\n            <h3 class=\"welcome text-center\">Register your charity</h3>\n            <hr>\n            <h5>Charity details</h5>\n            <!-- <small style=\"color:black\">All fields are mandatory</small> -->\n            <br>\n            <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\"\n              class=\"main-form\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <input formControlName=\"charityName\" placeholder=\"Charity Name\" type=\"text\" id=\"charityName\"\n                      class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.charityName\" autofocus\n                      required />\n                    <div *ngIf=\"\n                registerForm.controls['charityName'].touched &&\n                !registerForm.controls['charityName'].valid\n              \">\n                      <small *ngIf=\"registerForm.controls['charityName'].hasError('required')\" style=\"color:red;\">\n                        Please enter the charity name\n                      </small>\n                      <!-- <small *ngIf=\"registerForm.controls['charityName'].hasError('pattern')\" style=\"color:red;\">\n                Charity name must contain minimum only 10 and maximum 50 characters!\n                </small> -->\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <input type=\"file\" formControlName=\"charityLogos\"\n                    [(ngModel)]=\"charityServices.selectedCharity.charityLogos\" (change)=\"charityLogos($event)\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <!-- <div class=\"col\">\n                      <div class=\"image-upload\">\n                        <label for=\"charityLogos\">\n                        <i class=\"fas fa-cloud-upload-alt fa-5x\" (click)=\"charityLogos()\"></i>\n                        Upload Charity Logo\n                        </label>\n                        <input id=\"charityLogos\" type=\"file\" formControlName = \"charityLogos\" [(ngModel)]=\"charityServices.selectedCharity.charityLogos\" (change)=\"charityLogos($event)\"/>\n                        </div>\n                    </div> -->\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <textarea formControlName=\"description\" type=\"text\" placeholder=\"Description\" id=\"description\"\n                      class=\"form-control\" rows=\"3\" [(ngModel)]=\"charityServices.selectedCharity.description\" autofocus\n                      required></textarea>\n                    <div *ngIf=\"\n                  registerForm.controls['description'].touched &&\n                  !registerForm.controls['description'].valid\n                \">\n                      <small *ngIf=\"registerForm.controls['description'].hasError('required')\" style=\"color:red;\">\n                        Please enter the description\n                      </small>\n                      <small *ngIf=\"registerForm.controls['description'].hasError('pattern')\" style=\"color:red;\">\n                        Description must contain minimum 50 and maximum 250 characters\n                      </small>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <div class=\"\">\n                      <input formControlName=\"email\" type=\"text\" id=\"email\" placeholder=\"Email Id\" class=\"form-control\"\n                        [(ngModel)]=\"charityServices.selectedCharity.email\" autofocus required />\n                      <div *ngIf=\"\n                        registerForm.controls['email'].touched &&\n                        !registerForm.controls['email'].valid \n                      \">\n                        <small *ngIf=\"registerForm.controls['email'].hasError('required')\" style=\"color:red;\">\n                          Please enter the email Id\n                        </small>\n                        <small *ngIf=\"registerForm.controls['email'].hasError('pattern')\" style=\"color:red;\">\n                          Please enter valid email Id\n                        </small>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <input formControlName=\"phoneNumber\" type=\"text\" placeholder=\"Phone number\" id=\"phoneNumber\"\n                      class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.phoneNumber\" autofocus\n                      required />\n                    <div *ngIf=\"\n                  registerForm.controls['phoneNumber'].touched &&\n                  !registerForm.controls['phoneNumber'].valid\n                \">\n                      <small *ngIf=\"registerForm.controls['phoneNumber'].hasError('required')\" style=\"color:red;\">\n                        please enter contact number\n                      </small>\n                      <small *ngIf=\"registerForm.controls['phoneNumber'].hasError('pattern')\" style=\"color:red;\">\n                        please enter valid contact number\n                      </small>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <div class=\"\">\n                      <input formControlName=\"taxId\" type=\"text\" id=\"taxId\" placeholder=\"Tax Id\" class=\"form-control\"\n                        [(ngModel)]=\"charityServices.selectedCharity.taxId\" autofocus required />\n                      <div *ngIf=\"\n                          registerForm.controls['taxId'].touched &&\n                          !registerForm.controls['taxId'].valid \n                        \">\n                        <small *ngIf=\"registerForm.controls['taxId'].hasError('required')\" style=\"color:red;\">\n                          Please enter the tax Id\n                        </small>\n                        <small *ngIf=\"registerForm.controls['taxId'].hasError('pattern')\" style=\"color:red;\">\n                          Please enter valid 9 digit tax Id\n                        </small>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <div class=\"\">\n                      <textarea formControlName=\"address\" type=\"text\" id=\"address\" placeholder=\"Address \"\n                        class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.address\" autofocus\n                        required></textarea>\n                      <div *ngIf=\"\n                          registerForm.controls['address'].touched &&\n                          !registerForm.controls['address'].valid \n                        \">\n                        <small *ngIf=\"registerForm.controls['address'].hasError('required')\" style=\"color:red;\">\n                          Please enter the address\n                        </small>\n                        <small *ngIf=\"registerForm.controls['address'].hasError('pattern')\" style=\"color:red;\">\n                          Address must contain minimum 20 characters\n                        </small>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <div class=\"\">\n                      <input formControlName=\"country\" type=\"text\" id=\"country\" placeholder=\"Country\"\n                        class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.country\" autofocus required />\n                      <div *ngIf=\"\n                            registerForm.controls['country'].touched &&\n                            !registerForm.controls['country'].valid \n                          \">\n                        <small *ngIf=\"registerForm.controls['country'].hasError('required')\" style=\"color:red;\">\n                          Please enter the country\n                        </small>\n                        <small *ngIf=\"registerForm.controls['country'].hasError('pattern')\" style=\"color:red;\">\n                          Please enter the valid country\n                        </small>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <input formControlName=\"state\" type=\"text\" id=\"state\" placeholder=\"State\" class=\"form-control\"\n                      [(ngModel)]=\"charityServices.selectedCharity.state\" autofocus required />\n                    <div *ngIf=\"\n                      registerForm.controls['state'].touched &&\n                      !registerForm.controls['state'].valid\n                    \">\n                      <small *ngIf=\"registerForm.controls['state'].hasError('required')\" style=\"color:red;\">\n                        Please enter the state\n                      </small>\n                      <small *ngIf=\"registerForm.controls['state'].hasError('pattern')\" style=\"color:red;\">\n                        Please enter valid state\n                      </small>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <div class=\"\">\n                      <input formControlName=\"city\" type=\"text\" id=\"city\" class=\"form-control\" placeholder=\"City\"\n                        [(ngModel)]=\"charityServices.selectedCharity.city\" autofocus required />\n                      <div *ngIf=\"\n                              registerForm.controls['city'].touched &&\n                              !registerForm.controls['city'].valid \n                            \">\n                        <small *ngIf=\"registerForm.controls['city'].hasError('required')\" style=\"color:red;\">\n                          Please enter the city\n                        </small>\n                        <small *ngIf=\"registerForm.controls['city'].hasError('pattern')\" style=\"color:red;\">\n                          Please enter valid city\n                        </small>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <input formControlName=\"zipcode\" type=\"text\" id=\"zipcode\" placeholder=\"Zipcode\" class=\"form-control\"\n                      [(ngModel)]=\"charityServices.selectedCharity.zipcode\" autofocus required />\n                    <div *ngIf=\"\n                        registerForm.controls['zipcode'].touched &&\n                        !registerForm.controls['zipcode'].valid\n                      \">\n                      <small *ngIf=\"registerForm.controls['zipcode'].hasError('required')\" style=\"color:red;\">\n                        Please enter the zipcode\n                      </small>\n                      <small *ngIf=\"registerForm.controls['zipcode'].hasError('pattern')\" style=\"color:red;\">\n                        Please enter valid 5 digit zipcode\n                      </small>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5>Primary contact details</h5>\n                  <!-- <small style=\"color:black\">All fields are mandatory</small> -->\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <input formControlName=\"firstName\" type=\"text\" placeholder=\"First name\" id=\"firstName\"\n                      class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.firstName\" autofocus required />\n                    <div *ngIf=\"\n                    registerForm.controls['firstName'].touched &&\n                    !registerForm.controls['firstName'].valid\n                  \">\n                      <small *ngIf=\"registerForm.controls['firstName'].hasError('required')\" style=\"color:red;\">\n                        Please enter the first name\n                      </small>\n                      <small *ngIf=\"registerForm.controls['firstName'].hasError('pattern')\" style=\"color:red;\">\n                  Please enter valid first name\n                </small>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n                    <input formControlName=\"lastName\" type=\"text\" placeholder=\"Last name\" id=\"lastName\"\n                      class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.lastName\" autofocus required />\n                    <div *ngIf=\"\n                        registerForm.controls['lastName'].touched &&\n                        !registerForm.controls['lastName'].valid\n                      \">\n                      <small *ngIf=\"registerForm.controls['lastName'].hasError('required')\" style=\"color:red;\">\n                        Please enter the last name\n                      </small>\n                      <small *ngIf=\"registerForm.controls['lastName'].hasError('pattern')\" style=\"color:red;\">\n                  Please enter valid last name\n                </small>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n\n                    <input formControlName=\"userEmail\" type=\"text\" id=\"userEmail\" placeholder=\"Email Id\"\n                      class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.userEmail\" autofocus required />\n                    <div *ngIf=\"\n                        registerForm.controls['userEmail'].touched &&\n                        !registerForm.controls['userEmail'].valid\n                      \">\n                      <small *ngIf=\"registerForm.controls['userEmail'].hasError('required')\" style=\"color:red;\">\n                        Please enter the email\n                      </small>\n                      <small *ngIf=\"registerForm.controls['userEmail'].hasError('pattern')\" style=\"color:red;\">\n                        Please enter the valid email\n                      </small>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"form-group\">\n\n                    <input formControlName=\"contact\" type=\"text\" id=\"contact\" placeholder=\"Phone Number\"\n                      class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.contact\" autofocus required />\n                    <div *ngIf=\"\n                            registerForm.controls['contact'].touched &&\n                            !registerForm.controls['contact'].valid\n                          \">\n                      <small *ngIf=\"registerForm.controls['contact'].hasError('required')\" style=\"color:red;\">\n                        Please enter the phone number\n                      </small>\n                      <small *ngIf=\"registerForm.controls['contact'].hasError('pattern')\" style=\"color:red;\">\n                        Please enter the valid phone number\n                      </small>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-group\">\n\n                    <textarea formControlName=\"userAddress\" type=\"text\" id=\"userAddress\" placeholder=\"Address\"\n                      class=\"form-control\" [(ngModel)]=\"charityServices.selectedCharity.userAddress\" autofocus\n                      required></textarea>\n                    <div *ngIf=\"\n                          registerForm.controls['userAddress'].touched &&\n                          !registerForm.controls['userAddress'].valid\n                        \">\n                      <small *ngIf=\"registerForm.controls['userAddress'].hasError('required')\" style=\"color:red;\">\n                        Please enter the address\n                      </small>\n                      <!-- <small *ngIf=\"registerForm.controls['userAddress'].hasError('pattern')\" style=\"color:red;\">\n                  Address must contain minimum 20 characters!\n                </small> -->\n                    </div>\n                  </div>\n                </div>\n\n\n                <div class=\"col\">\n                  <div class=\"form-group\">\n\n                    <input formControlName=\"pincode\" type=\"text\" id=\"pincode\" placeholder=\"Zipcode\" class=\"form-control\"\n                      [(ngModel)]=\"charityServices.selectedCharity.pincode\" autofocus required />\n                    <div *ngIf=\"\n                            registerForm.controls['pincode'].touched &&\n                            !registerForm.controls['pincode'].valid\n                          \">\n                      <small *ngIf=\"registerForm.controls['pincode'].hasError('required')\" style=\"color:red;\">\n                        Please enter the zipcode\n                      </small>\n                      <small *ngIf=\"registerForm.controls['pincode'].hasError('pattern')\" style=\"color:red;\">\n                        Please enter valid 5 digit zipcode\n                      </small>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"col\">\n                <div class=\"form-group\" >\n                  <a href=\"https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://stripe.com/connect/default/oauth/       test&client_id=ca_EeCnGZY8hOVM2FWVI5sKxCS2gsXPZm1I&state={STATE_VALUE}\" (click)=\"flag=1\"> Setup payments for Quber </a>\n                </div>\n              </div> -->\n              <hr>\n\n\n              <div class=\"form-group\">\n                <div class=\"form-check\" style=\"text-align:center\">\n                  <input formControlName=\"check\" class=\"form-check-input is-invalid\" type=\"checkbox\" value=\"\" id=\"check\"\n                    autofocus required>\n                  <label class=\"form-check-label\" for=\"invalidCheck3\">\n                    Agree to terms and conditions\n                  </label>\n                  <div *ngIf=\"\n                  registerForm.controls['check'].touched &&\n                  registerForm.controls['check'].touched &&\n                  !registerForm.controls['check'].valid\n                \">\n                    <small *ngIf=\"registerForm.controls['check'].hasError('required')\" style=\"color:red;\">\n                      You must agree before submitting.\n                    </small>\n                  </div>\n                  <!-- <div class=\"invalid-feedback\">\n                    You must agree before submitting.\n                  </div> -->\n                </div>\n              </div>\n              <div class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-lg btn-outline-light\" (click)=\"back()\">BACK</button>\n                <input type=\"submit\" class=\"btn btn-lg btn-outline-light\" value=\"REGISTER\">\n              </div>\n            </form>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/charityComponents/charity-user/sign-up/sign-up.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/sign-up/sign-up.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router, fb, charityServices) {
        this.router = router;
        this.fb = fb;
        this.charityServices = charityServices;
        // charityLogoFile: any;
        this.charityLogoFile = null;
    }
    SignUpComponent.prototype.charityLogos = function (event) {
        // console.log(event.target.files);
        this.charityLogoFile = event.target.files[0];
    };
    SignUpComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.registerForm = this.fb.group({
            charityName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{10}$')]],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            zipcode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{5}$')]],
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]{1,20}$')]],
            state: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]{1,20}$')]],
            country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]{2,30}$')]],
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]{1,30}$')]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]{1,30}$')]],
            charityLogos: [null],
            pincode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{5}$')]],
            contact: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{10}$')]],
            taxId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{9}$')]],
            userEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            check: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SignUpComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.charityServices.selectedCharity = {
            _id: "",
            charityName: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: null,
            description: "",
            address: "",
            userAddress: "",
            city: "",
            state: "",
            zipcode: null,
            suggested: false,
            country: "",
            charityLogos: null,
            taxId: "",
            contact: null,
            userEmail: "",
            pincode: null,
            check: null,
        };
    };
    SignUpComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.registerForm.valid) {
            var formData = this.createFormData(this.registerForm.value);
            this.charityServices
                .registerCharity(this.registerForm.value)
                .subscribe(function (res) {
                // console.log(res);
                if (res) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Great!", "Succefully registered your charity", "success");
                    _this.registerForm.reset();
                }
            }, function (err) {
                // console.log(err,'err');
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Oops!", "Email is already registerd", "info");
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Oops!", "Please fill the form!", "warning");
        }
    };
    SignUpComponent.prototype.createFormData = function (formValues) {
        var formData = new FormData();
        Object.keys(formValues).map(function (key) {
            formData.append(key, formValues[key]);
        });
        formData.append('charityLogos', this.charityLogoFile);
        // console.log('formData', formData);
        return formData;
    };
    SignUpComponent.prototype.Login = function () {
        this.router.navigate(['/signin']);
    };
    SignUpComponent.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    SignUpComponent.prototype.navigateLogin = function () {
        this.router.navigate(['signup']);
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/charityComponents/charity-user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/charityComponents/charity-user/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.wrap-card{\n  /* background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%); */\n  padding: 2rem;\n  /* margin: 30px; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* height: 100vh; */\n  margin: 0 auto;\n}\n\na {\n  box-shadow: 0 5px 10px rgba(0,0,0,0.3);\n  padding: 20px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUNvbXBvbmVudHMvY2hhcml0eS11c2VyL3N0cmlwZS1wYXltZW50L3N0cmlwZS1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUVBQW1FO0VBQ25FLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NoYXJpdHlDb21wb25lbnRzL2NoYXJpdHktdXNlci9zdHJpcGUtcGF5bWVudC9zdHJpcGUtcGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud3JhcC1jYXJke1xuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZmRjZDNiIDYwJSwgI2ZmZWQ0YiA2MCUpOyAqL1xuICBwYWRkaW5nOiAycmVtO1xuICAvKiBtYXJnaW46IDMwcHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuYSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  stripe-payment works!\n  <a href=\"https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://stripe.com/connect/default/oauth/       test&client_id=ca_EdhteZ5vPcyNiJ3mjwBWY8q7626UuOCG\n  &state={STATE_VALUE}\" (click)=\"clicked()\"> Setup payments for Quber </a>\n<button (click)=\"clicked()\" >Payment method</button>\n</p> -->\n\n  <div class=\"wrap-card\">\n    <!-- <a href=\"https://connect.stripe.com/express/oauth/authorize?redirect_uri=http://18.222.254.228/quber/dashboard/stripeRespond&client_id=ca_EdhteZ5vPcyNiJ3mjwBWY8q7626UuOCG&state={STATE_VALUE}\"> -->\n    <a href=\"https://connect.stripe.com/express/oauth/authorize?`redirect_uri`=https://18.222.254.228/quber/dashboard/stripeRespond&client_id=ca_EdhteZ5vPcyNiJ3mjwBWY8q7626UuOCG&state={vinay}&stripe_user[business_type]=company\">\n      Setup Stripe details.\n    </a>\n  </div>\n"

/***/ }),

/***/ "./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StripePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentComponent", function() { return StripePaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StripePaymentComponent = /** @class */ (function () {
    function StripePaymentComponent() {
    }
    StripePaymentComponent.prototype.ngOnInit = function () {
    };
    StripePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-stripe-payment",
            template: __webpack_require__(/*! ./stripe-payment.component.html */ "./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.html"),
            styles: [__webpack_require__(/*! ./stripe-payment.component.css */ "./src/app/charityComponents/charity-user/stripe-payment/stripe-payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StripePaymentComponent);
    return StripePaymentComponent;
}());



/***/ }),

/***/ "./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  box-shadow: 0 5px 10px rgba(0,0,0,0.3);\n  /* border: 1px solid black; */\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5rem;\n}\n\n\nbutton {\n  margin: 20px;\n  padding: 10px 20px 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUNvbXBvbmVudHMvY2hhcml0eS11c2VyL3N0cmlwZS1yZXNwb25kL3N0cmlwZS1yZXNwb25kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NoYXJpdHlDb21wb25lbnRzL2NoYXJpdHktdXNlci9zdHJpcGUtcmVzcG9uZC9zdHJpcGUtcmVzcG9uZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cmVtO1xufVxuXG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n Welcome back;\n Thank you for registering stipe details,\n press continue to the dashboard\n <button (click)=\"navDash()\"> Continue </button>\n</p> -->\n"

/***/ }),

/***/ "./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StripeRespondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeRespondComponent", function() { return StripeRespondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




// import { HttpParams } from '@angular/common/http'
var StripeRespondComponent = /** @class */ (function () {
    function StripeRespondComponent(service, activatedRoute, router) {
        // this.path = this.router.url;
        // console.log(this.path.split('=')[0], [1], '');
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activatedRoute.queryParams.subscribe(function (params) {
            // console.log(params['code']);
            _this.AccessCode = params['code'];
            if (params) {
                _this.service.stipeDetail(_this.AccessCode).subscribe(function (res) {
                    // console.log(res);
                });
            }
        });
        // this.path.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        //   params[key] = value;
        // });
    }
    StripeRespondComponent.prototype.ngOnInit = function () {
    };
    StripeRespondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripe-respond',
            template: __webpack_require__(/*! ./stripe-respond.component.html */ "./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.html"),
            styles: [__webpack_require__(/*! ./stripe-respond.component.css */ "./src/app/charityComponents/charity-user/stripe-respond/stripe-respond.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StripeRespondComponent);
    return StripeRespondComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/activities/activities.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/activities/activities.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-fluid{\n    margin-top:15px;\n }\n .container{\n     font-family: 'Poppins', sans-serif;\n }\n h4 {\n    color:rgb(106, 208, 226);\n    font-size: 2rem;\n    font-weight: bold;\n }\n .fa-search{\n     /* color:rgb(16, 144, 204);  */\n    color:white;\n }\n .fa-sort-numeric-asc{\n     /* color: rgb(41, 39, 39);; */\n }\n .btn-outline {\n    color: #f8f9fa;\n    border-color: rgb(106, 208, 226);\n}\n .btn-outline:onClick{ \n    background:rgb(106, 208, 226);\n    color: white;\n    /* border-color: rgb(106, 208, 226) !important; */\n}\n .date{\n     margin-left: 400px;\n }\n thead{\n     background-color: rgb(16, 144, 204);\n     color: white;\n     padding: 15px;\n     background: rgb(106, 208, 226);\n\n }\n .pagination{\n     margin-left: 440px;\n }\n .pagination>.nav-item.active {\n    background-color: rgb(41, 39, 39);;\n    pointer-events: none;\n    color: white;\n}\n .display{\n    font-weight:900;\n    color:rgb(106, 208, 226);\n    font-family: 'poppins';\n}\n /* date select */\n .date-form {\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    background: #ddd;\n}\n #from-date {\n    padding: 0.3rem;\n    margin: 5ox;\n    border: none;\n}\n #to-date {\n    padding: 0.3rem;\n    margin: 5ox;\n    border: none;\n}\n .btn-outline-light{\n    border-radius: 0%;\n    border-color: rgb(106, 208, 226);\n    border-color: transparent;\n}\n .btn-outline-light:hover{\n    border-radius: 0%;\n    border-color: rgb(106, 208, 226);\n    background: rgb(106, 208, 226);\n    border-color: transparent !important;\n}\n .btn-outline-light:onClick{\n    border-color: transparent !important;\n}\n .fa-redo-alt{\n    color:info;\n    border-color: white !important;\n}\n .form-control {\n    border:info;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7Q0FDbEI7Q0FDQTtLQUNJLGtDQUFrQztDQUN0QztDQUNBO0lBQ0csd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7Q0FFQTtLQUNJLDhCQUE4QjtJQUMvQixXQUFXO0NBQ2Q7Q0FDQTtLQUNJLDZCQUE2QjtDQUNqQztDQUVBO0lBQ0csY0FBYztJQUNkLGdDQUFnQztBQUNwQztDQUdDO0lBQ0csNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpREFBaUQ7QUFDckQ7Q0FFQztLQUNJLGtCQUFrQjtDQUN0QjtDQUdBO0tBQ0ksbUNBQW1DO0tBQ25DLFlBQVk7S0FDWixhQUFhO0tBQ2IsOEJBQThCOztDQUVsQztDQUVBO0tBQ0ksa0JBQWtCO0NBQ3RCO0NBRUQ7SUFDSSxpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7Q0FDQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCO0NBRUEsZ0JBQWdCO0NBQ2hCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0NBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7Q0FFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtDQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyx5QkFBeUI7QUFDN0I7Q0FDQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLG9DQUFvQztBQUN4QztDQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0NBQ0E7SUFDSSxVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDO0NBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYWN0aXZpdGllcy9hY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXItZmx1aWR7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuIH1cbiAuY29udGFpbmVye1xuICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuIH1cbiBoNCB7XG4gICAgY29sb3I6cmdiKDEwNiwgMjA4LCAyMjYpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiB9XG5cbiAuZmEtc2VhcmNoe1xuICAgICAvKiBjb2xvcjpyZ2IoMTYsIDE0NCwgMjA0KTsgICovXG4gICAgY29sb3I6d2hpdGU7XG4gfVxuIC5mYS1zb3J0LW51bWVyaWMtYXNje1xuICAgICAvKiBjb2xvcjogcmdiKDQxLCAzOSwgMzkpOzsgKi9cbiB9XG4gXG4gLmJ0bi1vdXRsaW5lIHtcbiAgICBjb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDYsIDIwOCwgMjI2KTtcbn1cblxuXG4gLmJ0bi1vdXRsaW5lOm9uQ2xpY2t7IFxuICAgIGJhY2tncm91bmQ6cmdiKDEwNiwgMjA4LCAyMjYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvKiBib3JkZXItY29sb3I6IHJnYigxMDYsIDIwOCwgMjI2KSAhaW1wb3J0YW50OyAqL1xufVxuXG4gLmRhdGV7XG4gICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcbiB9XG4gXG5cbiB0aGVhZHtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCAxNDQsIDIwNCk7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgcGFkZGluZzogMTVweDtcbiAgICAgYmFja2dyb3VuZDogcmdiKDEwNiwgMjA4LCAyMjYpO1xuXG4gfVxuXG4gLnBhZ2luYXRpb257XG4gICAgIG1hcmdpbi1sZWZ0OiA0NDBweDtcbiB9XG4gXG4ucGFnaW5hdGlvbj4ubmF2LWl0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM5LCAzOSk7O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5kaXNwbGF5e1xuICAgIGZvbnQtd2VpZ2h0OjkwMDtcbiAgICBjb2xvcjpyZ2IoMTA2LCAyMDgsIDIyNik7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJztcbn1cblxuLyogZGF0ZSBzZWxlY3QgKi9cbi5kYXRlLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbiNmcm9tLWRhdGUge1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICBtYXJnaW46IDVveDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiN0by1kYXRlIHtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgbWFyZ2luOiA1b3g7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmJ0bi1vdXRsaW5lLWxpZ2h0e1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDEwNiwgMjA4LCAyMjYpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTA2LCAyMDgsIDIyNik7XG4gICAgYmFja2dyb3VuZDogcmdiKDEwNiwgMjA4LCAyMjYpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5idG4tb3V0bGluZS1saWdodDpvbkNsaWNre1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5mYS1yZWRvLWFsdHtcbiAgICBjb2xvcjppbmZvO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlcjppbmZvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/activities/activities.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/activities/activities.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid padding\">\n  <div class=\"container\">\n    <div class=\"row welcome\">\n      <div class=\"col-12\">\n        <h4>Activities</h4>\n      </div>\n      <div class=\"container padding\">\n        <div class=\"col-12\">\n          <div class=\"table-responsive\">\n            <div class=\"container-fluid col-12\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"dropdown\">\n                    <button class=\"btn btn-outline-info dropdown-toggle\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Filter by date\" type=\"button\" id=\"dropdownMenuButton\"\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Date\n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                     <button class=\"btn\"> <a class=\"dropdown-item\" (click)=\"filter30()\">Last 30 days</a></button>\n                     <button class=\"btn\">  <a class=\"dropdown-item\" (click)=\"filter60()\">Last 60 days</a></button>\n                     <button class=\"btn\">  <a class=\"dropdown-item\" (click)=\"filter18()\">2018</a>\n                      <a class=\"dropdown-item\" (click)=\"filter19()\">2019</a></button>\n                      <form class=\"px-4 py-3\">\n                        <div class=\"form-group\">\n                          <div class=\"jumbotron-fluid\">\n                            <label for=\"date-range\">Date-range</label>\n                            <input type=\"date\" class=\"form-control\" id=\"date-range\" name=\"start\" [(ngModel)]=\"start\" />\n                            <input type=\"date\" class=\"form-control\" id=\"date-range\" name=\"end\" [(ngModel)]=\"end\" />\n                          </div>\n                        </div>\n                      </form>\n                      <button class=\"dropdown-item\" style=\"margin-left: 142px;\" type=\"button\" class=\"btn btn-primary \"\n                        (click)=\"filter()\">\n                        Done\n                      </button>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group form-inline col-8\">\n                  <input class=\"form-control ml-2\" type=\"text\" [(ngModel)]=\"DonarName\" placeholder=\"Search name\"\n                    (input)=\"search()\" />\n                  <!-- <button class=\"btn btn-info\" (click)=\"search()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button> -->\n                </div>\n                <div class=\"\">\n                  <button type=\"button\" class=\"btn btn-outline-info\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Pdf\" (click)=\"downloadPdf()\">\n                    <i class=\"fas fa-file-pdf\"></i> Dowload\n                  </button>\n                </div>\n                <br>\n                &nbsp; &nbsp;\n                <div class=\"\">\n                  <button type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Refresh\" (click)=\"refresh()\"><i\n                      class=\"fas fa-redo-alt\"></i></button>\n                </div>\n              </div>\n            </div>\n            <table *ngIf=\"payments.length > 0\" class=\"table\">\n              <thead class=\"thead\">\n                <tr>\n                  <th>\n                    Date<button class=\"btn btn-outline-light\" (click)=\"sortDate()\">\n                      <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                    </button>\n                  </th>\n                  <th>\n                    Name<button class=\"btn btn-outline-light\" (click)=\"sortStatus()\">\n                      <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                    </button>\n                  </th>\n                  <th>\n                    Donation Status<button class=\"btn btn-outline-light\" (click)=\"sortName()\">\n                      <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                    </button>\n                  </th>\n                  <th>\n                    Total Amount<button class=\"btn btn-outline-light\" (click)=\"sortAmount()\">\n                      <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                    </button>\n                  </th>\n                  \n                  <!-- <th>\n                    Fees<button class=\"btn btn-outline-light\" (click)=\"sortAppfee()\">\n                      <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                    </button>\n                  </th>\n                  <th>\n                    Net Amount<button class=\"btn btn-outline-light\" (click)=\"sortNet()\">\n                      <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                    </button>\n                  </th> -->\n                </tr>\n              </thead>\n\n              <tbody>\n                <tr *ngFor=\"let p of payments; let i = index\">\n                  <td>{{ p.paymentDate | date }}</td>\n                  <td>{{ p.userName }}</td>\n                  <td>{{ p.status }}</td>\n                  <td>{{ p.amount | currency }}</td>\n                  <!-- <td>{{ p.application_fee_amount | currency }}</td> -->\n                  <!-- <td>{{ p.net | currency }}</td> -->\n                </tr>\n              </tbody>\n            </table>\n            <hr />\n            <div *ngIf=\"payments.length === 0\" class=\"text-center\">\n              <h5>No data</h5>\n            </div>\n            <ngb-pagination class=\"d-flex justify-content-end\" [(page)]=\"pagination.currentPage\"\n              [pageSize]=\"pagination.noOfItemsPerPage\" [collectionSize]=\"pagination.totalCount\"\n              aria-label=\"Default pagination\" (pageChange)=\"onPageChange($event)\" *ngIf=\"payments.length > 0\">\n            </ngb-pagination>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <button class=\"btn btn-primary\" (click)=\"downloadPdf()\">download</button> -->\n"

/***/ }),

/***/ "./src/app/dashboard/activities/activities.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/activities/activities.component.ts ***!
  \**************************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);






pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;
var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent(service, router) {
        this.service = service;
        this.router = router;
        this.page = 1;
        this.payments = [];
        this.flag = false;
        this.pagination = {
            currentPage: 1,
            noOfItemsPerPage: 10,
            ellipses: true,
            maxSize: 10,
            totalCount: 0
        };
    }
    ActivitiesComponent.prototype.setPage = function (i) {
        this.page = i;
        this.getReports();
    };
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.getReports();
        this.getStatus();
    };
    ActivitiesComponent.prototype.doPagination = function (itemsPerPage, total_pages, totalCount, pageNo, per_page) {
        // console.log(this.pages, itemsPerPage, total_pages, totalCount, per_page);
        this.pagination.currentPage = parseInt(pageNo);
        this.pagination.noOfItemsPerPage = per_page;
        this.pagination.totalCount = totalCount;
    };
    ActivitiesComponent.prototype.onPageChange = function (e) {
        // console.log('onPageChange', e);
        this.setPage(e);
    };
    ActivitiesComponent.prototype.refresh = function () {
        window.location.reload();
        this.getStatus();
    };
    ActivitiesComponent.prototype.getReports = function () {
        var _this = this;
        this.service.getReport(this.page, this.amount, this.date, this.status, this.userName, this.net, this.application_fee_amount).subscribe(function (Response) {
            // console.log(Response);
            _this.mes = Response.message;
            if (Response.result) {
                _this.payments = Response.result.paginatedItems;
                _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
            }
        });
    };
    ActivitiesComponent.prototype.getStatus = function () {
        this.service.getStatus().subscribe(function (Response) {
            // console.log(Response);
        });
    };
    ActivitiesComponent.prototype.search = function () {
        var _this = this;
        var data = { "userName": this.DonarName };
        this.service.searchReport(data, this.page).subscribe(function (Response) {
            // console.log(Response);
            _this.mes = Response.message;
            if (Response.success) {
                _this.payments = Response.result.paginatedItems;
                _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
            }
        }, function (err) {
            // console.log(err,'err');
            _this.payments = Response.error;
        });
    };
    ActivitiesComponent.prototype.sortAmount = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.amount = -1;
            this.date = undefined;
            this.status = undefined;
            this.net = undefined;
            this.userName = undefined;
            this.application_fee_amount = undefined;
            this.getReports();
        }
        else if (this.flag === false) {
            this.amount = 1;
            this.date = undefined;
            this.status = undefined;
            this.net = undefined;
            this.userName = undefined;
            this.application_fee_amount = undefined;
            this.getReports();
        }
    };
    ActivitiesComponent.prototype.sortDate = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.date = -1;
            this.amount = undefined;
            this.status = undefined;
            this.net = undefined;
            this.userName = undefined;
            this.application_fee_amount = undefined;
            this.getReports();
        }
        else if (this.flag === false) {
            this.date = 1;
            this.amount = undefined;
            this.status = undefined;
            this.net = undefined;
            this.userName = undefined;
            this.application_fee_amount = undefined;
            this.getReports();
        }
    };
    ActivitiesComponent.prototype.sortStatus = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.status = 1;
            this.amount = undefined;
            this.date = undefined;
            this.net = undefined;
            this.userName = undefined;
            this.application_fee_amount = undefined;
            this.getReports();
        }
        else if (this.flag === false) {
            this.status = -1;
            this.amount = undefined;
            this.date = undefined;
            this.net = undefined;
            this.userName = undefined;
            this.application_fee_amount = undefined;
            this.getReports();
        }
    };
    ActivitiesComponent.prototype.sortName = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.status = undefined;
            this.amount = undefined;
            this.date = undefined;
            this.net = undefined;
            this.userName = 1;
            this.application_fee_amount = undefined;
            this.getReports();
        }
        else if (this.flag === false) {
            this.status = undefined;
            this.amount = undefined;
            this.date = undefined;
            this.net = undefined;
            this.userName = -1;
            this.application_fee_amount = undefined;
            this.getReports();
        }
    };
    ActivitiesComponent.prototype.sortNet = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.status = undefined;
            this.amount = undefined;
            this.date = undefined;
            this.net = -1;
            this.userName = undefined;
            this.application_fee_amount = undefined;
            this.getReports();
        }
        else if (this.flag === false) {
            this.status = undefined;
            this.amount = undefined;
            this.date = undefined;
            this.net = 1;
            this.userName = undefined;
            this.application_fee_amount = undefined;
            this.getReports();
        }
    };
    ActivitiesComponent.prototype.sortAppfee = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.status = undefined;
            this.amount = undefined;
            this.date = undefined;
            this.net = undefined;
            this.userName = undefined;
            this.application_fee_amount = -1;
            this.getReports();
        }
        else if (this.flag === false) {
            this.status = undefined;
            this.amount = undefined;
            this.date = undefined;
            this.net = undefined;
            this.userName = undefined;
            this.application_fee_amount = 1;
            this.getReports();
        }
    };
    ActivitiesComponent.prototype.filter30 = function () {
        var _this = this;
        var data = { "days": 30 };
        this.service.dateFilterActivity(data).subscribe(function (Response) {
            // console.log(Response);
            _this.payments = Response.result.paginatedItems;
            _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
        }, function (err) {
            // console.log(err,'err');
            _this.payments = Response.error;
        });
    };
    ActivitiesComponent.prototype.filter60 = function () {
        var _this = this;
        var data = { "days": 60 };
        this.service.dateFilterActivity(data).subscribe(function (Response) {
            // console.log(Response);
            _this.payments = Response.result.paginatedItems;
            _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
        }, function (err) {
            // console.log(err,'err');
            _this.payments = Response.error;
        });
    };
    ActivitiesComponent.prototype.filter18 = function () {
        var _this = this;
        var data = { "year": 2018 };
        this.service.dateFilterActivity(data).subscribe(function (Response) {
            // console.log(Response);
            _this.payments = Response.result.paginatedItems;
            _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
        }, function (err) {
            // console.log(err,'err');
            _this.payments = Response.error;
        });
    };
    ActivitiesComponent.prototype.filter19 = function () {
        var _this = this;
        var data = { "year": 2019 };
        this.service.dateFilterActivity(data).subscribe(function (Response) {
            // console.log(Response);
            _this.payments = Response.result.paginatedItems;
            _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
        }, function (err) {
            // console.log(err,'err');
            _this.payments = Response.error;
        });
    };
    ActivitiesComponent.prototype.filter = function () {
        var _this = this;
        var data = { range: { "from": this.start, "to": this.end } };
        this.service.dateFilterActivity(data).subscribe(function (Response) {
            // console.log(Response);
            if (Response.success) {
                _this.payments = Response.result.paginatedItems;
                _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
            }
        }, function (err) {
            // console.log(err,'err');
            _this.payments = Response.error;
        });
    };
    ActivitiesComponent.prototype.createPdfTable = function (result) {
        var tempArr = [];
        for (var i = 0; i < result.length; i++) {
            // this.data.push(Response.data[i]);
            if (i == 0) {
                var ar = ['Date', 'Name', 'Donation Status', 'Total Amount'];
                tempArr.push(ar);
            }
            var arr = [(result[i].paymentDate ? result[i].paymentDate : ' '), result[i].userName, result[i].status, result[i].amount];
            tempArr.push(arr);
        }
        return tempArr;
    };
    ActivitiesComponent.prototype.createPdfDoc = function (result) {
        var doc = {
            content: [
                {
                    style: 'tableExample',
                    table: {
                        body: this.createPdfTable(result)
                    }
                }
            ]
        };
        return doc;
    };
    ActivitiesComponent.prototype.downloadPdf = function () {
        var _this = this;
        this.service.getPdf().subscribe(function (Response) {
            // console.log(Response);
            var doc = _this.createPdfDoc(Response.result);
            // console.log('DOc Pdf', doc);
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(doc).download();
        });
    };
    ActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__(/*! ./activities.component.html */ "./src/app/dashboard/activities/activities.component.html"),
            styles: [__webpack_require__(/*! ./activities.component.css */ "./src/app/dashboard/activities/activities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/help/help.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/help/help.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/help/help.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/help/help.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/help/help.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/help/help.component.ts ***!
  \**************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/dashboard/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/dashboard/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/payouts/payouts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/payouts/payouts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container{\nwidth: 50%;\n} */\n.card{\n    width: 50%;\n}\n.title h4{\n    color: rgb(95, 209, 230);\n    font-weight: bold;\n    font-size: 2rem;\n\n}\n.regular-checkbox {\n\t-webkit-appearance: none;\n\tbackground-color: #fafafa;\n\tborder: 1px solid #cacece;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 9px;\n\tborder-radius: 3px;\n\tdisplay: inline-block;\n\tposition: relative;\n}\n.regular-checkbox:active, .regular-checkbox:checked:active {\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);\n}\n.regular-checkbox:checked {\n\tbackground-color: #e9ecee;\n\tborder: 1px solid #adb8c0;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: #99a1a7;\n}\n.regular-checkbox:checked:after {\n\tcontent: '\\2714';\n\tfont-size: 14px;\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 3px;\n\tcolor: #99a1a7;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BheW91dHMvcGF5b3V0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTs7QUFFbkI7QUFDQTtDQUNDLHdCQUF3QjtDQUN4Qix5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLG1GQUFtRjtDQUNuRixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHlFQUF5RTtBQUMxRTtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixnSUFBZ0k7Q0FDaEksY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wYXlvdXRzL3BheW91dHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jb250YWluZXJ7XG53aWR0aDogNTAlO1xufSAqL1xuLmNhcmR7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi50aXRsZSBoNHtcbiAgICBjb2xvcjogcmdiKDk1LCAyMDksIDIzMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuXG59XG4ucmVndWxhci1jaGVja2JveCB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NhY2VjZTtcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSk7XG5cdHBhZGRpbmc6IDlweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZWd1bGFyLWNoZWNrYm94OmFjdGl2ZSwgLnJlZ3VsYXItY2hlY2tib3g6Y2hlY2tlZDphY3RpdmUge1xuXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4ucmVndWxhci1jaGVja2JveDpjaGVja2VkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2FkYjhjMDtcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDE1cHggMTBweCAtMTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG5cdGNvbG9yOiAjOTlhMWE3O1xufVxuLnJlZ3VsYXItY2hlY2tib3g6Y2hlY2tlZDphZnRlciB7XG5cdGNvbnRlbnQ6ICdcXDI3MTQnO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwcHg7XG5cdGxlZnQ6IDNweDtcblx0Y29sb3I6ICM5OWExYTc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/payouts/payouts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/payouts/payouts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n  <div class=\"container narrow col-md-6 \">\n    <div class=\" row justify-content-center\">\n      <div class=\"card \">\n        <div class=\"title text-center\">\n          <h4>Set Payouts</h4>\n        </div>\n        <div *ngIf=\"error?.message\" class=\"alert alert-danger\" role=\"alert\">\n          <strong>{{error.message}}</strong>\n        </div>\n        <div class=\"col form-group\">\n\n          <br>\n\n          <div class=\"col\">\n            <label for=\"\">Frequency</label>\n            <select [(ngModel)]=\"interval\" class=\"form-control\" name=\"\" id=\"\">\n              <option class=\"form-control\" *ngFor=\"let interval of intervals \" [ngValue]=\"interval.value\">\n                {{interval.name}}\n              </option>\n            </select>\n          </div>\n          <br>\n          <div class=\"col\">\n            <label for=\"\">Start date</label>\n            <input type=\"date\" class=\"form-control\" min=\"2019-04-01\" [(ngModel)]=\"date\">\n          </div>\n          <br>\n          <div class=\"col\">\n            <label for=\"\">Amount</label>\n            <input type=\"number\" class=\"form-control\" min=\"1\" [(ngModel)]=\"amount\" placeholder=\"Enter amount\">\n          </div>\n          <br>\n          <div class=\"col\">\n            <label for=\"\">Recurring</label>\n            <br>\n            <input type=\"checkbox\" class=\"regular-checkbox\" [ngModel]=\"filter\" (ngModelChange)=\"onFilterChange($event)\">\n          </div>\n          <br>\n          <div class=\"col text-center\">\n            <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"submit()\">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/payouts/payouts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/payouts/payouts.component.ts ***!
  \********************************************************/
/*! exports provided: PayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutsComponent", function() { return PayoutsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





var PayoutsComponent = /** @class */ (function () {
    function PayoutsComponent(router, service) {
        this.router = router;
        this.service = service;
        this.reccuring = [{ name: 'Yes', value: '1' }, { name: 'No', value: '0' }];
        this.intervals = [{ name: 'Weekly', value: 'week' }, { name: 'Biweekly', value: 'byweek' }, { name: 'Monthly', value: 'month' }, { name: 'Quarterly', value: 'quarter' }, { name: 'Half-yearly', value: 'half-year' }, { name: 'Yearly', value: "year" },];
        this.filter = false;
    }
    PayoutsComponent.prototype.ngOnInit = function () {
    };
    PayoutsComponent.prototype.onFilterChange = function (eve) {
        this.filter = !this.filter;
    };
    PayoutsComponent.prototype.submit = function () {
        var _this = this;
        var data = { "isReccuring": this.filter, "interval": this.interval, "amount": this.amount, "startDate": this.date };
        // console.log(data);
        this.service.payout(data).subscribe(function (Response) {
            // console.log(Response);
            if (Response.success) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Great!", "Payout is set", "success");
            }
        }, function (err) {
            // console.log(err,'err');
            _this.error = err.error;
        });
    };
    PayoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payouts',
            template: __webpack_require__(/*! ./payouts.component.html */ "./src/app/dashboard/payouts/payouts.component.html"),
            styles: [__webpack_require__(/*! ./payouts.component.css */ "./src/app/dashboard/payouts/payouts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], PayoutsComponent);
    return PayoutsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/pledges/pledges.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/pledges/pledges.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 15px;\n}\n\n.container {\n  font-family: 'lato', sans-serif;\n}\n\n.title {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.fa-search {\n  /* color:rgb(16, 144, 204);  */\n  color: white;\n}\n\n.fa-sort-numeric-asc {\n  color: rgb(41, 39, 39);\n  ;\n}\n\n.btn-outline {\n  background: rgb(106, 208, 226);\n  color: white;\n\n}\n\n.btn-outline:onClick {\n  background: rgb(106, 208, 226);\n  color: white;\n}\n\n.date {\n  margin-left: 400px;\n}\n\n.thead {\n  /* background-color: rgb(16, 144, 204); */\n  color: white;\n  padding: 15px;\n  background: rgb(106, 208, 226);\n  background-image: linear-gradient(to left top(rgb(106, 208, 226), to bottom(rgb(45, 238, 196))));\n\n}\n\n.paginate {\n  width: 100%;\n  float: right;\n}\n\n.paginate-wrap {\n  float: right;\n}\n\n.display {\n  font-weight: 900;\n  color: rgb(106, 208, 226);\n  font-family: 'poppins';\n}\n\n.btn-outline-light {\n  border-radius: 0%;\n  border-color: rgb(106, 208, 226);\n}\n\n.btn-outline-light:hover {\n  border-radius: 0%;\n  border-color: rgb(106, 208, 226);\n  background: rgb(106, 208, 226);\n}\n\n.btn-outline:onClick {\n  border-color: rgb(106, 208, 226);\n}\n\n/* search box */\n\n.dropdown-item {\n  background: white;\n}\n\n/* Bootstrap 4 text input with search icon */\n\n/* search box */\n\n#custom-search-form {\n  margin:0;\n  margin-top: 5px;\n  padding: 0;\n}\n\n#custom-search-form .search-query {\n  padding-right: 3px;\n  padding-right: 4px \\9;\n  padding-left: 3px;\n  padding-left: 4px \\9;\n  /* IE7-8 doesn't have border-radius, so don't indent the padding */\n\n  margin-bottom: 0;\n  border-radius: 3px;\n}\n\n#custom-search-form button {\n  border: 0;\n  background: none;\n  /** belows styles are working good */\n  padding: 2px 5px;\n  margin-top: 2px;\n  position: relative;\n  left: -28px;\n  /* IE7-8 doesn't have border-radius, so don't indent the padding */\n  margin-bottom: 0;\n  border-radius: 3px;\n}\n\n.search-query:focus + button {\n  z-index: 3;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BsZWRnZXMvcGxlZGdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdHQUFnRzs7QUFFbEc7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUEsZUFBZTs7QUFHZjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSw0Q0FBNEM7O0FBQzVDLGVBQWU7O0FBQ2Y7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrRUFBa0U7O0VBRWxFLGdCQUFnQjtFQUdoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0VBQWtFO0VBQ2xFLGdCQUFnQjtFQUdoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcGxlZGdlcy9wbGVkZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiAnbGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZhLXNlYXJjaCB7XG4gIC8qIGNvbG9yOnJnYigxNiwgMTQ0LCAyMDQpOyAgKi9cbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtc29ydC1udW1lcmljLWFzYyB7XG4gIGNvbG9yOiByZ2IoNDEsIDM5LCAzOSk7XG4gIDtcbn1cblxuLmJ0bi1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZDogcmdiKDEwNiwgMjA4LCAyMjYpO1xuICBjb2xvcjogd2hpdGU7XG5cbn1cblxuLmJ0bi1vdXRsaW5lOm9uQ2xpY2sge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTA2LCAyMDgsIDIyNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhdGUge1xuICBtYXJnaW4tbGVmdDogNDAwcHg7XG59XG5cblxuLnRoZWFkIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCAxNDQsIDIwNCk7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogcmdiKDEwNiwgMjA4LCAyMjYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AocmdiKDEwNiwgMjA4LCAyMjYpLCB0byBib3R0b20ocmdiKDQ1LCAyMzgsIDE5NikpKSk7XG5cbn1cblxuLnBhZ2luYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnBhZ2luYXRlLXdyYXAge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cblxuLmRpc3BsYXkge1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogcmdiKDEwNiwgMjA4LCAyMjYpO1xuICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQge1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTA2LCAyMDgsIDIyNik7XG59XG5cbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICBib3JkZXItY29sb3I6IHJnYigxMDYsIDIwOCwgMjI2KTtcbiAgYmFja2dyb3VuZDogcmdiKDEwNiwgMjA4LCAyMjYpO1xufVxuXG4uYnRuLW91dGxpbmU6b25DbGljayB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDEwNiwgMjA4LCAyMjYpO1xufVxuXG4vKiBzZWFyY2ggYm94ICovXG5cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLyogQm9vdHN0cmFwIDQgdGV4dCBpbnB1dCB3aXRoIHNlYXJjaCBpY29uICovXG4vKiBzZWFyY2ggYm94ICovXG4jY3VzdG9tLXNlYXJjaC1mb3JtIHtcbiAgbWFyZ2luOjA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMDtcbn1cblxuI2N1c3RvbS1zZWFyY2gtZm9ybSAuc2VhcmNoLXF1ZXJ5IHtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHggXFw5O1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHggXFw5O1xuICAvKiBJRTctOCBkb2Vzbid0IGhhdmUgYm9yZGVyLXJhZGl1cywgc28gZG9uJ3QgaW5kZW50IHRoZSBwYWRkaW5nICovXG5cbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbiNjdXN0b20tc2VhcmNoLWZvcm0gYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAvKiogYmVsb3dzIHN0eWxlcyBhcmUgd29ya2luZyBnb29kICovXG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMjhweDtcbiAgLyogSUU3LTggZG9lc24ndCBoYXZlIGJvcmRlci1yYWRpdXMsIHNvIGRvbid0IGluZGVudCB0aGUgcGFkZGluZyAqL1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnNlYXJjaC1xdWVyeTpmb2N1cyArIGJ1dHRvbiB7XG4gIHotaW5kZXg6IDM7ICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/pledges/pledges.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/pledges/pledges.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid padding\" #conatent>\n  <div class=\"container\">\n    <div class=\"row welcome \">\n      <div class=\"col-12\" style=\"color:rgb(106, 208, 226);\">\n        <h4 class=\"title\">Pledges</h4>\n      </div>\n      <div class=\"container padding\">\n        <div class=\"col-12\">\n          <div class=\"table-responsive\">\n            <div class=\"container-fluid col-12\">\n              <div class=\"row\">\n                  <div class=\"col\">\n                      <div class=\"dropdown\">\n                        <button class=\"btn btn-outline-info dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"tooltip\" title=\"Filter by date\"\n                          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                          <i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Date\n                        </button>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    \n                          <form class=\"px-4 py-3\">\n                            <div class=\"form-group\">\n    \n                              <div class=\"jumbotron-fluid\">\n                                <label for=\"\"> From Date </label><input type=\"date\" class=\"form-control\" id=\"date-range\"\n                                  name=\"start\" [(ngModel)]=\"start\">\n                                <label for=\"\"> To Date </label><input type=\"date\" class=\"form-control\" id=\"date-range\"\n                                  name=\"end\" [(ngModel)]=\"end\">\n                              </div>\n                            </div>\n                          </form>\n                          <button class=\"dropdown-item\" style=\"margin-left: 142px;\" type=\"button\" class=\"btn btn-primary\"\n                            (click)=\"Datefilter()\">Done</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group form-inline col-6\">\n                        <input class=\"form-control ml-2\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search name\"\n                          style=\"width:280px;\" />\n                      </div>\n\n                <div class=\"\">\n                  <select class=\"btn btn-outline\" name=\"Frequency\" id=\"\" (change)=\"frequnecy($event.target.value)\">\n                    <option class=\"dropdown-item\" value=\"week\">Weekly</option>\n                    <option class=\"dropdown-item\" value=\"byweek\">Biweekly</option>\n                    <option class=\"dropdown-item\" value=\"month\">Monthly</option>\n                    <option class=\"dropdown-item\" value=\"quarter\">Quarterly</option>\n                    <option class=\"dropdown-item\" value=\"half-year\">Half-Year</option>\n                    <option class=\"dropdown-item\" value=\"year\">Annually</option>\n                  </select>\n                </div>\n               \n               &nbsp; &nbsp;\n                <div class=\"\">\n                  <button type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Pdf\" (click)=\"downloadPdf()\"><i\n                      class=\"fas fa-file-pdf\"></i> Dowload </button>\n                </div>\n                <br>\n                &nbsp; &nbsp;\n                <div class=\"\">\n                  <button type=\"button\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Refresh\" class=\"btn btn-outline-info\" (click)=\"refresh()\"><i\n                      class=\"fas fa-redo-alt\"></i></button>\n                </div>\n              </div>\n            </div>\n\n            <table *ngIf=\"pledgeReport?.length >0\" class=\"table\">\n              <thead class=\"thead\">\n                <tr>\n                  <th>Date</th>\n                  <th>Name</th>\n                  <th>Net Amount</th>\n                  <th>Frequency</th>\n\n                </tr>\n              </thead>\n              <tbody>\n                <tr\n                  *ngFor=\"let data of pledgeReport| filter : 'userDetails':'Name': searchText  | paginate: {itemsPerPage: 12, currentPage: p };\">\n                  <td>{{data.startDate | date}}</td>\n                  <td>{{data.userDetails.Name}}</td>\n                  <td>{{data.amount | currency}}</td>\n                 <td>{{data.interval}}</td>           \n               </tr>\n              </tbody>\n            </table>\n            <hr>\n            <div *ngIf=\"pledgeReport?.length === 0\" class=\"text-center\">\n              <h5>No data</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"paginate\">\n          <pagination-controls class=\"paginate-wrap\" (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/pledges/pledges.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/pledges/pledges.component.ts ***!
  \********************************************************/
/*! exports provided: PledgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PledgesComponent", function() { return PledgesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);





// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';


pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;
// import * as moment from 'moment';
var PledgesComponent = /** @class */ (function () {
    function PledgesComponent(service, router, fb) {
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.p = 1;
        this.data = [];
    }
    PledgesComponent.prototype.ngOnInit = function () {
        this.getReports();
    };
    PledgesComponent.prototype.getReports = function () {
        var _this = this;
        this.service.allPledges().subscribe(function (Response) {
            // console.log(Response);
            _this.pledgeReport = Response.data;
            _this.pledgeReport1 = Response.data;
        });
    };
    PledgesComponent.prototype.refresh = function () {
        this.getReports();
        // window.location.reload();
    };
    PledgesComponent.prototype.createPdfTable = function (data) {
        var tempArr = [];
        for (var i = 0; i < data.length; i++) {
            if (i == 0) {
                var ar = ["Name", "Amount", "Interval", "paymentModeId", "Date"];
                tempArr.push(ar);
            }
            var arr = [
                data[i].userDetails.Name ? data[i].userDetails.Name : " ",
                data[i].amount,
                data[i].interval,
                data[i].paymentModeId,
                data[i].startDate
            ];
            tempArr.push(arr);
        }
        return tempArr;
    };
    PledgesComponent.prototype.createPdfDoc = function (data) {
        var doc = {
            content: [
                {
                    style: "tabl  eExample",
                    table: {
                        body: this.createPdfTable(data)
                    }
                }
            ]
        };
        return doc;
    };
    PledgesComponent.prototype.downloadPdf = function () {
        var _this = this;
        this.pdf = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.service.allPledges().subscribe(function (Response) {
            var doc = _this.createPdfDoc(Response.data);
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.createPdf(doc).download();
        });
    };
    PledgesComponent.prototype.frequnecy = function (event) {
        this.pledgeReport = this.pledgeReport1.filter(function (x) { return x.interval == event; });
    };
    PledgesComponent.prototype.Datefilter = function () {
        {
            var startDate = this.start;
            var endDate = this.end;
            this.pledgeReport = this.pledgeReport1.filter(function (x) { return x.startDate >= startDate && x.startDate <= endDate; });
        }
    };
    PledgesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pledges",
            template: __webpack_require__(/*! ./pledges.component.html */ "./src/app/dashboard/pledges/pledges.component.html"),
            styles: [__webpack_require__(/*! ./pledges.component.css */ "./src/app/dashboard/pledges/pledges.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PledgesComponent);
    return PledgesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.form-container {\n  background: #ddd;\n  padding: 5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  margin: 50px;\n}\n\n.form {\n  width: 500px;\n  margin: auto;\n}\n\ninput{\n  /* border: none; */\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0hBQXNIO0VBQ3RILFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb3JtLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIHBhZGRpbmc6IDVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogNTBweDtcbn1cbi5mb3JtIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlucHV0e1xuICAvKiBib3JkZXI6IG5vbmU7ICovXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <h2>Primary Details of Charity User </h2>\n  <div class=\"form\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"firstname\"> First name </label>\n          <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" [(ngModel)]=\"firstname\">\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"lastname\"> Last name </label>\n          <input type=\"text\" name=\"lastname\" id=\"lastname\" class=\"form-control\" [(ngModel)]=\"lastname\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\"> Email </label>\n      <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\"> Phone Number </label>\n      <input type=\"text\" name=\"primaryNumber\" id=\"primaryNumber\" class=\"form-control\" [(ngModel)]=\"primarynumber\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"address\">Address</label>\n      <input type=\"text\" name=\"address\" id=\"address\" class=\"form-control\" [(ngModel)]=\"address\">\n    </div>\n    <!-- \n  <div class=\"form-group\">\n    <label for=\"firstname\"> Payment profile </label>\n    <input type=\"text\" name=\"paymentProfile\" id=\"paymentProfile\" class=\"form-control\">\n  </div> -->\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"updateProfile()\"> <i class=\"fas fa-user-edit\"></i>\n      Update profile </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.loadProject(params.id);
        });
    };
    ProfileComponent.prototype.loadProject = function (id) {
        var _this = this;
        this.id = id;
        var data = { "Course_ID": id };
        this.service.getCharityById(id).subscribe((function (res) {
            _this.firstname = res['result'].firstName;
            _this.lastname = res['result'].lastName;
            _this.primarynumber = res['result'].phoneNumber;
            _this.email = res['result'].userEmail;
            _this.address = res['result'].userAddress;
        }));
    };
    ProfileComponent.prototype.updateProfile = function () {
        var data = { 'firstName': this.firstname,
            'lastName': this.lastname, 'phoneNumber': this.primarynumber,
            'userEmail': this.email, 'userAddress': this.address };
        this.service.editProfile(data, this.id).subscribe(function (res) {
            if (res['message'] == 'Updated Successfuly') {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("updated successfully");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Error', 'warning');
            }
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/dashboard/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/summary/summary.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/summary/summary.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-fluid{\n    margin-top:15px;\n }\n .container{\n     font-family: 'lato', sans-serif;\n }\n .title{\n     font-size: 2rem;\n     font-weight: 700;\n }\n .form-control{\n     width:20%;\n     \n }\n .fa-search{\n     /* color:rgb(16, 144, 204);  */\n    color:white;\n }\n .fa-sort-numeric-asc{\n     color: rgb(41, 39, 39);;\n }\n .btn-outline{\n     background:rgb(106, 208, 226);\n     color: white;\n    \n }\n .btn-outline:onClick{ \n    background:rgb(106, 208, 226);\n    /* color: white; */\n}\n .date{\n     margin-left: 400px;\n }\n .thead{\n     /* background-color: rgb(16, 144, 204); */\n     color: white;\n     padding: 15px;\n     background: rgb(106, 208, 226);\n     background-image: linear-gradient(to left top(rgb(106, 208, 226), to bottom(rgb(45, 238, 196))));\n\n }\n .pagination{\n     margin-left: 440px;\n }\n .pagination>.nav-item.active {\n    background-color: rgb(41, 39, 39);;\n    pointer-events: none;\n    color: white;\n}\n .display{\n    font-weight:900;\n    color:rgb(106, 208, 226);\n    font-family: 'poppins';\n}\n .btn-outline-light{\n    border-radius: 0%;\n    border-color: rgb(106, 208, 226);\n}\n .btn-outline-light:hover{\n    border-radius: 0%;\n    border-color: rgb(106, 208, 226);\n    background: rgb(106, 208, 226);\n}\n .btn-outline:onClick{\n    border-color: rgb(106, 208, 226);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7Q0FDbEI7Q0FDQTtLQUNJLCtCQUErQjtDQUNuQztDQUNBO0tBQ0ksZUFBZTtLQUNmLGdCQUFnQjtDQUNwQjtDQUNBO0tBQ0ksU0FBUzs7Q0FFYjtDQUNBO0tBQ0ksOEJBQThCO0lBQy9CLFdBQVc7Q0FDZDtDQUNBO0tBQ0ksc0JBQXNCO0NBQzFCO0NBRUE7S0FDSSw2QkFBNkI7S0FDN0IsWUFBWTs7Q0FFaEI7Q0FDQTtJQUNHLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7Q0FFQztLQUNJLGtCQUFrQjtDQUN0QjtDQUdBO0tBQ0kseUNBQXlDO0tBQ3pDLFlBQVk7S0FDWixhQUFhO0tBQ2IsOEJBQThCO0tBQzlCLGdHQUFnRzs7Q0FFcEc7Q0FFQTtLQUNJLGtCQUFrQjtDQUN0QjtDQUVEO0lBQ0ksaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCO0NBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjtDQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQztBQUNwQztDQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7Q0FDQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gfVxuIC5jb250YWluZXJ7XG4gICAgIGZvbnQtZmFtaWx5OiAnbGF0bycsIHNhbnMtc2VyaWY7XG4gfVxuIC50aXRsZXtcbiAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICBmb250LXdlaWdodDogNzAwO1xuIH1cbiAuZm9ybS1jb250cm9se1xuICAgICB3aWR0aDoyMCU7XG4gICAgIFxuIH1cbiAuZmEtc2VhcmNoe1xuICAgICAvKiBjb2xvcjpyZ2IoMTYsIDE0NCwgMjA0KTsgICovXG4gICAgY29sb3I6d2hpdGU7XG4gfVxuIC5mYS1zb3J0LW51bWVyaWMtYXNje1xuICAgICBjb2xvcjogcmdiKDQxLCAzOSwgMzkpOztcbiB9XG4gXG4gLmJ0bi1vdXRsaW5le1xuICAgICBiYWNrZ3JvdW5kOnJnYigxMDYsIDIwOCwgMjI2KTtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgIFxuIH1cbiAuYnRuLW91dGxpbmU6b25DbGlja3sgXG4gICAgYmFja2dyb3VuZDpyZ2IoMTA2LCAyMDgsIDIyNik7XG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xufVxuXG4gLmRhdGV7XG4gICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcbiB9XG4gXG5cbiAudGhlYWR7XG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTQ0LCAyMDQpOyAqL1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgIGJhY2tncm91bmQ6IHJnYigxMDYsIDIwOCwgMjI2KTtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wKHJnYigxMDYsIDIwOCwgMjI2KSwgdG8gYm90dG9tKHJnYig0NSwgMjM4LCAxOTYpKSkpO1xuXG4gfVxuXG4gLnBhZ2luYXRpb257XG4gICAgIG1hcmdpbi1sZWZ0OiA0NDBweDtcbiB9XG4gXG4ucGFnaW5hdGlvbj4ubmF2LWl0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM5LCAzOSk7O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5kaXNwbGF5e1xuICAgIGZvbnQtd2VpZ2h0OjkwMDtcbiAgICBjb2xvcjpyZ2IoMTA2LCAyMDgsIDIyNik7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJztcbn1cbi5idG4tb3V0bGluZS1saWdodHtcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDYsIDIwOCwgMjI2KTtcbn1cbi5idG4tb3V0bGluZS1saWdodDpob3ZlcntcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDYsIDIwOCwgMjI2KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTA2LCAyMDgsIDIyNik7XG59XG4uYnRuLW91dGxpbmU6b25DbGlja3tcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDYsIDIwOCwgMjI2KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/summary/summary.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/summary/summary.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"sum\" class=\"container-fluid padding\">\n  <div class=\"container\">\n    <div class=\"row welcome \">\n      <div class=\"col\" style=\"color:rgb(106, 208, 226);\">\n        <h4 class=\"title\">Recent Donations</h4>\n      </div>\n      <div class=\"col\">\n        <h3 >Total Balance:{{bal | currency}}</h3>\n      </div>\n      \n      <div class=\"container padding\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"table-responsive\">\n              <table *ngIf=\"payments.length > 0\" class=\"table\">\n                <thead class=\"thead\">\n                  <tr>\n                    <th>Date<button class=\"btn btn-outline-light\" (click)=\"sortDate()\"><i class=\"fa fa-sort\"\n                          aria-hidden=\"true\"></i></button></th>\n                    <th>Name<button class=\"btn btn-outline-light\" (click)=\"sortName()\"><i class=\"fa fa-sort\"\n                          aria-hidden=\"true\"></i></button></th>\n                    <th>Amount <br>(Including fees)<button class=\"btn btn-outline-light\" (click)=\"sortAmount()\"><i\n                          class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                      </button></th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\" let p of payments; let i=index;\">\n                    <td>{{p.paymentDate | date}}</td>\n                    <td>{{p.userName}}</td>\n                    <td>{{p.amount | currency}}</td>\n                  </tr>\n                </tbody>\n              </table>\n              <hr>\n              <div *ngIf=\"payments.length === 0\" class=\"text-center\">\n                <h4>No data</h4>\n              </div>\n              <ngb-pagination class=\"d-flex justify-content-end\" [(page)]=\"pagination.currentPage\"\n                [pageSize]=\"pagination.noOfItemsPerPage\" [collectionSize]=\"pagination.totalCount\"\n                aria-label=\"Default pagination\" (pageChange)=\"onPageChange($event)\" *ngIf=\"payments.length > 0\">\n              </ngb-pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/summary/summary.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/summary/summary.component.ts ***!
  \********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);





var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(service, router) {
        this.service = service;
        this.router = router;
        this.page = 1;
        this.payments = [];
        this.flag = false;
        // public amt:0;
        this.pagination = {
            currentPage: 1,
            noOfItemsPerPage: 10,
            ellipses: true,
            maxSize: 10,
            totalCount: 0
        };
    }
    SummaryComponent.prototype.setPage = function (i) {
        this.page = i;
        this.getReports();
    };
    SummaryComponent.prototype.ngOnInit = function () {
        this.getReports();
        this.balance();
    };
    SummaryComponent.prototype.doPagination = function (itemsPerPage, total_pages, totalCount, pageNo, per_page) {
        // console.log(this.pages, itemsPerPage, total_pages, totalCount, per_page);
        this.pagination.currentPage = parseInt(pageNo);
        this.pagination.noOfItemsPerPage = per_page;
        this.pagination.totalCount = totalCount;
    };
    SummaryComponent.prototype.onPageChange = function (e) {
        // console.log('onPageChange', e);
        this.setPage(e);
    };
    SummaryComponent.prototype.getReports = function () {
        var _this = this;
        this.service.getReportSummary(this.page, this.amount, this.date, this.userName).subscribe(function (Response) {
            _this.mes = Response.message;
            // console.log(Response,'res');
            if (Response.result) {
                _this.payments = Response.result.paginatedItems;
                _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
            }
        });
    };
    SummaryComponent.prototype.search = function () {
        var _this = this;
        var data = { "userName": this.DonarName };
        this.service.searchReport(data, this.page).subscribe(function (Response) {
            // console.log(Response);
            _this.payments = Response.result.paginatedItems;
            _this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page);
        });
    };
    SummaryComponent.prototype.sortAmount = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.amount = -1;
            this.date = undefined;
            this.userName = undefined;
            this.getReports();
        }
        else if (this.flag === false) {
            this.amount = 1;
            this.date = undefined;
            this.userName = undefined;
            this.getReports();
        }
    };
    SummaryComponent.prototype.sortDate = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.date = -1;
            this.amount = undefined;
            this.userName = undefined;
            this.getReports();
        }
        else if (this.flag === false) {
            this.date = 1;
            this.amount = undefined;
            this.userName = undefined;
            this.getReports();
        }
    };
    SummaryComponent.prototype.sortName = function () {
        this.flag = !this.flag;
        if (this.flag === true) {
            this.userName = 1;
            this.amount = undefined;
            this.date = undefined;
            this.getReports();
        }
        else if (this.flag === false) {
            this.userName = -1;
            this.amount = undefined;
            this.date = undefined;
            this.getReports();
        }
    };
    // balance(){
    //   this.service.balance().subscribe((Response:any)=>{
    //     console.log(Response);
    //     this.bal=Response.result.available;
    //   })
    // }
    SummaryComponent.prototype.balance = function () {
        var _this = this;
        this.service.getPdf().subscribe(function (Response) {
            // console.log(Response);
            var arr = Response.result;
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                var amount = Response.result[i].amount;
                sum += parseInt(Response.result[i].amount);
            }
            // console.log(sum);
            _this.bal = sum;
        });
    };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/dashboard/summary/summary.component.html"),
            providers: [
                { provide: 'Window', useValue: window }
            ],
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/dashboard/summary/summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, subfield, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        value = value.toLowerCase();
        return items.filter(function (item) {
            var match = subfield ? item[field][subfield] ? item[field][subfield].toLowerCase() : '' : item[field].toLowerCase();
            return match.indexOf(value) !== -1;
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter',
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    background-color:white;\n}\nfooter{\n    background-color: white;\n    color: black;\n    padding: 2rem 0 2rem;\n    margin-top: 1rem;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDJyZW0gMCAycmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <footer>\n      <div class=\"row narrow text-center\">\n        <div class=\"col-12\">\n          <p><i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> 2019 Quber. All Rights Reserved. <a href=\"#\" >Privacy policy\n              </a></p>\n        </div>\n      </div>\n    </footer>\n  </div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






var FooterComponent = /** @class */ (function () {
    function FooterComponent(service, router, fb) {
        this.service = service;
        this.router = router;
        this.fb = fb;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.contactForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    FooterComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.service.contact = {
            name: '',
            email: '',
            message: '',
        };
    };
    FooterComponent.prototype.submitDetails = function () {
        var _this = this;
        // console.log(this.contactForm.value);
        if (this.contactForm.valid) {
            this.service.sendMessage(this.contactForm.value).subscribe(function (res) {
                if (res) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Thank you, We will contact you shortly.", "success");
                    _this.contactForm.reset();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Something is missing", "Error");
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please enter valid data", "");
        }
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 0.9rem;\n  letter-spacing: .1rem;\n  /* background:white !important; */\n  opacity: .9;\n}\n.navbar-brand img{\n  height: 6rem;\n  width: 6rem;\n \n}\n.navbar-nav li{\npadding-right: .7rem;\n}\n.navbar-dark .navbar-nav .nav-link{\n  color: black;\n  padding-top: .8rem;\n  visibility: visible;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n.badge-notify{\n  background:rgb(255, 255, 255);\n  position:relative;\n  top: -20px;\n  left: -35px;\n \n}\nfa-bell{\n  color: aquamarine;\n}\n/* ngbDropdownToggle{\n  color: transparent;\n} */\nul {\n  list-style-type: none;\n}\n.nav-link {\n  position: relative;\n  color: #000;\n  text-decoration: none;\n  outline: none;\n}\n.nav-link:visited {\n  color: #000;\n  text-decoration: none;\n}\n.nav-link:hover {\n  color: #000;\n  text-decoration: none;\n}\n.nav-link:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  bottom: -2px;\n  left: 0;\n  background-color: #000;\n  visibility: hidden;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  transition: all 0.3s ease-in-out 0s;\n}\nli {\n  outline: none;\n  cursor: pointer;\n}\nli.active a:before,\n.nav-link:hover:before {\n  visibility: visible;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0FBRWI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7O0dBRUc7QUFFSDtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFFcEIsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUVBOztFQUVFLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuICAvKiBiYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7ICovXG4gIG9wYWNpdHk6IC45O1xufVxuLm5hdmJhci1icmFuZCBpbWd7XG4gIGhlaWdodDogNnJlbTtcbiAgd2lkdGg6IDZyZW07XG4gXG59XG4ubmF2YmFyLW5hdiBsaXtcbnBhZGRpbmctcmlnaHQ6IC43cmVtO1xufVxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGlua3tcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLXRvcDogLjhyZW07XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuLmJhZGdlLW5vdGlmeXtcbiAgYmFja2dyb3VuZDpyZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMzVweDtcbiBcbn1cbmZhLWJlbGx7XG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xufVxuLyogbmdiRHJvcGRvd25Ub2dnbGV7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn0gKi9cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5uYXYtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5hdi1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2LWxpbms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvdHRvbTogLTJweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG59XG5cbmxpIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saS5hY3RpdmUgYTpiZWZvcmUsXG4ubmF2LWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Current Message\n<h3> {{ message | async | json }} </h3> -->\n\n<nav class=\"navbar navbar-expand-md navbar-light static-top\">\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/Images/logo.png\" width=\"60\" height=\"60\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLink]=\"[ '/dashboard/summary' ]\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" role=\"button\" outlet=\"outlet\">Summary</a>\n      </li>\n      <li class=\"nav-item\" [routerLink]=\"[ '/dashboard/activities']\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" role=\"button\" outlet=\"outlet\">Activity</a>\n      </li>\n      <li class=\"nav-item\" [routerLink]=\"[ '/dashboard/pledges']\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" role=\"button\" outlet=\"outlet\">Pledges</a>\n      </li>\n      <li class=\"nav-item\" [routerLink]=\"[ '/dashboard/payout' ]\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" role=\"button\" outlet=\"outlet\">Payouts</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\"\n          href=\"https://connect.stripe.com/express/oauth/authorize?`redirect_uri`=https://www.qubergiving.com/dashboard/summary&client_id=ca_EdhtAis45rg72LVFw9fzbFBCZDdAkBjc&state={vinay}&stripe_user[business_type]=company\"\n          role=\"button\" target=\"_blank\" outlet=\"outlet\">Stripe account</a>\n      </li>\n      <!-- <li class=\"nav-item\" [routerLink]=\"[ '/dashboard/help']\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" role=\"button\" outlet=\"outlet\">Help</a>\n      </li> -->\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <!-- <li class=\"nav-item\">\n        <div>\n          <button class=\"btn btn-default btn-lg\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\"\n            aria-expanded=\"false\" aria-controls=\"collapseExample\" style=\"font-size:26px; color: rgb(23, 179, 206)\">\n            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i><span class=\"badge badge-notify\" style=\"color:red\">6</span>\n          </button>\n        </div>\n      </li> -->\n      <li class=\"nav-item\">\n        <div ngbDropdown placement=\"bottom-right\"  data-toggle=\"tooltip\"  title=\"Settings\" class=\"d-inline-block\">\n          <button class=\"btn btn-outline\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"fa fa-cog\"\n              aria-hidden=\"true\"></i></button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button ngbDropdownItem (click)=\"navProfile()\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              Profile</button>\n            <button ngbDropdownItem (click)=\"logout()\"><i class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\"></i>\n              Logout</button>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"wrap-container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




// import { MessagingService } from '../services/messaging.service';
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.navProfile = function () {
        var id = localStorage.getItem("user");
        this.router.navigate(["dashboard/profile/", id]);
    };
    NavBarComponent.prototype.logout = function () {
        this.router.navigate(["home"]);
        localStorage.removeItem("jwt");
        localStorage.removeItem("randid");
        localStorage.removeItem("user");
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nav-bar",
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.css":
/*!*************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 0.9rem;\n    letter-spacing: .1rem;\n    background-color: white !important;\n    /* background: rgba(0,0,0,0.6) !important; */\n    /* opacity: .9; */\n  }\n\n  .navbar-nav li{\n  padding-right: .7rem;\n  }\n\n  .navbar-dark .navbar-nav .nav-link{\n    /* color: white; */\n    padding-top: .8rem;\n  }\n\n  .welcome-text{\ncolor: rgb(32, 207, 207);\nfont-weight: 700;\nmargin-top:20px;\nfont-size: 2rem;\n}\n\n  .row .title {\nfont-weight: 200;\nfont-size: 1.5rem;\ncolor:#504f4f;\n}\n\n  .row{\nfont-weight: 200 !important;\nfont-size: 1.1rem;\ncolor: #444242;\n}\n\n  .row p{\n    font-size: 1rem;\n    color: #696666;\n}\n\n  .title{\n    font-weight: 200;\nfont-size: 1.5rem;\ncolor:#646262;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsNENBQTRDO0lBQzVDLGlCQUFpQjtFQUNuQjs7RUFFQTtFQUNBLG9CQUFvQjtFQUNwQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBQ0Y7QUFDQSx3QkFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixlQUFlO0FBQ2Y7O0VBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7RUFFQTtBQUNBLDJCQUEyQjtBQUMzQixpQkFBaUI7QUFDakIsY0FBYztBQUNkOztFQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0VBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNikgIWltcG9ydGFudDsgKi9cbiAgICAvKiBvcGFjaXR5OiAuOTsgKi9cbiAgfVxuXG4gIC5uYXZiYXItbmF2IGxpe1xuICBwYWRkaW5nLXJpZ2h0OiAuN3JlbTtcbiAgfVxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5re1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgICBwYWRkaW5nLXRvcDogLjhyZW07XG4gIH1cbi53ZWxjb21lLXRleHR7XG5jb2xvcjogcmdiKDMyLCAyMDcsIDIwNyk7XG5mb250LXdlaWdodDogNzAwO1xubWFyZ2luLXRvcDoyMHB4O1xuZm9udC1zaXplOiAycmVtO1xufVxuLnJvdyAudGl0bGUge1xuZm9udC13ZWlnaHQ6IDIwMDtcbmZvbnQtc2l6ZTogMS41cmVtO1xuY29sb3I6IzUwNGY0Zjtcbn1cblxuLnJvd3tcbmZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcbmZvbnQtc2l6ZTogMS4xcmVtO1xuY29sb3I6ICM0NDQyNDI7XG59XG4ucm93IHB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjNjk2NjY2O1xufVxuLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG5mb250LXNpemU6IDEuNXJlbTtcbmNvbG9yOiM2NDYyNjI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.html":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-light static-top\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\"\n    ><img src=\"./assets/Images/logo.png\" width=\"60\" height=\"60\"\n  /></a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <ul class=\"navbar-nav ml-auto\"></ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"welcome-text\">\n      <h2>Privacy policy</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <h4 class=\"title\">Effective date and last updated February 20, 2019</h4>\n  </div>\n  <div class=\"row\">\n    <p>\n      Kuber Charities Inc (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)\n      operates the Kuber mobile application (hereinafter referred to as the\n      &quot;Service&quot;).\n    </p>\n    <p>\n      This page informs you of our policies regarding the collection, use and\n      disclosure of personal data when you use our Service and the choices you\n      have associated with that data.\n    </p>\n    <p>\n      We use your data to provide and improve the Service. By using the Service,\n      you agree to the collection and use of information in accordance with this\n      policy. Unless otherwise defined in this Privacy Policy, the terms used in\n      this Privacy Policy have the same meanings as in our Terms and Conditions.\n    </p>\n  </div>\n  <div class=\"row\">\n    <h4 class=\"title\">Definitions</h4>\n  </div>\n  <div class=\"row\">\n      Service\n  </div>\n  <div class=\"row\">\n    <p>\n      Service is the Kuber mobile application operated by Kuber Charities Inc\n    </p>\n  </div>\n  <div class=\"row header\">\n    Personal Data\n  </div>\n  <div class=\"row\">\n    <p>\n      Personal Data means data about a living individual who can be identified\n      from those data (or from those and other information either in our\n      possession or likely to come into our possession).\n    </p>\n  </div>\n  <div class=\"row header\">\n    Usage Data\n  </div>\n  <div class=\"row\">\n    <p>\n      Usage Data is data collected automatically either generated by the use of\n      the Service or from the Service infrastructure itself (for example, the\n      duration of a page visit).\n    </p>\n  </div>\n  <div class=\"row header\">\n    Cookies\n  </div>\n  <div class=\"row\">\n    <p>\n      Cookies are small files stored on your device (computer or mobile device).\n    </p>\n  </div>\n  <div class=\"row\">\n    <h4 class=\"title\">Information Collection and Use</h4>\n  </div>\n  <div class=\"row\">\n    <p>\n      We collect several different types of information for various purposes to\n      provide and improve our Service to you.\n    </p>\n  </div>\n  <div class=\"row header\">\n   Types of Data Collected\n  </div>\n  <div class=\"row header\">\n    Personal Data\n  </div>\n  <div class=\"row\">\n    <p>\n      While using our Service, we may ask you to provide us with certain\n      personally identifiable information that can be used to contact or\n      identify you (&quot;Personal Data&quot;). Personally identifiable\n      information may include, but is not limited to:\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>a)Email address</p>\n  </div>\n  <div class=\"row\">\n    <p>b)First name and last name</p>\n  </div>\n  <div class=\"row\">\n    <p>c)Phone number</p>\n  </div>\n  <div class=\"row\">\n    <p>d)Address, State, Province, ZIP/Postal code, City</p>\n  </div>\n  <div class=\"row\">\n    <p>e)Cookies and Usage Data</p>\n  </div>\n  <div class=\"row\">\n    <p>\n      We may use your Personal Data to contact you with newsletters, marketing\n      or promotional materials and other information that may be of interest to\n      you. You may opt out of receiving any, or all, of these communications\n      from us by following the unsubscribe link or the instructions provided in\n      any email we send.\n    </p>\n  </div>\n  <div class=\"row header\">\n    Usage Data\n  </div>\n  <div class=\"row\">\n    <p>\n      When you access the Service with a mobile device, we may collect certain\n      information automatically, including, but not limited to, the type of\n      mobile device you use, your mobile device unique ID, the IP address of\n      your mobile device, your mobile operating system, the type of mobile\n      Internet browser you use, unique device identifiers and other diagnostic\n      data (&quot;Usage Data&quot;).\n    </p>\n  </div>\n  <div class=\"row header\">\n    Location Data\n  </div>\n  <div class=\"row\">\n    <p>\n      We may use and store information about your location if you give us\n      permission to do so (&quot;Location Data&quot;). We use this data to\n      provide features of our Service, to improve and customise our Service.\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>\n      You can enable or disable location services when you use our Service at\n      any time by way of your device settings.\n    </p>\n  </div>\n  <div class=\"row header\">\n    Tracking Cookies Data\n  </div>\n  <div class=\"row\">\n    <p>\n      We use cookies and similar tracking technologies to track the activity on\n      our Service and we hold certain information.\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>\n      Cookies are files with a small amount of data which may include an\n      anonymous unique identifier. Cookies are sent to your browser from a\n      website and stored on your device. Other tracking technologies are also\n      used such as beacons, tags and scripts to collect and track information\n      and to improve and analyse our Service.\n    </p>\n    <p>\n      You can instruct your browser to refuse all cookies or to indicate when a\n      cookie is being sent. However, if you do not accept cookies, you may not\n      be able to use some portions of our Service.\n    </p>\n  </div>\n  <div class=\"row\">\n    \n      Examples of Cookies we use:\n   \n  </div>\n  <div class=\"row\">\n    <p>a)Session Cookies. We use Session Cookies to operate our Service.</p>\n  </div>\n  <div class=\"row\">\n    <p>\n      b)Preference Cookies. We use Preference Cookies to remember your\n      preferences and various settings.\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>c)Security Cookies. We use Security Cookies for security purposes.</p>\n  </div>\n  <div class=\"row\">\n    <p>\n      d)Advertising Cookies. Advertising Cookies are used to serve you with\n      advertisements that may be relevant to you and your interests.\n    </p>\n  </div>\n  <div class=\"row header\">\n    Use of Data\n  </div>\n  <div class=\"row\">\n    <p>Kuber Charities Inc uses the collected data for various purposes:</p>\n  </div>\n  <div class=\"row\">\n    <p>a)To provide and maintain our Service</p>\n  </div>\n  <div class=\"row\">\n    <p>b)To notify you about changes to our Service</p>\n  </div>\n  <div class=\"row\">\n    <p>\n      c)To allow you to participate in interactive features of our Service when\n      you choose to do so\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>d)To provide customer support</p>\n  </div>\n  <div class=\"row\">\n    <p>\n      e)To gather analysis or valuable information so that we can improve our\n      Service\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>f)To monitor the usage of our Service</p>\n  </div>\n  <div class=\"row\">\n    <p>g)To detect, prevent and address technical issues</p>\n  </div>\n  <div class=\"row\">\n    <p>\n      h)To provide you with news, special offers and general information about\n      other goods, services and events which we offer that are similar to those\n      that you have already purchased or enquired about unless you have opted\n      not to receive such information\n    </p>\n  </div>\n  <div class=\"row header\">\n    Transfer of Data\n  </div>\n  <div class=\"row\">\n    <p>\n      Your information, including Personal Data, may be transferred to - and\n      maintained on - computers located outside of your state, province, country\n      or other governmental jurisdiction where the data protection laws may\n      differ from those of your jurisdiction.\n    </p>\n    <p>\n      If you are located outside United States and choose to provide information\n      to us, please note that we transfer the data, including Personal Data, to\n      United States and process it there.\n    </p>\n    <p>\n      Your consent to this Privacy Policy followed by your submission of such\n      information represents your agreement to that transfer.\n    </p>\n    <p>\n      Kuber Charities Inc will take all the steps reasonably necessary to ensure\n      that your data is treated securely and in accordance with this Privacy\n      Policy and no transfer of your Personal Data will take place to an\n      organisation or a country unless there are adequate controls in place\n      including the security of your data and other personal information.\n    </p>\n  </div>\n  <div class=\"row title\">\n    <div class=\"title\">\n    Disclosure of Data</div>\n  </div>\n  <div class=\"row header\">\n    Business Transaction\n  </div>\n  <div class=\"row\">\n    <p>\n      If Kuber Charities Inc is involved in a merger, acquisition or asset sale,\n      your Personal Data may be transferred. We will provide notice before your\n      Personal Data is transferred and becomes subject to a different Privacy\n      Policy.\n    </p>\n  </div>\n  <div class=\"row header\">\n    <p>Disclosure for Law Enforcement</p>\n  </div>\n  <div class=\"row\">\n    <p>\n      Under certain circumstances, Kuber Charities Inc may be required to\n      disclose your Personal Data if required to do so by law or in response to\n      valid requests by public authorities (e.g. a court or a government\n      agency).\n    </p>\n  </div>\n  <div class=\"row header\">\n    Legal Requirements\n  </div>\n  <div class=\"row\">\n    <p>\n      Kuber Charities Inc may disclose your Personal Data in the good faith\n      belief that such action is necessary to:\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>a)To comply with a legal obligation</p>\n  </div>\n  <div class=\"row\">\n    <p>b)To protect and defend the rights or property of Kuber Charities Inc</p>\n  </div>\n  <div class=\"row\">\n    <p>\n      c)To prevent or investigate possible wrongdoing in connection with the\n      Service\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>\n      d)To protect the personal safety of users of the Service or the public\n    </p>\n  </div>\n  <div class=\"row\">\n    <p>e)To protect against legal liability</p>\n  </div>\n  <div class=\"row header\">\n    Security of Data\n  </div>\n  <div class=\"row\">\n    <p>\n      The security of your data is important to us but remember that no method\n      of transmission over the Internet or method of electronic storage is 100%\n      secure. While we strive to use commercially acceptable means to protect\n      your Personal Data, we cannot guarantee its absolute security.\n    </p>\n  </div>\n  <div class=\"row header\">\n    Service Providers\n  </div>\n  <div class=\"row\">\n    <p>\n      We may employ third party companies and individuals to facilitate our\n      Service (&quot;Service Providers&quot;), provide the Service on our\n      behalf, perform Service-related services or assist us in analysing how our\n      Service is used.\n    </p>\n    <p>\n      These third parties have access to your Personal Data only to perform\n      these tasks on our behalf and are obligated not to disclose or use it for\n      any other purpose.\n    </p>\n  </div>\n  <div class=\"row header\">\n    Analytics\n  </div>\n  <div class=\"row\">\n    <p>\n      We may use third-party Service Providers to monitor and analyse the use of\n      our Service.\n    </p>\n  </div>\n  <div class=\"row header\">\n    Clicky\n  </div>\n  <div class=\"row\">\n    <p>\n      Clicky is a web analytics service. Read the Privacy Policy for Clicky\n      here: <a href=\"https://clicky.com/terms\" target=\"_blank\">https://clicky.com/terms </a>\n    </p>\n  </div>\n  <div class=\"row header\">\n    Advertising\n  </div>\n  <div class=\"row\">\n    <p>\n      We may use third-party Service Providers to show advertisements to you to\n      help support and maintain our Service.\n    </p>\n  </div>\n  <div class=\"row header\">\n    Bing Ads\n  </div>\n  <div class=\"row\">\n    <p>\n      Bing Ads is an advertising service provided by Microsoft Inc. You can\n      opt-out from Bing Ads by following the instructions on Bing Ads Opt-out\n      page:\n      <a\n        href=\"https://advertise.bingads.microsoft.com/en-\n      us/resources/policies/personalized-ads\" target=\"_blank\"\n      >\n        https://advertise.bingads.microsoft.com/en-\n        us/resources/policies/personalized-ads\n      </a>\n      For more information about Bing Ads, please visit their Privacy Policy:\n      <a href=\"https://privacy.microsoft.com/en-us/PrivacyStatement\" target=\"_blank\">\n        https://privacy.microsoft.com/en-us/PrivacyStatement\n      </a>\n    </p>\n  </div>\n  <div class=\"row header\">\n    Behavioral Remarketing\n  </div>\n  <div class=\"row\">\n    <p>\n      Kuber Charities Inc uses remarketing services to advertise on third party\n      websites to you after you visited our Service. We and our third-party\n      vendors use cookies to inform, optimise and serve ads based on your past\n      visits to our Service.\n    </p>\n  </div>\n  <div class=\"row header\">\n   Bing Ads Remarketing\n  </div>\n  <div class=\"row\">\n    <p>\n      Bing Ads remarketing service is provided by Microsoft Inc.You can opt-out\n      of Bing Ads interest-based ads by following their instructions:\n      <a\n        href=\"https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-\n      ads\" target=\"_blank\"\n      ></a>\n      https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-\n      ads You can learn more about the privacy practices and policies of\n      Microsoft by visiting their Privacy Policy page:\n      <a href=\"https://privacy.microsoft.com/en-us/PrivacyStatement\" target=\"_blank\">\n        https://privacy.microsoft.com/en-us/PrivacyStatement</a\n      >\n    </p>\n  </div>\n  <div class=\"row header\">\n    Payments\n  </div>\n  <div class=\"row\">\n    <p>\n      We may provide paid products and/or services within the Service. In that\n      case, we use third-party services for payment processing (e.g. payment\n      processors).\n    </p>\n    <p>\n      We will not store or collect your payment card details. That information\n      is provided directly to our third-party payment processors whose use of\n      your personal information is governed by their Privacy Policy. These\n      payment processors adhere to the standards set by PCI-DSS as managed by\n      the PCI Security Standards Council, which is a joint effort of brands like\n      Visa, MasterCard, American Express and Discover. PCI-DSS requirements help\n      ensure the secure handling of payment information.\n    </p>\n  </div>\n  <div class=\"row\">\n    The payment processors we work with are:\n  </div>\n  <div class=\"row header\">\n    Stripe\n  </div>\n  <div class=\"row\">\n    <p>\n      Their Privacy Policy can be viewed at\n      <a href=\"https://stripe.com/us/privacy\" target=\"_blank\"> https://stripe.com/us/privacy</a>\n    </p>\n  </div>\n  <div class=\"row header\">\n    PayPal / Braintree\n  </div>\n  <div class=\"row\">\n    <p>\n      Their Privacy Policy can be viewed at\n      <a href=\"https://www.paypal.com/webapps/mpp/ua/privacy-full\" target=\"_blank\">\n        https://www.paypal.com/webapps/mpp/ua/privacy-full</a\n      >\n    </p>\n  </div>\n  <div class=\"row header\">\n    Links to Other Sites\n  </div>\n  <div class=\"row\">\n    <p>\n      Our Service may contain links to other sites that are not operated by us.\n      If you click a third party link, you will be directed to that third\n      party&#39;s site. We strongly advise you to review the Privacy Policy of\n      every site you visit.\n    </p>\n    <p>\n      We have no control over and assume no responsibility for the content,\n      privacy policies or practices of any third party sites or services.\n    </p>\n  </div>\n  <div class=\"row\">\n    Children&#39;s Privacy\n  </div>\n  <div class=\"row\">\n    <p>\n      Our Service does not address anyone under the age of 18\n      (&quot;Children&quot;).\n    </p>\n    <p>\n      We do not knowingly collect personally identifiable information from\n      anyone under the age of 18. If you are a parent or guardian and you are\n      aware that your Child has provided us with Personal Data, please contact\n      us. If we become aware that we have collected Personal Data from children\n      without verification of parental consent, we take steps to remove that\n      information from our servers.\n    </p>\n  </div>\n  <div class=\"row\">\n    Changes to This Privacy Policy\n  </div>\n  <div class=\"row\">\n    <p>\n      We may update our Privacy Policy from time to time. We will notify you of\n      any changes by posting the new Privacy Policy on this page.\n    </p>\n    <p>\n      We will let you know via email and/or a prominent notice on our Service,\n      prior to the change becoming effective and update the &quot;effective\n      date&quot; at the top of this Privacy Policy.\n    </p>\n    <p>\n      You are advised to review this Privacy Policy periodically for any\n      changes. Changes to this Privacy Policy are effective when they are posted\n      on this page.\n    </p>\n  </div>\n  <div class=\"row header\">\n    Contact Us\n  </div>\n  <div class=\"row\">\n    <p>\n      If you have any questions about this Privacy Policy, please contact us:by\n      email: <span><a href=\"\" target=\"_blank\">kuber.mobileapp@gmail.com</a></span>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/privacy-policy/privacy-policy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/services/AuthGuard.Admin.ts":
/*!*********************************************!*\
  !*** ./src/app/services/AuthGuard.Admin.ts ***!
  \*********************************************/
/*! exports provided: AuthGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd", function() { return AuthGaurd; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function (route, state) {
        var tocken = localStorage.getItem('AdminLogin');
        if (tocken) {
            return true;
        }
        this.router.navigate(['/adminlogin']);
        return false;
    };
    AuthGaurd = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/services/AuthGuard.Charity.ts":
/*!***********************************************!*\
  !*** ./src/app/services/AuthGuard.Charity.ts ***!
  \***********************************************/
/*! exports provided: AuthGaurd1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd1", function() { return AuthGaurd1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthGaurd1 = /** @class */ (function () {
    function AuthGaurd1(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd1.prototype.canActivate = function (route, state) {
        var tocken = localStorage.getItem('jwt');
        if (tocken) {
            return true;
        }
        this.router.navigate(['/charityUser/signin']);
        return false;
    };
    AuthGaurd1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGaurd1);
    return AuthGaurd1;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getReport = function (page, amount, date, userName, status, net, application_fee_amount) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAYMENT_REPORT;
        if (amount !== undefined && date === undefined && userName === undefined && status === undefined && net === undefined && application_fee_amount === undefined)
            return this.http.get(url + "?page=" + page + "&amount=" + amount, httpOption);
        else if (amount === undefined && date !== undefined && userName === undefined && status === undefined && net === undefined && application_fee_amount === undefined) {
            return this.http.get(url + "?page=" + page + "&paymentDate=" + date, httpOption);
        }
        else if (amount === undefined && date === undefined && userName !== undefined && status === undefined && net === undefined && application_fee_amount === undefined) {
            return this.http.get(url + "?page=" + page + "&userName=" + userName, httpOption);
        }
        else if (amount === undefined && date === undefined && userName === undefined && status !== undefined && net === undefined && application_fee_amount === undefined) {
            return this.http.get(url + "?page=" + page + "&status=" + status, httpOption);
        }
        else if (amount === undefined && date === undefined && userName === undefined && status === undefined && net !== undefined && application_fee_amount === undefined) {
            return this.http.get(url + "?page=" + page + "&net=" + net, httpOption);
        }
        else if (amount === undefined && date === undefined && userName === undefined && status === undefined && net === undefined && application_fee_amount !== undefined) {
            return this.http.get(url + "?page=" + page + "&application_fee_amount=" + application_fee_amount, httpOption);
        }
        else
            return this.http.get(url + "?page=" + page, httpOption);
    };
    DataService.prototype.registerCharity = function (data) {
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CHARITY_REGISTER;
        return this.http.post(url, data);
    };
    DataService.prototype.AdminLogin = function (data) {
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].ADMIN_LOGIN;
        return this.http.post(url, data);
    };
    DataService.prototype.getCharitydetails = function () {
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CHARITY_ALL;
        return this.http.get(url).map(function (data) { return data; });
    };
    DataService.prototype.approveCharity = function (data) {
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].APPROVE_CHARITY;
        return this.http.post(url, data);
    };
    DataService.prototype.CharityLogin = function (data) {
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CHARITY_LOGIN;
        return this.http.post(url, data);
    };
    //Search 
    DataService.prototype.searchReport = function (data, page) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SEARCH_REPORT;
        return this.http.post(url + "?page=" + page, data, httpOption);
    };
    DataService.prototype.sendMessage = function (data) {
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].SEND_MESSAGE;
        return this.http.post(url, data);
    };
    DataService.prototype.allPledges = function () {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PLEDGES_LIST;
        return this.http.get(url, httpOption);
    };
    DataService.prototype.balance = function () {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BALANCE;
        return this.http.get(url, httpOption);
    };
    DataService.prototype.getCharityById = function (id) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt'), 'Content-Type': 'application/json' })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].GET_CHARITY_ID + id;
        return this.http.get(url, httpOption);
    };
    DataService.prototype.editProfile = function (data, id) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].EDIT_CHARITY + id;
        return this.http.post(url, data, httpOption);
    };
    DataService.prototype.stipeDetail = function (code) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].STIPE_ID + "?code=" + code;
        return this.http.post(url, httpOption);
    };
    DataService.prototype.dateFilterActivity = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].DATE_FILTER;
        return this.http.post(url, data, httpOption);
    };
    DataService.prototype.payout = function (data) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAYOUT;
        return this.http.post(url, data, httpOption);
    };
    DataService.prototype.getPdf = function () {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].REPORTS;
        return this.http.get(url, httpOption);
    };
    DataService.prototype.getReportSummary = function (page, amount, date, userName) {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAYMENT_REPORT;
        if (amount !== undefined && date === undefined && userName === undefined)
            return this.http.get(url + "?page=" + page + "&amount=" + amount, httpOption);
        else if (amount === undefined && date !== undefined && userName === undefined) {
            return this.http.get(url + "?page=" + page + "&paymentDate=" + date, httpOption);
        }
        else if (amount === undefined && date === undefined && userName !== undefined) {
            return this.http.get(url + "?page=" + page + "&userName=" + userName, httpOption);
        }
        else
            return this.http.get(url + "?page=" + page, httpOption);
    };
    DataService.prototype.getStatus = function () {
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].BASE_URL + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CHECK_STATUS;
        return this.http.get(url, httpOption);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/messaging.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/messaging.service.ts ***!
  \***********************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var MessagingService = /** @class */ (function () {
    function MessagingService(angularFireDB, angularFireAuth, angularFireMessaging) {
        this.angularFireDB = angularFireDB;
        this.angularFireAuth = angularFireAuth;
        this.angularFireMessaging = angularFireMessaging;
        this.currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.angularFireMessaging.messaging.subscribe(function (_messaging) {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
    }
    /**
     * update token in firebase database
     *
     * @param userId userId as a key
     * @param token token as a value
     */
    MessagingService.prototype.updateToken = function (userId, token) {
        var _this = this;
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            var data = {};
            data[userId] = token;
            _this.angularFireDB.object('fcmTokens/').update(data);
        });
    };
    /**
     * request permission for notification from firebase cloud messaging
     *
     * @param userId userId
     */
    MessagingService.prototype.requestPermission = function (userId) {
        var _this = this;
        this.angularFireMessaging.requestToken.subscribe(function (token) {
            // console.log(token);
            _this.updateToken(userId, token);
        }, function (err) {
            console.error('Unable to get permission to notify.', err);
        });
    };
    /**
     * hook method when new notification received in foreground
     */
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.angularFireMessaging.messages.subscribe(function (payload) {
            console.log("new message received. ", payload);
            _this.currentMessage.next(payload);
        });
    };
    MessagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_4__["AngularFireMessaging"]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar works!\n</p>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/start-page/start-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/start-page/start-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homepage {\n  font-family: 'Lato', sans-serif;\n  overflow: hidden;\n  scroll-behavior: smooth;\n  -ms-scroll-snap-type: y mandatory;\n      scroll-snap-type: y mandatory;\n}\n\n.nav-container {\n  width: 100%;\n  height: 100%;\n  scroll-behavior: smooth;\n}\n\n.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {\n  color: rgb(76, 177, 172);\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: #042a31;\n}\n\n.navbar {\n  text-transform: uppercase;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  height: 70px;\n  z-index: 1;\n  /* position: fixed; */\n  width: 100%;\n  background: white !important;\n  /* overflow-y: scroll;  */\n}\n\n.navbar ul {\n  display: flex;\n  list-style: none;\n  width: 100%;\n  justify-content: center;\n}\n\n.navbar ul li {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0 1rem;\n  padding: 1rem;\n}\n\n.navbar ul li i {\n  color: rgb(76, 177, 172);\n}\n\n.navbar ul li a {\n  text-decoration: none;  \n  font-weight: bold;\n}\n\n.navbar ul li a:hover {\n  color: rgb(76, 177, 172);\n}\n\n/* .navbar ul li a:active {\n  color: brown;\n}\n\n.navbar ul li a:visited {\n  color: brown;\n} */\n\n.navbar-light .navbar-brand {\n  color: rgba(0,0,0,.9);\n  margin-left: 20%;\n}\n\n.navbar-nav li {\n  padding-right: .7rem;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  /* color: white; */\n  padding-top: .8rem;\n}\n\n.caption {\n  width: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 75%;\n  z-index: 1;\n  color: rgb(232, 238, 238);\n  text-transform: uppercase;\n}\n\n.caption h1 {\n  font-size: 3.9rem;\n  font-weight: 900;\n  letter-spacing: .3rem;\n  text-shadow: .1rem .1rem .8rem black;\n  padding-bottom: 1rem;\n}\n\ncaption h3 {\n  font-size: 2rem;\n  font-weight: 900;\n  letter-spacing: .3rem;\n  text-shadow: .1rem .1rem .5rem black;\n  padding-bottom: 1.6rem;\n\n}\n\ncaption.btn {\n  border-radius: 0;\n  border-width: medium;\n  padding: .6rem 1.3rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(15, 228, 217) !important;\n}\n\n.btn-lg {\n  border-radius: 25px;\n  border-width: medium;\n  padding: .6rem 1.3rem;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: white;\n  background: rgb(15, 221, 228)\n}\n\nfooter {\n  background-color: #40474e;\n  color: white;\n  /* padding: 2rem 0 2rem; */\n  margin-top: 1rem;\n}\n\n[class*=\"col-\"] {\n  padding: 1rem;\n}\n\n/* /--- Bootstrap Mobile Gutter Fix --/ */\n\n.row,\n.container-fluid {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n/* /--- Fix for Fixed Navbar jumping on scroll --/ */\n\n/* .fixed-top  {\n -webkit-backface-visibility: hidden;\n} */\n\n/* /--- Fixed Landing Page Section --/ */\n\n.landing {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: table;\n  z-index: -1;\n}\n\n.home-wrap {\n  clip: rect(0, auto, auto, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.home-inner {\n  position: fixed;\n  display: table;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  will-change: transform;\n\n}\n\n/* /--- iOS Fixed Background Image --/ */\n\n.fixed-background {\n  position: relative;\n  width: 100%;\n}\n\n.fixed-wrap {\n  clip: rect(0, auto, auto, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -999 !important;\n}\n\n.fixed {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  will-change: transform;\n}\n\n.home {\n  background-image: url('HomePage.jpeg');\n  background-size: cover;\n  background-position: center;\n}\n\n.head {\n  font-size: 3rem;\n  font-weight: 700;\n  width: 100%;\n  max-width: 100%;\n  /* position: absolute; */\n  /* top: 75%; */\n  z-index: 1;\n  color: rgb(12, 184, 184);\n  text-transform: uppercase;\n  text-shadow: .1rem .1rem .8rem rgb(182, 173, 173);\n  padding-bottom: 1rem;\n\n}\n\n.lead {\n  font-size: 2rem;\n  font-weight: 600;\n  width: 100%;\n  max-width: 100%;\n  color: rgb(9, 42, 104);\n  /* text-shadow: .1rem .1rem .4rem  rgb(224, 221, 221); */\n  text-transform: uppercase;\n  border: .1rem solid rgb(12, 11, 11);\n  /* border-radius: 25px 25px; */\n\n}\n\n.content {\n  font-weight: 400;\n  font-size: 1.2rem;\n  color: rgb(76, 177, 172);\n\n}\n\n.jumbotron-fluid {\n  /* background-color: rgb(133, 224, 224); */\n  opacity: 0.9;\n  border: .5rem solid rgb(255, 255, 255);\n  border-style: double;\n  background-color: rgb(255, 255, 255);\n  /* background-color: rgb(180, 29, 218); */\n}\n\n/* .jumbotron {\n  width: 100%;\n  height: 600px;\n  position: relative;\n  background: url(../../assets/Images/WebBG.png) center bottom no-repeat;\n  -ms-transform: rotate(180deg); \n  -webkit-transform: rotate(180deg); \n  transform: rotate(180deg);\n} */\n\n/* info section */\n\n#intro {\n  width: 100%;\n  height: 900px;\n  position: relative;\n  background: url('WebBG.png') center bottom no-repeat;\n  background-size: cover;\n  padding: 200px 0 120px 0;\n}\n\n/* #intro .intro-img {\n  width: 50%;\n  float: right;\n} */\n\n#intro .intro-info {\n  width: 50%;\n  float: left;\n}\n\n#intro .intro-info .mission {\n  padding: 1rem;\n  width: 150%;\n  color: white;\n  border: none;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  font-size: 1.4rem;\n}\n\n#intro .intro-info .btn-get-started,\n#intro .intro-info .btn-services {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 10px 32px;\n  border-radius: 50px;\n  transition: 0.5s;\n  margin: 0 20px 20px 0;\n  color: #fff;\n}\n\n#intro .intro-info .btn-get-started {\n  background: #007bff;\n  border: 2px solid #007bff;\n  color: #fff;\n  cursor: pointer;\n}\n\n#intro .intro-info .btn-get-started:hover {\n  background: none;\n  border-color: #fff;\n  color: black;\n}\n\n#intro .intro-info .btn-services {\n  border: 2px solid #fff;\n}\n\n#intro .intro-info .btn-services:hover {\n  background: #007bff;\n  border-color: #007bff;\n  color: #fff;\n}\n\n.content {\n  padding: 16px;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.sticky+.content {\n  padding-top: 60px;\n}\n\n/* about */\n\n/* About Us Section\n--------------------------------*/\n\n#about {\n  display: flex;\n  justify-content: center;\n  background: #fff;\n  padding: 60px 0;\n  align-items: center;\n}\n\n#about .about-container .background {\n  margin: 20px 0;\n}\n\n#abiut .section-header h2 {\n  padding: 2rem;\n}\n\n#about .about-container .content {\n  background: #fff;\n}\n\n#about .about-container .title {\n  color: #333;\n  font-weight: 700;\n  font-size: 32px;\n}\n\n#about .about-container p {\n  line-height: 26px;\n}\n\n#about .about-container p:last-child {\n  margin-bottom: 0;\n}\n\n#about .about-container .icon-box {\n  background: #fff;\n  background-size: cover;\n  padding: 0 0 30px 0;\n}\n\n#about .about-container .icon-box .icon {\n  float: left;\n  background: #fff;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  border-radius: 50%;\n  border: 2px solid #007bff;\n  transition: all 0.3s ease-in-out;\n}\n\n#about .about-extra {\n  border: none;\n}\n\n#about .about-extra .about-solution {\n  background: rgb(76, 177, 172);\n  text-align: center;\n  text-transform: uppercase;\n  padding: 2rem;\n  font-size: 2.5rem;\n  color: whitesmoke;\n  word-spacing: 0.8rem;\n}\n\n#about .about-extra .icons {\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  justify-content: center;\n  align-items: center;\n}\n\n#about .about-extra .icons .icon-header {\n  border: none;\n  margin: 5px;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n}\n\n#about .about-extra .icons .icon-header p {\n  font-size: 1.6rem;\n}\n\n#about .about-extra .icons .icon-header i {\n  border: 3px solid rgb(76, 177, 172);\n  ;\n  padding: 2rem;\n  border-radius: 50%;\n  color: rgb(76, 177, 172);\n}\n\n#about .about-extra h4 {\n  font-weight: 600;\n  font-size: 24px;\n}\n\n/* contact section */\n\n#letstalk {\n  width: 100%;\n  height: 80vh;\n  max-width: 100%;\n  position: relative;\n  background: url('WebBG.png') center bottom no-repeat;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  padding: 6rem;\n}\n\n#letstalk .container {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n#letstalk .form-container {\n  /* border: 1px solid black; */\n  height: 300px;\n}\n\n#letstalk .input-icon-wrap {\n  display: flex;\n  flex-direction: row;\n  padding: 0.8rem;\n  outline: none;\n}\n\n#letstalk .input-icon-wrap input {\n  outline: none;\n}\n\n#letstalk .input-icon {\n  background: #ffff;\n  color: rgb(76, 177, 172);\n  padding: 2rem;\n}\n\n#letstalk .input-with-icon {\n  border: none;\n  flex: 1;\n  /* color: rgb(76, 177, 172); */\n  outline: none;\n\n}\n\n#letstalk .input-icon,\n.input-with-icon {\n  padding: 10px;\n}\n\n.wrap-contact {\n  text-align: center;\n\n}\n\n.wrap-contact h1 {\n  font-size: 50px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: #fff;\n}\n\n.title {\n  font-size: 3rem;\n  font-weight: 700;\n  width: 100%;\n  max-width: 100%;\n  /* position: absolute; */\n  /* top: 75%; */\n  z-index: 1;\n  color: black;\n  text-transform: uppercase;\n  text-shadow: .1rem .1rem .8rem rgb(182, 173, 173);\n  padding-bottom: 1rem;\n}\n\n.card {\n  opacity: 0.;\n  /* IE 9 */\n  -webkit-transform: rotate(180deg);\n  /* Safari 3-8 */\n  transform: rotate(180deg);\n}\n\n.controls {\n  color: rgb(235, 42, 42) !important;\n  text-align: left\n}\n\nsmall {\n  color: red;\n}\n\nbutton.btn.btn-outline-light.btn-lg.btn-block:hover {\n  color: rgb(15, 221, 228);\n  background: white;\n  border: 3px solid rgb(15, 221, 228);\n}\n\n.val {\n  color: red;\n}\n\nngb-alert {\n  color: red;\n}\n\n/* media quary */\n\n/* @media only screen and (max-width: 1600px) {\n  #letstalk {\n    background-color: blue;\n  }\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQ0FBNkI7TUFBN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7Ozs7OztHQU1HOztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEseUNBQXlDOztBQUN6Qzs7RUFFRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBLG9EQUFvRDs7QUFDcEQ7O0dBRUc7O0FBRUgsd0NBQXdDOztBQUN4QztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixzQkFBc0I7O0FBRXhCOztBQUVBLHdDQUF3Qzs7QUFDeEM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUEwRDtFQUMxRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsVUFBVTtFQUNWLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaURBQWlEO0VBQ2pELG9CQUFvQjs7QUFFdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHdEQUF3RDtFQUN4RCx5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3Qjs7QUFFMUI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxvQkFBb0I7RUFDcEIsb0NBQW9DO0VBQ3BDLHlDQUF5QztBQUMzQzs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSCxpQkFBaUI7O0FBQ2pCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0RBQXdFO0VBQ3hFLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7OztHQUdHOztBQUVIO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLFVBQVU7O0FBQ1Y7aUNBQ2lDOztBQUVqQztFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBSVosYUFBYTtFQUliLHVCQUF1QjtFQUl2QixtQkFBbUI7RUFLbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUNBQW1DOztFQUVuQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUdBLG9CQUFvQjs7QUFFcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0RBQXNFO0VBRXRFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBRUUsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLGFBQWE7O0FBRWY7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlEQUFpRDtFQUNqRCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBRVgsU0FBUztFQUNULGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQSxnQkFBZ0I7O0FBQ2hCOzs7O0dBSUciLCJmaWxlIjoic3JjL2FwcC9zdGFydC1wYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lcGFnZSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZT4ubmF2LWxpbmssIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuc2hvdywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAuc2hvdz4ubmF2LWxpbmsge1xuICBjb2xvcjogcmdiKDc2LCAxNzcsIDE3Mik7XG59XG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjMDQyYTMxO1xufVxuLm5hdmJhciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA3MHB4O1xuICB6LWluZGV4OiAxO1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICAqL1xufVxuXG4ubmF2YmFyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2YmFyIHVsIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ubmF2YmFyIHVsIGxpIGkge1xuICBjb2xvcjogcmdiKDc2LCAxNzcsIDE3Mik7XG59XG5cbi5uYXZiYXIgdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgIFxuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hdmJhciB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYig3NiwgMTc3LCAxNzIpO1xufVxuXG4vKiAubmF2YmFyIHVsIGxpIGE6YWN0aXZlIHtcbiAgY29sb3I6IGJyb3duO1xufVxuXG4ubmF2YmFyIHVsIGxpIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBicm93bjtcbn0gKi9cblxuLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4ubmF2YmFyLW5hdiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IC43cmVtO1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xuICBwYWRkaW5nLXRvcDogLjhyZW07XG59XG5cbi5jYXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1JTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6IHJnYigyMzIsIDIzOCwgMjM4KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcHRpb24gaDEge1xuICBmb250LXNpemU6IDMuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4zcmVtO1xuICB0ZXh0LXNoYWRvdzogLjFyZW0gLjFyZW0gLjhyZW0gYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG5jYXB0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogLjNyZW07XG4gIHRleHQtc2hhZG93OiAuMXJlbSAuMXJlbSAuNXJlbSBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDEuNnJlbTtcblxufVxuXG5jYXB0aW9uLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xuICBwYWRkaW5nOiAuNnJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiKDE1LCAyMjgsIDIxNykgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1sZyB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xuICBwYWRkaW5nOiAuNnJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYigxNSwgMjIxLCAyMjgpXG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ3NGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogcGFkZGluZzogMnJlbSAwIDJyZW07ICovXG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLyogLy0tLSBCb290c3RyYXAgTW9iaWxlIEd1dHRlciBGaXggLS0vICovXG4ucm93LFxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLyogLy0tLSBGaXggZm9yIEZpeGVkIE5hdmJhciBqdW1waW5nIG9uIHNjcm9sbCAtLS8gKi9cbi8qIC5maXhlZC10b3AgIHtcbiAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn0gKi9cblxuLyogLy0tLSBGaXhlZCBMYW5kaW5nIFBhZ2UgU2VjdGlvbiAtLS8gKi9cbi5sYW5kaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaG9tZS13cmFwIHtcbiAgY2xpcDogcmVjdCgwLCBhdXRvLCBhdXRvLCAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ob21lLWlubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG59XG5cbi8qIC8tLS0gaU9TIEZpeGVkIEJhY2tncm91bmQgSW1hZ2UgLS0vICovXG4uZml4ZWQtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maXhlZC13cmFwIHtcbiAgY2xpcDogcmVjdCgwLCBhdXRvLCBhdXRvLCAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC05OTkgIWltcG9ydGFudDtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuXG4uaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9Ib21lUGFnZS5qcGVnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhlYWQge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgLyogdG9wOiA3NSU7ICovXG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiByZ2IoMTIsIDE4NCwgMTg0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IC4xcmVtIC4xcmVtIC44cmVtIHJnYigxODIsIDE3MywgMTczKTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbn1cblxuLmxlYWQge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiByZ2IoOSwgNDIsIDEwNCk7XG4gIC8qIHRleHQtc2hhZG93OiAuMXJlbSAuMXJlbSAuNHJlbSAgcmdiKDIyNCwgMjIxLCAyMjEpOyAqL1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IC4xcmVtIHNvbGlkIHJnYigxMiwgMTEsIDExKTtcbiAgLyogYm9yZGVyLXJhZGl1czogMjVweCAyNXB4OyAqL1xuXG59XG5cbi5jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiByZ2IoNzYsIDE3NywgMTcyKTtcblxufVxuXG4uanVtYm90cm9uLWZsdWlkIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMjI0LCAyMjQpOyAqL1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlcjogLjVyZW0gc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyOSwgMjE4KTsgKi9cbn1cblxuLyogLmp1bWJvdHJvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvSW1hZ2VzL1dlYkJHLnBuZykgY2VudGVyIGJvdHRvbSBuby1yZXBlYXQ7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyBcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyBcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn0gKi9cblxuLyogaW5mbyBzZWN0aW9uICovXG4jaW50cm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL1dlYkJHLnBuZ1wiKSBjZW50ZXIgYm90dG9tIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogMjAwcHggMCAxMjBweCAwO1xufVxuXG4vKiAjaW50cm8gLmludHJvLWltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiByaWdodDtcbn0gKi9cblxuI2ludHJvIC5pbnRyby1pbmZvIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNpbnRybyAuaW50cm8taW5mbyAubWlzc2lvbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiAxNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbiNpbnRybyAuaW50cm8taW5mbyAuYnRuLWdldC1zdGFydGVkLFxuI2ludHJvIC5pbnRyby1pbmZvIC5idG4tc2VydmljZXMge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNpbnRybyAuaW50cm8taW5mbyAuYnRuLWdldC1zdGFydGVkIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2ludHJvIC5pbnRyby1pbmZvIC5idG4tZ2V0LXN0YXJ0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2ludHJvIC5pbnRyby1pbmZvIC5idG4tc2VydmljZXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufVxuXG4jaW50cm8gLmludHJvLWluZm8gLmJ0bi1zZXJ2aWNlczpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uc3RpY2t5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RpY2t5Ky5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi8qIGFib3V0ICovXG4vKiBBYm91dCBVcyBTZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiNhYm91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhYm91dCAuYWJvdXQtY29udGFpbmVyIC5iYWNrZ3JvdW5kIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbiNhYml1dCAuc2VjdGlvbi1oZWFkZXIgaDIge1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4jYWJvdXQgLmFib3V0LWNvbnRhaW5lciAuY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbiNhYm91dCAuYWJvdXQtY29udGFpbmVyIC50aXRsZSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbiNhYm91dCAuYWJvdXQtY29udGFpbmVyIHAge1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2Fib3V0IC5hYm91dC1jb250YWluZXIgcDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuI2Fib3V0IC5hYm91dC1jb250YWluZXIgLmljb24tYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogMCAwIDMwcHggMDtcbn1cblxuI2Fib3V0IC5hYm91dC1jb250YWluZXIgLmljb24tYm94IC5pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI2Fib3V0IC5hYm91dC1leHRyYSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2Fib3V0IC5hYm91dC1leHRyYSAuYWJvdXQtc29sdXRpb24ge1xuICBiYWNrZ3JvdW5kOiByZ2IoNzYsIDE3NywgMTcyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHdvcmQtc3BhY2luZzogMC44cmVtO1xufVxuXG4jYWJvdXQgLmFib3V0LWV4dHJhIC5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYWJvdXQgLmFib3V0LWV4dHJhIC5pY29ucyAuaWNvbi1oZWFkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xufVxuXG4jYWJvdXQgLmFib3V0LWV4dHJhIC5pY29ucyAuaWNvbi1oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4jYWJvdXQgLmFib3V0LWV4dHJhIC5pY29ucyAuaWNvbi1oZWFkZXIgaSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYig3NiwgMTc3LCAxNzIpO1xuICA7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHJnYig3NiwgMTc3LCAxNzIpO1xufVxuXG4jYWJvdXQgLmFib3V0LWV4dHJhIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5cbi8qIGNvbnRhY3Qgc2VjdGlvbiAqL1xuXG4jbGV0c3RhbGsge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9JbWFnZXMvV2ViQkcucG5nKSBjZW50ZXIgYm90dG9tIG5vLXJlcGVhdDtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgcGFkZGluZzogNnJlbTtcbn1cblxuI2xldHN0YWxrIC5jb250YWluZXIge1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4jbGV0c3RhbGsgLmZvcm0tY29udGFpbmVyIHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gIGhlaWdodDogMzAwcHg7XG59XG5cbiNsZXRzdGFsayAuaW5wdXQtaWNvbi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMC44cmVtO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jbGV0c3RhbGsgLmlucHV0LWljb24td3JhcCBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cblxuI2xldHN0YWxrIC5pbnB1dC1pY29uIHtcbiAgYmFja2dyb3VuZDogI2ZmZmY7XG4gIGNvbG9yOiByZ2IoNzYsIDE3NywgMTcyKTtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuI2xldHN0YWxrIC5pbnB1dC13aXRoLWljb24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZsZXg6IDE7XG4gIC8qIGNvbG9yOiByZ2IoNzYsIDE3NywgMTcyKTsgKi9cbiAgb3V0bGluZTogbm9uZTtcblxufVxuXG4jbGV0c3RhbGsgLmlucHV0LWljb24sXG4uaW5wdXQtd2l0aC1pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLndyYXAtY29udGFjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4ud3JhcC1jb250YWN0IGgxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIC8qIHRvcDogNzUlOyAqL1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAuMXJlbSAuMXJlbSAuOHJlbSByZ2IoMTgyLCAxNzMsIDE3Myk7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4uY2FyZCB7XG4gIG9wYWNpdHk6IDAuO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLyogSUUgOSAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC8qIFNhZmFyaSAzLTggKi9cbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNvbnRyb2xzIHtcbiAgY29sb3I6IHJnYigyMzUsIDQyLCA0MikgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmJ1dHRvbi5idG4uYnRuLW91dGxpbmUtbGlnaHQuYnRuLWxnLmJ0bi1ibG9jazpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTUsIDIyMSwgMjI4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxNSwgMjIxLCAyMjgpO1xufVxuXG4udmFsIHtcbiAgY29sb3I6IHJlZDtcbn1cblxubmdiLWFsZXJ0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuXG4vKiBtZWRpYSBxdWFyeSAqL1xuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgI2xldHN0YWxrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB9XG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/start-page/start-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/start-page/start-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"homepage\" data-spy=\"scroll\">\n  <div class=\"home\" id=\"home\">\n    <nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/Images/logo.png\" width=\"60\" height=\"60\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n        aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <i class=\"fas fa-home\"></i><a class=\"nav-link \" href=\"#home\">Home </a>\n          </li>\n          <li class=\"nav-item \">\n            <i class=\"fas fa-info-circle\"></i><a class=\"nav-link \" href=\"#about\">About Us</a>\n          </li>\n          <li class=\"nav-item \">\n            <i class=\"fas fa-envelope\"></i><a class=\"nav-link  \" href=\"#letstalk\">Contact</a>\n          </li>\n          <li class=\"nav-item\">\n            <button type=\"button\" class=\"btn btn-outline-light btn-lg\" (click)=\"Login() \">LOGIN</button>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n\n  <!-- intoduction -->\n  <section id=\"intro\" class=\"clearfix\">\n    <div class=\"container\">\n\n      <div class=\"intro-info\">\n        <div class=\"brand-name\">\n          <p style=\"font-size:5rem; color: whitesmoke;\">QUBER</p>\n          <h3 style=\"margin-left:10px; text-transform: uppercase; word-spacing: 0.6rem; color: whitesmoke;\">giving made\n            easier</h3>\n        </div>\n\n        <div class=\"mission\">\n          <p>Quber digitally transforms the philanthropic experience making it seamless, efficient and secure by\n            leveraging latest technologies.</p>\n        </div>\n        <div>\n          <a (click)=\"register()\" class=\"btn-get-started scrollto\">REGISTER YOUR CHARITY</a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- about section -->\n  <section id=\"about\">\n    <div class=\"container\">\n\n      <header class=\"section-header\">\n        <h2 style=\"text-align: center; padding: 2.5rem;font-size: 40px;font-weight: 700;\n        letter-spacing: 1px; text-transform: uppercase;\">About Us</h2>\n      </header>\n\n      <div class=\"row about-container\">\n        <div class=\"col-lg-5 content order-lg-1 order-2\">\n          <div class=\"icon-box wow fadeInUp\" style=\"text-align:center;\">\n            <i class=\"fas fa-angle-double-right fa-6x\"></i>\n            <p> </p>\n          </div>\n\n          <div class=\"icon-box wow fadeInUp\" data-wow-delay=\"0.4s\" style=\"text-align:center;\">\n            <i class=\"fas fa-clock fa-6x\"></i>\n          </div>\n\n          <div class=\"icon-box wow fadeInUp\" data-wow-delay=\"0.4s\" style=\"text-align:center;\">\n            <i class=\"fas fa-handshake fa-6x\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6 content order-lg-1 order-2\">\n          <div class=\"icon-box wow fadeInUp\" style=\"text-align:center;\">\n            <h3 style=\"color:black; font-weight:bold; padding:1rem;\">Track Donation</h3>\n            <p>We help you keep track of donations for financial planning and tax deductions</p>\n          </div>\n          <div class=\"icon-box wow fadeInUp\" style=\"text-align:center;\">\n            <h3 style=\"color:black; font-weight:bold; padding:1rem;\">Timeliness</h3>\n            <p>We provide timelines that help you with donations so that the process does not become cumbersome</p>\n          </div>\n          <div class=\"icon-box wow fadeInUp\" style=\"text-align:center;\">\n            <h3 style=\"color:black; font-weight:bold; padding:1rem;\">Building Trust</h3>\n            <p>We provide details of all different charities building trust between donar and the charity</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"about-extra\">\n        <header class=\"about-solution\"> quber's digital solution </header>\n        <div class=\"icons\">\n          <div class=\"icon-header\">\n            <p> Make Donations </p>\n            <i class=\"fas fa-hand-holding-usd fa-5x\"></i>\n          </div>\n          <div class=\"icon-header\">\n            <p>Keep Track of Donations</p>\n            <i class=\"fas fa-angle-double-right fa-5x\"></i>\n          </div>\n          <div class=\"icon-header\">\n            <p> Set Goals & reminders </p>\n            <i class=\"fas fa-clipboard fa-5x\"></i>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n  <!-- #about -->\n\n  <!-- section Conatct -->\n  <section class=\"clearfix\" id=\"letstalk\">\n    <div class=\"container\">\n      <header class=\"wrap-contact\">\n        <h1> Let's Talk </h1>\n      </header>\n      <div class=\"form-container\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitDetails()\">\n        <div class=\"form\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <div class=\"input-icon-wrap\">\n                  <span class=\"input-icon\"><span><i class=\"fas fa-user\"></i></span></span>\n                  <input type=\"text\" class=\"input-with-icon\" placeholder=\"Username\" id=\"name\" formControlName=\"name\"\n                    type=\"text\" [(ngModel)]=\"service.contact.name\" required />\n                </div>\n                <p class=\"alert\">\n                  <ngb-alert [dismissible]=\"false\" *ngIf=\"\n                  contactForm.controls['name'].touched &&\n                  !contactForm.controls['name'].valid\">\n                    <strong>Warning!</strong> Enter the Username.\n                  </ngb-alert>\n                </p>\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <div class=\"input-icon-wrap\">\n                  <span class=\"input-icon\"><span><i class=\"fas fa-envelope\"></i></span></span>\n                  <input type=\"text\" class=\"input-with-icon\" placeholder=\"Email\" id=\"email\" formControlName=\"email\"\n                  type=\"text\" [(ngModel)]=\"service.contact.email\" required>\n                </div>\n                <p class=\"alert\">\n                  <ngb-alert [dismissible]=\"false\" *ngIf=\"\n                  contactForm.controls['email'].touched &&\n                  !contactForm.controls['email'].valid\">\n                    <strong *ngIf=\"registerForm.controls['contact'].hasError('required')\">Warning!</strong> Enter the Email.\n                    <strong *ngIf=\"registerForm.controls['contact'].hasError('pattern')\">Warning!</strong> Incorrect Email.\n                  </ngb-alert>\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <div class=\"input-icon-wrap\">\n                  <span class=\"input-icon\"><span><i class=\"fas fa-comment-alt\"></i> </span></span>\n                  <textarea type=\"text\" class=\"input-with-icon\" placeholder=\"Message\" id=\"message\"\n                  formControlName=\"message\"\n                  type=\"text\" [(ngModel)]=\"service.contact.message\" style=\"height:100px;\" required></textarea>\n                </div>\n                <p class=\"alert\">\n                  <ngb-alert [dismissible]=\"false\" *ngIf=\"\n                  contactForm.controls['message'].touched &&\n                  !contactForm.controls['message'].valid\">\n                    <strong>Warning!</strong> Enter the message.\n                  </ngb-alert>\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12\">\n            <p><button name=\"submit\" type=\"submit\" class=\"btn btn-outline-light btn-lg btn-block\" (click)=\"submitDetails()\"><i\n                  class=\"fa fa-paper-plane\"></i>\n                Send a message</button></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n<!-- #contact section -->\n\n<!-- footer -->\n  <div>\n    <footer>\n      <div class=\"row narrow text-center\">\n        <div class=\"col-12\">\n          <p><i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> 2019 Quber. All Rights Reserved. <a href=\"#\">Privacy policy\n          </a></p>\n        </div>\n      </div>\n    </footer>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/start-page/start-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start-page/start-page.component.ts ***!
  \****************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(service, router, fb) {
        this.service = service;
        this.router = router;
        this.fb = fb;
    }
    StartPageComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.path = this.router.url;
        this.contactForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z]*')]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    StartPageComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.service.contact = {
            name: '',
            email: '',
            message: '',
        };
    };
    StartPageComponent.prototype.submitDetails = function () {
        var _this = this;
        if (this.contactForm.valid) {
            this.service.sendMessage(this.contactForm.value).subscribe(function (res) {
                if (res) {
                    swal("Good job!", "Thank you, We will contact you soon.", "success");
                    _this.contactForm.reset();
                }
                else {
                    swal("Something is missing", "Error!");
                }
            });
        }
        else {
            swal("Oops!", "Please enter valid data!", "warning");
        }
    };
    StartPageComponent.prototype.Login = function () {
        this.router.navigate(['/signin']);
    };
    StartPageComponent.prototype.register = function () {
        this.router.navigate(['/signup']);
    };
    StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-page',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.css */ "./src/app/start-page/start-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyD3IQbMm_11Zh352uVv4kCKSz2aPwVruyM",
        authDomain: "cloud-messaging-4b3e3.firebaseapp.com",
        databaseURL: "https://cloud-messaging-4b3e3.firebaseio.com",
        projectId: "cloud-messaging-4b3e3",
        storageBucket: "cloud-messaging-4b3e3.appspot.com",
        messagingSenderId: "838420291783"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/smitha_r/Desktop/KUBER/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map