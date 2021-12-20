import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';


@NgModule({
  declarations: [StoryListComponent, StoryDetailComponent],
  imports: [
    CommonModule,
    StoryRoutingModule
  ]
})
export class StoryModule { }
