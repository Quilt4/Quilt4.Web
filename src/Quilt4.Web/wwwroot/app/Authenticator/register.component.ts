import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../Services/services';

@Component({
    moduleId: module.id,
    templateUrl: './register.template.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        if ((this.model.password == this.model.confirmPassword) && this.model.password != "") {
            this.loading = true;
            this.userService.create(this.model)
                .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        } else { this.alertService.error("Password is not correct!") }
    }
}