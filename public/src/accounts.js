function findAccountById(accounts, id) {
  const idAccount = accounts.find((account) => account.id === id)
  return idAccount
}

function sortAccountsByLastName(accounts) {
  accounts.sort((account1, account2) => 
    account1.name.last > account2.name.last ? 1 : -1);
  return accounts;
}
   
 function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;

  return getBorrows(accountId, books);
}

function getBorrows(accountId, books) {
  let borrowsTotal = 0;
  books.forEach((book) => book.borrows.forEach((borrow) => accountId === borrow.id && borrowsTotal++));
  return borrowsTotal;
}

function getBooksPossessedByAccount(account, books, authors) {
  let filteredBooks = [];
  books.forEach((book) => {
    if(book.borrows.find((item) => item.id === account.id && !item.returned)) {
      filteredBooks.push(book);
    }
  })
  filteredBooks.forEach((book) => {
    let theAuthor = authors.find((person) => person.id === book.authorId);
    book['author'] = theAuthor;
  })
  return filteredBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
