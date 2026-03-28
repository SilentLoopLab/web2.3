function Library(name) {
    this.name = name;
    this.books = [];
}
function Book(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
}



Library.prototype.addBook = function(book) {
    if (!book.id) {
        throw new Error("do not add a book without id");
    }
    if (!book.title) {
        throw new Error("do not add a book without title");
    }
    if (!book.author) {
        throw new Error("do not add a book without author")
    }
    if (typeof book.year !== "number") {
        throw new Error("Year must be number");
    }
    let id = book.id;
    let books = this.books;
    let unique = books.some(e => e.id === id);
    if (unique) {
        throw new Error("ID must be unique");
    }
    this.books.push(book);
}
let library = new Library("Xnko Aper");
let book1 = new Book(501, "Brother Axe", "Hovhannes Tumanyan", 1907);
library.addBook(book1);
console.log(library.books);