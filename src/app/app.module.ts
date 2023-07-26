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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './pages/menu/menu.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
// import { TabsComponent } from './pages/tabs/tabs.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { OurNewsComponent } from './pages/our-news/our-news.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MapComponent } from './pages/map/map.component';
import { WebDataService } from './web-data.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
  import { HotToastModule } from '@ngneat/hot-toast';
  import { MatSnackBarModule } from '@angular/material/snack-bar';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    OurServicesComponent,
    PortfolioComponent,
    OurNewsComponent,
    AboutUsComponent,
    ContactUsComponent,
    TestimonialsComponent,
    FooterComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzMenuModule,
    MatMenuModule,
    MenuComponent,
    // TabsComponent,
    NzStepsModule,
    NzDividerModule,
    NzTabsModule,
    DragScrollModule,
    TextFieldModule,
    NzInputModule,
    NzButtonModule,
    MatSnackBarModule,
    HotToastModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, WebDataService],

  bootstrap: [AppComponent],
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
