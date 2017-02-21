import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { RegisterModel } from '../models/RegisterModel';

import { AppSettings } from '../AppSettings';

@Injectable()
export class AccountService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: RegisterModel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify({username:user.username, eMail:user.email, fullName:user.fullname, password:user.password, confirmPassword:user.confirmPassword  });


        return this.http.post(AppSettings.API_URL + 'Account/Register', body, { headers });

    }

    //update(user: RegisterModel) {
    //    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    //}

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('auth_token'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}