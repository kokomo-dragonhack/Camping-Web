interface UporabnikInterface {
    uporabnikId: number;
    ime: string;
    priimek: string;
    slika: Blob;
    telefon: string;
    email: string;
    pravice: number;
    createdAt: Date;
    updatedAt: Date;
    token: string;
}

export class Uporabnik implements UporabnikInterface{

    private _uporabnikId: number;
    private _ime: string;
    private _priimek: string;
    private _slika: Blob;
    private _telefon: string;
    private _email: string;
    private _pravice: number;
    private _createdAt: Date;
    private _updatedAt: Date;
    private _token: string;

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

  get uporabnikId(): number {
      return this._uporabnikId;
    }

    set uporabnikId(value: number) {
      this._uporabnikId = value;
    }

    get ime(): string {
      return this._ime;
    }

    set ime(value: string) {
      this._ime = value;
    }

    get priimek(): string {
      return this._priimek;
    }

    set priimek(value: string) {
      this._priimek = value;
    }

    get slika(): Blob {
      return this._slika;
    }

    set slika(value: Blob) {
      this._slika = value;
    }

    get telefon(): string {
      return this._telefon;
    }

    set telefon(value: string) {
      this._telefon = value;
    }

    get email(): string {
      return this._email;
    }

    set email(value: string) {
      this._email = value;
    }

    get pravice(): number {
      return this._pravice;
    }

    set pravice(value: number) {
      this._pravice = value;
    }

    get token(): string {
      return this._token;
    }

    set token(value: string) {
      this._token = value;
    }
}
