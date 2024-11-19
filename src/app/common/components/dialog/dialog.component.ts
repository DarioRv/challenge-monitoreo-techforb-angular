import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'ng-dialog',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dialog.component.html',
  styles: ``,
})
export class DialogComponent {
  open = input<boolean>(false);
}
