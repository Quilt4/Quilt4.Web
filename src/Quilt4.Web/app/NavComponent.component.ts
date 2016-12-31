import { Component } from '@angular/core';

@Component({
    selector: 'angNav',
    template: `
    <h1>Angular Router</h1>
    <nav>
      <a routerLink="/Home" routerLinkActive="active">Home</a>
      <a routerLink="/Login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }