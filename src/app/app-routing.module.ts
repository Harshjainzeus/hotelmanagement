import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {component:LoginComponent,path:'login'},
  {component:DashboardComponent,path:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
