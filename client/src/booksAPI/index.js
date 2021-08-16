const getApiSearchUrl = (searchTerm) =>
  `https://openlibrary.org/search.json?q=${searchTerm}`;

export const getBookCoverByOLID = (olid) =>
olid ?
  `https://covers.openlibrary.org/b/olid/${olid}-M.jpg` : 
  "https://cdn.pixabay.com/photo/2016/10/14/16/39/book-1740515_960_720.png";

export const searchBooks = (searchTerm = "") => {
  return fetch(getApiSearchUrl(searchTerm)).then((r) => r.json());
};


