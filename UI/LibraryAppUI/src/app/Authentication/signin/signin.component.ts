import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/AuthService.service';
import { Customer } from 'src/app/CustomClasses/Customer';

//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  login: Login;
  customer: Customer;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.login = new Login(email,password);
    this.auth.Login(this.login).subscribe(res =>{ this.customer = res as Customer;
        console.log(res.CustomerID);
      }
    );
    localStorage.setItem('userName', email);
  }
}
export class Login{
  userName: string;
  password: string;
  constructor(_name, _pwd){
    this.userName = _name;
    this.password = _pwd;
  }
}
