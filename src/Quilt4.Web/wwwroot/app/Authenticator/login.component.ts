import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User';

import { AlertService, AuthService } from '../Services/services';

@Component({
    moduleId: module.id,
    templateUrl: './login.template.html'
})
export class LoginComponent {

    model: any = {}
    public user: User;
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authservice: AuthService,
        private alertService: AlertService) {

        this.model = {};
        this.user = new User;
    }

    //ngOnInit() {
    //    // reset login status
    //    this.authservice.logout();

    //    // get return url from route parameters or default to '/'
    //    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //}

    //    login(user: User) {
    //        console.log("Logging in...");
    //        this.loading = true;
    //        this.authservice.login(user).then(data => {
    //                if (data) {
    //                    this.router.navigateByUrl(this.returnUrl);
    //                } else {
    //                    let alert = this.alertService.error("You entered wrong login or password");
    //                }
    //            }),
    //            error => {
    //                this.alertService.error(error);
    //                this.loading = false;
    //            };
    //    }

    //@Input() username: string;
    //@Input() password: string;
    login() {
        //console.log(this.username);
        console.log("Logging in...");
        this.loading = true;
        this.authservice.login(this.user.username, this.user.password);
        //.subscribe(
        //data => {
        //    //this.router.navigate([this.returnUrl]);
        //    console.log("Logged In!");
        //},
        //error => {
        //    this.alertService.error(error);
        //    this.loading = false;
        //});
    }
}