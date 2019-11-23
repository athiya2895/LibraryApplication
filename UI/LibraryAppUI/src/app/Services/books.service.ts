import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import AllBooks from 'D:/Git/Projects/LibraryApplication/UI/LibraryAppUI/src/assets/books.json'

@Injectable()
export class BookService {
    constructor() {
        console.log(AllBooks);
    }
    
    public getAllBooks()  {

        return AllBooks;
    }
}
