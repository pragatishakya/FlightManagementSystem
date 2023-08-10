import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { FlightBookingComponent } from './pages/flight-booking/flight-booking.component';
import { FlightViewComponent } from './pages/flight-view/flight-view.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


const routes: Routes = [{
  path:"login",
  component: LoginComponent,
  pathMatch:"full"
},{
  path:"signup",
  component:SignupComponent,
  pathMatch:"full"
},{
  path:"custDashboard",
  component:CustomerDashboardComponent,
  pathMatch:"full"
},{
  path:"custBooking",
  component:FlightBookingComponent,
  pathMatch:"full"
},{
  path:"custView",
  component:FlightViewComponent,
  pathMatch:"full"
},{
  path:"adminDashboard",
  component:AdminDashboardComponent,
  pathMatch:"full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
