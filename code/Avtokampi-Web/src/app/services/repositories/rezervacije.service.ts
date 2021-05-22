import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from './../classes/apiresponse.class';
import { ApiService } from './api.service';
import { Rezervacija, VrstaKampiranja, StatusRezervacije } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class RezervacijeService {

    constructor(
        private apiService: ApiService
    ) { }

    public getUserReservations(user_id: number): Observable<Rezervacija[]> {
        return this.apiService.get(`/Rezervacije/${user_id}/uporabnik`)
            .pipe(map(data => data));
    }

    public get(rez_id: number): Observable<Rezervacija> {
        return this.apiService.get(`/Rezervacije/${rez_id}`)
            .pipe(map(data => data));
    }

    public put(rez_id: number, item: Rezervacija): Observable<boolean> {
        return this.apiService.put(`/Rezervacije/${rez_id}`, item)
            .pipe(map(data => data));
    }

    public delete(rez_id: number): Observable<boolean> {
        return this.apiService.delete(`/Rezervacije/${rez_id}`)
            .pipe(map(data => data));
    }

    public post(item: Rezervacija): Observable<boolean> {
        return this.apiService.post(`/Rezervacije`, item)
            .pipe(map(data => data));
    }

    public getVrsteKampiranja(): Observable<VrstaKampiranja[]> {
        return this.apiService.get(`/Rezervacije/vrsta_kampiranja`)
            .pipe(map(data => data));
    }

    public getStatus(): Observable<StatusRezervacije[]> {
        return this.apiService.get(`/Rezervacije/status`)
            .pipe(map(data => data));
    }
}
