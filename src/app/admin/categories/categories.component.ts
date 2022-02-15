import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/shared/services/main.service';
import { AddCategoryComponent } from '../AddDialogs/Categories/add-category/add-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public catList: any; 
  
  constructor(
    public catsrv: MainService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.catsrv.getAllCategories().subscribe(results => {
      this.catList = results;
    }
    )
  }
  DelectCat(id : any){
    // console.log(id);
    this.catsrv.deleteCategory(id).subscribe((res:any)=>{
    alert(" تم حذف القسم بنجاح ");
    window.location.reload();
    });
  } 

  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: "400px",
      height:"350px"
    });
  }
}
