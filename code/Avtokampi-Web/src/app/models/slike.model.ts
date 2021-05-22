interface SlikeModel {
    slikaId: number;
    slika: Blob;
    avtokamp: number;
    createdAt: Date;
    updated: Date;
}

export class Slika implements SlikeModel {
    private _slikaId: number;
    private _slika: Blob;
    private _avtokamp: number;
    private _createdAt: Date;
    private _updated: Date;


    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get updated(): Date {
        return this._updated;
    }

    set updated(value: Date) {
        this._updated = value;
    }

    get slikaId(): number {
        return this._slikaId;
    }

    set slikaId(value: number) {
        this._slikaId = value;
    }

    get slika(): Blob {
        return this._slika;
    }

    set slika(value: Blob) {
        this._slika = value;
    }

    get avtokamp(): number {
        return this._avtokamp;
    }

    set avtokamp(value: number) {
        this._avtokamp = value;
    }
}
