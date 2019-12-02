using Models;
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
        public void Post([FromBody]LibaryUser value)
        {
            //unitOfWork.CourseRepository.Insert(value);
            LibraryServiceLayer.UserAuthentication userAuthentication = new LibraryServiceLayer.UserAuthentication();
            userAuthentication.PostUser(value);
        }
       // public string Get()
      //  {
            //return JsonConvert.SerializeObject(unitOfWork.UserRepository.Get());
       // }
    }
}
