import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../CustomClasses/Customer';
import { AuthService } from '../Services/AuthService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;
  customer: Customer;
 // user: DBUser = JSON.parse(localStorage.getItem('user'));
  constructor(private router: Router,private authService: AuthService) { }
  isAdmin = false;
  async ngOnInit() {
    // this.adalService.getUser().subscribe(res => this.userName = res.profile.given_name);
    this.customer = JSON.parse(localStorage.getItem('login'));
    if(this.customer != undefined)
      this.userName = this.customer.Name;
    else
      this.userName = "User";
    // if (await this.guard.canActivate()) {
    //   this.isAdmin = true;
    // }
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
  // logout() {
  //   localStorage.setItem('user', null);
  //   this.adalService.logOut();
  // }
  AddBook() {
    this.router.navigate(['/addBook']);
  }
  viewProfile() {
    this.router.navigate(['/profile']);
  }
  viewAllDetails() {
    //this.router.navigate(['/allUserDetails']);
  }

}
