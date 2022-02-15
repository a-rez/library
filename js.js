
let myLibrary = [];

function Book(title, author, pageCount, read){

    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;

};


function addBookToLibrary() {
    let title = prompt("What's the name of the book?");
    let author = prompt("What's the author of the book?");
    let pageCount = prompt("How many pages does it have?");
    


    const book = new Book(title, author, pageCount, false);
    if (book.title && book.author) {
        myLibrary.push(book);
        showBooks();
    }
};



// what if two shelves: one read and one not read?
// with a cool transition

// todo: function that loops through the array of books and displays each on the page in a table or on individual cards
// random cover color?
const booksOnShelf = [];
function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        if (!booksOnShelf.includes(myLibrary[i])) {
            const book = myLibrary[i];
            

            const div = document.createElement("div");
            div.id = "bookdiv";

            const titletext = document.createElement("bold");
            titletext.id = "titletext";
            titletext.innerHTML = `${book.title} by ${book.author}`;
            div.appendChild(titletext);

            const buttondivs = document.createElement("div");
            buttondivs.id = "buttondivs";
            div.appendChild(buttondivs);

            const deleteButton = document.createElement("button");
            deleteButton.id = "deletebutton";
            deleteButton.innerHTML = "Delete";
            deleteButton.addEventListener("click", function() {
                div.remove();
                myLibrary = myLibrary.filter(x => x !== book);
            })

            const deleteButtonDiv = document.createElement("div");
            deleteButtonDiv.id = "deletebuttondiv"
            deleteButtonDiv.appendChild(deleteButton);

            buttondivs.appendChild(deleteButtonDiv);
            
            const readButtonDiv = document.createElement("div");
            readButtonDiv.id = "readbuttondiv";
            const readButton = document.createElement("button");
            readButton.id = "readbutton";
            if (book.read) {
                readButton.innerHTML = "Read";
            } else {
                readButton.innerHTML = "Not Read";
            }
            readButton.addEventListener("click", function() {
                if ((titletext.classList).contains("read")) {
                    book.read = false;
                    readButton.innerHTML = "Not Read";
                    titletext.classList.toggle("read");

                } else {
                    book.read = true;
                    readButton.innerHTML = "Read";
                    titletext.classList = "read";
                }
            })
            readButtonDiv.append(readButton);
            buttondivs.append(readButtonDiv);


            /*
            const cover = document.createElement("img");
            cover.src = response;
            coverText.append(cover);
            */



            
            libraryDiv.appendChild(div);

            booksOnShelf.push(book);
        }

    }

};





// frontend
const title = document.createElement("strong");
title.id = "title";
title.innerHTML = "Library of Atlasandria";
document.body.appendChild(title);

const libraryDiv = document.createElement("div");
libraryDiv.id = "libraryDiv";
document.body.appendChild(libraryDiv);

const addBookButton = document.createElement("button");
addBookButton.id = "addBookButton";
addBookButton.innerHTML = "Add a Book";
document.body.appendChild(addBookButton);

addBookButton.addEventListener("click", addBookToLibrary);

