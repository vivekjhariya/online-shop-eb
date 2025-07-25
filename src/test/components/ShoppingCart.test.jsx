import { render } from '@testing-library/react';
import ShoppingCart from '../../components/ShoppingCart';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';
import { ShoppingItemsProvider } from '../../context/ShoppingItemsContext';

describe('ShoppingCart', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider>
          <ShoppingItemsProvider>
            <ShoppingCartProvider>
              <ShoppingCart />
            </ShoppingCartProvider>
          </ShoppingItemsProvider>
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
}); 