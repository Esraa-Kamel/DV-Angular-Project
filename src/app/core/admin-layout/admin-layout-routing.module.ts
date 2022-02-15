// import { CategoriesComponent } from './../../admin/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/admin/home/home.component';
import { CitiesComponent } from 'src/app/admin/cities/cities.component';
import { DistrictsComponent } from 'src/app/admin/districts/districts.component';
import { CarsBrandsComponent } from 'src/app/admin/Cars Ads/cars-brands/cars-brands.component';
import { CarsFuelTypesComponent } from 'src/app/admin/Cars Ads/cars-fuel-types/cars-fuel-types.component';
import { CarsGearTypesComponent } from 'src/app/admin/Cars Ads/cars-gear-types/cars-gear-types.component';
import { CarsPushTypesComponent } from 'src/app/admin/Cars Ads/cars-push-types/cars-push-types.component';
import { MobilePhonesBrandsComponent } from 'src/app/admin/Mobile Phones Ads/mobile-phones-brands/mobile-phones-brands.component';
import { CategoriesComponent } from 'src/app/admin/categories/categories.component';
import { MainCategoriesComponent } from 'src/app/admin/main-categories/main-categories.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"mainCategories",
    component:MainCategoriesComponent
  },
  {
    path:"categories",
    component:CategoriesComponent
  },
  {
    path:"cities",
    component:CitiesComponent
  },
  {
    path:"districts",
    component:DistrictsComponent
  },
  {
    path:"carsBrands",
    component:CarsBrandsComponent
  },
  {
    path:"carsFuelTypes",
    component:CarsFuelTypesComponent
  },
  {
    path:"carsGearTypes",
    component:CarsGearTypesComponent
  },
  {
    path:"carsPushTypes",
    component:CarsPushTypesComponent
  },
  {
    path:"mobilePhonesBrands",
    component:MobilePhonesBrandsComponent
  },
  {
    path:"Login",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
