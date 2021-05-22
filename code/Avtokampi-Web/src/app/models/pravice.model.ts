interface PraviceModel {
    pravicaId: number;
    naziv: string;
    opis: string;
}

export class Pravica implements PraviceModel {
    private _pravicaId: number;
    private _naziv: string;
    private _opis: string;

    get pravicaId(): number {
      return this._pravicaId;
    }

    set pravicaId(value: number) {
      this._pravicaId = value;
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
}
