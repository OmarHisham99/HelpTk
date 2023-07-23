import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-our-news',
  templateUrl: './our-news.component.html',
  styleUrls: ['./our-news.component.css'],
})
export class OurNewsComponent {
  constructor(public translate: TranslateService) {}
}
