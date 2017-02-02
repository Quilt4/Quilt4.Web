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
var services_1 = require('../Services/services');
var LoginComponent = (function () {
    function LoginComponent(route, router, authservice, alertService) {
        this.route = route;
        this.router = router;
        this.authservice = authservice;
        this.alertService = alertService;
        this.loading = false;
    }
    //ngOnInit() {
    //    // reset login status
    //    this.authservice.logout();
    //    // get return url from route parameters or default to '/'
    //    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //}
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        console.log("Logging in...");
        this.loading = true;
        this.authservice.login(user).then(function (data) {
            if (data) {
                _this.router.navigateByUrl(_this.returnUrl);
            }
            else {
                var alert_1 = _this.alertService.error("You entered wrong login or password");
            }
        }),
            function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            };
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './login.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, services_1.AuthService, services_1.AlertService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map