import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {}

  private scrollSubject = new Subject<number>();
  scrollPosition$ = this.scrollSubject.asObservable();

  updateScrollPosition(scrollPosition: number) {
    this.scrollSubject.next(scrollPosition);
  }

  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    this.scrollToElement(element);
  }

  private __getElementById(id: string): HTMLElement {
    const element = <HTMLElement>document.querySelector(`#${id}`);
    // const element = document.getElementById(id);
    return element;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
