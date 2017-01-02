import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'

    },
    {
        path: 'backoffice/categories',
        //component: CategoriesComponent,
        //canActivate: [AuthGuard]

    },
    {
        path: 'backoffice/category/:id',
        //component: CategoryEditComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'backoffice/login',
        //component: LoginComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);