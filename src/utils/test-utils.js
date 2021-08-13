const mockReq = params => {
	const req = { ...params };
	return req;
};

const mockRes = params => {
	const res = { ...params };
	res.json = jest.fn().mockReturnValue(res);
	res.status = jest.fn().mockReturnValue(res);

	return res;
};

const mockedProperty = {
	id: 1,
	address: 'abc',
	size: '36mt2',
	rooms: 3,
	utilities: 'abc',
	tenantName: 'Matias',
	createdAt: Date.now,
	updatedAt: Date.now,
};

const mockedProperties = [{ ...mockedProperty }];

const mappedProperties = [
	{
		id: 1,
		address: 'abc',
		size: '36mt2',
		rooms: 3,
		utilities: 'abc',
		tenantName: 'Matias',
	},
];

module.exports = {
	mockReq,
	mockRes,
	mockedProperty,
	mockedProperties,
	mappedProperties,
};
