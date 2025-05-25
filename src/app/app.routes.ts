import { Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login.component';
import { DashboardComponent } from './components/admin/dashboard.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'sobre', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'experiencia', loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent) },
  { path: 'projetos', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'habilidades', loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent) },
  { path: 'contato', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'blog', loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
