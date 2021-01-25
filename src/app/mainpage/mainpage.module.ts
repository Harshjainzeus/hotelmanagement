import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterFamilyComponent } from './register-family/register-family.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import{MainPageRoutingModule} from './mainpage-routing.module';

// import { SidenavComponent } from './sidenav/sidenav.component';
@NgModule({
  declarations: [DashboardComponent, RegisterFamilyComponent, SidenavComponent,],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ],
  exports:[
    DashboardComponent, RegisterFamilyComponent
  ]
})
export class MainpageModule { }
