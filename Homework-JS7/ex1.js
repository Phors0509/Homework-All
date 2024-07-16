// Library class
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        // console.log(`----\n Add Book : ${book.title} to library.`);
    }
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
        console.log(`----\n Remove Book : ${title} from library.`);
    }
    searchBook(search) {
        return this.books.filter((book) => {
            return (
                book.title.toLowerCase().includes(search) ||
                book.author.toLowerCase().includes(search) ||
                book.genre.toLowerCase().includes(search)
            );
        });
    }
    DisplayListAvailable() {
        console.log("Show all available books : ");
        return this.books.filter((book) => book.available);
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
    Borrow() {
        if (this.available) {
            this.available = false;
            console.log(`You borrowed ${this.title}.`);
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
// User class
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
// Student class
class Student extends User {
    constructor(name) {
        super(name);
        this.maxBorrow = 5;
    }
    borrowBook(book) {
        if (this.borrowedBooks.length > 4) {
            console.log(
                `Sorry you can't borrow this this book! you have limit : ${this.maxBorrow}`
            );
        } else {
            super.borrowBook(book);
        }
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
}

let library = new Library("Phors");

let book1 = new Book("Reng Seak", "PhorsBeat", "1000", true);
let book2 = new Book("Reng Srolanh Kna", "PhorsBeat", "2000", true);
let book3 = new Book("Reng Vasas", "PhorsBeat", "2020", true);
let book4 = new Book("Reng Vai Kna4", "PhorsBeat", "2020", true);
let book5 = new Book("Reng Vai Kna5", "PhorsBeat", "2020", true);
let book6 = new Book("Reng Vai Kna6", "PhorsBeat", "2020", true);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
let student1 = new Student("AHJM");
student1.borrowBook(book1);
student1.borrowBook(book2);
student1.borrowBook(book3);
student1.borrowBook(book4);
student1.borrowBook(book5);
student1.borrowBook(book6);
student1.borrowBook(book6);
// admin1.borrowBook("Reng Vai Kna6");
// console.log(admin1.name);
// console.log(library);
// Student1.borrowBook(book1);
// Student1.borrowBook(book2);
// Student1.borrowBook(book3);
// Student1.borrowBook(book4);
// Student1.borrowBook(book5);

// console.log(library);
