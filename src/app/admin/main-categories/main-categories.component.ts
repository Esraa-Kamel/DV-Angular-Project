import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/shared/services/main.service';
import { AddMainCategoryComponent } from '../AddDialogs/MainCategories/add-main-category/add-main-category.component';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit {

  public catList: any; 
  
  constructor(
    public catsrv: MainService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.catsrv.getAllMainCategories().subscribe(results => {
      this.catList = results;
    }
    );
  }
  DelectMainCat(id: any){
    // console.log(id);
    debugger;
    // this.catList.splice(this.catList.indexOf(id-1), 1);
    this.catsrv.deleteMainCategory(id).subscribe(results=>{
      debugger;
      this.catList.splice(this.catList.indexOf(id), 1);
      alert(" تم حذف القسم بنجاح ");
    // this.catList = results;
    
    });
  } 

  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddMainCategoryComponent, {
      width: "400px",
      height:"350px"
    });
  }
}
