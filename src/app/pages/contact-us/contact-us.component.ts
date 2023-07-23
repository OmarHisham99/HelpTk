import { Component } from '@angular/core';
import { WebDataService } from 'src/app/web-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  Name: string = '';
  Email: string = '';
  PhoneNumber: string = '';
  Message: string = '';

  constructor(
    private webDataService: WebDataService,
    public translate: TranslateService
  ) {
    this.fetchData();
  }

  contactUsInfo: any;

  fetchData(): void {
    this.getContactInfo();
  }

  handleRequest(): void {}
  getContactInfo(): void {
    this.webDataService.getCompanyInfo().subscribe((data) => {
      this.contactUsInfo = data.data;
      console.log(this.contactUsInfo);
    });
  }
}
