class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        // console.log(`Add Book : ${book.title} to library.`);
    }
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
        console.log(`Remove Book Title : ${title} `);
    }
    searchBook(search) {
        return this.books.filter((book) => {
            return (
                book.title.includes(search) ||
                book.author.includes(search) ||
                book.genre.includes(search)
            );
        });
    }
    DisplayListAvailable() {
        console.log("Show all available books : ");
        return this.books.filter((book) => book.available);
    }
}

class Book {
    constructor(title, author, genre, available = true) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }
    Borrow() {
        if (this.available) {
            this.available = false;
            // console.log(`You borrowed ${this.title}.`);
        } else {
            console.log("Sorry you can't borrow this this book!");
        }
    }
    ReturnBook() {
        if (!this.available) {
            this.available = true;
            console.log(`Thank for returned ${this.title}`);
        } else {
            console.log("This book you not borrowed!");
        }
    }
}
class User {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.available) {
            book.Borrow();
            this.borrowedBooks.push(book);
        } else {
            console.log("Sorry you can't borrow this this book!");
        }
    }
    viewBorrowBook() {
        console.log(`${this.name} borrowed :`);
        return this.borrowedBooks;
    }
}

let library = new Library("Phors");

let book1 = new Book("Reng Seak", "PhorsBeat", "1000", true);
let book2 = new Book("Reng Srolanh Kna", "PhorsBeat", "2000", true);
let book3 = new Book("Reng Vai Kna", "PhorsBeat", "2020", false);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
let user = new User("Mey");
user.borrowBook(book1);
user.borrowBook(book2);
console.log(user.viewBorrowBook());
// console.log(library);
