import { HOME, NEW_PROPERTY, PROPERTY_DETAIL } from '../routes';

describe('Routes', () => {
	it('should return the home route', () => {
		const expectedResult = '/';
		expect(HOME).toBe(expectedResult);
	});

	it('should return the detail route', () => {
		const expectedResult = '/property/:propertyId';
		expect(PROPERTY_DETAIL).toBe(expectedResult);
	});

	it('should return the new property route', () => {
		const expectedResult = '/property/add';
		expect(NEW_PROPERTY).toBe(expectedResult);
	});
});
