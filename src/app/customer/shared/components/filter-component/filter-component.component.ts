import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {
  public mainCatFilterList: any; 
  public cityList: any; 

  constructor(public srv: MainService,
    public router: Router) { }

  ngOnInit(): void {
    this.srv.getAllMainCategoriesForFilter().subscribe(results => {
      this.mainCatFilterList = results;
      this.srv.getAllCities().subscribe(results => {
        this.cityList = results;
      }
      );
    });
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  CBMainCatonChecked(e:any){
    debugger;
    this.router.navigate(['products',e]);
  }
  CBCityChecked(e:any):void{
  }
}


