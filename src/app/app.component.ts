import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraComponent } from './barra/barra.component';
import {LateralComponent} from './lateral/lateral.component';
import { AnaliticoComponent } from './analitico/analitico.component';
import { SinteticoComponent } from './sintetico/sintetico.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraComponent, LateralComponent, AnaliticoComponent, SinteticoComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';

  isDarkTheme = false;

toggleTheme() {
  this.isDarkTheme = !this.isDarkTheme;
}
}
