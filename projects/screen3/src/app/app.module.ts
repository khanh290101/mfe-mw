import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'screen3',
    pathMatch: 'full'
  },
  {
    path: 'screen3',
    loadChildren: () => import('./screen3/screen3.module').then(m => m.Screen3Module),
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
