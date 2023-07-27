import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scrollService';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  activeLink = 'body';
  sectionOffsets: { [key: string]: number } = {};
  constructor(
    private elementRef: ElementRef,
    private scrollService: ScrollService
  ) {
    this.sectionOffsets = {
      body: 0,
      'about-us': 0,
      'our-services': 0,
      portfolio: 0,
      'our-news': 0,
      'contact-us': 0,
    };
  }

  ngOnInit(): void {
    this.scrollService.scrollPosition$.subscribe((scrollPos: number) => {
      this.updateActiveLink(scrollPos);
    });
  }

  updateActiveLink(scrollPos: number) {
    console.log('scroll', scrollPos);
    let currentSection: string | null = null;
    for (const sectionId of Object.keys(this.sectionOffsets)) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        this.sectionOffsets[sectionId] = sectionElement.offsetTop;
      }
    }

    // Calculate which section is currently in view based on scroll position
    Object.keys(this.sectionOffsets).forEach((section) => {
      const sectionTop = this.sectionOffsets[section] - 300;
      const sectionBottom =
        sectionTop + (document.getElementById(section)?.offsetHeight || 0);

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        currentSection = section;
      }
    });

    // Update the active link
    if (currentSection) {
      this.activeLink = currentSection;
    }
  }

  scrollToSection(e: Event, sectionId: string): void {
    const element = document.getElementById(sectionId);
    const links = document.querySelectorAll('.nav-link');
    // console.log(links);
    e.preventDefault();
    links.forEach((link) => {
      link.classList.remove('active');
    });
    (e.target as HTMLElement).classList.add('active');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
