import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../CustomClasses/User';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../CustomClasses/Customer';

@Injectable()
export class UserDataService {
    url = 'https://localhost:44330/api/Customer';
    constructor(public http: HttpClient) {}

    public addData(data: any): Promise<any>  {
        return this.http.post(this.url + '.json', data).toPromise();
    }
    public getUsers(): Observable<Customer[]>  {
        return this.http.get<Customer[]>(this.url);
    }
    public updateUser(id: string, data): Observable<any> {
        return this.http.put(this.url + '/' + id + '.json', data);
    }
}
