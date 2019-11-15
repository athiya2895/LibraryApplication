import { Component, OnInit } from '@angular/core';
import { Book } from '../CustomClasses/Book';
import { DBBook } from '../CustomClasses/DbBook';
import { MatDialog } from '@angular/material';
import { BookService } from '../services/books.service';

@Component({
  selector: 'app-all-books-view',
  templateUrl: './all-books-view.component.html',
  styleUrls: ['./all-books-view.component.css']
})
export class AllBooksViewComponent implements OnInit {

  constructor(private bookservice: BookService,
    private dialog: MatDialog) { }
  rowNo = 3;
  books: Book[] = new Array<Book>();
  searchBook = '';
  tempBooks: Book[] = [];
  averageRating: number[] = [];
  dbBook: DBBook = null;
  allBooks: DBBook[] = new Array<DBBook>();
  selectGenre = '';
  isAdmin = false;
  deleteSure = false;
  data;
  async ngOnInit() {
    // if (await this.gaurd.canActivate()) {
    // this.isAdmin = true;
    // }
    this.books = new Array<Book>();
    this.data = this.bookservice.getAllBooks();
    console.log("comp"+this.data);
    for (const id in this.data) {
      console.log(id);
      this.dbBook = new DBBook(id, this.data[id].id, this.data[id].title, this.data[id].authors, this.data[id].publisher,
      this.data[id].publishedDate, this.data[id].description, this.data[id].categories, this.data[id].averageRating,
      this.data[id].ratingsCount, this.data[id].noOfCopies, this.data[id].imageLinks);
      this.allBooks.push(this.dbBook);
      this.books.push(this.dbBook.book);
    }
  }
  describeBook(dbbook: DBBook) {
    localStorage.setItem('BookDesc', JSON.stringify(dbbook));
  // this.router.navigate(['/bookdesc/' + dbbook.book.id]);
  }
  addBookNav() {
    // this.router.navigate(['addBook']);
  }
  deleteBook(deletedBook: DBBook) {
    this.deleteSure = false;
    // const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
    // width: '250px'
    // });
    // dialogRef.afterClosed().subscribe(res => {
    // this.deleteSure = res;
    // if (this.deleteSure) {
    // this.allBooks = this.allBooks.filter(book => book.id !== deletedBook.id);
    // // this.bookservice.deleteBook(deletedBook.id).then();
    // }
    // });
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
