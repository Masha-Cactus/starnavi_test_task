/* eslint-disable no-param-reassign */
import { FilmType } from "../types/film";
import { HeroType } from "../types/hero";
import { EdgeType } from "../types/node";
import { StarshipType } from "../types/starship";
import { getId } from "./getId";

// function create edges between a hero, films they are in, 
// and starships in those films, then returns the constructed edges as an array.
export function createEdges(
  hero: HeroType,
  films: FilmType[],
  starships: StarshipType[],
) {
  const edges: EdgeType[] = [];

  films.forEach(film => {
    edges.push({
      id: `${hero.name}-film${film.title}`,
      source: hero.name,
      target: `film${film.title}`,
      type: "straight",
      style: {
        stroke: "#3b0764",
      },
    });
  });

  films.forEach(film => {
    const filmStarships = starships.filter(starship =>
      film.starships.includes(+getId(starship.url)),
    );

    filmStarships.forEach((starship, starshipIndex) => {
      edges.push({
        id: `film${film.title}-starship${starshipIndex}`,
        source: `film${film.title}`,
        target: `starship${film.title}-${starshipIndex}`,
        type: "straight",
        style: {
          stroke: "#3b0764",
        },
      });
    });
  });

  return edges;
}
