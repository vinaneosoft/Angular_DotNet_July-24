import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any[], ...args: string[]): any[] {
    const property=args[1];
    console.log(property);
    return array.sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return this.compareNumbers(a, b, args[0]);
      } else if (typeof a === 'string' && typeof b === 'string') {
        return this.compareStrings(a, b, args[0]);
      } else if (typeof a === 'object' && typeof b === 'object') {

          if(typeof a[property] === 'number' && typeof b[property] === 'number')
            return this.compareNumbers(a[property], b[property], args[0]);

          else if(typeof a[property] === 'string' && typeof b[property] === 'string')
            return this.compareStrings(a[property], b[property], args[0]);

          else if( a[property] instanceof Date && b[property] instanceof Date)
            return this.compareNumbers(a[property], b[property], args[0]);

          else
            return 0;

      } else {
        return 0; // if elements are of different types, keep their order unchanged
      }
    });
  }

  private compareNumbers(a: any, b: any, order: string): number {
    return order === 'asc' ? a - b : b - a;
  }

  private compareStrings(a: string, b: string, order: string): number {
    return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
  }
  

}
