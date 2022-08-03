import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminStoriesComponent } from './components/admin-stories/admin-stories.component';
import { AddStoryComponent } from './components/add-story/add-story.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminArticlesComponent,
    AddArticleComponent,
    AdminStoriesComponent,
    AddStoryComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    SharedModule
  ],
})
export class AdminModule {}
