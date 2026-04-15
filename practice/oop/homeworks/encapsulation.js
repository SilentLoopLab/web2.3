class Book {
    #title;
    #author;
    #year;
    #isAvailable;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.#isAvailable = true;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            console.log("The title of the book cannot be empty");
        }
        return (this.#title = value);
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            console.log("The author of the book cannot be empty");
        }
        return (this.#author = value);
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        if (value < 0) {
            console.log("The year of publication cannot be a negative number");
        }
        return (this.#year = value);
    }

    get isAvailable() {
        return this.#isAvailable;
    }

    borrowBook() {
        if (!this.#isAvailable) {
            return "Book is already borrowed";
        }
        return (this.#isAvailable = false);
    }

    returnBook() {
        if (this.#isAvailable) {
            return "Book is already available";
        }
        return (this.#isAvailable = true);
    }

    matchesTitle(word) {
        return this.title.includes(word);
    }

    getInfo() {
        return `Book title: ${this.title} Book author: ${this.author} Book year: ${this.year}`;
    }
}

class Reader {
    #name;
    #borrowedBooks;

    constructor(name) {
        this.name = name;
        this.#borrowedBooks = [];
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        if (typeof value !== "string" || value.trim() === "") {
            console.log("The name of the reader cannot be empty");
        }
        return (this.#name = value);
    }

    get borrowedBooks() {
        return this.#borrowedBooks;
    }

    get borrowedBooksCount() {
        return this.#borrowedBooks.length;
    }

    takeBook(book) {
        if (book.isAvailable) {
            this.#borrowedBooks.push(book);
            book.borrowBook();
        } else {
            return `Book "${book.title}" is not available`;
        }
    }

    giveBackBook(book) {
        let index = this.#borrowedBooks.findIndex((x) => x === book);
        if (index === -1) {
            return "Book not found";
        }
        book.returnBook();
        this.#borrowedBooks.splice(index, 1);
    }

    hasBook(book) {
        if (this.#borrowedBooks.some((x) => x === book)) {
            return true;
        } else {
            return false;
        }
    }

    showBorrowedBooks() {
        return this.#borrowedBooks.map((book) => book.title);
    }

    getInfo() {
        return `${this.name} has a ${this.#borrowedBooks.length} books`;
    }
}

class Library {
    #name;
    #books;
    #readers;

    constructor(name) {
        this.name = name;
        this.#books = [];
        this.#readers = [];
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        if (typeof value !== "string" || value.trim() === "") {
            console.log("The name of the library cannot be empty");
        }
        return (this.#name = value);
    }

    get books() {
        return this.#books;
    }

    get readers() {
        return this.#readers;
    }
}
