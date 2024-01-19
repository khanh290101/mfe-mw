import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellHomeComponent } from './shell-home/shell-home.component';

export const  routes: Routes = [
  //cấu hình tĩnh route đến các micro
  // {
  //   path: 'screen1',
  //   loadChildren: () => import('screen1/Screen1Module').then(m => m.Screen1Module)
  // },
  // {
  //   path: 'screen2',
  //   loadChildren: () => import('screen2/Screen2Module').then(m => m.Screen2Module)
  // },
  // {
  //   path: 'screen3',
  //   loadChildren: () => import('screen3/Screen3Module').then(m => m.Screen3Module)
  // },
  {
    path: 'home',
    component: ShellHomeComponent
  },
  {
    path: '',
    redirectTo: 'LandingPageComponent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
