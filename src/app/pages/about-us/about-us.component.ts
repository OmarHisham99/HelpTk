import { Component } from '@angular/core';
import { WebDataService } from 'src/app/web-data.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  aboutUs_images: any;
  aboutUs_description: any;
  whoWeAre: any;

  constructor(
    private webDataService: WebDataService,
    public translate: TranslateService
  ) {
    this.fetchData();
  }

  fetchData(): void {
    this.webDataService.getAboutUs().subscribe((data) => {
      this.aboutUs_images = data.data;
    });
    this.webDataService.getAboutUsDescription().subscribe((data) => {
      this.aboutUs_description = data.data;
      console.log(this.aboutUs_description);
    });
    this.webDataService.getWhoWewAre().subscribe((data) => {
      this.whoWeAre = data.data;
      console.log(data.data);
    });
  }

  checkLanguage() {
    return this.translate.currentLang == 'ar';
  }
}
