import { render } from '@testing-library/react';
import TrackOrder from '../../components/TrackOrder';
describe('TrackOrder', () => {
  it('renders without crashing', () => {
    const { container } = render(<TrackOrder />);
    expect(container).toBeTruthy();
  });
}); 