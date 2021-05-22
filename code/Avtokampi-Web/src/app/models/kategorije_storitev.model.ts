interface Kategorije_storitevModel {
    kategorijaStoritveId: number;
    naziv: string;
}

export class KategorijeStoritev implements Kategorije_storitevModel {
    private _kategorijaStoritveId: number;
    private _naziv: string;

    get kategorijaStoritveId(): number {
      return this._kategorijaStoritveId;
    }

    set kategorijaStoritveId(value: number) {
      this._kategorijaStoritveId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }
}
