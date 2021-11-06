import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';



@NgModule({
  declarations: [ShellComponent, ToptoolbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ShellComponent]
})
export class SharedModule { }
