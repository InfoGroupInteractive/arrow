'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));
var _getPrototypeOf = _interopDefault(require('@babel/runtime/helpers/getPrototypeOf'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/inherits'));
var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var grommet = require('grommet');
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var grommetIcons = require('grommet-icons');
var redux = require('redux');
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
var vapor = Object.assign({}, light, {
  brand: '#FF71CE',
  'accent-1': '#B967FF',
  'accent-1-alt': '#D5DD48',
  'accent-2': '#01CDFE',
  'accent-2-alt': '#28C0D2',
  'accent-3': '#05FFA1',
  'accent-3-alt': '#F4985F',
  'accent-4': '#FFFB96',
  'accent-4-alt': '#807AB9',
  'dark-1': '#FF71CE',
  'dark-2': '#B967FF',
  'dark-3': '#01CDFE',
  'dark-4': '#05FFA1',
  'dark-5': '#FFFB96',
  'dark-6': '#103',
  'light-1': '#FF71CE',
  'light-2': '#B967FF',
  'light-3': '#01CDFE',
  'light-4': '#05FFA1',
  'light-5': '#FFFB96',
  'light-6': '#336',
  'status-critical': '#EB3C3C',
  'status-error': '#EB3C3C',
  'status-warning': '#F7E463',
  'status-ok': '#329B46'
});
var theme = {
  light: light,
  dark: dark,
  vapor: vapor
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
var VAPOR = 'vapor';
var SET_THEME = 'SET_THEME';

var constants = /*#__PURE__*/Object.freeze({
    LIGHT: LIGHT,
    DARK: DARK,
    VAPOR: VAPOR,
    SET_THEME: SET_THEME
});

var font = {
  family: '"Open Sans", sans-serif',
  size: '14px',
  height: '16px'
};
var glowbal = {
  font: font,
  control: {
    border: {
      width: '1px',
      radius: '10px',
      color: 'border'
    }
  },
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
  xsmall: '6px',
  small: '9px',
  medium: '18px',
  large: '36px',
  xlarge: '72px',
  responsiveBreakpoint: 'small'
};
var button = {
  padding: {
    vertical: '0.6em',
    horizontal: '0.8em'
  },
  border: {
    radius: '10px',
    width: '1px'
  }
};
var text = {
  "xsmall": {
    "size": "10px",
    "height": "12px",
    "maxWidth": "288px"
  },
  "small": {
    "size": "12px",
    "height": "14px",
    "maxWidth": "336px"
  },
  "medium": {
    "size": "14px",
    "height": "16px",
    "maxWidth": "432px"
  },
  "large": {
    "size": "18px",
    "height": "21px",
    "maxWidth": "528px"
  },
  "xlarge": {
    "size": "26px",
    "height": "30px",
    "maxWidth": "624px"
  },
  "xxlarge": {
    "size": "32px",
    "height": "36px",
    "maxWidth": "816px"
  }
};
var textInput = {
  extend: function extend() {
    return {
      padding: '0.6em 0.8em'
    };
  }
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
  size: size,
  button: button,
  text: text,
  textInput: textInput
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
  size: size,
  button: button,
  text: text,
  textInput: textInput
};
var vapor$1 = {
  global: Object.assign({}, glowbal, {
    colors: theme.vapor
  }),
  anchor: Object.assign({}, anchor, {
    color: dark1
  }),
  edgeSize: edgeSize,
  icon: {
    color: dark4
  },
  size: size,
  button: button,
  text: text,
  textInput: textInput
};

var themes = /*#__PURE__*/Object.freeze({
    dark: dark$1,
    light: light$1,
    vapor: vapor$1
});

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
      _regeneratorRuntime.mark(function _callee(error, info) {
        var errorInfo, lineBreak;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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

var mapStateToProps = function mapStateToProps(state) {
  return {
    toasts: state.toasts
  };
};

var Toast = function Toast(_ref) {
  var toasts = _ref.toasts,
      onClose = _ref.onClose;

  if (toasts && Array.isArray(toasts) && toasts.length > 0) {
    var toastItems = toasts.map(function (m) {
      return React__default.createElement(grommet.Box, {
        key: m.id,
        background: m.background || 'accent-1',
        pad: "medium",
        elevation: "xsmall",
        round: "small",
        direction: "row",
        justify: "between",
        align: "center",
        gap: "medium"
      }, React__default.createElement(grommet.Text, {
        size: "large"
      }, m.text), React__default.createElement(grommetIcons.Close, {
        onClick: function onClick() {
          onClose(m.id);
        }
      }));
    });
    return React__default.createElement(grommet.Layer, {
      modal: false,
      position: "bottom",
      style: {
        background: 'transparent'
      }
    }, React__default.createElement(grommet.Box, {
      gap: "small",
      margin: {
        bottom: 'small'
      }
    }, toastItems));
  } else {
    return null;
  }
};

var Toast$1 = reactRedux.connect(mapStateToProps)(Toast);

var ADD_TOAST = 'ADD_TOAST';
var REMOVE_TOAST = 'REMOVE_TOAST';

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

var toastReducers = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    case ADD_TOAST:
      newState = state.slice();
      newState.push({
        id: v4_1(),
        text: action.text,
        background: action.background
      });
      return newState;

    case REMOVE_TOAST:
      newState = state.slice();
      var toastIndex = newState.findIndex(function (n) {
        return n.id === action.id;
      });

      if (toastIndex !== -1) {
        newState.splice(toastIndex, 1);
      }

      return newState;

    default:
      return state;
  }
});

var themeReducers = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LIGHT;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_THEME:
      return action.theme || LIGHT;

    default:
      return state;
  }
});

var PROXYABLE_TYPES = [ADD_TOAST, REMOVE_TOAST, SET_THEME];
var ProxyMiddleware = (function (store) {
  return function (next) {
    return function (action) {
      //if we are embedded, proxy action to parent
      if (window.embeddedArrow && !action.__processAction__ && PROXYABLE_TYPES.indexOf(action.type) !== -1) {
        console.log('postMessage');
        window.top.postMessage(action, 'http://localhost:3000');
      } else {
        return next(action);
      }
    };
  };
});

window.embeddedArrow = window.self.location !== window.top.location;
var store = redux.createStore(redux.combineReducers({
  toasts: toastReducers,
  theme: themeReducers
}), redux.applyMiddleware(ProxyMiddleware));
window.addEventListener('message', function (e) {
  //verify origin and check for type property (required for action)
  if (e.origin !== 'http://localhost:3000' || !e.data.type) {
    return;
  } //assign key so we know not to process this action instead of proxy


  var action = Object.assign({
    __processAction__: true
  }, e.data); //dispatch that jazz

  store.dispatch(action);
});

if (window.embeddedArrow) {
  window.top.postMessage({
    type: '__initialize__'
  }, 'http://localhost:3000');
}

var createToast = function createToast(text, background) {
  store.dispatch(createToastAction(text, background));
};
var removeToast = function removeToast(id) {
  store.dispatch(removeToastAction(id));
};
var removeToastAction = function removeToastAction(id) {
  return {
    type: REMOVE_TOAST,
    id: id
  };
};
var createToastAction = function createToastAction(text, background) {
  return {
    type: ADD_TOAST,
    text: text,
    background: background
  };
};

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
  return React__default.createElement(grommet.ThemeContext.Consumer, null, function (theme) {
    return React__default.createElement(grommet.Menu, {
      icon: React__default.createElement(grommet.Box, {
        pad: "xsmall",
        border: "all",
        round: "full"
      }, React__default.createElement(grommetIcons.Menu, null)),
      items: items,
      dropAlign: {
        top: 'bottom'
      },
      dropBackground: theme.dark ? 'dark-2' : 'light-1'
    });
  });
}

var Loader = (function (props) {
  return React__default.createElement("div", {
    className: "loader ".concat(props.className)
  });
});

var ArrowApp =
/*#__PURE__*/
function (_Component) {
  _inherits(ArrowApp, _Component);

  function ArrowApp(props) {
    var _this;

    _classCallCheck(this, ArrowApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrowApp).call(this, props));
    _this.state = {
      selectedTheme: store.getState().theme
    };
    var unsubscribe = store.subscribe(function () {
      var newState = store.getState();

      if (newState.theme && newState.theme !== _this.state.selectedTheme) {
        _this.setState({
          selectedTheme: newState.theme
        });
      }
    });
    return _this;
  }

  _createClass(ArrowApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          navItems = _this$props.navItems,
          onNavItemClick = _this$props.onNavItemClick;
      var selectedTheme = this.state.selectedTheme;
      return React__default.createElement(grommet.Grommet, {
        full: true,
        theme: themes[selectedTheme]
      }, React__default.createElement(ErrorBoundary, null, React__default.createElement(grommet.Box, {
        direction: "column",
        flex: true,
        fill: true
      }, !window.embeddedArrow ? React__default.createElement(grommet.Box, {
        tag: "header",
        justify: "between",
        direction: "row",
        align: "center",
        border: "bottom"
      }, React__default.createElement(grommet.Box, {
        tag: "nav",
        direction: "row",
        align: "center"
      }, React__default.createElement(Navigation, {
        navigationItems: navItems,
        onClick: onNavItemClick
      }))) : null, React__default.createElement(React.Suspense, {
        fallback: React__default.createElement(Loader, null),
        maxDuration: 300
      }, this.props.children), React__default.createElement(reactRedux.Provider, {
        store: store
      }, React__default.createElement(Toast$1, {
        onClose: removeToast
      })))));
    }
  }]);

  return ArrowApp;
}(React.Component);

var setTheme = function setTheme(theme) {
  store.dispatch({
    type: SET_THEME,
    theme: theme
  });
};

var TagInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TagInput, _PureComponent);

  function TagInput() {
    _classCallCheck(this, TagInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagInput).apply(this, arguments));
  }

  _createClass(TagInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          values = _this$props.values,
          value = _this$props.value,
          onRemoveValue = _this$props.onRemoveValue,
          onAddValue = _this$props.onAddValue,
          onValueChange = _this$props.onValueChange,
          isInputDisabled = _this$props.isInputDisabled,
          suggestions = _this$props.suggestions,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'text' : _this$props$type;
      return React__default.createElement(grommet.Box, {
        fill: true,
        direction: "row",
        border: "all",
        round: "xsmall",
        flex: true
      }, Array.isArray(values) && values.length > 0 ? React__default.createElement(grommet.Box, {
        direction: "row",
        gap: "xsmall",
        margin: {
          horizontal: 'xsmall'
        },
        style: {
          maxWidth: '80%'
        },
        overflow: "auto"
      }, values.map(function (v) {
        return React__default.createElement(grommet.Box, {
          direction: "row",
          round: "xsmall",
          pad: "xxsmall",
          key: "value-".concat(v),
          background: "dark-3",
          flex: false,
          fill: false,
          gap: "xsmall",
          alignSelf: "center",
          align: "center"
        }, React__default.createElement(grommet.Text, {
          size: "small"
        }, v), React__default.createElement(grommetIcons.Close, {
          size: "small",
          onClick: function onClick() {
            onRemoveValue(v);
          }
        }));
      })) : null, React__default.createElement(grommet.Box, {
        fill: true,
        flex: true
      }, React__default.createElement(grommet.TextInput, {
        type: type,
        disabled: isInputDisabled //can only multi-select for =
        ,
        plain: true,
        value: value,
        onChange: function onChange(e) {
          onValueChange(e.target.value);
        },
        onSelect: function onSelect(e) {
          if (_this._blurTimeout) {
            clearTimeout(_this._blurTimeout);
            delete _this._blueTimeout;
          }

          onAddValue(e.suggestion);
        },
        onKeyUp: function onKeyUp(e) {
          if (e.key === 'Enter' && value !== '') {
            onAddValue(value);
          }
        },
        onBlur: function onBlur() {
          _this._blurTimeout = setTimeout(function () {
            if (value !== '') {
              onAddValue(value);
            }
          }, 300); //TODO: figure out the correct way to do this, so typed in values get selected when the user leaves
          //but they DON'T get selected when the user starts typing, then selects a suggestion                        
        },
        suggestions: suggestions
      })));
    }
  }]);

  return TagInput;
}(React.PureComponent);

var doFetch = function doFetch(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var body = arguments.length > 2 ? arguments[2] : undefined;
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    'Content-Type': 'application/json'
  };
  var plomise = new Promise(function (resolve, reject) {
    fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
    }).then(function (res) {
      res.json().then(function (json) {
        if (res.ok) {
          //200 level error
          resolve(json);
        } else {
          reject(json); //fail with error response from server
        }
      }).catch(function (e) {
        return reject(e);
      }); //error processing json response      
    }).catch(function (e) {
      return reject(e);
    }); //fetch error   
  });
  return plomise;
};

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
exports.Loader = Loader;
exports.Toast = Toast$1;
exports.createToast = createToast;
exports.removeToast = removeToast;
exports.removeToastAction = removeToastAction;
exports.createToastAction = createToastAction;
exports.toastReducers = toastReducers;
exports.setTheme = setTheme;
exports.TagInput = TagInput;
exports.doFetch = doFetch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJzcmMvdGhlbWUvY29sb3JzLmpzIiwic3JjL3RoZW1lL3JlcG9ydC10aGVtZS5qcyIsInNyYy90aGVtZS90aGVtZS5jb25zdGFudHMuanMiLCJzcmMvdGhlbWUvdGhlbWUuanMiLCJzcmMvZXJyb3ItYm91bmRhcnkvZXJyb3ItYm91bmRhcnkuanMiLCJzcmMvdG9hc3QvdG9hc3QuanMiLCJzcmMvdG9hc3QvdG9hc3QuY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwic3JjL3RvYXN0L3RvYXN0LnJlZHVjZXJzLmpzIiwic3JjL3RoZW1lL3RoZW1lLnJlZHVjZXJzLmpzIiwic3JjL3Byb3h5LW1pZGRsZXdhcmUuanMiLCJzcmMvc3RvcmUuanMiLCJzcmMvdG9hc3QvdG9hc3QuYWN0aW9ucy5qcyIsInNyYy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJzcmMvbG9hZGVyL2xvYWRlci5qcyIsInNyYy9hcnJvdy1hcHAuanMiLCJzcmMvdGhlbWUvdGhlbWUuYWN0aW9ucy5qcyIsInNyYy90YWctaW5wdXQvdGFnLWlucHV0LmpzIiwic3JjL3V0aWxzL2ZldGNoLXV0aWxzLmpzIiwiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJyYW5kID0gJyM1NEI5NDgnO1xuZXhwb3J0IGNvbnN0IGFjY2VudDEgPSAnI0VDRTY0QSc7XG5leHBvcnQgY29uc3QgYWNjZW50MUFsdCA9ICcjRDVERDQ4JztcbmV4cG9ydCBjb25zdCBhY2NlbnQyID0gJyMwOEIwQkMnO1xuZXhwb3J0IGNvbnN0IGFjY2VudDJBbHQgPSAnIzI4QzBEMic7XG5leHBvcnQgY29uc3QgYWNjZW50MyA9ICcjRjI4MDQ5JztcbmV4cG9ydCBjb25zdCBhY2NlbnQzQWx0ID0gJyNGNDk4NUYnO1xuZXhwb3J0IGNvbnN0IGFjY2VudDQgPSAnIzZBNjZBQSc7XG5leHBvcnQgY29uc3QgYWNjZW50NEFsdCA9ICcjODA3QUI5JztcbmV4cG9ydCBjb25zdCBkYXJrMSA9ICcjMjMxRjIwJztcbmV4cG9ydCBjb25zdCBkYXJrMiA9ICcjMzAzMjM0JztcbmV4cG9ydCBjb25zdCBkYXJrMyA9ICcjNDM0NDQ1JztcbmV4cG9ydCBjb25zdCBkYXJrNCA9ICcjNTg1OTVCJztcbmV4cG9ydCBjb25zdCBkYXJrNSA9ICcjNkQ2RTcxJztcbmV4cG9ydCBjb25zdCBkYXJrNiA9ICcjN0U4MDgyJztcbmV4cG9ydCBjb25zdCBsaWdodDEgPSAnI0Y2RjZGNic7XG5leHBvcnQgY29uc3QgbGlnaHQyID0gJyNFNEU2RTgnO1xuZXhwb3J0IGNvbnN0IGxpZ2h0MyA9ICcjRDBEMkQ0JztcbmV4cG9ydCBjb25zdCBsaWdodDQgPSAnI0JDQkVDMCc7XG5leHBvcnQgY29uc3QgbGlnaHQ1ID0gJyNBN0E5QUMnO1xuZXhwb3J0IGNvbnN0IGxpZ2h0NiA9ICcjOTM5NTk4JztcbmV4cG9ydCBjb25zdCBlcnJvciA9ICcjRUIzQzNDJztcbmV4cG9ydCBjb25zdCB3YXJuaW5nID0gJyNGN0U0NjMnO1xuZXhwb3J0IGNvbnN0IHN1Y2Nlc3MgPSAnIzMyOUI0Nic7XG5cbmNvbnN0IGxpZ2h0ID0ge1xuICAgIGJyYW5kOiBicmFuZCxcbiAgICBjb250cm9sOiBicmFuZCxcbiAgICBmb2N1czogYWNjZW50MSxcbiAgICBwbGFjZWhvbGRlcjogbGlnaHQ1LFxuICAgIGJvcmRlcjogbGlnaHQzLFxuICAgIHRleHQ6IHtcbiAgICAgICAgbGlnaHQ6IGRhcmsxXG4gICAgfSxcbiAgICAnYWNjZW50LTEnOiBhY2NlbnQxLFxuICAgICdhY2NlbnQtMic6IGFjY2VudDIsXG4gICAgJ2FjY2VudC0zJzogYWNjZW50MyxcbiAgICAnYWNjZW50LTQnOiBhY2NlbnQ0LFxuICAgICdkYXJrLTEnOiBkYXJrMSxcbiAgICAnZGFyay0yJzogZGFyazIsXG4gICAgJ2RhcmstMyc6IGRhcmszLFxuICAgICdkYXJrLTQnOiBkYXJrNCxcbiAgICAnZGFyay01JzogZGFyazUsXG4gICAgJ2RhcmstNic6IGRhcms2LFxuICAgICdsaWdodC0xJzogbGlnaHQxLFxuICAgICdsaWdodC0yJzogbGlnaHQyLFxuICAgICdsaWdodC0zJzogbGlnaHQzLFxuICAgICdsaWdodC00JzogbGlnaHQ0LFxuICAgICdsaWdodC01JzogbGlnaHQ1LFxuICAgICdsaWdodC02JzogbGlnaHQ2LFxuICAgICdzdGF0dXMtY3JpdGljYWwnOiBlcnJvcixcbiAgICAnc3RhdHVzLWVycm9yJzogZXJyb3IsXG4gICAgJ3N0YXR1cy13YXJuaW5nJzogd2FybmluZyxcbiAgICAnc3RhdHVzLW9rJzogc3VjY2VzcyxcbiAgICAnc3RhdHVzLXVua25vd24nOiBsaWdodDYsXG4gICAgJ3N0YXR1cy1kaXNhYmxlZCc6IGxpZ2h0NlxufTtcblxuY29uc3QgZGFyayA9IE9iamVjdC5hc3NpZ24oe30sIGxpZ2h0LCB7XG4gICAgYmFja2dyb3VuZDogZGFyazEsXG4gICAgZm9jdXM6IGFjY2VudDFBbHQsXG4gICAgYm9yZGVyOiBkYXJrMyxcbiAgICB0ZXh0OiB7XG4gICAgICAgIGRhcms6IGxpZ2h0M1xuICAgIH0sXG4gICAgJ2FjY2VudC0xJzogYWNjZW50MUFsdCxcbiAgICAnYWNjZW50LTInOiBhY2NlbnQyQWx0LFxuICAgICdhY2NlbnQtMyc6IGFjY2VudDNBbHQsXG4gICAgJ2FjY2VudC00JzogYWNjZW50NEFsdFxufSk7XG5cbmNvbnN0IHZhcG9yID0gT2JqZWN0LmFzc2lnbih7fSwgbGlnaHQsIHtcbiAgICBicmFuZDogJyNGRjcxQ0UnLFxuICAgICdhY2NlbnQtMSc6ICcjQjk2N0ZGJyxcbiAgICAnYWNjZW50LTEtYWx0JzogJyNENURENDgnLFxuICAgICdhY2NlbnQtMic6ICcjMDFDREZFJyxcbiAgICAnYWNjZW50LTItYWx0JzogJyMyOEMwRDInLFxuICAgICdhY2NlbnQtMyc6ICcjMDVGRkExJyxcbiAgICAnYWNjZW50LTMtYWx0JzogJyNGNDk4NUYnLFxuICAgICdhY2NlbnQtNCc6ICcjRkZGQjk2JyxcbiAgICAnYWNjZW50LTQtYWx0JzogJyM4MDdBQjknLFxuICAgICdkYXJrLTEnOiAnI0ZGNzFDRScsXG4gICAgJ2RhcmstMic6ICcjQjk2N0ZGJyxcbiAgICAnZGFyay0zJzogJyMwMUNERkUnLFxuICAgICdkYXJrLTQnOiAnIzA1RkZBMScsXG4gICAgJ2RhcmstNSc6ICcjRkZGQjk2JyxcbiAgICAnZGFyay02JzogJyMxMDMnLFxuICAgICdsaWdodC0xJzogJyNGRjcxQ0UnLFxuICAgICdsaWdodC0yJzogJyNCOTY3RkYnLFxuICAgICdsaWdodC0zJzogJyMwMUNERkUnLFxuICAgICdsaWdodC00JzogJyMwNUZGQTEnLFxuICAgICdsaWdodC01JzogJyNGRkZCOTYnLFxuICAgICdsaWdodC02JzogJyMzMzYnLFxuICAgICdzdGF0dXMtY3JpdGljYWwnOiAnI0VCM0MzQycsXG4gICAgJ3N0YXR1cy1lcnJvcic6ICcjRUIzQzNDJyxcbiAgICAnc3RhdHVzLXdhcm5pbmcnOiAnI0Y3RTQ2MycsXG4gICAgJ3N0YXR1cy1vayc6ICAnIzMyOUI0Nidcbn0pO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gICAgbGlnaHQsXG4gICAgZGFyayxcbiAgICB2YXBvclxufTtcbiIsImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBnZXRUaGVtZSA9IChpc0RhcmspID0+IHtcbiAgICBjb25zdCBkZWZhdWx0VGV4dENvbG9yID0gaXNEYXJrID8gY29sb3JzLmxpZ2h0MyA6IGNvbG9ycy5kYXJrMztcbiAgICBjb25zdCBkZWZhdWx0Rm9udFNpemUgPSAxMTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGF4aXM6IHtcbiAgICAgICAgICAgIGRvbWFpbjoge1xuICAgICAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBjb2xvcnMuZGFyazYsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGRlZmF1bHRUZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBkZWZhdWx0Rm9udFNpemVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBkZWZhdWx0VGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZGVmYXVsdEZvbnRTaXplXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBjb2xvcnMubGlnaHQzLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZHM6IHtcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICBmaWxsOiBkZWZhdWx0VGV4dENvbG9yLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBkZWZhdWx0Rm9udFNpemVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgZmlsbDogZGVmYXVsdFRleHRDb2xvcixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogZGVmYXVsdEZvbnRTaXplXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIGxpbmVDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgbGluZVN0cm9rZVdpZHRoOiAxLFxuICAgICAgICAgICAgdGV4dENvbG9yOiBkZWZhdWx0VGV4dENvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IGRlZmF1bHRGb250U2l6ZVxuICAgICAgICB9LFxuICAgICAgICBkb3RzOiB7XG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgZmlsbDogZGVmYXVsdFRleHRDb2xvcixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogZGVmYXVsdEZvbnRTaXplXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzRGFyayA/ICcjMDAwJyA6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzVweCA5cHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFzaWM6IHtcbiAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZToge30sXG4gICAgICAgICAgICB0YWJsZUNlbGw6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDVweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59IiwiZXhwb3J0IGNvbnN0IExJR0hUID0gJ2xpZ2h0JztcbmV4cG9ydCBjb25zdCBEQVJLID0gJ2RhcmsnO1xuZXhwb3J0IGNvbnN0IFZBUE9SID0gJ3ZhcG9yJztcbmV4cG9ydCBjb25zdCBTRVRfVEhFTUUgPSAnU0VUX1RIRU1FJztcbiIsImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5cbmNvbnN0IGZvbnQgPSB7XG4gICAgZmFtaWx5OiAnXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZicsXG4gICAgc2l6ZTogJzE0cHgnLFxuICAgIGhlaWdodDogJzE2cHgnLFxufTtcblxuY29uc3QgZ2xvd2JhbCA9IHtcbiAgICBmb250OiBmb250LFxuICAgIGNvbnRyb2w6IHtcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB3aWR0aDogJzFweCcsXG4gICAgICAgICAgICByYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgIGNvbG9yOiAnYm9yZGVyJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgICB3ZWlnaHQ6IDQwMFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgbWVkaXVtOiB7XG4gICAgICAgICAgICB2YWx1ZTogMTIwMFxuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgYW5jaG9yID0ge1xuICAgIGZvbnRXZWlnaHQ6IDQwMFxufTtcblxuY29uc3Qgc2l6ZSA9IHtcbiAgICB4eHNtYWxsOiAnNDhweCcsXG4gICAgeHNtYWxsOiAnOTZweCcsXG4gICAgc21hbGw6ICcxOTJweCcsXG4gICAgbWVkaXVtOiAnMzg0cHgnLFxuICAgIGxhcmdlOiAnNTc2cHgnLFxuICAgIHhsYXJnZTogJzc2OHB4JyxcbiAgICB4eGxhcmdlOiAnMTE1MnB4JyxcbiAgICBmdWxsOiAnMTAwJSdcbn07XG5cbmNvbnN0IGVkZ2VTaXplID0ge1xuICAgIG5vbmU6ICcwcHgnLFxuICAgIGhhaXI6ICcxcHgnLFxuICAgIHh4c21hbGw6ICczcHgnLFxuICAgIHhzbWFsbDogJzZweCcsXG4gICAgc21hbGw6ICc5cHgnLFxuICAgIG1lZGl1bTogJzE4cHgnLFxuICAgIGxhcmdlOiAnMzZweCcsXG4gICAgeGxhcmdlOiAnNzJweCcsXG4gICAgcmVzcG9uc2l2ZUJyZWFrcG9pbnQ6ICdzbWFsbCdcbn07XG5cbmNvbnN0IGJ1dHRvbiA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICAgIHZlcnRpY2FsOiAnMC42ZW0nLFxuICAgICAgICBob3Jpem9udGFsOiAnMC44ZW0nXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgICAgcmFkaXVzOiAnMTBweCcsXG4gICAgICAgIHdpZHRoOiAnMXB4J1xuICAgIH1cblxufVxuXG5jb25zdCB0ZXh0ID0ge1xuICAgIFwieHNtYWxsXCI6IHsgXCJzaXplXCI6IFwiMTBweFwiLCBcImhlaWdodFwiOiBcIjEycHhcIiwgXCJtYXhXaWR0aFwiOiBcIjI4OHB4XCIgfSxcbiAgICBcInNtYWxsXCI6IHsgXCJzaXplXCI6IFwiMTJweFwiLCBcImhlaWdodFwiOiBcIjE0cHhcIiwgXCJtYXhXaWR0aFwiOiBcIjMzNnB4XCIgfSxcbiAgICBcIm1lZGl1bVwiOiB7IFwic2l6ZVwiOiBcIjE0cHhcIiwgXCJoZWlnaHRcIjogXCIxNnB4XCIsIFwibWF4V2lkdGhcIjogXCI0MzJweFwiIH0sXG4gICAgXCJsYXJnZVwiOiB7IFwic2l6ZVwiOiBcIjE4cHhcIiwgXCJoZWlnaHRcIjogXCIyMXB4XCIsIFwibWF4V2lkdGhcIjogXCI1MjhweFwiIH0sXG4gICAgXCJ4bGFyZ2VcIjogeyBcInNpemVcIjogXCIyNnB4XCIsIFwiaGVpZ2h0XCI6IFwiMzBweFwiLCBcIm1heFdpZHRoXCI6IFwiNjI0cHhcIiB9LFxuICAgIFwieHhsYXJnZVwiOiB7IFwic2l6ZVwiOiBcIjMycHhcIiwgXCJoZWlnaHRcIjogXCIzNnB4XCIsIFwibWF4V2lkdGhcIjogXCI4MTZweFwiIH1cbn1cblxuY29uc3QgdGV4dElucHV0ID0ge1xuICAgIGV4dGVuZDogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZzogJzAuNmVtIDAuOGVtJ1xuICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRhcmsgPSB7XG4gICAgZ2xvYmFsOiBPYmplY3QuYXNzaWduKHt9LCBnbG93YmFsLCB7XG4gICAgICAgIGNvbG9yczogY29sb3JzLnRoZW1lLmRhcmtcbiAgICB9KSxcbiAgICBhbmNob3I6IE9iamVjdC5hc3NpZ24oe30sIGFuY2hvciwge1xuICAgICAgICBjb2xvcjogY29sb3JzLmxpZ2h0MlxuICAgIH0pLFxuICAgIGVkZ2VTaXplLFxuICAgIGljb246IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5saWdodDNcbiAgICB9LFxuICAgIHNpemUsXG4gICAgYnV0dG9uLFxuICAgIHRleHQsXG4gICAgdGV4dElucHV0XG59O1xuXG5leHBvcnQgY29uc3QgbGlnaHQgPSB7XG4gICAgZ2xvYmFsOiBPYmplY3QuYXNzaWduKHt9LCBnbG93YmFsLCB7XG4gICAgICAgIGNvbG9yczogY29sb3JzLnRoZW1lLmxpZ2h0XG4gICAgfSksXG4gICAgYW5jaG9yOiBPYmplY3QuYXNzaWduKHt9LCBhbmNob3IsIHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5kYXJrMVxuICAgIH0pLFxuICAgIGVkZ2VTaXplLFxuICAgIGljb246IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5kYXJrNFxuICAgIH0sXG4gICAgc2l6ZSxcbiAgICBidXR0b24sXG4gICAgdGV4dCxcbiAgICB0ZXh0SW5wdXRcbn07XG5cbmV4cG9ydCBjb25zdCB2YXBvciA9IHtcbiAgICBnbG9iYWw6IE9iamVjdC5hc3NpZ24oe30sIGdsb3diYWwsIHtcbiAgICAgICAgY29sb3JzOiBjb2xvcnMudGhlbWUudmFwb3JcbiAgICB9KSxcbiAgICBhbmNob3I6IE9iamVjdC5hc3NpZ24oe30sIGFuY2hvciwge1xuICAgICAgICBjb2xvcjogY29sb3JzLmRhcmsxXG4gICAgfSksXG4gICAgZWRnZVNpemUsXG4gICAgaWNvbjoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmRhcms0XG4gICAgfSxcbiAgICBzaXplLFxuICAgIGJ1dHRvbixcbiAgICB0ZXh0LFxuICAgIHRleHRJbnB1dFxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBpbmZvKSB7XG4gICAgICAgIGxldCBlcnJvckluZm8gPSAnJzsgICAgICAgIFxuICAgICAgICBsZXQgbGluZUJyZWFrID0gJyUwRCUwQSc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBmb3JtYXQgdGhlIGVycm9yIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBlcnJvckluZm8gPSBgJHtlcnJvci50b1N0cmluZygpfSR7XG4gICAgICAgICAgICAgICAgaW5mb1xuICAgICAgICAgICAgICAgICAgICA/IGluZm8uY29tcG9uZW50U3RhY2sucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgL1xcc3s0fS9naSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7bGluZUJyZWFrfSAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9YDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBjYXRjaCBhbnkgZXJyb3JzIGluIGZvcm1hdHRpbmcgdGhlIGVycm9yIGluZm9ybWF0aW9uIGFuZCBsb2cgdGhvc2VcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc3BsYXkgZmFsbGJhY2sgVUlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9ySW5mbzogZXJyb3JJbmZvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBlcnJvckluZm8sIGhhc0Vycm9yIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJlcnJvci1ib3VuZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+QW4gRXJyb3IgaGFzIE9jY3VyZWQuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvckluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEJveCwgTGF5ZXIsIFRleHQgfSBmcm9tICdncm9tbWV0JztcbmltcG9ydCB7IENsb3NlIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XG5cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpPT57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9hc3RzOiBzdGF0ZS50b2FzdHNcbiAgICB9O1xufTtcblxuXG5jb25zdCBUb2FzdCA9ICh7IHRvYXN0cywgb25DbG9zZSB9KSA9PiB7XG4gICAgaWYodG9hc3RzICYmIEFycmF5LmlzQXJyYXkodG9hc3RzKSAmJiB0b2FzdHMubGVuZ3RoID4gMCl7XG4gICAgICAgIGxldCB0b2FzdEl0ZW1zID0gdG9hc3RzLm1hcChtPT4oXG4gICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICAgIGtleT17bS5pZH1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsgbS5iYWNrZ3JvdW5kIHx8ICdhY2NlbnQtMSd9XG4gICAgICAgICAgICAgICAgcGFkPSdtZWRpdW0nXG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPSd4c21hbGwnXG4gICAgICAgICAgICAgICAgcm91bmQ9J3NtYWxsJ1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xuICAgICAgICAgICAgICAgIGp1c3RpZnk9J2JldHdlZW4nXG4gICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICBnYXA9J21lZGl1bSc+XG4gICAgICAgICAgICAgICAgPFRleHQgc2l6ZT0nbGFyZ2UnPnttLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxDbG9zZSBvbkNsaWNrPXsoKT0+e29uQ2xvc2UobS5pZCl9fSAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheWVyIG1vZGFsPXtmYWxzZX0gcG9zaXRpb249J2JvdHRvbScgc3R5bGU9e3tiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnfX0+XG4gICAgICAgICAgICAgICAgPEJveCBnYXA9J3NtYWxsJyBtYXJnaW49e3tib3R0b206J3NtYWxsJ319ID5cbiAgICAgICAgICAgICAgICAgICAge3RvYXN0SXRlbXN9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xheWVyPlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShUb2FzdCk7IiwiZXhwb3J0IGNvbnN0IEFERF9UT0FTVCA9ICdBRERfVE9BU1QnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9UT0FTVCA9ICdSRU1PVkVfVE9BU1QnOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiBub2RlLmpzXG4vLyB0aGlzIGlzIHByZXR0eSBzdHJhaWdodC1mb3J3YXJkIC0gd2UgdXNlIHRoZSBjcnlwdG8gQVBJLlxuXG52YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9kZVJORygpIHtcbiAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcygxNik7XG59O1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuaW1wb3J0ICogYXMgdG9hc3RDb25zdGFudHMgZnJvbSAnLi90b2FzdC5jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9W10sIGFjdGlvbik9PntcbiAgICB2YXIgbmV3U3RhdGU7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSB0b2FzdENvbnN0YW50cy5BRERfVE9BU1Q6ICAgICAgICAgICBcbiAgICAgICAgICAgIG5ld1N0YXRlID0gc3RhdGUuc2xpY2UoKTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBhY3Rpb24uYmFja2dyb3VuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIGNhc2UgdG9hc3RDb25zdGFudHMuUkVNT1ZFX1RPQVNUOiAgICAgICAgICAgXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHN0YXRlLnNsaWNlKCk7XG4gICAgICAgICAgICB2YXIgdG9hc3RJbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleChuPT5uLmlkPT09YWN0aW9uLmlkKTtcbiAgICAgICAgICAgIGlmKHRvYXN0SW5kZXggIT09IC0xKXtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UodG9hc3RJbmRleCwgMSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7ICAgICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBTRVRfVEhFTUUgfSBmcm9tICcuL3RoZW1lLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBMSUdIVCB9IGZyb20gJy4vdGhlbWUuY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPUxJR0hULCBhY3Rpb24pPT57ICAgXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBTRVRfVEhFTUU6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnRoZW1lIHx8IExJR0hUOyAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTsiLCJpbXBvcnQgKiBhcyB0b2FzdENvbnN0YW50cyBmcm9tICcuL3RvYXN0L3RvYXN0LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBTRVRfVEhFTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLmNvbnN0YW50cyc7XG5cbmNvbnN0IFBST1hZQUJMRV9UWVBFUyA9IFtcbiAgICB0b2FzdENvbnN0YW50cy5BRERfVE9BU1QsXG4gICAgdG9hc3RDb25zdGFudHMuUkVNT1ZFX1RPQVNULFxuICAgIFNFVF9USEVNRVxuXVxuXG5leHBvcnQgZGVmYXVsdCAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gICAgIC8vaWYgd2UgYXJlIGVtYmVkZGVkLCBwcm94eSBhY3Rpb24gdG8gcGFyZW50XG4gICAgIGlmKHdpbmRvdy5lbWJlZGRlZEFycm93ICYmICFhY3Rpb24uX19wcm9jZXNzQWN0aW9uX18gJiYgUFJPWFlBQkxFX1RZUEVTLmluZGV4T2YoYWN0aW9uLnR5cGUpICE9PSAtMSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3N0TWVzc2FnZScpO1xuICAgICAgICB3aW5kb3cudG9wLnBvc3RNZXNzYWdlKGFjdGlvbiwnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTsgICAgICAgIFxuICAgIH0gICAgXG59OyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGRlZmF1bHQgYXMgdG9hc3RSZWR1Y2VycyB9IGZyb20gJy4vdG9hc3QvdG9hc3QucmVkdWNlcnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyB0aGVtZVJlZHVjZXJzIH0gZnJvbSAnLi90aGVtZS90aGVtZS5yZWR1Y2Vycyc7XG5pbXBvcnQgUHJveHlNaWRkbGV3YXJlIGZyb20gJy4vcHJveHktbWlkZGxld2FyZSc7XG5cbndpbmRvdy5lbWJlZGRlZEFycm93ID0gd2luZG93LnNlbGYubG9jYXRpb24gIT09IHdpbmRvdy50b3AubG9jYXRpb247XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7IHRvYXN0czogdG9hc3RSZWR1Y2VycywgdGhlbWU6IHRoZW1lUmVkdWNlcnN9KSxcbiAgICBhcHBseU1pZGRsZXdhcmUoUHJveHlNaWRkbGV3YXJlKVxuKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSk9PntcbiAgICAvL3ZlcmlmeSBvcmlnaW4gYW5kIGNoZWNrIGZvciB0eXBlIHByb3BlcnR5IChyZXF1aXJlZCBmb3IgYWN0aW9uKVxuICAgIGlmKGUub3JpZ2luICE9PSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyB8fCAhZS5kYXRhLnR5cGUpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9hc3NpZ24ga2V5IHNvIHdlIGtub3cgbm90IHRvIHByb2Nlc3MgdGhpcyBhY3Rpb24gaW5zdGVhZCBvZiBwcm94eVxuICAgIGxldCBhY3Rpb24gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgX19wcm9jZXNzQWN0aW9uX186IHRydWVcbiAgICB9LCBlLmRhdGEpO1xuXG4gICAgLy9kaXNwYXRjaCB0aGF0IGphenpcbiAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xufSk7XG5cbmlmKHdpbmRvdy5lbWJlZGRlZEFycm93KXtcbiAgICB3aW5kb3cudG9wLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ19faW5pdGlhbGl6ZV9fJ1xuICAgIH0sJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi90b2FzdC5jb25zdGFudHMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvYXN0ID0gKHRleHQsIGJhY2tncm91bmQpID0+e1xuICAgIHN0b3JlLmRpc3BhdGNoKGNyZWF0ZVRvYXN0QWN0aW9uKHRleHQsIGJhY2tncm91bmQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRvYXN0ID0gKGlkKSA9PntcbiAgICBzdG9yZS5kaXNwYXRjaChyZW1vdmVUb2FzdEFjdGlvbihpZCkpO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVG9hc3RBY3Rpb24gPSAoaWQpID0+ICh7XG4gICAgdHlwZTogY29uc3RhbnRzLlJFTU9WRV9UT0FTVCxcbiAgICBpZFxufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUb2FzdEFjdGlvbiA9ICh0ZXh0LCBiYWNrZ3JvdW5kKSA9PiAoe1xuICAgIHR5cGU6IGNvbnN0YW50cy5BRERfVE9BU1QsXG4gICAgdGV4dCxcbiAgICBiYWNrZ3JvdW5kXG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIE1lbnUsIFRoZW1lQ29udGV4dCB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0IHsgTWVudSBhcyBNZW51SWNvbiB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24ocHJvcHMpIHtcbiAgICBjb25zdCB7IG5hdmlnYXRpb25JdGVtcywgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBpdGVtcyA9IG5hdmlnYXRpb25JdGVtcy5tYXAoKG5hdkl0ZW0pID0+ICh7XG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IG9uQ2xpY2sobmF2SXRlbSksXG4gICAgICAgIGxhYmVsOiBuYXZJdGVtLmxhYmVsXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHsodGhlbWUpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGFkPSd4c21hbGwnIGJvcmRlcj0nYWxsJyByb3VuZD0nZnVsbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIGRyb3BBbGlnbj17eyB0b3A6ICdib3R0b20nIH19XG4gICAgICAgICAgICAgICAgICAgIGRyb3BCYWNrZ3JvdW5kPXt0aGVtZS5kYXJrID8gJ2RhcmstMicgOiAnbGlnaHQtMSd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2xvYWRlci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YGxvYWRlciAke3Byb3BzLmNsYXNzTmFtZX1gfT48L2Rpdj5cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgR3JvbW1ldCwgQm94IH0gZnJvbSAnZ3JvbW1ldCc7XG5pbXBvcnQgKiBhcyB0aGVtZXMgZnJvbSAnLi90aGVtZS90aGVtZSdcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4vZXJyb3ItYm91bmRhcnkvZXJyb3ItYm91bmRhcnknO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vdG9hc3QvdG9hc3QnO1xuaW1wb3J0IHsgcmVtb3ZlVG9hc3QgfSBmcm9tICcuL3RvYXN0L3RvYXN0LmFjdGlvbnMnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlci9sb2FkZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5cblxuXG5cblxuY2xhc3MgQXJyb3dBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkVGhlbWU6IHN0b3JlLmdldFN0YXRlKCkudGhlbWVcbiAgICB9O1xuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCk9PntcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgIGlmKG5ld1N0YXRlLnRoZW1lICYmIG5ld1N0YXRlLnRoZW1lICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFRoZW1lOiBuZXdTdGF0ZS50aGVtZX0pO1xuICAgICAgfVxuICAgIH0pOyAgICBcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZJdGVtcywgb25OYXZJdGVtQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFRoZW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8R3JvbW1ldCBmdWxsIHRoZW1lPXt0aGVtZXNbc2VsZWN0ZWRUaGVtZV19PlxuICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICA8Qm94IGRpcmVjdGlvbj0nY29sdW1uJyBmbGV4IGZpbGw+XG4gICAgICAgICAgICB7IXdpbmRvdy5lbWJlZGRlZEFycm93ID8gPEJveFxuICAgICAgICAgICAgICAgIHRhZz0naGVhZGVyJ1xuICAgICAgICAgICAgICAgIGp1c3RpZnk9J2JldHdlZW4nXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXG4gICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICBib3JkZXI9J2JvdHRvbSc+XG4gICAgICAgICAgICAgICAgPEJveCB0YWc9J25hdicgZGlyZWN0aW9uPSdyb3cnIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbiBuYXZpZ2F0aW9uSXRlbXM9e25hdkl0ZW1zfSBvbkNsaWNrPXtvbk5hdkl0ZW1DbGlja30gLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PiA6IG51bGwgfVxuICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8TG9hZGVyIC8+fSBtYXhEdXJhdGlvbj17MzAwfT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFRvYXN0IG9uQ2xvc2U9e3JlbW92ZVRvYXN0fS8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAgIDwvQm94PiAgICAgICAgICBcbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgPC9Hcm9tbWV0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dBcHA7XG5cbiIsImltcG9ydCB7IFNFVF9USEVNRSB9IGZyb20gJy4vdGhlbWUuY29uc3RhbnRzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBzZXRUaGVtZSA9ICh0aGVtZSkgPT57XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTRVRfVEhFTUUsXG4gICAgICAgIHRoZW1lXG4gICAgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFRleHQsIFRleHRJbnB1dCB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICdncm9tbWV0LWljb25zJztcblxuY2xhc3MgVGFnSW5wdXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvblJlbW92ZVZhbHVlLFxuICAgICAgICAgICAgb25BZGRWYWx1ZSxcbiAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2UsXG4gICAgICAgICAgICBpc0lucHV0RGlzYWJsZWQsXG4gICAgICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm94IGZpbGwgZGlyZWN0aW9uPSdyb3cnIGJvcmRlcj0nYWxsJyByb3VuZD0neHNtYWxsJyBmbGV4PXt0cnVlfT5cbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheSh2YWx1ZXMpICYmIHZhbHVlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249J3JvdydcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcD0neHNtYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt7IGhvcml6b250YWw6ICd4c21hbGwnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzgwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93PSdhdXRvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZXMubWFwKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZD0neHNtYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkPSd4eHNtYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgdmFsdWUtJHt2fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPSdkYXJrLTMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwPSd4c21hbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY9J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc2l6ZT0nc21hbGwnPnt2fTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVWYWx1ZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8Qm94IGZpbGwgZmxleD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNJbnB1dERpc2FibGVkfSAvL2NhbiBvbmx5IG11bHRpLXNlbGVjdCBmb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhaW49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9ibHVyVGltZW91dCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ibHVyVGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9ibHVlVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRWYWx1ZShlLnN1Z2dlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmx1clRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkVmFsdWUodmFsdWUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IHdheSB0byBkbyB0aGlzLCBzbyB0eXBlZCBpbiB2YWx1ZXMgZ2V0IHNlbGVjdGVkIHdoZW4gdGhlIHVzZXIgbGVhdmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9idXQgdGhleSBET04nVCBnZXQgc2VsZWN0ZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgdHlwaW5nLCB0aGVuIHNlbGVjdHMgYSBzdWdnZXN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM9e3N1Z2dlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdJbnB1dDtcbiIsImV4cG9ydCBjb25zdCBkb0ZldGNoID0gKHVybCwgbWV0aG9kPSdHRVQnLCBib2R5LCBoZWFkZXJzPXtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICAgIFxufSkgPT4geyAgIFxuICAgIGNvbnN0IHBsb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICAgICAgaGVhZGVyc1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4geyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGpzb24pPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMub2speyAvLzIwMCBsZXZlbCBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChqc29uKTsgLy9mYWlsIHdpdGggZXJyb3IgcmVzcG9uc2UgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKT0+cmVqZWN0KGUpKTsgLy9lcnJvciBwcm9jZXNzaW5nIGpzb24gcmVzcG9uc2UgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpPT5yZWplY3QoZSkpOyAvL2ZldGNoIGVycm9yICAgXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gcGxvbWlzZTtcbn07IiwiaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4vc3JjL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgKiBhcyByZXBvcnRUaGVtZSBmcm9tICcuL3NyYy90aGVtZS9yZXBvcnQtdGhlbWUnO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vc3JjL3RoZW1lL3RoZW1lLmNvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyB0aGVtZXMgZnJvbSAnLi9zcmMvdGhlbWUvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gICAgY29sb3JzLFxuICAgIHJlcG9ydFRoZW1lLFxuICAgIGNvbnN0YW50cyxcbiAgICB0aGVtZXNcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dBcHAgfSBmcm9tICcuL3NyYy9hcnJvdy1hcHAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi9zcmMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JCb3VuZGFyeSB9IGZyb20gJy4vc3JjL2Vycm9yLWJvdW5kYXJ5L2Vycm9yLWJvdW5kYXJ5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGVyIH0gZnJvbSAnLi9zcmMvbG9hZGVyL2xvYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvYXN0IH0gZnJvbSAnLi9zcmMvdG9hc3QvdG9hc3QnO1xuZXhwb3J0IHsgY3JlYXRlVG9hc3QsIHJlbW92ZVRvYXN0LCByZW1vdmVUb2FzdEFjdGlvbiwgY3JlYXRlVG9hc3RBY3Rpb24gfSBmcm9tICcuL3NyYy90b2FzdC90b2FzdC5hY3Rpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9hc3RSZWR1Y2VycyB9IGZyb20gJy4vc3JjL3RvYXN0L3RvYXN0LnJlZHVjZXJzJztcbmV4cG9ydCB7IHNldFRoZW1lIH0gZnJvbSAnLi9zcmMvdGhlbWUvdGhlbWUuYWN0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhZ0lucHV0IH0gZnJvbSAnLi9zcmMvdGFnLWlucHV0L3RhZy1pbnB1dCc7XG5leHBvcnQgeyBkb0ZldGNoIH0gZnJvbSAnLi9zcmMvdXRpbHMvZmV0Y2gtdXRpbHMnO1xuIl0sIm5hbWVzIjpbImJyYW5kIiwiYWNjZW50MSIsImFjY2VudDFBbHQiLCJhY2NlbnQyIiwiYWNjZW50MkFsdCIsImFjY2VudDMiLCJhY2NlbnQzQWx0IiwiYWNjZW50NCIsImFjY2VudDRBbHQiLCJkYXJrMSIsImRhcmsyIiwiZGFyazMiLCJkYXJrNCIsImRhcms1IiwiZGFyazYiLCJsaWdodDEiLCJsaWdodDIiLCJsaWdodDMiLCJsaWdodDQiLCJsaWdodDUiLCJsaWdodDYiLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIiwibGlnaHQiLCJjb250cm9sIiwiZm9jdXMiLCJwbGFjZWhvbGRlciIsImJvcmRlciIsInRleHQiLCJkYXJrIiwiT2JqZWN0IiwiYXNzaWduIiwiYmFja2dyb3VuZCIsInZhcG9yIiwidGhlbWUiLCJnZXRUaGVtZSIsImlzRGFyayIsImRlZmF1bHRUZXh0Q29sb3IiLCJjb2xvcnMiLCJkZWZhdWx0Rm9udFNpemUiLCJheGlzIiwiZG9tYWluIiwibGluZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwidGlja3MiLCJmaWxsIiwiZm9udFNpemUiLCJsZWdlbmQiLCJncmlkIiwibGVnZW5kcyIsImxhYmVscyIsIm1hcmtlcnMiLCJsaW5lQ29sb3IiLCJsaW5lU3Ryb2tlV2lkdGgiLCJ0ZXh0Q29sb3IiLCJkb3RzIiwidG9vbHRpcCIsImNvbnRhaW5lciIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwicGFkZGluZyIsImJhc2ljIiwid2hpdGVTcGFjZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidGFibGUiLCJ0YWJsZUNlbGwiLCJMSUdIVCIsIkRBUksiLCJWQVBPUiIsIlNFVF9USEVNRSIsImZvbnQiLCJmYW1pbHkiLCJzaXplIiwiaGVpZ2h0IiwiZ2xvd2JhbCIsIndpZHRoIiwicmFkaXVzIiwiaW5wdXQiLCJ3ZWlnaHQiLCJicmVha3BvaW50cyIsIm1lZGl1bSIsInZhbHVlIiwiYW5jaG9yIiwiZm9udFdlaWdodCIsInh4c21hbGwiLCJ4c21hbGwiLCJzbWFsbCIsImxhcmdlIiwieGxhcmdlIiwieHhsYXJnZSIsImZ1bGwiLCJlZGdlU2l6ZSIsIm5vbmUiLCJoYWlyIiwicmVzcG9uc2l2ZUJyZWFrcG9pbnQiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ0ZXh0SW5wdXQiLCJleHRlbmQiLCJnbG9iYWwiLCJpY29uIiwiRXJyb3JCb3VuZGFyeSIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImluZm8iLCJlcnJvckluZm8iLCJsaW5lQnJlYWsiLCJ0b1N0cmluZyIsImNvbXBvbmVudFN0YWNrIiwicmVwbGFjZSIsImVyciIsImNvbnNvbGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ0b2FzdHMiLCJUb2FzdCIsIm9uQ2xvc2UiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJ0b2FzdEl0ZW1zIiwibWFwIiwibSIsIkJveCIsImlkIiwiVGV4dCIsIkNsb3NlIiwiTGF5ZXIiLCJib3R0b20iLCJjb25uZWN0IiwiQUREX1RPQVNUIiwiUkVNT1ZFX1RPQVNUIiwiYnl0ZXNUb1V1aWQiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsInR5cGUiLCJ0b2FzdENvbnN0YW50cyIsInNsaWNlIiwicHVzaCIsInV1aWR2NCIsInRvYXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJuIiwic3BsaWNlIiwiUFJPWFlBQkxFX1RZUEVTIiwic3RvcmUiLCJuZXh0Iiwid2luZG93IiwiZW1iZWRkZWRBcnJvdyIsIl9fcHJvY2Vzc0FjdGlvbl9fIiwiaW5kZXhPZiIsImxvZyIsInRvcCIsInBvc3RNZXNzYWdlIiwic2VsZiIsImxvY2F0aW9uIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJ0b2FzdFJlZHVjZXJzIiwidGhlbWVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsIlByb3h5TWlkZGxld2FyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib3JpZ2luIiwiZGF0YSIsImRpc3BhdGNoIiwiY3JlYXRlVG9hc3QiLCJjcmVhdGVUb2FzdEFjdGlvbiIsInJlbW92ZVRvYXN0IiwicmVtb3ZlVG9hc3RBY3Rpb24iLCJjb25zdGFudHMiLCJOYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkl0ZW1zIiwib25DbGljayIsIml0ZW1zIiwibmF2SXRlbSIsImxhYmVsIiwiVGhlbWVDb250ZXh0IiwiTWVudSIsIk1lbnVJY29uIiwiY2xhc3NOYW1lIiwiQXJyb3dBcHAiLCJzZWxlY3RlZFRoZW1lIiwiZ2V0U3RhdGUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsIm5hdkl0ZW1zIiwib25OYXZJdGVtQ2xpY2siLCJHcm9tbWV0IiwidGhlbWVzIiwiU3VzcGVuc2UiLCJQcm92aWRlciIsInNldFRoZW1lIiwiVGFnSW5wdXQiLCJ2YWx1ZXMiLCJvblJlbW92ZVZhbHVlIiwib25BZGRWYWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJpc0lucHV0RGlzYWJsZWQiLCJzdWdnZXN0aW9ucyIsIm1heFdpZHRoIiwidiIsIlRleHRJbnB1dCIsInRhcmdldCIsIl9ibHVyVGltZW91dCIsImNsZWFyVGltZW91dCIsIl9ibHVlVGltZW91dCIsInN1Z2dlc3Rpb24iLCJrZXkiLCJzZXRUaW1lb3V0IiwiUHVyZUNvbXBvbmVudCIsImRvRmV0Y2giLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInBsb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwib2siLCJjYXRjaCIsInJlcG9ydFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxLQUFLLEdBQUcsU0FBZDtBQUNQLEFBQU8sSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ1AsQUFBTyxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDUCxBQUFPLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNQLEFBQU8sSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ1AsQUFBTyxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDUCxBQUFPLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNQLEFBQU8sSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ1AsQUFBTyxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDUCxBQUFPLElBQU1DLEtBQUssR0FBRyxTQUFkO0FBQ1AsQUFBTyxJQUFNQyxLQUFLLEdBQUcsU0FBZDtBQUNQLEFBQU8sSUFBTUMsS0FBSyxHQUFHLFNBQWQ7QUFDUCxBQUFPLElBQU1DLEtBQUssR0FBRyxTQUFkO0FBQ1AsQUFBTyxJQUFNQyxLQUFLLEdBQUcsU0FBZDtBQUNQLEFBQU8sSUFB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RUFBRSxFQUFFLENBQUMsRUFBRTtFQUM1QixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkQ7O0FBRUQsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRTtFQUNoQyxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO0VBQ3BCLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQzs7RUFFcEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUc7Q0FDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRztDQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHO0NBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUc7Q0FDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdB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
