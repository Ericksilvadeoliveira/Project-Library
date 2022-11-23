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

const bookcase = document.querySelector('.bookcase');
const $title = document.querySelector('#title');
const $author = document.querySelector('#author');
const $pages = document.querySelector('#pages');
const $read = document.querySelector('#read');

function addBookToLibrary() {

}

const btnSubmit = document.getElementById('button-submit')
const test = document.querySelector('.test')

btnSubmit.addEventListener("click", ()=> {
    formArea.style.display = 'none';
    
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