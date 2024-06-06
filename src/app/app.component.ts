import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import { BarraComponent } from './barra/barra.component';
import { LateralComponent } from './lateral/lateral.component';
import { AnaliticoComponent } from './analitico/analitico.component';
import { SinteticoComponent } from './sintetico/sintetico.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BarraComponent,
    LateralComponent,
    AnaliticoComponent,
    SinteticoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto';
  currentRoute: string = '';
  isDarkTheme = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
