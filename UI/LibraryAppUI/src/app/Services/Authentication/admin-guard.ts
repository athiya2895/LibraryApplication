import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
// import { AdalService } from 'adal-angular4/adal.service';
import { User } from '../../CustomClasses/User';
//import { DBUser } from '../../CustomClasses/DbUser';
//import { UserDataService } from '../Users/UserData.service';
import { AuthService } from '../AuthService.service';
// import { LoggedInUserService } from './loggedInUser';

@Injectable()
export class AdminGaurd implements CanActivate {
    userName: string;
    user: User = new User('','','');
    //LoggedInUser: DBUser = new DBUser('', '', '', '');
    role = '';
    constructor(
            private authService: AuthService,
      //      private userService: UserDataService
        ) {
    }
    async canActivate() {
        if ( this.authService.isAuthenticated()) {
            this.user = JSON.parse(localStorage.getItem('login'));
            this.role = this.user.Role;
            if (this.role === 'Admin') {
                return true;
            } else {
                return false;
            }
        }
        
    }
}
