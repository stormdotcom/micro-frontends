"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"23263739ac70\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YjJiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjIzMjYzNzM5YWM3MFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header/MenuHeader.js":
/*!*********************************************!*\
  !*** ./src/components/Header/MenuHeader.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/menu/menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/outline/esm/FireIcon.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/outline/esm/CameraIcon.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/outline/esm/MenuIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nconst menuItems = [\n    {\n        label: \"Top Deals\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        label: \"Computers\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        label: \"Cameras\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        label: \"Phones\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        label: \"Headphones\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }\n];\nconst categories = [\n    {\n        label: \"Computers & Tablets\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        label: \"Cameras, Camcorders & Drones\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        label: \"Cell Phones\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        label: \"Audio\",\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }\n];\nconst MenuHeader = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white border-b\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex items-center justify-between py-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu, {\n                    as: \"div\",\n                    className: \"relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Button, {\n                        className: \"flex items-center space-x-2 hover:border-b-4 border-primary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                className: \"w-6 h-6\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"All Categories\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-8\",\n                    children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"flex items-center space-x-2 hover:border-b-4 border-primary\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                    className: \"w-6 h-6\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: item.label\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n                            lineNumber: 76,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\hotspot\\\\Micro-Frontends\\\\landing_page\\\\src\\\\components\\\\Header\\\\MenuHeader.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MenuHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuHeader);\nvar _c;\n$RefreshReg$(_c, \"MenuHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9NZW51SGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRDtBQUNwQjtBQVFDO0FBRWxDLFNBQVNTO0lBQVc7UUFBR0MsUUFBSCx1QkFBVTs7SUFDMUIsT0FBT0EsUUFBUUMsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7QUFDeEM7QUFFQSxNQUFNQyxZQUFZO0lBQ2Q7UUFBRUMsT0FBTztRQUFhQyxNQUFNWixnRUFBUUE7SUFBQztJQUNyQztRQUFFVyxPQUFPO1FBQWFDLE1BQU1YLGdFQUFtQkE7SUFBQztJQUNoRDtRQUFFVSxPQUFPO1FBQVdDLE1BQU1WLGdFQUFVQTtJQUFDO0lBQ3JDO1FBQUVTLE9BQU87UUFBVUMsTUFBTVQsZ0VBQWdCQTtJQUFDO0lBQzFDO1FBQUVRLE9BQU87UUFBY0MsTUFBTVIsZ0VBQWFBO0lBQUM7Q0FFOUM7QUFFRCxNQUFNUyxhQUFhO0lBQ2Y7UUFBRUYsT0FBTztRQUF1QkMsTUFBTVgsZ0VBQW1CQTtJQUFDO0lBQzFEO1FBQUVVLE9BQU87UUFBZ0NDLE1BQU1WLGdFQUFVQTtJQUFDO0lBQzFEO1FBQUVTLE9BQU87UUFBZUMsTUFBTVQsZ0VBQWdCQTtJQUFDO0lBQy9DO1FBQUVRLE9BQU87UUFBU0MsTUFBTVIsZ0VBQWFBO0lBQUM7Q0FFekM7QUFFRCxNQUFNVSxhQUFhO0lBQ2YscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUVYLDhEQUFDcEIseUZBQUlBO29CQUFDcUIsSUFBRztvQkFBTUQsV0FBVTs4QkFDckIsNEVBQUNwQix5RkFBSUEsQ0FBQ3NCLE1BQU07d0JBQUNGLFdBQVU7OzBDQUNuQiw4REFBQ2pCLGdFQUFRQTtnQ0FBQ2lCLFdBQVU7Ozs7OzswQ0FDcEIsOERBQUNHOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFnQ2QsOERBQUNKO29CQUFJQyxXQUFVOzhCQUNWTixVQUFVVSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xCLDhEQUFDQzs0QkFFR0MsTUFBSzs0QkFDTFIsV0FBVTs7OENBRVYsOERBQUNLLEtBQUtULElBQUk7b0NBQUNJLFdBQVU7Ozs7Ozs4Q0FDckIsOERBQUNHOzhDQUFNRSxLQUFLVixLQUFLOzs7Ozs7OzJCQUxaVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWpDO0tBdkRNUjtBQXlETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvTWVudUhlYWRlci5qcz8yZWNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBNZW51LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIE1lbnVJY29uLFxyXG4gICAgRmlyZUljb24sXHJcbiAgICBEZXNrdG9wQ29tcHV0ZXJJY29uLFxyXG4gICAgQ2FtZXJhSWNvbixcclxuICAgIERldmljZU1vYmlsZUljb24sXHJcbiAgICBNdXNpY05vdGVJY29uLFxyXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XHJcbn1cclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgIHsgbGFiZWw6ICdUb3AgRGVhbHMnLCBpY29uOiBGaXJlSWNvbiB9LFxyXG4gICAgeyBsYWJlbDogJ0NvbXB1dGVycycsIGljb246IERlc2t0b3BDb21wdXRlckljb24gfSxcclxuICAgIHsgbGFiZWw6ICdDYW1lcmFzJywgaWNvbjogQ2FtZXJhSWNvbiB9LFxyXG4gICAgeyBsYWJlbDogJ1Bob25lcycsIGljb246IERldmljZU1vYmlsZUljb24gfSxcclxuICAgIHsgbGFiZWw6ICdIZWFkcGhvbmVzJywgaWNvbjogTXVzaWNOb3RlSWNvbiB9LFxyXG4gICAgLy8gQWRkIG1vcmUgaXRlbXMgYXMgbmVlZGVkXHJcbl07XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gICAgeyBsYWJlbDogJ0NvbXB1dGVycyAmIFRhYmxldHMnLCBpY29uOiBEZXNrdG9wQ29tcHV0ZXJJY29uIH0sXHJcbiAgICB7IGxhYmVsOiAnQ2FtZXJhcywgQ2FtY29yZGVycyAmIERyb25lcycsIGljb246IENhbWVyYUljb24gfSxcclxuICAgIHsgbGFiZWw6ICdDZWxsIFBob25lcycsIGljb246IERldmljZU1vYmlsZUljb24gfSxcclxuICAgIHsgbGFiZWw6ICdBdWRpbycsIGljb246IE11c2ljTm90ZUljb24gfSxcclxuICAgIC8vIEFkZCBtb3JlIGNhdGVnb3JpZXMgYXMgbmVlZGVkXHJcbl07XHJcblxyXG5jb25zdCBNZW51SGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBBbGwgQ2F0ZWdvcmllcyBEcm9wZG93biAqL31cclxuICAgICAgICAgICAgICAgIDxNZW51IGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOmJvcmRlci1iLTQgYm9yZGVyLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbGwgQ2F0ZWdvcmllczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtcyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdy01NiBtdC0yIG9yaWdpbi10b3AtbGVmdCBiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0xMDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgYWN0aXZlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWN0aXZlID8gJ2JnLWdyYXktMTAwIHRleHQtZ3JheS05MDAnIDogJ3RleHQtZ3JheS03MDAnfSBmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC1zbWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPdGhlciBNZW51IEl0ZW1zICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBob3Zlcjpib3JkZXItYi00IGJvcmRlci1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJNZW51IiwiVHJhbnNpdGlvbiIsIkZyYWdtZW50IiwiTWVudUljb24iLCJGaXJlSWNvbiIsIkRlc2t0b3BDb21wdXRlckljb24iLCJDYW1lcmFJY29uIiwiRGV2aWNlTW9iaWxlSWNvbiIsIk11c2ljTm90ZUljb24iLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwibWVudUl0ZW1zIiwibGFiZWwiLCJpY29uIiwiY2F0ZWdvcmllcyIsIk1lbnVIZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJhcyIsIkJ1dHRvbiIsInNwYW4iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/MenuHeader.js\n"));

/***/ })

});