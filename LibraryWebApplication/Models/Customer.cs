using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    using System;
    using System.Collections.Generic;

    public partial class Customer
    {
        public int CustomerID { get; set; }
        public string UserID { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }

        public virtual LibaryUser LibaryUser { get; set; }
    }
}
