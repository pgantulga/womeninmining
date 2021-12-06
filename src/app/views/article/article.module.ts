import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


@NgModule({
  declarations: [ArticlesListComponent, ArticleDetailComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ArticleModule { }
