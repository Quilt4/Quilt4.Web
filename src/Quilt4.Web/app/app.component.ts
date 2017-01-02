﻿import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">Quilt4.Web</a>
        </div>


        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>

        </div>
    </div>
    </div>


    <div class="container body-content">
        <router-outlet></router-outlet>
        <hr/>
        <footer>
            <p>&copy; 2016 - Quilt4.Web</p>
        </footer>
    </div>`
})
export class AppComponent { }
