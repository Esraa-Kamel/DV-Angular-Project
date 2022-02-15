import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './core/admin-layout/admin-layout.component';
import { adminSharedModule } from './admin/shared/adminShared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesComponent } from './admin/cities/cities.component';
import { DistrictsComponent } from './admin/districts/districts.component';
import { CarsBrandsComponent } from './admin/Cars Ads/cars-brands/cars-brands.component';
import { CarsFuelTypesComponent } from './admin/Cars Ads/cars-fuel-types/cars-fuel-types.component';
import { CarsGearTypesComponent } from './admin/Cars Ads/cars-gear-types/cars-gear-types.component';
import { CarsPushTypesComponent } from './admin/Cars Ads/cars-push-types/cars-push-types.component';
import { MobilePhonesBrandsComponent } from './admin/Mobile Phones Ads/mobile-phones-brands/mobile-phones-brands.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { UserLayoutComponent } from './core/user-layout/user-layout.component';
import { customerSharedModule } from './customer/shared/customerShared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MainCategoriesComponent } from './admin/main-categories/main-categories.component';
import { AddMainCategoryComponent } from './admin/AddDialogs/MainCategories/add-main-category/add-main-category.component';
import { AddAdsComponent } from './customer/components/add-ads/add-ads.component';
import { MainBodyComponent } from './customer/components/main-body/main-body.component';
import { MainSearchResultComponent } from './customer/components/main-search-result/main-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CategoriesComponent,
    CitiesComponent,
    DistrictsComponent,
    CarsBrandsComponent,
    CarsFuelTypesComponent,
    CarsGearTypesComponent,
    CarsPushTypesComponent,
    MobilePhonesBrandsComponent,
    UserLayoutComponent,
    MainCategoriesComponent,
    AddMainCategoryComponent,
    AddAdsComponent,
    MainBodyComponent,
    MainSearchResultComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    adminSharedModule,
    customerSharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
