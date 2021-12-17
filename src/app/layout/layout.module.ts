import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShellComponent } from './shell/shell.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    ToptoolbarComponent,
    ShellComponent,
    FooterComponent,
    NavBarComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    ScrollingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ToptoolbarComponent,
    ShellComponent,
    FooterComponent,
    NavBarComponent,
    SidenavComponent
  ],
})
export class LayoutModule {}
