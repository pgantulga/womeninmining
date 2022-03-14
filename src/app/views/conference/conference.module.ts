import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferenceRoutingModule } from './conference-routing.module';
import { ConferencesInfoComponent } from './conferences-info/conferences-info.component';
import { ConferenceDetailComponent } from './conference-detail/conference-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ConferencesInfoComponent, ConferenceDetailComponent],
  imports: [
    CommonModule,
    ConferenceRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class ConferenceModule { }
