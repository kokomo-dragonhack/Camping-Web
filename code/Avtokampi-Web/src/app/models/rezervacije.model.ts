interface RezervacijeMtrajanjeOdel {
    rezervacijaId: number;
    trajanjeOd: Date;
    trajanjeDo: Date;
    uporabnik: number;
    avtokamp: number;
    kampirnoMesto: number;
    vrstaKampiranja: number;
    statusRezervacije: number;
    createdAt: Date;
    updatedAt: Date;
}

export class Rezervacija implements RezervacijeMtrajanjeOdel {
    private _rezervacijaId: number;
    private _trajanjeOd: Date;
    private _trajanjeDo: Date;
    private _uporabnik: number;
    private _avtokamp: number;
    private _kampirnoMesto: number;
    private _vrstaKampiranja: number;
    private _statusRezervacije: number;
    private _createdAt: Date;
    private _updatedAt: Date;


    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updatedAt(value: Date) {
        this._updatedAt = value;
    }

    get rezervacijaId(): number {
        return this._rezervacijaId;
    }

    set rezervacijaId(value: number) {
        this._rezervacijaId = value;
    }

    get trajanjeOd(): Date {
        return this._trajanjeOd;
    }

    set trajanjeOd(value: Date) {
        this._trajanjeOd = value;
    }

    get trajanjeDo(): Date {
        return this._trajanjeDo;
    }

    set trajanjeDo(value: Date) {
        this._trajanjeDo = value;
    }

    get uporabnik(): number {
        return this._uporabnik;
    }

    set uporabnik(value: number) {
        this._uporabnik = value;
    }

    get avtokamp(): number {
        return this._avtokamp;
    }

    set avtokamp(value: number) {
        this._avtokamp = value;
    }

    get kampirnoMesto(): number {
        return this._kampirnoMesto;
    }

    set kampirnoMesto(value: number) {
        this._kampirnoMesto = value;
    }

    get vrstaKampiranja(): number {
        return this._vrstaKampiranja;
    }

    set vrstaKampiranja(value: number) {
        this._vrstaKampiranja = value;
    }

    get statusRezervacije(): number {
        return this._statusRezervacije;
    }

    set statusRezervacije(value: number) {
        this._statusRezervacije = value;
    }
}
