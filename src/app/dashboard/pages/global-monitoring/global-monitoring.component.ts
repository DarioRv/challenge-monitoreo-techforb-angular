import { Component } from '@angular/core';
import { MonitorSummaryComponent } from '../../components/monitor-summary/monitor-summary.component';
import { PlantsComponent } from '../../components/plants/plants.component';
import { IndicatorsComponent } from '../../components/indicators/indicators.component';

@Component({
  selector: 'app-global-monitoring',
  standalone: true,
  imports: [MonitorSummaryComponent, PlantsComponent, IndicatorsComponent],
  templateUrl: './global-monitoring.component.html',
  styles: ``,
})
export class GlobalMonitoringComponent {}
