import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation.module';
import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';

import { LoginPartial } from './Authenticator/_LoginPartial.component';

import { LoginComponent } from './Authenticator/login.component';
import {RegisterComponent} from './Authenticator/register.component'
import { AlertService, AuthenticationService, UserService } from './Services/services';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, FormsModule, NavigationModule, HttpModule],
    declarations: [AppComponent, AboutComponent, HomeComponent, LoginComponent, RegisterComponent, LoginPartial],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AlertService,AuthenticationService,UserService]
})
export class AppModule { }
