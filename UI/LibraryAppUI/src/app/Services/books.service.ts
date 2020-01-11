import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
//import AllBooks from 'D:/LibraryApplication/UI/LibraryAppUI/src/assets/books.json'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { DBBook } from '../CustomClasses/DBBook';

@Injectable()
export class BookService {
 
  constructor(public http: HttpClient) {}
  addNewBook(book: DBBook) {
    return this.http.post(this.url, book)
  }
  url = 'https://localhost:44330/api/Book';
  public getBooks(): Observable<DBBook[]> {
      console.log('api call');
      //user.Role = 'user';
      return this.http.get<DBBook[]>(this.url);
  }
    
   
  public deleteBook(ISBN: string) {
      console.log("{\"ISBN\":\""+ISBN+"\"}");
      //user.Role = 'user';
      let headers = new HttpHeaders();
      headers=headers.set('Content-Type','application/json');
      return this.http.post('https://localhost:44330/api/Delete',"{\"ISBN\":\""+ISBN+"\"}",{headers:headers});
  }
  // public getAllBooks()  {
  //     return AllBooks;
  // }
}
