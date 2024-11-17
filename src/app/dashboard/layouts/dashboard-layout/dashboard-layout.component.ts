import { Component, inject } from '@angular/core';
import { IconPipe } from '../../../common/pipes/icon.pipe';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { UserActivityBarComponent } from '../../components/user-activity-bar/user-activity-bar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, UserActivityBarComponent, SidebarComponent],
  templateUrl: './dashboard-layout.component.html',
  styles: ``,
})
export class DashboardLayoutComponent {
  private readonly route = inject(ActivatedRoute);

  title = this.route.snapshot.children[0].data['title'];
}
