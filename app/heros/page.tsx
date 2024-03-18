import React, { Suspense } from "react";
import Search from "../../components/Search";
// import { getHeros } from "../api/heros/route";
import Pagination from "../../components/Pagination";
import BackBtn from "../../components/BackBtn";
import HeroCard from "../../components/HeroCard";
import { getHeros } from "../services/heros/heros";
import Loading from "./loading";

// Functional component HerosPage in TypeScript that fetches hero data based on search parameters,
// displays the hero cards in a grid layout with pagination, and handles error cases.
const HerosPage = async ({
  searchParams: { page, search },
}: {
  searchParams: { page: string, search: string };
}) => {

  // async function to fetch data from api and return it. If error, throw error
  const fetchData = async () => {
    try {
      const response = await getHeros(page, search);

      return response;
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

  const response = data;
  const heros = response.results;
  const pages = Math.ceil(response.count / 10);

  return (
    <main className="h-screen flex flex-col items-center justify-between">
      <BackBtn />
      <Search />
      <Suspense fallback={<Loading />}>
      {!!heros.length ? (
        <>
          <ul className={`grid grid-cols-2 gap-8 py-24
          md:grid-cols-2 md:py-56
          lg:grid-cols-5`}>
            {heros.map(hero => (
              <li key={hero.name}>
                <HeroCard hero={hero} page={page || '1'} search={search || ''}/>
              </li>
            ))}
          </ul>
          <Pagination totalPages={pages} curPage={page} />
        </>
      ) : ( 
        <h1 className="text-text text-3xl my-auto text-purple">No such heros</h1>
      )}
      </Suspense>
      
    </main>
  );
};

export default HerosPage;
