import { Component } from '@angular/core';
import { PlantsTableComponent } from '../plants-table/plants-table.component';
import { DialogComponent } from '../../../common/components/dialog/dialog.component';
import { CreatePlantFormComponent } from '../create-plant-form/create-plant-form.component';

@Component({
  selector: 'plants',
  standalone: true,
  imports: [PlantsTableComponent, DialogComponent, CreatePlantFormComponent],
  templateUrl: './plants.component.html',
  styles: ``,
})
export class PlantsComponent {
  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
