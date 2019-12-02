import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { User } from '../CustomClasses/User';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(public http: HttpClient) {}
    url = 'https://localhost:44330/api/User';
    public postUser(user: User) {
        console.log('api call');
        user.UserRole = 'user';
        return this.http.post(this.url,user).map((res: any) => {
            console.log(res);
            // const data = res;
            // return data;
        });
    }
}
