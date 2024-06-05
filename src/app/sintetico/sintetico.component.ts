import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

export interface PeriodicElement {
  Usuario: string;
  data: string;
  qtdPaginas: number;
}

@Component({
  selector: 'app-sintetico',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './sintetico.component.html',
  styleUrls: ['./sintetico.component.css']
})

export class SinteticoComponent {
  displayedColumns: string[] = ['Usuario', 'data', 'qtdPaginas'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Usuario: 'Usuario 1', data: '02/05/2024', qtdPaginas: 3},
  {Usuario: 'Usuario 2', data: '15/06/2024', qtdPaginas: 1},
  {Usuario: 'Usuario 3', data: '21/06/2024', qtdPaginas: 6},
  {Usuario: 'Usuario 4', data: '18/05/2024', qtdPaginas: 9},
  {Usuario: 'Usuario 5', data: '10/04/2024', qtdPaginas: 9},
  {Usuario: 'Usuario 6', data: '09/03/2024', qtdPaginas: 1},
];

