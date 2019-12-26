using LibraryDataModel.Entity;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LibraryWebApplicationAPI.Controllers
{
    public class BookTransactionController : ApiController
    {
        [HttpPost]
        public void PostBook([FromBody]JObject transaction)
        {
            Console.WriteLine(transaction.ToString());
            // var temp = book.Value<JArray>("Categories");
            //string categories = string.Join(",", book.Value<JArray>("Categories"));
            var newBook = new BookTransaction()
            {
                ISBN = transaction.Value<string>("ISBN"),
                BorrowedDate = transaction.Value<DateTime>("BorrowedDate"),
                DueDate = transaction.Value<DateTime>("DueDate"),
                CustomerId = 1,
                LibrarianID = 1,
                Status = transaction.Value<string>("Status"),
                FineAmount = transaction.Value<decimal>("FineAmount")                
            };
            //var authors = book.Value<JArray>("Author");
            //int i = 1;
            //var Authors = authors.Select(auth => new BooksAuthor() { AuthorName = auth.ToString(), AuthorOrdinal = i++, ISBN = newBook.ISBN });

            //bookService.AddBook(newBook, Authors);
        }
    }
}
