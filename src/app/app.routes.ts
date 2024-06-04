import { Routes } from '@angular/router';
import { AnaliticoComponent } from './analitico/analitico.component';
import { SinteticoComponent } from './sintetico/sintetico.component';

export const appRoutes: Routes = [
  { path: 'analitico', component: AnaliticoComponent },
  { path: 'sintetico', component: SinteticoComponent },
  { path: '**', component: AnaliticoComponent }
];
