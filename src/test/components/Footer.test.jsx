import { render } from '@testing-library/react';
import Footer from '../../components/Footer';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';

describe('Footer', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider>
          <Footer />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
}); 