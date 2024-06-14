import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(component => component.HomeComponent)
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./components/product/product.component').then(component => component.ProductComponent)
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path : '**',
        redirectTo : '/home'
    }
];
