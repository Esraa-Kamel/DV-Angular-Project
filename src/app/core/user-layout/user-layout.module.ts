import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { RouterModule } from '@angular/router';
import { customerSharedModule } from 'src/app/customer/shared/customerShared.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    customerSharedModule,
    RouterModule
  ]
})
export class UserLayoutModule { }
