import { render } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';
import { ShoppingItemsProvider } from '../../context/ShoppingItemsContext';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider>
          <ShoppingCartProvider>
            <ShoppingItemsProvider>
              <App />
            </ShoppingItemsProvider>
          </ShoppingCartProvider>
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
}); 