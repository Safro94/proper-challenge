import { PROPERTIES_ENDPOINT } from '../endpoints';

describe('Endpoints', () => {
	it('should return the PROPERTIES_ENDPOINT', () => {
		const expectedEndpoint = '/api/properties';
		expect(PROPERTIES_ENDPOINT).toBe(expectedEndpoint);
	});
});
