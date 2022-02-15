import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordCodeConfirmationComponent } from './reset-password-code-confirmation/reset-password-code-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from 'src/app/admin/AddDialogs/Categories/add-category/add-category.component';
import { customerSharedModule } from 'src/app/customer/shared/customerShared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ResetPasswordCodeConfirmationComponent,
    AddCategoryComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    customerSharedModule

  ]
  // ,
  // entryComponents:[ResetPasswordComponent]
})
export class AuthModule { }
