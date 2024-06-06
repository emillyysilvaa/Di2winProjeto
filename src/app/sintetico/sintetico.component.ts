import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  Usuario: string;
  data: string;
  qtdPaginas: number;
}

@Component({
  selector: 'app-sintetico',
  standalone: true,
  imports: [MatTableModule, RouterLink, MatPaginatorModule, CommonModule],
  templateUrl: './sintetico.component.html',
  styleUrls: ['./sintetico.component.css']
})

export class SinteticoComponent {
  displayedColumns: string[] = ['Usuario', 'data', 'qtdPaginas'];
  dataSource = ELEMENT_DATA;

  showElement = false;
  @Input() isDarkTheme: boolean;
  constructor() {
    this.isDarkTheme = false;
  }
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Usuario: 'Usuário 1', data: '02/05/2024', qtdPaginas: 3},
  {Usuario: 'Usuário 2', data: '15/06/2024', qtdPaginas: 1},
  {Usuario: 'Usuário 3', data: '21/06/2024', qtdPaginas: 6},
  {Usuario: 'Usuário 4', data: '18/05/2024', qtdPaginas: 9},
  {Usuario: 'Usuário 5', data: '10/04/2024', qtdPaginas: 9},
  {Usuario: 'Usuário 6', data: '09/03/2024', qtdPaginas: 1},
];

