import { Component } from '@angular/core';
import { MonitorSummaryCardComponent } from '../monitor-summary-card/monitor-summary-card.component';
import { MonitorSummaryItem } from '../../interfaces/monitor-summary-item.interface';

@Component({
  selector: 'monitor-summary',
  standalone: true,
  imports: [MonitorSummaryCardComponent],
  templateUrl: './monitor-summary.component.html',
  styles: ``,
})
export class MonitorSummaryComponent {
  summaries: MonitorSummaryItem[] = [
    {
      label: 'Lecturas OK',
      value: 1234,
      type: 'ok',
    },
    {
      label: 'Alertas medias',
      value: 932,
      type: 'warning',
    },
    {
      label: 'Alertas rojas',
      value: 932,
      type: 'danger',
    },
    {
      label: 'Sensores deshabilitados',
      value: 932,
      type: 'medium',
    },
  ];
}
