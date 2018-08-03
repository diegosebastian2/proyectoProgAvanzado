import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule, routableHomeComponents } from './home/home-routing.module';
import { RegisterRoutingModule, routableRegisterComponents } from './register/register-routing.module';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule, RegisterRoutingModule],
  exports: [RouterModule],
  declarations: [
    routableHomeComponents
  ]
})
export class AppRoutingModule { }
