import { HttpClient, HttpHeaders } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { tap } from "rxjs";
import { LoginInterface } from "../../interfaces/login.interface";
import { User } from "../../interfaces/user.interface";


@Injectable()
export class AuthService {
    userLoggedSignal = signal<User>({ _id: '', email: '', emailVerified: false, img: '', name: '', role: [] });
    userLoggedComputed = computed(() => this.userLoggedSignal());
    logoutSignal = signal<boolean>(false);
    logoutComputed = computed<boolean>(() => this.logoutSignal());
    private http = inject(HttpClient);

    loginUser(formData: LoginInterface) {
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const body = {
            'email': formData.email,
            'password': formData.password
        };
        return this.http.post(`${environment.API_AUTH}/login`, body, { headers: httpHeaders })
            .pipe(
                tap((res: any) => {
                    localStorage.setItem('token', res.token);
                })
            );
    }

    loginGoogle(token: string) {

        return this.http.post(`${environment.API_AUTH}/login-google`, { token })
            .pipe(
                tap((res: any) => {
                    localStorage.setItem('token', res.token);
                })
            );
    }
}