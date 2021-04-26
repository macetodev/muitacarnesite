webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Banner */ "./src/components/Banner/index.js");
/* harmony import */ var _components_BannerSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BannerSlider */ "./src/components/BannerSlider/index.js");
/* harmony import */ var _layouts_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/index.js */ "./src/layouts/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\mateu\\Documents\\Developer\\MuitaCarne\\pages\\index.js",
    _s = $RefreshSig$();









function Index(_ref) {
  _s();

  var screenSize = _ref.screenSize;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _ref2 = screenSize !== null && screenSize !== void 0 ? screenSize : {},
      width = _ref2.width,
      height = _ref2.height;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_parallax__WEBPACK_IMPORTED_MODULE_7__["Parallax"], {
      strength: 300,
      style: {
        height: height * 0.8
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_parallax__WEBPACK_IMPORTED_MODULE_7__["Background"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BannerSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
          height: height * 0.8,
          items: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
            src: '/images/demos/demo1.jpg',
            alt: 'demo1',
            height: height * 0.8
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
            src: '/images/demos/demo2.jpg',
            alt: 'demo2',
            height: height * 0.8
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
            src: '/images/demos/demo3.jpg',
            alt: 'demo3',
            height: height * 0.8
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
            src: '/images/demos/demo4.jpg',
            alt: 'demo4',
            height: height * 0.8
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, this)]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), "teste"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(Index, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Index;

var mapStateToProps = function mapStateToProps(store) {
  return {
    screenSize: store.screenSize.screenSize
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Index));

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJzY3JlZW5TaXplIiwicm91dGVyIiwidXNlUm91dGVyIiwid2lkdGgiLCJoZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BRUc7QUFBQTs7QUFBQSxNQUREQyxVQUNDLFFBRERBLFVBQ0M7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURDLGNBRXlCRixVQUZ6QixhQUV5QkEsVUFGekIsY0FFeUJBLFVBRnpCLEdBRXVDLEVBRnZDO0FBQUEsTUFFT0csS0FGUCxTQUVPQSxLQUZQO0FBQUEsTUFFY0MsTUFGZCxTQUVjQSxNQUZkOztBQUlELHNCQUNFLHFFQUFDLHlEQUFEO0FBQUEsMkJBQ0UscUVBQUMsdURBQUQ7QUFBVSxjQUFRLEVBQUUsR0FBcEI7QUFBeUIsV0FBSyxFQUFFO0FBQUNBLGNBQU0sRUFBRUEsTUFBTSxHQUFHO0FBQWxCLE9BQWhDO0FBQUEsOEJBQ0UscUVBQUMseURBQUQ7QUFBQSwrQkFDRSxxRUFBQyxnRUFBRDtBQUNFLGdCQUFNLEVBQUVBLE1BQU0sR0FBRyxHQURuQjtBQUVFLGVBQUssRUFBRSxjQUNMLHFFQUFDLDBEQUFEO0FBQVEsZUFBRyxFQUFFLHlCQUFiO0FBQXdDLGVBQUcsRUFBRSxPQUE3QztBQUFzRCxrQkFBTSxFQUFFQSxNQUFNLEdBQUc7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESyxlQUVMLHFFQUFDLDBEQUFEO0FBQVEsZUFBRyxFQUFFLHlCQUFiO0FBQXdDLGVBQUcsRUFBRSxPQUE3QztBQUFzRCxrQkFBTSxFQUFFQSxNQUFNLEdBQUc7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSyxlQUdMLHFFQUFDLDBEQUFEO0FBQVEsZUFBRyxFQUFFLHlCQUFiO0FBQXdDLGVBQUcsRUFBRSxPQUE3QztBQUFzRCxrQkFBTSxFQUFFQSxNQUFNLEdBQUc7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISyxlQUlMLHFFQUFDLDBEQUFEO0FBQVEsZUFBRyxFQUFFLHlCQUFiO0FBQXdDLGVBQUcsRUFBRSxPQUE3QztBQUFzRCxrQkFBTSxFQUFFQSxNQUFNLEdBQUc7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQXpCUUwsSztVQUdRRyxxRDs7O0tBSFJILEs7O0FBNEJULElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENOLGNBQVUsRUFBRU0sS0FBSyxDQUFDTixVQUFOLENBQWlCQTtBQURLLEdBQVo7QUFBQSxDQUF4Qjs7QUFJZU8sMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCTixLQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwNmI2MWIxZTg5Yjk0NmU4YzQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFubmVyIGZyb20gJ0AvY29tcG9uZW50cy9CYW5uZXInO1xuaW1wb3J0IEJhbm5lclNsaWRlciBmcm9tICdAL2NvbXBvbmVudHMvQmFubmVyU2xpZGVyJztcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9pbmRleC5qcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFBhcmFsbGF4LCBCYWNrZ3JvdW5kIH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuXG5mdW5jdGlvbiBJbmRleCh7XG4gIHNjcmVlblNpemVcbn0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc2NyZWVuU2l6ZSA/PyB7fTtcblxuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgPFBhcmFsbGF4IHN0cmVuZ3RoPXszMDB9IHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQgKiAwLjh9fT5cbiAgICAgICAgPEJhY2tncm91bmQ+XG4gICAgICAgICAgPEJhbm5lclNsaWRlclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHQgKiAwLjh9XG4gICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICA8QmFubmVyIHNyYz17Jy9pbWFnZXMvZGVtb3MvZGVtbzEuanBnJ30gYWx0PXsnZGVtbzEnfSBoZWlnaHQ9e2hlaWdodCAqIDAuOH0gLz4sXG4gICAgICAgICAgICAgIDxCYW5uZXIgc3JjPXsnL2ltYWdlcy9kZW1vcy9kZW1vMi5qcGcnfSBhbHQ9eydkZW1vMid9IGhlaWdodD17aGVpZ2h0ICogMC44fSAvPixcbiAgICAgICAgICAgICAgPEJhbm5lciBzcmM9eycvaW1hZ2VzL2RlbW9zL2RlbW8zLmpwZyd9IGFsdD17J2RlbW8zJ30gaGVpZ2h0PXtoZWlnaHQgKiAwLjh9IC8+LFxuICAgICAgICAgICAgICA8QmFubmVyIHNyYz17Jy9pbWFnZXMvZGVtb3MvZGVtbzQuanBnJ30gYWx0PXsnZGVtbzQnfSBoZWlnaHQ9e2hlaWdodCAqIDAuOH0gLz4sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQmFja2dyb3VuZD5cblxuICAgICAgICB0ZXN0ZVxuICAgICAgPC9QYXJhbGxheD5cbiAgICA8L0RlZmF1bHRMYXlvdXQ+XG4gICk7XG59XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xuICBzY3JlZW5TaXplOiBzdG9yZS5zY3JlZW5TaXplLnNjcmVlblNpemUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9