import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'screen2',
    pathMatch: 'full'
  },
  {
    path: 'screen2',
    loadChildren: () => import('./screen2/screen2.module').then(m => m.Screen2Module),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
