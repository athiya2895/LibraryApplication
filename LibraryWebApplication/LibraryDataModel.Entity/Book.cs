//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Book
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Book()
        {
            this.BooksAtLibraries = new HashSet<BooksAtLibrary>();
            this.BooksAuthors = new HashSet<BooksAuthor>();
            this.BookTransactions = new HashSet<BookTransaction>();
        }
    
        public string ISBN { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Language { get; set; }
        public string ImageLink { get; set; }
        public Nullable<System.DateTime> PublishedDate { get; set; }
        public string Publisher { get; set; }
        public string Categories { get; set; }
        public bool IsAvailable { get; set; }
        public string Description { get; set; }
        public List<string> Author { get; set; }
        public int noOfCopies { get; set; }
        public Nullable<double> AverageRating { get; set; }
        public Nullable<int> RatingsCount { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BooksAtLibrary> BooksAtLibraries { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BooksAuthor> BooksAuthors { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BookTransaction> BookTransactions { get; set; }
    }
}
