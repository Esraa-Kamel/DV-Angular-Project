import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdsComponent } from 'src/app/customer/components/add-ads/add-ads.component';
import { MainBodyComponent } from 'src/app/customer/components/main-body/main-body.component';
import { ProductComponent } from 'src/app/customer/components/product/product.component';
import { FilterComponentComponent } from 'src/app/customer/shared/components/filter-component/filter-component.component';

const routes: Routes = [
  {
    path:"",
    component: MainBodyComponent,
  },
  {
    path:"products/:id",
    component: ProductComponent,
  },
  {
    path:"addAds",
    component: AddAdsComponent,
  },
  {
    path:"",
    redirectTo:"",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
