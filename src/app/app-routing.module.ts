import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventsComponent } from './components/events/events.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { AdminForgotComponent } from './components/admin-forgot/admin-forgot.component';
import { UpdatePassComponent } from './components/update-pass/update-pass.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tickets/:id', component: TicketsComponent},
  {path: 'user_profile', component: UserProfileComponent},
  {path: 'admin_profile', component: AdminProfileComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'forgot_password', component: ForgotPassComponent},
  {path: 'admin_forgot', component: AdminForgotComponent},
  {path: 'update_pass', component: UpdatePassComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
