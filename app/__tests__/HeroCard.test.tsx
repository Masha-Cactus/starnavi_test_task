import React from 'react';
import { render } from '@testing-library/react';
import HeroCard from '@/components/HeroCard';

describe('HeroCard component', () => {
  it('should have link with correct href', () => {
    const mockHero = {
      name: 'Yoda',
      homeworld: 28,
      films: [ 2, 3, 4, 5, 6 ],
      starships: [],
      url: 'https://sw-api.starnavi.io/people/20/'
    };
    const { getByText } = render(
      <HeroCard hero={mockHero} page='3' search='l' />);
    const linkElement = getByText('Yoda');

    const linkContainer = linkElement.closest('a');
    const hrefValue = linkContainer!.getAttribute('href');

    expect(hrefValue).toBe('/heros/20?page=3&search=l');
  });

  it('should render the hero name inside the Link component', () => {
    const mockHero = {
      name: 'Gasgano',
      homeworld: 40,
      films: [ 4 ],
      starships: [],
      url: 'https://sw-api.starnavi.io/people/49/'
    };

    const { getByText } = render(
      <HeroCard hero={mockHero} page='5' search='m'/>);
    const heroNameElement = getByText('Gasgano');

    expect(heroNameElement).toBeTruthy();
  });
});