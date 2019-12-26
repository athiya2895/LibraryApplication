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
    }
}