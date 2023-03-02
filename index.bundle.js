"use strict";
(self["webpackChunkdynamic_ui_interactions"] = self["webpackChunkdynamic_ui_interactions"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Trying mobile first dev */\n\n:root {\n    --primary: #B10DC9;\n    --secondary: #F012BE;\n    --tertiary: #85144b;\n    --quaternary: rgb(255, 255, 225);\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n    font-size: 18px;\n    background-color: var(--quaternary);\n}\n\n.description {\n    text-align: center;\n    font-size: 1.15rem;\n    margin: 1rem;\n} \n\nul#shortMenu, ul#shortMenu2, ul#imageList {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: center;\n}\n\ndiv#clickForClassic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 5px;\n  width: fit-content;\n  text-align: center;\n  border: 2px solid var(--secondary);\n  display: inline-block;\n  cursor: default;\n}\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n\n.change .bar1 {\n  transform: translate(0, 11px) rotate(-45deg);\n}\n\n.change .bar2 {opacity: 0;}\n\n.change .bar3 {\n  transform: translate(0, -11px) rotate(45deg);\n}\n\nul#classicMenu {\n  display: none;\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n}\n\nul#longMenu {\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: none; /*this is the key for longer ones to make the left side show up before scrolling!*/\n}\n\nul#longCollapsing {\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: center;\n}\n\ndiv#longMenuContainer {\n  width: 100%;\n  height: 60px;\n  overflow: hidden;\n}\n\nul#longMenu {\n  width: 100%;\n  /* overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; */\n  height: 90px; /* 40px - more place for scrollbar, is hidden under parent box */\n  padding: 5px;\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\nspan#imgRef {\n  font-size: 0.8rem;\n}\n\ndiv#imageSlideContainer {\n  position: relative;\n  box-sizing:border-box;\n  border: 2px solid var(--secondary);\n  height:fit-content;\n}\n\ndiv#previous, div#next {\n  cursor: pointer;\n  position: absolute;\n  font-size: 3rem;\n  text-align: center;\n  background: rgba(232, 221, 221, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  margin-top: -45px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  z-index: 2;\n}\n\ndiv#previous:hover, div#next:hover {\n  background: rgba(232, 221, 221, 0.4);\n}\n\ndiv#previous {\n  top: 50%;\n  left: 0;\n}\n\ndiv#next {\n  top: 50%;\n  right: 0;\n}\n\ndiv#rightArrow, div#leftArrow {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  padding-bottom: 6px;\n}\n\n.oneSlide {\n  display: none;\n}\n\n.oneSlide img {\n  box-sizing:border-box;\n  width: 100%;\n}\n\ndiv#dotContainer {\n  box-sizing:border-box;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  align-items: center;\n}\n\n.dot {\n  height: 16px;\n  width: 16px;\n  background-color: var(--secondary);\n  opacity: 0.3;\n  border-radius: 50%;\n  display: inline-block;\n\n  transition: opacity 0.7s ease;\n}\n\n/* Fading animation */\n.fade {\n  animation-name: fade;\n  animation-duration: 1.25s;\n}\n\n@keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\nli a, .dropbtn {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover, .dropdown:hover .dropbtn {\n  background-color: var(--primary);\n}\n\ndiv > a:hover, div#burgerToRight > a:hover {\n  background-color: var(--tertiary);\n}\n\nli.dropdown {\n  display: inline-block;\n}\n  \n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\n  z-index: 1;\n}\n\nli.dropdown#burgerToRight {\n  position: relative;\n}\n\n.dropdown-content#burgerToRight {\n  display: none;\n  position: absolute;\n  left: 100px;\n  top: -50px;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: white;\n  background-color: var(--primary);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content#burgerToRight a { \n  color: white;\n  background-color: var(--secondary);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\na:link {\n  text-decoration: none;\n}\n\na:visited {\n  text-decoration: none;\n}\n\n.description > a:hover {\n  text-decoration: underline;\n  color: white;\n}\n\na:active {\n  text-decoration: underline;\n}\n\n\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1; \n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888; \n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555; \n}\n/* \n.dropdown-content a:hover {background-color:#f1f1f1;}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Trying mobile first dev */\n\n:root {\n    --primary: #B10DC9;\n    --secondary: #F012BE;\n    --tertiary: #85144b;\n    --quaternary: rgb(255, 255, 225);\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n    font-size: 18px;\n    background-color: var(--quaternary);\n}\n\n.description {\n    text-align: center;\n    font-size: 1.15rem;\n    margin: 1rem;\n} \n\nul#shortMenu, ul#shortMenu2, ul#imageList {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: center;\n}\n\ndiv#clickForClassic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 5px;\n  width: fit-content;\n  text-align: center;\n  border: 2px solid var(--secondary);\n  display: inline-block;\n  cursor: default;\n}\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n\n.change .bar1 {\n  transform: translate(0, 11px) rotate(-45deg);\n}\n\n.change .bar2 {opacity: 0;}\n\n.change .bar3 {\n  transform: translate(0, -11px) rotate(45deg);\n}\n\nul#classicMenu {\n  display: none;\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n}\n\nul#longMenu {\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: none; /*this is the key for longer ones to make the left side show up before scrolling!*/\n}\n\nul#longCollapsing {\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: center;\n}\n\ndiv#longMenuContainer {\n  width: 100%;\n  height: 60px;\n  overflow: hidden;\n}\n\nul#longMenu {\n  width: 100%;\n  /* overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; */\n  height: 90px; /* 40px - more place for scrollbar, is hidden under parent box */\n  padding: 5px;\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\nspan#imgRef {\n  font-size: 0.8rem;\n}\n\ndiv#imageSlideContainer {\n  position: relative;\n  box-sizing:border-box;\n  border: 2px solid var(--secondary);\n  height:fit-content;\n}\n\ndiv#previous, div#next {\n  cursor: pointer;\n  position: absolute;\n  font-size: 3rem;\n  text-align: center;\n  background: rgba(232, 221, 221, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  margin-top: -45px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  z-index: 2;\n}\n\ndiv#previous:hover, div#next:hover {\n  background: rgba(232, 221, 221, 0.4);\n}\n\ndiv#previous {\n  top: 50%;\n  left: 0;\n}\n\ndiv#next {\n  top: 50%;\n  right: 0;\n}\n\ndiv#rightArrow, div#leftArrow {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  padding-bottom: 6px;\n}\n\n.oneSlide {\n  display: none;\n}\n\n.oneSlide img {\n  box-sizing:border-box;\n  width: 100%;\n}\n\ndiv#dotContainer {\n  box-sizing:border-box;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  align-items: center;\n}\n\n.dot {\n  height: 16px;\n  width: 16px;\n  background-color: var(--secondary);\n  opacity: 0.3;\n  border-radius: 50%;\n  display: inline-block;\n\n  transition: opacity 0.7s ease;\n}\n\n/* Fading animation */\n.fade {\n  animation-name: fade;\n  animation-duration: 1.25s;\n}\n\n@keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\nli a, .dropbtn {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover, .dropdown:hover .dropbtn {\n  background-color: var(--primary);\n}\n\ndiv > a:hover, div#burgerToRight > a:hover {\n  background-color: var(--tertiary);\n}\n\nli.dropdown {\n  display: inline-block;\n}\n  \n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\n  z-index: 1;\n}\n\nli.dropdown#burgerToRight {\n  position: relative;\n}\n\n.dropdown-content#burgerToRight {\n  display: none;\n  position: absolute;\n  left: 100px;\n  top: -50px;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: white;\n  background-color: var(--primary);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content#burgerToRight a { \n  color: white;\n  background-color: var(--secondary);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\na:link {\n  text-decoration: none;\n}\n\na:visited {\n  text-decoration: none;\n}\n\n.description > a:hover {\n  text-decoration: underline;\n  color: white;\n}\n\na:active {\n  text-decoration: underline;\n}\n\n\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1; \n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888; \n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555; \n}\n/* \n.dropdown-content a:hover {background-color:#f1f1f1;}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logictodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logictodo.js */ "./src/logictodo.js");


(0,_logictodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/logictodo.js":
/*!**************************!*\
  !*** ./src/logictodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logictodo)
/* harmony export */ });
function logictodo() {
    
    const collapsingLine = document.getElementById("longCollapsing");
    const moreSection = document.getElementById("addedOrRemoved");

    let currentWindowLetter = null;
    
    function reportWindowSize() {

        var windowWidth = window.innerWidth;
        console.log("Window's width: " + windowWidth);
        console.log("currentWindowLetter: " + currentWindowLetter);
        var arr = Array.from(collapsingLine.children);
        var moreSectionArr = Array.from(moreSection.children);

        let a = 0;
        let b = 600;
        let c = 680;
        let d = 780;
        let e = 900;
        let f = 1200;
        let g = 1800;

        function moveElsToMore(someArray) {
            someArray.forEach(el => {
                console.log(el.firstChild);
                moreSectionArr.splice(3, 0, el.firstChild);
                el.remove();
            });
        };

        function moveMoreToEls(anotherArray) {
            anotherArray.forEach(em => {
                var listElHolder = document.createElement("li");
                console.log(listElHolder);
                listElHolder.innerHTML = `<a href="${em.innerHTML}">${em.innerHTML}</a>`;
                console.log(listElHolder);
                arr.splice(-1, 0, listElHolder);//places it before "More"
                em.remove();
            });

        }

        //want function to be based off window's width
        //currently can just "resize" upon inital page load
        //fxn below works with shrinking screen width
        function resizeCollapsible(y) {
            if (y < b) {
            //cut off after 3rd till second to last > move to more
            
            var specificPortionArr = arr.slice(3,-1);
            console.log(specificPortionArr);
            moveElsToMore(specificPortionArr);
            console.log("currentWindowLetter should be set here...");
            currentWindowLetter = b;
            } else if (y < c) {
                
                var specificPortionArr = arr.slice(4,-1);
                console.log(specificPortionArr);
                moveElsToMore(specificPortionArr);
                currentWindowLetter = c;
            } else if (y < d) {
                
                var specificPortionArr = arr.slice(5,-1);
                console.log(specificPortionArr);
                moveElsToMore(specificPortionArr);
                currentWindowLetter = d;
            } else if (y < e) {
                
                var specificPortionArr = arr.slice(6,-1);
                console.log(specificPortionArr);
                moveElsToMore(specificPortionArr);
                currentWindowLetter = e;
            } else {
                currentWindowLetter = f;
            }
        };

        function biggerExpanding(t) {
            if (t > b) {
                //move first thing after "something"s back in
                var removeFromMore = moreSectionArr.slice(3,4);
                console.log(moreSectionArr.splice(3,1));
                console.log(removeFromMore);
                moveMoreToEls(removeFromMore);
                currentWindowLetter = c;
                } else if (t > c) {
                    
                    var specificPortionArr = arr.slice(4,-1);
                    console.log(specificPortionArr);
                    moveElsToMore(specificPortionArr);
                    currentWindowLetter = d;
                } else if (t > d) {
                    
                    var specificPortionArr = arr.slice(5,-1);
                    console.log(specificPortionArr);
                    moveElsToMore(specificPortionArr);
                    currentWindowLetter = e;
                } else if (t > e) {
                    
                    var specificPortionArr = arr.slice(6,-1);
                    console.log(specificPortionArr);
                    moveElsToMore(specificPortionArr);
                    currentWindowLetter = f;
                } else {
                    currentWindowLetter = g;
                }
        }

        //currentWindowLetter is null until resizeCollapsible
        //this covers the first iteration @ page startup
        if (currentWindowLetter == null) {
            resizeCollapsible(windowWidth);
            console.log("First iteration!");
            while (moreSection.firstChild) {
                moreSection.removeChild(moreSection.lastChild);
            };
            moreSectionArr.forEach(ek => {
                moreSection.appendChild(ek);
            });
        } else if (windowWidth > currentWindowLetter) {
            console.log("expander should kick in here");
            biggerExpanding(windowWidth);
            while (moreSection.firstChild) {
                moreSection.removeChild(moreSection.lastChild);
            };
            moreSectionArr.forEach(ek => {
                moreSection.appendChild(ek);
            });
            while (arr.firstChild) {
                arr.removeChild(arr.lastChild);
            };
            //put back in correct order
            //also need to reinsert as a href within li element
            console.log(arr);
            arr.forEach(ez => {
                collapsingLine.appendChild(ez);
            });
        } else {
            resizeCollapsible(windowWidth);
            console.log("it should be resizing...");
            /* console.log(currentWindowLetter);
            console.log(moreSectionArr); */
            while (moreSection.firstChild) {
                moreSection.removeChild(moreSection.lastChild);
            };
            moreSectionArr.forEach(ek => {
                moreSection.appendChild(ek);
            });
        }

        /* resizeCollapsible(windowWidth);
        console.log(currentWindowLetter); */

        /* if (windowWidth < 450) {
            //cut off after 3rd + move everything else inside more
            
            var specificPortionArr = arr.slice(3,7);
            console.log(specificPortionArr);
            specificPortionArr.forEach(el => {
                console.log(el.firstChild);
                moreSectionArr.push(el.firstChild);
                el.remove();
            });
        };*/
 
        //refreshes "More" tab with moved els
        /* console.log(moreSectionArr);
        while (moreSection.firstChild) {
            moreSection.removeChild(moreSection.lastChild);
        };
        moreSectionArr.forEach(ek => {
            moreSection.appendChild(ek);
        }) */  
    };

    reportWindowSize();//runs automatically before any resizing
    console.log(currentWindowLetter);

    window.addEventListener('resize', reportWindowSize);
    /* const collapsingLine = document.getElementById("longCollapsing");
    collapsingLine.addEventListener() */

    //if multiple "menus", can add their own event listeners even by class name
    //if mouse hovers out of dropdown, list disappears
    const shopButton = document.getElementsByClassName("dropbtn");
    Array.prototype.forEach.call(shopButton, function(el) {
        el.addEventListener('click', e => {
            let showList = el.nextElementSibling;
            console.log(showList.style.display);
            if (showList.style.display === "none" || showList.style.display === "") {
                showList.style.display = "block";
                showList.addEventListener('mouseleave', e => {
                    showList.style.display = "";
                })
            } else if (showList.style.display === "block") {
                showList.style.display = "";
            } 
        })
    });


    const burgerBtn = document.getElementById("clickForClassic");
    burgerBtn.addEventListener('click', e => {
        const burgerList = document.getElementById("classicMenu");

        if (burgerBtn.className) {
            console.log("Hi world, opening list");
            burgerList.style.display = "block";
        } else {
            console.log("Closing stuffs");
            burgerList.style.display = "none";
        }
    });

    const imgList = document.getElementById("imageList");
    const imgListArray = Array.from(imgList.children);
    const imgListArrayLength = imgListArray.length;
    //let currentImgIn = null;
    let currentImgIndex = null;
    let dots = document.getElementsByClassName("dot");

    function fillDot(imgIndex) {
        Array.prototype.forEach.call(dots, function(el) {
            if (el.id === `dot${imgIndex}`) {
                el.style.opacity = 0.75;
            } else {
                el.style.opacity = 0.3;
            }
        })
    }

    function startImageSlideshow() {
        currentImgIndex = 0;
        imgListArray[currentImgIndex].style.display = "block";
        fillDot(currentImgIndex);
        //currentImgIn = imgListArray[0];
    };

    const prevSlideBtn = document.querySelector("#previous");
    prevSlideBtn.addEventListener('click', e => {
        console.log("Prev firing here!");
        var prevImgIndex = null;
        if (currentImgIndex == 0) {
            prevImgIndex = 3
        } else {
            prevImgIndex = currentImgIndex - 1;
        }
        console.log("prevImgIndex is: " + prevImgIndex);
        //1st img is 0
        imgListArray[currentImgIndex].style.display = "none";
        imgListArray[prevImgIndex].style.display = "block";

        currentImgIndex = prevImgIndex;
        fillDot(currentImgIndex);
        //work on THIS making the previous image fire
        //even if it's the first one in the "set"
    })

    const nextSlideBtn = document.querySelector("#next");
    nextSlideBtn.addEventListener('click', e => {
        console.log("Next firing here!");
        var length = imgListArrayLength;
        var nextImgIndex = (currentImgIndex + 1) % length;
        console.log("remainder is: " + nextImgIndex);
        
        imgListArray[currentImgIndex].style.display = "none";
        imgListArray[nextImgIndex].style.display = "block";
        
        currentImgIndex = nextImgIndex;
        fillDot(currentImgIndex);
        
        //currentImgIn.style.display = "none";

        //work on THIS making the next image fire
    })

    function advanceSlides() {

        var length = imgListArrayLength;
        var nextImgIndex = (currentImgIndex + 1) % length;

        if (document.querySelector("#previous:hover")) {
            console.log("prev is being hovered!");
        } else if (document.querySelector("#next:hover")) {
            console.log("next is being hovered!");
        } else if (
            document.querySelector("#dot0:hover") || 
            document.querySelector("#dot1:hover") ||
            document.querySelector("#dot2:hover") ||
            document.querySelector("#dot3:hover")) {
            console.log("one dot is being hovered!");
        } else {
            imgListArray[currentImgIndex].style.display = "none";
            imgListArray[nextImgIndex].style.display = "block";
            console.log("nextImgIndex is " + nextImgIndex)
            currentImgIndex = nextImgIndex;
            fillDot(currentImgIndex);
        }
    }

    //button listeners for each slide

    const dot0Btn = document.getElementById("dot0");
    const dot1Btn = document.getElementById("dot1");
    const dot2Btn = document.getElementById("dot2");
    const dot3Btn = document.getElementById("dot3");

    dot0Btn.addEventListener('click', e => {
        imgListArray[currentImgIndex].style.display = "none";
        currentImgIndex = 0;
        imgListArray[currentImgIndex].style.display = "block";
        fillDot(currentImgIndex);
    });
    dot1Btn.addEventListener('click', e => {
        imgListArray[currentImgIndex].style.display = "none";
        currentImgIndex = 1;
        imgListArray[currentImgIndex].style.display = "block";
        fillDot(currentImgIndex);
    });
    dot2Btn.addEventListener('click', e => {
        imgListArray[currentImgIndex].style.display = "none";
        currentImgIndex = 2;
        imgListArray[currentImgIndex].style.display = "block";
        fillDot(currentImgIndex);
    });
    dot3Btn.addEventListener('click', e => {
        imgListArray[currentImgIndex].style.display = "none";
        currentImgIndex = 3;
        imgListArray[currentImgIndex].style.display = "block";
        fillDot(currentImgIndex);
    });

    startImageSlideshow();
    setInterval(advanceSlides, 5000);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL3NyYy9sb2dpY3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogVHJ5aW5nIG1vYmlsZSBmaXJzdCBkZXYgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogI0IxMERDOTtcXG4gICAgLS1zZWNvbmRhcnk6ICNGMDEyQkU7XFxuICAgIC0tdGVydGlhcnk6ICM4NTE0NGI7XFxuICAgIC0tcXVhdGVybmFyeTogcmdiKDI1NSwgMjU1LCAyMjUpO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG59IFxcblxcbnVsI3Nob3J0TWVudSwgdWwjc2hvcnRNZW51MiwgdWwjaW1hZ2VMaXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYjY2xpY2tGb3JDbGFzc2ljIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uYmFyMSwgLmJhcjIsIC5iYXIzIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luOiA2cHggMDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5jaGFuZ2UgLmJhcjEge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTFweCkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5jaGFuZ2UgLmJhcjIge29wYWNpdHk6IDA7fVxcblxcbi5jaGFuZ2UgLmJhcjMge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExcHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbnVsI2NsYXNzaWNNZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbnVsI2xvbmdNZW51IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vbmU7IC8qdGhpcyBpcyB0aGUga2V5IGZvciBsb25nZXIgb25lcyB0byBtYWtlIHRoZSBsZWZ0IHNpZGUgc2hvdyB1cCBiZWZvcmUgc2Nyb2xsaW5nISovXFxufVxcblxcbnVsI2xvbmdDb2xsYXBzaW5nIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2I2xvbmdNZW51Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxudWwjbG9uZ01lbnUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xcbiAgaGVpZ2h0OiA5MHB4OyAvKiA0MHB4IC0gbW9yZSBwbGFjZSBmb3Igc2Nyb2xsYmFyLCBpcyBoaWRkZW4gdW5kZXIgcGFyZW50IGJveCAqL1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxuc3BhbiNpbWdSZWYge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmRpdiNpbWFnZVNsaWRlQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxufVxcblxcbmRpdiNwcmV2aW91cywgZGl2I25leHQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDIyMSwgMjIxLCAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbmRpdiNwcmV2aW91czpob3ZlciwgZGl2I25leHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDIyMSwgMjIxLCAwLjQpO1xcbn1cXG5cXG5kaXYjcHJldmlvdXMge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5kaXYjbmV4dCB7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5kaXYjcmlnaHRBcnJvdywgZGl2I2xlZnRBcnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4ub25lU2xpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm9uZVNsaWRlIGltZyB7XFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2I2RvdENvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICBtYXJnaW46IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRvdCB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuN3MgZWFzZTtcXG59XFxuXFxuLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xcbi5mYWRlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge29wYWNpdHk6IC40fVxcbiAgdG8ge29wYWNpdHk6IDF9XFxufVxcblxcbmxpIGEsIC5kcm9wYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxubGkgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG5kaXYgPiBhOmhvdmVyLCBkaXYjYnVyZ2VyVG9SaWdodCA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG5saS5kcm9wZG93biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiAgXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxuICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuNCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5saS5kcm9wZG93biNidXJnZXJUb1JpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQjYnVyZ2VyVG9SaWdodCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTAwcHg7XFxuICB0b3A6IC01MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC40KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50I2J1cmdlclRvUmlnaHQgYSB7IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgXFxufVxcbiBcXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7IFxcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NTU7IFxcbn1cXG4vKiBcXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7fVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFD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O0FBQ2xCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7OztHQUtHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBUcnlpbmcgbW9iaWxlIGZpcnN0IGRldiAqL1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjQjEwREM5O1xcbiAgICAtLXNlY29uZGFyeTogI0YwMTJCRTtcXG4gICAgLS10ZXJ0aWFyeTogIzg1MTQ0YjtcXG4gICAgLS1xdWF0ZXJuYXJ5OiByZ2IoMjU1LCAyNTUsIDIyNSk7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn0gXFxuXFxudWwjc2hvcnRNZW51LCB1bCNzaG9ydE1lbnUyLCB1bCNpbWFnZUxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdiNjbGlja0ZvckNsYXNzaWMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDZweCAwO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLmNoYW5nZSAuYmFyMSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMXB4KSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLmNoYW5nZSAuYmFyMiB7b3BhY2l0eTogMDt9XFxuXFxuLmNoYW5nZSAuYmFyMyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTFweCkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxudWwjY2xhc3NpY01lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxudWwjbG9uZ01lbnUge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbm9uZTsgLyp0aGlzIGlzIHRoZSBrZXkgZm9yIGxvbmdlciBvbmVzIHRvIG1ha2UgdGhlIGxlZnQgc2lkZSBzaG93IHVwIGJlZm9yZSBzY3JvbGxpbmchKi9cXG59XFxuXFxudWwjbG9uZ0NvbGxhcHNpbmcge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYjbG9uZ01lbnVDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG51bCNsb25nTWVudSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXFxuICBoZWlnaHQ6IDkwcHg7IC8qIDQwcHggLSBtb3JlIHBsYWNlIGZvciBzY3JvbGxiYXIsIGlzIGhpZGRlbiB1bmRlciBwYXJlbnQgYm94ICovXFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG5zcGFuI2ltZ1JlZiB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuZGl2I2ltYWdlU2xpZGVDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGhlaWdodDpmaXQtY29udGVudDtcXG59XFxuXFxuZGl2I3ByZXZpb3VzLCBkaXYjbmV4dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMjIxLCAyMjEsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtNDVweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuZGl2I3ByZXZpb3VzOmhvdmVyLCBkaXYjbmV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMjIxLCAyMjEsIDAuNCk7XFxufVxcblxcbmRpdiNwcmV2aW91cyB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbmRpdiNuZXh0IHtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbmRpdiNyaWdodEFycm93LCBkaXYjbGVmdEFycm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XFxufVxcblxcbi5vbmVTbGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub25lU2xpZGUgaW1nIHtcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYjZG90Q29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZG90IHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC43cyBlYXNlO1xcbn1cXG5cXG4vKiBGYWRpbmcgYW5pbWF0aW9uICovXFxuLmZhZGUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgZnJvbSB7b3BhY2l0eTogLjR9XFxuICB0byB7b3BhY2l0eTogMX1cXG59XFxuXFxubGkgYSwgLmRyb3BidG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5saSBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbmRpdiA+IGE6aG92ZXIsIGRpdiNidXJnZXJUb1JpZ2h0ID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbmxpLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuICBcXG4uZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC40KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmxpLmRyb3Bkb3duI2J1cmdlclRvUmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCNidXJnZXJUb1JpZ2h0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMDBweDtcXG4gIHRvcDogLTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjQpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQjYnVyZ2VyVG9SaWdodCBhIHsgXFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5hOmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcXG59XFxuIFxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogIzg4ODsgXFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTsgXFxufVxcbi8qIFxcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt9XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ2ljdG9kbyBmcm9tICcuL2xvZ2ljdG9kby5qcyc7XG5sb2dpY3RvZG8oKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2ljdG9kbygpIHtcbiAgICBcbiAgICBjb25zdCBjb2xsYXBzaW5nTGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9uZ0NvbGxhcHNpbmdcIik7XG4gICAgY29uc3QgbW9yZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGVkT3JSZW1vdmVkXCIpO1xuXG4gICAgbGV0IGN1cnJlbnRXaW5kb3dMZXR0ZXIgPSBudWxsO1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlcG9ydFdpbmRvd1NpemUoKSB7XG5cbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2luZG93J3Mgd2lkdGg6IFwiICsgd2luZG93V2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRXaW5kb3dMZXR0ZXI6IFwiICsgY3VycmVudFdpbmRvd0xldHRlcik7XG4gICAgICAgIHZhciBhcnIgPSBBcnJheS5mcm9tKGNvbGxhcHNpbmdMaW5lLmNoaWxkcmVuKTtcbiAgICAgICAgdmFyIG1vcmVTZWN0aW9uQXJyID0gQXJyYXkuZnJvbShtb3JlU2VjdGlvbi5jaGlsZHJlbik7XG5cbiAgICAgICAgbGV0IGEgPSAwO1xuICAgICAgICBsZXQgYiA9IDYwMDtcbiAgICAgICAgbGV0IGMgPSA2ODA7XG4gICAgICAgIGxldCBkID0gNzgwO1xuICAgICAgICBsZXQgZSA9IDkwMDtcbiAgICAgICAgbGV0IGYgPSAxMjAwO1xuICAgICAgICBsZXQgZyA9IDE4MDA7XG5cbiAgICAgICAgZnVuY3Rpb24gbW92ZUVsc1RvTW9yZShzb21lQXJyYXkpIHtcbiAgICAgICAgICAgIHNvbWVBcnJheS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICBtb3JlU2VjdGlvbkFyci5zcGxpY2UoMywgMCwgZWwuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBtb3ZlTW9yZVRvRWxzKGFub3RoZXJBcnJheSkge1xuICAgICAgICAgICAgYW5vdGhlckFycmF5LmZvckVhY2goZW0gPT4ge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0RWxIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdEVsSG9sZGVyKTtcbiAgICAgICAgICAgICAgICBsaXN0RWxIb2xkZXIuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke2VtLmlubmVySFRNTH1cIj4ke2VtLmlubmVySFRNTH08L2E+YDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0RWxIb2xkZXIpO1xuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoLTEsIDAsIGxpc3RFbEhvbGRlcik7Ly9wbGFjZXMgaXQgYmVmb3JlIFwiTW9yZVwiXG4gICAgICAgICAgICAgICAgZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy93YW50IGZ1bmN0aW9uIHRvIGJlIGJhc2VkIG9mZiB3aW5kb3cncyB3aWR0aFxuICAgICAgICAvL2N1cnJlbnRseSBjYW4ganVzdCBcInJlc2l6ZVwiIHVwb24gaW5pdGFsIHBhZ2UgbG9hZFxuICAgICAgICAvL2Z4biBiZWxvdyB3b3JrcyB3aXRoIHNocmlua2luZyBzY3JlZW4gd2lkdGhcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ29sbGFwc2libGUoeSkge1xuICAgICAgICAgICAgaWYgKHkgPCBiKSB7XG4gICAgICAgICAgICAvL2N1dCBvZmYgYWZ0ZXIgM3JkIHRpbGwgc2Vjb25kIHRvIGxhc3QgPiBtb3ZlIHRvIG1vcmVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHNwZWNpZmljUG9ydGlvbkFyciA9IGFyci5zbGljZSgzLC0xKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICBtb3ZlRWxzVG9Nb3JlKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRXaW5kb3dMZXR0ZXIgc2hvdWxkIGJlIHNldCBoZXJlLi4uXCIpO1xuICAgICAgICAgICAgY3VycmVudFdpbmRvd0xldHRlciA9IGI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPCBjKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljUG9ydGlvbkFyciA9IGFyci5zbGljZSg0LC0xKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgICAgIG1vdmVFbHNUb01vcmUoc3BlY2lmaWNQb3J0aW9uQXJyKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50V2luZG93TGV0dGVyID0gYztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA8IGQpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgc3BlY2lmaWNQb3J0aW9uQXJyID0gYXJyLnNsaWNlKDUsLTEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICAgICAgbW92ZUVsc1RvTW9yZShzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRXaW5kb3dMZXR0ZXIgPSBkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh5IDwgZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBzcGVjaWZpY1BvcnRpb25BcnIgPSBhcnIuc2xpY2UoNiwtMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3BlY2lmaWNQb3J0aW9uQXJyKTtcbiAgICAgICAgICAgICAgICBtb3ZlRWxzVG9Nb3JlKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICAgICAgY3VycmVudFdpbmRvd0xldHRlciA9IGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRXaW5kb3dMZXR0ZXIgPSBmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGJpZ2dlckV4cGFuZGluZyh0KSB7XG4gICAgICAgICAgICBpZiAodCA+IGIpIHtcbiAgICAgICAgICAgICAgICAvL21vdmUgZmlyc3QgdGhpbmcgYWZ0ZXIgXCJzb21ldGhpbmdcInMgYmFjayBpblxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVGcm9tTW9yZSA9IG1vcmVTZWN0aW9uQXJyLnNsaWNlKDMsNCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9yZVNlY3Rpb25BcnIuc3BsaWNlKDMsMSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbW92ZUZyb21Nb3JlKTtcbiAgICAgICAgICAgICAgICBtb3ZlTW9yZVRvRWxzKHJlbW92ZUZyb21Nb3JlKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50V2luZG93TGV0dGVyID0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHQgPiBjKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgc3BlY2lmaWNQb3J0aW9uQXJyID0gYXJyLnNsaWNlKDQsLTEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlRWxzVG9Nb3JlKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXaW5kb3dMZXR0ZXIgPSBkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodCA+IGQpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGVjaWZpY1BvcnRpb25BcnIgPSBhcnIuc2xpY2UoNSwtMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVFbHNUb01vcmUoc3BlY2lmaWNQb3J0aW9uQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdpbmRvd0xldHRlciA9IGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ID4gZSkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljUG9ydGlvbkFyciA9IGFyci5zbGljZSg2LC0xKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3BlY2lmaWNQb3J0aW9uQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgbW92ZUVsc1RvTW9yZShzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2luZG93TGV0dGVyID0gZjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2luZG93TGV0dGVyID0gZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2N1cnJlbnRXaW5kb3dMZXR0ZXIgaXMgbnVsbCB1bnRpbCByZXNpemVDb2xsYXBzaWJsZVxuICAgICAgICAvL3RoaXMgY292ZXJzIHRoZSBmaXJzdCBpdGVyYXRpb24gQCBwYWdlIHN0YXJ0dXBcbiAgICAgICAgaWYgKGN1cnJlbnRXaW5kb3dMZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzaXplQ29sbGFwc2libGUod2luZG93V2lkdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBpdGVyYXRpb24hXCIpO1xuICAgICAgICAgICAgd2hpbGUgKG1vcmVTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtb3JlU2VjdGlvbi5yZW1vdmVDaGlsZChtb3JlU2VjdGlvbi5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1vcmVTZWN0aW9uQXJyLmZvckVhY2goZWsgPT4ge1xuICAgICAgICAgICAgICAgIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKGVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID4gY3VycmVudFdpbmRvd0xldHRlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleHBhbmRlciBzaG91bGQga2ljayBpbiBoZXJlXCIpO1xuICAgICAgICAgICAgYmlnZ2VyRXhwYW5kaW5nKHdpbmRvd1dpZHRoKTtcbiAgICAgICAgICAgIHdoaWxlIChtb3JlU2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbW9yZVNlY3Rpb24ucmVtb3ZlQ2hpbGQobW9yZVNlY3Rpb24ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtb3JlU2VjdGlvbkFyci5mb3JFYWNoKGVrID0+IHtcbiAgICAgICAgICAgICAgICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChlayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdoaWxlIChhcnIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGFyci5yZW1vdmVDaGlsZChhcnIubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL3B1dCBiYWNrIGluIGNvcnJlY3Qgb3JkZXJcbiAgICAgICAgICAgIC8vYWxzbyBuZWVkIHRvIHJlaW5zZXJ0IGFzIGEgaHJlZiB3aXRoaW4gbGkgZWxlbWVudFxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGV6ID0+IHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzaW5nTGluZS5hcHBlbmRDaGlsZChleik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc2l6ZUNvbGxhcHNpYmxlKHdpbmRvd1dpZHRoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXQgc2hvdWxkIGJlIHJlc2l6aW5nLi4uXCIpO1xuICAgICAgICAgICAgLyogY29uc29sZS5sb2coY3VycmVudFdpbmRvd0xldHRlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb3JlU2VjdGlvbkFycik7ICovXG4gICAgICAgICAgICB3aGlsZSAobW9yZVNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG1vcmVTZWN0aW9uLnJlbW92ZUNoaWxkKG1vcmVTZWN0aW9uLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbW9yZVNlY3Rpb25BcnIuZm9yRWFjaChlayA9PiB7XG4gICAgICAgICAgICAgICAgbW9yZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiByZXNpemVDb2xsYXBzaWJsZSh3aW5kb3dXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXaW5kb3dMZXR0ZXIpOyAqL1xuXG4gICAgICAgIC8qIGlmICh3aW5kb3dXaWR0aCA8IDQ1MCkge1xuICAgICAgICAgICAgLy9jdXQgb2ZmIGFmdGVyIDNyZCArIG1vdmUgZXZlcnl0aGluZyBlbHNlIGluc2lkZSBtb3JlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBzcGVjaWZpY1BvcnRpb25BcnIgPSBhcnIuc2xpY2UoMyw3KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICBzcGVjaWZpY1BvcnRpb25BcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWwuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgbW9yZVNlY3Rpb25BcnIucHVzaChlbC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9OyovXG4gXG4gICAgICAgIC8vcmVmcmVzaGVzIFwiTW9yZVwiIHRhYiB3aXRoIG1vdmVkIGVsc1xuICAgICAgICAvKiBjb25zb2xlLmxvZyhtb3JlU2VjdGlvbkFycik7XG4gICAgICAgIHdoaWxlIChtb3JlU2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBtb3JlU2VjdGlvbi5yZW1vdmVDaGlsZChtb3JlU2VjdGlvbi5sYXN0Q2hpbGQpO1xuICAgICAgICB9O1xuICAgICAgICBtb3JlU2VjdGlvbkFyci5mb3JFYWNoKGVrID0+IHtcbiAgICAgICAgICAgIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKGVrKTtcbiAgICAgICAgfSkgKi8gIFxuICAgIH07XG5cbiAgICByZXBvcnRXaW5kb3dTaXplKCk7Ly9ydW5zIGF1dG9tYXRpY2FsbHkgYmVmb3JlIGFueSByZXNpemluZ1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXaW5kb3dMZXR0ZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlcG9ydFdpbmRvd1NpemUpO1xuICAgIC8qIGNvbnN0IGNvbGxhcHNpbmdMaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb25nQ29sbGFwc2luZ1wiKTtcbiAgICBjb2xsYXBzaW5nTGluZS5hZGRFdmVudExpc3RlbmVyKCkgKi9cblxuICAgIC8vaWYgbXVsdGlwbGUgXCJtZW51c1wiLCBjYW4gYWRkIHRoZWlyIG93biBldmVudCBsaXN0ZW5lcnMgZXZlbiBieSBjbGFzcyBuYW1lXG4gICAgLy9pZiBtb3VzZSBob3ZlcnMgb3V0IG9mIGRyb3Bkb3duLCBsaXN0IGRpc2FwcGVhcnNcbiAgICBjb25zdCBzaG9wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3BidG5cIik7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzaG9wQnV0dG9uLCBmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHNob3dMaXN0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2hvd0xpc3Quc3R5bGUuZGlzcGxheSk7XG4gICAgICAgICAgICBpZiAoc2hvd0xpc3Quc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHwgc2hvd0xpc3Quc3R5bGUuZGlzcGxheSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHNob3dMaXN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgc2hvd0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG93TGlzdC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICBzaG93TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xpY2tGb3JDbGFzc2ljXCIpO1xuICAgIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBidXJnZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGFzc2ljTWVudVwiKTtcblxuICAgICAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaSB3b3JsZCwgb3BlbmluZyBsaXN0XCIpO1xuICAgICAgICAgICAgYnVyZ2VyTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbG9zaW5nIHN0dWZmc1wiKTtcbiAgICAgICAgICAgIGJ1cmdlckxpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWdMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZUxpc3RcIik7XG4gICAgY29uc3QgaW1nTGlzdEFycmF5ID0gQXJyYXkuZnJvbShpbWdMaXN0LmNoaWxkcmVuKTtcbiAgICBjb25zdCBpbWdMaXN0QXJyYXlMZW5ndGggPSBpbWdMaXN0QXJyYXkubGVuZ3RoO1xuICAgIC8vbGV0IGN1cnJlbnRJbWdJbiA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRJbWdJbmRleCA9IG51bGw7XG4gICAgbGV0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xuXG4gICAgZnVuY3Rpb24gZmlsbERvdChpbWdJbmRleCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvdHMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBpZiAoZWwuaWQgPT09IGBkb3Qke2ltZ0luZGV4fWApIHtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMC43NTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IDAuMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEltYWdlU2xpZGVzaG93KCkge1xuICAgICAgICBjdXJyZW50SW1nSW5kZXggPSAwO1xuICAgICAgICBpbWdMaXN0QXJyYXlbY3VycmVudEltZ0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBmaWxsRG90KGN1cnJlbnRJbWdJbmRleCk7XG4gICAgICAgIC8vY3VycmVudEltZ0luID0gaW1nTGlzdEFycmF5WzBdO1xuICAgIH07XG5cbiAgICBjb25zdCBwcmV2U2xpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpb3VzXCIpO1xuICAgIHByZXZTbGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByZXYgZmlyaW5nIGhlcmUhXCIpO1xuICAgICAgICB2YXIgcHJldkltZ0luZGV4ID0gbnVsbDtcbiAgICAgICAgaWYgKGN1cnJlbnRJbWdJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICBwcmV2SW1nSW5kZXggPSAzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2SW1nSW5kZXggPSBjdXJyZW50SW1nSW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJldkltZ0luZGV4IGlzOiBcIiArIHByZXZJbWdJbmRleCk7XG4gICAgICAgIC8vMXN0IGltZyBpcyAwXG4gICAgICAgIGltZ0xpc3RBcnJheVtjdXJyZW50SW1nSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgaW1nTGlzdEFycmF5W3ByZXZJbWdJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICBjdXJyZW50SW1nSW5kZXggPSBwcmV2SW1nSW5kZXg7XG4gICAgICAgIGZpbGxEb3QoY3VycmVudEltZ0luZGV4KTtcbiAgICAgICAgLy93b3JrIG9uIFRISVMgbWFraW5nIHRoZSBwcmV2aW91cyBpbWFnZSBmaXJlXG4gICAgICAgIC8vZXZlbiBpZiBpdCdzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIFwic2V0XCJcbiAgICB9KVxuXG4gICAgY29uc3QgbmV4dFNsaWRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0XCIpO1xuICAgIG5leHRTbGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5leHQgZmlyaW5nIGhlcmUhXCIpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gaW1nTGlzdEFycmF5TGVuZ3RoO1xuICAgICAgICB2YXIgbmV4dEltZ0luZGV4ID0gKGN1cnJlbnRJbWdJbmRleCArIDEpICUgbGVuZ3RoO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbWFpbmRlciBpczogXCIgKyBuZXh0SW1nSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgaW1nTGlzdEFycmF5W2N1cnJlbnRJbWdJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBpbWdMaXN0QXJyYXlbbmV4dEltZ0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBcbiAgICAgICAgY3VycmVudEltZ0luZGV4ID0gbmV4dEltZ0luZGV4O1xuICAgICAgICBmaWxsRG90KGN1cnJlbnRJbWdJbmRleCk7XG4gICAgICAgIFxuICAgICAgICAvL2N1cnJlbnRJbWdJbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgLy93b3JrIG9uIFRISVMgbWFraW5nIHRoZSBuZXh0IGltYWdlIGZpcmVcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gYWR2YW5jZVNsaWRlcygpIHtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gaW1nTGlzdEFycmF5TGVuZ3RoO1xuICAgICAgICB2YXIgbmV4dEltZ0luZGV4ID0gKGN1cnJlbnRJbWdJbmRleCArIDEpICUgbGVuZ3RoO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpb3VzOmhvdmVyXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZXYgaXMgYmVpbmcgaG92ZXJlZCFcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0OmhvdmVyXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgaXMgYmVpbmcgaG92ZXJlZCFcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvdDA6aG92ZXJcIikgfHwgXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvdDE6aG92ZXJcIikgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG90Mjpob3ZlclwiKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3QzOmhvdmVyXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uZSBkb3QgaXMgYmVpbmcgaG92ZXJlZCFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWdMaXN0QXJyYXlbY3VycmVudEltZ0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBpbWdMaXN0QXJyYXlbbmV4dEltZ0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXh0SW1nSW5kZXggaXMgXCIgKyBuZXh0SW1nSW5kZXgpXG4gICAgICAgICAgICBjdXJyZW50SW1nSW5kZXggPSBuZXh0SW1nSW5kZXg7XG4gICAgICAgICAgICBmaWxsRG90KGN1cnJlbnRJbWdJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2J1dHRvbiBsaXN0ZW5lcnMgZm9yIGVhY2ggc2xpZGVcblxuICAgIGNvbnN0IGRvdDBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdDBcIik7XG4gICAgY29uc3QgZG90MUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG90MVwiKTtcbiAgICBjb25zdCBkb3QyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3QyXCIpO1xuICAgIGNvbnN0IGRvdDNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdDNcIik7XG5cbiAgICBkb3QwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGltZ0xpc3RBcnJheVtjdXJyZW50SW1nSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY3VycmVudEltZ0luZGV4ID0gMDtcbiAgICAgICAgaW1nTGlzdEFycmF5W2N1cnJlbnRJbWdJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZmlsbERvdChjdXJyZW50SW1nSW5kZXgpO1xuICAgIH0pO1xuICAgIGRvdDFCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaW1nTGlzdEFycmF5W2N1cnJlbnRJbWdJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjdXJyZW50SW1nSW5kZXggPSAxO1xuICAgICAgICBpbWdMaXN0QXJyYXlbY3VycmVudEltZ0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBmaWxsRG90KGN1cnJlbnRJbWdJbmRleCk7XG4gICAgfSk7XG4gICAgZG90MkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpbWdMaXN0QXJyYXlbY3VycmVudEltZ0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGN1cnJlbnRJbWdJbmRleCA9IDI7XG4gICAgICAgIGltZ0xpc3RBcnJheVtjdXJyZW50SW1nSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGZpbGxEb3QoY3VycmVudEltZ0luZGV4KTtcbiAgICB9KTtcbiAgICBkb3QzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGltZ0xpc3RBcnJheVtjdXJyZW50SW1nSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY3VycmVudEltZ0luZGV4ID0gMztcbiAgICAgICAgaW1nTGlzdEFycmF5W2N1cnJlbnRJbWdJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZmlsbERvdChjdXJyZW50SW1nSW5kZXgpO1xuICAgIH0pO1xuXG4gICAgc3RhcnRJbWFnZVNsaWRlc2hvdygpO1xuICAgIHNldEludGVydmFsKGFkdmFuY2VTbGlkZXMsIDUwMDApO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==