using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryDataAccessLayer
{
    public class UserAuthentication
    {
        public void PostCustomer(Customer customer)
        {
            using (var ctx = new LibraryDbEntities())
            {
                ctx.Customers.Add(new Customer()
                {
                    Address = customer.Address,
                    DateOfBirth = customer.DateOfBirth,
                    Name = customer.Name,
                    PhoneNumber = customer.PhoneNumber,
                    Sex = customer.Sex,
                    UserID = customer.UserID
                });

                ctx.SaveChanges();
            }
        }
        public void PostUser(LibaryUser user)
        {
            using (var ctx = new LibraryDbEntities())
            {
                ctx.LibaryUsers.Add(new LibaryUser()
                {
                    UserID = user.UserID,
                    UserRole = user.UserRole
                });

                ctx.SaveChanges();
            }
        }

    }
}