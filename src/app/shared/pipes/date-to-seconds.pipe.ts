import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToSeconds'
})
export class DateToSecondsPipe implements PipeTransform {

  transform(answerDate: Date | null, startDate: Date): string {
    if (!answerDate) {
      return '';
    }
    const answerDateInSeconds = Math.floor(answerDate.getTime() / 1000);
    const startDateInSeconds = Math.floor(startDate.getTime() / 1000);
    const seconds = answerDateInSeconds - startDateInSeconds;
    return `${seconds} secondes`;
  }

}
