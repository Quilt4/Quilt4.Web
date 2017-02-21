import { Component } from '@angular/core';
import { AuthService } from '../Services/services';

@Component({
    moduleId: module.id,
    selector: 'angHome',
    templateUrl: './home.template.html'
})
export class HomeComponent {

    private loggedIn: boolean;
    private loggedInSubscription;

    constructor(private authService: AuthService) {

        this.loggedInSubscription = this.authService.isLoggedInChange.subscribe((value) => {
            this.loggedIn = value;
        });
    }
}
