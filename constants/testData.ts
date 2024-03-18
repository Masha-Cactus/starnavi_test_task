export const luke = {
  name: 'Luke Skywalker',
  starships: [ 12, 22 ],
  homeworld: 1,
  films: [ 1, 2, 3, 6 ],
  url: 'https://sw-api.starnavi.io/people/1/'
};

export const lukeFilms = [
  { title: 'The Empire Strikes Back',
    starships: [
      3, 10, 11, 12, 15,
      17, 21, 22, 23
    ],
    url: 'https://starwars.com/film/1',
    characters: [10, 13, 14, 18, 20, 21,
      22, 23, 24, 25, 26,  1,
      2,  3,  4,  5]
  },
  { title: 'Revenge of the Sith',
    starships: [
      32, 48, 59, 61, 63,
      64, 65, 66, 68,  2,
      74, 75
    ],
    url: 'https://sw-api.starnavi.io/films/6/',
    characters: [
      10, 12, 13, 20, 21, 33, 35,  1,  2,
      3,  4,  5,  6,  7, 11, 46, 79, 80,
      81, 82, 83, 51, 52, 53, 54, 55, 56,
      58, 63, 64, 67, 68, 75, 78
    ], 
  },
  {title: 'A New Hope',
    starships: [
      32, 48, 59, 61, 63,
      64, 65, 66, 68, 2,
      74, 75
    ],
    url: 'https://sw-api.starnavi.io/films/1/',
    characters: [
      10, 12, 13, 14, 15, 16, 18,
      19,  1,  2,  3,  4,  5,  6,
      7,  8,  9, 81
    ],
  },
  {title: 'Return of the Jedi',
    characters: [
      10, 13, 14, 16, 18, 20, 21,
      22, 25, 27, 28, 29, 30,  1,
      2,  3,  4,  5, 31, 45
    ],
    starships: [
      27,  2,  3, 10, 11,
      12, 15, 17, 22, 23,
      28, 29
    ],
    url: 'https://sw-api.starnavi.io/films/3/'
  }];

export const lukeStarships = [
  {
    name: 'X-wing',
    pilots: [ 18, 19, 1, 9 ],
    url: 'https://sw-api.starnavi.io/starships/12/'
  },
  {
    name: 'Imperial shuttle',
    pilots: [ 13, 14, 1 ],
    url: 'https://sw-api.starnavi.io/starships/22/'
  }
];

export const watto = {
  name: 'Watto',
  homeworld: 34,
  films: [ 4, 5 ],
  starships: [],
  url: 'https://sw-api.starnavi.io/people/40/'
};

export const wattoFilms = [
  {
    title: 'The Phantom Menace',
    starships: [ 31, 32, 39, 40, 41 ],
    vehicles: [
      33, 34, 35, 36,
      37, 38, 42
    ],
    characters: [
      10, 16, 20, 21, 33, 34, 35, 36, 37,
      38, 39, 40, 41,  2,  3, 11, 32, 42,
      43, 44, 46, 47, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 58, 59
    ],
    url: 'https://sw-api.starnavi.io/films/4/'
  },
  {
    title: 'Attack of the Clones',
    starships: [
      32, 39, 43, 47, 48,
      49, 52, 58, 21
    ],
    characters: [
      10, 20, 21, 22, 33, 35, 36, 40,  2,  3,
      6,  7, 11, 43, 46, 82, 51, 52, 53, 58,
      59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
      69, 70, 71, 72, 73, 74, 75, 76, 77, 78
    ],
    url: 'https://sw-api.starnavi.io/films/5/'
  }
];

export const wattoStarships = [];