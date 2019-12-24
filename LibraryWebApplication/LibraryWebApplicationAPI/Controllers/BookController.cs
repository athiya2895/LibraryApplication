using LibraryDataModel.Entity;
using LibraryServiceLayer.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace LibraryWebApplicationAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BookController : ApiController
    {
        BookService bookService = new BookService();
 
        public string GetAllBooks()
        {
            IEnumerable<Book> books = bookService.GetBooks();
            var temp = books.Select(book => new Book()
            {
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
                BooksAuthors = null
            });
            //if (books == null)
            //{
            //    return NotFound();
            //}

            return JsonConvert.SerializeObject(books);
        }
    }
}
