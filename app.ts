const getAllBooks = () => {
    let books = [
        {title: 'ulysses', author : 'james jouce', available: false, catagory: Catagory.fiction},
        {title: 'a farewell', author : 'ernest', available: true, catagory: Catagory.biography},
        {title: 'i know why', author : 'james jouce', available: true, catagory: Catagory.poetry},
    ]
    return books;
}

const logFirstAva = (books): void => {
    let numOfBooks: number = books.length;
    let firstAvailable = '';

    for (let currentBook of books) {
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break
        }
    }
    console.log('total', + numOfBooks);
    console.log('first book', firstAvailable);
    
}
const getBookByCatagory = (catagoryFilter: Catagory): Array<string> => {
    console.log('catagory', Catagory[poetry]);
    const allBooks = getAllBooks()
    const filteredTitles: string[] = [];
    for(let currentBook of allBooks){
        if(currentBook.catagory === catagoryFilter) {
            filteredTitles.push(currentBook.title)
        }
    }
    return filteredTitles;
}

const logTitle = (titles: string[]): void => {
    for(let title of titles){
        console.log(title);
        
    }
}

enum Catagory {biography, poetry, fiction}
const poetrybooks = getBookByCatagory(Catagory.poetry)
logTitle(poetrybooks)
