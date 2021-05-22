import { Injectable } from '@angular/core';
import { Avtokamp, Slika, Cenik, Regija, Drzava } from '../../models';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AvtokampiService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(kamp_id: number): Observable<Avtokamp> {
        return this.apiService.get(`/Avtokampi/${kamp_id}`)
            .pipe(map(data => data));
    }

    public getAll(): Observable<Avtokamp[]> {
        return this.apiService.get('/Avtokampi')
            .pipe(map(data => data));
    }

    public getPaging(page: number, size: number): Observable<Avtokamp[]> {
        return this.apiService.get(`/Avtokampi/Paging?PageNumber=${page}&PageSize=${size}`)
            .pipe(map(data => data));
    }

    public post(item: Avtokamp): Observable<boolean> {
        return this.apiService.post(`/Avtokampi`, item)
            .pipe(map(data => data));
    }

    public delete(kamp_id: number): Observable<boolean> {
        return this.apiService.delete(`/Avtokampi/${kamp_id}`)
            .pipe(map(data => data));
    }

    public put(kamp_id: number): Observable<boolean> {
        return this.apiService.put(`/Avtokampi/${kamp_id}`)
            .pipe(map(data => data));
    }

    public getSlika(kamp_id: number): Observable<Slika> {
        return this.apiService.get(`/Avtokampi/${kamp_id}/slika`)
            .pipe(map(data => data));
    }

    public getSlike(kamp_id: number): Observable<Slika[]> {
        return this.apiService.get(`/Avtokampi/${kamp_id}/slike`)
            .pipe(map(data => data));
    }

    public postSlike(kamp_id: number, items: Slika[]): Observable<boolean> {
        return this.apiService.post(`/Avtokampi/${kamp_id}/slike`, items)
            .pipe(map(data => data));
    }

    public postSlika(kamp_id: number, item: Slika): Observable<boolean> {
        return this.apiService.post(`/Avtokampi/${kamp_id}/slika`, item)
            .pipe(map(data => data));
    }

    public putSlika(slika_id: number): Observable<boolean> {
        return this.apiService.put(`/Avtokampi/${slika_id}/slika`)
            .pipe(map(data => data));
    }

    public deleteSlika(slika_id: number): Observable<boolean> {
        return this.apiService.delete(`/Avtokampi/${slika_id}/slika`)
            .pipe(map(data => data));
    }

    public getCeniki(kamp_id: number): Observable<Cenik[]> {
        return this.apiService.get(`/Avtokampi/${kamp_id}/ceniki`)
            .pipe(map(data => data));
    }

    public getCenik(cenik_id: number): Observable<Cenik> {
        return this.apiService.get(`/Avtokampi/${cenik_id}/cenik`)
            .pipe(map(data => data));
    }

    public putCenik(cenik_id: number, item: Cenik): Observable<boolean> {
        return this.apiService.put(`/Avtokampi/${cenik_id}/cenik`, item)
            .pipe(map(data => data));
    }

    public postCenik(kamp_id: number, item: Cenik): Observable<boolean> {
        return this.apiService.post(`/Avtokampi/${kamp_id}/cenik`, item)
            .pipe(map(data => data));
    }

    public deleteCenik(cenik_id: number): Observable<boolean> {
        return this.apiService.delete(`/Avtokampi/${cenik_id}/cenik`)
            .pipe(map(data => data));
    }

    public getRegije(): Observable<Regija[]> {
        return this.apiService.get('/Avtokampi/regije')
            .pipe(map(data => data));
    }

    public getDrzave(): Observable<Drzava[]> {
        return this.apiService.get('/Avtokampi/drzave')
            .pipe(map(data => data));
    }
}
