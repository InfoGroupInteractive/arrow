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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3RoZW1lL2NvbG9ycy5qcyIsIi4uL3NyYy90aGVtZS9yZXBvcnQtdGhlbWUuanMiLCIuLi9zcmMvdGhlbWUvdGhlbWUuY29uc3RhbnRzLmpzIiwiLi4vc3JjL3RoZW1lL3RoZW1lLmpzIiwiLi4vc3JjL2Vycm9yLWJvdW5kYXJ5L2Vycm9yLWJvdW5kYXJ5LmpzIiwiLi4vc3JjL3RvYXN0L3RvYXN0LmpzIiwiLi4vc3JjL3RvYXN0L3RvYXN0LmNvbnN0YW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmcuanMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIi4uL3NyYy90b2FzdC90b2FzdC5yZWR1Y2Vycy5qcyIsIi4uL3NyYy90aGVtZS90aGVtZS5yZWR1Y2Vycy5qcyIsIi4uL3NyYy9wcm94eS1taWRkbGV3YXJlLmpzIiwiLi4vc3JjL3N0b3JlLmpzIiwiLi4vc3JjL3RvYXN0L3RvYXN0LmFjdGlvbnMuanMiLCIuLi9zcmMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwiLi4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCIuLi9zcmMvYXJyb3ctYXBwLmpzIiwiLi4vc3JjL3RoZW1lL3RoZW1lLmFjdGlvbnMuanMiLCIuLi9zcmMvdGFnLWlucHV0L3RhZy1pbnB1dC5qcyIsIi4uL3NyYy91dGlscy9mZXRjaC11dGlscy5qcyIsIi4uL2Fycm93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBicmFuZCA9ICcjNTRCOTQ4JztcbmV4cG9ydCBjb25zdCBhY2NlbnQxID0gJyNFQ0U2NEEnO1xuZXhwb3J0IGNvbnN0IGFjY2VudDFBbHQgPSAnI0Q1REQ0OCc7XG5leHBvcnQgY29uc3QgYWNjZW50MiA9ICcjMDhCMEJDJztcbmV4cG9ydCBjb25zdCBhY2NlbnQyQWx0ID0gJyMyOEMwRDInO1xuZXhwb3J0IGNvbnN0IGFjY2VudDMgPSAnI0YyODA0OSc7XG5leHBvcnQgY29uc3QgYWNjZW50M0FsdCA9ICcjRjQ5ODVGJztcbmV4cG9ydCBjb25zdCBhY2NlbnQ0ID0gJyM2QTY2QUEnO1xuZXhwb3J0IGNvbnN0IGFjY2VudDRBbHQgPSAnIzgwN0FCOSc7XG5leHBvcnQgY29uc3QgZGFyazEgPSAnIzIzMUYyMCc7XG5leHBvcnQgY29uc3QgZGFyazIgPSAnIzMwMzIzNCc7XG5leHBvcnQgY29uc3QgZGFyazMgPSAnIzQzNDQ0NSc7XG5leHBvcnQgY29uc3QgZGFyazQgPSAnIzU4NTk1Qic7XG5leHBvcnQgY29uc3QgZGFyazUgPSAnIzZENkU3MSc7XG5leHBvcnQgY29uc3QgZGFyazYgPSAnIzdFODA4Mic7XG5leHBvcnQgY29uc3QgbGlnaHQxID0gJyNGNkY2RjYnO1xuZXhwb3J0IGNvbnN0IGxpZ2h0MiA9ICcjRTRFNkU4JztcbmV4cG9ydCBjb25zdCBsaWdodDMgPSAnI0QwRDJENCc7XG5leHBvcnQgY29uc3QgbGlnaHQ0ID0gJyNCQ0JFQzAnO1xuZXhwb3J0IGNvbnN0IGxpZ2h0NSA9ICcjQTdBOUFDJztcbmV4cG9ydCBjb25zdCBsaWdodDYgPSAnIzkzOTU5OCc7XG5leHBvcnQgY29uc3QgZXJyb3IgPSAnI0VCM0MzQyc7XG5leHBvcnQgY29uc3Qgd2FybmluZyA9ICcjRjdFNDYzJztcbmV4cG9ydCBjb25zdCBzdWNjZXNzID0gJyMzMjlCNDYnO1xuXG5jb25zdCBsaWdodCA9IHtcbiAgICBicmFuZDogYnJhbmQsXG4gICAgY29udHJvbDogYnJhbmQsXG4gICAgZm9jdXM6IGFjY2VudDEsXG4gICAgcGxhY2Vob2xkZXI6IGxpZ2h0NSxcbiAgICBib3JkZXI6IGxpZ2h0MyxcbiAgICB0ZXh0OiB7XG4gICAgICAgIGxpZ2h0OiBkYXJrMVxuICAgIH0sXG4gICAgJ2FjY2VudC0xJzogYWNjZW50MSxcbiAgICAnYWNjZW50LTInOiBhY2NlbnQyLFxuICAgICdhY2NlbnQtMyc6IGFjY2VudDMsXG4gICAgJ2FjY2VudC00JzogYWNjZW50NCxcbiAgICAnZGFyay0xJzogZGFyazEsXG4gICAgJ2RhcmstMic6IGRhcmsyLFxuICAgICdkYXJrLTMnOiBkYXJrMyxcbiAgICAnZGFyay00JzogZGFyazQsXG4gICAgJ2RhcmstNSc6IGRhcms1LFxuICAgICdkYXJrLTYnOiBkYXJrNixcbiAgICAnbGlnaHQtMSc6IGxpZ2h0MSxcbiAgICAnbGlnaHQtMic6IGxpZ2h0MixcbiAgICAnbGlnaHQtMyc6IGxpZ2h0MyxcbiAgICAnbGlnaHQtNCc6IGxpZ2h0NCxcbiAgICAnbGlnaHQtNSc6IGxpZ2h0NSxcbiAgICAnbGlnaHQtNic6IGxpZ2h0NixcbiAgICAnc3RhdHVzLWNyaXRpY2FsJzogZXJyb3IsXG4gICAgJ3N0YXR1cy1lcnJvcic6IGVycm9yLFxuICAgICdzdGF0dXMtd2FybmluZyc6IHdhcm5pbmcsXG4gICAgJ3N0YXR1cy1vayc6IHN1Y2Nlc3MsXG4gICAgJ3N0YXR1cy11bmtub3duJzogbGlnaHQ2LFxuICAgICdzdGF0dXMtZGlzYWJsZWQnOiBsaWdodDZcbn07XG5cbmNvbnN0IGRhcmsgPSBPYmplY3QuYXNzaWduKHt9LCBsaWdodCwge1xuICAgIGJhY2tncm91bmQ6IGRhcmsxLFxuICAgIGZvY3VzOiBhY2NlbnQxQWx0LFxuICAgIGJvcmRlcjogZGFyazMsXG4gICAgdGV4dDoge1xuICAgICAgICBkYXJrOiBsaWdodDNcbiAgICB9LFxuICAgICdhY2NlbnQtMSc6IGFjY2VudDFBbHQsXG4gICAgJ2FjY2VudC0yJzogYWNjZW50MkFsdCxcbiAgICAnYWNjZW50LTMnOiBhY2NlbnQzQWx0LFxuICAgICdhY2NlbnQtNCc6IGFjY2VudDRBbHRcbn0pO1xuXG5jb25zdCB2YXBvciA9IE9iamVjdC5hc3NpZ24oe30sIGxpZ2h0LCB7XG4gICAgYnJhbmQ6ICcjRkY3MUNFJyxcbiAgICAnYWNjZW50LTEnOiAnI0I5NjdGRicsXG4gICAgJ2FjY2VudC0xLWFsdCc6ICcjRDVERDQ4JyxcbiAgICAnYWNjZW50LTInOiAnIzAxQ0RGRScsXG4gICAgJ2FjY2VudC0yLWFsdCc6ICcjMjhDMEQyJyxcbiAgICAnYWNjZW50LTMnOiAnIzA1RkZBMScsXG4gICAgJ2FjY2VudC0zLWFsdCc6ICcjRjQ5ODVGJyxcbiAgICAnYWNjZW50LTQnOiAnI0ZGRkI5NicsXG4gICAgJ2FjY2VudC00LWFsdCc6ICcjODA3QUI5JyxcbiAgICAnZGFyay0xJzogJyNGRjcxQ0UnLFxuICAgICdkYXJrLTInOiAnI0I5NjdGRicsXG4gICAgJ2RhcmstMyc6ICcjMDFDREZFJyxcbiAgICAnZGFyay00JzogJyMwNUZGQTEnLFxuICAgICdkYXJrLTUnOiAnI0ZGRkI5NicsXG4gICAgJ2RhcmstNic6ICcjMTAzJyxcbiAgICAnbGlnaHQtMSc6ICcjRkY3MUNFJyxcbiAgICAnbGlnaHQtMic6ICcjQjk2N0ZGJyxcbiAgICAnbGlnaHQtMyc6ICcjMDFDREZFJyxcbiAgICAnbGlnaHQtNCc6ICcjMDVGRkExJyxcbiAgICAnbGlnaHQtNSc6ICcjRkZGQjk2JyxcbiAgICAnbGlnaHQtNic6ICcjMzM2JyxcbiAgICAnc3RhdHVzLWNyaXRpY2FsJzogJyNFQjNDM0MnLFxuICAgICdzdGF0dXMtZXJyb3InOiAnI0VCM0MzQycsXG4gICAgJ3N0YXR1cy13YXJuaW5nJzogJyNGN0U0NjMnLFxuICAgICdzdGF0dXMtb2snOiAgJyMzMjlCNDYnXG59KTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICAgIGxpZ2h0LFxuICAgIGRhcmssXG4gICAgdmFwb3Jcbn07XG4iLCJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0VGhlbWUgPSAoaXNEYXJrKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFRleHRDb2xvciA9IGlzRGFyayA/IGNvbG9ycy5saWdodDMgOiBjb2xvcnMuZGFyazM7XG4gICAgY29uc3QgZGVmYXVsdEZvbnRTaXplID0gMTE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBheGlzOiB7XG4gICAgICAgICAgICBkb21haW46IHtcbiAgICAgICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogY29sb3JzLmRhcms2LFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBkZWZhdWx0VGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZGVmYXVsdEZvbnRTaXplXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZGVmYXVsdFRleHRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGRlZmF1bHRGb250U2l6ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgIHN0cm9rZTogY29sb3JzLmxpZ2h0MyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmRzOiB7XG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgZmlsbDogZGVmYXVsdFRleHRDb2xvcixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogZGVmYXVsdEZvbnRTaXplXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIGZpbGw6IGRlZmF1bHRUZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGRlZmF1bHRGb250U2l6ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBsaW5lQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAgIGxpbmVTdHJva2VXaWR0aDogMSxcbiAgICAgICAgICAgIHRleHRDb2xvcjogZGVmYXVsdFRleHRDb2xvcixcbiAgICAgICAgICAgIGZvbnRTaXplOiBkZWZhdWx0Rm9udFNpemVcbiAgICAgICAgfSxcbiAgICAgICAgZG90czoge1xuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIGZpbGw6IGRlZmF1bHRUZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGRlZmF1bHRGb250U2l6ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpc0RhcmsgPyAnIzAwMCcgOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSknLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggOXB4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhc2ljOiB7XG4gICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGU6IHt9LFxuICAgICAgICAgICAgdGFibGVDZWxsOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCA1cHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSIsImV4cG9ydCBjb25zdCBMSUdIVCA9ICdsaWdodCc7XG5leHBvcnQgY29uc3QgREFSSyA9ICdkYXJrJztcbmV4cG9ydCBjb25zdCBWQVBPUiA9ICd2YXBvcic7XG5leHBvcnQgY29uc3QgU0VUX1RIRU1FID0gJ1NFVF9USEVNRSc7XG4iLCJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5jb25zdCBmb250ID0ge1xuICAgIGZhbWlseTogJ1wiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYnLFxuICAgIHNpemU6ICcxNHB4JyxcbiAgICBoZWlnaHQ6ICcxNnB4Jyxcbn07XG5cbmNvbnN0IGdsb3diYWwgPSB7XG4gICAgZm9udDogZm9udCxcbiAgICBjb250cm9sOiB7XG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgICAgICAgcmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICBjb2xvcjogJ2JvcmRlcidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgd2VpZ2h0OiA0MDBcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIG1lZGl1bToge1xuICAgICAgICAgICAgdmFsdWU6IDEyMDBcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGFuY2hvciA9IHtcbiAgICBmb250V2VpZ2h0OiA0MDBcbn07XG5cbmNvbnN0IHNpemUgPSB7XG4gICAgeHhzbWFsbDogJzQ4cHgnLFxuICAgIHhzbWFsbDogJzk2cHgnLFxuICAgIHNtYWxsOiAnMTkycHgnLFxuICAgIG1lZGl1bTogJzM4NHB4JyxcbiAgICBsYXJnZTogJzU3NnB4JyxcbiAgICB4bGFyZ2U6ICc3NjhweCcsXG4gICAgeHhsYXJnZTogJzExNTJweCcsXG4gICAgZnVsbDogJzEwMCUnXG59O1xuXG5jb25zdCBlZGdlU2l6ZSA9IHtcbiAgICBub25lOiAnMHB4JyxcbiAgICBoYWlyOiAnMXB4JyxcbiAgICB4eHNtYWxsOiAnM3B4JyxcbiAgICB4c21hbGw6ICc2cHgnLFxuICAgIHNtYWxsOiAnOXB4JyxcbiAgICBtZWRpdW06ICcxOHB4JyxcbiAgICBsYXJnZTogJzM2cHgnLFxuICAgIHhsYXJnZTogJzcycHgnLFxuICAgIHJlc3BvbnNpdmVCcmVha3BvaW50OiAnc21hbGwnXG59O1xuXG5jb25zdCBidXR0b24gPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgICB2ZXJ0aWNhbDogJzAuNmVtJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJzAuOGVtJ1xuICAgIH0sXG4gICAgYm9yZGVyOiB7XG4gICAgICAgIHJhZGl1czogJzEwcHgnLFxuICAgICAgICB3aWR0aDogJzFweCdcbiAgICB9XG5cbn1cblxuY29uc3QgdGV4dCA9IHtcbiAgICBcInhzbWFsbFwiOiB7IFwic2l6ZVwiOiBcIjEwcHhcIiwgXCJoZWlnaHRcIjogXCIxMnB4XCIsIFwibWF4V2lkdGhcIjogXCIyODhweFwiIH0sXG4gICAgXCJzbWFsbFwiOiB7IFwic2l6ZVwiOiBcIjEycHhcIiwgXCJoZWlnaHRcIjogXCIxNHB4XCIsIFwibWF4V2lkdGhcIjogXCIzMzZweFwiIH0sXG4gICAgXCJtZWRpdW1cIjogeyBcInNpemVcIjogXCIxNHB4XCIsIFwiaGVpZ2h0XCI6IFwiMTZweFwiLCBcIm1heFdpZHRoXCI6IFwiNDMycHhcIiB9LFxuICAgIFwibGFyZ2VcIjogeyBcInNpemVcIjogXCIxOHB4XCIsIFwiaGVpZ2h0XCI6IFwiMjFweFwiLCBcIm1heFdpZHRoXCI6IFwiNTI4cHhcIiB9LFxuICAgIFwieGxhcmdlXCI6IHsgXCJzaXplXCI6IFwiMjZweFwiLCBcImhlaWdodFwiOiBcIjMwcHhcIiwgXCJtYXhXaWR0aFwiOiBcIjYyNHB4XCIgfSxcbiAgICBcInh4bGFyZ2VcIjogeyBcInNpemVcIjogXCIzMnB4XCIsIFwiaGVpZ2h0XCI6IFwiMzZweFwiLCBcIm1heFdpZHRoXCI6IFwiODE2cHhcIiB9XG59XG5cbmNvbnN0IHRleHRJbnB1dCA9IHtcbiAgICBleHRlbmQ6ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6ICcwLjZlbSAwLjhlbSdcbiAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXJrID0ge1xuICAgIGdsb2JhbDogT2JqZWN0LmFzc2lnbih7fSwgZ2xvd2JhbCwge1xuICAgICAgICBjb2xvcnM6IGNvbG9ycy50aGVtZS5kYXJrXG4gICAgfSksXG4gICAgYW5jaG9yOiBPYmplY3QuYXNzaWduKHt9LCBhbmNob3IsIHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5saWdodDJcbiAgICB9KSxcbiAgICBlZGdlU2l6ZSxcbiAgICBpY29uOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMubGlnaHQzXG4gICAgfSxcbiAgICBzaXplLFxuICAgIGJ1dHRvbixcbiAgICB0ZXh0LFxuICAgIHRleHRJbnB1dFxufTtcblxuZXhwb3J0IGNvbnN0IGxpZ2h0ID0ge1xuICAgIGdsb2JhbDogT2JqZWN0LmFzc2lnbih7fSwgZ2xvd2JhbCwge1xuICAgICAgICBjb2xvcnM6IGNvbG9ycy50aGVtZS5saWdodFxuICAgIH0pLFxuICAgIGFuY2hvcjogT2JqZWN0LmFzc2lnbih7fSwgYW5jaG9yLCB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuZGFyazFcbiAgICB9KSxcbiAgICBlZGdlU2l6ZSxcbiAgICBpY29uOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuZGFyazRcbiAgICB9LFxuICAgIHNpemUsXG4gICAgYnV0dG9uLFxuICAgIHRleHQsXG4gICAgdGV4dElucHV0XG59O1xuXG5leHBvcnQgY29uc3QgdmFwb3IgPSB7XG4gICAgZ2xvYmFsOiBPYmplY3QuYXNzaWduKHt9LCBnbG93YmFsLCB7XG4gICAgICAgIGNvbG9yczogY29sb3JzLnRoZW1lLnZhcG9yXG4gICAgfSksXG4gICAgYW5jaG9yOiBPYmplY3QuYXNzaWduKHt9LCBhbmNob3IsIHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5kYXJrMVxuICAgIH0pLFxuICAgIGVkZ2VTaXplLFxuICAgIGljb246IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5kYXJrNFxuICAgIH0sXG4gICAgc2l6ZSxcbiAgICBidXR0b24sXG4gICAgdGV4dCxcbiAgICB0ZXh0SW5wdXRcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xuICAgICAgICBsZXQgZXJyb3JJbmZvID0gJyc7ICAgICAgICBcbiAgICAgICAgbGV0IGxpbmVCcmVhayA9ICclMEQlMEEnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gZm9ybWF0IHRoZSBlcnJvciBpbmZvcm1hdGlvblxuICAgICAgICAgICAgZXJyb3JJbmZvID0gYCR7ZXJyb3IudG9TdHJpbmcoKX0ke1xuICAgICAgICAgICAgICAgIGluZm9cbiAgICAgICAgICAgICAgICAgICAgPyBpbmZvLmNvbXBvbmVudFN0YWNrLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC9cXHN7NH0vZ2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke2xpbmVCcmVha30gICAgYFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfWA7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gY2F0Y2ggYW55IGVycm9ycyBpbiBmb3JtYXR0aW5nIHRoZSBlcnJvciBpbmZvcm1hdGlvbiBhbmQgbG9nIHRob3NlXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IGZhbGxiYWNrIFVJXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaGFzRXJyb3I6IHRydWUsXG4gICAgICAgICAgICBlcnJvckluZm86IGVycm9ySW5mb1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3JJbmZvLCBoYXNFcnJvciB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXJyb3ItYm91bmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkFuIEVycm9yIGhhcyBPY2N1cmVkLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBCb3gsIExheWVyLCBUZXh0IH0gZnJvbSAnZ3JvbW1ldCc7XG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKT0+e1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvYXN0czogc3RhdGUudG9hc3RzXG4gICAgfTtcbn07XG5cblxuY29uc3QgVG9hc3QgPSAoeyB0b2FzdHMsIG9uQ2xvc2UgfSkgPT4ge1xuICAgIGlmKHRvYXN0cyAmJiBBcnJheS5pc0FycmF5KHRvYXN0cykgJiYgdG9hc3RzLmxlbmd0aCA+IDApe1xuICAgICAgICBsZXQgdG9hc3RJdGVtcyA9IHRvYXN0cy5tYXAobT0+KFxuICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICBrZXk9e20uaWR9XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD17IG0uYmFja2dyb3VuZCB8fCAnYWNjZW50LTEnfVxuICAgICAgICAgICAgICAgIHBhZD0nbWVkaXVtJ1xuICAgICAgICAgICAgICAgIGVsZXZhdGlvbj0neHNtYWxsJ1xuICAgICAgICAgICAgICAgIHJvdW5kPSdzbWFsbCdcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249J3JvdydcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PSdiZXR3ZWVuJ1xuICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgZ2FwPSdtZWRpdW0nPlxuICAgICAgICAgICAgICAgIDxUZXh0IHNpemU9J2xhcmdlJz57bS50ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Q2xvc2Ugb25DbGljaz17KCk9PntvbkNsb3NlKG0uaWQpfX0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICApKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXllciBtb2RhbD17ZmFsc2V9IHBvc2l0aW9uPSdib3R0b20nIHN0eWxlPXt7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J319PlxuICAgICAgICAgICAgICAgIDxCb3ggZ2FwPSdzbWFsbCcgbWFyZ2luPXt7Ym90dG9tOidzbWFsbCd9fSA+XG4gICAgICAgICAgICAgICAgICAgIHt0b2FzdEl0ZW1zfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVG9hc3QpOyIsImV4cG9ydCBjb25zdCBBRERfVE9BU1QgPSAnQUREX1RPQVNUJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVE9BU1QgPSAnUkVNT1ZFX1RPQVNUJzsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gbm9kZS5qc1xuLy8gdGhpcyBpcyBwcmV0dHkgc3RyYWlnaHQtZm9yd2FyZCAtIHdlIHVzZSB0aGUgY3J5cHRvIEFQSS5cblxudmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vZGVSTkcoKSB7XG4gIHJldHVybiBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpO1xufTtcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcbmltcG9ydCAqIGFzIHRvYXN0Q29uc3RhbnRzIGZyb20gJy4vdG9hc3QuY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlPVtdLCBhY3Rpb24pPT57XG4gICAgdmFyIG5ld1N0YXRlO1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgdG9hc3RDb25zdGFudHMuQUREX1RPQVNUOiAgICAgICAgICAgXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHN0YXRlLnNsaWNlKCk7XG4gICAgICAgICAgICBuZXdTdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYWN0aW9uLmJhY2tncm91bmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICBjYXNlIHRvYXN0Q29uc3RhbnRzLlJFTU9WRV9UT0FTVDogICAgICAgICAgIFxuICAgICAgICAgICAgbmV3U3RhdGUgPSBzdGF0ZS5zbGljZSgpO1xuICAgICAgICAgICAgdmFyIHRvYXN0SW5kZXggPSBuZXdTdGF0ZS5maW5kSW5kZXgobj0+bi5pZD09PWFjdGlvbi5pZCk7XG4gICAgICAgICAgICBpZih0b2FzdEluZGV4ICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKHRvYXN0SW5kZXgsIDEpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlOyAgICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgU0VUX1RIRU1FIH0gZnJvbSAnLi90aGVtZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgTElHSFQgfSBmcm9tICcuL3RoZW1lLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZT1MSUdIVCwgYWN0aW9uKT0+eyAgIFxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgU0VUX1RIRU1FOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi50aGVtZSB8fCBMSUdIVDsgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07IiwiaW1wb3J0ICogYXMgdG9hc3RDb25zdGFudHMgZnJvbSAnLi90b2FzdC90b2FzdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgU0VUX1RIRU1FIH0gZnJvbSAnLi90aGVtZS90aGVtZS5jb25zdGFudHMnO1xuXG5jb25zdCBQUk9YWUFCTEVfVFlQRVMgPSBbXG4gICAgdG9hc3RDb25zdGFudHMuQUREX1RPQVNULFxuICAgIHRvYXN0Q29uc3RhbnRzLlJFTU9WRV9UT0FTVCxcbiAgICBTRVRfVEhFTUVcbl1cblxuZXhwb3J0IGRlZmF1bHQgKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgICAvL2lmIHdlIGFyZSBlbWJlZGRlZCwgcHJveHkgYWN0aW9uIHRvIHBhcmVudFxuICAgICBpZih3aW5kb3cuZW1iZWRkZWRBcnJvdyAmJiAhYWN0aW9uLl9fcHJvY2Vzc0FjdGlvbl9fICYmIFBST1hZQUJMRV9UWVBFUy5pbmRleE9mKGFjdGlvbi50eXBlKSAhPT0gLTEpe1xuICAgICAgICBjb25zb2xlLmxvZygncG9zdE1lc3NhZ2UnKTtcbiAgICAgICAgd2luZG93LnRvcC5wb3N0TWVzc2FnZShhY3Rpb24sJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7ICAgICAgICBcbiAgICB9ICAgIFxufTsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRvYXN0UmVkdWNlcnMgfSBmcm9tICcuL3RvYXN0L3RvYXN0LnJlZHVjZXJzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGhlbWVSZWR1Y2VycyB9IGZyb20gJy4vdGhlbWUvdGhlbWUucmVkdWNlcnMnO1xuaW1wb3J0IFByb3h5TWlkZGxld2FyZSBmcm9tICcuL3Byb3h5LW1pZGRsZXdhcmUnO1xuXG53aW5kb3cuZW1iZWRkZWRBcnJvdyA9IHdpbmRvdy5zZWxmLmxvY2F0aW9uICE9PSB3aW5kb3cudG9wLmxvY2F0aW9uO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBjb21iaW5lUmVkdWNlcnMoeyB0b2FzdHM6IHRvYXN0UmVkdWNlcnMsIHRoZW1lOiB0aGVtZVJlZHVjZXJzfSksXG4gICAgYXBwbHlNaWRkbGV3YXJlKFByb3h5TWlkZGxld2FyZSlcbik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpPT57XG4gICAgLy92ZXJpZnkgb3JpZ2luIGFuZCBjaGVjayBmb3IgdHlwZSBwcm9wZXJ0eSAocmVxdWlyZWQgZm9yIGFjdGlvbilcbiAgICBpZihlLm9yaWdpbiAhPT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcgfHwgIWUuZGF0YS50eXBlKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vYXNzaWduIGtleSBzbyB3ZSBrbm93IG5vdCB0byBwcm9jZXNzIHRoaXMgYWN0aW9uIGluc3RlYWQgb2YgcHJveHlcbiAgICBsZXQgYWN0aW9uID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIF9fcHJvY2Vzc0FjdGlvbl9fOiB0cnVlXG4gICAgfSwgZS5kYXRhKTtcblxuICAgIC8vZGlzcGF0Y2ggdGhhdCBqYXp6XG4gICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbn0pO1xuXG5pZih3aW5kb3cuZW1iZWRkZWRBcnJvdyl7XG4gICAgd2luZG93LnRvcC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdfX2luaXRpYWxpemVfXydcbiAgICB9LCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vdG9hc3QuY29uc3RhbnRzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUb2FzdCA9ICh0ZXh0LCBiYWNrZ3JvdW5kKSA9PntcbiAgICBzdG9yZS5kaXNwYXRjaChjcmVhdGVUb2FzdEFjdGlvbih0ZXh0LCBiYWNrZ3JvdW5kKSk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUb2FzdCA9IChpZCkgPT57XG4gICAgc3RvcmUuZGlzcGF0Y2gocmVtb3ZlVG9hc3RBY3Rpb24oaWQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRvYXN0QWN0aW9uID0gKGlkKSA9PiAoe1xuICAgIHR5cGU6IGNvbnN0YW50cy5SRU1PVkVfVE9BU1QsXG4gICAgaWRcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9hc3RBY3Rpb24gPSAodGV4dCwgYmFja2dyb3VuZCkgPT4gKHtcbiAgICB0eXBlOiBjb25zdGFudHMuQUREX1RPQVNULFxuICAgIHRleHQsXG4gICAgYmFja2dyb3VuZFxufSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBNZW51LCBUaGVtZUNvbnRleHQgfSBmcm9tICdncm9tbWV0JztcbmltcG9ydCB7IE1lbnUgYXMgTWVudUljb24gfSBmcm9tICdncm9tbWV0LWljb25zJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHByb3BzKSB7XG4gICAgY29uc3QgeyBuYXZpZ2F0aW9uSXRlbXMsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgaXRlbXMgPSBuYXZpZ2F0aW9uSXRlbXMubWFwKChuYXZJdGVtKSA9PiAoe1xuICAgICAgICBvbkNsaWNrOiAoKSA9PiBvbkNsaWNrKG5hdkl0ZW0pLFxuICAgICAgICBsYWJlbDogbmF2SXRlbS5sYWJlbFxuICAgIH0pKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7KHRoZW1lKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBhZD0neHNtYWxsJyBib3JkZXI9J2FsbCcgcm91bmQ9J2Z1bGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICBkcm9wQWxpZ249e3sgdG9wOiAnYm90dG9tJyB9fVxuICAgICAgICAgICAgICAgICAgICBkcm9wQmFja2dyb3VuZD17dGhlbWUuZGFyayA/ICdkYXJrLTInIDogJ2xpZ2h0LTEnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9sb2FkZXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Bsb2FkZXIgJHtwcm9wcy5jbGFzc05hbWV9YH0+PC9kaXY+XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEdyb21tZXQsIEJveCB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0ICogYXMgdGhlbWVzIGZyb20gJy4vdGhlbWUvdGhlbWUnXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuL2Vycm9yLWJvdW5kYXJ5L2Vycm9yLWJvdW5kYXJ5JztcbmltcG9ydCBUb2FzdCBmcm9tICcuL3RvYXN0L3RvYXN0JztcbmltcG9ydCB7IHJlbW92ZVRvYXN0IH0gZnJvbSAnLi90b2FzdC90b2FzdC5hY3Rpb25zJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXIvbG9hZGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuXG5cblxuXG5cbmNsYXNzIEFycm93QXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZFRoZW1lOiBzdG9yZS5nZXRTdGF0ZSgpLnRoZW1lXG4gICAgfTtcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpPT57XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgICBpZihuZXdTdGF0ZS50aGVtZSAmJiBuZXdTdGF0ZS50aGVtZSAhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRUaGVtZTogbmV3U3RhdGUudGhlbWV9KTtcbiAgICAgIH1cbiAgICB9KTsgICAgXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2SXRlbXMsIG9uTmF2SXRlbUNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRUaGVtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPEdyb21tZXQgZnVsbCB0aGVtZT17dGhlbWVzW3NlbGVjdGVkVGhlbWVdfT5cbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPEJveCBkaXJlY3Rpb249J2NvbHVtbicgZmxleCBmaWxsPlxuICAgICAgICAgICAgeyF3aW5kb3cuZW1iZWRkZWRBcnJvdyA/IDxCb3hcbiAgICAgICAgICAgICAgICB0YWc9J2hlYWRlcidcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PSdiZXR3ZWVuJ1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xuICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgYm9yZGVyPSdib3R0b20nPlxuICAgICAgICAgICAgICAgIDxCb3ggdGFnPSduYXYnIGRpcmVjdGlvbj0ncm93JyBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gbmF2aWdhdGlvbkl0ZW1zPXtuYXZJdGVtc30gb25DbGljaz17b25OYXZJdGVtQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD4gOiBudWxsIH1cbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRlciAvPn0gbWF4RHVyYXRpb249ezMwMH0+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICAgIDxUb2FzdCBvbkNsb3NlPXtyZW1vdmVUb2FzdH0vPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICA8L0JveD4gICAgICAgICAgXG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgIDwvR3JvbW1ldD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycm93QXBwO1xuXG4iLCJpbXBvcnQgeyBTRVRfVEhFTUUgfSBmcm9tICcuL3RoZW1lLmNvbnN0YW50cyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgY29uc3Qgc2V0VGhlbWUgPSAodGhlbWUpID0+e1xuICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX1RIRU1FLFxuICAgICAgICB0aGVtZVxuICAgIH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0SW5wdXQgfSBmcm9tICdncm9tbWV0JztcbmltcG9ydCB7IENsb3NlIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XG5cbmNsYXNzIFRhZ0lucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb25SZW1vdmVWYWx1ZSxcbiAgICAgICAgICAgIG9uQWRkVmFsdWUsXG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgaXNJbnB1dERpc2FibGVkLFxuICAgICAgICAgICAgc3VnZ2VzdGlvbnMsXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJveCBmaWxsIGRpcmVjdGlvbj0ncm93JyBib3JkZXI9J2FsbCcgcm91bmQ9J3hzbWFsbCcgZmxleD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkodmFsdWVzKSAmJiB2YWx1ZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA9J3hzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17eyBob3Jpem9udGFsOiAneHNtYWxsJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICc4MCUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdz0nYXV0byc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWVzLm1hcCgodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ9J3hzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZD0neHhzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHZhbHVlLSR7dn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD0nZGFyay0zJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcD0neHNtYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHNpemU9J3NtYWxsJz57dn08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlVmFsdWUodik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPEJveCBmaWxsIGZsZXg9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzSW5wdXREaXNhYmxlZH0gLy9jYW4gb25seSBtdWx0aS1zZWxlY3QgZm9yID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWluPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fYmx1clRpbWVvdXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYmx1clRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYmx1ZVRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkVmFsdWUoZS5zdWdnZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2JsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZFZhbHVlKHZhbHVlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZmlndXJlIG91dCB0aGUgY29ycmVjdCB3YXkgdG8gZG8gdGhpcywgc28gdHlwZWQgaW4gdmFsdWVzIGdldCBzZWxlY3RlZCB3aGVuIHRoZSB1c2VyIGxlYXZlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYnV0IHRoZXkgRE9OJ1QgZ2V0IHNlbGVjdGVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIHR5cGluZywgdGhlbiBzZWxlY3RzIGEgc3VnZ2VzdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zPXtzdWdnZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnSW5wdXQ7XG4iLCJleHBvcnQgY29uc3QgZG9GZXRjaCA9ICh1cmwsIG1ldGhvZD0nR0VUJywgYm9keSwgaGVhZGVycz17XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAgICBcbn0pID0+IHsgICBcbiAgICBjb25zdCBwbG9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChqc29uKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLm9rKXsgLy8yMDAgbGV2ZWwgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoanNvbik7IC8vZmFpbCB3aXRoIGVycm9yIHJlc3BvbnNlIGZyb20gc2VydmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSk9PnJlamVjdChlKSk7IC8vZXJyb3IgcHJvY2Vzc2luZyBqc29uIHJlc3BvbnNlICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKT0+cmVqZWN0KGUpKTsgLy9mZXRjaCBlcnJvciAgIFxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIHBsb21pc2U7XG59OyIsImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICcuL3NyYy90aGVtZS9jb2xvcnMnO1xuaW1wb3J0ICogYXMgcmVwb3J0VGhlbWUgZnJvbSAnLi9zcmMvdGhlbWUvcmVwb3J0LXRoZW1lJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL3NyYy90aGVtZS90aGVtZS5jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgdGhlbWVzIGZyb20gJy4vc3JjL3RoZW1lL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICAgIGNvbG9ycyxcbiAgICByZXBvcnRUaGVtZSxcbiAgICBjb25zdGFudHMsXG4gICAgdGhlbWVzXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFycm93QXBwIH0gZnJvbSAnLi9zcmMvYXJyb3ctYXBwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2aWdhdGlvbiB9IGZyb20gJy4vc3JjL25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVycm9yQm91bmRhcnkgfSBmcm9tICcuL3NyYy9lcnJvci1ib3VuZGFyeS9lcnJvci1ib3VuZGFyeSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRlciB9IGZyb20gJy4vc3JjL2xvYWRlci9sb2FkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2FzdCB9IGZyb20gJy4vc3JjL3RvYXN0L3RvYXN0JztcbmV4cG9ydCB7IGNyZWF0ZVRvYXN0LCByZW1vdmVUb2FzdCwgcmVtb3ZlVG9hc3RBY3Rpb24sIGNyZWF0ZVRvYXN0QWN0aW9uIH0gZnJvbSAnLi9zcmMvdG9hc3QvdG9hc3QuYWN0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvYXN0UmVkdWNlcnMgfSBmcm9tICcuL3NyYy90b2FzdC90b2FzdC5yZWR1Y2Vycyc7XG5leHBvcnQgeyBzZXRUaGVtZSB9IGZyb20gJy4vc3JjL3RoZW1lL3RoZW1lLmFjdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWdJbnB1dCB9IGZyb20gJy4vc3JjL3RhZy1pbnB1dC90YWctaW5wdXQnO1xuZXhwb3J0IHsgZG9GZXRjaCB9IGZyb20gJy4vc3JjL3V0aWxzL2ZldGNoLXV0aWxzJztcbiJdLCJuYW1lcyI6WyJicmFuZCIsImFjY2VudDEiLCJhY2NlbnQxQWx0IiwiYWNjZW50MiIsImFjY2VudDJBbHQiLCJhY2NlbnQzIiwiYWNjZW50M0FsdCIsImFjY2VudDQiLCJhY2NlbnQ0QWx0IiwiZGFyazEiLCJkYXJrMiIsImRhcmszIiwiZGFyazQiLCJkYXJrNSIsImRhcms2IiwibGlnaHQxIiwibGlnaHQyIiwibGlnaHQzIiwibGlnaHQ0IiwibGlnaHQ1IiwibGlnaHQ2IiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImxpZ2h0IiwiY29udHJvbCIsImZvY3VzIiwicGxhY2Vob2xkZXIiLCJib3JkZXIiLCJ0ZXh0IiwiZGFyayIsIk9iamVjdCIsImFzc2lnbiIsImJhY2tncm91bmQiLCJ2YXBvciIsInRoZW1lIiwiZ2V0VGhlbWUiLCJpc0RhcmsiLCJkZWZhdWx0VGV4dENvbG9yIiwiY29sb3JzIiwiZGVmYXVsdEZvbnRTaXplIiwiYXhpcyIsImRvbWFpbiIsImxpbmUiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInRpY2tzIiwiZmlsbCIsImZvbnRTaXplIiwibGVnZW5kIiwiZ3JpZCIsImxlZ2VuZHMiLCJsYWJlbHMiLCJtYXJrZXJzIiwibGluZUNvbG9yIiwibGluZVN0cm9rZVdpZHRoIiwidGV4dENvbG9yIiwiZG90cyIsInRvb2x0aXAiLCJjb250YWluZXIiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInBhZGRpbmciLCJiYXNpYyIsIndoaXRlU3BhY2UiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRhYmxlIiwidGFibGVDZWxsIiwiTElHSFQiLCJEQVJLIiwiVkFQT1IiLCJTRVRfVEhFTUUiLCJmb250IiwiZmFtaWx5Iiwic2l6ZSIsImhlaWdodCIsImdsb3diYWwiLCJ3aWR0aCIsInJhZGl1cyIsImlucHV0Iiwid2VpZ2h0IiwiYnJlYWtwb2ludHMiLCJtZWRpdW0iLCJ2YWx1ZSIsImFuY2hvciIsImZvbnRXZWlnaHQiLCJ4eHNtYWxsIiwieHNtYWxsIiwic21hbGwiLCJsYXJnZSIsInhsYXJnZSIsInh4bGFyZ2UiLCJmdWxsIiwiZWRnZVNpemUiLCJub25lIiwiaGFpciIsInJlc3BvbnNpdmVCcmVha3BvaW50IiwiYnV0dG9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidGV4dElucHV0IiwiZXh0ZW5kIiwiZ2xvYmFsIiwiaWNvbiIsIkVycm9yQm91bmRhcnkiLCJwcm9wcyIsInN0YXRlIiwiaGFzRXJyb3IiLCJpbmZvIiwiZXJyb3JJbmZvIiwibGluZUJyZWFrIiwidG9TdHJpbmciLCJjb21wb25lbnRTdGFjayIsInJlcGxhY2UiLCJlcnIiLCJjb25zb2xlIiwic2V0U3RhdGUiLCJSZWFjdCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidG9hc3RzIiwiVG9hc3QiLCJvbkNsb3NlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwidG9hc3RJdGVtcyIsIm1hcCIsIm0iLCJCb3giLCJpZCIsIlRleHQiLCJDbG9zZSIsIkxheWVyIiwiYm90dG9tIiwiY29ubmVjdCIsIkFERF9UT0FTVCIsIlJFTU9WRV9UT0FTVCIsImJ5dGVzVG9VdWlkIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJ0eXBlIiwidG9hc3RDb25zdGFudHMiLCJzbGljZSIsInB1c2giLCJ1dWlkdjQiLCJ0b2FzdEluZGV4IiwiZmluZEluZGV4IiwibiIsInNwbGljZSIsIlBST1hZQUJMRV9UWVBFUyIsInN0b3JlIiwibmV4dCIsIndpbmRvdyIsImVtYmVkZGVkQXJyb3ciLCJfX3Byb2Nlc3NBY3Rpb25fXyIsImluZGV4T2YiLCJsb2ciLCJ0b3AiLCJwb3N0TWVzc2FnZSIsInNlbGYiLCJsb2NhdGlvbiIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwidG9hc3RSZWR1Y2VycyIsInRoZW1lUmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJQcm94eU1pZGRsZXdhcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm9yaWdpbiIsImRhdGEiLCJkaXNwYXRjaCIsImNyZWF0ZVRvYXN0IiwiY3JlYXRlVG9hc3RBY3Rpb24iLCJyZW1vdmVUb2FzdCIsInJlbW92ZVRvYXN0QWN0aW9uIiwiY29uc3RhbnRzIiwiTmF2aWdhdGlvbiIsIm5hdmlnYXRpb25JdGVtcyIsIm9uQ2xpY2siLCJpdGVtcyIsIm5hdkl0ZW0iLCJsYWJlbCIsIlRoZW1lQ29udGV4dCIsIk1lbnUiLCJNZW51SWNvbiIsImNsYXNzTmFtZSIsIkFycm93QXBwIiwic2VsZWN0ZWRUaGVtZSIsImdldFN0YXRlIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJuYXZJdGVtcyIsIm9uTmF2SXRlbUNsaWNrIiwiR3JvbW1ldCIsInRoZW1lcyIsIlN1c3BlbnNlIiwiUHJvdmlkZXIiLCJzZXRUaGVtZSIsIlRhZ0lucHV0IiwidmFsdWVzIiwib25SZW1vdmVWYWx1ZSIsIm9uQWRkVmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwiaXNJbnB1dERpc2FibGVkIiwic3VnZ2VzdGlvbnMiLCJtYXhXaWR0aCIsInYiLCJUZXh0SW5wdXQiLCJ0YXJnZXQiLCJfYmx1clRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfYmx1ZVRpbWVvdXQiLCJzdWdnZXN0aW9uIiwia2V5Iiwic2V0VGltZW91dCIsIlB1cmVDb21wb25lbnQiLCJkb0ZldGNoIiwidXJsIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJwbG9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsIm9rIiwiY2F0Y2giLCJyZXBvcnRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsS0FBSyxHQUFHLFNBQWQ7QUFDUCxBQUFPLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNQLEFBQU8sSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ1AsQUFBTyxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDUCxBQUFPLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNQLEFBQU8sSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ1AsQUFBTyxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDUCxBQUFPLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNQLEFBQU8sSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ1AsQUFBTyxJQUFNQyxLQUFLLEdBQUcsU0FBZDtBQUNQLEFBQU8sSUFBTUMsS0FBSyxHQUFHLFNBQWQ7QUFDUCxBQUFPLElBQU1DLEtBQUssR0FBRyxTQUFkO0FBQ1AsQUFBTyxJ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QUcsRUFBRSxDQUFDO0FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7RUFDNUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ25EOztBQUVELFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUU7RUFDaEMsSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNwQixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7O0VBRXBCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHO0NBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUc7Q0FDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRztDQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHO0NBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFF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
