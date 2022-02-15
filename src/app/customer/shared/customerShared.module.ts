import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CarouselModule } from 'primeng/carousel';
import { MainSearchResultsComponent } from './components/main-search-results/main-search-results.component';
import { ProductComponent } from '../components/product/product.component';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
import { MainBodyComponent } from '../components/main-body/main-body.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainSliderComponent,
    CategoriesListComponent,
    MainSearchResultsComponent,
    ProductComponent,
    FilterComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainSliderComponent,
    CategoriesListComponent,
    MainSearchResultsComponent,
    ProductComponent,
    FilterComponentComponent
  ]
})
export class customerSharedModule { }
