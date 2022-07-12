import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RemisionesComponent } from './principal/remisiones/remisiones.component';
import { ListRemiComponent } from './principal/list-remi/list-remi.component';

const routes: Routes=[
  { path: '', component: RemisionesComponent , pathMatch: 'full' },
  { path: 'lista', component: ListRemiComponent  },
  { path: '**', redirectTo:''}


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
 
 
})
export class AppRouterModule { }
