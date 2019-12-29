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
        }*/
        public Customer GetUser(string userName, string pwd)
        {
            var users = unitOfWork.CustomerRepository.Get();
            return users.Where(u => u.Email == userName && u.Password == pwd).FirstOrDefault();
            //unitOfWork.Save();
            //LibraryDataAccessLayer.UserAuthentication auth = new LibraryDataAccessLayer.UserAuthentication();
            //auth.PostUser(user);
        }
    }
}