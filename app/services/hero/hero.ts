import { HeroType } from "../../../types/hero";
import { client } from "../client";

// function to fetch hero using search parameters
export const getHero = (id: string) => {
  return client.get<HeroType>(`./people/${id}`);
};
