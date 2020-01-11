using LibraryServiceLayer.Services;
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
    public class DeleteController : ApiController
    {
        // GET: api/Default
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Default/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Default
        public string Post([FromBody]JObject value)
        {
            var ISBN = value.Value<string>("ISBN");
            BookService bookService = new BookService();
            string message = bookService.DeleteBook(ISBN);
            if (message == "DELETE_SUCCESSFUL")
            {
                return "ok";
            }
            else
            {
                return "not found";
            }
        }

        // PUT: api/Default/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Default/5
        public void Delete(int id)
        {
        }
    }
}
