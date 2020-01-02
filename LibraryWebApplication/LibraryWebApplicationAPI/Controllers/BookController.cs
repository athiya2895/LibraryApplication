using LibraryDataModel.Entity;
using LibraryServiceLayer.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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
        const string BOOK_NOT_EXIST = "Book with this ISBN doesn't exist";
        const string BOOK_IS_ISSUED = "Book cannot be deleted since it is issued by a customer";
        const string DELETE_SUCCESSFUL = "Book deleted successfully";

        BookService bookService = new BookService();
 
        public IEnumerable<object> GetAllBooks()
        {
            IEnumerable<Book> books = bookService.GetBooks();
            var temp = books.Select(book => new
            {
                Title = book.Title,
                RatingsCount = book.RatingsCount,
                Publisher = book.Publisher,
                PublishedDate = book.PublishedDate,
                ISBN = book.ISBN,
                ImageLinks = book.ImageLink.Split(','),
                Description = book.Description,
                Categories = book.Categories.Split(','),
                AverageRating = book.AverageRating,
                Author = book.Author,
                noOfCopies = book.noOfCopies
            });
            return temp;
        }
        [HttpPost]
        public void PostBook([FromBody]JObject book)
        {
            Console.WriteLine(book.ToString());
           // var temp = book.Value<JArray>("Categories");
            string categories = string.Join(",", book.Value<JArray>("Categories"));
            var newBook = new Book()
            {
                ISBN = book.Value<string>("ISBN"),
                Title = book.Value<string>("Title"),
                Description = book.Value<string>("Description"),
                Language = "English",
                ImageLink = book.Value<string>("ImageLink"),
                Publisher = book.Value<string>("Publisher"),
                AverageRating = book.Value<double>("AverageRating"),
                RatingsCount = book.Value<int>("RatingsCount"),
                PublishedDate = book.Value<DateTime>("PublishedDate"),
                Categories = categories           
            };
            var authors = book.Value<JArray>("Author");
            int i = 1;
            var Authors = authors.Select(auth => new BooksAuthor() { AuthorName = auth.ToString(), AuthorOrdinal = i++, ISBN = newBook.ISBN });
            
            bookService.AddBook(newBook, Authors);
        }

        /// <summary>
        /// Action to delete book
        /// </summary>
        /// <param name="book"></param>
        /// <returns></returns>
        public IHttpActionResult DeleteBook([FromBody]JObject book)
        {
            var ISBN = book.Value<string>("ISBN");
            string message = bookService.DeleteBook(ISBN);
            if (message == DELETE_SUCCESSFUL)
            {
                return Ok();
            }
            else
            {
                return Content(HttpStatusCode.NotFound, message);
            }
        }
    }
}

