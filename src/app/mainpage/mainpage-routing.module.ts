import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterFamilyComponent} from './register-family/register-family.component';


const routes: Routes = [
  {path:'dashboardside',component:DashboardComponent },
  {path:'register' ,component:RegisterFamilyComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainPageRoutingModule { }
  