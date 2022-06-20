import { RouteService } from './core/services/route.service';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './core/services/auth-guard.service';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    QuillModule.forRoot({
      suppressGlobalRegisterWarning: true
  })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuard,RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
