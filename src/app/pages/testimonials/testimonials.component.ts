import { Component } from '@angular/core';
import { WebDataService } from 'src/app/web-data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {


  reviews: any;

  constructor(
    private webDataService: WebDataService,
  ) {
    this.fetchData();
  }

  fetchData(): void {
    this.webDataService.getReviews().subscribe((data) => {
      this.reviews = data.data;
      // console.log(this.reviews);
    });
  }
}
