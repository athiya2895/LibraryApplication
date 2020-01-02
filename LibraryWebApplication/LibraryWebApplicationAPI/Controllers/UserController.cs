using LibraryDataModel.Entity;
using LibraryServiceLayer;
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
    public class UserController : ApiController
    {
        TransactionService transactionService = new TransactionService();

        /// <summary>
        /// Method to get issued book details of a user
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        [HttpGet]
        public object GetIssuedBookDetailsOfUser([FromBody]JObject customer)
        {
            List<object> list = new List<object>();
            var email = customer.Value<string>("userName");

            var issuedBooks = transactionService.GetTransactionDetails(email);
            foreach(var issuedBook in issuedBooks)
            {
                list.Add(new { Title = issuedBook.Book.Title, IssuedOn = issuedBook.BorrowedDate, DueOn = issuedBook.DueDate });
            }
            return list;
        }

        //private UnitOfWork unitOfWork = new UnitOfWork();
        /*public void Post([FromBody]UserLogin value)        
        {
            //unitOfWork.CourseRepository.Insert(value);
            UserAuthentication userAuthentication = new UserAuthentication();
            userAuthentication.PostUser(value);
        }
        public string Get()
        {
            UserAuthentication userAuthentication = new UserAuthentication();
            return JsonConvert.SerializeObject(userAuthentication.GetUsers());
        }*/
    }
}
