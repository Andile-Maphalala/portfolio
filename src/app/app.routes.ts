import { Routes } from '@angular/router';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'thank-you', component: ThankYouComponent },
  {
    path: '**', redirectTo: ''
  }
];
