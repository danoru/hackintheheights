module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/events/e1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/users/user-item.js":
/*!***************************************!*\
  !*** ./components/users/user-item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-item.module.css */ \"./components/users/user-item.module.css\");\n/* harmony import */ var _user_item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_item_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/danoru/repos/hackintheheights/components/users/user-item.js\";\n\n\nfunction UserItem(props) {\n  const {\n    name,\n    image,\n    link,\n    id\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _user_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _user_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.portrait,\n      src: \"/\" + image,\n      alt: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _user_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _user_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: link,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _user_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.github,\n            src: \"/GitHub.png\",\n            alt: \"Github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJzL3VzZXItaXRlbS5qcz8yZjkxIl0sIm5hbWVzIjpbIlVzZXJJdGVtIiwicHJvcHMiLCJuYW1lIiwiaW1hZ2UiLCJsaW5rIiwiaWQiLCJjbGFzc2VzIiwiaXRlbSIsInBvcnRyYWl0IiwiY29udGVudCIsInN1bW1hcnkiLCJnaXRodWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixRQUFNO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQyxRQUFmO0FBQXFCQztBQUFyQixNQUE0QkosS0FBbEM7QUFFQSxzQkFDRTtBQUFJLGFBQVMsRUFBRUssNERBQU8sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsNERBQU8sQ0FBQ0UsUUFBeEI7QUFBa0MsU0FBRyxFQUFFLE1BQU1MLEtBQTdDO0FBQW9ELFNBQUcsRUFBRUQ7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVJLDREQUFPLENBQUNHLE9BQXhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFSCw0REFBTyxDQUFDSSxPQUF4QjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtSO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsY0FBSSxFQUFFRSxJQUFUO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFRSw0REFBTyxDQUFDSyxNQUF4QjtBQUFnQyxlQUFHLEVBQUMsYUFBcEM7QUFBa0QsZUFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztBQUFBO0FBRWNYLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91c2Vycy91c2VyLWl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi91c2VyLWl0ZW0ubW9kdWxlLmNzc1wiXG5cbmZ1bmN0aW9uIFVzZXJJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgbmFtZSwgaW1hZ2UsIGxpbmssIGlkIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3J0cmFpdH0gc3JjPXtcIi9cIiArIGltYWdlfSBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICAgICAgPGgyPntuYW1lfTwvaDI+XG4gICAgICAgICAgPGEgaHJlZj17bGlua30+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5naXRodWJ9IHNyYz1cIi9HaXRIdWIucG5nXCIgYWx0PVwiR2l0aHViXCIvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckl0ZW07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/users/user-item.js\n");

/***/ }),

/***/ "./components/users/user-item.module.css":
/*!***********************************************!*\
  !*** ./components/users/user-item.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"user-item_item__3AfCG\",\n\t\"portrait\": \"user-item_portrait__3VD_b\",\n\t\"github\": \"user-item_github__2B4hY\",\n\t\"content\": \"user-item_content__36oAH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJzL3VzZXItaXRlbS5tb2R1bGUuY3NzP2Q2MjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJzL3VzZXItaXRlbS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcInVzZXItaXRlbV9pdGVtX18zQWZDR1wiLFxuXHRcInBvcnRyYWl0XCI6IFwidXNlci1pdGVtX3BvcnRyYWl0X18zVkRfYlwiLFxuXHRcImdpdGh1YlwiOiBcInVzZXItaXRlbV9naXRodWJfXzJCNGhZXCIsXG5cdFwiY29udGVudFwiOiBcInVzZXItaXRlbV9jb250ZW50X18zNm9BSFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/users/user-item.module.css\n");

/***/ }),

/***/ "./components/users/user-list.js":
/*!***************************************!*\
  !*** ./components/users/user-list.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-item */ \"./components/users/user-item.js\");\n/* harmony import */ var _user_list_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.module.css */ \"./components/users/user-list.module.css\");\n/* harmony import */ var _user_list_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_list_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/danoru/repos/hackintheheights/components/users/user-list.js\";\n\n\n\nfunction UserList(props) {\n  const {\n    items\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    className: _user_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,\n    children: items.map(user => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_user_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      id: user.id,\n      name: user.name,\n      image: user.image,\n      link: user.link\n    }, user.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJzL3VzZXItbGlzdC5qcz9hMzI0Il0sIm5hbWVzIjpbIlVzZXJMaXN0IiwicHJvcHMiLCJpdGVtcyIsImNsYXNzZXMiLCJsaXN0IiwibWFwIiwidXNlciIsImlkIiwibmFtZSIsImltYWdlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQU07QUFBRUM7QUFBRixNQUFZRCxLQUFsQjtBQUVBLHNCQUNFO0FBQUksYUFBUyxFQUFFRSw0REFBTyxDQUFDQyxJQUF2QjtBQUFBLGNBQ0lGLEtBQUssQ0FBQ0csR0FBTixDQUFVQyxJQUFJLGlCQUNkLHFFQUFDLGtEQUFEO0FBRUUsUUFBRSxFQUFFQSxJQUFJLENBQUNDLEVBRlg7QUFHRSxVQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFIYjtBQUlFLFdBQUssRUFBRUYsSUFBSSxDQUFDRyxLQUpkO0FBS0UsVUFBSSxFQUFFSCxJQUFJLENBQUNJO0FBTGIsT0FDT0osSUFBSSxDQUFDQyxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztBQUVjUCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXNlcnMvdXNlci1saXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJJdGVtIGZyb20gXCIuL3VzZXItaXRlbVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXNlci1saXN0Lm1vZHVsZS5jc3NcIlxuXG5mdW5jdGlvbiBVc2VyTGlzdChwcm9wcykge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBwcm9wcztcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgeyBpdGVtcy5tYXAodXNlciA9PiAoXG4gICAgICAgIDxVc2VySXRlbSBcbiAgICAgICAgICBrZXk9e3VzZXIuaWR9XG4gICAgICAgICAgaWQ9e3VzZXIuaWR9XG4gICAgICAgICAgbmFtZT17dXNlci5uYW1lfVxuICAgICAgICAgIGltYWdlPXt1c2VyLmltYWdlfVxuICAgICAgICAgIGxpbms9e3VzZXIubGlua31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/users/user-list.js\n");

/***/ }),

/***/ "./components/users/user-list.module.css":
/*!***********************************************!*\
  !*** ./components/users/user-list.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"user-list_list__1P5m7\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJzL3VzZXItbGlzdC5tb2R1bGUuY3NzPzZhMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJzL3VzZXItbGlzdC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcInVzZXItbGlzdF9saXN0X18xUDVtN1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/users/user-list.module.css\n");

/***/ }),

/***/ "./pages/events/e1.js":
/*!****************************!*\
  !*** ./pages/events/e1.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-data */ \"./user-data.js\");\n/* harmony import */ var _components_users_user_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/users/user-list */ \"./components/users/user-list.js\");\n\nvar _jsxFileName = \"/home/danoru/repos/hackintheheights/pages/events/e1.js\";\n\n\n\nfunction EventPage2022() {\n  const featuredUsers = Object(_user_data__WEBPACK_IMPORTED_MODULE_1__[\"getFeaturedUsers\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Hack in the Heights Fall 2022\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_users_user_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        items: featuredUsers\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Test Stretch\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Work Tracker\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Post-Death\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Library Room Booker\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"DIY Karaoke\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"Random Generator Hub\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPage2022);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ldmVudHMvZTEuanM/NDNiYSJdLCJuYW1lcyI6WyJFdmVudFBhZ2UyMDIyIiwiZmVhdHVyZWRVc2VycyIsImdldEZlYXR1cmVkVXNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsUUFBTUMsYUFBYSxHQUFHQyxtRUFBZ0IsRUFBdEM7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLG1FQUFEO0FBQ0UsYUFBSyxFQUFFRDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztBQUVjRCw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2V2ZW50cy9lMS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZlYXR1cmVkVXNlcnMgfSBmcm9tIFwiLi4vLi4vdXNlci1kYXRhXCJcbmltcG9ydCBVc2VyTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2Vycy91c2VyLWxpc3RcIlxuXG5mdW5jdGlvbiBFdmVudFBhZ2UyMDIyKCkge1xuICBjb25zdCBmZWF0dXJlZFVzZXJzID0gZ2V0RmVhdHVyZWRVc2VycygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5IYWNrIGluIHRoZSBIZWlnaHRzIEZhbGwgMjAyMjwvaDE+XG4gICAgICAgIDxVc2VyTGlzdFxuICAgICAgICAgIGl0ZW1zPXtmZWF0dXJlZFVzZXJzfSBcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5UZXN0IFN0cmV0Y2g8L2xpPlxuICAgICAgICAgIDxsaT5Xb3JrIFRyYWNrZXI8L2xpPlxuICAgICAgICAgIDxsaT5Qb3N0LURlYXRoPC9saT5cbiAgICAgICAgICA8bGk+TGlicmFyeSBSb29tIEJvb2tlcjwvbGk+XG4gICAgICAgICAgPGxpPkRJWSBLYXJhb2tlPC9saT5cbiAgICAgICAgICA8bGk+UmFuZG9tIEdlbmVyYXRvciBIdWI8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRQYWdlMjAyMjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/e1.js\n");

/***/ }),

/***/ "./user-data.js":
/*!**********************!*\
  !*** ./user-data.js ***!
  \**********************/
/*! exports provided: getFeaturedUsers, getAllUsers, getUserById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedUsers\", function() { return getFeaturedUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsers\", function() { return getAllUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserById\", function() { return getUserById; });\nconst USER_DATA = [{\n  id: \"p1\",\n  name: \"Anna\",\n  image: \"images/anna.jpg\",\n  link: \"https://github.com/annaPerdomo\",\n  isFeatured: true\n}, {\n  id: \"p2\",\n  name: \"Corrie\",\n  image: \"images/corrie.jpg\",\n  link: \"https://github.com/contrabanjo\",\n  isFeatured: true\n}, {\n  id: \"p3\",\n  name: \"Daniel\",\n  image: \"images/daniel.jpg\",\n  link: \"https://github.com/danoru\",\n  isFeatured: true\n}, {\n  id: \"p4\",\n  name: \"Meagan\",\n  image: \"images/meagan.jpg\",\n  link: \"https://github.com/megmaggiemj\",\n  isFeatured: true\n}, {\n  id: \"p5\",\n  name: \"Sam\",\n  image: \"images/sam.jpg\",\n  link: \"https://github.com/sburba\",\n  isFeatured: true\n}];\nfunction getFeaturedUsers() {\n  return USER_DATA.filter(user => user.isFeatured);\n}\nfunction getAllUsers() {\n  return USER_DATA;\n}\nfunction getUserById(id) {\n  return USER_DATA.find(user => user.id === id);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2VyLWRhdGEuanM/MDhkMiJdLCJuYW1lcyI6WyJVU0VSX0RBVEEiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImxpbmsiLCJpc0ZlYXR1cmVkIiwiZ2V0RmVhdHVyZWRVc2VycyIsImZpbHRlciIsInVzZXIiLCJnZXRBbGxVc2VycyIsImdldFVzZXJCeUlkIiwiZmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNQSxTQUFTLEdBQUcsQ0FDaEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsT0FBSyxFQUFFLGlCQUhUO0FBSUVDLE1BQUksRUFBRSxnQ0FKUjtBQUtFQyxZQUFVLEVBQUU7QUFMZCxDQURnQixFQVFoQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxNQUFJLEVBQUUsUUFGUjtBQUdFQyxPQUFLLEVBQUUsbUJBSFQ7QUFJRUMsTUFBSSxFQUFFLGdDQUpSO0FBS0VDLFlBQVUsRUFBRTtBQUxkLENBUmdCLEVBZWhCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE1BQUksRUFBRSxRQUZSO0FBR0VDLE9BQUssRUFBRSxtQkFIVDtBQUlFQyxNQUFJLEVBQUUsMkJBSlI7QUFLRUMsWUFBVSxFQUFFO0FBTGQsQ0FmZ0IsRUFzQmhCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE1BQUksRUFBRSxRQUZSO0FBR0VDLE9BQUssRUFBRSxtQkFIVDtBQUlFQyxNQUFJLEVBQUUsZ0NBSlI7QUFLRUMsWUFBVSxFQUFFO0FBTGQsQ0F0QmdCLEVBNkJoQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxNQUFJLEVBQUUsS0FGUjtBQUdFQyxPQUFLLEVBQUUsZ0JBSFQ7QUFJRUMsTUFBSSxFQUFFLDJCQUpSO0FBS0VDLFlBQVUsRUFBRTtBQUxkLENBN0JnQixDQUFsQjtBQXNDTyxTQUFTQyxnQkFBVCxHQUE0QjtBQUNqQyxTQUFPTixTQUFTLENBQUNPLE1BQVYsQ0FBa0JDLElBQUQsSUFBVUEsSUFBSSxDQUFDSCxVQUFoQyxDQUFQO0FBQ0Q7QUFFTSxTQUFTSSxXQUFULEdBQXVCO0FBQzVCLFNBQU9ULFNBQVA7QUFDRDtBQUVNLFNBQVNVLFdBQVQsQ0FBcUJULEVBQXJCLEVBQXlCO0FBQzlCLFNBQU9ELFNBQVMsQ0FBQ1csSUFBVixDQUFnQkgsSUFBRCxJQUFVQSxJQUFJLENBQUNQLEVBQUwsS0FBWUEsRUFBckMsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vdXNlci1kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVVNFUl9EQVRBID0gW1xuICB7XG4gICAgaWQ6IFwicDFcIixcbiAgICBuYW1lOiBcIkFubmFcIixcbiAgICBpbWFnZTogXCJpbWFnZXMvYW5uYS5qcGdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbm5hUGVyZG9tb1wiLFxuICAgIGlzRmVhdHVyZWQ6IHRydWVcbiAgfSxcbiAge1xuICAgIGlkOiBcInAyXCIsXG4gICAgbmFtZTogXCJDb3JyaWVcIixcbiAgICBpbWFnZTogXCJpbWFnZXMvY29ycmllLmpwZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvbnRyYWJhbmpvXCIsXG4gICAgaXNGZWF0dXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IFwicDNcIixcbiAgICBuYW1lOiBcIkRhbmllbFwiLFxuICAgIGltYWdlOiBcImltYWdlcy9kYW5pZWwuanBnXCIsXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vZGFub3J1XCIsXG4gICAgaXNGZWF0dXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IFwicDRcIixcbiAgICBuYW1lOiBcIk1lYWdhblwiLFxuICAgIGltYWdlOiBcImltYWdlcy9tZWFnYW4uanBnXCIsXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbWVnbWFnZ2llbWpcIixcbiAgICBpc0ZlYXR1cmVkOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBpZDogXCJwNVwiLFxuICAgIG5hbWU6IFwiU2FtXCIsXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL3NhbS5qcGdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYnVyYmFcIixcbiAgICBpc0ZlYXR1cmVkOiB0cnVlXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmVhdHVyZWRVc2VycygpIHtcbiAgcmV0dXJuIFVTRVJfREFUQS5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaXNGZWF0dXJlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgcmV0dXJuIFVTRVJfREFUQTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJCeUlkKGlkKSB7XG4gIHJldHVybiBVU0VSX0RBVEEuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gaWQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./user-data.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });