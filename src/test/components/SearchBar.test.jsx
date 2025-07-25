import { render } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';
describe('SearchBar', () => {
  it('renders without crashing', () => {
    const { container } = render(<SearchBar />);
    expect(container).toBeTruthy();
  });
}); 