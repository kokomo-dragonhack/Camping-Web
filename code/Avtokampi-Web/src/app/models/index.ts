import { Avtokamp } from "./avtokampi.model";
import { Cenik } from "./ceniki.model";
import { Drzava } from "./drzave.model";
import { KampirnoMesto } from "./kampirna_mesta.model";
import { Kategorija } from "./kategorije.model";
import { KategorijeStoritev } from "./kategorije_storitev.model";
import { Mnenje } from "./mnenja.model";
import { Pravica } from "./pravice.model";
import { Regija } from "./regije.model";
import { Rezervacija } from "./rezervacije.model";
import { Slika } from "./slike.model";
import { StatusRezervacije } from "./status_rezervacije.model";
import { Storitev } from "./storitve.model";
import { StoritevKampirnihMest } from "./storitve_kampirnih_mest.model";
import { Uporabnik } from "./uporabniki.model";
import { VrstaKampiranja } from "./vrsta_kampiranja.model";

export const models: any[] = [
  Avtokamp,
  Cenik,
  Drzava,
  KampirnoMesto,
  Kategorija,
  KategorijeStoritev,
  Mnenje,
  Pravica,
  Regija,
  Rezervacija,
  Slika,
  StatusRezervacije,
  Storitev,
  StoritevKampirnihMest,
  Uporabnik,
  VrstaKampiranja
];

export * from "./avtokampi.model";
export * from "./ceniki.model";
export * from "./drzave.model";
export * from "./kampirna_mesta.model";
export * from "./kategorije.model";
export * from "./kategorije_storitev.model";
export * from "./mnenja.model";
export * from "./pravice.model";
export * from "./regije.model";
export * from "./rezervacije.model";
export * from "./slike.model";
export * from "./status_rezervacije.model";
export * from "./storitve.model";
export * from "./storitve_kampirnih_mest.model";
export * from "./uporabniki.model";
export * from "./vrsta_kampiranja.model";
