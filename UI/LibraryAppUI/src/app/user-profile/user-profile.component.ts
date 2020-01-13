import { Component, OnInit } from '@angular/core';
//import { UserDataService } from '../services/Users/UserData.service';
import { User } from '../CustomClasses/User';
import { Transaction } from '../Services/Transaction.service';
import { DBBook } from '../CustomClasses/DBBook';
//import { DBBook } from '../CustomClasses/DbBook';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../CustomClasses/Customer';
import { BookTransaction } from '../CustomClasses/BookTransaction';

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
  bookTransaction: BookTransaction;
  constructor(//private userService: UserDataService, 
    private transactionService: Transaction, private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {
    if (this.url !== null) {
      this.uploadedPicture = true;
    }
    this.dbuser = JSON.parse(localStorage.getItem('login'));
    this.issuedBooks = JSON.parse(localStorage.getItem('transactions'));
    // for (const book of this.dbuser.issuedBooks) {
    //   this.bookService.getBook(book.isbn).then(res => {
    //     this.issuedBooks.push(res);
    //   });
    // }
  }
  ReturnBook(index: number) {
    

    const ISBN = this.issuedBooks[index].ISBN;
    const LibrarianId = "1";
    var CustomerId = '11';
    if(this.dbuser == null)
      console.log("Login first");
    else 
      CustomerId = this.dbuser.CustomerID.toString();
    console.log('Return book clicked');
    this.bookTransaction = new BookTransaction(ISBN, LibrarianId, CustomerId);
    console.log(this.bookTransaction);
    this.transactionService.returnBook(this.bookTransaction).subscribe(res=>{
      this.issuedBooks = this.issuedBooks.filter(data=>data.ISBN!==ISBN);
      localStorage.setItem('transactions',JSON.stringify(this.issuedBooks));
    });
    // this.dbuser.user.issuedBooks = this.dbuser.user.issuedBooks.filter(book => book.isbn !== this.dbbook.id);
    // localStorage.setItem('user', JSON.stringify(this.dbuser));
    // this.dbbook.book.noOfCopies = this.dbbook.book.noOfCopies + 1;
    // this.bookService.updateBook(this.dbbook.id, this.dbbook.book).subscribe();
    // this.userService.updateUser(this.dbuser.id, this.dbuser.user).subscribe();
  }
  RenewBook(index: number) {
    const ISBN = this.issuedBooks[index].ISBN;
    const LibrarianId = "1";
    var CustomerId = '11';
    if(this.dbuser == null)
      console.log("Login first");
    else 
      CustomerId = this.dbuser.CustomerID.toString();
    console.log('Renew book clicked');
    this.bookTransaction = new BookTransaction(ISBN, LibrarianId, CustomerId);
    console.log(this.bookTransaction);
    this.transactionService.renewBook(this.bookTransaction).subscribe();
    // const renewIndex = this.dbuser.user.issuedBooks.findIndex(book => book.isbn === this.dbbook.id);
    // const due = new Date(this.dbuser.user.issuedBooks[renewIndex].dueOn);
    // this.dbuser.user.issuedBooks[renewIndex].dueOn = new Date(due.getFullYear(), due.getMonth(), due.getDate() + 5);
    // localStorage.setItem('user', JSON.stringify(this.dbuser));
//this.userService.updateUser(this.dbuser.id, this.dbuser.user).subscribe(() => this.renewed = true);
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
