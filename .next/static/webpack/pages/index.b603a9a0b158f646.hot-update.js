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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        bg: \"white\",\n        width: \"50px\",\n        height: \"100px\",\n        alignItems: \"center\",\n        position: \"top-left\",\n        borderBottomRightRadius: \"500px\",\n        borderBottomLeftRadius: \"500px\",\n        display: \"flex\",\n        zIndex: \"0\",\n        __source: {\n            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            bg: \"#263238\",\n            borderRadius: \"500\",\n            width: \"50px\",\n            height: \"50px\",\n            __source: {\n                fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                exitBeforeEnter: true,\n                initial: false,\n                __source: {\n                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    style: {\n                        display: 'inline-block'\n                    },\n                    initial: {\n                        y: -20,\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    exit: {\n                        y: 20,\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.2\n                    },\n                    __source: {\n                        fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                        marginTop: \"10px\",\n                        \"aria-label\": \"Toggle theme\",\n                        colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),\n                        icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n                        })),\n                        onClick: toggleColorMode,\n                        borderRadius: \"500\",\n                        __source: {\n                            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    })\n                }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'))\n            })\n        })\n    }));\n};\n_s(ThemeToggleButton, \"pCB/HNB8FhZAEYh1hiUHUsp1udk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDdUM7QUFDMUM7OztBQUVwRCxHQUFLLENBQUNTLGlCQUFpQixHQUFHLFFBQzFCLEdBRGdDLENBQUM7O0lBQy9CLEdBQUssQ0FBR0MsZUFBZSxHQUFLTCw4REFBWSxHQUFoQ0ssZUFBZTtJQUV2QixNQUFNLHNFQUNEUix1REFBUztRQUNSUyxFQUFFLEVBQUMsQ0FBTztRQUNWQyxLQUFLLEVBQUMsQ0FBTTtRQUNaQyxNQUFNLEVBQUMsQ0FBTztRQUNkQyxVQUFVLEVBQUMsQ0FBUTtRQUNuQkMsUUFBUSxFQUFDLENBQVU7UUFDbkJDLHVCQUF1QixFQUFDLENBQU87UUFDL0JDLHNCQUFzQixFQUFDLENBQU87UUFDOUJDLE9BQU8sRUFBQyxDQUFNO1FBQ2RDLE1BQU0sRUFBQyxDQUFHOzs7Ozs7O3VGQUVUaEIsaURBQUc7WUFDQVEsRUFBRSxFQUFDLENBQVM7WUFDWlMsWUFBWSxFQUFDLENBQUs7WUFDbEJSLEtBQUssRUFBQyxDQUFNO1lBQ1pDLE1BQU0sRUFBQyxDQUFNOzs7Ozs7OzJGQUVaYiwwREFBZTtnQkFBQ3FCLGVBQWU7Z0JBQUNDLE9BQU8sRUFBRSxLQUFLOzs7Ozs7OytGQUM5Q3JCLHFEQUFVO29CQUNQdUIsS0FBSyxFQUFFLENBQUM7d0JBQUNOLE9BQU8sRUFBRSxDQUFjO29CQUFDLENBQUM7b0JBRWxDSSxPQUFPLEVBQUUsQ0FBQzt3QkFBQ0csQ0FBQyxHQUFHLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQy9CQyxPQUFPLEVBQUUsQ0FBQzt3QkFBQ0YsQ0FBQyxFQUFFLENBQUM7d0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQzdCRSxJQUFJLEVBQUUsQ0FBQzt3QkFBQ0gsQ0FBQyxFQUFFLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQzNCRyxVQUFVLEVBQUUsQ0FBQzt3QkFBQ0MsUUFBUSxFQUFFLEdBQUc7b0JBQUMsQ0FBQzs7Ozs7OzttR0FFNUIxQix3REFBVTt3QkFDUDJCLFNBQVMsRUFBQyxDQUFNO3dCQUNoQkMsQ0FBVSxhQUFDLENBQWM7d0JBQ3pCQyxXQUFXLEVBQUUzQixtRUFBaUIsQ0FBQyxDQUFRLFNBQUUsQ0FBUTt3QkFDakQ0QixJQUFJLEVBQUU1QixtRUFBaUIsc0VBQUVFLHNEQUFRO2lHQUFNRCxxREFBTzs7d0JBQzlDNEIsT0FBTyxFQUFFekIsZUFBZTt3QkFDeEJVLFlBQVksRUFBQyxDQUFLOzs7Ozs7OzttQkFaakJkLG1FQUFpQixDQUFDLENBQU8sUUFBRSxDQUFNOzs7O0FBbUJ0RCxDQUFDO0dBM0NLRyxpQkFBaUI7O1FBQ09KLDBEQUFZOzs7S0FEcENJLGlCQUFpQjtBQTZDdkIsK0RBQWVBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanM/Y2NhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBTdW5JY29uLCBNb29uSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmNvbnN0IFRoZW1lVG9nZ2xlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcblxuICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBcbiAgICAgICAgYmc9XCJ3aGl0ZVwiIFxuICAgICAgICB3aWR0aD1cIjUwcHhcIiBcbiAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCIgXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPVwiNTAwcHhcIiBcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz1cIjUwMHB4XCIgXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgekluZGV4PVwiMFwiXG4gICAgPlxuICAgICAgICA8Qm94IFxuICAgICAgICAgICAgYmc9XCIjMjYzMjM4XCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjUwMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cbiAgICAgICAgICAgICAgICBrZXk9e3VzZUNvbG9yTW9kZVZhbHVlKCdsaWdodCcsICdkYXJrJyl9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAtMjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IHk6IDIwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17dXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZScsICdvcmFuZ2UnKX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uIC8+LCA8U3VuSWNvbiAvPil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAwXCJcbiAgICAgICAgICAgICAgICA+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUb2dnbGVCdXR0b24iXSwibmFtZXMiOlsiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiQ29udGFpbmVyIiwiQm94IiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiU3VuSWNvbiIsIk1vb25JY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJ0b2dnbGVDb2xvck1vZGUiLCJiZyIsIndpZHRoIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiZGlzcGxheSIsInpJbmRleCIsImJvcmRlclJhZGl1cyIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJkaXYiLCJzdHlsZSIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXJnaW5Ub3AiLCJhcmlhLWxhYmVsIiwiY29sb3JTY2hlbWUiLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});