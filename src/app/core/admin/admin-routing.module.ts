import { AddArticleComponent } from './components/add-article/add-article.component';
import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'articles',
    component: AdminArticlesComponent
  },
  {
    path: 'add-article',
    component: AddArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
