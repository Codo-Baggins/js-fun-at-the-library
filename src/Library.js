function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  } else {
    library.shelves.fiction.push(book);
  }
  return library;
}

function checkoutBook(library, bookTitle) {
  var genres = Object.keys(library.shelves);
  for (j = 0; j < genres.length; j++) {
    var shelf = library.shelves[genres[j]];
    for (i = 0; i < shelf.length; i++) {
      if (shelf[i].title === bookTitle) {
        var book = shelf.splice(0, 1)[0];
        return `You have now checked out ${book.title} from the ${library.name}`;
      }
    }
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook,
};
