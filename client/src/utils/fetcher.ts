import { AxiosError, AxiosResponse } from 'axios';

import axios from './axios';

interface IFetcher {
	method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
	url: string;
	data?: null | any;
}

const fetcher = async ({
	method = 'get',
	url,
	data = null,
}: IFetcher): Promise<any> => {
	return (axios[method] as any)(url, JSON.parse(data)).then(
		(response: AxiosResponse) => response.data,
		(error: AxiosError) => {
			throw error;
		}
	);
};

export default fetcher;
