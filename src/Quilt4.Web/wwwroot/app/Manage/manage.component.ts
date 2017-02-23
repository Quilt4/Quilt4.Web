import { Component } from '@angular/core';
import { AuthService } from '../Services/services';

@Component({
    moduleId: module.id,
    selector: 'angManage',
    templateUrl: './manage.template.html'
})
export class ManageComponent {

    private loggedIn: boolean;
    private loggedInSubscription;

    constructor(private authService: AuthService) {

        //this.loggedInSubscription = this.authService.isLoggedInChange.subscribe((value) => {
        //    this.loggedIn = value;
        //});
        this.loggedIn = this.authService.isLoggedIn;
    }
}
