import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Authenticator/login.component';
import { RegisterComponent } from './Authenticator/register.component';
import { ManageComponent } from './Manage/manage.component';

import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Manage', component: ManageComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class NavigationModule {

}