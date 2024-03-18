/* eslint-disable no-param-reassign */
import { FilmType } from "../types/film";
import { HeroType } from "../types/hero";
import { Position } from "../types/node";
import { StarshipType } from "../types/starship";
import { getId } from "./getId";

const position = { x: 0, y: 0 };
const atributes = {
  position,
  type: "custom",
  targetPosition: Position.Top,
  sourcePosition: Position.Bottom,
};

// function create nodes for a hero, their films, and their starships.
export function createNodes(
  hero: HeroType,
  films: FilmType[],
  starships: StarshipType[],
) {
  const nodes = [
    {
      id: hero.name,
      data: { category: 'hero', name: hero.name },
      ...atributes,
    },
    ...films.flatMap(film => {
      const filmNode = {
        id: `film${film.title}`,
        data: { category: 'movie', name: film.title },
        ...atributes,
      };

      const filmStarships = starships.filter(starship =>
        film.starships.includes(+getId(starship.url)),
      );

      const starshipNodes = filmStarships.map((starship, starshipIndex) => ({
        id: `starship${film.title}-${starshipIndex}`,
        data: { category: 'starship', name: starship.name },
        ...atributes,
      }));

      return [filmNode, ...starshipNodes];
    }),
  ];

  return nodes;
}