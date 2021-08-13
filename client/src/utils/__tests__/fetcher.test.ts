import fetcher from '../fetcher';
import axios from '../axios';

jest.mock('../axios');

describe('Fetcher', () => {
	it('should return a response', async () => {
		const data = { ports: [] };
		(axios.get as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data })
		);

		const result = await fetcher({
			url: 'test',
		});

		expect(axios.get).toBeCalledTimes(1);
		expect((axios.get as jest.Mock).mock.calls[0][0]).toBe('test');
		expect(result).toEqual(data);
	});

	it('should throw an error', async () => {
		const error = new Error('error');
		(axios.get as jest.Mock).mockImplementation(() => Promise.reject(error));

		await expect(fetcher({ url: 'test' })).rejects.toThrow();
	});
});
