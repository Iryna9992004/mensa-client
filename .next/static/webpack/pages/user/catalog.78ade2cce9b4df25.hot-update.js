"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/catalog",{

/***/ "./pages/user/catalog.js":
/*!*******************************!*\
  !*** ./pages/user/catalog.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Catalog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _widgets_navbar_UI_NavbarMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/navbar/UI/NavbarMenu */ \"./widgets/navbar/UI/NavbarMenu.jsx\");\n/* harmony import */ var _widgets_good_list_UI_GoodList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/good-list/UI/GoodList */ \"./widgets/good-list/UI/GoodList.jsx\");\n/* harmony import */ var _features_main_UI_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/main/UI/Footer */ \"./features/main/UI/Footer.jsx\");\n\n\n\n\n\nvar __N_SSP = true;\nfunction Catalog(param) {\n    let { goodList } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_navbar_UI_NavbarMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gr\\\\Desktop\\\\projects\\\\mensa\\\\client\\\\pages\\\\user\\\\catalog.js\",\n                lineNumber: 9,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_good_list_UI_GoodList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                goodList: goodList\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gr\\\\Desktop\\\\projects\\\\mensa\\\\client\\\\pages\\\\user\\\\catalog.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_main_UI_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gr\\\\Desktop\\\\projects\\\\mensa\\\\client\\\\pages\\\\user\\\\catalog.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gr\\\\Desktop\\\\projects\\\\mensa\\\\client\\\\pages\\\\user\\\\catalog.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Catalog;\nvar _c;\n$RefreshReg$(_c, \"Catalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2NhdGFsb2cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2tDO0FBQ0Q7QUFDUjs7QUFFbkMsU0FBU0ksUUFBUSxLQUFVO1FBQVYsRUFBQ0MsUUFBUSxFQUFDLEdBQVY7SUFDOUIscUJBQ0UsOERBQUNDOzswQkFDSSw4REFBQ0wscUVBQVVBOzs7OzswQkFDWiw4REFBQ0Msc0VBQVFBO2dCQUFDRyxVQUFVQTs7Ozs7OzBCQUNwQiw4REFBQ0YsZ0VBQU1BOzs7Ozs7Ozs7OztBQUdmO0tBUndCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2NhdGFsb2cuanM/ZGRlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZiYXJNZW51IGZyb20gJy4uLy4uL3dpZGdldHMvbmF2YmFyL1VJL05hdmJhck1lbnUnXHJcbmltcG9ydCBHb29kTGlzdCBmcm9tICcuLi8uLi93aWRnZXRzL2dvb2QtbGlzdC9VSS9Hb29kTGlzdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9mZWF0dXJlcy9tYWluL1VJL0Zvb3RlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGFsb2coe2dvb2RMaXN0fSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICA8TmF2YmFyTWVudSAvPlxyXG4gICAgICAgIDxHb29kTGlzdCBnb29kTGlzdD17Z29vZExpc3R9Lz4gXHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9nb29kcy9nZXQnKTtcclxuICAgIGNvbnN0IGdvb2RMaXN0ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGdvb2RMaXN0LFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBnb29kTGlzdDogW11cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhck1lbnUiLCJHb29kTGlzdCIsIkZvb3RlciIsIkNhdGFsb2ciLCJnb29kTGlzdCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/catalog.js\n"));

/***/ })

});