import { createNodes } from '@/lib/createNodes';
import {
  luke,
  lukeFilms,
  lukeStarships,
  watto,
  wattoFilms,
  wattoStarships,
} from '../../constants/testData';

describe('createNodes', () => {
  it('should return an array', () => {
    const result = createNodes(luke, lukeFilms, lukeStarships);

    expect(result).toBeInstanceOf(Array);
  });

  it('result should have correct length for hero Luke Skywalker', () => {
    const result = createNodes(luke, lukeFilms, lukeStarships);

    expect(result.length).toBe(9);
  });

  it('should create correct nodes for hero Luke Skywalker', () => {
    const result = createNodes(luke, lukeFilms, lukeStarships);

    expect(result[0].id).toBe( 'Luke Skywalker');
    expect(result[8].id).toBe('starshipReturn of the Jedi-1');
  });

  it('should not create nodes for starships if hero has none', () => {
    const result = createNodes(watto, wattoFilms, wattoStarships);

    expect(result.map(node => node.data.category !== 'starship'));
  });
});