const mapProperties = properties =>
	properties.map(({ id, address, size, rooms, utilities, tenantName }) => ({
		id,
		address,
		size,
		rooms,
		utilities,
		tenantName,
	}));

module.exports = { mapProperties };
