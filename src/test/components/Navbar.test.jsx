import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';
import { ShoppingItemsProvider } from '../../context/ShoppingItemsContext';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider>
          <ShoppingCartProvider>
            <ShoppingItemsProvider>
              <Navbar />
            </ShoppingItemsProvider>
          </ShoppingCartProvider>
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
}); 