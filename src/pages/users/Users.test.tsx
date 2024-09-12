import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Users from './Users';
import { MemoryRouter } from 'react-router-dom';
import { fetchUsers } from '../../features/users/usersSlice';
import { setupStore } from '../../app/store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

const mock = new MockAdapter(axios);

describe('Users page should', () => {
  test('display loading state initially', () => {
    renderWithProviders(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const loadingElement = screen.getByTestId('loading');

    expect(loadingElement).toBeInTheDocument();
  });

  test('display users after successful fetch', async () => {
    const store = setupStore();
    const users = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
    ];

    mock.onGet(url || '').reply(200, users);

    await store.dispatch(fetchUsers());

    renderWithProviders(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const userElements = await screen.findAllByText(/leanne graham/i);
    expect(userElements[0]).toBeInTheDocument();
  });

  test('filter users based on input and filter search', async () => {
    const store = setupStore();
    const users = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
    ];

    mock.onGet(url || '').reply(200, users);
    await store.dispatch(fetchUsers());

    renderWithProviders(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText(/filter/i) as HTMLInputElement;
    const usernameRadio = screen.getByRole('radio', { name: 'Username' }) as HTMLInputElement;

    fireEvent.click(usernameRadio);
    fireEvent.change(inputElement, { target: { value: 'Antonette' } });

    const filteredUsers = await screen.findAllByText(/Ervin Howell/i);
    expect(filteredUsers[0]).toBeInTheDocument();
  });

  test('display error message on failed fetch', async () => {
    const store = setupStore();
    mock.onGet(url || '').reply(500);

    await store.dispatch(fetchUsers());

    renderWithProviders(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const errorElement = await screen.findByText('Failed to fetch users');
    expect(errorElement).toBeInTheDocument();
  });
});
