interface Kampirna_mestaModel {
    kampirnoMestoId: number;
    naziv: string;
    velikost: string;
    avtokamp: number;
    kategorija: number;
    createdAt: Date;
    updatedAt: Date;
}

export class KampirnoMesto implements Kampirna_mestaModel{

    private _kampirnoMestoId: number;
    private _naziv: string;
    private _velikost: string;
    private _avtokamp: number;
    private _kategorija: number;
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

    get kampirnoMestoId(): number {
      return this._kampirnoMestoId;
    }

    set kampirnoMestoId(value: number) {
      this._kampirnoMestoId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get velikost(): string {
      return this._velikost;
    }

    set velikost(value: string) {
      this._velikost = value;
    }

    get avtokamp(): number {
      return this._avtokamp;
    }

    set avtokamp(value: number) {
      this._avtokamp = value;
    }

    get kategorija(): number {
      return this._kategorija;
    }

    set kategorija(value: number) {
      this._kategorija = value;
    }
}
