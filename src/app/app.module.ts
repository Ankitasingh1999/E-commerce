import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationService} from '../app/service/registration.service';
import {LoginService} from '../app/service/login.service';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { View1Component } from './view1/view1.component';
import { SignupComponent } from './signup/signup.component';

import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    View1Component,
    SignupComponent,
    AboutComponent,
    LoginComponent,
    CartComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  
    ReactiveFormsModule

  ],
  providers: [RegistrationService,
  LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
