import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen3HomeComponent } from './screen3-home/screen3-home.component';
import { Screen3RoutingModule } from './screen3-routing.module';

@NgModule({
  declarations: [
    Screen3HomeComponent
  ],
  imports: [
    CommonModule,
    Screen3RoutingModule,
  ]
})
export class Screen3Module { }
