import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import AllBooks from 'D:/LibraryApplication/UI/LibraryAppUI/src/assets/books.json'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BookService {
    constructor(public http: HttpClient) {}
    url = 'https://localhost:44330/api/Book';
    public getBooks(): Promise<Object> {
        console.log('api call');
        //user.Role = 'user';
        return this.http.get(this.url).toPromise();
    }
    public getAllBooks()  {

        return AllBooks;
    }
}
