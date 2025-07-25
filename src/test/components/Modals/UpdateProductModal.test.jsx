import { render } from '@testing-library/react';
import UpdateProductModal from '../../../components/Modals/UpdateProductModal';
describe('UpdateProductModal', () => {
  it('renders without crashing', () => {
    const { container } = render(<UpdateProductModal />);
    expect(container).toBeTruthy();
  });
}); 