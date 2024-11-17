import { Component } from '@angular/core';
import { MonitorSummaryComponent } from '../../components/monitor-summary/monitor-summary.component';

@Component({
  selector: 'app-global-monitoring',
  standalone: true,
  imports: [MonitorSummaryComponent],
  templateUrl: './global-monitoring.component.html',
  styles: ``,
})
export class GlobalMonitoringComponent {}
