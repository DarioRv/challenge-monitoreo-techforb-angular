import { Component, input } from '@angular/core';
import { MonitorSummaryItem } from '../../interfaces/monitor-summary-item.interface';
import { NgClass } from '@angular/common';
import { IconPipe } from '../../../common/pipes/icon.pipe';

@Component({
  selector: 'monitor-summary-card',
  standalone: true,
  imports: [NgClass, IconPipe],
  templateUrl: './monitor-summary-card.component.html',
  styles: ``,
})
export class MonitorSummaryCardComponent {
  summary = input.required<MonitorSummaryItem>();

  types: Record<
    'ok' | 'warning' | 'danger' | 'medium',
    { icon: string; color: string }
  > = {
    ok: { icon: 'ok', color: 'bg-green-500/15' },
    warning: { icon: 'warning', color: 'bg-yellow-500/15' },
    danger: { icon: 'danger', color: 'bg-red-500/15' },
    medium: { icon: 'medium', color: 'bg-[#FF8A48]/15' },
  };

  getType(type: 'ok' | 'warning' | 'danger' | 'medium') {
    return this.types[type];
  }
}
