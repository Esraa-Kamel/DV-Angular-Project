import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  products: any;
  v: any;
  responsiveOptions;
  public allProducts: any; 
  constructor(public catsrv: MainService,public router: Router) {  this.responsiveOptions = [
{
  breakpoint: '1024px',
}
]; }

  ngOnInit(): void {
    this.catsrv.getAllMainCategories().subscribe(result => {
      this.products = result; 
      
      var temp = JSON.parse(JSON.stringify(this.products));     
      for(var i = this.products.length-1 , j =0; i >= 0; i--,j++){
        this.products[j]= temp[i];
        if(i==0)
        this.products.push({name: 'الكل' , id: -1});
      }
      
      delete this.products[this.products.length-1].iconUri;
      console.log(this.products[this.products.length-1]);
    }
    );
    
  }
  OnClick(e: number){
    if(e!=-1){
        this.router.navigate(['products',e]);
      }
      else
      {
        this.router.navigate(['']);
      }
  }
}
