import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1HomeComponent } from './screen1-home/screen1-home.component';
import { RouterModule, Routes } from '@angular/router';

export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: Screen1HomeComponent,
  }
];

@NgModule({
  declarations: [
    Screen1HomeComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CALENDAR_ROUTES),
  ]
})
export class Screen1Module { }
