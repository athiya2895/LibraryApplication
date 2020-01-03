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
        const int FINE_PER_DAY = 10;
        const string RENEWED_STATUS = "Renewed";
        const string RETURN_STATUS = "Returned";
        const string ISSUED_STATUS = "Issued";
        UnitOfWork unitOfWork = new UnitOfWork();

        /// <summary>
        /// Get transaction details of a customer
        /// </summary>
        /// <param name="customerId"></param>
        /// <returns></returns>
        public IEnumerable<BookTransaction> GetTransactionDetails(string email)
        {
            Customer customer = unitOfWork.CustomerRepository.Get().Where(x=>x.Email == email).FirstOrDefault();
            
            //Get transaction details of a customer
            IEnumerable<BookTransaction> bookTransactions = unitOfWork.BookTransactionRepository.Get();
            var transactionRows = bookTransactions.Where(x => x.CustomerId == customer.CustomerID && x.Status == ISSUED_STATUS).ToList();
            
            return transactionRows;
        }

        /// <summary>
        /// Method to issue book to customer
        /// </summary>
        /// <param name="transaction"></param>
        /// <returns></returns>
        public bool IssueBook(BookTransaction transaction)
        {
            try
            {

                //Check if book is available
                IEnumerable<Librarian> librarians = unitOfWork.LibrarianRepository.Get();
                var libraryId = librarians.Where(x => x.LibrarianID == transaction.LibrarianID).Select(x => x.LibraryID).First();

                IEnumerable<BooksAtLibrary> booksAtLibrary = unitOfWork.BooksAtLibraryRepository.Get();
                var numberOfCopies = booksAtLibrary.Where(x => x.LibraryID == Convert.ToInt32(libraryId) && x.ISBN == transaction.ISBN).Select(x => x.NumberOfCopies).First();

                if (Convert.ToInt32(numberOfCopies) > 0)
                {
                    //Insert a transaction row
                    unitOfWork.BookTransactionRepository.Insert(transaction);
                    //Update number of copies in booksAtLibrary
                    var booksAtLibraryRow = booksAtLibrary.Where(x => x.LibraryID == Convert.ToInt32(libraryId)).FirstOrDefault();
                    booksAtLibraryRow.NumberOfCopies--;
                    unitOfWork.BooksAtLibraryRepository.Update(booksAtLibraryRow);
                    unitOfWork.Save();
                    return true;
                }
                else
                {

                    return false;
                }
            }
            catch (NullReferenceException ex)
            {
                //ToDO:: Need to check how to handle exception
                return false;
            }
        }

        /// <summary>
        /// Method to return book
        /// </summary>
        /// <param name="customerId"></param>
        /// <param name="ISBN"></param>
        public void ReturnBook(int customerId, string ISBN)
        {
            try
            {
                //Get transaction detail of a customer for a book isbn
                IEnumerable<BookTransaction> bookTransactions = unitOfWork.BookTransactionRepository.Get();
                var transactionRow = bookTransactions.Where(x => x.CustomerId == customerId && x.ISBN == ISBN).FirstOrDefault();

                //Check if fine amount is applicable, update it. Set 10Rs. per day.
                if (DateTime.Now > transactionRow.DueDate)
                {
                    transactionRow.FineAmount = (((TimeSpan)(DateTime.Now - transactionRow.DueDate)).Days) * FINE_PER_DAY;
                }
                //Update status
                transactionRow.Status = RETURN_STATUS;
                //Update return date
                transactionRow.ReturnDate = DateTime.Now;
                //Update number Of copies
                IEnumerable<Librarian> librarians = unitOfWork.LibrarianRepository.Get();
                var libraryId = librarians.Where(x => x.LibrarianID == transactionRow.LibrarianID).Select(x => x.LibraryID).First();

                IEnumerable<BooksAtLibrary> booksAtLibrary = unitOfWork.BooksAtLibraryRepository.Get();
                var booksAtLibraryRow = booksAtLibrary.Where(x => x.LibraryID == Convert.ToInt32(libraryId) && x.ISBN == transactionRow.ISBN).FirstOrDefault();
                booksAtLibraryRow.NumberOfCopies++;

                unitOfWork.BookTransactionRepository.Update(transactionRow);
                unitOfWork.BooksAtLibraryRepository.Update(booksAtLibraryRow);
                unitOfWork.Save();
            }
            catch (NullReferenceException ex)
            {
                //ToDO:: Need to check how to handle exception
                throw;
            }
        }

        /// <summary>
        /// Method to renew book by 15 days
        /// </summary>
        /// <param name="customerId"></param>
        /// <param name="ISBN"></param>
        public void RenewBook(int customerId, string ISBN) {
            //Check if the transaction exists for customer
            IEnumerable<BookTransaction> bookTransactions = unitOfWork.BookTransactionRepository.Get();
            var transactionRow = bookTransactions.Where(x => x.CustomerId == customerId && x.ISBN == ISBN).FirstOrDefault();

            //Check if fine amount is applicable, update it. Set 10Rs. per day.
            if (transactionRow!=null && DateTime.Now > transactionRow.DueDate)
            {
                transactionRow.FineAmount = (((TimeSpan)(DateTime.Now - transactionRow.DueDate)).Days) * FINE_PER_DAY;
            }

            //Extend due date by 15 days
            transactionRow.DueDate = DateTime.Now.AddDays(15);

            //Update status to renewed
            transactionRow.Status = RENEWED_STATUS;

            unitOfWork.BookTransactionRepository.Update(transactionRow);
            unitOfWork.Save();
        }
    }
}