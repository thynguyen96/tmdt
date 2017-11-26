import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HomeComponent} from './component/home/Home.component'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/Login.component';
import { Erorr404Component } from './component/erro/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
    ,
    Erorr404Component
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
      HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
