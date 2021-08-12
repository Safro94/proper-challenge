const { mapProperties } = require('../utils/mapper');
const {
	get,
	getById,
	add,
	deleteById,
} = require('../integration/propertyClient');

class PropertyService {
	async get() {
		const items = await get();
		return mapProperties(items);
	}

	async getById(id) {
		const item = await getById(id);
		if (!item) return {};

		return mapProperties([item]).pop();
	}

	async add(property) {
		return await add(property);
	}

	async delete(id) {
		return await deleteById(id);
	}
}

module.exports = new PropertyService();
