import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [StoryListComponent, StoryDetailComponent],
  imports: [
    CommonModule,
    StoryRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class StoryModule { }
