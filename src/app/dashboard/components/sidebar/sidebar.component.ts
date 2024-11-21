import { Component, inject } from '@angular/core';
import { IconPipe } from '../../../common/pipes/icon.pipe';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

interface MenuItem {
  icon: string;
  routerLink?: string;
}

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [IconPipe, RouterLink],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  menuItems = [
    {
      icon: 'dashboard',
      routerLink: 'global-monitoring',
    },
    {
      icon: 'monitoreo-por-planta',
      routerLink: 'plant-monitoring',
    },
    {
      icon: 'sensores',
      routerLink: 'sensors',
    },
    {
      icon: 'plantas',
      routerLink: 'plants',
    },
  ];

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/sign-in']);
  }
}
