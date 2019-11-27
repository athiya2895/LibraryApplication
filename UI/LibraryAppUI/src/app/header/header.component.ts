import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;
 // user: DBUser = JSON.parse(localStorage.getItem('user'));
  constructor(private router: Router) { }
  isAdmin = false;
  async ngOnInit() {
    // this.adalService.getUser().subscribe(res => this.userName = res.profile.given_name);
    this.userName = localStorage.getItem('userName');
    this.userName = "User";
    // if (await this.guard.canActivate()) {
    //   this.isAdmin = true;
    // }
  }
  onLogout() {
    //this.authService.logout();
  }
  // logout() {
  //   localStorage.setItem('user', null);
  //   this.adalService.logOut();
  // }
  AddBook() {
    this.router.navigate(['/addBook']);
  }
  viewProfile() {
    //this.router.navigate(['/profile']);
  }
  viewAllDetails() {
    //this.router.navigate(['/allUserDetails']);
  }

}
