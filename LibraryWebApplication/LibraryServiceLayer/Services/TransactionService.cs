using LibraryDataAccessLayer;
using LibraryDataModel.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryServiceLayer.Services
{
    public class TransactionService
    {
        UnitOfWork unitOfWork = new UnitOfWork();
        public void AddTransaction(BookTransaction transaction)
        {
            unitOfWork.BookTransactionRepository.Insert(transaction);
            unitOfWork.Save();
        }
    }
}