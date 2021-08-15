import { mapDawaResponse } from '../mapper';

describe('Mapper', () => {
	it('should return an array of objects when mapDawaResponse is called', () => {
		const data = [
			{
				type: 'type',
				tekst: 'abc',
				caretpos: 1,
				forslagstekst: 1,
				data: {},
			},
		];

		const expectedResult = [{ type: 'type', text: 'abc' }];

		const result = mapDawaResponse(data);

		expect(result).toStrictEqual(expectedResult);
	});
});
