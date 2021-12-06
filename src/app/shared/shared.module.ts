import { ArticleListItemComponent } from './components/article-list-item/article-list-item.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
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
  ],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
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
    ArticleViewComponent
  ],
})
export class SharedModule {}
