import { AllBooksViewComponent } from './all-books-view/all-books-view.component'
import { BookDescComponent } from './book-desc/book-desc.component'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { SigninComponent } from './Authentication/signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './Services/Authentication/auth-guard.service';
import { AdminGaurd } from './Services/Authentication/admin-guard';
import { AdminUserViewComponent } from './admin-user-view/admin-user-view.component';

const routes = [
    { path: '', component:  HomePageComponent },
    { path: 'home', component: HomePageComponent},//, canActivate: [AuthGuard]},
    { path: 'allBooks', component: AllBooksViewComponent, canActivate: [AuthGuard]},
    { path: 'bookdesc/:id', component: BookDescComponent,canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'addBook', component: AddNewBookComponent, canActivate: [AdminGaurd]},
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
    { path: 'allUsers', component: AdminUserViewComponent, canActivate: [AdminGaurd]}
  ];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
