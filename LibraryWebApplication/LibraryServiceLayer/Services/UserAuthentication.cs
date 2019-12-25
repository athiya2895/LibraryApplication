using LibraryDataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LibraryDataModel.Entity;

namespace LibraryServiceLayer
{
    public class UserAuthentication
    {
        private UnitOfWork unitOfWork = new UnitOfWork();
        
        /*public void PostUser(UserLogin user)
        {
            unitOfWork.UserRepository.Insert(user);
            unitOfWork.Save();
            //LibraryDataAccessLayer.UserAuthentication auth = new LibraryDataAccessLayer.UserAuthentication();
            //auth.PostUser(user);
        }
        public void PostCustomer(Customer customer)
        {
            unitOfWork.CustomerRepository.Insert(customer);
            unitOfWork.Save();
            //LibraryDataAccessLayer.UserAuthentication auth = new LibraryDataAccessLayer.UserAuthentication();
            //auth.PostCustomer(customer);
        }
        public IEnumerable<UserLogin> GetUsers()
        {
            return unitOfWork.UserRepository.Get();
            //unitOfWork.Save();
            //LibraryDataAccessLayer.UserAuthentication auth = new LibraryDataAccessLayer.UserAuthentication();
            //auth.PostUser(user);
        }*/
    }
}