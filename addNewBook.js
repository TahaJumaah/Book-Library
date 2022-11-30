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


// This section is for showing and hiding the Modal to add a book.
let addBookButtonMain = document.getElementById('add-button');
let addBookDialog = document.getElementById('add-book-dialog');

addBookButtonMain.addEventListener('pointerdown' , showDialog);

function showDialog() {
    addBookDialog.showModal();
};

let closeButton = document.getElementById('close');

closeButton.addEventListener('pointerdown' , () => {addBookDialog.close()});



// This section for adding book data to the Array after successful form submission.

let addBookForm = document.getElementById('add-book-form');
let bookArray = [];
let bookName = '';
let author = '';
let pages = 0;
let year = 0;
let read = true;

addBookForm.addEventListener('submit', addBookFunction);

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
    // localStorage.setItem('test' , JSON.stringify(bookArray));
}



// This Section is for appending Cards from the stored Array.
let bookNameDiv = document.getElementsByTagName('h2');


let body = document.getElementById('delete');
body.addEventListener('click' , testFunction);

let mainContainer = document.getElementById('main');


let deleteButton = '';
// deleteButton.addEventListener('pointerdown' , () => {this.parentNode.remove()})


function testFunction() {
    for (let index = 0; index < bookArray.length; index++) {

        const book = bookArray[index];

        let newBookDiv = document.createElement('div');
        newBookDiv.className = 'card';
        mainContainer.appendChild(newBookDiv);


        let newBookTitleDiv = document.createElement('div');
        newBookTitleDiv.className = 'book-title'
        newBookDiv.appendChild(newBookTitleDiv);


        let newBookTitle = document.createElement('h2');
        newBookTitle.textContent = book.name;
        newBookTitleDiv.appendChild(newBookTitle);

        let newDeleteButton = document.createElement('button');
        newDeleteButton.className = 'delete-button'
        newBookDiv.appendChild(newDeleteButton);
        this.parentNode.remove();

        deleteButton = document.getElementsByClassName('delete-button');

        newDeleteButton.addEventListener('click' , deleteFunction);
    }

    };


    function deleteFunction() {
        this.parentNode.remove();
        console.log(this.parentNode.innerText);
        for (let index = 0; index < bookArray.length; index++) {
            const book = bookArray[index];
            console.log(book.name);
            if (this.parentNode.innerText == book.name) {
                localStorage.setItem('test' , JSON.stringify(bookArray));

                bookArray.splice(index, 1)
                console.log('I deleted Something from the Array')
                console.table(bookArray);
                
            }
            
            
        }
        
    }



    window.onbeforeunload = function(){
        localStorage.setItem('test' , JSON.stringify(bookArray));

    }