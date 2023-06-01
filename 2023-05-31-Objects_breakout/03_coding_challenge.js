// hold our books

const libraryCatalogue = [];

// constructor method

const Book = function (title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
};

const addBookToCatalogue = (title, author, genre) => {
  const bookObj = new Book(title, author, genre);
  libraryCatalogue.push(bookObj);
};

addBookToCatalogue("Holes", "XYZ", "Fantasy");
addBookToCatalogue("Harry Potter", "Jk Rowling", "Fantasy");
addBookToCatalogue("Originality", "Grant Adams", "Self-Help");

console.log(libraryCatalogue);
