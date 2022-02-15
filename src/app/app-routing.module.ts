import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './core/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './core/user-layout/user-layout.component';


const routes: Routes = [
  {
    path:"Login",
    loadChildren: () => import("./core/auth/auth.module").then((m) => m.AuthModule)
  },
  { 
    path:"Admin",
    component: AdminLayoutComponent, 
    loadChildren: () => import("./core/admin-layout/admin-layout.module").then((m) => m.AdminLayoutModule)

  },
  { 
    path:"",
    component: UserLayoutComponent, 
    loadChildren: () => import("./core/user-layout/user-layout.module").then((m) => m.UserLayoutModule)

  },
  
  {
    path:"**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 