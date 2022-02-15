import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  public mainCatList: any; 
  public mainCatFilterList: any; 
  public cityData: any; 
  public brandData: any; 
  public catList: any; 
  public catListByMainCatId!: any[];
  public brandList!: any[];
  public prodList: any; 
  public cityList: any; 

  constructor(
    public srv: MainService,
    public router: Router
    ) { }
 
  ngOnInit(): void {
    debugger;
    this.srv.getAllMainCategories().subscribe(results => {
      this.mainCatList = results;
      for(const mainCatdata of this.mainCatList)
      {
        this.srv.getAllProductsByMainCategoryId(mainCatdata.id).subscribe(results => {
        mainCatdata.Products = results;
        for(const AdsCity of mainCatdata.Products)
        {
          this.srv.getCityByID(AdsCity.cityId).subscribe(results => {
            this.cityData = results;
          });
        }
        for(const AdsBrand of mainCatdata.Products)
        {
          this.srv.GetBrandById(AdsBrand.id).subscribe(results => {
            
            this.brandData = results;
          });
        }
        if(mainCatdata.Products.length == 0){
          this.mainCatList.splice(this.mainCatList.indexOf(mainCatdata),1);
          }
    }
    );
    
      
    console.log(mainCatdata.Products);
    }
  });

    
   
  
  }
 




}
