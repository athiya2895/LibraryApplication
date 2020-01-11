import { Component, OnInit } from '@angular/core';
import { DBBook } from '../CustomClasses/DBBook';
import { User } from '../CustomClasses/User';
import { UserDataService } from '../Services/UserDataService.service';
import { Transaction } from '../Services/Transaction.service';
import { Customer } from '../CustomClasses/Customer';
import { BookTransaction } from '../CustomClasses/BookTransaction';

@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.css']
})
export class AdminUserViewComponent implements OnInit {

  userData: Customer[] = new Array<Customer>();
  issuedBooks: BookTransaction[][] = [];
  userNames: string[] = new Array<string>();
  constructor(private userService: UserDataService, private bookService: Transaction) { }

  async ngOnInit() {
      this.userService.getUsers().subscribe(res => {
      console.log(res);
      this.userData = res;
      console.log(this.userData);
      for (let userIndex = 0; userIndex < this.userData.length; userIndex++) {
        console.log(this.userData[userIndex].Name);
        const user = new User(this.userData[userIndex].Role,this.userData[userIndex].Email,this.userData[userIndex].Password);
        this.bookService.transactions(user).subscribe(res => {
          console.log(res);
          let books: DBBook[] = JSON.parse(localStorage.getItem('books'));
          this.issuedBooks[userIndex] = [];
          for (let i = 0; i < res.length; i++) {
            // books.forEach(element => {
            //   if(element.ISBN === res[i].ISBN){
            //     console.log(element.ISBN+"ok");
            //     res[i].Title = element.Title;
            //      res[i].Title = element.Title;
                this.issuedBooks[userIndex].push(res[i]);
                console.log(this.issuedBooks[userIndex]);
            //  }
            };
            //);
            
          })
        //});
      }
    });
          // for (const id in res) {
          //   if (res[id].role !== 'Admin') {
          //     const tempuser = new DBUser('', '', '', '');
          //     tempuser.id = id;
          //     tempuser.user = res[id];
          //     this.userData.push(tempuser);
          //     if (!this.userNames.includes(res[id].userName)) {
          //       this.userNames.push(tempuser.user.userName);
          //     } else {
          //       this.userData.pop();
          //     }
          //   }
          // }
        
      // for (let userIndex = 0; userIndex < this.userData.length; userIndex++) {
      //   this.issuedBooks[userIndex] = new Array<DBBook>();
      //   if (this.userData[userIndex].issuedBooks !== undefined) {
      //     for (let bookIndex = 0; bookIndex < this.userData[userIndex].user.issuedBooks.length; bookIndex++) {
      //         this.bookService.getBook(this.userData[userIndex].user.issuedBooks[bookIndex].isbn).then(res => {
      //         this.issuedBooks[userIndex].push(res);
      //       });
      //     }
      //   }
      // }
  }

}
