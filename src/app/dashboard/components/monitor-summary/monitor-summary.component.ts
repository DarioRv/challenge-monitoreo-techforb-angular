import { Component, inject, OnInit } from '@angular/core';
import { MonitorSummaryCardComponent } from '../monitor-summary-card/monitor-summary-card.component';
import { MonitorSummaryItem } from '../../interfaces/monitor-summary-item.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'monitor-summary',
  standalone: true,
  imports: [MonitorSummaryCardComponent],
  templateUrl: './monitor-summary.component.html',
  styles: ``,
})
export class MonitorSummaryComponent implements OnInit {
  private readonly dataService = inject(DataService);
  summaries: MonitorSummaryItem[] = [
    {
      label: 'Lecturas OK',
      value: 0,
      type: 'ok',
    },
    {
      label: 'Alertas medias',
      value: 0,
      type: 'warning',
    },
    {
      label: 'Alertas rojas',
      value: 0,
      type: 'danger',
    },
    {
      label: 'Sensores deshabilitados',
      value: 0,
      type: 'medium',
    },
  ];

  ngOnInit(): void {
    this.getSummaryData();
  }

  getSummaryData() {
    this.dataService.getSummary().subscribe((data) => {
      this.summaries.map((summary) => {
        summary.value = data[this.summaries.indexOf(summary)];
      });
    });
  }
}
