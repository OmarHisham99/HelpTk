import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollWatcher]',
})
export class ScrollWatcherDirective {
  @Input() appScrollWatcher: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    const section = document.querySelector(this.appScrollWatcher);
    // console.log(section);
    console.log(currentScrollPos);

    if (section) {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
      console.log(sectionTop);
      console.log(sectionBottom);

      if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
        this.el.nativeElement.classList.add('active');
      } else {
        this.el.nativeElement.classList.remove('active');
      }
    }
  }
}
