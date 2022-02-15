import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public ProdtList: any; 
  public mainCatList: any; 
  public mainCatFilterList: any; 

  constructor(public catsrv: MainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const e : any = this.route.snapshot.paramMap.get("id");
        this.catsrv.getAllProductsByMainCategoryId(e).subscribe(result => {
            this.ProdtList = result;
                }
        )
  });
    this.catsrv.getAllMainCategoriesForFilter().subscribe(results => {
      this.mainCatFilterList = results;
    });}
    CBMainCatonChecked(e:any){
    // this.router.navigate(['products',e]);
  }
}
