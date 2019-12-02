using LibraryDataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryServiceLayer
{
    public class UserAuthentication
    {
        private UnitOfWork unitOfWork = new UnitOfWork();
        public void PostUser(Models.LibaryUser user)
        {
            unitOfWork.UserRepository.Insert(new UserLogin() {
                UserID = user.UserID,
                Role = user.UserRole
            });
            unitOfWork.Save();
            //LibraryDataAccessLayer.UserAuthentication auth = new LibraryDataAccessLayer.UserAuthentication();
            //auth.PostUser(user);
        }
        public void PostCustomer(Customer customer)
        {
            //LibraryDataAccessLayer.UserAuthentication auth = new LibraryDataAccessLayer.UserAuthentication();
            //auth.PostCustomer(customer);
        }
    }
}