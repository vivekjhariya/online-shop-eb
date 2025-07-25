import { render } from '@testing-library/react';
import NewProductModal from '../../../components/Modals/NewProductModal';
describe('NewProductModal', () => {
  it('renders without crashing', () => {
    const { container } = render(<NewProductModal />);
    expect(container).toBeTruthy();
  });
}); 