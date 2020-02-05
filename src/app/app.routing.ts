import { Routes } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const rootRouterConfig: Routes = [
  // { path: '', redirectTo: ':id', pathMatch: 'full' },
  { path: "", component: LandingPageComponent },
  {
    path: ':id', component: HomeComponent
  },
  { path: '**', component: HomeComponent }
];
