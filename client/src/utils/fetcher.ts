import { AxiosError, AxiosResponse } from 'axios';
import { RequestStatus } from '../types';

import axios from './axios';

interface IFetcher {
	method?: 'get' | 'post' | 'put' | 'delete';
	url: string;
	data?: null | any;
	body?: null | any;
	headers?: null | any;
}

interface IResponse {
	data: any;
	status: RequestStatus;
}

const fetcher = async ({
	method = 'get',
	url,
	body = null,
	headers = null,
}: IFetcher): Promise<IResponse> => {
	let data;
	let status = RequestStatus.Pending;

	try {
		const result = await axios[method](
			url,
			JSON.parse(headers),
			JSON.parse(body)
		);
		console.log(result.data);

		data = result.data;
		status = RequestStatus.Resolved;
	} catch (error) {
		console.log(error);

		status = RequestStatus.Rejected;
		throw error;
	}

	return { data, status };

	// return (axios[method] as any)(url, JSON.parse(data)).then(
	// 	(response: AxiosResponse) => response.data,
	// 	(error: AxiosError) => {
	// 		throw error;
	// 	}
	// );
};

export default fetcher;
