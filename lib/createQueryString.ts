import { ReadonlyURLSearchParams } from "next/navigation";

// function to define query
export const createQueryString = (
  searchParams: ReadonlyURLSearchParams | null,
  name: string,
  value: string | null,
) => {
  const params = new URLSearchParams(
    searchParams ? searchParams.toString() : "",
  );

  if (!value) {
    params.delete(name);
  } else {
    params.set(name, value);
  }

  return params.toString();
};