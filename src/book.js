function createTitle(title) {
  return bookIdea = "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {
    name: name,
    age: age, 
    pronouns: pronouns,
  };
  return ghoulCharacter;
}

function saveReview(reviewQuote, reviews) {
  if (reviews[i] != reviewQuote) {
    reviews.push(reviewQuote)
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre,
  }
  return book;
}

function editBook(book) {
  return book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}