const getProperties = async (req, res) => {
	res.json('get all');
};

const getPropertyById = async (req, res) => {
	const { id } = req.params;
	res.json('gett by id');
};

const addProperty = async (req, res) => {
	res.json('add');
};

const deleteProperty = async (req, res) => {
	const { id } = req.params;
	res.json('delete');
};

module.exports = {
	getProperties,
	getPropertyById,
	addProperty,
	deleteProperty,
};
