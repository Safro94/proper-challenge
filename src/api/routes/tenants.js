const express = require('express');
const asyncHandler = require('express-async-handler');
const {
	getTenants,
	getTenantById,
	addTenant,
	deleteTenant,
} = require('../controllers/tenants');

const router = express.Router();

/*
 * GET request to api/tenants
 */
router.get('/', asyncHandler(getTenants));

/*
 * GET request to api/tenants/:id
 */
router.get('/:id', asyncHandler(getTenantById));

/*
 * POST request to api/tenants
 */
router.post('/', asyncHandler(addTenant));

/*
 * DELETE request to api/tenants/:id
 */
router.delete('/:id', asyncHandler(deleteTenant));

module.exports = router;
