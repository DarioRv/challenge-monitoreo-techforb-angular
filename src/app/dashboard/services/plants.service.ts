import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CreatePlant } from '../interfaces/create-plant.interface';
import { map, Observable, tap } from 'rxjs';
import { BackendPlantResponse } from '../interfaces/backend-plant-response.interface';
import { Plant } from '../interfaces/plant.interface';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/plants`;
  private _plants = signal<Plant[]>([]);

  plants = computed(() => this._plants());

  createPlant(createPlant: CreatePlant): Observable<Plant> {
    return this.http
      .post<BackendPlantResponse<Plant>>(this.baseUrl, createPlant)
      .pipe(
        map((response) => response.data),
        tap((plant) => this._plants.update((plants) => [...plants, plant]))
      );
  }

  getPlants(): Observable<Plant[]> {
    return this.http.get<BackendPlantResponse<Plant[]>>(this.baseUrl).pipe(
      map((response) => response.data),
      tap((plants) => this._plants.set(plants))
    );
  }

  updatePlant(id: string, updatePlant: CreatePlant): Observable<Plant> {
    return this.http
      .put<BackendPlantResponse<Plant>>(`${this.baseUrl}/${id}`, updatePlant)
      .pipe(
        map((response) => response.data),
        tap((plant) =>
          this._plants.update((plants) =>
            plants.map((p) => (p.id === plant.id ? plant : p))
          )
        )
      );
  }

  deletePlant(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(
        tap(() =>
          this._plants.update((plants) =>
            plants.filter((plant) => plant.id !== id)
          )
        )
      );
  }
}
