// hold our books

const libraryCatalogue = {
  books: [],
};

const Book = function (title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
};

const addBookToCatalogue = (title, author, genre) => {
  // create a book object
  const bookObj = new Book(title, author, genre);
  // push the book object to the array
  libraryCatalogue.books.push(bookObj);
};

addBookToCatalogue("The hobbit", "xyz", "fiction/fantasy");
addBookToCatalogue("Foucault’s Pendulum", "xyz", "fiction/fantasy");

console.log(libraryCatalogue.books);
