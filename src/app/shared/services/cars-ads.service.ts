import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarsAdsService {

  constructor(private _http: HttpClient) { }
  private baseUrl = 'https://most5dm20220210193308.azurewebsites.net/';

  getAllCarBrands() {
    let url =  this.baseUrl+"api/Brand/GetAll";
    return this._http.get(url);
  }
}
