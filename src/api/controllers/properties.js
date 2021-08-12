const propertyService = require('../../services/propertyService');

const getProperties = async (req, res) => {
	const result = await propertyService.get();
	res.json(result);
};

const getPropertyById = async (req, res) => {
	const { id } = req.params;
	const result = await propertyService.getById(id);
	res.json(result);
};

const addProperty = async (req, res) => {
	const { address, size, rooms, utilities, tenantName } = req.body;
	const property = {
		address,
		size,
		rooms,
		utilities,
		tenantName,
	};

	const result = await propertyService.add(property);
	res.json(result);
};

const deleteProperty = async (req, res) => {
	const { id } = req.params;
	const result = await propertyService.delete(id);
	res.json(result);
};

module.exports = {
	getProperties,
	getPropertyById,
	addProperty,
	deleteProperty,
};
