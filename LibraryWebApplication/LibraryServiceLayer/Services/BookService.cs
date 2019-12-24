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
            foreach(var book in books)
            {
                authors.Add(new List<string>());
                foreach(var author in book.BooksAuthors)
                {
                    var auth = unitOfWork.AuthorRepository.GetByID(author.AuthorID);
                    authors.LastOrDefault().Add(auth.Name);
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
                Author = authors.ElementAt(i++)
            });
            return temp;
        }
    }
}