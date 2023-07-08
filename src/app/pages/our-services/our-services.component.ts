import { Component } from '@angular/core';

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
      
    },
    {
      Label: 'Desktop Application',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/Desktop.png',
    },
    {
      Label: 'Web Application',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/Web.png',
    },
    {
      Label: 'UI/UX Design',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/BezierCurve.png',
    },
    {
      Label: 'System Analysis',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/ChartBar.png',
    },
    {
      Label: 'Maintenance and Support',
      Description: `We believe clients drive businesses forward.`,
      Image: 'assets/customer-service-line.png',
    },
  ];
  constructor() {}

  onIndexChange(index: number): void {
    this.stepNumber = index;
  }
}
