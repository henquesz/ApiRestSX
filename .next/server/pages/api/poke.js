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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function poke(request, response) {\n    const pokeResponse = await fetch(\"https://pokeapi.co/api/v2/pokemon/charmander\");\n    const pokeResponseJson = await pokeResponse.json();\n    response.setHeader(\"Cache-Control\", \"s-maxage-10, stale-while-revalidate\");\n    response.json({\n        pokemon: pokeResponseJson\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (poke);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9rZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZUFBZUEsSUFBSSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBQztJQUNsQyxNQUFNQyxZQUFZLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO0lBQ2hGLE1BQU1DLGdCQUFnQixHQUFHLE1BQU1GLFlBQVksQ0FBQ0csSUFBSSxFQUFFO0lBRWxESixRQUFRLENBQUNLLFNBQVMsQ0FBQyxlQUFlLEVBQUUscUNBQXFDLENBQUMsQ0FBQztJQUMzRUwsUUFBUSxDQUFDSSxJQUFJLENBQUM7UUFDVkUsT0FBTyxFQUFFSCxnQkFBZ0I7S0FDNUIsQ0FBQztDQUNMO0FBQ0QsaUVBQWVMLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2VhcGkvLi9wYWdlcy9hcGkvcG9rZS5qcz85YTQwIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIHBva2UocmVxdWVzdCwgcmVzcG9uc2Upe1xyXG4gICAgY29uc3QgcG9rZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vY2hhcm1hbmRlclwiKTtcclxuICAgIGNvbnN0IHBva2VSZXNwb25zZUpzb24gPSBhd2FpdCBwb2tlUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJlc3BvbnNlLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICdzLW1heGFnZS0xMCwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZScpO1xyXG4gICAgcmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgcG9rZW1vbjogcG9rZVJlc3BvbnNlSnNvblxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwb2tlOyJdLCJuYW1lcyI6WyJwb2tlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicG9rZVJlc3BvbnNlIiwiZmV0Y2giLCJwb2tlUmVzcG9uc2VKc29uIiwianNvbiIsInNldEhlYWRlciIsInBva2Vtb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/poke.js\n");

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