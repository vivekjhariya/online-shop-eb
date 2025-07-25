import { render } from '@testing-library/react';
import InProgressToastContent from '../../components/InProgressToastContent';
describe('InProgressToastContent', () => {
  it('renders without crashing', () => {
    const { container } = render(<InProgressToastContent />);
    expect(container).toBeTruthy();
  });
}); 