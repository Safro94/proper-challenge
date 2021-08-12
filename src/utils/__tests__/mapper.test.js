const mapProperties = require('../mapper');

describe('Mapper', () => {
	it('should return an array of objects mapped correctly when mapProperties is called', () => {
		const properties = [
			{
				address: 'abc',
				size: '36mt2',
				rooms: 3,
				utilities: 'abc',
				tenantName: 'Matias',
				createdAt: Date.now,
				updatedAt: Date.now,
			},
		];

		const expectedResult = [
			{
				address: 'abc',
				size: '36mt2',
				rooms: 3,
				utilities: 'abc',
				tenantName: 'Matias',
			},
		];

		const result = mapProperties(properties);

		expect(result).toStrictEqual(expectedResult);
	});
});
