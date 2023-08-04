function findAuthorById(authors, id) {
  const findId = authors.find((user) => user.id === id);
  return findId;
}

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id);
  return findBook;
}

function partitionBooksByBorrowedStatus(books) {
  const booksInOut = [];
  let inBooks = [];
  let outBooks = [];
  

  books.forEach((book) => {
    const bookReturned = book.borrows[0].returned
    if(bookReturned){
      outBooks.push(book);
    }else{

      inBooks.push(book); 
    }
  });

  booksInOut.push(inBooks);
  booksInOut.push(outBooks); 
  return booksInOut; 
}

function getBorrowersForBook(book, accounts) {
  let result = []
  let borrowed = book.borrows;
  borrowed.forEach((borrow) =>{
    let account = accounts.find((acc) => acc.id === borrow.id);
    account['returned'] = borrow.returned;
    result.push(account);
  })
  return sortedBorrows(result);
}

function sortedBorrows(result){
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
