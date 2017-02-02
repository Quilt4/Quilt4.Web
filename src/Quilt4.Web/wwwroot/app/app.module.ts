import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation.module';
import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';

import { LoginPartial } from './Authenticator/_LoginPartial.component';

import { AlertComponent } from './Alert/alert.component';
import { LoginComponent } from './Authenticator/login.component';
import { RegisterComponent } from './Authenticator/register.component';
import { AlertService, AuthService, UserService } from './Services/services';
import { AuthGuard } from './Guards/auth.guard';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, FormsModule, NavigationModule, HttpModule],
    declarations: [AppComponent, AboutComponent, HomeComponent, LoginComponent, RegisterComponent, LoginPartial, AlertComponent],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        AuthGuard,
        AlertService,
        AuthService,
        UserService,

        BaseRequestOptions
    ]
})
export class AppModule { }
