const errorHandler = require('../errorHandler');
const { mockReq, mockRes } = require('../../utils/test-utils');

describe.each([
	[200, /test error/i, 'dev', 500],
	[200, /No stack/i, 'production', 500],
	[404, /test error/i, 'dev', 404],
	[404, /No stack/i, 'production', 404],
])('Error handler', (statusCode, stack, env, expectedStatusCode) => {
	const error = new Error('test error');
	const next = jest.fn();
	const req = mockReq();
	const res = mockRes({
		statusCode,
	});

	it(`should set the status and return an object with message and ${
		env === 'production' ? 'No stack' : 'stack'
	} when the env is dev and the statusCode is ${statusCode}`, () => {
		process.env.NODE_ENV = env;

		errorHandler(error, req, res, next);

		expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
		expect(res.json).toHaveBeenCalledWith(
			expect.objectContaining({
				message: 'test error',
				stack: expect.stringMatching(stack),
			})
		);
	});

	it('should set the status and return an object with message and stack when the env is production', () => {
		process.env.NODE_ENV = 'production';

		errorHandler(error, req, res, next);

		expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
		expect(res.json).toHaveBeenCalledWith({
			message: 'test error',
			stack: 'No stack',
		});
	});
});
