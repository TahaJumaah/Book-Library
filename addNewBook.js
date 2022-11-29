// On Load Array Retrieval

function onLoadFunction() {
    if (localStorage.getItem('test')) {
        bookArray = JSON.parse(localStorage.getItem('test'));
    } else {
        // No data, start with an empty array
        bookArray = [];
    }
    console.table(bookArray);
}


// End of Data Retreival

// This section is for the main page
let modalContainer = document.getElementById('main-container-modal');
let addBookButtonMain = document.getElementById('add-button');

addBookButtonMain.addEventListener('pointerdown' , addBookFunctionMain);

function addBookFunctionMain() {
    modalContainer.style.display = 'block';
}


















let addButton = document.getElementById('add-button-modal');
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
    localStorage.setItem('test' , JSON.stringify(bookArray));
}
