import { Component, OnInit } from '@angular/core';
import { Book } from '../CustomClasses/Book';
import { ISBNBookService } from '../Services/ISBNBookService.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  book: Book;
  done = false;
  numberOfBooks = 0;
  constructor(private bookService: ISBNBookService) { }
  ngOnInit() {
  }
  getBook(isbn: any) {
    this.book = null;
    this.done = false;
    this.bookService.getBook(isbn.value).subscribe((res: Book) => {
       this.mapBook(res);
    });
  }
  mapBook(res: any) {
    this.book = new Book(res.id, res.volumeInfo.title, res.volumeInfo.authors, res.volumeInfo.publisher,
      res.volumeInfo.publishedDate, res.volumeInfo.description, res.volumeInfo.categories,
      res.volumeInfo.averageRating, res.volumeInfo.ratingsCount, 0, res.volumeInfo.imageLinks );
  }
  addNewBook() {
    this.book.noOfCopies = this.numberOfBooks;
    // this.addBookService.addBook(this.book).subscribe(
    //   () => {
    //     this.done = true;
    //   }
    // );
  }

}
