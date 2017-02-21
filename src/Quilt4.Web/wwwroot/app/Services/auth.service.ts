import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs/Subject';

import {User} from '../models/User';

@Injectable()
export class AuthService {
    public isLoggedIn: boolean;
    public currentUser: User;
    public userChange = new Subject<User>();
    public isLoggedInChange = new Subject<boolean>();



    constructor(public http: Http) {
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

    public getUser()
    {
        this.currentUser = JSON.parse(localStorage.getItem('auth_token'));
        this.userChange.next(this.currentUser);
        this.isLoggedIn = true;
        this.isLoggedInChange.next(this.isLoggedIn);
    }

    login(username: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //console.log("Posting creds to API... " + "Username: " + username + " Password: " + password);

        return this.http.post(AppSettings.API_URL + 'Account/Login', JSON.stringify({ username: username, password: password }), {headers})
            .map((response: Response) => {
                console.log("Got response from API!")
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                  //  localStorage.setItem('auth_token', response.json().token_type + "" + response.json().access_token);
                    localStorage.setItem('auth_token', JSON.stringify(user));
                    this.getUser();
                    console.log("Auth.service");
                }
            });
    }

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

    logout() {
        // remove user from local storage to log user out
        this.isLoggedIn = false;
        localStorage.setItem('auth_token', null);
        localStorage.removeItem('auth_token');
    }

}