import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IShows } from '../shows';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-shows-card',
  templateUrl: './shows-card.component.html',
  styleUrls: ['./shows-card.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RouterModule]
})
export class ShowsCardComponent {
  @Input() show!: IShows;

  
}
