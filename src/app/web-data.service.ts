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
  getWhoWeAre(): Observable<any> {
    return this.http.get('http://testabdotest-001-site1.htempurl.com/api/whoWeAre/Get');
  }
}
