import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebDataService } from 'src/app/web-data.service';

@Component({
  selector: 'app-our-news',
  templateUrl: './our-news.component.html',
  styleUrls: ['./our-news.component.css'],
})
export class OurNewsComponent {
  ourNews: any;

  constructor(
    private webDataService: WebDataService,
    public translate: TranslateService
  ) {
    this.fetchData();
  }

  DateFormatter(date: string): string {
    return date.split('T')[0] + ' - ' + date.split('T')[1].split('.')[0];
  }

  fetchData(): void {
    this.webDataService.getOurNews().subscribe((data) => {
      this.ourNews = data.data;
      console.log(this.ourNews);
    });
  }
}
