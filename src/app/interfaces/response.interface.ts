export interface ResponseInterface {
    token: string;
    user: {
        email: string;
        emailVerified: boolean;
        id: string;
        name: string;
        role: string[];
    };
}

export interface ResponseInterfaceGoogle {
    clientId: string;
    client_id: string;
    credential: string;
    select_by: string;
}