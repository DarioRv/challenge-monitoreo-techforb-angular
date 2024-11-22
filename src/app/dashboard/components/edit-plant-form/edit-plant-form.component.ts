import { Component, input } from '@angular/core';

@Component({
  selector: 'edit-plant-form',
  standalone: true,
  imports: [],
  templateUrl: './edit-plant-form.component.html',
  styles: ``,
})
export class EditPlantFormComponent {
  id = input.required<string | null>();
}
