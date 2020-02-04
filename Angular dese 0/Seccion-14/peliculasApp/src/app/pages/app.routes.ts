import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

