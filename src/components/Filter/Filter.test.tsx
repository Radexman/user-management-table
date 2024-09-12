import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Filter from './Filter';
import { vi } from 'vitest';

describe('Filter component should', () => {
  const mockSetFilter = vi.fn();
  const mockSetFilterType = vi.fn();

  const initialProps = {
    filter: '',
    filterType: 'name',
    setFilter: mockSetFilter,
    setFilterType: mockSetFilterType,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('focus input on mount', () => {
    renderWithProviders(<Filter {...initialProps} />);

    const input = screen.getByPlaceholderText(/filter/i) as HTMLInputElement;

    expect(document.activeElement).toBe(input);
  });

  test('call setFilter on input change', () => {
    renderWithProviders(<Filter {...initialProps} />);

    const input = screen.getByPlaceholderText(/filter/i) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });

    expect(mockSetFilter).toHaveBeenCalledWith('test');
  });

  test('check that the correct radio button is selected based on filterType', () => {
    renderWithProviders(<Filter {...initialProps} />);

    const nameRadio = screen.getByRole('radio', { name: 'Name' }) as HTMLInputElement;
    const usernameRadio = screen.getByRole('radio', { name: 'Username' }) as HTMLInputElement;

    expect(nameRadio.checked).toBe(true);
    expect(usernameRadio.checked).toBe(false);
  });

  test('call setFilterType when a username radio button is clicked', () => {
    renderWithProviders(<Filter {...initialProps} />);

    const usernameRadio = screen.getByRole('radio', { name: 'Username' }) as HTMLInputElement;

    fireEvent.click(usernameRadio);

    expect(mockSetFilterType).toHaveBeenCalledWith('username');
  });

  test('call setFilterType when a email radio button is clicked', () => {
    renderWithProviders(<Filter {...initialProps} />);

    const emailRadio = screen.getByRole('radio', { name: 'Email' }) as HTMLInputElement;

    fireEvent.click(emailRadio);

    expect(mockSetFilterType).toHaveBeenCalledWith('email');
  });

  test('call setFilterType when a phone radio button is clicked', () => {
    renderWithProviders(<Filter {...initialProps} />);

    const phoneRadio = screen.getByRole('radio', { name: 'Phone' }) as HTMLInputElement;

    fireEvent.click(phoneRadio);

    expect(mockSetFilterType).toHaveBeenCalledWith('phone');
  });
});
