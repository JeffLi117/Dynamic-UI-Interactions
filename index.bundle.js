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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Trying mobile first dev */\n\n:root {\n    --primary: #B10DC9;\n    --secondary: #F012BE;\n    --tertiary: #85144b;\n    --quaternary: rgb(255, 255, 225);\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n    font-size: 18px;\n}\n\n.description {\n    text-align: center;\n    font-size: 1.15rem;\n    margin: 1rem;\n} \n\nul#shortMenu, ul#shortMenu2, ul#imageList {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: center;\n}\n\ndiv#clickForClassic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 5px;\n  width: fit-content;\n  text-align: center;\n  border: 2px solid var(--secondary);\n  display: inline-block;\n  cursor: default;\n}\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n\n.change .bar1 {\n  transform: translate(0, 11px) rotate(-45deg);\n}\n\n.change .bar2 {opacity: 0;}\n\n.change .bar3 {\n  transform: translate(0, -11px) rotate(45deg);\n}\n\nul#classicMenu {\n  display: none;\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n}\n\nul#longMenu {\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: none; /*this is the key for longer ones to make the left side show up before scrolling!*/\n}\n\nul#longCollapsing {\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: center;\n}\n\ndiv#longMenuContainer {\n  width: 100%;\n  height: 60px;\n  overflow: hidden;\n}\n\nul#longMenu {\n  width: 100%;\n  /* overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; */\n  height: 90px; /* 40px - more place for scrollbar, is hidden under parent box */\n  padding: 5px;\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\ndiv#imageSlideContainer {\n  position: relative;\n  box-sizing:border-box;\n  border: 2px solid var(--secondary);\n  height:fit-content;\n}\n\ndiv#previous, div#next {\n  cursor: pointer;\n  position: absolute;\n  font-size: 3rem;\n  text-align: center;\n  background: rgba(232, 221, 221, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  margin-top: -45px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n}\n\ndiv#previous {\n  top: 50%;\n  left: 0;\n}\n\ndiv#next {\n  top: 50%;\n  right: 0;\n}\n\ndiv#rightArrow, div#leftArrow {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  padding-bottom: 6px;\n}\n\n.oneSlide {\n  display: none;\n}\n\n.oneSlide img {\n  box-sizing:border-box;\n  width: 100%;\n}\n\ndiv#dotContainer {\n  box-sizing:border-box;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  align-items: center;\n}\n\n.dot {\n  height: 16px;\n  width: 16px;\n  background-color: var(--secondary);\n  border-radius: 50%;\n  display: inline-block;\n\n  transition: background-color 0.6s ease;\n}\n\nli a, .dropbtn {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover, .dropdown:hover .dropbtn {\n  background-color: var(--primary);\n}\n\ndiv > a:hover, div#burgerToRight > a:hover {\n  background-color: var(--tertiary);\n}\n\nli.dropdown {\n  display: inline-block;\n}\n  \n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\n  z-index: 1;\n}\n\nli.dropdown#burgerToRight {\n  position: relative;\n}\n\n.dropdown-content#burgerToRight {\n  display: none;\n  position: absolute;\n  left: 100px;\n  top: -50px;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: white;\n  background-color: var(--primary);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content#burgerToRight a { \n  color: white;\n  background-color: var(--secondary);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\na:link {\n  text-decoration: none;\n}\n\na:visited {\n  text-decoration: none;\n}\n\n.description > a:hover {\n  text-decoration: underline;\n  color: white;\n}\n\na:active {\n  text-decoration: underline;\n}\n\n\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1; \n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888; \n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555; \n}\n/* \n.dropdown-content a:hover {background-color:#f1f1f1;}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Trying mobile first dev */\n\n:root {\n    --primary: #B10DC9;\n    --secondary: #F012BE;\n    --tertiary: #85144b;\n    --quaternary: rgb(255, 255, 225);\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n    font-size: 18px;\n}\n\n.description {\n    text-align: center;\n    font-size: 1.15rem;\n    margin: 1rem;\n} \n\nul#shortMenu, ul#shortMenu2, ul#imageList {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: center;\n}\n\ndiv#clickForClassic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 5px;\n  width: fit-content;\n  text-align: center;\n  border: 2px solid var(--secondary);\n  display: inline-block;\n  cursor: default;\n}\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n\n.change .bar1 {\n  transform: translate(0, 11px) rotate(-45deg);\n}\n\n.change .bar2 {opacity: 0;}\n\n.change .bar3 {\n  transform: translate(0, -11px) rotate(45deg);\n}\n\nul#classicMenu {\n  display: none;\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n}\n\nul#longMenu {\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: none; /*this is the key for longer ones to make the left side show up before scrolling!*/\n}\n\nul#longCollapsing {\n  list-style-type: none;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: center;\n}\n\ndiv#longMenuContainer {\n  width: 100%;\n  height: 60px;\n  overflow: hidden;\n}\n\nul#longMenu {\n  width: 100%;\n  /* overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; */\n  height: 90px; /* 40px - more place for scrollbar, is hidden under parent box */\n  padding: 5px;\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\ndiv#imageSlideContainer {\n  position: relative;\n  box-sizing:border-box;\n  border: 2px solid var(--secondary);\n  height:fit-content;\n}\n\ndiv#previous, div#next {\n  cursor: pointer;\n  position: absolute;\n  font-size: 3rem;\n  text-align: center;\n  background: rgba(232, 221, 221, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  margin-top: -45px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n}\n\ndiv#previous {\n  top: 50%;\n  left: 0;\n}\n\ndiv#next {\n  top: 50%;\n  right: 0;\n}\n\ndiv#rightArrow, div#leftArrow {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  padding-bottom: 6px;\n}\n\n.oneSlide {\n  display: none;\n}\n\n.oneSlide img {\n  box-sizing:border-box;\n  width: 100%;\n}\n\ndiv#dotContainer {\n  box-sizing:border-box;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  align-items: center;\n}\n\n.dot {\n  height: 16px;\n  width: 16px;\n  background-color: var(--secondary);\n  border-radius: 50%;\n  display: inline-block;\n\n  transition: background-color 0.6s ease;\n}\n\nli a, .dropbtn {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover, .dropdown:hover .dropbtn {\n  background-color: var(--primary);\n}\n\ndiv > a:hover, div#burgerToRight > a:hover {\n  background-color: var(--tertiary);\n}\n\nli.dropdown {\n  display: inline-block;\n}\n  \n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\n  z-index: 1;\n}\n\nli.dropdown#burgerToRight {\n  position: relative;\n}\n\n.dropdown-content#burgerToRight {\n  display: none;\n  position: absolute;\n  left: 100px;\n  top: -50px;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: white;\n  background-color: var(--primary);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content#burgerToRight a { \n  color: white;\n  background-color: var(--secondary);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\na:link {\n  text-decoration: none;\n}\n\na:visited {\n  text-decoration: none;\n}\n\n.description > a:hover {\n  text-decoration: underline;\n  color: white;\n}\n\na:active {\n  text-decoration: underline;\n}\n\n\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1; \n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888; \n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555; \n}\n/* \n.dropdown-content a:hover {background-color:#f1f1f1;}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n} */"],"sourceRoot":""}]);
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
    let currentImgIn = null;

    function startImageSlideshow() {
        imgListArray[0].style.display = "block";
        currentImgIn = imgListArray[0];
    };

    const prevSlideBtn = document.querySelector("#previous");
    prevSlideBtn.addEventListener('click', e => {
        console.log("Prev firing here!");

        //work on THIS making the previous image fire
        //even if it's the first one in the "set"
    })

    const nextSlideBtn = document.querySelector("#next");
    nextSlideBtn.addEventListener('click', e => {
        console.log("Next firing here!");
        currentImgIn.style.display = "none";
        //work on THIS making the next image fire
    })


    startImageSlideshow();
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9zcmMvbG9naWN0b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFRyeWluZyBtb2JpbGUgZmlyc3QgZGV2ICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6ICNCMTBEQzk7XFxuICAgIC0tc2Vjb25kYXJ5OiAjRjAxMkJFO1xcbiAgICAtLXRlcnRpYXJ5OiAjODUxNDRiO1xcbiAgICAtLXF1YXRlcm5hcnk6IHJnYigyNTUsIDI1NSwgMjI1KTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG59IFxcblxcbnVsI3Nob3J0TWVudSwgdWwjc2hvcnRNZW51MiwgdWwjaW1hZ2VMaXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYjY2xpY2tGb3JDbGFzc2ljIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uYmFyMSwgLmJhcjIsIC5iYXIzIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luOiA2cHggMDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5jaGFuZ2UgLmJhcjEge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTFweCkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5jaGFuZ2UgLmJhcjIge29wYWNpdHk6IDA7fVxcblxcbi5jaGFuZ2UgLmJhcjMge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExcHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbnVsI2NsYXNzaWNNZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbnVsI2xvbmdNZW51IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vbmU7IC8qdGhpcyBpcyB0aGUga2V5IGZvciBsb25nZXIgb25lcyB0byBtYWtlIHRoZSBsZWZ0IHNpZGUgc2hvdyB1cCBiZWZvcmUgc2Nyb2xsaW5nISovXFxufVxcblxcbnVsI2xvbmdDb2xsYXBzaW5nIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2I2xvbmdNZW51Q29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxudWwjbG9uZ01lbnUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xcbiAgaGVpZ2h0OiA5MHB4OyAvKiA0MHB4IC0gbW9yZSBwbGFjZSBmb3Igc2Nyb2xsYmFyLCBpcyBoaWRkZW4gdW5kZXIgcGFyZW50IGJveCAqL1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxuZGl2I2ltYWdlU2xpZGVDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGhlaWdodDpmaXQtY29udGVudDtcXG59XFxuXFxuZGl2I3ByZXZpb3VzLCBkaXYjbmV4dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMjIxLCAyMjEsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtNDVweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbn1cXG5cXG5kaXYjcHJldmlvdXMge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5kaXYjbmV4dCB7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5kaXYjcmlnaHRBcnJvdywgZGl2I2xlZnRBcnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4ub25lU2xpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm9uZVNsaWRlIGltZyB7XFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2I2RvdENvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICBtYXJnaW46IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRvdCB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxubGkgYSwgLmRyb3BidG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5saSBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbmRpdiA+IGE6aG92ZXIsIGRpdiNidXJnZXJUb1JpZ2h0ID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbmxpLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuICBcXG4uZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC40KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmxpLmRyb3Bkb3duI2J1cmdlclRvUmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCNidXJnZXJUb1JpZ2h0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMDBweDtcXG4gIHRvcDogLTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjQpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQjYnVyZ2VyVG9SaWdodCBhIHsgXFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5hOmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcXG59XFxuIFxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogIzg4ODsgXFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTsgXFxufVxcbi8qIFxcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt9XFxuXFxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLDRCQUE0Qjs7QUFFNUI7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxr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QUNYLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7OztBQUlBLFVBQVU7QUFDVjtJQUNJLFdBQVc7QUFDZjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7OztHQUtHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBUcnlpbmcgbW9iaWxlIGZpcnN0IGRldiAqL1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjQjEwREM5O1xcbiAgICAtLXNlY29uZGFyeTogI0YwMTJCRTtcXG4gICAgLS10ZXJ0aWFyeTogIzg1MTQ0YjtcXG4gICAgLS1xdWF0ZXJuYXJ5OiByZ2IoMjU1LCAyNTUsIDIyNSk7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxufSBcXG5cXG51bCNzaG9ydE1lbnUsIHVsI3Nob3J0TWVudTIsIHVsI2ltYWdlTGlzdCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2I2NsaWNrRm9yQ2xhc3NpYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmJhcjEsIC5iYXIyLCAuYmFyMyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIG1hcmdpbjogNnB4IDA7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uY2hhbmdlIC5iYXIxIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDExcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uY2hhbmdlIC5iYXIyIHtvcGFjaXR5OiAwO31cXG5cXG4uY2hhbmdlIC5iYXIzIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMXB4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG51bCNjbGFzc2ljTWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG51bCNsb25nTWVudSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBub25lOyAvKnRoaXMgaXMgdGhlIGtleSBmb3IgbG9uZ2VyIG9uZXMgdG8gbWFrZSB0aGUgbGVmdCBzaWRlIHNob3cgdXAgYmVmb3JlIHNjcm9sbGluZyEqL1xcbn1cXG5cXG51bCNsb25nQ29sbGFwc2luZyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdiNsb25nTWVudUNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbnVsI2xvbmdNZW51IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cXG4gIGhlaWdodDogOTBweDsgLyogNDBweCAtIG1vcmUgcGxhY2UgZm9yIHNjcm9sbGJhciwgaXMgaGlkZGVuIHVuZGVyIHBhcmVudCBib3ggKi9cXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbmRpdiNpbWFnZVNsaWRlQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxufVxcblxcbmRpdiNwcmV2aW91cywgZGl2I25leHQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDIyMSwgMjIxLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG59XFxuXFxuZGl2I3ByZXZpb3VzIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuZGl2I25leHQge1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMDtcXG59XFxuXFxuZGl2I3JpZ2h0QXJyb3csIGRpdiNsZWZ0QXJyb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDZweDtcXG59XFxuXFxuLm9uZVNsaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5vbmVTbGlkZSBpbWcge1xcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdiNkb3RDb250YWluZXIge1xcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kb3Qge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbmxpIGEsIC5kcm9wYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxubGkgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG5kaXYgPiBhOmhvdmVyLCBkaXYjYnVyZ2VyVG9SaWdodCA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG5saS5kcm9wZG93biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiAgXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxuICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuNCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5saS5kcm9wZG93biNidXJnZXJUb1JpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQjYnVyZ2VyVG9SaWdodCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTAwcHg7XFxuICB0b3A6IC01MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC40KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50I2J1cmdlclRvUmlnaHQgYSB7IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgXFxufVxcbiBcXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7IFxcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NTU7IFxcbn1cXG4vKiBcXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7fVxcblxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dpY3RvZG8gZnJvbSAnLi9sb2dpY3RvZG8uanMnO1xubG9naWN0b2RvKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpY3RvZG8oKSB7XG4gICAgXG4gICAgY29uc3QgY29sbGFwc2luZ0xpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvbmdDb2xsYXBzaW5nXCIpO1xuICAgIGNvbnN0IG1vcmVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRlZE9yUmVtb3ZlZFwiKTtcblxuICAgIGxldCBjdXJyZW50V2luZG93TGV0dGVyID0gbnVsbDtcbiAgICBcbiAgICBmdW5jdGlvbiByZXBvcnRXaW5kb3dTaXplKCkge1xuXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb25zb2xlLmxvZyhcIldpbmRvdydzIHdpZHRoOiBcIiArIHdpbmRvd1dpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50V2luZG93TGV0dGVyOiBcIiArIGN1cnJlbnRXaW5kb3dMZXR0ZXIpO1xuICAgICAgICB2YXIgYXJyID0gQXJyYXkuZnJvbShjb2xsYXBzaW5nTGluZS5jaGlsZHJlbik7XG4gICAgICAgIHZhciBtb3JlU2VjdGlvbkFyciA9IEFycmF5LmZyb20obW9yZVNlY3Rpb24uY2hpbGRyZW4pO1xuXG4gICAgICAgIGxldCBhID0gMDtcbiAgICAgICAgbGV0IGIgPSA2MDA7XG4gICAgICAgIGxldCBjID0gNjgwO1xuICAgICAgICBsZXQgZCA9IDc4MDtcbiAgICAgICAgbGV0IGUgPSA5MDA7XG4gICAgICAgIGxldCBmID0gMTIwMDtcbiAgICAgICAgbGV0IGcgPSAxODAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVFbHNUb01vcmUoc29tZUFycmF5KSB7XG4gICAgICAgICAgICBzb21lQXJyYXkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWwuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgbW9yZVNlY3Rpb25BcnIuc3BsaWNlKDMsIDAsIGVsLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gbW92ZU1vcmVUb0Vscyhhbm90aGVyQXJyYXkpIHtcbiAgICAgICAgICAgIGFub3RoZXJBcnJheS5mb3JFYWNoKGVtID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEVsSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RFbEhvbGRlcik7XG4gICAgICAgICAgICAgICAgbGlzdEVsSG9sZGVyLmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHtlbS5pbm5lckhUTUx9XCI+JHtlbS5pbm5lckhUTUx9PC9hPmA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdEVsSG9sZGVyKTtcbiAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKC0xLCAwLCBsaXN0RWxIb2xkZXIpOy8vcGxhY2VzIGl0IGJlZm9yZSBcIk1vcmVcIlxuICAgICAgICAgICAgICAgIGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vd2FudCBmdW5jdGlvbiB0byBiZSBiYXNlZCBvZmYgd2luZG93J3Mgd2lkdGhcbiAgICAgICAgLy9jdXJyZW50bHkgY2FuIGp1c3QgXCJyZXNpemVcIiB1cG9uIGluaXRhbCBwYWdlIGxvYWRcbiAgICAgICAgLy9meG4gYmVsb3cgd29ya3Mgd2l0aCBzaHJpbmtpbmcgc2NyZWVuIHdpZHRoXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNvbGxhcHNpYmxlKHkpIHtcbiAgICAgICAgICAgIGlmICh5IDwgYikge1xuICAgICAgICAgICAgLy9jdXQgb2ZmIGFmdGVyIDNyZCB0aWxsIHNlY29uZCB0byBsYXN0ID4gbW92ZSB0byBtb3JlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBzcGVjaWZpY1BvcnRpb25BcnIgPSBhcnIuc2xpY2UoMywtMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgbW92ZUVsc1RvTW9yZShzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50V2luZG93TGV0dGVyIHNob3VsZCBiZSBzZXQgaGVyZS4uLlwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3dMZXR0ZXIgPSBiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh5IDwgYykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBzcGVjaWZpY1BvcnRpb25BcnIgPSBhcnIuc2xpY2UoNCwtMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3BlY2lmaWNQb3J0aW9uQXJyKTtcbiAgICAgICAgICAgICAgICBtb3ZlRWxzVG9Nb3JlKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICAgICAgY3VycmVudFdpbmRvd0xldHRlciA9IGM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPCBkKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljUG9ydGlvbkFyciA9IGFyci5zbGljZSg1LC0xKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgICAgIG1vdmVFbHNUb01vcmUoc3BlY2lmaWNQb3J0aW9uQXJyKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50V2luZG93TGV0dGVyID0gZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA8IGUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgc3BlY2lmaWNQb3J0aW9uQXJyID0gYXJyLnNsaWNlKDYsLTEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICAgICAgbW92ZUVsc1RvTW9yZShzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRXaW5kb3dMZXR0ZXIgPSBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50V2luZG93TGV0dGVyID0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBiaWdnZXJFeHBhbmRpbmcodCkge1xuICAgICAgICAgICAgaWYgKHQgPiBiKSB7XG4gICAgICAgICAgICAgICAgLy9tb3ZlIGZpcnN0IHRoaW5nIGFmdGVyIFwic29tZXRoaW5nXCJzIGJhY2sgaW5cbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlRnJvbU1vcmUgPSBtb3JlU2VjdGlvbkFyci5zbGljZSgzLDQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vcmVTZWN0aW9uQXJyLnNwbGljZSgzLDEpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZW1vdmVGcm9tTW9yZSk7XG4gICAgICAgICAgICAgICAgbW92ZU1vcmVUb0VscyhyZW1vdmVGcm9tTW9yZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudFdpbmRvd0xldHRlciA9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ID4gYykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljUG9ydGlvbkFyciA9IGFyci5zbGljZSg0LC0xKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3BlY2lmaWNQb3J0aW9uQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgbW92ZUVsc1RvTW9yZShzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2luZG93TGV0dGVyID0gZDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHQgPiBkKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgc3BlY2lmaWNQb3J0aW9uQXJyID0gYXJyLnNsaWNlKDUsLTEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlRWxzVG9Nb3JlKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXaW5kb3dMZXR0ZXIgPSBlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodCA+IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGVjaWZpY1BvcnRpb25BcnIgPSBhcnIuc2xpY2UoNiwtMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmljUG9ydGlvbkFycik7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVFbHNUb01vcmUoc3BlY2lmaWNQb3J0aW9uQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdpbmRvd0xldHRlciA9IGY7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdpbmRvd0xldHRlciA9IGc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jdXJyZW50V2luZG93TGV0dGVyIGlzIG51bGwgdW50aWwgcmVzaXplQ29sbGFwc2libGVcbiAgICAgICAgLy90aGlzIGNvdmVycyB0aGUgZmlyc3QgaXRlcmF0aW9uIEAgcGFnZSBzdGFydHVwXG4gICAgICAgIGlmIChjdXJyZW50V2luZG93TGV0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc2l6ZUNvbGxhcHNpYmxlKHdpbmRvd1dpZHRoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgaXRlcmF0aW9uIVwiKTtcbiAgICAgICAgICAgIHdoaWxlIChtb3JlU2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbW9yZVNlY3Rpb24ucmVtb3ZlQ2hpbGQobW9yZVNlY3Rpb24ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtb3JlU2VjdGlvbkFyci5mb3JFYWNoKGVrID0+IHtcbiAgICAgICAgICAgICAgICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChlayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dXaWR0aCA+IGN1cnJlbnRXaW5kb3dMZXR0ZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhwYW5kZXIgc2hvdWxkIGtpY2sgaW4gaGVyZVwiKTtcbiAgICAgICAgICAgIGJpZ2dlckV4cGFuZGluZyh3aW5kb3dXaWR0aCk7XG4gICAgICAgICAgICB3aGlsZSAobW9yZVNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG1vcmVTZWN0aW9uLnJlbW92ZUNoaWxkKG1vcmVTZWN0aW9uLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbW9yZVNlY3Rpb25BcnIuZm9yRWFjaChlayA9PiB7XG4gICAgICAgICAgICAgICAgbW9yZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aGlsZSAoYXJyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBhcnIucmVtb3ZlQ2hpbGQoYXJyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy9wdXQgYmFjayBpbiBjb3JyZWN0IG9yZGVyXG4gICAgICAgICAgICAvL2Fsc28gbmVlZCB0byByZWluc2VydCBhcyBhIGhyZWYgd2l0aGluIGxpIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICAgICAgICBhcnIuZm9yRWFjaChleiA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2luZ0xpbmUuYXBwZW5kQ2hpbGQoZXopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNpemVDb2xsYXBzaWJsZSh3aW5kb3dXaWR0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0IHNob3VsZCBiZSByZXNpemluZy4uLlwiKTtcbiAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKGN1cnJlbnRXaW5kb3dMZXR0ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobW9yZVNlY3Rpb25BcnIpOyAqL1xuICAgICAgICAgICAgd2hpbGUgKG1vcmVTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtb3JlU2VjdGlvbi5yZW1vdmVDaGlsZChtb3JlU2VjdGlvbi5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1vcmVTZWN0aW9uQXJyLmZvckVhY2goZWsgPT4ge1xuICAgICAgICAgICAgICAgIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKGVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogcmVzaXplQ29sbGFwc2libGUod2luZG93V2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50V2luZG93TGV0dGVyKTsgKi9cblxuICAgICAgICAvKiBpZiAod2luZG93V2lkdGggPCA0NTApIHtcbiAgICAgICAgICAgIC8vY3V0IG9mZiBhZnRlciAzcmQgKyBtb3ZlIGV2ZXJ5dGhpbmcgZWxzZSBpbnNpZGUgbW9yZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3BlY2lmaWNQb3J0aW9uQXJyID0gYXJyLnNsaWNlKDMsNyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzcGVjaWZpY1BvcnRpb25BcnIpO1xuICAgICAgICAgICAgc3BlY2lmaWNQb3J0aW9uQXJyLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIG1vcmVTZWN0aW9uQXJyLnB1c2goZWwuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTsqL1xuIFxuICAgICAgICAvL3JlZnJlc2hlcyBcIk1vcmVcIiB0YWIgd2l0aCBtb3ZlZCBlbHNcbiAgICAgICAgLyogY29uc29sZS5sb2cobW9yZVNlY3Rpb25BcnIpO1xuICAgICAgICB3aGlsZSAobW9yZVNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbW9yZVNlY3Rpb24ucmVtb3ZlQ2hpbGQobW9yZVNlY3Rpb24ubGFzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICAgICAgbW9yZVNlY3Rpb25BcnIuZm9yRWFjaChlayA9PiB7XG4gICAgICAgICAgICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChlayk7XG4gICAgICAgIH0pICovICBcbiAgICB9O1xuXG4gICAgcmVwb3J0V2luZG93U2l6ZSgpOy8vcnVucyBhdXRvbWF0aWNhbGx5IGJlZm9yZSBhbnkgcmVzaXppbmdcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2luZG93TGV0dGVyKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXBvcnRXaW5kb3dTaXplKTtcbiAgICAvKiBjb25zdCBjb2xsYXBzaW5nTGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9uZ0NvbGxhcHNpbmdcIik7XG4gICAgY29sbGFwc2luZ0xpbmUuYWRkRXZlbnRMaXN0ZW5lcigpICovXG5cbiAgICAvL2lmIG11bHRpcGxlIFwibWVudXNcIiwgY2FuIGFkZCB0aGVpciBvd24gZXZlbnQgbGlzdGVuZXJzIGV2ZW4gYnkgY2xhc3MgbmFtZVxuICAgIC8vaWYgbW91c2UgaG92ZXJzIG91dCBvZiBkcm9wZG93biwgbGlzdCBkaXNhcHBlYXJzXG4gICAgY29uc3Qgc2hvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wYnRuXCIpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2hvcEJ1dHRvbiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBzaG93TGlzdCA9IGVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNob3dMaXN0LnN0eWxlLmRpc3BsYXkpO1xuICAgICAgICAgICAgaWYgKHNob3dMaXN0LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8IHNob3dMaXN0LnN0eWxlLmRpc3BsYXkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBzaG93TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIHNob3dMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3Quc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvd0xpc3Quc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgICAgICAgICAgc2hvd0xpc3Quc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsaWNrRm9yQ2xhc3NpY1wiKTtcbiAgICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3QgYnVyZ2VyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xhc3NpY01lbnVcIik7XG5cbiAgICAgICAgaWYgKGJ1cmdlckJ0bi5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGkgd29ybGQsIG9wZW5pbmcgbGlzdFwiKTtcbiAgICAgICAgICAgIGJ1cmdlckxpc3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xvc2luZyBzdHVmZnNcIik7XG4gICAgICAgICAgICBidXJnZXJMaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW1nTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VMaXN0XCIpO1xuICAgIGNvbnN0IGltZ0xpc3RBcnJheSA9IEFycmF5LmZyb20oaW1nTGlzdC5jaGlsZHJlbik7XG4gICAgbGV0IGN1cnJlbnRJbWdJbiA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBzdGFydEltYWdlU2xpZGVzaG93KCkge1xuICAgICAgICBpbWdMaXN0QXJyYXlbMF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY3VycmVudEltZ0luID0gaW1nTGlzdEFycmF5WzBdO1xuICAgIH07XG5cbiAgICBjb25zdCBwcmV2U2xpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpb3VzXCIpO1xuICAgIHByZXZTbGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByZXYgZmlyaW5nIGhlcmUhXCIpO1xuXG4gICAgICAgIC8vd29yayBvbiBUSElTIG1ha2luZyB0aGUgcHJldmlvdXMgaW1hZ2UgZmlyZVxuICAgICAgICAvL2V2ZW4gaWYgaXQncyB0aGUgZmlyc3Qgb25lIGluIHRoZSBcInNldFwiXG4gICAgfSlcblxuICAgIGNvbnN0IG5leHRTbGlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFwiKTtcbiAgICBuZXh0U2xpZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXh0IGZpcmluZyBoZXJlIVwiKTtcbiAgICAgICAgY3VycmVudEltZ0luLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy93b3JrIG9uIFRISVMgbWFraW5nIHRoZSBuZXh0IGltYWdlIGZpcmVcbiAgICB9KVxuXG5cbiAgICBzdGFydEltYWdlU2xpZGVzaG93KCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9