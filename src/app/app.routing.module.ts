import { NgModule } from '@angular/core';
import { Routes , RouterModule  } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { } from  './component/admin/admin.module'
import { HomeComponent } from './component/home/Home.component';
import { Auth } from './_service/Auth';
import { LoginComponent } from './component/login/Login.component';
import { Erorr404Component } from './component/erro/404.component';

const routes: Routes = [
 {
     path : 'admin',
     loadChildren: './component/admin/admin.module#AdminModule',
     canActivate: [Auth]
 },{
     path: '' ,
     component: HomeComponent
 },{
     path: 'login',
     component: LoginComponent
 },
 {
     path: '**', 
     component: Erorr404Component
 }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
RouterModule
    ],
    providers: [Auth],
})
export class AppRoutingModule { }