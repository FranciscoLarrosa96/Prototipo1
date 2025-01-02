import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { userResolve } from './shared/services/user.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(component => component.HomeComponent)
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./pages/product/product.component').then(component => component.ProductComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(component => component.CartComponent)
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        loadComponent: () => import('./pages/profile/profile').then(component => component.ProfileComponent),
        resolve: {
            userLogged : userResolve
        }
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then(component => component.RegisterComponent)
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
