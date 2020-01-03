using LibraryDataModel.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LibraryServiceLayer.Services;
using LibraryServiceLayer;
using Newtonsoft.Json.Linq;
using System.Web.Http.Cors;

namespace LibraryWebApplicationAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserAuthenticationController : ApiController
    {
        UserAuthentication authService = new UserAuthentication();
        [HttpPost]
        public object ValidateCustomer([FromBody]JObject customer)
        {
            string userName = customer.Value<string>("userName");
            string pwd = customer.Value<string>("password");
            var user = authService.GetUser(userName, pwd);
            return new
            {
                Address = user.Address,
                CustomerID = user.CustomerID,
                DateOfBirth = "28-06-1995",
                Email = user.Email,
                Name = user.Name,
                PhoneNumber = user.PhoneNumber,
                Password = "",
                Sex = user.Sex                
            };
        }
       
    }
}
