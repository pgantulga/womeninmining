import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      data: { title: 'Нүүр' }

    },
    {
      path: 'about',
      component: AboutUsComponent,
      data: { title: 'Бидний тухай' }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeviewRoutingModule { }
