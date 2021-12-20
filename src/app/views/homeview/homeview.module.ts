import { MaterialModule } from './../../material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeviewRoutingModule } from './homeview-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutUsComponent } from './about-us/about-us.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [HomeComponent, AboutUsComponent, BoardComponent],
  imports: [
    CommonModule,
    HomeviewRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class HomeviewModule { }
