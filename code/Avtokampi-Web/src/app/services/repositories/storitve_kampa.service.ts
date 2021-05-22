import { Injectable } from '@angular/core';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storitev, KategorijeStoritev } from '../../models';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class StoritveKampaService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(kamp_id: number): Observable<Storitev[]> {
        return this.apiService.get(`/StoritveKampa/${kamp_id}/avtokamp`)
            .pipe(map(data => data));
    }

    public getStoritveAll(): Observable<Storitev[]> {
        return this.apiService.get(`/StoritveKampa`)
            .pipe(map(data => data));
    }

    public getStoritve(kamp_mesto_id: number): Observable<Storitev[]> {
        return this.apiService.get(`/StoritveKampa/${kamp_mesto_id}/KampirnoMesto`)
            .pipe(map(data => data));
    }

    public getStoritev(storitev_id: number): Observable<Storitev> {
        return this.apiService.get(`/StoritveKampa/${storitev_id}`)
            .pipe(map(data => data));
    }

    public getKategorije(): Observable<KategorijeStoritev[]> {
        return this.apiService.get(`/StoritveKampa/kategorije`)
            .pipe(map(data => data));
    }

    public post(kamp_id: number, item: Storitev): Observable<boolean> {
        return this.apiService.post(`/api/StoritveKampa/${kamp_id}`, item)
            .pipe(map(data => data));
    }

    public postStoritevKampMesta(kamp_mesto_id: number, item: Storitev): Observable<boolean> {
        return this.apiService.post(`/StoritveKampa/${kamp_mesto_id}/KampirnoMesto`, item)
            .pipe(map(data => data));
    }

    public put(storitev_id: number, item: Storitev): Observable<boolean> {
        return this.apiService.put(`/StoritveKampa/${storitev_id}`, item)
            .pipe(map(data => data));
    }

    public delete(storitev_id: number): Observable<boolean> {
        return this.apiService.get(`/StoritveKampa/${storitev_id}`)
            .pipe(map(data => data));
    }
}
