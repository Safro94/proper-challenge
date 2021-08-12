const { mapProperties } = require('../mapper');
const { mockedProperties, mappedProperties } = require('../test-utils');

describe('Mapper', () => {
	it('should return an array of objects mapped correctly when mapProperties is called', () => {
		const result = mapProperties(mockedProperties);

		expect(result).toStrictEqual(mappedProperties);
	});
});
