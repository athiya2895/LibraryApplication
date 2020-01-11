import { Component, OnInit } from '@angular/core';
//import { UserDataService } from '../services/Users/UserData.service';
import { User } from '../CustomClasses/User';
import { Transaction } from '../Services/Transaction.service';
import { DBBook } from '../CustomClasses/DBBook';
//import { DBBook } from '../CustomClasses/DbBook';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../CustomClasses/Customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  uploadedPicture = false;
  url = localStorage.getItem('profilePicture');
  isAdmin = false;
  editing = false;
  profileForm: FormGroup;
  userData: User[] = new Array<User>();
  dbuser: Customer = new Customer('','','','',null,'','','');
  issuedBooks: DBBook[] = new Array<DBBook>();
  dbbook: DBBook;
  constructor(//private userService: UserDataService, 
    private bookService: Transaction, private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {
    if (this.url !== null) {
      this.uploadedPicture = true;
    }
    this.dbuser = JSON.parse(localStorage.getItem('login'));
    // for (const book of this.dbuser.issuedBooks) {
    //   this.bookService.getBook(book.isbn).then(res => {
    //     this.issuedBooks.push(res);
    //   });
    // }
  }
  async ReturnBook(index: number) {
    // const isbn = this.dbuser.user.issuedBooks[index].isbn;
    //   await this.bookService.getBook(isbn).then(res => {
    //    this.dbbook.id = isbn;
    //    this.dbbook.book = res;
    //   });
    //   this.issuedBooks = this.issuedBooks.filter(book => book.id !== this.dbbook.book.id);
    //   this.dbuser.user.issuedBooks = this.dbuser.user.issuedBooks.filter(book => book.isbn !== book.isbn);
    //   localStorage.setItem('user', JSON.stringify(this.dbuser));
    //   this.dbbook.book.noOfCopies = this.dbbook.book.noOfCopies + 1;
    //   this.bookService.updateBook(isbn, this.dbbook.book).subscribe();
    //   this.userService.updateUser(this.dbuser.id, this.dbuser.user).subscribe();
    }
    RenewBook(index: number) {
      // const due = new Date(this.dbuser.user.issuedBooks[index].dueOn);
      // this.dbuser.user.issuedBooks[index].dueOn = new Date(due.getFullYear(), due.getMonth(), due.getDate() + 5);
      // localStorage.setItem('user', JSON.stringify(this.dbuser));
      // this.userService.updateUser(this.dbuser.id, this.dbuser.user).subscribe();
    }
    EditProfile() {
      this.editing = true;
    }
    createForm() {
      this.profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        avatar: null
      });
    }
    SaveProfile() {
      this.editing = false;
      this.uploadedPicture = true;
      localStorage.setItem('profilePicture', this.url);
      // this.dbuser.user.given_name = this.profileForm.get('firstName').value;
      // this.dbuser.user.family_name = this.profileForm.get('lastName').value;
      // localStorage.setItem('user', JSON.stringify(this.dbuser));
      // this.userService.updateUser(this.dbuser.id, this.dbuser.user).subscribe();
      // console.log(this.profileForm.get('firstName').value);
    }
    onFileChange(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          //this.url = reader.result;
          this.profileForm.get('avatar').setValue({
            filename: file.name,
            filetype: file.type,
            url: reader.result
          });
        };
      }
      console.log(reader.result);
      this.url = reader.result[0];
    }
    CancelProfile() {
      this.editing = false;
    }
}
