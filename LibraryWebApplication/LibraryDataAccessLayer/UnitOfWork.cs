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
        private GenericRepository<Address> addressRepository;
        private GenericRepository<Author> authorRepository;
        private GenericRepository<Book> bookRepository;
        private GenericRepository<BooksAtLibrary> booksAtLibraryRepository;
        private GenericRepository<BooksAuthor> booksAuthorRepository;
        private GenericRepository<BookTransaction> bookTransactionRepository;
        private GenericRepository<CustomerMemberShip> customerMemberShipRepository;
        private GenericRepository<Librarian> librarianRepository;
        private GenericRepository<Library> libraryRepository;
        private GenericRepository<MemberShip> memberShipRepository;
        private GenericRepository<MemberShipType> memberShipTypeRepository;

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

        public GenericRepository<Address> AddressRepository
        {
            get
            {

                if (this.addressRepository == null)
                {
                    this.addressRepository = new GenericRepository<Address>(context);
                }
                return addressRepository;
            }
        }

        public GenericRepository<Author> AuthorRepository
        {
            get
            {

                if (this.authorRepository == null)
                {
                    this.authorRepository = new GenericRepository<Author>(context);
                }
                return authorRepository;
            }
        }

        public GenericRepository<Book> BookRepository
        {
            get
            {

                if (this.bookRepository == null)
                {
                    this.bookRepository = new GenericRepository<Book>(context);
                }
                return bookRepository;
            }
        }

        public GenericRepository<BooksAtLibrary> BooksAtLibraryRepository
        {
            get
            {

                if (this.booksAtLibraryRepository == null)
                {
                    this.booksAtLibraryRepository = new GenericRepository<BooksAtLibrary>(context);
                }
                return booksAtLibraryRepository;
            }
        }

        public GenericRepository<BooksAuthor> BooksAuthorRepository
        {
            get
            {

                if (this.booksAuthorRepository == null)
                {
                    this.booksAuthorRepository = new GenericRepository<BooksAuthor>(context);
                }
                return booksAuthorRepository;
            }
        }

        public GenericRepository<BookTransaction> BookTransactionRepository
        {
            get
            {

                if (this.bookTransactionRepository == null)
                {
                    this.bookTransactionRepository = new GenericRepository<BookTransaction>(context);
                }
                return bookTransactionRepository;
            }
        }

        public GenericRepository<CustomerMemberShip> CustomerMemberShipRepository
        {
            get
            {

                if (this.customerMemberShipRepository == null)
                {
                    this.customerMemberShipRepository = new GenericRepository<CustomerMemberShip>(context);
                }
                return customerMemberShipRepository;
            }
        }

        public GenericRepository<Librarian> LibrarianRepository
        {
            get
            {

                if (this.librarianRepository == null)
                {
                    this.librarianRepository = new GenericRepository<Librarian>(context);
                }
                return librarianRepository;
            }
        }

        public GenericRepository<Library> LibraryRepository
        {
            get
            {

                if (this.libraryRepository == null)
                {
                    this.libraryRepository = new GenericRepository<Library>(context);
                }
                return libraryRepository;
            }
        }

        public GenericRepository<MemberShip> MemberShipRepository
        {
            get
            {

                if (this.memberShipRepository == null)
                {
                    this.memberShipRepository = new GenericRepository<MemberShip>(context);
                }
                return memberShipRepository;
            }
        }

        public GenericRepository<MemberShipType> MemberShipTypeRepository
        {
            get
            {

                if (this.memberShipTypeRepository == null)
                {
                    this.memberShipTypeRepository = new GenericRepository<MemberShipType>(context);
                }
                return memberShipTypeRepository;
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