export type HeroType = {
  name: string;
  homeworld: number;
  films: number[];
  starships: number[];
  url: string;
};

export type HerosType = {
  count: number;
  results: HeroType[];
};
