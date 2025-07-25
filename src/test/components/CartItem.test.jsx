import { render } from '@testing-library/react';
import { vi } from 'vitest';
import CartItem from '../../components/CartItem';
import { ThemeProvider } from '../../context/ThemeContext';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';
import { ShoppingItemsProvider } from '../../context/ShoppingItemsContext';
import React from 'react';

// Mock useShoppingCart to provide getItem
vi.mock('../../context/ShoppingCartContext', async () => {
  const actual = await vi.importActual('../../context/ShoppingCartContext');
  return {
    ...actual,
    useShoppingCart: () => ({
      getItem: () => ({ id: 1, name: 'Test', price: 100, imgUrl: '' }),
      removeFromCart: () => {},
      increaseCartQuantity: () => {},
      decreaseCartQuantity: () => {},
    }),
  };
});

describe('CartItem', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ThemeProvider>
        <ShoppingItemsProvider>
          <ShoppingCartProvider>
            <CartItem id={1} quantity={1} />
          </ShoppingCartProvider>
        </ShoppingItemsProvider>
      </ThemeProvider>
    );
    expect(container).toBeTruthy();
  });
}); 