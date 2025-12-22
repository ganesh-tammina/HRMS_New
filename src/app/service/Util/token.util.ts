import { jwtDecode } from 'jwt-decode';

export interface TokenPayload {
    id: number;
    username: string;
    role: string;
}

export function decodeToken(token: string): TokenPayload {
    return jwtDecode(token);
}