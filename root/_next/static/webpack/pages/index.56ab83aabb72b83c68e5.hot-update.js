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


var _jsxFileName = "C:\\Users\\mateu\\Documents\\Developer\\MuitaCarne\\pages\\index.js",
    _s = $RefreshSig$();








function Index(_ref) {
  _s();

  var screenSize = _ref.screenSize;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _ref2 = screenSize !== null && screenSize !== void 0 ? screenSize : {},
      width = _ref2.width,
      height = _ref2.height;

  console.log({
    width: width,
    height: height
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BannerSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo1.jpg',
        alt: 'demo1',
        height: height * 0.8
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo2.jpg',
        alt: 'demo2',
        height: height * 0.8
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo3.jpg',
        alt: 'demo3',
        height: height * 0.8
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo4.jpg',
        alt: 'demo4',
        height: height * 0.8
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)]
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJzY3JlZW5TaXplIiwicm91dGVyIiwidXNlUm91dGVyIiwid2lkdGgiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BRUc7QUFBQTs7QUFBQSxNQUREQyxVQUNDLFFBRERBLFVBQ0M7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURDLGNBRXlCRixVQUZ6QixhQUV5QkEsVUFGekIsY0FFeUJBLFVBRnpCLEdBRXVDLEVBRnZDO0FBQUEsTUFFT0csS0FGUCxTQUVPQSxLQUZQO0FBQUEsTUFFY0MsTUFGZCxTQUVjQSxNQUZkOztBQUlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFSCxTQUFLLEVBQUxBLEtBQUY7QUFBU0MsVUFBTSxFQUFOQTtBQUFULEdBQVo7QUFDQSxzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDJCQUNFLHFFQUFDLGdFQUFEO0FBQ0UsV0FBSyxFQUFFLGNBQ0wscUVBQUMsMERBQUQ7QUFBUSxXQUFHLEVBQUUseUJBQWI7QUFBd0MsV0FBRyxFQUFFLE9BQTdDO0FBQXNELGNBQU0sRUFBRUEsTUFBTSxHQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESyxlQUVMLHFFQUFDLDBEQUFEO0FBQVEsV0FBRyxFQUFFLHlCQUFiO0FBQXdDLFdBQUcsRUFBRSxPQUE3QztBQUFzRCxjQUFNLEVBQUVBLE1BQU0sR0FBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkssZUFHTCxxRUFBQywwREFBRDtBQUFRLFdBQUcsRUFBRSx5QkFBYjtBQUF3QyxXQUFHLEVBQUUsT0FBN0M7QUFBc0QsY0FBTSxFQUFFQSxNQUFNLEdBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhLLGVBSUwscUVBQUMsMERBQUQ7QUFBUSxXQUFHLEVBQUUseUJBQWI7QUFBd0MsV0FBRyxFQUFFLE9BQTdDO0FBQXNELGNBQU0sRUFBRUEsTUFBTSxHQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FuQlFMLEs7VUFHUUcscUQ7OztLQUhSSCxLOztBQXNCVCxJQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDUixjQUFVLEVBQUVRLEtBQUssQ0FBQ1IsVUFBTixDQUFpQkE7QUFESyxHQUFaO0FBQUEsQ0FBeEI7O0FBSWVTLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QlIsS0FBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NmFiODNhYWJiNzJiODNjNjhlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbm5lciBmcm9tICdAL2NvbXBvbmVudHMvQmFubmVyJztcbmltcG9ydCBCYW5uZXJTbGlkZXIgZnJvbSAnQC9jb21wb25lbnRzL0Jhbm5lclNsaWRlcic7XG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICdAL2xheW91dHMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmZ1bmN0aW9uIEluZGV4KHtcbiAgc2NyZWVuU2l6ZVxufSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzY3JlZW5TaXplID8/IHt9O1xuXG4gIGNvbnNvbGUubG9nKHsgd2lkdGgsIGhlaWdodCB9KVxuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgPEJhbm5lclNsaWRlclxuICAgICAgICBpdGVtcz17W1xuICAgICAgICAgIDxCYW5uZXIgc3JjPXsnL2ltYWdlcy9kZW1vcy9kZW1vMS5qcGcnfSBhbHQ9eydkZW1vMSd9IGhlaWdodD17aGVpZ2h0KjAuOH0gLz4sXG4gICAgICAgICAgPEJhbm5lciBzcmM9eycvaW1hZ2VzL2RlbW9zL2RlbW8yLmpwZyd9IGFsdD17J2RlbW8yJ30gaGVpZ2h0PXtoZWlnaHQqMC44fS8+LFxuICAgICAgICAgIDxCYW5uZXIgc3JjPXsnL2ltYWdlcy9kZW1vcy9kZW1vMy5qcGcnfSBhbHQ9eydkZW1vMyd9IGhlaWdodD17aGVpZ2h0KjAuOH0vPixcbiAgICAgICAgICA8QmFubmVyIHNyYz17Jy9pbWFnZXMvZGVtb3MvZGVtbzQuanBnJ30gYWx0PXsnZGVtbzQnfSBoZWlnaHQ9e2hlaWdodCowLjh9Lz4sXG4gICAgICAgIF19XG4gICAgICAvPlxuICAgIDwvRGVmYXVsdExheW91dD5cbiAgKTtcbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XG4gIHNjcmVlblNpemU6IHN0b3JlLnNjcmVlblNpemUuc2NyZWVuU2l6ZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5kZXgpOyJdLCJzb3VyY2VSb290IjoiIn0=