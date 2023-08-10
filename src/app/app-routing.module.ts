import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { FlightBookingComponent } from './pages/flight-booking/flight-booking.component';
import { FlightViewComponent } from './pages/flight-view/flight-view.component';


const routes: Routes = [{
  path:"login",
  component: LoginComponent,
  pathMatch:"full"
},{
  path:"signup",
  component:SignupComponent,
  pathMatch:"full"
},{
  path:"cdashboard",
  component:CustomerDashboardComponent,
  pathMatch:"full"
},{
  path:"cbooking",
  component:FlightBookingComponent,
  pathMatch:"full"
},{
  path:"cview",
  component:FlightViewComponent,
  pathMatch:"full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
