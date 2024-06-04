import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraComponent } from './barra/barra.component';
import {LateralComponent} from './lateral/lateral.component';
import { AnaliticoComponent } from './analitico/analitico.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraComponent, LateralComponent, AnaliticoComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
