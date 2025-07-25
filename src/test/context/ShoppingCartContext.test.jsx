import { renderHook } from '@testing-library/react';
import { ShoppingCartProvider, useShoppingCart } from '../../context/ShoppingCartContext';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('ShoppingCartContext', () => {
  it('provides default values', () => {
    const wrapper = ({ children }) => <ShoppingCartProvider>{children}</ShoppingCartProvider>;
    const { result } = renderHook(() => useShoppingCart(), { wrapper });
    expect(result.current.cartItems).toEqual([]);
  });
}); 