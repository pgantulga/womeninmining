import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShellComponent } from './shell/shell.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [ToptoolbarComponent, ShellComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    ScrollingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ToptoolbarComponent,
    ShellComponent
  ]
})
export class LayoutModule { }
