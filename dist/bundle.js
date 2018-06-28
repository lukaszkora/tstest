/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(/*! express */ "express");
// import express from 'express';
// import
var index_1 = __webpack_require__(/*! @routes/index */ "./src/routes/index.ts");
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = 3000;
// // create some books and get their descriptions
// let booksILike = [
//     new Book("Under The Dome", "Steven King"),
//     new Book("Julius Ceasar", "William Shakespeare")
// ];
//
//
// export function hello(word: string = world): string {
//   console.log(booksILike);
//   return `Hello ${world}! `;
// }
// app.get('/', (req, res, next) => {
//     let newperson = new Person('pFirstName', 'pLastName'),
//         name = newperson.getFullName();
//
//    console.log('aaaaa ' + name);
//    res.json('bbbbb ' + name);
// });
// Mount the IndexRouter at the main route
app.use('/', index_1.indexRouter);
app.listen(port, function () {
    console.log("App is listening on port " + port);
});

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = __webpack_require__(/*! express */ "express");
// import { config } from 'dotenv';
// import the book module
// import { favoriteBook, Book } from './book';
var book_1 = __webpack_require__(/*! ../testbbb/book */ "./src/testbbb/book.js");
var router = express_1.Router();
router.get('/', function (req, res) {
    console.log('routes/index.ts router.get("/")');
    res.status(200).json({
        message: 'routes/index.ts router.get("/")'
    });
});
router.get('/test', function (req, res) {
    console.log('routes/index.ts router.get("/test")');
    var bk = new book_1.Book('someTitle', 'someAuthor'),
        say = bk.describeBook();
    console.log(say);
    var a = {
        prop1: 1,
        prop2: 2
    };
    a.prop1 = 3;
    a.prop2 = 4;
    console.log(a);
    var testenv = process.env.TESTENV;
    console.log(testenv);
    res.status(200).json({
        message: 'routes/index.ts router.get("/test")'
    });
});
// Export the express.Router() instance to be used by app.ts
exports.indexRouter = router;

/***/ }),

/***/ "./src/testbbb/book.js":
/*!*****************************!*\
  !*** ./src/testbbb/book.js ***!
  \*****************************/
/*! exports provided: favoriteBook, Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteBook", function() { return favoriteBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
// book.js
const favoriteBook = {
    title: "The Guards",
    author: "Ken Bruen"
}

// a Book class using ES6 class syntax
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    describeBook() {
        let description = this.title + " by " + this.author + ".";
        return description;
    }
}

// exporting looks different from Node.js but is almost as simple




// // book.js
// var favoriteBook = {
//     title: "The Guards",
//     author: "Ken Bruen"
//
//     // a Book class using ES6 class syntax
// };
// var Book = function () {
//     function Book(title, author) {
//         _classCallCheck(this, Book);
//
//         this.title = title;
//         this.author = author;
//     }
//
//     _createClass(Book, [{
//         key: "describeBook",
//         value: function describeBook() {
//             var description = this.title + " by " + this.author + ".";
//             return description;
//         }
//     }]);
//
//     return Book;
// }();

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map