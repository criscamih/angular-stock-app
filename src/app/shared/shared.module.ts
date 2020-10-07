import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
