import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

export interface PeriodicElement {
  tipoDocumento: string;
  data: string;
  qtdPaginas: number;
}

@Component({
  selector: 'app-analitico',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './analitico.component.html',
  styleUrls: ['./analitico.component.css']
})

export class AnaliticoComponent {
  displayedColumns: string[] = ['tipoDocumento', 'data', 'qtdPaginas'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {tipoDocumento: 'CNH', data: '01/05/2024', qtdPaginas: 1},
  {tipoDocumento: 'RG', data: '15/06/2024', qtdPaginas: 4},
  {tipoDocumento: 'Registro', data: '21/06/2024', qtdPaginas: 6},
  {tipoDocumento: 'RG', data: '18/05/2024', qtdPaginas: 9},
];





