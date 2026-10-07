import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Pulse8 Fitness — Premium Gym in Greater Noida',
    loadComponent: () => import('./pages/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About — Pulse8 Fitness',
    loadComponent: () => import('./pages/about').then((m) => m.About),
  },
  {
    path: 'gallery',
    title: 'Gallery — Pulse8 Fitness',
    loadComponent: () => import('./pages/gallery').then((m) => m.Gallery),
  },
  {
    path: 'join',
    title: 'Join — Pulse8 Fitness',
    loadComponent: () => import('./pages/join').then((m) => m.Join),
  },
  { path: '**', redirectTo: '' },
];
