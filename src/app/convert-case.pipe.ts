import { Pipe, PipeTransform } from '@angular/core';

const cases = ['upper', 'lower', 'title'];

type CaseType = typeof cases[number];

@Pipe({
  name: 'convertCase'
})
export class ConvertCasePipe implements PipeTransform {

  transform(value: string, type: CaseType): string {
    if (cases.includes(type)) {
      switch (type) {
        case 'upper':
          return value.split(' ').map(w => w.toUpperCase()).join(' ');
        case 'lower':
          return value.split(' ').map(w => w.toLowerCase()).join(' ');
        case 'title':
          return value.split(' ').map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');
      }
    }

    return value;
  }

}
