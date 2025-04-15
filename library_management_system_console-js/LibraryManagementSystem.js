const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction", available: true },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, genre: "Science Fiction", available: false },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance", available: true },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction", available: true },
    { id: 5, title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Adventure", available: false },
    { id: 6, title: "The Cather in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction", available: false},
    { id: 7, title: "The Road", author: "Cormac McCathy", year: 2006, genre: "Fiction", available: true},
    { id: 8, title: "The Silent Patient", author: "Alex Michaelides", year: 2019, genre: "Thriller", available: true},
    { id: 9, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", year: 2011, genre: "Non-Fiction", available: true},
    { id: 10, title: "Little Fires Everywhere", author: "Celeste Ng", year: 2017, genre: "Fiction", available: false}
  ];


const availableBooks = books.filter(book => book.available);

const bookTitle = books.map(book => book.title);

const earliestPublication = books.reduce((accumulator, book) => accumulator = Math.min(accumulator, book.year), 0)

// books.forEach(book => console.log(book.title, "by", book.year));

const checkGenre = books.some(book => book.genre.toLowerCase() == "science fiction");

const allBooksAvailable = books.every(book => book.available);



function calculateAveragePublicationYear (bookArray) {
    return Math.floor(bookArray.reduce((accumulator, book) => accumulator = accumulator + book.year, 0) / bookArray.length);
}

const averagePublicationYear = calculateAveragePublicationYear(books);



const longestTitle = function(arrayBooks) {
    return arrayBooks.reduce((longest, book) => book.title.length > longest.title.length ? longest : book, arrayBooks[0]);
}


const findingGenre = (arrayBooks, genre) => arrayBooks.filter(element => element.genre.toLowerCase() == genre.toLowerCase());

book_1 = { id: 11, title: "Dune", author: "Frank Herbert", year: 1965, genre: "Science Fiction", available: true};
book_2 = { id: 12, title: "The Da Vinci Code", author: "Dan Brown", year: 2003, genre: "Mystery", available: true};


function addNewBook (...book) {
    updatedBooks = []
    updatedBooks.push(...books, ...book)
    return updatedBooks;
}

function findAuthors (...authors) {
    return books.filter(book => authors.some(author => author.toLowerCase() == book.author.toLowerCase()));
}


const availableTitles = books.filter(book => book.available).map(book => book.title).reduce((titles, title, index, array) => titles + (index === array.length - 1 ? title : title + ", "), "");



console.log(availableTitles);