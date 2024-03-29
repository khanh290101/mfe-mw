import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen2HomeComponent } from './screen2-home/screen2-home.component';

export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: Screen2HomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CALENDAR_ROUTES),
  ],
  exports: [RouterModule],
})
export class Screen2RoutingModule { }
