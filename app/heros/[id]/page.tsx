import Link from "next/link";
import BackBtn from "../../../components/BackBtn";
import Flow from "../../../components/Flow";
import Planet from "../../../components/Planet";
import { createEdges } from "../../../lib/createEdges";
import { createNodes } from "../../../lib/createNodes";
import { generateNodePositions } from "../../../lib/generateNodePositions";
import { getId } from "../../../lib/getId";
import Image from "next/image";
import { getHero } from "@/app/services/hero/hero";
import { getHerosFilms } from "@/app/services/films/films";
import { getHerosShips } from "@/app/services/ships/ships";
import { getHeros } from "@/app/services/heros/heros";
import { getHeroPlanet } from "@/app/services/planet/planet";
import Loading from "./loading";
import { Suspense } from "react";

type Props = {
  params: { id: string };
  searchParams: { page: string, search: string };
};

// function to generate metadata for the page
export async function generateMetadata({ params: { id } }
: { params: { id: string } }) {
  const hero = await getHero(id);

  return {
    title: hero.name,
  }; 
}

// functional component that uses async/await to fetch data from an API.
// It then uses the fetched data to render a dynamic UI, including a planet,
// navigation buttons, and a flow visualization.
const HeroPage: React.FC<Props>= async ({ params, searchParams }) => {
  const { id } = params;
  const { page, search } = searchParams;

  // async function to fetch data from api and return it. If error, throw error
  const fetchData = async () => {
    try {
      const heroFilms = await getHerosFilms(id);
      const heroShips = await getHerosShips(id);
      const response = await getHeros(page);
      const heros = response.results;
      let hero = null;

      if (!search) {
        hero = heros.find(hero => getId(hero.url) === id);
      } else {
        hero = await getHero(id);
      }

      const heroPlanet = await getHeroPlanet(hero!.homeworld);

      return { heros, hero, heroPlanet, heroFilms, heroShips };
    } catch (error: any) {
      throw error;
    }
  };

  const data = await fetchData();

  if (!data) {
    return (
      <h1 
        className={`text-2xl font-bold leading-10 tracking-tight bg-clip-text text-transparent bg-secondary`}
      >
      Ups
      </h1>);
  }

  const { heros, hero, heroPlanet, heroFilms, heroShips } = data;

  const curHeroIndex = heros.findIndex(h => getId(h.url) === getId(hero!.url));

  // function generates a URL based on the direction provided and the current hero index on the page.
  const changeHero = (direction: string) => {
    let nextHero;

    if (direction === 'next') {
      nextHero = heros.find((_h, i)=> i === curHeroIndex + 1);
    } else {
      nextHero = heros.find((_h, i)=> i === curHeroIndex - 1);
    }

    if (nextHero) {
      return `/heros/${getId(nextHero.url)}?page=${page}`;
    } else {
      return `/heros?page=${page}`;
    }
  };

  const initialNodes = createNodes(hero!, heroFilms, heroShips);
  const initialEdges = createEdges(hero!, heroFilms, heroShips);
  const updatedNodes = generateNodePositions(initialNodes);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BackBtn />
      <Suspense fallback={<Loading />}/>
      <Planet planet={heroPlanet.name} />
      <Link
        replace
        href={changeHero('prev')}
        className={`text-center h-16 w-16
        md:h-32 md:w-22 text-6xl md:text-8xl text-blue top-52 left-0 md:pl-3.5`}
      >
        <Image
          width={100}
          height={100}
          alt="left"
          src="/icons/left.svg"
        />
      </Link>

      <Flow nodes={updatedNodes} edges={initialEdges} />
      
      <Link
        replace
        href={changeHero('next')}
        className={`text-center h-16 w-16
        md:h-32 md:w-22 text-6xl md:text-8xl text-blue top-52 left-0 md:mr-3.5`}
      >
        <Image
          width={100}
          height={100}
          alt="left"
          src="/icons/right.svg"
        />
      </Link>
    </div>
  );
};

export default HeroPage;
