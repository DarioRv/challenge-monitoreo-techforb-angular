import { Component, input } from '@angular/core';
import { IconPipe } from '../../../common/pipes/icon.pipe';
import { IndicatorData } from '../../interfaces/indicator-data.interface';

@Component({
  selector: 'indicator',
  standalone: true,
  imports: [IconPipe],
  templateUrl: './indicator.component.html',
  styles: ``,
})
export class IndicatorComponent {
  data = input.required<IndicatorData>();
}
