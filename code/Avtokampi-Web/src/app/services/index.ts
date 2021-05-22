import * as fromRepos from './repositories';

export const services: any[] = [
  fromRepos.AvtokampiService,
  fromRepos.KampirnaMestaService,
  fromRepos.RezervacijeService,
  fromRepos.StoritveKampaService,
  fromRepos.MnenjaService,
  fromRepos.ApiService,
  fromRepos.JwtService,
  fromRepos.UserService,
];

export * from './guards';
export * from './repositories';
export * from './interceptors';
export * from './directives';
