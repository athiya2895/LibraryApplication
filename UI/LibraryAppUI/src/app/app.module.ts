import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllBooksViewComponent } from './all-books-view/all-books-view.component';
import { AppRoutingModule } from './app_routing.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './app_material_imports.component';
import { BookDescComponent, RateBookDialogBoxComponent } from './book-desc/book-desc.component';

import { BookService } from './Services/books.service';
import { ISBNBookService } from './Services/ISBNBookService.service'

import { FilterPipe} from './all-books-view/Filter/filter.pipe';
import { GenrePipe } from './all-books-view/Filter/genre.pipe';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './Authentication/signin/signin.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { AuthService } from './Services/AuthService.service';

//import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksViewComponent,
    HeaderComponent,
    BookDescComponent,
    FilterPipe,
    GenrePipe,
    AddNewBookComponent,
    RateBookDialogBoxComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    StarRatingModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    BookService,
    ISBNBookService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ RateBookDialogBoxComponent ]
})
export class AppModule { }
