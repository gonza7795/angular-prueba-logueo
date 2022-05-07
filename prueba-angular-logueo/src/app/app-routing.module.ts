import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
//import { RoleGuard } from './guards/role.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'private', component: PrivateComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
