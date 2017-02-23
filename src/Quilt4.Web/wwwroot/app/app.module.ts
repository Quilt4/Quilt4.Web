import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation.module';
import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';
import { ManageComponent } from './Manage/manage.component';

import { LoginPartial } from './Authenticator/_LoginPartial.component';

import { AlertComponent } from './Alert/alert.component';
import { LoginComponent } from './Authenticator/login.component';
import { RegisterComponent } from './Authenticator/register.component';
import { AlertService, AuthService, AccountService } from './Services/services';
import { AuthGuard } from './Guards/auth.guard';

import { EqualValidator } from './Authenticator/equal-validator.directive';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, FormsModule, NavigationModule, HttpModule],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        LoginPartial,
        AlertComponent,
        ManageComponent,
        EqualValidator],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        AuthGuard,
        AlertService,
        AuthService,
        AccountService,

        BaseRequestOptions
    ]
})
export class AppModule { }
