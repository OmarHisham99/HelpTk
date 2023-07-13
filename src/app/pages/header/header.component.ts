import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef) {}

  scrollToSection(e: Event, sectionId: string): void {
    const element = document.getElementById(sectionId);
    const links = document.querySelectorAll('.nav-link');
    console.log(links);
    e.preventDefault();
    links.forEach((link) => {
      link.classList.remove('active');
    });
    (e.target as HTMLElement).classList.add('active');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
