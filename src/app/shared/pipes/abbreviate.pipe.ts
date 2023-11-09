import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate'
})
export class AbbreviatePipe implements PipeTransform {

  transform(value: string, limit = 10): string {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }
}
