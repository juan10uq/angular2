import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Routes -> To define routes for our application, create a Routes configuration 
// and then use RouterModule. forRoot(routes) to provide our application with the 
// dependencies necessary to use the router:
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';


const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
];
// path -> specifies the URL this route will handle
// component -> is what ties a given route path to a component that will handle the route
// the optional redirectTo -> is used to redirect a given path to an existing rout

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);