import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatText',
})
export class RepeatTextPipe implements PipeTransform {
  transform(value: string, times: number = 1): string {
    return value.repeat(times);
  }
}
