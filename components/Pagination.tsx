"use client";

import { useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { createQueryString } from "../lib/createQueryString";

type Props = {
  totalPages: number;
  curPage: string;
};

// functional component that displays the pagination buttons and handles page changes.
// From last page user goes to first page and vice versa.
const Pagination: React.FC<Props> = ({ totalPages, curPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => String(i + 1));
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = curPage ? curPage : '1';



  const handleClick = (page: string) => {
    router.push(pathname + "?" + createQueryString(searchParams, "page", page));
  };

  const handlePrev = () => {
    if (+curPage > 1) {
      router.push(pathname + "?" + createQueryString(
        searchParams, "page", (+curPage - 1).toString()));
    } else {
      router.push(pathname + "?" + createQueryString(
        searchParams,
        "page",
        totalPages.toString(),
      ));
    }
  };

  const handleNext = () => {
    if (+curPage < totalPages) {
      router.push(pathname + "?" + createQueryString(
        searchParams, "page", (+curPage + 1).toString()));
    } else {
      router.push(pathname + "?" + createQueryString(
        searchParams, 
        "page",
        '1',
      ));
    }
  };

  return (
    <ul className="flex gap-2 pb-12">
      <li className={`
      px-1 py-px rounded-full bg-radial-hover text-custom`}
      >
        <button onClick={handlePrev} role="button">←</button>
      </li>

      {pages.map(page => (
        <li key={page}>
          <button
            role="button"
            className={`px-2 py-px rounded-full text-custom ${currentPage === page ? 'bg-radial' : 'bg-radial-hover'} duration-75 hover:translate-y-1`}
            onClick={() => handleClick(page.toString())}
          >
            {page}
          </button>
        </li>
      ))}

      <li className={`
      px-1 py-px rounded-full bg-radial-hover text-custom`}>
        <button onClick={handleNext} role="button">→</button>
      </li>
    </ul>
  );
};

export default Pagination;