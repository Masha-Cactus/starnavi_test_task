import { generateNodePositions } from '@/lib/generateNodePositions';
import { Position } from 'reactflow';

describe('generateNodePositions', () => {

  const attributes = {
    position: { x: 0, y: 0 },
    type: 'custom',
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom
  };

  it('should return an array', () => {
    const initialNodes = [
      {
        id: 'Watto',
        data: { category: 'hero', name: 'Watto' },
        ...attributes,
      },
      {
        id: 'filmThe Phantom Menace',
        data: { category: 'movie', name: 'The Phantom Menace' },
        ...attributes,
      },
      {
        id: 'filmAttack of the Clones',
        data: { category: 'movie', name: 'Attack of the Clones' },
        ...attributes,
      },
    ];
    const result = generateNodePositions(initialNodes);

    expect(result).toBeInstanceOf(Array);
  });

  it('should generate correct node positions for starship category', () => {
    const initialNodes = [
      {
        id: 'starshipThe Phantom Menace-0',
        data: { category: 'starship', name: 'Naboo Royal Starship' },
        ...attributes,
      },
      {
        id: 'filmThe Phantom Menace',
        data: { category: 'movie', name: 'The Phantom Menace' },
        ...attributes,
      },
      {
        id: 'Ric Olié',
        data: { category: 'hero', name: 'Ric Olié' },
        ...attributes,
      }
    ];

    const result = generateNodePositions(initialNodes);

    result.forEach(node => {
      if (node.data.category === 'starship') {
        expect(node.position.y).toBeGreaterThanOrEqual(500);
      }
    });
  });

  it('should generate correct node positions for movie category', () => {
    const initialNodes = [
      {
        id: 'Sebulba',
        data: { category: 'hero', name: 'Sebulba' },
        ...attributes,
      },
      {
        id: 'filmThe Phantom Menace',
        data: { category: 'movie', name: 'The Phantom Menace' },
        ...attributes,
      },
    ];
    const result = generateNodePositions(initialNodes);
    
    result.forEach(node => {
      if (node.data.category === 'movie') {
        expect(node.position.y).toBeGreaterThanOrEqual(200);
      }
    });
  });

  it('should generate correct node positions for hero category', () => {
    const initialNodes = [
      {
        id: 'Watto',
        data: { category: 'hero', name: 'Watto' },
        ...attributes,
      },
      {
        id: 'filmThe Phantom Menace',
        data: { category: 'movie', name: 'The Phantom Menace' },
        ...attributes,
      },
      {
        id: 'filmAttack of the Clones',
        data: { category: 'movie', name: 'Attack of the Clones' },
        ...attributes,
      },
    ];
    const result = generateNodePositions(initialNodes);

    result.forEach(node => {
      if (node.data.category === 'hero') {
        expect(node.position.y).toBeGreaterThanOrEqual(0);
      }
    });
  });
});