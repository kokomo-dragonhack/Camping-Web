import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import * as fromComponents from './components';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./components/home/home-page.module').then(m => m.HomePageModule),
    },
    {
        path: 'camps',
        loadChildren: () => import('./components/camps/camps.module').then(m => m.CampsModule),
    },
    {
        path: 'maps',
        loadChildren: () => import('./components/maps/maps.module').then(m => m.MapsModule),
    },
    {
        path: 'reservations',
        loadChildren: () => import('./components/reservations/reservations.module').then(m => m.ReservationsModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'user-profile',
        loadChildren: () => import('./components/user-profile/user-profile.module').then(m => m.UserProfileModule),
    },
    {
        path: '**',
        component: fromComponents.PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
