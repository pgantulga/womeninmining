import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesListComponent
  },
  {
    path: ':id',
    data: { title: null },
    component: ArticleDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
