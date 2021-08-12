const {
	getProperties,
	getPropertyById,
	addProperty,
	deleteProperty,
} = require('../properties');
const propertyService = require('../../../services/propertyService');

const {
	mockReq,
	mockRes,
	mockedProperty,
	mappedProperties,
} = require('../../../utils/test-utils');

jest.mock('../../../services/propertyService', () => {
	return {
		get: jest.fn(),
		getById: jest.fn(),
		add: jest.fn(),
		delete: jest.fn(),
	};
});

describe('Property Controller', () => {
	const res = mockRes();
	const req = mockReq({
		params: { id: 1 },
		body: mockedProperty,
	});

	it('should call the service and return the data provided by the service when get is called', async () => {
		propertyService.get.mockImplementation(() => mappedProperties);

		await getProperties(req, res);

		expect(propertyService.get).toHaveBeenCalledTimes(1);
		expect(propertyService.get).toHaveBeenCalledWith();

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith(mappedProperties);
	});

	it('should call the service and return the data provided by the service when getPropertyById is called', async () => {
		propertyService.getById.mockImplementation(() => mockedProperty);

		await getPropertyById(req, res);

		expect(propertyService.getById).toHaveBeenCalledTimes(1);
		expect(propertyService.getById).toHaveBeenCalledWith(req.params.id);

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith(mockedProperty);
	});

	it('should call the service and return the data provided by the service when addProperty is called', async () => {
		const property = {
			address: 'abc',
			size: '36mt2',
			rooms: 3,
			utilities: 'abc',
			tenantName: 'Matias',
		};
		propertyService.add.mockImplementation(() => 1);

		await addProperty(req, res);

		expect(propertyService.add).toHaveBeenCalledTimes(1);
		expect(propertyService.add).toHaveBeenCalledWith(property);

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith(1);
	});

	it('should call the service and return the data provided by the service when deleteProperty is called', async () => {
		propertyService.delete.mockImplementation(() => null);

		await deleteProperty(req, res);

		expect(propertyService.delete).toHaveBeenCalledTimes(1);
		expect(propertyService.delete).toHaveBeenCalledWith(req.params.id);

		expect(res.json).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith(null);
	});
});
