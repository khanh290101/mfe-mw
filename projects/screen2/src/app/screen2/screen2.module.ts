import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Screen2HomeComponent } from './screen2-home/screen2-home.component';
export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: Screen2HomeComponent,
  }
];

@NgModule({
  declarations: [
    Screen2HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CALENDAR_ROUTES),
  ]
})
export class Screen2Module { }
