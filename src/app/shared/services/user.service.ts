import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { User } from "../../interfaces/user.interface";
import { AuthService } from "./auth.service";
import { ResolveFn } from "@angular/router";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {
    private http = inject(HttpClient);
    private authSvc = inject(AuthService);


    /**
     * Get user info
     * @returns 
     */
    getUserInfo() {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        return this.http.get<User>(`${environment.API_USER}`, { headers })
            .subscribe({
                next: (user: User) => {
                    this.authSvc.userLoggedSignal.set(user);
                }
            });
    }
}


export const userResolve: ResolveFn<any>= () => {return inject(UserService).getUserInfo();};