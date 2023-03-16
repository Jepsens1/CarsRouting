import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { AddcarComponent } from './Components/addcar/addcar.component';
import { CarDetailComponent } from './Components/car-detail/car-detail.component';
import { CarsMasterComponent } from './Components/cars-master/cars-master.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'cars', component: CarsMasterComponent, canActivate: [AuthenticationGuard]},
  {path:'car/:model', component: CarDetailComponent, canActivate: [AuthenticationGuard]},
  {path: 'addcar', component: AddcarComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
