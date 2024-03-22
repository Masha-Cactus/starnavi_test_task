"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

// functional component for a search input that updates the URL query parameters as the user types.
export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.get("search");

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams || "");

    params.set("search", e.target.value);
    params.delete("page");

    router.push(pathname + "?" + params.toString());
  };

  const clear = async () => {
    const params = new URLSearchParams(searchParams || "");

    params.set("search", '');
    params.delete("page");

    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex absolute right-4 top-4 md:right-8 md:top-8">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className={`md:h-14 md:w-56 rounded-md bg-primary hover:bg-primary-hover p-1`}>
        <Image 
          src="/icons/clear.svg"
          width={20}
          height={20}
          alt="clear"
          className={`cursor-pointer w-2 h-2 md:w-4 md:h-4 absolute right-2 top-2 ${search ? 'block' : 'hidden'}`}
          onClick={clear}
        />
        <input
          className={`
        block h-full w-full rounded-md py-[9px] pl-10 placeholder:text-zinc-400 outline-none
        text-custom placeholder:text-xs md:placeholder:text-lg`}
          placeholder="Find hero..."
          value={search || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
