import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ShellComponent, ToptoolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [ShellComponent]
})
export class SharedModule { }
