import { render, screen, waitFor } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';

import DetailContainer from '..';

import fetcher from '../../../utils/fetcher';

import { PROPERTIES_ENDPOINT } from '../../../constants/endpoints';
import { HOME } from '../../../constants/routes';

import { RequestMethods, RequestStatus } from '../../../types';

jest.mock('../../../components/loading', () => () => <div>Loading</div>);
jest.mock('../../../utils/fetcher');

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
	useParams: () => ({
		propertyId: 1,
	}),
	useHistory: () => ({
		push: mockHistoryPush,
	}),
}));

const property = {
	id: 1,
	tenantName: 'Matias',
	rooms: 3,
	size: '40mt2',
	address: 'abc',
	utilities: 'def',
};

describe('DetailContainer', () => {
	it('should render the loading when the request is not resolved yet', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ status: RequestStatus.Pending })
		);

		const { container } = render(<DetailContainer />);
		await waitFor(() => {
			expect(container.firstChild).toMatchSnapshot();
			expect(screen.getByText(/loading/i)).toBeInTheDocument();
		});
	});

	it('should render correctly when fetcher returns a property', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: property, status: RequestStatus.Resolved })
		);

		const { container } = render(<DetailContainer />);

		await waitFor(() => {
			expect(fetcher).toHaveBeenCalledTimes(1);
			expect(fetcher).toHaveBeenCalledWith({
				url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${property.id}`,
			});
		});

		await waitFor(() => {
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	it('should render the text when there is no property', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: null, status: RequestStatus.Resolved })
		);

		const { container } = render(<DetailContainer />);

		await waitFor(() => {
			expect(fetcher).toHaveBeenCalledTimes(1);
			expect(fetcher).toHaveBeenCalledWith({
				url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${property.id}`,
			});
		});

		await waitFor(() => {
			expect(screen.getByText(/noProperty/i)).toBeInTheDocument();
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	it('should call handleDeleteProperty and go to the home page when the delete button is clicked', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: property, status: RequestStatus.Resolved })
		);

		render(<DetailContainer />);

		await waitFor(() => {
			expect(fetcher).toHaveBeenCalledTimes(1);
		});

		const button = screen.getByRole('button', { name: /delete/i });
		expect(button).toBeInTheDocument();

		userEvent.click(button);

		await waitFor(() => {
			expect(fetcher).toHaveBeenCalledTimes(2);
			expect(fetcher).toHaveBeenCalledWith({
				url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${property.id}`,
				method: RequestMethods.DELETE,
			});
			expect(mockHistoryPush).toHaveBeenCalledTimes(1);
			expect(mockHistoryPush).toHaveBeenCalledWith(HOME);
		});
	});
});
