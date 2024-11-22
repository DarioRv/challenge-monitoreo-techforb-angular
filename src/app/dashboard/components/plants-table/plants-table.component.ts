import { Component, computed, inject, OnInit } from '@angular/core';
import { IconPipe } from '../../../common/pipes/icon.pipe';
import { PlantsService } from '../../services/plants.service';

@Component({
  selector: 'plants-table',
  standalone: true,
  imports: [IconPipe],
  templateUrl: './plants-table.component.html',
  styleUrls: ['/src/flags.css'],
})
export class PlantsTableComponent implements OnInit {
  private readonly plansService = inject(PlantsService);

  plants = computed(() => this.plansService.plants());
  modalOpen = false;
  plantIdToEdit: string | null = null;

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants(): void {
    this.plansService.getPlants().subscribe();
  }

  onEdit(id: string): void {
    this.modalOpen = true;
    this.plantIdToEdit = id;
  }

  onDelete(id: string) {
    this.plansService.deletePlant(id).subscribe();
  }
}
