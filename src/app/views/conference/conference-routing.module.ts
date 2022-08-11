import { ConferenceDetailComponent } from './conference-detail/conference-detail.component';
import { ConferencesInfoComponent } from './conferences-info/conferences-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '',
  data: {title: 'Чуулгануудын тухай', name: 'conferences'},
  component: ConferencesInfoComponent
},
{
  path: ':id',
  data: {title: null},
  component: ConferenceDetailComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferenceRoutingModule { }
