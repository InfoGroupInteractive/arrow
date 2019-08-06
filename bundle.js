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
var _objectSpread = _interopDefault(require('@babel/runtime/helpers/objectSpread'));
var grommetIcons = require('grommet-icons');
var redux = require('redux');
var crypto = _interopDefault(require('crypto'));
var Color = _interopDefault(require('color'));

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
var warning = '#FFBB22';
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
      radius: '12px',
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
  small: '12px',
  medium: '24px',
  large: '36px',
  xlarge: '48px',
  responsiveBreakpoint: 'small'
};
var shadow = 'rgba(0, 0, 0, 0.20)';
var elevation = {
  'light': {
    'none': 'none',
    'xsmall': "0px 1px 2px ".concat(shadow),
    'small': "0px 2px 4px ".concat(shadow),
    'medium': "0px 4px 8px ".concat(shadow),
    'large': "0px 8px 16px ".concat(shadow),
    'xlarge': "0px 12px 24px ".concat(shadow)
  },
  'dark': {
    'none': 'none',
    'xsmall': "0px 2px 2px ".concat(shadow),
    'small': "0px 4px 4px ".concat(shadow),
    'medium': "0px 6px 8px ".concat(shadow),
    'large': "0px 8px 16px ".concat(shadow),
    'xlarge': "0px 12px 24px ".concat(shadow)
  }
};
var button = {
  padding: {
    vertical: '0.6em',
    horizontal: '0.8em'
  },
  border: {
    radius: '12px',
    width: '1px'
  }
};
var text = {
  'xsmall': {
    'size': '10px',
    'height': '12px',
    'maxWidth': '288px'
  },
  'small': {
    'size': '12px',
    'height': '14px',
    'maxWidth': '336px'
  },
  'medium': {
    'size': '14px',
    'height': '16px',
    'maxWidth': '432px'
  },
  'large': {
    'size': '18px',
    'height': '21px',
    'maxWidth': '528px'
  },
  'xlarge': {
    'size': '26px',
    'height': '30px',
    'maxWidth': '624px'
  },
  'xxlarge': {
    'size': '32px',
    'height': '36px',
    'maxWidth': '816px'
  }
};
var textInput = {
  extend: function extend() {
    return {
      padding: '0.6em 0.8em'
    };
  }
};
var iconSize = {
  xxsmall: '12px',
  xsmall: '16px',
  small: '20px',
  medium: '24px',
  large: '30px',
  xlarge: '48px',
  xxlarge: '72px'
};
var dark$1 = {
  global: Object.assign({}, glowbal, {
    colors: theme.dark,
    edgeSize: edgeSize,
    drop: {
      background: dark2
    },
    elevation: elevation
  }),
  icon: {
    color: light3,
    size: iconSize
  },
  size: size,
  button: button,
  text: text,
  textInput: textInput
};
var light$1 = {
  global: Object.assign({}, glowbal, {
    colors: theme.light,
    edgeSize: edgeSize,
    elevation: elevation
  }),
  icon: {
    color: dark4,
    size: iconSize
  },
  size: size,
  button: button,
  text: text,
  textInput: textInput
};
var vapor$1 = {
  global: Object.assign({}, glowbal, {
    colors: theme.vapor,
    edgeSize: edgeSize,
    elevation: elevation
  }),
  icon: {
    color: dark4,
    size: iconSize
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

var STATUSES = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR'
};

var GET_STATUS_COLOR = function GET_STATUS_COLOR(status, statuses) {
  switch (status) {
    case statuses.SUCCESS:
      return 'status-ok';

    case statuses.WARNING:
      return 'status-warning';

    case statuses.ERROR:
      return 'status-critical';

    default:
      return 'status-unknown';
  }
};

var GET_STATUS_TEXT = function GET_STATUS_TEXT(status, statuses) {
  switch (status) {
    case statuses.SUCCESS:
      return 'Complete';

    case statuses.WARNING:
      return 'Needs Attention';

    case statuses.ERROR:
      return 'Needs Attention';

    default:
      return 'FYI';
  }
};

function GET_STATUS_ICON(status, statuses) {
  switch (status) {
    case statuses.SUCCESS:
      return grommetIcons.StatusGood;

    case statuses.WARNING:
      return grommetIcons.StatusWarning;

    case statuses.ERROR:
      return grommetIcons.StatusCritical;

    default:
      return grommetIcons.StatusInfo;
  }
}

var STYLE = {
  background: 'transparent'
};

var MOBILE_STYLE = _objectSpread({
  position: 'fixed',
  right: 'unset',
  height: 'auto',
  width: 'auto'
}, STYLE);

var Toast = function Toast(_ref) {
  var toasts = _ref.toasts,
      onClose = _ref.onClose,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top-right' : _ref$position,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 'small' : _ref$margin,
      _ref$statuses = _ref.statuses,
      statuses = _ref$statuses === void 0 ? STATUSES : _ref$statuses,
      _ref$getStatusText = _ref.getStatusText,
      getStatusText = _ref$getStatusText === void 0 ? GET_STATUS_TEXT : _ref$getStatusText,
      _ref$getStatusIcon = _ref.getStatusIcon,
      getStatusIcon = _ref$getStatusIcon === void 0 ? GET_STATUS_ICON : _ref$getStatusIcon,
      _ref$getStatusColor = _ref.getStatusColor,
      getStatusColor = _ref$getStatusColor === void 0 ? GET_STATUS_COLOR : _ref$getStatusColor,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? STYLE : _ref$style,
      _ref$mobileStyle = _ref.mobileStyle,
      mobileStyle = _ref$mobileStyle === void 0 ? MOBILE_STYLE : _ref$mobileStyle;

  if (toasts && Array.isArray(toasts) && toasts.length > 0) {
    return React__default.createElement(grommet.ResponsiveContext.Consumer, null, function (size) {
      return React__default.createElement(grommet.Layer, {
        modal: false,
        position: position,
        style: size !== 'small' ? style : mobileStyle
      }, toasts.map(function (toast) {
        var Icon = getStatusIcon(toast.status, statuses);
        var color = getStatusColor(toast.status, statuses);
        return React__default.createElement(grommet.Box, {
          margin: margin,
          key: toast.id,
          background: {
            light: 'light-1',
            dark: 'dark-2'
          },
          border: {
            color: color,
            size: 'medium',
            side: 'left'
          },
          pad: "small",
          elevation: "medium",
          round: "xsmall",
          direction: "row",
          align: "center",
          gap: "small"
        }, React__default.createElement(Icon, {
          color: color,
          size: "medium"
        }), React__default.createElement(grommet.Box, {
          flex: true,
          direction: "column"
        }, React__default.createElement(grommet.Text, {
          size: "small",
          weight: "bold"
        }, getStatusText(toast.status, statuses)), React__default.createElement(grommet.Text, {
          size: "small"
        }, toast.text)), React__default.createElement(grommet.Box, {
          margin: {
            left: 'medium'
          }
        }, React__default.createElement(grommetIcons.Close, {
          color: "light-5",
          size: "small",
          onClick: function onClick() {
            onClose(toast.id);
          },
          cursor: "pointer"
        })));
      }));
    });
  }

  return null;
}; // const Toast = ({ toasts, onClose, margin, position = 'top-right' }) => {
//     if(toasts && Array.isArray(toasts) && toasts.length > 0){
//         return (
//             <Layer modal={false} position={position} style={{background: 'transparent'}}>
//                 <Box gap='small' margin={margin} >
//                     {toasts.map((m) => (
//                         <Box
//                             key={m.id}
//                             background={ m.background || {light: 'light-2', dark: 'dark-2'}}
//                             pad='medium'
//                             elevation='xsmall'
//                             round='small'
//                             direction='row'
//                             justify='between'
//                             align='center'
//                             gap='medium'>
//                             <Text size='large'>{m.text}</Text>
//                             <Close onClick={()=>{onClose(m.id)}} />
//                         </Box>
//                     ))}
//                 </Box>
//             </Layer>
//         )
//     } else {
//         return null;
//     }
// };
// displayName needed for UI Automation


Toast.displayName = 'Toast';
var Toast$1 = reactRedux.connect(mapStateToProps)(Toast);

var ADD_TOAST = 'ADD_TOAST';
var REMOVE_TOAST = 'REMOVE_TOAST';

var toastReducers = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    case ADD_TOAST:
      newState = state.slice();
      newState.push({
        id: action.id,
        text: action.text,
        status: action.status
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

var createToast = function createToast(text, status) {
  store.dispatch(createToastAction(text, status));
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
var createToastAction = function createToastAction(text, status) {
  return {
    type: ADD_TOAST,
    id: v4_1(),
    text: text,
    status: status
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

var alpha = function alpha(color, percentage) {
  return Color(color).alpha(percentage);
};
/**
 *
 * determines if seed color is light or dark and returns a contrasting color
 * @export
 * @param {string} color
 * @param {number} [ratio=3]
 * @returns string
 */

var getContrastingColor = function getContrastingColor(color) {
  var c = Color(color);
  var contrast = 0;

  if (c.isLight()) {
    contrast = c.contrast(Color('black'));
    return c.darken(contrast);
  } else {
    contrast = c.contrast(Color('white'));
    return c.lighten(contrast);
  }
};

var Loader = function Loader(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'xlarge' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'brand' : _ref$color;
  return React__default.createElement(grommet.ThemeContext.Consumer, null, function (theme) {
    var loaderSize = theme ? theme.icon.size[size] : '48px';
    var loaderColor = theme ? theme.global.colors[color] : brand;
    var loaderBaseColor = alpha(loaderColor, 0.25);
    return React__default.createElement("div", {
      className: "loader",
      style: {
        borderRadius: '50%',
        width: loaderSize,
        height: loaderSize,
        borderWidth: "".concat(loaderSize / 10, "px"),
        borderStyle: 'solid',
        borderRightColor: loaderBaseColor,
        borderLeftColor: loaderBaseColor,
        borderBottomColor: loaderBaseColor,
        borderTopColor: loaderColor
      }
    });
  });
};

var LoaderCentered = function LoaderCentered(props) {
  return React__default.createElement(grommet.Box, {
    fill: true,
    flex: true,
    justify: "center",
    align: "center"
  }, React__default.createElement(Loader, props));
};
var LoaderOverlay = function LoaderOverlay(props) {
  return React__default.createElement(grommet.Box, {
    fill: true,
    flex: true,
    justify: "center",
    align: "center",
    background: {
      color: {
        'dark': 'dark-5',
        'light': 'light-2'
      },
      opacity: 'weak'
    },
    style: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
  }, React__default.createElement(Loader, props));
};

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
function (_Component) {
  _inherits(TagInput, _Component);

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
          key: v,
          background: "dark-3",
          flex: false,
          fill: false,
          gap: "xsmall",
          alignSelf: "center",
          align: "center"
        }, React__default.createElement(grommet.Text, {
          size: "small",
          title: v,
          truncate: true
        }, v), React__default.createElement(grommetIcons.Close, {
          size: "xxsmall",
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
}(React.Component);

var doFetch = function doFetch(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var body = arguments.length > 2 ? arguments[2] : undefined;
  var signal = arguments.length > 3 ? arguments[3] : undefined;
  var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
    'Content-Type': 'application/json'
  };
  var plomise = new Promise(function (resolve, reject) {
    fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
      signal: signal
    }).then(function (res) {
      if (res.status === 204) {
        resolve();
      } else {
        res.json().then(function (json) {
          if (res.ok) {
            // 200 level response
            resolve(json);
          } else {
            reject(json); //fail with error response from server
          }
        })["catch"](function (e) {
          return reject(e);
        }); //error processing json response
      }
    })["catch"](function (e) {
      if (e.name !== 'AbortError') {
        reject(e);
      }
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

exports.ArrowApp = ArrowApp;
exports.ErrorBoundary = ErrorBoundary;
exports.Loader = Loader;
exports.LoaderCentered = LoaderCentered;
exports.LoaderOverlay = LoaderOverlay;
exports.Navigation = Navigation;
exports.TagInput = TagInput;
exports.Toast = Toast$1;
exports.createToast = createToast;
exports.createToastAction = createToastAction;
exports.doFetch = doFetch;
exports.getContrastingColor = getContrastingColor;
exports.removeToast = removeToast;
exports.removeToastAction = removeToastAction;
exports.setTheme = setTheme;
exports.theme = theme$1;
exports.toastReducers = toastReducers;
