import { PlanetType } from "../../../types/planet";
import { client } from "../client";

// function to fetch planet by id using search parameters
export const getHeroPlanet = async (planetId: number) => {
  return client.get<PlanetType>(`/planets/${planetId}`);
};