import { fetchUsers } from './usersSlice';
import { setupStore } from '../../app/store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const url = import.meta.env.VITE_API_URL;

// Create a mock of axios
const mock = new MockAdapter(axios);

describe('UserSlice should', () => {
	beforeEach(() => {
		mock.reset();
	});

	let store = setupStore();

	test('initially set status to idle', () => {
		const state = store.getState().users;

		expect(state.status).toBe('idle');
	});

	test('handle fetchUsers thunk', async () => {
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
		mock.onGet(url).reply(200, users);

		await store.dispatch(fetchUsers());

		const state = store.getState().users;

		expect(state.status).toBe('succeeded');
		expect(state.users).toEqual(users);
	});

	test('should handle rejected fetchUsers', async () => {
		mock.onGet(url).reply(500);

		await store.dispatch(fetchUsers());

		const state = store.getState().users;
		expect(state.status).toBe('failed');
	});
});
