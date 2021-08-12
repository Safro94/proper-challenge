const Property = require('../models/property');

const get = async () => {
	const items = await Property.findAll();
	return items;
};

const getById = async id => {
	const item = await Property.findByPk(id);
	return item;
};

const add = async ({ address, size, rooms, utilities, tenantName }) => {
	const item = await Property.create({
		address,
		size,
		rooms,
		utilities,
		tenantName,
	});

	return item.id;
};

const deleteById = async id => {
	await Property.destroy({
		where: {
			id,
		},
	});
};

module.exports = {
	get,
	getById,
	add,
	deleteById,
};
