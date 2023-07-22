import { Component, Inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuComponent {
  currentLang: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public translate: TranslateService
  ) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.changeLang(this.currentLang);
  }

  changeLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    // this.currentLang = lang;
    const body = this.document.body;
    const head = this.document.head;
    this.document.documentElement.setAttribute(
      'lang',
      lang === 'ar' ? 'ar' : 'en'
    );
    this.document.documentElement.setAttribute(
      'dir',
      lang === 'ar' ? 'rtl' : 'ltr'
    );

    body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
}
