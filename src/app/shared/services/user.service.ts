import { Injectable, signal } from "@angular/core";


@Injectable()
export class UserService{
    loginUser = signal<boolean>(false);
}