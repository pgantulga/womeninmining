import { AddArticleComponent } from './components/add-article/add-article.component';
import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    data: {roles: ['admin'], name: 'admin'},
    children: [
      {
        data: {name:'admin'},
        path: 'articles',
        component: AdminArticlesComponent
      },
      {
        path: 'add-article',
        data: {name:'admin'},

        component: AddArticleComponent
      },
      {
        path: 'edit-article/:id',
        data: {name:'admin'},
        component: AddArticleComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
