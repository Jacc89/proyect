import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { RemisionesComponent } from './remisiones/remisiones.component';
import { ListRemiComponent } from './list-remi/list-remi.component';
import { AppRouterModule } from '../app-router.module';



@NgModule({
  declarations: [
    FooterComponent,
    RemisionesComponent,
    ListRemiComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRouterModule
  ],
  exports: [
    FooterComponent,
    AppRouterModule
  ]
})
export class PrincipalModule { }
