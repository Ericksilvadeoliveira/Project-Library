const formArea = document.querySelector("#form-content");
const addBook = document.querySelector(".add-book");

const myLibrary = []

class book {
    constructor(title, author, pages, read) {
       this.title = title
       this.author = author
       this.pages = pages
       this.read = read 
    }
}

function pega() {
    const Ftitle = document.querySelector('#title').value;
    const Fauthor = document.querySelector('#author').value;
    const Fpages = document.querySelector('#pages').value;
    const Fread = document.querySelector('#read');

    if (Fread.checked) {
        Fread.value = 'lido'
    } else {
        Fread.value = 'Não lido'
    }

    const inputRead = Fread.value;

    const newBook = new book(Ftitle, Fauthor, Fpages, inputRead)

    const bookcase = document.querySelector('.bookcase');
    const displayCard = document.querySelector('.display');
    const bookTitle = document.querySelector('.book-title');
    const bookAuthor = document.querySelector('.book-author');
    const bookPages = document.querySelector('.book-pages');
    const bookRead = document.querySelector('.book-read');

    bookTitle.innerHTML = newBook.title;
    bookAuthor.innerHTML = newBook.author;
    bookPages.innerHTML = newBook.pages;
    bookRead.innerHTML = newBook.read;

    displayCard.style.display = 'block'

    formArea.style.display = 'none'
};

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