'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
require('react-lifecycles-compat');
var reactIs = _interopDefault(require('react-is'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactDesc = require('react-desc');
var reactDom = require('react-dom');
var crypto = _interopDefault(require('crypto'));

var brand = '#54B948';
var accent1 = '#ECE64A';
var accent1Alt = '#D5DD48';
var accent2 = '#08B0BC';
var accent2Alt = '#28C0D2';
var accent3 = '#F28049';
var accent3Alt = '#F4985F';
var accent4 = '#6A66AA';
var accent4Alt = '#807AB9';
var dark1 = '#231F20';
var dark2 = '#303234';
var dark3 = '#434445';
var dark4 = '#58595B';
var dark5 = '#6D6E71';
var dark6 = '#7E8082';
var light1 = '#F6F6F6';
var light2 = '#E4E6E8';
var light3 = '#D0D2D4';
var light4 = '#BCBEC0';
var light5 = '#A7A9AC';
var light6 = '#939598';
var error = '#EB3C3C';
var warning = '#F7E463';
var success = '#329B46';
var light = {
  brand: brand,
  control: brand,
  focus: accent1,
  placeholder: light5,
  border: light3,
  text: {
    light: dark1
  },
  'accent-1': accent1,
  'accent-2': accent2,
  'accent-3': accent3,
  'accent-4': accent4,
  'dark-1': dark1,
  'dark-2': dark2,
  'dark-3': dark3,
  'dark-4': dark4,
  'dark-5': dark5,
  'dark-6': dark6,
  'light-1': light1,
  'light-2': light2,
  'light-3': light3,
  'light-4': light4,
  'light-5': light5,
  'light-6': light6,
  'status-critical': error,
  'status-error': error,
  'status-warning': warning,
  'status-ok': success,
  'status-unknown': light6,
  'status-disabled': light6
};
var dark = Object.assign({}, light, {
  background: dark1,
  focus: accent1Alt,
  border: dark3,
  text: {
    dark: light3
  },
  'accent-1': accent1Alt,
  'accent-2': accent2Alt,
  'accent-3': accent3Alt,
  'accent-4': accent4Alt
});
var theme = {
  light: light,
  dark: dark
};

var colors = /*#__PURE__*/Object.freeze({
    brand: brand,
    accent1: accent1,
    accent1Alt: accent1Alt,
    accent2: accent2,
    accent2Alt: accent2Alt,
    accent3: accent3,
    accent3Alt: accent3Alt,
    accent4: accent4,
    accent4Alt: accent4Alt,
    dark1: dark1,
    dark2: dark2,
    dark3: dark3,
    dark4: dark4,
    dark5: dark5,
    dark6: dark6,
    light1: light1,
    light2: light2,
    light3: light3,
    light4: light4,
    light5: light5,
    light6: light6,
    error: error,
    warning: warning,
    success: success,
    theme: theme
});

var getTheme = function getTheme(isDark) {
  var defaultTextColor = isDark ? light3 : dark3;
  var defaultFontSize = 11;
  return {
    background: 'transparent',
    axis: {
      domain: {
        line: {
          stroke: 'transparent',
          strokeWidth: 1
        }
      },
      ticks: {
        line: {
          stroke: dark6,
          strokeWidth: 1
        },
        text: {
          fill: defaultTextColor,
          fontSize: defaultFontSize
        }
      },
      legend: {
        text: {
          fill: defaultTextColor,
          fontSize: defaultFontSize
        }
      }
    },
    grid: {
      line: {
        stroke: light3,
        strokeWidth: 1
      }
    },
    legends: {
      text: {
        fill: defaultTextColor,
        fontSize: defaultFontSize
      }
    },
    labels: {
      text: {
        fill: defaultTextColor,
        fontSize: defaultFontSize
      }
    },
    markers: {
      lineColor: '#000',
      lineStrokeWidth: 1,
      textColor: defaultTextColor,
      fontSize: defaultFontSize
    },
    dots: {
      text: {
        fill: defaultTextColor,
        fontSize: defaultFontSize
      }
    },
    tooltip: {
      container: {
        background: isDark ? '#000' : '#fff',
        color: 'inherit',
        fontSize: 'inherit',
        borderRadius: '2px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
        padding: '5px 9px'
      },
      basic: {
        whiteSpace: 'pre',
        display: 'flex',
        alignItems: 'center'
      },
      table: {},
      tableCell: {
        padding: '3px 5px'
      }
    }
  };
};

var reportTheme = /*#__PURE__*/Object.freeze({
    getTheme: getTheme
});

var LIGHT = 'light';
var DARK = 'dark';

var constants = /*#__PURE__*/Object.freeze({
    LIGHT: LIGHT,
    DARK: DARK
});

var font = {
  family: '"Open Sans", sans-serif'
};
var glowbal = {
  font: font,
  input: {
    weight: 400
  },
  breakpoints: {
    medium: {
      value: 1200
    }
  }
};
var anchor = {
  fontWeight: 400
};
var size = {
  xxsmall: '48px',
  xsmall: '96px',
  small: '192px',
  medium: '384px',
  large: '576px',
  xlarge: '768px',
  xxlarge: '1152px',
  full: '100%'
};
var edgeSize = {
  none: '0px',
  hair: '1px',
  xxsmall: '3px',
  xsmall: '18px',
  small: '12px',
  medium: '24px',
  large: '48px',
  xlarge: '96px',
  responsiveBreakpoint: 'small'
};
var dark$1 = {
  global: Object.assign({}, glowbal, {
    colors: theme.dark
  }),
  anchor: Object.assign({}, anchor, {
    color: light2
  }),
  edgeSize: edgeSize,
  icon: {
    color: light3
  },
  size: size
};
var light$1 = {
  global: Object.assign({}, glowbal, {
    colors: theme.light
  }),
  anchor: Object.assign({}, anchor, {
    color: dark1
  }),
  edgeSize: edgeSize,
  icon: {
    color: dark4
  },
  size: size
};

var themes = /*#__PURE__*/Object.freeze({
    dark: dark$1,
    light: light$1
});

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function listen(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function () {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function emit() {
    currentListeners = nextListeners;
    var listeners = currentListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(listeners, arguments);
    }
  }

  return {
    listen: listen,
    emit: emit
  };
};
});

unwrapExports(lib);
var lib_1 = lib.createChangeEmitter;

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

var Nothing =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$1(Nothing, _Component);

  function Nothing() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Nothing.prototype;

  _proto.render = function render() {
    return null;
  };

  return Nothing;
}(React.Component);

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  }, function (arg) {
    return arg;
  });
};

var getDisplayName_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

var _default = getDisplayName;
exports.default = _default;
});

var getDisplayName$1 = unwrapExports(getDisplayName_1);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS$1 = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS$1 = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames$1 = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var getPrototypeOf$1 = Object.getPrototypeOf;
var objectPrototype$1 = Object.prototype;

function hoistNonReactStatics$1(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype$1) {
            var inheritedComponent = getPrototypeOf$1(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype$1) {
                hoistNonReactStatics$1(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames$1(sourceComponent);

        if (getOwnPropertySymbols$1) {
            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS$1;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS$1;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS$1[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor$1(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs$1 = hoistNonReactStatics$1;

var createAnnouncer = function createAnnouncer() {
  var announcer = document.createElement('div');
  announcer.style.left = '-100%';
  announcer.style.right = '100%';
  announcer.style.position = 'fixed';
  announcer.style['z-index'] = '-1';
  document.body.insertBefore(announcer, document.body.firstChild);
  return announcer;
};

var AnnounceContext = React__default.createContext(function (message, mode) {
  if (mode === void 0) {
    mode = 'polite';
  }

  // we only create a new container if we don't have one already
  // we create a separate node so that grommet does not set aria-hidden to it
  var announcer = document.body.querySelector('[aria-live]') || createAnnouncer();
  announcer.setAttribute('aria-live', 'off');
  announcer.innerHTML = message;
  announcer.setAttribute('aria-live', mode);
  setTimeout(function () {
    announcer.innerHTML = '';
  }, 500);
});

var ResponsiveContext = React__default.createContext(undefined);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$2 = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$2) {
			symbols = getOwnPropertySymbols$2(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function() {};

{
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
});

var parseMetricToNum = function parseMetricToNum(fontAsString) {
  return parseFloat(fontAsString.replace(/[^0-9/.]/g, ''), 10);
};
var breakpointStyle = function breakpointStyle(breakpoint, content) {
  return styled.css(["@media only screen ", "{", ";}"], breakpoint.value && "and (max-width: " + breakpoint.value + "px)", content);
};

var normalizeColor = function normalizeColor(color, theme, required) {
  var colorSpec = theme.global.colors[color] || color; // If the color has a light or dark object, use that

  var result = colorSpec;

  if (colorSpec) {
    if (theme.dark && colorSpec.dark) {
      result = colorSpec.dark;
    } else if (!theme.dark && colorSpec.light) {
      result = colorSpec.light;
    }
  } // allow one level of indirection in color names


  if (result && theme.global.colors[result]) {
    result = normalizeColor(result, theme);
  }

  return required && result === color ? 'inherit' : result;
};

var parseHexToRGB = function parseHexToRGB(color) {
  return color.length === 4 ? color.match(/[A-Za-z0-9]{1}/g).map(function (v) {
    return parseInt(v, 16);
  }) : // https://stackoverflow.com/a/42429333
  color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
    return parseInt(v, 16);
  });
};

var canExtractRGBArray = function canExtractRGBArray(color) {
  return /^#/.test(color) || /^rgb/.test(color);
};

var getRGBArray = function getRGBArray(color) {
  if (/^#/.test(color)) {
    return parseHexToRGB(color);
  }

  if (/^rgb/.test(color)) {
    return color.match(/rgba?\((\s?[0-9]*\s?),(\s?[0-9]*\s?),(\s?[0-9]*\s?).*?\)/).splice(1);
  }

  return color;
};

var colorIsDark = function colorIsDark(color) {
  var _getRGBArray = getRGBArray(color),
      red = _getRGBArray[0],
      green = _getRGBArray[1],
      blue = _getRGBArray[2]; // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};
var getRGBA = function getRGBA(color, opacity) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray2 = getRGBArray(color),
        red = _getRGBArray2[0],
        green = _getRGBArray2[1],
        blue = _getRGBArray2[2];

    return "rgba(" + red + ", " + green + ", " + blue + ", " + (opacity || 1) + ")";
  }

  return undefined;
};

var baseStyle = styled.css(["font-family:", ";font-size:", ";line-height:", ";font-weight:", ";", " box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;"], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return props.theme.global.font.size;
}, function (props) {
  return props.theme.global.font.height;
}, function (props) {
  return props.theme.global.font.weight;
}, function (props) {
  return !props.plain && props.theme.global.colors.background && styled.css(["background:", ";color:", ";"], normalizeColor('background', props.theme, true), normalizeColor('text', props.theme, true));
});
var controlBorderStyle = styled.css(["border:", " solid ", ";border-radius:", ";"], function (props) {
  return props.theme.global.control.border.width;
}, function (props) {
  return normalizeColor('border', props.theme);
}, function (props) {
  return props.theme.global.control.border.radius;
});
var edgeStyle = function edgeStyle(kind, data, responsive, responsiveBreakpoint, theme) {
  var breakpoint = responsiveBreakpoint && theme.global.breakpoints[responsiveBreakpoint];

  if (typeof data === 'string') {
    return styled.css(["", ":", ";", ";"], kind, theme.global.edgeSize[data] || data, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + ": " + (breakpoint.edgeSize[data] || data) + ";\n      ") : '');
  }

  var result = [];

  if (data.horizontal) {
    result.push(styled.css(["", "-left:", ";", "-right:", ";", ";"], kind, theme.global.edgeSize[data.horizontal] || data.horizontal, kind, theme.global.edgeSize[data.horizontal] || data.horizontal, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + "-left: " + (breakpoint.edgeSize[data.horizontal] || data.horizontal) + ";\n        " + kind + "-right: " + (breakpoint.edgeSize[data.horizontal] || data.horizontal) + ";\n      ") : ''));
  }

  if (data.vertical) {
    result.push(styled.css(["", "-top:", ";", "-bottom:", ";", ";"], kind, theme.global.edgeSize[data.vertical] || data.vertical, kind, theme.global.edgeSize[data.vertical] || data.vertical, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + "-top: " + (breakpoint.edgeSize[data.vertical] || data.vertical) + ";\n        " + kind + "-bottom: " + (breakpoint.edgeSize[data.vertical] || data.vertical) + ";\n      ") : ''));
  }

  if (data.top) {
    result.push(styled.css(["", "-top:", ";", ";"], kind, theme.global.edgeSize[data.top] || data.top, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + "-top: " + (breakpoint.edgeSize[data.top] || data.top) + ";\n      ") : ''));
  }

  if (data.bottom) {
    result.push(styled.css(["", "-bottom:", ";", ";"], kind, theme.global.edgeSize[data.bottom] || data.bottom, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + "-bottom: " + (breakpoint.edgeSize[data.bottom] || data.bottom) + ";\n      ") : ''));
  }

  if (data.left) {
    result.push(styled.css(["", "-left:", ";", ";"], kind, theme.global.edgeSize[data.left] || data.left, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + "-left: " + (breakpoint.edgeSize[data.left] || data.left) + ";\n      ") : ''));
  }

  if (data.right) {
    result.push(styled.css(["", "-right:", ";", ";"], kind, theme.global.edgeSize[data.right] || data.right, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + "-right: " + (breakpoint.edgeSize[data.right] || data.right) + ";\n      ") : ''));
  }

  return result;
}; // focus also supports clickable elements inside svg

var focusStyle = styled.css(["> circle,> ellipse,> line,> path,> polygon,> polyline,> rect{outline:", " solid 2px;}border-color:", ";box-shadow:0 0 2px 2px ", ";::-moz-focus-inner{border:0;}"], function (props) {
  return normalizeColor(props.theme.global.focus.border.color, props.theme);
}, function (props) {
  return normalizeColor(props.theme.global.focus.border.color, props.theme);
}, function (props) {
  return normalizeColor(props.theme.global.focus.border.color, props.theme);
});
var inputStyle = styled.css(["box-sizing:border-box;font-size:inherit;border:none;-webkit-appearance:none;padding:", "px;outline:none;background:transparent;color:inherit;", " margin:0;", " ", "::-webkit-search-decoration{-webkit-appearance:none;}"], function (props) {
  return parseMetricToNum(props.theme.global.input.padding) - parseMetricToNum(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.global.input.weight && styled.css(["font-weight:", ";"], props.theme.global.input.weight);
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
}, controlBorderStyle);
var overflowStyle = function overflowStyle(overflowProp) {
  if (typeof overflowProp === 'string') {
    return styled.css(["overflow:", ";"], overflowProp);
  }

  return styled.css(["", " ", ";"], overflowProp.horizontal && "overflow-x: " + overflowProp.horizontal + ";", overflowProp.vertical && "overflow-y: " + overflowProp.vertical + ";");
};
var placeholderColor = styled.css(["color:", ";"], function (props) {
  return props.theme.global.colors.placeholder;
});
var placeholderStyle = styled.css(["&::-webkit-input-placeholder{", ";}&::-moz-placeholder{", ";}&:-ms-input-placeholder{", ";}"], placeholderColor, placeholderColor, placeholderColor); // evalStyle() converts a styled-components item into a string

var evalStyle = function evalStyle(arg, theme) {
  if (arg && Array.isArray(arg) && typeof arg[0] === 'function') {
    return arg[0]({
      theme: theme
    });
  }

  return arg;
};
var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var genericStyles = styled.css(["", " ", " ", ""], function (props) {
  return props.alignSelf && "align-self: " + ALIGN_SELF_MAP[props.alignSelf] + ";";
}, function (props) {
  return props.gridArea && "grid-area: " + props.gridArea + ";";
}, function (props) {
  return props.margin && edgeStyle('margin', props.margin, props.responsive, props.theme.global.edgeSize.responsiveBreakpoint, props.theme);
});

var normalizeBackground = function normalizeBackground(background, theme) {
  // If the background has a light or dark object, use that
  var result = background;

  if (background) {
    if (theme.dark && background.dark && typeof background.dark !== 'boolean') {
      result = background.dark;
    } else if (!theme.dark && background.light && typeof background.light !== 'boolean') {
      result = background.light;
    }

    result = evalStyle(result, theme);
  }

  return result;
};
var backgroundIsDark = function backgroundIsDark(backgroundArg, theme) {
  var background = normalizeBackground(backgroundArg, theme);
  var result;

  if (background) {
    if (typeof background === 'object') {
      var color = background.color,
          dark = background.dark,
          opacity = background.opacity;

      if (typeof dark === 'boolean') {
        result = dark;
      } else if (color && ( // weak opacity means we keep the existing darkness
      !opacity || opacity !== 'weak')) {
        var backgroundColor = normalizeColor(background.color, theme);

        if (backgroundColor) {
          result = colorIsDark(backgroundColor);
        }
      }
    } else {
      var _color = normalizeColor(background, theme);

      if (_color) {
        result = colorIsDark(_color);
      }
    }
  }

  return result;
};
var backgroundStyle = function backgroundStyle(backgroundArg, theme, textColorArg) {
  // If the background has a light or dark object, use that
  var background = normalizeBackground(backgroundArg, theme);
  var textColor = textColorArg || theme.global.colors.text;

  if (typeof background === 'object') {
    var styles = [];

    if (background.image) {
      var color;

      if (background.dark === false) {
        color = textColor.light;
      } else if (background.dark) {
        color = textColor.dark;
      } else if (!textColorArg) {
        color = 'inherit';
      }

      styles.push(styled.css(["background-image:", ";background-repeat:no-repeat;background-position:", ";background-size:cover;color:", ";"], background.image, background.position || 'center center', color));
    }

    if (background.color) {
      var _color2 = normalizeColor(background.color, theme);

      var backgroundColor = getRGBA(_color2, background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity] || background.opacity) || _color2;

      styles.push(styled.css(["background-color:", ";", ""], backgroundColor, (!background.opacity || background.opacity !== 'weak') && "color: " + textColor[background.dark || colorIsDark(backgroundColor) ? 'dark' : 'light'] + ";"));
    }

    if (background.dark === false) {
      styles.push(styled.css(["color:", ";"], textColor.light));
    } else if (background.dark) {
      styles.push(styled.css(["color:", ";"], textColor.dark));
    }

    return styles;
  }

  if (background) {
    if (background.lastIndexOf('url', 0) === 0) {
      return styled.css(["background:", " no-repeat center center;background-size:cover;"], background);
    }

    var _color3 = normalizeColor(background, theme);

    if (_color3) {
      return styled.css(["background:", ";color:", ";"], _color3, textColor[colorIsDark(_color3) ? 'dark' : 'light']);
    }
  }

  return undefined;
};
var activeStyle = styled.css(["", " color:", ";"], function (props) {
  return backgroundStyle(normalizeColor(props.theme.global.hover.background, props.theme), props.theme);
}, function (props) {
  return normalizeColor(props.theme.global.hover.color, props.theme);
});
var selectedStyle = styled.css(["", " color:", ";"], function (props) {
  return backgroundStyle(normalizeColor(props.theme.global.selected.background, props.theme), props.theme);
}, function (props) {
  return normalizeColor(props.theme.global.selected.color, props.theme);
});

var _this = undefined;

var debounce = function debounce(cb, timer) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = _this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return cb.apply(context, args);
    }, timer);
  };
};
var debounceDelay = function debounceDelay(_ref) {
  var theme = _ref.theme;
  return theme.global.debounceDelay;
};

var filterByFocusable = function filterByFocusable(elements) {
  return Array.prototype.filter.call(elements || [], function (element) {
    var currentTag = element.tagName.toLowerCase();
    var validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
    var isValidTag = currentTag.match(validTags) && element.focus;

    if (currentTag === 'a') {
      return isValidTag && element.childNodes.length > 0 && element.getAttribute('href');
    }

    if (currentTag === 'svg' || currentTag === 'div') {
      return isValidTag && element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1';
    }

    return isValidTag;
  });
};
var findScrollParents = function findScrollParents(element, horizontal) {
  var result = [];

  if (element) {
    var parent = element.parentNode;

    while (parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect(); // 10px is to account for borders and scrollbars in a lazy way

      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result.push(parent);
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent);
      }

      parent = parent.parentNode;
    } // last scrollable element will be the document
    // if nothing else is scrollable in the page


    if (result.length === 0) {
      result.push(document);
    }
  }

  return result;
};
var getBodyChildElements = function getBodyChildElements() {
  var excludeMatch = /^(script|link)$/i;
  var children = [];
  [].forEach.call(document.body.children, function (node) {
    if (!excludeMatch.test(node.tagName)) {
      children.push(node);
    }
  });
  return children;
};
var getNewContainer = function getNewContainer() {
  // setup DOM
  var container = document.createElement('div');
  document.body.appendChild(container);
  return container;
};
var setFocusWithoutScroll = function setFocusWithoutScroll(element) {
  var x = window.scrollX;
  var y = window.scrollY;
  element.focus();
  window.scrollTo(x, y);
};
var setTabIndex = function setTabIndex(tabIndex) {
  return function (element) {
    element.setAttribute('tabindex', tabIndex);
  };
};
var copyAttribute = function copyAttribute(source) {
  return function (target) {
    return function (element) {
      element.setAttribute(target, element.getAttribute(source));
    };
  };
};

var deleteAttribute = function deleteAttribute(attribute) {
  return function (element) {
    return element.removeAttribute(attribute);
  };
};

var unsetTabIndex = setTabIndex(-1);
var saveTabIndex = copyAttribute('tabindex')('data-g-tabindex');
var restoreTabIndex = copyAttribute('data-g-tabindex')('tabindex');
var deleteTabIndex = deleteAttribute('tabindex');
var deleteTabIndexCopy = deleteAttribute('data-g-tabindex');
var makeNodeFocusable = function makeNodeFocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', false); // allow children to receive focus again

    filterByFocusable(node.getElementsByTagName('*')).forEach(function (child) {
      if (child.hasAttribute('data-g-tabindex')) {
        restoreTabIndex(child);
      } else {
        deleteTabIndex(child);
      }

      deleteTabIndexCopy(child);
    });
  }
};
var makeNodeUnfocusable = function makeNodeUnfocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', true); // prevent children to receive focus

    filterByFocusable(node.getElementsByTagName('*')).forEach(function (child) {
      if (child.hasAttribute('tabindex')) {
        saveTabIndex(child);
      }

      unsetTabIndex(child);
    });
  }
};
var findVisibleParent = function findVisibleParent(element) {
  if (element) {
    return element.offsetParent ? element : findVisibleParent(element.parentElement) || element;
  }

  return undefined;
};
var isNodeAfterScroll = function isNodeAfterScroll(node, target) {
  if (target === void 0) {
    target = window;
  }

  var _node$getBoundingClie = node.getBoundingClientRect(),
      bottom = _node$getBoundingClie.bottom;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      height = _target$getBoundingCl.height,
      top = _target$getBoundingCl.top;

  return bottom >= top + height;
};
var isNodeBeforeScroll = function isNodeBeforeScroll(node, target) {
  if (target === void 0) {
    target = window;
  }

  var _node$getBoundingClie2 = node.getBoundingClientRect(),
      top = _node$getBoundingClie2.top;

  var _target$getBoundingCl2 = target.getBoundingClientRect(),
      targetTop = _target$getBoundingCl2.top;

  return top <= targetTop;
};

var POST_DECIMAL_DIGITS = 10;
var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};
var arcCommands = function arcCommands(centerX, centerY, radius, startAngle, endAngle) {
  // handle that we can't draw a complete circle
  var normalizedEndAngle = endAngle;

  if (endAngle - startAngle >= 360) {
    normalizedEndAngle = startAngle + 359.99;
  }

  var start = polarToCartesian(centerX, centerY, radius, normalizedEndAngle);
  var end = polarToCartesian(centerX, centerY, radius, startAngle);
  var arcSweep = normalizedEndAngle - startAngle <= 180 ? '0' : '1';
  var d = ['M', start.x.toFixed(POST_DECIMAL_DIGITS), start.y.toFixed(POST_DECIMAL_DIGITS), 'A', radius.toFixed(POST_DECIMAL_DIGITS), radius.toFixed(POST_DECIMAL_DIGITS), 0, arcSweep, 0, end.x.toFixed(POST_DECIMAL_DIGITS), end.y.toFixed(POST_DECIMAL_DIGITS)].join(' ');
  return d;
};
var translateEndAngle = function translateEndAngle(startAngle, anglePer, value) {
  return Math.min(360, Math.max(0, startAngle + anglePer * value));
};

var a11yTitlePropType = reactDesc.PropTypes.string.description('Custom title to be used by screen readers.');
var backgroundPropType = reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.string, reactDesc.PropTypes.shape({
  color: reactDesc.PropTypes.string,
  opacity: reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), reactDesc.PropTypes.bool])
})]).description('Background color');
var colorPropType = reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.string, reactDesc.PropTypes.shape({
  dark: reactDesc.PropTypes.string,
  light: reactDesc.PropTypes.string
})]);
var MARGIN_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
var genericProps = {
  a11yTitle: a11yTitlePropType,
  alignSelf: reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description("How to align along the cross axis when contained in\n      a Box or along the column axis when contained in a Grid."),
  gridArea: reactDesc.PropTypes.string.description("The name of the area to place\n    this inside a parent Grid."),
  margin: reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.oneOf(['none'].concat(MARGIN_SIZES)), reactDesc.PropTypes.shape({
    bottom: reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.oneOf(MARGIN_SIZES), reactDesc.PropTypes.string]),
    horizontal: reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.oneOf(MARGIN_SIZES), reactDesc.PropTypes.string]),
    left: reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.oneOf(MARGIN_SIZES), reactDesc.PropTypes.string]),
    right: reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.oneOf(MARGIN_SIZES), reactDesc.PropTypes.string]),
    top: reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.oneOf(MARGIN_SIZES), reactDesc.PropTypes.string]),
    vertical: reactDesc.PropTypes.oneOfType([reactDesc.PropTypes.oneOf(MARGIN_SIZES), reactDesc.PropTypes.string])
  }), reactDesc.PropTypes.string]).description("The amount of margin around the component. An object can\n      be specified to distinguish horizontal margin, vertical margin, and\n      margin on a particular side.")
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};
var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};
var deepMerge = function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) {
    return target;
  } // making sure to not change target (immutable)


  var output = _extends$2({}, target);

  sources.forEach(function (source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = _extends$2({}, source[key]);
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
};
var removeUndefined = function removeUndefined(obj) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  });
  return result;
};

var getBreakpoint = function getBreakpoint(windowWidth, theme) {
  var result;
  Object.keys(theme.global.breakpoints).sort(function (a, b) {
    var first = theme.global.breakpoints[a];
    var second = theme.global.breakpoints[b];
    if (!first) return 1;
    if (!second) return -1;
    if (!first.value) return 1;
    if (!second.value) return -1;
    return first.value - second.value;
  }).some(function (name) {
    var breakpoint = theme.global.breakpoints[name];

    if (breakpoint) {
      if (!breakpoint.value || breakpoint.value >= windowWidth) {
        result = name;
        return true;
      }
    }

    return false;
  });
  return result;
};
var getDeviceBreakpoint = function getDeviceBreakpoint(type, theme) {
  return theme.global.deviceBreakpoints[type];
};

var ROUTER_PROPS = {
  path: reactDesc.PropTypes.string.description('Indicates the path to be used for react-router link.').isRequired,
  method: reactDesc.PropTypes.oneOf(['push', 'replace']).description('Indicates whether the browser history should be appended to or replaced.').defaultValue('push')
};

var _this$1 = undefined;

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
var throttle = function throttle(fn, threshhold, scope) {
  if (threshhold === void 0) {
    threshhold = 250;
  }

  if (scope === void 0) {
    scope = _this$1;
  }

  var last;
  var deferTimer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var now = Date.now();

    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(scope, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(scope, args);
    }
  };
};

styled.ThemeContext.Extend = function (_ref) {
  var children = _ref.children,
      value = _ref.value;
  return React__default.createElement(styled.ThemeContext.Consumer, null, function (theme) {
    return React__default.createElement(styled.ThemeContext.Provider, {
      value: deepMerge(theme, value)
    }, children);
  });
};

styled.ThemeContext.Extend.propTypes = {
  children: propTypes.node.isRequired,
  value: propTypes.shape({}).isRequired
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$2(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = function doc() {
  return function (x) {
    return x;
  };
}; // Do not use the documentation wrapper in production.


{
  doc = function doc(component) {
    return require("./" + component + "/doc").doc;
  }; // eslint-disable-line

}

var withDocs = doc;
var withFocus = function withFocus(WrappedComponent) {
  var FocusableComponent =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$2(FocusableComponent, _Component);

    function FocusableComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "mouseActive", false);

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
        focus: false,
        wrappedRef: React__default.createRef()
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "componentDidMount", function () {
        var wrappedRef = _this.state.wrappedRef;
        window.addEventListener('mousedown', _this.handleActiveMouse); // we could be using onFocus in the wrapper node itself
        // but react does not invoke it if you programically
        // call wrapperNode.focus() inside componentWillUnmount
        // see Drop "this.originalFocusedElement.focus();" for reference

        var wrapperNode = wrappedRef.current;

        if (wrapperNode && wrapperNode.addEventListener) {
          wrapperNode.addEventListener('focus', _this.setFocus);
        }
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "componentWillUnmount", function () {
        var wrappedRef = _this.state.wrappedRef;
        window.removeEventListener('mousedown', _this.handleActiveMouse);
        var wrapperNode = wrappedRef.current;

        if (wrapperNode && wrapperNode.addEventListener) {
          wrapperNode.removeEventListener('focus', _this.setFocus);
        }

        clearTimeout(_this.focusTimer);
        clearTimeout(_this.mouseTimer);
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "handleActiveMouse", function () {
        // from https://marcysutton.com/button-focus-hell/
        _this.mouseActive = true; // this avoids showing focus when clicking around

        clearTimeout(_this.mouseTimer); // empirical number to reset mouseActive after
        // some time has passed without mousedown

        _this.mouseTimer = setTimeout(function () {
          _this.mouseActive = false;
        }, 150);
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "setFocus", function () {
        // delay setting focus to avoid interupting events,
        // 1ms was chosen empirically based on ie11 using Select and TextInput
        // with and without a FormField.
        clearTimeout(_this.focusTimer);
        _this.focusTimer = setTimeout(function () {
          var focus = _this.state.focus;

          if (!focus && !_this.mouseActive) {
            _this.setState({
              focus: true
            });
          }
        }, 1);
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "resetFocus", function () {
        clearTimeout(_this.focusTimer);
        _this.focusTimer = setTimeout(function () {
          var focus = _this.state.focus;

          if (focus) {
            _this.setState({
              focus: false
            });
          }
        }, 1);
      });

      return _this;
    }

    FocusableComponent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var withFocusRef = nextProps.withFocusRef;
      var wrappedRef = prevState.wrappedRef;
      var nextWrappedRef = withFocusRef || wrappedRef;

      if (nextWrappedRef !== wrappedRef) {
        return {
          wrappedRef: nextWrappedRef
        };
      }

      return null;
    };

    var _proto = FocusableComponent.prototype;

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          _onFocus = _this$props.onFocus,
          _onBlur = _this$props.onBlur,
          withFocusRef = _this$props.withFocusRef,
          rest = _objectWithoutPropertiesLoose$2(_this$props, ["onFocus", "onBlur", "withFocusRef"]);

      var _this$state = this.state,
          focus = _this$state.focus,
          wrappedRef = _this$state.wrappedRef;
      return React__default.createElement(WrappedComponent, _extends$3({
        ref: wrappedRef,
        focus: focus
      }, rest, {
        onFocus: function onFocus(event) {
          _this2.setFocus();

          if (_onFocus) {
            _onFocus(event);
          }
        },
        onBlur: function onBlur(event) {
          _this2.resetFocus();

          if (_onBlur) {
            _onBlur(event);
          }
        }
      }));
    };

    return FocusableComponent;
  }(React.Component);

  var ForwardRef = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(FocusableComponent, _extends$3({}, props, {
      withFocusRef: ref
    }));
  });
  ForwardRef.displayName = getDisplayName$1(WrappedComponent);
  ForwardRef.name = ForwardRef.displayName;
  ForwardRef.defaultProps = WrappedComponent.defaultProps;
  hoistNonReactStatics_cjs$1(ForwardRef, WrappedComponent);
  return ForwardRef;
};
var withForwardRef = function withForwardRef(WrappedComponent) {
  var ForwardRefComponent = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(WrappedComponent, _extends$3({
      forwardRef: ref
    }, props));
  });
  ForwardRefComponent.displayName = getDisplayName$1(WrappedComponent);
  ForwardRefComponent.name = ForwardRefComponent.displayName;
  ForwardRefComponent.defaultProps = WrappedComponent.defaultProps;
  hoistNonReactStatics_cjs$1(ForwardRefComponent, WrappedComponent);
  return ForwardRefComponent;
};
var withAnnounce = function withAnnounce(WrappedComponent) {
  var ForwardRef = React__default.forwardRef(function (props, ref) {
    return React__default.createElement(AnnounceContext.Consumer, null, function (announce) {
      return React__default.createElement(WrappedComponent, _extends$3({}, props, {
        announce: announce,
        ref: ref
      }));
    });
  });
  ForwardRef.displayName = getDisplayName$1(WrappedComponent);
  ForwardRef.name = ForwardRef.displayName;
  ForwardRef.defaultProps = WrappedComponent.defaultProps;
  hoistNonReactStatics_cjs$1(ForwardRef, WrappedComponent);
  return ForwardRef;
};

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formular from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */

};

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + rgbColorString + ".");
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + _rgbColorString + ".");
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};

var errMsg = 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new Error(errMsg);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */

function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    hue: (hslColor.hue + parseFloat(degree)) % 360
  }));
} // prettier-ignore


var curriedAdjustHue =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(adjustHue);

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(darken);

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDesaturate =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(desaturate);

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(lighten);

/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */

function mix(weight, color, otherColor) {
  var parsedColor1 = parseToRgb(color);

  var color1 = _extends$1({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = _extends$1({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1 // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method

  });

  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
} // prettier-ignore


var curriedMix =
/*#__PURE__*/
curry
/* ::<number | string, string, string, string> */
(mix);

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedOpacify =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(opacify);

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */

function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
} // prettier-ignore


var curriedSaturate =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(saturate);

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue('244', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */

function setHue(hue, color) {
  return toColorString(_extends$1({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
} // prettier-ignore


var curriedSetHue =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setHue);

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

function setLightness(lightness, color) {
  return toColorString(_extends$1({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
} // prettier-ignore


var curriedSetLightness =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setLightness);

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

function setSaturation(saturation, color) {
  return toColorString(_extends$1({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
} // prettier-ignore


var curriedSetSaturation =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setSaturation);

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
} // prettier-ignore


var curriedShade =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(shade);

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
} // prettier-ignore


var curriedTint =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(tint);

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(transparentize);

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
var parseHexToRGB$1 = function parseHexToRGB(color) {
  return color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
    return "#" + r + r + g + g + b + b;
  }).substring(1).match(/.{2}/g).map(function (x) {
    return parseInt(x, 16);
  });
};

var getRGBArray$1 = function getRGBArray(color) {
  if (/^#/.test(color)) {
    return parseHexToRGB$1(color);
  }

  if (/^rgb/.test(color)) {
    return color.match(/rgba?\((\s?[0-9]*\s?),(\s?[0-9]*\s?),(\s?[0-9]*\s?).*?\)/).splice(1);
  }

  return color;
};

var colorIsDark$1 = function colorIsDark(color) {
  var _getRGBArray = getRGBArray$1(color),
      red = _getRGBArray[0],
      green = _getRGBArray[1],
      blue = _getRGBArray[2]; // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};
var normalizeColor$1 = function normalizeColor(color, theme) {
  var colorSpec = theme.global.colors[color] || color; // If the color has a light or dark object, use that

  var result = colorSpec;

  if (theme.dark && colorSpec.dark) {
    result = colorSpec.dark;
  } else if (!theme.dark && colorSpec.light) {
    result = colorSpec.light;
  } // allow one level of indirection in color names


  if (result && theme.global.colors[result] && theme.global.colors[result] !== result) {
    result = normalizeColor(result, theme);
  }

  return result;
};

var colorStyle = function colorStyle(name, value, theme, required) {
  return styled.css(["", ":", ";"], name, normalizeColor$1(value, theme, required));
};

var sizeStyle = function sizeStyle(name, value, theme) {
  return styled.css(["", ":", ";"], name, theme.global.size[value] || value);
};

var base = {
  global: {
    colors: {
      icon: '#666666'
    }
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px'
    }
  }
};

var defaultProps$1 = {
  theme: base
};

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colorCss = styled.css(['', ' ', ' g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill="none"]{stroke-width:0;}}*[stroke*="#"],*[STROKE*="#"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*="#"],*[FILL*="#"]{fill:inherit;stroke:none;}'], function (props) {
  return colorStyle('fill', props.color || props.theme.global.colors.icon, props.theme);
}, function (props) {
  return colorStyle('stroke', props.color || props.theme.global.colors.icon, props.theme);
});

var IconInner = function IconInner(_ref) {
  var a11yTitle = _ref.a11yTitle,
      color = _ref.color,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutProperties$1(_ref, ['a11yTitle', 'color', 'size', 'theme']);

  return React__default.createElement('svg', _extends$5({ 'aria-label': a11yTitle }, rest));
};
IconInner.displayName = 'Icon';

var StyledIcon = styled__default(IconInner).withConfig({
  displayName: 'StyledIcon',
  componentId: 'ofa7kd-0'
})(['display:inline-block;flex:0 0 auto;', ' ', ' ', ''], function (_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === undefined ? 'medium' : _ref2$size,
      theme = _ref2.theme;
  return '\n    width: ' + (theme.icon.size[size] || size) + ';\n    height: ' + (theme.icon.size[size] || size) + ';\n  ';
}, function (_ref3) {
  var color = _ref3.color;
  return color !== 'plain' && colorCss;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme && theme.icon.extend;
});

StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, defaultProps$1);

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Actions = function Actions(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$6({ viewBox: '0 0 24 24', a11yTitle: 'Actions' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,17.5 C15.0375661,17.5 17.5,15.0375661 17.5,12 C17.5,8.96243388 15.0375661,6.5 12,6.5 C8.96243388,6.5 6.5,8.96243388 6.5,12 C6.5,15.0375661 8.96243388,17.5 12,17.5 Z M12,6.5 L12,1 M12,23 L12,17.5 M1,12 L6.5,12 M17.5,12 L23,12 M4.4375,4.4375 L8.5625,8.5625 M15.4375,15.4375 L19.5625,19.5625 M19.5625,4.4375 L15.4375,8.5625 M8.5625,15.4375 L4.4375,19.5625' })
  );
};

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ClosedCaption = function ClosedCaption(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$7({ viewBox: '0 0 24 24', a11yTitle: 'ClosedCaption' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,12 C1,5 2.5,4 12,4 C21.5,4 23,5 23,12 C23,19 21.5,20 12,20 C2.5,20 1,19 1,12 Z M5.25,14 C5.25,15.5 6,16 7.75,16 C9.5,16 10.25,15.5 10.25,14 L9.97861679,14 C9.97861671,15.25 8.97905547,16 7.75,16 C6.52094453,16 5.52138329,15.25 5.52138321,14 L5.52138321,10 C5.5,8.75 6.5,8 7.75,8 C9,8 10,8.75 9.97861679,10 L10.25,10 C10.25,8.75 9.2286998,8 7.75,8 C6.2713002,8 5.25,8.75 5.25,10 L5.25,14 Z M13.25,14 C13.25,15.5 14,16 15.75,16 C17.5,16 18.25,15.5 18.25,14 L17.9786168,14 C17.9786167,15.25 16.9790555,16 15.75,16 C14.5209445,16 13.5213833,15.25 13.5213832,14 L13.5213832,10 C13.5,8.75 14.5,8 15.75,8 C17,8 18,8.75 17.9786168,10 L18.25,10 C18.25,8.75 17.2286998,8 15.75,8 C14.2713002,8 13.25,8.75 13.25,10 L13.25,14 Z' })
  );
};

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Expand = function Expand(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$8({ viewBox: '0 0 24 24', a11yTitle: 'Expand' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M10,14 L2,22 M1,15 L1,23 L9,23 M22,2 L14,10 M15,1 L23,1 L23,9' })
  );
};

var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FormDown = function FormDown(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$9({ viewBox: '0 0 24 24', a11yTitle: 'FormDown' }, props),
    React__default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '18 9 12 15 6 9' })
  );
};

var _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FormNext = function FormNext(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$a({ viewBox: '0 0 24 24', a11yTitle: 'FormNext' }, props),
    React__default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '9 6 15 12 9 18' })
  );
};

var _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FormPrevious = function FormPrevious(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$b({ viewBox: '0 0 24 24', a11yTitle: 'FormPrevious' }, props),
    React__default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '9 6 15 12 9 18', transform: 'matrix(-1 0 0 1 24 0)' })
  );
};

var _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FormUp = function FormUp(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$c({ viewBox: '0 0 24 24', a11yTitle: 'FormUp' }, props),
    React__default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '18 9 12 15 6 9', transform: 'matrix(1 0 0 -1 0 24)' })
  );
};

var _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Next = function Next(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$d({ viewBox: '0 0 24 24', a11yTitle: 'Next' }, props),
    React__default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '7 2 17 12 7 22' })
  );
};

var _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Pause = function Pause(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$e({ viewBox: '0 0 24 24', a11yTitle: 'Pause' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,21 L9,21 L9,3 L3,3 L3,21 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z' })
  );
};

var _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Play = function Play(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$f({ viewBox: '0 0 24 24', a11yTitle: 'Play' }, props),
    React__default.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '3 22 21 12 3 2' })
  );
};

var _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Previous = function Previous(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$g({ viewBox: '0 0 24 24', a11yTitle: 'Previous' }, props),
    React__default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '7 2 17 12 7 22', transform: 'matrix(-1 0 0 1 24 0)' })
  );
};

var _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Subtract = function Subtract(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$h({ viewBox: '0 0 24 24', a11yTitle: 'Subtract' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,12 L22,12' })
  );
};

var _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Volume = function Volume(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$i({ viewBox: '0 0 24 24', a11yTitle: 'Volume' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M15,16 C17.209,16 19,14.209 19,12 C19,9.791 17.209,8 15,8 M15,20 C20,20 23,16.411 23,12 C23,7.589 19.411,4 15,4 M1,12 L1,8 L6,8 L12,3 L12,21 L6,16 L1,16 L1,12' })
  );
};

var _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var VolumeLow = function VolumeLow(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$j({ viewBox: '0 0 24 24', a11yTitle: 'VolumeLow' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,16 L15,16 C17.209139,16 19,14.209139 19,12 C19,9.790861 17.209139,8 15,8' })
  );
};

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }
var brandColor = '#7D4CDB';
var accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
var neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
var statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC'
};
var darkColors = ['#333333', '#555555', '#777777', '#999999', '#999999', '#999999'];
var lightColors = ['#F8F8F8', '#F2F2F2', '#EDEDED', '#DADADA', '#DADADA', '#DADADA'];
var focusColor = accentColors[0];
var colors$1 = {
  active: rgba(221, 221, 221, 0.5),
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33)
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand'
  },
  focus: focusColor,
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: {
    dark: '#f8f8f8',
    light: '#444444'
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors$1[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors$1["status-" + color] = statusColors[color];
});
var generate = function generate(baseSpacing, scale) {
  if (baseSpacing === void 0) {
    baseSpacing = 24;
  }

  if (scale === void 0) {
    scale = 6;
  }

  // 24
  var baseFontSize = baseSpacing * 0.75; // 18

  var fontScale = baseSpacing / scale; // 4

  var fontSizing = function fontSizing(factor) {
    return {
      size: baseFontSize + factor * fontScale + "px",
      height: baseSpacing + factor * fontScale + "px",
      // maxWidth chosen to be ~50 characters wide
      // see: https://ux.stackexchange.com/a/34125
      maxWidth: baseSpacing * (baseFontSize + factor * fontScale) + "px"
    };
  };

  var borderWidth$$1 = 2;
  var result = deepMerge(base, {
    global: {
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s'
        }
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: baseSpacing / 6 + "px",
        // 4
        large: baseSpacing / 2 + "px",
        // 12
        xlarge: baseSpacing + "px" // 24

      },
      breakpoints: {
        small: {
          value: baseSpacing * 32,
          // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: baseSpacing / 6 + "px",
            // 4
            large: baseSpacing / 4 + "px",
            // 6
            xlarge: baseSpacing / 2 + "px" // 12

          },
          edgeSize: {
            none: '0px',
            hair: '1px',
            // for Chart
            xxsmall: '2px',
            xsmall: baseSpacing / 8 + "px",
            // 3
            small: baseSpacing / 4 + "px",
            // 6
            medium: baseSpacing / 2 + "px",
            // 12
            large: baseSpacing + "px",
            // 24
            xlarge: baseSpacing * 2 + "px" // 48

          },
          size: {
            xxsmall: baseSpacing + "px",
            // 24
            xsmall: baseSpacing * 2 + "px",
            // 48
            small: baseSpacing * 4 + "px",
            // 96
            medium: baseSpacing * 8 + "px",
            // 192
            large: baseSpacing * 16 + "px",
            // 384
            xlarge: baseSpacing * 32 + "px",
            // 768
            full: '100%'
          }
        },
        medium: {
          value: baseSpacing * 64 // 1536

        },
        large: {} // anything above 'medium'

      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large'
      },
      colors: colors$1,
      control: {
        border: {
          width: '1px',
          radius: '4px',
          color: 'border'
        }
      },
      debounceDelay: 300,
      // The time to wait after the user stopped typing, measured in ms.
      drop: {
        background: '#ffffff',
        border: {
          width: '0px',
          radius: '0px'
        },
        shadowSize: 'small',
        zIndex: '20'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        // for Chart
        xxsmall: baseSpacing / 8 + "px",
        // 3
        xsmall: baseSpacing / 4 + "px",
        // 6
        small: baseSpacing / 2 + "px",
        // 12
        medium: baseSpacing + "px",
        // 24
        large: baseSpacing * 2 + "px",
        // 48
        xlarge: baseSpacing * 4 + "px",
        // 96
        responsiveBreakpoint: 'small'
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)'
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)'
        }
      },
      focus: {
        border: {
          color: 'focus'
        }
      },
      font: _extends$k({}, fontSizing(0)),
      hover: {
        background: {
          dark: {
            color: 'active',
            opacity: 'medium'
          },
          light: {
            color: 'active',
            opacity: 'medium'
          }
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      input: {
        padding: baseSpacing / 2 + "px",
        weight: 600
      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1
      },
      selected: {
        background: 'selected',
        color: 'white'
      },
      spacing: baseSpacing + "px",
      size: {
        xxsmall: baseSpacing * 2 + "px",
        // 48
        xsmall: baseSpacing * 4 + "px",
        // 96
        small: baseSpacing * 8 + "px",
        // 192
        medium: baseSpacing * 16 + "px",
        // 384
        large: baseSpacing * 32 + "px",
        // 768
        xlarge: baseSpacing * 48 + "px",
        // 1152
        xxlarge: baseSpacing * 64 + "px",
        // 1536
        full: '100%'
      }
    },
    accordion: {
      icons: {
        collapse: FormUp,
        expand: FormDown // color: { dark: undefined, light: undefined },

      }
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'accent-1',
        light: 'brand'
      },
      hover: {
        textDecoration: 'underline' // fontWeight: undefined,
        // extend: undefined,

      } // extend: undefined,

    },
    box: {
      responsiveBreakpoint: 'small' // when we switch rows to columns
      // extend: undefined,

    },
    button: {
      border: {
        // color: { dark: undefined, light: undefined }
        width: borderWidth$$1 + "px",
        radius: baseSpacing * 0.75 + "px"
      },
      // color: { dark: undefined, light: undefined }
      primary: {// color: { dark: undefined, light: undefined }
      },
      disabled: {
        opacity: 0.3
      },
      minWidth: baseSpacing * 4 + "px",
      maxWidth: baseSpacing * 16 + "px",
      padding: {
        vertical: baseSpacing / 4 - borderWidth$$1 + "px",
        horizontal: baseSpacing - borderWidth$$1 + "px"
      }
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: baseFontSize - fontScale + "px",
        lineHeight: 1.375,
        daySize: baseSpacing * 8 / 7 + "px",
        slideDuration: '0.2s'
      },
      medium: {
        fontSize: baseFontSize + "px",
        lineHeight: 1.45,
        daySize: baseSpacing * 16 / 7 + "px",
        slideDuration: '0.5s'
      },
      large: {
        fontSize: baseFontSize + 3 * fontScale + "px",
        lineHeight: 1.11,
        daySize: baseSpacing * 32 / 7 + "px",
        slideDuration: '0.8s'
      },
      icons: {
        previous: Previous,
        next: Next,
        small: {
          previous: FormPrevious,
          next: FormNext
        }
      }
    },
    carousel: {
      icons: {
        current: Subtract,
        next: Next,
        previous: Previous // color: undefined,

      }
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '4px',
        thickness: '4px' // extend: undefined,

      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// checked: undefined,
        // indeterminate: undefined,
      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      size: baseSpacing + "px",
      // color: { dark: undefined, light: undefined },
      toggle: {
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9'
        },
        radius: baseSpacing + "px",
        size: baseSpacing * 2 + "px",
        // extend: undefined,
        knob: {// extend: undefined,
        }
      } // extend: undefined,

    },
    clock: {
      analog: {
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3'
          },
          width: baseSpacing / 3 + "px",
          size: baseSpacing + "px",
          shape: 'round'
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          },
          width: baseSpacing / 6 + "px",
          size: Math.round(baseSpacing / 2) + "px",
          shape: 'round'
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          },
          width: baseSpacing / 8 + "px",
          size: Math.round(baseSpacing / 2.666) + "px",
          shape: 'round'
        },
        size: {
          small: baseSpacing * 3 + "px",
          medium: baseSpacing * 4 + "px",
          large: baseSpacing * 6 + "px",
          xlarge: baseSpacing * 9 + "px",
          huge: baseSpacing * 12 + "px"
        }
      },
      digital: {
        text: {
          xsmall: {
            size: baseFontSize - 2 * fontScale + "px",
            height: 1.5
          },
          small: {
            size: baseFontSize - fontScale + "px",
            height: 1.43
          },
          medium: {
            size: baseFontSize + "px",
            height: 1.375
          },
          large: {
            size: baseFontSize + fontScale + "px",
            height: 1.167
          },
          xlarge: {
            size: baseFontSize + 2 * fontScale + "px",
            height: 1.1875
          },
          xxlarge: {
            size: baseFontSize + 4 * fontScale + "px",
            height: 1.125
          }
        }
      }
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500
    },
    dataTable: {
      header: {},
      groupHeader: {
        border: {
          side: 'bottom',
          size: 'xsmall'
        },
        fill: 'vertical',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        background: {
          dark: 'dark-2',
          light: 'light-2'
        }
      },
      icons: {
        ascending: FormDown,
        contract: FormUp,
        descending: FormUp,
        expand: FormDown
      },
      resize: {
        border: {
          side: 'right',
          color: 'border'
        }
      },
      primary: {
        weight: 'bold'
      }
    },
    // drop: {
    //   maxHeight: undefined,
    // },
    formField: {
      border: {
        color: 'border',
        position: 'inner',
        side: 'bottom',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical'
          }
        }
      },
      error: {
        color: {
          dark: 'status-critical',
          light: 'status-critical'
        }
      },
      help: {
        color: {
          dark: 'dark-3',
          light: 'dark-3'
        }
      },
      label: {}
    },
    grommet: {},
    heading: {
      font: {// family: undefined
      },
      level: {
        1: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends$k({}, fontSizing(4)),
          medium: _extends$k({}, fontSizing(8)),
          large: _extends$k({}, fontSizing(16)),
          xlarge: _extends$k({}, fontSizing(24))
        },
        2: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends$k({}, fontSizing(2)),
          medium: _extends$k({}, fontSizing(4)),
          large: _extends$k({}, fontSizing(8)),
          xlarge: _extends$k({}, fontSizing(12))
        },
        3: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends$k({}, fontSizing(1)),
          medium: _extends$k({}, fontSizing(2)),
          large: _extends$k({}, fontSizing(4)),
          xlarge: _extends$k({}, fontSizing(6))
        },
        4: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends$k({}, fontSizing(0)),
          medium: _extends$k({}, fontSizing(0)),
          large: _extends$k({}, fontSizing(0)),
          xlarge: _extends$k({}, fontSizing(0))
        },
        5: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends$k({}, fontSizing(-0.5)),
          medium: _extends$k({}, fontSizing(-0.5)),
          large: _extends$k({}, fontSizing(-0.5)),
          xlarge: _extends$k({}, fontSizing(-0.5))
        },
        6: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends$k({}, fontSizing(-1)),
          medium: _extends$k({}, fontSizing(-1)),
          large: _extends$k({}, fontSizing(-1)),
          xlarge: _extends$k({}, fontSizing(-1))
        }
      },
      responsiveBreakpoint: 'small',
      // when we scale the font size down
      weight: 600
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px'
      },
      container: {
        zIndex: '15'
      },
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
      },
      responsiveBreakpoint: 'small',
      // when Layer takes over the full screen
      zIndex: '10'
    },
    menu: {
      // background: undefined,
      // extend: undefined,
      icons: {
        down: FormDown
      }
    },
    paragraph: {
      small: _extends$k({}, fontSizing(-1)),
      medium: _extends$k({}, fontSizing(0)),
      large: _extends$k({}, fontSizing(1)),
      xlarge: _extends$k({}, fontSizing(2)),
      xxlarge: _extends$k({}, fontSizing(4))
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '100%' // color: { dark: undefined, light: undefined },
        // extend: undefined,

      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// circle: undefined,
      },
      gap: 'small',
      size: baseSpacing + "px"
    },
    rangeInput: {
      track: {
        height: '4px',
        color: styled.css(["", ";"], function (props) {
          return rgba(normalizeColor('border', props.theme), 0.2);
        })
      },
      thumb: {// color: { dark: undefined, light: undefined },
      }
    },
    select: {
      // background: undefined,
      container: {// extend: undefined,
      },
      control: {// extend: undefined,
      },
      icons: {
        // color: { dark: undefined, light: undefined },
        down: FormDown
      },
      // searchInput: undefined,
      step: 20
    },
    tab: {
      active: {
        color: 'text' // background: undefined,

      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'accent-1',
          light: 'brand'
        },
        active: {
          color: {
            dark: 'white',
            light: 'black'
          }
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      color: 'control',
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small'
      },
      pad: {
        bottom: 'xsmall'
      }
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      header: {// background: undefined,
        // extend: undefined,
      },
      panel: {// extend: undefined,
      } // gap: undefined,

    },
    table: {
      header: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'bottom',
        verticalAlign: 'bottom',
        fill: 'vertical' // background: undefined,
        // extend: undefined,

      },
      body: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        } // border: undefined,
        // extend: undefined,

      },
      footer: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'top',
        verticalAlign: 'top',
        fill: 'vertical' // extend: undefined,

      }
    },
    text: {
      xsmall: _extends$k({}, fontSizing(-1.5)),
      small: _extends$k({}, fontSizing(-1)),
      medium: _extends$k({}, fontSizing(0)),
      large: _extends$k({}, fontSizing(1)),
      xlarge: _extends$k({}, fontSizing(2)),
      xxlarge: _extends$k({}, fontSizing(4))
    },
    // textInput: {
    //   extend: undefined,
    // },
    video: {
      captions: {
        background: 'rgba(0, 0, 0, 0.7)'
      },
      // controls: { background: undefined },
      icons: {
        closedCaption: ClosedCaption,
        configure: Actions,
        fullScreen: Expand,
        pause: Pause,
        play: Play,
        reduceVolume: VolumeLow,
        volume: Volume // color: { dark: undefined, light: undefined },

      } // scrubber: { track: { color: undefined } },

    },
    worldMap: {
      color: 'light-3',
      continent: {
        active: '8px',
        base: '6px'
      },
      hover: {
        color: 'light-4'
      },
      place: {
        active: '20px',
        base: '8px'
      }
    }
  });
  return deepFreeze(result);
};
var base$1 = generate(24);

var grommet = deepFreeze({
  global: {
    colors: {
      background: '#ffffff'
    },
    font: {
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",  "Helvetica Neue", Arial, sans-serif,  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  },
  button: {
    extend: styled.css(["", ";"], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});

var controlColor = '#FFCA58';
var accentColors$1 = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
var neutralColors$1 = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
var statusColors$1 = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var backgroundColor = '#111111';
var textColor = '#eeeeee';
var borderColor$1 = rgba(255, 255, 255, 0.33);
var activeColor = rgba(102, 102, 102, 0.5);
var colors$2 = {
  active: activeColor,
  background: backgroundColor,
  black: '#000000',
  border: borderColor$1,
  brand: '#FD6FFF',
  control: controlColor,
  focus: controlColor,
  placeholder: '#AAAAAA',
  text: textColor,
  white: '#FFFFFF'
};

var colorArray$1 = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors$2[prefix + "-" + (index + 1)] = color;
  });
};

colorArray$1(accentColors$1, 'accent');
colorArray$1(neutralColors$1, 'neutral');
Object.keys(statusColors$1).forEach(function (color) {
  colors$2["status-" + color] = statusColors$1[color];
});
var dark$2 = deepFreeze({
  global: {
    colors: colors$2,
    drop: {
      background: '#333333'
    },
    focus: {
      border: {
        color: styled.css(["", ";"], function (props) {
          return normalizeColor('focus', props.theme);
        }),
        width: '2px'
      }
    },
    font: {
      family: 'Arial'
    },
    input: {
      weight: 700
    },
    text: {
      dark: textColor,
      light: '#000000'
    }
  },
  anchor: {
    color: controlColor
  },
  icon: {
    color: textColor,
    colors: colors$2
  },
  layer: {
    background: backgroundColor,
    overlay: {
      background: rgba(48, 48, 48, 0.5)
    }
  }
});

var defaultProps$2 = {
  theme: base$1
};

var _FLEX_MAP;
var ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignStyle = styled.css(["align-items:", ";"], function (props) {
  return ALIGN_MAP[props.align];
});
var ALIGN_CONTENT_MAP = {
  around: 'around',
  between: 'between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignContentStyle = styled.css(["align-content:", ";"], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});
var BASIS_MAP = {
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var basisStyle = styled.css(["flex-basis:", ";"], function (props) {
  return BASIS_MAP[props.basis] || props.theme.global.size[props.basis] || props.basis;
}); // min-width and min-height needed because of this
// https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
// we assume we are in the context of a Box going the other direction
// TODO: revisit this

var directionStyle = function directionStyle(direction, theme) {
  var styles = [styled.css(["min-width:0;min-height:0;flex-direction:", ";"], direction === 'row-responsive' ? 'row' : direction)];

  if (direction === 'row-responsive' && theme.box.responsiveBreakpoint) {
    var breakpoint = theme.global.breakpoints[theme.box.responsiveBreakpoint];

    if (breakpoint) {
      styles.push(breakpointStyle(breakpoint, "\n        flex-direction: column;\n        flex-basis: auto;\n        justify-content: flex-start;\n        align-items: stretch;\n      "));
    }
  }

  return styles;
};

var elevationStyle = styled.css(["box-shadow:", ";"], function (props) {
  return props.theme.global.elevation[props.theme.dark ? 'dark' : 'light'][props.elevationProp];
});
var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);

var flexGrowShrinkProp = function flexGrowShrinkProp(flex) {
  if (typeof flex === 'boolean' || typeof flex === 'string') {
    return FLEX_MAP[flex];
  }

  return (flex.grow ? flex.grow : 0) + " " + (flex.shrink ? flex.shrink : 0);
};

var flexStyle = styled.css(["flex:", ";"], function (props) {
  return "" + flexGrowShrinkProp(props.flex) + (props.flex !== true && !props.basis ? ' auto' : '');
});

var fillStyle = function fillStyle(fillProp) {
  if (fillProp === 'horizontal') {
    return 'width: 100%;';
  }

  if (fillProp === 'vertical') {
    return 'height: 100%;';
  }

  if (fillProp) {
    return "\n      width: 100%;\n      height: 100%;\n    ";
  }

  return undefined;
};

var JUSTIFY_MAP = {
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};
var justifyStyle = styled.css(["justify-content:", ";"], function (props) {
  return JUSTIFY_MAP[props.justify];
});
var wrapStyle = 'flex-wrap: wrap;';

var borderStyle$1 = function borderStyle(data, responsive, theme) {
  var styles = [];
  var color = normalizeColor(data.color || 'border', theme);
  var borderSize = data.size || 'xsmall';
  var style = data.style || 'solid';
  var side = typeof data === 'string' ? data : data.side || 'all';
  var value = style + " " + (theme.global.borderSize[borderSize] || borderSize) + " " + color;
  var breakpoint = theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];
  var responsiveValue = breakpoint && (breakpoint.borderSize[borderSize] || borderSize) && style + " " + (breakpoint.borderSize[borderSize] || borderSize) + " " + color;

  if (side === 'top' || side === 'bottom' || side === 'left' || side === 'right') {
    styles.push(styled.css(["border-", ":", ";"], side, value));

    if (responsiveValue) {
      styles.push(breakpointStyle(breakpoint, "\n        border-" + side + ": " + responsiveValue + ";\n      "));
    }
  } else if (side === 'vertical') {
    styles.push(styled.css(["border-left:", ";border-right:", ";"], value, value));

    if (responsiveValue) {
      styles.push(breakpointStyle(breakpoint, "\n        border-left: " + responsiveValue + ";\n        border-right: " + responsiveValue + ";\n      "));
    }
  } else if (side === 'horizontal') {
    styles.push(styled.css(["border-top:", ";border-bottom:", ";"], value, value));

    if (responsiveValue) {
      styles.push(breakpointStyle(breakpoint, "\n        border-top: " + responsiveValue + ";\n        border-bottom: " + responsiveValue + ";\n      "));
    }
  } else {
    styles.push(styled.css(["border:", ";"], value));

    if (responsiveValue) {
      styles.push(breakpointStyle(breakpoint, "border: " + responsiveValue + ";"));
    }
  }

  return styles;
};

var ROUND_MAP = {
  full: '100%'
};

var roundStyle = function roundStyle(data, responsive, theme) {
  var breakpoint = theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];
  var styles = [];

  if (typeof data === 'object') {
    var size = ROUND_MAP[data.size] || theme.global.edgeSize[data.size || 'medium'] || data.size;
    var responsiveSize = breakpoint && breakpoint.edgeSize[data.size] && (breakpoint.edgeSize[data.size] || data.size);

    if (data.corner === 'top') {
      styles.push(styled.css(["border-top-left-radius:", ";border-top-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-top-left-radius: " + responsiveSize + ";\n          border-top-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'bottom') {
      styles.push(styled.css(["border-bottom-left-radius:", ";border-bottom-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-bottom-left-radius: " + responsiveSize + ";\n          border-bottom-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'left') {
      styles.push(styled.css(["border-top-left-radius:", ";border-bottom-left-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-top-left-radius: " + responsiveSize + ";\n          border-bottom-left-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'right') {
      styles.push(styled.css(["border-top-right-radius:", ";border-bottom-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-top-right-radius: " + responsiveSize + ";\n          border-bottom-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner) {
      styles.push(styled.css(["border-", "-radius:", ";"], data.corner, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-" + data.corner + "-radius: " + responsiveSize + ";\n        "));
      }
    } else {
      styles.push(styled.css(["border-radius:", ";"], size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-radius: " + responsiveSize + ";\n        "));
      }
    }
  } else {
    var _size = data === true ? 'medium' : data;

    styles.push(styled.css(["border-radius:", ";"], ROUND_MAP[_size] || theme.global.edgeSize[_size] || _size));

    var _responsiveSize = breakpoint && breakpoint.edgeSize[_size];

    if (_responsiveSize) {
      styles.push(breakpointStyle(breakpoint, "\n        border-radius: " + _responsiveSize + ";\n      "));
    }
  }

  return styles;
};

var SLIDE_SIZES = {
  xsmall: 1,
  small: 5,
  medium: 10,
  large: 50,
  xlarge: 200
};
var PULSE_SIZES = {
  xsmall: 1.001,
  small: 1.01,
  medium: 1.1,
  large: 1.5,
  xlarge: 2
};
var JIGGLE_SIZES = {
  xsmall: 0.1,
  small: 1,
  medium: 5,
  large: 400,
  xlarge: 1000
};
var ZOOM_SIZES = {
  xsmall: 0.001,
  small: 0.01,
  medium: 0.05,
  large: 0.1,
  xlarge: 0.5
};

var animationBounds = function animationBounds(type, size) {
  if (size === void 0) {
    size = 'medium';
  }

  if (type === 'fadeIn') {
    return ['opacity: 0;', 'opacity: 1;'];
  }

  if (type === 'fadeOut') {
    return ['opacity: 1;', 'opacity: 0;'];
  }

  if (type === 'jiggle') {
    var deg = JIGGLE_SIZES[size];
    return ["transform: rotate(-" + deg + "deg);", "transform: rotate(" + deg + "deg);"];
  }

  if (type === 'pulse') {
    return ['transform: scale(1);', "transform: scale(" + PULSE_SIZES[size] + ")"];
  }

  if (type === 'flipIn') {
    return ['transform: rotateY(90deg);', 'transform: rotateY(0);'];
  }

  if (type === 'flipOut') {
    return ['transform: rotateY(0);', 'transform: rotateY(90deg);'];
  }

  if (type === 'slideDown') {
    return ["transform: translateY(-" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideLeft') {
    return ["transform: translateX(" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideRight') {
    return ["transform: translateX(-" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideUp') {
    return ["transform: translateY(" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'zoomIn') {
    return ["transform: scale(" + (1 - ZOOM_SIZES[size]) + ");", 'transform: none;'];
  }

  if (type === 'zoomOut') {
    return ["transform: scale(" + (1 + ZOOM_SIZES[size]) + ");", 'transform: none;'];
  }

  return [];
};

var normalizeTiming = function normalizeTiming(time, defaultTiming) {
  return time ? time / 1000.0 + "s" : defaultTiming;
};

var animationEnding = function animationEnding(type) {
  if (type === 'jiggle') {
    return 'alternate infinite';
  }

  if (type === 'pulse') {
    return 'alternate infinite';
  }

  return 'forwards';
};

var animationObjectStyle = function animationObjectStyle(animation, theme) {
  var bounds = animationBounds(animation.type, animation.size);

  if (bounds) {
    var animationTransition = styled.css(["from{", ";}to{", ";}"], bounds[0], bounds[1]);
    return styled.css(["", " ", " ", " ", ""], styled.keyframes(["", ""], animationTransition), normalizeTiming(animation.duration, (theme.global.animation[animation.type] ? theme.global.animation[animation.type].duration : undefined) || theme.global.animation.duration), normalizeTiming(animation.delay, '0s'), animationEnding(animation.type));
  }

  return '';
};

var animationItemStyle = function animationItemStyle(item, theme) {
  if (typeof item === 'string') {
    return animationObjectStyle({
      type: item
    }, theme);
  }

  if (Array.isArray(item)) {
    return item.reduce(function (style, a, index) {
      return styled.css(["", "", " ", ""], style, index > 0 ? ',' : '', animationItemStyle(a, theme));
    }, '');
  }

  if (typeof item === 'object') {
    return animationObjectStyle(item, theme);
  }

  return '';
};

var animationAncilaries = function animationAncilaries(animation) {
  if (animation.type === 'flipIn' || animation.type === 'flipOut') {
    return 'perspective: 1000px; transform-style: preserve-3d;';
  }

  return '';
};

var animationObjectInitialStyle = function animationObjectInitialStyle(animation) {
  var bounds = animationBounds(animation.type, animation.size);

  if (bounds) {
    return bounds[0] + " " + animationAncilaries(animation);
  }

  return '';
};

var animationInitialStyle = function animationInitialStyle(item) {
  if (typeof item === 'string') {
    return animationObjectInitialStyle({
      type: item
    });
  }

  if (Array.isArray(item)) {
    return item.map(function (a) {
      return typeof a === 'string' ? animationObjectInitialStyle({
        type: a
      }) : animationObjectInitialStyle(a);
    }).join('');
  }

  if (typeof item === 'object') {
    return animationObjectInitialStyle(item);
  }

  return '';
};

var animationStyle = styled.css(["", ";"], function (props) {
  return styled.css(["", " animation:", ";"], animationInitialStyle(props.animation), animationItemStyle(props.animation, props.theme));
}); // NOTE: basis must be after flex! Otherwise, flex overrides basis

var StyledBox = styled__default.div.withConfig({
  displayName: "StyledBox",
  componentId: "sc-13pk1d4-0"
})(["display:flex;box-sizing:border-box;outline:none;", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return !props.basis && 'max-width: 100%;';
}, genericStyles, function (props) {
  return props.heightProp && "height: " + (props.theme.global.size[props.heightProp] || props.heightProp) + ";";
}, function (props) {
  return props.widthProp && "width: " + (props.theme.global.size[props.widthProp] || props.widthProp) + ";";
}, function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.background && backgroundStyle(props.background, props.theme);
}, function (props) {
  return props.border && borderStyle$1(props.border, props.responsive, props.theme);
}, function (props) {
  return props.directionProp && directionStyle(props.directionProp, props.theme);
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return props.fillProp && fillStyle(props.fillProp);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.pad && edgeStyle('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.round && roundStyle(props.round, props.responsive, props.theme);
}, function (props) {
  return props.wrapProp && wrapStyle;
}, function (props) {
  return props.overflowProp && overflowStyle(props.overflowProp);
}, function (props) {
  return props.elevationProp && elevationStyle;
}, function (props) {
  return props.animation && animationStyle;
}, function (props) {
  return props.theme.box && props.theme.box.extend;
});

var gapStyle = function gapStyle(directionProp, gap, responsive, theme) {
  var breakpoint = theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];
  var responsiveSize = breakpoint && breakpoint.edgeSize[gap] && breakpoint.edgeSize[gap];
  var styles = [];

  if (directionProp === 'column') {
    styles.push(styled.css(["height:", ";"], theme.global.edgeSize[gap]));

    if (responsiveSize) {
      styles.push(breakpointStyle(breakpoint, "height: " + responsiveSize + ";"));
    }
  } else {
    styles.push("width: " + theme.global.edgeSize[gap] + ";");

    if (responsive && directionProp === 'row-responsive') {
      styles.push(breakpointStyle(breakpoint, "\n        width: auto;\n        height: " + responsiveSize + ";\n      "));
    }
  }

  return styles;
};

StyledBox.defaultProps = {};
Object.setPrototypeOf(StyledBox.defaultProps, defaultProps$2);
var StyledBoxGap = styled__default.div.withConfig({
  displayName: "StyledBox__StyledBoxGap",
  componentId: "sc-13pk1d4-1"
})(["flex:0 0 auto;", ";"], function (props) {
  return props.gap && gapStyle(props.directionProp, props.gap, props.responsive, props.theme);
});
StyledBoxGap.defaultProps = {};
Object.setPrototypeOf(StyledBoxGap.defaultProps, defaultProps$2);

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$3(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var wrapWithHocs = compose(withForwardRef, withDocs('Box'));

var BoxImpl =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$3(BoxImpl, _Component);

  function BoxImpl() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BoxImpl.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        background = _this$props.background,
        children = _this$props.children,
        direction = _this$props.direction,
        elevation = _this$props.elevation,
        fill = _this$props.fill,
        forwardRef = _this$props.forwardRef,
        gap = _this$props.gap,
        overflow = _this$props.overflow,
        responsive = _this$props.responsive,
        tag = _this$props.tag,
        as = _this$props.as,
        wrap = _this$props.wrap,
        width = _this$props.width,
        height = _this$props.height,
        propsTheme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$3(_this$props, ["a11yTitle", "background", "children", "direction", "elevation", "fill", "forwardRef", "gap", "overflow", "responsive", "tag", "as", "wrap", "width", "height", "theme"]);

    var theme = this.context || propsTheme;
    var contents = children;

    if (gap) {
      contents = [];
      var firstIndex;
      React.Children.forEach(children, function (child, index) {
        if (child) {
          if (firstIndex === undefined) {
            firstIndex = index;
          } else {
            contents.push(React__default.createElement(StyledBoxGap // eslint-disable-next-line react/no-array-index-key
            , {
              key: index,
              gap: gap,
              directionProp: direction,
              responsive: responsive
            }));
          }
        }

        contents.push(child);
      });
    }

    var content = React__default.createElement(StyledBox, _extends$l({
      as: !as && tag ? tag : as,
      "aria-label": a11yTitle,
      background: background,
      ref: forwardRef,
      directionProp: direction,
      elevationProp: elevation,
      fillProp: fill,
      overflowProp: overflow,
      wrapProp: wrap,
      widthProp: width,
      heightProp: height,
      responsive: responsive
    }, rest), contents);

    if (background) {
      var dark = backgroundIsDark(background, theme);

      if (dark !== theme.dark) {
        content = React__default.createElement(styled.ThemeContext.Provider, {
          value: _extends$l({}, theme, {
            dark: dark
          })
        }, content);
      }
    }

    return content;
  };

  return BoxImpl;
}(React.Component);

_defineProperty$2(BoxImpl, "contextType", styled.ThemeContext);

_defineProperty$2(BoxImpl, "displayName", 'Box');

_defineProperty$2(BoxImpl, "defaultProps", {
  direction: 'column',
  margin: 'none',
  pad: 'none',
  responsive: true
});

Object.setPrototypeOf(BoxImpl.defaultProps, defaultProps$2);
var Box = wrapWithHocs(BoxImpl);

var AccordionContext = React.createContext({});

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$4(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var activeAsArray = function activeAsArray(active) {
  return typeof active === 'number' ? [active] : active;
};

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$4(Accordion, _Component);

  function Accordion() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$3(_assertThisInitialized$2(_assertThisInitialized$2(_this)), "state", {
      activeIndexes: []
    });

    _defineProperty$3(_assertThisInitialized$2(_assertThisInitialized$2(_this)), "onPanelChange", function (index) {
      var activeIndexes = _this.state.activeIndexes;
      var nextActiveIndexes = [].concat(activeIndexes || []);
      var _this$props = _this.props,
          onActive = _this$props.onActive,
          multiple = _this$props.multiple;
      var activeIndex = nextActiveIndexes.indexOf(index);

      if (activeIndex > -1) {
        nextActiveIndexes.splice(activeIndex, 1);
      } else if (multiple) {
        nextActiveIndexes.push(index);
      } else {
        nextActiveIndexes = [index];
      }

      _this.setState({
        activeIndexes: nextActiveIndexes
      }, function () {
        if (onActive) {
          onActive(nextActiveIndexes);
        }
      });
    });

    return _this;
  }

  Accordion.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var activeIndex = nextProps.activeIndex;
    var stateActiveIndexes = prevState.activeIndexes,
        stateActiveIndex = prevState.activeIndex;
    var activeIndexes = activeAsArray(activeIndex) || [];

    if ((typeof activeIndex !== 'undefined' || activeIndex !== stateActiveIndex) && activeIndexes.join() !== stateActiveIndexes.join()) {
      return {
        activeIndexes: activeIndexes,
        activeIndex: activeIndex
      };
    }

    return null;
  };

  var _proto = Accordion.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        animate = _this$props2.animate,
        children = _this$props2.children,
        messages = _this$props2.messages,
        rest = _objectWithoutPropertiesLoose$4(_this$props2, ["animate", "children", "messages"]);

    var activeIndexes = this.state.activeIndexes;
    delete rest.onActive;
    return React__default.createElement(Box, _extends$m({
      role: "tablist"
    }, rest, {
      overflow: "auto"
    }), React.Children.toArray(children).map(function (panel, index) {
      return React__default.createElement(AccordionContext.Provider, {
        key: "accordion-panel_" + (index + 0),
        value: {
          active: activeIndexes.indexOf(index) > -1,
          animate: animate,
          messages: messages,
          onPanelChange: function onPanelChange() {
            return _this2.onPanelChange(index);
          }
        }
      }, panel);
    }));
  };

  return Accordion;
}(React.Component);

_defineProperty$3(Accordion, "defaultProps", {
  animate: true,
  messages: {
    tabContents: 'Tab Contents'
  }
});

var AccordionDoc;

{
  AccordionDoc = require('./doc').doc(Accordion); // eslint-disable-line global-require
}

var basicStyle = function basicStyle(props) {
  return styled.css(["border:", " solid ", ";border-radius:", ";color:", ";padding:", " ", ";font-size:", ";line-height:", ";"], props.theme.button.border.width, normalizeColor(props.colorValue || props.theme.button.border.color || 'control', props.theme), props.theme.button.border.radius, normalizeColor(props.theme.button.color || 'text', props.theme), props.theme.button.padding.vertical, props.theme.button.padding.horizontal, props.theme.text.medium.size, props.theme.text.medium.height);
};

var primaryStyle = function primaryStyle(props) {
  return styled.css(["", " border-radius:", ";"], backgroundStyle(normalizeColor(props.colorValue || props.theme.button.primary.color || 'control', props.theme), props.theme, props.theme.button.color), props.theme.button.border.radius);
};

var disabledStyle = styled.css(["opacity:", ";cursor:default;"], function (props) {
  return props.theme.button.disabled.opacity;
});

function getHoverColor(props) {
  if (props.colorValue) {
    return normalizeColor(props.colorValue, props.theme);
  }

  return normalizeColor(props.theme.button.border.color || 'control', props.theme);
}

function getHoverIndicatorStyle(hoverIndicator, theme) {
  var background;

  if (hoverIndicator === true || hoverIndicator === 'background') {
    background = theme.global.hover.background;
  } else {
    background = hoverIndicator;
  }

  return styled.css(["", " color:", ";"], backgroundStyle(background, theme), normalizeColor(theme.global.hover.color, theme));
}

var hoverStyle = styled.css(["&:hover{", " ", ";}"], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && styled.css(["box-shadow:0px 0px 0px 2px ", ";"], getHoverColor(props));
});
var fillStyle$1 = "\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex: 1 0 auto;\n";
var plainStyle = styled.css(["color:inherit;border:none;padding:0;text-align:inherit;"]);
var StyledButton = styled__default.button.withConfig({
  displayName: "StyledButton",
  componentId: "sc-323bzc-0"
})(["display:inline-block;box-sizing:border-box;cursor:pointer;outline:none;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return !props.plain && basicStyle(props);
}, function (props) {
  return props.primary && primaryStyle(props);
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return !props.disabled && props.active && activeStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
}, function (props) {
  return !props.plain && "\n    transition: 0.1s ease-in-out;\n  ";
}, function (props) {
  return props.fillContainer && fillStyle$1;
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.theme.button.extend;
});
StyledButton.defaultProps = {};
Object.setPrototypeOf(StyledButton.defaultProps, defaultProps$2);

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$5(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isDarkBackground = function isDarkBackground(props) {
  var backgroundColor = normalizeBackground(normalizeColor(props.color || props.theme.button.primary.color || props.theme.global.colors.control || 'brand', props.theme), props.theme);
  return colorIsDark(backgroundColor, props.theme);
};

var Button =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$5(Button, _Component);

  function Button(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Button should not have children if icon or label is provided');
    }

    return _this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        color = _this$props.color,
        forwardRef = _this$props.forwardRef,
        children = _this$props.children,
        disabled = _this$props.disabled,
        icon = _this$props.icon,
        fill = _this$props.fill,
        focus = _this$props.focus,
        href = _this$props.href,
        label = _this$props.label,
        onClick = _this$props.onClick,
        plain = _this$props.plain,
        primary = _this$props.primary,
        reverse = _this$props.reverse,
        theme = _this$props.theme,
        type = _this$props.type,
        as = _this$props.as,
        rest = _objectWithoutPropertiesLoose$5(_this$props, ["a11yTitle", "color", "forwardRef", "children", "disabled", "icon", "fill", "focus", "href", "label", "onClick", "plain", "primary", "reverse", "theme", "type", "as"]);

    var buttonIcon = icon; // only change color if user did not specify the color themselves...

    if (primary && icon && !icon.props.color) {
      buttonIcon = React.cloneElement(icon, {
        color: theme.global.colors.text[isDarkBackground(this.props) ? 'dark' : 'light']
      });
    }

    var domTag = !as && href ? 'a' : as;
    var first = reverse ? label : buttonIcon;
    var second = reverse ? buttonIcon : label;
    var contents;

    if (first && second) {
      contents = React__default.createElement(Box, {
        direction: "row",
        align: "center",
        justify: "center",
        gap: "small"
      }, first, second);
    } else {
      contents = first || second || children;
    }

    return React__default.createElement(StyledButton, _extends$n({}, rest, {
      as: domTag,
      ref: forwardRef,
      "aria-label": a11yTitle,
      colorValue: color,
      disabled: disabled,
      hasIcon: !!icon,
      hasLabel: !!label,
      fillContainer: fill,
      focus: focus,
      href: href,
      onClick: onClick,
      plain: typeof plain !== 'undefined' ? plain : React.Children.count(children) > 0 || icon && !label,
      primary: primary,
      type: !href ? type : undefined
    }), contents);
  };

  return Button;
}(React.Component);

_defineProperty$4(Button, "defaultProps", {
  type: 'button',
  focusIndicator: true
});

Object.setPrototypeOf(Button.defaultProps, defaultProps$2);
var ButtonDoc;

{
  ButtonDoc = require('./doc').doc(Button); // eslint-disable-line global-require
}

var ButtonWrapper = compose(withFocus, styled.withTheme, withForwardRef)(ButtonDoc || Button);

function _inheritsLoose$6(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var animatedBoxProperty = function animatedBoxProperty(direction) {
  return direction === 'horizontal' ? 'width' : 'height';
};

var AnimatedBox = styled__default(Box).withConfig({
  displayName: "Collapsible__AnimatedBox",
  componentId: "sc-15kniua-0"
})(["", ";"], function (props) {
  return !props.animate && (props.open ? "\n    max-" + animatedBoxProperty(props.collapsibleDirection) + ": unset;\n    visibility: visible;\n  " : "\n    max-" + animatedBoxProperty(props.collapsibleDirection) + ": 0;\n    visibility: hidden;\n  ");
});

var Collapsible =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$6(Collapsible, _Component);

  Collapsible.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var open = nextProps.open;

    if (open !== prevState.open) {
      return {
        animate: true,
        open: open
      };
    }

    return null;
  };

  function Collapsible(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    /* eslint-disable-next-line react/prop-types */

    _defineProperty$5(_assertThisInitialized$3(_assertThisInitialized$3(_this)), "ref", React.createRef());

    _defineProperty$5(_assertThisInitialized$3(_assertThisInitialized$3(_this)), "getSnapshotBeforeUpdate", function () {
      return _this.ref.current && _this.ref.current.getBoundingClientRect();
    });

    _this.state = {
      open: props.open,
      animate: false
    };
    return _this;
  }

  var _proto = Collapsible.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    var _this2 = this;

    var _this$props = this.props,
        direction = _this$props.direction,
        _this$props$theme$col = _this$props.theme.collapsible,
        minSpeed = _this$props$theme$col.minSpeed,
        baseline = _this$props$theme$col.baseline;
    var _this$state = this.state,
        animate = _this$state.animate,
        open = _this$state.open;
    var container = this.ref.current;

    if (container) {
      var dimension = animatedBoxProperty(direction);
      var boudingClientRect = container.getBoundingClientRect();
      var dimensionSize = boudingClientRect[dimension];
      var shouldAnimate = animate && prevState.open !== open;

      if (open && snapshot[dimension] && dimensionSize !== snapshot[dimension]) {
        shouldAnimate = true;
      }

      if (shouldAnimate) {
        if (this.animationTimeout) {
          clearTimeout(this.animationTimeout);
        }

        var speed = Math.max(dimensionSize / baseline * minSpeed, minSpeed);
        container.style["max-" + dimension] = snapshot[dimension] + "px";
        container.style.overflow = 'hidden';
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            container.style.transition = "max-" + dimension + " " + speed + "ms, visibility 50ms";
            container.style["max-" + dimension] = open ? dimensionSize + "px" : '0px';
            _this2.animationTimeout = setTimeout(function () {
              container.removeAttribute('style');

              _this2.setState({
                animate: false
              });
            }, speed);
          });
        });
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  };

  _proto.render = function render() {
    /* eslint-disable-next-line react/prop-types */
    var _this$props2 = this.props,
        children = _this$props2.children,
        direction = _this$props2.direction;
    var _this$state2 = this.state,
        animate = _this$state2.animate,
        open = _this$state2.open;
    return React__default.createElement(AnimatedBox, {
      "aria-hidden": !open,
      ref: this.ref,
      open: open,
      animate: animate,
      collapsibleDirection: direction
    }, children);
  };

  return Collapsible;
}(React.Component);

Collapsible.defaultProps = {};
Object.setPrototypeOf(Collapsible.defaultProps, defaultProps$2);
var CollapsibleDoc;

{
  CollapsibleDoc = require('./doc').doc(Collapsible); // eslint-disable-line global-require
}

var CollapsibleWrapper = compose(styled.withTheme)(CollapsibleDoc || Collapsible);

var sizeStyle$1 = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var headingTheme = props.theme.heading;
  var levelStyle = headingTheme.level[props.level];

  if (levelStyle) {
    var data = levelStyle[size];
    var styles = [styled.css(["font-size:", ";line-height:", ";max-width:", ";font-weight:", ";"], data.size, data.height, data.maxWidth, levelStyle.font.weight || headingTheme.weight)];

    if (props.responsive && headingTheme.responsiveBreakpoint) {
      var breakpoint = props.theme.global.breakpoints[headingTheme.responsiveBreakpoint];

      if (breakpoint) {
        var responsiveData = headingTheme.level[Math.min(props.level + 1, 4)][size];
        styles.push(breakpointStyle(breakpoint, "\n          font-size: " + responsiveData.size + ";\n          line-height: " + responsiveData.height + ";\n          max-width: " + responsiveData.maxWidth + ";\n        "));
      }
    }

    return styles;
  }

  console.warn("Heading level " + props.level + " is not defined in your theme.");
  return '';
};

var fontFamily = function fontFamily(props) {
  var font = props.theme.heading.level[props.level].font;

  if (font && font.family) {
    return styled.css(["font-family:", ";"], font.family);
  }

  return props.theme.heading.font ? styled.css(["font-family:", ";"], props.theme.heading.font.family) : '';
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};
var textAlignStyle = styled.css(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});
var truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle$1 = styled.css(["color:", ";"], function (props) {
  return normalizeColor(props.colorProp, props.theme);
});
var StyledHeading = styled__default.h1.withConfig({
  displayName: "StyledHeading",
  componentId: "sc-1rdh4aw-0"
})(["", " ", " ", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return fontFamily(props);
}, function (props) {
  return sizeStyle$1(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.colorProp && colorStyle$1;
}, function (props) {
  return props.theme.heading && props.theme.heading.extend;
});
StyledHeading.defaultProps = {};
Object.setPrototypeOf(StyledHeading.defaultProps, defaultProps$2);

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Heading = function Heading(props) {
  var color = props.color,
      level = props.level,
      rest = _objectWithoutPropertiesLoose$6(props, ["color", "level"]); // enforce level to be a number


  return React__default.createElement(StyledHeading, _extends$o({
    as: "h" + level,
    colorProp: color,
    level: +level
  }, rest));
};

Heading.defaultProps = {
  level: 1,
  responsive: true
};
var HeadingDoc;

{
  HeadingDoc = require('./doc').doc(Heading); // eslint-disable-line global-require
}

var HeadingWrapper = HeadingDoc || Heading;

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$7(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AccordionPanel =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$7(AccordionPanel, _Component);

  function AccordionPanel() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;

    _defineProperty$6(_assertThisInitialized$4(_assertThisInitialized$4(_this)), "state", {
      hover: undefined
    });

    _defineProperty$6(_assertThisInitialized$4(_assertThisInitialized$4(_this)), "onMouseOver", function () {
      var _this$props = _this.props,
          onMouseOver = _this$props.onMouseOver,
          dark = _this$props.theme.dark;

      _this.setState({
        hover: dark ? 'light-4' : 'dark-3'
      });

      if (onMouseOver) {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        onMouseOver(args);
      }
    });

    _defineProperty$6(_assertThisInitialized$4(_assertThisInitialized$4(_this)), "onMouseOut", function () {
      var onMouseOut = _this.props.onMouseOut;

      _this.setState({
        hover: undefined
      });

      if (onMouseOut) {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        onMouseOut(args);
      }
    });

    _defineProperty$6(_assertThisInitialized$4(_assertThisInitialized$4(_this)), "onFocus", function () {
      var _this$props2 = _this.props,
          onFocus = _this$props2.onFocus,
          dark = _this$props2.theme.dark;

      _this.setState({
        hover: dark ? 'light-4' : 'dark-3'
      });

      if (onFocus) {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        onFocus(args);
      }
    });

    _defineProperty$6(_assertThisInitialized$4(_assertThisInitialized$4(_this)), "onBlur", function () {
      var onBlur = _this.props.onBlur;

      _this.setState({
        hover: undefined
      });

      if (onBlur) {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        onBlur(args);
      }
    });

    return _this;
  }

  var _proto = AccordionPanel.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        children = _this$props3.children,
        header = _this$props3.header,
        label = _this$props3.label,
        theme = _this$props3.theme,
        onMouseOut = _this$props3.onMouseOut,
        onMouseOver = _this$props3.onMouseOver,
        onFocus = _this$props3.onFocus,
        onBlur = _this$props3.onBlur,
        rest = _objectWithoutPropertiesLoose$7(_this$props3, ["children", "header", "label", "theme", "onMouseOut", "onMouseOver", "onFocus", "onBlur"]);

    var hover = this.state.hover;
    var iconColor = normalizeColor(theme.accordion.icons.color || 'control', theme);
    return React__default.createElement(AccordionContext.Consumer, null, function (panelContext) {
      var active = panelContext.active,
          animate = panelContext.animate,
          onPanelChange = panelContext.onPanelChange;
      var AccordionIcon = active ? theme.accordion.icons.collapse : theme.accordion.icons.expand;
      return React__default.createElement(Box, {
        flex: false
      }, React__default.createElement(ButtonWrapper, {
        role: "tab",
        "aria-selected": active,
        "aria-expanded": active,
        onClick: onPanelChange,
        onMouseOver: _this2.onMouseOver,
        onMouseOut: _this2.onMouseOut,
        onFocus: _this2.onFocus,
        onBlur: _this2.onBlur
      }, header || React__default.createElement(Box, _extends$p({
        align: "center",
        direction: "row",
        justify: "between"
      }, rest), typeof label === 'string' ? React__default.createElement(Box, {
        pad: {
          horizontal: 'xsmall'
        }
      }, React__default.createElement(HeadingWrapper, {
        level: 4,
        color: hover
      }, label)) : label, AccordionIcon && React__default.createElement(Box, {
        pad: {
          horizontal: 'small'
        }
      }, React__default.createElement(AccordionIcon, {
        color: iconColor
      })))), React__default.createElement(Box, {
        border: {
          side: 'bottom',
          color: 'border'
        }
      }, animate ? React__default.createElement(CollapsibleWrapper, {
        open: active
      }, children) : active && children));
    });
  };

  return AccordionPanel;
}(React.Component);

AccordionPanel.defaultProps = {};
Object.setPrototypeOf(AccordionPanel.defaultProps, defaultProps$2);
var AccordionPanelDoc;

{
  AccordionPanelDoc = require('./doc').doc(AccordionPanel); // eslint-disable-line global-require
}

var AccordionPanelWrapper = compose(styled.withTheme, withForwardRef)(AccordionPanelDoc || AccordionPanel);

var disabledStyle$1 = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";

var sizeStyle$2 = function sizeStyle(props) {
  if (props.size) {
    var size = props.size || 'medium';
    var data = props.theme.text[size];
    return styled.css(["font-size:", ";line-height:", ";"], data.size, data.height);
  }

  return styled.css(["font-size:inherit;line-height:inherit;"]);
};

var StyledAnchor = styled__default.a.withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-1rp7lwl-0"
})(["box-sizing:border-box;", " color:", ";", " text-decoration:", ";cursor:pointer;outline:none;", " ", " ", " ", " ", " ", ""], function (props) {
  return sizeStyle$2(props);
}, function (props) {
  return normalizeColor(props.colorProp || props.theme.anchor.color, props.theme);
}, function (props) {
  return props.theme.anchor.fontWeight && "font-weight: " + props.theme.anchor.fontWeight + ";";
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, genericStyles, function (props) {
  return !props.disabled && props.theme.anchor.hover && styled.css(["&:hover{", " ", " ", "}"], props.theme.anchor.hover.textDecoration && "text-decoration: " + props.theme.anchor.hover.textDecoration + ";", props.theme.anchor.hover.fontWeight && "font-weight: " + props.theme.anchor.hover.fontWeight + ";", props.theme.anchor.hover.extend);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle$1;
}, function (props) {
  return props.focus && focusStyle;
}, function (props) {
  return props.theme.anchor.extend;
});
StyledAnchor.defaultProps = {};
Object.setPrototypeOf(StyledAnchor.defaultProps, defaultProps$2);

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$8(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Anchor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$8(Anchor, _Component);

  function Anchor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Anchor should not have children if icon or label is provided');
    }

    return _this;
  }

  var _proto = Anchor.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        children = _this$props.children,
        color = _this$props.color,
        disabled = _this$props.disabled,
        forwardRef = _this$props.forwardRef,
        href = _this$props.href,
        icon = _this$props.icon,
        focus = _this$props.focus,
        label = _this$props.label,
        onClick = _this$props.onClick,
        reverse = _this$props.reverse,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$8(_this$props, ["a11yTitle", "children", "color", "disabled", "forwardRef", "href", "icon", "focus", "label", "onClick", "reverse", "theme"]);

    var coloredIcon = icon;

    if (icon && !icon.props.color) {
      coloredIcon = React.cloneElement(icon, {
        color: normalizeColor(color || theme.anchor.color, theme)
      });
    }

    var first = reverse ? label : coloredIcon;
    var second = reverse ? coloredIcon : label;
    return React__default.createElement(StyledAnchor, _extends$q({}, rest, {
      ref: forwardRef,
      "aria-label": a11yTitle,
      colorProp: color,
      disabled: disabled,
      hasIcon: !!icon,
      focus: focus,
      hasLabel: label,
      reverse: reverse,
      href: !disabled ? href : undefined,
      onClick: !disabled ? onClick : undefined
    }), first && second ? React__default.createElement(Box, {
      as: "span",
      direction: "row",
      align: "center",
      gap: "small",
      style: {
        display: 'inline-flex'
      }
    }, first, second) : first || second || children);
  };

  return Anchor;
}(React.Component);

Anchor.defaultProps = {};
Object.setPrototypeOf(Anchor.defaultProps, defaultProps$2);
var AnchorDoc;

{
  AnchorDoc = require('./doc').doc(Anchor); // eslint-disable-line global-require
}

var AnchorWrapper = compose(withFocus, styled.withTheme, withForwardRef)(AnchorDoc || Anchor);

function _inheritsLoose$9(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var KEYS = {
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
  188: 'onComma',
  16: 'onShift'
};

var Keyboard =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$9(Keyboard, _Component);

  function Keyboard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$7(_assertThisInitialized$5(_assertThisInitialized$5(_this)), "onKeyDown", function (event) {
      /* eslint-disable-next-line react/prop-types */
      var onKeyDown = _this.props.onKeyDown;
      var key = event.keyCode ? event.keyCode : event.which;
      var callbackName = KEYS[key];
      /* eslint-disable react/destructuring-assignment */

      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      if (callbackName && _this.props[callbackName]) {
        var _this$props;

        (_this$props = _this.props)[callbackName].apply(_this$props, [event].concat(rest));
      }
      /* eslint-enable react/destructuring-assignment */


      if (onKeyDown) {
        onKeyDown.apply(void 0, [event].concat(rest));
      }
    });

    return _this;
  }

  var _proto = Keyboard.prototype;

  _proto.componentDidMount = function componentDidMount() {
    /* eslint-disable-next-line react/prop-types */
    var target = this.props.target;

    if (target === 'document') {
      document.addEventListener('keydown', this.onKeyDown);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var target = this.props.target;

    if (target === 'document') {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  };

  _proto.render = function render() {
    /* eslint-disable-next-line react/prop-types */
    var _this$props2 = this.props,
        children = _this$props2.children,
        target = _this$props2.target;
    return target === 'document' ? children : React.cloneElement(React.Children.only(children), {
      onKeyDown: this.onKeyDown
    });
  };

  return Keyboard;
}(React.Component);

var KeyboardDoc;

{
  KeyboardDoc = require('./doc').doc(Keyboard); // eslint-disable-line global-require
}

var KeyboardWrapper = KeyboardDoc || Keyboard;

var sizeStyle$3 = function sizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  return styled.css(["font-size:", ";line-height:", ";width:", ";"], data.fontSize, data.lineHeight, props.theme.global.size[props.sizeProp]);
};

var StyledCalendar = styled__default.div.withConfig({
  displayName: "StyledCalendar",
  componentId: "sc-1y4xhmp-0"
})(["", " ", " ", ""], genericStyles, function (props) {
  return sizeStyle$3(props);
}, function (props) {
  return props.theme.calendar && props.theme.calendar.extend;
});
StyledCalendar.defaultProps = {};
Object.setPrototypeOf(StyledCalendar.defaultProps, defaultProps$2);
var StyledWeeksContainer = styled__default.div.withConfig({
  displayName: "StyledCalendar__StyledWeeksContainer",
  componentId: "sc-1y4xhmp-1"
})(["overflow:hidden;", ";"], function (props) {
  return "height: " + parseMetricToNum(props.theme.calendar[props.sizeProp].daySize) * 6 + "px;";
});
StyledWeeksContainer.defaultProps = {};
Object.setPrototypeOf(StyledWeeksContainer.defaultProps, defaultProps$2);

var slideStyle = function slideStyle(props) {
  var _props$slide = props.slide,
      direction = _props$slide.direction,
      weeks = _props$slide.weeks,
      sizeProp = props.sizeProp,
      theme = props.theme;
  var _theme$calendar$sizeP = theme.calendar[sizeProp],
      daySize = _theme$calendar$sizeP.daySize,
      slideDuration = _theme$calendar$sizeP.slideDuration;
  var amount = parseMetricToNum(daySize) * weeks;
  var translateYFrom = direction === 'down' ? "-" + amount + "px" : '0';
  var translateYTo = direction === 'up' ? "-" + amount + "px" : '0';
  var slideTransition = styled.css(["0%{transform:translateY(", ");}100%{transform:translateY(", ");}"], translateYFrom, translateYTo);
  return styled.css(["animation:", " ", " forwards;"], styled.keyframes(["", ""], slideTransition), slideDuration);
};

var StyledWeeks = styled__default.div.withConfig({
  displayName: "StyledCalendar__StyledWeeks",
  componentId: "sc-1y4xhmp-2"
})(["position:relative;", ";"], function (props) {
  return props.slide && slideStyle(props);
});
StyledWeeks.defaultProps = {};
Object.setPrototypeOf(StyledWeeks.defaultProps, defaultProps$2);
var StyledWeek = styled__default.div.withConfig({
  displayName: "StyledCalendar__StyledWeek",
  componentId: "sc-1y4xhmp-3"
})(["display:flex;flex-direction:row;flex-justify:between;"]);
StyledWeek.defaultProps = {};
Object.setPrototypeOf(StyledWeek.defaultProps, defaultProps$2);
var StyledDayContainer = styled__default.div.withConfig({
  displayName: "StyledCalendar__StyledDayContainer",
  componentId: "sc-1y4xhmp-4"
})(["flex:0 0 auto;"]);
StyledDayContainer.defaultProps = {};
Object.setPrototypeOf(StyledDayContainer.defaultProps, defaultProps$2);

var daySizeStyle = function daySizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  return styled.css(["width:", ";height:", ";"], data.daySize, data.daySize);
};

var StyledDay = styled__default.div.withConfig({
  displayName: "StyledCalendar__StyledDay",
  componentId: "sc-1y4xhmp-5"
})(["display:flex;justify-content:center;align-items:center;", " ", " ", " ", " ", ""], function (props) {
  return daySizeStyle(props);
}, function (props) {
  return props.isSelected && backgroundStyle('control', props.theme) || props.inRange && backgroundStyle({
    color: 'control',
    opacity: 'weak'
  }, props.theme);
}, function (props) {
  return props.otherMonth && 'opacity: 0.5;';
}, function (props) {
  return props.isSelected && 'font-weight: bold;';
}, function (props) {
  return props.theme.calendar && props.theme.calendar.day && props.theme.calendar.day.extend;
});
StyledDay.defaultProps = {};
Object.setPrototypeOf(StyledDay.defaultProps, defaultProps$2);

// Utility functions for the Calendar.
// Just what's needed to avoid having to include a dependency like momentjs.
var DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
var addDays = function addDays(date, days) {
  var result = new Date(date.getTime() + DAY_MILLISECONDS * days); // Deal with crossing the daylight savings time boundary,
  // where adding a day's worth when the time is midnight results in
  // being a day off.

  var hourDelta = result.getHours() - date.getHours(); // At this point, hourDelta is typically 1 or 23, depending on which
  // side of the switch we are on. Convert so that hourDelta is either +1 or -1.

  if (hourDelta > 12) {
    hourDelta -= 24;
  }

  result.setHours(result.getHours() - hourDelta);
  return result;
};
var subtractDays = function subtractDays(date, days) {
  return addDays(date, -days);
};
var addMonths = function addMonths(date, months) {
  var result = new Date(date);
  var years = Math.floor((date.getMonth() + months) / 12);
  result.setFullYear(date.getFullYear() + years);
  var targetMonth = (date.getMonth() + months) % 12;
  result.setMonth(targetMonth < 0 ? 12 + targetMonth : targetMonth);
  return result;
};
var subtractMonths = function subtractMonths(date, months) {
  return addMonths(date, -months);
};
var startOfMonth = function startOfMonth(date) {
  var result = new Date(date);
  result.setDate(1);
  return result;
};
var endOfMonth = function endOfMonth(date) {
  var result = addMonths(date, 1);
  result.setDate(0);
  return result;
};
var sameDay = function sameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};
var sameDayOrAfter = function sameDayOrAfter(date1, date2) {
  return date1.getFullYear() > date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() > date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() >= date2.getDate());
};
var sameDayOrBefore = function sameDayOrBefore(date1, date2) {
  return date1.getFullYear() < date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() < date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() <= date2.getDate());
};
var daysApart = function daysApart(date1, date2) {
  return Math.floor((date1.getTime() - date2.getTime()) / DAY_MILLISECONDS);
}; // betweenDates takes and array of two elements and checks if the
// supplied date lies between them, inclusive.
// returns 2 if exact match to one end, 1 if between, undefined otherwise

var betweenDates = function betweenDates(date, dates) {
  var result;

  if (dates) {
    var _dates$map = dates.map(function (d) {
      return new Date(d);
    }),
        from = _dates$map[0],
        to = _dates$map[1];

    if (sameDay(date, from) || sameDay(date, to)) {
      result = 2;
    } else if (sameDayOrAfter(date, from) && sameDayOrBefore(date, to)) {
      result = 1;
    }
  } else {
    result = 1;
  }

  return result;
}; // withinDates takes and array of string dates or 2 element arrays and
// checks whether the supplied date matches any string or is between
// any dates in arrays.
// returns 2 if exact match, 1 if between, undefined otherwise

var withinDates = function withinDates(date, dates) {
  var result;

  if (dates) {
    if (Array.isArray(dates)) {
      dates.some(function (d) {
        if (typeof d === 'string') {
          if (sameDay(date, new Date(d))) {
            result = 2;
          }
        } else {
          result = betweenDates(date, d);
        }

        return result;
      });
    } else if (sameDay(date, new Date(dates))) {
      result = 2;
    }
  }

  return result;
};
var updateDateRange = function updateDateRange(selectedDate, _ref) {
  var date = _ref.date,
      dates = _ref.dates,
      previousSelectedDate = _ref.previousSelectedDate;
  var result = {
    previousSelectedDate: selectedDate
  };

  if (!dates) {
    if (!date) {
      result.date = selectedDate;
    } else {
      var priorDate = new Date(date);
      var nextDate = new Date(selectedDate);

      if (priorDate.getTime() < nextDate.getTime()) {
        result.date = undefined;
        result.dates = [[date, selectedDate]];
      } else if (priorDate.getTime() > nextDate.getTime()) {
        result.date = undefined;
        result.dates = [[selectedDate, date]];
      } else {
        result.date = undefined;
      }
    }
  } else {
    var priorDates = dates[0].map(function (d) {
      return new Date(d);
    });
    var previousDate = new Date(previousSelectedDate);

    var _nextDate = new Date(selectedDate);

    if (_nextDate.getTime() === priorDates[0].getTime()) {
      result.dates = undefined;
      var _dates$ = dates[0];
      result.date = _dates$[1];
    } else if (_nextDate.getTime() === priorDates[1].getTime()) {
      result.dates = undefined;
      var _dates$2 = dates[0];
      result.date = _dates$2[0];
    } else if (_nextDate.getTime() < previousDate.getTime()) {
      if (_nextDate.getTime() < priorDates[0].getTime()) {
        result.dates = [[selectedDate, dates[0][1]]];
      } else if (_nextDate.getTime() > priorDates[0].getTime()) {
        result.dates = [[dates[0][0], selectedDate]];
      }
    } else if (_nextDate.getTime() > previousDate.getTime()) {
      if (_nextDate.getTime() > priorDates[1].getTime()) {
        result.dates = [[dates[0][0], selectedDate]];
      } else if (_nextDate.getTime() < priorDates[1].getTime()) {
        result.dates = [[selectedDate, dates[0][1]]];
      }
    }
  }

  return result;
};

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$a(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }
var headingPadMap = {
  small: 'xsmall',
  medium: 'small',
  large: 'medium'
};

var buildStartEnd = function buildStartEnd(reference, firstDayOfWeek) {
  var start = new Date(reference);
  start.setDate(1); // first of month

  start = subtractDays(start, start.getDay() - firstDayOfWeek); // beginning of week

  var end = addDays(start, 7 * 5 + 7); // 5 weeks to end of week

  return {
    start: start,
    end: end
  };
};

var buildState = function buildState(props) {
  var date = props.date,
      dates = props.dates,
      firstDayOfWeek = props.firstDayOfWeek,
      reference = props.reference;
  var normalizedReference;

  if (reference) {
    normalizedReference = new Date(reference);
  } else if (date) {
    normalizedReference = new Date(date);
  } else if (dates && dates.length > 0) {
    if (typeof dates[0] === 'string') {
      normalizedReference = new Date(dates[0]);
    } else if (Array.isArray(dates[0])) {
      normalizedReference = new Date(dates[0][0]);
    } else {
      normalizedReference = new Date();
    }
  } else {
    normalizedReference = new Date();
  }

  return _extends$r({}, buildStartEnd(normalizedReference, firstDayOfWeek), {
    reference: normalizedReference
  });
};

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$a(Calendar, _Component);

  function Calendar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$8(_assertThisInitialized$6(_assertThisInitialized$6(_this)), "state", {});

    _defineProperty$8(_assertThisInitialized$6(_assertThisInitialized$6(_this)), "dayRefs", {});

    _defineProperty$8(_assertThisInitialized$6(_assertThisInitialized$6(_this)), "clearSlideStateLater", function () {
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        var targetStartEnd = _this.state.targetStartEnd;

        if (targetStartEnd) {
          _this.setState({
            start: targetStartEnd.start,
            end: targetStartEnd.end,
            targetStartEnd: undefined,
            slide: undefined
          });
        } // Wait for animation to finish before cleaning up. Empirically determined.

      }, 800);
    });

    _defineProperty$8(_assertThisInitialized$6(_assertThisInitialized$6(_this)), "setReference", function (reference) {
      var _this$props = _this.props,
          animate = _this$props.animate,
          bounds = _this$props.bounds,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          onReference = _this$props.onReference;
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end,
          targetStartEnd = _this$state.targetStartEnd;

      if (betweenDates(reference, bounds)) {
        var nextStartEnd = buildStartEnd(reference, firstDayOfWeek);
        var nextState = {
          reference: reference
        }; // if we're changing too fast, bypass animation

        if (!animate || targetStartEnd) {
          nextState.targetStartEnd = nextStartEnd;
          nextState.start = nextStartEnd.start;
          nextState.end = nextStartEnd.end;
          nextState.targetStartEnd = undefined;
          nextState.slide = undefined;
        } else {
          nextState.targetStartEnd = nextStartEnd;

          if (nextStartEnd.start.getTime() < start.getTime()) {
            nextState.start = nextStartEnd.start;
            nextState.slide = {
              direction: 'down',
              weeks: daysApart(start, nextStartEnd.start) / 7
            };
          } else if (nextStartEnd.end.getTime() > end.getTime()) {
            nextState.end = nextStartEnd.end;
            nextState.slide = {
              direction: 'up',
              weeks: daysApart(nextStartEnd.end, end) / 7
            };
          }
        }

        _this.clearSlideStateLater();

        _this.setState(nextState, function () {
          if (onReference) {
            onReference(reference.toISOString());
          }
        });
      }
    });

    _defineProperty$8(_assertThisInitialized$6(_assertThisInitialized$6(_this)), "onFocus", function (day) {
      return function () {
        var bounds = _this.props.bounds;
        var reference = _this.state.reference;

        if (betweenDates(day, bounds)) {
          _this.setState({
            focused: day
          }, function () {
            if (day.getMonth() !== reference.getMonth()) {
              _this.setReference(day);
            }
          });
        }
      };
    });

    _defineProperty$8(_assertThisInitialized$6(_assertThisInitialized$6(_this)), "onClickDay", function (dateString) {
      return function () {
        var _this$props2 = _this.props,
            onSelect = _this$props2.onSelect,
            range = _this$props2.range;

        if (range) {
          var nextState = updateDateRange(dateString, _this.state);

          _this.setState(nextState);

          if (onSelect) {
            onSelect(nextState.dates || nextState.date || undefined);
          }
        } else if (onSelect) {
          onSelect(dateString);
        }
      };
    });

    _defineProperty$8(_assertThisInitialized$6(_assertThisInitialized$6(_this)), "setFocus", function (day) {
      var ref = _this.dayRefs[day.toISOString()];

      if (ref && ref.current) {
        ref.current.focus();
      }
    });

    _defineProperty$8(_assertThisInitialized$6(_assertThisInitialized$6(_this)), "renderCalendarHeader", function (previousMonth, nextMonth) {
      var _this$props3 = _this.props,
          bounds = _this$props3.bounds,
          locale = _this$props3.locale,
          size = _this$props3.size,
          theme = _this$props3.theme;
      var reference = _this.state.reference;
      var PreviousIcon = size === 'small' ? theme.calendar.icons.small.previous : theme.calendar.icons.previous;
      var NextIcon = size === 'small' ? theme.calendar.icons.small.next : theme.calendar.icons.next;
      return React__default.createElement(Box, {
        direction: "row",
        justify: "between",
        align: "center"
      }, React__default.createElement(Box, {
        flex: true,
        pad: {
          horizontal: headingPadMap[size] || 'small'
        }
      }, React__default.createElement(HeadingWrapper, {
        level: size === 'small' ? 4 : 3,
        size: size,
        margin: "none"
      }, reference.toLocaleDateString(locale, {
        month: 'long',
        year: 'numeric'
      }))), React__default.createElement(Box, {
        flex: false,
        direction: "row",
        align: "center"
      }, React__default.createElement(ButtonWrapper, {
        a11yTitle: previousMonth.toLocaleDateString(locale, {
          month: 'long',
          year: 'numeric'
        }),
        icon: React__default.createElement(PreviousIcon, {
          size: size !== 'small' ? size : undefined
        }),
        disabled: !betweenDates(previousMonth, bounds),
        onClick: function onClick() {
          return _this.setReference(previousMonth);
        }
      }), React__default.createElement(ButtonWrapper, {
        a11yTitle: nextMonth.toLocaleDateString(locale, {
          month: 'long',
          year: 'numeric'
        }),
        icon: React__default.createElement(NextIcon, {
          size: size !== 'small' ? size : undefined
        }),
        disabled: !betweenDates(nextMonth, bounds),
        onClick: function onClick() {
          return _this.setReference(nextMonth);
        }
      })));
    });

    return _this;
  }

  Calendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var reference = nextProps.reference;
    var prevReference = prevState.reference;

    if (Object.prototype.hasOwnProperty.call(nextProps, 'date') || Object.prototype.hasOwnProperty.call(nextProps, 'dates') || !prevReference || reference) {
      var state = {};

      if (Object.prototype.hasOwnProperty.call(nextProps, 'date') || Object.prototype.hasOwnProperty.call(nextProps, 'dates')) {
        state.date = nextProps.date;
        state.dates = nextProps.dates;
      }

      if (!prevReference || reference) {
        state = _extends$r({}, state, buildState(nextProps));
      }

      return state;
    }

    return null;
  };

  var _proto = Calendar.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var focused = this.state.focused;

    if (focused) {
      var ref = this.dayRefs[focused.toISOString()];

      if (ref && ref.current && ref.current !== document.activeElement) {
        ref.current.focus();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        bounds = _this$props4.bounds,
        dateProp = _this$props4.date,
        datesProp = _this$props4.dates,
        disabled = _this$props4.disabled,
        firstDayOfWeek = _this$props4.firstDayOfWeek,
        header = _this$props4.header,
        locale = _this$props4.locale,
        onReference = _this$props4.onReference,
        onSelect = _this$props4.onSelect,
        range = _this$props4.range,
        showAdjacentDays = _this$props4.showAdjacentDays,
        size = _this$props4.size,
        theme = _this$props4.theme,
        rest = _objectWithoutPropertiesLoose$9(_this$props4, ["bounds", "date", "dates", "disabled", "firstDayOfWeek", "header", "locale", "onReference", "onSelect", "range", "showAdjacentDays", "size", "theme"]);

    var _this$state2 = this.state,
        date = _this$state2.date,
        dates = _this$state2.dates,
        focused = _this$state2.focused,
        start = _this$state2.start,
        reference = _this$state2.reference,
        end = _this$state2.end,
        slide = _this$state2.slide; // We have to deal with reference being the end of a month with more
    // days than the month we are changing to. So, we always set reference
    // to the first of the month before changing the month.

    var previousMonth = endOfMonth(subtractMonths(startOfMonth(reference), 1));
    var nextMonth = startOfMonth(addMonths(startOfMonth(reference), 1));
    var weeks = [];
    var day = new Date(start);
    var days;
    this.dayRefs = {};

    while (day.getTime() < end.getTime()) {
      if (day.getDay() === firstDayOfWeek) {
        if (days) {
          weeks.push(React__default.createElement(StyledWeek, {
            key: day.getTime()
          }, days));
        }

        days = [];
      }

      var otherMonth = day.getMonth() !== reference.getMonth();

      if (!showAdjacentDays && otherMonth) {
        days.push(React__default.createElement(StyledDayContainer, {
          key: day.getTime(),
          sizeProp: size
        }, React__default.createElement(StyledDay, {
          sizeProp: size
        })));
      } else {
        var dateString = day.toISOString();
        this.dayRefs[dateString] = React__default.createRef();
        var selected = false;
        var inRange = false;
        var selectedState = withinDates(day, date || dates);

        if (selectedState === 2) {
          selected = true;
        } else if (selectedState === 1) {
          inRange = true;
        }

        var dayDisabled = withinDates(day, disabled) || bounds && !betweenDates(day, bounds);
        days.push(React__default.createElement(StyledDayContainer, {
          key: day.getTime(),
          sizeProp: size
        }, React__default.createElement(ButtonWrapper, {
          ref: this.dayRefs[dateString],
          a11yTitle: day.toDateString(),
          plain: true,
          hoverIndicator: !dayDisabled,
          disabled: dayDisabled,
          onClick: this.onClickDay(dateString),
          onFocus: this.onFocus(day),
          onBlur: function onBlur() {
            return _this2.setState({
              focused: false
            });
          }
        }, React__default.createElement(StyledDay, {
          inRange: inRange,
          otherMonth: day.getMonth() !== reference.getMonth(),
          isSelected: selected,
          sizeProp: size
        }, day.getDate()))));
      }

      day = addDays(day, 1);
    }

    weeks.push(React__default.createElement(StyledWeek, {
      key: day.getTime()
    }, days));
    return React__default.createElement(StyledCalendar, _extends$r({
      sizeProp: size
    }, rest), React__default.createElement(KeyboardWrapper, {
      onUp: function onUp(event) {
        event.preventDefault();

        _this2.setFocus(addDays(focused, -7));
      },
      onDown: function onDown(event) {
        event.preventDefault();

        _this2.setFocus(addDays(focused, 7));
      },
      onLeft: function onLeft() {
        return focused && _this2.setFocus(addDays(focused, -1));
      },
      onRight: function onRight() {
        return focused && _this2.setFocus(addDays(focused, 1));
      }
    }, React__default.createElement(Box, null, header ? header({
      date: reference,
      locale: locale,
      onPreviousMonth: function onPreviousMonth() {
        return _this2.setReference(previousMonth);
      },
      onNextMonth: function onNextMonth() {
        return _this2.setReference(nextMonth);
      },
      previousInBound: betweenDates(previousMonth, bounds),
      nextInBound: betweenDates(nextMonth, bounds)
    }) : this.renderCalendarHeader(previousMonth, nextMonth), React__default.createElement(StyledWeeksContainer, {
      sizeProp: size
    }, React__default.createElement(StyledWeeks, {
      slide: slide,
      sizeProp: size
    }, weeks)))));
  };

  return Calendar;
}(React.Component);

_defineProperty$8(Calendar, "defaultProps", {
  animate: true,
  firstDayOfWeek: 0,
  size: 'medium',
  locale: 'en-US',
  showAdjacentDays: true
});

Object.setPrototypeOf(Calendar.defaultProps, defaultProps$2);
var CalendarDoc;

{
  CalendarDoc = require('./doc').doc(Calendar); // eslint-disable-line global-require
}

var CalendarWrapper = compose(styled.withTheme)(CalendarDoc || Calendar);

var fillStyle$2 = "\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex-grow: 1;\n  display: flex;\n";
var StyledStack = styled__default.div.withConfig({
  displayName: "StyledStack",
  componentId: "ajspsk-0"
})(["position:relative;", " ", " ", ""], genericStyles, function (props) {
  return props.fillContainer && fillStyle$2;
}, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});
StyledStack.defaultProps = {};
Object.setPrototypeOf(StyledStack.defaultProps, defaultProps$2);
var styleMap = {
  fill: "\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",
  center: "\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",
  left: "\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",
  right: "\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",
  top: "\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  bottom: "\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  'top-left': "\n    top: 0;\n    left: 0;\n  ",
  'bottom-left': "\n    bottom: 0;\n    left: 0;\n  ",
  'top-right': "\n    top: 0;\n    right: 0;\n  ",
  'bottom-right': "\n    bottom: 0;\n    right: 0;\n  "
};
var StyledStackLayer = styled__default.div.withConfig({
  displayName: "StyledStack__StyledStackLayer",
  componentId: "ajspsk-1"
})(["position:", ";", " ", " ", ""], function (props) {
  return props.guiding ? 'relative' : 'absolute';
}, function (props) {
  return props.guiding && 'display: block;';
}, function (props) {
  return !props.guiding && styleMap[props.anchor || 'fill'] + ";";
}, function (props) {
  return props.fillContainer && "\n    width: 100%;\n    height: 100%;\n  ";
});
StyledStackLayer.defaultProps = {};
Object.setPrototypeOf(StyledStackLayer.defaultProps, defaultProps$2);

function _extends$s() { _extends$s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$b(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Stack =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$b(Stack, _Component);

  function Stack() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Stack.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        anchor = _this$props.anchor,
        children = _this$props.children,
        fill = _this$props.fill,
        guidingChild = _this$props.guidingChild,
        rest = _objectWithoutPropertiesLoose$a(_this$props, ["anchor", "children", "fill", "guidingChild"]); // make all children but the first absolutely positioned


    var guidingIndex = guidingChild;

    if (guidingIndex === 'first' || !guidingIndex) {
      guidingIndex = 0;
    } else if (guidingIndex === 'last') {
      guidingIndex = React__default.Children.count(children) - 1;
    }

    var childIndex = 0;
    var styledChildren = React.Children.map(children, function (child) {
      if (child) {
        var layer;

        if (childIndex === guidingIndex) {
          layer = React__default.createElement(StyledStackLayer, {
            guiding: true,
            fillContainer: fill
          }, child);
        } else {
          layer = React__default.createElement(StyledStackLayer, {
            anchor: anchor
          }, child);
        }

        childIndex += 1;
        return layer;
      }

      return child;
    });
    return React__default.createElement(StyledStack, _extends$s({
      fillContainer: fill
    }, rest), styledChildren);
  };

  return Stack;
}(React.Component);

var StackDoc;

{
  StackDoc = require('./doc').doc(Stack); // eslint-disable-line global-require
}

var StackWrapper = StackDoc || Stack;

function _extends$t() { _extends$t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

function _objectWithoutPropertiesLoose$b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$c(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$c(Carousel, _Component);

  function Carousel() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$9(_assertThisInitialized$7(_assertThisInitialized$7(_this)), "state", {
      activeIndex: 0
    });

    _defineProperty$9(_assertThisInitialized$7(_assertThisInitialized$7(_this)), "play", function () {
      var play = _this.props.play;
      clearInterval(_this.timer);
      _this.timer = setInterval(function () {
        var children = _this.props.children;
        var activeIndex = _this.state.activeIndex;
        var lastIndex = React.Children.count(children) - 1;

        if (activeIndex < lastIndex) {
          _this.setState({
            activeIndex: activeIndex + 1,
            priorActiveIndex: activeIndex
          });
        } else {
          _this.setState({
            activeIndex: 0,
            priorActiveIndex: activeIndex
          });
        }
      }, play);
    });

    _defineProperty$9(_assertThisInitialized$7(_assertThisInitialized$7(_this)), "onRight", function () {
      var activeIndex = _this.state.activeIndex;
      clearInterval(_this.timer);

      _this.setState({
        activeIndex: activeIndex + 1,
        priorActiveIndex: activeIndex
      });
    });

    _defineProperty$9(_assertThisInitialized$7(_assertThisInitialized$7(_this)), "onLeft", function () {
      var activeIndex = _this.state.activeIndex;
      clearInterval(_this.timer);

      _this.setState({
        activeIndex: activeIndex - 1,
        priorActiveIndex: activeIndex
      });
    });

    _defineProperty$9(_assertThisInitialized$7(_assertThisInitialized$7(_this)), "onSelect", function (index) {
      return function () {
        var activeIndex = _this.state.activeIndex;
        clearInterval(_this.timer);

        _this.setState({
          activeIndex: index,
          priorActiveIndex: activeIndex
        });
      };
    });

    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var play = this.props.play;

    if (play) {
      this.play();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var play = this.props.play;

    if (play && (!prevProps.play || play !== prevProps.play)) {
      this.play();
    } else if (!play && prevProps.play) {
      clearInterval(this.timer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        fill = _this$props.fill,
        focus = _this$props.focus,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$b(_this$props, ["children", "fill", "focus", "theme"]);

    var _this$state = this.state,
        activeIndex = _this$state.activeIndex,
        priorActiveIndex = _this$state.priorActiveIndex;
    var lastIndex = React.Children.count(children) - 1;
    var onLeft = activeIndex > 0 ? this.onLeft : undefined;
    var onRight = activeIndex < lastIndex ? this.onRight : undefined;
    var CurrentIcon = theme.carousel.icons.current;
    var iconColor = normalizeColor(theme.carousel.icons.color || 'control', theme);
    var selectors = [];
    var wrappedChildren = React.Children.map(children, function (child, index) {
      selectors.push(React__default.createElement(ButtonWrapper // eslint-disable-next-line react/no-array-index-key
      , {
        key: index,
        icon: React__default.createElement(CurrentIcon, {
          color: activeIndex === index ? iconColor : undefined
        }),
        onClick: _this2.onSelect(index)
      }));
      var animation;

      if (index === activeIndex) {
        if (priorActiveIndex !== undefined) {
          animation = {
            type: priorActiveIndex < activeIndex ? 'slideLeft' : 'slideRight',
            size: 'xlarge'
          };
        }
      } else if (index === priorActiveIndex) {
        animation = {
          type: 'fadeOut'
        };
      } else {
        animation = {
          type: 'fadeOut',
          duration: 0
        };
      }

      return React__default.createElement(Box, {
        overflow: "hidden"
      }, React__default.createElement(Box, {
        animation: animation
      }, child));
    });
    var NextIcon = theme.carousel.icons.next;
    var PreviousIcon = theme.carousel.icons.previous;
    return React__default.createElement(KeyboardWrapper, {
      onLeft: onLeft,
      onRight: onRight
    }, React__default.createElement(StackWrapper, _extends$t({
      guidingChild: activeIndex,
      fill: fill
    }, rest), wrappedChildren, React__default.createElement(Box, {
      tabIndex: "0",
      focus: focus,
      fill: true,
      direction: "row",
      justify: "between"
    }, React__default.createElement(Box, {
      fill: "vertical"
    }, React__default.createElement(ButtonWrapper, {
      fill: true,
      disabled: activeIndex <= 0,
      onClick: onLeft,
      hoverIndicator: true
    }, React__default.createElement(Box, {
      justify: "center"
    }, React__default.createElement(PreviousIcon, null)))), React__default.createElement(Box, {
      justify: "end"
    }, React__default.createElement(Box, {
      direction: "row",
      justify: "center"
    }, selectors)), React__default.createElement(Box, {
      fill: "vertical"
    }, React__default.createElement(ButtonWrapper, {
      fill: true,
      disabled: activeIndex >= lastIndex,
      onClick: onRight,
      hoverIndicator: true
    }, React__default.createElement(Box, {
      justify: "center"
    }, React__default.createElement(NextIcon, null)))))));
  };

  return Carousel;
}(React.Component);

Carousel.defaultProps = {};
Object.setPrototypeOf(Carousel.defaultProps, defaultProps$2);
var CarouselDoc;

{
  CarouselDoc = require('./doc').doc(Carousel); // eslint-disable-line global-require
}

var CarouselWrapper = compose(withFocus, styled.withTheme)(CarouselDoc || Carousel);

var StyledChart = styled__default.svg.withConfig({
  displayName: "StyledChart",
  componentId: "sc-1nae0gf-0"
})(["display:block;max-width:100%;overflow:visible;", " ", ";"], genericStyles, function (props) {
  return props.theme.chart && props.theme.chart.extend;
});
StyledChart.defaultProps = {};
Object.setPrototypeOf(StyledChart.defaultProps, defaultProps$2);

var normalizeValues = function normalizeValues(values) {
  return (values || []).map(function (value, index) {
    if (Array.isArray(value)) {
      return {
        value: value
      };
    }

    if (typeof value === 'number') {
      return {
        value: [index, value]
      };
    }

    return value;
  });
};
var normalizeBounds = function normalizeBounds(bounds, values) {
  var result = bounds;

  if (!result) {
    result = [[0, 1], [0, 1]];
    (values || []).forEach(function (value) {
      result[0][0] = Math.min(result[0][0], value.value[0]);
      result[0][1] = Math.max(result[0][1], value.value[0]);
      result[1][0] = Math.min(result[1][0], value.value[1]);
      result[1][1] = Math.max(result[1][1], value.value[1]);
    });
  }

  return result;
};

function _inheritsLoose$d(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$u() { _extends$u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

function _objectWithoutPropertiesLoose$c(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderBars = function renderBars(values, bounds, scale, height) {
  return (values || []).map(function (valueArg, index) {
    var label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        rest = _objectWithoutPropertiesLoose$c(valueArg, ["label", "onHover", "value"]);

    var key = "p-" + index;
    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    var top = value.length === 2 ? value[1] : value[2];

    if (top !== 0) {
      var d = "M " + (value[0] - bounds[0][0]) * scale[0] + "," + ("" + (height - (bottom - bounds[1][0]) * scale[1])) + (" L " + (value[0] - bounds[0][0]) * scale[0] + ",") + ("" + (height - (top - bounds[1][0]) * scale[1]));
      var hoverProps;

      if (onHover) {
        hoverProps = {
          onMouseOver: function onMouseOver() {
            return onHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return onHover(false);
          }
        };
      }

      return React__default.createElement("g", {
        key: key,
        fill: "none"
      }, React__default.createElement("title", null, label), React__default.createElement("path", _extends$u({
        d: d
      }, hoverProps, rest)));
    }

    return undefined;
  });
};

var renderLine = function renderLine(values, bounds, scale, height, _ref) {
  var onClick = _ref.onClick,
      onHover = _ref.onHover;
  var d = '';
  (values || []).forEach(function (_ref2, index) {
    var value = _ref2.value;
    d += (index ? ' L' : 'M') + " " + (value[0] - bounds[0][0]) * scale[0] + "," + ("" + (height - (value[1] - bounds[1][0]) * scale[1]));
  });
  var hoverProps;

  if (onHover) {
    hoverProps = {
      onMouseOver: function onMouseOver() {
        return onHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return onHover(false);
      }
    };
  }

  var clickProps;

  if (onClick) {
    clickProps = {
      onClick: onClick
    };
  }

  return React__default.createElement("g", {
    fill: "none"
  }, React__default.createElement("path", _extends$u({
    d: d
  }, hoverProps, clickProps)));
};

var renderArea = function renderArea(values, bounds, scale, height, _ref3) {
  var color = _ref3.color,
      onClick = _ref3.onClick,
      onHover = _ref3.onHover,
      theme = _ref3.theme;
  var d = '';
  (values || []).forEach(function (_ref4, index) {
    var value = _ref4.value;
    var top = value.length === 2 ? value[1] : value[2];
    d += (!index ? 'M' : ' L') + " " + (value[0] - bounds[0][0]) * scale[0] + "," + ("" + (height - (top - bounds[1][0]) * scale[1]));
  });
  (values || []).reverse().forEach(function (_ref5) {
    var value = _ref5.value;
    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    d += " L " + (value[0] - bounds[0][0]) * scale[0] + "," + ("" + (height - (bottom - bounds[1][0]) * scale[1]));
  });

  if (d.length > 0) {
    d += ' Z';
  }

  var hoverProps;

  if (onHover) {
    hoverProps = {
      onMouseOver: function onMouseOver() {
        return onHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return onHover(false);
      }
    };
  }

  var clickProps;

  if (onClick) {
    clickProps = {
      onClick: onClick
    };
  }

  return React__default.createElement("g", {
    fill: normalizeColor(color.color || color, theme)
  }, React__default.createElement("path", _extends$u({
    d: d
  }, hoverProps, clickProps)));
};

var Chart =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$d(Chart, _Component);

  function Chart() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$a(_assertThisInitialized$8(_assertThisInitialized$8(_this)), "containerRef", React.createRef());

    _defineProperty$a(_assertThisInitialized$8(_assertThisInitialized$8(_this)), "state", {
      containerWidth: 0,
      containerHeight: 0
    });

    _defineProperty$a(_assertThisInitialized$8(_assertThisInitialized$8(_this)), "onResize", function () {
      var containerNode = _this.containerRef.current;

      if (containerNode) {
        var parentNode = containerNode.parentNode;

        if (parentNode) {
          var rect = parentNode.getBoundingClientRect();

          _this.setState({
            containerWidth: rect.width,
            containerHeight: rect.height
          });
        }
      }
    });

    return _this;
  }

  Chart.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var bounds = nextProps.bounds,
        values = nextProps.values;
    var stateBounds = prevState.bounds,
        stateValues = prevState.values;

    if (!stateValues || values !== stateValues || bounds !== stateBounds) {
      var nextValues = normalizeValues(values);
      var nextBounds = normalizeBounds(bounds, nextValues);
      return {
        bounds: nextBounds,
        values: nextValues
      };
    }

    return null;
  };

  var _proto = Chart.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        onClick = _this$props.onClick,
        onHover = _this$props.onHover,
        overflow = _this$props.overflow,
        round = _this$props.round,
        size = _this$props.size,
        theme = _this$props.theme,
        thickness = _this$props.thickness,
        type = _this$props.type,
        rest = _objectWithoutPropertiesLoose$c(_this$props, ["color", "onClick", "onHover", "overflow", "round", "size", "theme", "thickness", "type"]);

    delete rest.values;
    var _this$state = this.state,
        bounds = _this$state.bounds,
        containerWidth = _this$state.containerWidth,
        containerHeight = _this$state.containerHeight,
        values = _this$state.values;
    var sizeWidth = typeof size === 'string' ? size : size.width || 'medium';
    var sizeHeight = typeof size === 'string' ? size : size.height || 'medium';
    var width = sizeWidth === 'full' ? containerWidth : parseMetricToNum(theme.global.size[sizeWidth]);
    var height = sizeHeight === 'full' ? containerHeight : parseMetricToNum(theme.global.size[sizeHeight]);
    var strokeWidth = parseMetricToNum(theme.global.edgeSize[thickness]);
    var scale = [width / (bounds[0][1] - bounds[0][0]), height / (bounds[1][1] - bounds[1][0])];
    var viewBox = overflow ? "0 0 " + width + " " + height : "-" + strokeWidth / 2 + " -" + strokeWidth / 2 + " " + (width + strokeWidth) + " " + (height + strokeWidth);
    var colorName = typeof color === 'object' ? color.color : color;
    var opacity = color.opacity ? theme.global.opacity[color.opacity] : undefined;
    var contents;

    if (type === 'bar') {
      contents = renderBars(values, bounds, scale, height);
    } else if (type === 'line') {
      contents = renderLine(values, bounds, scale, height, this.props);
    } else if (type === 'area') {
      contents = renderArea(values, bounds, scale, height, this.props);
    }

    return React__default.createElement(StyledChart, _extends$u({
      ref: this.containerRef,
      viewBox: viewBox,
      preserveAspectRatio: "none",
      width: size === 'full' ? '100%' : width,
      height: size === 'full' ? '100%' : height
    }, rest), React__default.createElement("g", {
      stroke: normalizeColor(colorName, theme),
      strokeWidth: strokeWidth,
      strokeLinecap: round ? 'round' : 'butt',
      strokeLinejoin: round ? 'round' : 'miter',
      opacity: opacity
    }, contents));
  };

  return Chart;
}(React.Component);

_defineProperty$a(Chart, "defaultProps", {
  color: 'accent-1',
  overflow: false,
  size: {
    width: 'medium',
    height: 'small'
  },
  thickness: 'medium',
  type: 'bar'
});

Object.setPrototypeOf(Chart.defaultProps, defaultProps$2);
var ChartDoc;

{
  ChartDoc = require('./doc').doc(Chart); // eslint-disable-line global-require
}

var ChartWrapper = compose(styled.withTheme)(ChartDoc || Chart);

var disabledStyle$2 = "\n  opacity: 0.5;\n  cursor: default;\n";
var hoverStyle$1 = styled.css([":hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:", ";}"], function (props) {
  return normalizeColor(props.theme.checkBox.hover.border.color, props.theme);
});
var StyledCheckBoxIcon = styled__default.svg.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxIcon",
  componentId: "sc-1dbk5ju-0"
})(["box-sizing:border-box;position:absolute;stroke-width:", ";stroke:", ";width:", ";height:", ";", ";"], function (props) {
  return props.theme.checkBox.check.thickness;
}, function (props) {
  return normalizeColor(props.theme.checkBox.color || 'control', props.theme);
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.extend;
});
StyledCheckBoxIcon.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxIcon.defaultProps, defaultProps$2);
var StyledCheckBoxContainer = styled__default.label.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxContainer",
  componentId: "sc-1dbk5ju-1"
})(["display:flex;flex-direction:row;align-items:center;user-select:none;", " ", " ", " ", ""], function (props) {
  return props.disabled && disabledStyle$2;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.theme.checkBox.hover.border.color && hoverStyle$1;
}, function (props) {
  return props.theme.checkBox.extend;
});
StyledCheckBoxContainer.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxContainer.defaultProps, defaultProps$2);
var StyledCheckBoxInput = styled__default.input.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxInput",
  componentId: "sc-1dbk5ju-2"
})(["position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;margin:0;z-index:1;", ":checked + span > span{left:calc( ", " - ", " );background:", ";}"], function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return normalizeColor(props.theme.checkBox.color || 'control', props.theme);
});
StyledCheckBoxInput.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxInput.defaultProps, defaultProps$2);
var StyledCheckBoxBox = styled__default.div.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxBox",
  componentId: "sc-1dbk5ju-3"
})(["", ";", ";"], function (props) {
  return props.focus && focusStyle;
}, function (props) {
  return props.theme.checkBox.check.extend;
});
StyledCheckBoxBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxBox.defaultProps, defaultProps$2);
var StyledCheckBoxToggle = styled__default.span.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxToggle",
  componentId: "sc-1dbk5ju-4"
})(["box-sizing:border-box;position:relative;vertical-align:middle;display:inline-block;width:", ";height:", ";border:", " solid;border-color:", ";border-radius:", ";background-color:", ";", ";", ";"], function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return normalizeColor(props.theme.checkBox.border.color, props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.background ? normalizeColor(props.theme.checkBox.toggle.background, props.theme) : 'transparent';
}, function (props) {
  return props.focus && focusStyle;
}, function (props) {
  return props.theme.checkBox.toggle.extend;
});
StyledCheckBoxToggle.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxToggle.defaultProps, defaultProps$2);
var StyledCheckBoxKnob = styled__default.span.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxKnob",
  componentId: "sc-1dbk5ju-5"
})(["box-sizing:border-box;position:absolute;top:-", ";left:-", ";transition:all 0.3s;width:", ";height:", ";background:", ";border-radius:", ";", ";"], function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return normalizeColor(props.theme.checkBox.toggle.color[props.theme.dark ? 'dark' : 'light'], props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.knob.extend;
});
StyledCheckBoxKnob.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxKnob.defaultProps, defaultProps$2);
var StyledCheckBox = styled__default.div.withConfig({
  displayName: "StyledCheckBox",
  componentId: "sc-1dbk5ju-6"
})(["position:relative;"]);
StyledCheckBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBox.defaultProps, defaultProps$2);

function _extends$v() { _extends$v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

function _objectWithoutPropertiesLoose$d(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$e(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var stopLabelClick = function stopLabelClick(event) {
  // prevents clicking on the label trigging the event twice
  // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
  if (event.target.type !== 'checkbox') {
    event.stopPropagation();
  }
};

var CheckBox =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$e(CheckBox, _Component);

  function CheckBox(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var checked = props.checked,
        indeterminate = props.indeterminate,
        toggle = props.toggle;

    if (checked && indeterminate) {
      console.warn('Checkbox cannot be "checked" and "indeterminate" at the same time.');
    }

    if (toggle && indeterminate) {
      console.warn('Checkbox of type toggle does not have "indeterminate" state.');
    }

    return _this;
  }

  var _proto = CheckBox.prototype;

  _proto.render = function render() {
    var _ref;

    var _this$props = this.props,
        checked = _this$props.checked,
        disabled = _this$props.disabled,
        focus = _this$props.focus,
        forwardRef = _this$props.forwardRef,
        id = _this$props.id,
        label = _this$props.label,
        name = _this$props.name,
        onChange = _this$props.onChange,
        reverse = _this$props.reverse,
        theme = _this$props.theme,
        toggle = _this$props.toggle,
        indeterminate = _this$props.indeterminate,
        rest = _objectWithoutPropertiesLoose$d(_this$props, ["checked", "disabled", "focus", "forwardRef", "id", "label", "name", "onChange", "reverse", "theme", "toggle", "indeterminate"]);

    var themeableProps = {
      checked: checked,
      disabled: disabled,
      focus: focus,
      reverse: reverse,
      toggle: toggle,
      indeterminate: indeterminate
    };
    var hidden;

    if (disabled && checked) {
      hidden = React__default.createElement("input", {
        name: name,
        type: "hidden",
        value: "true"
      });
    }

    var _theme$checkBox$icons = theme.checkBox.icons,
        CheckedIcon = _theme$checkBox$icons.checked,
        IndeterminateIcon = _theme$checkBox$icons.indeterminate;
    var borderColor = normalizeColor(theme.checkBox.border.color, theme);

    if (checked) {
      borderColor = normalizeColor(theme.checkBox.color || 'control', theme);
    }

    var visual = toggle ? React__default.createElement(StyledCheckBoxToggle, themeableProps, React__default.createElement(StyledCheckBoxKnob, themeableProps)) : React__default.createElement(StyledCheckBoxBox, _extends$v({
      as: Box,
      align: "center",
      justify: "center",
      width: theme.checkBox.size,
      height: theme.checkBox.size,
      border: {
        size: theme.checkBox.border.width,
        color: borderColor
      },
      round: theme.checkBox.check.radius
    }, themeableProps), !indeterminate && checked && (CheckedIcon ? React__default.createElement(CheckedIcon, {
      theme: theme,
      as: StyledCheckBoxIcon
    }) : React__default.createElement(StyledCheckBoxIcon, _extends$v({
      theme: theme,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet"
    }, themeableProps), React__default.createElement("path", {
      fill: "none",
      d: "M6,11.3 L10.3,16 L18,6.2"
    }))), !checked && indeterminate && (IndeterminateIcon ? React__default.createElement(IndeterminateIcon, {
      theme: theme,
      as: StyledCheckBoxIcon
    }) : React__default.createElement(StyledCheckBoxIcon, _extends$v({
      theme: theme,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet"
    }, themeableProps), React__default.createElement("path", {
      fill: "none",
      d: "M6,12 L18,12"
    }))));
    var side = reverse ? 'left' : 'right';
    var checkBoxNode = React__default.createElement(StyledCheckBox, _extends$v({
      as: Box,
      align: "center",
      justify: "center",
      margin: (_ref = {}, _ref[side] = theme.checkBox.gap || 'small', _ref)
    }, themeableProps), React__default.createElement(StyledCheckBoxInput, _extends$v({}, rest, {
      ref: forwardRef,
      type: "checkbox"
    }, removeUndefined({
      id: id,
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }), themeableProps)), visual, hidden);
    var normalizedLabel = typeof label === 'string' ? React__default.createElement("span", null, label) : label;
    var first = reverse ? normalizedLabel : checkBoxNode;
    var second = reverse ? checkBoxNode : normalizedLabel;
    return React__default.createElement(StyledCheckBoxContainer, _extends$v({
      reverse: reverse
    }, removeUndefined({
      htmlFor: id,
      disabled: disabled
    }), {
      checked: checked,
      onClick: stopLabelClick
    }, themeableProps), first, second);
  };

  return CheckBox;
}(React.Component);

CheckBox.defaultProps = {};
Object.setPrototypeOf(CheckBox.defaultProps, defaultProps$2);
var CheckBoxDoc;

{
  CheckBoxDoc = require('./doc').doc(CheckBox); // eslint-disable-line global-require
}

var CheckBoxWrapper = compose(withFocus, styled.withTheme, withForwardRef)(CheckBoxDoc || CheckBox);

var StyledHour = styled__default.line.withConfig({
  displayName: "StyledClock__StyledHour",
  componentId: "y4xw8s-0"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.hour.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.hour.color, props.theme);
});
StyledHour.defaultProps = {};
Object.setPrototypeOf(StyledHour.defaultProps, defaultProps$2);
var StyledMinute = styled__default.line.withConfig({
  displayName: "StyledClock__StyledMinute",
  componentId: "y4xw8s-1"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.minute.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.minute.color, props.theme);
});
StyledMinute.defaultProps = {};
Object.setPrototypeOf(StyledMinute.defaultProps, defaultProps$2);
var StyledSecond = styled__default.line.withConfig({
  displayName: "StyledClock__StyledSecond",
  componentId: "y4xw8s-2"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.second.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.second.color, props.theme);
});
StyledSecond.defaultProps = {};
Object.setPrototypeOf(StyledSecond.defaultProps, defaultProps$2);
var StyledAnalog = styled__default.svg.withConfig({
  displayName: "StyledClock__StyledAnalog",
  componentId: "y4xw8s-3"
})(["width:", ";height:", ";", " ", ";"], function (props) {
  return props.theme.clock.analog.size[props.size];
}, function (props) {
  return props.theme.clock.analog.size[props.size];
}, genericStyles, function (props) {
  return props.theme.clock.analog && props.theme.clock.analog.extend;
});
StyledAnalog.defaultProps = {};
Object.setPrototypeOf(StyledAnalog.defaultProps, defaultProps$2);

var sizeStyle$4 = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var data = props.theme.clock.digital.text[size];
  return styled.css(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var StyledDigitalDigit = styled__default.div.withConfig({
  displayName: "StyledClock__StyledDigitalDigit",
  componentId: "y4xw8s-4"
})(["position:relative;width:0.8em;text-align:center;overflow:hidden;", ";"], function (props) {
  return sizeStyle$4(props);
});
StyledDigitalDigit.defaultProps = {};
Object.setPrototypeOf(StyledDigitalDigit.defaultProps, defaultProps$2);
var previousUp = styled.keyframes(["0%{transform:translateY(0);}100%{transform:translateY(-100%);}"]);
var previousDown = styled.keyframes(["0%{transform:translateY(0);}100%{transform:translateY(100%);}"]);
var StyledDigitalPrevious = styled__default.div.withConfig({
  displayName: "StyledClock__StyledDigitalPrevious",
  componentId: "y4xw8s-5"
})(["position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:", " 0.5s forwards;"], function (props) {
  return props.direction === 'down' ? previousDown : previousUp;
});
StyledDigitalPrevious.defaultProps = {};
Object.setPrototypeOf(StyledDigitalPrevious.defaultProps, defaultProps$2);
var nextUp = styled.keyframes(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]);
var nextDown = styled.keyframes(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]);
var StyledDigitalNext = styled__default.div.withConfig({
  displayName: "StyledClock__StyledDigitalNext",
  componentId: "y4xw8s-6"
})(["position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:", " 0.5s forwards;"], function (props) {
  return props.direction === 'down' ? nextDown : nextUp;
});
StyledDigitalNext.defaultProps = {};
Object.setPrototypeOf(StyledDigitalNext.defaultProps, defaultProps$2);

function _extends$w() { _extends$w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

function _objectWithoutPropertiesLoose$e(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$f(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ANGLE_UNIT = 6; // 360 / 12

var HOUR_ANGLE_UNIT = 30;

var getClockDimensions = function getClockDimensions(theme) {
  return {
    size: parseMetricToNum(theme.clock.analog.size.medium),
    secondSize: parseMetricToNum(theme.clock.analog.second.size),
    minuteSize: parseMetricToNum(theme.clock.analog.minute.size),
    hourSize: parseMetricToNum(theme.clock.analog.hour.size)
  };
};

var getClockState = function getClockState(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  var hour12 = hours > 12 ? hours - 12 : hours;
  var minuteAngle = minutes * ANGLE_UNIT;
  return {
    // offset hour angle by half of the minute angle so that it gets closer to the next hour
    hourAngle: hour12 * HOUR_ANGLE_UNIT + minutes / 2,
    minuteAngle: minuteAngle,
    secondAngle: seconds * ANGLE_UNIT
  };
};

var Analog =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$f(Analog, _Component);

  function Analog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$b(_assertThisInitialized$9(_assertThisInitialized$9(_this)), "state", {});

    return _this;
  }

  Analog.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var elements = nextProps.elements;
    var nextState = getClockState(elements);

    if (prevState.hourAngle === undefined || Object.keys(nextState).some(function (k) {
      return prevState[k] !== nextState[k];
    })) {
      return nextState;
    }

    return null;
  };

  var _proto = Analog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        precision = _this$props.precision,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$e(_this$props, ["precision", "theme"]);

    var _this$state = this.state,
        hourAngle = _this$state.hourAngle,
        minuteAngle = _this$state.minuteAngle,
        secondAngle = _this$state.secondAngle;

    var _getClockDimensions = getClockDimensions(theme),
        size = _getClockDimensions.size,
        secondSize = _getClockDimensions.secondSize,
        minuteSize = _getClockDimensions.minuteSize,
        hourSize = _getClockDimensions.hourSize;

    var halfSize = size / 2;
    var secondHand;

    if (precision === 'seconds') {
      secondHand = React__default.createElement(StyledSecond, {
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: secondSize,
        stroke: "#000000",
        strokeLinecap: theme.clock.analog.second.shape,
        style: {
          transform: "rotate(" + secondAngle + "deg)",
          transformOrigin: halfSize + "px " + halfSize + "px"
        }
      });
    }

    var minuteHand;

    if (precision === 'seconds' || precision === 'minutes') {
      minuteHand = React__default.createElement(StyledMinute, {
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: minuteSize,
        stroke: "#000000",
        strokeLinecap: theme.clock.analog.minute.shape,
        style: {
          transform: "rotate(" + minuteAngle + "deg)",
          transformOrigin: halfSize + "px " + halfSize + "px"
        }
      });
    }

    return React__default.createElement(StyledAnalog, _extends$w({
      version: "1.1",
      width: size,
      height: size,
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 " + size + " " + size
    }, rest), secondHand, minuteHand, React__default.createElement(StyledHour, {
      x1: halfSize,
      y1: halfSize,
      x2: halfSize,
      y2: hourSize,
      stroke: "#000000",
      strokeLinecap: theme.clock.analog.hour.shape,
      style: {
        transform: "rotate(" + hourAngle + "deg)",
        transformOrigin: halfSize + "px " + halfSize + "px"
      }
    }));
  };

  return Analog;
}(React.Component);

_defineProperty$b(Analog, "defaultProps", {
  size: 'medium'
});

Object.setPrototypeOf(Analog.defaultProps, defaultProps$2);
var AnalogWrapper = compose(styled.withTheme)(Analog);

function _extends$x() { _extends$x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }

function _objectWithoutPropertiesLoose$f(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$g(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$a(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Digit =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$g(Digit, _Component);

  function Digit() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$c(_assertThisInitialized$a(_assertThisInitialized$a(_this)), "state", {});

    return _this;
  }

  Digit.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var number = nextProps.number;

    if (number !== prevState.number) {
      return {
        previous: prevState.number,
        number: number
      };
    }

    return null;
  };

  var _proto = Digit.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this2 = this;

    var previous = this.state.previous;

    if (prevState.previous === undefined && previous !== undefined) {
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this2.setState({
          previous: undefined
        });
      }, 900);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  _proto.render = function render() {
    /* eslint-disable-next-line react/prop-types */
    var _this$props = this.props,
        run = _this$props.run,
        size = _this$props.size;
    var _this$state = this.state,
        number = _this$state.number,
        previous = _this$state.previous;

    if (previous !== undefined) {
      var direction = run === 'backward' ? 'down' : 'up';
      return React__default.createElement(StyledDigitalDigit, {
        size: size
      }, React__default.createElement(StyledDigitalPrevious, {
        direction: direction
      }, Math.floor(previous)), React__default.createElement(StyledDigitalNext, {
        direction: direction
      }, Math.floor(number)));
    }

    return React__default.createElement(StyledDigitalDigit, {
      size: size
    }, Math.floor(number));
  };

  return Digit;
}(React.Component);

var Element = function Element(_ref) {
  var number = _ref.number,
      run = _ref.run,
      sep = _ref.sep,
      size = _ref.size;
  var tens = Math.floor(number / 10);
  var ones = number % 10;
  var result = [React__default.createElement(Digit, {
    key: "tens",
    run: run,
    size: size,
    number: tens
  }), React__default.createElement(Digit, {
    key: "ones",
    run: run,
    size: size,
    number: ones
  })];

  if (sep) {
    result.unshift(React__default.createElement(StyledDigitalDigit, {
      key: "sep",
      size: size
    }, ":"));
  }

  return result;
};

var Digital = function Digital(props) {
  var elements = props.elements,
      precision = props.precision,
      run = props.run,
      size = props.size,
      rest = _objectWithoutPropertiesLoose$f(props, ["elements", "precision", "run", "size"]);

  var seconds;

  if (precision === 'seconds') {
    seconds = React__default.createElement(Element, {
      number: elements.seconds,
      run: run,
      size: size,
      sep: true
    });
  }

  var minutes;

  if (precision === 'minutes' || precision === 'seconds') {
    minutes = React__default.createElement(Element, {
      number: elements.minutes,
      run: run,
      size: size,
      sep: true
    });
  }

  return React__default.createElement(Box, _extends$x({
    direction: "row"
  }, rest), React__default.createElement(Element, {
    number: elements.hours12 || elements.hours,
    run: run,
    size: size
  }), minutes, seconds);
};

function _objectWithoutPropertiesLoose$g(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$y() { _extends$y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }

function _inheritsLoose$h(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$b(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TIME_REGEXP = /T([0-9]{2}):([0-9]{2})(?::([0-9.,]{2,}))?/;
var DURATION_REGEXP = /^(-|\+)?P.*T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?$/;

var parseTime = function parseTime(time, hourLimit) {
  var result = {};

  if (time) {
    var match = DURATION_REGEXP.exec(time);

    if (match) {
      result.hours = parseFloat(match[2]);

      if (hourLimit === 12) {
        result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
      }

      result.minutes = parseFloat(match[3]) || 0;
      result.seconds = parseFloat(match[4]) || 0;
      result.duration = true;
    } else {
      match = TIME_REGEXP.exec(time);

      if (match) {
        result.hours = parseFloat(match[1]);

        if (hourLimit === 12) {
          result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
        }

        result.minutes = parseFloat(match[2]) || 0;
        result.seconds = parseFloat(match[3]) || 0;
      } else {
        console.error("Grommet Clock cannot parse '" + time + "'");
      }
    }
  } else {
    var date = new Date();
    result.hours = date.getHours();
    result.minutes = date.getMinutes();
    result.seconds = date.getSeconds();
  }

  return result;
};

var Clock =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$h(Clock, _Component);

  function Clock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$d(_assertThisInitialized$b(_assertThisInitialized$b(_this)), "state", {});

    return _this;
  }

  Clock.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var hourLimit = nextProps.hourLimit,
        time = nextProps.time;
    var elements = prevState.elements;

    if (!elements || time) {
      var nextElements = parseTime(time, hourLimit);

      if (!elements) {
        return {
          elements: nextElements
        };
      }

      if (Object.keys(nextElements).some(function (k) {
        return elements[k] !== nextElements[k];
      })) {
        return {
          elements: nextElements
        };
      }
    }

    return null;
  };

  var _proto = Clock.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var run = this.props.run;

    if (run) {
      this.run();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var run = this.props.run;

    if (run && !prevProps.run) {
      this.run();
    } else if (!run && prevProps.run) {
      clearInterval(this.timer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  _proto.run = function run() {
    var _this2 = this;

    var _this$props = this.props,
        hourLimit = _this$props.hourLimit,
        onChange = _this$props.onChange,
        precision = _this$props.precision,
        run = _this$props.run;
    var elements = this.state.elements; // set the interval time based on the precision

    var interval = 1000;
    var increment = 'seconds';

    if (precision !== 'seconds' && elements.seconds === 0) {
      interval *= 60;
      increment = 'minutes';

      if (precision !== 'minutes' && elements.minutes === 0) {
        interval *= 60;
        increment = 'hours';
      }
    }

    clearInterval(this.timer);
    this.timer = setInterval(function () {
      var previousElements = _this2.state.elements;

      var nextElements = _extends$y({}, previousElements); // adjust time based on precision


      if (increment === 'seconds') {
        if (run === 'backward') {
          nextElements.seconds -= 1;
        } else {
          nextElements.seconds += 1;
        }
      } else if (increment === 'minutes') {
        if (run === 'backward') {
          nextElements.minutes -= 1;
        } else {
          nextElements.minutes += 1;
        }
      } else if (increment === 'hours') {
        if (run === 'backward') {
          nextElements.hours -= 1;
        } else {
          nextElements.hours += 1;
        }
      } // deal with overflows


      if (nextElements.seconds >= 60) {
        nextElements.minutes += Math.floor(nextElements.seconds / 60);
        nextElements.seconds = 0;
      } else if (nextElements.seconds < 0) {
        nextElements.minutes += Math.floor(nextElements.seconds / 60);
        nextElements.seconds = 59;
      }

      if (nextElements.minutes >= 60) {
        nextElements.hours += Math.floor(nextElements.minutes / 60);
        nextElements.minutes = 0;
      } else if (nextElements.minutes < 0) {
        nextElements.hours += Math.floor(nextElements.minutes / 60);
        nextElements.minutes = 59;
      }

      if (nextElements.hours >= 24 || nextElements.hours < 0) {
        nextElements.hours = 0;
      }

      if (hourLimit === 12) {
        nextElements.hours12 = nextElements.hours > 12 ? nextElements.hours - 12 : nextElements.hours;
      }

      _this2.setState({
        elements: nextElements
      }, function () {
        if (onChange) {
          if (elements.duration) {
            onChange("P" + elements.hours + "H" + elements.minutes + "M" + elements.seconds + "S");
          } else {
            onChange("T" + elements.hours + ":" + elements.minutes + ":" + elements.seconds);
          }
        }
      });
    }, interval);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        type = _this$props2.type,
        rest = _objectWithoutPropertiesLoose$g(_this$props2, ["type"]);

    var elements = this.state.elements;
    var content;

    if (type === 'analog') {
      content = React__default.createElement(AnalogWrapper, _extends$y({
        elements: elements
      }, rest));
    } else if (type === 'digital') {
      content = React__default.createElement(Digital, _extends$y({
        elements: elements
      }, rest));
    }

    return content;
  };

  return Clock;
}(React.Component);

_defineProperty$d(Clock, "defaultProps", {
  hourLimit: 24,
  precision: 'seconds',
  run: 'forward',
  size: 'medium',
  type: 'analog'
});

var ClockDoc;

{
  ClockDoc = require('./doc').doc(Clock); // eslint-disable-line global-require
}

var TableContext = React__default.createContext(undefined);

var SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var sizeStyle$5 = styled.css(["width:", ";max-width:", ";overflow:hidden;"], function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
}, function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
});
var StyledTableCell = styled__default.td.withConfig({
  displayName: "StyledTable__StyledTableCell",
  componentId: "sc-1m3u5g-0"
})(["margin:0;padding:0;font-weight:inherit;text-align:inherit;height:100%;", " ", " ", ""], function (props) {
  return props.size && sizeStyle$5;
}, function (props) {
  return props.verticalAlign && "vertical-align: " + props.verticalAlign + ";";
}, function (props) {
  return props.tableContextTheme && props.tableContextTheme.extend;
});
StyledTableCell.defaultProps = {};
Object.setPrototypeOf(StyledTableCell.defaultProps, defaultProps$2);
var StyledTableDataCaption = styled__default.caption.withConfig({
  displayName: "StyledTable__StyledTableDataCaption",
  componentId: "sc-1m3u5g-1"
})(["display:none;"]);
StyledTableDataCaption.defaultProps = {};
Object.setPrototypeOf(StyledTableDataCaption.defaultProps, defaultProps$2);
var StyledTableRow = styled__default.tr.withConfig({
  displayName: "StyledTable__StyledTableRow",
  componentId: "sc-1m3u5g-2"
})(["height:100%;"]);
StyledTableRow.defaultProps = {};
Object.setPrototypeOf(StyledTableRow.defaultProps, defaultProps$2);
var StyledTableBody = styled__default.tbody.withConfig({
  displayName: "StyledTable__StyledTableBody",
  componentId: "sc-1m3u5g-3"
})([""]);
StyledTableBody.defaultProps = {};
Object.setPrototypeOf(StyledTableBody.defaultProps, defaultProps$2);
var StyledTableHeader = styled__default.thead.withConfig({
  displayName: "StyledTable__StyledTableHeader",
  componentId: "sc-1m3u5g-4"
})([""]);
StyledTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledTableHeader.defaultProps, defaultProps$2);
var StyledTableFooter = styled__default.tfoot.withConfig({
  displayName: "StyledTable__StyledTableFooter",
  componentId: "sc-1m3u5g-5"
})([""]);
StyledTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledTableFooter.defaultProps, defaultProps$2);
var StyledTable = styled__default.table.withConfig({
  displayName: "StyledTable",
  componentId: "sc-1m3u5g-6"
})(["border-spacing:0;border-collapse:collapse;", " ", ";"], genericStyles, function (props) {
  return props.theme.table && props.theme.table.extend;
});
StyledTable.defaultProps = {};
Object.setPrototypeOf(StyledTable.defaultProps, defaultProps$2);

var TableHeader = function TableHeader(props) {
  return React__default.createElement(TableContext.Provider, {
    value: "header"
  }, React__default.createElement(StyledTableHeader, props));
};

var TableHeaderDoc;

{
  TableHeaderDoc = require('./doc').doc(TableHeader); // eslint-disable-line global-require
}

var TableHeaderWrapper = TableHeaderDoc || TableHeader;

var TableRow = function TableRow(props) {
  return React__default.createElement(StyledTableRow, props);
};

var TableRowDoc;

{
  TableRowDoc = require('./doc').doc(TableRow); // eslint-disable-line global-require
}

var TableRowWrapper = TableRowDoc || TableRow;

function _extends$z() { _extends$z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }

function _objectWithoutPropertiesLoose$h(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      plain = _ref.plain,
      scope = _ref.scope,
      size = _ref.size,
      theme = _ref.theme,
      verticalAlign = _ref.verticalAlign,
      rest = _objectWithoutPropertiesLoose$h(_ref, ["children", "plain", "scope", "size", "theme", "verticalAlign"]);

  return React__default.createElement(TableContext.Consumer, null, function (tableContext) {
    var tableContextTheme;

    if (tableContext === 'header') {
      tableContextTheme = theme.table && theme.table.header;
    } else if (tableContext === 'footer') {
      tableContextTheme = theme.table && theme.table.footer;
    } else {
      tableContextTheme = theme.table && theme.table.body;
    }

    var boxProps = _extends$z({}, rest);

    Object.keys(boxProps).forEach(function (key) {
      if (tableContextTheme[key] && boxProps[key] === undefined) {
        delete boxProps[key];
      }
    });
    return React__default.createElement(StyledTableCell, _extends$z({
      as: scope ? 'th' : undefined,
      scope: scope,
      size: size,
      tableContext: tableContext,
      tableContextTheme: tableContextTheme,
      verticalAlign: verticalAlign || (tableContextTheme ? tableContextTheme.verticalAlign : undefined)
    }, plain ? rest : {}), plain ? children : React__default.createElement(Box, _extends$z({}, tableContextTheme, boxProps), children));
  });
};

TableCell.defaultProps = {};
Object.setPrototypeOf(TableCell.defaultProps, defaultProps$2);
var TableCellDoc;

{
  TableCellDoc = require('./doc').doc(TableCell); // eslint-disable-line global-require
}

var TableCellWrapper = compose(styled.withTheme)(TableCellDoc || TableCell);

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    var margin = props.theme.global.edgeSize[props.margin];
    return "\n      margin-top: " + margin + ";\n      margin-bottom: " + margin + ";\n      margin-left: " + margin + ";\n      margin-right: " + margin + ";\n    ";
  }

  if (props.margin.vertical) {
    return "\n      margin-top: " + props.theme.global.edgeSize[props.margin.vertical] + ";\n      margin-bottom: " + props.theme.global.edgeSize[props.margin.vertical] + ";\n    ";
  }

  if (props.margin.horizontal) {
    return "\n      margin-left: " + props.theme.global.edgeSize[props.margin.horizontal] + ";\n      margin-right: " + props.theme.global.edgeSize[props.margin.horizontal] + ";\n    ";
  }

  if (props.margin.top) {
    return "margin-top: " + props.theme.global.edgeSize[props.margin.top] + ";";
  }

  if (props.margin.bottom) {
    return "margin-bottom: " + props.theme.global.edgeSize[props.margin.bottom] + ";";
  }

  if (props.margin.left) {
    return "margin-left: " + props.theme.global.edgeSize[props.margin.left] + ";";
  }

  if (props.margin.right) {
    return "margin-right: " + props.theme.global.edgeSize[props.margin.right] + ";";
  }

  return '';
};

var sizeStyle$6 = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.text[size];

  if (data) {
    return styled.css(["font-size:", ";line-height:", ";"], data.size, data.height);
  }

  return styled.css(["font-size:", ";line-height:normal;"], size);
};

var TEXT_ALIGN_MAP$1 = {
  center: 'center',
  end: 'right',
  start: 'left'
};
var textAlignStyle$1 = styled.css(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP$1[props.textAlign];
});
var truncateStyle$1 = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle$2 = styled.css(["color:", ";"], function (props) {
  return normalizeColor(props.colorProp, props.theme);
});
var weightStyle = styled.css(["font-weight:", ";"], function (props) {
  return props.weight;
});
var StyledText = styled__default.span.withConfig({
  displayName: "StyledText",
  componentId: "sc-1sadyjn-0"
})(["", " ", " ", " ", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return sizeStyle$6(props);
}, function (props) {
  return props.margin && marginStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle$1;
}, function (props) {
  return props.truncate && truncateStyle$1;
}, function (props) {
  return props.colorProp && colorStyle$2;
}, function (props) {
  return props.weight && weightStyle;
}, function (props) {
  return props.theme.text && props.theme.text.extend;
});
StyledText.defaultProps = {};
Object.setPrototypeOf(StyledText.defaultProps, defaultProps$2);

function _extends$A() { _extends$A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }

function _objectWithoutPropertiesLoose$i(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var color = _ref.color,
      tag = _ref.tag,
      as = _ref.as,
      rest = _objectWithoutPropertiesLoose$i(_ref, ["color", "tag", "as"]);

  return React__default.createElement(StyledText, _extends$A({
    as: !as && tag ? tag : as,
    colorProp: color
  }, rest));
};

Text.defaultProps = {
  level: 1
};
var TextDoc;

{
  TextDoc = require('./doc').doc(Text); // eslint-disable-line global-require
}

var TextWrapper = TextDoc || Text;

function _extends$B() { _extends$B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }

function _inheritsLoose$i(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$c(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ResizerBox = styled__default(Box).withConfig({
  displayName: "Resizer__ResizerBox",
  componentId: "sc-8l808w-0"
})(["cursor:col-resize;"]);

var Resizer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$i(Resizer, _Component);

  function Resizer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$e(_assertThisInitialized$c(_assertThisInitialized$c(_this)), "state", {});

    _defineProperty$e(_assertThisInitialized$c(_assertThisInitialized$c(_this)), "ref", React__default.createRef());

    _defineProperty$e(_assertThisInitialized$c(_assertThisInitialized$c(_this)), "onMouseDown", function (event) {
      if (_this.ref.current) {
        var element = _this.ref.current;
        var rect = element.getBoundingClientRect();

        _this.setState({
          start: event.clientX,
          width: rect.width
        }, function () {
          document.addEventListener('mousemove', _this.onMouseMove);
          document.addEventListener('mouseup', _this.onMouseUp);
        });
      }
    });

    _defineProperty$e(_assertThisInitialized$c(_assertThisInitialized$c(_this)), "onMouseMove", function (event) {
      var _this$props = _this.props,
          onResize = _this$props.onResize,
          property = _this$props.property;
      var _this$state = _this.state,
          start = _this$state.start,
          width = _this$state.width; // We determined 12 empirically as being wide enough to hit but
      // not too wide to cause false hits.

      var nextWidth = Math.max(12, width + (event.clientX - start));
      onResize(property)(nextWidth);
    });

    _defineProperty$e(_assertThisInitialized$c(_assertThisInitialized$c(_this)), "onMouseUp", function () {
      document.removeEventListener('mouseup', _this.onMouseUp);
      document.removeEventListener('mousemove', _this.onMouseMove);

      _this.setState({
        start: undefined,
        width: undefined
      });
    });

    return _this;
  }

  var _proto = Resizer.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        onResize = _this$props2.onResize,
        theme = _this$props2.theme;
    var start = this.state.start;

    if (onResize) {
      return React__default.createElement(Box, {
        ref: this.ref,
        direction: "row",
        fill: true
      }, children, React__default.createElement(ResizerBox, _extends$B({
        flex: false
      }, theme.dataTable.resize, {
        onMouseDown: this.onMouseDown,
        onMouseMove: start ? this.onMouseMove : undefined,
        onMouseUp: start ? this.onMouseUp : undefined
      })));
    }

    return children;
  };

  return Resizer;
}(React.Component);

Resizer.defaultProps = {};
Object.setPrototypeOf(Resizer.defaultProps, defaultProps$2);
var ResizerWrapper = compose(styled.withTheme)(Resizer);

var _extends$C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FormSearch = function FormSearch(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$C({ viewBox: '0 0 24 24', a11yTitle: 'FormSearch' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M13.8,13.8 L18,18 L13.8,13.8 Z M10.5,15 C12.9852814,15 15,12.9852814 15,10.5 C15,8.01471863 12.9852814,6 10.5,6 C8.01471863,6 6,8.01471863 6,10.5 C6,12.9852814 8.01471863,15 10.5,15 Z' })
  );
};

function _extends$D() { _extends$D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$D.apply(this, arguments); }

function _objectWithoutPropertiesLoose$j(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$j(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$d(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isNotAncestorOf = function isNotAncestorOf(child) {
  return function (parent) {
    return !parent.contains(child);
  };
};

var FocusedContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$j(FocusedContainer, _Component);

  function FocusedContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$f(_assertThisInitialized$d(_assertThisInitialized$d(_this)), "ref", React__default.createRef());

    _defineProperty$f(_assertThisInitialized$d(_assertThisInitialized$d(_this)), "removeTrap", function () {
      var restrictScroll = _this.props.restrictScroll;
      var child = _this.ref.current;
      getBodyChildElements().filter(isNotAncestorOf(child)).forEach(makeNodeFocusable);

      if (restrictScroll) {
        document.body.style.overflow = _this.bodyOverflowStyle;
      }
    });

    _defineProperty$f(_assertThisInitialized$d(_assertThisInitialized$d(_this)), "trapFocus", function () {
      var restrictScroll = _this.props.restrictScroll;
      var child = _this.ref.current;
      getBodyChildElements().filter(isNotAncestorOf(child)).forEach(makeNodeUnfocusable);

      if (restrictScroll) {
        _this.bodyOverflowStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
    });

    return _this;
  }

  var _proto = FocusedContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var hidden = this.props.hidden; // making sure trap focus always execute
    // after removeTrap for the case where two drops
    // are open at the same time

    setTimeout(function () {
      if (!hidden) {
        _this2.trapFocus();
      }
    }, 0);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeTrap();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        hidden = _this$props.hidden,
        rest = _objectWithoutPropertiesLoose$j(_this$props, ["children", "hidden"]);

    delete rest.restrictScroll;
    return React__default.createElement("div", _extends$D({
      ref: this.ref,
      "aria-hidden": hidden
    }, rest), children);
  };

  return FocusedContainer;
}(React.Component);

_defineProperty$f(FocusedContainer, "defaultProps", {
  hidden: false,
  restrictScroll: false
});

_defineProperty$f(FocusedContainer, "propTypes", {
  hidden: propTypes.bool,
  restrictScroll: propTypes.bool
});

function getTransformOriginStyle(align) {
  var vertical = 'top';

  if (align.bottom) {
    vertical = 'bottom';
  }

  var horizontal = 'left';

  if (align.right) {
    horizontal = 'right';
  }

  return vertical + " " + horizontal;
}

var dropKeyFrames = styled.keyframes(["0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}"]);
var StyledDrop = styled__default.div.withConfig({
  displayName: "StyledDrop",
  componentId: "sc-16s5rx8-0"
})(["", " border-radius:", ";position:fixed;z-index:", ";outline:none;overflow:auto;", " opacity:0;transform-origin:", ";animation:", " 0.1s forwards;animation-delay:0.01s;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){display:flex;align-items:stretch;}", ""], baseStyle, function (props) {
  return props.theme.global.drop.border.radius;
}, function (props) {
  return props.theme.global.drop.zIndex;
}, function (props) {
  return !props.plain && backgroundStyle(props.theme.global.drop.background, props.theme);
}, function (props) {
  return getTransformOriginStyle(props.alignProp);
}, dropKeyFrames, function (props) {
  return props.theme.global.drop && props.theme.global.drop.extend;
});
StyledDrop.defaultProps = {};
Object.setPrototypeOf(StyledDrop.defaultProps, defaultProps$2);

function _extends$E() { _extends$E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$E.apply(this, arguments); }

function _objectWithoutPropertiesLoose$k(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$k(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$e(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$g(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// would otherwise close the layer on ESC.

var preventLayerClose = function preventLayerClose(event) {
  var key = event.keyCode ? event.keyCode : event.which;

  if (key === 27) {
    event.stopPropagation();
  }
};

var DropContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$k(DropContainer, _Component);

  function DropContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$g(_assertThisInitialized$e(_assertThisInitialized$e(_this)), "dropRef", React__default.createRef());

    _defineProperty$g(_assertThisInitialized$e(_assertThisInitialized$e(_this)), "addScrollListener", function () {
      var dropTarget = _this.props.dropTarget;
      _this.scrollParents = findScrollParents(dropTarget);

      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.addEventListener('scroll', _this.place);
      });
    });

    _defineProperty$g(_assertThisInitialized$e(_assertThisInitialized$e(_this)), "removeScrollListener", function () {
      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.removeEventListener('scroll', _this.place);
      });
    });

    _defineProperty$g(_assertThisInitialized$e(_assertThisInitialized$e(_this)), "onClickDocument", function (event) {
      var _this$props = _this.props,
          dropTarget = _this$props.dropTarget,
          onClickOutside = _this$props.onClickOutside;
      var dropTargetNode = dropTarget;
      var dropNode = _this.dropRef.current;

      if (onClickOutside && dropNode && // need this for ie11
      !dropTargetNode.contains(event.target) && !dropNode.contains(event.target)) {
        onClickOutside();
      }
    });

    _defineProperty$g(_assertThisInitialized$e(_assertThisInitialized$e(_this)), "onResize", function () {
      _this.removeScrollListener();

      _this.addScrollListener();

      _this.place(false);
    });

    _defineProperty$g(_assertThisInitialized$e(_assertThisInitialized$e(_this)), "place", function (preserveHeight) {
      var _this$props2 = _this.props,
          align = _this$props2.align,
          dropTarget = _this$props2.dropTarget,
          responsive = _this$props2.responsive,
          stretch = _this$props2.stretch,
          theme = _this$props2.theme;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var target = dropTarget;
      var container = _this.dropRef.current;

      if (container && target) {
        // clear prior styling
        container.style.left = '';
        container.style.top = '';
        container.style.bottom = '';
        container.style.width = '';

        if (!preserveHeight) {
          container.style.maxHeight = '';
        } // get bounds


        var targetRect = findVisibleParent(target).getBoundingClientRect();
        var containerRect = container.getBoundingClientRect(); // determine width

        var width = Math.min(stretch ? Math.max(targetRect.width, containerRect.width) : containerRect.width, windowWidth); // set left position

        var left;

        if (align.left) {
          if (align.left === 'left') {
            left = targetRect.left;
          } else if (align.left === 'right') {
            left = targetRect.left + targetRect.width;
          }
        } else if (align.right) {
          if (align.right === 'left') {
            left = targetRect.left - width;
          } else if (align.right === 'right') {
            left = targetRect.left + targetRect.width - width;
          }
        } else {
          left = targetRect.left + targetRect.width / 2 - width / 2;
        }

        if (left + width > windowWidth) {
          left -= left + width - windowWidth;
        } else if (left < 0) {
          left = 0;
        } // set top or bottom position


        var top;
        var bottom;
        var maxHeight = containerRect.height;

        if (align.top) {
          if (align.top === 'top') {
            top = targetRect.top;
          } else {
            top = targetRect.bottom;
          }

          maxHeight = windowHeight - top;
        } else if (align.bottom) {
          if (align.bottom === 'bottom') {
            bottom = targetRect.bottom;
          } else {
            bottom = targetRect.top;
          }

          maxHeight = bottom;
        } else {
          // center
          top = targetRect.top + targetRect.height / 2 - containerRect.height / 2;
          maxHeight = windowHeight - top;
        } // if we can't fit it all, or we're rather close,
        // see if there's more room the other direction


        if (responsive && (containerRect.height > maxHeight || maxHeight < windowHeight / 10)) {
          // We need more room than we have.
          if (align.top && top > windowHeight / 2) {
            // We put it below, but there's more room above, put it above
            top = '';

            if (align.top === 'bottom') {
              // top = Math.max(targetRect.top - containerRect.height, 0);
              // maxHeight = targetRect.top - top;
              bottom = targetRect.top;
            } else {
              // top = Math.max(targetRect.bottom - containerRect.height, 0);
              // maxHeight = targetRect.bottom - top;
              bottom = targetRect.bottom;
            }

            maxHeight = bottom;
          } else if (align.bottom && maxHeight < windowHeight / 2) {
            // We put it above but there's more room below, put it below
            bottom = '';

            if (align.bottom === 'bottom') {
              top = targetRect.top;
            } else {
              top = targetRect.bottom;
            }

            maxHeight = windowHeight - top;
          }
        }

        container.style.left = left + "px";

        if (stretch) {
          // offset width by 0.1 to avoid a bug in ie11 that
          // unnecessarily wraps the text if width is the same
          // NOTE: turned off for now
          container.style.width = width + 0.1 + "px";
        } // the (position:absolute + scrollTop)
        // is presenting issues with desktop scroll flickering


        if (top !== '') {
          container.style.top = top + "px";
        }

        if (bottom !== '') {
          container.style.bottom = windowHeight - bottom + "px";
        }

        if (!preserveHeight) {
          if (theme.drop && theme.drop.maxHeight) {
            maxHeight = Math.min(maxHeight, parseMetricToNum(theme.drop.maxHeight));
          }

          container.style.maxHeight = maxHeight + "px";
        }
      }
    });

    _defineProperty$g(_assertThisInitialized$e(_assertThisInitialized$e(_this)), "onEsc", function (event) {
      var onEsc = _this.props.onEsc;
      event.stopPropagation();

      if (onEsc) {
        onEsc(event);
      }
    });

    return _this;
  }

  var _proto = DropContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var restrictFocus = this.props.restrictFocus;
    this.addScrollListener();
    window.addEventListener('resize', this.onResize);
    document.addEventListener('mousedown', this.onClickDocument);
    this.place(false);

    if (restrictFocus) {
      this.dropRef.current.focus();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.place(true);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeScrollListener();
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('mousedown', this.onClickDocument);
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        alignProp = _this$props3.align,
        children = _this$props3.children,
        onClickOutside = _this$props3.onClickOutside,
        onEsc = _this$props3.onEsc,
        onKeyDown = _this$props3.onKeyDown,
        elevation = _this$props3.elevation,
        plain = _this$props3.plain,
        propsTheme = _this$props3.theme,
        rest = _objectWithoutPropertiesLoose$k(_this$props3, ["align", "children", "onClickOutside", "onEsc", "onKeyDown", "elevation", "plain", "theme"]);

    var theme = this.context || propsTheme;
    var content = React__default.createElement(StyledDrop, _extends$E({
      as: Box,
      plain: plain,
      elevation: !plain ? elevation || theme.global.drop.shadowSize || 'small' : undefined,
      tabIndex: "-1",
      ref: this.dropRef,
      alignProp: alignProp
    }, rest), children);

    if (theme.global.drop.background) {
      var dark = backgroundIsDark(theme.global.drop.background, theme);

      if (dark !== theme.dark) {
        content = React__default.createElement(styled.ThemeContext.Provider, {
          value: _extends$E({}, theme, {
            dark: dark
          })
        }, content);
      }
    }

    return React__default.createElement(FocusedContainer, {
      onKeyDown: onEsc && preventLayerClose
    }, React__default.createElement(KeyboardWrapper, {
      onEsc: onEsc && this.onEsc,
      onKeyDown: onKeyDown,
      target: "document"
    }, content));
  };

  return DropContainer;
}(React.Component);

_defineProperty$g(DropContainer, "contextType", styled.ThemeContext);

_defineProperty$g(DropContainer, "defaultProps", {
  align: {
    top: 'top',
    left: 'left'
  },
  stretch: 'width'
});

Object.setPrototypeOf(DropContainer.defaultProps, defaultProps$2);

function _extends$F() { _extends$F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$F.apply(this, arguments); }

function _objectWithoutPropertiesLoose$l(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$l(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$f(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$h(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Drop =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$l(Drop, _Component);

  function Drop() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$h(_assertThisInitialized$f(_assertThisInitialized$f(_this)), "originalFocusedElement", document.activeElement);

    _defineProperty$h(_assertThisInitialized$f(_assertThisInitialized$f(_this)), "dropContainer", getNewContainer());

    return _this;
  }

  var _proto = Drop.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    var restrictFocus = this.props.restrictFocus;

    if (restrictFocus && this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        setFocusWithoutScroll(this.originalFocusedElement);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        setFocusWithoutScroll(this.originalFocusedElement.parentNode);
      }
    }

    document.body.removeChild(this.dropContainer);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        dropTarget = _this$props.target,
        rest = _objectWithoutPropertiesLoose$l(_this$props, ["target"]);

    return reactDom.createPortal(React__default.createElement(DropContainer, _extends$F({
      dropTarget: dropTarget
    }, rest)), this.dropContainer);
  };

  return Drop;
}(React.Component);

_defineProperty$h(Drop, "defaultProps", {
  align: {
    top: 'top',
    left: 'left'
  },
  plain: false
});

var DropDoc;

{
  DropDoc = require('./doc').doc(Drop); // eslint-disable-line global-require
}

var DropWrapper = DropDoc || Drop;

function _assertThisInitialized$g(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$i(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose$m(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint-disable react/no-multi-comp, react/no-find-dom-node */

var Ref =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$m(Ref, _Component);

  function Ref() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Ref.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return children;
  };

  return Ref;
}(React.Component);

var InfiniteScroll =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose$m(InfiniteScroll, _PureComponent);

  function InfiniteScroll() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "state", {});

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "initialScroll", false);

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "belowMarkerRef", React.createRef());

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "firstPageItemRef", React.createRef());

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "lastPageItemRef", React.createRef());

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "showRef", React.createRef());

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "addScrollListener", function () {
      var pageHeight = _this.state.pageHeight;

      if (pageHeight && _this.belowMarkerRef.current && !_this.scrollParents) {
        _this.scrollParents = findScrollParents(_this.belowMarkerRef.current);

        _this.scrollParents.forEach(function (scrollParent) {
          return scrollParent.addEventListener('scroll', _this.onScroll);
        });
      }
    });

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "removeScrollListener", function () {
      if (_this.scrollParents) {
        _this.scrollParents.forEach(function (scrollParent) {
          return scrollParent.removeEventListener('scroll', _this.place);
        });

        _this.scrollParents = undefined;
      }
    });

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "scrollShow", function () {
      var show = _this.props.show;

      if (show && !_this.initialScroll && _this.showRef.current) {
        _this.initialScroll = true; // on initial render, scroll to any 'show'

        reactDom.findDOMNode(_this.showRef.current).scrollIntoView();
      }
    });

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "setPageHeight", function () {
      var pageHeight = _this.state.pageHeight;

      if (_this.firstPageItemRef.current && _this.lastPageItemRef.current && !pageHeight) {
        /* eslint-disable react/no-find-dom-node */
        var beginRect = reactDom.findDOMNode(_this.firstPageItemRef.current).getBoundingClientRect();
        var endRect = reactDom.findDOMNode(_this.lastPageItemRef.current).getBoundingClientRect();
        /* eslint-enable react/no-find-dom-node */

        var nextPageHeight = endRect.y + endRect.height - beginRect.y; // In case the pageHeight is smaller than the visible area,
        // we call onScroll to set the page boundaries appropriately.

        _this.setState({
          pageHeight: nextPageHeight
        }, _this.onScroll);
      }
    });

    _defineProperty$i(_assertThisInitialized$g(_assertThisInitialized$g(_this)), "onScroll", function () {
      var _this$props = _this.props,
          onMore = _this$props.onMore,
          replace = _this$props.replace;
      var _this$state = _this.state,
          beginPage = _this$state.beginPage,
          endPage = _this$state.endPage,
          lastPage = _this$state.lastPage,
          pageHeight = _this$state.pageHeight;

      if (_this.scrollParents && _this.scrollParents[0] && pageHeight) {
        var scrollParent = _this.scrollParents[0]; // Determine the window into the first scroll parent

        var top;
        var height;

        if (scrollParent === document) {
          top = document.documentElement.scrollTop || document.body.scrollTop;
          height = window.innerHeight;
        } else {
          top = scrollParent.scrollTop;
          var rect = scrollParent.getBoundingClientRect();
          height = rect.height;
        } // Figure out which pages we should make visible based on the scroll
        // window.


        var offset = height / 4;
        var nextBeginPage = replace ? Math.min(lastPage, Math.max(0, Math.floor(Math.max(0, top - offset) / pageHeight))) : 0;
        var nextEndPage = Math.min(lastPage, Math.max(!replace && endPage || 0, Math.floor((top + height + offset) / pageHeight)));

        if (nextBeginPage !== beginPage || nextEndPage !== endPage) {
          _this.setState({
            beginPage: nextBeginPage,
            endPage: nextEndPage
          }, function () {
            if (onMore && nextEndPage === lastPage) {
              onMore();
            }
          });
        }
      }
    });

    return _this;
  }

  InfiniteScroll.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var items = nextProps.items,
        show = nextProps.show,
        step = nextProps.step;
    var lastPage = Math.ceil(items.length / step) - 1;

    if (prevState.beginPage === undefined || show && show >= step * (prevState.lastPage + 1) || lastPage !== prevState.lastPage) {
      var endPage = prevState.endPage || 0;

      if (show && show >= step * (endPage + 1)) {
        endPage = Math.floor((show + step) / step) - 1;
      }

      return {
        beginPage: 0,
        endPage: endPage,
        lastPage: lastPage,
        pageHeight: undefined
      };
    }

    return null;
  };

  var _proto2 = InfiniteScroll.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // ride out any animation, 100ms was chosen empirically
    clearTimeout(this.animationDelayTimer);
    this.animationDelayTimer = setTimeout(function () {
      _this2.setPageHeight();

      _this2.addScrollListener();

      _this2.scrollShow();
    }, 100);
  };

  _proto2.componentDidUpdate = function componentDidUpdate() {
    this.setPageHeight();
    this.removeScrollListener();
    this.addScrollListener();
    this.scrollShow();
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    this.removeScrollListener();
    clearTimeout(this.animationDelayTimer);
    clearTimeout(this.scrollTimer);
  };

  _proto2.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        items = _this$props2.items,
        onMore = _this$props2.onMore,
        renderMarker = _this$props2.renderMarker,
        replace = _this$props2.replace,
        show = _this$props2.show,
        step = _this$props2.step;
    var _this$state2 = this.state,
        beginPage = _this$state2.beginPage,
        endPage = _this$state2.endPage,
        lastPage = _this$state2.lastPage,
        pageHeight = _this$state2.pageHeight;
    var firstIndex = beginPage * step;
    var lastIndex = (endPage + 1) * step - 1;
    var result = [];

    if (replace && pageHeight && firstIndex) {
      var marker = React__default.createElement(Box, {
        key: "above",
        flex: false,
        height: beginPage * pageHeight + "px"
      });

      if (renderMarker) {
        // need to give it a key
        marker = React__default.cloneElement(renderMarker(marker), {
          key: 'above'
        });
      }

      result.push(marker);
    }

    items.slice(firstIndex, lastIndex + 1).forEach(function (item, index) {
      var itemsIndex = firstIndex + index;
      var child = children(item, itemsIndex);

      if (!pageHeight && itemsIndex === 0) {
        child = React__default.createElement(Ref, {
          key: "first",
          ref: _this3.firstPageItemRef
        }, child);
      } else if (!pageHeight && itemsIndex === step - 1) {
        child = React__default.createElement(Ref, {
          key: "last",
          ref: _this3.lastPageItemRef
        }, child);
      }

      if (show && show === itemsIndex) {
        child = React__default.createElement(Ref, {
          key: "show",
          ref: _this3.showRef
        }, child);
      }

      result.push(child);
    });

    if (endPage < lastPage || replace || onMore) {
      var _marker = React__default.createElement(Box, {
        key: "below",
        ref: this.belowMarkerRef,
        flex: false,
        height: (replace ? (lastPage - endPage) * pageHeight : 0) + "px"
      });

      if (renderMarker) {
        // need to give it a key
        _marker = React__default.cloneElement(renderMarker(_marker), {
          key: 'below'
        });
      }

      result.push(_marker);
    }

    return result;
  };

  return InfiniteScroll;
}(React.PureComponent);

_defineProperty$i(InfiniteScroll, "defaultProps", {
  items: [],
  step: 50
});

var InfiniteScrollDoc;

{
  InfiniteScrollDoc = require('./doc').doc(InfiniteScroll); // eslint-disable-line global-require
}

var InfiniteScrollWrapper = InfiniteScrollDoc || InfiniteScroll;
/* eslint-enable react/no-find-dom-node, react/no-multi-comp */

var sizeStyle$7 = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return styled.css(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var plainStyle$1 = styled.css(["border:none;"]);
var StyledTextInput = styled__default.input.withConfig({
  displayName: "StyledTextInput",
  componentId: "sc-1x30a0s-0"
})(["", " width:100%;", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", ";"], inputStyle, function (props) {
  return props.size && sizeStyle$7(props);
}, function (props) {
  return props.plain && plainStyle$1;
}, placeholderStyle, function (props) {
  return props.focus && !props.plain && focusStyle;
}, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, defaultProps$2);
var StyledTextInputContainer = styled__default.div.withConfig({
  displayName: "StyledTextInput__StyledTextInputContainer",
  componentId: "sc-1x30a0s-1"
})(["position:relative;width:100%;"]);
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(StyledTextInputContainer.defaultProps, defaultProps$2);
var StyledPlaceholder = styled__default.div.withConfig({
  displayName: "StyledTextInput__StyledPlaceholder",
  componentId: "sc-1x30a0s-2"
})(["position:absolute;left:", "px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;"], function (props) {
  return parseMetricToNum(props.theme.global.input.padding) - parseMetricToNum(props.theme.global.control.border.width);
});
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(StyledPlaceholder.defaultProps, defaultProps$2);
var StyledSuggestions = styled__default.ol.withConfig({
  displayName: "StyledTextInput__StyledSuggestions",
  componentId: "sc-1x30a0s-3"
})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;"]);
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(StyledSuggestions.defaultProps, defaultProps$2);

function _extends$G() { _extends$G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$G.apply(this, arguments); }

function _objectWithoutPropertiesLoose$m(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$n(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$h(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$j(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderLabel(suggestion) {
  if (suggestion && typeof suggestion === 'object') {
    return suggestion.label || suggestion.value;
  }

  return suggestion;
}

function stringLabel(suggestion) {
  if (suggestion && typeof suggestion === 'object') {
    if (suggestion.label && typeof suggestion.label === 'string') {
      return suggestion.label;
    }

    return suggestion.value;
  }

  return suggestion;
}

var ContainerBox = styled__default(Box).withConfig({
  displayName: "TextInput__ContainerBox",
  componentId: "sc-1ai0c08-0"
})(["", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}"], function (props) {
  return props.dropHeight ? sizeStyle('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
});

var TextInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$n(TextInput, _Component);

  function TextInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "state", {
      activeSuggestionIndex: -1,
      showDrop: false
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "inputRef", React__default.createRef());

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "announce", function (message, mode) {
      var _this$props = _this.props,
          announce = _this$props.announce,
          suggestions = _this$props.suggestions;

      if (suggestions && suggestions.length > 0) {
        announce(message, mode);
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "announceSuggestionsCount", function () {
      var _this$props2 = _this.props,
          suggestions = _this$props2.suggestions,
          suggestionsCount = _this$props2.messages.suggestionsCount;

      _this.announce(suggestions.length + " " + suggestionsCount);
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "announceSuggestionsExist", function () {
      var suggestionsExist = _this.props.messages.suggestionsExist;

      _this.announce(suggestionsExist);
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "announceSuggestionsIsOpen", function () {
      var suggestionIsOpen = _this.props.messages.suggestionIsOpen;

      _this.announce(suggestionIsOpen);
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "announceSuggestion", function (index) {
      var _this$props3 = _this.props,
          suggestions = _this$props3.suggestions,
          enterSelect = _this$props3.messages.enterSelect;

      if (suggestions && suggestions.length > 0) {
        var labelMessage = stringLabel(suggestions[index]);

        _this.announce(labelMessage + " " + enterSelect);
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "resetSuggestions", function () {
      // delay this to avoid re-render interupting event delivery
      // https://github.com/grommet/grommet/issues/2154
      // 10ms was chosen empirically based on ie11 using TextInput
      // with and without a FormField.
      clearTimeout(_this.resetTimer);
      _this.resetTimer = setTimeout(function () {
        var suggestions = _this.props.suggestions;

        if (suggestions && suggestions.length) {
          _this.setState({
            activeSuggestionIndex: -1,
            showDrop: true,
            selectedSuggestionIndex: -1
          }, _this.announceSuggestionsCount);
        }
      }, 10);
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "getSelectedSuggestionIndex", function () {
      var _this$props4 = _this.props,
          suggestions = _this$props4.suggestions,
          value = _this$props4.value;
      var suggestionValues = suggestions.map(function (suggestion) {
        if (typeof suggestion === 'object') {
          return suggestion.value;
        }

        return suggestion;
      });
      return suggestionValues.indexOf(value);
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onShowSuggestions", function () {
      // Get values of suggestions, so we can highlight selected suggestion
      var selectedSuggestionIndex = _this.getSelectedSuggestionIndex();

      _this.setState({
        showDrop: true,
        activeSuggestionIndex: -1,
        selectedSuggestionIndex: selectedSuggestionIndex
      }, _this.announceSuggestionsIsOpen);
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onNextSuggestion", function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state = _this.state,
          activeSuggestionIndex = _this$state.activeSuggestionIndex,
          showDrop = _this$state.showDrop;

      if (suggestions && suggestions.length > 0) {
        if (!showDrop) {
          _this.onShowSuggestions();
        } else {
          event.preventDefault();
          var index = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);

          _this.setState({
            activeSuggestionIndex: index
          }, function () {
            return _this.announceSuggestion(index);
          });
        }
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onPreviousSuggestion", function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state2 = _this.state,
          activeSuggestionIndex = _this$state2.activeSuggestionIndex,
          showDrop = _this$state2.showDrop;

      if (suggestions && suggestions.length > 0 && showDrop) {
        event.preventDefault();
        var index = Math.max(activeSuggestionIndex - 1, 0);

        _this.setState({
          activeSuggestionIndex: index
        }, function () {
          return _this.announceSuggestion(index);
        });
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onClickSuggestion", function (suggestion) {
      var _this$props5 = _this.props,
          forwardRef = _this$props5.forwardRef,
          onSelect = _this$props5.onSelect;

      _this.setState({
        showDrop: false
      });

      if (onSelect) {
        onSelect({
          target: (forwardRef || _this.inputRef).current,
          suggestion: suggestion
        });
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onSuggestionSelect", function (event) {
      var _this$props6 = _this.props,
          forwardRef = _this$props6.forwardRef,
          onSelect = _this$props6.onSelect,
          suggestions = _this$props6.suggestions;
      var activeSuggestionIndex = _this.state.activeSuggestionIndex;

      _this.setState({
        showDrop: false
      });

      if (activeSuggestionIndex >= 0) {
        event.preventDefault(); // prevent submitting forms

        var suggestion = suggestions[activeSuggestionIndex];

        if (onSelect) {
          onSelect({
            target: (forwardRef || _this.inputRef).current,
            suggestion: suggestion
          });
        }
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onFocus", function (event) {
      var _this$props7 = _this.props,
          onFocus = _this$props7.onFocus,
          suggestions = _this$props7.suggestions;

      if (suggestions && suggestions.length > 0) {
        _this.announceSuggestionsExist();
      }

      _this.resetSuggestions();

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onBlur", function (event) {
      var onBlur = _this.props.onBlur;
      clearTimeout(_this.resetTimer);

      if (onBlur) {
        onBlur(event);
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onChange", function (event) {
      var onChange = _this.props.onChange;

      _this.resetSuggestions();

      if (onChange) {
        onChange(event);
      }
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onEsc", function (event) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      _this.setState({
        showDrop: false
      });
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "onTab", function () {
      _this.setState({
        showDrop: false
      });
    });

    _defineProperty$j(_assertThisInitialized$h(_assertThisInitialized$h(_this)), "renderSuggestions", function () {
      var _this$props8 = _this.props,
          suggestions = _this$props8.suggestions,
          theme = _this$props8.theme;
      var _this$state3 = _this.state,
          activeSuggestionIndex = _this$state3.activeSuggestionIndex,
          selectedSuggestionIndex = _this$state3.selectedSuggestionIndex;
      return React__default.createElement(StyledSuggestions, null, React__default.createElement(InfiniteScrollWrapper, {
        items: suggestions,
        step: theme.select.step
      }, function (suggestion, index) {
        var plain = typeof suggestion === 'object' && typeof React.isValidElement(suggestion.label);
        return React__default.createElement("li", {
          key: stringLabel(suggestion) + "-" + index
        }, React__default.createElement(ButtonWrapper, {
          active: activeSuggestionIndex === index || selectedSuggestionIndex === index,
          fill: true,
          hoverIndicator: "background",
          onClick: function onClick() {
            return _this.onClickSuggestion(suggestion);
          }
        }, plain ? renderLabel(suggestion) : React__default.createElement(Box, {
          align: "start",
          pad: "small"
        }, renderLabel(suggestion))));
      }));
    });

    return _this;
  }

  TextInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var suggestions = nextProps.suggestions;
    var showDrop = prevState.showDrop;

    if (showDrop && (!suggestions || !suggestions.length)) {
      return {
        showDrop: false
      };
    }

    return null;
  };

  var _proto = TextInput.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props9 = this.props,
        onSuggestionsOpen = _this$props9.onSuggestionsOpen,
        onSuggestionsClose = _this$props9.onSuggestionsClose,
        suggestions = _this$props9.suggestions;
    var showDrop = this.state.showDrop;

    if (showDrop !== prevState.showDrop) {
      if (showDrop && onSuggestionsOpen) {
        onSuggestionsOpen();
      } else if (onSuggestionsClose) {
        onSuggestionsClose();
      }
    }

    if (!showDrop && suggestions && (!prevProps.suggestions || !prevProps.suggestions.length)) {
      this.resetSuggestions();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.resetTimer);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props10 = this.props,
        defaultValue = _this$props10.defaultValue,
        dropAlign = _this$props10.dropAlign,
        dropHeight = _this$props10.dropHeight,
        dropTarget = _this$props10.dropTarget,
        forwardRef = _this$props10.forwardRef,
        id = _this$props10.id,
        placeholder = _this$props10.placeholder,
        plain = _this$props10.plain,
        theme = _this$props10.theme,
        value = _this$props10.value,
        onKeyDown = _this$props10.onKeyDown,
        rest = _objectWithoutPropertiesLoose$m(_this$props10, ["defaultValue", "dropAlign", "dropHeight", "dropTarget", "forwardRef", "id", "placeholder", "plain", "theme", "value", "onKeyDown"]);

    delete rest.onChange; // se we can manage in this.onChange()

    delete rest.onSuggestionsOpen;
    delete rest.onSuggestionsClose;
    var showDrop = this.state.showDrop; // needed so that styled components does not invoke
    // onSelect when text input is clicked

    delete rest.onSelect;
    var drop;

    if (showDrop) {
      drop = React__default.createElement(DropWrapper, {
        id: id ? "text-input-drop__" + id : undefined,
        align: dropAlign,
        responsive: false,
        target: dropTarget || (forwardRef || this.inputRef).current,
        onClickOutside: function onClickOutside() {
          return _this2.setState({
            showDrop: false
          });
        },
        onEsc: function onEsc() {
          return _this2.setState({
            showDrop: false
          });
        }
      }, React__default.createElement(ContainerBox, {
        overflow: "auto",
        dropHeight: dropHeight
      }, this.renderSuggestions()));
    }

    return React__default.createElement(StyledTextInputContainer, {
      plain: plain
    }, placeholder && typeof placeholder !== 'string' && !value ? React__default.createElement(StyledPlaceholder, null, placeholder) : null, React__default.createElement(KeyboardWrapper, {
      onEnter: this.onSuggestionSelect,
      onEsc: this.onEsc,
      onTab: this.onTab,
      onUp: this.onPreviousSuggestion,
      onDown: this.onNextSuggestion,
      onKeyDown: onKeyDown
    }, React__default.createElement(StyledTextInput, _extends$G({
      id: id,
      ref: forwardRef || this.inputRef,
      autoComplete: "off",
      plain: plain,
      placeholder: typeof placeholder === 'string' ? placeholder : undefined
    }, rest, {
      defaultValue: renderLabel(defaultValue),
      value: renderLabel(value),
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }))), drop);
  };

  return TextInput;
}(React.Component);

_defineProperty$j(TextInput, "defaultProps", {
  dropAlign: {
    top: 'bottom',
    left: 'left'
  },
  messages: {
    enterSelect: '(Press Enter to Select)',
    suggestionsCount: 'suggestions available',
    suggestionsExist: 'This input has suggestions use arrow keys to navigate',
    suggestionIsOpen: 'Suggestions drop is open, continue to use arrow keys to navigate'
  }
});

Object.setPrototypeOf(TextInput.defaultProps, defaultProps$2);
var TextInputDoc;

{
  TextInputDoc = require('./doc').doc(TextInput); // eslint-disable-line global-require
}

var TextInputWrapper = compose(withFocus, styled.withTheme, withAnnounce, withForwardRef)(TextInputDoc || TextInput);

function _inheritsLoose$o(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$i(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$k(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Searcher =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$o(Searcher, _Component);

  function Searcher() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$k(_assertThisInitialized$i(_assertThisInitialized$i(_this)), "inputRef", React__default.createRef());

    return _this;
  }

  var _proto = Searcher.prototype;

  _proto.componentDidMount = function componentDidMount() {
    /* eslint-disable-next-line react/prop-types */
    var _this$props = this.props,
        filtering = _this$props.filtering,
        property = _this$props.property;

    if (this.inputRef.current && filtering === property) {
      this.inputRef.current.focus();
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        filtering = _this$props2.filtering,
        filters = _this$props2.filters,
        onFilter = _this$props2.onFilter,
        onFiltering = _this$props2.onFiltering,
        property = _this$props2.property,
        theme = _this$props2.theme;

    if (filtering === property) {
      return React__default.createElement(KeyboardWrapper, {
        onEsc: function onEsc() {
          return onFiltering(undefined);
        }
      }, React__default.createElement(Box, {
        flex: true,
        pad: {
          horizontal: 'small'
        }
      }, React__default.createElement(TextInputWrapper, {
        ref: this.inputRef,
        value: filters[property],
        onChange: function onChange(event) {
          return onFilter(property, event.target.value);
        },
        onBlur: function onBlur() {
          return onFiltering(undefined);
        }
      })));
    }

    return React__default.createElement(React.Fragment, null, filters[property] ? React__default.createElement(Box, {
      flex: false,
      pad: {
        horizontal: 'small'
      }
    }, React__default.createElement(TextWrapper, null, filters[property])) : null, React__default.createElement(ButtonWrapper, {
      icon: React__default.createElement(FormSearch, {
        color: normalizeColor(filtering === property ? 'brand' : 'border', theme)
      }),
      hoverIndicator: true,
      onClick: function onClick() {
        return onFiltering(filtering === property ? undefined : property);
      }
    }));
  };

  return Searcher;
}(React.Component);

Searcher.defaultProps = {};
Object.setPrototypeOf(Searcher.defaultProps, defaultProps$2);
var SearcherWrapper = compose(styled.withTheme)(Searcher);

function _extends$H() { _extends$H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$H.apply(this, arguments); }
var SorterButton = styled__default(ButtonWrapper).withConfig({
  displayName: "Sorter__SorterButton",
  componentId: "fzr2yb-0"
})(["flex-shrink:1;height:100%;"]);

var Sorter = function Sorter(_ref) {
  var align = _ref.align,
      children = _ref.children,
      fill = _ref.fill,
      onSort = _ref.onSort,
      property = _ref.property,
      sort = _ref.sort,
      theme = _ref.theme,
      themeProps = _ref.themeProps;
  var icon;

  if (sort && sort.property === property) {
    var Icon = theme.dataTable.icons[sort.ascending ? 'ascending' : 'descending'];
    icon = React__default.createElement(Icon, null);
  }

  var content = React__default.createElement(Box, _extends$H({}, themeProps, {
    flex: "shrink",
    direction: "row",
    justify: align,
    align: "center",
    gap: "xsmall",
    fill: fill
  }), children, icon);

  if (onSort) {
    content = React__default.createElement(SorterButton, {
      fill: fill,
      hoverIndicator: true,
      onClick: onSort(property)
    }, content);
  }

  return content;
};

Sorter.defaultProps = {};
Object.setPrototypeOf(Sorter.defaultProps, defaultProps$2);
var SorterWrapper = compose(styled.withTheme)(Sorter);

function _extends$I() { _extends$I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$I.apply(this, arguments); }

function _objectWithoutPropertiesLoose$n(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ExpanderCell = function ExpanderCell(_ref) {
  var context = _ref.context,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose$n(_ref, ["context", "expanded", "onToggle", "theme"]);

  var ExpandIcon = theme.dataTable.icons[expanded ? 'contract' : 'expand'];

  if (onToggle) {
    return React__default.createElement(TableCellWrapper, {
      size: "xxsmall",
      plain: true,
      verticalAlign: "top"
    }, React__default.createElement(ButtonWrapper, {
      fill: true,
      a11yTitle: expanded ? 'collapse' : 'expand',
      hoverIndicator: true,
      disabled: !onToggle,
      onClick: onToggle
    }, React__default.createElement(Box, _extends$I({}, _extends$I({}, theme.table[context], theme.dataTable[context]), rest, {
      align: "center",
      pad: "xsmall"
    }), React__default.createElement(ExpandIcon, {
      color: normalizeColor('border', theme)
    }))));
  }

  return React__default.createElement(TableCellWrapper, {
    size: "xxsmall",
    verticalAlign: "top"
  });
};

ExpanderCell.defaultProps = {};
Object.setPrototypeOf(ExpanderCell.defaultProps, defaultProps$2);
var ExpanderCellWrapper = compose(styled.withTheme)(ExpanderCell);

var StyledDataTable = styled__default.table.withConfig({
  displayName: "StyledDataTable",
  componentId: "xrlyjm-0"
})(["border-spacing:0;border-collapse:collapse;height:100%;", ";"], genericStyles);
StyledDataTable.defaultProps = {};
Object.setPrototypeOf(StyledDataTable.defaultProps, defaultProps$2);
var StyledDataTableRow = styled__default.tr.withConfig({
  displayName: "StyledDataTable__StyledDataTableRow",
  componentId: "xrlyjm-1"
})(["", ";"], function (props) {
  return props.size && "\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ";
});
StyledDataTableRow.defaultProps = {};
Object.setPrototypeOf(StyledDataTableRow.defaultProps, defaultProps$2);
var StyledDataTableBody = styled__default.tbody.withConfig({
  displayName: "StyledDataTable__StyledDataTableBody",
  componentId: "xrlyjm-2"
})(["", ";"], function (props) {
  return props.size && "\n    display: block;\n    width: 100%;\n    max-height: " + props.theme.global.size[props.size] + ";\n    overflow: auto;\n  ";
});
StyledDataTableBody.defaultProps = {};
Object.setPrototypeOf(StyledDataTableBody.defaultProps, defaultProps$2);
var StyledDataTableHeader = styled__default.thead.withConfig({
  displayName: "StyledDataTable__StyledDataTableHeader",
  componentId: "xrlyjm-3"
})(["", ";"], function (props) {
  return props.size && "\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ";
});
StyledDataTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledDataTableHeader.defaultProps, defaultProps$2);
var StyledDataTableFooter = styled__default.tfoot.withConfig({
  displayName: "StyledDataTable__StyledDataTableFooter",
  componentId: "xrlyjm-4"
})(["", ";"], function (props) {
  return props.size && "\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ";
});
StyledDataTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledDataTableFooter.defaultProps, defaultProps$2);

function _extends$J() { _extends$J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$J.apply(this, arguments); }

function _objectWithoutPropertiesLoose$o(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Header = function Header(_ref) {
  var columns = _ref.columns,
      filtering = _ref.filtering,
      filters = _ref.filters,
      groups = _ref.groups,
      groupState = _ref.groupState,
      onFilter = _ref.onFilter,
      onFiltering = _ref.onFiltering,
      onResize = _ref.onResize,
      onSort = _ref.onSort,
      onToggle = _ref.onToggle,
      sort = _ref.sort,
      theme = _ref.theme,
      widths = _ref.widths,
      rest = _objectWithoutPropertiesLoose$o(_ref, ["columns", "filtering", "filters", "groups", "groupState", "onFilter", "onFiltering", "onResize", "onSort", "onToggle", "sort", "theme", "widths"]);

  var dataTableContextTheme = _extends$J({}, theme.table.header, theme.dataTable.header); // The tricky part here is that we need to manage the theme styling
  // to make sure that the background, border, and padding are applied
  // at the right places depending on the mix of controls in each header cell.


  var outerThemeProps = function (_ref2) {
    var border = _ref2.border,
        background = _ref2.background;
    return {
      border: border,
      background: background
    };
  }(dataTableContextTheme);

  var border = dataTableContextTheme.border,
      background = dataTableContextTheme.background,
      innerThemeProps = _objectWithoutPropertiesLoose$o(dataTableContextTheme, ["border", "background"]);

  return React__default.createElement(StyledDataTableHeader, _extends$J({
    as: TableHeaderWrapper
  }, rest), React__default.createElement(StyledDataTableRow, {
    as: TableRowWrapper
  }, groups && React__default.createElement(ExpanderCellWrapper, {
    context: "header",
    expanded: Object.keys(groupState).filter(function (k) {
      return !groupState[k].expanded;
    }).length === 0,
    onToggle: onToggle
  }), columns.map(function (_ref3) {
    var property = _ref3.property,
        header = _ref3.header,
        align = _ref3.align,
        search = _ref3.search,
        sortable = _ref3.sortable;
    var content = typeof header === 'string' ? React__default.createElement(TextWrapper, null, header) : header;

    if (onSort && sortable !== false) {
      content = React__default.createElement(SorterWrapper, {
        align: align,
        fill: !search,
        property: property,
        onSort: onSort,
        sort: sort,
        themeProps: search ? innerThemeProps : dataTableContextTheme
      }, content);
    }

    if (search && filters) {
      if (!onSort) {
        content = React__default.createElement(Box, _extends$J({
          justify: "center",
          align: align
        }, innerThemeProps), content);
      }

      content = React__default.createElement(Box, _extends$J({
        fill: true,
        direction: "row",
        justify: "between",
        align: "center"
      }, outerThemeProps), content, React__default.createElement(SearcherWrapper, {
        filtering: filtering,
        filters: filters,
        property: property,
        onFilter: onFilter,
        onFiltering: onFiltering
      }));
    } else if (!onSort || sortable === false) {
      content = React__default.createElement(Box, _extends$J({}, dataTableContextTheme, {
        fill: true,
        justify: "center",
        align: align
      }), content);
    }

    if (onResize) {
      content = React__default.createElement(ResizerWrapper, {
        property: property,
        onResize: onResize
      }, content);
    }

    return React__default.createElement(TableCellWrapper, {
      key: property,
      scope: "col",
      plain: true,
      style: widths && widths[property] ? {
        width: widths[property]
      } : undefined
    }, content);
  })));
};

Header.defaultProps = {};
Object.setPrototypeOf(Header.defaultProps, defaultProps$2);
var HeaderWrapper = compose(styled.withTheme)(Header);

var TableFooter = function TableFooter(props) {
  return React__default.createElement(TableContext.Provider, {
    value: "footer"
  }, React__default.createElement(StyledTableFooter, props));
};

var TableFooterDoc;

{
  TableFooterDoc = require('./doc').doc(TableFooter); // eslint-disable-line global-require
}

var TableFooterWrapper = TableFooterDoc || TableFooter;

function _extends$K() { _extends$K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$K.apply(this, arguments); }

var Cell = function Cell(_ref) {
  var _ref$column = _ref.column,
      align = _ref$column.align,
      property = _ref$column.property,
      render = _ref$column.render,
      context = _ref.context,
      datum = _ref.datum,
      primaryProperty = _ref.primaryProperty,
      scope = _ref.scope,
      theme = _ref.theme;
  var content;

  if (render) {
    content = render(datum);
  } else if (datum[property] !== undefined) {
    content = datum[property];
  }

  if (typeof content === 'string' || typeof content === 'number') {
    var textProps = property === primaryProperty ? theme.dataTable.primary : {};
    content = React__default.createElement(TextWrapper, textProps, content);
  }

  return React__default.createElement(TableCellWrapper, _extends$K({
    scope: scope
  }, theme.dataTable[context], {
    align: align
  }), content);
};

Cell.defaultProps = {};
Object.setPrototypeOf(Cell.defaultProps, defaultProps$2);
var CellWrapper = compose(styled.withTheme)(Cell);

function _extends$L() { _extends$L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$L.apply(this, arguments); }

function _objectWithoutPropertiesLoose$p(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Footer = function Footer(_ref) {
  var columns = _ref.columns,
      footerValues = _ref.footerValues,
      groups = _ref.groups,
      primaryProperty = _ref.primaryProperty,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose$p(_ref, ["columns", "footerValues", "groups", "primaryProperty", "theme"]);

  return React__default.createElement(StyledDataTableFooter, _extends$L({
    as: TableFooterWrapper
  }, rest), React__default.createElement(TableRowWrapper, null, groups && React__default.createElement(TableCellWrapper, {
    size: "xxsmall",
    plain: true,
    verticalAlign: "top"
  }, React__default.createElement(Box, _extends$L({}, theme.table.footer, theme.dataTable.footer))), columns.map(function (column) {
    return React__default.createElement(CellWrapper, {
      key: column.property,
      context: "footer",
      column: column,
      datum: footerValues,
      primaryProperty: primaryProperty
    });
  })));
};

Footer.defaultProps = {};
Object.setPrototypeOf(Footer.defaultProps, defaultProps$2);
var FooterWrapper = compose(styled.withTheme)(Footer);

function _extends$M() { _extends$M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$M.apply(this, arguments); }

function _objectWithoutPropertiesLoose$q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Body = function Body(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      onMore = _ref.onMore,
      primaryProperty = _ref.primaryProperty,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose$q(_ref, ["columns", "data", "onMore", "primaryProperty", "size", "theme"]);

  return React__default.createElement(StyledDataTableBody, _extends$M({
    size: size
  }, rest), React__default.createElement(InfiniteScrollWrapper, {
    items: data,
    onMore: onMore,
    scrollableAncestor: "window",
    renderMarker: function renderMarker(marker) {
      return React__default.createElement(TableRowWrapper, null, React__default.createElement(TableCellWrapper, null, marker));
    }
  }, function (datum) {
    return React__default.createElement(StyledDataTableRow, {
      key: datum[primaryProperty],
      size: size
    }, columns.map(function (column) {
      return React__default.createElement(CellWrapper, {
        key: column.property,
        context: "body",
        column: column,
        datum: datum,
        primaryProperty: primaryProperty,
        scope: column.primary || column.property === primaryProperty ? 'row' : undefined
      });
    }));
  }));
};

function _extends$N() { _extends$N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$N.apply(this, arguments); }

function _objectWithoutPropertiesLoose$r(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var GroupedBody = function GroupedBody(_ref) {
  var columns = _ref.columns,
      groupBy = _ref.groupBy,
      groups = _ref.groups,
      groupState = _ref.groupState,
      primaryProperty = _ref.primaryProperty,
      onToggle = _ref.onToggle,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose$r(_ref, ["columns", "groupBy", "groups", "groupState", "primaryProperty", "onToggle", "size", "theme"]);

  return React__default.createElement(StyledDataTableBody, _extends$N({
    size: size
  }, rest), groups.map(function (group) {
    var expanded = groupState[group.key].expanded;
    var content = React__default.createElement(StyledDataTableRow, {
      key: group.key,
      size: size
    }, React__default.createElement(ExpanderCellWrapper, {
      context: expanded ? 'groupHeader' : 'body',
      expanded: expanded,
      onToggle: onToggle(group.key)
    }), columns.map(function (column) {
      return React__default.createElement(CellWrapper, {
        key: column.property,
        context: expanded ? 'groupHeader' : 'body',
        column: column,
        datum: group.datum,
        scope: column.property === groupBy ? 'row' : undefined
      });
    }));

    if (expanded) {
      content = React__default.createElement(React.Fragment, {
        key: group.key
      }, content, group.data.map(function (datum) {
        return React__default.createElement(StyledDataTableRow, {
          key: datum[primaryProperty],
          size: size
        }, React__default.createElement(TableCellWrapper, {
          verticalAlign: "bottom"
        }, groupState[group.key].expanded), columns.map(function (column) {
          return React__default.createElement(CellWrapper, {
            key: column.property,
            context: "body",
            column: column,
            datum: datum,
            scope: column.primary ? 'row' : undefined
          });
        }));
      }), React__default.createElement(StyledDataTableRow, {
        size: size,
        "aria-hidden": true
      }, React__default.createElement(TableCellWrapper, null)));
    }

    return content;
  }));
};

function _extends$O() { _extends$O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$O.apply(this, arguments); }

var sumReducer = function sumReducer(accumulated, next) {
  return accumulated + next;
};

var minReducer = function minReducer(accumulated, next) {
  return accumulated === undefined ? next : Math.min(accumulated, next);
};

var maxReducer = function maxReducer(accumulated, next) {
  return accumulated === undefined ? next : Math.max(accumulated, next);
};

var reducers = {
  max: maxReducer,
  min: minReducer,
  sum: sumReducer
};

var aggregateColumn = function aggregateColumn(column, data) {
  var value;

  if (column.aggregate === 'avg') {
    value = data.map(function (d) {
      return d[column.property];
    }).reduce(sumReducer);
    value /= data.length;
  } else {
    value = data.map(function (d) {
      return d[column.property];
    }).reduce(reducers[column.aggregate], 0);
  }

  return value;
};

var findPrimary = function findPrimary(nextProps, prevState, nextState) {
  var columns = nextProps.columns,
      primaryKey = nextProps.primaryKey;
  var primaryProperty;
  columns.forEach(function (column) {
    // remember the first key property
    if (column.primary && !primaryProperty) {
      primaryProperty = column.property;
    }
  });

  if (!primaryProperty && columns.length > 0) {
    primaryProperty = primaryKey || columns[0].property;
  }

  return _extends$O({}, nextState, {
    primaryProperty: primaryProperty
  });
};

var filter = function filter(nextProps, prevState, nextState) {
  var columns = nextProps.columns,
      onSearch = nextProps.onSearch;
  var data = nextState.data,
      filters = nextState.filters;
  var nextFilters;
  var regexps;
  columns.forEach(function (column) {
    if (column.search) {
      if (!nextFilters) {
        nextFilters = {};
        regexps = {};
      }

      nextFilters[column.property] = filters ? filters[column.property] || '' : ''; // don't do filtering if the caller has supplied onSearch

      if (nextFilters[column.property] && column.search && !onSearch) {
        regexps[column.property] = new RegExp(nextFilters[column.property], 'i');
      }
    }
  });
  var nextData = data;

  if (nextFilters) {
    nextData = data.filter(function (datum) {
      return !Object.keys(regexps).some(function (property) {
        return !regexps[property].test(datum[property]);
      });
    });
  }

  return _extends$O({}, nextState, {
    filters: nextFilters,
    data: nextData
  });
};

var aggregate = function aggregate(nextProps, prevState, nextState) {
  var columns = nextProps.columns;
  var data = nextState.data;
  var aggregateValues = {};
  columns.forEach(function (column) {
    if (column.aggregate) {
      aggregateValues[column.property] = aggregateColumn(column, data);
    }
  });
  return _extends$O({}, nextState, {
    aggregateValues: aggregateValues
  });
};

var buildFooterValues = function buildFooterValues(nextProps, prevState, nextState) {
  var columns = nextProps.columns;
  var aggregateValues = nextState.aggregateValues;
  var showFooter;
  var footerValues = {};
  columns.forEach(function (column) {
    if (column.footer) {
      showFooter = true;

      if (typeof column.footer === 'string') {
        footerValues[column.property] = column.footer;
      } else if (column.footer.aggregate) {
        footerValues[column.property] = aggregateValues[column.property];
      }
    }
  });
  return _extends$O({}, nextState, {
    footerValues: footerValues,
    showFooter: showFooter
  });
};

var sortData = function sortData(nextProps, prevState, nextState) {
  var sort = prevState.sort;
  var data = nextState.data;
  var nextData = data;

  if (sort) {
    var property = sort.property,
        ascending = sort.ascending;
    nextData = [].concat(data);
    var before = ascending ? 1 : -1;
    var after = ascending ? -1 : 1;
    nextData.sort(function (d1, d2) {
      if (d1[property] > d2[property]) return before;
      if (d1[property] < d2[property]) return after;
      return 0;
    });
  }

  return _extends$O({}, nextState, {
    data: nextData
  });
};

var groupData = function groupData(nextProps, prevState, nextState) {
  var columns = nextProps.columns,
      groupBy = nextProps.groupBy;
  var data = nextState.data;
  var groups;
  var groupState;

  if (groupBy) {
    groups = [];
    groupState = {};
    var groupMap = {};
    data.forEach(function (datum) {
      var groupValue = datum[groupBy];

      if (!groupMap[groupValue]) {
        var group = {
          data: [],
          datum: {},
          key: groupValue
        };
        group.datum[groupBy] = groupValue;
        groups.push(group);
        groupState[groupValue] = {
          expanded: prevState.groupState && prevState.groupState[groupValue] ? prevState.groupState[groupValue].expanded : false
        };
        groupMap[groupValue] = group;
      }

      groupMap[groupValue].data.push(datum);
    }); // calculate any aggregates

    columns.forEach(function (column) {
      if (column.aggregate) {
        groups.forEach(function (group) {
          group.datum[column.property] = aggregateColumn(column, group.data); // eslint-disable-line
        });
      }
    });
  }

  return _extends$O({}, nextState, {
    groups: groups,
    groupState: groupState
  });
};

var buildState$1 = function buildState(nextProps, prevState) {
  var data = nextProps.data;
  var filters = prevState.filters,
      sort = prevState.sort,
      widths = prevState.widths;
  var nextState = {
    data: data,
    filters: filters,
    sort: sort,
    widths: widths
  };
  nextState = findPrimary(nextProps, prevState, nextState);
  nextState = filter(nextProps, prevState, nextState);
  nextState = aggregate(nextProps, prevState, nextState);
  nextState = buildFooterValues(nextProps, prevState, nextState);
  nextState = sortData(nextProps, prevState, nextState);
  nextState = groupData(nextProps, prevState, nextState);
  return nextState;
};

function _objectWithoutPropertiesLoose$s(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$P() { _extends$P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$P.apply(this, arguments); }

function _inheritsLoose$p(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$j(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$l(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$p(DataTable, _Component);

  function DataTable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$l(_assertThisInitialized$j(_assertThisInitialized$j(_this)), "state", {});

    _defineProperty$l(_assertThisInitialized$j(_assertThisInitialized$j(_this)), "onFiltering", function (property) {
      _this.setState({
        filtering: property
      });
    });

    _defineProperty$l(_assertThisInitialized$j(_assertThisInitialized$j(_this)), "onFilter", function (property, value) {
      /* eslint-disable-next-line react/prop-types */
      var onSearch = _this.props.onSearch;
      var filters = _this.state.filters;

      var nextFilters = _extends$P({}, filters);

      nextFilters[property] = value;

      _this.setState({
        filters: nextFilters
      }); // Let caller know about search, if interested


      if (onSearch) {
        onSearch(nextFilters);
      }
    });

    _defineProperty$l(_assertThisInitialized$j(_assertThisInitialized$j(_this)), "onSort", function (property) {
      return function () {
        var sort = _this.state.sort;
        var ascending = sort && property === sort.property ? !sort.ascending : true;

        _this.setState({
          sort: {
            property: property,
            ascending: ascending
          }
        });
      };
    });

    _defineProperty$l(_assertThisInitialized$j(_assertThisInitialized$j(_this)), "onToggleGroup", function (groupValue) {
      return function () {
        var groupState = _this.state.groupState;

        var nextGroupState = _extends$P({}, groupState);

        nextGroupState[groupValue] = _extends$P({}, nextGroupState[groupValue], {
          expanded: !nextGroupState[groupValue].expanded
        });

        _this.setState({
          groupState: nextGroupState
        });
      };
    });

    _defineProperty$l(_assertThisInitialized$j(_assertThisInitialized$j(_this)), "onToggleGroups", function () {
      var groupState = _this.state.groupState;
      var expanded = Object.keys(groupState).filter(function (k) {
        return !groupState[k].expanded;
      }).length === 0;
      var nextGroupState = {};
      Object.keys(groupState).forEach(function (k) {
        nextGroupState[k] = _extends$P({}, groupState[k], {
          expanded: !expanded
        });
      });

      _this.setState({
        groupState: nextGroupState
      });
    });

    _defineProperty$l(_assertThisInitialized$j(_assertThisInitialized$j(_this)), "onResize", function (property) {
      return function (width) {
        var widths = _this.state.widths;

        var nextWidths = _extends$P({}, widths || {});

        nextWidths[property] = width;

        _this.setState({
          widths: nextWidths
        });
      };
    });

    return _this;
  }

  DataTable.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    return buildState$1(nextProps, prevState);
  };

  var _proto = DataTable.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        columns = _this$props.columns,
        propsData = _this$props.data,
        groupBy = _this$props.groupBy,
        onMore = _this$props.onMore,
        resizeable = _this$props.resizeable,
        size = _this$props.size,
        sortable = _this$props.sortable,
        onSearch = _this$props.onSearch,
        rest = _objectWithoutPropertiesLoose$s(_this$props, ["columns", "data", "groupBy", "onMore", "resizeable", "size", "sortable", "onSearch"]);

    var _this$state = this.state,
        data = _this$state.data,
        filtering = _this$state.filtering,
        filters = _this$state.filters,
        footerValues = _this$state.footerValues,
        groups = _this$state.groups,
        groupState = _this$state.groupState,
        primaryProperty = _this$state.primaryProperty,
        showFooter = _this$state.showFooter,
        sort = _this$state.sort,
        widths = _this$state.widths;

    if (size && resizeable) {
      console.warn('DataTable cannot combine "size" and "resizeble".');
    }

    return React__default.createElement(StyledDataTable, rest, React__default.createElement(HeaderWrapper, {
      columns: columns,
      filtering: filtering,
      filters: filters,
      groups: groups,
      groupState: groupState,
      size: size,
      sort: sort,
      widths: widths,
      onFiltering: this.onFiltering,
      onFilter: this.onFilter,
      onResize: resizeable ? this.onResize : undefined,
      onSort: sortable ? this.onSort : undefined,
      onToggle: this.onToggleGroups
    }), groups ? React__default.createElement(GroupedBody, {
      columns: columns,
      groupBy: groupBy,
      groups: groups,
      groupState: groupState,
      primaryProperty: primaryProperty,
      onToggle: this.onToggleGroup
    }) : React__default.createElement(Body, {
      columns: columns,
      data: data,
      onMore: onMore,
      primaryProperty: primaryProperty,
      size: size
    }), showFooter && React__default.createElement(FooterWrapper, {
      columns: columns,
      footerValues: footerValues,
      groups: groups,
      primaryProperty: primaryProperty,
      size: size
    }));
  };

  return DataTable;
}(React.Component);

_defineProperty$l(DataTable, "defaultProps", {
  columns: [],
  data: []
});

var DataTableDoc;

{
  DataTableDoc = require('./doc').doc(DataTable); // eslint-disable-line global-require
}

var StyledDiagram = styled__default.svg.withConfig({
  displayName: "StyledDiagram",
  componentId: "sc-1vzeu9f-0"
})(["max-width:100%;width:100%;height:100%;", ";"], function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});
StyledDiagram.defaultProps = {};
Object.setPrototypeOf(StyledDiagram.defaultProps, defaultProps$2);

function _extends$Q() { _extends$Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Q.apply(this, arguments); }

function _objectWithoutPropertiesLoose$t(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$q(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$k(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$m(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var computeMidPoint = function computeMidPoint(fromPoint, toPoint) {
  return [fromPoint[0] > toPoint[0] ? toPoint[0] + (fromPoint[0] - toPoint[0]) / 2 : fromPoint[0] + (toPoint[0] - fromPoint[0]) / 2, fromPoint[1] > toPoint[1] ? toPoint[1] + (fromPoint[1] - toPoint[1]) / 2 : fromPoint[1] + (toPoint[1] - fromPoint[1]) / 2];
};

var COMMANDS = {
  curved: function curved(fromPoint, toPoint, offset, anchor) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    var cmds = "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " ";

    if (anchor === 'horizontal') {
      cmds += "Q " + (midPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + (midPoint[0] + offset + "," + (midPoint[1] + offset) + " ");
    } else {
      cmds += "Q " + (fromPoint[0] + offset) + "," + (midPoint[1] + offset) + " " + (midPoint[0] + offset + "," + (midPoint[1] + offset) + " ");
    }

    cmds += "T " + (toPoint[0] + offset) + "," + (toPoint[1] + offset);
    return cmds;
  },
  direct: function direct(fromPoint, toPoint, offset) {
    return "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + ("L " + (toPoint[0] + offset) + "," + (toPoint[1] + offset));
  },
  rectilinear: function rectilinear(fromPoint, toPoint, offset, anchor) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    var cmds = "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " ";

    if (anchor === 'horizontal') {
      cmds += "L " + (midPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + ("L " + (midPoint[0] + offset) + "," + (toPoint[1] + offset) + " ");
    } else {
      cmds += "L " + (fromPoint[0] + offset) + "," + (midPoint[1] + offset) + " " + ("L " + (toPoint[0] + offset) + "," + (midPoint[1] + offset) + " ");
    }

    cmds += "L " + (toPoint[0] + offset) + "," + (toPoint[1] + offset);
    return cmds;
  }
};

var findTarget = function findTarget(target) {
  if (typeof target === 'string') {
    return document.getElementById(target);
  }

  return target;
};

var Diagram =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$q(Diagram, _Component);

  function Diagram() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$m(_assertThisInitialized$k(_assertThisInitialized$k(_this)), "state", {
      height: 0,
      width: 0
    });

    _defineProperty$m(_assertThisInitialized$k(_assertThisInitialized$k(_this)), "svgRef", React__default.createRef());

    _defineProperty$m(_assertThisInitialized$k(_assertThisInitialized$k(_this)), "onResize", function () {
      var _this$state = _this.state,
          connectionPoints = _this$state.connectionPoints,
          width = _this$state.width,
          height = _this$state.height;
      var svg = _this.svgRef.current;

      if (svg) {
        var rect = svg.getBoundingClientRect();

        if (rect.width !== width || rect.height !== height) {
          _this.setState({
            width: rect.width,
            height: rect.height,
            connectionPoints: undefined
          });
        } else if (!connectionPoints) {
          _this.placeConnections();
        }
      }
    });

    return _this;
  }

  var _proto = Diagram.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.onResize();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  _proto.placeConnections = function placeConnections() {
    var connections = this.props.connections;
    var containerRect = this.svgRef.current.getBoundingClientRect();
    var connectionPoints = connections.map(function (_ref) {
      var anchor = _ref.anchor,
          fromTarget = _ref.fromTarget,
          toTarget = _ref.toTarget;
      var points;
      var fromElement = findTarget(fromTarget);
      var toElement = findTarget(toTarget);

      if (!fromElement) {
        console.warn("Diagram cannot find " + fromTarget);
      }

      if (!toElement) {
        console.warn("Diagram cannot find " + toTarget);
      }

      if (fromElement && toElement) {
        var fromRect = fromElement.getBoundingClientRect();
        var toRect = toElement.getBoundingClientRect(); // There is no x and y when unit testing.

        var fromPoint = [fromRect.x - containerRect.x || 0, fromRect.y - containerRect.y || 0];
        var toPoint = [toRect.x - containerRect.x || 0, toRect.y - containerRect.y || 0];

        if (anchor === 'vertical') {
          fromPoint[0] += fromRect.width / 2;
          toPoint[0] += toRect.width / 2;

          if (fromRect.y < toRect.y) {
            fromPoint[1] += fromRect.height;
          } else {
            toPoint[1] += toRect.height;
          }
        } else if (anchor === 'horizontal') {
          fromPoint[1] += fromRect.height / 2;
          toPoint[1] += toRect.height / 2;

          if (fromRect.x < toRect.x) {
            fromPoint[0] += fromRect.width;
          } else {
            toPoint[0] += toRect.width;
          }
        } else {
          // center
          fromPoint[0] += fromRect.width / 2;
          fromPoint[1] += fromRect.height / 2;
          toPoint[0] += toRect.width / 2;
          toPoint[1] += toRect.height / 2;
        }

        points = [fromPoint, toPoint];
      }

      return points;
    });
    this.setState({
      connectionPoints: connectionPoints
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        connections = _this$props.connections,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$t(_this$props, ["connections", "theme"]);

    var _this$state2 = this.state,
        connectionPoints = _this$state2.connectionPoints,
        height = _this$state2.height,
        width = _this$state2.width;
    var paths;

    if (connectionPoints) {
      paths = connections.map(function (_ref2, index) {
        var anchor = _ref2.anchor,
            color = _ref2.color,
            offset = _ref2.offset,
            round = _ref2.round,
            thickness = _ref2.thickness,
            type = _ref2.type,
            connectionRest = _objectWithoutPropertiesLoose$t(_ref2, ["anchor", "color", "offset", "round", "thickness", "type"]);

        var path;

        var cleanedRest = _extends$Q({}, connectionRest);

        delete cleanedRest.fromTarget;
        delete cleanedRest.toTarget;
        var points = connectionPoints[index];

        if (points) {
          var offsetWidth = offset ? parseMetricToNum(theme.global.edgeSize[offset]) : 0;
          var d = COMMANDS[type || 'curved'](points[0], points[1], offsetWidth, anchor);
          var strokeWidth = thickness ? parseMetricToNum(theme.global.edgeSize[thickness] || thickness) : 1;
          path = React__default.createElement("path", _extends$Q({
            // eslint-disable-next-line react/no-array-index-key
            key: index
          }, cleanedRest, {
            stroke: normalizeColor(color || 'accent-1', theme),
            strokeWidth: strokeWidth,
            strokeLinecap: round ? 'round' : 'butt',
            strokeLinejoin: round ? 'round' : 'miter',
            fill: "none",
            d: d
          }));
        }

        return path;
      });
    }

    return React__default.createElement(StyledDiagram, _extends$Q({
      ref: this.svgRef,
      viewBox: "0 0 " + width + " " + height,
      preserveAspectRatio: "xMinYMin meet"
    }, rest), React__default.createElement("g", null, paths));
  };

  return Diagram;
}(React.Component);

_defineProperty$m(Diagram, "defaultProps", {
  connections: []
});

Object.setPrototypeOf(Diagram.defaultProps, defaultProps$2);
var DiagramDoc;

{
  DiagramDoc = require('./doc').doc(Diagram); // eslint-disable-line global-require
}

var DiagramWrapper = compose(styled.withTheme)(DiagramDoc || Diagram);

function _extends$R() { _extends$R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$R.apply(this, arguments); }

function _objectWithoutPropertiesLoose$u(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$r(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty$n(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Value = function Value(_ref) {
  var basis = _ref.basis,
      children = _ref.children;
  return React__default.createElement(Box, {
    basis: basis,
    flex: "shrink",
    overflow: "hidden"
  }, children);
};

Value.propTypes = {
  basis: propTypes.string.isRequired,
  children: propTypes.node.isRequired
};

var Distribution =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$r(Distribution, _Component);

  function Distribution() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Distribution.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        basis = _this$props.basis,
        children = _this$props.children,
        direction = _this$props.direction,
        fill = _this$props.fill,
        gap = _this$props.gap,
        values = _this$props.values,
        rest = _objectWithoutPropertiesLoose$u(_this$props, ["basis", "children", "direction", "fill", "gap", "values"]);

    if (values.length === 1) {
      var value = values[0];
      return React__default.createElement(Value, {
        value: value,
        basis: basis
      }, children(value));
    }

    if (values.length > 1) {
      // calculate total
      var total = 0;
      values.forEach(function (v) {
        total += v.value;
      }); // figure out how many of the values area needed to represent half of the total

      var subTotal = 0;
      var subIndex;
      values.some(function (v, index) {
        subTotal += v.value;

        if (subTotal >= total * 0.4) {
          subIndex = index + 1;
          return true;
        }

        return false;
      });

      if (subIndex === values.length) {
        var _value = values[0];
        return React__default.createElement(Value, {
          value: _value,
          basis: basis
        }, children(_value));
      }

      var childBasis;

      if (subTotal > total * 0.7) {
        childBasis = ['3/4', '1/4'];
      } else if (subTotal > total * 0.6) {
        childBasis = ['2/3', '1/3'];
      } else {
        childBasis = ['1/2', '1/2'];
      }

      return React__default.createElement(Box, _extends$R({
        direction: direction,
        basis: basis,
        flex: basis ? 'shrink' : true,
        overflow: "hidden",
        gap: gap,
        fill: fill
      }, rest), React__default.createElement(Distribution, {
        values: values.slice(0, subIndex),
        basis: childBasis[0],
        direction: direction === 'row' ? 'column' : 'row',
        gap: gap
      }, children), React__default.createElement(Distribution, {
        values: values.slice(subIndex),
        basis: childBasis[1],
        direction: direction === 'row' ? 'column' : 'row',
        gap: gap
      }, children));
    }

    return null;
  };

  return Distribution;
}(React.Component);

_defineProperty$n(Distribution, "defaultProps", {
  basis: undefined,
  children: function children(value) {
    return React__default.createElement(Box, {
      fill: true,
      border: true
    }, React__default.createElement(TextWrapper, null, value.value));
  },
  direction: 'row',
  gap: 'xsmall',
  values: []
});

var DistributionDoc;

{
  DistributionDoc = require('./doc').doc(Distribution); // eslint-disable-line global-require
}

function _extends$S() { _extends$S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$S.apply(this, arguments); }

function _objectWithoutPropertiesLoose$v(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$s(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$l(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$o(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$s(DropButton, _Component);

  function DropButton(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty$o(_assertThisInitialized$l(_assertThisInitialized$l(_this)), "buttonRef", React.createRef());

    _defineProperty$o(_assertThisInitialized$l(_assertThisInitialized$l(_this)), "onDropClose", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        show: false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    });

    _defineProperty$o(_assertThisInitialized$l(_assertThisInitialized$l(_this)), "onToggle", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen;
      var show = _this.state.show;

      _this.setState({
        show: !show
      }, function () {
        return show ? onClose && onClose() : onOpen && onOpen();
      });
    });

    _this.state = {
      show: props.open || false
    };
    return _this;
  }

  DropButton.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var show = prevState.show;
    var open = nextProps.open;

    if (open !== undefined && open !== show) {
      return {
        show: open
      };
    }

    return null;
  };

  var _proto = DropButton.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var open = this.props.open;

    if (open) {
      this.forceUpdate();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var forwardRef = this.props.forwardRef;
    var show = this.state.show;

    if (!show && prevState.show) {
      // focus on the button if the drop is closed
      setFocusWithoutScroll((forwardRef || this.buttonRef).current);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        dropAlign = _this$props2.dropAlign,
        forwardRef = _this$props2.forwardRef,
        dropContent = _this$props2.dropContent,
        dropTarget = _this$props2.dropTarget,
        id = _this$props2.id,
        open = _this$props2.open,
        rest = _objectWithoutPropertiesLoose$v(_this$props2, ["disabled", "dropAlign", "forwardRef", "dropContent", "dropTarget", "id", "open"]);

    var show = this.state.show;
    delete rest.onClose;
    delete rest.onOpen;
    var drop;

    if (show && (forwardRef || this.buttonRef).current) {
      drop = React__default.createElement(DropWrapper, {
        id: id ? id + "__drop" : undefined,
        restrictFocus: true,
        align: dropAlign,
        target: dropTarget || (forwardRef || this.buttonRef).current,
        onClickOutside: this.onDropClose,
        onEsc: this.onDropClose
      }, dropContent);
    }

    return React__default.createElement(React__default.Fragment, null, React__default.createElement(ButtonWrapper, _extends$S({
      id: id,
      ref: forwardRef || this.buttonRef,
      disabled: disabled,
      onClick: this.onToggle
    }, rest)), drop);
  };

  return DropButton;
}(React.Component);

_defineProperty$o(DropButton, "defaultProps", {
  a11yTitle: 'Open Drop',
  dropAlign: {
    top: 'top',
    left: 'left'
  }
});

var DropButtonDoc;

{
  DropButtonDoc = require('./doc').doc(DropButton); // eslint-disable-line global-require
}

var DropButtonWrapper = compose(withForwardRef)(DropButtonDoc || DropButton);

var FormContext = React__default.createContext(undefined);

function _objectWithoutPropertiesLoose$w(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$T() { _extends$T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$T.apply(this, arguments); }

function _inheritsLoose$t(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$m(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$p(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var defaultMessages = {
  invalid: 'invalid',
  required: 'required'
};

var Form =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$t(Form, _Component);

  function Form() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$p(_assertThisInitialized$m(_assertThisInitialized$m(_this)), "state", {
      errors: {},
      value: {},
      touched: {}
    });

    _defineProperty$p(_assertThisInitialized$m(_assertThisInitialized$m(_this)), "validations", {});

    _defineProperty$p(_assertThisInitialized$m(_assertThisInitialized$m(_this)), "onSubmit", function (event) {
      var onSubmit = _this.props.onSubmit;
      var _this$state = _this.state,
          errors = _this$state.errors,
          value = _this$state.value; // Don't submit the form via browser form action. We don't want it
      // if the validation fails. And, we assume a javascript action handler
      // otherwise.

      event.preventDefault();

      var nextErrors = _extends$T({}, errors);

      Object.keys(_this.validations).forEach(function (name) {
        var validate = _this.validations[name];
        var error = validate && validate(value[name], value);

        if (error) {
          nextErrors[name] = error;
        } else {
          delete nextErrors[name];
        }
      });

      if (Object.keys(nextErrors).length === 0 && onSubmit) {
        event.persist(); // extract from React's synthetic event pool

        var adjustedEvent = event;
        adjustedEvent.value = value;
        onSubmit(adjustedEvent);
      } else {
        _this.setState({
          errors: nextErrors
        });
      }
    });

    _defineProperty$p(_assertThisInitialized$m(_assertThisInitialized$m(_this)), "update", function (name, data, error) {
      var _this$state2 = _this.state,
          errors = _this$state2.errors,
          touched = _this$state2.touched,
          value = _this$state2.value;

      var nextValue = _extends$T({}, value);

      nextValue[name] = data;

      var nextTouched = _extends$T({}, touched);

      nextTouched[name] = true;

      var nextErrors = _extends$T({}, errors);

      if (errors[name]) {
        var nextError = error || _this.validations[name] && _this.validations[name](data, nextValue);

        if (nextError) {
          nextErrors[name] = nextError;
        } else {
          delete nextErrors[name];
        }
      }

      _this.setState({
        value: nextValue,
        errors: nextErrors,
        touched: nextTouched
      });
    });

    _defineProperty$p(_assertThisInitialized$m(_assertThisInitialized$m(_this)), "addValidation", function (name, validate) {
      _this.validations[name] = validate;
    });

    return _this;
  }

  Form.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var value = nextProps.value,
        errors = nextProps.errors,
        messages = nextProps.messages;
    var stateValue = prevState.value,
        stateErrors = prevState.errors,
        priorValue = prevState.priorValue,
        priorErrors = prevState.priorErrors,
        priorMessages = prevState.priorMessages;

    if (!priorValue || value !== priorValue || errors !== priorErrors || messages !== priorMessages) {
      return {
        value: value !== priorValue ? value : stateValue,
        priorValue: value,
        errors: (errors !== priorErrors ? errors : stateErrors) || {},
        priorErrors: errors,
        messages: _extends$T({}, defaultMessages, messages),
        priorMessages: messages
      };
    }

    return null;
  };

  var _proto = Form.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose$w(_this$props, ["children"]);

    delete rest.messages;
    delete rest.theme;
    delete rest.value;
    var _this$state3 = this.state,
        errors = _this$state3.errors,
        touched = _this$state3.touched,
        value = _this$state3.value,
        messages = _this$state3.messages;
    return React__default.createElement("form", _extends$T({}, rest, {
      onSubmit: this.onSubmit
    }), React__default.createElement(FormContext.Provider, {
      value: {
        addValidation: this.addValidation,
        errors: errors,
        messages: messages,
        touched: touched,
        update: this.update,
        value: value
      }
    }, children));
  };

  return Form;
}(React.Component);

_defineProperty$p(Form, "defaultProps", {
  messages: defaultMessages,
  value: {}
});

Object.setPrototypeOf(Form.defaultProps, defaultProps$2);
var FormDoc;

{
  FormDoc = require('./doc').doc(Form); // eslint-disable-line global-require
}

var FormWrapper = FormDoc || Form;
FormWrapper.displayName = 'Form';

function _extends$U() { _extends$U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$U.apply(this, arguments); }

function _objectWithoutPropertiesLoose$x(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$u(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$n(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$q(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validateField = function validateField(required, validate, messages) {
  return function (data) {
    var error;

    if (required && (data === undefined || data === '')) {
      error = messages.required;
    } else if (validate) {
      if (typeof validate === 'function') {
        error = validate(data);
      } else if (validate.regexp) {
        if (!validate.regexp.test(data)) {
          error = validate.message || messages.invalid;
        }
      }
    }

    return error;
  };
};

var FormField =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$u(FormField, _Component);

  function FormField() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$q(_assertThisInitialized$n(_assertThisInitialized$n(_this)), "renderChildren", function (value, update) {
      var _this$props = _this.props,
          name = _this$props.name,
          component = _this$props.component,
          required = _this$props.required,
          rest = _objectWithoutPropertiesLoose$x(_this$props, ["name", "component", "required"]);

      var Input = component || TextInputWrapper;

      if (Input === CheckBoxWrapper) {
        return React__default.createElement(Input, _extends$U({
          name: name,
          checked: value[name] || false,
          onChange: function onChange(event) {
            return update(name, event.target.checked);
          }
        }, rest));
      }

      return React__default.createElement(Input, _extends$U({
        name: name,
        value: value[name] || '',
        onChange: function onChange(event) {
          return update(name, event.value || event.target.value);
        },
        plain: true,
        focusIndicator: false
      }, rest));
    });

    return _this;
  }

  var _proto = FormField.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        component = _this$props2.component,
        error = _this$props2.error,
        focus = _this$props2.focus,
        help = _this$props2.help,
        htmlFor = _this$props2.htmlFor,
        label = _this$props2.label,
        name = _this$props2.name,
        pad = _this$props2.pad,
        required = _this$props2.required,
        style = _this$props2.style,
        theme = _this$props2.theme,
        validate = _this$props2.validate;
    var formField = theme.formField;
    var border = formField.border;
    return React__default.createElement(FormContext.Consumer, null, function (context) {
      var normalizedError = error;
      var contents = children;

      if (context) {
        var addValidation = context.addValidation,
            errors = context.errors,
            value = context.value,
            update = context.update,
            messages = context.messages;
        addValidation(name, validateField(required, validate, messages));
        normalizedError = error || errors[name];
        contents = children || _this2.renderChildren(value, update);
      }

      if (pad) {
        contents = React__default.createElement(Box, {
          pad: {
            horizontal: 'small',
            bottom: 'small'
          }
        }, contents);
      }

      var borderColor;

      if (focus) {
        borderColor = 'focus';
      } else if (normalizedError) {
        borderColor = border && border.error.color || 'status-critical';
      } else {
        borderColor = border && border.color || 'border';
      }

      var abut;
      var outerStyle = style;

      if (border) {
        var normalizedChildren = children ? React.Children.map(children, function (child) {
          if (child) {
            return React.cloneElement(child, {
              plain: true,
              focusIndicator: false
            });
          }

          return child;
        }) : contents;
        contents = React__default.createElement(Box, {
          ref: function ref(_ref) {
            _this2.childContainerRef = _ref;
          },
          border: border.position === 'inner' ? _extends$U({}, border, {
            side: border.side || 'bottom',
            color: borderColor
          }) : undefined
        }, normalizedChildren);
        abut = border.position === 'outer' && (border.side === 'all' || border.side === 'horizontal' || !border.side);

        if (abut) {
          // marginBottom is set to overlap adjacent fields
          var marginBottom = '-1px';

          if (border.size) {
            marginBottom = "-" + parseMetricToNum(theme.global.borderSize[border.size]) + "px";
          }

          outerStyle = _extends$U({
            position: focus ? 'relative' : undefined,
            marginBottom: marginBottom,
            zIndex: focus ? 10 : undefined
          }, style);
        }
      }

      return React__default.createElement(Box, {
        border: border && border.position === 'outer' ? _extends$U({}, border, {
          color: borderColor
        }) : undefined,
        margin: abut ? undefined : {
          bottom: 'small'
        },
        style: outerStyle
      }, label && component !== CheckBoxWrapper || help ? React__default.createElement(Box, {
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        },
        gap: "xsmall"
      }, label && component !== CheckBoxWrapper ? React__default.createElement(TextWrapper, _extends$U({
        as: "label",
        htmlFor: htmlFor
      }, formField.label), label) : undefined, help ? React__default.createElement(TextWrapper, _extends$U({}, formField.help, {
        color: formField.help.color[theme.dark ? 'dark' : 'light']
      }), help) : undefined) : undefined, contents, normalizedError ? React__default.createElement(Box, {
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        }
      }, React__default.createElement(TextWrapper, _extends$U({}, formField.error, {
        color: formField.error.color[theme.dark ? 'dark' : 'light']
      }), normalizedError)) : undefined);
    });
  };

  return FormField;
}(React.Component);

FormField.defaultProps = {};
Object.setPrototypeOf(FormField.defaultProps, defaultProps$2);
var FormFieldDoc;

{
  FormFieldDoc = require('./doc').doc(FormField); // eslint-disable-line global-require
}

var FormFieldWrapper = compose(withFocus, styled.withTheme)(FormFieldDoc || FormField);

var fillStyle$3 = function fillStyle(fill) {
  if (fill === 'horizontal') {
    return 'width: 100%;';
  }

  if (fill === 'vertical') {
    return 'height: 100%;';
  }

  if (fill) {
    return "\n      width: 100%;\n      height: 100%;\n    ";
  }

  return undefined;
};

var ALIGN_MAP$1 = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignStyle$1 = styled.css(["align-items:", ";"], function (props) {
  return ALIGN_MAP$1[props.align];
});
var ALIGN_CONTENT_MAP$1 = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignContentStyle$1 = styled.css(["align-content:", ";"], function (props) {
  return ALIGN_CONTENT_MAP$1[props.alignContent];
});
var JUSTIFY_MAP$1 = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var justifyStyle$1 = styled.css(["justify-items:", ";"], function (props) {
  return JUSTIFY_MAP$1[props.justify];
});
var JUSTIFY_CONTENT_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var justifyContentStyle = styled.css(["justify-content:", ";"], function (props) {
  return JUSTIFY_CONTENT_MAP[props.justifyContent];
});

var gapStyle$1 = function gapStyle(props) {
  if (typeof props.gap === 'string') {
    var gapSize = props.theme.global.edgeSize[props.gap];
    return "grid-gap: " + gapSize + " " + gapSize + ";";
  }

  if (props.gap.row && props.gap.column) {
    return "\n      grid-row-gap: " + props.theme.global.edgeSize[props.gap.row] + ";\n      grid-column-gap: " + props.theme.global.edgeSize[props.gap.column] + ";\n    ";
  }

  if (props.gap.row) {
    return "\n      grid-row-gap: " + props.theme.global.edgeSize[props.gap.row] + ";\n    ";
  }

  if (props.gap.column) {
    return "\n      grid-column-gap: " + props.theme.global.edgeSize[props.gap.column] + ";\n    ";
  }

  return '';
};

var SIZE_MAP$1 = {
  flex: '1fr',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var getRepeatCount = function getRepeatCount(count) {
  return typeof count === 'number' ? count : "auto-" + count;
};

var getRepeatSize = function getRepeatSize(size, theme) {
  return "minmax(" + (theme.global.size[size] || size) + ", 1fr)";
};

var sizeFor = function sizeFor(size, props, isRow) {
  var mapped = SIZE_MAP$1[size];

  if (isRow && mapped && (!props.fillContainer || props.fillContainer === 'horizontal')) {
    console.warn('Grid needs `fill` when using fractional row sizes');
  }

  return mapped || props.theme.global.size[size] || size;
};

var columnsStyle = function columnsStyle(props) {
  if (Array.isArray(props.columns)) {
    return styled.css(["grid-template-columns:", ";"], props.columns.map(function (s) {
      if (Array.isArray(s)) {
        return "minmax(" + sizeFor(s[0], props) + ", " + sizeFor(s[1], props) + ")";
      }

      return sizeFor(s, props);
    }).join(' '));
  }

  if (typeof props.columns === 'object') {
    return styled.css(["grid-template-columns:repeat( ", ",", " );"], getRepeatCount(props.columns.count), getRepeatSize(props.columns.size, props.theme));
  }

  return styled.css(["grid-template-columns:repeat( auto-fill,", " );"], getRepeatSize(props.columns, props.theme));
};

var rowsStyle = function rowsStyle(props) {
  if (Array.isArray(props.rowsProp)) {
    return styled.css(["grid-template-rows:", ";"], props.rowsProp.map(function (s) {
      if (Array.isArray(s)) {
        return "minmax(" + sizeFor(s[0], props, true) + ", " + sizeFor(s[1], props, true) + ")";
      }

      return sizeFor(s, props, true);
    }).join(' '));
  }

  return styled.css(["grid-auto-rows:", ";"], props.theme.global.size[props.rowsProp]);
};

var areasStyle = function areasStyle(props) {
  // translate areas objects into grid-template-areas syntax
  if (!Array.isArray(props.rowsProp) || !Array.isArray(props.columns)) {
    console.warn('Grid `areas` requires `rows` and `columns` to be arrays.');
  }

  var cells = props.rowsProp.map(function () {
    return props.columns.map(function () {
      return '.';
    });
  });
  props.areas.forEach(function (area) {
    for (var row = area.start[1]; row <= area.end[1]; row += 1) {
      for (var column = area.start[0]; column <= area.end[0]; column += 1) {
        cells[row][column] = area.name;
      }
    }
  });
  return "grid-template-areas: " + cells.map(function (r) {
    return "\"" + r.join(' ') + "\"";
  }).join(' ') + ";";
};

var StyledGrid = styled__default.div.withConfig({
  displayName: "StyledGrid",
  componentId: "sc-1wofa1l-0"
})(["display:grid;box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return props.fillContainer && fillStyle$3(props.fillContainer);
}, function (props) {
  return props.align && alignStyle$1;
}, function (props) {
  return props.alignContent && alignContentStyle$1;
}, function (props) {
  return props.areas && areasStyle(props);
}, function (props) {
  return props.columns && columnsStyle(props);
}, function (props) {
  return props.gap && gapStyle$1(props);
}, function (props) {
  return props.justify && justifyStyle$1;
}, function (props) {
  return props.justifyContent && justifyContentStyle;
}, function (props) {
  return props.rowsProp && rowsStyle(props);
}, function (props) {
  return props.theme.grid && props.theme.grid.extend;
});
StyledGrid.defaultProps = {};
Object.setPrototypeOf(StyledGrid.defaultProps, defaultProps$2);

function _extends$V() { _extends$V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$V.apply(this, arguments); }

function _objectWithoutPropertiesLoose$y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Grid = function Grid(props) {
  var fill = props.fill,
      rows = props.rows,
      tag = props.tag,
      as = props.as,
      rest = _objectWithoutPropertiesLoose$y(props, ["fill", "rows", "tag", "as"]);

  return React__default.createElement(StyledGrid, _extends$V({
    as: !as && tag ? tag : as,
    fillContainer: fill,
    rowsProp: rows
  }, rest));
};

var GridDoc;

{
  GridDoc = require('./doc').doc(Grid); // eslint-disable-line global-require
}

var GridWrapper = GridDoc || Grid;
GridWrapper.available = typeof window !== 'undefined' && window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');

var mobileDetect = createCommonjsModule(function (module) {
// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.4.3 2018-09-08*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
define(function () {

    var impl = {};

    impl.mobileDetectRules = {
    "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
        "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "NokiaLumia": "Lumia [0-9]{3,4}",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo (3DS|Switch)",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
    },
    "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
        "GoogleTablet": "Android.*Pixel C",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F|TB2-X30L",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "NokiaLumiaTablet": "Lumia 2520",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9|TECNO DP8D",
        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "KocasoTablet": "\\b(TB-1207)\\b",
        "HisenseTablet": "\\b(F5281|E2371)\\b",
        "Hudl": "Hudl HT7S3|Hudl 2",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
    },
    "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
    },
    "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+$|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "Edge": "Mobile Safari\/[.0-9]* Edge",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "WeChat": "\\bMicroMessenger\\b",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Puffin": "Puffin",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
    },
    "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": [
            "Chrome\/[VER]",
            "CriOS\/[VER]",
            "CrMo\/[VER]"
        ],
        "Coast": [
            "Coast\/[VER]"
        ],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": [
            "Firefox\/[VER]",
            "FxiOS\/[VER]"
        ],
        "Fennec": "Fennec\/[VER]",
        "Edge": "Edge\/[VER]",
        "IE": [
            "IEMobile\/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];",
            "Trident\/[0-9.]+;.*rv:[VER]"
        ],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [
            " OPR\/[VER]",
            "Opera Mini\/[VER]",
            "Version\/[VER]"
        ],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UCBrowser": [
            "UCWEB[VER]",
            "UC.*Browser\/[VER]"
        ],
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "SamsungBrowser": "SamsungBrowser\/[VER]",
        "Iron": "Iron\/[VER]",
        "Safari": [
            "Version\/[VER]",
            "Safari\/[VER]"
        ],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "PaleMoon": "PaleMoon\/[VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "Goanna": "Goanna\/[VER]",
        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
        "Android": "Android [VER]",
        "BlackBerry": [
            "BlackBerry[\\w]+\/[VER]",
            "BlackBerry.*Version\/[VER]",
            "Version\/[VER]"
        ],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": [
            "Windows Phone OS [VER]",
            "Windows Phone [VER]"
        ],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": [
            "SymbianOS\/[VER]",
            "Symbian\/[VER]"
        ],
        "webOS": [
            "webOS\/[VER]",
            "hpwOS\/[VER];"
        ]
    },
    "utils": {
        "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
    }
};

    // following patterns come from http://detectmobilebrowsers.com/
    impl.detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
    };

    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;

    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';

    isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

    function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function containsIC(array, value) {
        var valueLC, i, len = array.length;
        if (!len || !value) {
            return false;
        }
        valueLC = value.toLowerCase();
        for (i = 0; i < len; ++i) {
            if (valueLC === array[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function convertPropsToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }

    function prepareUserAgent(userAgent) {
        return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
    }

    (function init() {
        var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);

        // copy some patterns to oss0 which are tested first (see issue#15)
        mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
        };
    }());

    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    impl.findMatch = function(rules, userAgent) {
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    };

    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */
    impl.findMatches = function(rules, userAgent) {
        var result = [];
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    result.push(key);
                }
            }
        }
        return result;
    };

    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    impl.getVersionStr = function (propertyName, userAgent) {
        var props = impl.mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    };

    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    impl.getVersion = function (propertyName, userAgent) {
        var version = impl.getVersionStr(propertyName, userAgent);
        return version ? impl.prepareVersionNo(version) : NaN;
    };

    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    impl.prepareVersionNo = function (version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    };

    impl.isMobileFallback = function (userAgent) {
        return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
            impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
    };

    impl.isTabletFallback = function (userAgent) {
        return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };

    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
            return;
        }
        var phone, tablet, phoneSized;

        // first check for stronger tablet rules, then phone (see issue#5)
        tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
        if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
        }

        phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
        if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
        }

        // our rules haven't found a match -> try more general fallback rules
        if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined) {
                cache.mobile = impl.FALLBACK_MOBILE;
                cache.tablet = cache.phone = null;
            } else if (phoneSized) {
                cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                cache.tablet = null;
            } else {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            }
        } else if (impl.isTabletFallback(userAgent)) {
            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
            cache.phone = null;
        } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
        }
    };

    // t is a reference to a MobileDetect instance
    impl.mobileGrade = function (t) {
        // impl note:
        // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
        // When changes are made in Mobile_Detect.php, copy this method and replace:
        //     $this-> / t.
        //     self::MOBILE_GRADE_(.) / '$1'
        //     , self::VERSION_TYPE_FLOAT / (nothing)
        //     isIOS() / os('iOS')
        //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
        var $isMobile = t.mobile() !== null;

        if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad')>=4.3 ||
            t.os('iOS') && t.version('iPhone')>=3.1 ||
            t.os('iOS') && t.version('iPod')>=3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            ( t.version('Android')>2.1 && t.is('Webkit') ) ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS')>=7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            ( t.is('Firefox') && t.version('Firefox')>=12 ) ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada')>=2.0 ||

            // UC Browser - Tested on Android 2.3 device
            ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            ( t.match('Kindle Fire') ||
                t.is('Kindle') && t.version('Kindle')>=3.0 ) ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome')>=11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari')>=5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox')>=4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE')>=7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera')>=10 && !$isMobile

            ){
            return 'A';
        }

        if (
            t.os('iOS') && t.version('iPad')<4.3 ||
            t.os('iOS') && t.version('iPhone')<3.1 ||
            t.os('iOS') && t.version('iPod')<3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
                (t.version('Android')>=2.3 || t.is('iOS')) ) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi')>=11 && t.is('SymbianOS')
            ){
            return 'B';
        }

        if (
        // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry')<5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2

            ){
            return 'C';
        }

        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
        //will receive the basic, C grade experience.
        return 'C';
    };

    impl.detectOS = function (ua) {
        return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
            impl.findMatch(impl.mobileDetectRules.oss, ua);
    };

    impl.getDeviceSmallerSide = function () {
        return window.screen.width < window.screen.height ?
            window.screen.width :
            window.screen.height;
    };

    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = prepareUserAgent(userAgent);
        this._cache = {};
        //600dp is typical 7" tablet minimum width
        this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
        constructor: MobileDetect,

        /**
         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
         * <br>
         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
         * <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
         * @function MobileDetect#mobile
         */
        mobile: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
        },

        /**
         * Returns the detected phone type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
         * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
         * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
         * @function MobileDetect#phone
         */
        phone: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
        },

        /**
         * Returns the detected tablet type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
         * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
         * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
         * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
         * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
         * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
         * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
         * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
         * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
         * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
         * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
         * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
         * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
         * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
         * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
         * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
         * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
         * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
         * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
         * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
         * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
         * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
         * GenericTablet</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
         * @function MobileDetect#tablet
         */
        tablet: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
        },

        /**
         * Returns the (first) detected user-agent string or <tt>null</tt>.
         * <br>
         * The returned user-agent is one of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin,
         * Mercury, ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {String} the key for the detected user-agent or <tt>null</tt>
         * @function MobileDetect#userAgent
         */
        userAgent: function () {
            if (this._cache.userAgent === undefined) {
                this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
        },

        /**
         * Returns all detected user-agent strings.
         * <br>
         * The array is empty or contains one or more of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin,
         * Mercury, ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
         * @function MobileDetect#userAgents
         */
        userAgents: function () {
            if (this._cache.userAgents === undefined) {
                this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgents;
        },

        /**
         * Returns the detected operating system string or <tt>null</tt>.
         * <br>
         * The operating system is one of following keys:<br>
         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
         * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
         *
         * @returns {String} the key for the detected operating system.
         * @function MobileDetect#os
         */
        os: function () {
            if (this._cache.os === undefined) {
                this._cache.os = impl.detectOS(this.ua);
            }
            return this._cache.os;
        },

        /**
         * Get the version (as Number) of the given property in the User-Agent.
         * <br>
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
         *          Be careful when comparing this value with '==' operator!
         * @function MobileDetect#version
         */
        version: function (key) {
            return impl.getVersion(key, this.ua);
        },

        /**
         * Get the version (as String) of the given property in the User-Agent.
         * <br>
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
         *
         * @function MobileDetect#versionStr
         */
        versionStr: function (key) {
            return impl.getVersionStr(key, this.ua);
        },

        /**
         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
         *
         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
         *        tablet family.<br>
         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
         *        Additionally you have following keys:<br>
         * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
         *
         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
         * @function MobileDetect#is
         */
        is: function (key) {
            return containsIC(this.userAgents(), key) ||
                   equalIC(key, this.os()) ||
                   equalIC(key, this.phone()) ||
                   equalIC(key, this.tablet()) ||
                   containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
        },

        /**
         * Do a quick test against navigator::userAgent.
         *
         * @param {String|RegExp} pattern the pattern, either as String or RegExp
         *                        (a string will be converted to a case-insensitive RegExp).
         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
         * @function MobileDetect#match
         */
        match: function (pattern) {
            if (!(pattern instanceof RegExp)) {
                pattern = new RegExp(pattern, 'i');
            }
            return pattern.test(this.ua);
        },

        /**
         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
         * <br>
         * Obviously this method makes sense in browser environments only (not for Node.js)!
         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
         *          Will always return <code>undefined</code> server-side.
         */
        isPhoneSized: function (maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },

        /**
         * Returns the mobile grade ('A', 'B', 'C').
         *
         * @returns {String} one of the mobile grades ('A', 'B', 'C').
         * @function MobileDetect#mobileGrade
         */
        mobileGrade: function () {
            if (this._cache.grade === undefined) {
                this._cache.grade = impl.mobileGrade(this);
            }
            return this._cache.grade;
        }
    };

    // environment-dependent
    if (typeof window !== 'undefined' && window.screen) {
        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
        };
    } else {
        MobileDetect.isPhoneSized = function () {};
    }

    // should not be replaced by a completely new object - just overwrite existing methods
    MobileDetect._impl = impl;
    
    MobileDetect.version = '1.4.3 2018-09-08';

    return MobileDetect;
}); // end of call of define()
})((function (undefined) {
    if (module.exports) {
        return function (factory) { module.exports = factory(); };
    } else if (typeof undefined === 'function' && undefined.amd) {
        return undefined;
    } else if (typeof window !== 'undefined') {
        return function (factory) { window.MobileDetect = factory(); };
    } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
    }
})());
});

var fullStyle = styled.css(["width:100vw;height:100vh;overflow:auto;"]);
var StyledGrommet = styled__default.div.withConfig({
  displayName: "StyledGrommet",
  componentId: "sc-19lkkz7-0"
})(["", " ", " ", " ", ""], function (props) {
  return !props.plain && baseStyle;
}, function (props) {
  return props.full && fullStyle;
}, function (props) {
  return props.theme.global.font.face;
}, function (props) {
  return props.theme.grommet.extend;
});
StyledGrommet.defaultProps = {};
Object.setPrototypeOf(StyledGrommet.defaultProps, defaultProps$2);

function _extends$W() { _extends$W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$W.apply(this, arguments); }

function _objectWithoutPropertiesLoose$z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$v(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$o(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$r(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose$2(["\n  body { margin: 0; }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose$2(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var wrapWithHocs$1 = withDocs('Grommet');
var FullGlobalStyle = styled.createGlobalStyle(_templateObject$1());

var GrommetImpl =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$v(GrommetImpl, _Component);

  function GrommetImpl() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$r(_assertThisInitialized$o(_assertThisInitialized$o(_this)), "state", {});

    _defineProperty$r(_assertThisInitialized$o(_assertThisInitialized$o(_this)), "onResize", function () {
      var _this$state = _this.state,
          theme = _this$state.theme,
          responsive = _this$state.responsive;
      var breakpoint = getBreakpoint(window.innerWidth, theme);

      if (breakpoint !== responsive) {
        _this.setState({
          responsive: breakpoint
        });
      }
    });

    return _this;
  }

  GrommetImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var _nextProps$theme = nextProps.theme,
        theme = _nextProps$theme === void 0 ? {} : _nextProps$theme;
    var stateTheme = prevState.theme,
        themeProp = prevState.themeProp;
    var nextTheme = deepMerge(base$1, theme);

    if (!stateTheme || theme !== themeProp) {
      if (typeof theme.dark === 'undefined') {
        // calculate if background is dark or not
        // otherwise respect the property passed in the theme
        var colors = nextTheme.global.colors;
        var color = colors.background;
        nextTheme.dark = color ? colorIsDark$1(color) : false;
      }

      return {
        theme: nextTheme,
        themeProp: theme
      };
    }

    return null;
  };

  var _proto = GrommetImpl.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  _proto.deviceResponsive = function deviceResponsive() {
    var userAgent = this.props.userAgent;
    var theme = this.state.theme;

    if (userAgent) {
      var md = new mobileDetect(userAgent);

      if (md.phone()) {
        return getDeviceBreakpoint('phone', theme);
      }

      if (md.tablet()) {
        return getDeviceBreakpoint('tablet', theme);
      }

      return getDeviceBreakpoint('computer', theme);
    }

    return undefined;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        full = _this$props.full,
        rest = _objectWithoutPropertiesLoose$z(_this$props, ["children", "full"]);

    delete rest.theme;
    var _this$state2 = this.state,
        theme = _this$state2.theme,
        stateResponsive = _this$state2.responsive; // Value from state should be correct once we resize
    // On first render we try to guess otherwise set the default as a tablet

    var responsive = stateResponsive || this.deviceResponsive() || theme.global.deviceBreakpoints.tablet;
    return React__default.createElement(styled.ThemeContext.Provider, {
      value: theme
    }, React__default.createElement(ResponsiveContext.Provider, {
      value: responsive
    }, React__default.createElement(StyledGrommet, _extends$W({
      full: full
    }, rest), children), full && React__default.createElement(FullGlobalStyle, null)));
  };

  return GrommetImpl;
}(React.Component);

_defineProperty$r(GrommetImpl, "displayName", 'Grommet');

var Grommet = wrapWithHocs$1(GrommetImpl);

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle = styled.css(["flex:1 1;overflow:hidden;object-fit:", ";"], function (props) {
  return FIT_MAP[props.fit];
});
var StyledImage = styled__default.img.withConfig({
  displayName: "StyledImage",
  componentId: "ey4zx9-0"
})(["", " ", " ", ""], genericStyles, function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.theme.image && props.theme.image.extend;
});
StyledImage.defaultProps = {};
Object.setPrototypeOf(StyledImage.defaultProps, defaultProps$2);

var ImageDoc;

{
  ImageDoc = require('./doc').doc(StyledImage); // eslint-disable-line global-require
}

var ImageWrapper = ImageDoc || StyledImage;
ImageWrapper.displayName = 'Image';

var hiddenPositionStyle = styled.css(["left:-100%;right:100%;z-index:-1;position:fixed;"]);
var desktopLayerStyle = "\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  width: 100vw;\n  height: 100vh;\n";
var responsiveLayerStyle = "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n";
var StyledLayer = styled__default.div.withConfig({
  displayName: "StyledLayer",
  componentId: "rmtehz-0"
})(["", " background:unset;position:relative;z-index:", ";pointer-events:none;outline:none;", " ", ";"], baseStyle, function (props) {
  return props.theme.layer.zIndex;
}, function (props) {
  if (props.position === 'hidden') {
    return hiddenPositionStyle;
  }

  var styles = [desktopLayerStyle];

  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];
    styles.push(breakpointStyle(breakpoint, responsiveLayerStyle));
  }

  return styles;
}, function (props) {
  return props.theme.layer && props.theme.layer.extend;
});
StyledLayer.defaultProps = {};
Object.setPrototypeOf(StyledLayer.defaultProps, defaultProps$2);
var StyledOverlay = styled__default.div.withConfig({
  displayName: "StyledLayer__StyledOverlay",
  componentId: "rmtehz-1"
})(["position:absolute;", " top:0px;left:0px;right:0px;bottom:0px;", " pointer-events:all;"], function (props) {
  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];
    return breakpointStyle(breakpoint, 'position: relative;');
  }

  return '';
}, function (props) {
  return !props.plain && props.theme.layer.overlay.background && backgroundStyle(props.theme.layer.overlay.background, props.theme);
});

var getMargin = function getMargin(margin, theme, position) {
  var axis = position.includes('top') || position.includes('bottom') ? 'vertical' : 'horizontal';
  var marginValue = margin[position] || margin[axis] || margin;
  var marginApplied = theme.global.edgeSize[marginValue] || marginValue;
  var marginInTheme = !!theme.global.edgeSize[marginValue];
  return !marginInTheme && typeof marginValue !== 'string' ? '0px' : marginApplied;
};

var MARGINS = function MARGINS(margin, theme, position) {
  if (position === void 0) {
    position = undefined;
  }

  if (position) {
    return getMargin(margin, theme, position);
  }

  return {
    bottom: getMargin(margin, theme, 'bottom'),
    'bottom-left': getMargin(margin, theme, 'bottom-left'),
    'bottom-right': getMargin(margin, theme, 'bottom-right'),
    left: getMargin(margin, theme, 'left'),
    right: getMargin(margin, theme, 'right'),
    top: getMargin(margin, theme, 'top'),
    'top-right': getMargin(margin, theme, 'top-right'),
    'top-left': getMargin(margin, theme, 'top-left')
  };
};

var KEYFRAMES = {
  center: {
    vertical: styled.keyframes(["0%{transform:translateX(-50%) scale(0.8);}100%{transform:translateX(-50%) scale(1);}"]),
    horizontal: styled.keyframes(["0%{transform:translateY(-50%) scale(0.8);}100%{transform:translateY(-50) scale(1);}"]),
    true: styled.keyframes(["0%{transform:scale(0.8);}100%{transform:scale(1);}"]),
    false: styled.keyframes(["0%{transform:translate(-50%,-50%) scale(0.8);}100%{transform:translate(-50%,-50%) scale(1);}"])
  },
  top: {
    vertical: styled.keyframes(["0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}"]),
    horizontal: styled.keyframes(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),
    true: styled.keyframes(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),
    false: styled.keyframes(["0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}"])
  },
  bottom: {
    vertical: styled.keyframes(["0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}"]),
    horizontal: styled.keyframes(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),
    true: styled.keyframes(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),
    false: styled.keyframes(["0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}"])
  },
  left: {
    vertical: styled.keyframes(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),
    horizontal: styled.keyframes(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"]),
    true: styled.keyframes(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),
    false: styled.keyframes(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"])
  },
  right: {
    vertical: styled.keyframes(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),
    horizontal: styled.keyframes(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"]),
    true: styled.keyframes(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),
    false: styled.keyframes(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"])
  }
};

var getAnimationStyle = function getAnimationStyle(animate, position, full) {
  if (animate === void 0) {
    animate = true;
  }

  var defaultAnimation = styled.css(["animation:", " 0.2s ease-in-out forwards"], KEYFRAMES[position][full]);
  return animate ? defaultAnimation : '';
}; // POSITIONS combines 'position', 'full', and 'margin' properties, since
// they are all interdependent.
// Basically, non-full axes combine 50% position with -50% translation.
// full axes pin to the window edges offset by any margin.
// The keyframe animations are included as they are done via translations
// as well so they must take into account the non-animated positioning.


var POSITIONS = {
  center: {
    vertical: function vertical(margin) {
      return styled.css(["top:", ";bottom:", ";left:50%;transform:translateX(-50%);", ""], margin.top, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'center', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";top:50%;transform:translateY(-50%);", ""], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'center', 'horizontal');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'center', 'true');
      });
    },
    false: function _false() {
      return styled.css(["top:50%;left:50%;transform:translate(-50%,-50%);", ""], function (props) {
        return getAnimationStyle(props.animate, 'center', 'false');
      });
    }
  },
  top: {
    vertical: function vertical(margin) {
      return styled.css(["top:", ";bottom:", ";left:50%;transform:translate(-50%,0%);", ""], margin.top, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'top', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";top:", ";transform:translateY(0);", ""], margin.left, margin.right, margin.top, function (props) {
        return getAnimationStyle(props.animate, 'top', 'horizontal');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";transform:translateY(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    false: function _false(margin) {
      return styled.css(["top:", ";left:50%;transform:translate(-50%,0);", ""], margin.top, function (props) {
        return getAnimationStyle(props.animate, 'top', 'false');
      });
    }
  },
  bottom: {
    vertical: function vertical(margin) {
      return styled.css(["top:", " bottom:", ";left:50%;transform:translate(-50%,0);", ""], margin.top, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";bottom:", ";transform:translateY(0);", ""], margin.left, margin.top, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'horizontal');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";transform:translateY(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    false: function _false(margin) {
      return styled.css(["bottom:", ";left:50%;transform:translate(-50%,0);", ""], margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'false');
      });
    }
  },
  left: {
    vertical: function vertical(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'left', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";top:50%;transform:translate(0,-50%);", ""], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'left', 'horizontal');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'left', 'true');
      });
    },
    false: function _false(margin) {
      return styled.css(["left:", ";top:50%;transform:translate(0,-50%);", ""], margin.left, function (props) {
        return getAnimationStyle(props.animate, 'left', 'false');
      });
    }
  },
  right: {
    vertical: function vertical(margin) {
      return styled.css(["top:", ";bottom:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'right', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";top:50%;transform:translate(0,-50%);", ""], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'right', 'horizontal');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'right', 'true');
      });
    },
    false: function _false(margin) {
      return styled.css(["right:", ";top:50%;transform:translate(0,-50%);", ""], margin.right, function (props) {
        return getAnimationStyle(props.animate, 'right', 'false');
      });
    }
  },
  'top-right': {
    vertical: function vertical(margin) {
      return styled.css(["top:", ";bottom:", ";right:", ";transform:translateX(0);", ";"], margin.top, margin.bottom, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";top:0;transform:translateX(0);", ";"], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ";"], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    false: function _false(margin) {
      return styled.css(["top:", ";right:", ";transform:translateY(0);", ";"], margin.top, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    }
  },
  'top-left': {
    vertical: function vertical(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";top:0;transform:translateX(0);", ""], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    false: function _false(margin) {
      return styled.css(["top:", ";left:", ";transform:translateY(0);", ""], margin.top, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    }
  },
  'bottom-right': {
    vertical: function vertical(margin) {
      return styled.css(["top:", ";bottom:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";bottom:", ";transform:translateY(0);", ""], margin.left, margin.right, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    false: function _false(margin) {
      return styled.css(["bottom:", ";right:", ";transform:translateY(0);", ""], margin.bottom, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    }
  },
  'bottom-left': {
    vertical: function vertical(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(margin) {
      return styled.css(["left:", ";right:", ";bottom:", ";transform:translateY(0);", ""], margin.left, margin.right, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    true: function _true(margin) {
      return styled.css(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    false: function _false(margin) {
      return styled.css(["bottom:", ";left:", ";transform:translateY(0);", ""], margin.bottom, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    }
  }
};
var desktopContainerStyle = styled.css(["position:", ";max-height:", ";max-width:", ";border-radius:", ";", ";"], function (props) {
  return props.modal ? 'absolute' : 'fixed';
}, function (props) {
  return "calc(100% - " + MARGINS(props.margin, props.theme, 'top') + " - " + MARGINS(props.margin, props.theme, 'bottom') + ")";
}, function (props) {
  return "calc(100% - " + MARGINS(props.margin, props.theme, 'left') + " - " + MARGINS(props.margin, props.theme, 'right') + ")";
}, function (props) {
  return props.plain ? 0 : props.theme.layer.border.radius;
}, function (props) {
  return props.position !== 'hidden' && POSITIONS[props.position][props.full](MARGINS(props.margin, props.theme)) || '';
});
var responsiveContainerStyle = styled.css(["position:relative;max-height:none;max-width:none;border-radius:0;top:0;bottom:0;left:0;right:0;transform:none;animation:none;height:100vh;width:100vw;"]);
var StyledContainer = styled__default.div.withConfig({
  displayName: "StyledLayer__StyledContainer",
  componentId: "rmtehz-2"
})(["", " display:flex;flex-direction:column;min-height:", ";", " outline:none;pointer-events:all;z-index:", ";", " ", ";"], function (props) {
  return !props.modal ? baseStyle : '';
}, function (props) {
  return props.theme.global.size.xxsmall;
}, function (props) {
  return !props.plain && props.theme.layer.background && backgroundStyle(props.theme.layer.background, props.theme);
}, function (props) {
  return props.theme.layer.container.zIndex;
}, desktopContainerStyle, function (props) {
  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];

    if (breakpoint) {
      return breakpointStyle(breakpoint, responsiveContainerStyle);
    }
  }

  return '';
});
StyledContainer.defaultProps = {};
Object.setPrototypeOf(StyledContainer.defaultProps, defaultProps$2);

function _extends$X() { _extends$X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$X.apply(this, arguments); }

function _objectWithoutPropertiesLoose$A(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$w(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$p(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$s(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var HiddenAnchor = styled__default.a.withConfig({
  displayName: "LayerContainer__HiddenAnchor",
  componentId: "sc-1srj14c-0"
})(["width:0;height:0;overflow:hidden;position:absolute;"]);

var LayerContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$w(LayerContainer, _Component);

  function LayerContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$s(_assertThisInitialized$p(_assertThisInitialized$p(_this)), "anchorRef", React.createRef());

    _defineProperty$s(_assertThisInitialized$p(_assertThisInitialized$p(_this)), "containerRef", React__default.createRef());

    _defineProperty$s(_assertThisInitialized$p(_assertThisInitialized$p(_this)), "layerRef", React__default.createRef());

    _defineProperty$s(_assertThisInitialized$p(_assertThisInitialized$p(_this)), "makeLayerVisible", function () {
      var node = _this.layerRef.current || _this.containerRef.current;

      if (node && node.scrollIntoView) {
        node.scrollIntoView();
      }
    });

    return _this;
  }

  var _proto = LayerContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var position = this.props.position;

    if (position !== 'hidden') {
      this.makeLayerVisible(); // once layer is open we set the focus in the hidden
      // anchor so that you can start tabbing inside the layer

      if (this.anchorRef.current) {
        this.anchorRef.current.focus();
      }
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var position = this.props.position;

    if (prevProps.position !== position && position !== 'hidden') {
      this.makeLayerVisible();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        modal = _this$props.modal,
        onClickOutside = _this$props.onClickOutside,
        onEsc = _this$props.onEsc,
        plain = _this$props.plain,
        position = _this$props.position,
        responsive = _this$props.responsive,
        propsTheme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$A(_this$props, ["children", "id", "modal", "onClickOutside", "onEsc", "plain", "position", "responsive", "theme"]);

    var theme = this.context || propsTheme;
    var content = React__default.createElement(StyledContainer, _extends$X({
      id: id
    }, rest, {
      position: position,
      plain: plain,
      responsive: responsive,
      ref: this.containerRef
    }), React__default.createElement(HiddenAnchor, {
      ref: this.anchorRef,
      tabIndex: "-1",
      "aria-hidden": "true"
    }), children);

    if (modal) {
      content = React__default.createElement(StyledLayer, {
        id: id,
        plain: plain,
        position: position,
        responsive: responsive,
        tabIndex: "-1",
        ref: this.layerRef
      }, React__default.createElement(StyledOverlay, {
        plain: plain,
        onMouseDown: onClickOutside,
        responsive: responsive
      }), content);
      /* eslint-enable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
    }

    if (onEsc) {
      content = React__default.createElement(KeyboardWrapper, {
        onEsc: onEsc
      }, content);
    }

    if (theme.layer.background) {
      var dark = backgroundIsDark(theme.layer.background, theme);

      if (dark !== theme.dark) {
        content = React__default.createElement(styled.ThemeContext.Provider, {
          value: _extends$X({}, theme, {
            dark: dark
          })
        }, content);
      }
    }

    if (modal) {
      content = React__default.createElement(FocusedContainer, {
        hidden: position === 'hidden',
        restrictScroll: true
      }, content);
    }

    return content;
  };

  return LayerContainer;
}(React.Component);

_defineProperty$s(LayerContainer, "contextType", styled.ThemeContext);

_defineProperty$s(LayerContainer, "defaultProps", {
  full: false,
  margin: 'none',
  modal: true,
  position: 'center'
});

Object.setPrototypeOf(LayerContainer.defaultProps, defaultProps$2);

function _inheritsLoose$x(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$q(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$t(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Layer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$x(Layer, _Component);

  function Layer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$t(_assertThisInitialized$q(_assertThisInitialized$q(_this)), "originalFocusedElement", document.activeElement);

    _defineProperty$t(_assertThisInitialized$q(_assertThisInitialized$q(_this)), "layerContainer", getNewContainer());

    return _this;
  }

  var _proto = Layer.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    if (this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        // wait for the fixed positioning to come back to normal
        // see layer styling for reference
        setTimeout(function () {
          _this2.originalFocusedElement.focus();
        }, 0);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this.originalFocusedElement.parentNode.focus();
      }
    }

    document.body.removeChild(this.layerContainer);
  };

  _proto.render = function render() {
    return reactDom.createPortal(React__default.createElement(LayerContainer, this.props), this.layerContainer);
  };

  return Layer;
}(React.Component);

_defineProperty$t(Layer, "defaultProps", {
  full: false,
  margin: 'none',
  modal: true,
  position: 'center',
  responsive: true
});

var LayerDoc;

{
  LayerDoc = require('./doc').doc(Layer); // eslint-disable-line global-require
}

var LayerWrapper = LayerDoc || Layer;

var reg = /[\'\"]/;

var unquote = function unquote(str) {
  if (!str) {
    return ''
  }
  if (reg.test(str.charAt(0))) {
    str = str.substr(1);
  }
  if (reg.test(str.charAt(str.length - 1))) {
    str = str.substr(0, str.length - 1);
  }
  return str
};

var _extends$Y=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_typeof$2=typeof Symbol=='function'&&typeof Symbol.iterator=='symbol'?function(a){return typeof a}:function(a){return a&&typeof Symbol=='function'&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};function _objectWithoutProperties$2(a,b){var c={};for(var d in a)b.indexOf(d)>=0||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}var ATTRIBUTE_TO_JSX_PROP_MAP={accesskey:'accessKey',allowfullscreen:'allowFullScreen',allowtransparency:'allowTransparency',autocomplete:'autoComplete',autofocus:'autoFocus',autoplay:'autoPlay',cellpadding:'cellPadding',cellspacing:'cellSpacing',charset:'charSet',class:'className',classid:'classId',colspan:'colSpan',contenteditable:'contentEditable',contextmenu:'contextMenu',crossorigin:'crossOrigin',enctype:'encType',for:'htmlFor',formaction:'formAction',formenctype:'formEncType',formmethod:'formMethod',formnovalidate:'formNoValidate',formtarget:'formTarget',frameborder:'frameBorder',hreflang:'hrefLang',inputmode:'inputMode',keyparams:'keyParams',keytype:'keyType',marginheight:'marginHeight',marginwidth:'marginWidth',maxlength:'maxLength',mediagroup:'mediaGroup',minlength:'minLength',novalidate:'noValidate',radiogroup:'radioGroup',readonly:'readOnly',rowspan:'rowSpan',spellcheck:'spellCheck',srcdoc:'srcDoc',srclang:'srcLang',srcset:'srcSet',tabindex:'tabIndex',usemap:'useMap'},namedCodesToUnicode={amp:'&',apos:'\'',gt:'>',lt:'<',nbsp:'\xA0',quot:'\u201C'},DO_NOT_PROCESS_HTML_ELEMENTS=['style','script'],ATTR_EXTRACTOR_R=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,AUTOLINK_MAILTO_CHECK_R=/mailto:/i,BLOCK_END_R=/\n{2,}$/,BLOCKQUOTE_R=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,BLOCKQUOTE_TRIM_LEFT_MULTILINE_R=/^ *> ?/gm,BREAK_LINE_R=/^ {2,}\n/,BREAK_THEMATIC_R=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,CODE_BLOCK_FENCED_R=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,CODE_BLOCK_R=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,CODE_INLINE_R=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,CONSECUTIVE_NEWLINE_R=/^(?:\n *)*\n/,CR_NEWLINE_R=/\r\n?/g,FOOTNOTE_R=/^\[\^(.*)\](:.*)\n/,FOOTNOTE_REFERENCE_R=/^\[\^(.*)\]/,FORMFEED_R=/\f/g,GFM_TASK_R=/^\s*?\[(x|\s)\]/,HEADING_R=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,HEADING_SETEXT_R=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,HTML_BLOCK_ELEMENT_R=/^ *<([A-Za-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/,HTML_CHAR_CODE_R=/&([a-z]+);/g,HTML_COMMENT_R=/^<!--.*?-->/,HTML_CUSTOM_ATTR_R=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,HTML_SELF_CLOSING_ELEMENT_R=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,INTERPOLATION_R=/^\{.*\}$/,LINK_AUTOLINK_BARE_URL_R=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,LINK_AUTOLINK_MAILTO_R=/^<([^ >]+@[^ >]+)>/,LINK_AUTOLINK_R=/^<([^ >]+:\/[^ >]+)>/,LIST_ITEM_END_R=/ *\n+$/,LIST_LOOKBEHIND_R=/(?:^|\n)( *)$/,CAPTURE_LETTER_AFTER_HYPHEN=/-([a-z])?/gi,NP_TABLE_R=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,PARAGRAPH_R=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,REFERENCE_IMAGE_OR_LINK=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,REFERENCE_IMAGE_R=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,REFERENCE_LINK_R=/^\[([^\]]*)\] ?\[([^\]]*)\]/,SQUARE_BRACKETS_R=/(\[|\])/g,SHOULD_RENDER_AS_BLOCK_R=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,TAB_R=/\t/g,TABLE_TRIM_PIPES=/(^ *\||\| *$)/g,TABLE_CENTER_ALIGN=/^ *:-+: *$/,TABLE_LEFT_ALIGN=/^ *:-+ *$/,TABLE_RIGHT_ALIGN=/^ *-+: *$/,TABLE_ROW_SPLIT=/ *\| */,TEXT_BOLD_R=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,TEXT_EMPHASIZED_R=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,TEXT_STRIKETHROUGHED_R=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,TEXT_ESCAPED_R=/^\\([^0-9A-Za-z\s])/,TEXT_PLAIN_R=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,TRIM_NEWLINES_AND_TRAILING_WHITESPACE_R=/(^\n+|(\n|\s)+$)/g,HTML_LEFT_TRIM_AMOUNT_R=/^([ \t]*)/,UNESCAPE_URL_R=/\\([^0-9A-Z\s])/gi,LIST_ITEM_PREFIX_R=/^( *)((?:[*+-]|\d+\.)) +/,LIST_ITEM_R=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,LIST_R=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,LINK_R=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,IMAGE_R=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,BLOCK_SYNTAXES=[BLOCKQUOTE_R,CODE_BLOCK_R,CODE_BLOCK_FENCED_R,HEADING_R,HEADING_SETEXT_R,HTML_BLOCK_ELEMENT_R,HTML_COMMENT_R,HTML_SELF_CLOSING_ELEMENT_R,LIST_ITEM_R,LIST_R,NP_TABLE_R,PARAGRAPH_R];function containsBlockSyntax(a){return BLOCK_SYNTAXES.some(function(b){return b.test(a)})}function slugify(a){return a.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,'a').replace(/[çÇ]/g,'c').replace(/[ðÐ]/g,'d').replace(/[ÈÉÊËéèêë]/g,'e').replace(/[ÏïÎîÍíÌì]/g,'i').replace(/[Ññ]/g,'n').replace(/[øØœŒÕõÔôÓóÒò]/g,'o').replace(/[ÜüÛûÚúÙù]/g,'u').replace(/[ŸÿÝý]/g,'y').replace(/[^a-z0-9- ]/gi,'').replace(/ /gi,'-').toLowerCase()}function parseTableAlignCapture(a){if(TABLE_RIGHT_ALIGN.test(a))return 'right';return TABLE_CENTER_ALIGN.test(a)?'center':TABLE_LEFT_ALIGN.test(a)?'left':null}function parseTableHeader(a,b,c){var d=a[1].replace(TABLE_TRIM_PIPES,'').trim().split(TABLE_ROW_SPLIT);return d.map(function(a){return b(a,c)})}function parseTableAlign(a){var b=a[2].replace(TABLE_TRIM_PIPES,'').trim().split(TABLE_ROW_SPLIT);return b.map(parseTableAlignCapture)}function parseTableCells(a,b,c){var d=a[3].replace(TABLE_TRIM_PIPES,'').trim().split('\n');return d.map(function(a){return a.replace(TABLE_TRIM_PIPES,'').split(TABLE_ROW_SPLIT).map(function(a){return b(a.trim(),c)})})}function parseTable(a,b,c){c.inline=!0;var d=parseTableHeader(a,b,c),e=parseTableAlign(a,b,c),f=parseTableCells(a,b,c);return c.inline=!1,{align:e,cells:f,header:d,type:'table'}}function getTableStyle(a,b){return a.align[b]==null?{}:{textAlign:a.align[b]}}function normalizeAttributeKey(a){var b=a.indexOf('-');return b!==-1&&a.match(HTML_CUSTOM_ATTR_R)===null&&(a=a.replace(CAPTURE_LETTER_AFTER_HYPHEN,function(a,b){return b.toUpperCase()})),a}function attributeValueToJSXPropValue(a,b){return a==='style'?b.split(/;\s?/).reduce(function(a,b){var c=b.slice(0,b.indexOf(':')),d=c.replace(/(-[a-z])/g,function(a){return a[1].toUpperCase()});return a[d]=b.slice(c.length+1).trim(),a},{}):(b.match(INTERPOLATION_R)&&(b=b.slice(1,b.length-1)),b==='true'||b!=='false'&&b)}function normalizeWhitespace(a){return a.replace(CR_NEWLINE_R,'\n').replace(FORMFEED_R,'').replace(TAB_R,'    ')}function parserFor(a){function b(d,e){for(var f=[],g='';d;)for(var l=0;l<c.length;){var h=c[l],j=a[h],k=j.match(d,e,g);if(k){var i=k[0];d=d.substring(i.length);var m=j.parse(k,b,e);m.type==null&&(m.type=h),f.push(m),g=i;break}l++;}return f}var c=Object.keys(a);return c.forEach(function(b){var c=a[b].order;typeof c=='number'&&isFinite(c)||console.warn('markdown-to-jsx: Invalid order for rule `'+b+'`: '+c);}),c.sort(function(b,c){var d=a[b].order,e=a[c].order;return d===e?b<c?-1:1:d-e}),function(a,c){return b(normalizeWhitespace(a),c)}}function inlineRegex(a){return function(b,c){return c.inline?a.exec(b):null}}function simpleInlineRegex(a){return function(b,c){return c.inline||c.simple?a.exec(b):null}}function blockRegex(a){return function(b,c){return c.inline||c.simple?null:a.exec(b)}}function anyScopeRegex(a){return function(b){return a.exec(b)}}function reactFor(a){return function b(c,d){if(d=d||{},Array.isArray(c)){for(var e=d.key,f=[],g=!1,h=0;h<c.length;h++){d.key=h;var j=b(c[h],d),k=typeof j=='string';k&&g?f[f.length-1]+=j:f.push(j),g=k;}return d.key=e,f}return a(c,b,d)}}function sanitizeUrl(a){try{var b=decodeURIComponent(a);if(b.match(/^\s*javascript:/i))return console.warn('Anchor URL contains an unsafe JavaScript expression, it will not be rendered.',b),null}catch(b){return console.warn('Anchor URL could not be decoded due to malformed syntax or characters, it will not be rendered.',a),null}return a}function unescapeUrl(a){return a.replace(UNESCAPE_URL_R,'$1')}function parseInline(a,b,c){var d=c.inline||!1,e=c.simple||!1;c.inline=!0,c.simple=!0;var f=a(b,c);return c.inline=d,c.simple=e,f}function parseSimpleInline(a,b,c){var d=c.inline||!1,e=c.simple||!1;c.inline=!1,c.simple=!0;var f=a(b,c);return c.inline=d,c.simple=e,f}function parseBlock(a,b,c){return c.inline=!1,a(b+'\n\n',c)}function parseCaptureInline(a,b,c){return {content:parseInline(b,a[1],c)}}function captureNothing(){return {}}function renderNothing$1(){return null}function ruleOutput(a){return function(b,c,d){return a[b.type].react(b,c,d)}}function cx(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.filter(Boolean).join(' ')}function get(a,b,c){for(var d=a,e=b.split('.');e.length&&(d=d[e[0]],d!==void 0);)e.shift();return d||c}function getTag(a,b){var c=get(b,a);return c?typeof c=='function'||(typeof c=='undefined'?'undefined':_typeof$2(c))==='object'&&'render'in c?c:get(b,a+'.component',a):a}var PARSE_PRIORITY_MAX=1,PARSE_PRIORITY_HIGH=2,PARSE_PRIORITY_MED=3,PARSE_PRIORITY_LOW=4,PARSE_PRIORITY_MIN=5;function compiler(a,b){function d(a,c){for(var d=get(b.overrides,a+'.props',{}),e=arguments.length,g=Array(e>2?e-2:0),h=2;h<e;h++)g[h-2]=arguments[h];return f.apply(void 0,[getTag(a,b.overrides),_extends$Y({},d,c,{className:cx(c&&c.className,d.className)||void 0})].concat(g))}function c(a){var c=!1;b.forceInline?c=!0:!b.forceBlock&&(c=SHOULD_RENDER_AS_BLOCK_R.test(a)===!1);var e=k(j(c?a:a.replace(TRIM_NEWLINES_AND_TRAILING_WHITESPACE_R,'')+'\n\n',{inline:c})),f=void 0;return e.length>1?f=c?d('span',null,e):d('div',null,e):e.length===1?(f=e[0],typeof f=='string'&&(f=d('span',null,f))):f=d('span',null),f}function e(a){var b=a.match(ATTR_EXTRACTOR_R);return b?b.reduce(function(a,b,d){var e=b.indexOf('=');if(e!==-1){var f=normalizeAttributeKey(b.slice(0,e)).trim(),g=unquote(b.slice(e+1).trim()),h=ATTRIBUTE_TO_JSX_PROP_MAP[f]||f,i=a[h]=attributeValueToJSXPropValue(f,g);(HTML_BLOCK_ELEMENT_R.test(i)||HTML_SELF_CLOSING_ELEMENT_R.test(i))&&(a[h]=React__default.cloneElement(c(i.trim()),{key:d}));}else a[ATTRIBUTE_TO_JSX_PROP_MAP[b]||b]=!0;return a},{}):void 0}b=b||{},b.overrides=b.overrides||{},b.slugify=b.slugify||slugify;var f=b.createElement||React__default.createElement;{if(typeof a!='string')throw new Error('markdown-to-jsx: the first argument must be\n                             a string');if(Object.prototype.toString.call(b.overrides)!=='[object Object]')throw new Error('markdown-to-jsx: options.overrides (second argument property) must be\n                             undefined or an object literal with shape:\n                             {\n                                htmltagname: {\n                                    component: string|ReactComponent(optional),\n                                    props: object(optional)\n                                }\n                             }')}var g=[],h={},i={blockQuote:{match:blockRegex(BLOCKQUOTE_R),order:PARSE_PRIORITY_HIGH,parse:function d(a,b,c){return {content:b(a[0].replace(BLOCKQUOTE_TRIM_LEFT_MULTILINE_R,''),c)}},react:function e(a,b,c){return d('blockquote',{key:c.key},b(a.content,c))}},breakLine:{match:anyScopeRegex(BREAK_LINE_R),order:PARSE_PRIORITY_HIGH,parse:captureNothing,react:function e(a,b,c){return d('br',{key:c.key})}},breakThematic:{match:blockRegex(BREAK_THEMATIC_R),order:PARSE_PRIORITY_HIGH,parse:captureNothing,react:function e(a,b,c){return d('hr',{key:c.key})}},codeBlock:{match:blockRegex(CODE_BLOCK_R),order:PARSE_PRIORITY_MAX,parse:function c(a){var b=a[0].replace(/^ {4}/gm,'').replace(/\n+$/,'');return {content:b,lang:void 0}},react:function e(a,b,c){return d('pre',{key:c.key},d('code',{className:a.lang?'lang-'+a.lang:''},a.content))}},codeFenced:{match:blockRegex(CODE_BLOCK_FENCED_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return {content:a[3],lang:a[2]||void 0,type:'codeBlock'}}},codeInline:{match:simpleInlineRegex(CODE_INLINE_R),order:PARSE_PRIORITY_LOW,parse:function b(a){return {content:a[2]}},react:function e(a,b,c){return d('code',{key:c.key},a.content)}},footnote:{match:blockRegex(FOOTNOTE_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return g.push({footnote:a[2],identifier:a[1]}),{}},react:renderNothing$1},footnoteReference:{match:inlineRegex(FOOTNOTE_REFERENCE_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return {content:a[1],target:'#'+a[1]}},react:function e(a,b,c){return d('a',{key:c.key,href:sanitizeUrl(a.target)},d('sup',{key:c.key},a.content))}},gfmTask:{match:inlineRegex(GFM_TASK_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return {completed:a[1].toLowerCase()==='x'}},react:function e(a,b,c){return d('input',{checked:a.completed,key:c.key,readOnly:!0,type:'checkbox'})}},heading:{match:blockRegex(HEADING_R),order:PARSE_PRIORITY_HIGH,parse:function e(a,c,d){return {content:parseInline(c,a[2],d),id:b.slugify(a[2]),level:a[1].length}},react:function f(a,b,c){var e='h'+a.level;return d(e,{id:a.id,key:c.key},b(a.content,c))}},headingSetext:{match:blockRegex(HEADING_SETEXT_R),order:PARSE_PRIORITY_MAX,parse:function d(a,b,c){return {content:parseInline(b,a[1],c),level:a[2]==='='?1:2,type:'heading'}}},htmlBlock:{match:anyScopeRegex(HTML_BLOCK_ELEMENT_R),order:PARSE_PRIORITY_HIGH,parse:function k(a,b,c){var d=a[3].match(HTML_LEFT_TRIM_AMOUNT_R),f=d[1],g=new RegExp('^'+f,'gm'),h=a[3].replace(g,''),i=containsBlockSyntax(h)?parseBlock:parseInline,j=DO_NOT_PROCESS_HTML_ELEMENTS.indexOf(a[1])!==-1;return {attrs:e(a[2]),content:j?a[3]:i(b,h,c),noInnerParse:j,tag:a[1]}},react:function e(a,b,c){return d(a.tag,_extends$Y({key:c.key},a.attrs),a.noInnerParse?a.content:b(a.content,c))}},htmlComment:{match:anyScopeRegex(HTML_COMMENT_R),order:PARSE_PRIORITY_HIGH,parse:function a(){return {}},react:renderNothing$1},htmlSelfClosing:{match:anyScopeRegex(HTML_SELF_CLOSING_ELEMENT_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return {attrs:e(a[2]||''),tag:a[1]}},react:function e(a,b,c){return d(a.tag,_extends$Y({},a.attrs,{key:c.key}))}},image:{match:simpleInlineRegex(IMAGE_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return {alt:a[1],target:unescapeUrl(a[2]),title:a[3]}},react:function e(a,b,c){return d('img',{key:c.key,alt:a.alt||void 0,title:a.title||void 0,src:sanitizeUrl(a.target)})}},link:{match:inlineRegex(LINK_R,!1),order:PARSE_PRIORITY_LOW,parse:function d(a,b,c){return {content:parseSimpleInline(b,a[1],c),target:unescapeUrl(a[2]),title:a[3]}},react:function e(a,b,c){return d('a',{key:c.key,href:sanitizeUrl(a.target),title:a.title},b(a.content,c))}},linkAngleBraceStyleDetector:{match:inlineRegex(LINK_AUTOLINK_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return {content:[{content:a[1],type:'text'}],target:a[1],type:'link'}}},linkBareUrlDetector:{match:inlineRegex(LINK_AUTOLINK_BARE_URL_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return {content:[{content:a[1],type:'text'}],target:a[1],title:void 0,type:'link'}}},linkMailtoDetector:{match:inlineRegex(LINK_AUTOLINK_MAILTO_R),order:PARSE_PRIORITY_MAX,parse:function d(a){var b=a[1],c=a[1];return AUTOLINK_MAILTO_CHECK_R.test(c)||(c='mailto:'+c),{content:[{content:b.replace('mailto:',''),type:'text'}],target:c,type:'link'}}},list:{match:function f(a,b,c){var d=LIST_LOOKBEHIND_R.exec(c),e=b._list||!b.inline;return d&&e?(a=d[1]+a,LIST_R.exec(a)):null},order:PARSE_PRIORITY_HIGH,parse:function j(a,b,c){var d=a[2],e=d.length>1,f=e?+d:void 0,g=a[0].replace(BLOCK_END_R,'\n').match(LIST_ITEM_R),h=!1,i=g.map(function(a,d){var e=LIST_ITEM_PREFIX_R.exec(a)[0].length,f=new RegExp('^ {1,'+e+'}','gm'),i=a.replace(f,'').replace(LIST_ITEM_PREFIX_R,''),j=d===g.length-1,k=i.indexOf('\n\n')!==-1,l=k||j&&h;h=l;var m=c.inline,n=c._list;c._list=!0;var o;l?(c.inline=!1,o=i.replace(LIST_ITEM_END_R,'\n\n')):(c.inline=!0,o=i.replace(LIST_ITEM_END_R,''));var p=b(o,c);return c.inline=m,c._list=n,p});return {items:i,ordered:e,start:f}},react:function f(a,b,c){var e=a.ordered?'ol':'ul';return d(e,{key:c.key,start:a.start},a.items.map(function(a,e){return d('li',{key:e},b(a,c))}))}},newlineCoalescer:{match:blockRegex(CONSECUTIVE_NEWLINE_R),order:PARSE_PRIORITY_LOW,parse:captureNothing,react:function a(){return '\n'}},paragraph:{match:blockRegex(PARAGRAPH_R),order:PARSE_PRIORITY_LOW,parse:parseCaptureInline,react:function e(a,b,c){return d('p',{key:c.key},b(a.content,c))}},ref:{match:inlineRegex(REFERENCE_IMAGE_OR_LINK),order:PARSE_PRIORITY_MAX,parse:function b(a){return h[a[1]]={target:a[2],title:a[4]},{}},react:renderNothing$1},refImage:{match:simpleInlineRegex(REFERENCE_IMAGE_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return {alt:a[1]||void 0,ref:a[2]}},react:function e(a,b,c){return d('img',{key:c.key,alt:a.alt,src:sanitizeUrl(h[a.ref].target),title:h[a.ref].title})}},refLink:{match:inlineRegex(REFERENCE_LINK_R),order:PARSE_PRIORITY_MAX,parse:function d(a,b,c){return {content:b(a[1],c),fallbackContent:b(a[0].replace(SQUARE_BRACKETS_R,'\\$1'),c),ref:a[2]}},react:function e(a,b,c){return h[a.ref]?d('a',{key:c.key,href:sanitizeUrl(h[a.ref].target),title:h[a.ref].title},b(a.content,c)):d('span',null,b(a.fallbackContent,c))}},table:{match:blockRegex(NP_TABLE_R),order:PARSE_PRIORITY_HIGH,parse:parseTable,react:function f(a,b,e){return d('table',{key:e.key},d('thead',null,d('tr',null,a.header.map(function(c,f){return d('th',{key:f,style:getTableStyle(a,f)},b(c,e))}))),d('tbody',null,a.cells.map(function(c,f){return d('tr',{key:f},c.map(function(f,g){return d('td',{key:g,style:getTableStyle(a,g)},b(f,e))}))})))}},text:{match:anyScopeRegex(TEXT_PLAIN_R),order:PARSE_PRIORITY_MIN,parse:function b(a){return {content:a[0].replace(HTML_CHAR_CODE_R,function(a,b){return namedCodesToUnicode[b]?namedCodesToUnicode[b]:a})}},react:function b(a){return a.content}},textBolded:{match:simpleInlineRegex(TEXT_BOLD_R),order:PARSE_PRIORITY_MED,parse:function d(a,b,c){return {content:b(a[2],c)}},react:function e(a,b,c){return d('strong',{key:c.key},b(a.content,c))}},textEmphasized:{match:simpleInlineRegex(TEXT_EMPHASIZED_R),order:PARSE_PRIORITY_LOW,parse:function d(a,b,c){return {content:b(a[2],c)}},react:function e(a,b,c){return d('em',{key:c.key},b(a.content,c))}},textEscaped:{match:simpleInlineRegex(TEXT_ESCAPED_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return {content:a[1],type:'text'}}},textStrikethroughed:{match:simpleInlineRegex(TEXT_STRIKETHROUGHED_R),order:PARSE_PRIORITY_LOW,parse:parseCaptureInline,react:function e(a,b,c){return d('del',{key:c.key},b(a.content,c))}}},j=parserFor(i),k=reactFor(ruleOutput(i)),l=c(a);return g.length&&l.props.children.push(d('footer',null,g.map(function(a){return d('div',{id:a.identifier,key:a.identifier},a.identifier,k(j(a.footnote,{inline:!0})))}))),l}function Markdown(a){var b=a.children,c=a.options,d=_objectWithoutProperties$2(a,['children','options']);return React__default.cloneElement(compiler(b,c),d)}{var PropTypes=require('prop-types');Markdown.propTypes={children:PropTypes.string.isRequired,options:PropTypes.object};}

var colorStyle$3 = styled.css(["color:", ";"], function (props) {
  return normalizeColor(props.colorProp, props.theme);
});

var sizeStyle$8 = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.paragraph[size];
  return styled.css(["font-size:", ";line-height:", ";max-width:", ";"], data.size, data.height, data.maxWidth);
};

var TEXT_ALIGN_MAP$2 = {
  center: 'center',
  end: 'right',
  start: 'left'
};
var textAlignStyle$2 = styled.css(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP$2[props.textAlign];
});
var StyledParagraph = styled__default.p.withConfig({
  displayName: "StyledParagraph",
  componentId: "tbetod-0"
})(["", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return sizeStyle$8(props);
}, function (props) {
  return props.textAlign && textAlignStyle$2;
}, function (props) {
  return props.colorProp && colorStyle$3;
}, function (props) {
  return props.theme.paragraph && props.theme.paragraph.extend;
});
StyledParagraph.defaultProps = {};
Object.setPrototypeOf(StyledParagraph.defaultProps, defaultProps$2);

function _extends$Z() { _extends$Z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Z.apply(this, arguments); }

function _objectWithoutPropertiesLoose$B(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Paragraph = function Paragraph(_ref) {
  var color = _ref.color,
      rest = _objectWithoutPropertiesLoose$B(_ref, ["color"]);

  return React__default.createElement(StyledParagraph, _extends$Z({
    colorProp: color
  }, rest));
};

var ParagraphDoc;

{
  ParagraphDoc = require('./doc').doc(Paragraph); // eslint-disable-line global-require
}

var ParagraphWrapper = ParagraphDoc || Paragraph;

function _objectWithoutPropertiesLoose$C(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Table = function Table(_ref) {
  var caption = _ref.caption,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose$C(_ref, ["caption", "children"]);

  return React__default.createElement(StyledTable, rest, caption ? React__default.createElement(StyledTableDataCaption, null, caption) : null, children);
};

var TableDoc;

{
  TableDoc = require('./doc').doc(Table); // eslint-disable-line global-require
}

var TableWrapper = TableDoc || Table;

var TableBody = function TableBody(props) {
  return React__default.createElement(TableContext.Provider, {
    value: "body"
  }, React__default.createElement(StyledTableBody, props));
};

var TableBodyDoc;

{
  TableBodyDoc = require('./doc').doc(TableBody); // eslint-disable-line global-require
}

var TableBodyWrapper = TableBodyDoc || TableBody;

function _extends$_() { _extends$_ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$_.apply(this, arguments); }

function _objectWithoutPropertiesLoose$D(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$y(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var GrommetMarkdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$y(GrommetMarkdown, _Component);

  function GrommetMarkdown() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = GrommetMarkdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        components = _this$props.components,
        options = _this$props.options,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$D(_this$props, ["components", "options", "theme"]);

    var heading = [1, 2, 3, 4].reduce(function (obj, level) {
      var result = _extends$_({}, obj);

      result["h" + level] = {
        component: HeadingWrapper,
        props: {
          level: level
        }
      };
      return result;
    }, {});
    var overrides = deepMerge({
      a: {
        component: AnchorWrapper
      },
      img: {
        component: ImageWrapper
      },
      p: {
        component: ParagraphWrapper
      },
      table: {
        component: TableWrapper
      },
      td: {
        component: TableCellWrapper
      },
      tbody: {
        component: TableBodyWrapper
      },
      tfoot: {
        component: TableFooterWrapper
      },
      th: {
        component: TableCellWrapper
      },
      thead: {
        component: TableHeaderWrapper
      },
      tr: {
        component: TableRowWrapper
      }
    }, heading, components, options && options.overrides);
    return React__default.createElement(Markdown, _extends$_({
      options: _extends$_({}, options, {
        overrides: overrides
      })
    }, rest));
  };

  return GrommetMarkdown;
}(React.Component);

var GrommetMarkdownDoc;

{
  GrommetMarkdownDoc = require('./doc').doc(GrommetMarkdown); // eslint-disable-line global-require
}

var sizeStyle$9 = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return styled.css(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var plainStyle$2 = styled.css(["border:none;"]);
var StyledMaskedInput = styled__default.input.withConfig({
  displayName: "StyledMaskedInput",
  componentId: "sc-99vkfa-0"
})(["", " width:100%;", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", ";"], inputStyle, function (props) {
  return props.size && sizeStyle$9(props);
}, function (props) {
  return props.plain && plainStyle$2;
}, placeholderStyle, function (props) {
  return props.focus && !props.plain && focusStyle;
}, function (props) {
  return props.theme.MaskedInput && props.theme.MaskedInput.extend;
});
var StyledMaskedInputContainer = styled__default.div.withConfig({
  displayName: "StyledMaskedInput__StyledMaskedInputContainer",
  componentId: "sc-99vkfa-1"
})(["position:relative;width:100%;"]);

function _objectWithoutPropertiesLoose$E(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$10() { _extends$10 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$10.apply(this, arguments); }

function _inheritsLoose$z(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$r(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$u(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var parseValue = function parseValue(mask, value) {
  // break the value up into mask parts
  var valueParts = []; // { part, beginIndex, endIndex }

  var valueIndex = 0;
  var maskIndex = 0;

  while (value !== undefined && valueIndex < value.length && maskIndex < mask.length) {
    var item = mask[maskIndex];
    var found = void 0;

    if (item.fixed) {
      var length = item.fixed.length;
      valueParts.push({
        part: item.fixed,
        beginIndex: valueIndex,
        endIndex: valueIndex + length - 1
      });
      var part = value.slice(valueIndex, valueIndex + length);

      if (part === item.fixed) {
        valueIndex += length;
      }

      maskIndex += 1;
      found = true;
    } else if (item.options) {
      // reverse assuming larger is later
      found = item.options.slice(0).reverse() // eslint-disable-next-line no-loop-func
      .some(function (option) {
        var length = option.length;
        var part = value.slice(valueIndex, valueIndex + length);

        if (part === option) {
          valueParts.push({
            part: part,
            beginIndex: valueIndex,
            endIndex: valueIndex + length - 1
          });
          valueIndex += length;
          maskIndex += 1;
          return true;
        }

        return false;
      });
    }

    if (!found) {
      if (item.regexp) {
        var minLength = Array.isArray(item.length) && item.length[0] || item.length || 1;
        var maxLength = Array.isArray(item.length) && item.length[1] || item.length || value.length - valueIndex;
        var _length = maxLength;

        while (!found && _length >= minLength) {
          var _part = value.slice(valueIndex, valueIndex + _length);

          if (item.regexp.test(_part)) {
            valueParts.push({
              part: _part,
              beginIndex: valueIndex,
              endIndex: valueIndex + _length - 1
            });
            valueIndex += _length;
            maskIndex += 1;
            found = true;
          }

          _length -= 1;
        }

        if (!found) {
          valueIndex = value.length;
        }
      } else {
        var _length2 = Array.isArray(item.length) ? item.length[1] : item.length || value.length - valueIndex;

        var _part2 = value.slice(valueIndex, valueIndex + _length2);

        valueParts.push({
          part: _part2,
          beginIndex: valueIndex,
          endIndex: valueIndex + _length2 - 1
        });
        valueIndex += _length2;
        maskIndex += 1;
      }
    }
  }

  return valueParts;
};

var MaskedInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$z(MaskedInput, _Component);

  function MaskedInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "state", {});

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "inputRef", React__default.createRef());

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "dropRef", React__default.createRef());

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "locateCaret", function () {
      // leave time for caret to be placed after receiving focus
      clearTimeout(_this.caretTimeout);
      _this.caretTimeout = setTimeout(function () {
        var mask = _this.props.mask;
        var _this$state = _this.state,
            activeMaskIndex = _this$state.activeMaskIndex,
            valueParts = _this$state.valueParts;

        if (_this.inputRef.current) {
          // determine which mask element the caret is at
          var caretIndex = _this.inputRef.current.selectionStart;
          var maskIndex;
          valueParts.some(function (part, index) {
            if (part.beginIndex <= caretIndex && part.endIndex >= caretIndex) {
              maskIndex = index;
              return true;
            }

            return false;
          });

          if (maskIndex === undefined && valueParts.length < mask.length) {
            maskIndex = valueParts.length; // first unused one
          }

          if (maskIndex && mask[maskIndex].fixed) {
            maskIndex -= 1; // fixed mask parts are never "active"
          }

          if (activeMaskIndex !== maskIndex) {
            // eslint-disable-next-line react/no-did-update-set-state
            _this.setState({
              activeMaskIndex: maskIndex,
              activeOptionIndex: -1
            });
          }
        }
      }, 10); // 10ms empirically chosen
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "onFocus", function (event) {
      var onFocus = _this.props.onFocus;

      _this.locateCaret();

      _this.setState({
        focused: true
      });

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "onBlur", function () {
      // delay so we don't remove the drop before Button events can be processed
      clearTimeout(_this.blurTimeout);
      _this.blurTimeout = setTimeout(function () {
        if (!_this.dropRef.current || !_this.dropRef.current.contains || !_this.dropRef.current.contains(document.activeElement)) {
          _this.setState({
            activeMaskIndex: undefined,
            focused: false
          });
        }
      }, 10); // 10ms empirically chosen
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "onChange", function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          mask = _this$props.mask;
      var value = event.target.value; // Align with the mask.

      var valueParts = parseValue(mask, value);
      var nextValue = valueParts.map(function (part) {
        return part.part;
      }).join('');

      if (onChange) {
        onChange({
          target: _extends$10({}, event.target, {
            value: nextValue
          })
        });
      }
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "onOption", function (option) {
      return function () {
        var _this$props2 = _this.props,
            onChange = _this$props2.onChange,
            mask = _this$props2.mask;
        var _this$state2 = _this.state,
            activeMaskIndex = _this$state2.activeMaskIndex,
            valueParts = _this$state2.valueParts;
        var nextValueParts = [].concat(valueParts);
        nextValueParts[activeMaskIndex] = {
          part: option
        }; // add any fixed parts that follow

        var index = activeMaskIndex + 1;

        while (index < mask.length && !nextValueParts[index] && mask[index].fixed) {
          nextValueParts[index] = {
            part: mask[index].fixed
          };
          index += 1;
        }

        var nextValue = nextValueParts.map(function (part) {
          return part.part;
        }).join(''); // restore focus to input

        _this.inputRef.current.focus();

        if (onChange) {
          onChange({
            target: {
              value: nextValue
            }
          });
        }
      };
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "onNextOption", function (event) {
      var mask = _this.props.mask;
      var _this$state3 = _this.state,
          activeMaskIndex = _this$state3.activeMaskIndex,
          activeOptionIndex = _this$state3.activeOptionIndex;
      var item = mask[activeMaskIndex];

      if (item && item.options) {
        event.preventDefault();
        var index = Math.min(activeOptionIndex + 1, item.options.length - 1);

        _this.setState({
          activeOptionIndex: index
        });
      }
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "onPreviousOption", function (event) {
      var mask = _this.props.mask;
      var _this$state4 = _this.state,
          activeMaskIndex = _this$state4.activeMaskIndex,
          activeOptionIndex = _this$state4.activeOptionIndex;

      if (activeMaskIndex >= 0 && mask[activeMaskIndex].options) {
        event.preventDefault();
        var index = Math.max(activeOptionIndex - 1, 0);

        _this.setState({
          activeOptionIndex: index
        });
      }
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "onSelectOption", function (event) {
      var mask = _this.props.mask;
      var _this$state5 = _this.state,
          activeMaskIndex = _this$state5.activeMaskIndex,
          activeOptionIndex = _this$state5.activeOptionIndex;

      if (activeMaskIndex >= 0 && activeOptionIndex >= 0) {
        event.preventDefault();
        var option = mask[activeMaskIndex].options[activeOptionIndex];

        _this.onOption(option)();
      }
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "onEsc", function (event) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      _this.inputRef.current.blur();
    });

    _defineProperty$u(_assertThisInitialized$r(_assertThisInitialized$r(_this)), "renderPlaceholder", function () {
      var mask = _this.props.mask;
      return mask.map(function (item) {
        return item.placeholder || item.fixed;
      }).join('');
    });

    return _this;
  }

  MaskedInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var mask = nextProps.mask,
        value = nextProps.value;
    var priorMask = prevState.priorMask,
        priorValue = prevState.priorValue;

    if (priorMask !== mask || priorValue !== value) {
      var valueParts = parseValue(mask, value);
      return {
        priorMask: mask,
        priorValue: value,
        valueParts: valueParts
      };
    }

    return null;
  };

  var _proto = MaskedInput.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var focused = this.state.focused;

    if (focused) {
      this.locateCaret();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.caretTimeout);
    clearTimeout(this.blurTimeout);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        defaultValue = _this$props3.defaultValue,
        forwardRef = _this$props3.forwardRef,
        id = _this$props3.id,
        placeholder = _this$props3.placeholder,
        plain = _this$props3.plain,
        mask = _this$props3.mask,
        value = _this$props3.value,
        onChange = _this$props3.onChange,
        onKeyDown = _this$props3.onKeyDown,
        propsTheme = _this$props3.theme,
        rest = _objectWithoutPropertiesLoose$E(_this$props3, ["defaultValue", "forwardRef", "id", "placeholder", "plain", "mask", "value", "onChange", "onKeyDown", "theme"]);

    var theme = this.context || propsTheme;
    var _this$state6 = this.state,
        activeMaskIndex = _this$state6.activeMaskIndex,
        activeOptionIndex = _this$state6.activeOptionIndex;
    return React__default.createElement(StyledMaskedInputContainer, {
      plain: plain
    }, React__default.createElement(KeyboardWrapper, {
      onEsc: this.onEsc,
      onTab: this.onTab,
      onLeft: this.locateCaret,
      onRight: this.locateCaret,
      onUp: this.onPreviousOption,
      onDown: this.onNextOption,
      onEnter: this.onSelectOption,
      onKeyDown: onKeyDown
    }, React__default.createElement(StyledMaskedInput, _extends$10({
      id: id,
      ref: function ref(node) {
        _this2.inputRef.current = node;

        if (forwardRef) {
          if (typeof forwardRef === 'object') {
            forwardRef.current = node;
          } else {
            forwardRef(node);
          }
        }
      },
      autoComplete: "off",
      plain: plain,
      placeholder: placeholder || this.renderPlaceholder()
    }, rest, {
      defaultValue: defaultValue,
      value: value,
      theme: theme,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }))), activeMaskIndex >= 0 && mask[activeMaskIndex].options && React__default.createElement(DropWrapper, {
      id: id ? "masked-input-drop__" + id : undefined,
      align: {
        top: 'bottom',
        left: 'left'
      },
      responsive: false,
      target: this.inputRef.current
    }, React__default.createElement(Box, {
      ref: this.dropRef
    }, mask[activeMaskIndex].options.map(function (option, index) {
      return React__default.createElement(Box, {
        key: option,
        flex: false
      }, React__default.createElement(ButtonWrapper, {
        tabIndex: "-1",
        onClick: _this2.onOption(option),
        onMouseOver: function onMouseOver() {
          return _this2.setState({
            activeOptionIndex: index
          });
        },
        onFocus: function onFocus() {}
      }, React__default.createElement(Box, {
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        background: activeOptionIndex === index ? 'active' : undefined
      }, option)));
    }))));
  };

  return MaskedInput;
}(React.Component);

_defineProperty$u(MaskedInput, "contextType", styled.ThemeContext);

_defineProperty$u(MaskedInput, "defaultProps", {
  mask: []
});

Object.setPrototypeOf(MaskedInput.defaultProps, defaultProps$2);
var MaskedInputDoc;

{
  MaskedInputDoc = require('./doc').doc(MaskedInput); // eslint-disable-line global-require
}

var MaskedInputWrapper = compose(withFocus, withForwardRef)(MaskedInputDoc || MaskedInput);

function _extends$11() { _extends$11 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$11.apply(this, arguments); }

function _objectWithoutPropertiesLoose$F(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$A(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$s(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$v(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ContainerBox$1 = styled__default(Box).withConfig({
  displayName: "Menu__ContainerBox",
  componentId: "sc-17fcys9-0"
})(["max-height:inherit;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}", ";"], function (props) {
  return props.theme.menu.extend;
});

var Menu =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$A(Menu, _Component);

  function Menu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$v(_assertThisInitialized$s(_assertThisInitialized$s(_this)), "state", {
      activeItemIndex: -1,
      open: false
    });

    _defineProperty$v(_assertThisInitialized$s(_assertThisInitialized$s(_this)), "buttonRefs", {});

    _defineProperty$v(_assertThisInitialized$s(_assertThisInitialized$s(_this)), "onDropClose", function () {
      _this.setState({
        activeItemIndex: -1,
        open: false
      });
    });

    _defineProperty$v(_assertThisInitialized$s(_assertThisInitialized$s(_this)), "onSelectMenuItem", function (event) {
      var activeItemIndex = _this.state.activeItemIndex;

      if (activeItemIndex >= 0) {
        event.preventDefault();
        event.stopPropagation();

        _this.buttonRefs[activeItemIndex].click();
      }
    });

    _defineProperty$v(_assertThisInitialized$s(_assertThisInitialized$s(_this)), "onNextMenuItem", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          activeItemIndex = _this$state.activeItemIndex,
          open = _this$state.open;

      if (!open) {
        _this.setState({
          open: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;
        var index = Math.min(activeItemIndex + 1, items.length - 1);

        _this.setState({
          activeItemIndex: index
        }); // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));

      }
    });

    _defineProperty$v(_assertThisInitialized$s(_assertThisInitialized$s(_this)), "onPreviousMenuItem", function (event) {
      event.preventDefault();
      var _this$state2 = _this.state,
          activeItemIndex = _this$state2.activeItemIndex,
          open = _this$state2.open;

      if (!open) {
        _this.setState({
          open: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;
        var index = activeItemIndex === -1 ? items.length - 1 : Math.max(activeItemIndex - 1, 0);

        _this.setState({
          activeItemIndex: index
        }); // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));

      }
    });

    return _this;
  }

  var _proto = Menu.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        disabled = _this$props.disabled,
        dropAlign = _this$props.dropAlign,
        dropBackground = _this$props.dropBackground,
        dropTarget = _this$props.dropTarget,
        forwardRef = _this$props.forwardRef,
        icon = _this$props.icon,
        items = _this$props.items,
        label = _this$props.label,
        messages = _this$props.messages,
        onKeyDown = _this$props.onKeyDown,
        size = _this$props.size,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$F(_this$props, ["children", "disabled", "dropAlign", "dropBackground", "dropTarget", "forwardRef", "icon", "items", "label", "messages", "onKeyDown", "size", "theme"]);

    var _this$state3 = this.state,
        activeItemIndex = _this$state3.activeItemIndex,
        open = _this$state3.open;
    var MenuIcon = theme.menu.icons.down;
    var iconColor = normalizeColor('control', theme);
    var content = children || React__default.createElement(Box, {
      direction: "row",
      justify: "start",
      align: "center",
      pad: "small",
      gap: label && icon !== false ? 'small' : undefined
    }, React__default.createElement(TextWrapper, {
      size: size
    }, label), icon !== false ? icon !== true && icon || React__default.createElement(MenuIcon, {
      color: iconColor,
      size: size
    }) : null);
    var controlMirror = React__default.createElement(Box, {
      flex: false
    }, React__default.createElement(ButtonWrapper, {
      a11yTitle: messages.closeMenu || 'Close Menu',
      onClick: this.onDropClose
    }, content));
    return React__default.createElement(KeyboardWrapper, {
      onEnter: this.onSelectMenuItem,
      onSpace: this.onSelectMenuItem,
      onDown: this.onNextMenuItem,
      onUp: this.onPreviousMenuItem,
      onEsc: this.onDropClose,
      onTab: this.onDropClose,
      onKeyDown: onKeyDown
    }, React__default.createElement(DropButtonWrapper, _extends$11({
      ref: forwardRef
    }, rest, {
      a11yTitle: messages.openMenu || 'Open Menu',
      disabled: disabled,
      dropAlign: dropAlign,
      dropTarget: dropTarget,
      open: open,
      onOpen: function onOpen() {
        return _this2.setState({
          open: true
        });
      },
      onClose: function onClose() {
        return _this2.setState({
          open: false
        });
      },
      dropContent: React__default.createElement(ContainerBox$1, {
        background: dropBackground || theme.menu.background
      }, dropAlign.top === 'top' ? controlMirror : undefined, React__default.createElement(Box, {
        overflow: "auto"
      }, items.map(function (item, index) {
        return (// eslint-disable-next-line react/no-array-index-key
          React__default.createElement(Box, {
            key: index,
            flex: false
          }, React__default.createElement(ButtonWrapper, {
            ref: function ref(_ref) {
              _this2.buttonRefs[index] = _ref;
            },
            active: activeItemIndex === index,
            hoverIndicator: "background",
            disabled: !item.onClick && !item.href,
            onClick: function onClick() {
              item.onClick.apply(item, arguments);

              if (item.close !== false) {
                _this2.onDropClose();
              }
            },
            href: item.href
          }, React__default.createElement(Box, {
            align: "start",
            pad: "small",
            direction: "row"
          }, item.icon, item.label)))
        );
      })), dropAlign.bottom === 'bottom' ? controlMirror : undefined)
    }), content));
  };

  return Menu;
}(React.Component);

_defineProperty$v(Menu, "defaultProps", {
  dropAlign: {
    top: 'top',
    left: 'left'
  },
  items: [],
  messages: {
    openMenu: 'Open Menu',
    closeMenu: 'Close Menu'
  }
});

Object.setPrototypeOf(Menu.defaultProps, defaultProps$2);
var MenuDoc;

{
  MenuDoc = require('./doc').doc(Menu); // eslint-disable-line global-require
}

var MenuWrapper = compose(styled.withTheme, withForwardRef)(MenuDoc || Menu);

var roundStyle$1 = styled.css(["border-radius:", ";"], function (props) {
  return props.theme.global.edgeSize[props.round.size];
}); // overflow: hidden is needed for ie11

var StyledMeter = styled__default.svg.withConfig({
  displayName: "StyledMeter",
  componentId: "nsxarx-0"
})(["max-width:100%;overflow:hidden;", " ", " path{transition:all 0.3s;}", ";"], genericStyles, function (props) {
  return props.round && roundStyle$1;
}, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});
StyledMeter.defaultProps = {};
Object.setPrototypeOf(StyledMeter.defaultProps, defaultProps$2);

var strokeProps = function strokeProps(color, theme) {
  var result = {};

  if (color) {
    if (typeof color === 'object') {
      result.stroke = normalizeColor(color.color, theme);

      if (color.opacity) {
        result.strokeOpacity = "" + (color.opacity === true ? theme.global.opacity.medium : theme.global.opacity[color.opacity]);
      }
    } else {
      result.stroke = normalizeColor(color, theme);
    }
  }

  return result;
};
var neutralExp = /^neutral-\d+/;
var defaultColor = function defaultColor(index, theme) {
  var neutralColors = Object.keys(theme.global.colors).filter(function (k) {
    return neutralExp.test(k);
  });
  return neutralColors[index % neutralColors.length];
};

function _extends$12() { _extends$12 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$12.apply(this, arguments); }

function _objectWithoutPropertiesLoose$G(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Bar = function Bar(props) {
  var background = props.background,
      max = props.max,
      round = props.round,
      size = props.size,
      theme = props.theme,
      thickness = props.thickness,
      values = props.values,
      rest = _objectWithoutPropertiesLoose$G(props, ["background", "max", "round", "size", "theme", "thickness", "values"]);

  var width = size === 'full' ? 288 : parseMetricToNum(theme.global.size[size]);
  var height = parseMetricToNum(theme.global.edgeSize[thickness] || thickness); // account for the round cap, if any

  var capOffset = round ? height / 2 : 0;
  var mid = height / 2;
  var someHighlight = (values || []).some(function (v) {
    return v.highlight;
  });
  var start = capOffset;
  var paths = (values || []).filter(function (v) {
    return v.value > 0;
  }).map(function (valueArg, index) {
    var color = valueArg.color,
        highlight = valueArg.highlight,
        label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        pathRest = _objectWithoutPropertiesLoose$G(valueArg, ["color", "highlight", "label", "onHover", "value"]);

    var key = "p-" + index;
    var delta = value * (width - 2 * capOffset) / max;
    var d = "M " + start + "," + mid + " L " + (start + delta) + "," + mid;
    var colorName = color || (index === values.length - 1 ? 'accent-1' : defaultColor(index, theme));
    var hoverProps;

    if (onHover) {
      hoverProps = {
        onMouseOver: function onMouseOver() {
          return onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(false);
        }
      };
    }

    start += delta;
    return React__default.createElement("path", _extends$12({
      key: key,
      d: d,
      fill: "none"
    }, strokeProps(someHighlight && !highlight ? background : colorName, theme), {
      strokeWidth: height,
      strokeLinecap: round ? 'round' : 'butt'
    }, hoverProps, pathRest));
  }).reverse(); // reverse so the caps looks right

  return React__default.createElement(StyledMeter, _extends$12({
    viewBox: "0 0 " + width + " " + height,
    preserveAspectRatio: "none",
    width: size === 'full' ? '100%' : width,
    height: height,
    round: round ? {
      size: thickness
    } : undefined
  }, rest), React__default.createElement("path", _extends$12({
    d: "M " + capOffset + "," + mid + " L " + (width - capOffset) + "," + mid,
    fill: "none"
  }, strokeProps(background, theme), {
    strokeWidth: height,
    strokeLinecap: round ? 'round' : 'square'
  })), paths);
};

Bar.defaultProps = {
  background: 'light-1'
};
Object.setPrototypeOf(Bar.defaultProps, defaultProps$2);
var BarWrapper = compose(styled.withTheme)(Bar);

function _extends$13() { _extends$13 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$13.apply(this, arguments); }

function _objectWithoutPropertiesLoose$H(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Circle = function Circle(props) {
  var background = props.background,
      max = props.max,
      round = props.round,
      size = props.size,
      theme = props.theme,
      thickness = props.thickness,
      values = props.values,
      rest = _objectWithoutPropertiesLoose$H(props, ["background", "max", "round", "size", "theme", "thickness", "values"]);

  var width = size === 'full' ? 288 : parseMetricToNum(theme.global.size[size]);
  var height = parseMetricToNum(theme.global.edgeSize[thickness] || thickness);
  var mid = width / 2;
  var radius = width / 2 - height / 2;
  var anglePer = 360 / max;
  var someHighlight = (values || []).some(function (v) {
    return v.highlight;
  });
  var startValue = 0;
  var startAngle = 0;
  var paths = [];
  var pathCaps = [];
  (values || []).filter(function (v) {
    return v.value > 0;
  }).forEach(function (valueArg, index) {
    var color = valueArg.color,
        highlight = valueArg.highlight,
        label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        pathRest = _objectWithoutPropertiesLoose$H(valueArg, ["color", "highlight", "label", "onHover", "value"]);

    var key = "p-" + index;
    var colorName = color || (index === values.length - 1 ? 'accent-1' : defaultColor(index, theme));
    var endAngle;

    if (startValue + value >= max) {
      endAngle = 360;
    } else {
      endAngle = Math.min(360, translateEndAngle(startAngle, anglePer, value));
    }

    var hoverProps;

    if (onHover) {
      hoverProps = {
        onMouseOver: function onMouseOver() {
          return onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(false);
        }
      };
    }

    var stroke = strokeProps(someHighlight && !highlight ? background : colorName, theme);

    if (round) {
      var d1 = arcCommands(width / 2, width / 2, radius, startAngle, endAngle);
      paths.unshift(React__default.createElement("path", _extends$13({
        key: key,
        d: d1,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "round"
      }, hoverProps, pathRest))); // To handle situations where the last values are small, redraw
      // a dot at the end. Give just a bit of angle to avoid anti-aliasing
      // leakage around the edge.

      var d2 = arcCommands(width / 2, width / 2, radius, endAngle - 0.5, endAngle);
      var pathCap = React__default.createElement("path", _extends$13({
        key: key + "-",
        d: d2,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "round"
      }, hoverProps, pathRest)); // If we are on a large enough path to not need re-drawing previous ones,
      // clear the pathCaps we've collected already.

      if (endAngle - startAngle > 2 * anglePer) {
        pathCaps = [];
      }

      pathCaps.unshift(pathCap);
    } else {
      var d = arcCommands(width / 2, width / 2, radius, startAngle, endAngle);
      paths.push(React__default.createElement("path", _extends$13({
        key: key,
        d: d,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "butt"
      }, hoverProps, pathRest)));
    }

    startValue += value;
    startAngle = endAngle;
  });
  return React__default.createElement(StyledMeter, _extends$13({
    viewBox: "0 0 " + width + " " + width,
    width: size === 'full' ? '100%' : width,
    height: size === 'full' ? '100%' : width
  }, rest), React__default.createElement("circle", _extends$13({
    cx: mid,
    cy: mid,
    r: radius
  }, strokeProps(background, theme), {
    strokeWidth: height,
    strokeLinecap: round ? 'round' : 'square',
    fill: "none"
  })), paths, pathCaps);
};

Circle.defaultProps = {};
Object.setPrototypeOf(Circle.defaultProps, defaultProps$2);
var CircleWrapper = compose(styled.withTheme)(Circle);

function _extends$14() { _extends$14 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$14.apply(this, arguments); }

function _objectWithoutPropertiesLoose$I(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$B(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$t(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$w(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deriveMax = function deriveMax(values) {
  var max = 100;

  if (values && values.length > 1) {
    max = 0;
    values.forEach(function (v) {
      max += v.value;
    });
  }

  return max;
};

var Meter =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$B(Meter, _Component);

  function Meter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$w(_assertThisInitialized$t(_assertThisInitialized$t(_this)), "state", {});

    return _this;
  }

  Meter.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var max = prevState.max;
    var nextMax = deriveMax(nextProps.values);

    if (!max || nextMax !== max) {
      return {
        max: nextMax
      };
    }

    return null;
  };

  var _proto = Meter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        type = _this$props.type,
        rest = _objectWithoutPropertiesLoose$I(_this$props, ["type"]);

    var max = this.state.max;
    var content;

    if (type === 'bar') {
      content = React__default.createElement(BarWrapper, _extends$14({
        max: max
      }, rest));
    } else if (type === 'circle') {
      content = React__default.createElement(CircleWrapper, _extends$14({
        max: max
      }, rest));
    }

    return content;
  };

  return Meter;
}(React.Component);

_defineProperty$w(Meter, "defaultProps", {
  background: {
    color: 'light-2',
    opacity: 'medium'
  },
  size: 'medium',
  thickness: 'medium',
  type: 'bar'
});

var MeterDoc;

{
  MeterDoc = require('./doc').doc(Meter); // eslint-disable-line global-require
}

var MeterWrapper = MeterDoc || Meter;

var disabledStyle$3 = "\n  opacity: 0.5;\n  cursor: default;\n";
var StyledRadioButtonContainer = styled__default.label.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonContainer",
  componentId: "g1f6ld-0"
})(["user-select:none;", " ", ":hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:", ";}", ";"], function (props) {
  return props.disabled && disabledStyle$3;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return normalizeColor(props.theme.radioButton.hover.border.color, props.theme);
}, function (props) {
  return props.theme.radioButton.extend;
});
StyledRadioButtonContainer.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonContainer.defaultProps, defaultProps$2);
var StyledRadioButtonInput = styled__default.input.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonInput",
  componentId: "g1f6ld-1"
})(["position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;margin:0;z-index:1;", ";"], function (props) {
  return !props.disabled && 'cursor: pointer;';
});
StyledRadioButtonInput.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonInput.defaultProps, defaultProps$2);
var StyledRadioButtonIcon = styled__default.svg.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonIcon",
  componentId: "g1f6ld-2"
})(["box-sizing:border-box;position:absolute;width:", ";height:", ";fill:", ";", ";"], function (props) {
  return props.theme.radioButton.icon.size || props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.icon.size || props.theme.radioButton.size;
}, function (props) {
  return normalizeColor(props.theme.radioButton.check.color || 'control', props.theme);
}, function (props) {
  return props.theme.radioButton.icon.extend;
});
StyledRadioButtonIcon.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonIcon.defaultProps, defaultProps$2);
var StyledRadioButtonBox = styled__default.div.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonBox",
  componentId: "g1f6ld-3"
})(["", ";", ";"], function (props) {
  return props.focus && focusStyle;
}, function (props) {
  return props.theme.radioButton.check.extend;
});
StyledRadioButtonBox.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonBox.defaultProps, defaultProps$2);
var StyledRadioButton = styled__default.div.withConfig({
  displayName: "StyledRadioButton",
  componentId: "g1f6ld-4"
})(["position:relative;", ";"], function (props) {
  return props.theme.radioButton && props.theme.radioButton.extend;
});
StyledRadioButton.defaultProps = {};
Object.setPrototypeOf(StyledRadioButton.defaultProps, defaultProps$2);

function _extends$15() { _extends$15 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$15.apply(this, arguments); }

function _objectWithoutPropertiesLoose$J(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$C(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var RadioButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$C(RadioButton, _Component);

  function RadioButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RadioButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        checked = _this$props.checked,
        disabled = _this$props.disabled,
        focus = _this$props.focus,
        forwardRef = _this$props.forwardRef,
        id = _this$props.id,
        label = _this$props.label,
        name = _this$props.name,
        onChange = _this$props.onChange,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$J(_this$props, ["checked", "disabled", "focus", "forwardRef", "id", "label", "name", "onChange", "theme"]);

    var normalizedLabel = typeof label === 'string' ? React__default.createElement("span", null, label) : label;
    var Icon = theme.radioButton.icons.circle;
    var borderColor = normalizeColor(theme.radioButton.border.color, theme);

    if (checked) {
      borderColor = normalizeColor(theme.radioButton.color || 'control', theme);
    }

    return React__default.createElement(StyledRadioButtonContainer, _extends$15({
      as: function as(props) {
        return React__default.createElement(Box, _extends$15({
          as: "label"
        }, props));
      },
      direction: "row",
      align: "center"
    }, removeUndefined({
      htmlFor: id,
      disabled: disabled
    }), {
      onClick: function onClick(event) {
        // prevents clicking on the label trigging the event twice
        // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
        if (event.target.type !== 'radio') {
          event.stopPropagation();
        }
      }
    }), React__default.createElement(StyledRadioButton, {
      as: Box,
      margin: {
        right: theme.radioButton.gap || 'small'
      }
    }, React__default.createElement(StyledRadioButtonInput, _extends$15({}, rest, {
      ref: forwardRef,
      type: "radio"
    }, removeUndefined({
      id: id,
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }))), React__default.createElement(StyledRadioButtonBox, {
      focus: focus,
      as: Box,
      align: "center",
      justify: "center",
      width: theme.radioButton.size,
      height: theme.radioButton.size,
      border: {
        size: theme.radioButton.border.width,
        color: borderColor
      },
      round: theme.radioButton.check.radius
    }, checked && (Icon ? React__default.createElement(Icon, {
      as: StyledRadioButtonIcon
    }) : React__default.createElement(StyledRadioButtonIcon, {
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet"
    }, React__default.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 6
    }))))), normalizedLabel);
  };

  return RadioButton;
}(React.Component);

RadioButton.defaultProps = {};
Object.setPrototypeOf(RadioButton.defaultProps, defaultProps$2);
var RadioButtonDoc;

{
  RadioButtonDoc = require('./doc').doc(RadioButton); // eslint-disable-line global-require
}

var RadioButtonWrapper = compose(withFocus, styled.withTheme, withForwardRef)(RadioButtonDoc || RadioButton);

var rangeTrackStyle = styled.css(["box-sizing:border-box;width:100%;height:", ";background:", ";"], function (props) {
  return props.theme.rangeInput.track.height;
}, function (props) {
  return normalizeColor(props.theme.rangeInput.track.color, props.theme);
});
var rangeThumbStyle = styled.css(["box-sizing:border-box;position:relative;border-radius:", ";height:", ";width:", ";overflow:visible;background:", ";-webkit-appearance:none;cursor:pointer;"], function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return normalizeColor(props.theme.rangeInput.thumb.color || 'control', props.theme);
});
var firefoxMicrosoftThumbStyle = styled.css(["", " margin-top:0px;height:", ";width:", ";"], rangeThumbStyle, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
});
var StyledRangeInput = styled__default.input.withConfig({
  displayName: "StyledRangeInput",
  componentId: "sc-15st9ck-0"
})(["box-sizing:border-box;position:relative;-webkit-appearance:none;border-color:transparent;height:", ";width:100%;padding:0px;cursor:pointer;background:transparent;&:focus{outline:none;}&::-moz-focus-inner{border:none;}&::-moz-focus-outer{border:none;}&::-webkit-slider-runnable-track{", "}&::-webkit-slider-thumb{", " margin-top:-", "px;", "}&::-moz-range-track{", "}&::-moz-range-thumb{", "}&::-ms-thumb{", "}", " &::-ms-track{", " border-color:transparent;color:transparent;}&::-ms-fill-lower{background:", ";border-color:transparent;}&::-ms-fill-upper{background:", ";border-color:transparent;}", " ", ""], function (props) {
  return props.theme.global.spacing;
}, rangeTrackStyle, rangeThumbStyle, function (props) {
  return parseMetricToNum(props.theme.global.spacing) * 0.425;
}, function (props) {
  return !props.disabled && styled.css(["&:hover{box-shadow:0px 0px 0px 2px ", ";}"], normalizeColor(props.theme.rangeInput.thumb.color || 'control', props.theme));
}, rangeTrackStyle, firefoxMicrosoftThumbStyle, firefoxMicrosoftThumbStyle, function (props) {
  return !props.disabled && styled.css(["&:hover::-moz-range-thumb{box-shadow:0px 0px 0px 2px ", ";}&:hover::-ms-thumb{box-shadow:0px 0px 0px 2px ", ";}"], normalizeColor(props.theme.rangeInput.thumb.color || 'control', props.theme), normalizeColor(props.theme.rangeInput.thumb.color || 'control', props.theme));
}, rangeTrackStyle, function (props) {
  return normalizeColor(props.theme.rangeInput.track.color, props.theme);
}, function (props) {
  return normalizeColor(props.theme.rangeInput.track.color, props.theme);
}, function (props) {
  return props.focus && focusStyle;
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.extend;
});
StyledRangeInput.defaultProps = {};
Object.setPrototypeOf(StyledRangeInput.defaultProps, defaultProps$2);

function _extends$16() { _extends$16 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$16.apply(this, arguments); }

function _objectWithoutPropertiesLoose$K(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$D(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var RangeInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$D(RangeInput, _Component);

  function RangeInput() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RangeInput.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        forwardRef = _this$props.forwardRef,
        rest = _objectWithoutPropertiesLoose$K(_this$props, ["forwardRef"]);

    return React__default.createElement(StyledRangeInput, _extends$16({}, rest, {
      ref: forwardRef,
      type: "range"
    }));
  };

  return RangeInput;
}(React.Component);

var RangeInputDoc;

{
  RangeInputDoc = require('./doc').doc(RangeInput); // eslint-disable-line global-require
}

var RangeInputWrapper = compose(withFocus, withForwardRef)(RangeInputDoc || RangeInput);

function _extends$17() { _extends$17 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$17.apply(this, arguments); }

function _objectWithoutPropertiesLoose$L(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$E(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$u(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$x(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DIRECTION_PROPS = {
  horizontal: {
    cursor: 'col-resize',
    fill: 'vertical'
  },
  vertical: {
    cursor: 'row-resize',
    fill: 'horizontal'
  }
};

var EdgeControl =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$E(EdgeControl, _Component);

  function EdgeControl() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$x(_assertThisInitialized$u(_assertThisInitialized$u(_this)), "state", {});

    return _this;
  }

  var _proto = EdgeControl.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        color = _this$props.color,
        direction = _this$props.direction,
        edge = _this$props.edge,
        forwardRef = _this$props.forwardRef,
        onDecrease = _this$props.onDecrease,
        onIncrease = _this$props.onIncrease,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$L(_this$props, ["color", "direction", "edge", "forwardRef", "onDecrease", "onIncrease", "theme"]);

    var focused = this.state.focused;
    var _DIRECTION_PROPS$dire = DIRECTION_PROPS[direction],
        cursor = _DIRECTION_PROPS$dire.cursor,
        fill = _DIRECTION_PROPS$dire.fill;
    var size = parseMetricToNum(theme.global.spacing) / 2;
    var halfSize = size / 2;
    var keyboardProps = direction === 'vertical' ? {
      onUp: onDecrease,
      onDown: onIncrease
    } : {
      onLeft: onDecrease,
      onRight: onIncrease
    };
    var boxDirection = direction === 'vertical' ? 'row' : 'column';
    return React__default.createElement(KeyboardWrapper, keyboardProps, React__default.createElement(Box, {
      direction: boxDirection,
      style: {
        flex: '0 0 1px'
      },
      overflow: "visible",
      align: "center"
    }, React__default.createElement(Box, _extends$17({
      ref: forwardRef,
      direction: boxDirection,
      justify: "center",
      align: "center",
      fill: fill,
      margin: "xsmall",
      style: {
        cursor: cursor,
        minWidth: size,
        minHeight: size,
        zIndex: 10
      },
      onFocus: function onFocus() {
        return _this2.setState({
          focused: true
        });
      },
      onBlur: function onBlur() {
        return _this2.setState({
          focused: false
        });
      }
    }, rest), React__default.createElement(Box, {
      direction: boxDirection,
      round: "small",
      focus: focused
    }, React__default.createElement("svg", {
      viewBox: "0 0 " + size + " " + size,
      width: size,
      height: size
    }, React__default.createElement("circle", {
      cx: halfSize,
      cy: halfSize,
      r: halfSize,
      fill: normalizeColor(color || 'control', theme)
    }))))));
  };

  return EdgeControl;
}(React.Component);

EdgeControl.defaultProps = {};
Object.setPrototypeOf(EdgeControl.defaultProps, defaultProps$2);
var EdgeControlWrapper = compose(withForwardRef, styled.withTheme)(EdgeControl);

function _extends$18() { _extends$18 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$18.apply(this, arguments); }

function _objectWithoutPropertiesLoose$M(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$F(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$v(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$y(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RangeSelector =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$F(RangeSelector, _Component);

  function RangeSelector() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "state", {});

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "containerRef", React__default.createRef());

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "valueForMouseCoord", function (event) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          max = _this$props.max,
          min = _this$props.min,
          step = _this$props.step;

      var rect = _this.containerRef.current.getBoundingClientRect();

      var value;

      if (direction === 'vertical') {
        var y = event.clientY - (rect.y || 0); // unit test resilience

        var scaleY = rect.height / (max - min + 1) || 1; // unit test resilience

        value = Math.floor(y / scaleY) + min;
      } else {
        var x = event.clientX - (rect.x || 0); // unit test resilience

        var scaleX = rect.width / (max - min + 1) || 1; // unit test resilience

        value = Math.floor(x / scaleX) + min;
      } // align with closest step within [min, max]


      var result = value + value % step;

      if (result < min) {
        return min;
      }

      if (result > max) {
        return max;
      }

      return result;
    });

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "onClick", function (event) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          values = _this$props2.values;
      var lastChange = _this.state.lastChange;

      var value = _this.valueForMouseCoord(event);

      if (value <= values[0] || value < values[1] && lastChange === 'lower') {
        _this.setState({
          lastChange: 'lower'
        }, function () {
          return onChange([value, values[1]]);
        });
      } else if (value >= values[1] || value > values[0] && lastChange === 'upper') {
        _this.setState({
          lastChange: 'upper'
        }, function () {
          return onChange([values[0], value]);
        });
      }
    });

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "lowerMouseDown", function () {
      _this.setState({
        changing: 'lower'
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "upperMouseDown", function () {
      _this.setState({
        changing: 'upper'
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "selectionMouseDown", function (event) {
      var moveValue = _this.valueForMouseCoord(event);

      _this.setState({
        changing: 'selection',
        moveValue: moveValue
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "mouseMove", function (event) {
      var _this$props3 = _this.props,
          max = _this$props3.max,
          min = _this$props3.min,
          onChange = _this$props3.onChange,
          values = _this$props3.values;
      var _this$state = _this.state,
          changing = _this$state.changing,
          moveValue = _this$state.moveValue;

      var value = _this.valueForMouseCoord(event);

      var nextValues;

      if (changing === 'lower' && value <= values[1] && value !== moveValue) {
        nextValues = [value, values[1]];
      } else if (changing === 'upper' && value >= values[0] && value !== moveValue) {
        nextValues = [values[0], value];
      } else if (changing === 'selection' && value !== moveValue) {
        var delta = value - moveValue;

        if (values[0] + delta >= min && values[1] + delta <= max) {
          nextValues = [values[0] + delta, values[1] + delta];
        }
      }

      if (nextValues) {
        _this.setState({
          lastChange: changing,
          moveValue: value
        }, function () {
          onChange(nextValues);
        });
      }
    });

    _defineProperty$y(_assertThisInitialized$v(_assertThisInitialized$v(_this)), "mouseUp", function () {
      _this.setState({
        changing: undefined
      });

      window.removeEventListener('mousemove', _this.mouseMove);
      window.removeEventListener('mouseup', _this.mouseMove);
    });

    return _this;
  }

  var _proto = RangeSelector.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseMove);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        color = _this$props4.color,
        direction = _this$props4.direction,
        forwardRef = _this$props4.forwardRef,
        invert = _this$props4.invert,
        max = _this$props4.max,
        messages = _this$props4.messages,
        min = _this$props4.min,
        onChange = _this$props4.onChange,
        opacity = _this$props4.opacity,
        round = _this$props4.round,
        size = _this$props4.size,
        step = _this$props4.step,
        values = _this$props4.values,
        propsTheme = _this$props4.theme,
        rest = _objectWithoutPropertiesLoose$M(_this$props4, ["color", "direction", "forwardRef", "invert", "max", "messages", "min", "onChange", "opacity", "round", "size", "step", "values", "theme"]);

    var theme = this.context || propsTheme;
    var _this$state2 = this.state,
        nextLower = _this$state2.nextLower,
        nextUpper = _this$state2.nextUpper;
    var lower = nextLower !== undefined ? nextLower : values[0];
    var upper = nextUpper !== undefined ? nextUpper : values[1]; // It needs to be true when vertical, due to how browsers manage height

    var fill = direction === 'vertical' ? true : 'vertical';
    return React__default.createElement(Box, _extends$18({
      ref: this.containerRef,
      direction: direction === 'vertical' ? 'column' : 'row',
      fill: fill
    }, rest, {
      onClick: onChange ? this.onClick : undefined
    }), React__default.createElement(Box, {
      style: {
        flex: lower - min + " 0 0"
      },
      background: invert ? // preserve existing dark, instead of using darknes of this color
      {
        color: color || 'light-4',
        opacity: opacity,
        dark: theme.dark
      } : undefined,
      fill: fill,
      round: round
    }), React__default.createElement(EdgeControlWrapper, {
      a11yTitle: messages.lower,
      tabIndex: 0,
      ref: forwardRef,
      color: color,
      direction: direction,
      edge: "lower",
      onMouseDown: onChange ? this.lowerMouseDown : undefined,
      onDecrease: onChange && lower - step >= min ? function () {
        return onChange([lower - step, upper]);
      } : undefined,
      onIncrease: onChange && lower + step <= upper ? function () {
        return onChange([lower + step, upper]);
      } : undefined
    }), React__default.createElement(Box, {
      style: {
        flex: upper - lower + 1 + " 0 0",
        cursor: direction === 'vertical' ? 'ns-resize' : 'ew-resize'
      },
      background: invert ? undefined : // preserve existing dark, instead of using darknes of this color
      {
        color: color || 'control',
        opacity: opacity,
        dark: theme.dark
      },
      fill: fill,
      round: round,
      onMouseDown: onChange ? this.selectionMouseDown : undefined
    }), React__default.createElement(EdgeControlWrapper, {
      a11yTitle: messages.upper,
      tabIndex: 0,
      color: color,
      direction: direction,
      edge: "upper",
      onMouseDown: onChange ? this.upperMouseDown : undefined,
      onDecrease: onChange && upper - step >= lower ? function () {
        return onChange([lower, upper - step]);
      } : undefined,
      onIncrease: onChange && upper + step <= max ? function () {
        return onChange([lower, upper + step]);
      } : undefined
    }), React__default.createElement(Box, {
      style: {
        flex: max - upper + " 0 0"
      },
      background: invert ? // preserve existing dark, instead of using darknes of this color
      {
        color: color || 'light-4',
        opacity: opacity,
        dark: theme.dark
      } : undefined,
      fill: fill,
      round: round
    }));
  };

  return RangeSelector;
}(React.Component);

_defineProperty$y(RangeSelector, "contextType", styled.ThemeContext);

_defineProperty$y(RangeSelector, "defaultProps", {
  direction: 'horizontal',
  max: 100,
  messages: {
    lower: 'Lower Bounds',
    upper: 'Upper Bounds'
  },
  min: 0,
  opacity: 'medium',
  size: 'medium',
  step: 1,
  values: []
});

var RangeSelectorDoc;

{
  RangeSelectorDoc = require('./doc').doc(RangeSelector); // eslint-disable-line global-require
}

var RangeSelectorWrapper = compose(withForwardRef)(RangeSelectorDoc || RangeSelector);

function _extends$19() { _extends$19 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$19.apply(this, arguments); }

function _objectWithoutPropertiesLoose$N(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$G(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty$z(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RoutedAnchor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$G(RoutedAnchor, _Component);

  function RoutedAnchor() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RoutedAnchor.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        path = _this$props.path,
        method = _this$props.method,
        rest = _objectWithoutPropertiesLoose$N(_this$props, ["path", "method"]);

    return React__default.createElement(AnchorWrapper, _extends$19({}, rest, {
      href: path,
      onClick: function onClick(event) {
        var onClick = _this.props.onClick;
        var router = _this.context.router;

        if (event) {
          var modifierKey = event.ctrlKey || event.metaKey; // if the user right-clicked in the Anchor we should let it go

          if (modifierKey) {
            return;
          }
        }

        if (router) {
          event.preventDefault();
          (router.history || router)[method](path);
        }

        if (onClick) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          onClick.apply(void 0, [event].concat(args));
        }
      }
    }));
  };

  return RoutedAnchor;
}(React.Component);

_defineProperty$z(RoutedAnchor, "contextTypes", {
  router: propTypes.shape({}).isRequired
});

_defineProperty$z(RoutedAnchor, "defaultProps", {
  method: 'push'
});

var RoutedAnchorDoc;

{
  RoutedAnchorDoc = require('./doc').doc(RoutedAnchor); // eslint-disable-line global-require
}

function _extends$1a() { _extends$1a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1a.apply(this, arguments); }

function _objectWithoutPropertiesLoose$O(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$H(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$w(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$A(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RoutedButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$H(RoutedButton, _Component);

  function RoutedButton() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;

    _defineProperty$A(_assertThisInitialized$w(_assertThisInitialized$w(_this)), "onClick", function (event) {
      var _this$props = _this.props,
          method = _this$props.method,
          onClick = _this$props.onClick,
          path = _this$props.path;
      var router = _this.context.router;

      if (event) {
        var modifierKey = event.ctrlKey || event.metaKey; // if the user right-clicked in the button we should let it go

        if (modifierKey) {
          return;
        }
      }

      if (router) {
        event.preventDefault();
        (router.history || router)[method](path);
      }

      if (onClick) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        onClick.apply(void 0, [event].concat(args));
      }
    });

    return _this;
  }

  var _proto = RoutedButton.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        href = _this$props2.href,
        path = _this$props2.path,
        method = _this$props2.method,
        onClick = _this$props2.onClick,
        rest = _objectWithoutPropertiesLoose$O(_this$props2, ["href", "path", "method", "onClick"]);

    return React__default.createElement(ButtonWrapper, _extends$1a({}, rest, {
      href: path || href,
      disabled: !path && !onClick,
      onClick: this.onClick
    }));
  };

  return RoutedButton;
}(React.Component);

_defineProperty$A(RoutedButton, "contextTypes", {
  router: propTypes.shape({}).isRequired
});

_defineProperty$A(RoutedButton, "defaultProps", {
  method: 'push'
});

var RoutedButtonDoc;

{
  RoutedButtonDoc = require('./doc').doc(RoutedButton); // eslint-disable-line global-require
}

function _extends$1b() { _extends$1b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1b.apply(this, arguments); }

function _objectWithoutPropertiesLoose$P(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$I(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SelectOption =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$I(SelectOption, _Component);

  function SelectOption() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SelectOption.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this$props = this.props,
        active = _this$props.active,
        disabled = _this$props.disabled,
        option = _this$props.option,
        selected = _this$props.selected;
    var nextActive = nextProps.active,
        nextDisabled = nextProps.disabled,
        nextOption = nextProps.option,
        nextSelected = nextProps.selected;
    return active !== nextActive || selected !== nextSelected || disabled !== nextDisabled || option !== nextOption;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        forwardRef = _this$props2.forwardRef,
        rest = _objectWithoutPropertiesLoose$P(_this$props2, ["forwardRef"]);

    return React__default.createElement(Box, {
      flex: false
    }, React__default.createElement(ButtonWrapper, _extends$1b({
      tabIndex: "-1",
      ref: forwardRef,
      role: "menuitem"
    }, rest)));
  };

  return SelectOption;
}(React.Component);

var SelectOptionWrapper = withForwardRef(SelectOption);

var StyledContainer$1 = styled__default.div.withConfig({
  displayName: "StyledSelect__StyledContainer",
  componentId: "znp66n-0"
})(["@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}", ";", ";"], function (props) {
  return props.dropHeight ? sizeStyle('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
}, function (props) {
  return props.theme.select.container && props.theme.select.container.extend;
});

function _inheritsLoose$J(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$x(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$B(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OptionsBox = styled__default(Box).withConfig({
  displayName: "SelectContainer__OptionsBox",
  componentId: "sc-1wi0ul8-0"
})(["position:relative;scroll-behavior:smooth;"]);
var OptionBox = styled__default(Box).withConfig({
  displayName: "SelectContainer__OptionBox",
  componentId: "sc-1wi0ul8-1"
})(["", ""], function (props) {
  return props.selected && selectedStyle;
});

var SelectContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$J(SelectContainer, _Component);

  function SelectContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "optionRefs", {});

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "searchRef", React.createRef());

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "optionsRef", React.createRef());

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "state", {
      search: '',
      activeIndex: -1
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "onSearchChange", function (event) {
      _this.setState({
        search: event.target.value,
        activeIndex: -1
      }, function () {
        var search = _this.state.search;

        _this.onSearch(search);
      });
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "onSearch", debounce(function (search) {
      var onSearch = _this.props.onSearch;
      onSearch(search);
    }, debounceDelay(_this.props)));

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "selectOption", function (option, index) {
      return function () {
        var _this$props = _this.props,
            multiple = _this$props.multiple,
            onChange = _this$props.onChange,
            options = _this$props.options,
            selected = _this$props.selected,
            value = _this$props.value;

        if (onChange) {
          var nextValue = option;
          var nextSelected = index;

          if (multiple) {
            nextValue = [];
            nextSelected = [];
            var removed = false;
            var selectedIndexes = [];

            if (Array.isArray(selected)) {
              selectedIndexes = selected;
            } else if (Array.isArray(value)) {
              selectedIndexes = value.map(function (v) {
                return options.indexOf(v);
              });
            }

            selectedIndexes.forEach(function (selectedIndex) {
              if (selectedIndex === index) {
                removed = true;
              } else {
                nextValue.push(options[selectedIndex]);
                nextSelected.push(selectedIndex);
              }
            });

            if (!removed) {
              nextValue.push(option);
              nextSelected.push(index);
            }
          }

          onChange({
            option: option,
            value: nextValue,
            selected: nextSelected
          });
        }
      };
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "clearKeyboardNavigation", function () {
      clearTimeout(_this.keyboardNavTimer);
      _this.keyboardNavTimer = setTimeout(function () {
        _this.setState({
          keyboardNavigating: false
        });
      }, 100); // 100ms was empirically determined
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "onNextOption", function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;
      event.preventDefault();
      var nextActiveIndex = activeIndex + 1;

      while (nextActiveIndex < options.length && _this.isDisabled(nextActiveIndex)) {
        nextActiveIndex += 1;
      }

      if (nextActiveIndex !== options.length) {
        _this.setState({
          activeIndex: nextActiveIndex,
          keyboardNavigating: true
        }, function () {
          var buttonNode = _this.optionRefs[nextActiveIndex];
          var optionsNode = _this.optionsRef.current;

          if (buttonNode && isNodeAfterScroll(buttonNode, optionsNode) && optionsNode.scrollTo) {
            optionsNode.scrollTo(0, buttonNode.offsetTop - (optionsNode.getBoundingClientRect().height - buttonNode.getBoundingClientRect().height));
          }

          _this.clearKeyboardNavigation();
        });
      }
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "onPreviousOption", function (event) {
      var activeIndex = _this.state.activeIndex;
      event.preventDefault();
      var nextActiveIndex = activeIndex - 1;

      while (nextActiveIndex >= 0 && _this.isDisabled(nextActiveIndex)) {
        nextActiveIndex -= 1;
      }

      if (nextActiveIndex >= 0) {
        _this.setState({
          activeIndex: nextActiveIndex,
          keyboardNavigating: true
        }, function () {
          var buttonNode = _this.optionRefs[nextActiveIndex];
          var optionsNode = _this.optionsRef.current;

          if (buttonNode && isNodeBeforeScroll(buttonNode, optionsNode) && optionsNode.scrollTo) {
            optionsNode.scrollTo(0, buttonNode.offsetTop);
          }

          _this.clearKeyboardNavigation();
        });
      }
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "onActiveOption", function (index) {
      return function () {
        var keyboardNavigating = _this.state.keyboardNavigating;

        if (!keyboardNavigating) {
          _this.setState({
            activeIndex: index
          });
        }
      };
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "onSelectOption", function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;

      if (activeIndex >= 0) {
        event.preventDefault(); // prevent submitting forms

        _this.selectOption(options[activeIndex], activeIndex)();
      }
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "optionLabel", function (index) {
      var _this$props2 = _this.props,
          options = _this$props2.options,
          labelKey = _this$props2.labelKey;
      var option = options[index];
      var optionLabel;

      if (labelKey) {
        if (typeof labelKey === 'function') {
          optionLabel = labelKey(option);
        } else {
          optionLabel = option[labelKey];
        }
      } else {
        optionLabel = option;
      }

      return optionLabel;
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "optionValue", function (index) {
      var _this$props3 = _this.props,
          options = _this$props3.options,
          valueKey = _this$props3.valueKey;
      var option = options[index];
      var optionValue;

      if (valueKey) {
        if (typeof valueKey === 'function') {
          optionValue = valueKey(option);
        } else {
          optionValue = option[valueKey];
        }
      } else {
        optionValue = option;
      }

      return optionValue;
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "isDisabled", function (index) {
      var _this$props4 = _this.props,
          disabled = _this$props4.disabled,
          disabledKey = _this$props4.disabledKey,
          options = _this$props4.options;
      var option = options[index];
      var result;

      if (disabledKey) {
        if (typeof disabledKey === 'function') {
          result = disabledKey(option, index);
        } else {
          result = option[disabledKey];
        }
      } else if (Array.isArray(disabled)) {
        if (typeof disabled[0] === 'number') {
          result = disabled.indexOf(index) !== -1;
        } else {
          var optionValue = _this.optionValue(index);

          result = disabled.indexOf(optionValue) !== -1;
        }
      }

      return result;
    });

    _defineProperty$B(_assertThisInitialized$x(_assertThisInitialized$x(_this)), "isSelected", function (index) {
      var _this$props5 = _this.props,
          selected = _this$props5.selected,
          value = _this$props5.value,
          valueKey = _this$props5.valueKey;
      var result;

      if (selected) {
        // deprecated in favor of value
        result = selected.indexOf(index) !== -1;
      } else {
        var optionValue = _this.optionValue(index);

        if (Array.isArray(value)) {
          if (value.length === 0) {
            result = false;
          } else if (typeof value[0] !== 'object') {
            result = value.indexOf(optionValue) !== -1;
          } else if (valueKey) {
            result = value.some(function (valueItem) {
              var valueValue = typeof valueKey === 'function' ? valueKey(valueItem) : valueItem[valueKey];
              return valueValue === optionValue;
            });
          }
        } else if (valueKey && typeof value === 'object') {
          var valueValue = typeof valueKey === 'function' ? valueKey(value) : value[valueKey];
          result = valueValue === optionValue;
        } else {
          result = value === optionValue;
        }
      }

      return result;
    });

    return _this;
  }

  SelectContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var options = nextProps.options,
        value = nextProps.value,
        onSearch = nextProps.onSearch;

    if (onSearch) {
      if (prevState.activeIndex === -1 && prevState.search === '' && options && value) {
        var optionValue = Array.isArray(value) && value.length ? value[0] : value;
        var activeIndex = options.indexOf(optionValue);
        return {
          activeIndex: activeIndex
        };
      }

      if (prevState.activeIndex === -1 && prevState.search !== '') {
        return {
          activeIndex: 0
        };
      }
    }

    return null;
  };

  var _proto = SelectContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var onSearch = this.props.onSearch;
    var activeIndex = this.state.activeIndex; // timeout need to send the operation through event loop and allow time to the portal
    // to be available

    setTimeout(function () {
      var optionsNode = _this2.optionsRef.current;

      if (onSearch) {
        var input = _this2.searchRef.current;

        if (input && input.focus) {
          setFocusWithoutScroll(input);
        }
      } else if (optionsNode) {
        setFocusWithoutScroll(optionsNode);
      } // scroll to active option if it is below the fold


      if (activeIndex >= 0 && optionsNode) {
        var optionNode = _this2.optionRefs[activeIndex];

        var _optionsNode$getBound = optionsNode.getBoundingClientRect(),
            containerBottom = _optionsNode$getBound.bottom;

        if (optionNode) {
          var _optionNode$getBoundi = optionNode.getBoundingClientRect(),
              optionTop = _optionNode$getBoundi.bottom;

          if (containerBottom < optionTop) {
            optionNode.scrollIntoView();
          }
        }
      }
    }, 0);
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props6 = this.props,
        children = _this$props6.children,
        dropHeight = _this$props6.dropHeight,
        emptySearchMessage = _this$props6.emptySearchMessage,
        id = _this$props6.id,
        onKeyDown = _this$props6.onKeyDown,
        onSearch = _this$props6.onSearch,
        options = _this$props6.options,
        searchPlaceholder = _this$props6.searchPlaceholder,
        theme = _this$props6.theme;
    var _this$state = this.state,
        activeIndex = _this$state.activeIndex,
        search = _this$state.search;
    var customSearchInput = theme.select.searchInput;
    var SelectTextInput = customSearchInput || TextInputWrapper;
    return React__default.createElement(KeyboardWrapper, {
      onEnter: this.onSelectOption,
      onUp: this.onPreviousOption,
      onDown: this.onNextOption,
      onKeyDown: onKeyDown
    }, React__default.createElement(StyledContainer$1, {
      as: Box,
      id: id ? id + "__select-drop" : undefined,
      dropHeight: dropHeight
    }, onSearch && React__default.createElement(Box, {
      pad: !customSearchInput ? 'xsmall' : undefined,
      flex: false
    }, React__default.createElement(SelectTextInput, {
      focusIndicator: !customSearchInput,
      size: "small",
      ref: this.searchRef,
      type: "search",
      value: search,
      placeholder: searchPlaceholder,
      onChange: this.onSearchChange
    })), React__default.createElement(OptionsBox, {
      flex: "shrink",
      role: "menubar",
      tabIndex: "-1",
      ref: this.optionsRef,
      overflow: "auto"
    }, options.length > 0 ? React__default.createElement(InfiniteScrollWrapper, {
      items: options,
      step: theme.select.step,
      replace: true
    }, function (option, index) {
      var isDisabled = _this3.isDisabled(index);

      var isSelected = _this3.isSelected(index);

      var isActive = activeIndex === index;
      return React__default.createElement(SelectOptionWrapper // eslint-disable-next-line react/no-array-index-key
      , {
        key: index,
        ref: function ref(_ref) {
          _this3.optionRefs[index] = _ref;
        },
        disabled: isDisabled || undefined,
        active: isActive,
        selected: isSelected,
        option: option,
        onMouseOver: !isDisabled ? _this3.onActiveOption(index) : undefined,
        onClick: !isDisabled ? _this3.selectOption(option, index) : undefined
      }, children ? children(option, index, options, {
        active: isActive,
        disabled: isDisabled,
        selected: isSelected
      }) : React__default.createElement(OptionBox, {
        align: "start",
        pad: "small",
        selected: isSelected
      }, React__default.createElement(TextWrapper, {
        margin: "none"
      }, _this3.optionLabel(index))));
    }) : React__default.createElement(SelectOptionWrapper, {
      key: "search_empty",
      disabled: true,
      option: emptySearchMessage
    }, React__default.createElement(OptionBox, {
      align: "start",
      pad: "small"
    }, React__default.createElement(TextWrapper, {
      margin: "none"
    }, emptySearchMessage))))));
  };

  return SelectContainer;
}(React.Component);

_defineProperty$B(SelectContainer, "defaultProps", {
  children: null,
  disabled: undefined,
  emptySearchMessage: 'No matches found',
  id: undefined,
  multiple: false,
  name: undefined,
  onKeyDown: undefined,
  onSearch: undefined,
  options: undefined,
  searchPlaceholder: undefined,
  selected: undefined,
  value: ''
});

Object.setPrototypeOf(SelectContainer.defaultProps, defaultProps$2);
var SelectContainerWrapper = styled.withTheme(SelectContainer);

function _extends$1c() { _extends$1c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1c.apply(this, arguments); }

function _objectWithoutPropertiesLoose$Q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$K(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$y(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$C(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var SelectTextInput = styled__default(TextInputWrapper).withConfig({
  displayName: "Select__SelectTextInput",
  componentId: "sc-17idtfo-0"
})(["cursor:pointer;"]);
var StyledSelectDropButton = styled__default(DropButtonWrapper).withConfig({
  displayName: "Select__StyledSelectDropButton",
  componentId: "sc-17idtfo-1"
})(["", ";", ";"], function (props) {
  return !props.plain && controlBorderStyle;
}, function (props) {
  return props.theme.select && props.theme.select.control && props.theme.select.control.extend;
});
StyledSelectDropButton.defaultProps = {};
Object.setPrototypeOf(StyledSelectDropButton.defaultProps, defaultProps$2);

var Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$K(Select, _Component);

  function Select() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$C(_assertThisInitialized$y(_assertThisInitialized$y(_this)), "state", {
      open: false
    });

    _defineProperty$C(_assertThisInitialized$y(_assertThisInitialized$y(_this)), "inputRef", React__default.createRef());

    _defineProperty$C(_assertThisInitialized$y(_assertThisInitialized$y(_this)), "onOpen", function () {
      var onOpen = _this.props.onOpen;

      _this.setState({
        open: true
      }, function () {
        if (onOpen) {
          onOpen();
        }
      });
    });

    _defineProperty$C(_assertThisInitialized$y(_assertThisInitialized$y(_this)), "onClose", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        open: false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    });

    return _this;
  }

  var _proto = Select.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        alignSelf = _this$props.alignSelf,
        children = _this$props.children,
        closeOnChange = _this$props.closeOnChange,
        disabled = _this$props.disabled,
        dropAlign = _this$props.dropAlign,
        dropTarget = _this$props.dropTarget,
        forwardRef = _this$props.forwardRef,
        gridArea = _this$props.gridArea,
        id = _this$props.id,
        labelKey = _this$props.labelKey,
        margin = _this$props.margin,
        messages = _this$props.messages,
        onChange = _this$props.onChange,
        onClose = _this$props.onClose,
        options = _this$props.options,
        placeholder = _this$props.placeholder,
        plain = _this$props.plain,
        selected = _this$props.selected,
        size = _this$props.size,
        theme = _this$props.theme,
        value = _this$props.value,
        valueLabel = _this$props.valueLabel,
        rest = _objectWithoutPropertiesLoose$Q(_this$props, ["a11yTitle", "alignSelf", "children", "closeOnChange", "disabled", "dropAlign", "dropTarget", "forwardRef", "gridArea", "id", "labelKey", "margin", "messages", "onChange", "onClose", "options", "placeholder", "plain", "selected", "size", "theme", "value", "valueLabel"]);

    var open = this.state.open;
    delete rest.onSearch;

    var onSelectChange = function onSelectChange(event) {
      if (closeOnChange) {
        _this2.onClose();
      }

      if (onChange) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        onChange.apply(void 0, [_extends$1c({}, event, {
          target: _this2.inputRef.current
        })].concat(args));
      }
    };

    var SelectIcon = theme.select.icons.down;
    var selectValue;
    var inputValue = '';

    if (valueLabel) {
      selectValue = valueLabel;
    } else if (Array.isArray(value)) {
      if (value.length > 1) {
        if (React__default.isValidElement(value[0])) {
          selectValue = value;
        } else {
          inputValue = messages.multiple;
        }
      } else if (value.length === 1) {
        if (React__default.isValidElement(value[0])) {
          selectValue = value[0];
        } else if (labelKey && typeof value[0] === 'object') {
          if (typeof labelKey === 'function') {
            inputValue = labelKey(value[0]);
          } else {
            inputValue = value[0][labelKey];
          }
        } else {
          inputValue = value[0];
        }
      } else {
        inputValue = '';
      }
    } else if (labelKey && typeof value === 'object') {
      if (typeof labelKey === 'function') {
        inputValue = labelKey(value);
      } else {
        inputValue = value[labelKey];
      }
    } else if (React__default.isValidElement(value)) {
      selectValue = value; // deprecated in favor of valueLabel
    } else if (selected !== undefined) {
      if (Array.isArray(selected)) {
        if (selected.length > 1) {
          inputValue = messages.multiple;
        } else if (selected.length === 1) {
          inputValue = options[selected[0]];
        }
      } else {
        inputValue = options[selected];
      }
    } else {
      inputValue = value;
    } // const dark = theme.select.background ? colorIsDark(theme.select.background) : theme.dark;


    var iconColor = normalizeColor(theme.select.icons.color || 'control', theme);
    return React__default.createElement(KeyboardWrapper, {
      onDown: this.onOpen,
      onUp: this.onOpen
    }, React__default.createElement(StyledSelectDropButton, {
      ref: forwardRef,
      id: id,
      disabled: disabled === true || undefined,
      dropAlign: dropAlign,
      dropTarget: dropTarget,
      open: open,
      alignSelf: alignSelf,
      gridArea: gridArea,
      margin: margin,
      onOpen: this.onOpen,
      onClose: this.onClose,
      dropContent: React__default.createElement(SelectContainerWrapper, _extends$1c({}, this.props, {
        onChange: onSelectChange
      }))
    }, React__default.createElement(Box, {
      align: "center",
      direction: "row",
      justify: "between",
      background: theme.select.background,
      plain: plain
    }, React__default.createElement(Box, {
      direction: "row",
      flex: true,
      basis: "auto"
    }, selectValue || React__default.createElement(SelectTextInput, _extends$1c({
      a11yTitle: a11yTitle && "" + a11yTitle + (typeof value === 'string' ? ", " + value : ''),
      id: id ? id + "__input" : undefined,
      ref: this.inputRef
    }, rest, {
      tabIndex: "-1",
      type: "text",
      placeholder: placeholder,
      plain: true,
      readOnly: true,
      value: inputValue,
      size: size,
      onClick: disabled === true ? undefined : this.onOpen
    }))), React__default.createElement(Box, {
      margin: {
        horizontal: 'small'
      },
      flex: false,
      style: {
        minWidth: 'auto'
      }
    }, React__default.createElement(SelectIcon, {
      color: iconColor,
      size: size
    })))));
  };

  return Select;
}(React.Component);

_defineProperty$C(Select, "defaultProps", {
  closeOnChange: true,
  dropAlign: {
    top: 'bottom',
    left: 'left'
  },
  messages: {
    multiple: 'multiple'
  }
});

Object.setPrototypeOf(Select.defaultProps, defaultProps$2);
var SelectDoc;

{
  SelectDoc = require('./doc').doc(Select); // eslint-disable-line global-require
}

var SelectWrapper = compose(styled.withTheme, withForwardRef)(SelectDoc || Select);

function _inheritsLoose$L(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$z(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$D(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SkipLinks =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$L(SkipLinks, _Component);

  function SkipLinks() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$D(_assertThisInitialized$z(_assertThisInitialized$z(_this)), "state", {
      showLayer: false
    });

    _defineProperty$D(_assertThisInitialized$z(_assertThisInitialized$z(_this)), "layerRef", React.createRef());

    _defineProperty$D(_assertThisInitialized$z(_assertThisInitialized$z(_this)), "onBlur", function () {
      // timeout needed so it gives enough time for activeElement to be updated
      setTimeout(function () {
        var layerNode = _this.layerRef.current;

        if (layerNode && layerNode.layerContainer.contains && !layerNode.layerContainer.contains(document.activeElement)) {
          _this.removeLayer();
        }
      }, 0);
    });

    _defineProperty$D(_assertThisInitialized$z(_assertThisInitialized$z(_this)), "onFocus", function () {
      _this.setState({
        showLayer: true
      });
    });

    _defineProperty$D(_assertThisInitialized$z(_assertThisInitialized$z(_this)), "removeLayer", function () {
      _this.setState({
        showLayer: false
      });
    });

    return _this;
  }

  var _proto = SkipLinks.prototype;

  _proto.render = function render() {
    var _this2 = this;

    /* eslint-disable-next-line react/prop-types */
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        messages = _this$props.messages;
    var showLayer = this.state.showLayer;
    return React__default.createElement(LayerWrapper, {
      id: id,
      position: showLayer ? 'top' : 'hidden',
      ref: this.layerRef,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, React__default.createElement(Box, {
      pad: {
        horizontal: 'medium'
      }
    }, React__default.createElement(HeadingWrapper, {
      level: 2
    }, messages.skipTo, ":"), React__default.createElement(Box, {
      direction: "row",
      align: "center",
      pad: {
        bottom: 'medium'
      }
    }, children.map(function (element, index) {
      return React.cloneElement(element, {
        key: "skip-link-" + index,
        onClick: _this2.removeLayer
      });
    }))));
  };

  return SkipLinks;
}(React.Component);

_defineProperty$D(SkipLinks, "defaultProps", {
  messages: {
    skipTo: 'Skip To'
  }
});

var SkipLinksDoc;

{
  SkipLinksDoc = require('./doc').doc(SkipLinks); // eslint-disable-line global-require
}

var HiddenAnchor$1 = styled__default(AnchorWrapper).withConfig({
  displayName: "SkipLinkTarget__HiddenAnchor",
  componentId: "sc-16wjfgk-0"
})(["width:0;height:0;overflow:hidden;position:absolute;"]);

var tabHoverStyle = styled.css(["&:hover{", " ", " ", ";}"], function (props) {
  return props.theme.tab.hover.background && styled.css(["background:", ";"], normalizeColor(props.theme.tab.hover.background, props.theme));
}, function (props) {
  return props.theme.tab.hover.color && styled.css(["color:", ";"], normalizeColor(props.theme.tab.hover.color, props.theme));
}, function (props) {
  return props.theme.tab.hover.extend;
});
var StyledTab = styled__default.div.withConfig({
  displayName: "StyledTab",
  componentId: "sc-1nnwnsb-0"
})(["", " ", " ", ""], genericStyles, function (props) {
  return !props.plain && props.theme.tab.hover && tabHoverStyle;
}, function (props) {
  return props.theme.tab.extend;
});
StyledTab.defaultProps = {};
Object.setPrototypeOf(StyledTab.defaultProps, defaultProps$2);

function _extends$1f() { _extends$1f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1f.apply(this, arguments); }

function _objectWithoutPropertiesLoose$T(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$M(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$A(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$E(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tab =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$M(Tab, _Component);

  function Tab() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$E(_assertThisInitialized$A(_assertThisInitialized$A(_this)), "state", {});

    _defineProperty$E(_assertThisInitialized$A(_assertThisInitialized$A(_this)), "onMouseOver", function (event) {
      var onMouseOver = _this.props.onMouseOver;

      _this.setState({
        over: true
      });

      if (onMouseOver) {
        onMouseOver(event);
      }
    });

    _defineProperty$E(_assertThisInitialized$A(_assertThisInitialized$A(_this)), "onMouseOut", function (event) {
      var onMouseOut = _this.props.onMouseOut;

      _this.setState({
        over: undefined
      });

      if (onMouseOut) {
        onMouseOut(event);
      }
    });

    _defineProperty$E(_assertThisInitialized$A(_assertThisInitialized$A(_this)), "onClickTab", function (event) {
      var onActivate = _this.props.onActivate;

      if (event) {
        event.preventDefault();
      }

      onActivate();
    });

    return _this;
  }

  Tab.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var active = nextProps.active;
    var over = prevState.over;

    if (active && over) {
      return {
        over: undefined
      };
    }

    return null;
  };

  var _proto = Tab.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        forwardRef = _this$props.forwardRef,
        plain = _this$props.plain,
        title = _this$props.title,
        onMouseOver = _this$props.onMouseOver,
        onMouseOut = _this$props.onMouseOut,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$T(_this$props, ["active", "forwardRef", "plain", "title", "onMouseOver", "onMouseOut", "theme"]);

    var over = this.state.over;
    delete rest.onActivate;
    var normalizedTitle = title;
    var tabStyles = {};

    if (!plain) {
      if (typeof title !== 'string') {
        normalizedTitle = title;
      } else if (active) {
        normalizedTitle = React__default.createElement(TextWrapper, theme.tab.active, title);
      } else {
        normalizedTitle = React__default.createElement(TextWrapper, {
          color: over ? theme.tab.hover.color : theme.tab.color
        }, title);
      }

      if (theme.tab.border) {
        var borderColor = theme.tab.border.color || theme.global.control.border.color;

        if (active) {
          borderColor = theme.tab.border.active.color || borderColor;
        } else if (over) {
          borderColor = theme.tab.border.hover.color || borderColor;
        }

        borderColor = normalizeColor(borderColor, theme);
        tabStyles.border = {
          side: theme.tab.border.side,
          size: theme.tab.border.size,
          color: borderColor
        };
      }

      tabStyles.background = active ? theme.tab.active.background || theme.tab.background : theme.tab.background;
      tabStyles.pad = theme.tab.pad;
      tabStyles.margin = theme.tab.margin;
    }

    return React__default.createElement(ButtonWrapper, _extends$1f({
      ref: forwardRef,
      plain: true,
      role: "tab",
      "aria-selected": active,
      "aria-expanded": active
    }, rest, {
      onClick: this.onClickTab,
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
      onFocus: this.onMouseOver,
      onBlur: this.onMouseOut
    }), React__default.createElement(StyledTab, _extends$1f({
      as: Box,
      plain: plain
    }, tabStyles), normalizedTitle));
  };

  return Tab;
}(React.Component);

Tab.defaultProps = {};
Object.setPrototypeOf(Tab.defaultProps, defaultProps$2);
var TabDoc;

{
  TabDoc = require('./doc').doc(Tab); // eslint-disable-line global-require
}

var TabWrapper = compose(styled.withTheme, withForwardRef)(TabDoc || Tab);

var _FLEX_MAP$1;
var StyledTabsHeader = styled__default.div.withConfig({
  displayName: "StyledTabs__StyledTabsHeader",
  componentId: "a4fwxl-0"
})(["", ";"], function (props) {
  return props.theme.tabs.header.extend;
});
StyledTabsHeader.defaultProps = {};
Object.setPrototypeOf(StyledTabsHeader.defaultProps, defaultProps$2);
var FLEX_MAP$1 = (_FLEX_MAP$1 = {}, _FLEX_MAP$1[true] = '1 1', _FLEX_MAP$1[false] = '0 0', _FLEX_MAP$1.grow = '1 0', _FLEX_MAP$1.shrink = '0 1', _FLEX_MAP$1);
var flexStyle$1 = styled.css(["flex:", ";"], function (props) {
  return "" + FLEX_MAP$1[props.flex] + (props.flex !== true ? ' auto' : '');
});
var StyledTabPanel = styled__default.div.withConfig({
  displayName: "StyledTabs__StyledTabPanel",
  componentId: "a4fwxl-1"
})(["min-height:0;", " ", ";"], function (props) {
  return props.flex && flexStyle$1;
}, function (props) {
  return props.theme.tabs.panel.extend;
});
StyledTabPanel.defaultProps = {};
Object.setPrototypeOf(StyledTabPanel.defaultProps, defaultProps$2);
var StyledTabs = styled__default.div.withConfig({
  displayName: "StyledTabs",
  componentId: "a4fwxl-2"
})(["", " ", ";"], genericStyles, function (props) {
  return props.theme.tabs.extend;
});
StyledTabs.defaultProps = {};
Object.setPrototypeOf(StyledTabs.defaultProps, defaultProps$2);

function _extends$1g() { _extends$1g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1g.apply(this, arguments); }

function _objectWithoutPropertiesLoose$U(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$N(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$B(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$F(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$N(Tabs, _Component);

  function Tabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$F(_assertThisInitialized$B(_assertThisInitialized$B(_this)), "state", {});

    _defineProperty$F(_assertThisInitialized$B(_assertThisInitialized$B(_this)), "activateTab", function (index) {
      var _this$props = _this.props,
          activeIndex = _this$props.activeIndex,
          onActive = _this$props.onActive;

      if (activeIndex === undefined) {
        _this.setState({
          activeIndex: index
        });
      }

      if (onActive) {
        onActive(index);
      }
    });

    return _this;
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var activeIndex = nextProps.activeIndex;
    var stateActiveIndex = prevState.activeIndex;

    if (stateActiveIndex !== activeIndex && activeIndex !== undefined) {
      return {
        activeIndex: activeIndex
      };
    }

    return {
      activeIndex: stateActiveIndex || 0
    };
  };

  var _proto = Tabs.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        flex = _this$props2.flex,
        justify = _this$props2.justify,
        tabContents = _this$props2.messages.tabContents,
        theme = _this$props2.theme,
        rest = _objectWithoutPropertiesLoose$U(_this$props2, ["children", "flex", "justify", "messages", "theme"]);

    delete rest.activeIndex;
    delete rest.onActive;
    var activeIndex = this.state.activeIndex;
    var activeContent;
    var activeTitle;
    var tabs = React.Children.map(children, function (tab, index) {
      if (!tab) return undefined;
      var tabProps = tab.props || {};
      var isTabActive = index === activeIndex;

      if (isTabActive) {
        activeContent = tabProps.children;

        if (typeof tabProps.title === 'string') {
          activeTitle = tabProps.title;
        } else {
          activeTitle = index + 1;
        }
      }

      return React.cloneElement(tab, {
        active: isTabActive,
        onActivate: function onActivate() {
          return _this2.activateTab(index);
        }
      });
    }, this);
    var tabContentTitle = (activeTitle || '') + " " + tabContents;
    return React__default.createElement(StyledTabs, _extends$1g({
      as: Box,
      role: "tablist",
      flex: flex
    }, rest, {
      background: theme.tabs.background
    }), React__default.createElement(StyledTabsHeader, {
      as: Box,
      direction: "row",
      justify: justify,
      flex: false,
      wrap: true,
      background: theme.tabs.header.background,
      gap: theme.tabs.gap
    }, tabs), React__default.createElement(StyledTabPanel, {
      flex: flex,
      "aria-label": tabContentTitle,
      role: "tabpanel"
    }, activeContent));
  };

  return Tabs;
}(React.Component);

_defineProperty$F(Tabs, "defaultProps", {
  justify: 'center',
  messages: {
    tabContents: 'Tab Contents'
  },
  responsive: true
});

Object.setPrototypeOf(Tabs.defaultProps, defaultProps$2);
var TabsDoc;

{
  TabsDoc = require('./doc').doc(Tabs); // eslint-disable-line global-require
}

var TabsWrapper = compose(styled.withTheme)(TabsDoc || Tabs);

var plainStyle$3 = styled.css(["border:none;width:100%;-webkit-appearance:none;"]);

var resizeStyle = function resizeStyle(resize) {
  if (resize === 'horizontal') {
    return 'resize: horizontal;';
  }

  if (resize === 'vertical') {
    return 'resize: vertical;';
  }

  if (resize) {
    return 'resize: both;';
  }

  return 'resize: none;';
};

var StyledTextArea = styled__default.textarea.withConfig({
  displayName: "StyledTextArea",
  componentId: "sc-17i3mwp-0"
})(["", " width:100%;", " ", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", ";"], inputStyle, function (props) {
  return props.resize !== undefined && resizeStyle(props.resize);
}, function (props) {
  return props.fillArg && 'height: 100%;';
}, function (props) {
  return props.plain && plainStyle$3;
}, placeholderStyle, function (props) {
  return props.focus && !props.plain && focusStyle;
}, function (props) {
  return props.theme.textArea && props.theme.textArea.extend;
});
StyledTextArea.defaultProps = {};
Object.setPrototypeOf(StyledTextArea.defaultProps, defaultProps$2);

function _extends$1h() { _extends$1h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1h.apply(this, arguments); }

function _objectWithoutPropertiesLoose$V(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$O(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$C(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$G(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextArea =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$O(TextArea, _Component);

  function TextArea() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$G(_assertThisInitialized$C(_assertThisInitialized$C(_this)), "onEsc", function (event) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    });

    return _this;
  }

  var _proto = TextArea.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fill = _this$props.fill,
        forwardRef = _this$props.forwardRef,
        rest = _objectWithoutPropertiesLoose$V(_this$props, ["fill", "forwardRef"]);

    return React__default.createElement(KeyboardWrapper, {
      onEsc: this.onEsc
    }, React__default.createElement(StyledTextArea, _extends$1h({
      ref: forwardRef,
      fillArg: fill
    }, rest)));
  };

  return TextArea;
}(React.Component);

var TextAreaDoc;

{
  TextAreaDoc = require('./doc').doc(TextArea); // eslint-disable-line global-require
}

var TextAreaWrapper = compose(withFocus, withForwardRef)(TextAreaDoc || TextArea);

var FIT_MAP$1 = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle$1 = styled.css(["flex:1 1;min-height:0;object-fit:", ";"], function (props) {
  return FIT_MAP$1[props.fit];
});
var StyledVideo = styled__default.video.withConfig({
  displayName: "StyledVideo",
  componentId: "w4v8h9-0"
})(["max-width:100%;", "::cue{background:", ";}", ";"], function (props) {
  return props.fit && fitStyle$1;
}, function (props) {
  return props.theme.video.captions.background;
}, function (props) {
  return props.theme.video && props.theme.video.extend;
});
StyledVideo.defaultProps = {};
Object.setPrototypeOf(StyledVideo.defaultProps, defaultProps$2);
var StyledVideoContainer = styled__default.div.withConfig({
  displayName: "StyledVideo__StyledVideoContainer",
  componentId: "w4v8h9-1"
})(["flex:1 1;display:flex;flex-direction:column;overflow:hidden;position:relative;", ";"], genericStyles);
StyledVideoContainer.defaultProps = {};
Object.setPrototypeOf(StyledVideoContainer.defaultProps, defaultProps$2);
var positionStyle = styled.css(["position:absolute;left:0;right:0;bottom:0;"]);
var StyledVideoControls = styled__default.div.withConfig({
  displayName: "StyledVideo__StyledVideoControls",
  componentId: "w4v8h9-2"
})(["flex:0 0;", " opacity:0;transition:opacity 0.3s;", ";"], function (props) {
  return props.over && positionStyle;
}, function (props) {
  return props.active ? 'opacity: 1;' : 'pointer-events: none';
});
StyledVideoControls.defaultProps = {};
Object.setPrototypeOf(StyledVideoControls.defaultProps, defaultProps$2);
var headStyle = styled.css(["::after{content:'';height:100%;width:", ";background:", ";position:absolute;left:", ";}"], function (props) {
  return props.theme.global.edgeSize.xsmall;
}, function (props) {
  return normalizeColor('light-4', props.theme);
}, function (props) {
  return props.value + "%";
});
var StyledVideoScrubber = styled__default.div.withConfig({
  displayName: "StyledVideo__StyledVideoScrubber",
  componentId: "w4v8h9-3"
})(["cursor:pointer;", ";"], function (props) {
  return props.value && headStyle;
});
StyledVideoScrubber.defaultProps = {};
Object.setPrototypeOf(StyledVideoScrubber.defaultProps, defaultProps$2);

function _objectWithoutPropertiesLoose$W(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$1i() { _extends$1i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1i.apply(this, arguments); }

function _inheritsLoose$P(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$D(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$H(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VOLUME_STEP = 0.166667;

var formatTime = function formatTime(time) {
  var minutes = Math.round(time / 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var seconds = Math.round(time) % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
};

var videoEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];

var Video =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$P(Video, _Component);

  Video.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var forwardRef = nextProps.forwardRef;
    var videoRef = prevState.videoRef;
    var nextVideoRef = forwardRef || videoRef;

    if (nextVideoRef !== videoRef) {
      return {
        videoRef: nextVideoRef
      };
    }

    return null;
  };

  function Video(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "state", {
      captions: [],
      scrubberRef: React__default.createRef(),
      videoRef: React__default.createRef()
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "hasPlayed", false);

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "injectUpdateVideoEvents", function () {
      return videoEvents.reduce(function (previousValue, currentValue) {
        var nextValue = _extends$1i({}, previousValue);

        nextValue[currentValue] = function (e) {
          if (currentValue in _this.props &&
          /* eslint-disable react/destructuring-assignment */
          typeof _this.props[currentValue] === 'function') {
            _this.props[currentValue](e);
            /* eslint-enable react/destructuring-assignment */

          }

          _this.update();
        };

        return nextValue;
      }, {});
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "update", function () {
      var videoRef = _this.state.videoRef;
      var video = videoRef.current; // Set flag for Video first play

      if (!_this.hasPlayed && !video.paused && !video.loading || video.currentTime) {
        _this.hasPlayed = true;
      }

      var interacting = _this.state.interacting;

      if (video.ended) {
        interacting = false;
      }

      _this.setState({
        duration: video.duration,
        currentTime: video.currentTime,
        // buffered: video.buffered,
        // paused: video.paused,
        // muted: video.muted,
        volume: video.volume,
        // ended: video.ended,
        // readyState: video.readyState,
        interacting: interacting,
        // computed values
        // hasPlayed: this.hasPlayed,
        playing: !video.paused && !video.loading,
        // percentageBuffered: video.buffered.length &&
        //   (video.buffered.end(video.buffered.length - 1) /
        //   video.duration) * 100,
        percentagePlayed: video.currentTime / video.duration * 100 // loading: video.readyState < video.HAVE_ENOUGH_DATA,

      });
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "play", function () {
      var videoRef = _this.state.videoRef;
      videoRef.current.play();
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "pause", function () {
      var videoRef = _this.state.videoRef;
      videoRef.current.pause();
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "scrub", function (event) {
      var _this$state = _this.state,
          duration = _this$state.duration,
          scrubberRef = _this$state.scrubberRef;

      if (scrubberRef.current) {
        var scrubberRect = scrubberRef.current.getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;

        _this.setState({
          scrubTime: duration * percent
        });
      }
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "seek", function (event) {
      var _this$state2 = _this.state,
          duration = _this$state2.duration,
          scrubberRef = _this$state2.scrubberRef,
          videoRef = _this$state2.videoRef;

      if (scrubberRef.current) {
        var scrubberRect = scrubberRef.current.getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
        videoRef.current.currentTime = duration * percent;
      }
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "unmute", function () {
      var videoRef = _this.state.videoRef;

      if (videoRef.current) {
        videoRef.current.muted = false;
      }
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "mute", function () {
      var videoRef = _this.state.videoRef;

      if (videoRef.current) {
        videoRef.current.muted = true;
      }
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "louder", function () {
      var videoRef = _this.state.videoRef;
      videoRef.current.volume += VOLUME_STEP;
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "quieter", function () {
      var videoRef = _this.state.videoRef;
      videoRef.current.volume -= VOLUME_STEP;
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "showCaptions", function (index) {
      var videoRef = _this.state.videoRef;
      var textTracks = videoRef.current.textTracks;

      for (var i = 0; i < textTracks.length; i += 1) {
        textTracks[i].mode = i === index ? 'showing' : 'hidden';
      } // Using forceUpdate to force redraw of controls when changing captions


      _this.forceUpdate();
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "fullscreen", function () {
      var videoRef = _this.state.videoRef;
      var video = videoRef.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else {
        console.warn("Your browser doesn't support fullscreen.");
      }
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "interactionStart", function () {
      _this.setState({
        interacting: true
      });

      clearTimeout(_this.interactionTimer);
      _this.interactionTimer = setTimeout(_this.interactionStop, 3000);
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "interactionStop", function () {
      var focus = _this.state.focus;

      if (!focus && !_this.unmounted) {
        _this.setState({
          interacting: false
        });
      }
    });

    _defineProperty$H(_assertThisInitialized$D(_assertThisInitialized$D(_this)), "restate", function () {
      var _this$state3 = _this.state,
          captions = _this$state3.captions,
          height = _this$state3.height,
          videoRef = _this$state3.videoRef,
          width = _this$state3.width;
      var video = videoRef.current;

      if (video) {
        if (video.videoHeight) {
          // set the size based on the video aspect ratio
          var rect = video.getBoundingClientRect();
          var ratio = rect.width / rect.height;
          var videoRatio = video.videoWidth / video.videoHeight;

          if (videoRatio > ratio) {
            var nextHeight = rect.width / videoRatio;

            if (nextHeight !== height) {
              _this.setState({
                height: nextHeight,
                width: undefined
              });
            }
          } else {
            var nextWidth = rect.height * videoRatio;

            if (nextWidth !== width) {
              _this.setState({
                height: undefined,
                width: nextWidth
              });
            }
          }
        } // remember the state of the text tracks for subsequent rendering


        var textTracks = video.textTracks;

        if (textTracks.length > 0) {
          if (textTracks.length === 1) {
            var active = textTracks[0].mode === 'showing';

            if (!captions || !captions[0] || captions[0].active !== active) {
              _this.setState({
                captions: [{
                  active: active
                }]
              });
            }
          } else {
            var nextCaptions = [];
            var set = false;

            for (var i = 0; i < textTracks.length; i += 1) {
              var track = textTracks[i];

              var _active = track.mode === 'showing';

              nextCaptions.push({
                label: track.label,
                active: _active
              });

              if (!captions || !captions[i] || captions[i].active !== _active) {
                set = true;
              }
            }

            if (set) {
              _this.setState({
                captions: nextCaptions
              });
            }
          }
        }
      }
    });

    _this.update = throttle(_this.update, 100, _assertThisInitialized$D(_assertThisInitialized$D(_this)));
    _this.mediaEventProps = _this.injectUpdateVideoEvents();
    return _this;
  }

  var _proto = Video.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var mute = this.props.mute;
    var videoRef = this.state.videoRef;
    var video = videoRef.current;

    if (mute) {
      this.mute();
    }

    if (video) {
      // hide all captioning to start with
      var textTracks = video.textTracks;

      for (var i = 0; i < textTracks.length; i += 1) {
        textTracks[i].mode = 'hidden';
      }

      this.restate();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var autoPlay = this.props.autoPlay;

    if (autoPlay && !prevProps.autoPlay) {
      // Caller wants the video to play now.
      this.play();
    }

    this.restate();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;
  };

  _proto.renderControls = function renderControls() {
    var _this2 = this;

    var _this$props = this.props,
        controls = _this$props.controls,
        theme = _this$props.theme;
    var _this$state4 = this.state,
        captions = _this$state4.captions,
        currentTime = _this$state4.currentTime,
        duration = _this$state4.duration,
        interacting = _this$state4.interacting,
        percentagePlayed = _this$state4.percentagePlayed,
        playing = _this$state4.playing,
        scrubberRef = _this$state4.scrubberRef,
        scrubTime = _this$state4.scrubTime,
        volume = _this$state4.volume;
    var over = controls === 'over';
    var background = over && (theme.video.controls && theme.video.controls.background || {
      color: 'dark-1',
      opacity: 'strong'
    });
    var iconColor = over && (theme.video.icons.color || 'light-1');
    var formattedTime = formatTime(scrubTime || currentTime || duration);
    var Icons = {
      ClosedCaption: theme.video.icons.closedCaption,
      Configure: theme.video.icons.configure,
      FullScreen: theme.video.icons.fullScreen,
      Pause: theme.video.icons.pause,
      Play: theme.video.icons.play,
      ReduceVolume: theme.video.icons.reduceVolume,
      Volume: theme.video.icons.volume
    };
    var captionControls = captions.map(function (caption) {
      return {
        icon: caption.label ? undefined : React__default.createElement(Icons.ClosedCaption, {
          color: iconColor
        }),
        label: caption.label,
        active: caption.active,
        onClick: function onClick() {
          return _this2.showCaptions(caption.active ? -1 : 0);
        }
      };
    });
    return React__default.createElement(StyledVideoControls, {
      over: over,
      active: !this.hasPlayed || controls === 'below' || over && interacting
    }, React__default.createElement(Box, {
      direction: "row",
      align: "center",
      justify: "between",
      background: background
    }, React__default.createElement(ButtonWrapper, {
      icon: playing ? React__default.createElement(Icons.Pause, {
        color: iconColor
      }) : React__default.createElement(Icons.Play, {
        color: iconColor
      }),
      hoverIndicator: "background",
      onClick: playing ? this.pause : this.play
    }), React__default.createElement(Box, {
      direction: "row",
      align: "center",
      flex: true
    }, React__default.createElement(Box, {
      flex: true
    }, React__default.createElement(StackWrapper, null, React__default.createElement(MeterWrapper, {
      "aria-label": "Video progress",
      background: over && (theme.video.scrubber && theme.video.scrubber.track.color || 'dark-3'),
      size: "full",
      thickness: "small",
      values: [{
        value: percentagePlayed || 0
      }]
    }), React__default.createElement(StyledVideoScrubber, {
      ref: scrubberRef,
      tabIndex: 0,
      role: "button",
      value: scrubTime ? Math.round(scrubTime / duration * 100) : undefined,
      onMouseMove: this.scrub,
      onMouseLeave: function onMouseLeave() {
        return _this2.setState({
          scrubTime: undefined
        });
      },
      onClick: this.seek
    }))), React__default.createElement(Box, {
      pad: {
        horizontal: 'small'
      }
    }, React__default.createElement(TextWrapper, {
      margin: "none"
    }, formattedTime))), React__default.createElement(MenuWrapper, {
      icon: React__default.createElement(Icons.Configure, {
        color: iconColor
      }),
      dropAlign: {
        bottom: 'top',
        right: 'right'
      },
      dropBackground: background,
      items: [{
        icon: React__default.createElement(Icons.Volume, {
          color: iconColor
        }),
        onClick: volume <= 1 - VOLUME_STEP ? this.louder : undefined,
        close: false
      }, {
        icon: React__default.createElement(Icons.ReduceVolume, {
          color: iconColor
        }),
        onClick: volume >= VOLUME_STEP ? this.quieter : undefined,
        close: false
      }].concat(captionControls, [{
        icon: React__default.createElement(Icons.FullScreen, {
          color: iconColor
        }),
        onClick: this.fullscreen
      }])
    })));
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        alignSelf = _this$props2.alignSelf,
        autoPlay = _this$props2.autoPlay,
        children = _this$props2.children,
        controls = _this$props2.controls,
        gridArea = _this$props2.gridArea,
        loop = _this$props2.loop,
        margin = _this$props2.margin,
        theme = _this$props2.theme,
        rest = _objectWithoutPropertiesLoose$W(_this$props2, ["alignSelf", "autoPlay", "children", "controls", "gridArea", "loop", "margin", "theme"]);

    var _this$state5 = this.state,
        height = _this$state5.height,
        videoRef = _this$state5.videoRef,
        width = _this$state5.width;
    var controlsElement = controls ? this.renderControls() : undefined;
    var mouseEventListeners;

    if (controls === 'over') {
      mouseEventListeners = {
        onMouseEnter: this.interactionStart,
        onMouseMove: this.interactionStart,
        onTouchStart: this.interactionStart
      };
    }

    var style;

    if (rest.fit === 'contain' && controls === 'over') {
      // constrain the size to fit the aspect ratio so the controls overlap correctly
      if (width) {
        style = {
          width: width
        };
      } else if (height) {
        style = {
          height: height
        };
      }
    }

    return React__default.createElement(StyledVideoContainer, _extends$1i({}, mouseEventListeners, {
      alignSelf: alignSelf,
      gridArea: gridArea,
      margin: margin,
      style: style
    }), React__default.createElement(StyledVideo, _extends$1i({}, rest, {
      ref: videoRef
    }, this.mediaEventProps, {
      autoPlay: autoPlay || false,
      loop: loop || false
    }), children), controlsElement);
  };

  return Video;
}(React.Component);

_defineProperty$H(Video, "defaultProps", {
  controls: 'over'
});

Object.setPrototypeOf(Video.defaultProps, defaultProps$2);
var VideoDoc;

{
  VideoDoc = require('./doc').doc(Video); // eslint-disable-line global-require
}

var VideoWrapper = compose(styled.withTheme, withForwardRef)(VideoDoc || Video);

var StyledWorldMap = styled__default.svg.withConfig({
  displayName: "StyledWorldMap",
  componentId: "had4c3-0"
})(["width:100%;", " ", ";"], genericStyles, function (props) {
  return props.theme.worldMap && props.theme.worldMap.extend;
});
StyledWorldMap.defaultProps = {};
Object.setPrototypeOf(StyledWorldMap.defaultProps, defaultProps$2);

function _inheritsLoose$Q(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized$E(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$I(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose$X(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$1j() { _extends$1j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1j.apply(this, arguments); }
// by FACTOR pixels. The contents have both an area boundary for interaction
// and dots described as rows where each row is described by three values:
// a starting coordinate and a length. This approach is more efficient than
// describing it via SVG elements, keeping the code/library size smaller.

var CONTINENTS = [{
  name: 'Australia',
  origin: [74, 32],
  area: [[4, 0], [7, 1], [15, 7], [13, 9], [0, 6], [0, 2]],
  dots: [[4, 0, 1], [2, 1, 6], [0, 2, 9], [0, 3, 10], [0, 4, 10], [0, 5, 3], [5, 5, 5], [5, 6, 4], [15, 7, 1], [14, 8, 1], [13, 9, 1]]
}, {
  name: 'Asia',
  origin: [52, 1],
  area: [[16, 0], [38, 5], [40, 7], [28, 17], [24, 25], [29, 29], [19, 29], [11, 24], [3, 23], [0, 20], [0, 19], [6, 13], [7, 6]],
  dots: [[16, 0, 1], [17, 1, 2], [18, 2, 2], [15, 3, 6], [28, 3, 1], [30, 3, 1], [10, 4, 2], [13, 4, 10], [24, 4, 1], [9, 5, 22], [32, 5, 1], [38, 5, 1], [7, 6, 2], [10, 6, 1], [12, 6, 27], [7, 7, 34], [7, 8, 31], [7, 9, 26], [34, 9, 3], [7, 10, 22], [31, 10, 1], [33, 10, 1], [7, 11, 21], [32, 11, 2], [7, 12, 21], [32, 12, 1], [6, 13, 22], [32, 13, 1], [6, 14, 22], [5, 15, 22], [3, 16, 2], [6, 16, 20], [2, 17, 3], [6, 17, 16], [24, 17, 1], [28, 17, 1], [1, 18, 22], [26, 18, 2], [0, 19, 24], [0, 20, 5], [6, 20, 17], [2, 21, 5], [10, 21, 14], [2, 22, 5], [11, 22, 4], [16, 22, 4], [3, 23, 3], [11, 23, 2], [17, 23, 3], [23, 23, 1], [11, 24, 2], [18, 24, 2], [23, 24, 1], [24, 25, 1], [18, 26, 1], [22, 26, 1], [18, 27, 1], [20, 27, 4], [18, 28, 1], [21, 28, 1], [23, 28, 1], [26, 28, 3], [19, 29, 1], [28, 29, 2]]
}, {
  // 21X, 40Y
  name: 'Africa',
  origin: [40, 19],
  area: [[3, 0], [6, 0], [11, 2], [16, 7], [16, 15], [11, 18], [9, 18], [0, 6], [0, 3]],
  dots: [[3, 0, 4], [2, 1, 6], [9, 1, 2], [1, 2, 11], [0, 3, 13], [0, 4, 14], [0, 5, 14], [0, 6, 16], [1, 7, 16], [2, 8, 2], [6, 8, 11], [7, 9, 9], [7, 10, 8], [7, 11, 7], [8, 12, 7], [7, 13, 8], [7, 14, 7], [16, 14, 1], [8, 15, 5], [15, 15, 2], [8, 16, 5], [9, 17, 3], [9, 18, 3]]
}, {
  name: 'Europe',
  origin: [39, 2],
  area: [[8, 0], [10, 0], [20, 2], [19, 11], [18, 13], [14, 16], [3, 16], [0, 7]],
  dots: [[8, 0, 3], [9, 1, 1], [20, 2, 1], [19, 3, 1], [12, 4, 1], [19, 4, 1], [9, 5, 6], [9, 6, 7], [17, 6, 3], [0, 7, 1], [8, 7, 12], [7, 8, 3], [11, 8, 9], [7, 9, 3], [11, 9, 9], [4, 10, 1], [7, 10, 1], [9, 10, 1], [11, 10, 9], [3, 11, 2], [7, 11, 13], [4, 12, 1], [6, 12, 13], [4, 13, 15], [5, 14, 3], [9, 14, 4], [15, 14, 2], [3, 15, 3], [8, 15, 1], [10, 15, 5], [6, 15, 2], [3, 16, 2], [10, 16, 5]]
}, {
  name: 'South America',
  origin: [22, 26],
  area: [[2, 0], [5, 0], [11, 4], [11, 8], [3, 18], [2, 17], [0, 4], [0, 3]],
  dots: [[2, 0, 4], [1, 1, 7], [1, 2, 7], [0, 3, 10], [0, 4, 12], [1, 5, 11], [2, 6, 9], [3, 7, 8], [3, 8, 8], [3, 9, 6], [3, 10, 6], [3, 11, 5], [3, 12, 3], [2, 13, 3], [2, 14, 3], [2, 15, 2], [2, 16, 2], [2, 17, 2], [3, 18, 1]]
}, {
  name: 'North America',
  origin: [0, 0],
  area: [[21, 0], [39, 0], [39, 6], [22, 26], [16, 23], [2, 12], [0, 7]],
  dots: [[22, 0, 6], [29, 0, 1], [31, 0, 1], [33, 0, 5], [20, 1, 1], [22, 1, 1], [24, 1, 2], [27, 1, 13], [17, 2, 1], [20, 2, 5], [26, 2, 13], [13, 3, 1], [19, 3, 1], [21, 3, 3], [26, 3, 14], [14, 4, 1], [16, 4, 4], [21, 4, 3], [29, 4, 11], [12, 5, 3], [16, 5, 1], [18, 5, 1], [20, 5, 3], [24, 5, 1], [30, 5, 8], [14, 6, 3], [19, 6, 1], [22, 6, 4], [31, 6, 8], [0, 7, 15], [16, 7, 1], [18, 7, 4], [24, 7, 2], [30, 7, 7], [2, 8, 20], [24, 8, 3], [29, 8, 5], [2, 9, 20], [24, 9, 2], [30, 9, 3], [1, 10, 18], [23, 10, 2], [31, 10, 1], [2, 11, 2], [8, 11, 11], [23, 11, 2], [26, 11, 1], [2, 12, 1], [8, 12, 13], [24, 12, 3], [10, 13, 12], [23, 13, 5], [11, 14, 17], [11, 15, 9], [21, 15, 6], [28, 15, 2], [11, 16, 11], [23, 16, 4], [11, 17, 14], [12, 18, 11], [12, 19, 12], [13, 20, 9], [15, 21, 3], [22, 21, 1], [16, 22, 2], [16, 23, 2], [20, 23, 1], [23, 23, 1], [18, 24, 3], [21, 25, 1], [22, 26, 1]]
}]; // FACTOR is the distance in pixels between coordinates

var FACTOR = 10;

var maxCoordinate = function maxCoordinate(a, b) {
  return [Math.max(a[0], b[0]), Math.max(a[1], b[1])];
}; // const minCoordinate = (a, b) =>
//   [Math.min(a[0], b[0]), Math.min(a[1], b[1])];
// Based on https://stackoverflow.com/a/43861247


var MAP_LAT_BOTTOM = -50.0; // empirically determined

var MAP_LAT_BOTTOM_RAD = MAP_LAT_BOTTOM * Math.PI / 180;
var MAP_LON_LEFT = -171.0; // empirically determined

var MAP_LON_RIGHT = 184.0; // empirically determined

var MAP_LON_DELTA = MAP_LON_RIGHT - MAP_LON_LEFT;

var mapValues$1 = function mapValues(extent) {
  var mapRadius = extent[0] / MAP_LON_DELTA * 360 / (2 * Math.PI);
  var mapOffsetY = Math.round(mapRadius / 2 * Math.log((1 + Math.sin(MAP_LAT_BOTTOM_RAD)) / (1 - Math.sin(MAP_LAT_BOTTOM_RAD))));
  return {
    mapRadius: mapRadius,
    mapOffsetY: mapOffsetY
  };
};

var latLonToCoord = function latLonToCoord(latLon, origin, extent) {
  var _mapValues = mapValues$1(extent),
      mapRadius = _mapValues.mapRadius,
      mapOffsetY = _mapValues.mapOffsetY;

  var x = Math.round((latLon[1] - MAP_LON_LEFT) * extent[0] / MAP_LON_DELTA);
  var latitudeRad = latLon[0] * Math.PI / 180;
  var y = extent[1] + mapOffsetY - Math.round(mapRadius / 2 * Math.log((1 + Math.sin(latitudeRad)) / (1 - Math.sin(latitudeRad))));
  return [x, y]; // the coordinate value of this point on the map image
};

var coordToLatLon = function coordToLatLon(coord, origin, extent) {
  var _mapValues2 = mapValues$1(extent),
      mapRadius = _mapValues2.mapRadius,
      mapOffsetY = _mapValues2.mapOffsetY;

  var a = (extent[1] + mapOffsetY - coord[1]) / mapRadius;
  var lat = 180 / Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
  var lon = coord[0] * MAP_LON_DELTA / extent[0] + MAP_LON_LEFT;
  return [lat, lon];
};

var buildContinentState = function buildContinentState(_ref) {
  var area = _ref.area,
      dots = _ref.dots,
      origin = _ref.origin;
  var extent = [].concat(origin);
  var stateDots = dots.map(function (segment) {
    var count = segment[2];
    var spots = [];

    for (var i = 0; i < count; i += 1) {
      spots.push('h0');
    }

    var dotCommands = spots.join(' m10,0 ');
    var x = FACTOR * (origin[0] + segment[0] + 1);
    var y = FACTOR * (origin[1] + segment[1] + 1);
    extent = maxCoordinate(extent, [origin[0] + segment[0] + segment[2], origin[1] + segment[1]]);
    return "M" + x + "," + y + " " + dotCommands;
  }).join(' ');
  var stateArea = area.map(function (point, index) {
    var x = FACTOR * (point[0] + origin[0] + 1);
    var y = FACTOR * (point[1] + origin[1] + 1);
    return "" + (index === 0 ? 'M' : 'L') + x + "," + y;
  }).join(' ') + " Z";
  var mid = [origin[0] + (extent[0] - origin[0]) / 2, origin[1] + (extent[1] - origin[1]) / 2];
  return {
    area: stateArea,
    dots: stateDots,
    origin: origin,
    extent: extent,
    mid: mid
  };
};

var buildState$2 = function buildState() {
  var continents = {}; // Build the SVG paths describing the individual dots

  var origin = [0, 0];
  var extent = [0, 0];
  CONTINENTS.forEach(function (continent) {
    continents[continent.name] = buildContinentState(continent);
    extent = maxCoordinate(extent, continents[continent.name].extent);
  });
  return {
    continents: continents,
    extent: extent,
    origin: origin,
    x: origin[0] * FACTOR,
    y: origin[1] * FACTOR,
    width: (extent[0] - origin[0] + 1) * FACTOR,
    height: (extent[1] - origin[1] + 2) * FACTOR
  };
};

var updateState = function updateState(state, _ref2) {
  var continents = _ref2.continents,
      places = _ref2.places;

  var nextState = _extends$1j({}, state);

  if (continents) {
    continents.forEach(function (continent) {
      nextState.continents[continent.name] = _extends$1j({}, state.continents[continent.name], continent);
    });
  }

  nextState.places = (places || []).map(function (_ref3) {
    var location = _ref3.location,
        place = _objectWithoutPropertiesLoose$X(_ref3, ["location"]);

    var coords = latLonToCoord(location, state.origin, state.extent);
    return _extends$1j({
      coords: coords,
      key: location.join(',')
    }, place);
  });
  return nextState;
};

var buildInteractiveProps = function buildInteractiveProps(_ref4, activeFunc, active) {
  var name = _ref4.name,
      onClick = _ref4.onClick,
      onHover = _ref4.onHover;
  return {
    role: 'button',
    'aria-label': name,
    tabIndex: '0',
    onClick: onClick ? function () {
      return onClick(name);
    } : undefined,
    onMouseOver: function onMouseOver() {
      if (!active) {
        activeFunc(name);

        if (onHover) {
          onHover(true);
        }
      }
    },
    onMouseLeave: function onMouseLeave() {
      if (active) {
        activeFunc(undefined);

        if (onHover) {
          onHover(false);
        }
      }
    },
    onFocus: function onFocus() {
      // This moves the map unnecessarily. Instead, we should check
      // the position and scroll if it isn't already visible
      // this._worldMapRef.scrollIntoView();
      if (!active) {
        activeFunc(name);
      }
    },
    onBlur: function onBlur() {
      if (active) {
        activeFunc(undefined);
      }
    }
  };
};

var WorldMap =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$Q(WorldMap, _Component);

  function WorldMap() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$I(_assertThisInitialized$E(_assertThisInitialized$E(_this)), "state", {});

    _defineProperty$I(_assertThisInitialized$E(_assertThisInitialized$E(_this)), "onMouseOver", function () {
      // track when we're over the map to avoid dealing with mouse moves
      _this.setState({
        over: true
      });
    });

    _defineProperty$I(_assertThisInitialized$E(_assertThisInitialized$E(_this)), "onMouseMove", function (event) {
      var width = _this.state.width; // determine the map coordinates for where the mouse is
      // containerRef uses the group so we can handle aspect ratio scaling

      var rect = _this.containerRef.getBoundingClientRect();

      var scale = rect.width / width; // since the SVG viewBox might be scaled

      var coords = [Math.round((event.clientX - rect.left) / scale / FACTOR), Math.round((event.clientY - rect.top) / scale / FACTOR)];

      _this.setState({
        activeCoords: coords
      });
    });

    _defineProperty$I(_assertThisInitialized$E(_assertThisInitialized$E(_this)), "onMouseLeave", function () {
      _this.setState({
        over: false,
        activeCoords: undefined
      });
    });

    return _this;
  }

  WorldMap.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.continents) {
      return updateState(buildState$2(), nextProps);
    }

    return updateState(prevState, nextProps);
  };

  var _proto = WorldMap.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        color = _this$props.color,
        onSelectPlace = _this$props.onSelectPlace,
        hoverColor = _this$props.hoverColor,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose$X(_this$props, ["color", "onSelectPlace", "hoverColor", "theme"]);

    delete rest.places;
    delete rest.continents;
    var _this$state = this.state,
        activeContinent = _this$state.activeContinent,
        activeCoords = _this$state.activeCoords,
        activePlace = _this$state.activePlace,
        continentStates = _this$state.continents,
        extent = _this$state.extent,
        origin = _this$state.origin,
        over = _this$state.over,
        placeStates = _this$state.places,
        x = _this$state.x,
        y = _this$state.y,
        width = _this$state.width,
        height = _this$state.height;
    var continents = Object.keys(continentStates).map(function (name) {
      var _continentStates$name = continentStates[name],
          area = _continentStates$name.area,
          continentColor = _continentStates$name.color,
          dots = _continentStates$name.dots,
          onClick = _continentStates$name.onClick,
          onHover = _continentStates$name.onHover;
      var active = activeContinent && activeContinent === name;
      var interactiveProps = {};

      if (onClick || onHover) {
        interactiveProps = buildInteractiveProps(continentStates[name], function (activate) {
          return _this2.setState({
            activeContinent: activate
          });
        }, active);
      }

      return React__default.createElement("g", _extends$1j({
        key: name
      }, interactiveProps), React__default.createElement("path", {
        stroke: "none",
        fill: "#fff",
        fillOpacity: "0.01",
        d: area
      }), React__default.createElement("path", {
        d: dots,
        strokeLinecap: "round",
        strokeWidth: parseMetricToNum(theme.worldMap.continent[active ? 'active' : 'base']),
        stroke: normalizeColor(continentColor || color || theme.worldMap.color, theme)
      }));
    });
    var places = placeStates.map(function (place) {
      var placeColor = place.color,
          coords = place.coords,
          key = place.key,
          name = place.name,
          onClick = place.onClick,
          onHover = place.onHover,
          restPlace = _objectWithoutPropertiesLoose$X(place, ["color", "coords", "key", "name", "onClick", "onHover"]);

      var d = "M" + FACTOR * coords[0] + ", " + FACTOR * coords[1] + " h0";
      var active = activePlace && activePlace === name;
      var interactiveProps = {};

      if (onClick || onHover) {
        interactiveProps = buildInteractiveProps(place, function (activate) {
          return _this2.setState({
            activePlace: activate
          });
        }, active);
      }

      return React__default.createElement("path", _extends$1j({
        key: key,
        strokeLinecap: "round",
        strokeWidth: parseMetricToNum(theme.worldMap.place[active ? 'active' : 'base']),
        stroke: normalizeColor(placeColor || color || theme.worldMap.color, theme)
      }, interactiveProps, restPlace, {
        d: d
      }));
    }); // If the caller is interested in onSelectPlace changes, track where the

    var interactiveProps = {};

    if (onSelectPlace) {
      interactiveProps = {
        onMouseOver: this.onMouseOver,
        onMouseMove: over ? this.onMouseMove : undefined,
        onMouseLeave: this.onMouseLeave
      };
    }

    var active;

    if (activeCoords) {
      var d = "M" + FACTOR * activeCoords[0] + ", " + FACTOR * activeCoords[1] + " h0";
      active = React__default.createElement("g", {
        stroke: "none",
        fill: "none",
        fillRule: "evenodd",
        onClick: function onClick() {
          return onSelectPlace(coordToLatLon(activeCoords, origin, extent));
        }
      }, React__default.createElement("path", {
        strokeLinecap: "round",
        strokeWidth: parseMetricToNum(theme.worldMap.place.active),
        stroke: normalizeColor(hoverColor || color || theme.worldMap.hover.color, theme),
        d: d
      }));
    }

    return React__default.createElement(StyledWorldMap, _extends$1j({
      viewBox: x + " " + y + " " + width + " " + height,
      preserveAspectRatio: "xMinYMin meet",
      width: width,
      height: height
    }, interactiveProps, rest), React__default.createElement("g", {
      ref: function ref(_ref5) {
        _this2.containerRef = _ref5;
      },
      stroke: "none",
      fill: "none",
      fillRule: "evenodd"
    }, continents), places, active);
  };

  return WorldMap;
}(React.Component);

WorldMap.defaultProps = {};
Object.setPrototypeOf(WorldMap.defaultProps, defaultProps$2);
var WorldMapDoc;

{
  WorldMapDoc = require('./doc').doc(WorldMap); // eslint-disable-line global-require
}

var WorldMapWrapper = compose(styled.withTheme)(WorldMapDoc || WorldMap);

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function () {
      var _componentDidCatch = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(error, info) {
        var errorInfo, lineBreak;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                errorInfo = '';
                lineBreak = '%0D%0A';

                try {
                  // format the error information
                  errorInfo = "".concat(error.toString()).concat(info ? info.componentStack.replace(/\s{4}/gi, "".concat(lineBreak, "    ")) : '');
                } catch (err) {
                  // catch any errors in formatting the error information and log those
                  console.error(err);
                } // Display fallback UI


                this.setState({
                  hasError: true,
                  errorInfo: errorInfo
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidCatch(_x, _x2) {
        return _componentDidCatch.apply(this, arguments);
      }

      return componentDidCatch;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          errorInfo = _this$state.errorInfo,
          hasError = _this$state.hasError;

      if (hasError) {
        return React__default.createElement("section", {
          className: "error-boundary"
        }, React__default.createElement("h2", null, "An Error has Occured."), React__default.createElement("p", null, errorInfo));
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(React__default.Component);

var _extends$2E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Close = function Close(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$2E({ viewBox: '0 0 24 24', a11yTitle: 'Close' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,3 L21,21 M3,21 L21,3' })
  );
};

var _extends$60 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Menu$1 = function Menu(props) {
  return React__default.createElement(
    StyledIcon,
    _extends$60({ viewBox: '0 0 24 24', a11yTitle: 'Menu' }, props),
    React__default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,19 L22,19 M2,5 L22,5 M2,12 L22,12' })
  );
};

var ADD_TOAST = 'ADD_TOAST';
var REMOVE_TOAST = 'REMOVE_TOAST';

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning$1(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning$1('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.



var rng = function nodeRNG() {
  return crypto.randomBytes(16);
};

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

var bytesToUuid_1 = bytesToUuid;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;

var store = createStore(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    toasts: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  //if we are embedded, proxy
  if (window.self.location !== window.top.location) {
    console.log('postMessage');
    window.top.postMessage(action, 'http://localhost:3000');
    return state;
  }

  var newState;

  switch (action.type) {
    case ADD_TOAST:
      newState = Object.assign({}, state);
      newState.toasts = state.toasts.slice();
      newState.toasts.push({
        id: v4_1(),
        text: action.text,
        background: action.background
      });
      return newState;

    case REMOVE_TOAST:
      newState = Object.assign({}, state);
      newState.toasts = state.toasts.slice();
      var toastIndex = newState.toasts.findIndex(function (n) {
        return n.id === action.id;
      });

      if (toastIndex !== -1) {
        newState.toasts.splice(toastIndex, 1);
      }

      return newState;

    default:
      return state;
  }
});

var removeToast = function removeToast(id) {
  store.dispatch({
    type: REMOVE_TOAST,
    id: id
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    toasts: state.toasts
  };
};

var Toast$1 = function Toast$$1(_ref) {
  var toasts = _ref.toasts;

  if (toasts && Array.isArray(toasts) && toasts.length > 0) {
    var toastsItems = toasts.map(function (m) {
      return React__default.createElement(Box, {
        background: m.background || 'accent-1',
        pad: "medium",
        elevation: "xsmall",
        round: "small",
        direction: "row",
        justify: "between",
        align: "center",
        gap: "medium"
      }, React__default.createElement(TextWrapper, {
        size: "large"
      }, m.text), React__default.createElement(Close, {
        onClick: function onClick() {
          removeToast(m.id);
        }
      }));
    });
    return React__default.createElement(LayerWrapper, {
      modal: false,
      position: "bottom",
      style: {
        background: 'transparent'
      }
    }, React__default.createElement(Box, {
      gap: "small",
      margin: {
        bottom: 'small'
      }
    }, toastItems));
  } else {
    return null;
  }
};

var Toast$2 = reactRedux.connect(mapStateToProps)(Toast$1);

function Navigation(props) {
  var navigationItems = props.navigationItems,
      _onClick = props.onClick;
  var items = navigationItems.map(function (navItem) {
    return {
      onClick: function onClick() {
        return _onClick(navItem);
      },
      label: navItem.label
    };
  });
  return React__default.createElement(styled.ThemeContext.Consumer, null, function (theme) {
    return React__default.createElement(MenuWrapper, {
      icon: React__default.createElement(Box, {
        pad: "xsmall",
        border: "all",
        round: "full"
      }, React__default.createElement(Menu$1, null)),
      items: items,
      dropAlign: {
        top: 'bottom'
      },
      dropBackground: theme.dark ? 'dark-2' : 'light-1'
    });
  });
}

var ArrowApp =
/*#__PURE__*/
function (_Component) {
  _inherits(ArrowApp, _Component);

  function ArrowApp() {
    _classCallCheck(this, ArrowApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArrowApp).apply(this, arguments));
  }

  _createClass(ArrowApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedTheme = _this$props.selectedTheme,
          navItems = _this$props.navItems,
          onNavItemClick = _this$props.onNavItemClick;
      return React__default.createElement(Grommet, {
        full: true,
        theme: themes[selectedTheme]
      }, React__default.createElement(ErrorBoundary, null, React__default.createElement(Box, {
        direction: "column",
        flex: true,
        fill: true
      }, React__default.createElement(Box, {
        tag: "header",
        justify: "between",
        direction: "row",
        align: "center",
        border: "bottom"
      }, React__default.createElement(Box, {
        tag: "nav",
        direction: "row",
        align: "center"
      }, React__default.createElement(Navigation, {
        navigationItems: navItems,
        onClick: onNavItemClick
      }))), React__default.createElement(React.Suspense, {
        fallback: React__default.createElement("div", null, "loading"),
        maxDuration: 300
      }, this.props.children), React__default.createElement(reactRedux.Provider, {
        store: store
      }, React__default.createElement(Toast$2, null)))));
    }
  }]);

  return ArrowApp;
}(React.Component);

var loader = (function (props) {
  return React__default.createElement("div", {
    className: "loader ".concat(props.className)
  });
});

var theme$1 = {
  colors: colors,
  reportTheme: reportTheme,
  constants: constants,
  themes: themes
};

exports.theme = theme$1;
exports.ArrowApp = ArrowApp;
exports.Navigation = Navigation;
exports.ErrorBoundary = ErrorBoundary;
exports.Loader = loader;
