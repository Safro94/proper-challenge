import { RequestMethods, RequestStatus } from '../types';

import axios from './axios';

interface IFetcher {
	method?: RequestMethods;
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
	method = RequestMethods.GET,
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
		data = result.data;
		status = RequestStatus.Resolved;
	} catch (error) {
		status = RequestStatus.Rejected;
		throw error;
	}

	return { data, status };
};

export default fetcher;
