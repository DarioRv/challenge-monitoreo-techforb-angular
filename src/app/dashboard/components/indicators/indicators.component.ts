import { Component } from '@angular/core';
import { IndicatorComponent } from '../indicator/indicator.component';
import { IndicatorData } from '../../interfaces/indicator-data.interface';

@Component({
  selector: 'indicators',
  standalone: true,
  imports: [IndicatorComponent],
  templateUrl: './indicators.component.html',
  styles: ``,
})
export class IndicatorsComponent {
  indicatorsData: IndicatorData[] = [
    {
      label: 'Temperatura',
      values: [10, 20, 3],
      icon: 'temperature',
      type: 'temperature',
    },
    {
      label: 'Presión',
      values: [10, 20, 3],
      icon: 'pressure',
      type: 'pressure',
    },
    {
      label: 'Viento',
      values: [10, 20, 3],
      icon: 'wind',
      type: 'wind',
    },
    {
      label: 'Niveles',
      values: [10, 20, 3],
      icon: 'levels',
      type: 'levels',
    },
    {
      label: 'Energía',
      values: [10, 20, 3],
      icon: 'energy',
      type: 'energy',
    },
    {
      label: 'Tensión',
      values: [10, 20, 3],
      icon: 'stress',
      type: 'stress',
    },
    {
      label: 'Monóxido de carbono',
      values: [10, 20, 3],
      icon: 'carbon-monoxide',
      type: 'carbon-monoxide',
    },
    {
      label: 'Otros gases',
      values: [10, 20, 3],
      icon: 'other-gases',
      type: 'other-gases',
    },
  ];
}
