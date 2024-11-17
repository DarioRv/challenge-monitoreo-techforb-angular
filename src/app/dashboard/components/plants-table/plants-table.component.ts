import { Component } from '@angular/core';
import { Plant } from '../../interfaces/plant.interface';
import { IconPipe } from '../../../common/pipes/icon.pipe';

@Component({
  selector: 'plants-table',
  standalone: true,
  imports: [IconPipe],
  templateUrl: './plants-table.component.html',
  styleUrls: ['/src/flags.css'],
})
export class PlantsTableComponent {
  plants: Plant[] = [
    {
      id: '1',
      pais: 'Argentina',
      codigoPais: 'ar',
      nombre: 'Quilmes',
      lecturas: 300,
      alertasMedias: 10,
      alertasRojas: 2,
    },
    {
      id: '2',
      pais: 'Argentina',
      codigoPais: 'ar',
      nombre: 'Zárate',
      lecturas: 100,
      alertasMedias: 15,
      alertasRojas: 2,
    },
    {
      id: '3',
      pais: 'Brasil',
      codigoPais: 'br',
      nombre: 'Sao Pablo',
      lecturas: 400,
      alertasMedias: 40,
      alertasRojas: 2,
    },
    {
      id: '4',
      pais: 'Paraguay',
      codigoPais: 'py',
      nombre: 'Asunción',
      lecturas: 321,
      alertasMedias: 9,
      alertasRojas: 2,
    },
    {
      id: '5',
      pais: 'Uruguay',
      codigoPais: 'uy',
      nombre: 'Montevideo',
      lecturas: 434,
      alertasMedias: 4,
      alertasRojas: 4,
    },
  ];

  onEdit(id: string) {
    // TODO implementar lógica de edición
    console.log('Editar planta', id);
  }

  onDelete(id: string) {
    // TODO implementar lógica de eliminación
    console.log('Eliminar planta', id);
  }
}
