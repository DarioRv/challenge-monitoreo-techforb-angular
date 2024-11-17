import { Component } from '@angular/core';
import { PlantsTableComponent } from '../plants-table/plants-table.component';

@Component({
  selector: 'plants',
  standalone: true,
  imports: [PlantsTableComponent],
  templateUrl: './plants.component.html',
  styles: ``,
})
export class PlantsComponent {}
