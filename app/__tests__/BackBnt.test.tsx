import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import BackBtn from '@/components/BackBtn';

describe('BackBtn component', () => {
  it('should render without crashing', () => {
    const { container } = render(<BackBtn />);

    expect(container).toBeInTheDocument();
  });

  it('triggers window.history.back()', () => {
    const spy = jest.spyOn(window.history, 'back');
    const { container } = render(<BackBtn />) as { container: HTMLElement };
    const firstChild = container.firstChild;
    
    if (firstChild) {
      fireEvent.click(firstChild);
    }
  
    expect(spy).toHaveBeenCalled();
  
    spy.mockRestore();
  });
});
