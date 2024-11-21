import { Component, inject } from '@angular/core';
import { IconPipe } from '../../../common/pipes/icon.pipe';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'user-activity-bar',
  standalone: true,
  imports: [IconPipe],
  templateUrl: './user-activity-bar.component.html',
  styles: ``,
})
export class UserActivityBarComponent {
  private readonly authService = inject(AuthService);
  user = this.authService.user;
}
