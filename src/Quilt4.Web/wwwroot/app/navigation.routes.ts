import { Routes } from '@angular/router';

import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];


