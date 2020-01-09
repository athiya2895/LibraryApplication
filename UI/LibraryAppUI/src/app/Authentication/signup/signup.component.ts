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
        phoneNumber: ['', Validators.required],
        address: ['', Validators.required],
        gender: ['male',Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}
    
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        const firstName = this.registerForm.value.firstName;
        const lastName = this.registerForm.value.lastName;
        const sex = this.registerForm.value.gender;
        const address = this.registerForm.value.address;
        const dob = this.registerForm.value.dateOfBirth;
        const phoneNumber = this.registerForm.value.phoneNumber;
        var name = firstName + " " + lastName;
        //this.user = new User('user', email, password);
        this.customer = new Customer(email,name, sex,address,dob,phoneNumber,password,'User');
        this.auth.postUser(this.customer).subscribe();
        // this.loggedInUser.insertUser(this.user);
        console.log(this.customer);
        this.router.navigate(['']);
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
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