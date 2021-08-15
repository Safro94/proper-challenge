import { render, screen, waitFor } from '../../../utils/test-utils';

import PropertiesContainer from '..';

import fetcher from '../../../utils/fetcher';
import { PROPERTIES_ENDPOINT } from '../../../constants/endpoints';
import { RequestStatus } from '../../../types';

jest.mock('../../../components/loading', () => () => <div>Loading</div>);
jest.mock('../../../utils/fetcher');

const properties = [
	{
		id: 1,
		tenantName: 'Matias',
		rooms: 3,
		size: '40mt2',
		address: 'abc',
		utilities: 'def',
	},
	{
		id: 2,
		tenantName: 'Charles',
		rooms: 3,
		size: '40mt2',
		address: 'abc',
		utilities: 'def',
	},
];

describe('PropertiesContainer', () => {
	it('should render the loading when the request is not resolved yet', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ status: RequestStatus.Pending })
		);

		const { container } = render(<PropertiesContainer />);

		await waitFor(() => {
			expect(container.firstChild).toMatchSnapshot();
			expect(screen.getByText(/loading/i)).toBeInTheDocument();
		});
	});

	it('should render correctly when fetcher returns properties', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: properties, status: RequestStatus.Resolved })
		);

		const { container } = render(<PropertiesContainer />);

		await waitFor(() => {
			expect(fetcher).toHaveBeenCalledTimes(1);
			expect(fetcher).toHaveBeenCalledWith({
				url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}`,
			});
		});

		await waitFor(() => {
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	it('should render the text when there are no properties', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: [], status: RequestStatus.Resolved })
		);

		const { container } = render(<PropertiesContainer />);

		await waitFor(() => {
			expect(fetcher).toHaveBeenCalledTimes(1);
			expect(fetcher).toHaveBeenCalledWith({
				url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}`,
			});
		});

		await waitFor(() => {
			expect(screen.getByText(/noProperties/i)).toBeInTheDocument();
			expect(container.firstChild).toMatchSnapshot();
		});
	});
});
