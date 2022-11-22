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
        read = false
    ) {
       this.title = title
       this.author = author
       this.pages = pages
       this.read = read 
    }
}

const bookcase = document.querySelector('.bookcase');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

function addBookToLibrary() {
    const newBook = '';
    newBook.textContent = new book(title, author, pages, read);
    newBook.appendChild(bookcase);
}

const btnSubmit = document.querySelector('#button-submit');

btnSubmit.addEventListener("click", ()=> {
    const p = 'gol';
    p.appendChild(bookcase);
})

addBook.addEventListener("click", ()=> {
    if (formArea.style.display === 'none') {
        formArea.style.display = 'block';
        const exForm = document.getElementById('form-book')
        exForm.style.width = '300px';
        exForm.style.height = '300px';
        exForm.style.flexDirection = 'column';
        exForm.style.justifyContent = 'center';
        exForm.style.alignItems = 'center';
    } else {
        formArea.style.display = 'none';
    }
})