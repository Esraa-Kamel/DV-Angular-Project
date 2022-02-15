import { Component, OnInit } from '@angular/core';
import { CarsAdsService } from 'src/app/shared/services/cars-ads.service';

@Component({
  selector: 'app-cars-brands',
  templateUrl: './cars-brands.component.html',
  styleUrls: ['./cars-brands.component.css']
})
export class CarsBrandsComponent implements OnInit {


  public carsBrandsList: any; 
  constructor(public CarAdsrv: CarsAdsService) { }
  ngOnInit(): void {
    this.CarAdsrv.getAllCarBrands().subscribe(results => {
      this.carsBrandsList = results;
    }
    )
  }

}
