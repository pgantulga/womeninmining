import { StoryListComponent } from './../views/story/story-list/story-list.component';
import { ArticleListItemComponent } from './components/article-list-item/article-list-item.component';
import { MaterialModule } from './../material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WrapperHeroComponent } from './components/wrapper-hero/wrapper-hero.component';
import { WrapperCardComponent } from './components/wrapper-card/wrapper-card.component';
import { TitleWrapperComponent } from './components/title-wrapper/title-wrapper.component';
import { AccountWrapperComponent } from './components/account-wrapper/account-wrapper.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { ActionDialogComponent } from './components/action-dialog/action-dialog.component';
import { ArticleGridItemComponent } from './components/article-grid-item/article-grid-item.component';
import { ChipTagComponent } from './components/chip-tag/chip-tag.component';
import { MomentPipe } from './moment.pipe';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { MemberListItemComponent } from './components/member-list-item/member-list-item.component';
import { StoryListItemComponent } from './components/story-list-item/story-list-item.component';
import { SnackComponent } from './components/snack/snack.component';
import { CustomFormFieldComponent } from './components/custom-form-field/custom-form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { GdViewComponent } from './components/gd-view/gd-view.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    WrapperHeroComponent,
    WrapperCardComponent,
    TitleWrapperComponent,
    AccountWrapperComponent,
    UserAvatarComponent,
    ActionDialogComponent,
    ArticleGridItemComponent,
    ArticleListItemComponent,
    ChipTagComponent,
    MomentPipe,
    ArticleViewComponent,
    SectionHeaderComponent,
    MemberListItemComponent,
    StoryListItemComponent,
    SnackComponent,
    CustomFormFieldComponent,
    UploadFileComponent,
    GdViewComponent,
    SafePipe,
  ],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, FormsModule,
    ReactiveFormsModule],
  exports: [
    WrapperHeroComponent,
    WrapperCardComponent,
    TitleWrapperComponent,
    AccountWrapperComponent,
    UserAvatarComponent,
    ChipTagComponent,
    ArticleGridItemComponent,
    ArticleListItemComponent,
    MomentPipe,
    ArticleViewComponent,
    SectionHeaderComponent,
    MemberListItemComponent,
    StoryListItemComponent,
    CustomFormFieldComponent,
    UploadFileComponent,
    GdViewComponent,
    SafePipe

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SharedModule { }
