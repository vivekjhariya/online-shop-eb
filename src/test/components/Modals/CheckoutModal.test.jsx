import { render } from '@testing-library/react';
import CheckoutModal from '../../../components/Modals/CheckoutModal';
import { ThemeProvider } from '../../../context/ThemeContext';
import { ShoppingCartProvider } from '../../../context/ShoppingCartContext';
import { ShoppingItemsProvider } from '../../../context/ShoppingItemsContext';

describe('CheckoutModal', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ThemeProvider>
        <ShoppingItemsProvider>
          <ShoppingCartProvider>
            <CheckoutModal />
          </ShoppingCartProvider>
        </ShoppingItemsProvider>
      </ThemeProvider>
    );
    expect(container).toBeTruthy();
  });
}); 