import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Book } from '../CustomClasses/Book';
import { constants } from '../../assets/index.constants';

@Injectable()
export class ISBNBookService {
    constructor(public http: HttpClient) {}
    url = constants.isbnUrl;
    public getBook(isbn: string): Observable<Book>  {
        return this.http.get(this.url + isbn).map((res: any) => {
            console.log(res);
           const data = res;
           return data;
        });
    }
}
