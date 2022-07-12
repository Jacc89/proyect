import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { ApiComponent } from './api/api.component';
import { AppRouterModule } from '../app-router.module';



@NgModule({
  declarations: [
    MenuComponent,
    ApiComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class CompartidoModule { }
