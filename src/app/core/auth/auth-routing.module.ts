import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordCodeConfirmationComponent } from './reset-password-code-confirmation/reset-password-code-confirmation.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  }, {
    path:"resetPassword",
    component: ResetPasswordComponent
  },{
    path:"resetPasswordCodeConfirmation",
    component: ResetPasswordCodeConfirmationComponent
  },{
    path:"ChangePassword",
    component: ChangePasswordComponent
  },
  {
    path:"register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
