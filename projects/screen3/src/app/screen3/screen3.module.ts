import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Screen3HomeComponent } from './screen3-home/screen3-home.component';
export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: Screen3HomeComponent,
  }
];

@NgModule({
  declarations: [
    Screen3HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CALENDAR_ROUTES),
  ]
})
export class Screen3Module { }
