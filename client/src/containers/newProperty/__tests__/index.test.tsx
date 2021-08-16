import { render, screen, waitFor } from '../../../utils/test-utils';

import NewPropertyContainer from '..';

import fetcher from '../../../utils/fetcher';
import { PROPERTIES_ENDPOINT } from '../../../constants/endpoints';
import { IAddress, RequestMethods, RequestStatus } from '../../../types';
import userEvent from '@testing-library/user-event';
import { HOME } from '../../../constants/routes';

jest.mock('../../../utils/fetcher');

jest.mock('../../../components/loading', () => () => <div>Loading</div>);

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: mockHistoryPush,
	}),
}));

const fetchData = [
	{ type: 'address', tekst: 'aa 35' },
	{ type: 'address', tekst: 'aa 40' },
	{ type: 'address', tekst: 'aa 40a' },
	{ type: 'address', tekst: 'ab 30' },
	{ type: 'address', tekst: 'ac 50' },
];

describe('NewPropertyContainer', () => {
	it('should render correctly', async () => {
		const { container } = render(<NewPropertyContainer />);

		await waitFor(() => {
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	it('should show a disabled button', () => {
		render(<NewPropertyContainer />);

		expect(screen.getByRole('button', { name: /add/i })).toBeDisabled();
	});

	it('should show the addresses in the dropdown, filter while the user types and call the fetcher', async () => {
		(fetcher as jest.Mock).mockImplementationOnce(() =>
			Promise.resolve({ data: fetchData, status: RequestStatus.Resolved })
		);

		(fetcher as jest.Mock).mockImplementationOnce(() =>
			Promise.resolve({
				data: fetchData.filter(item => item.tekst.includes('aa')),
				status: RequestStatus.Resolved,
			})
		);

		(fetcher as jest.Mock).mockImplementationOnce(() =>
			Promise.resolve({
				data: fetchData.filter(item => item.tekst.includes('aa 40')),
				status: RequestStatus.Resolved,
			})
		);

		(fetcher as jest.Mock).mockImplementationOnce(() => Promise.resolve());

		render(<NewPropertyContainer />);

		expect(fetcher).toHaveBeenCalledTimes(0);

		const addButton = screen.getByRole('button', { name: /add/i });
		expect(addButton).toBeDisabled();

		const editButton = screen.getByRole('button', { name: /edit/i });
		expect(editButton).toBeDisabled();

		const input = screen.getByPlaceholderText(/enter address/i);

		await waitFor(() => {
			userEvent.type(input, 'a');
			expect(fetcher).toHaveBeenCalledTimes(1);
			expect((fetcher as jest.Mock).mock.calls[0][0]).toStrictEqual({
				url: `${process.env.REACT_APP_DAWA_API_ENDPOINT}a&caretpos=18&fuzzy=`,
			});
		});

		await waitFor(() => {
			userEvent.type(input, 'a');
			expect(fetcher).toHaveBeenCalledTimes(2);
			expect((fetcher as jest.Mock).mock.calls[1][0]).toStrictEqual({
				url: `${process.env.REACT_APP_DAWA_API_ENDPOINT}aa&caretpos=18&fuzzy=`,
			});
		});

		expect(screen.getAllByRole('option')).toHaveLength(3);
		const selectedOption = screen.getByRole('option', { name: 'aa 40' });
		userEvent.click(selectedOption);
		expect(editButton).not.toBeDisabled();

		userEvent.type(screen.getByPlaceholderText(/enter tenant/i), 'M');
		userEvent.type(screen.getByPlaceholderText(/enter room/i), '2');
		userEvent.type(screen.getByPlaceholderText(/enter size/i), '2');
		userEvent.type(screen.getByPlaceholderText(/enter utilities/i), 'c');
		expect(addButton).not.toBeDisabled();

		userEvent.click(editButton);
		expect(addButton).toBeDisabled();

		userEvent.type(input, 'a');

		await waitFor(() => {
			expect(fetcher).toHaveBeenCalledTimes(3);
			expect((fetcher as jest.Mock).mock.calls[2][0]).toStrictEqual({
				url: `${process.env.REACT_APP_DAWA_API_ENDPOINT}aa 40a&caretpos=18&fuzzy=`,
			});
		});

		const newSelectedOption = screen.getByRole('option', { name: /aa 40a/i });
		userEvent.click(newSelectedOption);

		expect(addButton).not.toBeDisabled();

		userEvent.click(addButton);
		expect(fetcher).toHaveBeenCalledTimes(4);
		expect((fetcher as jest.Mock).mock.calls[3][0]).toStrictEqual({
			url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}`,
			method: RequestMethods.POST,
			body: {
				address: 'aa 40a',
				rooms: 12,
				size: '2',
				tenantName: 'M',
				utilities: 'c',
			},
		});

		await waitFor(() => {
			expect(mockHistoryPush).toHaveBeenCalledTimes(1);
			expect(mockHistoryPush).toHaveBeenCalledWith(HOME);
		});
	});
});
