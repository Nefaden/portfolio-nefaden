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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        bg: \"white\",\n        width: \"50px\",\n        height: \"60px\",\n        align: \"center\",\n        position: \"top-left\",\n        __source: {\n            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            bg: \"grey\",\n            borderRadius: \"500\",\n            width: \"100%\",\n            __source: {\n                fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                exitBeforeEnter: true,\n                initial: false,\n                __source: {\n                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    style: {\n                        display: 'inline-block'\n                    },\n                    initial: {\n                        y: -20,\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    exit: {\n                        y: 20,\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.2\n                    },\n                    __source: {\n                        fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                        marginTop: \"10px\",\n                        \"aria-label\": \"Toggle theme\",\n                        colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),\n                        icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n                        })),\n                        onClick: toggleColorMode,\n                        borderRadius: \"500\",\n                        __source: {\n                            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    })\n                }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'))\n            })\n        })\n    }));\n};\n_s(ThemeToggleButton, \"pCB/HNB8FhZAEYh1hiUHUsp1udk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDdUM7QUFDMUM7OztBQUVwRCxHQUFLLENBQUNTLGlCQUFpQixHQUFHLFFBQzFCLEdBRGdDLENBQUM7O0lBQy9CLEdBQUssQ0FBR0MsZUFBZSxHQUFLTCw4REFBWSxHQUFoQ0ssZUFBZTtJQUV2QixNQUFNLHNFQUNEUix1REFBUztRQUFDUyxFQUFFLEVBQUMsQ0FBTztRQUFDQyxLQUFLLEVBQUMsQ0FBTTtRQUFDQyxNQUFNLEVBQUMsQ0FBTTtRQUFDQyxLQUFLLEVBQUMsQ0FBUTtRQUFDQyxRQUFRLEVBQUMsQ0FBVTs7Ozs7Ozt1RkFDaEZaLGlEQUFHO1lBQ0FRLEVBQUUsRUFBQyxDQUFNO1lBQ1RLLFlBQVksRUFBQyxDQUFLO1lBQ2xCSixLQUFLLEVBQUMsQ0FBTTs7Ozs7OzsyRkFFWFosMERBQWU7Z0JBQUNpQixlQUFlO2dCQUFDQyxPQUFPLEVBQUUsS0FBSzs7Ozs7OzsrRkFDOUNqQixxREFBVTtvQkFDUG1CLEtBQUssRUFBRSxDQUFDO3dCQUFDQyxPQUFPLEVBQUUsQ0FBYztvQkFBQyxDQUFDO29CQUVsQ0gsT0FBTyxFQUFFLENBQUM7d0JBQUNJLENBQUMsR0FBRyxFQUFFO3dCQUFFQyxPQUFPLEVBQUUsQ0FBQztvQkFBQyxDQUFDO29CQUMvQkMsT0FBTyxFQUFFLENBQUM7d0JBQUNGLENBQUMsRUFBRSxDQUFDO3dCQUFFQyxPQUFPLEVBQUUsQ0FBQztvQkFBQyxDQUFDO29CQUM3QkUsSUFBSSxFQUFFLENBQUM7d0JBQUNILENBQUMsRUFBRSxFQUFFO3dCQUFFQyxPQUFPLEVBQUUsQ0FBQztvQkFBQyxDQUFDO29CQUMzQkcsVUFBVSxFQUFFLENBQUM7d0JBQUNDLFFBQVEsRUFBRSxHQUFHO29CQUFDLENBQUM7Ozs7Ozs7bUdBRTVCdkIsd0RBQVU7d0JBQ1B3QixTQUFTLEVBQUMsQ0FBTTt3QkFDaEJDLENBQVUsYUFBQyxDQUFjO3dCQUN6QkMsV0FBVyxFQUFFeEIsbUVBQWlCLENBQUMsQ0FBUSxTQUFFLENBQVE7d0JBQ2pEeUIsSUFBSSxFQUFFekIsbUVBQWlCLHNFQUFFRSxzREFBUTtpR0FBTUQscURBQU87O3dCQUM5Q3lCLE9BQU8sRUFBRXRCLGVBQWU7d0JBQ3hCTSxZQUFZLEVBQUMsQ0FBSzs7Ozs7Ozs7bUJBWmpCVixtRUFBaUIsQ0FBQyxDQUFPLFFBQUUsQ0FBTTs7OztBQW1CdEQsQ0FBQztHQWhDS0csaUJBQWlCOztRQUNPSiwwREFBWTs7O0tBRHBDSSxpQkFBaUI7QUFrQ3ZCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZS10b2dnbGUtYnV0dG9uLmpzP2NjYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBUaGVtZVRvZ2dsZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG5cbiAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgYmc9XCJ3aGl0ZVwiIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjYwcHhcIiBhbGlnbj1cImNlbnRlclwiIHBvc2l0aW9uPVwidG9wLWxlZnRcIj5cbiAgICAgICAgPEJveCBcbiAgICAgICAgICAgIGJnPVwiZ3JleVwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MDBcIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXIgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxuICAgICAgICAgICAgICAgIGtleT17dXNlQ29sb3JNb2RlVmFsdWUoJ2xpZ2h0JywgJ2RhcmsnKX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0yMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgeTogMjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgncHVycGxlJywgJ29yYW5nZScpfVxuICAgICAgICAgICAgICAgICAgICBpY29uPXt1c2VDb2xvck1vZGVWYWx1ZSg8TW9vbkljb24gLz4sIDxTdW5JY29uIC8+KX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MDBcIlxuICAgICAgICAgICAgICAgID48L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbiJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJDb250YWluZXIiLCJCb3giLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTdW5JY29uIiwiTW9vbkljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSIsImJnIiwid2lkdGgiLCJoZWlnaHQiLCJhbGlnbiIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiZXhpdEJlZm9yZUVudGVyIiwiaW5pdGlhbCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXJnaW5Ub3AiLCJhcmlhLWxhYmVsIiwiY29sb3JTY2hlbWUiLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});