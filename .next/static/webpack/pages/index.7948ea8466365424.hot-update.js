"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Container, {\n        __source: {\n            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box, {\n            __source: {\n                fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                exitBeforeEnter: true,\n                initial: false,\n                __source: {\n                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    style: {\n                        display: 'inline-block'\n                    },\n                    initial: {\n                        y: -20,\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    exit: {\n                        y: 20,\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.2\n                    },\n                    __source: {\n                        fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                        \"aria-label\": \"Toggle theme\",\n                        colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),\n                        icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n                        })),\n                        onClick: toggleColorMode,\n                        borderRadius: \"500\",\n                        __source: {\n                            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    })\n                }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'))\n            })\n        })\n    }));\n};\n_s(ThemeToggleButton, \"pCB/HNB8FhZAEYh1hiUHUsp1udk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDdUI7QUFDMUI7OztBQUVwRCxHQUFLLENBQUNPLGlCQUFpQixHQUFHLFFBQzFCLEdBRGdDLENBQUM7O0lBQy9CLEdBQUssQ0FBR0MsZUFBZSxHQUFLTCw4REFBWSxHQUFoQ0ssZUFBZTtJQUV2QixNQUFNLHNFQUNEQyxTQUFTOzs7Ozs7O3VGQUNUQyxHQUFHOzs7Ozs7OzJGQUNEViwwREFBZTtnQkFBQ1csZUFBZTtnQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Ozs7Ozs7K0ZBQzlDWCxxREFBVTtvQkFDUGEsS0FBSyxFQUFFLENBQUM7d0JBQUNDLE9BQU8sRUFBRSxDQUFjO29CQUFDLENBQUM7b0JBRWxDSCxPQUFPLEVBQUUsQ0FBQzt3QkFBQ0ksQ0FBQyxHQUFHLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQy9CQyxPQUFPLEVBQUUsQ0FBQzt3QkFBQ0YsQ0FBQyxFQUFFLENBQUM7d0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQzdCRSxJQUFJLEVBQUUsQ0FBQzt3QkFBQ0gsQ0FBQyxFQUFFLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQzNCRyxVQUFVLEVBQUUsQ0FBQzt3QkFBQ0MsUUFBUSxFQUFFLEdBQUc7b0JBQUMsQ0FBQzs7Ozs7OzttR0FFNUJuQix3REFBVTt3QkFDWG9CLENBQVUsYUFBQyxDQUFjO3dCQUN6QkMsV0FBVyxFQUFFbkIsbUVBQWlCLENBQUMsQ0FBUSxTQUFFLENBQVE7d0JBQ2pEb0IsSUFBSSxFQUFFcEIsbUVBQWlCLHNFQUFFRSxzREFBUTtpR0FBTUQscURBQU87O3dCQUM5Q29CLE9BQU8sRUFBRWpCLGVBQWU7d0JBQ3hCa0IsWUFBWSxFQUFDLENBQUs7Ozs7Ozs7O21CQVhidEIsbUVBQWlCLENBQUMsQ0FBTyxRQUFFLENBQU07Ozs7QUFrQmxELENBQUM7R0EzQktHLGlCQUFpQjs7UUFDT0osMERBQVk7OztLQURwQ0ksaUJBQWlCO0FBNkJ2QiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlLWJ1dHRvbi5qcz9jY2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBUaGVtZVRvZ2dsZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG5cbiAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICA8Qm94PlxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxuICAgICAgICAgICAga2V5PXt1c2VDb2xvck1vZGVWYWx1ZSgnbGlnaHQnLCAnZGFyaycpfVxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAtMjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgZXhpdD17eyB5OiAyMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIHRoZW1lXCJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgncHVycGxlJywgJ29yYW5nZScpfVxuICAgICAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uIC8+LCA8U3VuSWNvbiAvPil9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MDBcIlxuICAgICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUb2dnbGVCdXR0b24iXSwibmFtZXMiOlsiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiU3VuSWNvbiIsIk1vb25JY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJ0b2dnbGVDb2xvck1vZGUiLCJDb250YWluZXIiLCJCb3giLCJleGl0QmVmb3JlRW50ZXIiLCJpbml0aWFsIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImFyaWEtbGFiZWwiLCJjb2xvclNjaGVtZSIsImljb24iLCJvbkNsaWNrIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});