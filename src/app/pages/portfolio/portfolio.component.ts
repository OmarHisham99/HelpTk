import { Component } from '@angular/core';
import { WebDataService } from '../../web-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  clientsData: any;
  constructor(private webDataService: WebDataService, public translate: TranslateService) {
    this.fetchClientsData();
  }

  fetchClientsData() {
    this.webDataService.getClients().subscribe((data: any) => {
      this.clientsData = data.data;
    });
  }
}
