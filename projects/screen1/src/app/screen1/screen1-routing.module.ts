import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1HomeComponent } from './screen1-home/screen1-home.component';

export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: Screen1HomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CALENDAR_ROUTES),
  ],
  exports: [RouterModule],
})
export class Screen1RoutingModule { }
