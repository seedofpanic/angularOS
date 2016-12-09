/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("import angular from '../../node_modules/angular/angular.js';\n\nvar osApp = angular.module(\"osApp\", []);\n\nosApp.controller(\"osAppCtrl\", function ($scope) {\n    $scope.data = {\n        id: 1,\n        value: 'value'\n    };\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz9jNDViIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJvc0FwcCIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJkYXRhIiwiaWQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsT0FBUCxNQUFvQix1Q0FBcEI7O0FBRUEsSUFBSUMsUUFBUUQsUUFBUUUsTUFBUixDQUFlLE9BQWYsRUFBd0IsRUFBeEIsQ0FBWjs7QUFFQUQsTUFBTUUsVUFBTixDQUFpQixXQUFqQixFQUE4QixVQUFTQyxNQUFULEVBQWlCO0FBQzNDQSxXQUFPQyxJQUFQLEdBQWM7QUFDVkMsWUFBSSxDQURNO0FBRVZDLGVBQU87QUFGRyxLQUFkO0FBSUgsQ0FMRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIvYW5ndWxhci5qcyc7XG5cbnZhciBvc0FwcCA9IGFuZ3VsYXIubW9kdWxlKFwib3NBcHBcIiwgW10pO1xuXG5vc0FwcC5jb250cm9sbGVyKFwib3NBcHBDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5kYXRhID0ge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);