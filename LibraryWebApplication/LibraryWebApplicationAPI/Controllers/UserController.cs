using LibraryDataModel.Entity;
using LibraryServiceLayer;
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
    public class UserController : ApiController
    {
        //private UnitOfWork unitOfWork = new UnitOfWork();
        public void Post([FromBody]UserLogin value)        
        {
            //unitOfWork.CourseRepository.Insert(value);
            UserAuthentication userAuthentication = new UserAuthentication();
            userAuthentication.PostUser(value);
        }
        public string Get()
        {
            UserAuthentication userAuthentication = new UserAuthentication();
            return JsonConvert.SerializeObject(userAuthentication.GetUsers());
        }
    }
}
