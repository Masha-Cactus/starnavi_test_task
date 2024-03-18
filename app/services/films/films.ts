import { client } from "../client";
import { FilmsType } from "../../../types/film";

// function to fetch films by id using query parameters
export const getHerosFilms = async (id: string) => {
  const response = client.get<FilmsType>(`/films/?characters__contains=${id}`);

  const films = (await response).results;
  const heroFilms = films.filter(film =>
    film.characters.some(person => person === +id),
  );

  return heroFilms;
};
