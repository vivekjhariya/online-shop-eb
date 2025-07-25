import { render } from '@testing-library/react';
import ProductItem from '../../components/ProductItem';

describe('ProductItem', () => {
  it('renders without crashing', () => {
    const mockItem = { imgUrl: '', name: 'Test', price: 100, id: 1 };
    const { container } = render(<ProductItem item={mockItem} />);
    expect(container).toBeTruthy();
  });
}); 