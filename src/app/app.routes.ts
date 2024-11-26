import { Routes } from '@angular/router';

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
        path : 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(component => component.CartComponent)
    },
    {
        path : 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(component => component.ProfileComponent)
    },
    {
        path : 'login',
        loadComponent: () => import('./pages/login/login.component').then(component => component.LoginComponent)
    },
    {
        path : '**',
        redirectTo : '/home'
    }
];
