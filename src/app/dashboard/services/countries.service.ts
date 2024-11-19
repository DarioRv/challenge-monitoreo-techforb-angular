import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Country[]> {
    const url = 'https://restcountries.com/v3.1/all?fields=name,cca2';
    return this.http.get<Country[]>(url);
  }
}
