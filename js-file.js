const formArea = document.querySelector("#form-content");
const addBook = document.querySelector(".add-book");

let myLibrary = []

class book {
    constructor(
        title,
        author,
        pages,
        read
    ) {
       this.title = title
       this.author = author
       this.pages = pages
       this.read = read 
    }
}

//Form input
const Ftitle = document.querySelector('#title').textContent;
const Fauthor = document.querySelector('#author').textContent;
const Fpages = document.querySelector('#pages').textContent;
const Fread = document.querySelector('#read').textContent;

function pega() {
    const newBook = new book(Ftitle, Fauthor, Fpages, Fread);
    console.log(newBook)
}

function addBookToLibrary() {

    const bookcase = document.querySelector('.bookcase');
    const bookTitle = document.querySelector('.book-title');
    const bookAuthor = document.querySelector('.book-author');
    const bookPages = document.querySelector('.book-pages');
    const bookRead = document.querySelector('.book-read');
}

const btnSubmit = document.getElementById('button-submit')

btnSubmit.addEventListener("click", ()=> {
    return addBookToLibrary();
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