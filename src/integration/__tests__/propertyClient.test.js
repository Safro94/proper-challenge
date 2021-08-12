const { get, getById, add, deleteById } = require('../propertyClient');
const Property = require('../../models/property');
const { mockedProperties, mockedProperty } = require('../../utils/test-utils');

const mockFindAllResult = mockedProperties;
const mockFindByPkResult = mockedProperty;
const mockCreateResult = { ...mockedProperty, id: 1 };
jest.mock('../../models/property', () => {
	return {
		findAll: jest.fn(),
		findByPk: jest.fn(),
		create: jest.fn(),
		destroy: jest.fn().mockResolvedValue(null),
	};
});

describe('Property Client', () => {
	const id = 1;

	it('should call findAll and return the data when get is called', async () => {
		Property.findAll.mockResolvedValue(mockFindAllResult);
		const result = await get();

		expect(result).toStrictEqual(mockFindAllResult);

		expect(Property.findAll).toHaveBeenCalledTimes(1);
		expect(Property.findAll).toHaveBeenCalledWith();
	});

	it('should call findByPk and return the data when getById is called', async () => {
		Property.findByPk.mockResolvedValue(mockFindByPkResult);
		const result = await getById(id);

		expect(result).toStrictEqual(mockFindByPkResult);

		expect(Property.findByPk).toHaveBeenCalledTimes(1);
		expect(Property.findByPk).toHaveBeenCalledWith(id);
	});

	it('should call create and return the data when add is called', async () => {
		const property = {
			address: 'abc',
			size: '36mt2',
			rooms: 3,
			utilities: 'abc',
			tenantName: 'Matias',
		};
		Property.create.mockResolvedValue(mockCreateResult);
		const result = await add(property);

		expect(result).toStrictEqual(id);

		expect(Property.create).toHaveBeenCalledTimes(1);
		expect(Property.create).toHaveBeenCalledWith(property);
	});

	it('should call destroy when deleteById is called', async () => {
		Property.destroy.mockResolvedValue(null);
		await deleteById(id);

		expect(Property.destroy).toHaveBeenCalledTimes(1);
		expect(Property.destroy).toHaveBeenCalledWith({
			where: {
				id,
			},
		});
	});
});
