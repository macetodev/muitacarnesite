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
/* harmony import */ var _components_Parallax_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Parallax/ParallaxSection */ "./src/components/Parallax/ParallaxSection.js");
/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Parallax */ "./src/components/Parallax/index.js");



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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BannerSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo1.jpg',
        alt: 'demo1',
        height: height * 0.9
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo2.jpg',
        alt: 'demo2',
        height: height * 0.9
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo3.jpg',
        alt: 'demo3',
        height: height * 0.9
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this)]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Parallax_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      text: "Nossa receita: ingredientes sempre frescos e de alt\xEDssima qualidade, aproxima\xE7\xE3o com fornecedores e valoriza\xE7\xE3o da nossa equipe."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Parallax__WEBPACK_IMPORTED_MODULE_9__["default"], {
      image: '/images/demos/demo4.jpg',
      content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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

/***/ }),

/***/ "./src/components/Parallax/index.js":
/*!******************************************!*\
  !*** ./src/components/Parallax/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\mateu\\Documents\\Developer\\MuitaCarne\\src\\components\\Parallax\\index.js",
    _this = undefined;




var ParallaxContainer = function ParallaxContainer(_ref) {
  var image = _ref.image,
      content = _ref.content;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_parallax__WEBPACK_IMPORTED_MODULE_1__["Parallax"], {
    bgImage: image,
    strength: 500,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 500
      },
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_c = ParallaxContainer;
/* harmony default export */ __webpack_exports__["default"] = (ParallaxContainer);

var _c;

$RefreshReg$(_c, "ParallaxContainer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhcmFsbGF4L2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2NyZWVuU2l6ZSIsInJvdXRlciIsInVzZVJvdXRlciIsIndpZHRoIiwiaGVpZ2h0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJjb25uZWN0IiwiUGFyYWxsYXhDb250YWluZXIiLCJpbWFnZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUVHO0FBQUE7O0FBQUEsTUFEREMsVUFDQyxRQUREQSxVQUNDO0FBQ0QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEQyxjQUV5QkYsVUFGekIsYUFFeUJBLFVBRnpCLGNBRXlCQSxVQUZ6QixHQUV1QyxFQUZ2QztBQUFBLE1BRU9HLEtBRlAsU0FFT0EsS0FGUDtBQUFBLE1BRWNDLE1BRmQsU0FFY0EsTUFGZDs7QUFJRCxzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQ0UsV0FBSyxFQUFFLGNBQ0wscUVBQUMsMERBQUQ7QUFBUSxXQUFHLEVBQUUseUJBQWI7QUFBd0MsV0FBRyxFQUFFLE9BQTdDO0FBQXNELGNBQU0sRUFBRUEsTUFBTSxHQUFHO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESyxlQUVMLHFFQUFDLDBEQUFEO0FBQVEsV0FBRyxFQUFFLHlCQUFiO0FBQXdDLFdBQUcsRUFBRSxPQUE3QztBQUFzRCxjQUFNLEVBQUVBLE1BQU0sR0FBRztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkssZUFHTCxxRUFBQywwREFBRDtBQUFRLFdBQUcsRUFBRSx5QkFBYjtBQUF3QyxXQUFHLEVBQUUsT0FBN0M7QUFBc0QsY0FBTSxFQUFFQSxNQUFNLEdBQUc7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhLO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsNEVBQUQ7QUFDRSxVQUFJLEVBQUM7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFXRSxxRUFBQyw0REFBRDtBQUNFLFdBQUssRUFBRSx5QkFEVDtBQUVFLGFBQU8sZUFBRTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0F4QlFMLEs7VUFHUUcscUQ7OztLQUhSSCxLOztBQTJCVCxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDTixjQUFVLEVBQUVNLEtBQUssQ0FBQ04sVUFBTixDQUFpQkE7QUFESyxHQUFaO0FBQUEsQ0FBeEI7O0FBSWVPLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5Qk4sS0FBekIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBOztBQUVBLElBQU1TLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FHcEI7QUFBQSxNQUZGQyxLQUVFLFFBRkZBLEtBRUU7QUFBQSxNQURGQyxPQUNFLFFBREZBLE9BQ0U7QUFDRixzQkFDSSxxRUFBQyx1REFBRDtBQUFVLFdBQU8sRUFBRUQsS0FBbkI7QUFBMEIsWUFBUSxFQUFFLEdBQXBDO0FBQUEsMkJBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBRUwsY0FBTSxFQUFFO0FBQVYsT0FBWjtBQUFBLGdCQUNLTTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQVhEOztLQUFNRixpQjtBQWFTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NWMxYjE0MDNlZTJiMjNjOTFiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbm5lciBmcm9tICdAL2NvbXBvbmVudHMvQmFubmVyJztcbmltcG9ydCBCYW5uZXJTbGlkZXIgZnJvbSAnQC9jb21wb25lbnRzL0Jhbm5lclNsaWRlcic7XG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICdAL2xheW91dHMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBQYXJhbGxheCwgQmFja2dyb3VuZCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcbmltcG9ydCBQYXJhbGxheFNlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL1BhcmFsbGF4L1BhcmFsbGF4U2VjdGlvbic7XG5pbXBvcnQgUGFyYWxsYXhDb250YWluZXIgZnJvbSAnQC9jb21wb25lbnRzL1BhcmFsbGF4JztcblxuZnVuY3Rpb24gSW5kZXgoe1xuICBzY3JlZW5TaXplXG59KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHNjcmVlblNpemUgPz8ge307XG5cbiAgcmV0dXJuIChcbiAgICA8RGVmYXVsdExheW91dD5cbiAgICAgIDxCYW5uZXJTbGlkZXJcbiAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICA8QmFubmVyIHNyYz17Jy9pbWFnZXMvZGVtb3MvZGVtbzEuanBnJ30gYWx0PXsnZGVtbzEnfSBoZWlnaHQ9e2hlaWdodCAqIDAuOX0gLz4sXG4gICAgICAgICAgPEJhbm5lciBzcmM9eycvaW1hZ2VzL2RlbW9zL2RlbW8yLmpwZyd9IGFsdD17J2RlbW8yJ30gaGVpZ2h0PXtoZWlnaHQgKiAwLjl9IC8+LFxuICAgICAgICAgIDxCYW5uZXIgc3JjPXsnL2ltYWdlcy9kZW1vcy9kZW1vMy5qcGcnfSBhbHQ9eydkZW1vMyd9IGhlaWdodD17aGVpZ2h0ICogMC45fSAvPixcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8UGFyYWxsYXhTZWN0aW9uXG4gICAgICAgIHRleHQ9XCJOb3NzYSByZWNlaXRhOiBpbmdyZWRpZW50ZXMgc2VtcHJlIGZyZXNjb3MgZSBkZSBhbHTDrXNzaW1hIHF1YWxpZGFkZSwgYXByb3hpbWHDp8OjbyBjb20gZm9ybmVjZWRvcmVzIGUgdmFsb3JpemHDp8OjbyBkYSBub3NzYSBlcXVpcGUuXCJcbiAgICAgIC8+XG4gICAgICA8UGFyYWxsYXhDb250YWluZXJcbiAgICAgICAgaW1hZ2U9eycvaW1hZ2VzL2RlbW9zL2RlbW80LmpwZyd9XG4gICAgICAgIGNvbnRlbnQ9ezw+PC8+fVxuICAgICAgLz5cbiAgICA8L0RlZmF1bHRMYXlvdXQ+XG4gICk7XG59XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xuICBzY3JlZW5TaXplOiBzdG9yZS5zY3JlZW5TaXplLnNjcmVlblNpemUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEluZGV4KTsiLCJpbXBvcnQgeyBQYXJhbGxheCwgQmFja2dyb3VuZCB9IGZyb20gXCJyZWFjdC1wYXJhbGxheFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGFyYWxsYXhDb250YWluZXIgPSAoe1xyXG4gICAgaW1hZ2UsXHJcbiAgICBjb250ZW50XHJcbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9e2ltYWdlfSBzdHJlbmd0aD17NTAwfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwMCB9fT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJhbGxheENvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9