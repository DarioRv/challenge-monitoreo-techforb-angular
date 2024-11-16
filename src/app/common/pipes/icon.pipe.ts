import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
  standalone: true,
})
export class IconPipe implements PipeTransform {
  transform(iconName: string): string {
    return `/icons/${iconName}.svg`;
  }
}
