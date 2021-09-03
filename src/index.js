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

  // Generate div to hold icon
  const iconDiv = document.createElement('div')
  // Add classname
  iconDiv.classList.add('delete-div')
  // Add id
  iconDiv.id = 'delete-div'
  // Append to book card
  cardDiv.append(iconDiv)
  // Generate delete icon
  const deleteIcon = document.createElement('IMG');
  // Add source as icon png
  deleteIcon.src = './images/delete.svg';
  // Add classlist for css styling
  deleteIcon.classList.add('delete');
  // Add id 
  deleteIcon.id = 'delete'
  // Append icon to the icon div
  iconDiv.append(deleteIcon);
};

myLibrary.forEach((book) => displayBook(book));

const showLibrary = () => {
  document.getElementById('my-library').style.display = 'block';
  document.getElementById('library').scrollIntoView();
};

const showForm = () => {
  document.getElementById('form-container').style.display = 'block';
  document.getElementById('form-container').scrollIntoView();
};

const addButton = () => {
  let buttonContainer = document.querySelector('.button-container');
  // Create <div> element
  const buttonDiv = document.createElement('div');
  buttonDiv.id = 'buttonArea'; // Set its id to "buttonArea"
  buttonContainer.appendChild(buttonDiv); // Add <div> element to the DOM
  // Add <button> element
  const addBookButton = document.createElement('button');
  // Set <button> id and add text
  addBookButton.id = 'addButton';
  addBookButton.textContent = 'I want to add a book';
  // Add <button> element to the created <div> element
  const addButton = document.getElementById('buttonArea');
  addButton.appendChild(addBookButton);
  // Add an event listener to “addButton” that when clicked, the “addBookToLibrary” function runs.
  document.getElementById('addButton').addEventListener('click', showForm);
};

addButton();

const removeButton = () => {
  // Add <button> element
  const removeBookButton = document.createElement('button');
  // Set <button> id and add text
  removeBookButton.id = 'remove';
  removeBookButton.textContent = 'I want to remove a book';
  // Add <button> element to the created <div> element
  const addButton = document.getElementById('buttonArea');
  addButton.appendChild(removeBookButton);
  // Add an event listener to “addButton” that when clicked, the “addBookToLibrary” function runs.
};

removeButton();

const createForm = () => {
  const formContainer = document.createElement('div');
  formContainer.id = 'form-container';
  formContainer.setAttribute('style', 'display:none');
  document.body.append(formContainer);

  const formTitle = document.createElement('div');
  formTitle.classList.add('title');
  formTitle.textContent = 'Enter your book details';
  formContainer.append(formTitle);

  const content = document.createElement('div');
  content.classList.add('content');
  formContainer.append(content);

  const form = document.createElement('form');
  form.id = 'addbookform';
  content.append(form);

  const bookDetails = document.createElement('div');
  bookDetails.classList.add('book-details');
  form.append(bookDetails);

  // Book Title
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('input-box');
  bookDetails.append(titleDiv);

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.textContent = 'Title';
  titleDiv.append(titleLabel);

  const titleInput = document.createElement('input');
  titleInput.id = 'title';
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('placeholder', 'Enter the title');
  titleInput.setAttribute('autocomplete', 'off');
  titleInput.required = true;
  titleDiv.append(titleInput);

  // Book Author
  const authorDiv = document.createElement('div');
  authorDiv.classList.add('input-box');
  bookDetails.append(authorDiv);

  const authorLabel = document.createElement('label');
  authorLabel.setAttribute('for', 'author');
  authorLabel.textContent = 'Author';
  authorDiv.append(authorLabel);

  const authorInput = document.createElement('input');
  authorInput.id = 'author';
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('name', 'author');
  authorInput.setAttribute('placeholder', 'Enter the author');
  authorInput.setAttribute('autocomplete', 'off');
  authorInput.required = true;
  authorDiv.append(authorInput);

  // Page Number Total
  const pagesDiv = document.createElement('div');
  pagesDiv.classList.add('input-box');
  bookDetails.append(pagesDiv);

  const pagesLabel = document.createElement('label');
  pagesLabel.setAttribute('for', 'pages');
  pagesLabel.textContent = 'Pages';
  pagesDiv.append(pagesLabel);

  const pagesInput = document.createElement('input');
  pagesInput.id = 'pages';
  pagesInput.setAttribute('type', 'number');
  pagesInput.setAttribute('name', 'pages');
  pagesInput.setAttribute('min', '0');
  pagesInput.setAttribute('max', '9999');
  pagesInput.setAttribute('placeholder', 'Enter the number of pages');
  pagesInput.required = true;
  pagesDiv.append(pagesInput);

  // Book Cover
  const coverDiv = document.createElement('div');
  coverDiv.classList.add('input-box');
  bookDetails.append(coverDiv);

  const coverLabel = document.createElement('label');
  coverLabel.setAttribute('for', 'cover');
  coverLabel.textContent = 'Image URL';
  coverDiv.append(coverLabel);

  const coverInput = document.createElement('input');
  coverInput.id = 'cover';
  coverInput.setAttribute('type', 'url');
  coverInput.setAttribute('name', 'cover');
  coverInput.setAttribute('placeholder', 'www.example.com (not required)');
  coverDiv.append(coverInput);

  // Has book been finished checkboxes
  const readDiv = document.createElement('div');
  readDiv.classList.add('read-details');
  form.append(readDiv);

  const inputRead = document.createElement('input');
  inputRead.setAttribute('type', 'radio');
  inputRead.setAttribute('name', 'read');
  inputRead.id = 'dot-1';
  readDiv.append(inputRead);

  const secondInputRead = document.createElement('input');
  secondInputRead.setAttribute('type', 'radio');
  secondInputRead.setAttribute('name', 'read');
  secondInputRead.id = 'dot-2';
  readDiv.append(secondInputRead);

  const readSpanTitle = document.createElement('span');
  readSpanTitle.classList.add('read-title');
  readSpanTitle.textContent = 'Finished Reading?';
  readDiv.append(readSpanTitle);

  const readOrNot = document.createElement('div');
  readOrNot.classList.add('category');
  readDiv.append(readOrNot);

  const readLabel = document.createElement('label');
  readLabel.setAttribute('for', 'dot-1');
  readOrNot.append(readLabel);

  const spanDotOne = document.createElement('span');
  spanDotOne.classList.add('dot');
  spanDotOne.id = 'one';
  readLabel.appendChild(spanDotOne);

  const secondSpanDotOne = document.createElement('span');
  secondSpanDotOne.classList.add('yes-no');
  secondSpanDotOne.textContent = 'Yes';
  readLabel.append(secondSpanDotOne);

  const secondReadLabel = document.createElement('label');
  secondReadLabel.setAttribute('for', 'dot-2');
  readOrNot.append(secondReadLabel);

  const spanDotTwo = document.createElement('span');
  spanDotTwo.classList.add('dot');
  spanDotTwo.id = 'two';
  secondReadLabel.append(spanDotTwo);

  const secondSpanDotTwo = document.createElement('span');
  secondSpanDotTwo.classList.add('yes-no');
  secondSpanDotTwo.textContent = 'No';
  secondReadLabel.append(secondSpanDotTwo);

  const submitFormButton = document.createElement('div');
  submitFormButton.classList.add('button');
  form.append(submitFormButton);

  const formButton = document.createElement('input');
  formButton.setAttribute('type', 'submit');
  formButton.id = 'btn';
  formButton.setAttribute('value', 'Submit');

  submitFormButton.append(formButton);
};

createForm();

document.getElementById('btn').addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let cover = document.getElementById('cover').value;
  let selectForm = document.querySelector('form')
  let read;

  if (document.getElementById('dot-1').checked) {
    read = true;
  } else if (document.getElementById('dot-2').checked) {
    read = false;
  }

  if (!cover) cover = 'images/blank-img.png';

  const book = new Book(title, author, pages, read, cover);
  myLibrary.push(book);
  console.warn('added', { book });
  console.log({ book });
  selectForm.reset(); // to clear the form for the next entries
  refreshLibrary();

  return false;
}

const refreshLibrary = () => {
  const library = document.getElementById('library');
  library.textContent = '';
  myLibrary.forEach((book) => {
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
    displayCover.setAttribute(
      'onerror',
      "this.onerror=null;this.src='images/blank-img.png'"
    );
    displayCover.setAttribute('id', 'placeholder');
  });
};

// Scoll into view for libary and display delete button
const showDeleteButton = () => {
  const deleteDiv = document.querySelectorAll('.delete-div')
  .forEach((deleteDiv) => deleteDiv.style.display = 'block')
  document.getElementById('library').scrollIntoView();
};

document.getElementById('remove').addEventListener('click', showDeleteButton);
