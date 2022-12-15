/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (function() {

eval("const values = [{\n  name: \"Pineapple\",\n  calories: 33,\n  fat: 0,\n  carbs: 11.8\n}, {\n  name: \"Apple\",\n  calories: 57,\n  fat: 0.7,\n  carbs: 12.1\n}, {\n  name: \"Orange\",\n  calories: 51,\n  fat: 0.2,\n  carbs: 11.3\n}, {\n  name: \"Cherry\",\n  calories: 67,\n  fat: 0.4,\n  carbs: 14.6\n}];\nconst valuesContainer = document.querySelector(\".app--values\");\nconst desktopViewport = window.matchMedia(\"screen and (min-width: 500px)\");\nconst drawValues = isDesktop => {\n  if (isDesktop) {\n    drawDesktopValues();\n  } else {\n    drawMobileValues();\n  }\n};\nconst drawMobileValues = () => {\n  valuesContainer.innerHTML = \"\";\n  let list = document.createElement(\"ul\");\n  values.forEach(value => {\n    let element = document.createElement(\"li\");\n    let name = document.createElement(\"div\");\n    name.innerHTML = `<strong>Name: </strong>${value.name}`;\n    let calories = document.createElement(\"div\");\n    calories.innerHTML = `<strong>Calories: </strong>${value.calories}`;\n    let fat = document.createElement(\"div\");\n    fat.innerHTML = `<strong>Fat: </strong>${value.fat}`;\n    let carbs = document.createElement(\"div\");\n    carbs.innerHTML = `<strong>Carbohydrates: </strong>${value.carbs}`;\n    element.appendChild(name);\n    element.appendChild(calories);\n    element.appendChild(fat);\n    element.appendChild(carbs);\n    list.appendChild(element);\n  });\n  valuesContainer.appendChild(list);\n};\nconst drawDesktopValues = () => {\n  valuesContainer.innerHTML = \"\";\n  let table = document.createElement(\"table\");\n  let thead = document.createElement(\"thead\");\n  thead.innerHTML = \"<tr><th>Name</th><th>Calories</th><th>Fat</th><th>Carbohydrates</th></tr>\";\n  let tbody = document.createElement(\"tbody\");\n  values.forEach(value => {\n    let row = document.createElement(\"tr\");\n    row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`;\n    tbody.appendChild(row);\n  });\n  table.appendChild(thead);\n  table.appendChild(tbody);\n  valuesContainer.appendChild(table);\n};\ndrawValues(desktopViewport.matches);\ndesktopViewport.addEventListener(\"change\", isDesktop => {\n  drawValues(isDesktop.matches);\n});\n\n//# sourceURL=webpack://webpack_project/./js/main.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_project/./scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./js/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scss/style.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;