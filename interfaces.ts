import { Catagory } from "./enums";

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Catagory;
  pages?: number;
  markedDamaged?: DamagedLogger;
}

// this is a function inter face to make it we pass the types of args in parentesis and then use collon to seperate them from return type of function which in this case is void.
interface DamagedLogger {
  (reason: string): void;
}
interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numOfBooks: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (cusName: string) => void;
}

export { Book, DamagedLogger, Author, Librarian };
