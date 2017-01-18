import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from './Helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation.module';
import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';

import { LoginPartial } from './Authenticator/_LoginPartial.component';

import { AlertComponent } from './Alert/alert.component';
import { LoginComponent } from './Authenticator/login.component';
import { RegisterComponent } from './Authenticator/register.component';
import { AlertService, AuthenticationService, UserService } from './Services/services';
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
        AuthenticationService,
        UserService,

        fakeBackendProvider,
        MockBackend,
        MockConnection,
        BaseRequestOptions
    ]
})
export class AppModule { }
