function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  for (let account in accounts) {
    totalAccounts += 1;
  }
  return totalAccounts;
  //return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter(book => book.borrows.some(borrowed => borrowed.returned === false)).length;
  return borrowedBooks; 
}

function getMostCommonGenres(books) {
  let map = {};

  books.forEach((book) => {
   if (map[book.genre]) {
    map[book.genre]++;
   } else {
    map[book.genre] = 1;
   }
  });
  return Object.entries(map)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((genreA, genreB) => genreB.count - genreA.count)
   .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((firstBook, nextBook) => (firstBook.count < nextBook.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let bookAuth = books.filter((book) => book.authorId === author.id)
    let bookAuthBorrows = bookAuth.reduce((borrowTot, book) => borrowTot + book.borrows.length, 0)
    result.push ({name: author.name.first + " " + author.name.last, count: bookAuthBorrows})
  })
  return result.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
