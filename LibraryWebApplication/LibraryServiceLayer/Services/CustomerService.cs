using LibraryDataAccessLayer;
using LibraryDataModel.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryServiceLayer.Services
{
    public class CustomerService
    {
        readonly UnitOfWork unitOfWork = new UnitOfWork();

        /// <summary>
        /// Method to retrieve details of all customers
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Customer> GetAllCustomers()
        {
            return unitOfWork.CustomerRepository.Get();
        }

        /// <summary>
        /// Method to retrieve a customer details
        /// </summary>
        /// <param name="custID"></param>
        /// <returns></returns>
        public Customer GetCustomer(int custId)
        {
            return unitOfWork.CustomerRepository.GetByID(custId);
        }

        /// <summary>
        /// Method to insert new customer
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        public Customer InsertCustomer(Customer customer)
        {
            customer = unitOfWork.CustomerRepository.Insert(customer);
            unitOfWork.Save();
            return customer;
        }

        /// <summary>
        /// Method to edit customer details
        /// </summary>
        /// <param name="id"></param>
        /// <param name="customer"></param>
        /// <returns></returns>
        public Customer EditCustomer(int custId, Customer customer)
        {
            unitOfWork.CustomerRepository.Update(customer);
            unitOfWork.Save();
            return customer;
        }

        /// <summary>
        /// Method to delete customer details
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool DeleteCustomer(int custId)
        {

            //ToDO: Verify if there is any active book transaction.

            Customer customer = unitOfWork.CustomerRepository.GetByID(custId);
            if (customer != null)
            {
                unitOfWork.CustomerRepository.Delete(custId);
                unitOfWork.Save();
                return true;
            }
            else
                return false;
        }
    }
}