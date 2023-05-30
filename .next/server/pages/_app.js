(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 238:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'","fontStyle":"normal"},
	"className": "__className_0ec1f4"
};


/***/ }),

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var _app_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(238);
var _app_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.tsx


 // Importing global styles
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        className: (_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(443)));
module.exports = __webpack_exports__;

})();