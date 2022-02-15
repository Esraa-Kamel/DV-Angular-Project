import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-add-main-category',
  templateUrl: './add-main-category.component.html',
  styleUrls: ['./add-main-category.component.css']
})
export class AddMainCategoryComponent implements OnInit {
  isSubmitted = false;
  addCategoryForm!: FormGroup;
  public mainCatList: any;
  constructor(
    public newCategory: MainService,
    private router: Router,
    private dialogRef: MatDialogRef<AddMainCategoryComponent>) {
    this.addCategoryForm = new FormGroup({
      mainCategoryName: new FormControl("", Validators.required),
      iconUri: new FormControl("", Validators.required),
    })
   }

  ngOnInit(): void {
}
  get registerFormControls() {
    return this.addCategoryForm.controls
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    // if(this.addCategoryForm.valid){
    //   const fd = new FormData();
    //   fd.append('iconUri', "https://most5dm20220210193308.azurewebsites.net/images/Ads"+ this.addCategoryForm.controls[1].value);
    //   console.log(this.addCategoryForm.controls);
    // }
      this.newCategory.createMainCategory(this.addCategoryForm.value).subscribe((res: any) => {
          alert("تم إضافة قسم جديد ");
          window.location.reload();
         });
  }
}