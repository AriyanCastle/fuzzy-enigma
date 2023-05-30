"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generateSummary";
exports.ids = ["pages/api/generateSummary"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generateSummary.ts":
/*!**************************************!*\
  !*** ./pages/api/generateSummary.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst generateSummary = async (conversation)=>{\n    const prompt = `請將對話內容總結成point form：\\n${conversation}\\n总结：（一个重点一行）`;\n    // Initialize OpenAI API with the API key\n    const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        apiKey: \"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\"\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n    // API call to OpenAI\n    const response = await openai.createChatCompletion({\n        model: \"gpt-3.5-turbo\",\n        messages: [\n            {\n                role: \"system\",\n                content: prompt\n            }\n        ],\n        temperature: 0\n    });\n    // Extract the summary\n    const summary = response.data.choices?.[0]?.message?.content?.trim() ?? \"\";\n    return summary;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { conversation  } = req.body;\n    try {\n        const summary = await generateSummary(conversation);\n        res.status(200).json({\n            summary\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVTdW1tYXJ5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNrRDtBQUVsRCxNQUFNRSxrQkFBa0IsT0FBT0MsZUFBMEM7SUFDdkUsTUFBTUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFRCxhQUFhLGFBQWEsQ0FBQztJQUVuRSx5Q0FBeUM7SUFDekMsTUFBTUUsZ0JBQWdCLElBQUlMLGlEQUFhQSxDQUFDO1FBQ3RDTSxRQUFRQyxxREFBMEI7SUFDcEM7SUFDQSxNQUFNRyxTQUFTLElBQUlULDZDQUFTQSxDQUFDSTtJQUU3QixxQkFBcUI7SUFDckIsTUFBTU0sV0FBVyxNQUFNRCxPQUFPRSxvQkFBb0IsQ0FBQztRQUNqREMsT0FBTztRQUNQQyxVQUFVO1lBQUM7Z0JBQUVDLE1BQU07Z0JBQVVDLFNBQVNaO1lBQU87U0FBRTtRQUMvQ2EsYUFBYTtJQUNmO0lBRUEsc0JBQXNCO0lBQ3RCLE1BQU1DLFVBQVVQLFNBQVNRLElBQUksQ0FBQ0MsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFQyxTQUFTTCxTQUFTTSxVQUFVO0lBQ3hFLE9BQU9KO0FBQ1Q7QUFFQSxpRUFBZSxPQUFPSyxLQUFxQkMsTUFBeUI7SUFDbEUsTUFBTSxFQUFFckIsYUFBWSxFQUFFLEdBQUdvQixJQUFJRSxJQUFJO0lBRWpDLElBQUk7UUFDRixNQUFNUCxVQUFVLE1BQU1oQixnQkFBZ0JDO1FBQ3RDcUIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFVDtRQUFRO0lBQ2pDLEVBQUUsT0FBT1UsT0FBTztRQUNkSixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sTUFBaUJQLE9BQU87UUFBQztJQUN6RDtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvZ2VuZXJhdGVTdW1tYXJ5LnRzP2ZiMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tICdvcGVuYWknO1xuXG5jb25zdCBnZW5lcmF0ZVN1bW1hcnkgPSBhc3luYyAoY29udmVyc2F0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICBjb25zdCBwcm9tcHQgPSBg6KuL5bCH5bCN6Kmx5YWn5a6557i957WQ5oiQcG9pbnQgZm9ybe+8mlxcbiR7Y29udmVyc2F0aW9ufVxcbuaAu+e7k++8mu+8iOS4gOS4qumHjeeCueS4gOihjO+8iWA7XG5cbiAgLy8gSW5pdGlhbGl6ZSBPcGVuQUkgQVBJIHdpdGggdGhlIEFQSSBrZXlcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxuICB9KTtcbiAgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuICAvLyBBUEkgY2FsbCB0byBPcGVuQUlcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ2hhdENvbXBsZXRpb24oe1xuICAgIG1vZGVsOiAnZ3B0LTMuNS10dXJibycsXG4gICAgbWVzc2FnZXM6IFt7IHJvbGU6ICdzeXN0ZW0nLCBjb250ZW50OiBwcm9tcHQgfV0sXG4gICAgdGVtcGVyYXR1cmU6IDAsXG4gIH0pO1xuXG4gIC8vIEV4dHJhY3QgdGhlIHN1bW1hcnlcbiAgY29uc3Qgc3VtbWFyeSA9IHJlc3BvbnNlLmRhdGEuY2hvaWNlcz8uWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCkgPz8gXCJcIjtcbiAgcmV0dXJuIHN1bW1hcnk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBjb252ZXJzYXRpb24gfSA9IHJlcS5ib2R5O1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGdlbmVyYXRlU3VtbWFyeShjb252ZXJzYXRpb24pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VtbWFyeSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSk7XG4gIH1cbn07Il0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJnZW5lcmF0ZVN1bW1hcnkiLCJjb252ZXJzYXRpb24iLCJwcm9tcHQiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVzcG9uc2UiLCJjcmVhdGVDaGF0Q29tcGxldGlvbiIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsInRlbXBlcmF0dXJlIiwic3VtbWFyeSIsImRhdGEiLCJjaG9pY2VzIiwibWVzc2FnZSIsInRyaW0iLCJyZXEiLCJyZXMiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generateSummary.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generateSummary.ts"));
module.exports = __webpack_exports__;

})();