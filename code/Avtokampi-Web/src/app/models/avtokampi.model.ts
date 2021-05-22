interface AvtokampiModel {
    avtokampId: number;
    naziv: string;
    opis: string;
    naslov: string;
    telefon: string;
    nazivLokacije: string;
    koordinataX: number;
    koordinataY: number;
    isactive: boolean;
    regija: number;
    createdAt: Date;
    updatedAt: Date;
}

export class Avtokamp implements AvtokampiModel {
    private _avtokampId: number;
    private _naziv: string;
    private _opis: string;
    private _naslov: string;
    private _telefon: string;
    private _nazivLokacije: string;
    private _koordinataX: number;
    private _koordinataY: number;
    private _isactive: boolean;
    private _regija: number;
    private _createdAt: Date;
    private _updatedAt: Date;

    get avtokampId(): number {
      return this._avtokampId;
    }

    set avtokampId(value: number) {
      this._avtokampId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get opis(): string {
      return this._opis;
    }

    set opis(value: string) {
      this._opis = value;
    }

    get naslov(): string {
      return this._naslov;
    }

    set naslov(value: string) {
      this._naslov = value;
    }

    get telefon(): string {
      return this._telefon;
    }

    set telefon(value: string) {
      this._telefon = value;
    }

    get nazivLokacije(): string {
      return this._nazivLokacije;
    }

    set nazivLokacije(value: string) {
      this._nazivLokacije = value;
    }

    get koordinataX(): number {
      return this._koordinataX;
    }

    set koordinataX(value: number) {
      this._koordinataX = value;
    }

    get koordinataY(): number {
      return this._koordinataY;
    }

    set koordinataY(value: number) {
      this._koordinataY = value;
    }

    get isactive(): boolean {
      return this._isactive;
    }

    set isactive(value: boolean) {
      this._isactive = value;
    }

    get regija(): number {
      return this._regija;
    }

    set regija(value: number) {
      this._regija = value;
    }

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
}
