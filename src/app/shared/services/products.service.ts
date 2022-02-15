import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }
  private baseUrl = 'http://localhost:55201/api/Product';
  getAllProducts() {
    let url =  this.baseUrl;
    return this._http.get(url);
  }

  getProductById(productId: number) {
    let url =  this.baseUrl 
    return this._http.get(url);
  }

  createProduct(productBody: any) {    
    let url =  this.baseUrl 
    return this._http.post(url+ '/CreateProduct', productBody);
  }

  deleteProduct(productId: number) {
    let url =  this.baseUrl 
    return this._http.delete(url+ '/DeleteProduct/' + Number);
  }
}
