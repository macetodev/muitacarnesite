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
        lineNumber: 20,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo2.jpg',
        alt: 'demo2',
        height: height * 0.9
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo3.jpg',
        alt: 'demo3',
        height: height * 0.9
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        src: '/images/demos/demo4.jpg',
        alt: 'demo4',
        height: height * 0.9
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this)]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Parallax_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      text: "Nossa receita: ingredientes sempre frescos e de alt\xEDssima qualidade, aproxima\xE7\xE3o com fornecedores e valoriza\xE7\xE3o da nossa equipe."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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

/***/ "./src/components/Parallax/ParallaxSection.js":
/*!****************************************************!*\
  !*** ./src/components/Parallax/ParallaxSection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\mateu\\Documents\\Developer\\MuitaCarne\\src\\components\\Parallax\\ParallaxSection.js",
    _this = undefined;




var ParallaxSection = function ParallaxSection(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      children: text !== null && text !== void 0 ? text : ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_c = ParallaxSection;
/* harmony default export */ __webpack_exports__["default"] = (ParallaxSection);

var _c;

$RefreshReg$(_c, "ParallaxSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhcmFsbGF4L1BhcmFsbGF4U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInNjcmVlblNpemUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY29ubmVjdCIsIlBhcmFsbGF4U2VjdGlvbiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BRUc7QUFBQTs7QUFBQSxNQUREQyxVQUNDLFFBRERBLFVBQ0M7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURDLGNBRXlCRixVQUZ6QixhQUV5QkEsVUFGekIsY0FFeUJBLFVBRnpCLEdBRXVDLEVBRnZDO0FBQUEsTUFFT0csS0FGUCxTQUVPQSxLQUZQO0FBQUEsTUFFY0MsTUFGZCxTQUVjQSxNQUZkOztBQUlELHNCQUNFLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFDRSxXQUFLLEVBQUUsY0FDTCxxRUFBQywwREFBRDtBQUFRLFdBQUcsRUFBRSx5QkFBYjtBQUF3QyxXQUFHLEVBQUUsT0FBN0M7QUFBc0QsY0FBTSxFQUFFQSxNQUFNLEdBQUc7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURLLGVBRUwscUVBQUMsMERBQUQ7QUFBUSxXQUFHLEVBQUUseUJBQWI7QUFBd0MsV0FBRyxFQUFFLE9BQTdDO0FBQXNELGNBQU0sRUFBRUEsTUFBTSxHQUFHO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSyxlQUdMLHFFQUFDLDBEQUFEO0FBQVEsV0FBRyxFQUFFLHlCQUFiO0FBQXdDLFdBQUcsRUFBRSxPQUE3QztBQUFzRCxjQUFNLEVBQUVBLE1BQU0sR0FBRztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEssZUFJTCxxRUFBQywwREFBRDtBQUFRLFdBQUcsRUFBRSx5QkFBYjtBQUF3QyxXQUFHLEVBQUUsT0FBN0M7QUFBc0QsY0FBTSxFQUFFQSxNQUFNLEdBQUc7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpLO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0UscUVBQUMsNEVBQUQ7QUFDRSxVQUFJLEVBQUM7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0FyQlFMLEs7VUFHUUcscUQ7OztLQUhSSCxLOztBQXdCVCxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDTixjQUFVLEVBQUVNLEtBQUssQ0FBQ04sVUFBTixDQUFpQkE7QUFESyxHQUFaO0FBQUEsQ0FBeEI7O0FBSWVPLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5Qk4sS0FBekIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7O0FBRUEsSUFBTVMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUVsQjtBQUFBLE1BREZDLElBQ0UsUUFERkEsSUFDRTtBQUNGLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsNERBQUQ7QUFBQSxnQkFBYUEsSUFBYixhQUFhQSxJQUFiLGNBQWFBLElBQWIsR0FBcUI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBUkQ7O0tBQU1ELGU7QUFVU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjBmYWMyYzRmNmNmODc2ZjdmMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYW5uZXIgZnJvbSAnQC9jb21wb25lbnRzL0Jhbm5lcic7XG5pbXBvcnQgQmFubmVyU2xpZGVyIGZyb20gJ0AvY29tcG9uZW50cy9CYW5uZXJTbGlkZXInO1xuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnQC9sYXlvdXRzL2luZGV4LmpzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUGFyYWxsYXgsIEJhY2tncm91bmQgfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XG5pbXBvcnQgUGFyYWxsYXhTZWN0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9QYXJhbGxheC9QYXJhbGxheFNlY3Rpb24nO1xuXG5mdW5jdGlvbiBJbmRleCh7XG4gIHNjcmVlblNpemVcbn0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc2NyZWVuU2l6ZSA/PyB7fTtcblxuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgPEJhbm5lclNsaWRlclxuICAgICAgICBpdGVtcz17W1xuICAgICAgICAgIDxCYW5uZXIgc3JjPXsnL2ltYWdlcy9kZW1vcy9kZW1vMS5qcGcnfSBhbHQ9eydkZW1vMSd9IGhlaWdodD17aGVpZ2h0ICogMC45fSAvPixcbiAgICAgICAgICA8QmFubmVyIHNyYz17Jy9pbWFnZXMvZGVtb3MvZGVtbzIuanBnJ30gYWx0PXsnZGVtbzInfSBoZWlnaHQ9e2hlaWdodCAqIDAuOX0gLz4sXG4gICAgICAgICAgPEJhbm5lciBzcmM9eycvaW1hZ2VzL2RlbW9zL2RlbW8zLmpwZyd9IGFsdD17J2RlbW8zJ30gaGVpZ2h0PXtoZWlnaHQgKiAwLjl9IC8+LFxuICAgICAgICAgIDxCYW5uZXIgc3JjPXsnL2ltYWdlcy9kZW1vcy9kZW1vNC5qcGcnfSBhbHQ9eydkZW1vNCd9IGhlaWdodD17aGVpZ2h0ICogMC45fSAvPixcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8UGFyYWxsYXhTZWN0aW9uXG4gICAgICAgIHRleHQ9XCJOb3NzYSByZWNlaXRhOiBpbmdyZWRpZW50ZXMgc2VtcHJlIGZyZXNjb3MgZSBkZSBhbHTDrXNzaW1hIHF1YWxpZGFkZSwgYXByb3hpbWHDp8OjbyBjb20gZm9ybmVjZWRvcmVzIGUgdmFsb3JpemHDp8OjbyBkYSBub3NzYSBlcXVpcGUuXCJcbiAgICAgIC8+XG4gICAgPC9EZWZhdWx0TGF5b3V0PlxuICApO1xufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcbiAgc2NyZWVuU2l6ZTogc3RvcmUuc2NyZWVuU2l6ZS5zY3JlZW5TaXplLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbmRleCk7IiwiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGFyYWxsYXhTZWN0aW9uID0gKHtcclxuICAgIHRleHRcclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57dGV4dCA/PyAnJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFsbGF4U2VjdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9