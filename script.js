let addBook = document.getElementById('add-button');
let card = document.querySelector('.card');
let main = document.querySelector('.main');
newCard = card.cloneNode(true);

addBook.addEventListener('click' , createNewBook);

function createNewBook(){

    main.appendChild(newCard);
}