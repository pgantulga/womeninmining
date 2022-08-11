import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    data: {title: 'Танилцуулга', name: 'courses'},
    component: CourseInfoComponent
  },
  {
    path: 'contents',
    data: {title: 'Сургалтын агуулга'},
    component: CourseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
