import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRouterModule } from '../app-router.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    AppRouterModule

    
  ], 
  exports: [
    MatButtonModule,
    MatCardModule, 
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    AppRouterModule
  ]
})
export class MaterialModule { }
