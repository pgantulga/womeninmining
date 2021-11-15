import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShellComponent } from './shell/shell.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToptoolbarComponent, ShellComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    ToptoolbarComponent,
    ShellComponent
  ]
})
export class LayoutModule { }
