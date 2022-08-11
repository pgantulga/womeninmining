import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseInfoComponent } from './course-info/course-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseDetailComponent } from './course-detail/course-detail.component';


@NgModule({
  declarations: [CourseInfoComponent, CourseDetailComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class CourseModule { }
