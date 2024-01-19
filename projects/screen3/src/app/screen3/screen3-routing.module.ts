import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen3HomeComponent } from './screen3-home/screen3-home.component';

export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: Screen3HomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CALENDAR_ROUTES),
  ],
  exports: [RouterModule],
})
export class Screen3RoutingModule { }
