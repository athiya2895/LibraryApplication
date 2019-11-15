import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { AllBooksViewComponent } from './all-books-view/all-books-view.component';
import {  AppRoutingModule } from './app_routing.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './app_material_imports.component';
import { BookDescComponent } from './book-desc/book-desc.component';
import { BookService } from './services/books.service';
import { FilterPipe} from './all-books-view/Filter/filter.pipe';
import { GenrePipe } from './all-books-view/Filter/genre.pipe';

//import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksViewComponent,
    HeaderComponent,
    BookDescComponent,
    FilterPipe,
    GenrePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    StarRatingModule.forRoot(),
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
