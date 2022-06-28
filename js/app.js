const getAllBooks = () => {
    let books = [
        { title: 'ulysses', author: 'james jouce', available: false, catagory: Catagory.fiction },
        { title: 'a farewell', author: 'ernest', available: true, catagory: Catagory.biography },
        { title: 'i know why', author: 'james jouce', available: true, catagory: Catagory.poetry },
    ];
    return books;
};
const logFirstAva = (books) => {
    let numOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('total', +numOfBooks);
    console.log('first book', firstAvailable);
};
const getBookByCatagory = (catagoryFilter) => {
    console.log('catagory', Catagory[poetry]);
    const allBooks = getAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.catagory === catagoryFilter) {
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
var Catagory;
(function (Catagory) {
    Catagory[Catagory["biography"] = 0] = "biography";
    Catagory[Catagory["poetry"] = 1] = "poetry";
    Catagory[Catagory["fiction"] = 2] = "fiction";
})(Catagory || (Catagory = {}));
const poetrybooks = getBookByCatagory(Catagory.poetry);
logTitle(poetrybooks);
