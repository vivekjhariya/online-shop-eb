import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../../pages/Home';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';
import { ShoppingItemsProvider } from '../../context/ShoppingItemsContext';

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider>
          <ShoppingCartProvider>
            <ShoppingItemsProvider>
              <Home />
            </ShoppingItemsProvider>
          </ShoppingCartProvider>
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
}); 