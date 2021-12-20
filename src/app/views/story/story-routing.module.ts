import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryListComponent } from './story-list/story-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '',
  component: StoryListComponent
},
{
  path: ':id',
  data: {title:null},
  component: StoryDetailComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
