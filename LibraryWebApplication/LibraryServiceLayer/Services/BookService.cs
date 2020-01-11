using LibraryDataAccessLayer;
using LibraryDataModel.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryServiceLayer.Services
{
    public class BookService
    {
        const string ISSUED_STATUS = "Issued";
        const string BOOK_NOT_EXIST = "Book with this ISBN doesn't exist";
        const string BOOK_IS_ISSUED = "Book cannot be deleted since it is issued by a customer";
        const string DELETE_SUCCESSFUL = "Book deleted successfully";

        UnitOfWork unitOfWork = new UnitOfWork();
        public IEnumerable<Book> GetBooks()
        {
            var books = unitOfWork.BookRepository.Get();
            List<List<string>> authors = new List<List<string>>();
            //List<int> noOfBooks = new List<int>();
            foreach(var book in books)
            {
               // noOfBooks.Add(unitOfWork.BooksAtLibraryRepository.GetByID(book.ISBN).NumberOfCopies);
                authors.Add(new List<string>());
                foreach(var author in book.BooksAuthors)
                {
                   // var auth = unitOfWork.BooksAuthorRepository.GetByID(author.AuthorName);
                    authors.LastOrDefault().Add(author.AuthorName);
                }
            }
            int i = 0;
            var temp = books.Select(book => new Book() {
                Title = book.Title,
                RatingsCount = book.RatingsCount,
                Publisher = book.Publisher,
                PublishedDate = book.PublishedDate,
                Price = book.Price,
                Language = book.Language,
                ISBN = book.ISBN,
                IsAvailable = book.IsAvailable,
                ImageLink = book.ImageLink,
                Description = book.Description,
                Categories = book.Categories,
                AverageRating = book.AverageRating,
                Author = authors.ElementAt(i++),
                noOfCopies = book.BooksAtLibraries.FirstOrDefault().NumberOfCopies
            });
            return temp;
        }
        public void AddBook(Book book, IEnumerable<BooksAuthor> booksAuthor)
        {
            foreach (var auth in booksAuthor) {
                unitOfWork.BooksAuthorRepository.Insert(auth);
            }
            unitOfWork.BookRepository.Insert(book);
            unitOfWork.Save();                
        }

        /// <summary>
        /// Method to delete book
        /// </summary>
        /// <param name="ISBN"></param>
        public string DeleteBook(string ISBN)
        {
            //Check if the book exists
            Book book = unitOfWork.BookRepository.GetByID(ISBN);
            if (book != null)
            {
                //Verify if the book is issued to any customer. If no, proceed
                IEnumerable<BookTransaction> bookTransactions = unitOfWork.BookTransactionRepository.Get();
                var transactionRow = bookTransactions.Where(x => x.ISBN == ISBN && x.Status == ISSUED_STATUS).FirstOrDefault(); //Its sufficient to check if one transaction exists

                if (transactionRow == null)
                {
                    //Delete book
                    //unitOfWork.BooksAuthorRepository.Delete(ISBN);
                    unitOfWork.BookRepository.Delete(ISBN);
                    unitOfWork.Save();
                    return DELETE_SUCCESSFUL;
                }
                else
                {
                    return BOOK_IS_ISSUED;
                }
            }
            else
                return BOOK_NOT_EXIST;
        }
    }
}