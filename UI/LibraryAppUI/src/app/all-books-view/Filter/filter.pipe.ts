import { Pipe, PipeTransform } from '@angular/core';
import { DBBook } from '../../CustomClasses/DbBook';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: DBBook[], searchText: string): any[] {
    if (!items) {
        return [];
    }
    if (!searchText) {
        return items;
    }
searchText = searchText.toLowerCase();
return items.filter( it => {
      if (it.book.title.toLowerCase().includes(searchText)) {
        return true;
      } else {
        for (const author of it.book.authors) {
          if (author.toLowerCase().includes(searchText)) {
            return true;
          }
        }
      }
      return false;
    });
   }
}
