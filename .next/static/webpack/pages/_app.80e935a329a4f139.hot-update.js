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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return(// WIP: Toggle Theme design like https://frame55.agency/ navigate button\n    //   <Container \n    //     bg=\"white\" \n    //     width=\"50px\" \n    //     height=\"80px\" \n    //     alignItems=\"center\" \n    //     position=\"top-left\" \n    //     borderBottomRightRadius=\"500px\" \n    //     borderBottomLeftRadius=\"500px\" \n    //     display=\"flex\"\n    //     zIndex=\"1\"\n    // >\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        __source: {\n            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            __source: {\n                fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                exitBeforeEnter: true,\n                initial: false,\n                __source: {\n                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    style: {\n                        display: 'inline-block'\n                    },\n                    initial: {\n                        x: -20,\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    exit: {\n                        x: 20,\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.2\n                    },\n                    __source: {\n                        fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                        marginTop: \"10px\",\n                        \"aria-label\": \"Toggle theme\",\n                        colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),\n                        icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n                        })),\n                        onClick: toggleColorMode,\n                        borderRadius: \"500\",\n                        __source: {\n                            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    })\n                }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'))\n            })\n        })\n    }));\n};\n_s(ThemeToggleButton, \"pCB/HNB8FhZAEYh1hiUHUsp1udk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDdUM7QUFDMUM7OztBQUVwRCxHQUFLLENBQUNTLGlCQUFpQixHQUFHLFFBQzFCLEdBRGdDLENBQUM7O0lBQy9CLEdBQUssQ0FBR0MsZUFBZSxHQUFLTCw4REFBWSxHQUFoQ0ssZUFBZTtJQUV2QixNQUFNLENBQ0YsRUFBd0U7SUFDMUUsRUFBZ0I7SUFDaEIsRUFBa0I7SUFDbEIsRUFBb0I7SUFDcEIsRUFBcUI7SUFDckIsRUFBMkI7SUFDM0IsRUFBMkI7SUFDM0IsRUFBdUM7SUFDdkMsRUFBc0M7SUFDdEMsRUFBcUI7SUFDckIsRUFBaUI7SUFDakIsRUFBSTt5RUFDSFIsdURBQVM7Ozs7Ozs7dUZBT0xDLGlEQUFHOzs7Ozs7OzJGQUNDSCwwREFBZTtnQkFBQ1csZUFBZTtnQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Ozs7Ozs7K0ZBQzlDWCxxREFBVTtvQkFDUGEsVUFBVSxFQUFFLENBQUM7d0JBQUNDLEtBQUssRUFBRSxHQUFHO29CQUFDLENBQUM7b0JBQzFCQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsT0FBTyxFQUFFLENBQWM7b0JBQUMsQ0FBQztvQkFFbENMLE9BQU8sRUFBRSxDQUFDO3dCQUFDTSxDQUFDLEdBQUcsRUFBRTt3QkFBRUMsT0FBTyxFQUFFLENBQUM7b0JBQUMsQ0FBQztvQkFDL0JDLE9BQU8sRUFBRSxDQUFDO3dCQUFDQyxDQUFDLEVBQUUsQ0FBQzt3QkFBRUYsT0FBTyxFQUFFLENBQUM7b0JBQUMsQ0FBQztvQkFDN0JHLElBQUksRUFBRSxDQUFDO3dCQUFDSixDQUFDLEVBQUUsRUFBRTt3QkFBRUMsT0FBTyxFQUFFLENBQUM7b0JBQUMsQ0FBQztvQkFDM0JJLFVBQVUsRUFBRSxDQUFDO3dCQUFDQyxRQUFRLEVBQUUsR0FBRztvQkFBQyxDQUFDOzs7Ozs7O21HQUU1QnBCLHdEQUFVO3dCQUNQcUIsU0FBUyxFQUFDLENBQU07d0JBQ2hCQyxDQUFVLGFBQUMsQ0FBYzt3QkFDekJDLFdBQVcsRUFBRXJCLG1FQUFpQixDQUFDLENBQVEsU0FBRSxDQUFRO3dCQUNqRHNCLElBQUksRUFBRXRCLG1FQUFpQixzRUFBRUUsc0RBQVE7aUdBQU1ELHFEQUFPOzt3QkFDOUNzQixPQUFPLEVBQUVuQixlQUFlO3dCQUN4Qm9CLFlBQVksRUFBQyxDQUFLOzs7Ozs7OzttQkFaakJ4QixtRUFBaUIsQ0FBQyxDQUFPLFFBQUUsQ0FBTTs7OztBQW1CdEQsQ0FBQztHQS9DS0csaUJBQWlCOztRQUNPSiwwREFBWTs7O0tBRHBDSSxpQkFBaUI7QUFpRHZCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZS10b2dnbGUtYnV0dG9uLmpzP2NjYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBUaGVtZVRvZ2dsZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG5cbiAgcmV0dXJuIChcbiAgICAgIC8vIFdJUDogVG9nZ2xlIFRoZW1lIGRlc2lnbiBsaWtlIGh0dHBzOi8vZnJhbWU1NS5hZ2VuY3kvIG5hdmlnYXRlIGJ1dHRvblxuICAgIC8vICAgPENvbnRhaW5lciBcbiAgICAvLyAgICAgYmc9XCJ3aGl0ZVwiIFxuICAgIC8vICAgICB3aWR0aD1cIjUwcHhcIiBcbiAgICAvLyAgICAgaGVpZ2h0PVwiODBweFwiIFxuICAgIC8vICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgXG4gICAgLy8gICAgIHBvc2l0aW9uPVwidG9wLWxlZnRcIiBcbiAgICAvLyAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9XCI1MDBweFwiIFxuICAgIC8vICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPVwiNTAwcHhcIiBcbiAgICAvLyAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgIC8vICAgICB6SW5kZXg9XCIxXCJcbiAgICAvLyA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgey8qIDxCb3ggXG4gICAgICAgICAgICBiZz1cIiMyNjMyMzhcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgPiAqL31cbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cbiAgICAgICAgICAgICAgICBrZXk9e3VzZUNvbG9yTW9kZVZhbHVlKCdsaWdodCcsICdkYXJrJyl9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAtMjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IHg6IDIwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17dXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZScsICdvcmFuZ2UnKX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uIC8+LCA8U3VuSWNvbiAvPil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAwXCJcbiAgICAgICAgICAgICAgICA+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUb2dnbGVCdXR0b24iXSwibmFtZXMiOlsiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiQ29udGFpbmVyIiwiQm94IiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiU3VuSWNvbiIsIk1vb25JY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJ0b2dnbGVDb2xvck1vZGUiLCJleGl0QmVmb3JlRW50ZXIiLCJpbml0aWFsIiwiZGl2Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwic3R5bGUiLCJkaXNwbGF5IiwieCIsIm9wYWNpdHkiLCJhbmltYXRlIiwieSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXJnaW5Ub3AiLCJhcmlhLWxhYmVsIiwiY29sb3JTY2hlbWUiLCJpY29uIiwib25DbGljayIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});