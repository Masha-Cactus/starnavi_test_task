import { client } from "../client";
import { StarshipsType } from "../../../types/starship";

// function to fetch ships using query parameters
export const getHerosShips = async (id: string) => {
  const response = client.get<StarshipsType>(
    `/starships/?pilots__contains=${id}`,
  );

  const ships = (await response).results;
  const heroShips = ships.filter(ship =>
    ship.pilots.some(pilot => pilot === +id),
  );

  return heroShips;
};
