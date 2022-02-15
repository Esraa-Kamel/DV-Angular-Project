import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  constructor(private _http: HttpClient) { }
  private baseUrl = 'https://most5dm20220210193308.azurewebsites.net/';

  getToken(form : any):Observable<any>{
    let url =  `${this.baseUrl}/api/Auth/Login`;
    return this._http.post(url, form);
  }
  Register(form : any):Observable<any>{
    let url =  `${this.baseUrl}/api/Auth/Register`;
    return this._http.post(url, form);
  }
}
