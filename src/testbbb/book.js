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
export {favoriteBook, Book};



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