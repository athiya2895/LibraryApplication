using LibraryDataAccessLayer;
using LibraryDataModel.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryServiceLayer.Services
{
    public class BookService
    {
        UnitOfWork unitOfWork = new UnitOfWork();
        public IEnumerable<Book> GetBooks()
        {
            return unitOfWork.BookRepository.Get();
        }
    }
}