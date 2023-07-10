import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BodyComponent } from './pages/body/body.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './pages/menu/menu.component';
// import { TabsComponent } from './pages/tabs/tabs.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { OurNewsComponent } from './pages/our-news/our-news.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    OurServicesComponent,
    PortfolioComponent,
    OurNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    NzMenuModule,
    MatMenuModule,
    MenuComponent,
    // TabsComponent,
    NzStepsModule,
    NzDividerModule,
    NzTabsModule,
    DragScrollModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],

  bootstrap: [AppComponent],
})
export class AppModule {}
