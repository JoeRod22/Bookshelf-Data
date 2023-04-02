class Bookshelf {
    constructor() {
        this.books = [];
    }
// for loop to create a new book
    seed(booksData) {
        for (const book of booksData) {
            const newBook = new Book(book.name, book.language, book.subject, book.title)
            this.addBook(newBook)
        }

    }

    addBook(individualBook) {
        this.books.push(individualBook)
    }
    //  updated component for a new book 
    render() {
        const bookshelfwrappper = document.createElement("div")

        for (const book of this.books) {
            bookshelfwrappper.append(book.render())
        }
        document.body.append(bookshelfwrappper)
    }
}