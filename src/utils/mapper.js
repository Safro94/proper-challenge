const mapProperties = properties =>
	properties.map(({ address, size, rooms, utilities, tenantName }) => ({
		address,
		size,
		rooms,
		utilities,
		tenantName,
	}));

module.exports = { mapProperties };
