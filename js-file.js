const formArea = document.querySelector("#form-content");
const addBook = document.querySelector(".add-book");

addBook.addEventListener("click", ()=> {
    if (formArea.style.display === 'none') {
        formArea.style.display = 'block';
        document.getElementById('form-book').style.width = '400px';
    } else {
        formArea.style.display = 'none';
    }
})

// class myLibrary {
//    constructor() {
//       this.books = []
//    }
//}
//
//class book {
//    constructor(
//        title = '',
//        author = '',
//        pages = '',
//        read = false
//    ) {
//       this.title = title
//       this.author = author
//       this.pages = pages
//       this.read = read 
//    }
//}
//
//function addBookToLibrary() {
//
//}
