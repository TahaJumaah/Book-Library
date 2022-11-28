let addButton = document.getElementById('add-button');
let bookArray = [];
let bookName = '';
let author = '';
let pages = 0;
let year = 0;
let read = true;

addButton.addEventListener('pointerdown', addBookFunction);

class book {
    constructor(name, author, pages, year, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.read = read;
    }
}

function addBookFunction() {
    bookName = document.getElementById('book-name').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    year = document.getElementById('year').value;
    let newBook = new book(bookName , author , pages , year);
    bookArray.push(newBook);

}
