import { AllBooksViewComponent } from './all-books-view/all-books-view.component'
import { BookDescComponent } from './book-desc/book-desc.component'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { SigninComponent } from './Authentication/signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './Services/Authentication/auth-guard.service';
import { AdminGaurd } from './Services/Authentication/admin-guard';

const routes = [
    { path: '', component: AllBooksViewComponent, canActivate: [AuthGuard] },
    { path: 'home', component: AllBooksViewComponent, canActivate: [AuthGuard]},
    { path: 'bookdesc/:id', component: BookDescComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'addBook', component: AddNewBookComponent, canActivate: [AdminGaurd]},
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
