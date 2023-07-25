import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebDataService {
  private apiUrl = 'http://testabdotest-001-site1.htempurl.com/api/';
  constructor(private http: HttpClient) {}

  getAboutUs(): Observable<any> {
    return this.http.get(this.apiUrl + 'AboutUs/Get');
  }

  getAboutUsDescription(): Observable<any> {
    return this.http.get(this.apiUrl + 'AboutUsDescription/Get?language=EN');
  }

  getCompanyInfo(): Observable<any> {
    return this.http.get(this.apiUrl + 'CompanyInfo/Get');
  }

  getHomeData(): Observable<any> {
    return this.http.get(this.apiUrl + 'Home/Get?Language=EN');
  }

  getClients(): Observable<any> {
    return this.http.get(this.apiUrl + 'Client/Get?Language=EN');
  }

  getWhoWewAre(): Observable<any> {
    return this.http.get(this.apiUrl + 'WhoWeAre/Get?Language=EN');
  }
  getOurNews(): Observable<any> {
    return this.http.get(this.apiUrl + 'News/Get?Language=EN');
  }
  getReviews(): Observable<any> {
    return this.http.get(this.apiUrl + 'Review/Get?Language=EN');
  }
  getServices(): Observable<any> {
    return this.http.get(this.apiUrl + 'Service/Get?Language=EN');
  }
}
