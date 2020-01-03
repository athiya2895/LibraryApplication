import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';

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
  registerForm: FormGroup;
  submitted = false;
  constructor(private router: Router,private auth: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        birthDate: [null, Validators.required],
        phoneNumber: ['', Validators.required, Validators.minLength(10), Validators.maxLength(12)],
        address: ['', Validators.required],
        gender: ['male',Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
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

  


    
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value.firstName, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
   // custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}