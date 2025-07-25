import { render } from '@testing-library/react';
import DeleteProductModal from '../../../components/Modals/DeleteProductModal';
describe('DeleteProductModal', () => {
  it('renders without crashing', () => {
    const { container } = render(<DeleteProductModal />);
    expect(container).toBeTruthy();
  });
}); 