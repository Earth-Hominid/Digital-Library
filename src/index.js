const data = [
  {
    title: "JavaScript: The Good Parts", 
    author: "by Douglas Crockford", 
    pages: 172, 
    pagesRead: 0, 
    pic: "images/good.jpeg",
  },
  {
    title: "JavaScript: The Definitive Guide", 
    author: "by David Flanagan", 
    pages: 706, 
    pagesRead: 200,
    pic: "images/def.jpg", 
  },
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming", 
    author: "by Marijn Haverbeke", 
    pages: 472, pagesRead: 0,
    pic: "images/elo.jpeg",
  }
];

const createBookCard = (book) => {
  // Create HTML elements to display the book on a card
  const cardDiv = document.createElement('div');
  const h4 = document.createElement('h4');
  const h5 = document.createElement('h5');
  const img = document.createElement('img');

  // select body element for newly created elements to be appended
  const show = document.querySelector('div.show');
  
  // Append the elements to the DOM
  show.appendChild(cardDiv); 
  cardDiv.append(img); // Add the img inside the div
  cardDiv.append(h4); // Add the h4 inside the div
  cardDiv.append(h5); // Add h5 tag inside of the h4
  
  // Set content and attributes
  h4.innerHTML = book.title;
  h5.innerHTML = book.author;
  // use setAttribute to add the card class to the div
  img.setAttribute('src', book.pic);
  cardDiv.setAttribute("class", "card");
};

data.forEach(book => createBookCard(book))











