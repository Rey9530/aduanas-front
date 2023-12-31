import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { IndexComponent } from './index/index.component';
 
const routes: Routes = [ 
  {
    path: "",
    pathMatch: "full",
    redirectTo: "index",
  },  
  {
    path: "index",
    component: IndexComponent
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting { }