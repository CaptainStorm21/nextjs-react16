webpackHotUpdate("static\\development\\pages\\users\\profile.js",{

/***/ "./pages/users/profile.js":
/*!********************************!*\
  !*** ./pages/users/profile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layouts/MainLayout */ "./components/layouts/MainLayout.js");
/* harmony import */ var _static_css_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/css/main.css */ "./static/css/main.css");
/* harmony import */ var _static_css_main_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "C:\\nextjs-react16\\pages\\users\\profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Profile = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, _Component);

  var _super = _createSuper(Profile);

  function Profile() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showUser", function (user) {
      return __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 20
        }
      }, user.name, __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 22
        }
      }, "Username: ", user.username, " "), __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 22
        }
      }, "Email: ", user.email, " "));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Profile, [{
    key: "render",
    value: function render() {
      // console.log(this.props);
      console.log(this.props);
      return __jsx(_components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 22
        }
      }, __jsx("h3", {
        className: _static_css_main_css__WEBPACK_IMPORTED_MODULE_11___default.a.superAwesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 24
        }
      }, "Profile"), this.showUser(this.props.user));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, user, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("http://jsonplaceholder.typicode.com/users/".concat(query.userId));

              case 4:
                response = _context.sent;
                user = response.data;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 11:
                return _context.abrupt("return", {
                  user: user
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }() // individual detail

  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VyIiwibmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJNeVN0eWxlIiwic3VwZXJBd2Vzb21lIiwic2hvd1VzZXIiLCJxdWVyeSIsImF4aW9zIiwiZ2V0IiwidXNlcklkIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7OzttTkFlTyxVQUFDQyxJQUFEO0FBQUEsYUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ2pCQSxJQUFJLENBQUNDLElBRFksRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFnQkQsSUFBSSxDQUFDRSxRQUFyQixNQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBYUYsSUFBSSxDQUFDRyxLQUFsQixNQUhGLENBRFM7QUFBQSxLOzs7Ozs7OzZCQU9GO0FBQ1A7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsS0FBakI7QUFDQSxhQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBRUMsNERBQU8sQ0FBQ0MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHLEtBQUtDLFFBQUwsQ0FBYyxLQUFLSCxLQUFMLENBQVdOLElBQXpCLENBRkgsQ0FERjtBQU1EOzs7Ozs7Ozs7O0FBOUI4QlUscUIsUUFBQUEsSzs7O3VCQUlKQyw2Q0FBSyxDQUFDQyxHQUFOLHFEQUN3QkYsS0FBSyxDQUFDRyxNQUQ5QixFOzs7QUFBakJDLHdCO0FBR05kLG9CQUFJLEdBQUdjLFFBQVEsQ0FBQ0MsSUFBaEI7Ozs7Ozs7QUFFQVgsdUJBQU8sQ0FBQ1ksS0FBUjs7O2lEQUVLO0FBQUVoQixzQkFBSSxFQUFKQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7UUFFVDs7Ozs7RUFkb0JpQiwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnNcXHByb2ZpbGUuanMuYTY4NzI4NGNjOTc5NjY5MjRmYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBNeVN0eWxlIGZyb20gXCIuLi8uLi9zdGF0aWMvY3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgICAgICAgICAgICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdXNlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICBgaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtxdWVyeS51c2VySWR9YFxyXG4gICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICB1c2VyID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdXNlciB9O1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAvLyBpbmRpdmlkdWFsIGRldGFpbFxyXG4gICAgICAgICAgICAgICAgIHNob3dVc2VyID0gKHVzZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2PlVzZXJuYW1lOiB7dXNlci51c2VybmFtZX0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+RW1haWw6IHt1c2VyLmVtYWlsfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e015U3R5bGUuc3VwZXJBd2Vzb21lfT5Qcm9maWxlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zaG93VXNlcih0aGlzLnByb3BzLnVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9