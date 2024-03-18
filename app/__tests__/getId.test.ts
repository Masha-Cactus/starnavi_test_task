import { getId } from '@/lib/getId';

describe('getId function', () => {
  it('should extract and return the ID from a URL with valid ID', () => {
    const url = 'https://example.com/123';
    const id = getId(url);

    expect(id).toEqual('123');
  });

  it('should return an empty string when there is no ID in the URL', () => {
    const url = 'https://example.com';
    const id = getId(url);
    
    expect(id).toEqual('');
  });
});