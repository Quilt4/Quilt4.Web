import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation.module';
import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, FormsModule, NavigationModule],
    declarations: [AppComponent, AboutComponent, HomeComponent],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
