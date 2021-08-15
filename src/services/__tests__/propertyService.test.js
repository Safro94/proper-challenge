const propertyService = require('../propertyService');
const { mapProperties } = require('../../utils/mapper');

const {
	get,
	getById,
	add,
	deleteById,
} = require('../../integration/propertyClient');

const {
	mappedProperties,
	mockedProperties,
	mockedProperty,
} = require('../../utils/test-utils');

jest.mock('../../integration/propertyClient', () => {
	return {
		get: jest.fn(),
		getById: jest.fn(),
		add: jest.fn(),
		deleteById: jest.fn(),
	};
});

jest.mock('../../utils/mapper', () => {
	return {
		mapProperties: jest.fn(),
	};
});

describe('Property Service', () => {
	it('should return an array of mapped items when the get method is called', async () => {
		get.mockImplementation(() => mockedProperties);
		mapProperties.mockImplementation(() => mappedProperties);

		const result = await propertyService.get();

		expect(result).toStrictEqual(mappedProperties);

		expect(get).toHaveBeenCalledTimes(1);
		expect(get).toHaveBeenCalledWith();

		expect(mapProperties).toHaveBeenCalledTimes(1);
		expect(mapProperties).toHaveBeenCalledWith(mockedProperties);
	});

	it('should return null if getById does not find the item', async () => {
		const id = 1;
		getById.mockImplementation(() => null);

		const result = await propertyService.getById(id);

		expect(result).toBeNull();

		expect(getById).toHaveBeenCalledTimes(1);
		expect(getById).toHaveBeenCalledWith(id);

		expect(mapProperties).toHaveBeenCalledTimes(0);
	});

	it('should return a mapped object if getById finds the item', async () => {
		const id = 1;
		getById.mockImplementation(() => mockedProperty);
		mapProperties.mockImplementation(() => [...mappedProperties]);

		const result = await propertyService.getById(id);

		expect(result).toStrictEqual(mappedProperties.pop());

		expect(getById).toHaveBeenCalledTimes(1);
		expect(getById).toHaveBeenCalledWith(id);

		expect(mapProperties).toHaveBeenCalledTimes(1);
		expect(mapProperties).toHaveBeenCalledWith([mockedProperty]);
	});

	it('should return the result of the add method', async () => {
		const expectedResult = 1;
		add.mockImplementation(() => expectedResult);

		const result = await propertyService.add(mockedProperty);

		expect(result).toStrictEqual(expectedResult);

		expect(add).toHaveBeenCalledTimes(1);
		expect(add).toHaveBeenCalledWith(mockedProperty);
	});

	it('should return the result of the deleteById method', async () => {
		const id = 1;
		const expectedResult = '';
		deleteById.mockImplementation(() => expectedResult);

		const result = await propertyService.delete(id);

		expect(result).toStrictEqual(expectedResult);

		expect(deleteById).toHaveBeenCalledTimes(1);
		expect(deleteById).toHaveBeenCalledWith(id);
	});
});
