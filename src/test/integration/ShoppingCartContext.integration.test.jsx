import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import React from 'react';
import { ShoppingCartProvider, useShoppingCart } from '../../context/ShoppingCartContext';
import { ShoppingItemsProvider } from '../../context/ShoppingItemsContext';
import { act } from 'react';
import userEvent from '@testing-library/user-event';

function TestComponent() {
  const { cartItems, addToCart, removeFromCart } = useShoppingCart();
  return (
    <div>
      <button onClick={() => addToCart(1)}>Add 1</button>
      <button onClick={() => removeFromCart(1)}>Remove 1</button>
      <span data-testid="cart-count">{cartItems.length}</span>
    </div>
  );
}

afterEach(() => {
  cleanup();
});

describe('ShoppingCartContext Integration', () => {
  it('adds and removes items from cart', async () => {
    render(
      <ShoppingItemsProvider>
        <ShoppingCartProvider>
          <TestComponent />
        </ShoppingCartProvider>
      </ShoppingItemsProvider>
    );
    const addBtn = screen.getByText('Add 1');
    const removeBtn = screen.getByText('Remove 1');
    let count = screen.getByTestId('cart-count');

    expect(count.textContent).toBe('0');
    await act(async () => {
      await userEvent.click(addBtn);
    });
    count = screen.getByTestId('cart-count');
    expect(count.textContent).toBe('1');
    await act(async () => {
      await userEvent.click(removeBtn);
    });
    // Wait for DOM update
    await screen.findByTestId('cart-count');
    count = screen.getByTestId('cart-count');
    expect(count.textContent).toBe('0');
  });
}); 