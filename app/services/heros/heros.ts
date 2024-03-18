import { HerosType } from "../../../types/hero";
import { client } from "../client";

// function that fetches heroes using query parameters.
export const getHeros = (pageNum: string, search?: string) => {
  let url = '';

  if (!!pageNum || !!search) {
    url += '?';
  }

  if (!!search) {
    url += `search=${search}`;
  }

  if (!!pageNum) {
    if (url.length > 2) {
      url += `&page=${pageNum}`;
    } else {
      url += `page=${pageNum}`;
    }
  }
  
  return client.get<HerosType>(`people/${url}`);
};
