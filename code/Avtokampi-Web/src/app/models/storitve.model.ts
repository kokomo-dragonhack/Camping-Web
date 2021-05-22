interface StoritveModel {
    storitevId: number;
    naziv: string;
    kategorijaStoritve: number;
    cenik: number;
}

export class Storitev implements StoritveModel {
    private _storitevId: number;
    private _naziv: string;
    private _kategorijaStoritve: number;
    private _cenik: number;

    get storitevId(): number {
      return this._storitevId;
    }

    set storitevId(value: number) {
      this._storitevId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get kategorijaStoritve(): number {
      return this._kategorijaStoritve;
    }

    set kategorijaStoritve(value: number) {
      this._kategorijaStoritve = value;
    }

    get cenik(): number {
      return this._cenik;
    }

    set cenik(value: number) {
      this._cenik = value;
    }
}
