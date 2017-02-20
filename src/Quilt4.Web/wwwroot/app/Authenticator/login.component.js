"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var User_1 = require("../models/User");
var services_1 = require("../Services/services");
var LoginComponent = (function () {
    function LoginComponent(route, router, authservice, alertService) {
        this.route = route;
        this.router = router;
        this.authservice = authservice;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.model = new User_1.User("", "", "", "");
        //this.user = new User;
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
    LoginComponent.prototype.login = function () {
        var _this = this;
        //console.log(this.username);
        console.log("Logging in...");
        this.loading = true;
        this.authservice.login(this.model.username, this.model.password).subscribe(function (data) {
            console.log("Logged In!");
            _this.router.navigateByUrl('/');
        }, function (error) {
            console.log("Login failed.");
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.onLogin = function () { this.submitted = true; };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './login.template.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        services_1.AuthService,
        services_1.AlertService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map