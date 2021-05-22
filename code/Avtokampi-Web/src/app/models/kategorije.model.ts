interface KategorijeModel {
    kategorijaId: number;
    naziv: string;
    createdAt: Date;
    updatedAt: Date;
}

export class Kategorija implements KategorijeModel {

    private _kategorijaId: number;
    private _naziv: string;
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

  get kategorijaId(): number {
      return this._kategorijaId;
    }

    set kategorijaId(value: number) {
      this._kategorijaId = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }
}
