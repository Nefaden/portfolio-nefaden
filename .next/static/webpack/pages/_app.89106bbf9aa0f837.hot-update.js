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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return(// WIP: Toggle Theme design like https://frame55.agency/ navigate button\n    //   <Container \n    //     bg=\"white\" \n    //     width=\"50px\" \n    //     height=\"80px\" \n    //     alignItems=\"center\" \n    //     position=\"top-left\" \n    //     borderBottomRightRadius=\"500px\" \n    //     borderBottomLeftRadius=\"500px\" \n    //     display=\"flex\"\n    //     zIndex=\"1\"\n    // >\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        __source: {\n            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            __source: {\n                fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Stack, {\n                align: \"center\",\n                direction: \"row\",\n                __source: {\n                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                    exitBeforeEnter: true,\n                    initial: false,\n                    __source: {\n                        fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        whileHover: {\n                            scale: 1.1\n                        },\n                        style: {\n                            display: 'inline-block'\n                        },\n                        initial: {\n                            x: -20,\n                            opacity: 0\n                        },\n                        animate: {\n                            y: 0,\n                            opacity: 1\n                        },\n                        exit: {\n                            x: 20,\n                            opacity: 0\n                        },\n                        transition: {\n                            duration: 0.2\n                        },\n                        __source: {\n                            fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Switch, {\n                                colorScheme: \"red\",\n                                __source: {\n                                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Switch, {\n                                colorScheme: \"teal\",\n                                size: \"lg\",\n                                __source: {\n                                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                                marginTop: \"10px\",\n                                \"aria-label\": \"Toggle theme\",\n                                colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),\n                                icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n                                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n                                })),\n                                onClick: toggleColorMode,\n                                borderRadius: \"500\",\n                                __source: {\n                                    fileName: \"/Users/ydurand/perso/CodeWithNefadenRepos/portfolio-nefaden/components/theme-toggle-button.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'))\n                })\n            })\n        })\n    }));\n};\n_s(ThemeToggleButton, \"pCB/HNB8FhZAEYh1hiUHUsp1udk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDK0M7QUFDbEQ7OztBQUVwRCxHQUFLLENBQUNVLGlCQUFpQixHQUFHLFFBQzFCLEdBRGdDLENBQUM7O0lBQy9CLEdBQUssQ0FBR0MsZUFBZSxHQUFLTiw4REFBWSxHQUFoQ00sZUFBZTtJQUV2QixNQUFNLENBQ0YsRUFBd0U7SUFDMUUsRUFBZ0I7SUFDaEIsRUFBa0I7SUFDbEIsRUFBb0I7SUFDcEIsRUFBcUI7SUFDckIsRUFBMkI7SUFDM0IsRUFBMkI7SUFDM0IsRUFBdUM7SUFDdkMsRUFBc0M7SUFDdEMsRUFBcUI7SUFDckIsRUFBaUI7SUFDakIsRUFBSTt5RUFDSFQsdURBQVM7Ozs7Ozs7dUZBT0xDLGlEQUFHOzs7Ozs7OzJGQUNDUyxLQUFLO2dCQUFDQyxLQUFLLEVBQUMsQ0FBUTtnQkFBQ0MsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7K0ZBQ2hDZCwwREFBZTtvQkFBQ2UsZUFBZTtvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Ozs7Ozs7b0dBQzlDZixxREFBVTt3QkFDUGlCLFVBQVUsRUFBRSxDQUFDOzRCQUFDQyxLQUFLLEVBQUUsR0FBRzt3QkFBQyxDQUFDO3dCQUMxQkMsS0FBSyxFQUFFLENBQUM7NEJBQUNDLE9BQU8sRUFBRSxDQUFjO3dCQUFDLENBQUM7d0JBRWxDTCxPQUFPLEVBQUUsQ0FBQzs0QkFBQ00sQ0FBQyxHQUFHLEVBQUU7NEJBQUVDLE9BQU8sRUFBRSxDQUFDO3dCQUFDLENBQUM7d0JBQy9CQyxPQUFPLEVBQUUsQ0FBQzs0QkFBQ0MsQ0FBQyxFQUFFLENBQUM7NEJBQUVGLE9BQU8sRUFBRSxDQUFDO3dCQUFDLENBQUM7d0JBQzdCRyxJQUFJLEVBQUUsQ0FBQzs0QkFBQ0osQ0FBQyxFQUFFLEVBQUU7NEJBQUVDLE9BQU8sRUFBRSxDQUFDO3dCQUFDLENBQUM7d0JBQzNCSSxVQUFVLEVBQUUsQ0FBQzs0QkFBQ0MsUUFBUSxFQUFFLEdBQUc7d0JBQUMsQ0FBQzs7Ozs7Ozs7aUdBRTVCckIsb0RBQU07Z0NBQUNzQixXQUFXLEVBQUMsQ0FBSzs7Ozs7Ozs7aUdBQ3hCdEIsb0RBQU07Z0NBQUNzQixXQUFXLEVBQUMsQ0FBTTtnQ0FBQ0MsSUFBSSxFQUFDLENBQUk7Ozs7Ozs7O2lHQUNuQzFCLHdEQUFVO2dDQUNQMkIsU0FBUyxFQUFDLENBQU07Z0NBQ2hCQyxDQUFVLGFBQUMsQ0FBYztnQ0FDekJILFdBQVcsRUFBRXZCLG1FQUFpQixDQUFDLENBQVEsU0FBRSxDQUFRO2dDQUNqRDJCLElBQUksRUFBRTNCLG1FQUFpQixzRUFBRUcsc0RBQVE7eUdBQU1ELHFEQUFPOztnQ0FDOUMwQixPQUFPLEVBQUV2QixlQUFlO2dDQUN4QndCLFlBQVksRUFBQyxDQUFLOzs7Ozs7Ozs7dUJBZGpCN0IsbUVBQWlCLENBQUMsQ0FBTyxRQUFFLENBQU07Ozs7O0FBc0IxRCxDQUFDO0dBbkRLSSxpQkFBaUI7O1FBQ09MLDBEQUFZOzs7S0FEcENLLGlCQUFpQjtBQXFEdkIsK0RBQWVBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanM/Y2NhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlLCB1c2VDb2xvck1vZGVWYWx1ZSwgU3dpdGNoIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFN1bkljb24sIE1vb25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgVGhlbWVUb2dnbGVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuXG4gIHJldHVybiAoXG4gICAgICAvLyBXSVA6IFRvZ2dsZSBUaGVtZSBkZXNpZ24gbGlrZSBodHRwczovL2ZyYW1lNTUuYWdlbmN5LyBuYXZpZ2F0ZSBidXR0b25cbiAgICAvLyAgIDxDb250YWluZXIgXG4gICAgLy8gICAgIGJnPVwid2hpdGVcIiBcbiAgICAvLyAgICAgd2lkdGg9XCI1MHB4XCIgXG4gICAgLy8gICAgIGhlaWdodD1cIjgwcHhcIiBcbiAgICAvLyAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgIC8vICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCIgXG4gICAgLy8gICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPVwiNTAwcHhcIiBcbiAgICAvLyAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz1cIjUwMHB4XCIgXG4gICAgLy8gICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAvLyAgICAgekluZGV4PVwiMVwiXG4gICAgLy8gPlxuICAgIDxDb250YWluZXI+XG4gICAgICAgIHsvKiA8Qm94IFxuICAgICAgICAgICAgYmc9XCIjMjYzMjM4XCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjUwMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgID4gKi99XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8U3RhY2sgYWxpZ249J2NlbnRlcicgZGlyZWN0aW9uPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXt1c2VDb2xvck1vZGVWYWx1ZSgnbGlnaHQnLCAnZGFyaycpfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6IC0yMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgZXhpdD17eyB4OiAyMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY29sb3JTY2hlbWU9J3JlZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjb2xvclNjaGVtZT0ndGVhbCcgc2l6ZT0nbGcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9e3VzZUNvbG9yTW9kZVZhbHVlKCdwdXJwbGUnLCAnb3JhbmdlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXt1c2VDb2xvck1vZGVWYWx1ZSg8TW9vbkljb24gLz4sIDxTdW5JY29uIC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgID48L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbiJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJDb250YWluZXIiLCJCb3giLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTd2l0Y2giLCJTdW5JY29uIiwiTW9vbkljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSIsIlN0YWNrIiwiYWxpZ24iLCJkaXJlY3Rpb24iLCJleGl0QmVmb3JlRW50ZXIiLCJpbml0aWFsIiwiZGl2Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwic3R5bGUiLCJkaXNwbGF5IiwieCIsIm9wYWNpdHkiLCJhbmltYXRlIiwieSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb2xvclNjaGVtZSIsInNpemUiLCJtYXJnaW5Ub3AiLCJhcmlhLWxhYmVsIiwiaWNvbiIsIm9uQ2xpY2siLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});