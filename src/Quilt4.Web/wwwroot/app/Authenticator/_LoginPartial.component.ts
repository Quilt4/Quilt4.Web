import { Component } from '@angular/core';

import { AuthService } from '../Services/services';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
    moduleId: module.id,
    selector: 'login-partial',
    templateUrl: './_LoginPartial.template.html'
})

export class LoginPartial {

    private currentUser: User;
    private loggedIn = true;
    private userSubscription;
    private loggedInSubscription;

    constructor(private authService: AuthService, private router: Router,)
    {
        this.userSubscription = this.authService.userChange.subscribe((value) =>
        {
            this.currentUser = value;
            console.log(this.currentUser);
        });
        this.loggedInSubscription = this.authService.isLoggedInChange.subscribe((value) => {
            this.loggedIn = value;
        });
        this.loggedIn = this.authService.isLoggedIn;
        this.getUser();
    }

    public getUser()
    {
        console.log("Searching for user...");
        if (this.currentUser === undefined) {
            console.log("User is not set");
            if (localStorage.getItem('auth_token') !== null) {
                console.log("User found!");
                //this.currentUser = JSON.parse(localStorage.getItem('auth_token'));
                //this.loggedIn = true;
                console.log(this.currentUser);
            } else {
                console.log("Cannot find user");
               // this.loggedIn = false;
                console.log(this.currentUser);
            }
        }
        else {
            console.log("User is already set!");
            console.log(this.currentUser);
        }
    }

    logout(event)
    {
        event.preventDefault();
        console.log("Loggin out...");

        this.currentUser = null;
        this.loggedIn = false;
        this.authService.logout();

        //Reloading HomePage so the not logged user will not see its content.
        //TODO:Try to find another way to hide HomePage. Not by reloading the entire website.
        location.reload();

        console.log("Logged out.");
    }
}