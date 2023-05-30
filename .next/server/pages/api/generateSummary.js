"use strict";
(() => {
var exports = {};
exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 118:
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ 886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);

const generateSummary = async (conversation)=>{
    const prompt = `請將對話內容總結成point form，内容的context是中醫師與患者的診療對話：\n${conversation}\n总结：（一个重点一行）`;
    // Initialize OpenAI API with the API key
    const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({
        apiKey: "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"
    });
    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);
    // API call to OpenAI
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: prompt
            }
        ],
        temperature: 0
    });
    // Extract the summary
    const summary = response.data.choices?.[0]?.message?.content?.trim() ?? "";
    return summary;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { conversation  } = req.body;
    try {
        const summary = await generateSummary(conversation);
        res.status(200).json({
            summary
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(886));
module.exports = __webpack_exports__;

})();