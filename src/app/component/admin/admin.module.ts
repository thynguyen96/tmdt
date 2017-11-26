import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { AdminComponent } from './admin.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    ManagerComponent
    ,
    AdminComponent,
    DetailsComponent
  ],
  imports: [
    AdminRoutingModule
    ,  HttpClientModule,
    CommonModule
  ]

})
export class AdminModule { }
