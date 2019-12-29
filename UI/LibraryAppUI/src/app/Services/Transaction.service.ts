import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookTransaction } from '../CustomClasses/BookTransaction';


@Injectable()
export class Transaction {
    constructor(public http: HttpClient) {
    }
    url = 'https://localhost:44330/api/BookTransaction';
    public issueBook(bookTransaction: BookTransaction) {
        console.log('api call book transaction');
        return this.http.post(this.url,bookTransaction).map((res: any) => {
            console.log('result BookTransaction');
            console.log(res);
        });
    }
}