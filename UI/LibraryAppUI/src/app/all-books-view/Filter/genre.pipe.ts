import { Pipe, PipeTransform } from '@angular/core';
import { DBBook } from '../../CustomClasses/DbBook';
@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  transform(items: DBBook[], searchGenre: string): any[] {
    if (!items) {
        return [];
    }
    if (!searchGenre) {
        return items;
    }
    searchGenre = searchGenre.toLowerCase();
    return items.filter( it => {
      if (it.book.categories !== undefined) {
        for (const category of it.book.categories) {
            if (category.toLowerCase().includes(searchGenre)) {
              return true;
            }
          }
        }
      return false;
    });
   }
}
