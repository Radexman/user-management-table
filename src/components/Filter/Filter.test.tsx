import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Filter from './Filter';

describe('Filter component should', () => {
  test('focus input on mount', () => {
    renderWithProviders(<Filter />);

    const input = screen.getByPlaceholderText(/filter/i) as HTMLInputElement;

    expect(document.activeElement).toBe(input);
  });

  test('call setFilter on input change', async () => {
    renderWithProviders(<Filter />);

    const input = screen.getByPlaceholderText(/filter/i) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });

  test('check that the correct radio button is selected based on filterType', () => {
    renderWithProviders(<Filter />);

    const nameRadio = screen.getByRole('radio', { name: 'Name' }) as HTMLInputElement;
    const usernameRadio = screen.getByRole('radio', { name: 'Username' }) as HTMLInputElement;

    expect(nameRadio.checked).toBe(true);
    expect(usernameRadio.checked).toBe(false);
  });

  test('call setFilterType when a username radio button is clicked', () => {
    renderWithProviders(<Filter />);

    const usernameRadio = screen.getByRole('radio', { name: 'Username' }) as HTMLInputElement;

    fireEvent.click(usernameRadio);

    expect(usernameRadio.value).toBe('username');
  });

  test('call setFilterType when a email radio button is clicked', () => {
    renderWithProviders(<Filter />);

    const emailRadio = screen.getByRole('radio', { name: 'Email' }) as HTMLInputElement;

    fireEvent.click(emailRadio);

    expect(emailRadio.value).toBe('email');
  });

  test('call setFilterType when a phone radio button is clicked', () => {
    renderWithProviders(<Filter />);

    const phoneRadio = screen.getByRole('radio', { name: 'Phone' }) as HTMLInputElement;

    fireEvent.click(phoneRadio);

    expect(phoneRadio.value).toBe('phone');
  });
});
