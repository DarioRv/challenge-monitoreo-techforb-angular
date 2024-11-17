import { Component } from '@angular/core';
import { IconPipe } from '../../../common/pipes/icon.pipe';
import { RouterLink } from '@angular/router';

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
    // TODO Implementar lógica de cierrar de sesión
    console.log('Cerrar sesión');
  }
}
