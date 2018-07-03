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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Hello_1 = __webpack_require__(/*! ./Hello */ "./src/components/Hello.tsx");
var Toggle_1 = __webpack_require__(/*! ./Toggle */ "./src/components/Toggle.tsx");
var LoginControl_1 = __webpack_require__(/*! ./LoginControl */ "./src/components/LoginControl.tsx");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header" },
                React.createElement(Hello_1.default, { developer: "LiteWit", compiler: "TypeScript", framework: "React" })),
            React.createElement(Toggle_1.default, null),
            React.createElement(LoginControl_1.default, null),
            React.createElement("p", { className: "App-intro" },
                "To get started, edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload.")));
    };
    return App;
}(React.Component));
exports.default = App;


/***/ }),

/***/ "./src/components/Hello.tsx":
/*!**********************************!*\
  !*** ./src/components/Hello.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function Hello(props) {
    return (React.createElement("h1", null,
        "Hello from ",
        props.developer,
        ", ",
        props.compiler,
        " and ",
        props.framework,
        "!"));
}
exports.default = Hello;


/***/ }),

/***/ "./src/components/LoginControl.tsx":
/*!*****************************************!*\
  !*** ./src/components/LoginControl.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function UserGreeting(props) {
    return React.createElement("h1", null, "Welcome back!");
}
function GuestGreeting(props) {
    return React.createElement("h1", null, "Please sign up.");
}
function Greeting(props) {
    var isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return React.createElement(UserGreeting, null);
    }
    return React.createElement(GuestGreeting, null);
}
function LoginButton(props) {
    return (React.createElement("button", { onClick: props.onClick }, "Login"));
}
function LogoutButton(props) {
    return (React.createElement("button", { onClick: props.onClick }, "Logout"));
}
function AuthButton(props) {
    var isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return React.createElement(LogoutButton, { onClick: props.onLogoutClick });
    }
    else {
        return React.createElement(LoginButton, { onClick: props.onLoginClick });
    }
}
var LoginControl = /** @class */ (function (_super) {
    __extends(LoginControl, _super);
    function LoginControl(props) {
        var _this = _super.call(this, props) || this;
        _this.handleLoginClick = _this.handleLoginClick.bind(_this);
        _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
        _this.state = { isLoggedIn: false };
        return _this;
    }
    LoginControl.prototype.handleLoginClick = function () {
        this.setState({ isLoggedIn: true });
    };
    LoginControl.prototype.handleLogoutClick = function () {
        this.setState({ isLoggedIn: false });
    };
    LoginControl.prototype.render = function () {
        var isLoggedIn = this.state.isLoggedIn;
        return (React.createElement("div", null,
            React.createElement(Greeting, { isLoggedIn: isLoggedIn }),
            React.createElement(AuthButton, { onLogoutClick: this.handleLogoutClick, onLoginClick: this.handleLoginClick, isLoggedIn: isLoggedIn })));
    };
    return LoginControl;
}(React.Component));
exports.default = LoginControl;


/***/ }),

/***/ "./src/components/Toggle.tsx":
/*!***********************************!*\
  !*** ./src/components/Toggle.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
    // prevState: any;
    function Toggle(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { isToggleOn: true };
        // This binding is necessary to make 'this' work in the callback
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Toggle.prototype.handleClick = function () {
        var prevState = this.state;
        this.setState({
            isToggleOn: !prevState.isToggleOn
        });
    };
    Toggle.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("span", null, "Toogle button "),
            React.createElement("button", { onClick: this.handleClick }, this.state.isToggleOn ? 'ON' : 'OFF')));
    };
    return Toggle;
}(React.Component));
exports.default = Toggle;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var App_1 = __webpack_require__(/*! ./components/App */ "./src/components/App.tsx");
// import './index.css';
var registerServiceWorker_1 = __webpack_require__(/*! ./registerServiceWorker */ "./src/registerServiceWorker.ts");
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
registerServiceWorker_1.default();


/***/ }),

/***/ "./src/registerServiceWorker.ts":
/*!**************************************!*\
  !*** ./src/registerServiceWorker.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:no-console
// In production, we register a service worker to serve assets from local cache.
Object.defineProperty(exports, "__esModule", { value: true });
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the 'N+1' visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register() {
    if (false) { var publicUrl; }
}
exports.default = register;
function registerValidSW(swUrl) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker) {
                installingWorker.onstatechange = function () {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // At this point, the old content will have been purged and
                            // the fresh content will have been added to the cache.
                            // It's the perfect time to display a 'New content is
                            // available; please refresh.' message in your web app.
                            console.log('New content is available; please refresh.');
                        }
                        else {
                            // At this point, everything has been precached.
                            // It's the perfect time to display a
                            // 'Content is cached for offline use.' message.
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            }
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl)
        .then(function (response) {
        // Ensure service worker exists, and that we really are getting a JS file.
        if (response.status === 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map