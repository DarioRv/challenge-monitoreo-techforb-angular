import { Component } from '@angular/core';
import { IconPipe } from '../../../common/pipes/icon.pipe';

@Component({
  selector: 'user-activity-bar',
  standalone: true,
  imports: [IconPipe],
  templateUrl: './user-activity-bar.component.html',
  styles: ``,
})
export class UserActivityBarComponent {}
