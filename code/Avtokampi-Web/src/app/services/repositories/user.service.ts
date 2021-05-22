import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { Uporabnik as User } from '../../models';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private apiService: ApiService,
        private http: HttpClient,
        private jwtService: JwtService
    ) { }

    populate() {
        const getToken = this.jwtService.getToken();
        if (getToken) {
            const username = this.jwtService.getDecodedTokenUsername(getToken);
            this.apiService.get(`/uporabniki/${username}/username`)
                .subscribe(
                    data => {
                        data.token = getToken;
                        this.setAuth(data);
                    },
                    err => this.purgeAuth()
                );
        } else {
            this.purgeAuth();
        }
    }

    getUser() {
        const getToken = this.jwtService.getToken();
        if (getToken) {
            const username = this.jwtService.getDecodedTokenUsername(getToken);
            this.apiService.get(`/uporabniki/${username}/username`)
                .subscribe(
                    data => {
                        data.token = getToken;
                        return data;
                    },
                    err => this.purgeAuth()
                );
        } else {
            this.purgeAuth();
        }
        return null;
    }

    setAuth(user: User) {
        this.jwtService.saveToken(user.token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    purgeAuth() {
        this.jwtService.destroyToken();
        this.currentUserSubject.next({} as User);
        this.isAuthenticatedSubject.next(false);
    }

    attemptAuth(type, credentials): Observable<User> {
        const route = (type === 'login') ? '/login' : '/register';
        credentials.username = credentials.email;
        return this.apiService.post('/auth' + route, { ...credentials })
            .pipe(map(
                data => {
                    if (route === '/register') {
                        this.attemptAuth('login', { email: credentials.email, password: credentials.geslo })
                            .subscribe(login => login);
                    } else {
                        this.jwtService.saveToken(data.token);
                        this.populate();
                        return this.getUser();
                    }
                }
            ));
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    update(user): Observable<User> {
        return this.apiService
            .put('/uporabniki', { ...user })
            .pipe(map(data => {
                // Update the currentUser observable
                this.currentUserSubject.next(data.user);
                return data.user;
            }));
    }
}
