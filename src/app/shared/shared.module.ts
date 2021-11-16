import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WrapperHeroComponent } from './components/wrapper-hero/wrapper-hero.component';
import { WrapperCardComponent } from './components/wrapper-card/wrapper-card.component';



@NgModule({
  declarations: [WrapperHeroComponent, WrapperCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [WrapperHeroComponent, WrapperCardComponent]
})
export class SharedModule { }
