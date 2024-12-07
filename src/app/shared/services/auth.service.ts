import { HttpClient, HttpHeaders } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { tap } from "rxjs";
import { LoginInterface } from "../../interfaces/login.interface";
import { User } from "../../interfaces/user.interface";
import { ResponseInterface } from "../../interfaces/response.interface";


@Injectable(
    { providedIn: 'root' }
)
export class AuthService {
    userLoggedSignal = signal<User>({ _id: '', email: '', emailVerified: false, img: '', name: '', role: [] });
    userLoggedComputed = computed(() => this.userLoggedSignal());
    private http = inject(HttpClient);

    loginUser(formData: LoginInterface) {
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const body = {
            'email': formData.email,
            'password': formData.password
        };
        return this.http.post<ResponseInterface>(`${environment.API_AUTH}/auth/login`, body, { headers: httpHeaders })
            .pipe(
                tap((res: ResponseInterface) => {
                    localStorage.setItem('token', res.token);
                })
            );
    }

    loginGoogle(token: string) {

        return this.http.post<ResponseInterface>(`${environment.API_AUTH}/auth/login-google`, { token })
            .pipe(
                tap((res: ResponseInterface) => {
                    localStorage.setItem('token', res.token);
                })
            );
    }

    reggisterUser(formData: User) {
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post<ResponseInterface>(`${environment.API_AUTH}/auth/register`, formData, { headers: httpHeaders })
            .pipe(
                tap((res: ResponseInterface) => {
                    localStorage.setItem('token', res.token);
                })
            );
    }
}