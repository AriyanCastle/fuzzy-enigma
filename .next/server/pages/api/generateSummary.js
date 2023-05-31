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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst generateSummary = async (conversation)=>{\n    const prompt = `請將對話內容總結成point form，内容的context是中醫師與患者的診療對話：\\n${conversation}\\n总结：（一个重点一行）`;\n    // Initialize OpenAI API with the API key\n    const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        apiKey: \"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\"\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n    // API call to OpenAI\n    const response = await openai.createChatCompletion({\n        model: \"gpt-3.5-turbo\",\n        messages: [\n            {\n                role: \"system\",\n                content: prompt\n            }\n        ],\n        temperature: 0\n    });\n    // Extract the summary\n    const summary = response.data.choices?.[0]?.message?.content?.trim() ?? \"\";\n    return summary;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { conversation  } = req.body;\n    try {\n        const summary = await generateSummary(conversation);\n        res.status(200).json({\n            summary\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVTdW1tYXJ5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNrRDtBQUVsRCxNQUFNRSxrQkFBa0IsT0FBT0M7SUFDN0IsTUFBTUMsU0FBUyxDQUFDLDZDQUE2QyxFQUFFRCxhQUFhLGFBQWEsQ0FBQztJQUUxRix5Q0FBeUM7SUFDekMsTUFBTUUsZ0JBQWdCLElBQUlMLGlEQUFhQSxDQUFDO1FBQ3RDTSxRQUFRQyxxREFBMEJFO0lBQ3BDO0lBQ0EsTUFBTUMsU0FBUyxJQUFJVCw2Q0FBU0EsQ0FBQ0k7SUFFN0IscUJBQXFCO0lBQ3JCLE1BQU1NLFdBQVcsTUFBTUQsT0FBT0UscUJBQXFCO1FBQ2pEQyxPQUFPO1FBQ1BDLFVBQVU7WUFBQztnQkFBRUMsTUFBTTtnQkFBVUMsU0FBU1o7WUFBTztTQUFFO1FBQy9DYSxhQUFhO0lBQ2Y7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTUMsVUFBVVAsU0FBU1EsS0FBS0MsU0FBUyxDQUFDLEVBQUUsRUFBRUMsU0FBU0wsU0FBU00sVUFBVTtJQUN4RSxPQUFPSjtBQUNUO0FBRUEsaUVBQWUsT0FBT0ssS0FBcUJDO0lBQ3pDLE1BQU0sRUFBRXJCLGFBQVksRUFBRSxHQUFHb0IsSUFBSUU7SUFFN0IsSUFBSTtRQUNGLE1BQU1QLFVBQVUsTUFBTWhCLGdCQUFnQkM7UUFDdENxQixJQUFJRSxPQUFPLEtBQUtDLEtBQUs7WUFBRVQ7UUFBUTtJQUNqQyxFQUFFLE9BQU9VLE9BQU87UUFDZEosSUFBSUUsT0FBTyxLQUFLQyxLQUFLO1lBQUVDLE9BQU8sTUFBaUJQO1FBQVE7SUFDekQ7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvYXBpL2dlbmVyYXRlU3VtbWFyeS50cz9mYjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcblxuY29uc3QgZ2VuZXJhdGVTdW1tYXJ5ID0gYXN5bmMgKGNvbnZlcnNhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgY29uc3QgcHJvbXB0ID0gYOiri+Wwh+WwjeipseWFp+Wuuee4vee1kOaIkHBvaW50IGZvcm3vvIzlhoXlrrnnmoRjb250ZXh05piv5Lit6Yar5bir6IiH5oKj6ICF55qE6Ki655mC5bCN6Kmx77yaXFxuJHtjb252ZXJzYXRpb259XFxu5oC757uT77ya77yI5LiA5Liq6YeN54K55LiA6KGM77yJYDtcblxuICAvLyBJbml0aWFsaXplIE9wZW5BSSBBUEkgd2l0aCB0aGUgQVBJIGtleVxuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG4gIH0pO1xuICBjb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG4gIC8vIEFQSSBjYWxsIHRvIE9wZW5BSVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jcmVhdGVDaGF0Q29tcGxldGlvbih7XG4gICAgbW9kZWw6ICdncHQtMy41LXR1cmJvJyxcbiAgICBtZXNzYWdlczogW3sgcm9sZTogJ3N5c3RlbScsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICB0ZW1wZXJhdHVyZTogMCxcbiAgfSk7XG5cbiAgLy8gRXh0cmFjdCB0aGUgc3VtbWFyeVxuICBjb25zdCBzdW1tYXJ5ID0gcmVzcG9uc2UuZGF0YS5jaG9pY2VzPy5bMF0/Lm1lc3NhZ2U/LmNvbnRlbnQ/LnRyaW0oKSA/PyBcIlwiO1xuICByZXR1cm4gc3VtbWFyeTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCB7IGNvbnZlcnNhdGlvbiB9ID0gcmVxLmJvZHk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgZ2VuZXJhdGVTdW1tYXJ5KGNvbnZlcnNhdGlvbik7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdW1tYXJ5IH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KTtcbiAgfVxufTsiXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImdlbmVyYXRlU3VtbWFyeSIsImNvbnZlcnNhdGlvbiIsInByb21wdCIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXNwb25zZSIsImNyZWF0ZUNoYXRDb21wbGV0aW9uIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwidGVtcGVyYXR1cmUiLCJzdW1tYXJ5IiwiZGF0YSIsImNob2ljZXMiLCJtZXNzYWdlIiwidHJpbSIsInJlcSIsInJlcyIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generateSummary.ts\n");

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