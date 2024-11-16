import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true,
})
export class ImagePipe implements PipeTransform {
  transform(value: string, extension?: string): string {
    if (value.includes('.')) return `/images/${value}`;
    return `/images/${value}.${extension ? `${extension}` : 'png'}`;
  }
}
