import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { adminSharedModule } from 'src/app/admin/shared/adminShared.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    adminSharedModule
  ]
})
export class AdminLayoutModule { }
