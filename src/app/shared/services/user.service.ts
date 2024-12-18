import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { User } from "../../interfaces/user.interface";


@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {
    private http = inject(HttpClient);

    getUserInfo() {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
        return this.http.get<User>(`${environment.API_USER}`, { headers });
    }

}