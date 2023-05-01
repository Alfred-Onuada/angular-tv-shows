import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from '../shows.service';
import { IShowDetails } from '../show-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ShowDetailComponent implements OnInit {
  show!: IShowDetails;

  constructor (
    private route: ActivatedRoute,
    private showsService: ShowsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.showsService.getShow(params['id']).subscribe((showDetails) => {
        this.show = showDetails;
      })
    })
  }

}
