webpackHotUpdate(1,{

/***/ "./components/molecules/home-hero-galery/index.js":
/*!********************************************************!*\
  !*** ./components/molecules/home-hero-galery/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GaleryComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/figure */ \"./components/atoms/figure/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/molecules/home-hero-galery/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/j.alvarez.mendoza/Desktop/jimmy/camaleon/components/molecules/home-hero-galery/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction GaleryComponent() {\n  _s();\n\n  var GalaryTag = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    scrollMagicInit();\n  }, []);\n\n  function scrollMagicInit() {\n    var elem = GalaryTag.current;\n    var controller = new ScrollMagic.Controller();\n    var scene = new ScrollMagic.Scene({\n      triggerElement: \"#galeryscroll\",\n      triggerHook: '0.5',\n      offset: -50,\n      duration: \"\".concat(elem.offsetHeight, \"+50\")\n    }).on('enter', function () {\n      return Array.from(elem.children).map(function (i) {\n        return i.classList.add(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardShine);\n      });\n    }).on('leave', function () {\n      return Array.from(elem.children).map(function (i) {\n        return i.classList.remove(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardShine);\n      });\n    }).addTo(controller);\n  }\n\n  return __jsx(\"div\", {\n    ref: GalaryTag,\n    id: \"galeryscroll\",\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroGaleryHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardHide_shine,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    height: 'auto',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_atoms_figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    url: \"https://usercontent.one/wp/www.vjus.no/wp-content/uploads/2019/09/vjus-arkitektur-showreel.jpg\",\n    altProp: \"\",\n    variantClass: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cardHide_shine,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    height: 'auto',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_atoms_figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    url: \"https://usercontent.one/wp/www.vjus.no/wp-content/uploads/2020/01/Making-a-Film-Company-poster.jpg\",\n    altProp: \"\",\n    variantClass: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(GaleryComponent, \"f/7qOkrquSigAtMrz/HRmL3C060=\");\n\n_c = GaleryComponent;\n\nvar _c;\n\n$RefreshReg$(_c, \"GaleryComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9ob21lLWhlcm8tZ2FsZXJ5L2luZGV4LmpzPzU1ZjQiXSwibmFtZXMiOlsiR2FsZXJ5Q29tcG9uZW50IiwiR2FsYXJ5VGFnIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic2Nyb2xsTWFnaWNJbml0IiwiZWxlbSIsImN1cnJlbnQiLCJjb250cm9sbGVyIiwiU2Nyb2xsTWFnaWMiLCJDb250cm9sbGVyIiwic2NlbmUiLCJTY2VuZSIsInRyaWdnZXJFbGVtZW50IiwidHJpZ2dlckhvb2siLCJvZmZzZXQiLCJkdXJhdGlvbiIsIm9mZnNldEhlaWdodCIsIm9uIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtYXAiLCJpIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGVzIiwiY2FyZFNoaW5lIiwicmVtb3ZlIiwiYWRkVG8iLCJoZXJvR2FsZXJ5SG9tZSIsImNhcmRIaWRlX3NoaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsZUFBVCxHQUEyQjtBQUFBOztBQUN4QyxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxtQkFBZTtBQUNoQixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFdBQVNBLGVBQVQsR0FBMkI7QUFDekIsUUFBTUMsSUFBSSxHQUFHSixTQUFTLENBQUNLLE9BQXZCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLElBQUlDLFdBQVcsQ0FBQ0MsVUFBaEIsRUFBbkI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsSUFBSUYsV0FBVyxDQUFDRyxLQUFoQixDQUFzQjtBQUFFQyxvQkFBYyxFQUFFLGVBQWxCO0FBQW1DQyxpQkFBVyxFQUFFLEtBQWhEO0FBQXVEQyxZQUFNLEVBQUUsQ0FBQyxFQUFoRTtBQUFvRUMsY0FBUSxZQUFLVixJQUFJLENBQUNXLFlBQVY7QUFBNUUsS0FBdEIsRUFDWEMsRUFEVyxDQUNSLE9BRFEsRUFDQztBQUFBLGFBQU1DLEtBQUssQ0FBQ0MsSUFBTixDQUFXZCxJQUFJLENBQUNlLFFBQWhCLEVBQTBCQyxHQUExQixDQUE4QixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxTQUFGLENBQVlDLEdBQVosQ0FBZ0JDLDBEQUFNLENBQUNDLFNBQXZCLENBQUo7QUFBQSxPQUEvQixDQUFOO0FBQUEsS0FERCxFQUVYVCxFQUZXLENBRVIsT0FGUSxFQUVDO0FBQUEsYUFBTUMsS0FBSyxDQUFDQyxJQUFOLENBQVdkLElBQUksQ0FBQ2UsUUFBaEIsRUFBMEJDLEdBQTFCLENBQThCLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLFNBQUYsQ0FBWUksTUFBWixDQUFtQkYsMERBQU0sQ0FBQ0MsU0FBMUIsQ0FBSjtBQUFBLE9BQS9CLENBQU47QUFBQSxLQUZELEVBR1hFLEtBSFcsQ0FHTHJCLFVBSEssQ0FBZDtBQUtEOztBQUVELFNBQ0U7QUFBSyxPQUFHLEVBQUVOLFNBQVY7QUFBcUIsTUFBRSxFQUFDLGNBQXhCO0FBQXVDLGFBQVMsRUFBRXdCLDBEQUFNLENBQUNJLGNBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUosMERBQU0sQ0FBQ0ssY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBVSxVQUFNLEVBQUUsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBaUIsT0FBRyxFQUFDLGdHQUFyQjtBQUFzSCxXQUFPLEVBQUMsRUFBOUg7QUFBaUksZ0JBQVksRUFBQyxFQUE5STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVMLDBEQUFNLENBQUNLLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQVUsVUFBTSxFQUFFLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQWlCLE9BQUcsRUFBQyxvR0FBckI7QUFBMEgsV0FBTyxFQUFDLEVBQWxJO0FBQXFJLGdCQUFZLEVBQUMsRUFBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FORixDQURGO0FBY0Q7O0dBL0J1QjlCLGU7O0tBQUFBLGUiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9ob21lLWhlcm8tZ2FsZXJ5L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlndXJlQ29tcG9uZW50IGZyb20gJy4uLy4uL2F0b21zL2ZpZ3VyZSc7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGVyeUNvbXBvbmVudCgpIHtcbiAgY29uc3QgR2FsYXJ5VGFnID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY3JvbGxNYWdpY0luaXQoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHNjcm9sbE1hZ2ljSW5pdCgpIHtcbiAgICBjb25zdCBlbGVtID0gR2FsYXJ5VGFnLmN1cnJlbnQ7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoeyB0cmlnZ2VyRWxlbWVudDogXCIjZ2FsZXJ5c2Nyb2xsXCIsIHRyaWdnZXJIb29rOiAnMC41Jywgb2Zmc2V0OiAtNTAsIGR1cmF0aW9uOiBgJHtlbGVtLm9mZnNldEhlaWdodH0rNTBgIH0pXG4gICAgICAub24oJ2VudGVyJywgKCkgPT4gQXJyYXkuZnJvbShlbGVtLmNoaWxkcmVuKS5tYXAoaSA9PiBpLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmNhcmRTaGluZSkpKVxuICAgICAgLm9uKCdsZWF2ZScsICgpID0+IEFycmF5LmZyb20oZWxlbS5jaGlsZHJlbikubWFwKGkgPT4gaS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5jYXJkU2hpbmUpKSlcbiAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17R2FsYXJ5VGFnfSBpZD1cImdhbGVyeXNjcm9sbFwiIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9HYWxlcnlIb21lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEhpZGVfc2hpbmV9PlxuICAgICAgICA8TGF6eUxvYWQgaGVpZ2h0PXsnYXV0byd9PlxuICAgICAgICAgIDxGaWd1cmVDb21wb25lbnQgdXJsPVwiaHR0cHM6Ly91c2VyY29udGVudC5vbmUvd3Avd3d3LnZqdXMubm8vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDkvdmp1cy1hcmtpdGVrdHVyLXNob3dyZWVsLmpwZ1wiIGFsdFByb3A9XCJcIiB2YXJpYW50Q2xhc3M9XCJcIiAvPlxuICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRIaWRlX3NoaW5lfT5cbiAgICAgICAgPExhenlMb2FkIGhlaWdodD17J2F1dG8nfT5cbiAgICAgICAgICA8RmlndXJlQ29tcG9uZW50IHVybD1cImh0dHBzOi8vdXNlcmNvbnRlbnQub25lL3dwL3d3dy52anVzLm5vL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAxL01ha2luZy1hLUZpbG0tQ29tcGFueS1wb3N0ZXIuanBnXCIgYWx0UHJvcD1cIlwiIHZhcmlhbnRDbGFzcz1cIlwiIC8+XG4gICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/home-hero-galery/index.js\n");

/***/ })

})