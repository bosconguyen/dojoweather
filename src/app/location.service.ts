import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {

  constructor(private _http: Http) { }

  requestCity(city) {
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9682d6888309958a1a48924f6e8ef5ad').map(Response=>Response.json());
  }
}
