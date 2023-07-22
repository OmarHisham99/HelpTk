import { Component,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Helptech';
  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    
  }


  
}
