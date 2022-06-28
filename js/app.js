"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const getAllBooks = () => {
    let books = [
        {
            id: 1,
            title: "Ulysses",
            author: "James Joyce",
            available: true,
            category: enums_1.Catagory.fiction,
        },
        {
            id: 2,
            title: "A Farewell to Arms",
            author: "Ernest Hemingway",
            available: false,
            category: enums_1.Catagory.fiction,
        },
        {
            id: 3,
            title: "I Know Why the Caged Bird Sings",
            author: "Maya Angelou",
            available: true,
            category: enums_1.Catagory.poetry,
        },
        {
            id: 4,
            title: "Moby Dick",
            author: "Herman Melville",
            available: true,
            category: enums_1.Catagory.fiction,
        },
    ];
    return books;
};
const logFirstAva = (books) => {
    let numOfBooks = books.length;
    let firstAvailable = "";
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("total", +numOfBooks);
    console.log("first book", firstAvailable);
};
const getBookByCatagory = (catagoryFilter) => {
    console.log("catagory", enums_1.Catagory[enums_1.Catagory.poetry]);
    const allBooks = getAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === catagoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
};
const logTitle = (titles) => {
    for (let title of titles) {
        console.log(title);
    }
};
const getBookById = (id) => {
    const books = getAllBooks();
    return books.filter((book) => book.id === id)[0];
};
const createCustomerId = (name, id) => {
    return name + id;
};
const createCustomer = (name, age, city) => {
    console.log(name);
};
const id = createCustomerId("ramish", 10);
console.log(id);
// const fictionBooks = getBookByCatagory(Catagory.fiction)
// fictionBooks.forEach((val, idx, arr) => {
//     console.log('val', val);
//     console.log('idx', ++idx);
//     console.log('arr', arr);
// })
