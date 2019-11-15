import { AllBooksViewComponent } from './all-books-view/all-books-view.component'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    { path: '', component: AllBooksViewComponent }
  ];


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
