import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

export interface PeriodicElement {
  TipoDocumento: string;
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
  displayedColumns: string[] = ['TipoDocumento', 'data', 'qtdPaginas'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {TipoDocumento: 'Contrato Social', data: '02/05/2024', qtdPaginas: 3},
  {TipoDocumento: 'CNH', data: '15/06/2024', qtdPaginas: 1},
  {TipoDocumento: 'NFS', data: '21/06/2024', qtdPaginas: 6},
  {TipoDocumento: 'Contracheque', data: '18/05/2024', qtdPaginas: 9},
  {TipoDocumento: 'Contracheque', data: '10/04/2024', qtdPaginas: 9},
  {TipoDocumento: 'RG', data: '09/03/2024', qtdPaginas: 1},
];





