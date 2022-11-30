// On Load Array Retrieval

function onLoadFunction() {
    if (localStorage.getItem('test')) {
        bookArray = JSON.parse(localStorage.getItem('test'));
    } else {
        // No data, start with an empty array
        bookArray = [];
    }
    console.table(bookArray);
    addBooktoPage();
}

// End of Data Retreival


// This Section is for Element Creation Functions
let newElement = '';
let elementName = '';

function elementCreation(elementName , HTMLTag , elementClass) {
    newElement = document.createElement(HTMLTag);
    newElement.className = elementClass;
    console.log(newElement)
};



// This section is for showing and hiding the Modal to add a book.
let addBookButtonMain = document.getElementById('add-button');
let addBookDialog = document.getElementById('add-book-dialog');

addBookButtonMain.addEventListener('pointerdown' , showDialog);

function showDialog() {
    addBookDialog.show();
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
let bookNumber = '';

addBookForm.addEventListener('submit', addBookFunction);

class book {
    constructor(name, author, pages, year, read , bookNumber) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.read = read;
        this.bookNumber = bookNumber;
    }
}

function addBookFunction() {
    bookName = document.getElementById('book-name').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    year = document.getElementById('year').value;
    let newBook = new book(bookName , author , pages , year , bookNumber);
    bookArray.push(newBook);
    localStorage.setItem('test' , JSON.stringify(bookArray));
    addBooktoPage();
}



// This Section is for appending Cards from the stored Array.
let bookNameDiv = document.getElementsByTagName('h2');

let mainContainer = document.getElementById('main');

let deleteButton = '';

function addBooktoPage() {
    for (let index = 0; index < bookArray.length; index++) {
        const book = bookArray[index];
        book.bookNumber = index;

        let newBookDiv = document.createElement('div');
        newBookDiv.className = 'card';
        newBookDiv.value = '2';
        mainContainer.appendChild(newBookDiv);

        let newBookTitleDiv = document.createElement('div');
        newBookTitleDiv.className = 'book-title'
        newBookDiv.appendChild(newBookTitleDiv);


        let newBookTitle = document.createElement('h2');
        newBookTitle.textContent = book.name;
        newBookTitleDiv.appendChild(newBookTitle);

        let newBookInfo = document.createElement('div');
        newBookInfo.className = 'book-info';
        newBookDiv.appendChild(newBookInfo);

        let newBookInfoAuthor = document.createElement('p');
        newBookInfoAuthor.textContent = 'Author :' + book.author;
        newBookInfo.appendChild(newBookInfoAuthor);

        let newBookInfoYear = document.createElement('p');
        newBookInfoYear.textContent = 'Year :' + book.year;
        newBookInfo.appendChild(newBookInfoYear);
        let newBookInfoPages = document.createElement('p');
        newBookInfoPages.textContent = 'Pages :' + book.pages;
        newBookInfo.appendChild(newBookInfoPages);
        let newBookInfoRead = document.createElement('p');
        newBookInfoRead.textContent = 'Read :' + book.read;
        newBookInfo.appendChild(newBookInfoRead);

        let newDeleteButton = document.createElement('button');
        newDeleteButton.className = 'delete-button'
        newDeleteButton.innerText = 'Delete'
        newDeleteButton.setAttribute('bookNumber' , index)
        newBookDiv.appendChild(newDeleteButton);
        // this.parentNode.remove();

        deleteButton = document.getElementsByClassName('delete-button');

        newDeleteButton.addEventListener('click' , deleteFunction);
    }

    };


    function deleteFunction() {
        for (let index = 0; index < bookArray.length; index++) {
            const book = bookArray[index];

            if (this.getAttribute('bookNumber') == book.bookNumber) {
                this.parentNode.remove();

                bookArray.splice(index, 1)
                console.log('I deleted Something from the Array')

                localStorage.setItem('test' , JSON.stringify(bookArray));

                
                console.table(bookArray);
                
            }
            
            
        }
        
    }



    window.onbeforeunload = function(){
        localStorage.setItem('test' , JSON.stringify(bookArray));

    }