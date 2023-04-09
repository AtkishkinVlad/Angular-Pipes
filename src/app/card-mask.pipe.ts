import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask'
})
export class CardMaskPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/^[\d-\s]+(?=\d{4})/, "************");
  }

}
