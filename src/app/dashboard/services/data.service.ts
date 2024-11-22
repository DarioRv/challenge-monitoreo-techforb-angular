import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IndicatorData } from '../interfaces/indicator-data.interface';

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

  getIndicatorData(type: string): Observable<IndicatorData> {
    const url = `${this.baseUrl}/${type}`;
    return this.http.get<IndicatorData>(url);
  }
}
