import {
  Component,
  inject,
  input,
  OnChanges,
  OnInit,
  output,
} from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UpdatePlant } from '../../interfaces/update-plant.interface';

@Component({
  selector: 'edit-plant-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-plant-form.component.html',
  styleUrl: '../create-plant-form/create-plant-form.component.css',
})
export class EditPlantFormComponent implements OnChanges {
  private readonly fb = inject(FormBuilder);
  private readonly plantsService = inject(PlantsService);
  id = input.required<string | null>();
  onCloseForm = output<void>();

  editPlantForm = this.fb.group({
    name: [
      {
        value: '',
        disabled: true,
      },
    ],
    country: [
      {
        value: '',
        disabled: true,
      },
    ],
    readings: [0, [Validators.required, Validators.min(0)]],
    mediumAlerts: [0, [Validators.required, Validators.min(0)]],
    redAlerts: [0, [Validators.required, Validators.min(0)]],
    sensorsDisabled: [0, [Validators.required, Validators.min(0)]],
  });

  get readings(): FormControl {
    return this.editPlantForm.get('readings') as FormControl;
  }

  get mediumAlerts(): FormControl {
    return this.editPlantForm.get('mediumAlerts') as FormControl;
  }

  get redAlerts(): FormControl {
    return this.editPlantForm.get('redAlerts') as FormControl;
  }

  get sensorsDisabled(): FormControl {
    return this.editPlantForm.get('sensorsDisabled') as FormControl;
  }

  get plant(): UpdatePlant {
    return {
      readings: this.readings.value,
      mediumAlerts: this.mediumAlerts.value,
      redAlerts: this.redAlerts.value,
      sensorsDisabled: this.sensorsDisabled.value,
    };
  }

  ngOnChanges(): void {
    if (this.id() == null) return;

    this.plantsService.getPlant(this.id()!).subscribe({
      next: (plant) => {
        this.editPlantForm.patchValue(plant);
      },
      error: (error) => {
        console.error('No se pudo obtener la planta');
        this.closeForm();
      },
    });
  }

  onSubmit(): void {
    if (this.editPlantForm.invalid) {
      this.editPlantForm.markAllAsTouched();
      return;
    }

    this.updatePlant();
  }

  closeForm(): void {
    this.onCloseForm.emit();
  }

  updatePlant(): void {
    this.plantsService.updatePlant(this.id()!, this.plant).subscribe({
      next: () => {
        this.closeForm();
      },
      error: (error) => {
        console.error('No se pudo actualizar la planta');
        this.closeForm();
      },
    });
  }
}
