import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import https from 'https';

const opts: AxiosRequestConfig = {
	httpsAgent: new https.Agent({ rejectUnauthorized: false }),
};

const interceptorError = (error: AxiosError) => Promise.reject(error.response);

const instance = axios.create(opts);

instance.interceptors.response.use(response => response, interceptorError);
instance.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export default instance;
