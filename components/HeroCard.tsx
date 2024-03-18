import Link from "next/link";
import { HeroType } from "../types/hero";
import { getId } from "../lib/getId";

type Props = { 
  hero: HeroType;
  page: string;
  search: string;
};

// functional component that generates a styled link.
const HeroCard: React.FC<Props> = ({ hero, page, search }) => {
  const heroId = getId(hero.url);

  return (
    <Link
      href={`/heros/${heroId}?page=${page}&search=${search}`}
      className={`
      flex justify-center items-center p-1.5 duration-300 w-32 h-14
      md:w-48 md:h-20 md:p-2.5 text-custom
      border-4 border-indigo-950 rounded-lg
      hover:bg-primary-hover hover:scale-110 hover:border-purple cursor-pointer bg-secondary`}
    >
      <p className="text-center">{hero.name}</p>
    </Link>
  );
};

export default HeroCard;
