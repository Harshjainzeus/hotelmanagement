import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {LoginComponent} from './login/login.component';
import{DashboardComponent} from './mainpage/dashboard/dashboard.component';
import{RegisterFamilyComponent} from './mainpage/register-family/register-family.component';
import{SidenavComponent} from './mainpage/sidenav/sidenav.component';
// import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {component:LoginComponent,path:'login'},
  {path:'mainpage',children:[
    {path:'sidenav',component:SidenavComponent},
    {path:'registerFamily',component:RegisterFamilyComponent},
    {path:'dashboard',component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
