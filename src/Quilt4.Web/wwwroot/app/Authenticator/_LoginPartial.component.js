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
var core_1 = require('@angular/core');
var services_1 = require('../Services/services');
var LoginPartial = (function () {
    function LoginPartial(authService) {
        var _this = this;
        this.authService = authService;
        this.loggedIn = true;
        this.userSubscription = this.authService.userChange.subscribe(function (value) {
            _this.currentUser = value;
            console.log(_this.currentUser);
        });
        this.loggedInSubscription = this.authService.isLoggedInChange.subscribe(function (value) {
            _this.loggedIn = value;
        });
        this.loggedIn = this.authService.isLoggedIn;
        this.getUser();
    }
    LoginPartial.prototype.getUser = function () {
        console.log("Searching for user...");
        if (this.currentUser === undefined) {
            console.log("User is not set");
            if (localStorage.getItem('auth_token') !== null) {
                console.log("User found!");
                //this.currentUser = JSON.parse(localStorage.getItem('auth_token'));
                //this.loggedIn = true;
                console.log(this.currentUser);
            }
            else {
                console.log("Cannot find user");
                // this.loggedIn = false;
                console.log(this.currentUser);
            }
        }
        else {
            console.log("User is already set!");
            console.log(this.currentUser);
        }
    };
    LoginPartial.prototype.logout = function (event) {
        event.preventDefault();
        console.log("Loggin out...");
        this.currentUser = null;
        this.loggedIn = false;
        this.authService.logout();
        console.log("Logged out.");
    };
    LoginPartial = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-partial',
            templateUrl: './_LoginPartial.template.html'
        }), 
        __metadata('design:paramtypes', [services_1.AuthService])
    ], LoginPartial);
    return LoginPartial;
}());
exports.LoginPartial = LoginPartial;
//# sourceMappingURL=_LoginPartial.component.js.map