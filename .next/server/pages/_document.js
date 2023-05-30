"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _document)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
var document_default = /*#__PURE__*/__webpack_require__.n(next_document);
;// CONCATENATED MODULE: ./pages/_document.tsx


class MyDocument extends (document_default()) {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(next_document.Head, {
                    children: /*#__PURE__*/ jsx_runtime.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?d62e4eb1a816e8c568ec580697bdb8bd";
                  var s = document.getElementsByTagName("script")[0]; 
                  s.parentNode.insertBefore(hm, s);
                })();
              `
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const _document = (MyDocument);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_document&absolutePagePath=private-next-pages%2F_document.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,859], () => (__webpack_exec__(330)));
module.exports = __webpack_exports__;

})();