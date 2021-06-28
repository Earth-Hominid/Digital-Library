function Book(title, author, pages, read, cover) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.cover = cover;
}

let myLibrary = [
  {
    title: 'JavaScript: The Good Parts',
    author: 'by Douglas Crockford',
    pages: 172,
    cover: 'images/good.jpeg',
    read: false,
  },
  {
    title: 'JavaScript: The Definitive Guide',
    author: 'by David Flanagan',
    pages: 706,
    cover: 'images/def.jpg',
    read: true,
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'by Marijn Haverbeke',
    pages: 472,
    cover: 'images/elo.jpeg',
    read: true,
  },
];

const displayBook = (book) => {
  // Create HTML elements to display the book on a card
  const cardDiv = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h4');
  const bookPages = document.createElement('h5');
  const bookRead = document.createElement('h5');
  const displayCover = document.createElement('img');
  // select body element for newly created elements to be appended
  const show = document.querySelector('div.book');
  // Append the elements to the DOM
  cardDiv.classList.add('cardDiv');
  show.appendChild(cardDiv);
  cardDiv.append(displayCover, bookTitle, bookAuthor, bookPages, bookRead);
  // Set content and attributes
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = 'Pages: ' + book.pages;
  bookRead.textContent = book.read ? 'Finished Reading' : 'Not finished';
  displayCover.setAttribute('src', book.cover);
  displayCover.setAttribute('id', 'placeholder');
};

myLibrary.forEach((book) => displayBook(book));



