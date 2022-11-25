const formArea = document.querySelector("#form-content");
const addBook = document.querySelector(".add-book");

 class myLibrary {
    constructor() {
       this.books = [];
    }
}

class book {
    constructor(
        title = '',
        author = '',
        pages = '',
        read = off
    ) {
       this.title = title
       this.author = author
       this.pages = pages
       this.read = read 
    }
}

//Form input
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const read = document.querySelector('#read').value;

function addBookToLibrary() {

}

const btnSubmit = document.getElementById('button-submit')


const bookcase = document.querySelector('.bookcase');
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPages = document.querySelector('.book-pages');
const bookRead = document.querySelector('.book-read');

btnSubmit.addEventListener("click", (e)=> {
    formArea.style.display = 'none';
    bookTitle.textContent = new book('$title', '$author', '$pages', '$read');
})

addBook.addEventListener("click", ()=> {
    if (formArea.style.display === 'none') {
        const exForm = document.getElementById('form-book')
        formArea.style.display = 'block';
        exForm.style.width = '300px';
        exForm.style.height = '300px';
        exForm.style.flexDirection = 'column';
        exForm.style.justifyContent = 'center';
        exForm.style.alignItems = 'center';
    } else {
        formArea.style.display = 'none';
    }
})