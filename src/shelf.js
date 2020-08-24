function shelfBook(title, shelfCategory) {
  if (shelfCategory.length < 3) {
    shelfCategory.unshift(title);
  }
}

function unshelfBook(title, shelfCategory) {
  for (i = 0; i < shelfCategory.length; i++) {
    if (title === shelfCategory[i].title) {
      shelfCategory.splice(i, 1);  
    }
  }
}

function listTitles(shelfCategory) {
  var shelfItems = [];
  for (i = 0; i < shelfCategory.length; i++) {
    shelfItems.push(shelfCategory[i].title)
  } 
  var newList = shelfItems.join(", ")
  return newList;   
}

function searchShelf(shelfCategory, title) {
  return listTitles(shelfCategory).includes(title) > 0;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};