const express = require('express');
const asyncHandler = require('express-async-handler');
const {
	getProperties,
	getPropertyById,
	addProperty,
	deleteProperty,
} = require('../controllers/properties');

const router = express.Router();

/*
 * GET request to api/properties
 */
router.get('/', asyncHandler(getProperties));

/*
 * GET request to api/properties/:id
 */
router.get('/:id', asyncHandler(getPropertyById));

/*
 * POST request to api/properties
 */
router.post('/', asyncHandler(addProperty));

/*
 * DELETE request to api/properties/:id
 */
router.delete('/:id', asyncHandler(deleteProperty));

module.exports = router;
