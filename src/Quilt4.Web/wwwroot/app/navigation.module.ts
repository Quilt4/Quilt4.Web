import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './navigation.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [NavigationComponent],
    bootstrap: [NavigationComponent]
})
export class NavigationModule { }
