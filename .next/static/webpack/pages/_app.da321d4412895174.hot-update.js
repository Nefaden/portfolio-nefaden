"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return(// WIP: Toggle Theme design like frame-55.com navigate button\n    //   <Container \n    //     bg=\"white\" \n    //     width=\"50px\" \n    //     height=\"80px\" \n    //     alignItems=\"center\" \n    //     position=\"top-left\" \n    //     borderBottomRightRadius=\"500px\" \n    //     borderBottomLeftRadius=\"500px\" \n    //     display=\"flex\"\n    //     zIndex=\"1\"\n    // >\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        __source: {\n            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            __source: {\n                fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                exitBeforeEnter: true,\n                initial: false,\n                __source: {\n                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    style: {\n                        display: 'inline-block'\n                    },\n                    initial: {\n                        y: -20,\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    exit: {\n                        x: 20,\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.2\n                    },\n                    __source: {\n                        fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                        marginTop: \"10px\",\n                        \"aria-label\": \"Toggle theme\",\n                        colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),\n                        icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n                        })),\n                        onClick: toggleColorMode,\n                        borderRadius: \"500\",\n                        __source: {\n                            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    })\n                }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'))\n            })\n        })\n    }));\n};\n_s(ThemeToggleButton, \"pCB/HNB8FhZAEYh1hiUHUsp1udk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDdUM7QUFDMUM7OztBQUVwRCxHQUFLLENBQUNTLGlCQUFpQixHQUFHLFFBQzFCLEdBRGdDLENBQUM7O0lBQy9CLEdBQUssQ0FBR0MsZUFBZSxHQUFLTCw4REFBWSxHQUFoQ0ssZUFBZTtJQUV2QixNQUFNLENBQ0YsRUFBNkQ7SUFDL0QsRUFBZ0I7SUFDaEIsRUFBa0I7SUFDbEIsRUFBb0I7SUFDcEIsRUFBcUI7SUFDckIsRUFBMkI7SUFDM0IsRUFBMkI7SUFDM0IsRUFBdUM7SUFDdkMsRUFBc0M7SUFDdEMsRUFBcUI7SUFDckIsRUFBaUI7SUFDakIsRUFBSTt5RUFDSFIsdURBQVM7Ozs7Ozs7dUZBT0xDLGlEQUFHOzs7Ozs7OzJGQUNDSCwwREFBZTtnQkFBQ1csZUFBZTtnQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Ozs7Ozs7K0ZBQzlDWCxxREFBVTtvQkFDUGEsS0FBSyxFQUFFLENBQUM7d0JBQUNDLE9BQU8sRUFBRSxDQUFjO29CQUFDLENBQUM7b0JBRWxDSCxPQUFPLEVBQUUsQ0FBQzt3QkFBQ0ksQ0FBQyxHQUFHLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQy9CQyxPQUFPLEVBQUUsQ0FBQzt3QkFBQ0YsQ0FBQyxFQUFFLENBQUM7d0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQzdCRSxJQUFJLEVBQUUsQ0FBQzt3QkFBQ0MsQ0FBQyxFQUFFLEVBQUU7d0JBQUVILE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQzNCSSxVQUFVLEVBQUUsQ0FBQzt3QkFBQ0MsUUFBUSxFQUFFLEdBQUc7b0JBQUMsQ0FBQzs7Ozs7OzttR0FFNUJsQix3REFBVTt3QkFDUG1CLFNBQVMsRUFBQyxDQUFNO3dCQUNoQkMsQ0FBVSxhQUFDLENBQWM7d0JBQ3pCQyxXQUFXLEVBQUVuQixtRUFBaUIsQ0FBQyxDQUFRLFNBQUUsQ0FBUTt3QkFDakRvQixJQUFJLEVBQUVwQixtRUFBaUIsc0VBQUVFLHNEQUFRO2lHQUFNRCxxREFBTzs7d0JBQzlDb0IsT0FBTyxFQUFFakIsZUFBZTt3QkFDeEJrQixZQUFZLEVBQUMsQ0FBSzs7Ozs7Ozs7bUJBWmpCdEIsbUVBQWlCLENBQUMsQ0FBTyxRQUFFLENBQU07Ozs7QUFtQnRELENBQUM7R0E5Q0tHLGlCQUFpQjs7UUFDT0osMERBQVk7OztLQURwQ0ksaUJBQWlCO0FBZ0R2QiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlLWJ1dHRvbi5qcz9jY2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBJY29uQnV0dG9uLCB1c2VDb2xvck1vZGUsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFN1bkljb24sIE1vb25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgVGhlbWVUb2dnbGVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuXG4gIHJldHVybiAoXG4gICAgICAvLyBXSVA6IFRvZ2dsZSBUaGVtZSBkZXNpZ24gbGlrZSBmcmFtZS01NS5jb20gbmF2aWdhdGUgYnV0dG9uXG4gICAgLy8gICA8Q29udGFpbmVyIFxuICAgIC8vICAgICBiZz1cIndoaXRlXCIgXG4gICAgLy8gICAgIHdpZHRoPVwiNTBweFwiIFxuICAgIC8vICAgICBoZWlnaHQ9XCI4MHB4XCIgXG4gICAgLy8gICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBcbiAgICAvLyAgICAgcG9zaXRpb249XCJ0b3AtbGVmdFwiIFxuICAgIC8vICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz1cIjUwMHB4XCIgXG4gICAgLy8gICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9XCI1MDBweFwiIFxuICAgIC8vICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgLy8gICAgIHpJbmRleD1cIjFcIlxuICAgIC8vID5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgICB7LyogPEJveCBcbiAgICAgICAgICAgIGJnPVwiIzI2MzIzOFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MDBcIlxuICAgICAgICAgICAgd2lkdGg9XCI1MHB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICA+ICovfVxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXIgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxuICAgICAgICAgICAgICAgIGtleT17dXNlQ29sb3JNb2RlVmFsdWUoJ2xpZ2h0JywgJ2RhcmsnKX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0yMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgeDogMjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgncHVycGxlJywgJ29yYW5nZScpfVxuICAgICAgICAgICAgICAgICAgICBpY29uPXt1c2VDb2xvck1vZGVWYWx1ZSg8TW9vbkljb24gLz4sIDxTdW5JY29uIC8+KX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MDBcIlxuICAgICAgICAgICAgICAgID48L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbiJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJDb250YWluZXIiLCJCb3giLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTdW5JY29uIiwiTW9vbkljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwieCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm1hcmdpblRvcCIsImFyaWEtbGFiZWwiLCJjb2xvclNjaGVtZSIsImljb24iLCJvbkNsaWNrIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});