import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'screen1',
    pathMatch: 'full'
  },
  {
    path: 'screen1',
    loadChildren: () => import('./screen1/screen1.module').then(m => m.Screen1Module),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
