import { Component, ElementRef,HostListener } from '@angular/core';
import { WebDataService } from 'src/app/web-data.service';
import { ScrollService } from 'src/app/services/scrollService';
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
    private scrollService: ScrollService
  ) {
    this.fetchData();
    this.youtubeLink = 'https://www.youtube.com/embed/';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    this.scrollService.updateScrollPosition(currentScrollPos);
  }

  scrollToId(id: string) {
    console.log('element id : ', id);
    this.scrollService.scrollToElementById(id);
  }

  scrollToElement(element: HTMLElement) {
    this.scrollService.scrollToElement(element);
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

  scrollToNextSection = () => {
    alert('Scrooll');
  };
}
