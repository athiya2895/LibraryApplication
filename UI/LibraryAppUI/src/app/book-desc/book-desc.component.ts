import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Book } from '../CustomClasses/Book';
import { DBBook } from '../CustomClasses/DBBook';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { RatingChangeEvent } from 'angular-star-rating';
import { BookTransaction } from '../CustomClasses/BookTransaction';
import { Transaction } from '../Services/Transaction.service';
import { Customer } from '../CustomClasses/Customer';

@Component({
  selector: 'app-book-desc',
  templateUrl: './book-desc.component.html',
  styleUrls: ['./book-desc.component.css']
})
export class BookDescComponent implements OnInit {
  bookTransaction: BookTransaction = new BookTransaction('','','');
  constructor(private route: ActivatedRoute,
    private router: Router, private transactionService: Transaction,
    private dialog: MatDialog) { }
  customer: Customer = new Customer('','','','',new Date(),'','','');
  id: string;
  book: DBBook = null;
  //book: Book = null;
  isAdmin = false;
  //dbuser: DBUser = JSON.parse(localStorage.getItem('user'));
  issued = false;
  inEdit = false;
  copies = 0;
  returned = false;
  rating: number;
  renewed = false;
  limitReached = false;
  async ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem('login'));
    this.renewed = false;
    this.inEdit = false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.book = JSON.parse(localStorage.getItem('BookDesc'));
    //this.book = this.dbbook.book;
    // if (this.dbuser.user.issuedBooks !== undefined) {
    // if (this.dbuser.user.issuedBooks.length === 3) {
    // this.limitReached = true;
    // }
    // }
    // if (await this.guard.canActivate()) {
    // this.isAdmin = true;
    // }
    // if (this.dbuser.user.issuedBooks !== undefined) {
    // for (const book of this.dbuser.user.issuedBooks) {
    // if (book.isbn === this.dbbook.id) {
    // this.issued = true;
    // break;
    // }
    // }
// }
  }
  IssueBook() {
    console.log('Issue book clicked');
    this.returned = false;
    this.issued = true;
    const date = new Date();
    const due = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 5);

    const ISBN = this.book.ISBN;
    const LibrarianId = "1";
    var CustomerId = '11';
    if(this.customer.Email != '')
      console.log("Login first");
    else 
      CustomerId = this.customer.CustomerID.toString();
    console.log('Issue book clicked2');
    this.bookTransaction = new BookTransaction(ISBN, LibrarianId, CustomerId);
    console.log(this.bookTransaction);
    this.transactionService.issueBook(this.bookTransaction).subscribe();
    //console.log(this.bookTransaction);
    //const issuedBook = new IssuedBook(this.dbbook.id, date, due);
    // if (this.dbuser.user.issuedBooks === undefined) {
    // this.dbuser.user.issuedBooks = new Array<IssuedBook>();
    // }
    // this.dbuser.user.issuedBooks.push(issuedBook);
    // localStorage.setItem('user', JSON.stringify(this.dbuser));
    // this.dbbook.book.noOfCopies = this.dbbook.book.noOfCopies - 1;
    // this.bookService.updateBook(this.dbbook.id, this.dbbook.book).subscribe();
// this.userService.updateUser(this.dbuser.id, this.dbuser.user).subscribe();
  }
  ReturnBook() {
    this.limitReached = false;
    this.returned = true;
    this.issued = false;
    // this.dbuser.user.issuedBooks = this.dbuser.user.issuedBooks.filter(book => book.isbn !== this.dbbook.id);
    // localStorage.setItem('user', JSON.stringify(this.dbuser));
    // this.dbbook.book.noOfCopies = this.dbbook.book.noOfCopies + 1;
    // this.bookService.updateBook(this.dbbook.id, this.dbbook.book).subscribe();
    // this.userService.updateUser(this.dbuser.id, this.dbuser.user).subscribe();
  }
  RenewBook() {
    // const renewIndex = this.dbuser.user.issuedBooks.findIndex(book => book.isbn === this.dbbook.id);
    // const due = new Date(this.dbuser.user.issuedBooks[renewIndex].dueOn);
    // this.dbuser.user.issuedBooks[renewIndex].dueOn = new Date(due.getFullYear(), due.getMonth(), due.getDate() + 5);
    // localStorage.setItem('user', JSON.stringify(this.dbuser));
//this.userService.updateUser(this.dbuser.id, this.dbuser.user).subscribe(() => this.renewed = true);
  }
  EditBook() {
    this.inEdit = true; 
  }
  SaveBook() {
    this.inEdit = false;
    //this.dbbook.noOfCopies = this.copies;
    //this.bookService.updateBook(this.dbbook.id, this.dbbook.book).subscribe();
  }
  RateBook() {
    const dialogRef = this.dialog.open(RateBookDialogBoxComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(res => {
        this.returned = false;
        this.rating = res;
        const avg = this.book.AverageRating;
        if (avg === NaN) {
          this.book.AverageRating = this.rating;
          this.book.RatingsCount = 1;
        } else {
          const count = this.book.RatingsCount;
          this.book.AverageRating = ((avg * count) + this.rating) / (count + 1);
          this.book.RatingsCount = this.book.RatingsCount + 1;
        }
        localStorage.setItem('BookDesc', JSON.stringify(this.book));
        //this.bookService.updateBook(this.dbbook.id, this.dbbook.book).subscribe();
      });
    }
  }
@Component({
  selector: 'app-rate-book-dialog',
  templateUrl: './rateBook/rate-book-dialog.html',
})
export class RateBookDialogBoxComponent {
  rating: number;
  onRatingChange($event: RatingChangeEvent) {
    this.rating = $event.rating;
  }

}
