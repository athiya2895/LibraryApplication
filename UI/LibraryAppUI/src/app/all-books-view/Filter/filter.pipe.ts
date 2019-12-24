import { Pipe, PipeTransform } from '@angular/core';
import { DBBook } from '../../CustomClasses/Book';
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
      if (it.Title.toLowerCase().includes(searchText)) {
        return true;
      } else {
        for (const author of it.Author) {
          if (author.toLowerCase().includes(searchText)) {
            return true;
          }
        }
      }
      return false;
    });
   }
}
