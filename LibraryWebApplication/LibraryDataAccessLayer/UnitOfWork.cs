using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryDataAccessLayer
{
    public class UnitOfWork : IDisposable
    {
        private LibraryDBEntitiesContext context = new LibraryDBEntitiesContext();
        private GenericRepository<Customer> customerRepository;
        private GenericRepository<UserLogin> userRepository;
        public GenericRepository<Customer> CustomerRepository
        {
            get
            {

                if (this.customerRepository == null)
                {
                    this.customerRepository = new GenericRepository<Customer>(context);
                }
                return customerRepository;
            }
        }
        public GenericRepository<UserLogin> UserRepository
        {
            get
            {

                if (this.userRepository == null)
                {
                    this.userRepository = new GenericRepository<UserLogin>(context);
                }
                return userRepository;
            }
        }
        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}