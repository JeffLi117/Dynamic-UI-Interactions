"use strict";
(self["webpackChunkto_do_today"] = self["webpackChunkto_do_today"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Trying mobile first dev */\n\n:root {\n    --primary: #f5b316;\n    --secondary: #8d8d8d;\n    --tertiary: #667292;\n    --quaternary: #d9d9d9;\n}\n\nhtml, body, #overallWrapper {\n    font-family: 'Montserrat', sans-serif;\n    height: 100%;\n    width: 100%;\n}\n\n#backgroundCoverStuff {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0,0,0,.8);\n    z-index: 12;\n}\n\n#notBackgroundCover {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 5% 95%;\n    grid-template-columns: 35% 65%;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: var(--primary);\n    border-bottom: 2px solid var(--tertiary);\n}\n\n#header.dark-mode {\n    background-color: gray;\n}\n\n#headerIconHolder {\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 5px;\n}\n\n#toggledOn {\n    display: none;\n}\n\n#darkCount {\n    display: none;\n}\n\n#headerIconHolder h3 {\n    font-size: 11px;\n}\n\n#sidebarNamesOnly {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    text-align: center;\n    /* display: flex;\n    flex-direction: column;\n    gap: 1rem; */\n    padding-left: 8px;\n    background-color: var(--quaternary);\n\n    flex: 1 1 auto;\n    overflow-y: auto;\n    min-height: 100px;\n}\n\n#sidebarNamesOnly > div:nth-of-type(2) {\n    display:none;\n}\n\n[id^=\"_hIdDeN\"] {\n    display: none;\n}\n\n#content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    border-left: 2px solid var(--tertiary);\n    background-color: var(--quaternary);\n}\n\n#content.dark-mode, #sidebarNamesOnly.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\n#allTasksBox {\n    display: none;\n    z-index: 5;\n}\n\ndiv.added_projects {\n    text-align: center;\n    color: black;\n    background-color: var(--secondary);\n    font-size: 1.3rem;\n    padding: 0.5rem;\n}\n\ndiv.added_projects.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n    border-bottom: 1px dashed white;\n}\n\ndiv#stopAllEmpty {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ndiv#stopAllEmpty > h2 {\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\ndiv#stopAllEmpty > button {\n    background-color: var(--primary);\n    box-shadow: 1px 2px 3px rgb(0,0,0,0.6);\n}\n\ndiv#stopAllEmpty > button.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\n\n.eachSidebarContainer {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    font-size: 16px;\n    height: 42px;\n    opacity: 0.8;\n    padding: 5px 10px;\n    position: relative;\n    border: 2px solid var(--tertiary);\n    margin-bottom: 10px;\n    border-right-style: none;\n    background-color: var(--primary);\n    box-shadow: 1px 2px 2px rgb(0,0,0,0.6);\n}\n\n.eachSidebarContainer.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n    box-shadow: 1px 2px 2px rgba(140, 140, 140, 0.6);\n}\n\ndiv.sidebar_Names {\n    text-align: left;\n    width: 80%;\n}\n\ndiv.sidebar_Name_edit {\n    font-size:  clamp(0.2rem, 1rem, 1.1rem);\n    position: absolute;\n    height: 3vh;\n    width: 3vh;\n    top: 3px;\n    right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.sidebar_Name_remove {\n    font-size: clamp(0.2rem, 1rem, 1.1rem);\n    position: absolute;\n    vertical-align: bottom;\n    height: 3vh;\n    width: 3vh;\n    bottom: 3px;\n    right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv[id$=\"High\"], div[id$=\"High_AllPage\"] {\n    border: 2px solid rgb(255, 120, 120);\n}\n\ndiv[id$=\"Medium\"], div[id$=\"Medium_AllPage\"] {\n    border: 2px solid rgb(255, 193, 36);\n}\n\ndiv[id$=\"Low\"], div[id$=\"Low_AllPage\"] {\n    border: 2px solid rgb(129, 250, 30);\n}\n\nh3.added_proj_box.dark-mode, div.added_tasks.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\nh3.added_proj_box {\n    background-color: var(--quaternary);\n    min-height: 30px;\n    transition: height 2s;\n}\n\ndiv.added_tasks {\n    box-sizing: border-box;\n    text-align: center;\n    background-color: var(--quaternary);\n    font-size: 12px;\n    padding: 4px;\n    display: grid;\n    grid-template-columns: 60% 40%;\n    grid-template-rows: repeat(2, 5vh) minmax(25%, 1fr);\n}\n\ndiv.added_tasks > h4 {\n    display: none;\n}\n\ndiv.nowYouSeeMe {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    text-align: left;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\ndiv.added_due {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\ndiv.task_button_holder {\n    display: flex;\n    box-sizing: border-box;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n}\n\ndiv.task_button_holder > button {\n    height: 22px;\n}\n\ndiv.theExpandables {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    max-height: 0vh;\n    opacity: 0;\n    z-index: -1;\n\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    \n}\n\ndiv.theExpandables.active {\n    box-sizing: border-box;\n    opacity: 1;\n    min-height: 8vh;\n    max-height: none;\n    z-index: 3;\n    /* background-color:rgb(255, 110, 204); */\n}\n/* Button used to open the forms - fixed at the bottom of the page */\n\n#buttonHolder {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    bottom: 25px;\n    right: 28px;\n    width: 27vw;\n}\n#addnew {\n    background-color: #555;\n    color: white;\n    padding: 4px 2px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    width: 27vw;\n}\n  \n#newproj_button {\n    background-color: #555;\n    color: white;\n    padding: 4px 2px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    width: 27vw;\n}\n\n/* The popup form - hidden by default */\n#todoFormContainer {\n    display: none;\n    padding: 5px;\n    width: 80%;\n    height: 80%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n  \n#projFormContainer {\n    display: none;\n    padding: 5px;\n    width: 60%;\n    height: 60%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1.3rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n  \n#editFormContainer {\n    display: none;\n    padding: 5px;\n    width: 80%;\n    height: 80%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n\n/* Add styles to the form container */\n#addnewform {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px;\n    background-color: white;\n}\n\n#addnewform.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#addnewprojform {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 25px;\n    background-color: white;\n}\n\n#addnewprojform.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#addnewform > div:nth-child(4), #addnewform > div:nth-child(5) {\n    margin: 5px;\n}\n\n#addnewform > div:nth-child(3) {\n    margin: 3px;\n}\n\n#addnewform > div:nth-child(3) > input, #addnewform > div:nth-child(4) > select {\n    margin-top: 3px;\n}\n  \n#editForm {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px;\n    background-color: white;\n}\n\n#editForm.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#editForm > div:nth-child(4), #editForm > div:nth-child(5) {\n    margin: 4px;\n}\n\n#editForm > div:nth-child(3) {\n    margin: 2px;\n}\n\n#editForm > div:nth-child(3) > input, #editForm > div:nth-child(4) > select {\n    margin-top: 3px;\n}\n  \n  /* Full-width input fields */\n#addnewform input[type=text], #addnewform textarea, #editForm input[type=text], #editForm textarea {\n    font-family: 'Jost', sans-serif;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 5px;\n    margin: 5px 0 8px 0;\n    border: none;\n    background: #f1f1f1;\n}\n\n#addnewprojform input[type=text], #editForm input[type=text] {\n    font-family: 'Jost', sans-serif;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 5px;\n    margin: 12px 0 12px 0;\n    border: none;\n    background: #f1f1f1;\n}\n\n#addnewform input[type=text]::placeholder, #addnewprojform input[type=text]::placeholder, #addnewform textarea::placeholder, #editForm input[type=text], #editForm textarea::placeholder {\n    font-family: 'Jost', sans-serif;\n}\n  \n/* When the inputs get focus, do something */\n#addnewform input[type=text]:focus, #addnewprojform input[type=text]:focus, #addnewform textarea:focus, #editForm input[type=text]:focus, #editForm textarea:focus {\n    background-color: #ddd;\n    outline: none;\n}\n  \n/* Set a style for the submit/login button */\n#addnewform button, #editForm button {\n    background-color: var(--tertiary);\n    color: black;\n    padding: 12px 15px;\n    border: none;\n    cursor: pointer;\n    width: 70%;\n    margin-bottom: 12px;\n    opacity: 0.8;\n}\n\n#addnewprojform button {\n    background-color: var(--tertiary);\n    color: black;\n    padding: 12px 15px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom: 12px;\n    opacity: 0.8; \n}\n  \n/* Add a red background color to the cancel button */\n#addnewform button#cancel_button, #addnewprojform button#newproj_cancel, #editForm button#cancelEditButton {\n    background-color: var(--quaternary);\n}\n  \n/* Add some hover effects to buttons */\n#addnewform  button:hover, #addnew:hover, #addnewprojform button:hover, #newproj_button:hover {\n    opacity: 1;\n}\n\ninput#title.needsFilling, #description.needsFilling {\n    border: 1px solid rgb(219, 54, 54);\n}\n\nselect {\n    width: 100%;\n    padding: 16px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #f1f1f1;\n}\n\ninput.dark-mode, textarea.dark-mode, select.dark-mode,\n#addnewform input[type=text].dark-mode, #addnewform textarea.dark-mode, #editForm input[type=text].dark-mode, #editForm textarea.dark-mode {\n    background-color: var(--quaternary);\n}\n\n/* Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgb(190, 190, 190);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(103, 103, 103);\n}\n\n/* small tablet sizes */\n\n@media screen and (min-width: 620px) {\n\n    div#stopAllEmpty {\n        padding: 15px 25px;\n    }\n    div#stopAllEmpty > button {\n        height: 5.25vh;\n        font-size: 1.1rem;\n    }\n    .eachSidebarContainer {\n        font-size: 18px;\n        height: 48px;\n        opacity: 0.8;\n        padding: 5px 10px;\n        position: relative;\n        border: 2px solid var(--tertiary);\n        margin-bottom: 12px;\n        border-right-style: none;\n        background-color: var(--primary);\n        box-shadow: 1px 2px 2px rgb(0,0,0,0.6);\n    }\n    div.added_projects {\n        font-size: 1.5rem;\n    }\n    div.added_tasks {\n        font-size: 15px;\n    }\n    div.task_button_holder > button {\n        height: 25px;\n    }\n    div.sidebar_Name_edit {\n        font-size: clamp(0.5rem, 1.2rem, 1.4rem);\n    }\n    div.sidebar_Name_remove {\n        font-size: clamp(0.5rem, 1.2rem, 1.4rem);\n    }\n    div.sidebar_Names {\n        width: 92%;\n    }\n    \n}\n\n/* large tablet & laptop sizes */\n\n@media screen and (min-width: 960px) {\n    \n}\n\n/* desktop */\n\n@media screen and (min-width: 1200px) {\n    \n}\n\n/*My initial code below for desktop*/\n\n/* html, body {\n    height: 100%;\n}\n\n#header {\n    position: absolute;\n    height: 5vh;\n    width: 100%;\n    background-color: bisque;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebarNamesOnly {\n    text-align: center;\n    padding-top: 5vh;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    width: 25vw;\n}\n\n#content {\n    padding-top: 5vh;\n    width: 75vw;\n    border: 2px solid coral;\n}\n\n#allTasksBox {\n    display: none;\n    z-index: 5;\n}\n\ndiv.added_projects {\n    background-color: aqua;\n    font-size: 2rem;\n    padding-left: 2rem;\n}\n\n.eachSidebarContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.1rem;\n    height: 2rem;\n    gap: 1rem;\n    opacity: 0.8;\n    border-bottom-left-radius: 12px;\n    border-top-left-radius: 12px;\n    border: 2px solid coral;\n    border-right-style: none;\n    background-color: rgb(255, 225, 126);\n}\n\ndiv[id$=\"High\"], div[id$=\"High_AllPage\"] {\n    border: 2px solid rgb(255, 41, 41);\n}\n\ndiv[id$=\"Medium\"], div[id$=\"Medium_AllPage\"] {\n    border: 2px solid rgb(255, 238, 0);\n}\n\ndiv[id$=\"Low\"], div[id$=\"Low_AllPage\"] {\n    border: 2px solid rgb(43, 233, 0);\n}\n\nh3.added_proj_box {\n    background-color: rgb(255, 159, 242);\n    min-height: 30px;\n    transition: height 2s;\n}\n\ndiv.added_tasks {\n    text-align: center;\n    background-color: rgb(255, 189, 103);\n    display: grid;\n    gap: 0.5rem;\n    grid-template-columns: 70% 30%;\n    grid-template-rows: repeat(2, 5vh) minmax(25%, 1fr);\n}\n\ndiv.added_tasks > h4 {\n    display: none;\n}\n\ndiv.nowYouSeeMe {\n    display: flex;\n    justify-content: center;\n    text-align: left;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n}\n\ndiv.added_due {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\ndiv.task_button_holder {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\ndiv.task_button_holder > button {\n    height: 25px;\n}\n\ndiv.theExpandables {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    max-height: 0vh;\n    opacity: 0;\n    background-color: rgb(255, 189, 103);\n\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    \n}\n\ndiv.theExpandables.active {\n    opacity: 1;\n    max-height: 10vh;\n    background-color:rgb(255, 110, 204);\n} */\n\n/* Button used to open the forms - fixed at the bottom of the page */\n/* #addnew {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 10vw;\n}\n\n#newproj_button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    left: 28px;\n    width: 10vw;\n} */\n\n/* The popup form - hidden by default */\n/* #todoFormContainer {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  width: 13vw;\n  z-index: 9;\n}\n\n#projFormContainer {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    left: 15px;\n    border: 3px solid #f1f1f1;\n    width: 13vw;\n    z-index: 9;\n  }\n\n#editFormContainer {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    right: auto;\n    border: 3px solid #f1f1f1;\n    width: 13vw;\n    z-index: 9;\n  }\n */\n/* Add styles to the form container */\n/* #addnewform, #addnewprojform {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n#editForm {\n    max-width: 300px;\n    padding: 10px;\n    background-color: white;\n} */\n\n/* Full-width input fields */\n/* #addnewform input[type=text], #addnewprojform input[type=text] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n#editForm input[type=text] {\n    width: 100%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n} */\n\n/* When the inputs get focus, do something */\n/* #addnewform input[type=text]:focus, #addnewprojform input[type=text]:focus {\n  background-color: #ddd;\n  outline: none;\n} */\n\n/* Set a style for the submit/login button */\n/* #addnewform button, #addnewprojform button {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n} */\n\n/* Add a red background color to the cancel button */\n/* #addnewform button#cancel_button, #addnewprojform button#newproj_cancel {\n  background-color: red;\n} */\n\n/* Add some hover effects to buttons */\n/* #addnewform  button:hover, #addnew:hover, #addnewprojform button:hover, #newproj_button:hover {\n  opacity: 1;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,4BAA4B;;AAE5B;IACI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,0BAA0B;IAC1B,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,gCAAgC;IAChC,wCAAwC;AAC5C;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB;;gBAEY;IACZ,iBAAiB;IACjB,mCAAmC;;IAEnC,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,kCAAkC;IAClC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;IAChC,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC,mBAAmB;IACnB,wBAAwB;IACxB,gCAAgC;IAChC,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,gDAAgD;AACpD;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,QAAQ;IACR,UAAU;;IAEV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,sBAAsB;IACtB,WAAW;IACX,UAAU;IACV,WAAW;IACX,UAAU;;IAEV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,mCAAmC;IACnC,eAAe;IACf,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,UAAU;IACV,WAAW;;IAEX,qCAAqC;IACrC,kCAAkC;IAClC,iCAAiC;IACjC,gCAAgC;IAChC,6BAA6B;;AAEjC;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,yCAAyC;AAC7C;AACA,oEAAoE;;AAEpE;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,WAAW;IACX,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA,uCAAuC;AACvC;IACI,aAAa;IACb,YAAY;IACZ,UAAU;IACV,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,UAAU;IACV,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,UAAU;IACV,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,uBAAuB;IACvB,WAAW;AACf;;AAEA,qCAAqC;AACrC;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;EAEE,4BAA4B;AAC9B;IACI,+BAA+B;IAC/B,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;AACnC;;AAEA,4CAA4C;AAC5C;IACI,sBAAsB;IACtB,aAAa;AACjB;;AAEA,4CAA4C;AAC5C;IACI,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,UAAU;IACV,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,YAAY;AAChB;;AAEA,oDAAoD;AACpD;IACI,mCAAmC;AACvC;;AAEA,sCAAsC;AACtC;IACI,UAAU;AACd;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;;IAEI,mCAAmC;AACvC;;AAEA,cAAc;;AAEd,UAAU;AACV;EACE,UAAU;AACZ;;AAEA,UAAU;AACV;EACE,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,8BAA8B;AAChC;;AAEA,oBAAoB;AACpB;EACE,8BAA8B;AAChC;;AAEA,uBAAuB;;AAEvB;;IAEI;QACI,kBAAkB;IACtB;IACA;QACI,cAAc;QACd,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,YAAY;QACZ,YAAY;QACZ,iBAAiB;QACjB,kBAAkB;QAClB,iCAAiC;QACjC,mBAAmB;QACnB,wBAAwB;QACxB,gCAAgC;QAChC,sCAAsC;IAC1C;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,wCAAwC;IAC5C;IACA;QACI,wCAAwC;IAC5C;IACA;QACI,UAAU;IACd;;AAEJ;;AAEA,gCAAgC;;AAEhC;;AAEA;;AAEA,YAAY;;AAEZ;;AAEA;;AAEA,oCAAoC;;AAEpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAsIG;;AAEH,oEAAoE;AACpE;;;;;;;;;;;;;;;;;;;;;;;;GAwBG;;AAEH,uCAAuC;AACvC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA6BE;AACF,qCAAqC;AACrC;;;;;;;;;;GAUG;;AAEH,4BAA4B;AAC5B;;;;;;;;;;;;;;GAcG;;AAEH,4CAA4C;AAC5C;;;GAGG;;AAEH,4CAA4C;AAC5C;;;;;;;;;GASG;;AAEH,oDAAoD;AACpD;;GAEG;;AAEH,sCAAsC;AACtC;;GAEG","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Trying mobile first dev */\n\n:root {\n    --primary: #f5b316;\n    --secondary: #8d8d8d;\n    --tertiary: #667292;\n    --quaternary: #d9d9d9;\n}\n\nhtml, body, #overallWrapper {\n    font-family: 'Montserrat', sans-serif;\n    height: 100%;\n    width: 100%;\n}\n\n#backgroundCoverStuff {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0,0,0,.8);\n    z-index: 12;\n}\n\n#notBackgroundCover {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 5% 95%;\n    grid-template-columns: 35% 65%;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: var(--primary);\n    border-bottom: 2px solid var(--tertiary);\n}\n\n#header.dark-mode {\n    background-color: gray;\n}\n\n#headerIconHolder {\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 5px;\n}\n\n#toggledOn {\n    display: none;\n}\n\n#darkCount {\n    display: none;\n}\n\n#headerIconHolder h3 {\n    font-size: 11px;\n}\n\n#sidebarNamesOnly {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    text-align: center;\n    /* display: flex;\n    flex-direction: column;\n    gap: 1rem; */\n    padding-left: 8px;\n    background-color: var(--quaternary);\n\n    flex: 1 1 auto;\n    overflow-y: auto;\n    min-height: 100px;\n}\n\n#sidebarNamesOnly > div:nth-of-type(2) {\n    display:none;\n}\n\n[id^=\"_hIdDeN\"] {\n    display: none;\n}\n\n#content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    border-left: 2px solid var(--tertiary);\n    background-color: var(--quaternary);\n}\n\n#content.dark-mode, #sidebarNamesOnly.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\n#allTasksBox {\n    display: none;\n    z-index: 5;\n}\n\ndiv.added_projects {\n    text-align: center;\n    color: black;\n    background-color: var(--secondary);\n    font-size: 1.3rem;\n    padding: 0.5rem;\n}\n\ndiv.added_projects.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n    border-bottom: 1px dashed white;\n}\n\ndiv#stopAllEmpty {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ndiv#stopAllEmpty > h2 {\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\ndiv#stopAllEmpty > button {\n    background-color: var(--primary);\n    box-shadow: 1px 2px 3px rgb(0,0,0,0.6);\n}\n\ndiv#stopAllEmpty > button.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\n\n.eachSidebarContainer {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    font-size: 16px;\n    height: 42px;\n    opacity: 0.8;\n    padding: 5px 10px;\n    position: relative;\n    border: 2px solid var(--tertiary);\n    margin-bottom: 10px;\n    border-right-style: none;\n    background-color: var(--primary);\n    box-shadow: 1px 2px 2px rgb(0,0,0,0.6);\n}\n\n.eachSidebarContainer.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n    box-shadow: 1px 2px 2px rgba(140, 140, 140, 0.6);\n}\n\ndiv.sidebar_Names {\n    text-align: left;\n    width: 80%;\n}\n\ndiv.sidebar_Name_edit {\n    font-size:  clamp(0.2rem, 1rem, 1.1rem);\n    position: absolute;\n    height: 3vh;\n    width: 3vh;\n    top: 3px;\n    right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.sidebar_Name_remove {\n    font-size: clamp(0.2rem, 1rem, 1.1rem);\n    position: absolute;\n    vertical-align: bottom;\n    height: 3vh;\n    width: 3vh;\n    bottom: 3px;\n    right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv[id$=\"High\"], div[id$=\"High_AllPage\"] {\n    border: 2px solid rgb(255, 120, 120);\n}\n\ndiv[id$=\"Medium\"], div[id$=\"Medium_AllPage\"] {\n    border: 2px solid rgb(255, 193, 36);\n}\n\ndiv[id$=\"Low\"], div[id$=\"Low_AllPage\"] {\n    border: 2px solid rgb(129, 250, 30);\n}\n\nh3.added_proj_box.dark-mode, div.added_tasks.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\nh3.added_proj_box {\n    background-color: var(--quaternary);\n    min-height: 30px;\n    transition: height 2s;\n}\n\ndiv.added_tasks {\n    box-sizing: border-box;\n    text-align: center;\n    background-color: var(--quaternary);\n    font-size: 12px;\n    padding: 4px;\n    display: grid;\n    grid-template-columns: 60% 40%;\n    grid-template-rows: repeat(2, 5vh) minmax(25%, 1fr);\n}\n\ndiv.added_tasks > h4 {\n    display: none;\n}\n\ndiv.nowYouSeeMe {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    text-align: left;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\ndiv.added_due {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\ndiv.task_button_holder {\n    display: flex;\n    box-sizing: border-box;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n}\n\ndiv.task_button_holder > button {\n    height: 22px;\n}\n\ndiv.theExpandables {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    max-height: 0vh;\n    opacity: 0;\n    z-index: -1;\n\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    \n}\n\ndiv.theExpandables.active {\n    box-sizing: border-box;\n    opacity: 1;\n    min-height: 8vh;\n    max-height: none;\n    z-index: 3;\n    /* background-color:rgb(255, 110, 204); */\n}\n/* Button used to open the forms - fixed at the bottom of the page */\n\n#buttonHolder {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    bottom: 25px;\n    right: 28px;\n    width: 27vw;\n}\n#addnew {\n    background-color: #555;\n    color: white;\n    padding: 4px 2px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    width: 27vw;\n}\n  \n#newproj_button {\n    background-color: #555;\n    color: white;\n    padding: 4px 2px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    width: 27vw;\n}\n\n/* The popup form - hidden by default */\n#todoFormContainer {\n    display: none;\n    padding: 5px;\n    width: 80%;\n    height: 80%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n  \n#projFormContainer {\n    display: none;\n    padding: 5px;\n    width: 60%;\n    height: 60%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1.3rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n  \n#editFormContainer {\n    display: none;\n    padding: 5px;\n    width: 80%;\n    height: 80%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n\n/* Add styles to the form container */\n#addnewform {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px;\n    background-color: white;\n}\n\n#addnewform.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#addnewprojform {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 25px;\n    background-color: white;\n}\n\n#addnewprojform.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#addnewform > div:nth-child(4), #addnewform > div:nth-child(5) {\n    margin: 5px;\n}\n\n#addnewform > div:nth-child(3) {\n    margin: 3px;\n}\n\n#addnewform > div:nth-child(3) > input, #addnewform > div:nth-child(4) > select {\n    margin-top: 3px;\n}\n  \n#editForm {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px;\n    background-color: white;\n}\n\n#editForm.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#editForm > div:nth-child(4), #editForm > div:nth-child(5) {\n    margin: 4px;\n}\n\n#editForm > div:nth-child(3) {\n    margin: 2px;\n}\n\n#editForm > div:nth-child(3) > input, #editForm > div:nth-child(4) > select {\n    margin-top: 3px;\n}\n  \n  /* Full-width input fields */\n#addnewform input[type=text], #addnewform textarea, #editForm input[type=text], #editForm textarea {\n    font-family: 'Jost', sans-serif;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 5px;\n    margin: 5px 0 8px 0;\n    border: none;\n    background: #f1f1f1;\n}\n\n#addnewprojform input[type=text], #editForm input[type=text] {\n    font-family: 'Jost', sans-serif;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 5px;\n    margin: 12px 0 12px 0;\n    border: none;\n    background: #f1f1f1;\n}\n\n#addnewform input[type=text]::placeholder, #addnewprojform input[type=text]::placeholder, #addnewform textarea::placeholder, #editForm input[type=text], #editForm textarea::placeholder {\n    font-family: 'Jost', sans-serif;\n}\n  \n/* When the inputs get focus, do something */\n#addnewform input[type=text]:focus, #addnewprojform input[type=text]:focus, #addnewform textarea:focus, #editForm input[type=text]:focus, #editForm textarea:focus {\n    background-color: #ddd;\n    outline: none;\n}\n  \n/* Set a style for the submit/login button */\n#addnewform button, #editForm button {\n    background-color: var(--tertiary);\n    color: black;\n    padding: 12px 15px;\n    border: none;\n    cursor: pointer;\n    width: 70%;\n    margin-bottom: 12px;\n    opacity: 0.8;\n}\n\n#addnewprojform button {\n    background-color: var(--tertiary);\n    color: black;\n    padding: 12px 15px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom: 12px;\n    opacity: 0.8; \n}\n  \n/* Add a red background color to the cancel button */\n#addnewform button#cancel_button, #addnewprojform button#newproj_cancel, #editForm button#cancelEditButton {\n    background-color: var(--quaternary);\n}\n  \n/* Add some hover effects to buttons */\n#addnewform  button:hover, #addnew:hover, #addnewprojform button:hover, #newproj_button:hover {\n    opacity: 1;\n}\n\ninput#title.needsFilling, #description.needsFilling {\n    border: 1px solid rgb(219, 54, 54);\n}\n\nselect {\n    width: 100%;\n    padding: 16px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #f1f1f1;\n}\n\ninput.dark-mode, textarea.dark-mode, select.dark-mode,\n#addnewform input[type=text].dark-mode, #addnewform textarea.dark-mode, #editForm input[type=text].dark-mode, #editForm textarea.dark-mode {\n    background-color: var(--quaternary);\n}\n\n/* Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgb(190, 190, 190);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(103, 103, 103);\n}\n\n/* small tablet sizes */\n\n@media screen and (min-width: 620px) {\n\n    div#stopAllEmpty {\n        padding: 15px 25px;\n    }\n    div#stopAllEmpty > button {\n        height: 5.25vh;\n        font-size: 1.1rem;\n    }\n    .eachSidebarContainer {\n        font-size: 18px;\n        height: 48px;\n        opacity: 0.8;\n        padding: 5px 10px;\n        position: relative;\n        border: 2px solid var(--tertiary);\n        margin-bottom: 12px;\n        border-right-style: none;\n        background-color: var(--primary);\n        box-shadow: 1px 2px 2px rgb(0,0,0,0.6);\n    }\n    div.added_projects {\n        font-size: 1.5rem;\n    }\n    div.added_tasks {\n        font-size: 15px;\n    }\n    div.task_button_holder > button {\n        height: 25px;\n    }\n    div.sidebar_Name_edit {\n        font-size: clamp(0.5rem, 1.2rem, 1.4rem);\n    }\n    div.sidebar_Name_remove {\n        font-size: clamp(0.5rem, 1.2rem, 1.4rem);\n    }\n    div.sidebar_Names {\n        width: 92%;\n    }\n    \n}\n\n/* large tablet & laptop sizes */\n\n@media screen and (min-width: 960px) {\n    \n}\n\n/* desktop */\n\n@media screen and (min-width: 1200px) {\n    \n}\n\n/*My initial code below for desktop*/\n\n/* html, body {\n    height: 100%;\n}\n\n#header {\n    position: absolute;\n    height: 5vh;\n    width: 100%;\n    background-color: bisque;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebarNamesOnly {\n    text-align: center;\n    padding-top: 5vh;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    width: 25vw;\n}\n\n#content {\n    padding-top: 5vh;\n    width: 75vw;\n    border: 2px solid coral;\n}\n\n#allTasksBox {\n    display: none;\n    z-index: 5;\n}\n\ndiv.added_projects {\n    background-color: aqua;\n    font-size: 2rem;\n    padding-left: 2rem;\n}\n\n.eachSidebarContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.1rem;\n    height: 2rem;\n    gap: 1rem;\n    opacity: 0.8;\n    border-bottom-left-radius: 12px;\n    border-top-left-radius: 12px;\n    border: 2px solid coral;\n    border-right-style: none;\n    background-color: rgb(255, 225, 126);\n}\n\ndiv[id$=\"High\"], div[id$=\"High_AllPage\"] {\n    border: 2px solid rgb(255, 41, 41);\n}\n\ndiv[id$=\"Medium\"], div[id$=\"Medium_AllPage\"] {\n    border: 2px solid rgb(255, 238, 0);\n}\n\ndiv[id$=\"Low\"], div[id$=\"Low_AllPage\"] {\n    border: 2px solid rgb(43, 233, 0);\n}\n\nh3.added_proj_box {\n    background-color: rgb(255, 159, 242);\n    min-height: 30px;\n    transition: height 2s;\n}\n\ndiv.added_tasks {\n    text-align: center;\n    background-color: rgb(255, 189, 103);\n    display: grid;\n    gap: 0.5rem;\n    grid-template-columns: 70% 30%;\n    grid-template-rows: repeat(2, 5vh) minmax(25%, 1fr);\n}\n\ndiv.added_tasks > h4 {\n    display: none;\n}\n\ndiv.nowYouSeeMe {\n    display: flex;\n    justify-content: center;\n    text-align: left;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n}\n\ndiv.added_due {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\ndiv.task_button_holder {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\ndiv.task_button_holder > button {\n    height: 25px;\n}\n\ndiv.theExpandables {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    max-height: 0vh;\n    opacity: 0;\n    background-color: rgb(255, 189, 103);\n\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    \n}\n\ndiv.theExpandables.active {\n    opacity: 1;\n    max-height: 10vh;\n    background-color:rgb(255, 110, 204);\n} */\n\n/* Button used to open the forms - fixed at the bottom of the page */\n/* #addnew {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 10vw;\n}\n\n#newproj_button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    left: 28px;\n    width: 10vw;\n} */\n\n/* The popup form - hidden by default */\n/* #todoFormContainer {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  width: 13vw;\n  z-index: 9;\n}\n\n#projFormContainer {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    left: 15px;\n    border: 3px solid #f1f1f1;\n    width: 13vw;\n    z-index: 9;\n  }\n\n#editFormContainer {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    right: auto;\n    border: 3px solid #f1f1f1;\n    width: 13vw;\n    z-index: 9;\n  }\n */\n/* Add styles to the form container */\n/* #addnewform, #addnewprojform {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n#editForm {\n    max-width: 300px;\n    padding: 10px;\n    background-color: white;\n} */\n\n/* Full-width input fields */\n/* #addnewform input[type=text], #addnewprojform input[type=text] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n#editForm input[type=text] {\n    width: 100%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n} */\n\n/* When the inputs get focus, do something */\n/* #addnewform input[type=text]:focus, #addnewprojform input[type=text]:focus {\n  background-color: #ddd;\n  outline: none;\n} */\n\n/* Set a style for the submit/login button */\n/* #addnewform button, #addnewprojform button {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n} */\n\n/* Add a red background color to the cancel button */\n/* #addnewform button#cancel_button, #addnewprojform button#newproj_cancel {\n  background-color: red;\n} */\n\n/* Add some hover effects to buttons */\n/* #addnewform  button:hover, #addnew:hover, #addnewprojform button:hover, #newproj_button:hover {\n  opacity: 1;\n} */"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNow/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistance/index.js */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function formatDistanceToNow(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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

/***/ "./src/DOMtodo.js":
/*!************************!*\
  !*** ./src/DOMtodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjToSide": () => (/* binding */ addProjToSide),
/* harmony export */   "allEmpty": () => (/* binding */ allEmpty),
/* harmony export */   "refreshCenterDOM": () => (/* binding */ refreshCenterDOM),
/* harmony export */   "seeAll": () => (/* binding */ seeAll),
/* harmony export */   "setNewSideNames": () => (/* binding */ setNewSideNames),
/* harmony export */   "sidebarToggle": () => (/* binding */ sidebarToggle),
/* harmony export */   "toggleDark": () => (/* binding */ toggleDark),
/* harmony export */   "toggleExpand": () => (/* binding */ toggleExpand),
/* harmony export */   "toggleSeeAllBtn": () => (/* binding */ toggleSeeAllBtn)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");


function addProjToSide(x) {
    const sidebar = document.getElementById("sidebar");
    const sidebarNames = document.getElementById("sidebarNamesOnly");
    const sidebarHolder = document.createElement("div");
    const toAddName = document.createElement("div");
    const editProjName = document.createElement("div");
    const nameRemoveProj = document.createElement("div");
    const toAddProj = document.createElement("div");
    const newProjBox = document.createElement("h3");
    
    
    if (document.getElementById("darkCount").innerHTML % 2 === 0) {
        sidebarHolder.className = "eachSidebarContainer dark-mode"
    } else {
        sidebarHolder.className = "eachSidebarContainer";
    }   
    

    toAddName.className = "sidebar_Names";
    toAddName.id = x.projName + "sideName";
    toAddName.innerHTML = x.projName;

    nameRemoveProj.className = "sidebar_Name_remove";
    nameRemoveProj.id = x.projName + "removeself";
    nameRemoveProj.innerHTML = "<i class='fa-regular fa-trash-can'></i>";

    editProjName.className = "sidebar_Name_edit";
    editProjName.id = x.projName + "editself";
    editProjName.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";

    toAddProj.className = "added_projects";
    toAddProj.id = x.projName;
    toAddProj.innerHTML = x.projName;

    newProjBox.className = "added_proj_box";
    newProjBox.id = x.projName + "box";

    sidebarNames.appendChild(sidebarHolder);
    sidebarHolder.appendChild(toAddName);
    sidebarHolder.appendChild(editProjName);
    sidebarHolder.appendChild(nameRemoveProj);
    sidebar.appendChild(toAddProj);
    sidebar.appendChild(newProjBox);
}

function setNewSideNames(oldName, newProjName) {
    //change ID of sidebar name on DOM element & all the respective buttons
    //change display so that you can SEE new project name
    console.log(oldName);
    var toChangeIdArray = document.querySelectorAll(`[id*=${CSS.escape(oldName)}]`);
    console.log(toChangeIdArray);
    toChangeIdArray.forEach(el => {
        if (el.className === "sidebar_Names") {
            el.innerHTML = `${newProjName}`;
        } else if (el.className === "added_projects") {
            el.innerHTML = `${newProjName}`;
        }
        var strHolder = el.id;
        console.log(strHolder);
        el.id = strHolder.replace(`${oldName}`, `${newProjName}`);
        
    });
}

function seeAll(all) {

    const projContents = document.getElementById("sidebar");
    const allItemsBox = document.getElementById("allTasksBox");

    allItemsBox.style.display = "block";
    projContents.style.display = "none";
    
    //remember that date goes by yyyy/mm/dd & Jan is 0!
    function dueIn(g) {
        //change yyyy-mm-dd to yyyymmdd
        var whenItsDue = g.dueDate.replace(/-|\s/g, "");
        var yyyy = whenItsDue.slice(0, 4);
        var mm = Number(whenItsDue.slice(4, 6)) - 1;
        var dd = Number(whenItsDue.slice(6));
        let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(
            new Date(yyyy, mm, dd),
            {addSuffix: true}
        );
        console.log("before the alteration " + result);
        if (result.slice(-3) === "ago") {
            result = "Today";
        }
        console.log("after the alteration " + result);
        return result;
    };

    while (allItemsBox.lastElementChild) {
        allItemsBox.removeChild(allItemsBox.lastElementChild);
        console.log("removing the tasks from allItemsBox")
    };
    all.forEach((el) => {
        var dueInResult = dueIn(el);
        const toAddTask = document.createElement("div");
        const buttonHolder = document.createElement("div");
        const removeSelfBtn = document.createElement("button");
        const expandSelfBtn = document.createElement("button");
        const editSelfBtn = document.createElement("button");
        const dueDiv = document.createElement("div");
        const readilySeenContent = document.createElement("div");
        const expandableContent = document.createElement("div");
        const expandBtnCounter = document.createElement("h4");


        if (document.getElementById("darkCount").innerHTML % 2 === 0) {
            toAddTask.className = "added_tasks dark-mode";
        } else {
            toAddTask.className = "added_tasks";
        };
        toAddTask.id = `${el.ID}_${el.priority}_AllPage`;

        readilySeenContent.className = "nowYouSeeMe";
        readilySeenContent.innerHTML = `${el.title}<br><br>Due Date: ${el.dueDate}`;

        expandableContent.className = "theExpandables";
        expandableContent.id = `${el.ID}_expandMe_AllPage`;
        expandableContent.innerHTML = `Description: ${el.description}<br><br>Notes: ${el.notes}`;

        buttonHolder.className = "task_button_holder";

        removeSelfBtn.type = "button";
        removeSelfBtn.className = "removeself_button";
        removeSelfBtn.id = `btn_AllPage_${el.ID}`;
        removeSelfBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

        expandSelfBtn.type = "button";
        expandSelfBtn.className = "expandself_button";
        expandSelfBtn.id = `expandBtn_AllPage_${el.ID}`;
        expandSelfBtn.innerHTML = "<i class='fa-solid fa-angles-down'></i>";

        expandBtnCounter.innerHTML = 1;

        editSelfBtn.type = "button";
        editSelfBtn.className = "editTask_button";
        editSelfBtn.id = `editBtn_AllPage_${el.ID}`;
        editSelfBtn.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";

        dueDiv.className = "added_due";
        if (el.dueDate !== "") {
            dueDiv.innerHTML = `Due: ${dueInResult}`;
        }

        allItemsBox.appendChild(toAddTask);
        toAddTask.appendChild(readilySeenContent);
        toAddTask.appendChild(dueDiv);
        toAddTask.appendChild(buttonHolder);
        toAddTask.appendChild(expandableContent);
        toAddTask.appendChild(expandBtnCounter);
        buttonHolder.appendChild(expandSelfBtn);
        buttonHolder.appendChild(editSelfBtn);
        buttonHolder.appendChild(removeSelfBtn);

        var div_list = document.querySelectorAll('.added_projects');
        var h3_list = document.querySelectorAll('.added_proj_box');
        var div_array = [...div_list];
        var h3_array = [...h3_list];
        div_array.forEach(div => {
            div.style.display = "none";
        });
        h3_array.forEach(h3 => {
            h3.style.display = "none";
        });   

        allItemsBox.style.display = "block";
    });
}

function refreshCenterDOM(AP, y, z) {

    const sidebar = document.getElementById("sidebar");
    const allItemsBox = document.getElementById("allTasksBox");
    var sidebarChild = sidebar.getElementsByTagName("h3");

    sidebar.style.display = "block";
    allItemsBox.style.display = "none";
    
    //remember that date goes by yyyy/mm/dd & Jan is 0!
    function dueIn(g) {
        //change yyyy-mm-dd to yyyymmdd
        var whenItsDue = g.dueDate.replace(/-|\s/g, "");
        var yyyy = whenItsDue.slice(0, 4);
        var mm = Number(whenItsDue.slice(4, 6)) - 1;
        var dd = Number(whenItsDue.slice(6));
        let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(
            new Date(yyyy, mm, dd),
            {addSuffix: true}
        );
        //console.log("before the alteration " + result);
        if (result.slice(-3) === "ago") {
            result = "Today";
        }
        //console.log("after the alteration " + result);
        return result;
    };

    /* console.log(sidebarChild);
    console.log(z);
    console.log(sidebarChild[z]); */

    while (sidebarChild[z].lastElementChild) {
        sidebarChild[z].removeChild(sidebarChild[z].lastElementChild);
        console.log("removing the tasks from specific proj")
    };
    AP[y]["taskList"].forEach((el) => {
        var dueInResult = dueIn(el);
        const toAddTask = document.createElement("div");
        const buttonHolder = document.createElement("div");
        const removeSelfBtn = document.createElement("button");
        const expandSelfBtn = document.createElement("button");
        const editSelfBtn = document.createElement("button");
        const dueDiv = document.createElement("div");
        const readilySeenContent = document.createElement("div");
        const expandableContent = document.createElement("div");
        const expandBtnCounter = document.createElement("h4");

        if (document.getElementById("darkCount").innerHTML % 2 === 0) {
            toAddTask.className = "added_tasks dark-mode";
        } else {
            toAddTask.className = "added_tasks";
        }
        toAddTask.id = `${el.ID}_${el.priority}`;

        readilySeenContent.className = "nowYouSeeMe";
        readilySeenContent.innerHTML = `${el.title}<br>Due Date: ${el.dueDate}`;

        expandableContent.className = "theExpandables";
        expandableContent.id = `${el.ID}_expandMe`;
        expandableContent.innerHTML = `Description: ${el.description}<br><br>Notes: ${el.notes}`;

        buttonHolder.className = "task_button_holder";

        removeSelfBtn.type = "button";
        removeSelfBtn.className = "removeself_button";
        removeSelfBtn.id = `btn_${el.ID}`;
        removeSelfBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

        expandSelfBtn.type = "button";
        expandSelfBtn.className = "expandself_button";
        expandSelfBtn.id = `expandBtn_${el.ID}`;
        expandSelfBtn.innerHTML = "<i class='fa-solid fa-angles-down'></i>";

        expandBtnCounter.innerHTML = 1;

        editSelfBtn.type = "button";
        editSelfBtn.className = "editTask_button";
        editSelfBtn.id = `editBtn_${el.ID}`;
        editSelfBtn.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";

        dueDiv.className = "added_due";
        if (el.dueDate !== "") {
            dueDiv.innerHTML = `Due: ${dueInResult}`;
        }

        sidebarChild[z].appendChild(toAddTask);
        toAddTask.appendChild(readilySeenContent);
        toAddTask.appendChild(dueDiv);
        toAddTask.appendChild(buttonHolder);
        toAddTask.appendChild(expandableContent);
        toAddTask.appendChild(expandBtnCounter);
        buttonHolder.appendChild(expandSelfBtn);
        buttonHolder.appendChild(editSelfBtn);
        buttonHolder.appendChild(removeSelfBtn);
    });
}

function toggleExpand(q, r) {
    const expanderBtnTog = document.getElementById(`expandBtn_${q}`);
    console.log(expanderBtnTog);
    if (r%2 === 0) {
        expanderBtnTog.innerHTML = "<i class='fa-solid fa-angles-down'></i>";
    } else if (r%2 !== 0) {
        expanderBtnTog.innerHTML = "<i class='fa-solid fa-angles-up'></i>"
    }
}

function toggleSeeAllBtn() {
    const buttonOfInterest = document.getElementById("seeAllToggle");
    const allItemsDisplay = document.getElementById("allTasksBox");

    if (buttonOfInterest.innerHTML == "See All To-Do's") {
        console.log("supposed to show stuff now");
        buttonOfInterest.innerHTML = "Hide All To-Do's";
    } else if (buttonOfInterest.innerHTML == "Hide All To-Do's") {
        console.log("supposed to HIDE now");
        allItemsDisplay.style.display = "none";
        buttonOfInterest.innerHTML = "See All To-Do's";
    }
}

function sidebarToggle(x) {
    document.getElementById("allTasksBox").style.display = "none";
    document.getElementById("seeAllToggle").innerHTML = "See All To-Do's";
    var div_list = document.querySelectorAll('.added_projects');
    var h3_list = document.querySelectorAll('.added_proj_box');
    var div_array = [...div_list];
    var h3_array = [...h3_list];
    div_array.forEach(div => {
        if (div.id === x) {
            div.style.display = "block";
            if (document.getElementById("darkCount").innerHTML % 2 === 0) {
                div.classList.add("dark-mode");
            };
        } else {
        div.style.display = "none";
        }
    });
    h3_array.forEach(h3 => {
        if (h3.id.slice(0, -3) === x) {
            h3.style.display = "block";
            if (document.getElementById("darkCount").innerHTML % 2 === 0) {
                h3.classList.add("dark-mode");
            };
        } else {
        h3.style.display = "none";
        }
    });      
}

function allEmpty() {
    const mainContent = document.getElementById("sidebar");
    const sidebarContent = document.getElementById("sidebarNamesOnly");

    while (mainContent.children.length !== 2) {
        mainContent.removeChild(mainContent.lastElementChild);
    };
    while (sidebarContent.children.length !== 2) {
        sidebarContent.removeChild(sidebarContent.lastElementChild);
    };
}

function toggleDark() {
    var a = document.getElementById("content");
    var b = document.getElementById("sidebarNamesOnly");
    var cAll = document.getElementsByClassName("added_projects");
    var d = document.getElementById("seeAllToggle");
    var eAll = document.getElementsByClassName("eachSidebarContainer");
    var fAll = document.getElementsByClassName("added_proj_box");
    var gAll = document.getElementsByClassName("added_tasks");
    var h = document.getElementById("header");
    var i =  document.getElementById("addnewform");
    var j =  document.getElementById("addnewprojform");
    var k =  document.getElementById("editForm");
    var lAll = document.getElementsByTagName("textarea");
    var mAll = document.getElementsByTagName("input");
    var nAll = document.getElementsByTagName("select");
    
    a.classList.toggle("dark-mode");
    b.classList.toggle("dark-mode");
    d.classList.toggle("dark-mode");
    h.classList.toggle("dark-mode");
    i.classList.toggle("dark-mode");
    j.classList.toggle("dark-mode");
    k.classList.toggle("dark-mode");

    var cAllArray = [...cAll];
    var eAllArray = [...eAll];
    var fAllArray = [...fAll];
    var gAllArray = [...gAll];
    var lAllArray = [...lAll];
    var mAllArray = [...mAll];
    var nAllArray = [...nAll];
    cAllArray.forEach(div => {
        div.classList.toggle("dark-mode");
    });
    eAllArray.forEach(div => {
        div.classList.toggle("dark-mode");
    });
    fAllArray.forEach(h3 => {
        h3.classList.toggle("dark-mode");
    });
    gAllArray.forEach(div => {
        div.classList.toggle("dark-mode");
    });
    lAllArray.forEach(textarea => {
        textarea.classList.toggle("dark-mode");
    });
    mAllArray.forEach(input => {
        input.classList.toggle("dark-mode");
    });
    nAllArray.forEach(select => {
        select.classList.toggle("dark-mode");
    });
    var darkCounter = document.getElementById("darkCount").innerHTML;
    darkCounter++;
    document.getElementById("darkCount").innerHTML = darkCounter;
}


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
/* harmony import */ var _DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMtodo.js */ "./src/DOMtodo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");

















function logictodo() {

    let idcounter = 0;
    let allItems = [];
    let currentProjIndex = null;
    let currentProjName = null;
    let lastProjIndex = null;
    let lastProjName = null;

    class Item {
        constructor(title, description, dueDate, priority, notes, project) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
            this.ID = "proj" + currentProjIndex + "." + idcounter++;
            this.project = project; 

            this.giveTitle = () => {
                return `${title}`;
            }
            this.titleSetNew = function(newTitle) {
                this.title = newTitle;
            }
            this.giveDeets = () => {
                return `${description}`;
            }
            this.descriptionSetNew = function(newDeets) {
                this.description = newDeets;
            }
            this.giveDueDate = () => {
                return `${dueDate}`;
            }
            this.dueDateSetNew = function(newDueDate) {
                this.dueDate = newDueDate;
            }
            this.givePriority = () => {
                return `${priority}`;
            }
            this.prioritySetNew = function(newPri) {
                this.priority = newPri;
            }
            this.giveNotez = () => {
                return `${notes}`;
            }
            this.notesSetNew = function(newNotes) {
                this.notes = newNotes;
            }
            this.giveID = () => {
                return `${ID}`;
            }
            this.getProjName = () => {
                return `${project}`;
            }
            this.projectSetNew = function(newProjName) {
                this.project = newProjName;
            }
        }
    }
    
    function addItemToAll(x) {
        allItems.push(x);
    }

    function addItemToCurrent(x) {
        allProjects[currentProjIndex]["taskList"].push(x);
        /* [i++] */
    }

    function removeItemFromCurrent(x, y) {

        console.log(`Current proj index is ${x}, final ID is ${y}`);

        var taskFromBtnIndex = allProjects[`${x}`]["taskList"].findIndex((obj) => obj.ID == y);
        console.log(taskFromBtnIndex);

        allProjects[`${x}`]["taskList"].splice(taskFromBtnIndex, 1);
    }

    function removeItemFromAll(h) {
        var hIndex = allItems.findIndex((obj) => obj.ID === h);
        console.log("(used for allItems array) hIndex is " + hIndex);
        allItems.splice(hIndex, 1);
    }

    //gets proj index & name when trying to delete task from allItems page
    function getProjInfoForAllProj(j) {
        var jIndex = allItems.findIndex((obj) => obj.ID === j);
        currentProjName = allItems[jIndex].getProjName();
        currentProjIndex = allProjects.findIndex((obj) => obj.projName === `${currentProjName}`);
    }

    const openForm = document.getElementById("addnew");
    openForm.addEventListener('click', (e) => {
        document.getElementById("todoFormContainer").style.display = "block";
        document.getElementById("backgroundCoverStuff").style.display = "block";
    })

    const closeForm = document.getElementById("cancel_button");
    closeForm.addEventListener('click', (e) => {
        document.getElementById("todoFormContainer").style.display = "none";
        document.getElementById("backgroundCoverStuff").style.display = "none";
    })

    const openProj = document.getElementById("newproj_button");
    openProj.addEventListener('click', (e) => {
        console.log("click worked");
        document.getElementById("projFormContainer").style.display = "block";
        document.getElementById("backgroundCoverStuff").style.display = "block";
    })

    const closeProj = document.getElementById("newproj_cancel");
    closeProj.addEventListener('click', (e) => {
        document.getElementById("projFormContainer").style.display = "none";
        document.getElementById("backgroundCoverStuff").style.display = "none";
    })

    const addNewBtn = document.getElementById("submit_button");
    addNewBtn.addEventListener('click', (e) => {
        var newTaskForm = document.getElementById("addnewform");
        var formTitle = document.getElementById("title");
        var formDescrip = document.getElementById("description");

        var targetDate = document.getElementById("dueDate").value;
        
        var now = new Date();
        var month = now.getUTCMonth() + 1; //months from 1-12
        var paddedMonth = month.toString().padStart(2, '0');
        var day = now.getUTCDate();
        var paddedDay = day.toString().padStart(2, '0');
        var year = now.getUTCFullYear();
        now =  year + "-" + paddedMonth + "-" + paddedDay;

        if (newTaskForm.checkValidity() === false) {
            console.log(formTitle.checkValidity());
            console.log(formDescrip.checkValidity());
            formTitle.classList.add("needsFilling");
            formDescrip.classList.add("needsFilling");
            if (formTitle.checkValidity()) {
                formTitle.classList.remove("needsFilling");
            } else if (formDescrip.checkValidity()) {
                formDescrip.classList.remove("needsFilling");
            }
            e.preventDefault();
            e.stopPropagation();
        } else if (targetDate !== "" && targetDate < now) {
            // if a date is selected, want to make sure date is NOT in the past
                console.log("targetDate " + targetDate);
                console.log("now " + now); 
                alert("Please select a date that has not already passed.");
                e.preventDefault();
                e.stopPropagation();
        } else if (currentProjName === "_hIdDeN") {

            var a = addnewform.title.value;
            var b = addnewform.description.value;
            var c = addnewform.dueDate.value;
            var d = addnewform.priority.value;
            var e = addnewform.notes.value;
            var f = currentProjName;
            var x = new Item(a, b, c, d, e, f);
    
            addItemToAll(x);
            addItemToCurrent(x);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);
            console.log("below is allProj");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);

            document.getElementById("todoFormContainer").style.display = "none";
            document.getElementById("backgroundCoverStuff").style.display = "none";
            formTitle.classList.remove("needsFilling");
            formDescrip.classList.remove("needsFilling");

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeAllItems)(allItems);

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[0]);
            //allItems tasks are stored with beginning of "aLlItEmS_"
            //allItems does NOT have a taskList
            //not the same as hidden, which is used for when adding tasks on allItems page
        } else {

            console.log("targetDate " + targetDate);
            console.log("now " + now);

            var a = addnewform.title.value;
            var b = addnewform.description.value;
            var c = addnewform.dueDate.value;
            var d = addnewform.priority.value;
            var e = addnewform.notes.value;
            var f = currentProjName;
            var x = new Item(a, b, c, d, e, f);
    
            var AP = allProjects;
            var y = currentProjIndex;
            var z = `${currentProjName}box`;
            addItemToAll(x);
            addItemToCurrent(x);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(AP, y, z);
            //console.table(allProjects);
            console.table(allItems);
            console.table(allProjects);
            document.getElementById("todoFormContainer").style.display = "none";
            document.getElementById("backgroundCoverStuff").style.display = "none";
            formTitle.classList.remove("needsFilling");
            formDescrip.classList.remove("needsFilling");

            console.log(AP[y]);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeAllItems)(allItems);
            //allItems tasks are stored with beginning of "aLlItEmS_"
            //allItems does NOT have a taskList
            //not the same as hidden, which is used for when adding tasks on allItems page
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(AP[y]); //"refreshes" proj in localStorage to include new added task
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[0]);
        }
    }) 

    //project tab code

    let projid = 0;
    let allProjects = [];

    class Project {
        constructor(projName) {
            this.projName = projName;
            this.ID = projid++;
            this.taskList = [];

            const displayProj = () => {
                return `${projName}`;
            };
            this.giveProjName = () => {
                return displayProj();
            };
            this.setNewProjName = function(newName) {
                this.projName = newName;
            }
        }
    }

    function addProjToAll(x) {
        allProjects.push(x);
    }

    function findAllIdsRemove(b) {
        const removedIDs = [];
        allProjects[b]["taskList"].forEach((el) => {
            removedIDs.push(el.ID);
        });
        console.log("these are the removed IDs ", removedIDs);//it's an object
        return removedIDs;
    }

    //for each item within the to be removed ID's array, run it against allItems.ID for match
    //if it matches, find that item's current index & remove with splice(x, 1);
    function idToIndexRemove(f) {
        while (f.length !== 0) {
            for (var j = 0, m = allItems.length; j < m; j++) {
                if (f[0] === allItems[j].ID) {
                    console.log("this iteration allItems length was " + m);
                    console.log("allItems task was removed with ID of " + allItems[j].ID);
                    allItems.splice(j, 1);
                    f.splice(0, 1);
                    break;
                }
            }
        }
    }

    const sidebarProjSwitch = document.querySelector('#sidebarNamesOnly');
    sidebarProjSwitch.addEventListener('click', (e) => {
        if (e.target.className === "sidebar_Names") {
            currentProjName = e.target.id.slice(0, -8);
            currentProjIndex = allProjects.findIndex((obj) => obj.projName == currentProjName);
            console.log("currentproj name is " + currentProjName + " and current proj index is " + currentProjIndex);
            if (document.getElementById("seeAllToggle").innerHTML === "Hide All To-Do's") {
                var AP = allProjects;
                var y = currentProjIndex;
                var z = `${currentProjName}box`;

                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(AP, y, z);
            };
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);
        } //clicking on sidebar_name trashcan
        else if (e.target.className === "sidebar_Name_remove" || e.target.className === "fa-regular fa-trash-can") {
            if (window.confirm("This will completely erase this list!\nAre you sure?") == true) {
                var toRemoveProjName = e.target.closest("div div").id.slice(0, -10);
                var toRemoveProjIndex = allProjects.findIndex((obj) => obj.projName == toRemoveProjName);
                console.log("to be removed proj index is ", toRemoveProjIndex);
                let allRemovedIds = findAllIdsRemove(toRemoveProjIndex);
                console.log("all these should be removed (allRemovedIds): " + allRemovedIds);
                
                //localStorage removal
                //allRemovedIds is an array; iterate through that to remove from allItems
                console.log("length of object: " + allRemovedIds.length);
                console.log("type: " + typeof allRemovedIds);
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeFromAllItems)(allRemovedIds);
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeProject)(toRemoveProjName);

                //removes stuff from allItems
                console.log("checking this list after using it for localStorage: ", allRemovedIds);
                idToIndexRemove(allRemovedIds);

                if (allProjects.length == 2) {

                    toRemoveProjIndex = 1;
                    currentProjIndex = 0; //sets to hidden proj
                    currentProjName = "_hIdDeN";


                    var elToBeRemoved = e.target.closest(".eachSidebarContainer");
                    elToBeRemoved.remove();
                    allProjects.splice(toRemoveProjIndex, 1);
                    console.table(allProjects);

                    console.log(`Current proj index is ${currentProjIndex} and name is ${currentProjName}`);
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.allEmpty)();
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleSeeAllBtn)();
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);
                } else if (toRemoveProjIndex == 1) {
                    currentProjIndex = 1;
                    
                    //DOM
                    var elToBeRemoved = e.target.closest(".eachSidebarContainer");
                    elToBeRemoved.remove();

                    allProjects.splice(toRemoveProjIndex, 1);
                    console.table(allProjects);
                    currentProjName = allProjects[currentProjIndex].projName;
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);

                    console.log(`Current proj index is ${currentProjIndex} and name is ${currentProjName}`);
                } else {

                    console.log("below is allProj");
                    console.table(allProjects);
                    console.log("below is allItems");
                    console.table(allItems);

                    currentProjIndex = toRemoveProjIndex - 1;
                    currentProjName = allProjects[currentProjIndex].projName;

                    console.log(`Current proj index is ${currentProjIndex} and name is ${currentProjName}`);

                    //DOM
                    var elToBeRemoved = e.target.closest(".eachSidebarContainer");
                    elToBeRemoved.remove();

                    allProjects.splice(toRemoveProjIndex, 1);
                    console.log("This is after the removals");
                    console.table(allProjects);
                    console.table(allItems);
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);
                };
                
            }
        } else if (e.target.className === "sidebar_Name_edit" || e.target.className === "fa-regular fa-pen-to-square") {
            var toEditProjName = e.target.closest("div div").id.slice(0, -8);
            var toEditProjIndex = allProjects.findIndex((obj) => obj.projName == toEditProjName);
            console.log("proj name & index, respectively " + toEditProjName + " " + toEditProjIndex);
            let newName = prompt("What do you want the new name to be?", "");
            if (newName === null) {
                return;
            } else if (newName !== null) {
                let arrayFromProjToAll = [];

                allProjects[toEditProjIndex].setNewProjName(newName);
                allProjects[toEditProjIndex]["taskList"].forEach((task) => {
                    task.projectSetNew(newName);
                    arrayFromProjToAll.push(task);
                }); //sets new proj name for tasks within proj folder
                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.setNewSideNames)(toEditProjName, newName);//DOM and id changes 

                //remove old project from localStorage
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeProject)(toEditProjName);
                //THEN create a new "copy" with changed name

                currentProjName = newName;
                console.log(currentProjName + " name is this and index is: " + currentProjIndex);
                currentProjIndex = allProjects.findIndex((obj) => obj.projName === `${newName}`);
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[currentProjIndex]);
                //for all the individual allItems_proj's, change their respective projects to NEW name
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.editProjNameFromAllItems)(arrayFromProjToAll, newName);

                //make sure each task within has it's .project set to the NEW Name
                /* allProjects[currentProjIndex]["taskList"].forEach(task => {
                    console.log(task.project);
                    task.project = newName;
                }); */
            }
        } else if (e.target.id === "seeAllToggle") {
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleSeeAllBtn)();
            if (document.getElementById("seeAllToggle").innerHTML == "Hide All To-Do's") {
                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);
                lastProjName = currentProjName;
                lastProjIndex = currentProjIndex;
                //holds info of last viewed for if user decides to hide all items
                currentProjName = "_hIdDeN";
                currentProjIndex = 0;
                console.log("name and index: " + currentProjName + " " + currentProjIndex);
            } else {
                currentProjName = lastProjName;
                currentProjIndex = lastProjIndex;
                console.log("NEW name and index: " + currentProjName + " " + currentProjIndex);
                var AP = allProjects;
                var y = currentProjIndex;
                var z = `${currentProjName}box`;

                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(allProjects, y, z);
                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);
            }
        }
        else if (e.target.id === "sidebarNamesOnly") {
            console.log("only the sidebar empty space!");
            return;
        }  
    })

    const allItemBoxListeners = document.querySelector('#allTasksBox');
    allItemBoxListeners.addEventListener('click', (e) => {

        var btnParentProjName = e.target.closest("div.added_tasks").id.split('_')[0]; 
        currentProjName = btnParentProjName;
        var btnParentIndex = allProjects.findIndex((obj) => obj.projName == btnParentProjName);
        currentProjIndex = btnParentIndex;
        var editFormCont = document.getElementById("editFormContainer");
        var editFormMain = document.querySelectorAll("#editForm [id^=edit]");
        var editFormArray = [...editFormMain]

        if (e.target.closest("div").className !== "task_button_holder") {
            console.log("nothing should be happening here...");
        } else if (e.target.parentNode.closest("div").className !== "task_button_holder") {
            console.log("nothing happening here EITHER....");
        } else if (e.target.closest("button").className === "expandself_button" && e.target.closest("button").id.slice(10, 17) === "AllPage") {
            console.log(e.target.closest("button").id);
            var expandID = e.target.closest("button").id.slice(18);
            var toExpand = document.getElementById(`${expandID}_expandMe_AllPage`);
            var expandIdWithAP = e.target.closest("button").id.slice(10);
           
            var toggleHolder = e.target.closest("div.added_tasks").lastElementChild;
            var expandTogCounter = toggleHolder.innerHTML;

            if (expandTogCounter%2 !== 0) {
                toExpand.classList.add("active");
            } else if (expandTogCounter%2 === 0) {
                toExpand.classList.remove("active");
            }
            
            console.log("before fxn " + expandTogCounter);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleExpand)(expandIdWithAP, expandTogCounter);
            expandTogCounter++;
            console.log("after fxn " + expandTogCounter);
            toggleHolder.innerHTML = expandTogCounter;
        } else if (e.target.closest("button").className === "removeself_button" && e.target.closest("button").id.slice(4, 11) === "AllPage") {
            //finds unique ID of task within allItems
            var taskIdInAll = e.target.closest("button").id.slice(12);
            console.log("taskIdINall is " + taskIdInAll);
            getProjInfoForAllProj(taskIdInAll); //sets currentProj Name & Index to specific task

            //removes from localStorage AND from it's respective project 
            
            //allRemovedIds is an array; iterate through that to remove from allItems
            
            var storageRemovalFromAll = [];
            storageRemovalFromAll.push(taskIdInAll);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeFromAllItems)(storageRemovalFromAll);

            //

            removeItemFromAll(taskIdInAll);

            console.log("new proj name & index" + currentProjName + " " + currentProjIndex);

            //removes task from respective project within allProjects
            removeItemFromCurrent(currentProjIndex, taskIdInAll);

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[currentProjIndex]);//localStorage
            //refreshes folder to update w/o removed task

            console.log("below is allProjects");
            console.table(allProjects);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);
        } else if (e.target.closest("button").className === "editTask_button" && e.target.closest("button").id.slice(8, 15) === "AllPage") {

            document.getElementById("backgroundCoverStuff").style.display = "block";
            var editID = e.target.closest("button").id.slice(16);
            setCurrentIntoEditor(editID);
            console.log(allProjects);

            const updateTask = document.getElementById("updateEditButton");
            updateTask.addEventListener('click', (e) => {
                setEditIntoCurrentAll(editID);
                editFormCont.style.display = "none";
                document.getElementById("backgroundCoverStuff").style.display = "none";
            })
            const cancelUpdateTask = document.getElementById("cancelEditButton");
            cancelUpdateTask.addEventListener('click', (e) => {
                editFormCont.style.display = "none";
                document.getElementById("backgroundCoverStuff").style.display = "none";
            })
        } 
        /* Figure out how to configure this fxn so that edit goes into allProj and allItem list! */
        function setEditIntoCurrentAll(x) {

            var editedTitle = editForm.editTitle.value;
            var editedDescription = editForm.editDescription.value;
            var editedDueDate = editForm.editDueDate.value;
            var editedPriority = editForm.editPriority.value;
            var editedNotes = editForm.editNotes.value;
    
            var currentTaskIndexAll = allItems.findIndex((obj) => obj.ID === `${x}`);
            allItems.findIndex((obj) => obj.ID === `${x}`);
            var insertTarg = allItems[`${currentTaskIndexAll}`]
            
            insertTarg.titleSetNew(editedTitle);
            insertTarg.descriptionSetNew(editedDescription);
            insertTarg.dueDateSetNew(editedDueDate);
            insertTarg.prioritySetNew(editedPriority);
            insertTarg.notesSetNew(editedNotes);

            console.log("below is allProjects");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);

            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);            
        }

        function setCurrentIntoEditor(someID) {
            editFormCont.style.display = "block";
            var currentInfoArray = [];
            //go within allItems & find specific index
            var currentTaskIndexAll = allItems.findIndex((obj) => obj.ID === `${someID}`);
            allItems.findIndex((obj) => obj.ID === `${someID}`);
            console.log(currentTaskIndexAll);
            //take each ... description? part of constructor and get the values matched to each part
            //push said values/matches into currentInfoArray
            var testobj = allItems[`${currentTaskIndexAll}`];
            console.log(testobj);
    
            //finds key value pairs of tasks's this.info type
            for (const [key, value] of Object.entries(testobj)) {
                if (["description", "dueDate", "notes", "priority", "title"].indexOf(key) > -1) {
                    var x = [key, value];
                    currentInfoArray.push(x);
                }
            }
            console.log(currentInfoArray);

            editFormArray.forEach(input => {
    
                var inputSliced = input.name.slice(0, -5);
    
                for (var j = 0, m = currentInfoArray.length; j < m; j++) {
                    if (inputSliced === "description" && inputSliced === currentInfoArray[j][0]) {
                        document.getElementById("editDescription").innerHTML = `${currentInfoArray[j][1]}`;
                    } else if (inputSliced === currentInfoArray[j][0]) {
                        input.setAttribute("value", `${currentInfoArray[j][1]}`);
                    }
                }
            });
        }
    })


    const projSwitch = document.querySelector('#sidebar');
    projSwitch.addEventListener('click', (e) => {

        var btnParentProjName = e.target.closest("h3").id.slice(0, -3); 
        currentProjName = btnParentProjName;
        var btnParentIndex = allProjects.findIndex((obj) => obj.projName == btnParentProjName);
        currentProjIndex = btnParentIndex;
        var editFormCont = document.getElementById("editFormContainer");
        var editFormMain = document.querySelectorAll("#editForm [id^=edit]");
        var editFormArray = [...editFormMain]

        if (e.target.closest("div").className !== "task_button_holder") {
            console.log("nothing should be happening here...");
        } else if (e.target.parentNode.closest("div").className !== "task_button_holder") {
            console.log(e.target.parentNode.closest("div"));
        } else if (e.target.closest("button").className === "removeself_button") {
            //finds parent box ID; sets currentproj name & respective currentproj index to remove button&task from
          
            console.log("currentProjIndex is " + currentProjIndex);
            //finds unique ID of task within allItems
            var taskIdInAll = e.target.closest("button").id.slice(4);
            console.log("taskIdINall is " + taskIdInAll);

            removeItemFromAll(taskIdInAll);

            var AP = allProjects;
            var y = currentProjIndex;
            var z = `${currentProjName}box`;

            removeItemFromCurrent(currentProjIndex, taskIdInAll);
            console.log("below is allProjects");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[currentProjIndex]);
            //refreshes folder to update w/o removed task
            var storageRemovalFromAll = [];
            storageRemovalFromAll.push(taskIdInAll);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeFromAllItems)(storageRemovalFromAll);

            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(AP, y, z);
        } else if (e.target.closest("button").className === "expandself_button") {
            var expandID = e.target.closest("button").id.slice(10);
            var toExpand = document.getElementById(`${expandID}_expandMe`);
           
            var toggleHolder = e.target.closest("div.added_tasks").lastElementChild;
            var expandTogCounter = toggleHolder.innerHTML;

            if (expandTogCounter%2 !== 0) {
                toExpand.classList.add("active");
            } else if (expandTogCounter%2 === 0) {
                toExpand.classList.remove("active");
            }
            
            console.log("before fxn " + expandTogCounter);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleExpand)(expandID, expandTogCounter);
            expandTogCounter++;
            console.log("after fxn " + expandTogCounter);
            toggleHolder.innerHTML = expandTogCounter;
        } else if (e.target.closest("button").className === "editTask_button") {

            document.getElementById("backgroundCoverStuff").style.display = "block";
            var editID = e.target.closest("button").id.slice(8);
            setCurrentIntoEditor(editID);

            const updateTask = document.getElementById("updateEditButton");
            updateTask.addEventListener('click', (e) => {
                setEditIntoCurrent(editID);
                setEditIntoAll(editID);
                editFormCont.style.display = "none";
                document.getElementById("backgroundCoverStuff").style.display = "none";
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[currentProjIndex]);
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeAllItems)(allItems);
            })
            const cancelUpdateTask = document.getElementById("cancelEditButton");
            cancelUpdateTask.addEventListener('click', (e) => {
                editFormCont.style.display = "none";
                document.getElementById("backgroundCoverStuff").style.display = "none";
            })

            
        } 

        function setEditIntoCurrent(x) {

            var editedTitle = editForm.editTitle.value;
            var editedDescription = editForm.editDescription.value;
            var editedDueDate = editForm.editDueDate.value;
            var editedPriority = editForm.editPriority.value;
            var editedNotes = editForm.editNotes.value;
    
            var currentTaskIndex = allProjects[currentProjIndex]["taskList"].findIndex((obj) => obj.ID === `${x}`);
            var insertTarg = allProjects[currentProjIndex]["taskList"][`${currentTaskIndex}`];

            insertTarg.titleSetNew(editedTitle);
            insertTarg.descriptionSetNew(editedDescription);
            insertTarg.dueDateSetNew(editedDueDate);
            insertTarg.prioritySetNew(editedPriority);
            insertTarg.notesSetNew(editedNotes);

            console.log("below is allProjects");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);
        }

        function setEditIntoAll(x) {

            var editedTitle = editForm.editTitle.value;
            var editedDescription = editForm.editDescription.value;
            var editedDueDate = editForm.editDueDate.value;
            var editedPriority = editForm.editPriority.value;
            var editedNotes = editForm.editNotes.value;
    
            var currentTaskIndexAll = allItems.findIndex((obj) => obj.ID === `${x}`);
            allItems.findIndex((obj) => obj.ID === `${x}`);
            var insertTarg = allItems[`${currentTaskIndexAll}`]
            
            insertTarg.titleSetNew(editedTitle);
            insertTarg.descriptionSetNew(editedDescription);
            insertTarg.dueDateSetNew(editedDueDate);
            insertTarg.prioritySetNew(editedPriority);
            insertTarg.notesSetNew(editedNotes);

            console.log("below is allProjects");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);

            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);            
        }

        function setCurrentIntoEditor(someID) {
            editFormCont.style.display = "block";
            console.log("editFormArray " + editFormArray);
            var currentInfoArray = [];
            //go within allProjects, to current project index, to tasklist, to specific index within tasklist
            var currentTaskIndex = allProjects[currentProjIndex]["taskList"].findIndex((obj) => obj.ID === `${someID}`);
            //take each ... description? part of constructor and get the values matched to each part
            //push said values/matches into currentInfoArray
            var testobj = allProjects[currentProjIndex]["taskList"][`${currentTaskIndex}`];
            console.log(testobj);
    
            //finds key value pairs of tasks's this.info type
            for (const [key, value] of Object.entries(testobj)) {
                if (["description", "dueDate", "notes", "priority", "title"].indexOf(key) > -1) {
                    var x = [key, value];
                    currentInfoArray.push(x);
                }
            }
            console.log(currentInfoArray);

            editFormArray.forEach(input => {
    
                var inputSliced = input.name.slice(0, -5);
    
                for (var j = 0, m = currentInfoArray.length; j < m; j++) {
                    if (inputSliced === "description" && inputSliced === currentInfoArray[j][0]) {
                        document.getElementById("editDescription").innerHTML = `${currentInfoArray[j][1]}`;
                    } else if (inputSliced === currentInfoArray[j][0]) {
                        input.setAttribute("value", `${currentInfoArray[j][1]}`);
                    }
                }
            });
        }
    }) 

    const addNewProjBtn = document.getElementById("newproj_add");
    addNewProjBtn.addEventListener('click', (e) => {
        var stopFromAddingNew = 0;
        var takenProjNames = [];
        allProjects.forEach(el => {
            takenProjNames.push(el.projName);
        });
        takenProjNames.forEach(ek => {
            if (ek === addnewprojform.newproj_name.value) {
                alert("Please enter a unique project name.");
                stopFromAddingNew = 1;
            }
        });
        if (!/\S/.test(addnewprojform.newproj_name.value)) {
            alert("Please enter a valid project name.");
        } else if (stopFromAddingNew == 0) {
            var a = addnewprojform.newproj_name.value;
            var x = new Project(a);
            addProjToAll(x);
            console.table(allProjects);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.addProjToSide)(x); //DOM
            currentProjName = x.projName 
            currentProjIndex = allProjects.findIndex((obj) => obj.projName === `${currentProjName}`);//switch newly made proj to currentProjName and currentProjIndex
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);

            //localstorage here

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[currentProjIndex]); //"refreshes" proj in localStorage to include new added task
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[0]);
            //also adds hidden proj so that the "space" is taken when localstorage is accessed and DOM displayed

            document.getElementById("addnewprojform").reset();
            console.log("currentproj name is " + currentProjName + " and current proj index is " + currentProjIndex);
            document.getElementById("projFormContainer").style.display = "none";
            document.getElementById("backgroundCoverStuff").style.display = "none";
        }
        console.log(allProjects);
    });

    const darkLightToggle = document.getElementById("toggleHolder");
    darkLightToggle.addEventListener('click', (e) => {
        if (document.getElementById("sidebarNamesOnly").className !== "dark-mode") {
            document.getElementById("toggledOff").style.display = "none";
            document.getElementById("toggledOn").style.display = "block";
        } else if (document.getElementById("sidebarNamesOnly").className === "dark-mode") {
            document.getElementById("toggledOff").style.display = "block";
            document.getElementById("toggledOn").style.display = "none";
        };
        (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleDark)();
    })

    // localStorage code under here

    let retrievedProjData = [];
    let retrievedAllData = [];

    if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.retrieveProjects)(retrievedProjData, retrievedAllData);
        console.log(retrievedProjData);
        console.log(retrievedAllData);

        ////////need to check IF there is something besides hidden
        /* retrievedCurrentProjName = retrievedProjData[1].projName;
        currentProjName = retrievedCurrentProjName;
        currentProjIndex = 1; */

        //will need to write if/else to check that there ARE projects and not just allItems, and vice versa
        retrievedProjData.forEach(el => {
            
            var projToBeConstructed = new Project(`${el.projName}`);
            projToBeConstructed.ID = el.ID;
            console.log(el.taskList);
            if (el.taskList !== 0) {
                el.taskList.forEach(em => {
                    console.log("testing the id...." + em.ID);

                    var a = em.title;
                    var b = em.description;
                    var c = em.dueDate;
                    var d = em.priority;
                    var e = em.notes;
                    var f = em.project;

                    var remadeTask = new Item(a, b, c, d, e, f)
                    remadeTask.ID = em.ID;
                    console.log(remadeTask.giveDeets());

                    projToBeConstructed.taskList.push(remadeTask);
                }); 
                //adds each taskList item into remade Project
            }
            console.log(projToBeConstructed);

            if (el.projName === "_hIdDeN") {
                console.log("This is the project that should be hidden..." + el.projName);
                allProjects.unshift(projToBeConstructed);
            } else {
                allProjects.push(projToBeConstructed);
            }

            //sorts by ID, ascending, so that hidden is first
            allProjects.sort(function(a, b){return a.ID - b.ID});

            console.log(`allProjects below`);
            console.log(allProjects);

        });
        retrievedAllData.forEach(en => {

            var a = en.title;
            var b = en.description;
            var c = en.dueDate;
            var d = en.priority;
            var e = en.notes;
            var f = en.project;
            
            var taskToBeMade = new Item(a, b, c, d, e, f)
            taskToBeMade.ID = en.ID;
            console.log(taskToBeMade);
            allItems.push(taskToBeMade);
            console.log(`allItems below`);
            console.log(allItems);
        });

        currentProjName = allProjects[1].projName;
        currentProjIndex = 1;

        allProjects.forEach(proj => {
            console.log("Currently creating the stuff for" + proj.projName);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.addProjToSide)(proj);
            var AP = allProjects;
            var y = proj.ID;
            var z = `${proj.projName}box`;
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(AP, y, z);
        })

        /* var AP = allProjects;
        var y = 0;
        var z = `${retrievedCurrentProjName}box`;
        refreshCenterDOM(AP, y, z); */

        ;(0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);

        //console.log(retrievedData[1].taskList[0]);
        //can go into each proj folder >> taskList >> each task
    } else {
        var hiddenProj = new Project ("_hIdDeN");
        addProjToAll(hiddenProj); 
        (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.addProjToSide)(hiddenProj);
        //"holder" for tasks added in allItems page; currentProjIndex of 0
        var initProj = new Project("My First List");
        addProjToAll(initProj);
        currentProjIndex = allProjects.findIndex((obj) => obj.projName === "My First List");
        currentProjName = allProjects[currentProjIndex].projName;
        console.log(currentProjIndex + currentProjName);
        (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.addProjToSide)(initProj);
        console.log(allProjects);
    }

    

    //don't break if nothing is found in localStorage
    //store each project and it's name (no overwriting! unique)
    //retrieve name

    //storeProject(hiddenProj); testing a stored project
    
    

    //storeProject(initProj);

    //storageTest(); will probably want to add this before storing hidden/initProj to check IF person has already visited
    
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storageTest),
/* harmony export */   "editProjNameFromAllItems": () => (/* binding */ editProjNameFromAllItems),
/* harmony export */   "removeFromAllItems": () => (/* binding */ removeFromAllItems),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeSingleTaskInProj": () => (/* binding */ removeSingleTaskInProj),
/* harmony export */   "retrieveProject": () => (/* binding */ retrieveProject),
/* harmony export */   "retrieveProjects": () => (/* binding */ retrieveProjects),
/* harmony export */   "storeAllItems": () => (/* binding */ storeAllItems),
/* harmony export */   "storeProject": () => (/* binding */ storeProject)
/* harmony export */ });
function storageTest() {
    if (localStorage.length === 0) {
        console.log("No booty to be found");
        //populateStorage();??
        return false;
      } else {
        console.log("There's stuff in here!");
        //localStorage is NOT array, just object
        
        return true;

        /* var retrievedProj = retrieveProject("_hIdDeN");
        var testRetrievalName = retrievedProj.projName;
        console.log('retrievedProject projName: ', testRetrievalName); */
      }
}

function storeAllItems(x) {
  x.forEach(el => {
    localStorage.setItem(`aLlItEmS_${el.ID}`, JSON.stringify(el));
    console.log(`Storing allItems ID of: ${el.ID}`)
  })
}

function storeProject(x) {
  console.log(`what in the world is X? HERE: ${x.projName}`);
  localStorage.setItem(`${x.projName}`, JSON.stringify(x));
}

function removeFromAllItems(originalIdArray) {
  var newIdArray = originalIdArray.slice();
  while (newIdArray.length !== 0) {
    for (var s = 0; s < localStorage.length; s++) {
      if (localStorage.key(s) === `aLlItEmS_${newIdArray[0]}`) {
          console.log("This is what is being removed in removeFromAll: " + newIdArray[0]);
          localStorage.removeItem(`aLlItEmS_${newIdArray[0]}`);
          newIdArray.splice(0, 1);
          break;
      }
    }
  };
  console.log(originalIdArray);
}

/* export function editProjNameFromAllItems(array) {
  var newTestArray = array.slice();
  while (newTestArray.length !== 0) {
    for (var u = 0; u < localStorage.length; u++) {
      if (localStorage.key(u) === `aLlItEmS_${newTestArray[0]}`) {
        console.log("This is what is being edit from allItems in localStorage: " + newTestArray[0]);
        localStorage.removeItem(`aLlItEmS_${newIdArray[0]}`);
        newIdArray.splice(0, 1);
        break;
      }
    }
  }
} */

function editProjNameFromAllItems(x, nameNew) {

  x.forEach(el => {
    var retrievedTask = localStorage.getItem(`aLlItEmS_${el.ID}`);
    var parsedTask = JSON.parse(retrievedTask);
    parsedTask.project = nameNew;
    localStorage.setItem(`aLlItEmS_${el.ID}`, JSON.stringify(el));
    console.log(`RE-storing allItems ID of: ${el.ID} with a new project name of ${nameNew}`);
  })
  //add renaming function back by using constructor again


  /* console.log('retrievedProject AFTER adding: ' +  parsedProject);
  parsedProject.setNewProjName("TestingChange");
  console.log(parsedProject.displayProj());
  console.log("using the fxn: " + parsedProject.giveProjName()); */
}

function removeProject(x) {
  console.log("This is what is being removed in removeProj: " + x)
  localStorage.removeItem(x);
}
/* export function storeTask(x) {
  console.log(`ID for task: ${x.ID}`);
  localStorage.setItem(`${x.ID}`, JSON.stringify(x));
} */

function removeSingleTaskInProj(x, projIndex, AP) {
  console.log(`This task ID of ${x} is what is being removed from project w/ index of ${projIndex}`);
  var indexToBeSpliced = AP[`${projIndex}`]["taskList"].findIndex((obj) => obj.ID == x);
  AP[`${projIndex}`]["taskList"].splice(indexToBeSpliced, 1);
}

function retrieveProjects(someArray, anotherArray) {

  //iterates through localStorage for hidden and all projects
  //these projects do NOT have methods yet
  for (var i = 0; i < localStorage.length; i++) {
    var projRetrieval = localStorage.getItem(localStorage.key(i));
    console.log("This is what I'm going to parse: "+ projRetrieval);
    var parsedProjRetriev = JSON.parse(projRetrieval);

    if (parsedProjRetriev.projName) {
      console.log("projName + ID: " + parsedProjRetriev.projName + " " + parsedProjRetriev.ID);
      someArray.push(parsedProjRetriev);
    } else if (parsedProjRetriev.ID.slice(0,4) === "proj") {
      console.log("ALLITEMS title, deets & ID: " + parsedProjRetriev.title + " " + parsedProjRetriev.description + " " + parsedProjRetriev.ID);
      anotherArray.push(parsedProjRetriev);
    }
  }  
}

function retrieveProject(x) {

    var retrievedProject = localStorage.getItem(`${x}`);
    var parsedProject = JSON.parse(retrievedProject);
    return parsedProject;
    //add renaming function back by using constructor again


    /* console.log('retrievedProject AFTER adding: ' +  parsedProject);
    parsedProject.setNewProjName("TestingChange");
    console.log(parsedProject.displayProj());
    console.log("using the fxn: " + parsedProject.giveProjName()); */
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVks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RDtBQUNBO0FBQ0EscUNBQXFDLE1BQU07QUFDM0MsOENBQThDLE9BQU8sNkJBQTZCLFFBQVE7QUFDMUYsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLDBCQUEwQixLQUFLO0FBQy9CLEVBQUU7O0FBRUs7QUFDUCxpQ0FBaUMsR0FBRyxvREFBb0QsVUFBVTtBQUNsRywrQkFBK0IsVUFBVTtBQUN6QyxRQUFRLFVBQVU7QUFDbEI7O0FBRU87O0FBRVA7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQLG1EQUFtRCxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlVG9Ob3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9zcmMvRE9NdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL3NyYy9sb2dpY3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9zcmMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBUcnlpbmcgbW9iaWxlIGZpcnN0IGRldiAqL1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjZjViMzE2O1xcbiAgICAtLXNlY29uZGFyeTogIzhkOGQ4ZDtcXG4gICAgLS10ZXJ0aWFyeTogIzY2NzI5MjtcXG4gICAgLS1xdWF0ZXJuYXJ5OiAjZDlkOWQ5O1xcbn1cXG5cXG5odG1sLCBib2R5LCAjb3ZlcmFsbFdyYXBwZXIge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYmFja2dyb3VuZENvdmVyU3R1ZmYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7XFxuICAgIHotaW5kZXg6IDEyO1xcbn1cXG5cXG4jbm90QmFja2dyb3VuZENvdmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUlIDk1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNjUlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG4jaGVhZGVyLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbiNoZWFkZXJJY29uSG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3RvZ2dsZWRPbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNkYXJrQ291bnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jaGVhZGVySWNvbkhvbGRlciBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuI3NpZGViYXJOYW1lc09ubHkge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07ICovXFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG5cXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jc2lkZWJhck5hbWVzT25seSA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuW2lkXj1cXFwiX2hJZERlTlxcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG4jY29udGVudC5kYXJrLW1vZGUsICNzaWRlYmFyTmFtZXNPbmx5LmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcbiNhbGxUYXNrc0JveCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbmRpdi5hZGRlZF9wcm9qZWN0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5kaXYuYWRkZWRfcHJvamVjdHMuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB3aGl0ZTtcXG59XFxuXFxuZGl2I3N0b3BBbGxFbXB0eSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5kaXYjc3RvcEFsbEVtcHR5ID4gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2I3N0b3BBbGxFbXB0eSA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCByZ2IoMCwwLDAsMC42KTtcXG59XFxuXFxuZGl2I3N0b3BBbGxFbXB0eSA+IGJ1dHRvbi5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG5cXG4uZWFjaFNpZGViYXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggcmdiKDAsMCwwLDAuNik7XFxufVxcblxcbi5lYWNoU2lkZWJhckNvbnRhaW5lci5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNik7XFxufVxcblxcbmRpdi5zaWRlYmFyX05hbWVzIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuZGl2LnNpZGViYXJfTmFtZV9lZGl0IHtcXG4gICAgZm9udC1zaXplOiAgY2xhbXAoMC4ycmVtLCAxcmVtLCAxLjFyZW0pO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICB0b3A6IDNweDtcXG4gICAgcmlnaHQ6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5zaWRlYmFyX05hbWVfcmVtb3ZlIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjJyZW0sIDFyZW0sIDEuMXJlbSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGJvdHRvbTogM3B4O1xcbiAgICByaWdodDogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2W2lkJD1cXFwiSGlnaFxcXCJdLCBkaXZbaWQkPVxcXCJIaWdoX0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDEyMCwgMTIwKTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiTWVkaXVtXFxcIl0sIGRpdltpZCQ9XFxcIk1lZGl1bV9BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxOTMsIDM2KTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiTG93XFxcIl0sIGRpdltpZCQ9XFxcIkxvd19BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI5LCAyNTAsIDMwKTtcXG59XFxuXFxuaDMuYWRkZWRfcHJval9ib3guZGFyay1tb2RlLCBkaXYuYWRkZWRfdGFza3MuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuaDMuYWRkZWRfcHJval9ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xcbn1cXG5cXG5kaXYuYWRkZWRfdGFza3Mge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1dmgpIG1pbm1heCgyNSUsIDFmcik7XFxufVxcblxcbmRpdi5hZGRlZF90YXNrcyA+IGg0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2Lm5vd1lvdVNlZU1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmRpdi5hZGRlZF9kdWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmRpdi50YXNrX2J1dHRvbl9ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuZGl2LnRhc2tfYnV0dG9uX2hvbGRlciA+IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjJweDtcXG59XFxuXFxuZGl2LnRoZUV4cGFuZGFibGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIG1heC1oZWlnaHQ6IDB2aDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBcXG59XFxuXFxuZGl2LnRoZUV4cGFuZGFibGVzLmFjdGl2ZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDh2aDtcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMTAsIDIwNCk7ICovXFxufVxcbi8qIEJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIGZvcm1zIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcblxcbiNidXR0b25Ib2xkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm90dG9tOiAyNXB4O1xcbiAgICByaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI3dnc7XFxufVxcbiNhZGRuZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDRweCAycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHdpZHRoOiAyN3Z3O1xcbn1cXG4gIFxcbiNuZXdwcm9qX2J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNHB4IDJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDI3dnc7XFxufVxcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4jdG9kb0Zvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE1O1xcbn1cXG4gIFxcbiNwcm9qRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNTtcXG59XFxuICBcXG4jZWRpdEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE1O1xcbn1cXG5cXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xcbiNhZGRuZXdmb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZG5ld2Zvcm0uZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jYWRkbmV3cHJvamZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZG5ld3Byb2pmb3JtLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDQpLCAjYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoNSkge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbiNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCgzKSA+IGlucHV0LCAjYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBzZWxlY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcbiAgXFxuI2VkaXRGb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VkaXRGb3JtLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCg0KSwgI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG5cXG4jZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgbWFyZ2luOiAycHg7XFxufVxcblxcbiNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoMykgPiBpbnB1dCwgI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IHNlbGVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG59XFxuICBcXG4gIC8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2FkZG5ld2Zvcm0gdGV4dGFyZWEsICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjZWRpdEZvcm0gdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwIDhweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbiNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMTJweCAwIDEycHggMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4jYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciwgI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyLCAjYWRkbmV3Zm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjZWRpdEZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcXG59XFxuICBcXG4vKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cXG4jYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAjYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgI2FkZG5ld2Zvcm0gdGV4dGFyZWE6Zm9jdXMsICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAjZWRpdEZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4gIFxcbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0L2xvZ2luIGJ1dHRvbiAqL1xcbiNhZGRuZXdmb3JtIGJ1dHRvbiwgI2VkaXRGb3JtIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiNhZGRuZXdwcm9qZm9ybSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIG9wYWNpdHk6IDAuODsgXFxufVxcbiAgXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cXG4jYWRkbmV3Zm9ybSBidXR0b24jY2FuY2VsX2J1dHRvbiwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbiNuZXdwcm9qX2NhbmNlbCwgI2VkaXRGb3JtIGJ1dHRvbiNjYW5jZWxFZGl0QnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcbiAgXFxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXFxuI2FkZG5ld2Zvcm0gIGJ1dHRvbjpob3ZlciwgI2FkZG5ldzpob3ZlciwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbjpob3ZlciwgI25ld3Byb2pfYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuaW5wdXQjdGl0bGUubmVlZHNGaWxsaW5nLCAjZGVzY3JpcHRpb24ubmVlZHNGaWxsaW5nIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxOSwgNTQsIDU0KTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbmlucHV0LmRhcmstbW9kZSwgdGV4dGFyZWEuZGFyay1tb2RlLCBzZWxlY3QuZGFyay1tb2RlLFxcbiNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF0uZGFyay1tb2RlLCAjYWRkbmV3Zm9ybSB0ZXh0YXJlYS5kYXJrLW1vZGUsICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdLmRhcmstbW9kZSwgI2VkaXRGb3JtIHRleHRhcmVhLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgKi9cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDdweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogcmdiKDE5MCwgMTkwLCAxOTApO1xcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDMsIDEwMywgMTAzKTtcXG59XFxuXFxuLyogc21hbGwgdGFibGV0IHNpemVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjIwcHgpIHtcXG5cXG4gICAgZGl2I3N0b3BBbGxFbXB0eSB7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIH1cXG4gICAgZGl2I3N0b3BBbGxFbXB0eSA+IGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDUuMjV2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxuICAgIC5lYWNoU2lkZWJhckNvbnRhaW5lciB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHJnYigwLDAsMCwwLjYpO1xcbiAgICB9XFxuICAgIGRpdi5hZGRlZF9wcm9qZWN0cyB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBkaXYuYWRkZWRfdGFza3Mge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuICAgIGRpdi50YXNrX2J1dHRvbl9ob2xkZXIgPiBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxuICAgIGRpdi5zaWRlYmFyX05hbWVfZWRpdCB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgMS4ycmVtLCAxLjRyZW0pO1xcbiAgICB9XFxuICAgIGRpdi5zaWRlYmFyX05hbWVfcmVtb3ZlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC41cmVtLCAxLjJyZW0sIDEuNHJlbSk7XFxuICAgIH1cXG4gICAgZGl2LnNpZGViYXJfTmFtZXMge1xcbiAgICAgICAgd2lkdGg6IDkyJTtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuLyogbGFyZ2UgdGFibGV0ICYgbGFwdG9wIHNpemVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gICAgXFxufVxcblxcbi8qIGRlc2t0b3AgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgXFxufVxcblxcbi8qTXkgaW5pdGlhbCBjb2RlIGJlbG93IGZvciBkZXNrdG9wKi9cXG5cXG4vKiBodG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyTmFtZXNPbmx5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIHdpZHRoOiAyNXZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiA1dmg7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjb3JhbDtcXG59XFxuXFxuI2FsbFRhc2tzQm94IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuZGl2LmFkZGVkX3Byb2plY3RzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5lYWNoU2lkZWJhckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgY29yYWw7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI1LCAxMjYpO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJIaWdoXFxcIl0sIGRpdltpZCQ9XFxcIkhpZ2hfQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgNDEsIDQxKTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiTWVkaXVtXFxcIl0sIGRpdltpZCQ9XFxcIk1lZGl1bV9BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyMzgsIDApO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJMb3dcXFwiXSwgZGl2W2lkJD1cXFwiTG93X0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0MywgMjMzLCAwKTtcXG59XFxuXFxuaDMuYWRkZWRfcHJval9ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTksIDI0Mik7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAycztcXG59XFxuXFxuZGl2LmFkZGVkX3Rhc2tzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODksIDEwMyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDV2aCkgbWlubWF4KDI1JSwgMWZyKTtcXG59XFxuXFxuZGl2LmFkZGVkX3Rhc2tzID4gaDQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYubm93WW91U2VlTWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxufVxcblxcbmRpdi5hZGRlZF9kdWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmRpdi50YXNrX2J1dHRvbl9ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuZGl2LnRhc2tfYnV0dG9uX2hvbGRlciA+IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuZGl2LnRoZUV4cGFuZGFibGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIG1heC1oZWlnaHQ6IDB2aDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCAxMDMpO1xcblxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgXFxufVxcblxcbmRpdi50aGVFeHBhbmRhYmxlcy5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXgtaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDExMCwgMjA0KTtcXG59ICovXFxuXFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgZm9ybXMgLSBmaXhlZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlICovXFxuLyogI2FkZG5ldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyM3B4O1xcbiAgcmlnaHQ6IDI4cHg7XFxuICB3aWR0aDogMTB2dztcXG59XFxuXFxuI25ld3Byb2pfYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAyM3B4O1xcbiAgICBsZWZ0OiAyOHB4O1xcbiAgICB3aWR0aDogMTB2dztcXG59ICovXFxuXFxuLyogVGhlIHBvcHVwIGZvcm0gLSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbi8qICN0b2RvRm9ybUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgd2lkdGg6IDEzdnc7XFxuICB6LWluZGV4OiA5O1xcbn1cXG5cXG4jcHJvakZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gICAgd2lkdGg6IDEzdnc7XFxuICAgIHotaW5kZXg6IDk7XFxuICB9XFxuXFxuI2VkaXRGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgICB3aWR0aDogMTN2dztcXG4gICAgei1pbmRleDogOTtcXG4gIH1cXG4gKi9cXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xcbi8qICNhZGRuZXdmb3JtLCAjYWRkbmV3cHJvamZvcm0ge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VkaXRGb3JtIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufSAqL1xcblxcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuLyogI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4jZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW46IDVweCAwIDIycHggMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn0gKi9cXG5cXG4vKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cXG4vKiAjYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAjYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59ICovXFxuXFxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXFxuLyogI2FkZG5ld2Zvcm0gYnV0dG9uLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG59ICovXFxuXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cXG4vKiAjYWRkbmV3Zm9ybSBidXR0b24jY2FuY2VsX2J1dHRvbiwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbiNuZXdwcm9qX2NhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufSAqL1xcblxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbi8qICNhZGRuZXdmb3JtICBidXR0b246aG92ZXIsICNhZGRuZXc6aG92ZXIsICNhZGRuZXdwcm9qZm9ybSBidXR0b246aG92ZXIsICNuZXdwcm9qX2J1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtB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QkFBNEI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUgsNENBQTRDO0FBQzVDOzs7R0FHRzs7QUFFSCw0Q0FBNEM7QUFDNUM7Ozs7Ozs7OztHQVNHOztBQUVILG9EQUFvRDtBQUNwRDs7R0FFRzs7QUFFSCxzQ0FBc0M7QUFDdEM7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFRyeWluZyBtb2JpbGUgZmlyc3QgZGV2ICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6ICNmNWIzMTY7XFxuICAgIC0tc2Vjb25kYXJ5OiAjOGQ4ZDhkO1xcbiAgICAtLXRlcnRpYXJ5OiAjNjY3MjkyO1xcbiAgICAtLXF1YXRlcm5hcnk6ICNkOWQ5ZDk7XFxufVxcblxcbmh0bWwsIGJvZHksICNvdmVyYWxsV3JhcHBlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNiYWNrZ3JvdW5kQ292ZXJTdHVmZiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC44KTtcXG4gICAgei1pbmRleDogMTI7XFxufVxcblxcbiNub3RCYWNrZ3JvdW5kQ292ZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNSUgOTUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1JSA2NSU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbiNoZWFkZXIuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuI2hlYWRlckljb25Ib2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jdG9nZ2xlZE9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2RhcmtDb3VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNoZWFkZXJJY29uSG9sZGVyIGgzIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4jc2lkZWJhck5hbWVzT25seSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTsgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcblxcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxufVxcblxcbiNzaWRlYmFyTmFtZXNPbmx5ID4gZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG5baWRePVxcXCJfaElkRGVOXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcbiNjb250ZW50LmRhcmstbW9kZSwgI3NpZGViYXJOYW1lc09ubHkuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuI2FsbFRhc2tzQm94IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuZGl2LmFkZGVkX3Byb2plY3RzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmRpdi5hZGRlZF9wcm9qZWN0cy5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHdoaXRlO1xcbn1cXG5cXG5kaXYjc3RvcEFsbEVtcHR5IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmRpdiNzdG9wQWxsRW1wdHkgPiBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYjc3RvcEFsbEVtcHR5ID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IHJnYigwLDAsMCwwLjYpO1xcbn1cXG5cXG5kaXYjc3RvcEFsbEVtcHR5ID4gYnV0dG9uLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcblxcbi5lYWNoU2lkZWJhckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCByZ2IoMCwwLDAsMC42KTtcXG59XFxuXFxuLmVhY2hTaWRlYmFyQ29udGFpbmVyLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC42KTtcXG59XFxuXFxuZGl2LnNpZGViYXJfTmFtZXMge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG5kaXYuc2lkZWJhcl9OYW1lX2VkaXQge1xcbiAgICBmb250LXNpemU6ICBjbGFtcCgwLjJyZW0sIDFyZW0sIDEuMXJlbSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIHRvcDogM3B4O1xcbiAgICByaWdodDogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2LnNpZGViYXJfTmFtZV9yZW1vdmUge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuMnJlbSwgMXJlbSwgMS4xcmVtKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgYm90dG9tOiAzcHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJIaWdoXFxcIl0sIGRpdltpZCQ9XFxcIkhpZ2hfQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTIwLCAxMjApO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJNZWRpdW1cXFwiXSwgZGl2W2lkJD1cXFwiTWVkaXVtX0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDE5MywgMzYpO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJMb3dcXFwiXSwgZGl2W2lkJD1cXFwiTG93X0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjksIDI1MCwgMzApO1xcbn1cXG5cXG5oMy5hZGRlZF9wcm9qX2JveC5kYXJrLW1vZGUsIGRpdi5hZGRlZF90YXNrcy5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG5oMy5hZGRlZF9wcm9qX2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XFxufVxcblxcbmRpdi5hZGRlZF90YXNrcyB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDV2aCkgbWlubWF4KDI1JSwgMWZyKTtcXG59XFxuXFxuZGl2LmFkZGVkX3Rhc2tzID4gaDQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYubm93WW91U2VlTWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuZGl2LmFkZGVkX2R1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuZGl2LnRhc2tfYnV0dG9uX2hvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG5kaXYudGFza19idXR0b25faG9sZGVyID4gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG5kaXYudGhlRXhwYW5kYWJsZXMge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgbWF4LWhlaWdodDogMHZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIFxcbn1cXG5cXG5kaXYudGhlRXhwYW5kYWJsZXMuYWN0aXZlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWluLWhlaWdodDogOHZoO1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDExMCwgMjA0KTsgKi9cXG59XFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgZm9ybXMgLSBmaXhlZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlICovXFxuXFxuI2J1dHRvbkhvbGRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3R0b206IDI1cHg7XFxuICAgIHJpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjd2dztcXG59XFxuI2FkZG5ldyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNHB4IDJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDI3dnc7XFxufVxcbiAgXFxuI25ld3Byb2pfYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogMjd2dztcXG59XFxuXFxuLyogVGhlIHBvcHVwIGZvcm0gLSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiN0b2RvRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTU7XFxufVxcbiAgXFxuI3Byb2pGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE1O1xcbn1cXG4gIFxcbiNlZGl0Rm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTU7XFxufVxcblxcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXFxuI2FkZG5ld2Zvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkbmV3Zm9ybS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNhZGRuZXdwcm9qZm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkbmV3cHJvamZvcm0uZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoNCksICNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDMpID4gaW5wdXQsICNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IHNlbGVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG59XFxuICBcXG4jZWRpdEZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZWRpdEZvcm0uZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpLCAjZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgbWFyZ2luOiA0cHg7XFxufVxcblxcbiNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBtYXJnaW46IDJweDtcXG59XFxuXFxuI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCgzKSA+IGlucHV0LCAjZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gc2VsZWN0IHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG4gIFxcbiAgLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cXG4jYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjYWRkbmV3Zm9ybSB0ZXh0YXJlYSwgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0sICNlZGl0Rm9ybSB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgOHB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAxMnB4IDAgMTJweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbiNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyLCAjYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIsICNhZGRuZXdmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciwgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0sICNlZGl0Rm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xcbn1cXG4gIFxcbi8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbiNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAjYWRkbmV3Zm9ybSB0ZXh0YXJlYTpmb2N1cywgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICNlZGl0Rm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbiAgXFxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXFxuI2FkZG5ld2Zvcm0gYnV0dG9uLCAjZWRpdEZvcm0gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgb3BhY2l0eTogMC44OyBcXG59XFxuICBcXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbiNhZGRuZXdmb3JtIGJ1dHRvbiNjYW5jZWxfYnV0dG9uLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uI25ld3Byb2pfY2FuY2VsLCAjZWRpdEZvcm0gYnV0dG9uI2NhbmNlbEVkaXRCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuICBcXG4vKiBBZGQgc29tZSBob3ZlciBlZmZlY3RzIHRvIGJ1dHRvbnMgKi9cXG4jYWRkbmV3Zm9ybSAgYnV0dG9uOmhvdmVyLCAjYWRkbmV3OmhvdmVyLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uOmhvdmVyLCAjbmV3cHJval9idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5pbnB1dCN0aXRsZS5uZWVkc0ZpbGxpbmcsICNkZXNjcmlwdGlvbi5uZWVkc0ZpbGxpbmcge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE5LCA1NCwgNTQpO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuaW5wdXQuZGFyay1tb2RlLCB0ZXh0YXJlYS5kYXJrLW1vZGUsIHNlbGVjdC5kYXJrLW1vZGUsXFxuI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XS5kYXJrLW1vZGUsICNhZGRuZXdmb3JtIHRleHRhcmVhLmRhcmstbW9kZSwgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0uZGFyay1tb2RlLCAjZWRpdEZvcm0gdGV4dGFyZWEuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcbi8qIFNjcm9sbGJhciAqL1xcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogN3B4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTkwLCAxOTAsIDE5MCk7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEwMywgMTAzLCAxMDMpO1xcbn1cXG5cXG4vKiBzbWFsbCB0YWJsZXQgc2l6ZXMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjBweCkge1xcblxcbiAgICBkaXYjc3RvcEFsbEVtcHR5IHtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgfVxcbiAgICBkaXYjc3RvcEFsbEVtcHR5ID4gYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogNS4yNXZoO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIH1cXG4gICAgLmVhY2hTaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggcmdiKDAsMCwwLDAuNik7XFxuICAgIH1cXG4gICAgZGl2LmFkZGVkX3Byb2plY3RzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuICAgIGRpdi5hZGRlZF90YXNrcyB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH1cXG4gICAgZGl2LnRhc2tfYnV0dG9uX2hvbGRlciA+IGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG4gICAgZGl2LnNpZGViYXJfTmFtZV9lZGl0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC41cmVtLCAxLjJyZW0sIDEuNHJlbSk7XFxuICAgIH1cXG4gICAgZGl2LnNpZGViYXJfTmFtZV9yZW1vdmUge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDEuMnJlbSwgMS40cmVtKTtcXG4gICAgfVxcbiAgICBkaXYuc2lkZWJhcl9OYW1lcyB7XFxuICAgICAgICB3aWR0aDogOTIlO1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG4vKiBsYXJnZSB0YWJsZXQgJiBsYXB0b3Agc2l6ZXMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xcbiAgICBcXG59XFxuXFxuLyogZGVza3RvcCAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICBcXG59XFxuXFxuLypNeSBpbml0aWFsIGNvZGUgYmVsb3cgZm9yIGRlc2t0b3AqL1xcblxcbi8qIGh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXJOYW1lc09ubHkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3JlbTtcXG4gICAgd2lkdGg6IDI1dnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZy10b3A6IDV2aDtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNvcmFsO1xcbn1cXG5cXG4jYWxsVGFza3NCb3gge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG5kaXYuYWRkZWRfcHJvamVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLmVhY2hTaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjb3JhbDtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjUsIDEyNik7XFxufVxcblxcbmRpdltpZCQ9XFxcIkhpZ2hcXFwiXSwgZGl2W2lkJD1cXFwiSGlnaF9BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA0MSwgNDEpO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJNZWRpdW1cXFwiXSwgZGl2W2lkJD1cXFwiTWVkaXVtX0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDIzOCwgMCk7XFxufVxcblxcbmRpdltpZCQ9XFxcIkxvd1xcXCJdLCBkaXZbaWQkPVxcXCJMb3dfQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQzLCAyMzMsIDApO1xcbn1cXG5cXG5oMy5hZGRlZF9wcm9qX2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1OSwgMjQyKTtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xcbn1cXG5cXG5kaXYuYWRkZWRfdGFza3Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4OSwgMTAzKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNXZoKSBtaW5tYXgoMjUlLCAxZnIpO1xcbn1cXG5cXG5kaXYuYWRkZWRfdGFza3MgPiBoNCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5ub3dZb3VTZWVNZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuZGl2LmFkZGVkX2R1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuZGl2LnRhc2tfYnV0dG9uX2hvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG5kaXYudGFza19idXR0b25faG9sZGVyID4gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5kaXYudGhlRXhwYW5kYWJsZXMge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgbWF4LWhlaWdodDogMHZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODksIDEwMyk7XFxuXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBcXG59XFxuXFxuZGl2LnRoZUV4cGFuZGFibGVzLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1heC1oZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTEwLCAyMDQpO1xcbn0gKi9cXG5cXG4vKiBCdXR0b24gdXNlZCB0byBvcGVuIHRoZSBmb3JtcyAtIGZpeGVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgKi9cXG4vKiAjYWRkbmV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIzcHg7XFxuICByaWdodDogMjhweDtcXG4gIHdpZHRoOiAxMHZ3O1xcbn1cXG5cXG4jbmV3cHJval9idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIzcHg7XFxuICAgIGxlZnQ6IDI4cHg7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbn0gKi9cXG5cXG4vKiBUaGUgcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuLyogI3RvZG9Gb3JtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMTVweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XFxuICB3aWR0aDogMTN2dztcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbiNwcm9qRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgICB3aWR0aDogMTN2dztcXG4gICAgei1pbmRleDogOTtcXG4gIH1cXG5cXG4jZWRpdEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XFxuICAgIHdpZHRoOiAxM3Z3O1xcbiAgICB6LWluZGV4OiA5O1xcbiAgfVxcbiAqL1xcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXFxuLyogI2FkZG5ld2Zvcm0sICNhZGRuZXdwcm9qZm9ybSB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZWRpdEZvcm0ge1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59ICovXFxuXFxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cXG4vKiAjYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDVweCAwIDIycHggMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbiNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufSAqL1xcblxcbi8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbi8qICNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn0gKi9cXG5cXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9sb2dpbiBidXR0b24gKi9cXG4vKiAjYWRkbmV3Zm9ybSBidXR0b24sICNhZGRuZXdwcm9qZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgb3BhY2l0eTogMC44O1xcbn0gKi9cXG5cXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbi8qICNhZGRuZXdmb3JtIGJ1dHRvbiNjYW5jZWxfYnV0dG9uLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uI25ld3Byb2pfY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59ICovXFxuXFxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXFxuLyogI2FkZG5ld2Zvcm0gIGJ1dHRvbjpob3ZlciwgI2FkZG5ldzpob3ZlciwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbjpob3ZlciwgI25ld3Byb2pfYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgb2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIDtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vYXNzaWduL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgb2JqZWN0KTtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwidmFyIHJvdW5kaW5nTWFwID0ge1xuICBjZWlsOiBNYXRoLmNlaWwsXG4gIHJvdW5kOiBNYXRoLnJvdW5kLFxuICBmbG9vcjogTWF0aC5mbG9vcixcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfSAvLyBNYXRoLnRydW5jIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblxufTtcbnZhciBkZWZhdWx0Um91bmRpbmdNZXRob2QgPSAndHJ1bmMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gbWV0aG9kID8gcm91bmRpbmdNYXBbbWV0aG9kXSA6IHJvdW5kaW5nTWFwW2RlZmF1bHRSb3VuZGluZ01ldGhvZF07XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGF0ZUxlZnQpLmdldFRpbWUoKSAtIHRvRGF0ZShkYXRlUmlnaHQpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzTGFzdERheU9mTW9udGggZnJvbSBcIi4uL2lzTGFzdERheU9mTW9udGgvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyB1c2luZyB0cnVuYyBhcyBhIGRlZmF1bHQgcm91bmRpbmcgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7IC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcblxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG5cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcblxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjsgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG5cbiAgICBpZiAoaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGlydHlEYXRlTGVmdCkpICYmIGRpZmZlcmVuY2UgPT09IDEgJiYgY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAxKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH0gLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG5cblxuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vX2xpYi9hc3NpZ24vaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlOVVRFU19JTl9EQVkgPSAxNDQwO1xudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9UV09fTU9OVEhTID0gODY0MDA7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlO1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBhc3NpZ24oY2xvbmVPYmplY3Qob3B0aW9ucyksIHtcbiAgICBhZGRTdWZmaXg6IEJvb2xlYW4ob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZFN1ZmZpeCksXG4gICAgY29tcGFyaXNvbjogY29tcGFyaXNvblxuICB9KTtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciBtb250aHM7IC8vIDAgdXAgdG8gMiBtaW5zXG5cbiAgaWYgKG1pbnV0ZXMgPCAyKSB7XG4gICAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgNSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2hhbGZBTWludXRlJywgMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpOyAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcblxuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMjtcbiAgICB2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTsgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG5cbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgZGlzdGFuY2VJbldvcmRzIGZyb20gXCIuLi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVRvTm93XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSB0byBub3cgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgc3BlY2lmaWVzIGlmIG5vdyBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIHBhc3NlZCBkYXRlXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LCB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICB7aW5jbHVkZVNlY29uZHM6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNiwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICB7YWRkU3VmZml4OiB0cnVlfVxuICogKVxuICogLy89PiAnaW4gYWJvdXQgMSB5ZWFyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgQXVndXN0IDIwMTYgaW4gRXNwZXJhbnRvP1xuICogY29uc3QgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgNywgMSksXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vdyhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBkaXN0YW5jZUluV29yZHMoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCIuLi9lbmRPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gZW5kT2ZEYXkoZGF0ZSkuZ2V0VGltZSgpID09PSBlbmRPZk1vbnRoKGRhdGUpLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2pUb1NpZGUoeCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gICAgY29uc3Qgc2lkZWJhck5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTmFtZXNPbmx5XCIpO1xuICAgIGNvbnN0IHNpZGViYXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvQWRkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZWRpdFByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYW1lUmVtb3ZlUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9BZGRQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuZXdQcm9qQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIFxuICAgIFxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtDb3VudFwiKS5pbm5lckhUTUwgJSAyID09PSAwKSB7XG4gICAgICAgIHNpZGViYXJIb2xkZXIuY2xhc3NOYW1lID0gXCJlYWNoU2lkZWJhckNvbnRhaW5lciBkYXJrLW1vZGVcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJIb2xkZXIuY2xhc3NOYW1lID0gXCJlYWNoU2lkZWJhckNvbnRhaW5lclwiO1xuICAgIH0gICBcbiAgICBcblxuICAgIHRvQWRkTmFtZS5jbGFzc05hbWUgPSBcInNpZGViYXJfTmFtZXNcIjtcbiAgICB0b0FkZE5hbWUuaWQgPSB4LnByb2pOYW1lICsgXCJzaWRlTmFtZVwiO1xuICAgIHRvQWRkTmFtZS5pbm5lckhUTUwgPSB4LnByb2pOYW1lO1xuXG4gICAgbmFtZVJlbW92ZVByb2ouY2xhc3NOYW1lID0gXCJzaWRlYmFyX05hbWVfcmVtb3ZlXCI7XG4gICAgbmFtZVJlbW92ZVByb2ouaWQgPSB4LnByb2pOYW1lICsgXCJyZW1vdmVzZWxmXCI7XG4gICAgbmFtZVJlbW92ZVByb2ouaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS10cmFzaC1jYW4nPjwvaT5cIjtcblxuICAgIGVkaXRQcm9qTmFtZS5jbGFzc05hbWUgPSBcInNpZGViYXJfTmFtZV9lZGl0XCI7XG4gICAgZWRpdFByb2pOYW1lLmlkID0geC5wcm9qTmFtZSArIFwiZWRpdHNlbGZcIjtcbiAgICBlZGl0UHJvak5hbWUuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlJz48L2k+XCI7XG5cbiAgICB0b0FkZFByb2ouY2xhc3NOYW1lID0gXCJhZGRlZF9wcm9qZWN0c1wiO1xuICAgIHRvQWRkUHJvai5pZCA9IHgucHJvak5hbWU7XG4gICAgdG9BZGRQcm9qLmlubmVySFRNTCA9IHgucHJvak5hbWU7XG5cbiAgICBuZXdQcm9qQm94LmNsYXNzTmFtZSA9IFwiYWRkZWRfcHJval9ib3hcIjtcbiAgICBuZXdQcm9qQm94LmlkID0geC5wcm9qTmFtZSArIFwiYm94XCI7XG5cbiAgICBzaWRlYmFyTmFtZXMuYXBwZW5kQ2hpbGQoc2lkZWJhckhvbGRlcik7XG4gICAgc2lkZWJhckhvbGRlci5hcHBlbmRDaGlsZCh0b0FkZE5hbWUpO1xuICAgIHNpZGViYXJIb2xkZXIuYXBwZW5kQ2hpbGQoZWRpdFByb2pOYW1lKTtcbiAgICBzaWRlYmFySG9sZGVyLmFwcGVuZENoaWxkKG5hbWVSZW1vdmVQcm9qKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvQWRkUHJvaik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qQm94KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5ld1NpZGVOYW1lcyhvbGROYW1lLCBuZXdQcm9qTmFtZSkge1xuICAgIC8vY2hhbmdlIElEIG9mIHNpZGViYXIgbmFtZSBvbiBET00gZWxlbWVudCAmIGFsbCB0aGUgcmVzcGVjdGl2ZSBidXR0b25zXG4gICAgLy9jaGFuZ2UgZGlzcGxheSBzbyB0aGF0IHlvdSBjYW4gU0VFIG5ldyBwcm9qZWN0IG5hbWVcbiAgICBjb25zb2xlLmxvZyhvbGROYW1lKTtcbiAgICB2YXIgdG9DaGFuZ2VJZEFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2lkKj0ke0NTUy5lc2NhcGUob2xkTmFtZSl9XWApO1xuICAgIGNvbnNvbGUubG9nKHRvQ2hhbmdlSWRBcnJheSk7XG4gICAgdG9DaGFuZ2VJZEFycmF5LmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZiAoZWwuY2xhc3NOYW1lID09PSBcInNpZGViYXJfTmFtZXNcIikge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gYCR7bmV3UHJvak5hbWV9YDtcbiAgICAgICAgfSBlbHNlIGlmIChlbC5jbGFzc05hbWUgPT09IFwiYWRkZWRfcHJvamVjdHNcIikge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gYCR7bmV3UHJvak5hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RySG9sZGVyID0gZWwuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0ckhvbGRlcik7XG4gICAgICAgIGVsLmlkID0gc3RySG9sZGVyLnJlcGxhY2UoYCR7b2xkTmFtZX1gLCBgJHtuZXdQcm9qTmFtZX1gKTtcbiAgICAgICAgXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWVBbGwoYWxsKSB7XG5cbiAgICBjb25zdCBwcm9qQ29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gICAgY29uc3QgYWxsSXRlbXNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFRhc2tzQm94XCIpO1xuXG4gICAgYWxsSXRlbXNCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwcm9qQ29udGVudHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICAgIC8vcmVtZW1iZXIgdGhhdCBkYXRlIGdvZXMgYnkgeXl5eS9tbS9kZCAmIEphbiBpcyAwIVxuICAgIGZ1bmN0aW9uIGR1ZUluKGcpIHtcbiAgICAgICAgLy9jaGFuZ2UgeXl5eS1tbS1kZCB0byB5eXl5bW1kZFxuICAgICAgICB2YXIgd2hlbkl0c0R1ZSA9IGcuZHVlRGF0ZS5yZXBsYWNlKC8tfFxccy9nLCBcIlwiKTtcbiAgICAgICAgdmFyIHl5eXkgPSB3aGVuSXRzRHVlLnNsaWNlKDAsIDQpO1xuICAgICAgICB2YXIgbW0gPSBOdW1iZXIod2hlbkl0c0R1ZS5zbGljZSg0LCA2KSkgLSAxO1xuICAgICAgICB2YXIgZGQgPSBOdW1iZXIod2hlbkl0c0R1ZS5zbGljZSg2KSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICAgICAgICAgICAgbmV3IERhdGUoeXl5eSwgbW0sIGRkKSxcbiAgICAgICAgICAgIHthZGRTdWZmaXg6IHRydWV9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlIHRoZSBhbHRlcmF0aW9uIFwiICsgcmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdC5zbGljZSgtMykgPT09IFwiYWdvXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFwiVG9kYXlcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHRoZSBhbHRlcmF0aW9uIFwiICsgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgd2hpbGUgKGFsbEl0ZW1zQm94Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgYWxsSXRlbXNCb3gucmVtb3ZlQ2hpbGQoYWxsSXRlbXNCb3gubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgdGhlIHRhc2tzIGZyb20gYWxsSXRlbXNCb3hcIilcbiAgICB9O1xuICAgIGFsbC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICB2YXIgZHVlSW5SZXN1bHQgPSBkdWVJbihlbCk7XG4gICAgICAgIGNvbnN0IHRvQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJlbW92ZVNlbGZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBleHBhbmRTZWxmQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgZWRpdFNlbGZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByZWFkaWx5U2VlbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBleHBhbmRhYmxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGV4cGFuZEJ0bkNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5cblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrQ291bnRcIikuaW5uZXJIVE1MICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgdG9BZGRUYXNrLmNsYXNzTmFtZSA9IFwiYWRkZWRfdGFza3MgZGFyay1tb2RlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0FkZFRhc2suY2xhc3NOYW1lID0gXCJhZGRlZF90YXNrc1wiO1xuICAgICAgICB9O1xuICAgICAgICB0b0FkZFRhc2suaWQgPSBgJHtlbC5JRH1fJHtlbC5wcmlvcml0eX1fQWxsUGFnZWA7XG5cbiAgICAgICAgcmVhZGlseVNlZW5Db250ZW50LmNsYXNzTmFtZSA9IFwibm93WW91U2VlTWVcIjtcbiAgICAgICAgcmVhZGlseVNlZW5Db250ZW50LmlubmVySFRNTCA9IGAke2VsLnRpdGxlfTxicj48YnI+RHVlIERhdGU6ICR7ZWwuZHVlRGF0ZX1gO1xuXG4gICAgICAgIGV4cGFuZGFibGVDb250ZW50LmNsYXNzTmFtZSA9IFwidGhlRXhwYW5kYWJsZXNcIjtcbiAgICAgICAgZXhwYW5kYWJsZUNvbnRlbnQuaWQgPSBgJHtlbC5JRH1fZXhwYW5kTWVfQWxsUGFnZWA7XG4gICAgICAgIGV4cGFuZGFibGVDb250ZW50LmlubmVySFRNTCA9IGBEZXNjcmlwdGlvbjogJHtlbC5kZXNjcmlwdGlvbn08YnI+PGJyPk5vdGVzOiAke2VsLm5vdGVzfWA7XG5cbiAgICAgICAgYnV0dG9uSG9sZGVyLmNsYXNzTmFtZSA9IFwidGFza19idXR0b25faG9sZGVyXCI7XG5cbiAgICAgICAgcmVtb3ZlU2VsZkJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgcmVtb3ZlU2VsZkJ0bi5jbGFzc05hbWUgPSBcInJlbW92ZXNlbGZfYnV0dG9uXCI7XG4gICAgICAgIHJlbW92ZVNlbGZCdG4uaWQgPSBgYnRuX0FsbFBhZ2VfJHtlbC5JRH1gO1xuICAgICAgICByZW1vdmVTZWxmQnRuLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLXRyYXNoLWNhbic+PC9pPlwiO1xuXG4gICAgICAgIGV4cGFuZFNlbGZCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGV4cGFuZFNlbGZCdG4uY2xhc3NOYW1lID0gXCJleHBhbmRzZWxmX2J1dHRvblwiO1xuICAgICAgICBleHBhbmRTZWxmQnRuLmlkID0gYGV4cGFuZEJ0bl9BbGxQYWdlXyR7ZWwuSUR9YDtcbiAgICAgICAgZXhwYW5kU2VsZkJ0bi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1zb2xpZCBmYS1hbmdsZXMtZG93bic+PC9pPlwiO1xuXG4gICAgICAgIGV4cGFuZEJ0bkNvdW50ZXIuaW5uZXJIVE1MID0gMTtcblxuICAgICAgICBlZGl0U2VsZkJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgZWRpdFNlbGZCdG4uY2xhc3NOYW1lID0gXCJlZGl0VGFza19idXR0b25cIjtcbiAgICAgICAgZWRpdFNlbGZCdG4uaWQgPSBgZWRpdEJ0bl9BbGxQYWdlXyR7ZWwuSUR9YDtcbiAgICAgICAgZWRpdFNlbGZCdG4uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlJz48L2k+XCI7XG5cbiAgICAgICAgZHVlRGl2LmNsYXNzTmFtZSA9IFwiYWRkZWRfZHVlXCI7XG4gICAgICAgIGlmIChlbC5kdWVEYXRlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gYER1ZTogJHtkdWVJblJlc3VsdH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxsSXRlbXNCb3guYXBwZW5kQ2hpbGQodG9BZGRUYXNrKTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKHJlYWRpbHlTZWVuQ29udGVudCk7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChkdWVEaXYpO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQoYnV0dG9uSG9sZGVyKTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKGV4cGFuZGFibGVDb250ZW50KTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKGV4cGFuZEJ0bkNvdW50ZXIpO1xuICAgICAgICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoZXhwYW5kU2VsZkJ0bik7XG4gICAgICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChlZGl0U2VsZkJ0bik7XG4gICAgICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChyZW1vdmVTZWxmQnRuKTtcblxuICAgICAgICB2YXIgZGl2X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkZWRfcHJvamVjdHMnKTtcbiAgICAgICAgdmFyIGgzX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkZWRfcHJval9ib3gnKTtcbiAgICAgICAgdmFyIGRpdl9hcnJheSA9IFsuLi5kaXZfbGlzdF07XG4gICAgICAgIHZhciBoM19hcnJheSA9IFsuLi5oM19saXN0XTtcbiAgICAgICAgZGl2X2FycmF5LmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBoM19hcnJheS5mb3JFYWNoKGgzID0+IHtcbiAgICAgICAgICAgIGgzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7ICAgXG5cbiAgICAgICAgYWxsSXRlbXNCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hDZW50ZXJET00oQVAsIHksIHopIHtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gICAgY29uc3QgYWxsSXRlbXNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFRhc2tzQm94XCIpO1xuICAgIHZhciBzaWRlYmFyQ2hpbGQgPSBzaWRlYmFyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaDNcIik7XG5cbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgYWxsSXRlbXNCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICAgIC8vcmVtZW1iZXIgdGhhdCBkYXRlIGdvZXMgYnkgeXl5eS9tbS9kZCAmIEphbiBpcyAwIVxuICAgIGZ1bmN0aW9uIGR1ZUluKGcpIHtcbiAgICAgICAgLy9jaGFuZ2UgeXl5eS1tbS1kZCB0byB5eXl5bW1kZFxuICAgICAgICB2YXIgd2hlbkl0c0R1ZSA9IGcuZHVlRGF0ZS5yZXBsYWNlKC8tfFxccy9nLCBcIlwiKTtcbiAgICAgICAgdmFyIHl5eXkgPSB3aGVuSXRzRHVlLnNsaWNlKDAsIDQpO1xuICAgICAgICB2YXIgbW0gPSBOdW1iZXIod2hlbkl0c0R1ZS5zbGljZSg0LCA2KSkgLSAxO1xuICAgICAgICB2YXIgZGQgPSBOdW1iZXIod2hlbkl0c0R1ZS5zbGljZSg2KSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICAgICAgICAgICAgbmV3IERhdGUoeXl5eSwgbW0sIGRkKSxcbiAgICAgICAgICAgIHthZGRTdWZmaXg6IHRydWV9XG4gICAgICAgICk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJiZWZvcmUgdGhlIGFsdGVyYXRpb24gXCIgKyByZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LnNsaWNlKC0zKSA9PT0gXCJhZ29cIikge1xuICAgICAgICAgICAgcmVzdWx0ID0gXCJUb2RheVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJhZnRlciB0aGUgYWx0ZXJhdGlvbiBcIiArIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qIGNvbnNvbGUubG9nKHNpZGViYXJDaGlsZCk7XG4gICAgY29uc29sZS5sb2coeik7XG4gICAgY29uc29sZS5sb2coc2lkZWJhckNoaWxkW3pdKTsgKi9cblxuICAgIHdoaWxlIChzaWRlYmFyQ2hpbGRbel0ubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBzaWRlYmFyQ2hpbGRbel0ucmVtb3ZlQ2hpbGQoc2lkZWJhckNoaWxkW3pdLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIHRoZSB0YXNrcyBmcm9tIHNwZWNpZmljIHByb2pcIilcbiAgICB9O1xuICAgIEFQW3ldW1widGFza0xpc3RcIl0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgdmFyIGR1ZUluUmVzdWx0ID0gZHVlSW4oZWwpO1xuICAgICAgICBjb25zdCB0b0FkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBidXR0b25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByZW1vdmVTZWxmQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgZXhwYW5kU2VsZkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGVkaXRTZWxmQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgcmVhZGlseVNlZW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZXhwYW5kYWJsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBleHBhbmRCdG5Db3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtDb3VudFwiKS5pbm5lckhUTUwgJSAyID09PSAwKSB7XG4gICAgICAgICAgICB0b0FkZFRhc2suY2xhc3NOYW1lID0gXCJhZGRlZF90YXNrcyBkYXJrLW1vZGVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvQWRkVGFzay5jbGFzc05hbWUgPSBcImFkZGVkX3Rhc2tzXCI7XG4gICAgICAgIH1cbiAgICAgICAgdG9BZGRUYXNrLmlkID0gYCR7ZWwuSUR9XyR7ZWwucHJpb3JpdHl9YDtcblxuICAgICAgICByZWFkaWx5U2VlbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJub3dZb3VTZWVNZVwiO1xuICAgICAgICByZWFkaWx5U2VlbkNvbnRlbnQuaW5uZXJIVE1MID0gYCR7ZWwudGl0bGV9PGJyPkR1ZSBEYXRlOiAke2VsLmR1ZURhdGV9YDtcblxuICAgICAgICBleHBhbmRhYmxlQ29udGVudC5jbGFzc05hbWUgPSBcInRoZUV4cGFuZGFibGVzXCI7XG4gICAgICAgIGV4cGFuZGFibGVDb250ZW50LmlkID0gYCR7ZWwuSUR9X2V4cGFuZE1lYDtcbiAgICAgICAgZXhwYW5kYWJsZUNvbnRlbnQuaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOiAke2VsLmRlc2NyaXB0aW9ufTxicj48YnI+Tm90ZXM6ICR7ZWwubm90ZXN9YDtcblxuICAgICAgICBidXR0b25Ib2xkZXIuY2xhc3NOYW1lID0gXCJ0YXNrX2J1dHRvbl9ob2xkZXJcIjtcblxuICAgICAgICByZW1vdmVTZWxmQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICByZW1vdmVTZWxmQnRuLmNsYXNzTmFtZSA9IFwicmVtb3Zlc2VsZl9idXR0b25cIjtcbiAgICAgICAgcmVtb3ZlU2VsZkJ0bi5pZCA9IGBidG5fJHtlbC5JRH1gO1xuICAgICAgICByZW1vdmVTZWxmQnRuLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLXRyYXNoLWNhbic+PC9pPlwiO1xuXG4gICAgICAgIGV4cGFuZFNlbGZCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGV4cGFuZFNlbGZCdG4uY2xhc3NOYW1lID0gXCJleHBhbmRzZWxmX2J1dHRvblwiO1xuICAgICAgICBleHBhbmRTZWxmQnRuLmlkID0gYGV4cGFuZEJ0bl8ke2VsLklEfWA7XG4gICAgICAgIGV4cGFuZFNlbGZCdG4uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtc29saWQgZmEtYW5nbGVzLWRvd24nPjwvaT5cIjtcblxuICAgICAgICBleHBhbmRCdG5Db3VudGVyLmlubmVySFRNTCA9IDE7XG5cbiAgICAgICAgZWRpdFNlbGZCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGVkaXRTZWxmQnRuLmNsYXNzTmFtZSA9IFwiZWRpdFRhc2tfYnV0dG9uXCI7XG4gICAgICAgIGVkaXRTZWxmQnRuLmlkID0gYGVkaXRCdG5fJHtlbC5JRH1gO1xuICAgICAgICBlZGl0U2VsZkJ0bi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUnPjwvaT5cIjtcblxuICAgICAgICBkdWVEaXYuY2xhc3NOYW1lID0gXCJhZGRlZF9kdWVcIjtcbiAgICAgICAgaWYgKGVsLmR1ZURhdGUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGR1ZURpdi5pbm5lckhUTUwgPSBgRHVlOiAke2R1ZUluUmVzdWx0fWA7XG4gICAgICAgIH1cblxuICAgICAgICBzaWRlYmFyQ2hpbGRbel0uYXBwZW5kQ2hpbGQodG9BZGRUYXNrKTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKHJlYWRpbHlTZWVuQ29udGVudCk7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChkdWVEaXYpO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQoYnV0dG9uSG9sZGVyKTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKGV4cGFuZGFibGVDb250ZW50KTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKGV4cGFuZEJ0bkNvdW50ZXIpO1xuICAgICAgICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoZXhwYW5kU2VsZkJ0bik7XG4gICAgICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChlZGl0U2VsZkJ0bik7XG4gICAgICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChyZW1vdmVTZWxmQnRuKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUV4cGFuZChxLCByKSB7XG4gICAgY29uc3QgZXhwYW5kZXJCdG5Ub2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZXhwYW5kQnRuXyR7cX1gKTtcbiAgICBjb25zb2xlLmxvZyhleHBhbmRlckJ0blRvZyk7XG4gICAgaWYgKHIlMiA9PT0gMCkge1xuICAgICAgICBleHBhbmRlckJ0blRvZy5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1zb2xpZCBmYS1hbmdsZXMtZG93bic+PC9pPlwiO1xuICAgIH0gZWxzZSBpZiAociUyICE9PSAwKSB7XG4gICAgICAgIGV4cGFuZGVyQnRuVG9nLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLWFuZ2xlcy11cCc+PC9pPlwiXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU2VlQWxsQnRuKCkge1xuICAgIGNvbnN0IGJ1dHRvbk9mSW50ZXJlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZUFsbFRvZ2dsZVwiKTtcbiAgICBjb25zdCBhbGxJdGVtc0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFRhc2tzQm94XCIpO1xuXG4gICAgaWYgKGJ1dHRvbk9mSW50ZXJlc3QuaW5uZXJIVE1MID09IFwiU2VlIEFsbCBUby1EbydzXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdXBwb3NlZCB0byBzaG93IHN0dWZmIG5vd1wiKTtcbiAgICAgICAgYnV0dG9uT2ZJbnRlcmVzdC5pbm5lckhUTUwgPSBcIkhpZGUgQWxsIFRvLURvJ3NcIjtcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbk9mSW50ZXJlc3QuaW5uZXJIVE1MID09IFwiSGlkZSBBbGwgVG8tRG8nc1wiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VwcG9zZWQgdG8gSElERSBub3dcIik7XG4gICAgICAgIGFsbEl0ZW1zRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGJ1dHRvbk9mSW50ZXJlc3QuaW5uZXJIVE1MID0gXCJTZWUgQWxsIFRvLURvJ3NcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWRlYmFyVG9nZ2xlKHgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFRhc2tzQm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZUFsbFRvZ2dsZVwiKS5pbm5lckhUTUwgPSBcIlNlZSBBbGwgVG8tRG8nc1wiO1xuICAgIHZhciBkaXZfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRlZF9wcm9qZWN0cycpO1xuICAgIHZhciBoM19saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZGVkX3Byb2pfYm94Jyk7XG4gICAgdmFyIGRpdl9hcnJheSA9IFsuLi5kaXZfbGlzdF07XG4gICAgdmFyIGgzX2FycmF5ID0gWy4uLmgzX2xpc3RdO1xuICAgIGRpdl9hcnJheS5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGlmIChkaXYuaWQgPT09IHgpIHtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya0NvdW50XCIpLmlubmVySFRNTCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRhcmstbW9kZVwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBoM19hcnJheS5mb3JFYWNoKGgzID0+IHtcbiAgICAgICAgaWYgKGgzLmlkLnNsaWNlKDAsIC0zKSA9PT0geCkge1xuICAgICAgICAgICAgaDMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtDb3VudFwiKS5pbm5lckhUTUwgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaDMuY2xhc3NMaXN0LmFkZChcImRhcmstbW9kZVwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGgzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pOyAgICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsRW1wdHkoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJOYW1lc09ubHlcIik7XG5cbiAgICB3aGlsZSAobWFpbkNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH07XG4gICAgd2hpbGUgKHNpZGViYXJDb250ZW50LmNoaWxkcmVuLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBzaWRlYmFyQ29udGVudC5yZW1vdmVDaGlsZChzaWRlYmFyQ29udGVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRGFyaygpIHtcbiAgICB2YXIgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICB2YXIgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhck5hbWVzT25seVwiKTtcbiAgICB2YXIgY0FsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRlZF9wcm9qZWN0c1wiKTtcbiAgICB2YXIgZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VlQWxsVG9nZ2xlXCIpO1xuICAgIHZhciBlQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVhY2hTaWRlYmFyQ29udGFpbmVyXCIpO1xuICAgIHZhciBmQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZGVkX3Byb2pfYm94XCIpO1xuICAgIHZhciBnQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZGVkX3Rhc2tzXCIpO1xuICAgIHZhciBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gICAgdmFyIGkgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRuZXdmb3JtXCIpO1xuICAgIHZhciBqID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkbmV3cHJvamZvcm1cIik7XG4gICAgdmFyIGsgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Rm9ybVwiKTtcbiAgICB2YXIgbEFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIik7XG4gICAgdmFyIG1BbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpO1xuICAgIHZhciBuQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIik7XG4gICAgXG4gICAgYS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIGIuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICBkLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgaC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIGkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICBqLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgay5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuXG4gICAgdmFyIGNBbGxBcnJheSA9IFsuLi5jQWxsXTtcbiAgICB2YXIgZUFsbEFycmF5ID0gWy4uLmVBbGxdO1xuICAgIHZhciBmQWxsQXJyYXkgPSBbLi4uZkFsbF07XG4gICAgdmFyIGdBbGxBcnJheSA9IFsuLi5nQWxsXTtcbiAgICB2YXIgbEFsbEFycmF5ID0gWy4uLmxBbGxdO1xuICAgIHZhciBtQWxsQXJyYXkgPSBbLi4ubUFsbF07XG4gICAgdmFyIG5BbGxBcnJheSA9IFsuLi5uQWxsXTtcbiAgICBjQWxsQXJyYXkuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICB9KTtcbiAgICBlQWxsQXJyYXkuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICB9KTtcbiAgICBmQWxsQXJyYXkuZm9yRWFjaChoMyA9PiB7XG4gICAgICAgIGgzLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgfSk7XG4gICAgZ0FsbEFycmF5LmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgfSk7XG4gICAgbEFsbEFycmF5LmZvckVhY2godGV4dGFyZWEgPT4ge1xuICAgICAgICB0ZXh0YXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIH0pO1xuICAgIG1BbGxBcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICB9KTtcbiAgICBuQWxsQXJyYXkuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICB9KTtcbiAgICB2YXIgZGFya0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtDb3VudFwiKS5pbm5lckhUTUw7XG4gICAgZGFya0NvdW50ZXIrKztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtDb3VudFwiKS5pbm5lckhUTUwgPSBkYXJrQ291bnRlcjtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ2ljdG9kbyBmcm9tICcuL2xvZ2ljdG9kby5qcyc7XG5sb2dpY3RvZG8oKTtcbiIsImltcG9ydCB7IGFkZFByb2pUb1NpZGUgfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHsgcmVmcmVzaENlbnRlckRPTSB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgeyBzaWRlYmFyVG9nZ2xlIH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCB7IGFsbEVtcHR5IH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCB7IHNldE5ld1NpZGVOYW1lcyB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgeyB0b2dnbGVFeHBhbmQgfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHsgc2VlQWxsIH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCB7IHRvZ2dsZVNlZUFsbEJ0biB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgeyB0b2dnbGVEYXJrIH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCBzdG9yYWdlVGVzdCwgeyByZW1vdmVQcm9qZWN0IH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB7IHN0b3JlUHJvamVjdCB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyByZXRyaWV2ZVByb2plY3QgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IHsgcmV0cmlldmVQcm9qZWN0cyB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBzdG9yZUFsbEl0ZW1zIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB7IHJlbW92ZUZyb21BbGxJdGVtcyB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBlZGl0UHJvak5hbWVGcm9tQWxsSXRlbXMgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpY3RvZG8oKSB7XG5cbiAgICBsZXQgaWRjb3VudGVyID0gMDtcbiAgICBsZXQgYWxsSXRlbXMgPSBbXTtcbiAgICBsZXQgY3VycmVudFByb2pJbmRleCA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRQcm9qTmFtZSA9IG51bGw7XG4gICAgbGV0IGxhc3RQcm9qSW5kZXggPSBudWxsO1xuICAgIGxldCBsYXN0UHJvak5hbWUgPSBudWxsO1xuXG4gICAgY2xhc3MgSXRlbSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICAgICAgdGhpcy5JRCA9IFwicHJvalwiICsgY3VycmVudFByb2pJbmRleCArIFwiLlwiICsgaWRjb3VudGVyKys7XG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0OyBcblxuICAgICAgICAgICAgdGhpcy5naXZlVGl0bGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3RpdGxlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpdGxlU2V0TmV3ID0gZnVuY3Rpb24obmV3VGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdpdmVEZWV0cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25TZXROZXcgPSBmdW5jdGlvbihuZXdEZWV0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZWV0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2l2ZUR1ZURhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2R1ZURhdGV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZVNldE5ldyA9IGZ1bmN0aW9uKG5ld0R1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5naXZlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ByaW9yaXR5fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5U2V0TmV3ID0gZnVuY3Rpb24obmV3UHJpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2l2ZU5vdGV6ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtub3Rlc31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3Rlc1NldE5ldyA9IGZ1bmN0aW9uKG5ld05vdGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5ld05vdGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5naXZlSUQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke0lEfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldFByb2pOYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtwcm9qZWN0fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2plY3RTZXROZXcgPSBmdW5jdGlvbihuZXdQcm9qTmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IG5ld1Byb2pOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1Ub0FsbCh4KSB7XG4gICAgICAgIGFsbEl0ZW1zLnB1c2goeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSXRlbVRvQ3VycmVudCh4KSB7XG4gICAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdW1widGFza0xpc3RcIl0ucHVzaCh4KTtcbiAgICAgICAgLyogW2krK10gKi9cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUN1cnJlbnQoeCwgeSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2ogaW5kZXggaXMgJHt4fSwgZmluYWwgSUQgaXMgJHt5fWApO1xuXG4gICAgICAgIHZhciB0YXNrRnJvbUJ0bkluZGV4ID0gYWxsUHJvamVjdHNbYCR7eH1gXVtcInRhc2tMaXN0XCJdLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT0geSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tGcm9tQnRuSW5kZXgpO1xuXG4gICAgICAgIGFsbFByb2plY3RzW2Ake3h9YF1bXCJ0YXNrTGlzdFwiXS5zcGxpY2UodGFza0Zyb21CdG5JbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21BbGwoaCkge1xuICAgICAgICB2YXIgaEluZGV4ID0gYWxsSXRlbXMuZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PT0gaCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKHVzZWQgZm9yIGFsbEl0ZW1zIGFycmF5KSBoSW5kZXggaXMgXCIgKyBoSW5kZXgpO1xuICAgICAgICBhbGxJdGVtcy5zcGxpY2UoaEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvL2dldHMgcHJvaiBpbmRleCAmIG5hbWUgd2hlbiB0cnlpbmcgdG8gZGVsZXRlIHRhc2sgZnJvbSBhbGxJdGVtcyBwYWdlXG4gICAgZnVuY3Rpb24gZ2V0UHJvakluZm9Gb3JBbGxQcm9qKGopIHtcbiAgICAgICAgdmFyIGpJbmRleCA9IGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGopO1xuICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBhbGxJdGVtc1tqSW5kZXhdLmdldFByb2pOYW1lKCk7XG4gICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLnByb2pOYW1lID09PSBgJHtjdXJyZW50UHJvak5hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZG5ld1wiKTtcbiAgICBvcGVuRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0Zvcm1Db250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbF9idXR0b25cIik7XG4gICAgY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbiAgICBjb25zdCBvcGVuUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3cHJval9idXR0b25cIik7XG4gICAgb3BlblByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIHdvcmtlZFwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSlcblxuICAgIGNvbnN0IGNsb3NlUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3cHJval9jYW5jZWxcIik7XG4gICAgY2xvc2VQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGROZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdF9idXR0b25cIik7XG4gICAgYWRkTmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdmFyIG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRuZXdmb3JtXCIpO1xuICAgICAgICB2YXIgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdmFyIGZvcm1EZXNjcmlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcblxuICAgICAgICB2YXIgdGFyZ2V0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbW9udGggPSBub3cuZ2V0VVRDTW9udGgoKSArIDE7IC8vbW9udGhzIGZyb20gMS0xMlxuICAgICAgICB2YXIgcGFkZGVkTW9udGggPSBtb250aC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHZhciBkYXkgPSBub3cuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB2YXIgcGFkZGVkRGF5ID0gZGF5LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgdmFyIHllYXIgPSBub3cuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgbm93ID0gIHllYXIgKyBcIi1cIiArIHBhZGRlZE1vbnRoICsgXCItXCIgKyBwYWRkZWREYXk7XG5cbiAgICAgICAgaWYgKG5ld1Rhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1UaXRsZS5jaGVja1ZhbGlkaXR5KCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybURlc2NyaXAuY2hlY2tWYWxpZGl0eSgpKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwibmVlZHNGaWxsaW5nXCIpO1xuICAgICAgICAgICAgZm9ybURlc2NyaXAuY2xhc3NMaXN0LmFkZChcIm5lZWRzRmlsbGluZ1wiKTtcbiAgICAgICAgICAgIGlmIChmb3JtVGl0bGUuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJuZWVkc0ZpbGxpbmdcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1EZXNjcmlwLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGZvcm1EZXNjcmlwLmNsYXNzTGlzdC5yZW1vdmUoXCJuZWVkc0ZpbGxpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldERhdGUgIT09IFwiXCIgJiYgdGFyZ2V0RGF0ZSA8IG5vdykge1xuICAgICAgICAgICAgLy8gaWYgYSBkYXRlIGlzIHNlbGVjdGVkLCB3YW50IHRvIG1ha2Ugc3VyZSBkYXRlIGlzIE5PVCBpbiB0aGUgcGFzdFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0RGF0ZSBcIiArIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm93IFwiICsgbm93KTsgXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZGF0ZSB0aGF0IGhhcyBub3QgYWxyZWFkeSBwYXNzZWQuXCIpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcm9qTmFtZSA9PT0gXCJfaElkRGVOXCIpIHtcblxuICAgICAgICAgICAgdmFyIGEgPSBhZGRuZXdmb3JtLnRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGIgPSBhZGRuZXdmb3JtLmRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGMgPSBhZGRuZXdmb3JtLmR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgZCA9IGFkZG5ld2Zvcm0ucHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICB2YXIgZSA9IGFkZG5ld2Zvcm0ubm90ZXMudmFsdWU7XG4gICAgICAgICAgICB2YXIgZiA9IGN1cnJlbnRQcm9qTmFtZTtcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IEl0ZW0oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgXG4gICAgICAgICAgICBhZGRJdGVtVG9BbGwoeCk7XG4gICAgICAgICAgICBhZGRJdGVtVG9DdXJyZW50KHgpO1xuICAgICAgICAgICAgc2VlQWxsKGFsbEl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsUHJvalwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxJdGVtc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Gb3JtQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJuZWVkc0ZpbGxpbmdcIik7XG4gICAgICAgICAgICBmb3JtRGVzY3JpcC5jbGFzc0xpc3QucmVtb3ZlKFwibmVlZHNGaWxsaW5nXCIpO1xuXG4gICAgICAgICAgICBzdG9yZUFsbEl0ZW1zKGFsbEl0ZW1zKTtcblxuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KGFsbFByb2plY3RzWzBdKTtcbiAgICAgICAgICAgIC8vYWxsSXRlbXMgdGFza3MgYXJlIHN0b3JlZCB3aXRoIGJlZ2lubmluZyBvZiBcImFMbEl0RW1TX1wiXG4gICAgICAgICAgICAvL2FsbEl0ZW1zIGRvZXMgTk9UIGhhdmUgYSB0YXNrTGlzdFxuICAgICAgICAgICAgLy9ub3QgdGhlIHNhbWUgYXMgaGlkZGVuLCB3aGljaCBpcyB1c2VkIGZvciB3aGVuIGFkZGluZyB0YXNrcyBvbiBhbGxJdGVtcyBwYWdlXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0RGF0ZSBcIiArIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3cgXCIgKyBub3cpO1xuXG4gICAgICAgICAgICB2YXIgYSA9IGFkZG5ld2Zvcm0udGl0bGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgYiA9IGFkZG5ld2Zvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICB2YXIgYyA9IGFkZG5ld2Zvcm0uZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBkID0gYWRkbmV3Zm9ybS5wcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlID0gYWRkbmV3Zm9ybS5ub3Rlcy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBmID0gY3VycmVudFByb2pOYW1lO1xuICAgICAgICAgICAgdmFyIHggPSBuZXcgSXRlbShhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICBcbiAgICAgICAgICAgIHZhciBBUCA9IGFsbFByb2plY3RzO1xuICAgICAgICAgICAgdmFyIHkgPSBjdXJyZW50UHJvakluZGV4O1xuICAgICAgICAgICAgdmFyIHogPSBgJHtjdXJyZW50UHJvak5hbWV9Ym94YDtcbiAgICAgICAgICAgIGFkZEl0ZW1Ub0FsbCh4KTtcbiAgICAgICAgICAgIGFkZEl0ZW1Ub0N1cnJlbnQoeCk7XG4gICAgICAgICAgICByZWZyZXNoQ2VudGVyRE9NKEFQLCB5LCB6KTtcbiAgICAgICAgICAgIC8vY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbEl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwibmVlZHNGaWxsaW5nXCIpO1xuICAgICAgICAgICAgZm9ybURlc2NyaXAuY2xhc3NMaXN0LnJlbW92ZShcIm5lZWRzRmlsbGluZ1wiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coQVBbeV0pO1xuICAgICAgICAgICAgc3RvcmVBbGxJdGVtcyhhbGxJdGVtcyk7XG4gICAgICAgICAgICAvL2FsbEl0ZW1zIHRhc2tzIGFyZSBzdG9yZWQgd2l0aCBiZWdpbm5pbmcgb2YgXCJhTGxJdEVtU19cIlxuICAgICAgICAgICAgLy9hbGxJdGVtcyBkb2VzIE5PVCBoYXZlIGEgdGFza0xpc3RcbiAgICAgICAgICAgIC8vbm90IHRoZSBzYW1lIGFzIGhpZGRlbiwgd2hpY2ggaXMgdXNlZCBmb3Igd2hlbiBhZGRpbmcgdGFza3Mgb24gYWxsSXRlbXMgcGFnZVxuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KEFQW3ldKTsgLy9cInJlZnJlc2hlc1wiIHByb2ogaW4gbG9jYWxTdG9yYWdlIHRvIGluY2x1ZGUgbmV3IGFkZGVkIHRhc2tcbiAgICAgICAgICAgIHN0b3JlUHJvamVjdChhbGxQcm9qZWN0c1swXSk7XG4gICAgICAgIH1cbiAgICB9KSBcblxuICAgIC8vcHJvamVjdCB0YWIgY29kZVxuXG4gICAgbGV0IHByb2ppZCA9IDA7XG4gICAgbGV0IGFsbFByb2plY3RzID0gW107XG5cbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvak5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvak5hbWUgPSBwcm9qTmFtZTtcbiAgICAgICAgICAgIHRoaXMuSUQgPSBwcm9qaWQrKztcbiAgICAgICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheVByb2ogPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3Byb2pOYW1lfWA7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5naXZlUHJvak5hbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXlQcm9qKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zZXROZXdQcm9qTmFtZSA9IGZ1bmN0aW9uKG5ld05hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2pOYW1lID0gbmV3TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2pUb0FsbCh4KSB7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2goeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZEFsbElkc1JlbW92ZShiKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRJRHMgPSBbXTtcbiAgICAgICAgYWxsUHJvamVjdHNbYl1bXCJ0YXNrTGlzdFwiXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlZElEcy5wdXNoKGVsLklEKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlc2UgYXJlIHRoZSByZW1vdmVkIElEcyBcIiwgcmVtb3ZlZElEcyk7Ly9pdCdzIGFuIG9iamVjdFxuICAgICAgICByZXR1cm4gcmVtb3ZlZElEcztcbiAgICB9XG5cbiAgICAvL2ZvciBlYWNoIGl0ZW0gd2l0aGluIHRoZSB0byBiZSByZW1vdmVkIElEJ3MgYXJyYXksIHJ1biBpdCBhZ2FpbnN0IGFsbEl0ZW1zLklEIGZvciBtYXRjaFxuICAgIC8vaWYgaXQgbWF0Y2hlcywgZmluZCB0aGF0IGl0ZW0ncyBjdXJyZW50IGluZGV4ICYgcmVtb3ZlIHdpdGggc3BsaWNlKHgsIDEpO1xuICAgIGZ1bmN0aW9uIGlkVG9JbmRleFJlbW92ZShmKSB7XG4gICAgICAgIHdoaWxlIChmLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIG0gPSBhbGxJdGVtcy5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZlswXSA9PT0gYWxsSXRlbXNbal0uSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGl0ZXJhdGlvbiBhbGxJdGVtcyBsZW5ndGggd2FzIFwiICsgbSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsSXRlbXMgdGFzayB3YXMgcmVtb3ZlZCB3aXRoIElEIG9mIFwiICsgYWxsSXRlbXNbal0uSUQpO1xuICAgICAgICAgICAgICAgICAgICBhbGxJdGVtcy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGYuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaWRlYmFyUHJvalN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyTmFtZXNPbmx5Jyk7XG4gICAgc2lkZWJhclByb2pTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNpZGViYXJfTmFtZXNcIikge1xuICAgICAgICAgICAgY3VycmVudFByb2pOYW1lID0gZS50YXJnZXQuaWQuc2xpY2UoMCwgLTgpO1xuICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT0gY3VycmVudFByb2pOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudHByb2ogbmFtZSBpcyBcIiArIGN1cnJlbnRQcm9qTmFtZSArIFwiIGFuZCBjdXJyZW50IHByb2ogaW5kZXggaXMgXCIgKyBjdXJyZW50UHJvakluZGV4KTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZUFsbFRvZ2dsZVwiKS5pbm5lckhUTUwgPT09IFwiSGlkZSBBbGwgVG8tRG8nc1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIEFQID0gYWxsUHJvamVjdHM7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBjdXJyZW50UHJvakluZGV4O1xuICAgICAgICAgICAgICAgIHZhciB6ID0gYCR7Y3VycmVudFByb2pOYW1lfWJveGA7XG5cbiAgICAgICAgICAgICAgICByZWZyZXNoQ2VudGVyRE9NKEFQLCB5LCB6KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlKGN1cnJlbnRQcm9qTmFtZSk7XG4gICAgICAgIH0gLy9jbGlja2luZyBvbiBzaWRlYmFyX25hbWUgdHJhc2hjYW5cbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNpZGViYXJfTmFtZV9yZW1vdmVcIiB8fCBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZmEtcmVndWxhciBmYS10cmFzaC1jYW5cIikge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiVGhpcyB3aWxsIGNvbXBsZXRlbHkgZXJhc2UgdGhpcyBsaXN0IVxcbkFyZSB5b3Ugc3VyZT9cIikgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0b1JlbW92ZVByb2pOYW1lID0gZS50YXJnZXQuY2xvc2VzdChcImRpdiBkaXZcIikuaWQuc2xpY2UoMCwgLTEwKTtcbiAgICAgICAgICAgICAgICB2YXIgdG9SZW1vdmVQcm9qSW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLnByb2pOYW1lID09IHRvUmVtb3ZlUHJvak5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG8gYmUgcmVtb3ZlZCBwcm9qIGluZGV4IGlzIFwiLCB0b1JlbW92ZVByb2pJbmRleCk7XG4gICAgICAgICAgICAgICAgbGV0IGFsbFJlbW92ZWRJZHMgPSBmaW5kQWxsSWRzUmVtb3ZlKHRvUmVtb3ZlUHJvakluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbCB0aGVzZSBzaG91bGQgYmUgcmVtb3ZlZCAoYWxsUmVtb3ZlZElkcyk6IFwiICsgYWxsUmVtb3ZlZElkcyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9sb2NhbFN0b3JhZ2UgcmVtb3ZhbFxuICAgICAgICAgICAgICAgIC8vYWxsUmVtb3ZlZElkcyBpcyBhbiBhcnJheTsgaXRlcmF0ZSB0aHJvdWdoIHRoYXQgdG8gcmVtb3ZlIGZyb20gYWxsSXRlbXNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBvZiBvYmplY3Q6IFwiICsgYWxsUmVtb3ZlZElkcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHlwZTogXCIgKyB0eXBlb2YgYWxsUmVtb3ZlZElkcyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUFsbEl0ZW1zKGFsbFJlbW92ZWRJZHMpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QodG9SZW1vdmVQcm9qTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvL3JlbW92ZXMgc3R1ZmYgZnJvbSBhbGxJdGVtc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgdGhpcyBsaXN0IGFmdGVyIHVzaW5nIGl0IGZvciBsb2NhbFN0b3JhZ2U6IFwiLCBhbGxSZW1vdmVkSWRzKTtcbiAgICAgICAgICAgICAgICBpZFRvSW5kZXhSZW1vdmUoYWxsUmVtb3ZlZElkcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID09IDIpIHtcblxuICAgICAgICAgICAgICAgICAgICB0b1JlbW92ZVByb2pJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSAwOyAvL3NldHMgdG8gaGlkZGVuIHByb2pcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2pOYW1lID0gXCJfaElkRGVOXCI7XG5cblxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb0JlUmVtb3ZlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZWFjaFNpZGViYXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsVG9CZVJlbW92ZWQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFByb2plY3RzLnNwbGljZSh0b1JlbW92ZVByb2pJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2ogaW5kZXggaXMgJHtjdXJyZW50UHJvakluZGV4fSBhbmQgbmFtZSBpcyAke2N1cnJlbnRQcm9qTmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsRW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlU2VlQWxsQnRuKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlZUFsbChhbGxJdGVtcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b1JlbW92ZVByb2pJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9ET01cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsVG9CZVJlbW92ZWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmVhY2hTaWRlYmFyQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbFRvQmVSZW1vdmVkLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFByb2plY3RzLnNwbGljZSh0b1JlbW92ZVByb2pJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XS5wcm9qTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhclRvZ2dsZShjdXJyZW50UHJvak5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2ogaW5kZXggaXMgJHtjdXJyZW50UHJvakluZGV4fSBhbmQgbmFtZSBpcyAke2N1cnJlbnRQcm9qTmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsUHJvalwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsSXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSB0b1JlbW92ZVByb2pJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdLnByb2pOYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2ogaW5kZXggaXMgJHtjdXJyZW50UHJvakluZGV4fSBhbmQgbmFtZSBpcyAke2N1cnJlbnRQcm9qTmFtZX1gKTtcblxuICAgICAgICAgICAgICAgICAgICAvL0RPTVxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb0JlUmVtb3ZlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZWFjaFNpZGViYXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsVG9CZVJlbW92ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKHRvUmVtb3ZlUHJvakluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIGFmdGVyIHRoZSByZW1vdmFsc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyVG9nZ2xlKGN1cnJlbnRQcm9qTmFtZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2lkZWJhcl9OYW1lX2VkaXRcIiB8fCBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCIpIHtcbiAgICAgICAgICAgIHZhciB0b0VkaXRQcm9qTmFtZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXYgZGl2XCIpLmlkLnNsaWNlKDAsIC04KTtcbiAgICAgICAgICAgIHZhciB0b0VkaXRQcm9qSW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLnByb2pOYW1lID09IHRvRWRpdFByb2pOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvaiBuYW1lICYgaW5kZXgsIHJlc3BlY3RpdmVseSBcIiArIHRvRWRpdFByb2pOYW1lICsgXCIgXCIgKyB0b0VkaXRQcm9qSW5kZXgpO1xuICAgICAgICAgICAgbGV0IG5ld05hbWUgPSBwcm9tcHQoXCJXaGF0IGRvIHlvdSB3YW50IHRoZSBuZXcgbmFtZSB0byBiZT9cIiwgXCJcIik7XG4gICAgICAgICAgICBpZiAobmV3TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBhcnJheUZyb21Qcm9qVG9BbGwgPSBbXTtcblxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW3RvRWRpdFByb2pJbmRleF0uc2V0TmV3UHJvak5hbWUobmV3TmFtZSk7XG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHNbdG9FZGl0UHJvakluZGV4XVtcInRhc2tMaXN0XCJdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5wcm9qZWN0U2V0TmV3KG5ld05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhcnJheUZyb21Qcm9qVG9BbGwucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9KTsgLy9zZXRzIG5ldyBwcm9qIG5hbWUgZm9yIHRhc2tzIHdpdGhpbiBwcm9qIGZvbGRlclxuICAgICAgICAgICAgICAgIHNldE5ld1NpZGVOYW1lcyh0b0VkaXRQcm9qTmFtZSwgbmV3TmFtZSk7Ly9ET00gYW5kIGlkIGNoYW5nZXMgXG5cbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBvbGQgcHJvamVjdCBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QodG9FZGl0UHJvak5hbWUpO1xuICAgICAgICAgICAgICAgIC8vVEhFTiBjcmVhdGUgYSBuZXcgXCJjb3B5XCIgd2l0aCBjaGFuZ2VkIG5hbWVcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2pOYW1lICsgXCIgbmFtZSBpcyB0aGlzIGFuZCBpbmRleCBpczogXCIgKyBjdXJyZW50UHJvakluZGV4KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5wcm9qTmFtZSA9PT0gYCR7bmV3TmFtZX1gKTtcbiAgICAgICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0pO1xuICAgICAgICAgICAgICAgIC8vZm9yIGFsbCB0aGUgaW5kaXZpZHVhbCBhbGxJdGVtc19wcm9qJ3MsIGNoYW5nZSB0aGVpciByZXNwZWN0aXZlIHByb2plY3RzIHRvIE5FVyBuYW1lXG4gICAgICAgICAgICAgICAgZWRpdFByb2pOYW1lRnJvbUFsbEl0ZW1zKGFycmF5RnJvbVByb2pUb0FsbCwgbmV3TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvL21ha2Ugc3VyZSBlYWNoIHRhc2sgd2l0aGluIGhhcyBpdCdzIC5wcm9qZWN0IHNldCB0byB0aGUgTkVXIE5hbWVcbiAgICAgICAgICAgICAgICAvKiBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XVtcInRhc2tMaXN0XCJdLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2sucHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sucHJvamVjdCA9IG5ld05hbWU7XG4gICAgICAgICAgICAgICAgfSk7ICovXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwic2VlQWxsVG9nZ2xlXCIpIHtcbiAgICAgICAgICAgIHRvZ2dsZVNlZUFsbEJ0bigpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VlQWxsVG9nZ2xlXCIpLmlubmVySFRNTCA9PSBcIkhpZGUgQWxsIFRvLURvJ3NcIikge1xuICAgICAgICAgICAgICAgIHNlZUFsbChhbGxJdGVtcyk7XG4gICAgICAgICAgICAgICAgbGFzdFByb2pOYW1lID0gY3VycmVudFByb2pOYW1lO1xuICAgICAgICAgICAgICAgIGxhc3RQcm9qSW5kZXggPSBjdXJyZW50UHJvakluZGV4O1xuICAgICAgICAgICAgICAgIC8vaG9sZHMgaW5mbyBvZiBsYXN0IHZpZXdlZCBmb3IgaWYgdXNlciBkZWNpZGVzIHRvIGhpZGUgYWxsIGl0ZW1zXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2pOYW1lID0gXCJfaElkRGVOXCI7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYW1lIGFuZCBpbmRleDogXCIgKyBjdXJyZW50UHJvak5hbWUgKyBcIiBcIiArIGN1cnJlbnRQcm9qSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBsYXN0UHJvak5hbWU7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGxhc3RQcm9qSW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJORVcgbmFtZSBhbmQgaW5kZXg6IFwiICsgY3VycmVudFByb2pOYW1lICsgXCIgXCIgKyBjdXJyZW50UHJvakluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgQVAgPSBhbGxQcm9qZWN0cztcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGN1cnJlbnRQcm9qSW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIHogPSBgJHtjdXJyZW50UHJvak5hbWV9Ym94YDtcblxuICAgICAgICAgICAgICAgIHJlZnJlc2hDZW50ZXJET00oYWxsUHJvamVjdHMsIHksIHopO1xuICAgICAgICAgICAgICAgIHNpZGViYXJUb2dnbGUoY3VycmVudFByb2pOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJzaWRlYmFyTmFtZXNPbmx5XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25seSB0aGUgc2lkZWJhciBlbXB0eSBzcGFjZSFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gIFxuICAgIH0pXG5cbiAgICBjb25zdCBhbGxJdGVtQm94TGlzdGVuZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFRhc2tzQm94Jyk7XG4gICAgYWxsSXRlbUJveExpc3RlbmVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgdmFyIGJ0blBhcmVudFByb2pOYW1lID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5hZGRlZF90YXNrc1wiKS5pZC5zcGxpdCgnXycpWzBdOyBcbiAgICAgICAgY3VycmVudFByb2pOYW1lID0gYnRuUGFyZW50UHJvak5hbWU7XG4gICAgICAgIHZhciBidG5QYXJlbnRJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT0gYnRuUGFyZW50UHJvak5hbWUpO1xuICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gYnRuUGFyZW50SW5kZXg7XG4gICAgICAgIHZhciBlZGl0Rm9ybUNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgZWRpdEZvcm1NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlZGl0Rm9ybSBbaWRePWVkaXRdXCIpO1xuICAgICAgICB2YXIgZWRpdEZvcm1BcnJheSA9IFsuLi5lZGl0Rm9ybU1haW5dXG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZcIikuY2xhc3NOYW1lICE9PSBcInRhc2tfYnV0dG9uX2hvbGRlclwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmcgc2hvdWxkIGJlIGhhcHBlbmluZyBoZXJlLi4uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xvc2VzdChcImRpdlwiKS5jbGFzc05hbWUgIT09IFwidGFza19idXR0b25faG9sZGVyXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZyBoYXBwZW5pbmcgaGVyZSBFSVRIRVIuLi4uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcImV4cGFuZHNlbGZfYnV0dG9uXCIgJiYgZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxMCwgMTcpID09PSBcIkFsbFBhZ2VcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSUQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDE4KTtcbiAgICAgICAgICAgIHZhciB0b0V4cGFuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V4cGFuZElEfV9leHBhbmRNZV9BbGxQYWdlYCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSWRXaXRoQVAgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDEwKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdG9nZ2xlSG9sZGVyID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5hZGRlZF90YXNrc1wiKS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFRvZ0NvdW50ZXIgPSB0b2dnbGVIb2xkZXIuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kVG9nQ291bnRlciUyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwYW5kVG9nQ291bnRlciUyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgZnhuIFwiICsgZXhwYW5kVG9nQ291bnRlcik7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmQoZXhwYW5kSWRXaXRoQVAsIGV4cGFuZFRvZ0NvdW50ZXIpO1xuICAgICAgICAgICAgZXhwYW5kVG9nQ291bnRlcisrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBmeG4gXCIgKyBleHBhbmRUb2dDb3VudGVyKTtcbiAgICAgICAgICAgIHRvZ2dsZUhvbGRlci5pbm5lckhUTUwgPSBleHBhbmRUb2dDb3VudGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcInJlbW92ZXNlbGZfYnV0dG9uXCIgJiYgZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSg0LCAxMSkgPT09IFwiQWxsUGFnZVwiKSB7XG4gICAgICAgICAgICAvL2ZpbmRzIHVuaXF1ZSBJRCBvZiB0YXNrIHdpdGhpbiBhbGxJdGVtc1xuICAgICAgICAgICAgdmFyIHRhc2tJZEluQWxsID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxMik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tJZElOYWxsIGlzIFwiICsgdGFza0lkSW5BbGwpO1xuICAgICAgICAgICAgZ2V0UHJvakluZm9Gb3JBbGxQcm9qKHRhc2tJZEluQWxsKTsgLy9zZXRzIGN1cnJlbnRQcm9qIE5hbWUgJiBJbmRleCB0byBzcGVjaWZpYyB0YXNrXG5cbiAgICAgICAgICAgIC8vcmVtb3ZlcyBmcm9tIGxvY2FsU3RvcmFnZSBBTkQgZnJvbSBpdCdzIHJlc3BlY3RpdmUgcHJvamVjdCBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9hbGxSZW1vdmVkSWRzIGlzIGFuIGFycmF5OyBpdGVyYXRlIHRocm91Z2ggdGhhdCB0byByZW1vdmUgZnJvbSBhbGxJdGVtc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RvcmFnZVJlbW92YWxGcm9tQWxsID0gW107XG4gICAgICAgICAgICBzdG9yYWdlUmVtb3ZhbEZyb21BbGwucHVzaCh0YXNrSWRJbkFsbCk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQWxsSXRlbXMoc3RvcmFnZVJlbW92YWxGcm9tQWxsKTtcblxuICAgICAgICAgICAgLy9cblxuICAgICAgICAgICAgcmVtb3ZlSXRlbUZyb21BbGwodGFza0lkSW5BbGwpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBwcm9qIG5hbWUgJiBpbmRleFwiICsgY3VycmVudFByb2pOYW1lICsgXCIgXCIgKyBjdXJyZW50UHJvakluZGV4KTtcblxuICAgICAgICAgICAgLy9yZW1vdmVzIHRhc2sgZnJvbSByZXNwZWN0aXZlIHByb2plY3Qgd2l0aGluIGFsbFByb2plY3RzXG4gICAgICAgICAgICByZW1vdmVJdGVtRnJvbUN1cnJlbnQoY3VycmVudFByb2pJbmRleCwgdGFza0lkSW5BbGwpO1xuXG4gICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0pOy8vbG9jYWxTdG9yYWdlXG4gICAgICAgICAgICAvL3JlZnJlc2hlcyBmb2xkZXIgdG8gdXBkYXRlIHcvbyByZW1vdmVkIHRhc2tcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxQcm9qZWN0c1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgc2VlQWxsKGFsbEl0ZW1zKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmNsYXNzTmFtZSA9PT0gXCJlZGl0VGFza19idXR0b25cIiAmJiBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDgsIDE1KSA9PT0gXCJBbGxQYWdlXCIpIHtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgdmFyIGVkaXRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuaWQuc2xpY2UoMTYpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEludG9FZGl0b3IoZWRpdElEKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlRWRpdEJ1dHRvblwiKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEVkaXRJbnRvQ3VycmVudEFsbChlZGl0SUQpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgY2FuY2VsVXBkYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsRWRpdEJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNhbmNlbFVwZGF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IFxuICAgICAgICAvKiBGaWd1cmUgb3V0IGhvdyB0byBjb25maWd1cmUgdGhpcyBmeG4gc28gdGhhdCBlZGl0IGdvZXMgaW50byBhbGxQcm9qIGFuZCBhbGxJdGVtIGxpc3QhICovXG4gICAgICAgIGZ1bmN0aW9uIHNldEVkaXRJbnRvQ3VycmVudEFsbCh4KSB7XG5cbiAgICAgICAgICAgIHZhciBlZGl0ZWRUaXRsZSA9IGVkaXRGb3JtLmVkaXRUaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWREZXNjcmlwdGlvbiA9IGVkaXRGb3JtLmVkaXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWREdWVEYXRlID0gZWRpdEZvcm0uZWRpdER1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkUHJpb3JpdHkgPSBlZGl0Rm9ybS5lZGl0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkTm90ZXMgPSBlZGl0Rm9ybS5lZGl0Tm90ZXMudmFsdWU7XG4gICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudFRhc2tJbmRleEFsbCA9IGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3h9YCk7XG4gICAgICAgICAgICBhbGxJdGVtcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHt4fWApO1xuICAgICAgICAgICAgdmFyIGluc2VydFRhcmcgPSBhbGxJdGVtc1tgJHtjdXJyZW50VGFza0luZGV4QWxsfWBdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGluc2VydFRhcmcudGl0bGVTZXROZXcoZWRpdGVkVGl0bGUpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5kZXNjcmlwdGlvblNldE5ldyhlZGl0ZWREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLmR1ZURhdGVTZXROZXcoZWRpdGVkRHVlRGF0ZSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLnByaW9yaXR5U2V0TmV3KGVkaXRlZFByaW9yaXR5KTtcbiAgICAgICAgICAgIGluc2VydFRhcmcubm90ZXNTZXROZXcoZWRpdGVkTm90ZXMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbFByb2plY3RzXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbEl0ZW1zXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxJdGVtcyk7XG5cbiAgICAgICAgICAgIHNlZUFsbChhbGxJdGVtcyk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRDdXJyZW50SW50b0VkaXRvcihzb21lSUQpIHtcbiAgICAgICAgICAgIGVkaXRGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmZvQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIC8vZ28gd2l0aGluIGFsbEl0ZW1zICYgZmluZCBzcGVjaWZpYyBpbmRleFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXNrSW5kZXhBbGwgPSBhbGxJdGVtcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHtzb21lSUR9YCk7XG4gICAgICAgICAgICBhbGxJdGVtcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHtzb21lSUR9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza0luZGV4QWxsKTtcbiAgICAgICAgICAgIC8vdGFrZSBlYWNoIC4uLiBkZXNjcmlwdGlvbj8gcGFydCBvZiBjb25zdHJ1Y3RvciBhbmQgZ2V0IHRoZSB2YWx1ZXMgbWF0Y2hlZCB0byBlYWNoIHBhcnRcbiAgICAgICAgICAgIC8vcHVzaCBzYWlkIHZhbHVlcy9tYXRjaGVzIGludG8gY3VycmVudEluZm9BcnJheVxuICAgICAgICAgICAgdmFyIHRlc3RvYmogPSBhbGxJdGVtc1tgJHtjdXJyZW50VGFza0luZGV4QWxsfWBdO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVzdG9iaik7XG4gICAgXG4gICAgICAgICAgICAvL2ZpbmRzIGtleSB2YWx1ZSBwYWlycyBvZiB0YXNrcydzIHRoaXMuaW5mbyB0eXBlXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0ZXN0b2JqKSkge1xuICAgICAgICAgICAgICAgIGlmIChbXCJkZXNjcmlwdGlvblwiLCBcImR1ZURhdGVcIiwgXCJub3Rlc1wiLCBcInByaW9yaXR5XCIsIFwidGl0bGVcIl0uaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBba2V5LCB2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmZvQXJyYXkucHVzaCh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SW5mb0FycmF5KTtcblxuICAgICAgICAgICAgZWRpdEZvcm1BcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRTbGljZWQgPSBpbnB1dC5uYW1lLnNsaWNlKDAsIC01KTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgbSA9IGN1cnJlbnRJbmZvQXJyYXkubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFNsaWNlZCA9PT0gXCJkZXNjcmlwdGlvblwiICYmIGlucHV0U2xpY2VkID09PSBjdXJyZW50SW5mb0FycmF5W2pdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXREZXNjcmlwdGlvblwiKS5pbm5lckhUTUwgPSBgJHtjdXJyZW50SW5mb0FycmF5W2pdWzFdfWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRTbGljZWQgPT09IGN1cnJlbnRJbmZvQXJyYXlbal1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2N1cnJlbnRJbmZvQXJyYXlbal1bMV19YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIGNvbnN0IHByb2pTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICAgIHByb2pTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIHZhciBidG5QYXJlbnRQcm9qTmFtZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJoM1wiKS5pZC5zbGljZSgwLCAtMyk7IFxuICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBidG5QYXJlbnRQcm9qTmFtZTtcbiAgICAgICAgdmFyIGJ0blBhcmVudEluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5wcm9qTmFtZSA9PSBidG5QYXJlbnRQcm9qTmFtZSk7XG4gICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSBidG5QYXJlbnRJbmRleDtcbiAgICAgICAgdmFyIGVkaXRGb3JtQ29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdEZvcm1Db250YWluZXJcIik7XG4gICAgICAgIHZhciBlZGl0Rm9ybU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VkaXRGb3JtIFtpZF49ZWRpdF1cIik7XG4gICAgICAgIHZhciBlZGl0Rm9ybUFycmF5ID0gWy4uLmVkaXRGb3JtTWFpbl1cblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcImRpdlwiKS5jbGFzc05hbWUgIT09IFwidGFza19idXR0b25faG9sZGVyXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZyBzaG91bGQgYmUgaGFwcGVuaW5nIGhlcmUuLi5cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbG9zZXN0KFwiZGl2XCIpLmNsYXNzTmFtZSAhPT0gXCJ0YXNrX2J1dHRvbl9ob2xkZXJcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZS5jbG9zZXN0KFwiZGl2XCIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmNsYXNzTmFtZSA9PT0gXCJyZW1vdmVzZWxmX2J1dHRvblwiKSB7XG4gICAgICAgICAgICAvL2ZpbmRzIHBhcmVudCBib3ggSUQ7IHNldHMgY3VycmVudHByb2ogbmFtZSAmIHJlc3BlY3RpdmUgY3VycmVudHByb2ogaW5kZXggdG8gcmVtb3ZlIGJ1dHRvbiZ0YXNrIGZyb21cbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudFByb2pJbmRleCBpcyBcIiArIGN1cnJlbnRQcm9qSW5kZXgpO1xuICAgICAgICAgICAgLy9maW5kcyB1bmlxdWUgSUQgb2YgdGFzayB3aXRoaW4gYWxsSXRlbXNcbiAgICAgICAgICAgIHZhciB0YXNrSWRJbkFsbCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuaWQuc2xpY2UoNCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tJZElOYWxsIGlzIFwiICsgdGFza0lkSW5BbGwpO1xuXG4gICAgICAgICAgICByZW1vdmVJdGVtRnJvbUFsbCh0YXNrSWRJbkFsbCk7XG5cbiAgICAgICAgICAgIHZhciBBUCA9IGFsbFByb2plY3RzO1xuICAgICAgICAgICAgdmFyIHkgPSBjdXJyZW50UHJvakluZGV4O1xuICAgICAgICAgICAgdmFyIHogPSBgJHtjdXJyZW50UHJvak5hbWV9Ym94YDtcblxuICAgICAgICAgICAgcmVtb3ZlSXRlbUZyb21DdXJyZW50KGN1cnJlbnRQcm9qSW5kZXgsIHRhc2tJZEluQWxsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsUHJvamVjdHNcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsSXRlbXNcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbEl0ZW1zKTtcblxuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdKTtcbiAgICAgICAgICAgIC8vcmVmcmVzaGVzIGZvbGRlciB0byB1cGRhdGUgdy9vIHJlbW92ZWQgdGFza1xuICAgICAgICAgICAgdmFyIHN0b3JhZ2VSZW1vdmFsRnJvbUFsbCA9IFtdO1xuICAgICAgICAgICAgc3RvcmFnZVJlbW92YWxGcm9tQWxsLnB1c2godGFza0lkSW5BbGwpO1xuICAgICAgICAgICAgcmVtb3ZlRnJvbUFsbEl0ZW1zKHN0b3JhZ2VSZW1vdmFsRnJvbUFsbCk7XG5cbiAgICAgICAgICAgIHJlZnJlc2hDZW50ZXJET00oQVAsIHksIHopO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcImV4cGFuZHNlbGZfYnV0dG9uXCIpIHtcbiAgICAgICAgICAgIHZhciBleHBhbmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuaWQuc2xpY2UoMTApO1xuICAgICAgICAgICAgdmFyIHRvRXhwYW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZXhwYW5kSUR9X2V4cGFuZE1lYCk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHRvZ2dsZUhvbGRlciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXYuYWRkZWRfdGFza3NcIikubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIHZhciBleHBhbmRUb2dDb3VudGVyID0gdG9nZ2xlSG9sZGVyLmlubmVySFRNTDtcblxuICAgICAgICAgICAgaWYgKGV4cGFuZFRvZ0NvdW50ZXIlMiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRvRXhwYW5kLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cGFuZFRvZ0NvdW50ZXIlMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvRXhwYW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlIGZ4biBcIiArIGV4cGFuZFRvZ0NvdW50ZXIpO1xuICAgICAgICAgICAgdG9nZ2xlRXhwYW5kKGV4cGFuZElELCBleHBhbmRUb2dDb3VudGVyKTtcbiAgICAgICAgICAgIGV4cGFuZFRvZ0NvdW50ZXIrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZnhuIFwiICsgZXhwYW5kVG9nQ291bnRlcik7XG4gICAgICAgICAgICB0b2dnbGVIb2xkZXIuaW5uZXJIVE1MID0gZXhwYW5kVG9nQ291bnRlcjtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmNsYXNzTmFtZSA9PT0gXCJlZGl0VGFza19idXR0b25cIikge1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB2YXIgZWRpdElEID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSg4KTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRJbnRvRWRpdG9yKGVkaXRJRCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZUVkaXRCdXR0b25cIik7XG4gICAgICAgICAgICB1cGRhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRFZGl0SW50b0N1cnJlbnQoZWRpdElEKTtcbiAgICAgICAgICAgICAgICBzZXRFZGl0SW50b0FsbChlZGl0SUQpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgc3RvcmVQcm9qZWN0KGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdKTtcbiAgICAgICAgICAgICAgICBzdG9yZUFsbEl0ZW1zKGFsbEl0ZW1zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxVcGRhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxFZGl0QnV0dG9uXCIpO1xuICAgICAgICAgICAgY2FuY2VsVXBkYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIFxuICAgICAgICB9IFxuXG4gICAgICAgIGZ1bmN0aW9uIHNldEVkaXRJbnRvQ3VycmVudCh4KSB7XG5cbiAgICAgICAgICAgIHZhciBlZGl0ZWRUaXRsZSA9IGVkaXRGb3JtLmVkaXRUaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWREZXNjcmlwdGlvbiA9IGVkaXRGb3JtLmVkaXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWREdWVEYXRlID0gZWRpdEZvcm0uZWRpdER1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkUHJpb3JpdHkgPSBlZGl0Rm9ybS5lZGl0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkTm90ZXMgPSBlZGl0Rm9ybS5lZGl0Tm90ZXMudmFsdWU7XG4gICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudFRhc2tJbmRleCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdW1widGFza0xpc3RcIl0uZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PT0gYCR7eH1gKTtcbiAgICAgICAgICAgIHZhciBpbnNlcnRUYXJnID0gYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF1bXCJ0YXNrTGlzdFwiXVtgJHtjdXJyZW50VGFza0luZGV4fWBdO1xuXG4gICAgICAgICAgICBpbnNlcnRUYXJnLnRpdGxlU2V0TmV3KGVkaXRlZFRpdGxlKTtcbiAgICAgICAgICAgIGluc2VydFRhcmcuZGVzY3JpcHRpb25TZXROZXcoZWRpdGVkRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5kdWVEYXRlU2V0TmV3KGVkaXRlZER1ZURhdGUpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5wcmlvcml0eVNldE5ldyhlZGl0ZWRQcmlvcml0eSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLm5vdGVzU2V0TmV3KGVkaXRlZE5vdGVzKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxQcm9qZWN0c1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxJdGVtc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0RWRpdEludG9BbGwoeCkge1xuXG4gICAgICAgICAgICB2YXIgZWRpdGVkVGl0bGUgPSBlZGl0Rm9ybS5lZGl0VGl0bGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkRGVzY3JpcHRpb24gPSBlZGl0Rm9ybS5lZGl0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkRHVlRGF0ZSA9IGVkaXRGb3JtLmVkaXREdWVEYXRlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZFByaW9yaXR5ID0gZWRpdEZvcm0uZWRpdFByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZE5vdGVzID0gZWRpdEZvcm0uZWRpdE5vdGVzLnZhbHVlO1xuICAgIFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXNrSW5kZXhBbGwgPSBhbGxJdGVtcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHt4fWApO1xuICAgICAgICAgICAgYWxsSXRlbXMuZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PT0gYCR7eH1gKTtcbiAgICAgICAgICAgIHZhciBpbnNlcnRUYXJnID0gYWxsSXRlbXNbYCR7Y3VycmVudFRhc2tJbmRleEFsbH1gXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbnNlcnRUYXJnLnRpdGxlU2V0TmV3KGVkaXRlZFRpdGxlKTtcbiAgICAgICAgICAgIGluc2VydFRhcmcuZGVzY3JpcHRpb25TZXROZXcoZWRpdGVkRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5kdWVEYXRlU2V0TmV3KGVkaXRlZER1ZURhdGUpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5wcmlvcml0eVNldE5ldyhlZGl0ZWRQcmlvcml0eSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLm5vdGVzU2V0TmV3KGVkaXRlZE5vdGVzKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxQcm9qZWN0c1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxJdGVtc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuXG4gICAgICAgICAgICBzZWVBbGwoYWxsSXRlbXMpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0Q3VycmVudEludG9FZGl0b3Ioc29tZUlEKSB7XG4gICAgICAgICAgICBlZGl0Rm9ybUNvbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdEZvcm1BcnJheSBcIiArIGVkaXRGb3JtQXJyYXkpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmZvQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIC8vZ28gd2l0aGluIGFsbFByb2plY3RzLCB0byBjdXJyZW50IHByb2plY3QgaW5kZXgsIHRvIHRhc2tsaXN0LCB0byBzcGVjaWZpYyBpbmRleCB3aXRoaW4gdGFza2xpc3RcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGFza0luZGV4ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF1bXCJ0YXNrTGlzdFwiXS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHtzb21lSUR9YCk7XG4gICAgICAgICAgICAvL3Rha2UgZWFjaCAuLi4gZGVzY3JpcHRpb24/IHBhcnQgb2YgY29uc3RydWN0b3IgYW5kIGdldCB0aGUgdmFsdWVzIG1hdGNoZWQgdG8gZWFjaCBwYXJ0XG4gICAgICAgICAgICAvL3B1c2ggc2FpZCB2YWx1ZXMvbWF0Y2hlcyBpbnRvIGN1cnJlbnRJbmZvQXJyYXlcbiAgICAgICAgICAgIHZhciB0ZXN0b2JqID0gYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF1bXCJ0YXNrTGlzdFwiXVtgJHtjdXJyZW50VGFza0luZGV4fWBdO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVzdG9iaik7XG4gICAgXG4gICAgICAgICAgICAvL2ZpbmRzIGtleSB2YWx1ZSBwYWlycyBvZiB0YXNrcydzIHRoaXMuaW5mbyB0eXBlXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0ZXN0b2JqKSkge1xuICAgICAgICAgICAgICAgIGlmIChbXCJkZXNjcmlwdGlvblwiLCBcImR1ZURhdGVcIiwgXCJub3Rlc1wiLCBcInByaW9yaXR5XCIsIFwidGl0bGVcIl0uaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBba2V5LCB2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmZvQXJyYXkucHVzaCh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SW5mb0FycmF5KTtcblxuICAgICAgICAgICAgZWRpdEZvcm1BcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRTbGljZWQgPSBpbnB1dC5uYW1lLnNsaWNlKDAsIC01KTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgbSA9IGN1cnJlbnRJbmZvQXJyYXkubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFNsaWNlZCA9PT0gXCJkZXNjcmlwdGlvblwiICYmIGlucHV0U2xpY2VkID09PSBjdXJyZW50SW5mb0FycmF5W2pdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXREZXNjcmlwdGlvblwiKS5pbm5lckhUTUwgPSBgJHtjdXJyZW50SW5mb0FycmF5W2pdWzFdfWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRTbGljZWQgPT09IGN1cnJlbnRJbmZvQXJyYXlbal1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2N1cnJlbnRJbmZvQXJyYXlbal1bMV19YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pIFxuXG4gICAgY29uc3QgYWRkTmV3UHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3cHJval9hZGRcIik7XG4gICAgYWRkTmV3UHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHZhciBzdG9wRnJvbUFkZGluZ05ldyA9IDA7XG4gICAgICAgIHZhciB0YWtlblByb2pOYW1lcyA9IFtdO1xuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIHRha2VuUHJvak5hbWVzLnB1c2goZWwucHJvak5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFrZW5Qcm9qTmFtZXMuZm9yRWFjaChlayA9PiB7XG4gICAgICAgICAgICBpZiAoZWsgPT09IGFkZG5ld3Byb2pmb3JtLm5ld3Byb2pfbmFtZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdW5pcXVlIHByb2plY3QgbmFtZS5cIik7XG4gICAgICAgICAgICAgICAgc3RvcEZyb21BZGRpbmdOZXcgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCEvXFxTLy50ZXN0KGFkZG5ld3Byb2pmb3JtLm5ld3Byb2pfbmFtZS52YWx1ZSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcHJvamVjdCBuYW1lLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdG9wRnJvbUFkZGluZ05ldyA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgYSA9IGFkZG5ld3Byb2pmb3JtLm5ld3Byb2pfbmFtZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IFByb2plY3QoYSk7XG4gICAgICAgICAgICBhZGRQcm9qVG9BbGwoeCk7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIGFkZFByb2pUb1NpZGUoeCk7IC8vRE9NXG4gICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSB4LnByb2pOYW1lIFxuICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT09IGAke2N1cnJlbnRQcm9qTmFtZX1gKTsvL3N3aXRjaCBuZXdseSBtYWRlIHByb2ogdG8gY3VycmVudFByb2pOYW1lIGFuZCBjdXJyZW50UHJvakluZGV4XG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlKGN1cnJlbnRQcm9qTmFtZSk7XG5cbiAgICAgICAgICAgIC8vbG9jYWxzdG9yYWdlIGhlcmVcblxuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdKTsgLy9cInJlZnJlc2hlc1wiIHByb2ogaW4gbG9jYWxTdG9yYWdlIHRvIGluY2x1ZGUgbmV3IGFkZGVkIHRhc2tcbiAgICAgICAgICAgIHN0b3JlUHJvamVjdChhbGxQcm9qZWN0c1swXSk7XG4gICAgICAgICAgICAvL2Fsc28gYWRkcyBoaWRkZW4gcHJvaiBzbyB0aGF0IHRoZSBcInNwYWNlXCIgaXMgdGFrZW4gd2hlbiBsb2NhbHN0b3JhZ2UgaXMgYWNjZXNzZWQgYW5kIERPTSBkaXNwbGF5ZWRcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRuZXdwcm9qZm9ybVwiKS5yZXNldCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50cHJvaiBuYW1lIGlzIFwiICsgY3VycmVudFByb2pOYW1lICsgXCIgYW5kIGN1cnJlbnQgcHJvaiBpbmRleCBpcyBcIiArIGN1cnJlbnRQcm9qSW5kZXgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXJrTGlnaHRUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZUhvbGRlclwiKTtcbiAgICBkYXJrTGlnaHRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTmFtZXNPbmx5XCIpLmNsYXNzTmFtZSAhPT0gXCJkYXJrLW1vZGVcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVkT2ZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlZE9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTmFtZXNPbmx5XCIpLmNsYXNzTmFtZSA9PT0gXCJkYXJrLW1vZGVcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVkT2ZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZWRPblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH07XG4gICAgICAgIHRvZ2dsZURhcmsoKTtcbiAgICB9KVxuXG4gICAgLy8gbG9jYWxTdG9yYWdlIGNvZGUgdW5kZXIgaGVyZVxuXG4gICAgbGV0IHJldHJpZXZlZFByb2pEYXRhID0gW107XG4gICAgbGV0IHJldHJpZXZlZEFsbERhdGEgPSBbXTtcblxuICAgIGlmIChzdG9yYWdlVGVzdCgpKSB7XG4gICAgICAgIHJldHJpZXZlUHJvamVjdHMocmV0cmlldmVkUHJvakRhdGEsIHJldHJpZXZlZEFsbERhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXRyaWV2ZWRQcm9qRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJldHJpZXZlZEFsbERhdGEpO1xuXG4gICAgICAgIC8vLy8vLy8vbmVlZCB0byBjaGVjayBJRiB0aGVyZSBpcyBzb21ldGhpbmcgYmVzaWRlcyBoaWRkZW5cbiAgICAgICAgLyogcmV0cmlldmVkQ3VycmVudFByb2pOYW1lID0gcmV0cmlldmVkUHJvakRhdGFbMV0ucHJvak5hbWU7XG4gICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IHJldHJpZXZlZEN1cnJlbnRQcm9qTmFtZTtcbiAgICAgICAgY3VycmVudFByb2pJbmRleCA9IDE7ICovXG5cbiAgICAgICAgLy93aWxsIG5lZWQgdG8gd3JpdGUgaWYvZWxzZSB0byBjaGVjayB0aGF0IHRoZXJlIEFSRSBwcm9qZWN0cyBhbmQgbm90IGp1c3QgYWxsSXRlbXMsIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIHJldHJpZXZlZFByb2pEYXRhLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgcHJvalRvQmVDb25zdHJ1Y3RlZCA9IG5ldyBQcm9qZWN0KGAke2VsLnByb2pOYW1lfWApO1xuICAgICAgICAgICAgcHJvalRvQmVDb25zdHJ1Y3RlZC5JRCA9IGVsLklEO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWwudGFza0xpc3QpO1xuICAgICAgICAgICAgaWYgKGVsLnRhc2tMaXN0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZWwudGFza0xpc3QuZm9yRWFjaChlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGluZyB0aGUgaWQuLi4uXCIgKyBlbS5JRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlbS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBlbS5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGVtLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGVtLm5vdGVzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGVtLnByb2plY3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbWFkZVRhc2sgPSBuZXcgSXRlbShhLCBiLCBjLCBkLCBlLCBmKVxuICAgICAgICAgICAgICAgICAgICByZW1hZGVUYXNrLklEID0gZW0uSUQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbWFkZVRhc2suZ2l2ZURlZXRzKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2pUb0JlQ29uc3RydWN0ZWQudGFza0xpc3QucHVzaChyZW1hZGVUYXNrKTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgLy9hZGRzIGVhY2ggdGFza0xpc3QgaXRlbSBpbnRvIHJlbWFkZSBQcm9qZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qVG9CZUNvbnN0cnVjdGVkKTtcblxuICAgICAgICAgICAgaWYgKGVsLnByb2pOYW1lID09PSBcIl9oSWREZU5cIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgcHJvamVjdCB0aGF0IHNob3VsZCBiZSBoaWRkZW4uLi5cIiArIGVsLnByb2pOYW1lKTtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy51bnNoaWZ0KHByb2pUb0JlQ29uc3RydWN0ZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKHByb2pUb0JlQ29uc3RydWN0ZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3NvcnRzIGJ5IElELCBhc2NlbmRpbmcsIHNvIHRoYXQgaGlkZGVuIGlzIGZpcnN0XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5zb3J0KGZ1bmN0aW9uKGEsIGIpe3JldHVybiBhLklEIC0gYi5JRH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYWxsUHJvamVjdHMgYmVsb3dgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0cmlldmVkQWxsRGF0YS5mb3JFYWNoKGVuID0+IHtcblxuICAgICAgICAgICAgdmFyIGEgPSBlbi50aXRsZTtcbiAgICAgICAgICAgIHZhciBiID0gZW4uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB2YXIgYyA9IGVuLmR1ZURhdGU7XG4gICAgICAgICAgICB2YXIgZCA9IGVuLnByaW9yaXR5O1xuICAgICAgICAgICAgdmFyIGUgPSBlbi5ub3RlcztcbiAgICAgICAgICAgIHZhciBmID0gZW4ucHJvamVjdDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHRhc2tUb0JlTWFkZSA9IG5ldyBJdGVtKGEsIGIsIGMsIGQsIGUsIGYpXG4gICAgICAgICAgICB0YXNrVG9CZU1hZGUuSUQgPSBlbi5JRDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb0JlTWFkZSk7XG4gICAgICAgICAgICBhbGxJdGVtcy5wdXNoKHRhc2tUb0JlTWFkZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYWxsSXRlbXMgYmVsb3dgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbEl0ZW1zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFByb2pOYW1lID0gYWxsUHJvamVjdHNbMV0ucHJvak5hbWU7XG4gICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSAxO1xuXG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvaiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnRseSBjcmVhdGluZyB0aGUgc3R1ZmYgZm9yXCIgKyBwcm9qLnByb2pOYW1lKTtcbiAgICAgICAgICAgIGFkZFByb2pUb1NpZGUocHJvaik7XG4gICAgICAgICAgICB2YXIgQVAgPSBhbGxQcm9qZWN0cztcbiAgICAgICAgICAgIHZhciB5ID0gcHJvai5JRDtcbiAgICAgICAgICAgIHZhciB6ID0gYCR7cHJvai5wcm9qTmFtZX1ib3hgO1xuICAgICAgICAgICAgcmVmcmVzaENlbnRlckRPTShBUCwgeSwgeik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLyogdmFyIEFQID0gYWxsUHJvamVjdHM7XG4gICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgdmFyIHogPSBgJHtyZXRyaWV2ZWRDdXJyZW50UHJvak5hbWV9Ym94YDtcbiAgICAgICAgcmVmcmVzaENlbnRlckRPTShBUCwgeSwgeik7ICovXG5cbiAgICAgICAgc2lkZWJhclRvZ2dsZShjdXJyZW50UHJvak5hbWUpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2cocmV0cmlldmVkRGF0YVsxXS50YXNrTGlzdFswXSk7XG4gICAgICAgIC8vY2FuIGdvIGludG8gZWFjaCBwcm9qIGZvbGRlciA+PiB0YXNrTGlzdCA+PiBlYWNoIHRhc2tcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaGlkZGVuUHJvaiA9IG5ldyBQcm9qZWN0IChcIl9oSWREZU5cIik7XG4gICAgICAgIGFkZFByb2pUb0FsbChoaWRkZW5Qcm9qKTsgXG4gICAgICAgIGFkZFByb2pUb1NpZGUoaGlkZGVuUHJvaik7XG4gICAgICAgIC8vXCJob2xkZXJcIiBmb3IgdGFza3MgYWRkZWQgaW4gYWxsSXRlbXMgcGFnZTsgY3VycmVudFByb2pJbmRleCBvZiAwXG4gICAgICAgIHZhciBpbml0UHJvaiA9IG5ldyBQcm9qZWN0KFwiTXkgRmlyc3QgTGlzdFwiKTtcbiAgICAgICAgYWRkUHJvalRvQWxsKGluaXRQcm9qKTtcbiAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT09IFwiTXkgRmlyc3QgTGlzdFwiKTtcbiAgICAgICAgY3VycmVudFByb2pOYW1lID0gYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0ucHJvak5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qSW5kZXggKyBjdXJyZW50UHJvak5hbWUpO1xuICAgICAgICBhZGRQcm9qVG9TaWRlKGluaXRQcm9qKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIFxuXG4gICAgLy9kb24ndCBicmVhayBpZiBub3RoaW5nIGlzIGZvdW5kIGluIGxvY2FsU3RvcmFnZVxuICAgIC8vc3RvcmUgZWFjaCBwcm9qZWN0IGFuZCBpdCdzIG5hbWUgKG5vIG92ZXJ3cml0aW5nISB1bmlxdWUpXG4gICAgLy9yZXRyaWV2ZSBuYW1lXG5cbiAgICAvL3N0b3JlUHJvamVjdChoaWRkZW5Qcm9qKTsgdGVzdGluZyBhIHN0b3JlZCBwcm9qZWN0XG4gICAgXG4gICAgXG5cbiAgICAvL3N0b3JlUHJvamVjdChpbml0UHJvaik7XG5cbiAgICAvL3N0b3JhZ2VUZXN0KCk7IHdpbGwgcHJvYmFibHkgd2FudCB0byBhZGQgdGhpcyBiZWZvcmUgc3RvcmluZyBoaWRkZW4vaW5pdFByb2ogdG8gY2hlY2sgSUYgcGVyc29uIGhhcyBhbHJlYWR5IHZpc2l0ZWRcbiAgICBcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JhZ2VUZXN0KCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYm9vdHkgdG8gYmUgZm91bmRcIik7XG4gICAgICAgIC8vcG9wdWxhdGVTdG9yYWdlKCk7Pz9cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGVyZSdzIHN0dWZmIGluIGhlcmUhXCIpO1xuICAgICAgICAvL2xvY2FsU3RvcmFnZSBpcyBOT1QgYXJyYXksIGp1c3Qgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAvKiB2YXIgcmV0cmlldmVkUHJvaiA9IHJldHJpZXZlUHJvamVjdChcIl9oSWREZU5cIik7XG4gICAgICAgIHZhciB0ZXN0UmV0cmlldmFsTmFtZSA9IHJldHJpZXZlZFByb2oucHJvak5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXRyaWV2ZWRQcm9qZWN0IHByb2pOYW1lOiAnLCB0ZXN0UmV0cmlldmFsTmFtZSk7ICovXG4gICAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZUFsbEl0ZW1zKHgpIHtcbiAgeC5mb3JFYWNoKGVsID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgYUxsSXRFbVNfJHtlbC5JRH1gLCBKU09OLnN0cmluZ2lmeShlbCkpO1xuICAgIGNvbnNvbGUubG9nKGBTdG9yaW5nIGFsbEl0ZW1zIElEIG9mOiAke2VsLklEfWApXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3QoeCkge1xuICBjb25zb2xlLmxvZyhgd2hhdCBpbiB0aGUgd29ybGQgaXMgWD8gSEVSRTogJHt4LnByb2pOYW1lfWApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt4LnByb2pOYW1lfWAsIEpTT04uc3RyaW5naWZ5KHgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21BbGxJdGVtcyhvcmlnaW5hbElkQXJyYXkpIHtcbiAgdmFyIG5ld0lkQXJyYXkgPSBvcmlnaW5hbElkQXJyYXkuc2xpY2UoKTtcbiAgd2hpbGUgKG5ld0lkQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBzKyspIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2Uua2V5KHMpID09PSBgYUxsSXRFbVNfJHtuZXdJZEFycmF5WzBdfWApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgd2hhdCBpcyBiZWluZyByZW1vdmVkIGluIHJlbW92ZUZyb21BbGw6IFwiICsgbmV3SWRBcnJheVswXSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGFMbEl0RW1TXyR7bmV3SWRBcnJheVswXX1gKTtcbiAgICAgICAgICBuZXdJZEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnNvbGUubG9nKG9yaWdpbmFsSWRBcnJheSk7XG59XG5cbi8qIGV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvak5hbWVGcm9tQWxsSXRlbXMoYXJyYXkpIHtcbiAgdmFyIG5ld1Rlc3RBcnJheSA9IGFycmF5LnNsaWNlKCk7XG4gIHdoaWxlIChuZXdUZXN0QXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgZm9yICh2YXIgdSA9IDA7IHUgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyB1KyspIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2Uua2V5KHUpID09PSBgYUxsSXRFbVNfJHtuZXdUZXN0QXJyYXlbMF19YCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgd2hhdCBpcyBiZWluZyBlZGl0IGZyb20gYWxsSXRlbXMgaW4gbG9jYWxTdG9yYWdlOiBcIiArIG5ld1Rlc3RBcnJheVswXSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBhTGxJdEVtU18ke25ld0lkQXJyYXlbMF19YCk7XG4gICAgICAgIG5ld0lkQXJyYXkuc3BsaWNlKDAsIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qTmFtZUZyb21BbGxJdGVtcyh4LCBuYW1lTmV3KSB7XG5cbiAgeC5mb3JFYWNoKGVsID0+IHtcbiAgICB2YXIgcmV0cmlldmVkVGFzayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBhTGxJdEVtU18ke2VsLklEfWApO1xuICAgIHZhciBwYXJzZWRUYXNrID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRUYXNrKTtcbiAgICBwYXJzZWRUYXNrLnByb2plY3QgPSBuYW1lTmV3O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBhTGxJdEVtU18ke2VsLklEfWAsIEpTT04uc3RyaW5naWZ5KGVsKSk7XG4gICAgY29uc29sZS5sb2coYFJFLXN0b3JpbmcgYWxsSXRlbXMgSUQgb2Y6ICR7ZWwuSUR9IHdpdGggYSBuZXcgcHJvamVjdCBuYW1lIG9mICR7bmFtZU5ld31gKTtcbiAgfSlcbiAgLy9hZGQgcmVuYW1pbmcgZnVuY3Rpb24gYmFjayBieSB1c2luZyBjb25zdHJ1Y3RvciBhZ2FpblxuXG5cbiAgLyogY29uc29sZS5sb2coJ3JldHJpZXZlZFByb2plY3QgQUZURVIgYWRkaW5nOiAnICsgIHBhcnNlZFByb2plY3QpO1xuICBwYXJzZWRQcm9qZWN0LnNldE5ld1Byb2pOYW1lKFwiVGVzdGluZ0NoYW5nZVwiKTtcbiAgY29uc29sZS5sb2cocGFyc2VkUHJvamVjdC5kaXNwbGF5UHJvaigpKTtcbiAgY29uc29sZS5sb2coXCJ1c2luZyB0aGUgZnhuOiBcIiArIHBhcnNlZFByb2plY3QuZ2l2ZVByb2pOYW1lKCkpOyAqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdCh4KSB7XG4gIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB3aGF0IGlzIGJlaW5nIHJlbW92ZWQgaW4gcmVtb3ZlUHJvajogXCIgKyB4KVxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbn1cbi8qIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVRhc2soeCkge1xuICBjb25zb2xlLmxvZyhgSUQgZm9yIHRhc2s6ICR7eC5JRH1gKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7eC5JRH1gLCBKU09OLnN0cmluZ2lmeSh4KSk7XG59ICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTaW5nbGVUYXNrSW5Qcm9qKHgsIHByb2pJbmRleCwgQVApIHtcbiAgY29uc29sZS5sb2coYFRoaXMgdGFzayBJRCBvZiAke3h9IGlzIHdoYXQgaXMgYmVpbmcgcmVtb3ZlZCBmcm9tIHByb2plY3Qgdy8gaW5kZXggb2YgJHtwcm9qSW5kZXh9YCk7XG4gIHZhciBpbmRleFRvQmVTcGxpY2VkID0gQVBbYCR7cHJvakluZGV4fWBdW1widGFza0xpc3RcIl0uZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PSB4KTtcbiAgQVBbYCR7cHJvakluZGV4fWBdW1widGFza0xpc3RcIl0uc3BsaWNlKGluZGV4VG9CZVNwbGljZWQsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVQcm9qZWN0cyhzb21lQXJyYXksIGFub3RoZXJBcnJheSkge1xuXG4gIC8vaXRlcmF0ZXMgdGhyb3VnaCBsb2NhbFN0b3JhZ2UgZm9yIGhpZGRlbiBhbmQgYWxsIHByb2plY3RzXG4gIC8vdGhlc2UgcHJvamVjdHMgZG8gTk9UIGhhdmUgbWV0aG9kcyB5ZXRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJvalJldHJpZXZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB3aGF0IEknbSBnb2luZyB0byBwYXJzZTogXCIrIHByb2pSZXRyaWV2YWwpO1xuICAgIHZhciBwYXJzZWRQcm9qUmV0cmlldiA9IEpTT04ucGFyc2UocHJvalJldHJpZXZhbCk7XG5cbiAgICBpZiAocGFyc2VkUHJvalJldHJpZXYucHJvak5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJvak5hbWUgKyBJRDogXCIgKyBwYXJzZWRQcm9qUmV0cmlldi5wcm9qTmFtZSArIFwiIFwiICsgcGFyc2VkUHJvalJldHJpZXYuSUQpO1xuICAgICAgc29tZUFycmF5LnB1c2gocGFyc2VkUHJvalJldHJpZXYpO1xuICAgIH0gZWxzZSBpZiAocGFyc2VkUHJvalJldHJpZXYuSUQuc2xpY2UoMCw0KSA9PT0gXCJwcm9qXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQUxMSVRFTVMgdGl0bGUsIGRlZXRzICYgSUQ6IFwiICsgcGFyc2VkUHJvalJldHJpZXYudGl0bGUgKyBcIiBcIiArIHBhcnNlZFByb2pSZXRyaWV2LmRlc2NyaXB0aW9uICsgXCIgXCIgKyBwYXJzZWRQcm9qUmV0cmlldi5JRCk7XG4gICAgICBhbm90aGVyQXJyYXkucHVzaChwYXJzZWRQcm9qUmV0cmlldik7XG4gICAgfVxuICB9ICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlUHJvamVjdCh4KSB7XG5cbiAgICB2YXIgcmV0cmlldmVkUHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3h9YCk7XG4gICAgdmFyIHBhcnNlZFByb2plY3QgPSBKU09OLnBhcnNlKHJldHJpZXZlZFByb2plY3QpO1xuICAgIHJldHVybiBwYXJzZWRQcm9qZWN0O1xuICAgIC8vYWRkIHJlbmFtaW5nIGZ1bmN0aW9uIGJhY2sgYnkgdXNpbmcgY29uc3RydWN0b3IgYWdhaW5cblxuXG4gICAgLyogY29uc29sZS5sb2coJ3JldHJpZXZlZFByb2plY3QgQUZURVIgYWRkaW5nOiAnICsgIHBhcnNlZFByb2plY3QpO1xuICAgIHBhcnNlZFByb2plY3Quc2V0TmV3UHJvak5hbWUoXCJUZXN0aW5nQ2hhbmdlXCIpO1xuICAgIGNvbnNvbGUubG9nKHBhcnNlZFByb2plY3QuZGlzcGxheVByb2ooKSk7XG4gICAgY29uc29sZS5sb2coXCJ1c2luZyB0aGUgZnhuOiBcIiArIHBhcnNlZFByb2plY3QuZ2l2ZVByb2pOYW1lKCkpOyAqL1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==