// Library class
class Library {
    // #books;
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // get books() {
    //     return this.#books;
    // }

    addBook(book) {
        this.books.push(book);
        // console.log(`----\n Add Book : ${book.title} to library.`);
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
        // console.log(`----\n Remove Book : ${title} from library.`);
    }

    searchBook(search) {
        const searchLowerCase = search.toLowerCase();
        const foundBooks = this.books.filter((book) => book.title.toLowerCase().includes(searchLowerCase) || book.author.toLowerCase().includes(searchLowerCase) || book.genre.toLowerCase().includes(searchLowerCase));

        if (foundBooks.length === 0) {
            console.log("Not found book");
        }

        return foundBooks;
    }

    borrowBook(title) {
        const borrowBook = this.books.find((book) => book.title === title && book.available);
        if (borrowBook) {
            borrowBook.available = false;
            return borrowBook;
        } else {
            console.log("Sorry you can't borrow this this book! ");
        }
    }

    returnBook(title) {
        const returnBook = this.books.find((book) => book.title === title && book.available === false);
        if (returnBook) {
            returnBook.available = true;
            return returnBook;
        }
    }

    displayListAvailable() {
        const availableBooks = this.books.filter((book) => book.available);
        if (availableBooks.length === 0) {
            console.log("Not found book");
        }
        return availableBooks;
    }

}

// Book class
class Book {
    constructor(title, author, genre, available = true) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }

    // get available() {
    //     return this.available;
    //
    // }

}

// User class
class User {
    // #borrowedBooks;

    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    // get borrowedBooks() {
    //     return this.#borrowedBooks;
    // }

    borrowBook(library, title) {
        const book = library.borrowBook(title);
        // const borrowBook = this.library.books.find((book) => book.title === title && book.available);
        if (book) {
            this.borrowedBooks.push(book);
            console.log(`You borrowed : ${book.title}`)
            return book;

        } else {
            console.log("Sorry you can't borrow this this book!");
        }

    }

    returnBook(library,title) {
        const book = library.returnBook(title);
        if (book) {
            this.borrowedBooks = this.borrowedBooks.filter((book) => book.title !== title);
            console.log(`Thank for returned : ${book.title}`);
            return book;
        } else {
            console.log("Sorry you can't return this this book!");
        }
    }

    viewBorrowBook() {
        return this.borrowedBooks;
    }

}

// Student class
class Student extends User {
    constructor(name) {
        super(name);
        this.maxBorrow = 5;
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= this.maxBorrow) {
            console.log(`Sorry you can't borrow this this book! you have limit : ${this.maxBorrow}`);
        } else {
            super.borrowBook(book);
        }
    }

    returnBook(book) {
        super.returnBook(book);
    }

    viewBorrowBook() {
        super.viewBorrowBook();
    }

}

// admin class
class Admin extends User {
    constructor(name) {
        super(name);
    }

    borrowBook(book) {
        super.borrowBook(book);
    }

    returnBook(book) {
        super.returnBook(book);
    }

    viewBorrowBook() {
        return super.viewBorrowBook();
    }
}

let library = new Library("Phors");

let book1 = new Book("Reng Seak", "PhorsBeat", "1000", true);
let book2 = new Book("Reng Seak2", "PhorsBeat", "2000", true);
let book3 = new Book("Reng Seak3", "PhorsBeat", "2020", true);
let book4 = new Book("Reng Seak4", "PhorsBeat", "2020", true);
let book5 = new Book("Reng Seak5", "PhorsBeat", "2020", true);
let book6 = new Book("Reng Seak6", "PhorsBeat", "2020", true);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);

let user = new User("John Doe");
user.borrowBook(library, "Reng Seak");
user.borrowBook(library, "Reng Seak2");
user.borrowBook(library, "Reng Seak3");
user.borrowBook(library, "Reng Seak4");
user.borrowBook(library, "Reng Seak5");
user.borrowBook(library, "Reng Seak6");
user.returnBook(library, "Reng Seak6");
// console.log('View :', user.viewBorrowBook())

// console.log(user.viewBorrowBook());
// console.log(student1.viewBorrowBook())
// student1.returnBook(book1)

// admin1.borrowBook("Reng Vai Kna6");
// console.log(admin1.name);
// console.log(library);
// Student1.borrowBook(book1);
// Student1.borrowBook(book2);
// Student1.borrowBook(book3);
// Student1.borrowBook(book4);
// Student1.borrowBook(book5);

// console.log(library);
