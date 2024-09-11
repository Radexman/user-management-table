import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Header from './Header';

describe('Header component should', () => {
  test('render correctly', () => {
    renderWithProviders(<Header />);

    const headingElement = screen.getByRole('heading', {
      level: 1,
      name: /user management table/i,
    });
    const userIconElement = screen.getByTestId('user-icon');
    const themeTogglerElement = screen.getByTestId('theme-toggler');

    expect(headingElement).toBeInTheDocument();
    expect(userIconElement).toBeInTheDocument();
    expect(themeTogglerElement).toBeInTheDocument();
  });
});
