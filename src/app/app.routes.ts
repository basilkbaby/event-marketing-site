import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'past-events', loadComponent: () => import('./components/pages/past-events/past-events.component').then(m => m.PastEventsComponent) },
  { path: 'contact', loadComponent: () => import('./components/pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'privacy-policy', loadComponent: () => import('./components/pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
  { path: 'terms', loadComponent: () => import('./components/pages/terms-conditions/terms-conditions.component').then(m => m.TermsConditionsComponent) },
  { path: '**', redirectTo: '' }
];
