import { Component } from '@angular/core';
import { MonitorSummaryComponent } from '../../components/monitor-summary/monitor-summary.component';
import { PlantsComponent } from '../../components/plants/plants.component';

@Component({
  selector: 'app-global-monitoring',
  standalone: true,
  imports: [MonitorSummaryComponent, PlantsComponent],
  templateUrl: './global-monitoring.component.html',
  styles: ``,
})
export class GlobalMonitoringComponent {}
