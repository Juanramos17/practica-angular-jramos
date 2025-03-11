import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true, // Es una pipe standalone
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const currentYear = new Date().getFullYear();
    const year = parseInt(value, 10);

    if (!year || isNaN(year)) {
      return 'Desconocido';  
    }

    const age = currentYear - year;
    return `${age} años atrás`;  
  }
}
