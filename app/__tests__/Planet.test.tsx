import { render } from '@testing-library/react';
import Planet from '@/components/Planet';

describe('Planet component', () => {
  it('Planet component renders with correct image source path', () => {
    const { getByAltText } = render(<Planet planet="Mars" />);
    const image = getByAltText('Mars image') as HTMLImageElement;
  
    expect(image.src).toContain('Mars.jpeg');
  });
  
  it('Planet component sets alt text of the image correctly', () => {
    const { getByAltText } = render(<Planet planet="Jupiter" />);
    const image = getByAltText('Jupiter image') as HTMLImageElement;
  
    expect(image.alt).toBe('Jupiter image');
  });
});
