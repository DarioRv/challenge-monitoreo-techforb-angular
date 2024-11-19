import { Component, inject, OnInit, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'create-plant-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-plant-form.component.html',
  styleUrls: ['./create-plant-form.component.scss', '/src/flags.css'],
})
export class CreatePlantFormComponent implements OnInit {
  private readonly countriesService = inject(CountriesService);
  private readonly fb = inject(FormBuilder);

  countries: Country[] = [];

  plantForm = this.fb.group({
    nombre: ['', [Validators.required]],
    pais: ['none', [Validators.pattern(/^(?!none$).*/)]],
    codigo: [''],
  });

  onCloseForm = output<void>();

  get nombre(): FormControl {
    return this.plantForm.get('nombre') as FormControl;
  }

  get pais(): FormControl {
    return this.plantForm.get('pais') as FormControl;
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
      (country) => country.name.common === this.plantForm.value.pais
    );

    if (selectedCountry) {
      this.plantForm.patchValue({
        codigo: selectedCountry.cca2,
      });
    }
  }

  onSubmit() {
    this.setCountryCode();
    if (this.plantForm.invalid) {
      this.plantForm.markAllAsTouched();
      return;
    }

    // TODO: Implementar lógica para guardar la planta
    console.log('Formulario válido', this.plantForm.value);
  }
}
