import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Error from './Error';

describe('Error page should', () => {
	test('render correctly', () => {
		renderWithProviders(
			<MemoryRouter>
				<Error />
			</MemoryRouter>
		);

		const errorCodeElement = screen.getByRole('heading', {
			level: 1,
			name: /404/i,
		});

		const errorTitleElement = screen.getByRole('heading', {
			level: 2,
			name: /page not found/i,
		});

		const warningIcon = screen.getByTestId('error-icon');

		const backHomeLink = screen.getByRole('link', {
			name: /back to home/i,
		});

		expect(errorCodeElement).toBeInTheDocument();
		expect(errorTitleElement).toBeInTheDocument();
		expect(warningIcon).toBeInTheDocument();
		expect(backHomeLink).toHaveAttribute('href', '/');
	});
});
