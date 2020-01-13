using LibraryDataModel.Entity;
using LibraryServiceLayer.Services;
using Newtonsoft.Json.Linq;
using System;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;

namespace LibraryWebApplicationAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BookTransactionController : ApiController
    {
        #region constants
        const string BOOK_NOT_AVAILABLE = "Book not available";
        const string ISSUED_STATUS = "Issued";
        #endregion

        TransactionService transactionService = new TransactionService();

        /// <summary>
        /// Method to handle issue books
        /// </summary>
        /// <param name="transaction"></param>
        [HttpPost]
        public IHttpActionResult PostBook([FromBody]JObject transaction)
        {
            var issueTransaction = new BookTransaction()
            {
                ISBN = transaction.Value<string>("ISBN"),
                BorrowedDate = DateTime.Now,
                DueDate = DateTime.Now.AddDays(15),
                CustomerId = transaction.Value<int>("CustomerId"),
                LibrarianID = transaction.Value<int>("LibrarianId"),
                Status = ISSUED_STATUS,
                FineAmount = 0
            };
            bool isIssued = transactionService.IssueBook(issueTransaction);
            if (isIssued)
            {
                return Ok(issueTransaction);
            }
            else
            {
                return Content(HttpStatusCode.NotFound, BOOK_NOT_AVAILABLE);
            }
        }

        /// <summary>
        /// Method to handle return
        /// </summary>
        /// <param name="book"></param>
        [HttpPut]
        public void ReturnBook([FromBody]JObject transaction)
        {
            int customerId = transaction.Value<int>("CustomerId");
            string ISBN = transaction.Value<string>("ISBN");

            transactionService.ReturnBook(customerId, ISBN);
        }

        
    }
}
