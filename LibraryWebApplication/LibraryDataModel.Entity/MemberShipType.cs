//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LibraryDataModel.Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class MemberShipType
    {
        public MemberShipType()
        {
            this.MemberShips = new HashSet<MemberShip>();
        }
    
        public int TypeID { get; set; }
        public string MemberShipType1 { get; set; }
        public decimal MembershipCharge { get; set; }
        public int MaxBookLimit { get; set; }
    
        public virtual ICollection<MemberShip> MemberShips { get; set; }
    }
}