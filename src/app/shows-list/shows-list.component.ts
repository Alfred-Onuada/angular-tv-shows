import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IShows } from '../shows';
import { ShowsCardComponent } from '../shows-card/shows-card.component';
import { ShowsService } from '../shows.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ShowsCardComponent, FormsModule],
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit{
  from: number = 0;
  to: number = 0;
  total: number = 0;
  currentPage = 1;
  shows: IShows[] = [];
  private query = '';

  get searchTerm(): string {
    return this.query;
  }

  set searchTerm(val: string) {
    this.query = val;

    // find the show
    if (this.query.length === 0) {
      this.shows = this.showsService.getShows(this.currentPage);
    } else {
      this.shows = this.showsService.findShows(this.query);
    }
  }

  constructor (private showsService: ShowsService) {}

  ngOnInit(): void {
    this.total = this.showsService.getShowsCount();
    this.shows = this.showsService.getShows();

    // update the from and to values
    if (this.currentPage === 1) {
      this.from =  1;
      this.to = 1 + this.shows.length;

    } else {
      this.from = (this.currentPage * 20) + 1;
      this.to = (this.currentPage * 20) + this.shows.length;
    }
  }

  prevPage(): void {
    this.currentPage--;

    this.shows = this.showsService.getShows(this.currentPage);
  }

  nextPage(): void {
    this.currentPage++;

    this.shows = this.showsService.getShows(this.currentPage);
  }

}
