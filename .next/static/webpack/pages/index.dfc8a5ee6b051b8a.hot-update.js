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

/***/ "./components/SignIn.tsx":
/*!*******************************!*\
  !*** ./components/SignIn.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n\n\n\n\nconst SignIn = ()=>{\n    const signInWithGoogle = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, provider);\n        } catch (error) {\n            console.error(\"Error signing in with Google:\", error);\n        }\n    };\n    const signInContainerStyle = {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        minHeight: \"100vh\",\n        textAlign: \"center\"\n    };\n    const signInButtonStyle = {\n        backgroundColor: \"#4285f4\",\n        color: \"white\",\n        padding: \"10px 20px\",\n        borderRadius: \"4px\",\n        border: \"none\",\n        fontSize: \"16px\",\n        cursor: \"pointer\",\n        marginBottom: \"10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: signInContainerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"中醫語音病歷輔助系統，Google賬戶登入後即可使用\"\n            }, void 0, false, {\n                fileName: \"/Users/keithkwan/Desktop/frontend-clean/components/SignIn.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signInWithGoogle,\n                style: signInButtonStyle,\n                children: \"Sign In with Google\"\n            }, void 0, false, {\n                fileName: \"/Users/keithkwan/Desktop/frontend-clean/components/SignIn.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/keithkwan/Desktop/frontend-clean/components/SignIn.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25Jbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDMEM7QUFDN0I7QUFFdkMsTUFBTUksU0FBbUI7SUFDdkIsTUFBTUMsbUJBQW1CO1FBQ3ZCLE1BQU1DLFdBQVcsSUFBSUosNkRBQWtCQTtRQUN2QyxJQUFJO1lBQ0YsTUFBTUQsOERBQWVBLENBQUNFLCtDQUFJQSxFQUFFRztRQUM5QixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsTUFBTSxpQ0FBaUNBO1FBQ2pEO0lBQ0Y7SUFFQSxNQUFNRSx1QkFBdUI7UUFDM0JDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pDLGdCQUFnQjtRQUNoQkMsV0FBVztRQUNYQyxXQUFXO0lBQ2I7SUFFQSxNQUFNQyxvQkFBb0I7UUFDeEJDLGlCQUFpQjtRQUNqQkMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsY0FBYztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPakI7OzBCQUNWLDhEQUFDa0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVN4QjtnQkFBa0JxQixPQUFPVjswQkFBbUI7Ozs7Ozs7Ozs7OztBQUtuRTtLQXRDTVo7QUF3Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4udHN4PzI3NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcblxuY29uc3QgU2lnbkluOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2lnbmluZyBpbiB3aXRoIEdvb2dsZTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpZ25JbkNvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH07XG5cbiAgY29uc3Qgc2lnbkluQnV0dG9uU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzQyODVmNCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c2lnbkluQ29udGFpbmVyU3R5bGV9PlxuICAgICAgPGgyPuS4remGq+iqnumfs+eXheatt+i8lOWKqeezu+e1se+8jEdvb2dsZeizrOaItueZu+WFpeW+jOWNs+WPr+S9v+eUqDwvaDI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9IHN0eWxlPXtzaWduSW5CdXR0b25TdHlsZX0+XG4gICAgICAgIFNpZ24gSW4gd2l0aCBHb29nbGVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluOyJdLCJuYW1lcyI6WyJSZWFjdCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImF1dGgiLCJTaWduSW4iLCJzaWduSW5XaXRoR29vZ2xlIiwicHJvdmlkZXIiLCJlcnJvciIsImNvbnNvbGUiLCJzaWduSW5Db250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWluSGVpZ2h0IiwidGV4dEFsaWduIiwic2lnbkluQnV0dG9uU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJmb250U2l6ZSIsImN1cnNvciIsIm1hcmdpbkJvdHRvbSIsImRpdiIsInN0eWxlIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignIn.tsx\n"));

/***/ })

});