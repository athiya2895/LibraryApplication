import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { User } from '../CustomClasses/User';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../CustomClasses/Customer';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    role: boolean;
    constructor(public http: HttpClient) {}
    url = 'https://localhost:44330/api/';
    public postUser(customer: Customer) {
        console.log('api call customer insert');
        //user.Role = 'user';
        return this.http.post(this.url+'Customer',customer).map((res: any) => {
            console.log('resut');
            console.log(res);
            // const data = res;
            // return data;
        });
    }
    public Login(login: any): Observable<Customer> {
        console.log('api call login');
        console.log(login);
        //user.Role = 'user';
        return this.http.post(this.url+'UserAuthentication',login).map((res: any) => {
            console.log('resut');
            console.log(res);
            const data = res;
            if(data === null){
                return null
            }
            else{
                this.role = true;
                localStorage.setItem('role', 'true');
                return data;
            }            
        });
    }
    isAuthenticated() {
        this.role = JSON.parse(localStorage.getItem('role'));
        return this.role;
    }
    logout() {
        localStorage.setItem('role','');
        localStorage.setItem('login','');
    }
}
