import { Component, inject, OnInit, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { PlantsService } from '../../services/plants.service';
import { CreatePlant } from '../../interfaces/create-plant.interface';

@Component({
  selector: 'create-plant-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-plant-form.component.html',
  styleUrls: ['./create-plant-form.component.scss', '/src/flags.css'],
})
export class CreatePlantFormComponent implements OnInit {
  private readonly countriesService = inject(CountriesService);
  private readonly plantsService = inject(PlantsService);
  private readonly fb = inject(FormBuilder);
  error: string = '';

  countries: Country[] = [];

  plantForm = this.fb.group({
    name: ['', [Validators.required]],
    country: ['none', [Validators.pattern(/^(?!none$).*/)]],
    countryCode: [''],
  });

  onCloseForm = output<void>();

  get name(): FormControl {
    return this.plantForm.get('name') as FormControl;
  }

  get country(): FormControl {
    return this.plantForm.get('country') as FormControl;
  }

  get plant(): CreatePlant {
    return {
      name: this.plantForm.value.name,
      country: this.plantForm.value.country,
      countryCode: this.plantForm.value.countryCode,
    } as CreatePlant;
  }

  ngOnInit(): void {
    this.getCoutries();
  }

  cancel() {
    this.onCloseForm.emit();
  }

  getCoutries() {
    this.countriesService.getAll().subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (error) => {
        console.error('Error al obtener países', error);
      },
    });
  }

  setCountryCode() {
    const selectedCountry = this.countries.find(
      (country) => country.name.common === this.plantForm.value.country
    );

    if (selectedCountry) {
      this.plantForm.patchValue({
        countryCode: selectedCountry.cca2,
      });
    }
  }

  onSubmit() {
    this.setCountryCode();
    if (this.plantForm.invalid) {
      this.plantForm.markAllAsTouched();
      return;
    }

    this.createPlant();
  }

  createPlant(): void {
    this.plantsService.createPlant(this.plant).subscribe({
      next: () => {
        this.resetForm();
        this.onCloseForm.emit();
      },
      error: (message) => {
        this.error = message;
      },
    });
  }

  resetForm(): void {
    this.plantForm.patchValue({
      name: '',
      country: 'none',
      countryCode: '',
    });
    this.plantForm.markAsPristine();
  }
}
