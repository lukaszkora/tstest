import * as express from 'express';
// import express from 'express';
// import

import { indexRouter } from '@routes/index';


// Create a new express application instance
const app: express.Application = express();


// // The port the express app will listen on
const port: number = 3000;
// The port the express app will listen on
// const port: number = process.env.TESTPORTENV;
// let testenv = process.env.TESTENV;
// console.log(testenv);
// let a = process.env.TESTPORTENV;



import * as dotenv from 'dotenv';
/* Set environmental variable fetcher */
// const environment = require("dotenv").config();
const environment = dotenv.config();



// const world = '';


// import the book module
// import { favoriteBook, Book } from './book';

import { Person } from '@aaa/person';
import { Book, favoriteBook } from './testbbb/book';

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
app.use('/', indexRouter);



app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
