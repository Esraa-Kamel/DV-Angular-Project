import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.css']
})
export class AddAdsComponent implements OnInit {

  public mainCatFilterList: any;
  public CatFilterList: any;
  public BrandsFilterList: any;
  public citiesList: any;
  public ImgsUrlrList: any;
  public selectedFile!: ImageSnippet;

  public mainCatList: any;
  addAdsForm!: FormGroup;


  constructor(
    public srv: MainService,
    private router: Router
  ) {
    this.addAdsForm = new FormGroup({
      name: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      productShortDesc: new FormControl("", Validators.required),
      productLongDesc: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      // quantity: new FormControl("", Validators.required),
      brandId: new FormControl("", Validators.required),
      cityId: new FormControl("", Validators.required),
      iconUri: new FormControl("", Validators.required),
    })
  }
  OnSelectMainCat(e: any) {
    debugger;
    this.srv.GetCategoryByMainCategoryId(e.value).subscribe(results => {
      this.CatFilterList = results;
    });
  }
  OnSelectSubMainCat(e: any) {
    debugger;
    this.srv.GetBrandsByCategoryId(e.value).subscribe(results => {
      this.BrandsFilterList = results;
    });
  }


  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.srv.uploadImgs(this.selectedFile.file).subscribe(
  //       (res) => {
        
  //       },
  //       (err) => {
        
  //       })
  //   });

  //   reader.readAsDataURL(file);
  // }
  processFile(e: any) {
    debugger;
    var file : File = e.target.files[0];
    this.srv.uploadImgs(file).subscribe(results => {
      debugger;
      this.ImgsUrlrList = results;
      console.log(this.ImgsUrlrList);
    });
  }

//   OnchangeImgs(event: Event) {
//     const element = event.currentTarget as HTMLInputElement;
//     let fileList: FileList | null = element.files;
//     if (fileList) {
//       console.log("FileUpload -> files", fileList);
//     }
// }

  ngOnInit(): void {
    this.srv.getAllMainCategoriesForFilter().subscribe(results => {
      this.mainCatFilterList = results;
    });
    this.getAllCities();
  }
  get registerFormControls() {
    return this.addAdsForm.controls
  }

  onSubmit() {
    debugger;
    this.srv.addAds(this.addAdsForm.value).subscribe((res: any) => {
      // console.log(res.status);
      if (res.status == 'True') {
        alert("تم نشر الإعلان بنجاح..... ");
        this.router.navigate(['/']);
      }
    });
  }
  selectMainCatId(e: any) {
    this.srv.getAllMainCategories().subscribe(results => {
      this.mainCatList = results;
    })
  }
  getAllCities() {
    this.srv.getAllCities().subscribe(results => {
      this.citiesList = results;
    })
  }

}
