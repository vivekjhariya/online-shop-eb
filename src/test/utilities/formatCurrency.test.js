import { describe, it, expect } from 'vitest';
import { formatCurrency } from '../../utilities/formatCurrency';

describe('formatCurrency', () => {
  it('formats numbers as INR currency', () => {
    expect(formatCurrency(1000)).toBe('₹1,000.00');
    expect(formatCurrency(19.99)).toBe('₹19.99');
    expect(formatCurrency(0)).toBe('₹0.00');
  });

  it('handles negative numbers', () => {
    expect(formatCurrency(-50)).toBe('-₹50.00');
  });

  it('handles invalid input gracefully', () => {
    expect(formatCurrency(null)).toBe('₹0.00');
    expect(formatCurrency(undefined)).toBe('₹0.00');
    expect(formatCurrency('abc')).toBe('₹0.00');
  });
}); 