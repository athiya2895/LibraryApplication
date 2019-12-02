import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { AuthService } from '../auth.service';
// import { LoggedInUserService } from '../../services/Authentication/loggedInUser';
import { User } from '../../CustomClasses/User';
import { Router } from '@angular/router';
import { Customer } from 'src/app/CustomClasses/Customer';
import { AuthService } from 'src/app/Services/AuthService.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User('', '');
  customer: Customer = new Customer('','','','',new Date,'');
  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    var name = firstName + lastName;
    this.user = new User('user', email);
    this.customer = new Customer(email,name,'Male','blore',new Date,'1234');
    this.auth.postUser(this.user).subscribe();
    // this.loggedInUser.insertUser(this.user);
    console.log(this.user);
    this.router.navigate(['']);
  }
}
