export type FilmType = {
  title: string;
  characters: number[];
  starships: number[];
  url: string;
};

export type FilmsType = {
  results: FilmType[];
};
