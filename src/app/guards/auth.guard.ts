import { inject } from "@angular/core";
import { CanActivateChildFn, CanActivateFn, Router } from "@angular/router";
import { UserService } from "../shared/services/user.service";
import { AuthService } from "../shared/services/auth.service";


export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const router: Router = inject(Router);
    const userSvc = inject(UserService);
    const authSvc = inject(AuthService);

    if (!localStorage.getItem('token')) {
        router.navigateByUrl('/home');
        return false;
    } else {
        if (authSvc.userLoggedComputed()._id === '') {
            userSvc.getUserInfo();
        }
        return true;
    }
};