import { Component, OnInit } from '@angular/core';
import { DBBook } from '../CustomClasses/DBBook';
import { ISBNBookService } from '../Services/ISBNBookService.service';
import { BookService } from '../Services/books.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  book: DBBook;
  done = false;
  numberOfBooks = 0;
  constructor(private bookService: ISBNBookService, 
            private newBookService: BookService) { }
  ngOnInit() {
  }
  getBook(isbn: any) {
    this.book = null;
    this.done = false;
    this.bookService.getBook(isbn.value).subscribe((res: DBBook) => {
       this.mapBook(res);
    });
  }
  mapBook(res: any) {
    this.book = new DBBook(res.id, res.volumeInfo.title, res.volumeInfo.authors, res.volumeInfo.publisher,
      res.volumeInfo.publishedDate, res.volumeInfo.description, res.volumeInfo.categories,
      res.volumeInfo.averageRating, res.volumeInfo.ratingsCount, 0, res.volumeInfo.imageLinks );
  }
  addBook() {
    this.book.noOfCopies = this.numberOfBooks;
    this.newBookService.addNewBook(this.book).subscribe(
      () => {
        this.done = true;
        console.log(this.done);
      }
    );
  }

}
