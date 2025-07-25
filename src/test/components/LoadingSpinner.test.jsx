import { render } from '@testing-library/react';
import LoadingSpinner from '../../components/LoadingSpinner';
describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    const { container } = render(<LoadingSpinner />);
    expect(container).toBeTruthy();
  });
}); 