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
var router_1 = require('@angular/router');
var RegisterModel_1 = require('../models/RegisterModel');
var services_1 = require('../Services/services');
var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new RegisterModel_1.RegisterModel("", "", "", "", "");
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log("Registering...");
        this.loading = true;
        this.userService.create(this.user)
            .subscribe(function (data) {
            console.log("Registered! Woohoo!");
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/']);
            alert("Registration went successful! You can log in now by going on the login page.");
        }, function (error) {
            alert(error.text());
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './register.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, services_1.UserService, services_1.AlertService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map