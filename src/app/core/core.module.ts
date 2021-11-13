import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [
    LayoutModule
  ]
})
export class CoreModule { }
