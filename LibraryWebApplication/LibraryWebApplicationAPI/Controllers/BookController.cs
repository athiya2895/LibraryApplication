using LibraryDataModel.Entity;
using LibraryServiceLayer.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LibraryWebApplicationAPI.Controllers
{
    public class BookController : ApiController
    {
        BookService bookService = new BookService();
 
        public IHttpActionResult GetAllBooks()
        {
            IEnumerable<Book> books = bookService.GetBooks();

            if (books == null)
            {
                return NotFound();
            }

            return Ok(books);
        }
    }
}
