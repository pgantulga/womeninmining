import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeviewRoutingModule } from './homeview-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeviewRoutingModule
  ]
})
export class HomeviewModule { }
