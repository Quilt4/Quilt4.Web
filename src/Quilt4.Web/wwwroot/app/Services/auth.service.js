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
var http_1 = require("@angular/http");
var AppSettings_1 = require("../AppSettings");
require("rxjs/add/operator/map");
var Subject_1 = require("rxjs/Subject");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userChange = new Subject_1.Subject();
        this.isLoggedInChange = new Subject_1.Subject();
        this.isLoggedIn = false;
    }
    //loggedIn() {
    //    return new Promise<boolean>(resolve => {
    //        this.storage.getItem('auth_token');
    //        (data => {
    //            let hasToken = data !== null;
    //            if (hasToken) {
    //                let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': data });
    //                let options = new RequestOptions({ headers: headers });
    //                setTimeout(() => {
    //                    this.http.get(AppSettings.API_URL + 'subject/getmysubject/', options).subscribe(data => {
    //                        console.log("YAY user is actually logged in ...");
    //                        resolve(true);
    //                        this.isLoggedIn = true;
    //                    }, error => {
    //                        if (error.status === 401) {
    //                            console.log("No! user is actually not logged in ...");
    //                            this.storage.removeItem('auth_token');
    //                            (() => {
    //                                this.isLoggedIn = false;
    //                                resolve(false);
    //                            });
    //                        } else {
    //                            console.log("Something went wrong with connection to servers, assume user is logged in, Error: ", error);
    //                            this.isLoggedIn = false;
    //                            resolve(false);
    //                        }
    //                    });
    //                }, 500);
    //            } else {
    //                this.isLoggedIn = false;
    //                resolve(false);
    //            }
    //        }, error => {
    //            this.isLoggedIn = false;
    //            resolve(false);
    //        });
    //    })
    //}
    AuthService.prototype.getUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('auth_token'));
        this.userChange.next(this.currentUser);
        this.isLoggedIn = true;
        this.isLoggedInChange.next(this.isLoggedIn);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //console.log("Posting creds to API... " + "Username: " + username + " Password: " + password);
        return this.http.post(AppSettings_1.AppSettings.API_URL + 'Account/Login', JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (response) {
            console.log("Got response from API!");
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //  localStorage.setItem('auth_token', response.json().token_type + "" + response.json().access_token);
                localStorage.setItem('auth_token', JSON.stringify(user));
                _this.getUser();
                console.log("Auth.service");
            }
        });
    };
    //login(username: string, password: string) {
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    return this.http.post(AppSettings.API_URL + 'Account/Login', JSON.stringify({username, password}), {headers}).subscribe(data => {
    //        if (data.json()) {
    //            localStorage.setItem('auth_token', data.json().token_type + " " + data.json().access_token);
    //            this.isLoggedIn = true;
    //            console.log(data.json().access_token);
    //        }
    //    });
    //}
    //login(user) {
    //    var creds = JSON.stringify({ email: user.email, password: user.password });
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    let options = new RequestOptions({headers:headers});
    //    return new Promise<boolean>((resolve => {
    //        this.http.post(AppSettings.API_URL + 'Account/Login', creds, options).subscribe(data => {
    //                if (data.json()) {
    //                    localStorage.setItem('auth_token', data.json().token_type + " " + data.json().access_token);
    //                    console.log(data.json().access_token);
    //                    this.isLoggedIn = true;
    //                    resolve(this.isLoggedIn);
    //                }
    //            },
    //            error => {
    //                this.isLoggedIn = false;
    //                localStorage.setItem('auth_token', null);
    //                resolve(this.isLoggedIn);
    //            });
    //    }));
    //}
    //getAuthToken() {
    //    return new Promise<string>(resolve => {
    //        localStorage.getItem('auth_token');
    //        (data => {
    //            resolve(<string>data);
    //        }, error => {
    //            resolve(null);
    //        });
    //    });
    //}
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        this.isLoggedIn = false;
        localStorage.setItem('auth_token', null);
        localStorage.removeItem('auth_token');
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map