import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../utils/test-utils';

import Property from '..';

import fetcher from '../../../utils/fetcher';

import { PROPERTY_DETAIL } from '../../../constants/routes';
import { PROPERTIES_ENDPOINT } from '../../../constants/endpoints';
import { RequestMethods } from '../../../types';

jest.mock('../../../utils/fetcher');

describe('Property', () => {
	const index = 1;
	const getItemProps = () => {};
	const property = {
		id: 1,
		tenantName: 'Matias',
		rooms: 3,
		size: '40mt2',
		address: 'abc',
		utilities: 'def',
	};

	it('should render correctly', () => {
		const { container } = render(
			<Property item={property} index={index} getItemProps={getItemProps} />
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	describe('Property functionality', () => {
		const { reload } = window.location;

		beforeAll(() => {
			Object.defineProperty(window, 'location', {
				writable: true,
				value: { reload: jest.fn() },
			});
		});

		afterAll(() => {
			window.location.reload = reload;
		});

		beforeEach(() => {
			render(
				<Property item={property} index={index} getItemProps={getItemProps} />
			);

			(fetcher as jest.Mock).mockImplementation(() => Promise.resolve());
		});

		it('should have a link with the correct url', () => {
			expect(screen.getByRole('link')).toBeInTheDocument();
			expect((screen.getByRole('link') as HTMLLinkElement).href).toBe(
				`http://localhost${PROPERTY_DETAIL.replace(
					':propertyId',
					`${property.id}`
				)}`
			);
		});

		it('should call handleDeleteProperty, call the fetcher and reload the window', async () => {
			const button = screen.getByRole('button');
			expect(button).toBeInTheDocument();
			expect(fetcher).not.toHaveBeenCalled();

			userEvent.click(button);

			await waitFor(() => {
				expect(fetcher).toHaveBeenCalledTimes(1);
				expect(fetcher).toHaveBeenCalledWith({
					url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${property.id}`,
					method: RequestMethods.DELETE,
				});

				expect(window.location.reload).toHaveBeenCalledTimes(1);
			});
		});
	});
});
