import { AllBooksViewComponent } from './all-books-view/all-books-view.component'
import { BookDescComponent } from './book-desc/book-desc.component'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';

const routes = [
    { path: '', component: AllBooksViewComponent },
    { path: 'home', component: AllBooksViewComponent},
    { path: 'bookdesc/:id', component: BookDescComponent},
    { path: 'addBook', component: AddNewBookComponent},
  ];


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
