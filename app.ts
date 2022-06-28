import { Catagory } from "./enums";
import { Book, DamagedLogger, Author, Librarian } from "./interfaces";
import { UniversityLibrarian } from "./classes";

const getAllBooks = (): Book[] => {
  let books = [
    {
      id: 1,
      title: "Ulysses",
      author: "James Joyce",
      available: true,
      category: Catagory.fiction,
    },
    {
      id: 2,
      title: "A Farewell to Arms",
      author: "Ernest Hemingway",
      available: false,
      category: Catagory.fiction,
    },
    {
      id: 3,
      title: "I Know Why the Caged Bird Sings",
      author: "Maya Angelou",
      available: true,
      category: Catagory.poetry,
    },
    {
      id: 4,
      title: "Moby Dick",
      author: "Herman Melville",
      available: true,
      category: Catagory.fiction,
    },
  ];
  return books;
};

const logFirstAva = (books): void => {
  let numOfBooks: number = books.length;
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
const getBookByCatagory = (catagoryFilter: Catagory): Array<string> => {
  console.log("catagory", Catagory[Catagory.poetry]);
  const allBooks = getAllBooks();
  const filteredTitles: string[] = [];
  for (let currentBook of allBooks) {
    if (currentBook.category === catagoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }
  return filteredTitles;
};

const logTitle = (titles: string[]): void => {
  for (let title of titles) {
    console.log(title);
  }
};
const getBookById = (id: number): Book => {
  const books = getAllBooks();
  return books.filter((book) => book.id === id)[0];
};
const createCustomerId = (name: string, id: number) => {
  return name + id;
};
const createCustomer = (name: string, age?: number, city?: string): void => {
  console.log(name);
};

const id: string = createCustomerId("ramish", 10);
console.log(id);

// const fictionBooks = getBookByCatagory(Catagory.fiction)
// fictionBooks.forEach((val, idx, arr) => {
//     console.log('val', val);
//     console.log('idx', ++idx);
//     console.log('arr', arr);

// })
let favLib: Librarian = new UniversityLibrarian();
favLib.name = "ramish";
favLib.assistCustomer("Nathalia");
