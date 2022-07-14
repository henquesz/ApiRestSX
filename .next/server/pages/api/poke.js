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
exports.id = "pages/api/poke";
exports.ids = ["pages/api/poke"];
exports.modules = {

/***/ "(api)/./pages/api/poke.js":
/*!***************************!*\
  !*** ./pages/api/poke.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function poke(request, response) {\n    const pokeResponse = await fetch(\"https://pokeapi.co/api/v2/pokemon?limit=151\");\n    const pokeResponseJson = await pokeResponse.json();\n    response.setHeader(\"Cache-Control\", \"s-maxage-10, stale-while-revalidate\");\n    response.json({\n        pokemon: pokeResponseJson\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (poke);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9rZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZUFBZUEsSUFBSSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBQztJQUNsQyxNQUFNQyxZQUFZLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO0lBQy9FLE1BQU1DLGdCQUFnQixHQUFHLE1BQU1GLFlBQVksQ0FBQ0csSUFBSSxFQUFFO0lBRWxESixRQUFRLENBQUNLLFNBQVMsQ0FBQyxlQUFlLEVBQUUscUNBQXFDLENBQUMsQ0FBQztJQUMzRUwsUUFBUSxDQUFDSSxJQUFJLENBQUM7UUFDVkUsT0FBTyxFQUFFSCxnQkFBZ0I7S0FDNUIsQ0FBQztDQUNMO0FBQ0QsaUVBQWVMLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2VhcGkvLi9wYWdlcy9hcGkvcG9rZS5qcz85YTQwIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIHBva2UocmVxdWVzdCwgcmVzcG9uc2Upe1xyXG4gICAgY29uc3QgcG9rZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTUxXCIpO1xyXG4gICAgY29uc3QgcG9rZVJlc3BvbnNlSnNvbiA9IGF3YWl0IHBva2VSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ3MtbWF4YWdlLTEwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlJyk7XHJcbiAgICByZXNwb25zZS5qc29uKHtcclxuICAgICAgICBwb2tlbW9uOiBwb2tlUmVzcG9uc2VKc29uXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBva2U7Il0sIm5hbWVzIjpbInBva2UiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJwb2tlUmVzcG9uc2UiLCJmZXRjaCIsInBva2VSZXNwb25zZUpzb24iLCJqc29uIiwic2V0SGVhZGVyIiwicG9rZW1vbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/poke.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/poke.js"));
module.exports = __webpack_exports__;

})();