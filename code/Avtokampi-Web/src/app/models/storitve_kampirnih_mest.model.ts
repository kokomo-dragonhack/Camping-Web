interface Storitve_kampirnih_mestModel {
    storitveKampirnihMestId: number;
    kampirnoMesto: number;
    storitev: number;
}

export class StoritevKampirnihMest implements Storitve_kampirnih_mestModel {
    private _storitveKampirnihMestId: number;
    private _kampirnoMesto: number;
    private _storitev: number;


    get storitveKampirnihMestId(): number {
      return this._storitveKampirnihMestId;
    }

    set storitveKampirnihMestId(value: number) {
      this._storitveKampirnihMestId = value;
    }

    get kampirnoMesto(): number {
      return this._kampirnoMesto;
    }

    set kampirnoMesto(value: number) {
      this._kampirnoMesto = value;
    }

    get storitev(): number {
      return this._storitev;
    }

    set storitev(value: number) {
      this._storitev = value;
    }
}
