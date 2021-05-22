interface CenikiModel {
    cenikId: number;
    naziv: string;
    cena: number;
    avtokamp: number;
    createdAt: Date;
    updatedAt: Date;
}

export class Cenik implements CenikiModel {

    private _cenikId: number;
    private _naziv: string;
    private _cena: number;
    private _avtokamp: number;
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

    get cenikId(): number {
      return this._cenikId;
    }

    set cenikId(value: number) {
      this._cenikId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get cena(): number {
      return this._cena;
    }

    set cena(value: number) {
      this._cena = value;
    }

    get avtokamp(): number {
      return this._avtokamp;
    }

    set avtokamp(value: number) {
      this._avtokamp = value;
    }
}
