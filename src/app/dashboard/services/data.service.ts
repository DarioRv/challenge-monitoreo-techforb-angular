import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/data`;

  getSummary(): Observable<number[]> {
    const url = `${this.baseUrl}/summary`;
    return this.http.get<number[]>(url);
  }

  getTemperature(): Observable<number[]> {
    const url = `${this.baseUrl}/temperature`;
    return this.http.get<number[]>(url);
  }

  getPressure(): Observable<number[]> {
    const url = `${this.baseUrl}/pressure`;
    return this.http.get<number[]>(url);
  }

  getWind(): Observable<number[]> {
    const url = `${this.baseUrl}/wind`;
    return this.http.get<number[]>(url);
  }

  getLevels(): Observable<number[]> {
    const url = `${this.baseUrl}/levels`;
    return this.http.get<number[]>(url);
  }

  getEnergy(): Observable<number[]> {
    const url = `${this.baseUrl}/energy`;
    return this.http.get<number[]>(url);
  }

  getStress(): Observable<number[]> {
    const url = `${this.baseUrl}/stress`;
    return this.http.get<number[]>(url);
  }

  getCarbonMonoxide(): Observable<number[]> {
    const url = `${this.baseUrl}/carbon-monoxide`;
    return this.http.get<number[]>(url);
  }

  getOtherGases(): Observable<number[]> {
    const url = `${this.baseUrl}/other-gases`;
    return this.http.get<number[]>(url);
  }
}
