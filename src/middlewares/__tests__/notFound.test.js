const notFound = require('../notFound');
const { mockReq, mockRes } = require('../../utils/test-utils');

describe('Not found', () => {
	it('should set the status to 404 and call next with the error', () => {
		const next = jest.fn();
		const req = mockReq({
			originalUrl: '/test',
		});
		const res = mockRes();
		const errorMessage = new Error(`Not found ${req.originalUrl}`);

		notFound(req, res, next);

		expect(res.status).toHaveBeenCalledWith(404);
		expect(next).toHaveBeenCalledWith(errorMessage);
	});
});
