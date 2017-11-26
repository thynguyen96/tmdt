import { NgModule } from '@angular/core';
import { Routes , RouterModule  } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
 {
     path : '',
     component: AdminComponent,
     children: [
         {
             path: 'manager' ,
             component :ManagerComponent
         },
         {
             path: 'details',
             component : DetailsComponent
         }
     ]
 }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
RouterModule
    ]
})
export class AdminRoutingModule { }