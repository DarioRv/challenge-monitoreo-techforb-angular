export interface MonitorSummaryItem {
  label: string;
  value: number;
  type: 'ok' | 'warning' | 'danger' | 'medium';
}
