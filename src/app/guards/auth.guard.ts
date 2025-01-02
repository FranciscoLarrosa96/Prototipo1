import { inject } from "@angular/core";
import { CanActivateChildFn, CanActivateFn, Router } from "@angular/router";


export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const router: Router = inject(Router);

    if (!localStorage.getItem('token')) {
        router.navigateByUrl('/home');
        return false;
    } else {
        return true;
    }
};