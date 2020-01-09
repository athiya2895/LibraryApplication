import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../Services/AuthService.service';
import { Customer } from '../../CustomClasses/Customer';
import { Router } from '@angular/router';

//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  login: Login;
  customer: Customer;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.login = new Login(email,password);
    this.auth.Login(this.login).subscribe((res: Customer) =>{ this.customer = res;
        console.log(res.CustomerID);
        localStorage.setItem('login', JSON.stringify(this.customer));
        this.router.navigate(['allBooks']);
      }
    );
    
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
