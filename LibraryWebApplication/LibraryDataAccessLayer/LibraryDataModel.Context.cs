﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LibraryDataModel.Entity
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class LibraryDBEntitiesContext : DbContext
    {
        public LibraryDBEntitiesContext()
            : base("name=LibraryDBEntitiesContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<BooksAtLibrary> BooksAtLibraries { get; set; }
        public virtual DbSet<BooksAuthor> BooksAuthors { get; set; }
        public virtual DbSet<BookTransaction> BookTransactions { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerMemberShip> CustomerMemberShips { get; set; }
        public virtual DbSet<Librarian> Librarians { get; set; }
        public virtual DbSet<Library> Libraries { get; set; }
        public virtual DbSet<MemberShip> MemberShips { get; set; }
        public virtual DbSet<MemberShipType> MemberShipTypes { get; set; }
    }
}
