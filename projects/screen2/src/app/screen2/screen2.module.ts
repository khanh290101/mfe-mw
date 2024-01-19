import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen2HomeComponent } from './screen2-home/screen2-home.component';
import { Screen2RoutingModule } from './screen2-routing.module';

@NgModule({
  declarations: [
    Screen2HomeComponent
  ],
  imports: [
    CommonModule,
    Screen2RoutingModule,
  ]
})
export class Screen2Module { }
