import { Component } from '@angular/core';
import { WebDataService } from 'src/app/web-data.service';
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent {
  stepNumber = 0;
  stepperData = [
    {
      Label: 'Mobile Application',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/Mobile.svg',
      DisplayedText:
        'Smart phones let you surf the Internet, mail and use applications in addition to telephone services such as communication, SMS .',
      DisplayedImg: 'assets/mobileApp.gif',
    },
    {
      Label: 'Desktop Application',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/Desktop.png',
      DisplayedText:
        'Desktop applications very fast and enables the users to control with the ease of interaction with other programs on the device .',
      DisplayedImg: 'assets/desktopGif.gif',
    },
    {
      Label: 'Web Application',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/Web.png',
      DisplayedText:
        'We develop software and electronic applications in the shortest possible time while maintaining quality and high performance .',
      DisplayedImg: 'assets/webApp.gif',
    },
    {
      Label: 'UI/UX Design',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/BezierCurve.png',
      DisplayedText:
        'Perfect design is a main factor to attract sites visitors. Thus we build full websites as befitting our customers .',
      DisplayedImg: 'assets/uiux.gif',
    },
    {
      Label: 'System Analysis',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/ChartBar.png',
      DisplayedText:
        'Manage and analysis software and administrative systems provide the optimal plan for the implementation of the program goals .',
      DisplayedImg: 'assets/analysis.gif',
    },
    {
      Label: 'Maintenance and Support',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/customer-service-line.png',
      DisplayedText:
        'We provide clients with ongoing support services to ensure the highest degree of quality and the highest degree of customer satisfaction .',
      DisplayedImg: 'assets/maintenance.gif',
    },
  ];

  steps: any;

  constructor(public webService: WebDataService) {
    this.fetchData();
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.stepNumber == this.steps.length - 1) {
        this.stepNumber = 0;
        return;
      }
      this.stepNumber++;
    }, 3000);
  }

  changeStep(e: Event, step: number) {
    this.stepNumber = step;
  }

  fetchData(): void {
    this.getServices();
  }

  getServices() {
    return this.webService.getServices().subscribe((data) => {
      this.steps = data.data;
    });
  }
}
