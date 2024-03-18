export type StarshipType = {
  name: string;
  pilots: number[];
  url: string;
};

export type StarshipsType = {
  results: StarshipType[];
};
