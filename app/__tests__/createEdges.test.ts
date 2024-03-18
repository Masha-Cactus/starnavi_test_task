import { createEdges } from '@/lib/createEdges';
import { luke,
  lukeFilms,
  lukeStarships,
  watto,
  wattoFilms,
  wattoStarships,
} from '../../constants/testData';

describe('createEdges function', () => {

  it('should return an array', () => {
    const result = createEdges(luke, lukeFilms, lukeStarships);

    expect(result).toBeInstanceOf(Array);
  });

  it('should have right length', () => {
    const result = createEdges(luke, lukeFilms, lukeStarships);

    expect(result).toHaveLength(8);
  });

  it('should create edges between Luke Skywalker and films he are in', () => {
    const result = createEdges(luke, lukeFilms, lukeStarships);

    expect(result[0].source).toEqual('Luke Skywalker');
    expect(result[0].target).toEqual('filmThe Empire Strikes Back');
    expect(result[1].source).toEqual('Luke Skywalker');
    expect(result[1].target).toEqual('filmRevenge of the Sith');
  });

  it('should create edges between Watto and films he are in', () => {
    const result = createEdges(watto, wattoFilms, wattoStarships);

    expect(result[0].source).toEqual('Watto');
    expect(result[0].target).toEqual('filmThe Phantom Menace');
  });

  it('should create edges between films and starships in those films', () => {
    const result = createEdges(luke, lukeFilms, lukeStarships);

    expect(result[4].source).toEqual('filmThe Empire Strikes Back');
    expect(result[4].target).toEqual('starshipThe Empire Strikes Back-0');
    expect(result[5].source).toEqual('filmThe Empire Strikes Back');
    expect(result[5].target).toEqual('starshipThe Empire Strikes Back-1');
  });
});