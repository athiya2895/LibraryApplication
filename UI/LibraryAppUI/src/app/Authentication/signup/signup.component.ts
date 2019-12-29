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
  user: User = new User('', '','');
  customer: Customer = new Customer('','','','',new Date,'','','');
  gender: string = '';
  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const sex = form.value.sex;
    const address = form.value.address;
    const dob = form.value.dateOfBirth;
    const phoneNumber = form.value.phoneNumber;
    var name = firstName + lastName;
    //this.user = new User('user', email, password);
    this.customer = new Customer(email,name, this.gender,address,dob,phoneNumber,password,'User');
    this.auth.postUser(this.customer).subscribe();
    // this.loggedInUser.insertUser(this.user);
    console.log(this.customer);
    this.router.navigate(['']);
  }
}
