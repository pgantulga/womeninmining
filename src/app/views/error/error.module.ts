import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [NotFoundComponent, UnderConstructionComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class ErrorModule { }
