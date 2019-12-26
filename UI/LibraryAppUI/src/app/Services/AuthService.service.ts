import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { User } from '../CustomClasses/User';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../CustomClasses/Customer';

@Injectable()
export class AuthService {
    constructor(public http: HttpClient) {}
    url = 'https://localhost:44330/api/Customer';
    public postUser(customer: Customer) {
        console.log('api call customer insert');
        //user.Role = 'user';
        return this.http.post(this.url,customer).map((res: any) => {
            console.log('resut');
            console.log(res);
            // const data = res;
            // return data;
        });
    }
}
