import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {RegisterModel} from '../models/RegisterModel';

import { AlertService, UserService } from '../Services/services';

@Component({
    moduleId: module.id,
    templateUrl: './register.template.html'
})

export class RegisterComponent implements OnInit {
    public user: RegisterModel; 
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.user = new RegisterModel("", "", "", "", "");
    }

    register() {
        console.log("Registering...");
            this.loading = true;
            this.userService.create(this.user)
                .subscribe(
                data => {
                    console.log("Registered! Woohoo!");
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/']);
                    alert("Registration went successful! You can log in now by going on the login page.");
                },
                error => {
                    alert(error.text());
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}