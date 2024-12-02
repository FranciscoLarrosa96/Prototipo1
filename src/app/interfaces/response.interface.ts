import { User } from "./user.interface";

export interface ResponseInterface {
    token: string;
    user: User;
}

export interface ResponseInterfaceGoogle {
    clientId: string;
    client_id: string;
    credential: string;
    select_by: string;
}