import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { User } from "../../interfaces/user.interface";
import { AuthService } from "../../shared/services/auth.service";
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
        return this.http.get<User>(`${environment.API_USER}`, { headers, observe: 'response' })
            .subscribe({
                next: (response: HttpResponse<User>) => {
                    this.authSvc.userLoggedSignal.set(response.body as User);
                    // Obtener el nuevo token desde los encabezados de la respuesta
                    const newToken = response.headers.get('x-new-token');
                    if (newToken) {
                        localStorage.setItem('token', newToken);
                    }
                }
            });
    }
}


export const userResolve: ResolveFn<any> = () => { return inject(UserService).getUserInfo(); };