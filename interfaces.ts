import { Category } from "./enums";

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markedDamaged?: DamageLogger;
}

// this is a function inter face to make it we pass the types of args in parentesis and then use collon to seperate them from return type of function which in this case is void.
interface DamageLogger {
  (reason: string): void;
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

export { Book, DamageLogger as Logger, Author, Librarian };
