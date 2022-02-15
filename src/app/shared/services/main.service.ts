import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http: HttpClient) { }
  
  private baseUrl = 'https://most5dm20220210193308.azurewebsites.net/';
/////////////////////////////////////////////////////////////////Search APIs
getAllProductsBySearch() {
  let url =  this.baseUrl+"api/Products/GetProductBySearch";
  return this._http.get(url);
}
/////////////////////////////////////////////////////////////////Get Products by Main Category ID APIs
getAllProductsByMainCategoryId(id: number) {
  let url =  this.baseUrl+"api/Products/GetProductByMainCategoryId";
  return this._http.get(url+"?MainCategoryId="+id);
}
/////////////////////////////////////////////////////////////////Main Categories For Filter APIs
getAllMainCategoriesForFilter() {
  let url =  this.baseUrl+"api/MainCategory/GetAll";
  return this._http.get(url);
}/////////////////////////////////////////////////////////////////Main Categories APIs
getAllMainCategories() {
  let url =  this.baseUrl+"api/MainCategory/GetAll";
  return this._http.get(url);
}
createMainCategory(CategoryBody: any) {    
  let url =  this.baseUrl+"api/MainCategory/Add";
  return this._http.post(url, CategoryBody);
}
deleteMainCategory(categoryId: number) {
  let url =  this.baseUrl+"api/MainCategory/Delete";
  return this._http.delete(url +"?MainCategoryId="+categoryId);
}
  /////////////////////////////////////////////////////////////////Categories APIs
  GetCategoryByMainCategoryId(id : number) {
    let url =  this.baseUrl+"api/Category/GetCategoryByMainCategoryId";
    return this._http.get(url+"?MainCategoryId="+id);
  }  getAllCategories() {
    let url =  this.baseUrl+"api/Category/GetAll";
    return this._http.get(url);
  }
  createCategory(CategoryBody: any) {    
    let url =  this.baseUrl+"api/Category/Add";
    return this._http.post(url, CategoryBody);
  }

  deleteCategory(categoryId: number) {
    let url =  this.baseUrl+"api/Category/Delete";
    return this._http.delete(url +"?CategoryId="+categoryId);
  }
  updateCategory(categoryId: number) {
    let url =  this.baseUrl 
    return this._http.delete(url + '/UpdateCategory/' + categoryId);
  }
  /////////////////////////////////////////////////////////////////Brands APIs
  GetBrandById(id : any) {
    let url =  this.baseUrl+"api/Brand/GetBrandById";
    return this._http.get(url+"?BrandId="+id);
  }
  GetBrandsByCategoryId(id : number) {
    let url =  this.baseUrl+"api/Brand/GetAllBrandsByCategoryId";
    return this._http.get(url+"?CategoryId="+id);}
  /////////////////////////////////////////////////////////////////Products APIs
  GetAllProductsByBrandId(id: any) {
    let url =  this.baseUrl+"api/Products/GetAllProductsByBrandId";
    return this._http.get(url+"?BrandId="+id);
  }
  /////////////////////////////////////////////////////////////////Cities APIs
  getAllCities() {
    let url =  this.baseUrl+"api/City/GetAll";
    return this._http.get(url);
  }
  deleteCity(cityId: number) {
    let url =  this.baseUrl+"api/City/Delete/"
    return this._http.delete(url + cityId);
  }
  getCityByID(cityId: number) {
    let url =  this.baseUrl+"api/City/GetCityById"
    return this._http.get(url +"?CityId="+ cityId);
  }
  /////////////////////////////////////////////////////////////////Add Ads APIs
  addAds(form : any){
    let url =  `${this.baseUrl}api/Products/Add`;
    return this._http.post(url, form);
  }
  /////////////////////////////////////////////////////////////////Images APIs
 

  uploadImgs(file: File){
    var headers = new HttpHeaders({
      'Accept-Language': 'en-US',
      'Content-type': ""
    });
    if (localStorage.getItem("authKey")) {
      headers = headers.append('Authorization', `Bearer ${localStorage.getItem("authKey")}`);
    };
    var httpOptions = {
      headers: headers
    };
    let url =  `${this.baseUrl}api/ManageImage/upload`;
    const formData = new FormData();

    formData.append('file', file);
    return this._http.post(url, formData,httpOptions);
  }
 
}
