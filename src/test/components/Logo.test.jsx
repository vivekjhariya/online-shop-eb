import { render } from '@testing-library/react';
import Logo from '../../components/Logo';
describe('Logo', () => {
  it('renders without crashing', () => {
    const { container } = render(<Logo />);
    expect(container).toBeTruthy();
  });
}); 