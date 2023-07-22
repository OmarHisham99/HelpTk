import { Component, ElementRef } from '@angular/core';
import { WebDataService } from 'src/app/web-data.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  homeData: any;
  youtubeLink: string;
  constructor(
    private webDataService: WebDataService,
    private elementRef: ElementRef,
    public translate: TranslateService
  ) {
    this.fetchData();
    this.youtubeLink = 'https://www.youtube.com/embed/';
  }

  fetchData(): void {
    this.getHomeData();
  }
  getHomeData(): void {
    this.webDataService.getHomeData().subscribe((data) => {
      this.homeData = data.data;
      this.youtubeLink += this.homeData.videoLink.split('=')[1];
      let element = this.elementRef.nativeElement.querySelector('#video');
      element.setAttribute('src', this.youtubeLink);
    });
  }
}
