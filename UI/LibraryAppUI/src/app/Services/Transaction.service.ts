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
            console.log('result issue BookTransaction');
            console.log(res);
        });
    }

    public returnBook(bookTransaction: BookTransaction) {
        console.log('api call book transaction for return');
        return this.http.put(this.url + '/ReturnBook',bookTransaction).map((res: any) => {
            console.log('result return BookTransaction');
            console.log(res);
        });
    }

    public renewBook(bookTransaction: BookTransaction) {
        console.log('api call book transaction for renew');
        return this.http.put(this.url + '/RenewBook',bookTransaction).map((res: any) => {
            console.log('result renew BookTransaction');
            console.log(res);
        });
    }
}