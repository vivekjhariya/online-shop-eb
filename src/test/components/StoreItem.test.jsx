import { render } from '@testing-library/react';
import { vi } from 'vitest';
import StoreItem from '../../components/StoreItem';
import { ThemeProvider } from '../../context/ThemeContext';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';
import { ShoppingItemsProvider } from '../../context/ShoppingItemsContext';
import React from 'react';

// Mock useShoppingCart to provide getItemQuantity
vi.mock('../../context/ShoppingCartContext', async () => {
  const actual = await vi.importActual('../../context/ShoppingCartContext');
  return {
    ...actual,
    useShoppingCart: () => ({
      getItemQuantity: () => 1,
      increaseCartQuantity: () => {},
    }),
  };
});

describe('StoreItem', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ThemeProvider>
        <ShoppingItemsProvider>
          <ShoppingCartProvider>
            <StoreItem id={1} name="Test Product" price={100} imgUrl="" brand="Test Brand" category="Test Category" description="Test Description" rating={5} stock={10} />
          </ShoppingCartProvider>
        </ShoppingItemsProvider>
      </ThemeProvider>
    );
    expect(container).toBeTruthy();
  });
}); 