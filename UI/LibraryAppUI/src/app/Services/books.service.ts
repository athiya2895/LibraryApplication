import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
//import AllBooks from 'D:/LibraryApplication/UI/LibraryAppUI/src/assets/books.json'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { DBBook } from '../CustomClasses/DBBook';

@Injectable()
export class BookService {
  addNewBook(book: DBBook) {
    return this.http.post(this.url, book)
  }
    constructor(public http: HttpClient) {}
    url = 'https://localhost:44330/api/Book';
    public getBooks(): Observable<DBBook[]> {
        console.log('api call');
        //user.Role = 'user';
        return this.http.get<DBBook[]>(this.url);
    }
    // public getAllBooks()  {
    //     return AllBooks;
    // }
}
