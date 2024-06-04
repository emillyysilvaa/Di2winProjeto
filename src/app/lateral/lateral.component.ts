import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-lateral',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.css'
})
export class LateralComponent {
  showElement = false;
}
