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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var navigation_module_1 = require('./navigation.module');
var about_component_1 = require('./About/about.component');
var home_component_1 = require('./Home/home.component');
var _LoginPartial_component_1 = require('./Authenticator/_LoginPartial.component');
var alert_component_1 = require('./Alert/alert.component');
var login_component_1 = require('./Authenticator/login.component');
var register_component_1 = require('./Authenticator/register.component');
var services_1 = require('./Services/services');
var auth_guard_1 = require('./Guards/auth.guard');
var common_1 = require('@angular/common');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, navigation_module_1.NavigationModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, about_component_1.AboutComponent, home_component_1.HomeComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, _LoginPartial_component_1.LoginPartial, alert_component_1.AlertComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
                auth_guard_1.AuthGuard,
                services_1.AlertService,
                services_1.AuthenticationService,
                services_1.UserService,
                http_2.BaseRequestOptions
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map