import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  isSubmitted = false;
  addCategoryForm!: FormGroup;
  public mainCatList: any;
  constructor(
    public newCategory: MainService,
    private router: Router,
    private dialogRef: MatDialogRef<AddCategoryComponent>) {
    this.addCategoryForm = new FormGroup({
      mainCategoryId: new FormControl("", Validators.required),
      categoryName: new FormControl("", Validators.required),
      iconUri: new FormControl("", Validators.required),
    })
   }

  ngOnInit(): void {
    this.newCategory.getAllMainCategories().subscribe(results => {
    this.mainCatList = results;
  })
}
  get registerFormControls() {
    return this.addCategoryForm.controls
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    // console.log(this.addCategoryForm);
    if(this.addCategoryForm.valid){

      const fd = new FormData();
      fd.append('iconUri', this.addCategoryForm.controls[1].value);
      console.log(this.addCategoryForm.controls);
    }
      this.newCategory.createCategory(this.addCategoryForm.value).subscribe((res: any) => {
          alert("تم إضافة قسم جديد ");
          window.location.reload();
         });
  }
}