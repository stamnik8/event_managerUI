import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from './components/main/main.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './services/user.service';
import { MatInputModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticationService } from './services/authenticate.service';
import { TicketsComponent } from './components/tickets/tickets.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { DatePipe } from '../../node_modules/@angular/common';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { AdminForgotComponent } from './components/admin-forgot/admin-forgot.component';
import { UpdatePassComponent } from './components/update-pass/update-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EventsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    TicketsComponent,
    UserProfileComponent,
    CheckoutComponent,
    AdminProfileComponent,
    ForgotPassComponent,
    AdminForgotComponent,
    UpdatePassComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    ShowHidePasswordModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatBadgeModule,
    MatDialogModule,
    MatStepperModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [UserService, 
              AuthenticationService,
              { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
              DatePipe
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
