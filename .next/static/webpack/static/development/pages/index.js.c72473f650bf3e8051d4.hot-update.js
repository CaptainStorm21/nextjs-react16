webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layouts/MainLayout */ "./components/layouts/MainLayout.js");







var _jsxFileName = "C:\\nextjs-react16\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var pathname, query, asPath, req, res, userData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pathname = _ref.pathname, query = _ref.query, asPath = _ref.asPath, req = _ref.req, res = _ref.res;
                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://jsonplaceholder.typicode.com/users/1");

              case 4:
                response = _context.sent;
                userData = response.data; // console.log('getting loaded first')
                // console.log(userData)

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log("error");

              case 11:
                // const request = axios.get('http://jsonplaceholder.typicode.com/users/1')
                //   .then(response => {
                //                             console.log(response.data)
                //                           })
                // console.log(context);
                console.log(pathname), console.log(res);
                console.log(req);
                return _context.abrupt("return", {
                  user: {
                    name: "Francis",
                    lastName: "Medici"
                  },
                  userData: userData
                });

              case 14:
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
    }()
  }]);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = _super.call(this, props); // console.log("constructor");

    console.log(_this.props.user);
    _this.state = {
      user: _this.props.user,
      userData: _this.props.userData
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      console.log(this.props.user);
      console.log(this.state);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, "Welcome to NextJS")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicGF0aG5hbWUiLCJxdWVyeSIsImFzUGF0aCIsInJlcSIsInJlcyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJ1c2VyRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm5hbWUiLCJsYXN0TmFtZSIsInByb3BzIiwic3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O0FBQ1lDLHdCLFFBQUFBLFEsRUFBVUMsSyxRQUFBQSxLLEVBQU9DLE0sUUFBQUEsTSxFQUFRQyxHLFFBQUFBLEcsRUFBS0MsRyxRQUFBQSxHOzs7dUJBSWxDQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ3JCLDZDQURxQixDOzs7QUFBakJDLHdCO0FBR05DLHdCQUFRLEdBQUdELFFBQVEsQ0FBQ0UsSUFBcEIsQyxDQUNBO0FBQ0E7Ozs7Ozs7O0FBRUFDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaOzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FELHVCQUFPLENBQUNDLEdBQVIsQ0FBWVgsUUFBWixHQUF1QlUsT0FBTyxDQUFDQyxHQUFSLENBQVlQLEdBQVosQ0FBdkI7QUFDQU0sdUJBQU8sQ0FBQ0MsR0FBUixDQUFZUixHQUFaO2lEQUNPO0FBQ0xTLHNCQUFJLEVBQUU7QUFDSkMsd0JBQUksRUFBRSxTQURGO0FBRUpDLDRCQUFRLEVBQUU7QUFGTixtQkFERDtBQUtMTiwwQkFBUSxFQUFSQTtBQUxLLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRVCxnQkFBWU8sS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUVqQjs7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBS0ksS0FBTCxDQUFXSCxJQUF2QjtBQUNBLFVBQUtJLEtBQUwsR0FBYTtBQUNYSixVQUFJLEVBQUUsTUFBS0csS0FBTCxDQUFXSCxJQUROO0FBRVhKLGNBQVEsRUFBRSxNQUFLTyxLQUFMLENBQVdQO0FBRlYsS0FBYjtBQUppQjtBQVFsQjs7Ozs2QkFDUTtBQUNQRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSSxLQUFMLENBQVdILElBQXZCO0FBQ0FGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtLLEtBQWpCO0FBQ0EsYUFDRSxtRUFDRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLENBREYsQ0FERjtBQU9EOzs7O0VBaEQrQkMsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM3MjQ3M2Y2NTBiZjNlODA1MWQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcGF0aG5hbWUsIHF1ZXJ5LCBhc1BhdGgsIHJlcSwgcmVzIH0pIHtcclxuICAgIGxldCB1c2VyRGF0YTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcImh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLzFcIlxyXG4gICAgICApO1xyXG4gICAgICB1c2VyRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXR0aW5nIGxvYWRlZCBmaXJzdCcpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXhpb3MuZ2V0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8xJylcclxuICAgIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKHBhdGhuYW1lKSwgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbmFtZTogXCJGcmFuY2lzXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiTWVkaWNpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHVzZXJEYXRhLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29uc3RydWN0b3JcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnVzZXIpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcjogdGhpcy5wcm9wcy51c2VyLFxyXG4gICAgICB1c2VyRGF0YTogdGhpcy5wcm9wcy51c2VyRGF0YSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlcik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgICA8aDE+V2VsY29tZSB0byBOZXh0SlM8L2gxPlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9