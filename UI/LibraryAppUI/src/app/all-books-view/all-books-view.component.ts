import { Component, OnInit } from '@angular/core';
import { DBBook } from '../CustomClasses/DBBook';
//import { DBBook } from '../CustomClasses/DbBook';
import { MatDialog } from '@angular/material';
import { BookService } from '../Services/books.service';
import { Router } from '@angular/router';
import { Transaction } from '../Services/Transaction.service';
import { User } from '../CustomClasses/User';
import { Customer } from '../CustomClasses/Customer';
import { AdminGaurd } from '../Services/Authentication/admin-guard';

@Component({
  selector: 'app-all-books-view',
  templateUrl: './all-books-view.component.html',
  styleUrls: ['./all-books-view.component.css']
})
export class AllBooksViewComponent implements OnInit {

  constructor(private router: Router,
    private bookservice: BookService,
    private dialog: MatDialog,
    private transactionService: Transaction,
    private guard: AdminGaurd) { }
  rowNo = 3;
  //books: Book[] = new Array<Book>();
  searchBook = '';
  //tempBooks: Book[] = [];
  averageRating: number[] = [];
  dbBook: DBBook = null;
  allBooks: DBBook[] = new Array<DBBook>();
  selectGenre = '';
  isAdmin = false;
  deleteSure = false;
  data;
  async ngOnInit() {
    if (await this.guard.canActivate()) {
      this.isAdmin = true;
    }
   //this.books = new Array<Book>();
    console.log(this.isAdmin);
     this.bookservice.getBooks().subscribe(res =>
     {
        console.log(res);
        this.allBooks = res;
        console.log(this.allBooks);
        localStorage.setItem('books',JSON.stringify(this.allBooks));
        this.transactionService.transactions(new User(user.Role,user.Email,user.Password)).subscribe(res =>
        {
           console.log(res);
           //this.allBooks = res;
           //console.log(this.allBooks);
           localStorage.setItem('transactions',JSON.stringify(res));
         });;
      });
      let user: Customer = JSON.parse(localStorage.getItem('login'));
       
  }
  describeBook(dbbook: DBBook) {
    localStorage.setItem('BookDesc', JSON.stringify(dbbook));
    this.router.navigate(['/bookdesc/' + dbbook.ISBN]);
  }
  addBookNav() {
    // this.router.navigate(['addBook']);
  }
  deleteBook(deletedBook: DBBook) {
    this.deleteSure = false;
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
    width: '250px'
    });
    dialogRef.afterClosed().subscribe(res => {
    this.deleteSure = res;
    if (this.deleteSure) {
      console.log(this.deleteSure);
      console.log(deletedBook);
    //this.allBooks = this.allBooks.filter(book => book.id !== deletedBook.id);
     this.bookservice.deleteBook(deletedBook.ISBN).subscribe(
      () => {
        //this.done = true;
        console.log(true);
      }
    );;//.then();
    }
    });
  }
  onResize(event) {
    const element = event.target.innerWidth;
    if (element < 950) {
      this.rowNo = 2;
    }
    if (element > 950) {
      this.rowNo = 3;
    }
    if (element < 750) {
      this.rowNo = 1;
    }
  }
}
@Component({
  selector: 'app-delete-book-dialog',
  templateUrl: './deleteBook/delete-book-dialog.html',
})
export class DeleteDialogBoxComponent {}