using LibraryDataModel.Entity;
using LibraryServiceLayer;
using LibraryServiceLayer.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace LibraryWebApplicationAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CustomerController : ApiController
    {
        CustomerService customerService = new CustomerService();

        /// <summary>
        /// Method to retrieve details of all customers
        /// </summary>
        /// <returns></returns>
        public IHttpActionResult GetAllCustomers()
        {
            IEnumerable<Customer> customers =  customerService.GetAllCustomers();
            return Ok(customers);
        }

        /// <summary>
        /// Method to retrieve a customer details
        /// </summary>
        /// <param name="custID"></param>
        /// <returns></returns>
        public IHttpActionResult GetCustomer(int custID)
        {
            Customer customer = customerService.GetCustomer(custID);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        /// <summary>
        /// Method to insert new customer
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        [HttpPost]
        public IHttpActionResult PostCustomer([FromBody]Customer customer)
        {
            customer = customerService.InsertCustomer(customer);
            return Ok(customer);
        }

        /// <summary>
        /// Method to edit customer details
        /// </summary>
        /// <param name="id"></param>
        /// <param name="customer"></param>
        /// <returns></returns>
        public IHttpActionResult PutCustomer(int id, Customer customer)
        {
            customer = customerService.EditCustomer(id, customer);
            return Ok(customer);
        }

        /// <summary>
        /// Method to delete customer details
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public IHttpActionResult DeleteCustomer(int id)
        {
            bool result = customerService.DeleteCustomer(id);
            if (result) return Ok();
            else return BadRequest();

        }

    }
}
