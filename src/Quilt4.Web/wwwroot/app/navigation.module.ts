import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './navigation.routes';
import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';
import { NavigationComponent } from './navigation.component';

import {APP_BASE_HREF} from '@angular/common';

@NgModule({
    imports: [BrowserModule,FormsModule, RouterModule.forRoot(routes)],
    declarations: [AboutComponent, HomeComponent, NavigationComponent],
    bootstrap: [NavigationComponent],
    providers: [{ provide: APP_BASE_HREF, useValue :'/'}]
})
export class NavigationModule { }
