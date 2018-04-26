import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchMeteoService {

  constructor(private http: HttpClient) { }

  getMeteo(city: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=b8de8503e7012ee121a886385eddf0c1');
  }

}
