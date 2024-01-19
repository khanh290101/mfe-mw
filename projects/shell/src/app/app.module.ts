import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShellHomeComponent } from './shell-home/shell-home.component';
import { LoadFragmentsComponent } from './mfe/load-fragments/load-fragments.component';
import { MfeServiceService } from './mfe/mfe-service.service';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellHomeComponent,
    LandingPageComponent,
    LoadFragmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //cấu hình động các route đến các micro
    {
      provide: APP_INITIALIZER,
      useFactory: (mfeService: MfeServiceService) => () =>
        mfeService.init(),
      deps: [MfeServiceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
