export interface Name {
  common: string;
  official: string;
}
export interface Flag {
  png: string;
  svg: string;
  alt: string;
}
export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
export interface Language {
  [key: string]: string;
}
export interface ICountry {
  name: Name;
  capital: string[];
  continents: string[];
  region: string;
  flag: string;
  population: number;
  flags: Flag;
  languages: Language[];
  maps: Maps;
  latlng: number[];
  cca2: string;
}
