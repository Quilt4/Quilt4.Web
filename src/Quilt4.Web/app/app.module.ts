import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'Home', component: AppComponent },
    { path: 'Login', component: AppComponent },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
