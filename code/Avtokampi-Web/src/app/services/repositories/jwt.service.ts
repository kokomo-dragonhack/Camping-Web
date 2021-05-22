import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    getToken(): string {
        return window.localStorage['jwtToken'];
    }

    saveToken(token: string) {
        window.localStorage['jwtToken'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }

    getDecodedTokenUsername(token: string) {
        const jwtHelper = new JwtHelperService();
        const decoded = jwtHelper.decodeToken(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        return decoded;
    }
}
