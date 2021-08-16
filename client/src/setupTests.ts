import '@testing-library/jest-dom';

beforeEach(() => {
	jest.clearAllMocks();
});

process.env.REACT_APP_SERVER_URL = 'http://test:9000';
process.env.REACT_APP_DAWA_API_ENDPOINT = 'http://test:5000';
