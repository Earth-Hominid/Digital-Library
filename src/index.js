const myLibrary = [
  {
    title: "JavaScript: The Good Parts", 
    author: "by Douglas Crockford", 
    pages: 172, 
    pagesRead: 0, 
    cover: "images/good.jpeg",
  },
  {
    title: "JavaScript: The Definitive Guide", 
    author: "by David Flanagan", 
    pages: 706, 
    pagesRead: 200,
   cover: "images/def.jpg", 
  },
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming", 
    author: "by Marijn Haverbeke", 
    pages: 472, pagesRead: 0,
   cover: "images/elo.jpeg",
  }
];

const displayBook = (book) => {
  // Create HTML elements to display the book on a card
  const cardDiv = document.createElement('div');
  cardDiv.classList.add("cardDiv")
  const displayBookTitle = document.createElement('h3');
  const displayBookAuthor = document.createElement('h4');
  const displayBookPages = document.createElement('h5');
  const displayBookPagesRead = document.createElement('h5');
  const displayCover = document.createElement('img');

  // select body element for newly created elements to be appended
  const show = document.querySelector('div.book');
  
  // Append the elements to the DOM
  show.appendChild(cardDiv); 
  cardDiv.append(displayCover, displayBookTitle, displayBookAuthor, displayBookPages, displayBookPagesRead);
  
  // Set content and attributes
  displayBookTitle.innerHTML = book.title;
  displayBookAuthor.innerHTML = book.author;
  displayBookPages.innerHTML = "Pages: " + book.pages;
  displayBookPagesRead.innerHTML = "Pages Read: " + book.pagesRead;
  // use setAttribute to add the card class to the div

  // cardDiv.setAttribute("class", "card");
  displayCover.setAttribute('src', book.cover);
  displayCover.setAttribute("id", "placeholder")
};

myLibrary.forEach(book => displayBook(book))











