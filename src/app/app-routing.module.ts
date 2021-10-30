import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
