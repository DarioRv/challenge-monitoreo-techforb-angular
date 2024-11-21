import { Routes } from '@angular/router';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { DashboardLayoutComponent } from './dashboard/layouts/dashboard-layout/dashboard-layout.component';
import { GlobalMonitoringComponent } from './dashboard/pages/global-monitoring/global-monitoring.component';
import { authGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'global-monitoring',
        component: GlobalMonitoringComponent,
        title: 'Monitoreo global - Techforb',
        data: {
          title: 'Monitoreo global',
        },
      },
      {
        path: '**',
        redirectTo: 'global-monitoring',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'sign-in',
  },
];
