import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'about',
      component: AboutUsComponent,
      data: { title: 'Бидний тухай', name: 'about' }
    },
    {
      path: 'board',
      component: BoardComponent,
      data: { title: 'Зөвлөл', name: 'board'}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeviewRoutingModule { }
